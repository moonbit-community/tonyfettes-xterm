# AGENTS.md

## Project Goal

- Build a MoonBit implementation of xterm.js behavior, using `reference/xterm.js` as the local upstream reference.
- Keep the initial implementation focused on the headless terminal core unless the user explicitly changes scope.
- Browser work is deferred; later browser rendering should evaluate `moonbit-community/rabbita`.

## Source Of Truth

- Follow `docs/plan.md` as the ordered execution plan.
- Use `docs/plans/` for non-trivial task plans and audit notes.
- Treat `reference/xterm.js` as read-only unless the user explicitly asks to modify or build inside the submodule.

## Plan Discipline

- Follow `docs/plan.md` in order unless the user explicitly reprioritizes the work.
- When a planned implementation task is completed, update `docs/plan.md` in the same commit batch as the work for that task.
- Do not structure tasks so they require a red intermediate commit. Implementation tasks should finish with their tests and validation in the same commit batch.
- Keep commits clean and atomic. Each commit should represent one logical step and should not mix unrelated edits.

## Git

- Use Conventional Commits for commit messages, such as `feat:`, `fix:`, `docs:`, and `chore:`.

## Collaboration

- Treat planning questions as planning only. If the user asks "能不能", "你觉得", "计划一下", or asks to reflect something in a document, do not implement code or tooling unless explicitly asked.
- Before editing files, state the exact paths that will be changed.
- If a change touches paths beyond the user's explicit request, ask for confirmation first.
- Do not add new tooling, package files, scripts, dependencies, generated files, or harness implementations unless explicitly requested.
- Keep `reference/xterm.js` read-only unless the user explicitly asks to modify or build inside the submodule.
- Do not run dependency installation, package builds, or commands that may mutate lockfiles, `node_modules`, build outputs, or submodules without explicit confirmation.
- If a command unexpectedly changes files, stop immediately, report the changed paths, and ask before cleaning up.
- When updating `docs/plan.md`, preserve the existing structure unless the user explicitly asks for a rewrite.

## Validation

- For docs-only changes, review the changed docs for consistency with `AGENTS.md` and `docs/plan.md`.
- For harness changes, run:
  - `npm run harness:check`
  - `npm run harness:list`
- For MoonBit source changes, run:
  - `moon check`
  - `moon test`
  - `moon fmt`
  - `moon info`
- At the end of every implementation phase, also run and report:
  - `moon coverage analyze -- -f summary`
- Review `.mbti` output after `moon info` and confirm public API changes are intentional.
