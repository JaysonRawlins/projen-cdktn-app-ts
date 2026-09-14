/**
 * The default `typescript` version range handed to the generated project.
 *
 * Generated apps run `cdktf.json`'s `app` command through `ts-node`, and
 * ts-node 10 (its last release) reads `ts.sys` off the TypeScript module at
 * startup. TypeScript 7's native port no longer exposes that surface, so a
 * floating `typescript` dependency resolves to 7.x and every synth dies with
 * `TypeError: Cannot read properties of undefined (reading 'fileExists')` in
 * ts-node's `configuration.js`.
 *
 * Capping below 7 keeps generated apps synthesizable. TypeScript 6 is verified
 * to work with ts-node 10. Callers who need a different version can still pass
 * `typescriptVersion` explicitly — at which point keeping ts-node working is
 * their problem to solve (for example by moving the `app` command to tsx).
 */
export const DEFAULT_TYPESCRIPT_VERSION = '^6.0.0';
