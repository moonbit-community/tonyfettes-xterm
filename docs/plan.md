# MoonBit xterm Plan

## Current Decisions

- Use `reference/xterm.js` as the behavior reference.
- Build the test harness before filling in the terminal implementation.
- First implementation target is the headless terminal core.
- Browser work is deferred.
- Later browser rendering should evaluate `moonbit-community/rabbita` for DOM integration.
- Use Conventional Commits.

## Milestone 0: Test Harness

Create a harness that can compare xterm.js headless behavior with the MoonBit implementation.

Required pieces:

- Case JSON format for terminal options and ordered writes.
- Snapshot JSON format for terminal state and emitted events.
- xterm.js headless reference runner.
- MoonBit runner command interface.
- First small fixture suite for plain text, UTF-8 bytes, CJK width, SGR, scrollback, and alternate buffer.
- Snapshot comparison command.
- Clear failure output that names the case and mismatched snapshot section.

MoonBit runner contract:

- Read one case JSON object from stdin.
- Write one snapshot JSON object to stdout.
- Exit non-zero on invalid input or execution failure.

Snapshot fields:

- rows and columns
- cursor position
- viewport and scrollback positions
- active buffer
- normal and alternate buffer metadata
- buffer line text
- wrapped line flags
- cell width and attributes
- terminal modes
- emitted events

The harness must not install dependencies, build the submodule, or mutate `reference/xterm.js` automatically.

## Milestone 1: Project Skeleton

- Add `moon.mod.json`.
- Add the first MoonBit package.
- Add the initial MoonBit snapshot command consumed by the harness.
- Add terminal state snapshot helpers.
- Add the first intentionally failing MoonBit-side harness fixture.

## Milestone 2: Buffer Core

- Attribute data
- Cell data
- Buffer line
- Circular scrollback storage
- Normal and alternate buffers
- Basic resize behavior

Reference files:

- `reference/xterm.js/src/common/buffer/AttributeData.ts`
- `reference/xterm.js/src/common/buffer/CellData.ts`
- `reference/xterm.js/src/common/buffer/BufferLine.ts`
- `reference/xterm.js/src/common/CircularList.ts`
- `reference/xterm.js/src/common/buffer/Buffer.ts`
- `reference/xterm.js/src/common/buffer/BufferSet.ts`

## Milestone 3: Parser Core

- Params and subparams
- VT transition table
- Handler registration
- Print dispatch
- Execute dispatch
- CSI dispatch
- OSC dispatch
- DCS dispatch
- ESC dispatch
- APC dispatch

Reference files:

- `reference/xterm.js/src/common/parser/Params.ts`
- `reference/xterm.js/src/common/parser/EscapeSequenceParser.ts`
- `reference/xterm.js/src/common/parser/OscParser.ts`
- `reference/xterm.js/src/common/parser/DcsParser.ts`
- `reference/xterm.js/src/common/parser/ApcParser.ts`

## Milestone 4: Input Handler MVP

- Printable text
- C0 controls: BEL, LF, VT, FF, CR, BS, HT, SO, SI
- Cursor movement
- Erase in display and erase in line
- Insert and delete chars
- Insert and delete lines
- Scroll region
- Basic scroll operations
- SGR basics

Reference file:

- `reference/xterm.js/src/common/InputHandler.ts`

## Milestone 5: Headless API

- Terminal construction
- Options
- Buffer service
- Parser and input handler wiring
- Write handling
- `write`
- `writeln`
- `resize`
- `clear`
- `reset`
- Public buffer views
- Parser hook API
- Event subscription

Reference files:

- `reference/xterm.js/src/common/CoreTerminal.ts`
- `reference/xterm.js/src/headless/Terminal.ts`
- `reference/xterm.js/src/headless/public/Terminal.ts`

## Milestone 6: Compatibility Expansion

- DEC private modes
- Origin mode
- Wraparound
- Reverse wraparound
- Save and restore cursor
- OSC title commands
- OSC color commands
- Hyperlink tracking
- Device status reports
- Charset handling
- Mouse protocol state
- Kitty keyboard protocol
- DECRQSS

## Later Browser Work

- Evaluate `moonbit-community/rabbita`.
- DOM open, focus, and blur.
- Textarea input.
- Keyboard translation.
- Paste handling.
- Simple renderer.
- Viewport scrolling.

## Later Addons

- serialize
- search
- fit
- attach
- clipboard
- unicode providers
- web links
- image, sixel, and kitty graphics
- webgl
- ligatures
