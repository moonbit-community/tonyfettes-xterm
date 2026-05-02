# MoonBit xterm Plan

## Goal And Non-Goals

Goal:

- Build a MoonBit implementation of xterm.js behavior, using `reference/xterm.js`
  as the local upstream reference.

Initial scope:

- Headless terminal core.
- Compatibility harness.
- Parser, buffer, input handler, and headless public API.

Non-goals for now:

- Browser DOM integration.
- Renderer implementations.
- Clipboard, keyboard, mouse, selection, IME, and accessibility.
- WebGL, image, and ligature addons.
- Automatic dependency installation or building inside `reference/xterm.js`.

Later browser work should evaluate `moonbit-community/rabbita` for DOM
integration.

## Quality Gates

- Docs-only tasks require doc review only.
- Harness tasks require:
  - `npm run harness:check`
  - `npm run harness:list`
- MoonBit source tasks require:
  - `moon check`
  - `moon test`
  - `moon fmt`
  - `moon info`
- Review generated `.mbti` changes whenever `moon info` changes public API
  surface.
- The harness must not install dependencies, build the xterm.js submodule, or
  mutate files under `reference/xterm.js`.

## Task Template

Status values:

- `done`
- `active`
- `todo`
- `blocked`

Task fields:

- `ID`
- `status`
- `target`
- `depends on`
- `acceptance`
- `validation`
- `commit scope`

## Phase Board

### Phase 0: Harness Scaffold

Gate: serial
Status: done

| ID | status | target | depends on | acceptance | validation | commit scope |
|---|---|---|---|---|---|---|
| P0.1 | done | `package.json` harness scripts | none | scripts exist for harness check, list, reference, update, and test | `npm run harness:check`; `npm run harness:list` | `test` |
| P0.2 | done | `tools/harness/cases/headless-basic.json` | P0.1 | first headless fixture suite covers plain text, CRLF, UTF-8 bytes, CJK width, SGR, scrollback, and alt buffer | `npm run harness:list` | `test` |
| P0.3 | done | `tools/harness/reference-xterm.mjs` | P0.1, P0.2 | reference runner reads one case from stdin and writes one snapshot JSON object to stdout | `npm run harness:check` | `test` |
| P0.4 | done | `tools/harness/run.mjs` | P0.1, P0.2, P0.3 | harness can list cases, generate reference snapshots, and compare implementation snapshots through a command interface | `npm run harness:check`; `npm run harness:list` | `test` |
| P0.5 | done | `tools/harness/README.md` | P0.1-P0.4 | runner contract, commands, and reference-build expectations are documented | doc review | `docs` |

Phase 0 notes:

- The reference adapter expects a prebuilt xterm.js headless bundle.
- The harness does not build the submodule automatically.
- Reference snapshots may be generated under `tools/harness/snapshots/` by an
  explicit update command.

### Phase 1: Project Skeleton

Gate: serial after Phase 0
Status: todo

| ID | status | target | depends on | acceptance | validation | commit scope |
|---|---|---|---|---|---|---|
| P1.1 | todo | `moon.mod.json` and root package setup | Phase 0 | MoonBit project exists and can run empty checks | `moon check`; `moon test`; `moon fmt`; `moon info` | `chore` |
| P1.2 | todo | first headless package | P1.1 | initial package boundary exists for the headless core | `moon check`; `moon test`; `moon fmt`; `moon info` | `feat` |
| P1.3 | todo | MoonBit snapshot command | P1.2 | command reads one harness case from stdin and writes snapshot JSON to stdout | `moon check`; `moon test`; `npm run harness:list` | `test` |
| P1.4 | todo | terminal snapshot helpers | P1.3 | snapshot helpers can represent empty terminal state in the harness schema | `moon check`; `moon test`; `moon fmt`; `moon info` | `test` |

### Phase 2: Buffer Core

Gate: serial/parallel after Phase 1
Status: todo

Reference files:

