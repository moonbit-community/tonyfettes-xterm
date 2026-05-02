# Task Plans

Use this directory for non-trivial implementation, harness, compatibility, or
review tasks.

Required filename pattern:

- `YYYY-MM-DD-<phase-or-task-id>-<slug>.md`

Required contents:

1. Goal
2. Reference files
3. MoonBit target files
4. Harness files, if relevant
5. Dependencies and invariants
6. Acceptance criteria
7. Validation commands
8. Commit scope
9. Review findings
10. Audit/result notes
11. Public API visibility findings when `.mbti` or `pub` surface changed

Validation findings should record:

- which commands were run
- whether generated snapshots changed
- whether `moon info` changed `.mbti`
- which public items were intentionally added or changed
- any uncovered or deferred behavior

These files support both pre-implementation checking and post-implementation
auditing before a task is committed.
