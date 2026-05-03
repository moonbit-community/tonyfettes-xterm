# MoonBit xterm Plan

## Goal And Non-Goals

Goal:

- Build a MoonBit implementation of xterm.js behavior, using `reference/xterm.js`
  as the local upstream reference.

Initial scope:

- Headless terminal core.
- Unit tests and coverage workflow.
- Parser, buffer, input handler, and headless public API.
- Browser DOM integration is planned after the headless API and compatibility
  harness, starting with a render-only Rabbita proof of concept.

Non-goals for now:

- Compatibility harness as an active gate before the headless core has real
  state.
- Browser input in the first DOM proof of concept.
- WebGL, image, and ligature addons.
- Automatic dependency installation or building inside `reference/xterm.js`.

Browser work should evaluate `moonbit-community/rabbita` as the DOM integration
layer while keeping the terminal core headless-first.

## Quality Gates

- Docs-only tasks require doc review only.
- MoonBit source tasks require:
  - `moon check`
  - `moon test`
  - `moon fmt`
  - `moon info`
  - `moon coverage analyze -- -f summary`
- Every implementation phase closeout must include the current coverage
  summary in the handoff, even when coverage does not gate the commit.
- Coverage workflow tasks require:
  - `moon coverage analyze -- -f summary`
  - at least one non-test MoonBit source file in the target package
- Deferred harness tasks require:
  - `npm run harness:check`
  - `npm run harness:list`
- Browser DOM tasks require:
  - `moon check --target js`
  - `moon build --target js`
  - a browser smoke command once the example runner exists
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

Gate: available for a starter harness after Phase 3 plus the minimal headless
write path
Status: done

| ID | status | target | depends on | acceptance | validation | commit scope |
|---|---|---|---|---|---|---|
| P0.1 | done | `package.json` harness scripts | minimal headless write path | scripts exist for harness check, list, reference, update, implementation-only, and test | `npm run harness:check`; `npm run harness:list` | `test` |
| P0.2 | done | `tools/harness/cases/headless-basic.json` | P0.1 | first headless fixture suite covers plain text, CRLF, BS, wrapping, and scrollback cases supported by current state | `npm run harness:list` | `test` |
| P0.3 | done | `tools/harness/reference-xterm.mjs` | P0.1, P0.2 | reference runner reads one case and writes one snapshot JSON object | `npm run harness:check` | `test` |
| P0.4 | done | `tools/harness/run.mjs` | P0.1, P0.2, P0.3 | harness can list cases, generate reference snapshots, run MoonBit snapshots, and compare through a command interface | `npm run harness:check`; `npm run harness:list`; `npm run harness:moonbit` | `test` |
| P0.5 | done | `tools/harness/README.md` | P0.1-P0.4 | runner contract, commands, and reference-build expectations are documented | doc review | `docs` |

Phase 0 notes:

- A starter harness can now target the minimal headless state surface:
  printable ASCII, CR, LF, BS, basic wrapping, and bottom-row scroll.
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
Status: done

Reference files:

- `reference/xterm.js/src/common/buffer/AttributeData.ts`
- `reference/xterm.js/src/common/buffer/CellData.ts`
- `reference/xterm.js/src/common/buffer/BufferLine.ts`
- `reference/xterm.js/src/common/CircularList.ts`
- `reference/xterm.js/src/common/buffer/Buffer.ts`
- `reference/xterm.js/src/common/buffer/BufferSet.ts`

| ID | status | target | depends on | acceptance | validation | commit scope |
|---|---|---|---|---|---|---|
| P3.1 | done | attribute and cell data | Phase 2 | cell content, width, codepoint, and attrs are covered by unit tests | `moon check`; `moon test`; `moon fmt`; `moon info`; coverage summary | `feat(buffer)` |
| P3.2 | done | buffer line | P3.1 | line get/set/insert/delete/translate behavior is covered by unit tests | `moon check`; `moon test`; `moon fmt`; `moon info`; coverage summary | `feat(buffer)` |
| P3.3 | done | circular list | Phase 2 | bounded scrollback storage semantics are covered by unit tests | `moon check`; `moon test`; `moon fmt`; `moon info`; coverage summary | `feat(buffer)` |
| P3.4 | done | normal and alternate buffers | P3.2, P3.3 | active buffer, cursor, viewport, base, and basic resize state are covered by unit tests | `moon check`; `moon test`; `moon fmt`; `moon info`; coverage summary | `feat(buffer)` |

