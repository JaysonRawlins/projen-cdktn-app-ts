import { Component } from 'projen/lib/component';
import { Project } from 'projen/lib/project';
import { Task } from 'projen/lib/task';

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

  constructor(project: Project) {
    super(project);

    this.get = project.addTask('get', {
      description: 'Generate provider bindings',
      exec: 'cdktn get',
    });

    this.synth = project.addTask('synth', {
      description: 'Synthesizes your cdktn app into cdktf.out',
      exec: 'cdktn synth',
    });

    this.deploy = project.addTask('deploy', {
      description: 'Deploys your cdktn app',
      exec: 'cdktn deploy',
      receiveArgs: true,
    });

    this.destroy = project.addTask('destroy', {
      description: 'Destroys your cdktn app',
      exec: 'cdktn destroy',
      receiveArgs: true,
    });

    this.diff = project.addTask('diff', {
      description: 'Diffs the currently deployed app against your code',
      exec: 'cdktn diff',
    });

    // typescript projects already have a "watch" task, repurpose it
    const watch = project.tasks.tryFind('watch') ?? project.addTask('watch');
    watch.reset();
    watch.description =
      'Watches changes in your source code and rebuilds and deploys to the current account';
    watch.exec('cdktn watch');

    this.watch = watch;
  }
}
