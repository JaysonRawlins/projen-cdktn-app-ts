import { Component } from 'projen/lib/component';
import { Project } from 'projen/lib/project';
import { Task } from 'projen/lib/task';

/**
 * Options for `CdktnTasks`.
 */
export interface CdktnTasksOptions {
  /**
   * The Terraform binary name. When set to something other than "terraform",
   * the TERRAFORM_BINARY_NAME env var is set on all tasks as a workaround
   * for upstream cdktn-cli binary resolution issues.
   *
   * @default "terraform"
   */
  readonly terraformBinaryName?: string;
}

/**
 * Adds standard CDK Terrain tasks to your project.
 */
export class CdktnTasks extends Component {
  /**
   * Runs `cdktn get`.
   */
  public readonly get: Task;

  /**
   * Synthesizes your app.
   */
  public readonly synth: Task;

  /**
   * Deploys your app.
   */
  public readonly deploy: Task;

  /**
   * Destroys all the stacks.
   */
  public readonly destroy: Task;

  /**
   * Diff against production.
   */
  public readonly diff: Task;

  /**
   * Watch task.
   */
  public readonly watch: Task;

  constructor(project: Project, options?: CdktnTasksOptions) {
    super(project);

    const binaryName = options?.terraformBinaryName;
    const env: Record<string, string> | undefined =
      binaryName && binaryName !== 'terraform'
        ? { TERRAFORM_BINARY_NAME: binaryName }
        : undefined;

    this.get = project.addTask('get', {
      description: 'Generate provider bindings',
      exec: 'cdktn get',
      env,
    });

    this.synth = project.addTask('synth', {
      description: 'Synthesizes your cdktn app into cdktf.out',
      exec: 'cdktn synth',
      env,
    });

    this.deploy = project.addTask('deploy', {
      description: 'Deploys your cdktn app',
      exec: 'cdktn deploy',
      receiveArgs: true,
      env,
    });

    this.destroy = project.addTask('destroy', {
      description: 'Destroys your cdktn app',
      exec: 'cdktn destroy',
      receiveArgs: true,
      env,
    });

    this.diff = project.addTask('diff', {
      description: 'Diffs the currently deployed app against your code',
      exec: 'cdktn diff',
      env,
    });

    // typescript projects already have a "watch" task, repurpose it
    const watch = project.tasks.tryFind('watch') ?? project.addTask('watch');
    watch.reset();
    watch.description =
      'Watches changes in your source code and rebuilds and deploys to the current account';
    watch.exec('cdktn watch');
    if (env) {
      for (const [k, v] of Object.entries(env)) {
        watch.env(k, v);
      }
    }

    this.watch = watch;
  }
}
