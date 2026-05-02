# P2 Unit Test Inventory

## Goal

Start the unit-test-first workflow by grouping xterm.js tests into MoonBit
package targets and choosing the first pure unit-test port.

## Reference Files

Primary inventory:

- `reference/xterm.js/src/common/*.test.ts`
- `reference/xterm.js/src/common/buffer/*.test.ts`
- `reference/xterm.js/src/common/parser/*.test.ts`
- `reference/xterm.js/src/common/input/*.test.ts`
- `reference/xterm.js/src/common/public/*.test.ts`
- `reference/xterm.js/src/common/services/*.test.ts`
- `reference/xterm.js/src/headless/public/Terminal.test.ts`

First port:

- `reference/xterm.js/src/common/Event.ts`
- `reference/xterm.js/src/common/Event.test.ts`
- `reference/xterm.js/src/common/Lifecycle.ts`

## MoonBit Target Files

- `src/common/event.mbt`
- `src/common/event_test.mbt`
- `src/common/moon.pkg`
- `src/common/pkg.generated.mbti`

## Harness Files

None. Harness work remains deferred until the headless core has real terminal
state.

## Dependencies And Invariants

- Unit tests come before compatibility harness work.
- Coverage is measured on real MoonBit source only; do not add fake source just
  to make coverage pass.
- Keep public API visibility minimal and review `.mbti` after `moon info`.

## Unit-Test Groups

| Group | Reference tests | MoonBit target | Notes |
|---|---|---|---|
| Pure utilities | `Event.test.ts`, `SortedList.test.ts`, `MultiKeyMap.test.ts`, `Clone.test.ts` | `src/common` | Best starting point; no terminal buffer state required. |
| Color and parsing helpers | `Color.test.ts`, `input/XParseColor.test.ts`, `input/TextDecoder.test.ts`, `input/UnicodeV6.test.ts` | `src/common` or `src/common/input` | Pure but needs careful Unicode/color data choices. |
| Parser primitives | `parser/Params.test.ts`, `ApcParser.test.ts`, `DcsParser.test.ts`, `OscParser.test.ts`, `EscapeSequenceParser.test.ts` | `src/common/parser` | Larger surface; depends on callback and async decisions. |
| Buffer primitives | `buffer/CellData.test.ts`, `BufferLine.test.ts`, `BufferRange.test.ts`, `BufferReflow.test.ts`, `Buffer.test.ts`, `BufferSet.test.ts` | `src/common/buffer` | Main path toward headless state. |
| Services and public APIs | `services/*.test.ts`, `public/AddonManager.test.ts` | `src/common/services`, `src/common/public` | Port after lifecycle/event primitives exist. |
| Input and headless | `InputHandler.test.ts`, `input/Keyboard.test.ts`, `input/KittyKeyboard.test.ts`, `input/WriteBuffer.test.ts`, `input/Win32InputMode.test.ts`, `headless/public/Terminal.test.ts` | `src/common/input`, `src/headless` | Later phases after buffer and parser state exist. |

## Acceptance Criteria

- The inventory identifies pure, parser, buffer, services, input, and headless
  test groups.
- The first pure unit test port covers `Emitter` listener registration, fire,
  listener disposal, emitter disposal, and listener snapshot behavior during
  fire.
- Coverage baseline is verified on real source data after the first port.

## Validation Commands

- `moon check`
- `moon test`
- `moon coverage analyze -- -f summary`
- `moon fmt`
- `moon info`

## Commit Scope

`test(common)`

## Review Findings

- `Event.test.ts` also checks `thisArgs`; MoonBit has no direct JS-style
  dynamic `this`, so that behavior is not part of the MoonBit API.
- `Event.ts` includes `EventUtils`; defer those helpers until a caller or unit
  test needs them.

## Audit/Result Notes

- Ported the first pure unit-test target from
  `reference/xterm.js/src/common/Event.test.ts`.
- Added `src/common/event.mbt` with opaque `Emitter[T]` and `Disposable`
  surface.
- Validation completed:
  - `moon check`
  - `moon test`
  - `moon coverage analyze -- -f summary`
  - `moon fmt`
  - `moon info`
- Coverage baseline result: `src/common/event.mbt: 22/26`, `Total: 22/26`.

## Public API Visibility Findings

- `Disposable` is opaque and exposes only `dispose`.
- `Emitter[T]` is opaque and exposes `new`, `event`, `fire`, and `dispose`.
- `Listener[T]` remains private and does not appear in `.mbti`.
