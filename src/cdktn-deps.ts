import { Component } from 'projen/lib/component';
import { DependencyType } from 'projen/lib/dependencies';
import { Project } from 'projen/lib/project';

/**
 * Options for `CdktnDeps`.
 */
export interface CdktnDepsCommonOptions {
  /**
   * Minimum version of the CDKTN to depend on.
   *
   * @default - the default is "latest".
   */
  readonly cdktnVersion?: string;

  /**
   * Minimum version of the `constructs` library to depend on.
   *
   * @default - the default is "latest".
   */
  readonly constructsVersion?: string;
}

/**
 * Manages dependencies on CDK Terrain.
 */
export class CdktnDeps extends Component {
  constructor(project: Project, options: CdktnDepsCommonOptions) {
    super(project);

    this.project.deps.addDependency(
      options.cdktnVersion ? `cdktn@^${options.cdktnVersion}` : 'cdktn',
      DependencyType.RUNTIME,
    );

    this.project.deps.addDependency(
      options.constructsVersion
        ? `constructs@^${options.constructsVersion}`
        : 'constructs',
      DependencyType.RUNTIME,
    );
  }
}