Phase 3 notes:

- `src/common/buffer` now has real buffer state and viewport text export.
- `src/common` now has bounded `CircularList` scrollback storage.
- `src/terminal` has a minimal direct `Terminal.write` path for starter
  harness cases. Full parser-backed input remains Phase 4/5 work.

### Phase 4: Parser Core

Gate: serial/parallel after Phase 2
Status: done

Reference files:

- `reference/xterm.js/src/common/parser/Params.ts`
- `reference/xterm.js/src/common/parser/EscapeSequenceParser.ts`
- `reference/xterm.js/src/common/parser/OscParser.ts`
- `reference/xterm.js/src/common/parser/DcsParser.ts`
- `reference/xterm.js/src/common/parser/ApcParser.ts`

| ID | status | target | depends on | acceptance | validation | commit scope |
|---|---|---|---|---|---|---|
| P4.1 | done | params and subparams | Phase 2 | parameter parsing and array conversion behavior are covered by unit tests | `moon check`; `moon test`; `moon fmt`; `moon info`; coverage summary | `feat(parser)` |
| P4.2 | done | VT transition table | P4.1 | table-driven state transitions are represented and unit-tested | `moon check`; `moon test`; `moon fmt`; `moon info`; coverage summary | `feat(parser)` |
| P4.3 | done | print and execute dispatch | P4.2 | printable and C0/C1 execute paths are covered by unit tests | `moon check`; `moon test`; `moon fmt`; `moon info`; coverage summary | `feat(parser)` |
| P4.4 | done | CSI and ESC dispatch | P4.3 | handler registration, fallback, prefix, intermediate, and final-byte behavior are covered by unit tests | `moon check`; `moon test`; `moon fmt`; `moon info`; coverage summary | `feat(parser)` |
| P4.5 | done | OSC, DCS, and APC dispatch | P4.4 | string sequence lifecycle and handler dispatch are covered by unit tests | `moon check`; `moon test`; `moon fmt`; `moon info`; coverage summary | `feat(parser)` |

Phase 4 notes:

- `src/common/parser` now has `Params`, a VT500 transition table, the
  synchronous escape sequence parser, and OSC/DCS/APC subparsers.
- Tests cover xterm.js-derived params behavior, transition lookup, print and
  execute dispatch, ESC/CSI fallback and registered handlers, plus string
  sequence lifecycles for OSC, DCS, and APC.
- Async parser continuation support is not modeled yet; MoonBit integration can
  add it later if an async write path becomes necessary.

### Phase 5: Input Handler MVP

Gate: after Phase 3 and Phase 4
Status: done

Reference file:

- `reference/xterm.js/src/common/InputHandler.ts`

| ID | status | target | depends on | acceptance | validation | commit scope |
|---|---|---|---|---|---|---|
| P5.1 | done | printable text | Phase 3, Phase 4 | ASCII, UTF-8 bytes, CJK width, and simple wrapping are covered by unit tests | `moon check`; `moon test`; `moon fmt`; `moon info`; coverage summary | `feat(input)` |
| P5.2 | done | C0 controls | P5.1 | BEL, LF, VT, FF, CR, BS, HT, SO, and SI behavior is covered by unit tests | `moon check`; `moon test`; `moon fmt`; `moon info`; coverage summary | `feat(input)` |
| P5.3 | done | cursor movement | P5.2 | cursor movement CSI sequences are tested against buffer state | `moon check`; `moon test`; `moon fmt`; `moon info`; coverage summary | `feat(input)` |
| P5.4 | done | erase and edit operations | P5.3 | erase display/line and insert/delete chars/lines are covered by unit tests | `moon check`; `moon test`; `moon fmt`; `moon info`; coverage summary | `feat(input)` |
| P5.5 | done | scroll region and basic scroll | P5.4 | scrollback and viewport behavior are covered by unit tests | `moon check`; `moon test`; `moon fmt`; `moon info`; coverage summary | `feat(input)` |
| P5.6 | done | SGR basics | P5.5 | foreground/background and common style attrs are covered by unit tests | `moon check`; `moon test`; `moon fmt`; `moon info`; coverage summary | `feat(input)` |

Phase 5 notes:

- `src/terminal` now routes writes through `EscapeSequenceParser`.
- The MVP input path covers printable Unicode, UTF-8 byte input, C0 controls,
  cursor movement, erase/edit operations, scroll regions, and SGR basics.
- DEC private modes remain mostly stubbed; insert mode is supported through
  `CSI 4 h/l`.

### Phase 6: Headless API

Gate: after Phase 5
Status: done

Reference files:

- `reference/xterm.js/src/common/CoreTerminal.ts`
- `reference/xterm.js/src/headless/Terminal.ts`
- `reference/xterm.js/src/headless/public/Terminal.ts`

| ID | status | target | depends on | acceptance | validation | commit scope |
|---|---|---|---|---|---|---|
| P6.1 | done | terminal construction and options | Phase 5 | rows, cols, options, modes, and reset defaults are covered by unit tests | `moon check`; `moon test`; `moon fmt`; `moon info`; coverage summary | `feat(headless)` |
| P6.2 | done | write handling | P6.1 | `write`, `writeln`, and bytes input are covered by unit tests | `moon check`; `moon test`; `moon fmt`; `moon info`; coverage summary | `feat(headless)` |
| P6.3 | done | public buffer views | P6.2 | public buffer access is covered by API tests | `moon check`; `moon test`; `moon fmt`; `moon info`; coverage summary | `feat(headless)` |
| P6.4 | done | parser hook API | P6.3 | CSI, OSC, DCS, ESC, and APC custom handlers have public API tests | `moon check`; `moon test`; `moon fmt`; `moon info`; coverage summary | `feat(headless)` |
| P6.5 | done | event subscription | P6.4 | data, binary, cursor, line feed, render, resize, scroll, title, and write parsed events are tested | `moon check`; `moon test`; `moon fmt`; `moon info`; coverage summary | `feat(headless)` |

Phase 6 notes:

- `src/headless` now exposes a public Terminal API over the parser-backed core:
  construction/options, modes, write/writeln string and byte input, buffer
  views, parser hook registration, scrolling, clear, reset, and disposal.
- Headless events cover data, cursor movement, line feed, render, resize,
  scroll, title changes, and write parsed notifications. `on_binary` is exposed
  as a subscription surface; keyboard and mouse producers for binary data are
  outside the current headless scope.
- `src/terminal` now owns core mode state and core event emitters needed by the
  headless facade.

### Phase 7: Compatibility Harness

Gate: after Phase 6
Status: done

| ID | status | target | depends on | acceptance | validation | commit scope |
|---|---|---|---|---|---|---|
| P7.1 | done | exact snapshot adapter | Phase 6 | MoonBit snapshots are derived from real terminal state and match the reference schema | `moon check`; `moon test`; `npm run harness:check`; `npm run harness:list` | `test(harness)` |
| P7.2 | done | headless fixture comparison | P7.1 | representative headless fixtures compare against xterm.js reference snapshots | `npm run harness:test`; `moon check`; `moon test` | `test(harness)` |
| P7.3 | done | supported compatibility expansion | P7.2 | supported headless features have compatibility cases: UTF-8 bytes, CSI cursor flow, SGR text flow, DEC modes, OSC title, bell, input data, alternate buffer, scroll API, and clear | `npm run harness:test`; `moon check`; `moon test` | `test(harness)` |

Phase 7 notes:

- The MoonBit harness adapter now snapshots through `src/headless` public API
  instead of the lower-level terminal text helper.
- The shared snapshot schema includes screen text, viewport lines, active buffer
  metadata, public modes, and selected public events.
- The current compatibility suite has 13 headless cases and compares cleanly
  against the built xterm.js headless reference.
- Device status reports, charset handling, mouse protocol reporting, kitty
  keyboard protocol, and DECRQSS remain later core/input compatibility work
  before they can become passing harness cases.

### Phase 8: Browser DOM Shell

Gate: after Phase 7
Status: done

Reference files:

- `reference/xterm.js/src/browser/public/Terminal.ts`
- `reference/xterm.js/src/browser/CoreBrowserTerminal.ts`
- `reference/xterm.js/src/browser/Types.ts`
- `reference/xterm.js/src/browser/renderer/dom/DomRenderer.ts`
- `reference/xterm.js/src/browser/renderer/dom/DomRendererRowFactory.ts`
- `reference/xterm.js/src/browser/services/RenderService.ts`
- `reference/xterm.js/src/browser/Viewport.ts`

