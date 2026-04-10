# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdktnConfig <a name="CdktnConfig" id="@jjrawlins/projen-cdktn-app-ts.CdktnConfig"></a>

Represents the cdktf.json configuration file for CDK Terrain.

#### Initializers <a name="Initializers" id="@jjrawlins/projen-cdktn-app-ts.CdktnConfig.Initializer"></a>

```typescript
import { CdktnConfig } from '@jjrawlins/projen-cdktn-app-ts'

new CdktnConfig(project: Project, options: CdktnConfigOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnConfig.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnConfig.Initializer.parameter.options">options</a></code> | <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnConfigOptions">CdktnConfigOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@jjrawlins/projen-cdktn-app-ts.CdktnConfig.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Required</sup> <a name="options" id="@jjrawlins/projen-cdktn-app-ts.CdktnConfig.Initializer.parameter.options"></a>

- *Type:* <a href="#@jjrawlins/projen-cdktn-app-ts.CdktnConfigOptions">CdktnConfigOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnConfig.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnConfig.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnConfig.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@jjrawlins/projen-cdktn-app-ts.CdktnConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@jjrawlins/projen-cdktn-app-ts.CdktnConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@jjrawlins/projen-cdktn-app-ts.CdktnConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `postSynthesize` <a name="postSynthesize" id="@jjrawlins/projen-cdktn-app-ts.CdktnConfig.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@jjrawlins/projen-cdktn-app-ts.CdktnConfig.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@jjrawlins/projen-cdktn-app-ts.CdktnConfig.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnConfig.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@jjrawlins/projen-cdktn-app-ts.CdktnConfig.isConstruct"></a>

```typescript
import { CdktnConfig } from '@jjrawlins/projen-cdktn-app-ts'

CdktnConfig.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@jjrawlins/projen-cdktn-app-ts.CdktnConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@jjrawlins/projen-cdktn-app-ts.CdktnConfig.isComponent"></a>

```typescript
import { CdktnConfig } from '@jjrawlins/projen-cdktn-app-ts'

CdktnConfig.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@jjrawlins/projen-cdktn-app-ts.CdktnConfig.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnConfig.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnConfig.property.cdktfOut">cdktfOut</a></code> | <code>string</code> | Name of the cdktf.out directory. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnConfig.property.json">json</a></code> | <code>projen.JsonFile</code> | Represents the JSON file. |

---

##### `node`<sup>Required</sup> <a name="node" id="@jjrawlins/projen-cdktn-app-ts.CdktnConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@jjrawlins/projen-cdktn-app-ts.CdktnConfig.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `cdktfOut`<sup>Required</sup> <a name="cdktfOut" id="@jjrawlins/projen-cdktn-app-ts.CdktnConfig.property.cdktfOut"></a>

```typescript
public readonly cdktfOut: string;
```

- *Type:* string

Name of the cdktf.out directory.

---

##### `json`<sup>Required</sup> <a name="json" id="@jjrawlins/projen-cdktn-app-ts.CdktnConfig.property.json"></a>

```typescript
public readonly json: JsonFile;
```

- *Type:* projen.JsonFile

Represents the JSON file.

---


### CdktnDeps <a name="CdktnDeps" id="@jjrawlins/projen-cdktn-app-ts.CdktnDeps"></a>

Manages dependencies on CDK Terrain.

#### Initializers <a name="Initializers" id="@jjrawlins/projen-cdktn-app-ts.CdktnDeps.Initializer"></a>

```typescript
import { CdktnDeps } from '@jjrawlins/projen-cdktn-app-ts'

