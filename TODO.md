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

## Phase 1 Execution Order [TODO-P1-ORDER]

This section defines the recommended implementation sequence for Phase 1 so work proceeds from shared contracts to builder-facing CLI commands with minimal rework.

### Ordered delivery path

1. Shared types and contracts
   - WEV-P1-001
   - WEV-P1-002
   - WEV-P1-003
   - WEV-P1-004

2. Project open and state loading
   - WEV-P1-005
   - WEV-P1-006
   - WEV-P1-009
   - WEV-P1-007
   - WEV-P1-010
   - WEV-P1-011
   - WEV-P1-012
   - WEV-P1-008

3. Session state and close workflow
   - WEV-P1-018
   - WEV-P1-019
   - WEV-P1-020
   - WEV-P1-021
   - WEV-P1-022

4. Provider integration and cost tracking
   - WEV-P1-013
   - WEV-P1-014
   - WEV-P1-015
   - WEV-P1-016
   - WEV-P1-017

5. Safe file and git operations
   - WEV-P1-023
   - WEV-P1-024
   - WEV-P1-025
   - WEV-P1-026

6. CLI integration
   - WEV-P1-027
   - WEV-P1-028
   - WEV-P1-029
   - WEV-P1-030

### Sequencing notes

- Shared contracts come first because all core, provider, and CLI subsystems depend on them.
- Project open and context loading should precede provider-backed chat so startup behavior can be tested independently.
- Session checkpointing and close workflow are core to Weave’s operating model and should exist before higher-volume interactive usage.
- Safe file and git operations should be in place before close automation applies builder-approved changes.
- CLI commands should compose tested lower-level capabilities rather than define them prematurely.

### Dependency clarification needed

Potential overlap exists between:
- WEV-P1-003 — Define provider contract types
- WEV-P1-013 — Implement provider interface in shared/core

Interpretation for planning purposes:
- WEV-P1-003 defines TypeScript data contracts and normalized provider-facing types.
- WEV-P1-013 defines the runtime provider interface, registration boundary, and core consumption contract.

If implementation reveals duplication, split or rename these tasks before execution continues.

## Recommended Session Slices [TODO-P1-SLICES]

Phase 1 work should be executed in short supervised sessions with bounded outcomes.

### Slice A1 — Shared result and error base
Includes:
- WEV-P1-001
- WEV-P1-004

**Goal:** establish common Result helpers and typed failure categories used across subsystems.

**Done when:**
- shared Result helpers are exported
- typed file, git, provider, context, and session error categories exist

### Slice A2 — Shared domain and provider contracts
Includes:
- WEV-P1-002
- WEV-P1-003

**Goal:** define stable shared interfaces for project, session, context, provider, and cost concepts.

**Done when:**
- shared domain interfaces are exported
- provider-facing request/response/configuration contracts are exported
- boundary between WEV-P1-003 and WEV-P1-013 is explicitly documented in code comments or task notes

### Slice B1 — File discovery and safe reads
Includes:
- WEV-P1-005
- WEV-P1-006

**Goal:** enable the core to discover recognized project files and read them safely.

**Done when:**
- recognized file enumeration works from project root
- safe typed text reads work for present, missing, and unreadable files

### Slice B2 — Project state loading
Includes:
- WEV-P1-009
- WEV-P1-007

**Goal:** load project state with lightweight metadata and token approximations.

**Done when:**
- token estimation utility exists
- loaded project state contains file content, timestamps, size metadata, and token estimates

### Slice B3 — Context profile assembly
Includes:
- WEV-P1-010
- WEV-P1-011
- WEV-P1-012
- WEV-P1-008

**Goal:** produce budget-aware context payloads and startup summaries for session initialization.

**Done when:**
- session profile rules exist
- ContextAssembler produces profile-scoped payloads
- TokenBudgetManager checks payloads against model budget with reserved response capacity
- startup summary formatter reports discovered files, missing expected files, and approximate context sizes

### Slice C1 — Session memory and checkpoint persistence
Includes:
- WEV-P1-018
- WEV-P1-019

**Goal:** support in-memory session state and resumable checkpoint persistence.

**Done when:**
- session state supports open, update, and snapshot
- checkpoint serialization to `.weave/session-checkpoint.json` works

### Slice C2 — Resume and close scaffolding
Includes:
- WEV-P1-020
- WEV-P1-021
- WEV-P1-022

