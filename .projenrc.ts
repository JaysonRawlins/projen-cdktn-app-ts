import { cdk } from 'projen';
import { JobPermission } from 'projen/lib/github/workflows-model';

const project = new cdk.JsiiProject({
  author: 'Jayson Rawlins',
  authorAddress: 'JaysonJ.Rawlins@gmail.com',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.9.0',
  name: '@jjrawlins/projen-cdktn-app-ts',
  projenrcTs: true,
  repositoryUrl:
    'https://github.com/JaysonRawlins/projen-cdktn-app-ts.git',
  description:
    'CDK Terrain (CDKTN) app project type for projen in TypeScript',

  peerDeps: ['projen'],
  bundledDeps: ['fs-extra'],
  devDeps: ['@types/fs-extra', 'projen'],

  releaseToNpm: true,
  npmTrustedPublishing: true,
});

// ---------- Integration test task ----------
project.addTask('test:integration', {
  description: 'Run integration tests',
  exec: 'jest --testPathPatterns=test/integration --passWithNoTests',
});

// ---------- E2E test task ----------
project.addTask('test:e2e', {
  description: 'Run E2E live deploy tests',
  exec: 'jest --testPathPatterns=test/e2e --passWithNoTests',
  env: { AWS_REGION: 'us-east-2' },
});

// Exclude integration and e2e tests from default test run
project.testTask.reset(
  'jest --passWithNoTests --updateSnapshot --testPathIgnorePatterns=test/integration --testPathIgnorePatterns=test/e2e',
);
project.testTask.spawn(project.eslint!.eslintTask);

// ---------- E2E workflow ----------
const e2e = project.github!.addWorkflow('e2e');

e2e.on({
  push: { branches: ['main'] },
  pullRequest: {},
  workflowDispatch: {},
});

e2e.addJob('e2e', {
  runsOn: ['ubuntu-latest'],
  timeoutMinutes: 15,
  permissions: {
    idToken: JobPermission.WRITE,
    contents: JobPermission.READ,
  },
  steps: [
    {
      name: 'Checkout',
      uses: 'actions/checkout@v4',
    },
    {
      name: 'Setup Node.js',
      uses: 'actions/setup-node@v4',
      with: { 'node-version': 'lts/*' },
    },
    {
      name: 'Configure AWS credentials',
      uses: 'aws-actions/configure-aws-credentials@v4',
      with: {
        'role-to-assume': '${{ secrets.AWS_GITHUB_OIDC_ROLE }}',
        'aws-region': '${{ secrets.AWS_GITHUB_OIDC_REGION }}',
      },
    },
    {
      name: 'Install dependencies',
      run: 'yarn install --check-files',
    },
    {
      name: 'Build',
      run: 'npx projen build',
    },
    {
      name: 'Run E2E tests',
      run: 'npx jest --testPathPatterns=test/e2e --passWithNoTests',
      timeoutMinutes: 10,
    },
  ],
});

project.synth();
