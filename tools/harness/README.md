# Headless Compatibility Harness

This starter harness compares serialized terminal text state from two
implementations:

- reference: xterm.js headless from `reference/xterm.js`
- implementation: the MoonBit terminal through `tools/harness/moonbit-terminal.mjs`

It is intentionally command-based so MoonBit internals can change without
rewriting the harness.

The current fixture set is deliberately small. It only covers behavior already
present in the MoonBit headless path: printable ASCII, CR, LF, BS, wrapping, and
bottom-row scroll.

## Case Format

Cases live under `tools/harness/cases/`. Each case has:

- `name`: stable test name
- `options`: terminal constructor options
- `writes`: ordered input chunks

Each write can be a string or an object:

```json
{ "text": "hello" }
```

`line`, byte writes, SGR, CSI, UTF-8 decoding, CJK width, alternate buffer, and
DOM behavior are deferred until the parser/input work supports them.

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