**Goal:** make interrupted sessions recoverable and close workflow resumable.

**Done when:**
- startup can detect interrupted sessions and allow resume or discard
- close stage sequencing is resumable
- TODO-first close outputs can be generated from session state

### Slice D1 — Provider runtime boundary
Includes:
- WEV-P1-013

**Goal:** define the runtime contract core will use to talk to providers.

**Done when:**
- provider interface exists in shared/core
- provider registration or resolution approach is chosen and reflected in the implementation boundary

### Slice D2 — First provider adapter and streaming
Includes:
- WEV-P1-014
- WEV-P1-015

**Goal:** connect one provider end-to-end with normalized response handling.

**Done when:**
- one adapter supports key validation, request submission, and normalized response parsing
- streaming responses are exposed through a common chunk format

### Slice D3 — Cost and model switching
Includes:
- WEV-P1-016
- WEV-P1-017

**Goal:** surface usage cost and allow supervised manual model changes.

**Done when:**
- token and cost records are created per interaction and rolled up by session
- active session can switch models while retaining continuity metadata and per-model usage visibility

### Slice E1 — Safe write path
Includes:
- WEV-P1-023
- WEV-P1-024

**Goal:** make file output safe, atomic, and conflict-aware.

**Done when:**
- writes follow backup-temp-rename-verify sequence
- writes are blocked if target changed since last read

### Slice E2 — Git integration
Includes:
- WEV-P1-025
- WEV-P1-026

**Goal:** support local git operations and builder-facing generated commands.

**Done when:**
- typed git status, add, commit, and push operations work through local git binary
- generated git commands and commit messages can accompany approved changes

### Slice F1 — Project open CLI
Includes:
- WEV-P1-027

**Goal:** expose startup loading through CLI.

**Done when:**
- `weave open <path>` loads project state and prints startup summary

### Slice F2 — Interactive chat CLI
Includes:
- WEV-P1-028
- WEV-P1-029

**Goal:** support provider-backed interactive sessions and explicit model switching.

**Done when:**
- `weave chat` starts an interactive provider-backed session using loaded context
- `/switch` changes active models within an active session

### Slice F3 — Close CLI
Includes:
- WEV-P1-030

**Goal:** expose close workflow through CLI.

**Done when:**
- `weave close` runs close pipeline, applies approved file changes, and generates or executes git steps

## Decision Gates [TODO-GATES]

The following decisions should be resolved before the associated implementation slices begin.

### Gate G1 — First provider selection
**Decision needed:** choose the first provider adapter for Phase 1.

**Options currently open:**
- Anthropic
- Gemini

**Resolve before:**
- WEV-P1-014
- WEV-P1-015
- meaningful end-to-end testing of WEV-P1-028

### Gate G2 — Cost persistence format
**Decision needed:** choose Phase 1 persistence format for cost and usage records.

**Options currently open:**
- JSON
- SQLite

**Resolve before:**
- WEV-P1-016
- any persistence coupling between usage tracking and session checkpoint reporting

### Gate G3 — `weave chat` command surface
**Decision needed:** define the initial interactive command set for Phase 1.

**Examples to decide explicitly:**
- `/switch`
- `/status`
- `/context`
- `/checkpoint`
- `/close`
- `/help`

**Resolve before:**
- WEV-P1-028
- WEV-P1-029

### Gate G4 — TODO/HANDOFF generation strategy
**Decision needed:** choose whether close artifacts are provider-assisted or locally templated in the first implementation slice.

**Options currently open:**
- provider-assisted generation
- local templated generation
- hybrid approach

**Resolve before:**
- WEV-P1-022
- WEV-P1-030

## Near-Term Recommended Start [TODO-NEXT]

Recommended first implementation sequence for lowest ambiguity and highest leverage:

1. WEV-P1-001 — Implement Result type helpers
2. WEV-P1-004 — Define file and git error types
3. WEV-P1-002 — Define core domain interfaces
4. WEV-P1-005 — Implement recognized file registry
5. WEV-P1-006 — Implement FileReader

This sequence establishes the shared foundations and project-loading base required for most subsequent work.

---

## Open Questions [TODO-QUESTIONS]

- which provider should be first: Anthropic or Gemini
- JSON vs SQLite for Phase 1 cost persistence
- exact command set for `weave chat`
- whether TODO/HANDOFF generation should be provider-assisted or locally templated in the first implementation slice

---

*End of TODO.md*