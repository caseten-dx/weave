# HANDOFF.md

## Next Session Focus

Execute Slice S0 only unless a concrete scaffold blocker appears:

1. WEV-BOOT-003 — Create monorepo and package scaffold
2. WEV-BOOT-004 — Establish baseline engineering tooling

Use the execution-ready S0 plan in `TODO.md` as the authoritative checklist.

If Slice S0 completes successfully in the same session, the next recommended follow-on slice is:

3. Slice A1
   - WEV-P1-001 — Implement Result type helpers
   - WEV-P1-004 — Define file and git error types

Do not advance into provider runtime implementation in the next session unless S0 is complete and the session still has clear bounded capacity.

## Files or Sections to Paste Next

Paste these files at session start:
- `SYSTEM_PROMPT.md`
- `CORE_CONTEXT.md`
- `TODO.md`
- `DECISIONS.md`
- `HANDOFF.md`
- `docs/ARCHITECTURE.md`

Paste these additional files if implementation begins on S0:
- current `.gitignore`
- current root `deno.json` if it exists
- current `packages/` directory state, if any

At session start, review in this order:
1. `TODO-FOCUS`
2. `TODO-READY`
3. `TODO-CLARIFICATIONS`
4. `TODO-S0-PLAN`
5. `TODO-P1-PRIORITY`
6. `TODO-P1-ORDER`
7. `TODO-NEXT`

## Warnings

- Do not re-open already resolved IC-001 through IC-012 unless implementation reveals a true contradiction.
- Do not skip Slice S0 and jump directly into package-based coding.
- Do not treat provider runtime boundary work as ready until minimal provider contract planning is captured in repository state.
- Keep the next session bounded to scaffold work unless S0 finishes cleanly.
- Record any scaffold deviations, package-config choices, or test-task deferrals back into `TODO.md`.