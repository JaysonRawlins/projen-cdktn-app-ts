# @jjrawlins/projen-cdktn-app-ts

A reusable [projen](https://projen.io) project type for building
[CDK Terrain](https://cdktn.io) applications in TypeScript.

It generates:

- a TypeScript app project configured for CDK Terrain
- a `cdktf.json` file wired to `ts-node`
- standard `cdktn` tasks: `get`, `synth`, `diff`, `deploy`, `destroy`, `watch`
- starter application and test files when the project is empty

## Install

```sh
npm install --save-dev projen @jjrawlins/projen-cdktn-app-ts
```

## Usage

Create a `.projenrc.ts`:

```ts
import { CdktnTypeScriptApp } from '@jjrawlins/projen-cdktn-app-ts';

const project = new CdktnTypeScriptApp({
  name: 'my-cdktn-app',
  defaultReleaseBranch: 'main',
  projenrcTs: true,
  cdktnVersion: '0.22.0',
  terraformProviders: ['hashicorp/aws@~>5.0'],
});

project.synth();
```

Then synthesize the project:

```sh
npx projen
```

## Common Options

- `appEntrypoint` — overrides the default `src/main.ts` entrypoint
- `cdktnVersion` — pins the `cdktn` and `cdktn-cli` versions
- `constructsVersion` — pins the `constructs` dependency
- `terraformProviders` — adds providers to `cdktf.json`
- `terraformModules` — adds modules to `cdktf.json`
- `cdktfOut` — customizes the synthesis output directory
- `context` — merges additional context values into `cdktf.json`

## Generated Tasks

After synthesis, the generated project includes:

- `yarn get`
- `yarn synth`
- `yarn diff`
- `yarn deploy -- --auto-approve`
- `yarn destroy -- --auto-approve`
- `yarn watch`

## API

Detailed generated API docs are available in [API.md](./API.md).
