import * as path from 'path';
import * as fs from 'fs-extra';
import { Component } from 'projen/lib/component';
import {
  TypeScriptAppProject,
  TypeScriptProjectOptions,
} from 'projen/lib/typescript';

import { CdktnConfig, CdktnConfigCommonOptions } from './cdktn-config';
import { CdktnDeps, CdktnDepsCommonOptions } from './cdktn-deps';
import { CdktnTasks } from './cdktn-tasks';

export interface CdktnTypeScriptAppOptions
  extends TypeScriptProjectOptions,
  CdktnConfigCommonOptions,
  CdktnDepsCommonOptions {
  /**
   * The CDKTN app's entrypoint (relative to the source directory, which is
   * "src" by default).
   *
   * @default "main.ts"
   */
  readonly appEntrypoint?: string;
}

/**
 * CDK Terrain app in TypeScript
 *
 * @pjid cdktn-app-ts
 */
export class CdktnTypeScriptApp extends TypeScriptAppProject {
  /**
   * The CDKTN app entrypoint
   */
  public readonly appEntrypoint: string;

  /**
   * Common CDKTN tasks.
   */
  public readonly cdktnTasks: CdktnTasks;

  /**
   * cdktf.json configuration.
   */
  public readonly cdktnConfig: CdktnConfig;

  constructor(options: CdktnTypeScriptAppOptions) {
    super({
      ...options,
      sampleCode: false,
      bundlerOptions: {
        ...options.bundlerOptions,
        addToPreCompile: false,
      },
      tsconfig: {
        ...options.tsconfig,
        compilerOptions: {
          ...options.tsconfig?.compilerOptions,
          rootDir: undefined, // force rootDir to be default, so .gen will be discovered
        },
      },
    });

    new CdktnDeps(this, options);
    this.appEntrypoint = options.appEntrypoint ?? 'main.ts';

    // CLI
    this.addDevDeps(
      options.cdktnVersion
        ? `cdktn-cli@${options.cdktnVersion}`
        : 'cdktn-cli',
    );

    // no compile step because we do all of it in typescript directly
    this.compileTask.reset();

    this.cdktnTasks = new CdktnTasks(this);

    // add synth to the build
    this.postCompileTask.spawn(this.cdktnTasks.synth);

    const tsConfigFile = this.tsconfig?.fileName;
    if (!tsConfigFile) {
      throw new Error('Expecting tsconfig.json');
    }

    this.cdktnConfig = new CdktnConfig(this, {
      app: `npx ts-node -P ${tsConfigFile} --prefer-ts-exts ${path.posix.join(
        this.srcdir,
        this.appEntrypoint,
      )}`,
      ...options,
    });

    this.gitignore.exclude('.parcel-cache/');
    this.gitignore.exclude('.gen/');

    this.npmignore?.exclude(`${this.cdktnConfig.cdktfOut}/`);
    this.npmignore?.exclude('.cdktf.staging/');

    if (this.tsconfig) {
      this.tsconfig.addExclude(this.cdktnConfig.cdktfOut);
    }

    this.addDevDeps('ts-node');
    if (options.sampleCode ?? true) {
      new SampleCode(this);
    }
  }
}

class SampleCode extends Component {
  private readonly appProject: CdktnTypeScriptApp;

  constructor(project: CdktnTypeScriptApp) {
    super(project);
    this.appProject = project;
  }

  public synthesize() {
    const outdir = this.project.outdir;
    const srcdir = path.join(outdir, this.appProject.srcdir);
    if (
      fs.pathExistsSync(srcdir) &&
      fs.readdirSync(srcdir).filter((x) => x.endsWith('.ts'))
    ) {
      return;
    }

    const srcCode = `import { App, TerraformStack } from 'cdktn';
import { Construct } from 'constructs';

export class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    // define resources here...
  }
}

const app = new App();

new MyStack(app, '${this.project.name}-dev');
// new MyStack(app, '${this.project.name}-prod');

app.synth();`;

    fs.mkdirpSync(srcdir);
    fs.writeFileSync(path.join(srcdir, this.appProject.appEntrypoint), srcCode);

    const testdir = path.join(outdir, this.appProject.testdir);
    if (
      fs.pathExistsSync(testdir) &&
      fs.readdirSync(testdir).filter((x) => x.endsWith('.ts'))
    ) {
      return;
    }

    const appEntrypointName = path.basename(
      this.appProject.appEntrypoint,
      '.ts',
    );
    const testCode = `import { Testing } from 'cdktn';
import { MyStack } from '../${this.appProject.srcdir}/${appEntrypointName}';

test('Snapshot', () => {
  const template = Testing.synthScope((scope) => {
    new MyStack(scope, 'test');
  })
  expect(template).toMatchSnapshot();
});`;

    fs.mkdirpSync(testdir);
    fs.writeFileSync(
      path.join(testdir, `${appEntrypointName}.test.ts`),
      testCode,
    );
  }
}
