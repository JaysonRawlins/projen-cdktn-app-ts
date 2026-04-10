import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { synthSnapshot } from 'projen/lib/util/synth';

import { CdktnTypeScriptApp } from '../src';

describe('cdktn deps', () => {
  test('uses cdktn with pinned version', () => {
    const project = new CdktnTypeScriptApp({
      cdktnVersion: '0.22.0',
      defaultReleaseBranch: 'main',
      name: 'test',
    });
    const snap = synthSnapshot(project);
    expect(snap['package.json'].dependencies).toStrictEqual({
      cdktn: '^0.22.0',
      constructs: '*',
    });
  });

  test('uses cdktn with pinned constructs version', () => {
    const project = new CdktnTypeScriptApp({
      cdktnVersion: '0.22.0',
      constructsVersion: '10.4.2',
      defaultReleaseBranch: 'main',
      name: 'test',
    });
    const snap = synthSnapshot(project);
    expect(snap['package.json'].dependencies).toStrictEqual({
      cdktn: '^0.22.0',
      constructs: '^10.4.2',
    });
  });

  test('uses cdktn-cli as devDep', () => {
    const project = new CdktnTypeScriptApp({
      cdktnVersion: '0.22.0',
      defaultReleaseBranch: 'main',
      name: 'test',
    });
    const snap = synthSnapshot(project);
    expect(snap['package.json'].devDependencies).toHaveProperty(
      'cdktn-cli',
      '0.22.0',
    );
  });
});

describe('sample code', () => {
  test('generates sample with cdktn imports', () => {
    const project = new CdktnTypeScriptApp({
      defaultReleaseBranch: 'main',
      name: 'test',
    });
    const snap = synthSnapshot(project);
    expect(
      snap['src/main.ts'].indexOf(
        "import { App, TerraformStack } from 'cdktn'",
      ),
    ).not.toEqual(-1);
    expect(
      snap['src/main.ts'].indexOf("import { Construct } from 'constructs'"),
    ).not.toEqual(-1);
  });

  test('generates test with cdktn imports', () => {
    const project = new CdktnTypeScriptApp({
      defaultReleaseBranch: 'main',
      name: 'test',
    });
    const snap = synthSnapshot(project);
    expect(
      snap['test/main.test.ts'].indexOf("import { Testing } from 'cdktn'"),
    ).not.toEqual(-1);
  });

  test('generates sample code when src and test directories exist but are empty', () => {
    const outdir = fs.mkdtempSync(path.join(os.tmpdir(), 'cdktn-sample-code-'));

    try {
      fs.mkdirSync(path.join(outdir, 'src'), { recursive: true });
      fs.mkdirSync(path.join(outdir, 'test'), { recursive: true });

      const project = new CdktnTypeScriptApp({
        defaultReleaseBranch: 'main',
        name: 'test',
        outdir,
      });

      const previousDisablePost = process.env.PROJEN_DISABLE_POST;
      process.env.PROJEN_DISABLE_POST = 'true';

      try {
        project.synth();
      } finally {
        if (previousDisablePost === undefined) {
          delete process.env.PROJEN_DISABLE_POST;
        } else {
          process.env.PROJEN_DISABLE_POST = previousDisablePost;
        }
      }

      expect(fs.existsSync(path.join(outdir, 'src', 'main.ts'))).toBe(true);
      expect(fs.existsSync(path.join(outdir, 'test', 'main.test.ts'))).toBe(
        true,
      );
    } finally {
      fs.rmSync(outdir, { recursive: true, force: true });
    }
  });
});

describe('cdktf.json config', () => {
  test('default context', () => {
    const project = new CdktnTypeScriptApp({
      defaultReleaseBranch: 'main',
      name: 'test',
    });
    const snap = synthSnapshot(project);
    expect(snap['cdktf.json'].context).toStrictEqual({
      excludeStackIdFromLogicalIds: 'true',
      allowSepCharsInLogicalIds: 'true',
    });
  });

  test('language is typescript', () => {
    const project = new CdktnTypeScriptApp({
      defaultReleaseBranch: 'main',
      name: 'test',
    });
    const snap = synthSnapshot(project);
    expect(snap['cdktf.json'].language).toStrictEqual('typescript');
  });

  test('custom providers', () => {
    const project = new CdktnTypeScriptApp({
      defaultReleaseBranch: 'main',
      name: 'test',
      terraformProviders: ['aws@~>5.0'],
    });
    const snap = synthSnapshot(project);
    expect(snap['cdktf.json'].terraformProviders).toStrictEqual(['aws@~>5.0']);
  });
});

