import { execSync } from 'child_process';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';

const E2E_TIMEOUT = 5 * 60 * 1000; // 5 minutes

/**
 * Helper to run a shell command in a given directory, streaming output for
 * visibility in CI while still capturing it for assertions.
 */
function run(cmd: string, cwd: string): string {
  console.log(`\n>>> ${cmd}`);
  const output = execSync(cmd, {
    cwd,
    stdio: ['inherit', 'pipe', 'pipe'],
    timeout: 4 * 60 * 1000, // 4 minutes per command
    env: {
      ...process.env,
      // Ensure Terraform non-interactive mode
      TF_INPUT: '0',
    },
  });
  const text = output.toString();
  console.log(text);
  return text;
}

describe('E2E live deploy', () => {
  let tmpDir: string;

  beforeAll(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'cdktn-e2e-'));
  });

  afterAll(() => {
    // Best-effort cleanup of temp directory
    if (tmpDir && fs.existsSync(tmpDir)) {
      fs.rmSync(tmpDir, { recursive: true, force: true });
    }
  });

  it(
    'deploys, verifies, and destroys AWS resources',
    async () => {
      // ---------------------------------------------------------------
      // 1. Scaffold a minimal CDK Terrain app
      // ---------------------------------------------------------------
      const appDir = path.join(tmpDir, 'e2e-app');
      fs.mkdirSync(appDir, { recursive: true });
      fs.mkdirSync(path.join(appDir, 'src'), { recursive: true });

      // package.json
      const packageJson = {
        name: 'cdktn-e2e-test',
        version: '0.0.0',
        private: true,
        dependencies: {
          cdktn: '*',
          constructs: '*',
        },
        devDependencies: {
          '@types/node': '*',
          'cdktn-cli': '*',
          'ts-node': '*',
          'typescript': '*',
        },
      };
      fs.writeFileSync(
        path.join(appDir, 'package.json'),
        JSON.stringify(packageJson, null, 2),
      );

      // tsconfig.json
      const tsconfig = {
        compilerOptions: {
          target: 'ES2020',
          module: 'CommonJS',
          lib: ['es2020'],
          declaration: true,
          strict: true,
          esModuleInterop: true,
          resolveJsonModule: true,
          outDir: 'lib',
          skipLibCheck: true,
          types: ['node'],
        },
        include: ['src/**/*.ts', '.gen/**/*.ts'],
      };
      fs.writeFileSync(
        path.join(appDir, 'tsconfig.json'),
        JSON.stringify(tsconfig, null, 2),
      );

      // cdktf.json — the config file CDK Terrain uses
      const cdktfJson = {
        language: 'typescript',
        app: 'npx ts-node -P tsconfig.json --prefer-ts-exts src/main.ts',
        terraformProviders: ['hashicorp/aws@~>5.0'],
        context: {
          excludeStackIdFromLogicalIds: 'true',
          allowSepCharsInLogicalIds: 'true',
        },
      };
      fs.writeFileSync(
        path.join(appDir, 'cdktf.json'),
        JSON.stringify(cdktfJson, null, 2),
      );

      // src/main.ts — the actual infrastructure
      const mainTs = `
import { App, TerraformStack } from 'cdktn';
import { Construct } from 'constructs';
import { provider, sqsQueue, iamRole } from './.gen/providers/aws';

class E2ETestStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new provider.AwsProvider(this, 'aws', {
      region: 'us-east-2',
    });

    new sqsQueue.SqsQueue(this, 'queue', {
      name: 'cdktn-e2e-test-queue',
    });

    new iamRole.IamRole(this, 'role', {
      name: 'cdktn-e2e-test-role',
      assumeRolePolicy: JSON.stringify({
        Version: '2012-10-17',
        Statement: [{
          Effect: 'Deny',
          Principal: { Service: 'none.amazonaws.com' },
          Action: 'sts:AssumeRole',
        }],
      }),
    });
  }
}

const app = new App();
new E2ETestStack(app, 'e2e-test');
app.synth();
`;
      fs.writeFileSync(path.join(appDir, 'src', 'main.ts'), mainTs);

      // ---------------------------------------------------------------
      // 2. Install dependencies and generate provider bindings
      // ---------------------------------------------------------------
      run('npm install', appDir);
      run('npx cdktn get', appDir);

      // ---------------------------------------------------------------
      // 3. Deploy
      // ---------------------------------------------------------------
      let deployed = false;
      try {
        run('npx cdktn deploy --auto-approve', appDir);
        deployed = true;

        // -------------------------------------------------------------
        // 4. Verify resources with AWS SDK
        // -------------------------------------------------------------
        // Dynamic imports so that @aws-sdk packages only need to be
        // available at E2E runtime (not at compile time for this test
        // project).
        const { SQSClient, GetQueueUrlCommand, GetQueueAttributesCommand } =
          // eslint-disable-next-line @typescript-eslint/no-require-imports
          require('@aws-sdk/client-sqs');
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const { IAMClient, GetRoleCommand } = require('@aws-sdk/client-iam');

        const sqsClient = new SQSClient({ region: 'us-east-2' });
        const iamClient = new IAMClient({ region: 'us-east-2' });

        // Verify SQS queue
        const queueUrlRes = await sqsClient.send(
          new GetQueueUrlCommand({ QueueName: 'cdktn-e2e-test-queue' }),
        );
        expect(queueUrlRes.QueueUrl).toBeDefined();
        console.log('SQS queue URL:', queueUrlRes.QueueUrl);

        const queueAttrs = await sqsClient.send(
          new GetQueueAttributesCommand({
            QueueUrl: queueUrlRes.QueueUrl,
            AttributeNames: ['QueueArn'],
          }),
        );
        expect(queueAttrs.Attributes?.QueueArn).toContain(
          'cdktn-e2e-test-queue',
        );

        // Verify IAM role
        const roleRes = await iamClient.send(
          new GetRoleCommand({ RoleName: 'cdktn-e2e-test-role' }),
        );
        expect(roleRes.Role).toBeDefined();
        expect(roleRes.Role!.RoleName).toBe('cdktn-e2e-test-role');
        console.log('IAM role ARN:', roleRes.Role!.Arn);
      } finally {
        // -------------------------------------------------------------
        // 5. Destroy — always attempt cleanup
        // -------------------------------------------------------------
        if (deployed) {
          try {
            run('npx cdktn destroy --auto-approve', appDir);
          } catch (destroyErr) {
            console.error('Destroy failed:', destroyErr);
            // Do not swallow — re-throw so CI stays aware
            throw destroyErr;
          }
        }
      }

      // ---------------------------------------------------------------
      // 6. Verify resources are cleaned up
      // ---------------------------------------------------------------
      const { SQSClient: SQSClient2, GetQueueUrlCommand: GetQueueUrlCmd2 } =
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        require('@aws-sdk/client-sqs');
      const { IAMClient: IAMClient2, GetRoleCommand: GetRoleCmd2 } =
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        require('@aws-sdk/client-iam');

      const sqsCheck = new SQSClient2({ region: 'us-east-2' });
      const iamCheck = new IAMClient2({ region: 'us-east-2' });

      // SQS queue should be gone
      await expect(
        sqsCheck.send(
          new GetQueueUrlCmd2({ QueueName: 'cdktn-e2e-test-queue' }),
        ),
      ).rejects.toThrow();

      // IAM role should be gone
      await expect(
        iamCheck.send(new GetRoleCmd2({ RoleName: 'cdktn-e2e-test-role' })),
      ).rejects.toThrow();

      console.log('All resources verified as destroyed.');
    },
    E2E_TIMEOUT,
  );
});
