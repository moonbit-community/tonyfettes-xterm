# Headless Compatibility Harness

This harness compares serialized headless terminal state from two
implementations:

- reference: xterm.js headless from `reference/xterm.js`
- implementation: the MoonBit terminal through `tools/harness/moonbit-terminal.mjs`

It is intentionally command-based so MoonBit internals can change without
rewriting the harness.

The fixture set covers behavior currently present in the MoonBit headless path:
printable text, UTF-8 byte writes, CR/LF/BS, wrapping, scrollback, CSI cursor
movement, SGR text flow, alternate buffer switching, DEC modes, OSC title
events, bell events, input data events, scroll APIs, and clear.

## Case Format

Cases live under `tools/harness/cases/`. Each case has:

- `name`: stable test name
- `options`: terminal constructor options
- `steps`: ordered operations

Each step can be a string write or an object:

```json
{ "text": "hello" }
```

Supported object steps:

```json
{ "bytes": [230, 150, 135] }
{ "writeln": "hello" }
{ "writelnBytes": [102, 111, 111] }
{ "input": "kbd" }
{ "resize": { "cols": 10, "rows": 5 } }
{ "scrollLines": -1 }
{ "scrollPages": 1 }
{ "scrollToLine": 0 }
{ "scrollToTop": true }
{ "scrollToBottom": true }
{ "clear": true }
{ "reset": true }
```

The adapters also accept the older `writes` array for compatibility with the
starter fixtures.

## Snapshot Format

Each adapter reads one case JSON object from stdin and writes one snapshot JSON
object to stdout:

- `case`, `cols`, `rows`
- `screen` and `lines`
- `buffer`: active buffer type, cursor, viewport, base, and backing length
- `modes`: public headless mode snapshot
- `events`: title events, data events, and bell count

## Commands

List cases:

```sh
npm run harness:list
```

Build the xterm.js headless reference:

```sh
npm run harness:prepare-reference
```

Generate reference snapshots:

```sh
npm run harness:update
```

This command writes snapshots under `tools/harness/snapshots/`. It does not
install dependencies or build `reference/xterm.js`.

Run comparison against a MoonBit implementation command once that command exists:

```sh
npm run harness:test
```

Run only the MoonBit side, without a built xterm.js reference:

```sh
npm run harness:moonbit
```

The implementation command must read one case JSON object from stdin and write
one snapshot JSON object to stdout.

## Reference Build

The xterm.js submodule must be built before the reference adapter can run. The
adapter looks for:

- `reference/xterm.js/headless/lib-headless/xterm-headless.mjs`
- `reference/xterm.js/headless/lib-headless/xterm-headless.js`

Use `npm run harness:prepare-reference` to install the submodule dependencies and
build the headless bundle. `npm run harness:test` does not build the submodule
automatically; it only compares the already-built reference with the MoonBit
implementation.