Phase 8 invariants:

- The first browser package imports the public `src/headless` API, not terminal
  internals.
- Rabbita is the initial app and DOM layer for mounting, lifecycle, and row
  rendering.
- Missing low-level DOM APIs should be isolated behind a small browser package
  boundary rather than leaking into common/headless packages.
- Input is planned but not implemented in this phase. The first DOM proof of
  concept must not fake keyboard, paste, or mouse behavior.

| ID | status | target | depends on | acceptance | validation | commit scope |
|---|---|---|---|---|---|---|
| P8.1 | done | Rabbita dependency and JS target package | Phase 7 | `src/browser` package can type-check for the JS backend and depends on Rabbita without affecting native/headless packages | `moon check --target js`; `moon build --target js` | `feat(browser)` |
| P8.2 | done | browser terminal facade | P8.1 | browser-facing terminal construction, `open`, `dispose`, `element`, `screenElement`, `rows`, `cols`, `write`, `writeln`, `resize`, `refresh`, and scroll methods delegate to the headless terminal plus renderer state | `moon check --target js`; `moon test`; `moon coverage analyze -- -f summary` | `feat(browser)` |
| P8.3 | done | render model | P8.2 | headless buffer rows are converted into stable viewport row data with text, width, attrs, cursor state, and dirty-row metadata, independent of DOM | `moon check`; `moon test`; coverage summary | `feat(browser)` |
| P8.4 | done | Rabbita DOM renderer MVP | P8.3 | a mounted terminal renders rows, cursor, focus class, basic theme CSS, and resize dimensions in the browser; rendering is output-only | `moon check --target js`; `moon build --target js`; browser smoke command | `feat(browser)` |
| P8.5 | done | browser example and smoke runner | P8.4 | an example page mounts the terminal, writes deterministic fixture text, and verifies non-empty DOM output in a browser smoke test | browser smoke command; doc review | `test(browser)` |

Phase 8 notes:

- The first milestone is intentionally render-only: no textarea, no keyboard
  translation, no paste, no mouse reporting, no selection.
- `src/browser` now exposes an opaque browser `Terminal`, a viewport render
  model, and a Rabbita view that renders fixed-width DOM rows from the public
  headless buffer API.
- `examples/browser` mounts deterministic fixture content and `tools/browser`
  provides build/smoke/serve workflow scripts. The smoke runner uses a file URL
  and a system-browser fallback so it does not require installing Playwright
  browsers into this repository.
- If Rabbita row diffing is too expensive for terminal redraws, keep Rabbita as
  the shell and introduce a narrow imperative row renderer behind the same
  browser package boundary.

### Phase 9: Renderer And Viewport Parity

Gate: after Phase 8
Status: todo

Reference files:

- `reference/xterm.js/src/browser/renderer/dom/DomRenderer.ts`
- `reference/xterm.js/src/browser/renderer/dom/DomRendererRowFactory.ts`
- `reference/xterm.js/src/browser/renderer/shared/RendererUtils.ts`
- `reference/xterm.js/src/browser/renderer/shared/SelectionRenderModel.ts`
- `reference/xterm.js/src/browser/renderer/shared/TextBlinkStateManager.ts`
- `reference/xterm.js/src/browser/services/CharSizeService.ts`
- `reference/xterm.js/src/browser/services/ThemeService.ts`
- `reference/xterm.js/src/browser/services/RenderService.ts`
- `reference/xterm.js/src/browser/Viewport.ts`

