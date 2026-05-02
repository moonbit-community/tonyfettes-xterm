# AGENTS.md

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