- `reference/xterm.js/src/common/buffer/AttributeData.ts`
- `reference/xterm.js/src/common/buffer/CellData.ts`
- `reference/xterm.js/src/common/buffer/BufferLine.ts`
- `reference/xterm.js/src/common/CircularList.ts`
- `reference/xterm.js/src/common/buffer/Buffer.ts`
- `reference/xterm.js/src/common/buffer/BufferSet.ts`

| ID | status | target | depends on | acceptance | validation | commit scope |
|---|---|---|---|---|---|---|
| P2.1 | todo | attribute and cell data | Phase 1 | cell content, width, codepoint, and attrs match the harness snapshot schema | `moon check`; `moon test`; `moon fmt`; `moon info` | `feat(buffer)` |
| P2.2 | todo | buffer line | P2.1 | line get/set/insert/delete/translate behavior is covered by tests | `moon check`; `moon test`; `moon fmt`; `moon info` | `feat(buffer)` |
| P2.3 | todo | circular list | P2.1 | bounded scrollback storage semantics are covered by tests | `moon check`; `moon test`; `moon fmt`; `moon info` | `feat(buffer)` |
| P2.4 | todo | normal and alternate buffers | P2.2, P2.3 | active buffer, cursor, viewport, base, and basic resize state are covered by tests | `moon check`; `moon test`; `moon fmt`; `moon info` | `feat(buffer)` |

### Phase 3: Parser Core

Gate: after Phase 2
Status: todo

Reference files:

- `reference/xterm.js/src/common/parser/Params.ts`
- `reference/xterm.js/src/common/parser/EscapeSequenceParser.ts`
- `reference/xterm.js/src/common/parser/OscParser.ts`
- `reference/xterm.js/src/common/parser/DcsParser.ts`
- `reference/xterm.js/src/common/parser/ApcParser.ts`

| ID | status | target | depends on | acceptance | validation | commit scope |
|---|---|---|---|---|---|---|
| P3.1 | todo | params and subparams | Phase 2 | parameter parsing and array conversion behavior are covered by tests | `moon check`; `moon test`; `moon fmt`; `moon info` | `feat(parser)` |
| P3.2 | todo | VT transition table | P3.1 | table-driven state transitions are represented and smoke-tested | `moon check`; `moon test`; `moon fmt`; `moon info` | `feat(parser)` |
| P3.3 | todo | print and execute dispatch | P3.2 | printable and C0/C1 execute paths are covered by tests | `moon check`; `moon test`; `moon fmt`; `moon info` | `feat(parser)` |
| P3.4 | todo | CSI and ESC dispatch | P3.3 | handler registration, fallback, prefix, intermediate, and final-byte behavior are covered | `moon check`; `moon test`; `moon fmt`; `moon info` | `feat(parser)` |
| P3.5 | todo | OSC, DCS, and APC dispatch | P3.4 | string sequence lifecycle and handler dispatch are covered | `moon check`; `moon test`; `moon fmt`; `moon info` | `feat(parser)` |

### Phase 4: Input Handler MVP

Gate: after Phase 3
Status: todo

Reference file:

- `reference/xterm.js/src/common/InputHandler.ts`

| ID | status | target | depends on | acceptance | validation | commit scope |
|---|---|---|---|---|---|---|
| P4.1 | todo | printable text | Phase 3 | ASCII, UTF-8 bytes, CJK width, and simple wrapping match harness fixtures | `moon check`; `moon test`; `npm run harness:test`; `moon fmt`; `moon info` | `feat(input)` |
| P4.2 | todo | C0 controls | P4.1 | BEL, LF, VT, FF, CR, BS, HT, SO, and SI behavior is tested | `moon check`; `moon test`; `moon fmt`; `moon info` | `feat(input)` |
| P4.3 | todo | cursor movement | P4.2 | cursor movement CSI sequences are tested against buffer state | `moon check`; `moon test`; `moon fmt`; `moon info` | `feat(input)` |
| P4.4 | todo | erase and edit operations | P4.3 | erase display/line and insert/delete chars/lines are tested | `moon check`; `moon test`; `moon fmt`; `moon info` | `feat(input)` |
| P4.5 | todo | scroll region and basic scroll | P4.4 | scrollback and viewport behavior are tested | `moon check`; `moon test`; `npm run harness:test`; `moon fmt`; `moon info` | `feat(input)` |
| P4.6 | todo | SGR basics | P4.5 | foreground/background and common style attrs appear in snapshots | `moon check`; `moon test`; `npm run harness:test`; `moon fmt`; `moon info` | `feat(input)` |

