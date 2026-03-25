# TODO.md

**Version:** 1.2  
**Date:** 2026-03-18  
**Last Updated:** 2026-03-25

---

## Summary [TODO-SUMMARY]

This file tracks the active implementation backlog for Weave. Work is decomposed into bounded tasks intended to fit into short supervised sessions. Each implementation task includes a concrete done condition. This file also captures pre-coding clarifications, decision gates, execution order, and session restart guidance so future sessions can resume safely from repository state rather than chat history.

---

## Current Focus [TODO-FOCUS]

Deliver Phase 1 supervised CLI foundations: monorepo bootstrap, project open, state loading, provider abstraction, safe file operations, session checkpointing, cost visibility, and TODO-first session close.

---

## Working Rule [TODO-WORKING-RULE]

Until the pre-implementation readiness checklist is satisfied for the next slice, sessions should prioritize:
- clarifying acceptance criteria
- resolving immediate implementation ambiguities
- recording those clarifications in this file
- refining bounded implementation plans

Coding should begin only when the next slice has sufficient repository-captured information to proceed with low ambiguity.

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

### WEV-BOOT-003 — Create monorepo and package scaffold
**Status:** Pending  
**Priority:** Critical  
**Traces:** [DECISIONS-001], [ARCH-PACKAGES], [ARCH-TECH], [REQ-707]

**Done when:**
- pnpm workspace is initialized at repository root
- `packages/shared`, `packages/core`, `packages/providers`, and `packages/cli` exist
- root TypeScript configuration exists with strict mode enabled
- each package has a package manifest and initial `src` entrypoint
- package dependencies reflect the intended downward architecture
- workspace build and typecheck commands run successfully with stub exports
- scaffold choices and any deviations are recorded in this file or adjacent package notes

### WEV-BOOT-004 — Establish baseline engineering tooling
**Status:** Pending  
**Priority:** High  
**Traces:** [ARCH-TECH], [REQ-704], [REQ-707]

**Done when:**
- workspace-level typecheck command exists
- minimal test runner choice is established or explicitly deferred with rationale
- package scripts for build/typecheck are present and consistent
- a minimal `.gitignore` includes operational and build artifacts including `.weave/`

---

## Pre-Implementation Readiness Checklist [TODO-READY]

Coding for the next implementation slice does not begin until the relevant items below are captured in this repository.

### Readiness for Slice A1 — Shared result and error base
- canonical `Result<T, E>` discriminant shape is specified
- initial `Result` helper API is specified
- expected-failure handling policy is restated in implementation terms
- typed error representation strategy is specified
- error category vocabulary is specified
- minimum required typed error fields are specified
- package placement for `Result` and shared error contracts is specified
- monorepo scaffold task acceptance criteria are present

### Readiness for Slice B1 — File discovery and safe reads
- recognized Phase 1 startup file set is specified
- required vs optional file classification is specified for startup/open workflow
- file path resolution policy is specified
- missing optional file behavior is specified
- required file absence behavior is specified
- startup surfacing expectations for missing files are specified

### Readiness rule
If a future session cannot point to the captured clarification in repository state, the clarification should be treated as unresolved.

---

## Captured Clarifications [TODO-CLARIFICATIONS]

This section records implementation-relevant clarifications once explicitly confirmed by the builder.

### CLAR-STATUS
**Status:** Pending initial entries

### Planned initial clarification topics
- `Result<T, E>` shape
- `Result` helper function set
- typed error object shape
- error category vocabulary and required presence
- recognized startup file set
- required vs optional startup files
- file path resolution and out-of-root handling
- package export conventions for `shared` and `core`

---

## Package Boundary Rules [TODO-BOUNDARIES]

These package boundaries apply unless superseded by a recorded decision.

### Boundary rules
- `packages/shared` contains shared types, result helpers, constants, and schema-like contracts
- `packages/core` contains orchestration logic and infrastructure interfaces
- `packages/providers` contains provider-specific adapter implementations
- `packages/cli` contains command parsing, display formatting, and interactive flow control

### Dependency rules
- `shared` must not depend on other workspace packages
- `core` may depend on `shared`
- `providers` may depend on `shared` and `core`
- `cli` may depend on all lower packages
- no package may violate downward dependency direction defined in architecture