new CdktnDeps(project: Project, options: CdktnDepsCommonOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnDeps.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnDeps.Initializer.parameter.options">options</a></code> | <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnDepsCommonOptions">CdktnDepsCommonOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@jjrawlins/projen-cdktn-app-ts.CdktnDeps.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Required</sup> <a name="options" id="@jjrawlins/projen-cdktn-app-ts.CdktnDeps.Initializer.parameter.options"></a>

- *Type:* <a href="#@jjrawlins/projen-cdktn-app-ts.CdktnDepsCommonOptions">CdktnDepsCommonOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnDeps.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnDeps.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnDeps.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnDeps.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnDeps.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@jjrawlins/projen-cdktn-app-ts.CdktnDeps.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@jjrawlins/projen-cdktn-app-ts.CdktnDeps.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@jjrawlins/projen-cdktn-app-ts.CdktnDeps.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `postSynthesize` <a name="postSynthesize" id="@jjrawlins/projen-cdktn-app-ts.CdktnDeps.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@jjrawlins/projen-cdktn-app-ts.CdktnDeps.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@jjrawlins/projen-cdktn-app-ts.CdktnDeps.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnDeps.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnDeps.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@jjrawlins/projen-cdktn-app-ts.CdktnDeps.isConstruct"></a>

```typescript
import { CdktnDeps } from '@jjrawlins/projen-cdktn-app-ts'

CdktnDeps.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@jjrawlins/projen-cdktn-app-ts.CdktnDeps.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@jjrawlins/projen-cdktn-app-ts.CdktnDeps.isComponent"></a>

```typescript
import { CdktnDeps } from '@jjrawlins/projen-cdktn-app-ts'

CdktnDeps.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@jjrawlins/projen-cdktn-app-ts.CdktnDeps.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnDeps.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnDeps.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@jjrawlins/projen-cdktn-app-ts.CdktnDeps.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@jjrawlins/projen-cdktn-app-ts.CdktnDeps.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### CdktnTasks <a name="CdktnTasks" id="@jjrawlins/projen-cdktn-app-ts.CdktnTasks"></a>

Adds standard CDK Terrain tasks to your project.

#### Initializers <a name="Initializers" id="@jjrawlins/projen-cdktn-app-ts.CdktnTasks.Initializer"></a>

```typescript
import { CdktnTasks } from '@jjrawlins/projen-cdktn-app-ts'

new CdktnTasks(project: Project, options?: CdktnTasksOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTasks.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTasks.Initializer.parameter.options">options</a></code> | <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTasksOptions">CdktnTasksOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@jjrawlins/projen-cdktn-app-ts.CdktnTasks.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Optional</sup> <a name="options" id="@jjrawlins/projen-cdktn-app-ts.CdktnTasks.Initializer.parameter.options"></a>

- *Type:* <a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTasksOptions">CdktnTasksOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTasks.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTasks.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTasks.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTasks.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTasks.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@jjrawlins/projen-cdktn-app-ts.CdktnTasks.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@jjrawlins/projen-cdktn-app-ts.CdktnTasks.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@jjrawlins/projen-cdktn-app-ts.CdktnTasks.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `postSynthesize` <a name="postSynthesize" id="@jjrawlins/projen-cdktn-app-ts.CdktnTasks.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@jjrawlins/projen-cdktn-app-ts.CdktnTasks.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@jjrawlins/projen-cdktn-app-ts.CdktnTasks.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTasks.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTasks.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@jjrawlins/projen-cdktn-app-ts.CdktnTasks.isConstruct"></a>

```typescript
import { CdktnTasks } from '@jjrawlins/projen-cdktn-app-ts'

CdktnTasks.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@jjrawlins/projen-cdktn-app-ts.CdktnTasks.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@jjrawlins/projen-cdktn-app-ts.CdktnTasks.isComponent"></a>

```typescript
import { CdktnTasks } from '@jjrawlins/projen-cdktn-app-ts'

CdktnTasks.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@jjrawlins/projen-cdktn-app-ts.CdktnTasks.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTasks.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTasks.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTasks.property.deploy">deploy</a></code> | <code>projen.Task</code> | Deploys your app. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTasks.property.destroy">destroy</a></code> | <code>projen.Task</code> | Destroys all the stacks. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTasks.property.diff">diff</a></code> | <code>projen.Task</code> | Diff against production. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTasks.property.get">get</a></code> | <code>projen.Task</code> | Runs `cdktn get`. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTasks.property.synth">synth</a></code> | <code>projen.Task</code> | Synthesizes your app. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTasks.property.watch">watch</a></code> | <code>projen.Task</code> | Watch task. |

---

##### `node`<sup>Required</sup> <a name="node" id="@jjrawlins/projen-cdktn-app-ts.CdktnTasks.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@jjrawlins/projen-cdktn-app-ts.CdktnTasks.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `deploy`<sup>Required</sup> <a name="deploy" id="@jjrawlins/projen-cdktn-app-ts.CdktnTasks.property.deploy"></a>

```typescript
public readonly deploy: Task;
```

- *Type:* projen.Task

Deploys your app.

---

##### `destroy`<sup>Required</sup> <a name="destroy" id="@jjrawlins/projen-cdktn-app-ts.CdktnTasks.property.destroy"></a>

```typescript
public readonly destroy: Task;
```

- *Type:* projen.Task

Destroys all the stacks.

---

##### `diff`<sup>Required</sup> <a name="diff" id="@jjrawlins/projen-cdktn-app-ts.CdktnTasks.property.diff"></a>

```typescript
public readonly diff: Task;
```

- *Type:* projen.Task

Diff against production.

---

##### `get`<sup>Required</sup> <a name="get" id="@jjrawlins/projen-cdktn-app-ts.CdktnTasks.property.get"></a>

```typescript
public readonly get: Task;
```

- *Type:* projen.Task

Runs `cdktn get`.

---

##### `synth`<sup>Required</sup> <a name="synth" id="@jjrawlins/projen-cdktn-app-ts.CdktnTasks.property.synth"></a>

```typescript
public readonly synth: Task;
```

- *Type:* projen.Task

Synthesizes your app.

---

##### `watch`<sup>Required</sup> <a name="watch" id="@jjrawlins/projen-cdktn-app-ts.CdktnTasks.property.watch"></a>

```typescript
public readonly watch: Task;
```

- *Type:* projen.Task

Watch task.

---


### CdktnTypeScriptApp <a name="CdktnTypeScriptApp" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp"></a>

CDK Terrain app in TypeScript.

#### Initializers <a name="Initializers" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.Initializer"></a>

```typescript
import { CdktnTypeScriptApp } from '@jjrawlins/projen-cdktn-app-ts'

new CdktnTypeScriptApp(options: CdktnTypeScriptAppOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.Initializer.parameter.options">options</a></code> | <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions">CdktnTypeScriptAppOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.Initializer.parameter.options"></a>

- *Type:* <a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions">CdktnTypeScriptAppOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.addBins">addBins</a></code> | *No description.* |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |

---

##### `toString` <a name="toString" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: ...string[]): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* ...string[]

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `pnpm projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: ...string[]): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.addBundledDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `pnpm projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `pnpm
add/update`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.addCompileCommand.parameter.commands"></a>

- *Type:* ...string[]

---

##### `addDeps` <a name="addDeps" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.addDeps"></a>

```typescript
public addDeps(deps: ...string[]): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.addDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `pnpm projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `pnpm
add/update`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.addDevDeps"></a>

```typescript
public addDevDeps(deps: ...string[]): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.addDevDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `pnpm projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `pnpm
add/update`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.addKeywords"></a>

```typescript
public addKeywords(keywords: ...string[]): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.addKeywords.parameter.keywords"></a>

- *Type:* ...string[]

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: ...string[]): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.addPeerDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `pnpm projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `pnpm
add/update`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.addTestCommand"></a>

```typescript
public addTestCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.addTestCommand.parameter.commands"></a>

- *Type:* ...string[]

---

##### ~~`hasScript`~~ <a name="hasScript" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.isConstruct"></a>

```typescript
import { CdktnTypeScriptApp } from '@jjrawlins/projen-cdktn-app-ts'

CdktnTypeScriptApp.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.isProject"></a>

```typescript
import { CdktnTypeScriptApp } from '@jjrawlins/projen-cdktn-app-ts'

CdktnTypeScriptApp.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.of"></a>

```typescript
import { CdktnTypeScriptApp } from '@jjrawlins/projen-cdktn-app-ts'

CdktnTypeScriptApp.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.biome">biome</a></code> | <code>projen.javascript.Biome</code> | *No description.* |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version supported by this package. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.appEntrypoint">appEntrypoint</a></code> | <code>string</code> | The CDKTN app entrypoint. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.cdktnConfig">cdktnConfig</a></code> | <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnConfig">CdktnConfig</a></code> | cdktf.json configuration. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.cdktnTasks">cdktnTasks</a></code> | <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTasks">CdktnTasks</a></code> | Common CDKTN tasks. |

---

##### `node`<sup>Required</sup> <a name="node" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `biome`<sup>Optional</sup> <a name="biome" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.biome"></a>

```typescript
public readonly biome: Biome;
```

- *Type:* projen.javascript.Biome

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version supported by this package.

The value indicates the package is incompatible with newer versions.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

The minimum node version required by this package to function.

This value indicates the package is incompatible with older versions.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `appEntrypoint`<sup>Required</sup> <a name="appEntrypoint" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.appEntrypoint"></a>

```typescript
public readonly appEntrypoint: string;
```

- *Type:* string

The CDKTN app entrypoint.

---

##### `cdktnConfig`<sup>Required</sup> <a name="cdktnConfig" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.cdktnConfig"></a>

```typescript
public readonly cdktnConfig: CdktnConfig;
```

- *Type:* <a href="#@jjrawlins/projen-cdktn-app-ts.CdktnConfig">CdktnConfig</a>

cdktf.json configuration.

---

##### `cdktnTasks`<sup>Required</sup> <a name="cdktnTasks" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.cdktnTasks"></a>

```typescript
public readonly cdktnTasks: CdktnTasks;
```

- *Type:* <a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTasks">CdktnTasks</a>

Common CDKTN tasks.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### `DEFAULT_TS_JEST_TRANFORM_PATTERN`<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptApp.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CdktnConfigCommonOptions <a name="CdktnConfigCommonOptions" id="@jjrawlins/projen-cdktn-app-ts.CdktnConfigCommonOptions"></a>

Common options for `cdktf.json`.

#### Initializer <a name="Initializer" id="@jjrawlins/projen-cdktn-app-ts.CdktnConfigCommonOptions.Initializer"></a>

```typescript
import { CdktnConfigCommonOptions } from '@jjrawlins/projen-cdktn-app-ts'

const cdktnConfigCommonOptions: CdktnConfigCommonOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnConfigCommonOptions.property.cdktfOut">cdktfOut</a></code> | <code>string</code> | cdktf.out directory. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnConfigCommonOptions.property.context">context</a></code> | <code>{[ key: string ]: any}</code> | Terraform context features. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnConfigCommonOptions.property.terraformBinaryName">terraformBinaryName</a></code> | <code>string</code> | The name of the Terraform binary to use. Set to "tofu" to use OpenTofu instead of Terraform. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnConfigCommonOptions.property.terraformModules">terraformModules</a></code> | <code>string \| <a href="#@jjrawlins/projen-cdktn-app-ts.TerraformDependencyConstraint">TerraformDependencyConstraint</a>[]</code> | Terraform modules to install. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnConfigCommonOptions.property.terraformProviders">terraformProviders</a></code> | <code>string \| <a href="#@jjrawlins/projen-cdktn-app-ts.TerraformDependencyConstraint">TerraformDependencyConstraint</a>[]</code> | Terraform providers to install. |

---

##### `cdktfOut`<sup>Optional</sup> <a name="cdktfOut" id="@jjrawlins/projen-cdktn-app-ts.CdktnConfigCommonOptions.property.cdktfOut"></a>

```typescript
public readonly cdktfOut: string;
```

- *Type:* string
- *Default:* "cdktf.out"

cdktf.out directory.

---

##### `context`<sup>Optional</sup> <a name="context" id="@jjrawlins/projen-cdktn-app-ts.CdktnConfigCommonOptions.property.context"></a>

```typescript
public readonly context: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* { excludeStackIdFromLogicalIds: "true", allowSepCharsInLogicalIds: "true" }

Terraform context features.

---

##### `terraformBinaryName`<sup>Optional</sup> <a name="terraformBinaryName" id="@jjrawlins/projen-cdktn-app-ts.CdktnConfigCommonOptions.property.terraformBinaryName"></a>

```typescript
public readonly terraformBinaryName: string;
```

- *Type:* string
- *Default:* "terraform"

The name of the Terraform binary to use. Set to "tofu" to use OpenTofu instead of Terraform.

Note: Due to an upstream cdktn-cli issue, the binary name config may not
propagate correctly. When set to "tofu", the TERRAFORM_BINARY_NAME env var
is also set on all cdktn tasks as a workaround.

> [https://github.com/open-constructs/cdk-terrain/issues/96](https://github.com/open-constructs/cdk-terrain/issues/96)

---

##### `terraformModules`<sup>Optional</sup> <a name="terraformModules" id="@jjrawlins/projen-cdktn-app-ts.CdktnConfigCommonOptions.property.terraformModules"></a>

```typescript
public readonly terraformModules: (string | TerraformDependencyConstraint)[];
```

- *Type:* string | <a href="#@jjrawlins/projen-cdktn-app-ts.TerraformDependencyConstraint">TerraformDependencyConstraint</a>[]

Terraform modules to install.

---

##### `terraformProviders`<sup>Optional</sup> <a name="terraformProviders" id="@jjrawlins/projen-cdktn-app-ts.CdktnConfigCommonOptions.property.terraformProviders"></a>

```typescript
public readonly terraformProviders: (string | TerraformDependencyConstraint)[];
```

- *Type:* string | <a href="#@jjrawlins/projen-cdktn-app-ts.TerraformDependencyConstraint">TerraformDependencyConstraint</a>[]

Terraform providers to install.

---

### CdktnConfigOptions <a name="CdktnConfigOptions" id="@jjrawlins/projen-cdktn-app-ts.CdktnConfigOptions"></a>

Options for `CdktnConfig`.

#### Initializer <a name="Initializer" id="@jjrawlins/projen-cdktn-app-ts.CdktnConfigOptions.Initializer"></a>

```typescript
import { CdktnConfigOptions } from '@jjrawlins/projen-cdktn-app-ts'

const cdktnConfigOptions: CdktnConfigOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnConfigOptions.property.cdktfOut">cdktfOut</a></code> | <code>string</code> | cdktf.out directory. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnConfigOptions.property.context">context</a></code> | <code>{[ key: string ]: any}</code> | Terraform context features. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnConfigOptions.property.terraformBinaryName">terraformBinaryName</a></code> | <code>string</code> | The name of the Terraform binary to use. Set to "tofu" to use OpenTofu instead of Terraform. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnConfigOptions.property.terraformModules">terraformModules</a></code> | <code>string \| <a href="#@jjrawlins/projen-cdktn-app-ts.TerraformDependencyConstraint">TerraformDependencyConstraint</a>[]</code> | Terraform modules to install. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnConfigOptions.property.terraformProviders">terraformProviders</a></code> | <code>string \| <a href="#@jjrawlins/projen-cdktn-app-ts.TerraformDependencyConstraint">TerraformDependencyConstraint</a>[]</code> | Terraform providers to install. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnConfigOptions.property.app">app</a></code> | <code>string</code> | The command line to execute in order to synthesize the CDKTN application (language specific). |

---

##### `cdktfOut`<sup>Optional</sup> <a name="cdktfOut" id="@jjrawlins/projen-cdktn-app-ts.CdktnConfigOptions.property.cdktfOut"></a>

```typescript
public readonly cdktfOut: string;
```

- *Type:* string
- *Default:* "cdktf.out"

cdktf.out directory.

---

##### `context`<sup>Optional</sup> <a name="context" id="@jjrawlins/projen-cdktn-app-ts.CdktnConfigOptions.property.context"></a>

```typescript
public readonly context: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* { excludeStackIdFromLogicalIds: "true", allowSepCharsInLogicalIds: "true" }

Terraform context features.

---

##### `terraformBinaryName`<sup>Optional</sup> <a name="terraformBinaryName" id="@jjrawlins/projen-cdktn-app-ts.CdktnConfigOptions.property.terraformBinaryName"></a>

```typescript
public readonly terraformBinaryName: string;
```

- *Type:* string
- *Default:* "terraform"

The name of the Terraform binary to use. Set to "tofu" to use OpenTofu instead of Terraform.

Note: Due to an upstream cdktn-cli issue, the binary name config may not
propagate correctly. When set to "tofu", the TERRAFORM_BINARY_NAME env var
is also set on all cdktn tasks as a workaround.

> [https://github.com/open-constructs/cdk-terrain/issues/96](https://github.com/open-constructs/cdk-terrain/issues/96)

---

##### `terraformModules`<sup>Optional</sup> <a name="terraformModules" id="@jjrawlins/projen-cdktn-app-ts.CdktnConfigOptions.property.terraformModules"></a>

```typescript
public readonly terraformModules: (string | TerraformDependencyConstraint)[];
```

- *Type:* string | <a href="#@jjrawlins/projen-cdktn-app-ts.TerraformDependencyConstraint">TerraformDependencyConstraint</a>[]

Terraform modules to install.

---

##### `terraformProviders`<sup>Optional</sup> <a name="terraformProviders" id="@jjrawlins/projen-cdktn-app-ts.CdktnConfigOptions.property.terraformProviders"></a>

```typescript
public readonly terraformProviders: (string | TerraformDependencyConstraint)[];
```

- *Type:* string | <a href="#@jjrawlins/projen-cdktn-app-ts.TerraformDependencyConstraint">TerraformDependencyConstraint</a>[]

Terraform providers to install.

---

##### `app`<sup>Required</sup> <a name="app" id="@jjrawlins/projen-cdktn-app-ts.CdktnConfigOptions.property.app"></a>

```typescript
public readonly app: string;
```

- *Type:* string

The command line to execute in order to synthesize the CDKTN application (language specific).

---

### CdktnDepsCommonOptions <a name="CdktnDepsCommonOptions" id="@jjrawlins/projen-cdktn-app-ts.CdktnDepsCommonOptions"></a>

Options for `CdktnDeps`.

#### Initializer <a name="Initializer" id="@jjrawlins/projen-cdktn-app-ts.CdktnDepsCommonOptions.Initializer"></a>

```typescript
import { CdktnDepsCommonOptions } from '@jjrawlins/projen-cdktn-app-ts'

const cdktnDepsCommonOptions: CdktnDepsCommonOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnDepsCommonOptions.property.cdktnVersion">cdktnVersion</a></code> | <code>string</code> | Minimum version of the CDKTN to depend on. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnDepsCommonOptions.property.constructsVersion">constructsVersion</a></code> | <code>string</code> | Minimum version of the `constructs` library to depend on. |

---

##### `cdktnVersion`<sup>Optional</sup> <a name="cdktnVersion" id="@jjrawlins/projen-cdktn-app-ts.CdktnDepsCommonOptions.property.cdktnVersion"></a>

```typescript
public readonly cdktnVersion: string;
```

- *Type:* string
- *Default:* the default is "latest".

Minimum version of the CDKTN to depend on.

---

##### `constructsVersion`<sup>Optional</sup> <a name="constructsVersion" id="@jjrawlins/projen-cdktn-app-ts.CdktnDepsCommonOptions.property.constructsVersion"></a>

```typescript
public readonly constructsVersion: string;
```

- *Type:* string
- *Default:* the default is "latest".

Minimum version of the `constructs` library to depend on.

---

### CdktnTasksOptions <a name="CdktnTasksOptions" id="@jjrawlins/projen-cdktn-app-ts.CdktnTasksOptions"></a>

Options for `CdktnTasks`.

#### Initializer <a name="Initializer" id="@jjrawlins/projen-cdktn-app-ts.CdktnTasksOptions.Initializer"></a>

```typescript
import { CdktnTasksOptions } from '@jjrawlins/projen-cdktn-app-ts'

const cdktnTasksOptions: CdktnTasksOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTasksOptions.property.terraformBinaryName">terraformBinaryName</a></code> | <code>string</code> | The Terraform binary name. |

---

##### `terraformBinaryName`<sup>Optional</sup> <a name="terraformBinaryName" id="@jjrawlins/projen-cdktn-app-ts.CdktnTasksOptions.property.terraformBinaryName"></a>

```typescript
public readonly terraformBinaryName: string;
```

- *Type:* string
- *Default:* "terraform"

The Terraform binary name.

When set to something other than "terraform",
the TERRAFORM_BINARY_NAME env var is set on all tasks as a workaround
for upstream cdktn-cli binary resolution issues.

---

### CdktnTypeScriptAppOptions <a name="CdktnTypeScriptAppOptions" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions"></a>

#### Initializer <a name="Initializer" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.Initializer"></a>

```typescript
import { CdktnTypeScriptAppOptions } from '@jjrawlins/projen-cdktn-app-ts'

const cdktnTypeScriptAppOptions: CdktnTypeScriptAppOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.projectTree">projectTree</a></code> | <code>boolean</code> | Generate a project tree file (`.projen/tree.json`) that shows all components and their relationships. Useful for understanding your project structure and debugging. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.mergifyOptions">mergifyOptions</a></code> | <code>projen.github.MergifyOptions</code> | Options for mergify. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | Which type of project this is (library/app). |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.addPackageManagerToDevEngines">addPackageManagerToDevEngines</a></code> | <code>boolean</code> | Automatically add the resolved `packageManager` to `devEngines.packageManager` in `package.json`, setting `onFail` to `ignore`. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Is the author an organization. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.authorUrl">authorUrl</a></code> | <code>string</code> | Author's URL / Website. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.autoDetectBin">autoDetectBin</a></code> | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | Binary programs vended with your module. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.bugsEmail">bugsEmail</a></code> | <code>string</code> | The email address to which issues should be reported. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.bugsUrl">bugsUrl</a></code> | <code>string</code> | The url to your project's issue tracker. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | List of dependencies to bundle into this module. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.bunVersion">bunVersion</a></code> | <code>string</code> | The version of Bun to use if using Bun as a package manager. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.codeArtifactOptions">codeArtifactOptions</a></code> | <code>projen.javascript.CodeArtifactOptions</code> | Options for npm packages using AWS CodeArtifact. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.deleteOrphanedLockFiles">deleteOrphanedLockFiles</a></code> | <code>boolean</code> | Automatically delete lockfiles from package managers that are not the active one. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.deps">deps</a></code> | <code>string[]</code> | Runtime dependencies of this module. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.description">description</a></code> | <code>string</code> | The description is just a string that helps people understand the purpose of the package. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | Build dependencies for this module. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.devEngines">devEngines</a></code> | <code>projen.javascript.DevEngines</code> | Configure the `devEngines` field in `package.json`. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | Module entrypoint (`main` in `package.json`). |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.homepage">homepage</a></code> | <code>string</code> | Package's Homepage / Website. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.keywords">keywords</a></code> | <code>string[]</code> | Keywords to include in `package.json`. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.license">license</a></code> | <code>string</code> | License's SPDX identifier. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Indicates if a license should be added. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | The maximum node version supported by this package. Most projects should not use this option. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. Most projects should not use this option. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.npmAccess">npmAccess</a></code> | <code>projen.javascript.NpmAccess</code> | Access level of the npm package. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.npmProvenance">npmProvenance</a></code> | <code>boolean</code> | Should provenance statements be generated when the package is published. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.npmRegistry">npmRegistry</a></code> | <code>string</code> | The host name of the npm registry to publish to. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.npmRegistryUrl">npmRegistryUrl</a></code> | <code>string</code> | The base URL of the npm package registry. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.npmTokenSecret">npmTokenSecret</a></code> | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.npmTrustedPublishing">npmTrustedPublishing</a></code> | <code>boolean</code> | Use trusted publishing for publishing to npmjs.com Needs to be pre-configured on npm.js to work. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The Node Package Manager used to execute scripts. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.packageName">packageName</a></code> | <code>string</code> | The "name" in package.json. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.peerDependencyOptions">peerDependencyOptions</a></code> | <code>projen.javascript.PeerDependencyOptions</code> | Options for `peerDeps`. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | Peer dependencies for this module. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.pnpmVersion">pnpmVersion</a></code> | <code>string</code> | The version of PNPM to use if using PNPM as a package manager. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.repository">repository</a></code> | <code>string</code> | The repository is the location where the actual code for your package lives. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.repositoryDirectory">repositoryDirectory</a></code> | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.scopedPackagesOptions">scopedPackagesOptions</a></code> | <code>projen.javascript.ScopedPackagesOptions[]</code> | Options for privately hosted scoped packages. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.scripts">scripts</a></code> | <code>{[ key: string ]: string}</code> | npm scripts to include. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.stability">stability</a></code> | <code>string</code> | Package's Stability. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.yarnBerryOptions">yarnBerryOptions</a></code> | <code>projen.javascript.YarnBerryOptions</code> | Options for Yarn Berry. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.bumpPackage">bumpPackage</a></code> | <code>string</code> | The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.jsiiReleaseVersion">jsiiReleaseVersion</a></code> | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.majorVersion">majorVersion</a></code> | <code>number</code> | Major version to release from the default branch. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.minMajorVersion">minMajorVersion</a></code> | <code>number</code> | Minimal Major version to release. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.nextVersionCommand">nextVersionCommand</a></code> | <code>string</code> | A shell command to control the next version to release. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.npmDistTag">npmDistTag</a></code> | <code>string</code> | The npmDistTag to use when publishing from the default branch. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.postBuildSteps">postBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute after build as part of the release workflow. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.prerelease">prerelease</a></code> | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.publishDryRun">publishDryRun</a></code> | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.publishTasks">publishTasks</a></code> | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.releasableCommits">releasableCommits</a></code> | <code>projen.ReleasableCommits</code> | Find commits that should be considered releasable Used to decide if a release is required. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.releaseBranches">releaseBranches</a></code> | <code>{[ key: string ]: projen.release.BranchOptions}</code> | Defines additional release branches. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.releaseEnvironment">releaseEnvironment</a></code> | <code>string</code> | The GitHub Actions environment used for the release. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.releaseEveryCommit">releaseEveryCommit</a></code> | <code>boolean</code> | Automatically release new versions every commit to one of branches in `releaseBranches`. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.releaseFailureIssue">releaseFailureIssue</a></code> | <code>boolean</code> | Create a github issue on every failed publishing task. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code> | <code>string</code> | The label to apply to issues indicating publish failures. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.releaseSchedule">releaseSchedule</a></code> | <code>string</code> | CRON schedule to trigger new releases. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.releaseTagPrefix">releaseTagPrefix</a></code> | <code>string</code> | Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.releaseTrigger">releaseTrigger</a></code> | <code>projen.release.ReleaseTrigger</code> | The release trigger to use. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.releaseWorkflowEnv">releaseWorkflowEnv</a></code> | <code>{[ key: string ]: string}</code> | Build environment variables for release workflows. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.releaseWorkflowName">releaseWorkflowName</a></code> | <code>string</code> | The name of the default release workflow. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | A set of workflow steps to execute in order to setup the workflow container. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.versionrcOptions">versionrcOptions</a></code> | <code>{[ key: string ]: any}</code> | Custom configuration used when creating changelog with commit-and-tag-version package. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.workflowContainerImage">workflowContainerImage</a></code> | <code>string</code> | Container image to use for GitHub workflows. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.workflowRunsOn">workflowRunsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.workflowRunsOnGroup">workflowRunsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.defaultReleaseBranch">defaultReleaseBranch</a></code> | <code>string</code> | The name of the main release branch. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A directory which will contain build artifacts. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.auditDeps">auditDeps</a></code> | <code>boolean</code> | Run security audit on dependencies. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.auditDepsOptions">auditDepsOptions</a></code> | <code>projen.javascript.AuditOptions</code> | Security audit options. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.autoApproveUpgrades">autoApproveUpgrades</a></code> | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configured). |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.biome">biome</a></code> | <code>boolean</code> | Setup Biome. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.biomeOptions">biomeOptions</a></code> | <code>projen.javascript.BiomeOptions</code> | Biome options. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.buildWorkflow">buildWorkflow</a></code> | <code>boolean</code> | Define a GitHub workflow for building PRs. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.buildWorkflowOptions">buildWorkflowOptions</a></code> | <code>projen.javascript.BuildWorkflowOptions</code> | Options for PR build workflow. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.buildWorkflowTriggers">buildWorkflowTriggers</a></code> | <code>projen.github.workflows.Triggers</code> | Build workflow triggers. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.bundlerOptions">bundlerOptions</a></code> | <code>projen.javascript.BundlerOptions</code> | Options for `Bundler`. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.checkLicenses">checkLicenses</a></code> | <code>projen.javascript.LicenseCheckerOptions</code> | Configure which licenses should be deemed acceptable for use by dependencies. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.codeCov">codeCov</a></code> | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v5 By default, OIDC auth is used. Alternatively a token can be provided via `codeCovTokenSecret`. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.codeCovTokenSecret">codeCovTokenSecret</a></code> | <code>string</code> | Define the secret name for a specified https://codecov.io/ token. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | License copyright owner. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | The copyright years to put in the LICENSE file. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.dependabot">dependabot</a></code> | <code>boolean</code> | Use dependabot to handle dependency upgrades. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.dependabotOptions">dependabotOptions</a></code> | <code>projen.github.DependabotOptions</code> | Options for dependabot. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.depsUpgrade">depsUpgrade</a></code> | <code>boolean</code> | Use tasks and github workflows to handle dependency upgrades. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.depsUpgradeOptions">depsUpgradeOptions</a></code> | <code>projen.javascript.UpgradeDependenciesOptions</code> | Options for `UpgradeDependencies`. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.gitignore">gitignore</a></code> | <code>string[]</code> | Additional entries to .gitignore. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.jest">jest</a></code> | <code>boolean</code> | Setup jest unit tests. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.jestOptions">jestOptions</a></code> | <code>projen.javascript.JestOptions</code> | Jest options. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.mutableBuild">mutableBuild</a></code> | <code>boolean</code> | Automatically update files modified during builds to pull-request branches. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.npmignore">npmignore</a></code> | <code>string[]</code> | Additional entries to .npmignore. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.npmignoreEnabled">npmignoreEnabled</a></code> | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.npmIgnoreOptions">npmIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .npmignore file. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.package">package</a></code> | <code>boolean</code> | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.prettier">prettier</a></code> | <code>boolean</code> | Setup prettier. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.prettierOptions">prettierOptions</a></code> | <code>projen.javascript.PrettierOptions</code> | Prettier options. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.projenDevDependency">projenDevDependency</a></code> | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options for .projenrc.js. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.projenVersion">projenVersion</a></code> | <code>string</code> | Version of projen to install. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.pullRequestTemplate">pullRequestTemplate</a></code> | <code>boolean</code> | Include a GitHub pull request template. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.pullRequestTemplateContents">pullRequestTemplateContents</a></code> | <code>string[]</code> | The contents of the pull request template. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.release">release</a></code> | <code>boolean</code> | Add release management to this project. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.releaseToNpm">releaseToNpm</a></code> | <code>boolean</code> | Automatically release to npm when new versions are introduced. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.releaseWorkflow">releaseWorkflow</a></code> | <code>boolean</code> | DEPRECATED: renamed to `release`. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.workflowBootstrapSteps">workflowBootstrapSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Workflow steps to use in order to bootstrap this repo. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.workflowGitIdentity">workflowGitIdentity</a></code> | <code>projen.github.GitIdentity</code> | The git identity to use in workflows. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | The node version used in GitHub Actions workflows. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.workflowPackageCache">workflowPackageCache</a></code> | <code>boolean</code> | Enable Node.js package cache in GitHub workflows. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.disableTsconfig">disableTsconfig</a></code> | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.disableTsconfigDev">disableTsconfigDev</a></code> | <code>boolean</code> | Do not generate a `tsconfig.dev.json` file. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.docgen">docgen</a></code> | <code>boolean</code> | Docgen by Typedoc. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | Docs directory. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.entrypointTypes">entrypointTypes</a></code> | <code>string</code> | The .d.ts file that includes the type declarations for this module. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.eslint">eslint</a></code> | <code>boolean</code> | Setup eslint. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.eslintOptions">eslintOptions</a></code> | <code>projen.javascript.EslintOptions</code> | Eslint options. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.libdir">libdir</a></code> | <code>string</code> | Typescript  artifacts output directory. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.projenrcTs">projenrcTs</a></code> | <code>boolean</code> | Use TypeScript for your projenrc file (`.projenrc.ts`). |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.projenrcTsOptions">projenrcTsOptions</a></code> | <code>projen.typescript.ProjenrcOptions</code> | Options for .projenrc.ts. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.sampleCode">sampleCode</a></code> | <code>boolean</code> | Generate one-time sample in `src/` and `test/` if there are no files there. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.srcdir">srcdir</a></code> | <code>string</code> | Typescript sources directory. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.testdir">testdir</a></code> | <code>string</code> | Jest tests directory. Tests files should be named `xxx.test.ts`. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom TSConfig. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom tsconfig options for the development tsconfig.json file (used for testing). |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.tsconfigDevFile">tsconfigDevFile</a></code> | <code>string</code> | The name of the development tsconfig.json file. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.tsJestOptions">tsJestOptions</a></code> | <code>projen.typescript.TsJestOptions</code> | Options for ts-jest. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.typescriptVersion">typescriptVersion</a></code> | <code>string</code> | TypeScript version to use. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.cdktfOut">cdktfOut</a></code> | <code>string</code> | cdktf.out directory. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.context">context</a></code> | <code>{[ key: string ]: any}</code> | Terraform context features. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.terraformBinaryName">terraformBinaryName</a></code> | <code>string</code> | The name of the Terraform binary to use. Set to "tofu" to use OpenTofu instead of Terraform. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.terraformModules">terraformModules</a></code> | <code>string \| <a href="#@jjrawlins/projen-cdktn-app-ts.TerraformDependencyConstraint">TerraformDependencyConstraint</a>[]</code> | Terraform modules to install. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.terraformProviders">terraformProviders</a></code> | <code>string \| <a href="#@jjrawlins/projen-cdktn-app-ts.TerraformDependencyConstraint">TerraformDependencyConstraint</a>[]</code> | Terraform providers to install. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.cdktnVersion">cdktnVersion</a></code> | <code>string</code> | Minimum version of the CDKTN to depend on. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.constructsVersion">constructsVersion</a></code> | <code>string</code> | Minimum version of the `constructs` library to depend on. |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.appEntrypoint">appEntrypoint</a></code> | <code>string</code> | The CDKTN app's entrypoint (relative to the source directory, which is "src" by default). |

---

##### `name`<sup>Required</sup> <a name="name" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project.

Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
subprojects.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projectTree`<sup>Optional</sup> <a name="projectTree" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.projectTree"></a>

```typescript
public readonly projectTree: boolean;
```

- *Type:* boolean
- *Default:* false

Generate a project tree file (`.projen/tree.json`) that shows all components and their relationships. Useful for understanding your project structure and debugging.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="github" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* projen.github.MergifyOptions
- *Default:* default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.projenTokenSecret"></a>

- *Deprecated:* use `projenCredentials`

```typescript
public readonly projenTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.

This token needs to have the `repo`, `workflows`
and `packages` scope.

---

##### `readme`<sup>Optional</sup> <a name="readme" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.readme"></a>

```typescript
public readonly readme: SampleReadmeProps;
```

- *Type:* projen.SampleReadmeProps
- *Default:* { filename: 'README.md', contents: '# replace this' }

The README setup.

---

*Example*

```typescript
"{ filename: 'readme.md', contents: '# title' }"
```


##### `stale`<sup>Optional</sup> <a name="stale" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `addPackageManagerToDevEngines`<sup>Optional</sup> <a name="addPackageManagerToDevEngines" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.addPackageManagerToDevEngines"></a>

```typescript
public readonly addPackageManagerToDevEngines: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add the resolved `packageManager` to `devEngines.packageManager` in `package.json`, setting `onFail` to `ignore`.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="allowLibraryDependencies" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Is the author an organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="authorUrl" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* string

Author's URL / Website.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="autoDetectBin" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `bugsEmail`<sup>Optional</sup> <a name="bugsEmail" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.bugsEmail"></a>

```typescript
public readonly bugsEmail: string;
```

- *Type:* string

The email address to which issues should be reported.

---

##### `bugsUrl`<sup>Optional</sup> <a name="bugsUrl" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.bugsUrl"></a>

```typescript
public readonly bugsUrl: string;
```

- *Type:* string

The url to your project's issue tracker.

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.bundledDeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- *Type:* string[]

List of dependencies to bundle into this module.

These modules will be
added both to the `dependencies` section and `bundledDependencies` section of
your `package.json`.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `pnpm add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `pnpm add` or `npm i` (e.g. `express@^2`) and
this will be what your `package.json` will eventually include.

---

##### `bunVersion`<sup>Optional</sup> <a name="bunVersion" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.bunVersion"></a>

```typescript
public readonly bunVersion: string;
```

- *Type:* string
- *Default:* "latest"

The version of Bun to use if using Bun as a package manager.

---

##### `codeArtifactOptions`<sup>Optional</sup> <a name="codeArtifactOptions" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* projen.javascript.CodeArtifactOptions
- *Default:* undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `deleteOrphanedLockFiles`<sup>Optional</sup> <a name="deleteOrphanedLockFiles" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.deleteOrphanedLockFiles"></a>

```typescript
public readonly deleteOrphanedLockFiles: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically delete lockfiles from package managers that are not the active one.

Only triggered when the lockfile for the configured package
manager already exists.

This is useful when migrating between package managers to avoid conflicts.

---

##### `deps`<sup>Optional</sup> <a name="deps" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]
- *Default:* []

Runtime dependencies of this module.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `pnpm add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `pnpm add` or `npm i` (e.g. `express@^2`) and
this will be what your `package.json` will eventually include.

---

*Example*

```typescript
[ 'express', 'lodash', 'foo@^2' ]
```


##### `description`<sup>Optional</sup> <a name="description" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]
- *Default:* []

Build dependencies for this module.

These dependencies will only be
available in your build environment but will not be fetched when this
module is consumed.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `pnpm add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `pnpm add` or `npm i` (e.g. `express@^2`) and
this will be what your `package.json` will eventually include.

---

*Example*

```typescript
[ 'typescript', '@types/express' ]
```


##### `devEngines`<sup>Optional</sup> <a name="devEngines" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.devEngines"></a>

```typescript
public readonly devEngines: DevEngines;
```

- *Type:* projen.javascript.DevEngines

Configure the `devEngines` field in `package.json`.

The `devEngines.packageManager` field is automatically populated based on
the resolved `packageManager` value. Any fields provided here are merged
with the auto-populated `packageManager` entry.

> [https://docs.npmjs.com/cli/v10/configuring-npm/package-json#devengines](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#devengines)

---

##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`).

Set to an empty string to not include `main` in your package.json

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

Package's Homepage / Website.

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

Keywords to include in `package.json`.

---

##### `license`<sup>Optional</sup> <a name="license" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates if a license should be added.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string
- *Default:* no maximum version is enforced

The maximum node version supported by this package. Most projects should not use this option.

The value indicates that the package is incompatible with any newer versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option.
Consider this option only if your package is known to not function with newer versions of node.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string
- *Default:* no minimum version is enforced

The minimum node version required by this package to function. Most projects should not use this option.

The value indicates that the package is incompatible with any older versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option, even if your package is incompatible with EOL versions of node.
Consider this option only if your package depends on a specific feature, that is not available in other LTS versions.
Setting this option has very high impact on the consumers of your package,
as package managers will actively prevent usage with node versions you have marked as incompatible.

To change the node version of your CI/CD workflows, use `workflowNodeVersion`.

---

##### `npmAccess`<sup>Optional</sup> <a name="npmAccess" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* projen.javascript.NpmAccess
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### `npmProvenance`<sup>Optional</sup> <a name="npmProvenance" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.npmProvenance"></a>

```typescript
public readonly npmProvenance: boolean;
```

- *Type:* boolean
- *Default:* true for public packages, false otherwise

Should provenance statements be generated when the package is published.

A supported package manager is required to publish a package with npm provenance statements and
you will need to use a supported CI/CD provider.

Note that the projen `Release` and `Publisher` components are using `publib` to publish packages,
which is using npm internally and supports provenance statements independently of the package manager used.

> [https://docs.npmjs.com/generating-provenance-statements](https://docs.npmjs.com/generating-provenance-statements)

---

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="npmRegistry" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.npmRegistry"></a>

- *Deprecated:* use `npmRegistryUrl` instead

```typescript
public readonly npmRegistry: string;
```

- *Type:* string

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="npmRegistryUrl" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* string
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="npmTokenSecret" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* string
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `npmTrustedPublishing`<sup>Optional</sup> <a name="npmTrustedPublishing" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.npmTrustedPublishing"></a>

```typescript
public readonly npmTrustedPublishing: boolean;
```

- *Type:* boolean
- *Default:* false

Use trusted publishing for publishing to npmjs.com Needs to be pre-configured on npm.js to work.

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager
- *Default:* Detected from the calling process or `YARN_CLASSIC` if detection fails.

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string
- *Default:* defaults to project name

The "name" in package.json.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="peerDependencyOptions" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* projen.javascript.PeerDependencyOptions

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.peerDeps"></a>

```typescript
public readonly peerDeps: string[];
```

- *Type:* string[]
- *Default:* []

Peer dependencies for this module.

Dependencies listed here are required to
be installed (and satisfied) by the _consumer_ of this library. Using peer
dependencies allows you to ensure that only a single module of a certain
library exists in the `node_modules` tree of your consumers.

Note that prior to npm@7, peer dependencies are _not_ automatically
installed, which means that adding peer dependencies to a library will be a
breaking change for your customers.

Unless `peerDependencyOptions.pinnedDevDependency` is disabled (it is
enabled by default), projen will automatically add a dev dependency with a
pinned version for each peer dependency. This will ensure that you build &
test your module against the lowest peer version required.

---

##### `pnpmVersion`<sup>Optional</sup> <a name="pnpmVersion" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.pnpmVersion"></a>

```typescript
public readonly pnpmVersion: string;
```

- *Type:* string
- *Default:* "10.33.0"

The version of PNPM to use if using PNPM as a package manager.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="repositoryDirectory" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* string

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="scopedPackagesOptions" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.scopedPackagesOptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- *Type:* projen.javascript.ScopedPackagesOptions[]
- *Default:* fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### ~~`scripts`~~<sup>Optional</sup> <a name="scripts" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.scripts"></a>

- *Deprecated:* use `project.addTask()` or `package.setScript()`

```typescript
public readonly scripts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

npm scripts to include.

If a script has the same name as a standard script,
the standard script will be overwritten.
Also adds the script as a task.

---

##### `stability`<sup>Optional</sup> <a name="stability" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.stability"></a>

```typescript
public readonly stability: string;
```

- *Type:* string

Package's Stability.

---

##### `yarnBerryOptions`<sup>Optional</sup> <a name="yarnBerryOptions" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.yarnBerryOptions"></a>

```typescript
public readonly yarnBerryOptions: YarnBerryOptions;
```

- *Type:* projen.javascript.YarnBerryOptions
- *Default:* Yarn Berry v4 with all default options

Options for Yarn Berry.

---

##### `bumpPackage`<sup>Optional</sup> <a name="bumpPackage" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.bumpPackage"></a>

```typescript
public readonly bumpPackage: string;
```

- *Type:* string
- *Default:* A recent version of "commit-and-tag-version"

The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string.

This can be any compatible package version, including the deprecated `standard-version@9`.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="jsiiReleaseVersion" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.jsiiReleaseVersion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* string
- *Default:* "latest"

Version requirement of `publib` which is used to publish modules to npm.

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* number
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `minMajorVersion`<sup>Optional</sup> <a name="minMajorVersion" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.minMajorVersion"></a>

```typescript
public readonly minMajorVersion: number;
```

- *Type:* number
- *Default:* No minimum version is being enforced

Minimal Major version to release.

This can be useful to set to 1, as breaking changes before the 1.x major
release are not incrementing the major version number.

Can not be set together with `majorVersion`.

---

##### `nextVersionCommand`<sup>Optional</sup> <a name="nextVersionCommand" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.nextVersionCommand"></a>

```typescript
public readonly nextVersionCommand: string;
```

- *Type:* string
- *Default:* The next version will be determined based on the commit history and project settings.

A shell command to control the next version to release.

If present, this shell command will be run before the bump is executed, and
it determines what version to release. It will be executed in the following
environment:

- Working directory: the project directory.
- `$VERSION`: the current version. Looks like `1.2.3`.
- `$LATEST_TAG`: the most recent tag. Looks like `prefix-v1.2.3`, or may be unset.
- `$SUGGESTED_BUMP`: the suggested bump action based on commits. One of `major|minor|patch|none`.

The command should print one of the following to `stdout`:

- Nothing: the next version number will be determined based on commit history.
- `x.y.z`: the next version number will be `x.y.z`.
- `major|minor|patch`: the next version number will be the current version number
  with the indicated component bumped.

This setting cannot be specified together with `minMajorVersion`; the invoked
script can be used to achieve the effects of `minMajorVersion`.

---

##### `npmDistTag`<sup>Optional</sup> <a name="npmDistTag" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.npmDistTag"></a>

```typescript
public readonly npmDistTag: string;
```

- *Type:* string
- *Default:* "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* string
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `publishDryRun`<sup>Optional</sup> <a name="publishDryRun" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.publishDryRun"></a>

```typescript
public readonly publishDryRun: boolean;
```

- *Type:* boolean
- *Default:* false

Instead of actually publishing to package managers, just print the publishing command.

---

##### `publishTasks`<sup>Optional</sup> <a name="publishTasks" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.publishTasks"></a>

```typescript
public readonly publishTasks: boolean;
```

- *Type:* boolean
- *Default:* false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

---

##### `releasableCommits`<sup>Optional</sup> <a name="releasableCommits" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.releasableCommits"></a>

```typescript
public readonly releasableCommits: ReleasableCommits;
```

- *Type:* projen.ReleasableCommits
- *Default:* ReleasableCommits.everyCommit()

Find commits that should be considered releasable Used to decide if a release is required.

---

##### `releaseBranches`<sup>Optional</sup> <a name="releaseBranches" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.releaseBranches"></a>

```typescript
public readonly releaseBranches: {[ key: string ]: BranchOptions};
```

- *Type:* {[ key: string ]: projen.release.BranchOptions}
- *Default:* no additional branches are used for release. you can use `addBranch()` to add additional branches.

Defines additional release branches.

A workflow will be created for each
release branch which will publish releases from commits in this branch.
Each release branch _must_ be assigned a major version number which is used
to enforce that versions published from that branch always use that major
version. If multiple branches are used, the `majorVersion` field must also
be provided for the default branch.

---

##### `releaseEnvironment`<sup>Optional</sup> <a name="releaseEnvironment" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.releaseEnvironment"></a>

```typescript
public readonly releaseEnvironment: string;
```

- *Type:* string
- *Default:* no environment used, unless set at the artifact level

The GitHub Actions environment used for the release.

This can be used to add an explicit approval step to the release
or limit who can initiate a release through environment protection rules.

When multiple artifacts are released, the environment can be overwritten
on a per artifact basis.

---

##### ~~`releaseEveryCommit`~~<sup>Optional</sup> <a name="releaseEveryCommit" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.releaseEveryCommit"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.continuous()` instead

```typescript
public readonly releaseEveryCommit: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="releaseFailureIssue" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* boolean
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="releaseFailureIssueLabel" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* string
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### ~~`releaseSchedule`~~<sup>Optional</sup> <a name="releaseSchedule" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.releaseSchedule"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

```typescript
public readonly releaseSchedule: string;
```

- *Type:* string
- *Default:* no scheduled releases

CRON schedule to trigger new releases.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="releaseTagPrefix" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.releaseTagPrefix"></a>

```typescript
public readonly releaseTagPrefix: string;
```

- *Type:* string
- *Default:* "v"

Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers.

Note: this prefix is used to detect the latest tagged version
when bumping, so if you change this on a project with an existing version
history, you may need to manually tag your latest release
with the new prefix.

---

##### `releaseTrigger`<sup>Optional</sup> <a name="releaseTrigger" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* projen.release.ReleaseTrigger
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `releaseWorkflowEnv`<sup>Optional</sup> <a name="releaseWorkflowEnv" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.releaseWorkflowEnv"></a>

```typescript
public readonly releaseWorkflowEnv: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

Build environment variables for release workflows.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="releaseWorkflowName" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* string
- *Default:* "release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="releaseWorkflowSetupSteps" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `versionrcOptions`<sup>Optional</sup> <a name="versionrcOptions" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.versionrcOptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with commit-and-tag-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="workflowContainerImage" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* string
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `workflowRunsOn`<sup>Optional</sup> <a name="workflowRunsOn" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.workflowRunsOn"></a>

```typescript
public readonly workflowRunsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `workflowRunsOnGroup`<sup>Optional</sup> <a name="workflowRunsOnGroup" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.workflowRunsOnGroup"></a>

```typescript
public readonly workflowRunsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### `defaultReleaseBranch`<sup>Required</sup> <a name="defaultReleaseBranch" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* string
- *Default:* "main"

The name of the main release branch.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string
- *Default:* "dist"

A directory which will contain build artifacts.

---

##### `auditDeps`<sup>Optional</sup> <a name="auditDeps" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.auditDeps"></a>

```typescript
public readonly auditDeps: boolean;
```

- *Type:* boolean
- *Default:* false

Run security audit on dependencies.

When enabled, creates an "audit" task that checks for known security vulnerabilities
in dependencies. By default, runs during every build and checks for "high" severity
vulnerabilities or above in all dependencies (including dev dependencies).

---

##### `auditDepsOptions`<sup>Optional</sup> <a name="auditDepsOptions" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.auditDepsOptions"></a>

```typescript
public readonly auditDepsOptions: AuditOptions;
```

- *Type:* projen.javascript.AuditOptions
- *Default:* default options

Security audit options.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="autoApproveUpgrades" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configured).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `biome`<sup>Optional</sup> <a name="biome" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.biome"></a>

```typescript
public readonly biome: boolean;
```

- *Type:* boolean
- *Default:* false

Setup Biome.

---

##### `biomeOptions`<sup>Optional</sup> <a name="biomeOptions" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.biomeOptions"></a>

```typescript
public readonly biomeOptions: BiomeOptions;
```

- *Type:* projen.javascript.BiomeOptions
- *Default:* default options

Biome options.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `buildWorkflowOptions`<sup>Optional</sup> <a name="buildWorkflowOptions" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.buildWorkflowOptions"></a>

```typescript
public readonly buildWorkflowOptions: BuildWorkflowOptions;
```

- *Type:* projen.javascript.BuildWorkflowOptions

Options for PR build workflow.

---

##### ~~`buildWorkflowTriggers`~~<sup>Optional</sup> <a name="buildWorkflowTriggers" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.buildWorkflowTriggers"></a>

- *Deprecated:* - Use `buildWorkflowOptions.workflowTriggers`

```typescript
public readonly buildWorkflowTriggers: Triggers;
```

- *Type:* projen.github.workflows.Triggers
- *Default:* "{ pullRequest: {}, workflowDispatch: {} }"

Build workflow triggers.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="bundlerOptions" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.bundlerOptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- *Type:* projen.javascript.BundlerOptions

Options for `Bundler`.

---

##### `checkLicenses`<sup>Optional</sup> <a name="checkLicenses" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.checkLicenses"></a>

```typescript
public readonly checkLicenses: LicenseCheckerOptions;
```

- *Type:* projen.javascript.LicenseCheckerOptions
- *Default:* no license checks are run during the build and all licenses will be accepted

Configure which licenses should be deemed acceptable for use by dependencies.

This setting will cause the build to fail, if any prohibited or not allowed licenses ares encountered.

---

##### `codeCov`<sup>Optional</sup> <a name="codeCov" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* boolean
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v5 By default, OIDC auth is used. Alternatively a token can be provided via `codeCovTokenSecret`.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="codeCovTokenSecret" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* string
- *Default:* OIDC auth is used

Define the secret name for a specified https://codecov.io/ token.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* current year

The copyright years to put in the LICENSE file.

---

##### `dependabot`<sup>Optional</sup> <a name="dependabot" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.dependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- *Type:* boolean
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="dependabotOptions" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.dependabotOptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* projen.github.DependabotOptions
- *Default:* default options

Options for dependabot.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="depsUpgrade" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.depsUpgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* boolean
- *Default:* `true` for root projects, `false` for subprojects

Use tasks and github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="depsUpgradeOptions" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.depsUpgradeOptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* projen.javascript.UpgradeDependenciesOptions
- *Default:* default options

Options for `UpgradeDependencies`.

---

##### `gitignore`<sup>Optional</sup> <a name="gitignore" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.gitignore"></a>

```typescript
public readonly gitignore: string[];
```

- *Type:* string[]

Additional entries to .gitignore.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.jest"></a>

```typescript
public readonly jest: boolean;
```

- *Type:* boolean
- *Default:* true

Setup jest unit tests.

---

##### `jestOptions`<sup>Optional</sup> <a name="jestOptions" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.jestOptions"></a>

```typescript
public readonly jestOptions: JestOptions;
```

- *Type:* projen.javascript.JestOptions
- *Default:* default options

Jest options.

---

##### ~~`mutableBuild`~~<sup>Optional</sup> <a name="mutableBuild" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.mutableBuild"></a>

- *Deprecated:* - Use `buildWorkflowOptions.mutableBuild`

```typescript
public readonly mutableBuild: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically update files modified during builds to pull-request branches.

This means
that any files synthesized by projen or e.g. test snapshots will always be up-to-date
before a PR is merged.

Implies that PR builds do not have anti-tamper checks.

---

##### ~~`npmignore`~~<sup>Optional</sup> <a name="npmignore" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.npmignore"></a>

- *Deprecated:* - use `project.addPackageIgnore`

```typescript
public readonly npmignore: string[];
```

- *Type:* string[]

Additional entries to .npmignore.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="npmignoreEnabled" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.npmignoreEnabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `npmIgnoreOptions`<sup>Optional</sup> <a name="npmIgnoreOptions" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.npmIgnoreOptions"></a>

```typescript
public readonly npmIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .npmignore file.

---

##### `package`<sup>Optional</sup> <a name="package" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.package"></a>

```typescript
public readonly package: boolean;
```

- *Type:* boolean
- *Default:* true

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.prettier"></a>

```typescript
public readonly prettier: boolean;
```

- *Type:* boolean
- *Default:* false

Setup prettier.

---

##### `prettierOptions`<sup>Optional</sup> <a name="prettierOptions" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.prettierOptions"></a>

```typescript
public readonly prettierOptions: PrettierOptions;
```

- *Type:* projen.javascript.PrettierOptions
- *Default:* default options

Prettier options.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="projenDevDependency" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.projenDevDependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options for .projenrc.js.

---

##### `projenVersion`<sup>Optional</sup> <a name="projenVersion" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.projenVersion"></a>

```typescript
public readonly projenVersion: string;
```

- *Type:* string
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="pullRequestTemplate" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* boolean
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="pullRequestTemplateContents" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* string[]
- *Default:* default content

The contents of the pull request template.

---

##### `release`<sup>Optional</sup> <a name="release" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.release"></a>

```typescript
public readonly release: boolean;
```

- *Type:* boolean
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="releaseToNpm" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.releaseToNpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### ~~`releaseWorkflow`~~<sup>Optional</sup> <a name="releaseWorkflow" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.releaseWorkflow"></a>

- *Deprecated:* see `release`.

```typescript
public readonly releaseWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

DEPRECATED: renamed to `release`.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="workflowBootstrapSteps" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.workflowBootstrapSteps"></a>

```typescript
public readonly workflowBootstrapSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="workflowGitIdentity" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.workflowGitIdentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* default GitHub Actions user

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string
- *Default:* `minNodeVersion` if set, otherwise `lts/*`.

The node version used in GitHub Actions workflows.

Always use this option if your GitHub Actions workflows require a specific to run.

---

##### `workflowPackageCache`<sup>Optional</sup> <a name="workflowPackageCache" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.workflowPackageCache"></a>

```typescript
public readonly workflowPackageCache: boolean;
```

- *Type:* boolean
- *Default:* false

Enable Node.js package cache in GitHub workflows.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="disableTsconfig" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.disableTsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `disableTsconfigDev`<sup>Optional</sup> <a name="disableTsconfigDev" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.disableTsconfigDev"></a>

```typescript
public readonly disableTsconfigDev: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.dev.json` file.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean
- *Default:* false

Docgen by Typedoc.

---

##### `docsDirectory`<sup>Optional</sup> <a name="docsDirectory" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string
- *Default:* "docs"

Docs directory.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="entrypointTypes" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.entrypointTypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- *Type:* string
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.eslint"></a>

```typescript
public readonly eslint: boolean;
```

- *Type:* boolean
- *Default:* true, unless biome is enabled

Setup eslint.

---

##### `eslintOptions`<sup>Optional</sup> <a name="eslintOptions" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.eslintOptions"></a>

```typescript
public readonly eslintOptions: EslintOptions;
```

- *Type:* projen.javascript.EslintOptions
- *Default:* opinionated default options

Eslint options.

---

##### `libdir`<sup>Optional</sup> <a name="libdir" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* boolean
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- *Type:* projen.typescript.ProjenrcOptions

Options for .projenrc.ts.

---

##### `sampleCode`<sup>Optional</sup> <a name="sampleCode" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.sampleCode"></a>

```typescript
public readonly sampleCode: boolean;
```

- *Type:* boolean
- *Default:* true

Generate one-time sample in `src/` and `test/` if there are no files there.

---

##### `srcdir`<sup>Optional</sup> <a name="srcdir" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string
- *Default:* "src"

Typescript sources directory.

---

##### `testdir`<sup>Optional</sup> <a name="testdir" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string
- *Default:* "test"

Jest tests directory. Tests files should be named `xxx.test.ts`.

If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`),
then tests are going to be compiled into `lib/` and executed as javascript.
If the test directory is outside of `src`, then we configure jest to
compile the code in-memory.

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* default options

Custom TSConfig.

---

##### `tsconfigDev`<sup>Optional</sup> <a name="tsconfigDev" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### `tsconfigDevFile`<sup>Optional</sup> <a name="tsconfigDevFile" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.tsconfigDevFile"></a>

```typescript
public readonly tsconfigDevFile: string;
```

- *Type:* string
- *Default:* "tsconfig.dev.json"

The name of the development tsconfig.json file.

---

##### `tsJestOptions`<sup>Optional</sup> <a name="tsJestOptions" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.tsJestOptions"></a>

```typescript
public readonly tsJestOptions: TsJestOptions;
```

- *Type:* projen.typescript.TsJestOptions

Options for ts-jest.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="typescriptVersion" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.typescriptVersion"></a>

```typescript
public readonly typescriptVersion: string;
```

- *Type:* string
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### `cdktfOut`<sup>Optional</sup> <a name="cdktfOut" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.cdktfOut"></a>

```typescript
public readonly cdktfOut: string;
```

- *Type:* string
- *Default:* "cdktf.out"

cdktf.out directory.

---

##### `context`<sup>Optional</sup> <a name="context" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.context"></a>

```typescript
public readonly context: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* { excludeStackIdFromLogicalIds: "true", allowSepCharsInLogicalIds: "true" }

Terraform context features.

---

##### `terraformBinaryName`<sup>Optional</sup> <a name="terraformBinaryName" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.terraformBinaryName"></a>

```typescript
public readonly terraformBinaryName: string;
```

- *Type:* string
- *Default:* "terraform"

The name of the Terraform binary to use. Set to "tofu" to use OpenTofu instead of Terraform.

Note: Due to an upstream cdktn-cli issue, the binary name config may not
propagate correctly. When set to "tofu", the TERRAFORM_BINARY_NAME env var
is also set on all cdktn tasks as a workaround.

> [https://github.com/open-constructs/cdk-terrain/issues/96](https://github.com/open-constructs/cdk-terrain/issues/96)

---

##### `terraformModules`<sup>Optional</sup> <a name="terraformModules" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.terraformModules"></a>

```typescript
public readonly terraformModules: (string | TerraformDependencyConstraint)[];
```

- *Type:* string | <a href="#@jjrawlins/projen-cdktn-app-ts.TerraformDependencyConstraint">TerraformDependencyConstraint</a>[]

Terraform modules to install.

---

##### `terraformProviders`<sup>Optional</sup> <a name="terraformProviders" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.terraformProviders"></a>

```typescript
public readonly terraformProviders: (string | TerraformDependencyConstraint)[];
```

- *Type:* string | <a href="#@jjrawlins/projen-cdktn-app-ts.TerraformDependencyConstraint">TerraformDependencyConstraint</a>[]

Terraform providers to install.

---

##### `cdktnVersion`<sup>Optional</sup> <a name="cdktnVersion" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.cdktnVersion"></a>

```typescript
public readonly cdktnVersion: string;
```

- *Type:* string
- *Default:* the default is "latest".

Minimum version of the CDKTN to depend on.

---

##### `constructsVersion`<sup>Optional</sup> <a name="constructsVersion" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.constructsVersion"></a>

```typescript
public readonly constructsVersion: string;
```

- *Type:* string
- *Default:* the default is "latest".

Minimum version of the `constructs` library to depend on.

---

##### `appEntrypoint`<sup>Optional</sup> <a name="appEntrypoint" id="@jjrawlins/projen-cdktn-app-ts.CdktnTypeScriptAppOptions.property.appEntrypoint"></a>

```typescript
public readonly appEntrypoint: string;
```

- *Type:* string
- *Default:* "main.ts"

The CDKTN app's entrypoint (relative to the source directory, which is "src" by default).

---

### TerraformDependencyConstraint <a name="TerraformDependencyConstraint" id="@jjrawlins/projen-cdktn-app-ts.TerraformDependencyConstraint"></a>

#### Initializer <a name="Initializer" id="@jjrawlins/projen-cdktn-app-ts.TerraformDependencyConstraint.Initializer"></a>

```typescript
import { TerraformDependencyConstraint } from '@jjrawlins/projen-cdktn-app-ts'

const terraformDependencyConstraint: TerraformDependencyConstraint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.TerraformDependencyConstraint.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.TerraformDependencyConstraint.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@jjrawlins/projen-cdktn-app-ts.TerraformDependencyConstraint.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@jjrawlins/projen-cdktn-app-ts.TerraformDependencyConstraint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `source`<sup>Optional</sup> <a name="source" id="@jjrawlins/projen-cdktn-app-ts.TerraformDependencyConstraint.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `version`<sup>Optional</sup> <a name="version" id="@jjrawlins/projen-cdktn-app-ts.TerraformDependencyConstraint.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---