| ID | status | target | depends on | acceptance | validation | commit scope |
|---|---|---|---|---|---|---|
| P9.1 | todo | character measurement and dimensions | Phase 8 | CSS/device cell dimensions, DPR handling, line height, letter spacing, and resize events are modeled for DOM rendering | `moon check --target js`; browser smoke command | `feat(browser)` |
| P9.2 | todo | render scheduler | P9.1 | dirty rows are coalesced through an animation-frame refresh path, with full refresh and synchronous refresh paths represented | `moon check --target js`; browser smoke command | `feat(browser)` |
| P9.3 | todo | DOM row styling | P9.2 | SGR attrs, ANSI colors, default colors, inverse, bold, italic, underline, blink, dim, invisible, and cursor styles are rendered from buffer attrs | `moon check`; `moon test`; browser smoke command | `feat(browser)` |
| P9.4 | todo | wide and combined text rendering | P9.3 | wide chars, combining text, wrapped lines, zero-width cells, and row truncation match the headless buffer model | `moon check`; `moon test`; browser smoke command | `feat(browser)` |
| P9.5 | todo | viewport and scrollback DOM integration | P9.4 | DOM scroll position maps to buffer viewport, scrollback height is synced, alt-buffer scrolling is isolated, and scroll events refresh rendered rows | `moon check --target js`; browser smoke command | `feat(browser)` |
| P9.6 | todo | browser render compatibility cases | P9.5 | deterministic render cases compare DOM text/classes against expected snapshots and selected xterm.js browser reference behavior | browser smoke command; `npm run harness:test` if shared fixtures are reused | `test(browser)` |

### Phase 10: Browser Public API Parity

Gate: after Phase 8, can overlap with Phase 9 when APIs are independent
Status: todo

Reference files:

- `reference/xterm.js/src/browser/public/Terminal.ts`
- `reference/xterm.js/src/common/public/BufferNamespaceApi.ts`
- `reference/xterm.js/src/common/public/ParserApi.ts`
- `reference/xterm.js/src/common/public/UnicodeApi.ts`
- `reference/xterm.js/src/common/public/AddonManager.ts`

| ID | status | target | depends on | acceptance | validation | commit scope |
|---|---|---|---|---|---|---|
| P10.1 | todo | browser options surface | Phase 8 | browser options are split into constructor-only and mutable options, with DOM-relevant defaults documented and tested | `moon check`; `moon test`; coverage summary | `feat(browser)` |
| P10.2 | todo | public events | P10.1 | browser terminal exposes headless events plus focus, blur, dimensions, render, key, selection, and accessibility events where implemented | `moon check`; `moon test`; coverage summary | `feat(browser)` |
| P10.3 | todo | public methods | P10.2 | `open`, `focus`, `blur`, `write`, `writeln`, `input`, `paste`, `refresh`, `reset`, `resize`, and scroll methods have browser API tests for implemented behavior and explicit deferred behavior | `moon check`; `moon test`; browser smoke command | `feat(browser)` |
| P10.4 | todo | buffer/parser/unicode/addon facade | P10.3 | browser API reuses headless buffer and parser facades, exposes unicode/addon surfaces when backed by implementation, and avoids leaking internal renderer types | `moon check`; `moon info`; `.mbti` review | `feat(browser)` |
| P10.5 | todo | markers and decorations | P10.4 | markers and decorations have browser-visible state and render invalidation behavior matching the implemented buffer model | `moon check`; `moon test`; browser smoke command | `feat(browser)` |

### Phase 11: Selection, Clipboard, Links, And Decorations

Gate: after Phase 9 render model can map DOM coordinates to cells
Status: todo

Reference files:

- `reference/xterm.js/src/browser/services/SelectionService.ts`
- `reference/xterm.js/src/browser/selection/SelectionModel.ts`
- `reference/xterm.js/src/browser/Clipboard.ts`
- `reference/xterm.js/src/browser/Linkifier.ts`
- `reference/xterm.js/src/browser/OscLinkProvider.ts`
- `reference/xterm.js/src/browser/services/LinkProviderService.ts`
- `reference/xterm.js/src/browser/decorations/BufferDecorationRenderer.ts`
- `reference/xterm.js/src/browser/decorations/OverviewRulerRenderer.ts`

| ID | status | target | depends on | acceptance | validation | commit scope |
|---|---|---|---|---|---|---|
| P11.1 | todo | selection model | Phase 9 | selection coordinates, reversed selections, select all, line selection, trim handling, and selection text extraction are covered by unit tests | `moon check`; `moon test`; coverage summary | `feat(selection)` |
| P11.2 | todo | DOM selection interactions | P11.1 | mouse drag, double/triple click, column selection, autoscroll, and refresh invalidation update the selection render model | `moon check --target js`; browser smoke command | `feat(selection)` |
| P11.3 | todo | clipboard integration | P11.2 | copy and paste browser events are wired behind DOM/clipboard boundaries, with bracketed paste deferred to input protocol handling | browser smoke command | `feat(browser)` |
| P11.4 | todo | link provider and hover rendering | P11.2 | registered link providers can mark ranges, hover state updates row styles, and OSC links are represented when core support exists | `moon check`; `moon test`; browser smoke command | `feat(browser)` |
| P11.5 | todo | decoration rendering | P11.4 | buffer decorations and overview ruler markers render from public decoration state and trigger minimal row refreshes | browser smoke command | `feat(browser)` |