### Placement guidance
- generic `Result` helpers belong in `packages/shared`
- normalized domain error contracts that are cross-package concerns belong in `packages/shared`
- runtime interfaces consumed by orchestration belong in `packages/core` unless clearly pure-contract data types

---

## Slice Completion Checklist [TODO-SLICE-CHECKLIST]

A slice is not complete until all applicable items below are satisfied.

- implementation matches documented acceptance criteria
- exported APIs compile across the workspace
- package boundaries remain consistent with architecture
- expected failure paths return typed results where required
- any changed assumptions are recorded in `TODO.md`
- minimal tests exist for core behavior, or explicit deferral is recorded
- task status and any follow-up tasks are updated before session close

---

## Session Restart Protocol [TODO-RESTART]

At the start of a new planning or implementation session:

1. review `TODO-FOCUS`
2. review `TODO-READY`
3. review `TODO-CLARIFICATIONS`
4. review unresolved decision gates
5. confirm the next intended slice
6. reassess go/no-go based only on repository-captured information
7. if ambiguity remains, add clarification tasks instead of coding
8. if readiness is satisfied, generate or execute the precise implementation plan for the next slice

---

## Immediate Builder Clarifications Required [TODO-IMMEDIATE-CLARIFICATIONS]

These clarifications should be resolved and recorded before first-slice coding begins.

### IC-001 — Canonical Result shape
**Status:** Pending  
**Needed before:** WEV-P1-001

**Clarify:**
- whether `Result<T, E>` is:
  - `{ ok: true, value: T } | { ok: false, error: E }`
  - or another discriminated shape

### IC-002 — Initial Result helper API
**Status:** Pending  
**Needed before:** WEV-P1-001

**Clarify:**
- whether first pass includes:
  - `ok`
  - `err`
  - `isOk`
  - `isErr`
- whether any of the following are required initially:
  - `map`
  - `mapErr`
  - `unwrapOr`
  - `match`

### IC-003 — Typed error representation strategy
**Status:** Pending  
**Needed before:** WEV-P1-004

**Clarify:**
- tagged object unions vs classes
- whether all public subsystem boundaries must expose object-union typed errors
- whether internal exceptions remain acceptable for invariant violations only

### IC-004 — Error category model
**Status:** Pending  
**Needed before:** WEV-P1-004

**Clarify:**
- whether the required category vocabulary is:
  - `recoverable`
  - `user-actionable`
  - `fatal`
- whether category is mandatory on every typed error

### IC-005 — Minimum typed error fields
**Status:** Pending  
**Needed before:** WEV-P1-004

**Clarify:**
- whether every typed error must include:
  - `domain`
  - `code`
  - `category`
  - `message`
- and whether optional fields should include:
  - `path`
  - `operation`
  - `cause`
  - `details`

### IC-006 — Recognized startup file set
**Status:** Pending  
**Needed before:** WEV-P1-005

**Clarify:**
- exact root governance files recognized in Phase 1 startup
- whether `docs/ARCHITECTURE.md` is always recognized
- whether `docs/DESIGN-CONTEXT.md` is recognized even if missing
- whether all `docs/requirements/*.md` are recognized by wildcard
- whether `docs/requirements/REQUIREMENTS.md` is included explicitly or by wildcard only

### IC-007 — Required vs optional startup files
**Status:** Pending  
**Needed before:** WEV-P1-005, WEV-P1-006, WEV-P1-008

**Clarify:**
- which startup files are required for `weave open`
- which missing files should be surfaced as warnings only
- whether absence rules vary by session profile later, even if startup remains permissive

### IC-008 — File path resolution policy
**Status:** Pending  
**Needed before:** WEV-P1-006

**Clarify:**
- whether FileReader must reject paths outside project root
- how symlinks should be handled in Phase 1
- whether only recognized paths may be read by ProjectStateLoader

### IC-009 — Shared export conventions
**Status:** Pending  
**Needed before:** WEV-BOOT-003, WEV-P1-001, WEV-P1-002

**Clarify:**
- preferred package export style
- whether package public APIs should be centralized through top-level `src/index.ts`
- whether deep imports should be disallowed by convention

---

## Near-Term Implementation Strategy [TODO-STRATEGY]

The immediate objective is to make the next session highly likely to succeed by reducing ambiguity before code begins.