### Phase 5: Headless API

Gate: after Phase 4
Status: todo

Reference files:

- `reference/xterm.js/src/common/CoreTerminal.ts`
- `reference/xterm.js/src/headless/Terminal.ts`
- `reference/xterm.js/src/headless/public/Terminal.ts`

| ID | status | target | depends on | acceptance | validation | commit scope |
|---|---|---|---|---|---|---|
| P5.1 | todo | terminal construction and options | Phase 4 | rows, cols, options, modes, and reset defaults are covered | `moon check`; `moon test`; `moon fmt`; `moon info` | `feat(headless)` |
| P5.2 | todo | write handling | P5.1 | `write`, `writeln`, and bytes input match harness fixtures | `moon check`; `moon test`; `npm run harness:test`; `moon fmt`; `moon info` | `feat(headless)` |
| P5.3 | todo | public buffer views | P5.2 | public buffer snapshot access is complete enough for harness comparison | `moon check`; `moon test`; `npm run harness:test`; `moon fmt`; `moon info` | `feat(headless)` |
| P5.4 | todo | parser hook API | P5.3 | CSI, OSC, DCS, ESC, and APC custom handlers have public API tests | `moon check`; `moon test`; `moon fmt`; `moon info` | `feat(headless)` |
| P5.5 | todo | event subscription | P5.4 | data, binary, cursor, line feed, render, resize, scroll, title, and write parsed events are tested | `moon check`; `moon test`; `npm run harness:test`; `moon fmt`; `moon info` | `feat(headless)` |

### Phase 6: Compatibility Expansion

Gate: after Phase 5
Status: todo

| ID | status | target | depends on | acceptance | validation | commit scope |
|---|---|---|---|---|---|---|
| P6.1 | todo | DEC private modes | Phase 5 | selected mode set/reset behavior matches xterm.js fixtures | `moon check`; `moon test`; `npm run harness:test`; `moon fmt`; `moon info` | `feat(vt)` |
| P6.2 | todo | origin, wraparound, reverse wraparound | P6.1 | cursor and wrapping behavior match fixtures | `moon check`; `moon test`; `npm run harness:test`; `moon fmt`; `moon info` | `feat(vt)` |
| P6.3 | todo | save and restore cursor | P6.2 | cursor, attrs, charset, origin, and wrap mode restore behavior is tested | `moon check`; `moon test`; `moon fmt`; `moon info` | `feat(vt)` |
| P6.4 | todo | OSC title, color, and hyperlink commands | P6.3 | title/color/link behavior is visible in snapshots or events | `moon check`; `moon test`; `npm run harness:test`; `moon fmt`; `moon info` | `feat(vt)` |
| P6.5 | todo | device status reports and charset handling | P6.4 | response events and charset substitutions are tested | `moon check`; `moon test`; `moon fmt`; `moon info` | `feat(vt)` |
| P6.6 | todo | mouse protocol and kitty keyboard protocol | P6.5 | mode state and emitted data are covered for representative cases | `moon check`; `moon test`; `moon fmt`; `moon info` | `feat(vt)` |
| P6.7 | todo | DECRQSS | P6.6 | representative request status string behavior is covered | `moon check`; `moon test`; `moon fmt`; `moon info` | `feat(vt)` |

### Later Browser Work

Status: deferred

- Evaluate `moonbit-community/rabbita`.
- DOM open, focus, and blur.
- Textarea input.
- Keyboard translation.
- Paste handling.
- Simple renderer.
- Viewport scrolling.

### Later Addons

Status: deferred

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
