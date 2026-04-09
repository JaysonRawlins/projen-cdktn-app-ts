import { cdk } from 'projen';

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

project.synth();
