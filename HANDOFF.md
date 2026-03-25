# HANDOFF.md

## Next Session Focus

Do not begin coding yet.

The next session should prepare Weave for high-confidence implementation by completing the repository-captured planning and clarification steps now required by `TODO.md`:

1. WEV-PLAN-001 — Record first-slice acceptance clarifications
2. WEV-PLAN-004 — Reassess implementation readiness after clarifications
3. WEV-PLAN-002 — Produce precise implementation plan for first executable slice

If and only if readiness is satisfied from repository state, proceed to:

4. WEV-BOOT-003 — Create monorepo and package scaffold
5. WEV-BOOT-004 — Establish baseline engineering tooling

Coding for Slice A1 should begin only after the builder has explicitly resolved the immediate clarifications recorded in `TODO.md`.

## Context to Paste

Paste:
- `SYSTEM_PROMPT.md`
- `CORE_CONTEXT.md`
- `TODO.md`
- `DECISIONS.md`
- `docs/ARCHITECTURE.md`
- `docs/requirements/REQ-STATE.md`
- `docs/requirements/REQ-GUIDANCE.md`
- `docs/requirements/REQ-NONFUNCTIONAL.md`

Also load, if useful for the next clarification pass:
- current `.gitignore`
- any existing root package or workspace files if scaffold work is about to begin

## Required Review Order

At session start, review in this order:
1. `TODO-FOCUS`
2. `TODO-READY`
3. `TODO-CLARIFICATIONS`
4. `TODO-IMMEDIATE-CLARIFICATIONS`
5. `TODO-GATES`
6. `TODO-NEXT`

## Warnings

- Do not start implementation without repository-captured answers to the immediate clarification items needed for the chosen slice.
- Do not treat prior chat discussion as authoritative unless reflected in repository documents.
- Do not skip monorepo scaffold creation before package-based implementation work.
- Do not broaden scope beyond the selected slice without explicit builder approval.
- If ambiguity remains, update `TODO.md` rather than coding through assumptions.