### Strategy steps
1. complete monorepo scaffold planning
2. capture builder clarifications for Slice A1 and B1 in this file
3. confirm readiness checklist satisfaction
4. produce a precise first implementation plan in this file
5. begin coding only after the plan is execution-grade and repository-captured

---

## Phase 1 — Shared Types and Contracts [TODO-P1-SHARED]

### WEV-P1-001 — Implement Result type helpers
**Status:** Pending  
**Priority:** Critical  
**Traces:** [DECISIONS-007], [ARCH-ERRORS]

**Done when:**
- `packages/shared` exports a discriminated `Result<T, E>` type
- `packages/shared` exports the builder-approved initial helper set
- implementation shape matches the captured clarification record
- helper usage is sufficient for expected subsystem error handling in early slices

### WEV-P1-002 — Define core domain interfaces
**Status:** Pending  
**Priority:** Critical  
**Traces:** [ARCH-PACKAGES], [ARCH-SUBSYSTEMS]

**Done when:** shared interfaces exist for `ProjectState`, `SessionState`, `ContextPayload`, `TokenBudget`, `DeliveryArtifact`, `ChangeOrder`, `ChangeReport`, `HandoffBundle`, and `CostRecord`.

### WEV-P1-003 — Define provider contract types
**Status:** Pending  
**Priority:** Critical  
**Traces:** [DECISIONS-009], [ARCH-ROUTER], [ARCH-PACKAGES]

**Done when:** shared/provider-facing types exist for provider configuration, model metadata, request payloads, stream chunks, token estimation results, and provider errors.

### WEV-P1-004 — Define file and git error types
**Status:** Pending  
**Priority:** High  
**Traces:** [DECISIONS-007], [ARCH-ERRORS], [REQ-105], [REQ-501], [REQ-704]

**Done when:**
- common typed errors exist for file, git, provider, context, and session failure categories
- error shape matches captured builder clarification
- expected file-read startup failures can be represented without exceptions

---

## Phase 1 — Project Open and State Loading [TODO-P1-OPEN]

### WEV-P1-005 — Implement recognized file registry
**Status:** Pending  
**Priority:** Critical  
**Traces:** [REQ-102], [ARCH-CONTEXT-COMPONENTS], [ARCH-FLOW-OPEN]

**Done when:**
- the core can enumerate recognized project files by convention from a project root
- recognized file policy matches captured startup-file clarification
- required vs optional classification is represented in the registry or adjacent metadata

### WEV-P1-006 — Implement FileReader
**Status:** Pending  
**Priority:** Critical  
**Traces:** [REQ-103], [REQ-104], [REQ-105], [REQ-704], [ARCH-FILES]

**Done when:**
- the core can read recognized text files safely
- path handling follows the captured path-resolution policy
- typed results exist for present, missing, and unreadable files
- optional missing files can be surfaced without terminating startup

### WEV-P1-007 — Implement ProjectStateLoader
**Status:** Pending  
**Priority:** Critical  
**Traces:** [ARCH-CONTEXT-COMPONENTS], [ARCH-FLOW-OPEN], [REQ-102], [REQ-103]

**Done when:** Weave can load discovered state files into a `ProjectState` structure with timestamps, sizes, and token estimates.

### WEV-P1-008 — Implement startup summary formatter
**Status:** Pending  
**Priority:** High  
**Traces:** [REQ-104], [REQ-500], [REQ-501], [ARCH-FLOW-OPEN]

**Done when:** CLI open flow can display discovered files, missing expected files, and approximate context sizes.

---

## Phase 1 — Context Assembly [TODO-P1-CONTEXT]

### WEV-P1-009 — Implement token estimation utility
**Status:** Pending  
**Priority:** High  
**Traces:** [ARCH-CONTEXT-COMPONENTS], [ARCH-NFR]

**Done when:** a reusable token estimation function exists for file and payload-level approximation.

### WEV-P1-010 — Implement session profile definitions
**Status:** Pending  
**Priority:** High  
**Traces:** [ARCH-CONTEXT-COMPONENTS], [ARCH-FLOW-OPEN]

**Done when:** profile rules exist for planning, specification, architecture, and implementation sessions.

### WEV-P1-011 — Implement ContextAssembler
**Status:** Pending  
**Priority:** Critical  
**Traces:** [ARCH-CONTEXT], [ARCH-FLOW-OPEN], [REQ-501]

