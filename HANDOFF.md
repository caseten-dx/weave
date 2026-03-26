# HANDOFF.md

## Next Session Focus

Do not begin coding yet.

The next session should complete the repository-captured clarification and planning work needed to start implementation on the highest-leverage Phase 1 path: replacing the manual repo/VS Code ↔ hosted-chat ↔ repo/VS Code workflow with a supervised direct-API CLI workflow.

Priority for the next session:
1. WEV-PLAN-001 — Record first-slice acceptance clarifications
2. WEV-PLAN-004 — Reassess implementation readiness after clarifications
3. WEV-PLAN-002 — Produce precise implementation plan for the first executable slice

If and only if readiness is satisfied from repository state, proceed to:
4. WEV-BOOT-003 — Create monorepo and package scaffold
5. WEV-BOOT-004 — Establish baseline engineering tooling

The most important near-term objective is still the minimum useful loop:
- open a target repository
- read files directly
- use a chosen model through direct BYOK API access
- work through the CLI instead of Poe/hosted chat
- safely apply reviewed file changes
- assist with git operations

Coding for the first implementation slice should begin only after the builder has explicitly resolved the immediate clarifications recorded in `TODO.md`.

## Files or Sections to Paste Next

Paste these files at session start:
- `SYSTEM_PROMPT.md`
- `CORE_CONTEXT.md`
- `TODO.md`
- `DECISIONS.md`
- `HANDOFF.md`
- `docs/ARCHITECTURE.md`
- `docs/requirements/REQUIREMENTS.md`

Then load the most relevant requirement slices for the chosen work:
- `docs/requirements/REQ-STATE.md`
- `docs/requirements/REQ-AI.md`
- `docs/requirements/REQ-COST.md`
- `docs/requirements/REQ-GUIDANCE.md`
- `docs/requirements/REQ-NONFUNCTIONAL.md`

If scaffold work is about to begin, also load:
- current `.gitignore`
- root `deno.json` if it exists
- any existing package/workspace files
- any current `packages/` directory state

At session start, review in this order:
1. `TODO-FOCUS`
2. `TODO-READY`
3. `TODO-CLARIFICATIONS`
4. `TODO-IMMEDIATE-CLARIFICATIONS`
5. `TODO-P1-PRIORITY`
6. `TODO-P1-ORDER`
7. `TODO-NEXT`

## Warnings

- Do not begin implementation without repository-captured answers to the immediate clarification items needed for the chosen slice.
- Do not treat prior chat discussion as authoritative unless reflected in repository documents.
- Do not skip monorepo scaffold creation before package-based implementation work.
- Do not treat manual model switching or routing sophistication as baseline blockers.
- Do not broaden scope beyond the selected slice without explicit builder approval.
- If ambiguity remains, update `TODO.md` rather than coding through assumptions.