### Phase 12: Browser Input, IME, Keyboard, And Mouse

Gate: after Phase 8 DOM shell; implementation deferred until render-only browser
path is stable
Status: deferred

Reference files:

- `reference/xterm.js/src/browser/services/KeyboardService.ts`
- `reference/xterm.js/src/common/input/Keyboard.ts`
- `reference/xterm.js/src/common/input/KittyKeyboard.ts`
- `reference/xterm.js/src/common/input/Win32InputMode.ts`
- `reference/xterm.js/src/browser/input/CompositionHelper.ts`
- `reference/xterm.js/src/browser/input/Mouse.ts`
- `reference/xterm.js/src/browser/services/MouseService.ts`
- `reference/xterm.js/src/browser/services/MouseCoordsService.ts`
- `reference/xterm.js/src/browser/Clipboard.ts`

| ID | status | target | depends on | acceptance | validation | commit scope |
|---|---|---|---|---|---|---|
| P12.1 | deferred | hidden textarea and focus model | Phase 8 | textarea capture, focus/blur, cursor-relative textarea positioning, and disabled stdin behavior are represented | browser smoke command | `feat(input)` |
| P12.2 | deferred | keyboard translation | P12.1 | normal keys, application cursor keys, application keypad, modifiers, platform differences, custom key handlers, and scroll-on-user-input behavior match planned browser API tests | `moon check`; `moon test`; browser smoke command | `feat(input)` |
| P12.3 | deferred | advanced keyboard protocols | P12.2 | Kitty keyboard and Win32 input mode are ported after core protocol support exists | `moon check`; `moon test`; compatibility cases | `feat(input)` |
| P12.4 | deferred | IME composition | P12.1 | composition start/update/end, dead keys, AltGraph, emoji input, and screen-reader mode interactions are tested in browser integration tests | browser smoke command | `feat(input)` |
| P12.5 | deferred | paste and bracketed paste | P12.1 | paste events feed the core input path, bracketed paste mode wraps input, and user input events preserve expected `onData` behavior | `moon check`; `moon test`; browser smoke command | `feat(input)` |
| P12.6 | deferred | mouse protocols | P12.1, P9.5 | coordinate mapping, wheel handling, focus reporting, X10, VT200, drag, any-event, SGR, and custom wheel handlers are planned against xterm.js behavior | `moon check`; `moon test`; browser smoke command | `feat(input)` |

### Phase 13: Accessibility And Browser Polish

Gate: after Phase 10 public API and Phase 12 input foundations
Status: deferred

Reference files:

- `reference/xterm.js/src/browser/AccessibilityManager.ts`
- `reference/xterm.js/src/browser/LocalizableStrings.ts`
- `reference/xterm.js/src/browser/services/CoreBrowserService.ts`
- `reference/xterm.js/src/browser/services/ThemeService.ts`
- `reference/xterm.js/src/browser/ColorContrastCache.ts`
- `reference/xterm.js/src/browser/scrollable/*`

| ID | status | target | depends on | acceptance | validation | commit scope |
|---|---|---|---|---|---|---|
| P13.1 | deferred | accessibility manager | Phase 12 | screen-reader mode exposes ARIA labels, a11y char/tab updates, and non-visual textarea behavior compatible with browser tests | browser smoke command | `feat(a11y)` |
| P13.2 | deferred | theme and contrast polish | Phase 9 | theme changes, color contrast cache, cursor contrast, transparency, and high-contrast behavior are modeled where supported | `moon check`; `moon test`; browser smoke command | `feat(browser)` |
| P13.3 | deferred | window and DPR lifecycle | P9.1 | DPR changes, owner document changes, visibility pause/resume, and dispose cleanup are covered by browser integration tests | browser smoke command | `feat(browser)` |
| P13.4 | deferred | scrollable polish | P9.5 | scrollbar options, touch scroll, smooth scroll, and platform-specific scroll behavior are implemented behind the browser package boundary | browser smoke command | `feat(browser)` |

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