**Done when:** Weave can create a `ContextPayload` from loaded project state and a selected session profile.

### WEV-P1-012 — Implement TokenBudgetManager
**Status:** Pending  
**Priority:** High  
**Traces:** [ARCH-CONTEXT-COMPONENTS], [DECISIONS-011]

**Done when:** context payloads can be checked against a model budget with reserved response capacity.

---

## Phase 1 — Provider Integration and Cost Tracking [TODO-P1-AI]

### WEV-P1-013 — Implement provider interface in shared/core
**Status:** Pending  
**Priority:** Critical  
**Traces:** [DECISIONS-009], [ARCH-ROUTER], [ARCH-PACKAGES]

**Done when:** a stable provider contract exists and can be consumed by the providers package.

### WEV-P1-014 — Add first provider adapter skeleton
**Status:** Pending  
**Priority:** Critical  
**Traces:** [DECISIONS-009], [REQ-703], [REQ-705]

**Done when:** the providers package contains one adapter capable of key validation, request submission, and normalized response parsing.

### WEV-P1-015 — Add streaming chunk normalization
**Status:** Pending  
**Priority:** High  
**Traces:** [ARCH-ROUTER-COMPONENTS]

**Done when:** provider responses can be exposed as a common stream format to the CLI.

### WEV-P1-016 — Implement CostTracker
**Status:** Pending  
**Priority:** Critical  
**Traces:** [DECISIONS-011], [ARCH-ROUTER-COMPONENTS]

**Done when:** token and cost records are created per provider interaction and rolled up by session.

### WEV-P1-017 — Implement manual model switching state
**Status:** Pending  
**Priority:** High  
**Traces:** [ARCH-FLOW-SWITCH], [DECISIONS-006]

**Done when:** a session can switch active models while retaining continuity metadata and per-model usage visibility.

---

## Phase 1 — Session State and Close Workflow [TODO-P1-SESSION]

### WEV-P1-018 — Implement SessionStateStore
**Status:** Pending  
**Priority:** Critical  
**Traces:** [ARCH-SESSION-COMPONENTS], [DECISIONS-010]

**Done when:** in-memory session state supports open, update, and snapshot operations.

### WEV-P1-019 — Implement checkpoint serializer
**Status:** Pending  
**Priority:** Critical  
**Traces:** [DECISIONS-010], [DECISIONS-012], [REQ-112]

**Done when:** session state can be persisted to and loaded from `.weave/session-checkpoint.json`.

### WEV-P1-020 — Implement resume-or-discard startup handling
**Status:** Pending  
**Priority:** High  
**Traces:** [DECISIONS-010], [ARCH-SESSION-COMPONENTS]

**Done when:** CLI startup detects interrupted sessions and lets the builder resume or discard.

### WEV-P1-021 — Implement SessionClosePipeline
**Status:** Pending  
**Priority:** Critical  
**Traces:** [DECISIONS-005], [ARCH-SESSION-COMPONENTS], [ARCH-FLOW-CLOSE]

**Done when:** close stage sequencing exists with resumable stage progress.

### WEV-P1-022 — Implement TODO-first close artifact generation
**Status:** Pending  
**Priority:** Critical  
**Traces:** [DECISIONS-005], [ARCH-FLOW-CLOSE]

**Done when:** the system can generate `TODO.md` and `HANDOFF.md` close outputs from session state.

---

## Phase 1 — Safe File and Git Operations [TODO-P1-IO]

### WEV-P1-023 — Implement FileWriter atomic write flow
**Status:** Pending  
**Priority:** Critical  
**Traces:** [DECISIONS-008], [REQ-106], [REQ-107], [REQ-108], [REQ-109]

**Done when:** file writes follow the backup-temp-rename-verify sequence and fail safely.

### WEV-P1-024 — Implement ConflictDetector
**Status:** Pending  
**Priority:** Critical  
**Traces:** [REQ-110], [REQ-111], [ARCH-FILES-COMPONENTS]

**Done when:** writes are blocked if the target changed since last read.

### WEV-P1-025 — Implement GitOperations wrapper
**Status:** Pending  
**Priority:** Critical  
**Traces:** [ARCH-GIT], [REQ-704]

