# Weave Requirements — Index and Traceability

**Version:** 1.1  
**Date:** 2026-03-18

---

## Summary [REQ-SUMMARY]

This document is the entry point to the Weave requirements corpus. Requirements are decomposed by domain so implementation sessions can load only the relevant slice. Each requirement is assigned a stable ID and traces to strategic goals and constraints defined in INTENT.md.

---

## Requirement Domains [REQ-DOMAINS]

- `REQ-SESSION.md` — session lifecycle, startup, checkpointing, close
- `REQ-STATE.md` — project state files, parsing, persistence, file safety
- `REQ-AI.md` — provider access, context assembly, model switching, handoffs
- `REQ-COST.md` — token accounting, estimation, and spend visibility
- `REQ-GIT.md` — repository awareness, git commands, direct execution
- `REQ-GUIDANCE.md` — transparency, conflict surfacing, acceptance criteria support
- `REQ-AUTONOMY.md` — progressive autonomy and checkpoint governance
- `REQ-NONFUNCTIONAL.md` — performance, security, resilience, portability

## Traceability Rule [REQ-TRACE]

Every requirement must trace to at least one strategic goal or hard constraint in INTENT.md. Requirements that cannot be traced should not enter implementation.

## Phase 1 Scope Marker [REQ-PHASE1]

Phase 1 includes requirements necessary for a supervised CLI workflow with direct provider access, repo-native state loading, cost visibility, safe file operations, git integration, and TODO-first session close.

---

*Use this index to determine which requirement document to load for a specific implementation task.*