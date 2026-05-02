# MoonBit xterm Plan

## Goal And Non-Goals

Goal:

- Build a MoonBit implementation of xterm.js behavior, using `reference/xterm.js`
  as the local upstream reference.

Initial scope:

- Headless terminal core.
- Unit tests and coverage workflow.
- Parser, buffer, input handler, and headless public API.

Non-goals for now:

- Compatibility harness as an active gate before the headless core has real
  state.
- Browser DOM integration.
- Renderer implementations.
- Clipboard, keyboard, mouse, selection, IME, and accessibility.
- WebGL, image, and ligature addons.
- Automatic dependency installation or building inside `reference/xterm.js`.

Later browser work should evaluate `moonbit-community/rabbita` for DOM
integration.

## Quality Gates

- Docs-only tasks require doc review only.
- MoonBit source tasks require:
  - `moon check`
  - `moon test`
  - `moon fmt`
  - `moon info`
- Coverage workflow tasks require:
  - `moon coverage analyze -- -f summary`
  - at least one non-test MoonBit source file in the target package
- Deferred harness tasks require:
  - `npm run harness:check`
  - `npm run harness:list`
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
- `deferred`

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

Gate: deferred until the headless core has real state
Status: deferred

| ID | status | target | depends on | acceptance | validation | commit scope |
|---|---|---|---|---|---|---|
| P0.1 | deferred | `package.json` harness scripts | real headless state | scripts exist for harness check, list, reference, update, and test | `npm run harness:check`; `npm run harness:list` | `test` |
| P0.2 | deferred | `tools/harness/cases/headless-basic.json` | P0.1 | first headless fixture suite covers plain text, CRLF, UTF-8 bytes, CJK width, SGR, scrollback, and alt buffer | `npm run harness:list` | `test` |
| P0.3 | deferred | `tools/harness/reference-xterm.mjs` | P0.1, P0.2 | reference runner reads one case and writes one snapshot JSON object | `npm run harness:check` | `test` |
| P0.4 | deferred | `tools/harness/run.mjs` | P0.1, P0.2, P0.3 | harness can list cases, generate reference snapshots, and compare implementation snapshots through a command interface | `npm run harness:check`; `npm run harness:list` | `test` |
| P0.5 | deferred | `tools/harness/README.md` | P0.1-P0.4 | runner contract, commands, and reference-build expectations are documented | doc review | `docs` |

Phase 0 notes:

- The harness scaffold is parked. Do not expand it until there is a real
  headless terminal state to snapshot.
- The reference adapter expects a prebuilt xterm.js headless bundle.
- The harness does not build the submodule automatically.
- Reference snapshots may be generated under `tools/harness/snapshots/` by an
  explicit update command.

### Phase 1: Project Skeleton

Gate: serial after Phase 0
Status: done

| ID | status | target | depends on | acceptance | validation | commit scope |
|---|---|---|---|---|---|---|
| P1.1 | done | `moon.mod.json` and root package setup | Phase 0 | MoonBit project exists and can run empty checks | `moon check`; `moon test`; `moon fmt`; `moon info` | `chore` |
| P1.2 | done | first headless package | P1.1 | initial package boundary exists for the headless core | `moon check`; `moon test`; `moon fmt`; `moon info` | `feat` |
| P1.3 | done | package smoke test | P1.2 | `moon test` has a minimal package-level smoke test without fake terminal behavior | `moon check`; `moon test`; `moon fmt`; `moon info` | `test` |
| P1.4 | done | remove placeholder snapshot surface | P1.3 | skeleton exposes no fake snapshot command or terminal snapshot API | `moon check`; `moon test`; `moon fmt`; `moon info` | `chore` |

Phase 1 notes:

- Phase 1 deliberately has no compatibility snapshot command.
- Harness integration resumes only after real headless terminal state exists.

### Phase 2: Unit Test And Coverage Workflow

Gate: serial after Phase 1
Status: done

Reference files:

- `reference/xterm.js/src/common/*.test.ts`
- `reference/xterm.js/src/common/parser/*.test.ts`
- `reference/xterm.js/src/common/buffer/*.test.ts`

| ID | status | target | depends on | acceptance | validation | commit scope |
|---|---|---|---|---|---|---|
| P2.1 | done | coverage command baseline | first non-test MoonBit source file | `moon coverage analyze -- -f summary` is verified on a package with source coverage data | `moon coverage analyze -- -f summary` | `test` |
| P2.2 | done | unit-test port inventory | Phase 1 | xterm.js unit tests are grouped into MoonBit package targets | doc review | `docs` |
| P2.3 | done | first pure unit test port | P2.2 | one pure xterm.js unit-test file is represented as MoonBit tests before implementation work expands | `moon check`; `moon test`; `moon fmt`; `moon info`; coverage summary | `test` |

Phase 2 notes:

- First pure port: `reference/xterm.js/src/common/Event.test.ts` to
  `src/common/event_test.mbt`.
- Coverage baseline: `src/common/event.mbt: 22/26`, `Total: 22/26`.

### Phase 3: Buffer Core

Gate: serial/parallel after Phase 2
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
| P3.1 | todo | attribute and cell data | Phase 2 | cell content, width, codepoint, and attrs are covered by unit tests | `moon check`; `moon test`; `moon fmt`; `moon info`; coverage summary | `feat(buffer)` |
| P3.2 | todo | buffer line | P3.1 | line get/set/insert/delete/translate behavior is covered by unit tests | `moon check`; `moon test`; `moon fmt`; `moon info`; coverage summary | `feat(buffer)` |
| P3.3 | todo | circular list | Phase 2 | bounded scrollback storage semantics are covered by unit tests | `moon check`; `moon test`; `moon fmt`; `moon info`; coverage summary | `feat(buffer)` |
| P3.4 | todo | normal and alternate buffers | P3.2, P3.3 | active buffer, cursor, viewport, base, and basic resize state are covered by unit tests | `moon check`; `moon test`; `moon fmt`; `moon info`; coverage summary | `feat(buffer)` |

### Phase 4: Parser Core

Gate: serial/parallel after Phase 2
Status: todo

Reference files:

- `reference/xterm.js/src/common/parser/Params.ts`
- `reference/xterm.js/src/common/parser/EscapeSequenceParser.ts`
- `reference/xterm.js/src/common/parser/OscParser.ts`
- `reference/xterm.js/src/common/parser/DcsParser.ts`
- `reference/xterm.js/src/common/parser/ApcParser.ts`

| ID | status | target | depends on | acceptance | validation | commit scope |
|---|---|---|---|---|---|---|
| P4.1 | todo | params and subparams | Phase 2 | parameter parsing and array conversion behavior are covered by unit tests | `moon check`; `moon test`; `moon fmt`; `moon info`; coverage summary | `feat(parser)` |
| P4.2 | todo | VT transition table | P4.1 | table-driven state transitions are represented and unit-tested | `moon check`; `moon test`; `moon fmt`; `moon info`; coverage summary | `feat(parser)` |
| P4.3 | todo | print and execute dispatch | P4.2 | printable and C0/C1 execute paths are covered by unit tests | `moon check`; `moon test`; `moon fmt`; `moon info`; coverage summary | `feat(parser)` |
| P4.4 | todo | CSI and ESC dispatch | P4.3 | handler registration, fallback, prefix, intermediate, and final-byte behavior are covered by unit tests | `moon check`; `moon test`; `moon fmt`; `moon info`; coverage summary | `feat(parser)` |
| P4.5 | todo | OSC, DCS, and APC dispatch | P4.4 | string sequence lifecycle and handler dispatch are covered by unit tests | `moon check`; `moon test`; `moon fmt`; `moon info`; coverage summary | `feat(parser)` |

### Phase 5: Input Handler MVP

Gate: after Phase 3 and Phase 4
Status: todo

Reference file:

- `reference/xterm.js/src/common/InputHandler.ts`

| ID | status | target | depends on | acceptance | validation | commit scope |
|---|---|---|---|---|---|---|
| P5.1 | todo | printable text | Phase 3, Phase 4 | ASCII, UTF-8 bytes, CJK width, and simple wrapping are covered by unit tests | `moon check`; `moon test`; `moon fmt`; `moon info`; coverage summary | `feat(input)` |
| P5.2 | todo | C0 controls | P5.1 | BEL, LF, VT, FF, CR, BS, HT, SO, and SI behavior is covered by unit tests | `moon check`; `moon test`; `moon fmt`; `moon info`; coverage summary | `feat(input)` |
| P5.3 | todo | cursor movement | P5.2 | cursor movement CSI sequences are tested against buffer state | `moon check`; `moon test`; `moon fmt`; `moon info`; coverage summary | `feat(input)` |
| P5.4 | todo | erase and edit operations | P5.3 | erase display/line and insert/delete chars/lines are covered by unit tests | `moon check`; `moon test`; `moon fmt`; `moon info`; coverage summary | `feat(input)` |
| P5.5 | todo | scroll region and basic scroll | P5.4 | scrollback and viewport behavior are covered by unit tests | `moon check`; `moon test`; `moon fmt`; `moon info`; coverage summary | `feat(input)` |
| P5.6 | todo | SGR basics | P5.5 | foreground/background and common style attrs are covered by unit tests | `moon check`; `moon test`; `moon fmt`; `moon info`; coverage summary | `feat(input)` |

### Phase 6: Headless API

Gate: after Phase 5
Status: todo

Reference files:

- `reference/xterm.js/src/common/CoreTerminal.ts`
- `reference/xterm.js/src/headless/Terminal.ts`
- `reference/xterm.js/src/headless/public/Terminal.ts`

| ID | status | target | depends on | acceptance | validation | commit scope |
|---|---|---|---|---|---|---|
| P6.1 | todo | terminal construction and options | Phase 5 | rows, cols, options, modes, and reset defaults are covered by unit tests | `moon check`; `moon test`; `moon fmt`; `moon info`; coverage summary | `feat(headless)` |
| P6.2 | todo | write handling | P6.1 | `write`, `writeln`, and bytes input are covered by unit tests | `moon check`; `moon test`; `moon fmt`; `moon info`; coverage summary | `feat(headless)` |
| P6.3 | todo | public buffer views | P6.2 | public buffer access is covered by API tests | `moon check`; `moon test`; `moon fmt`; `moon info`; coverage summary | `feat(headless)` |
| P6.4 | todo | parser hook API | P6.3 | CSI, OSC, DCS, ESC, and APC custom handlers have public API tests | `moon check`; `moon test`; `moon fmt`; `moon info`; coverage summary | `feat(headless)` |
| P6.5 | todo | event subscription | P6.4 | data, binary, cursor, line feed, render, resize, scroll, title, and write parsed events are tested | `moon check`; `moon test`; `moon fmt`; `moon info`; coverage summary | `feat(headless)` |

### Phase 7: Compatibility Harness

Gate: after Phase 6
Status: deferred

| ID | status | target | depends on | acceptance | validation | commit scope |
|---|---|---|---|---|---|---|
| P7.1 | deferred | exact snapshot adapter | Phase 6 | MoonBit snapshots are derived from real terminal state and match the reference schema | `moon check`; `moon test`; `npm run harness:check`; `npm run harness:list` | `test(harness)` |
| P7.2 | deferred | headless fixture comparison | P7.1 | representative headless fixtures compare against xterm.js reference snapshots | `npm run harness:test`; `moon check`; `moon test` | `test(harness)` |
| P7.3 | deferred | compatibility expansion | P7.2 | DEC modes, OSC, device status, charset handling, mouse protocol, kitty keyboard, and DECRQSS are covered by compatibility cases | `npm run harness:test`; `moon check`; `moon test` | `test(harness)` |

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
