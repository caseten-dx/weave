# TODO.md

**Version:** 1.0  
**Date:** 2026-03-18  
**Last Updated:** 2026-03-18

---

## Summary [TODO-SUMMARY]

This file tracks the active work backlog for Weave. Tasks are ordered by implementation priority and scoped so they can be executed in bounded sessions. Every implementation task should include acceptance criteria before work begins.

---

## Current Focus [TODO-FOCUS]

Bootstrap the repository, stabilize architecture and requirements, and decompose Phase 1 into implementation-ready tasks.

---

## Phase 0 — Repository Bootstrap [TODO-P0]

### WEV-BOOT-001 — Create monorepo scaffold
**Status:** Pending  
**Priority:** Critical

**Done when:** The repository contains `packages/shared`, `packages/core`, `packages/providers`, and `packages/cli`, along with root workspace configuration files. The workspace installs successfully with pnpm and supports TypeScript project references.

### WEV-BOOT-002 — Add foundational governance docs
**Status:** Pending  
**Priority:** Critical

**Done when:** README, VISION, INTENT, PRINCIPLES, ARCHITECTURE, DESIGN-CONTEXT, CORE_CONTEXT, SYSTEM_PROMPT, TODO, DECISIONS, SESSIONLOG, HANDOFF, and ROADMAP all exist in the repository with coherent initial content.

### WEV-BOOT-003 — Create requirements index and domain files
**Status:** Pending  
**Priority:** High

**Done when:** `docs/requirements/REQUIREMENTS.md` and initial domain requirement files exist with stable IDs and traceability to INTENT goals.

---

## Phase 1 — Supervised CLI Workflow [TODO-P1]

### WEV-P1-001 — Define shared domain types
**Status:** Pending  
**Priority:** Critical

**Done when:** `packages/shared` exports Result types and core interfaces for ProjectState, SessionState, ContextPayload, TokenBudget, ChangeOrder, ChangeReport, HandoffBundle, DeliveryArtifact, and CostRecord.

### WEV-P1-002 — Implement provider abstraction
**Status:** Pending  
**Priority:** Critical

**Done when:** a provider interface exists in shared types and the providers package includes at least one working adapter stub for direct API communication.

### WEV-P1-003 — Build CLI project open flow
**Status:** Pending  
**Priority:** Critical

**Done when:** `muse` or equivalent CLI command can open a target project path, detect state files, and report a structured startup summary.

### WEV-P1-004 — Implement safe file read/write layer
**Status:** Pending  
**Priority:** Critical

**Done when:** file reads, atomic writes, backups, and conflict checks are implemented and tested against basic failure scenarios.

### WEV-P1-005 — Build session checkpoint persistence
**Status:** Pending  
**Priority:** High

**Done when:** active session state can be checkpointed locally and recovered after interruption.

### WEV-P1-006 — Implement TODO-first session close flow
**Status:** Pending  
**Priority:** Critical

**Done when:** the CLI supports a close command that updates TODO.md and emits HANDOFF.md output with resumable stage state if failure occurs.

### WEV-P1-007 — Add token and cost tracking
**Status:** Pending  
**Priority:** High

**Done when:** each provider interaction records token usage and per-session cost totals are available in the CLI.

### WEV-P1-008 — Implement context assembly
**Status:** Pending  
**Priority:** High

**Done when:** Weave can assemble startup context from repo state according to session profile and token budget.

---

## Open Questions [TODO-QUESTIONS]

- final CLI binary name: `weave` vs another command
- SQLite in Phase 1 vs JSON-first cost persistence
- exact provider order for first live integration
- test framework choice: Vitest vs Jest

---

*End of TODO.md*