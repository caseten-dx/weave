# TODO.md

**Version:** 1.1  
**Date:** 2026-03-18  
**Last Updated:** 2026-03-18

---

## Summary [TODO-SUMMARY]

This file tracks the active implementation backlog for Weave. Work is decomposed into bounded tasks intended to fit into short supervised sessions. Each implementation task includes a concrete done condition.

---

## Current Focus [TODO-FOCUS]

Deliver Phase 1 supervised CLI foundations: project open, state loading, provider abstraction, safe file operations, session checkpointing, cost visibility, and TODO-first session close.

---

## Phase 0 — Bootstrap Completion [TODO-P0]

### WEV-BOOT-001 — Finalize foundational document corpus
**Status:** Complete  
**Priority:** Critical

**Done when:** Core governance, architecture, and requirements files exist and are coherent enough to guide implementation.

### WEV-BOOT-002 — Expand Phase 1 requirements and decisions
**Status:** Complete  
**Priority:** Critical

**Done when:** Phase 1 requirements and technical decisions cover session state, file safety, provider abstraction, git integration, and cost tracking.

---

## Phase 1 — Shared Types and Contracts [TODO-P1-SHARED]

### WEV-P1-001 — Implement Result type helpers
**Status:** Pending  
**Priority:** Critical

**Done when:** `packages/shared` exports a discriminated Result type and helper functions sufficient for core subsystem error handling.

### WEV-P1-002 — Define core domain interfaces
**Status:** Pending  
**Priority:** Critical

**Done when:** shared interfaces exist for ProjectState, SessionState, ContextPayload, TokenBudget, DeliveryArtifact, ChangeOrder, ChangeReport, HandoffBundle, and CostRecord.

### WEV-P1-003 — Define provider contract types
**Status:** Pending  
**Priority:** Critical

**Done when:** shared/provider-facing types exist for provider configuration, model metadata, request payloads, stream chunks, token estimation results, and provider errors.

### WEV-P1-004 — Define file and git error types
**Status:** Pending  
**Priority:** High

**Done when:** common typed errors exist for file, git, provider, context, and session failure categories.

---

## Phase 1 — Project Open and State Loading [TODO-P1-OPEN]

### WEV-P1-005 — Implement recognized file registry
**Status:** Pending  
**Priority:** Critical

**Done when:** the core can enumerate recognized project files by convention from a project root.

### WEV-P1-006 — Implement FileReader
**Status:** Pending  
**Priority:** Critical

**Done when:** the core can read recognized text files safely and return typed results for missing and unreadable files.

### WEV-P1-007 — Implement ProjectStateLoader
**Status:** Pending  
**Priority:** Critical

**Done when:** Weave can load discovered state files into a ProjectState structure with timestamps, sizes, and token estimates.

### WEV-P1-008 — Implement startup summary formatter
**Status:** Pending  
**Priority:** High

**Done when:** CLI open flow can display discovered files, missing expected files, and approximate context sizes.

---

## Phase 1 — Context Assembly [TODO-P1-CONTEXT]

### WEV-P1-009 — Implement token estimation utility
**Status:** Pending  
**Priority:** High

**Done when:** a reusable token estimation function exists for file and payload-level approximation.

### WEV-P1-010 — Implement session profile definitions
**Status:** Pending  
**Priority:** High

**Done when:** profile rules exist for planning, specification, architecture, and implementation sessions.

### WEV-P1-011 — Implement ContextAssembler
**Status:** Pending  
**Priority:** Critical

**Done when:** Weave can create a ContextPayload from loaded project state and a selected session profile.

### WEV-P1-012 — Implement TokenBudgetManager
**Status:** Pending  
**Priority:** High

**Done when:** context payloads can be checked against a model budget with reserved response capacity.

---

## Phase 1 — Provider Integration and Cost Tracking [TODO-P1-AI]

### WEV-P1-013 — Implement provider interface in shared/core
**Status:** Pending  
**Priority:** Critical

**Done when:** a stable provider contract exists and can be consumed by the providers package.

### WEV-P1-014 — Add first provider adapter skeleton
**Status:** Pending  
**Priority:** Critical

**Done when:** the providers package contains one adapter capable of key validation, request submission, and normalized response parsing.

### WEV-P1-015 — Add streaming chunk normalization
**Status:** Pending  
**Priority:** High

**Done when:** provider responses can be exposed as a common stream format to the CLI.

### WEV-P1-016 — Implement CostTracker
**Status:** Pending  
**Priority:** Critical

**Done when:** token and cost records are created per provider interaction and rolled up by session.

### WEV-P1-017 — Implement manual model switching state
**Status:** Pending  
**Priority:** High

**Done when:** a session can switch active models while retaining continuity metadata and per-model usage visibility.

---

## Phase 1 — Session State and Close Workflow [TODO-P1-SESSION]

### WEV-P1-018 — Implement SessionStateStore
**Status:** Pending  
**Priority:** Critical

**Done when:** in-memory session state supports open, update, and snapshot operations.

### WEV-P1-019 — Implement checkpoint serializer
**Status:** Pending  
**Priority:** Critical

**Done when:** session state can be persisted to and loaded from `.weave/session-checkpoint.json`.

### WEV-P1-020 — Implement resume-or-discard startup handling
**Status:** Pending  
**Priority:** High

**Done when:** CLI startup detects interrupted sessions and lets the builder resume or discard.

### WEV-P1-021 — Implement SessionClosePipeline
**Status:** Pending  
**Priority:** Critical

**Done when:** close stage sequencing exists with resumable stage progress.

### WEV-P1-022 — Implement TODO-first close artifact generation
**Status:** Pending  
**Priority:** Critical

**Done when:** the system can generate TODO.md and HANDOFF.md close outputs from session state.

---

## Phase 1 — Safe File and Git Operations [TODO-P1-IO]

### WEV-P1-023 — Implement FileWriter atomic write flow
**Status:** Pending  
**Priority:** Critical

**Done when:** file writes follow the backup-temp-rename-verify sequence and fail safely.

### WEV-P1-024 — Implement ConflictDetector
**Status:** Pending  
**Priority:** Critical

**Done when:** writes are blocked if the target changed since last read.

### WEV-P1-025 — Implement GitOperations wrapper
**Status:** Pending  
**Priority:** Critical

**Done when:** status, add, commit, and push are supported through the local git binary with typed results.

### WEV-P1-026 — Implement git command generation
**Status:** Pending  
**Priority:** High

**Done when:** approved file changes can be accompanied by generated git commands and a descriptive commit message.

---

## Phase 1 — CLI Integration [TODO-P1-CLI]

### WEV-P1-027 — Implement `weave open <path>`
**Status:** Pending  
**Priority:** Critical

**Done when:** the CLI can open a project path, load state, and print startup summary.

### WEV-P1-028 — Implement `weave chat`
**Status:** Pending  
**Priority:** Critical

**Done when:** the CLI can start an interactive provider-backed session using loaded context.

### WEV-P1-029 — Implement `/switch` command
**Status:** Pending  
**Priority:** High

**Done when:** an active chat session can switch models explicitly.

### WEV-P1-030 — Implement `weave close`
**Status:** Pending  
**Priority:** Critical

**Done when:** the CLI can run the close pipeline, apply approved file changes, and generate or execute git steps.

---

## Open Questions [TODO-QUESTIONS]

- which provider should be first: Anthropic or Gemini
- JSON vs SQLite for Phase 1 cost persistence
- exact command set for `weave chat`
- whether TODO/HANDOFF generation should be provider-assisted or locally templated in the first implementation slice

---

*End of TODO.md*