# @jjrawlins/projen-cdktn-app-ts

A reusable [projen](https://projen.io) project type for building
[CDK Terrain](https://cdktn.io) applications in TypeScript.

It generates:

- a TypeScript app project configured for CDK Terrain
- a `cdktf.json` file wired to `ts-node`
- standard `cdktn` tasks: `get`, `synth`, `diff`, `deploy`, `destroy`, `watch`
- starter application and test files when the project is empty

## Quick Start

Scaffold a new CDK Terrain app in an empty directory:

```sh
npx projen new --from @jjrawlins/projen-cdktn-app-ts
```

## Install

Or add to an existing project:

```sh
# npm
npm install --save-dev projen @jjrawlins/projen-cdktn-app-ts

# yarn
yarn add --dev projen @jjrawlins/projen-cdktn-app-ts
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
- `typescriptVersion` — overrides the generated `typescript` dependency (see below)

## TypeScript Version

Generated projects run their `cdktf.json` `app` command through `ts-node`, and
ts-node 10 (its final release) reads `ts.sys` off the TypeScript module at
startup. TypeScript 7's native port no longer exposes that surface, so a
floating `typescript` dependency resolves to 7.x and every `cdktn synth` dies
with:

```
TypeError: Cannot read properties of undefined (reading 'fileExists')
    at readConfig (.../ts-node/dist/configuration.js:91:33)
```

Generated projects therefore default to `typescript@^6.0.0`, which is verified
to work with ts-node 10. Passing `typescriptVersion` explicitly overrides this;
if you point it at 7.x you will also need to move the `app` command off ts-node
(for example to `tsx`).

## Generated Tasks

After synthesis, the generated project includes:

| Task | npm | yarn |
|------|-----|------|
| Generate providers | `npx projen get` | `yarn get` |
| Synthesize | `npx projen synth` | `yarn synth` |
| Diff | `npx projen diff` | `yarn diff` |
| Deploy | `npx projen deploy -- --auto-approve` | `yarn deploy -- --auto-approve` |
| Destroy | `npx projen destroy -- --auto-approve` | `yarn destroy -- --auto-approve` |
| Watch | `npx projen watch` | `yarn watch` |

## API

Detailed generated API docs are available in [API.md](./API.md).
