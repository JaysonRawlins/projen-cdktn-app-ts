import { execSync } from 'child_process';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';

// Integration tests are slow due to npm pack/install/projen synth
jest.setTimeout(120_000);

const PROJECT_ROOT = path.resolve(__dirname, '..', '..');

describe('integration: bootstrap', () => {
  let tarballPath: string;
  const tmpDirs: string[] = [];

  beforeAll(() => {
    // Build and pack the current project
    execSync('npx projen compile', {
      cwd: PROJECT_ROOT,
      stdio: 'pipe',
    });

    execSync('npx projen package:js', {
      cwd: PROJECT_ROOT,
      stdio: 'pipe',
    });

    // Find the tarball in dist/js/
    const distJsDir = path.join(PROJECT_ROOT, 'dist', 'js');
    const tarballs = fs
      .readdirSync(distJsDir)
      .filter((f) => f.endsWith('.tgz'));
    if (tarballs.length === 0) {
      throw new Error(`No tarball found in ${distJsDir}`);
    }
    tarballPath = path.join(distJsDir, tarballs[0]);
  });

  afterAll(() => {
    // Clean up all temp directories
    for (const dir of tmpDirs) {
      if (fs.existsSync(dir)) {
        fs.rmSync(dir, { recursive: true, force: true });
      }
    }
  });

  function bootstrapProject(projenrcContent: string): string {
    const tmpDir = fs.mkdtempSync(
      path.join(os.tmpdir(), 'cdktn-integration-'),
    );
    tmpDirs.push(tmpDir);

    // Write a .projenrc.js (projen CLI looks for .projenrc.js by default)
    fs.writeFileSync(path.join(tmpDir, '.projenrc.js'), projenrcContent);

    // Initialize, install projen + our tarball, then run projen --no-post
    execSync(
      [
        'npm init -y',
        `npm install projen ${tarballPath} --save-dev`,
        'npx projen --no-post',
      ].join(' && '),
      {
        cwd: tmpDir,
        stdio: 'pipe',
        env: {
          ...process.env,
          CI: '1',
        },
      },
    );

    return tmpDir;
  }

  function readJsonFile(dir: string, filePath: string): any {
    return JSON.parse(fs.readFileSync(path.join(dir, filePath), 'utf-8'));
  }

  function readFile(dir: string, filePath: string): string {
    return fs.readFileSync(path.join(dir, filePath), 'utf-8');
  }

  describe('default options', () => {
    let projectDir: string;

    beforeAll(() => {
      projectDir = bootstrapProject(
        [
          "const { CdktnTypeScriptApp } = require('@jjrawlins/projen-cdktn-app-ts');",
          '',
          'const project = new CdktnTypeScriptApp({',
          "  name: 'my-cdktn-app',",
          "  defaultReleaseBranch: 'main',",
          "  cdktnVersion: '0.22.0',",
          '});',
          '',
          'project.synth();',
        ].join('\n'),
      );
    });

    test('package.json has cdktn in dependencies', () => {
      const pkg = readJsonFile(projectDir, 'package.json');
      expect(pkg.dependencies).toHaveProperty('cdktn');
      expect(pkg.dependencies.cdktn).toBe('^0.22.0');
    });

    test('package.json has constructs in dependencies', () => {
      const pkg = readJsonFile(projectDir, 'package.json');
      expect(pkg.dependencies).toHaveProperty('constructs');
    });

    test('package.json has cdktn-cli in devDependencies', () => {
      const pkg = readJsonFile(projectDir, 'package.json');
      expect(pkg.devDependencies).toHaveProperty('cdktn-cli', '0.22.0');
    });

    test('cdktf.json exists with correct language', () => {
      const config = readJsonFile(projectDir, 'cdktf.json');
      expect(config.language).toBe('typescript');
    });

    test('cdktf.json has default context', () => {
      const config = readJsonFile(projectDir, 'cdktf.json');
      expect(config.context).toStrictEqual({
        excludeStackIdFromLogicalIds: 'true',
        allowSepCharsInLogicalIds: 'true',
      });
    });

    test('cdktf.json has app command with ts-node', () => {
      const config = readJsonFile(projectDir, 'cdktf.json');
      expect(config.app).toContain('ts-node');
      expect(config.app).toContain('src/main.ts');
    });

    test('src/main.ts has cdktn imports', () => {
      const mainTs = readFile(projectDir, 'src/main.ts');
      expect(mainTs).toContain(
        "import { App, TerraformStack } from 'cdktn'",
      );
      expect(mainTs).toContain("import { Construct } from 'constructs'");
    });

    test('test/main.test.ts has cdktn Testing import', () => {
      const testTs = readFile(projectDir, 'test/main.test.ts');
      expect(testTs).toContain("import { Testing } from 'cdktn'");
    });

    test('.projen/tasks.json has synth task using cdktn', () => {
      const tasks = readJsonFile(projectDir, '.projen/tasks.json');
      expect(tasks.tasks.synth).toBeDefined();
      expect(tasks.tasks.synth.steps).toContainEqual({
        exec: 'cdktn synth',
      });
    });

    test('.projen/tasks.json has deploy task using cdktn', () => {
      const tasks = readJsonFile(projectDir, '.projen/tasks.json');
      expect(tasks.tasks.deploy).toBeDefined();
      expect(tasks.tasks.deploy.steps).toContainEqual({
        exec: 'cdktn deploy',
        receiveArgs: true,
      });
    });

    test('.projen/tasks.json has destroy task using cdktn', () => {
      const tasks = readJsonFile(projectDir, '.projen/tasks.json');
      expect(tasks.tasks.destroy).toBeDefined();
      expect(tasks.tasks.destroy.steps).toContainEqual({
        exec: 'cdktn destroy',
        receiveArgs: true,
      });
    });

    test('.projen/tasks.json has get task using cdktn', () => {
      const tasks = readJsonFile(projectDir, '.projen/tasks.json');
      expect(tasks.tasks.get).toBeDefined();
      expect(tasks.tasks.get.steps).toContainEqual({
        exec: 'cdktn get',
      });
    });

    test('.projen/tasks.json has diff task using cdktn', () => {
      const tasks = readJsonFile(projectDir, '.projen/tasks.json');
      expect(tasks.tasks.diff).toBeDefined();
      expect(tasks.tasks.diff.steps).toContainEqual({
        exec: 'cdktn diff',
      });
    });

    test('.projen/tasks.json has watch task using cdktn', () => {
      const tasks = readJsonFile(projectDir, '.projen/tasks.json');
      expect(tasks.tasks.watch).toBeDefined();
      expect(tasks.tasks.watch.steps).toContainEqual({
        exec: 'cdktn watch',
      });
    });

    test('.projen/tasks.json post-compile spawns synth', () => {
      const tasks = readJsonFile(projectDir, '.projen/tasks.json');
      expect(tasks.tasks['post-compile'].steps).toContainEqual({
        spawn: 'synth',
      });
    });
  });

  describe('custom options', () => {
    test('custom terraform providers appear in cdktf.json', () => {
      const projectDir = bootstrapProject(
        [
          "const { CdktnTypeScriptApp } = require('@jjrawlins/projen-cdktn-app-ts');",
          '',
          'const project = new CdktnTypeScriptApp({',
          "  name: 'my-cdktn-app',",
          "  defaultReleaseBranch: 'main',",
          "  cdktnVersion: '0.22.0',",
          "  terraformProviders: ['aws@~>5.0'],",
          '});',
          '',
          'project.synth();',
        ].join('\n'),
      );
      const config = readJsonFile(projectDir, 'cdktf.json');
      expect(config.terraformProviders).toStrictEqual(['aws@~>5.0']);
    });

    test('custom constructs version is respected', () => {
      const projectDir = bootstrapProject(
        [
          "const { CdktnTypeScriptApp } = require('@jjrawlins/projen-cdktn-app-ts');",
          '',
          'const project = new CdktnTypeScriptApp({',
          "  name: 'my-cdktn-app',",
          "  defaultReleaseBranch: 'main',",
          "  cdktnVersion: '0.22.0',",
          "  constructsVersion: '10.4.2',",
          '});',
          '',
          'project.synth();',
        ].join('\n'),
      );
      const pkg = readJsonFile(projectDir, 'package.json');
      expect(pkg.dependencies.constructs).toBe('^10.4.2');
    });
  });
});