**Done when:** status, add, commit, and push are supported through the local git binary with typed results.

### WEV-P1-026 — Implement git command generation
**Status:** Pending  
**Priority:** High  
**Traces:** [ARCH-DELIVERY-COMPONENTS], [ARCH-GIT]

**Done when:** approved file changes can be accompanied by generated git commands and a descriptive commit message.

---

## Phase 1 — CLI Integration [TODO-P1-CLI]

### WEV-P1-027 — Implement `weave open <path>`
**Status:** Pending  
**Priority:** Critical  
**Traces:** [ARCH-FLOW-OPEN], [REQ-500], [REQ-501], [REQ-700]

**Done when:** the CLI can open a project path, load state, and print startup summary.

### WEV-P1-028 — Implement `weave chat`
**Status:** Pending  
**Priority:** Critical  
**Traces:** [DECISIONS-003], [ARCH-FLOW-CHAT]

**Done when:** the CLI can start an interactive provider-backed session using loaded context.

### WEV-P1-029 — Implement `/switch` command
**Status:** Pending  
**Priority:** High  
**Traces:** [ARCH-FLOW-SWITCH], [DECISIONS-003]

**Done when:** an active chat session can switch models explicitly.

### WEV-P1-030 — Implement `weave close`
**Status:** Pending  
**Priority:** Critical  
**Traces:** [DECISIONS-005], [ARCH-FLOW-CLOSE], [REQ-701]

**Done when:** the CLI can run the close pipeline, apply approved file changes, and generate or execute git steps.

---

## Planning and Clarification Tasks [TODO-PLAN]

These tasks strengthen the next session by ensuring implementation starts from explicit repository-captured decisions.

### WEV-PLAN-001 — Record first-slice acceptance clarifications
**Status:** Pending  
**Priority:** Critical

**Done when:**
- builder answers for IC-001 through IC-009 are captured in `TODO-CLARIFICATIONS`
- any unresolved ambiguity is converted into a new explicit task or gate
- readiness for Slice A1/B1 can be reassessed from repository state alone

### WEV-PLAN-002 — Produce precise implementation plan for first executable slice
**Status:** Pending  
**Priority:** Critical

**Done when:**
- the next slice is explicitly selected
- task-by-task implementation steps are written in this file
- package placement is specified
- expected outputs and minimum tests are listed
- dependencies and blockers are recorded

### WEV-PLAN-003 — Add first-slice test expectations
**Status:** Pending  
**Priority:** High

**Done when:**
- minimal tests or test deferrals are specified for the first executable slice
- at minimum, early expected-failure behavior and success paths are covered in planning notes

### WEV-PLAN-004 — Reassess implementation readiness after clarifications
**Status:** Pending  
**Priority:** High

**Done when:**
- readiness checklist status is reviewed after clarifications are recorded
- go/no-go for coding the next slice is documented
- if no-go, the missing information is listed explicitly

---

## Phase 1 Execution Order [TODO-P1-ORDER]

This section defines the recommended implementation sequence for Phase 1 so work proceeds from bootstrap and shared contracts to builder-facing CLI commands with minimal rework.

### Ordered delivery path

1. Bootstrap and baseline tooling
   - WEV-BOOT-003
   - WEV-BOOT-004

2. Shared types and contracts
   - WEV-P1-001
   - WEV-P1-002
   - WEV-P1-003
   - WEV-P1-004

3. Project open and state loading
   - WEV-P1-005
   - WEV-P1-006
   - WEV-P1-009
   - WEV-P1-007
   - WEV-P1-010
   - WEV-P1-011
   - WEV-P1-012
   - WEV-P1-008

4. Session state and close workflow
   - WEV-P1-018
   - WEV-P1-019
   - WEV-P1-020
   - WEV-P1-021
   - WEV-P1-022

5. Provider integration and cost tracking
   - WEV-P1-013
   - WEV-P1-014
   - WEV-P1-015
   - WEV-P1-016
   - WEV-P1-017

6. Safe file and git operations
   - WEV-P1-023
   - WEV-P1-024
   - WEV-P1-025
   - WEV-P1-026

7. CLI integration
   - WEV-P1-027
   - WEV-P1-028
   - WEV-P1-029
   - WEV-P1-030

### Sequencing notes

