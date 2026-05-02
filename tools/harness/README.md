# Headless Compatibility Harness

This harness compares serialized terminal state from two implementations:

- reference: xterm.js headless from `reference/xterm.js`
- implementation: the MoonBit terminal snapshot command

It is intentionally command-based so MoonBit internals can change without
rewriting the harness.

## Case Format

Cases live under `tools/harness/cases/`. Each case has:

- `name`: stable test name
- `options`: terminal constructor options
- `writes`: ordered input chunks

Each write can be a string or an object:

```json
{ "text": "hello" }
{ "line": "hello" }
{ "bytes": [102, 111, 111] }
```

## Commands

List cases:

```sh
npm run harness:list
```

Generate reference snapshots:

```sh
npm run harness:update
```

This command writes snapshots under `tools/harness/snapshots/`. It does not
install dependencies or build `reference/xterm.js`.

Run comparison against a MoonBit implementation command:

```sh
MOONBIT_XTERM_SNAPSHOT_CMD='moon run src/tools/snapshot' npm run harness:test
```

The implementation command must read one case JSON object from stdin and write
one snapshot JSON object to stdout.

## Reference Build

The xterm.js submodule must be built before the reference adapter can run. The
adapter looks for:

- `reference/xterm.js/headless/lib-headless/xterm-headless.mjs`
- `reference/xterm.js/headless/lib-headless/xterm-headless.js`

The harness does not build the submodule automatically.