describe('synth task', () => {
  test('adds a "synth" task using cdktn', () => {
    const project = new CdktnTypeScriptApp({
      name: 'hello',
      defaultReleaseBranch: 'main',
    });
    const files = synthSnapshot(project);
    expect(files['.projen/tasks.json'].tasks.synth).toStrictEqual({
      name: 'synth',
      description: 'Synthesizes your cdktn app into cdktf.out',
      steps: [{ exec: 'cdktn synth' }],
    });
  });

  test('spawns a "synth" post-compile task', () => {
    const project = new CdktnTypeScriptApp({
      name: 'hello',
      defaultReleaseBranch: 'main',
    });
    const files = synthSnapshot(project);
    expect(
      files['.projen/tasks.json'].tasks['post-compile'].steps,
    ).toStrictEqual([{ spawn: 'synth' }]);
  });
});

describe('watch task', () => {
  test('adds a "watch" task using cdktn', () => {
    const project = new CdktnTypeScriptApp({
      name: 'hello',
      defaultReleaseBranch: 'main',
    });
    const files = synthSnapshot(project);
    expect(files['.projen/tasks.json'].tasks.watch).toStrictEqual({
      name: 'watch',
      description:
        'Watches changes in your source code and rebuilds and deploys to the current account',
      steps: [{ exec: 'cdktn watch' }],
    });
  });
});

describe('other tasks', () => {
  test('adds "get" task', () => {
    const project = new CdktnTypeScriptApp({
      name: 'hello',
      defaultReleaseBranch: 'main',
    });
    const files = synthSnapshot(project);
    expect(files['.projen/tasks.json'].tasks.get.steps).toStrictEqual([
      { exec: 'cdktn get' },
    ]);
  });

  test('adds "deploy" task', () => {
    const project = new CdktnTypeScriptApp({
      name: 'hello',
      defaultReleaseBranch: 'main',
    });
    const files = synthSnapshot(project);
    expect(files['.projen/tasks.json'].tasks.deploy.steps).toStrictEqual([
      { exec: 'cdktn deploy', receiveArgs: true },
    ]);
  });

  test('adds "destroy" task', () => {
    const project = new CdktnTypeScriptApp({
      name: 'hello',
      defaultReleaseBranch: 'main',
    });
    const files = synthSnapshot(project);
    expect(files['.projen/tasks.json'].tasks.destroy.steps).toStrictEqual([
      { exec: 'cdktn destroy', receiveArgs: true },
    ]);
  });

  test('adds "diff" task', () => {
    const project = new CdktnTypeScriptApp({
      name: 'hello',
      defaultReleaseBranch: 'main',
    });
    const files = synthSnapshot(project);
    expect(files['.projen/tasks.json'].tasks.diff.steps).toStrictEqual([
      { exec: 'cdktn diff' },
    ]);
  });

  test('sets TERRAFORM_BINARY_NAME env on tasks when terraformBinaryName is tofu', () => {
    const project = new CdktnTypeScriptApp({
      name: 'hello',
      defaultReleaseBranch: 'main',
      terraformBinaryName: 'tofu',
    });
    const files = synthSnapshot(project);
    const tasks = files['.projen/tasks.json'].tasks;
    expect(tasks.synth.env).toStrictEqual({
      TERRAFORM_BINARY_NAME: 'tofu',
    });
    expect(tasks.deploy.env).toStrictEqual({
      TERRAFORM_BINARY_NAME: 'tofu',
    });
    expect(tasks.destroy.env).toStrictEqual({
      TERRAFORM_BINARY_NAME: 'tofu',
    });
    expect(tasks.get.env).toStrictEqual({ TERRAFORM_BINARY_NAME: 'tofu' });
    expect(tasks.diff.env).toStrictEqual({ TERRAFORM_BINARY_NAME: 'tofu' });
    expect(tasks.watch.env).toStrictEqual({
      TERRAFORM_BINARY_NAME: 'tofu',
    });
  });

  test('does not set TERRAFORM_BINARY_NAME when using default terraform', () => {
    const project = new CdktnTypeScriptApp({
      name: 'hello',
      defaultReleaseBranch: 'main',
    });
    const files = synthSnapshot(project);
    expect(files['.projen/tasks.json'].tasks.synth.env).toBeUndefined();
  });

  test('writes terraformBinaryName to cdktf.json', () => {
    const project = new CdktnTypeScriptApp({
      name: 'hello',
      defaultReleaseBranch: 'main',
      terraformBinaryName: 'tofu',
    });
    const files = synthSnapshot(project);
    expect(files['cdktf.json'].terraformBinaryName).toBe('tofu');
  });

  test('removes bundle from pre-compile', () => {
    const project = new CdktnTypeScriptApp({
      name: 'hello',
      defaultReleaseBranch: 'main',
    });
    const files = synthSnapshot(project);
    expect(
      files['.projen/tasks.json'].tasks['pre-compile'].steps,
    ).toBeUndefined();
  });
});