- monorepo scaffold must exist before meaningful implementation begins
- shared contracts come before subsystem implementation because all packages depend on them
- project open and context loading should precede provider-backed chat so startup behavior can be tested independently
- session checkpointing and close workflow are core to Weave’s operating model and should exist before higher-volume interactive usage
- safe file and git operations should be in place before close automation applies builder-approved changes
- CLI commands should compose tested lower-level capabilities rather than define them prematurely

### Dependency clarification needed

Potential overlap exists between:
- WEV-P1-003 — Define provider contract types
- WEV-P1-013 — Implement provider interface in shared/core

Interpretation for planning purposes:
- WEV-P1-003 defines TypeScript data contracts and normalized provider-facing types
- WEV-P1-013 defines the runtime provider interface, registration boundary, and core consumption contract

If implementation reveals duplication, split or rename these tasks before execution continues.

---

## Recommended Session Slices [TODO-P1-SLICES]

Phase 1 work should be executed in short supervised sessions with bounded outcomes.

### Slice S0 — Monorepo scaffold
Includes:
- WEV-BOOT-003
- WEV-BOOT-004

**Goal:** create the workspace and package structure required for all subsequent implementation.

**Done when:**
- workspace packages exist
- strict TypeScript configuration exists
- typecheck/build scripts run successfully
- dependency direction is enforced in package manifests

### Slice A1 — Shared result and error base
Includes:
- WEV-P1-001
- WEV-P1-004

**Goal:** establish common `Result` helpers and typed failure categories used across subsystems.

**Done when:**
- shared `Result` helpers are exported
- typed file, git, provider, context, and session error categories exist
- implementation matches captured builder clarifications

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
- required vs optional file metadata is available
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
- `ContextAssembler` produces profile-scoped payloads
- `TokenBudgetManager` checks payloads against model budget with reserved response capacity
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

---

## Decision Gates [TODO-GATES]

The following decisions should be resolved before the associated implementation slices begin.

### Gate G0 — Startup recognized-file policy
**Decision needed:** define the Phase 1 recognized file set and classify files as required or optional for startup/open workflows.

**Resolve before:**
- WEV-P1-005
- WEV-P1-006
- WEV-P1-007
- WEV-P1-008

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

---

## Near-Term Recommended Start [TODO-NEXT]

Recommended next planning sequence for lowest ambiguity and highest leverage:

1. WEV-PLAN-001 — Record first-slice acceptance clarifications
2. WEV-PLAN-004 — Reassess implementation readiness after clarifications
3. WEV-PLAN-002 — Produce precise implementation plan for first executable slice
4. WEV-BOOT-003 — Create monorepo and package scaffold
5. WEV-BOOT-004 — Establish baseline engineering tooling
6. WEV-P1-001 — Implement Result type helpers
7. WEV-P1-004 — Define file and git error types
8. WEV-P1-002 — Define core domain interfaces
9. WEV-P1-005 — Implement recognized file registry
10. WEV-P1-006 — Implement FileReader

This sequence establishes the planning discipline, workspace foundation, shared contracts, and project-loading base required for most subsequent work.

---

## Open Questions — Immediate Implementation [TODO-QUESTIONS-IMMEDIATE]

These questions should be resolved soon because they affect the earliest slices.

- exact canonical `Result<T, E>` shape
- exact first-pass `Result` helper set
- typed error representation and required fields
- recognized startup file set
- required vs optional startup file classification
- file path resolution and out-of-root policy
- package export conventions for early packages

---

## Open Questions — Later Product and Architecture Decisions [TODO-QUESTIONS-LATER]

These questions do not block the earliest slices but must be resolved before their respective gates.

- which provider should be first: Anthropic or Gemini
- JSON vs SQLite for Phase 1 cost persistence
- exact command set for `weave chat`
- whether TODO/HANDOFF generation should be provider-assisted or locally templated in the first implementation slice

---

## Notes for Future Planning Sessions [TODO-NOTES]

- prefer converting ambiguity into recorded clarification tasks rather than carrying it informally
- when a builder clarification changes a task acceptance condition, update the task text directly
- if implementation suggests a task should be split, rename or split it before proceeding rather than carrying hidden scope
- if a future session proposes coding without repository-captured readiness, treat that as a process failure and return to clarification

---

*End of TODO.md*