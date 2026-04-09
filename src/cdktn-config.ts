import { Component } from 'projen/lib/component';
import { JsonFile } from 'projen/lib/json';
import { Project } from 'projen/lib/project';

/**
 * Common options for `cdktf.json`.
 */
export interface CdktnConfigCommonOptions {
  /**
   * cdktf.out directory.
   *
   * @default "cdktf.out"
   */
  readonly cdktfOut?: string;

  /**
   * Terraform providers to install.
   */
  readonly terraformProviders?: RequirementDefinition[];

  /**
   * Terraform modules to install.
   */
  readonly terraformModules?: RequirementDefinition[];

  /**
   * Terraform context features.
   *
   * @default { excludeStackIdFromLogicalIds: "true", allowSepCharsInLogicalIds: "true" }
   */
  readonly context?: Record<string, any>;
}

export interface TerraformDependencyConstraint {
  readonly name: string;
  readonly source?: string;
  readonly version?: string;
}

export type RequirementDefinition = string | TerraformDependencyConstraint;

/**
 * Options for `CdktnConfig`.
 */
export interface CdktnConfigOptions extends CdktnConfigCommonOptions {
  /**
   * The command line to execute in order to synthesize the CDKTN application
   * (language specific).
   */
  readonly app: string;
}

/**
 * Represents the cdktf.json configuration file for CDK Terrain.
 */
export class CdktnConfig extends Component {
  /**
   * Represents the JSON file.
   */
  public readonly json: JsonFile;

  /**
   * Name of the cdktf.out directory.
   */
  public readonly cdktfOut: string;

  constructor(project: Project, options: CdktnConfigOptions) {
    super(project);

    this.cdktfOut = options.cdktfOut ?? 'cdktf.out';

    this.json = new JsonFile(project, 'cdktf.json', {
      omitEmpty: true,
      obj: {
        app: options.app,
        language: 'typescript',
        output: this.cdktfOut,
        terraformProviders: options.terraformProviders,
        terraformModules: options.terraformModules,
        context: {
          excludeStackIdFromLogicalIds: 'true',
          allowSepCharsInLogicalIds: 'true',
          ...options.context,
        },
      },
    });

    project.gitignore.exclude(`/${this.cdktfOut}/`);
    project.gitignore.exclude('.cdktf.staging/');
  }
}
