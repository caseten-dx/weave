**Version:** 1.4  
**Date:** 2026-03-18  
**Last Updated:** 2026-03-26

---

## Summary [TODO-SUMMARY]

This file tracks the active implementation backlog for Weave. Work is decomposed into bounded tasks intended to fit into short supervised sessions. Each implementation task includes a concrete done condition. This file also captures implementation clarifications, decision gates, execution order, and session restart guidance so future sessions can resume safely from repository state rather than chat history.

This backlog is intentionally prioritized. Phase 1 capabilities are not equally weighted. The immediate objective is to replace the manual repo/VS Code ↔ hosted-chat ↔ repo/VS Code workflow with a supervised CLI that uses direct provider APIs, reads and writes target-repository files directly, and assists with git operations. That workflow replacement is intended to improve builder speed and reduce model-access cost at the same time.

---

## Current Focus [TODO-FOCUS]

Deliver the Phase 1 supervised CLI foundation in the order that most directly replaces the current manual hosted-chat workflow:

1. Deno workspace bootstrap
2. shared contracts required for cross-package implementation
3. direct provider API access through BYOK credentials
4. project open and state loading from an explicit target repository root
5. interactive CLI model usage
6. safe file read and write operations
7. git-assisted supervised workflow
8. session checkpointing and TODO-first close
9. manual model switching
10. routing and deeper cost optimization only after the core CLI workflow is materially replacing the current manual process

Short-term priority is to use Weave on the Weave repository itself as soon as direct provider access, target-repo file operations, and supervised CLI usage are in place, while preserving an explicit target-root architecture so Weave remains usable on external repositories.

---

## Working Rule [TODO-WORKING-RULE]

Implementation should remain bounded and low-ambiguity, but planning discipline must not become workflow drag.

Until the readiness checklist is satisfied for the next slice, sessions should prioritize:
- clarifying acceptance criteria that materially affect implementation
- resolving immediate blocking ambiguities
- recording those clarifications in this file
- refining bounded implementation plans

Coding should begin once the next slice has sufficient repository-captured information to proceed safely and coherently. Non-blocking ambiguity should be captured explicitly and deferred rather than used to stall progress.

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
- Deno workspace is initialized at repository root
- `packages/shared`, `packages/core`, `packages/providers`, and `packages/cli` exist
- root `deno.json` exists with strict TypeScript settings and workspace membership configured
- each package has a `deno.json` where needed and an initial public entrypoint
- package dependencies reflect the intended downward architecture
- workspace typecheck runs successfully with stub exports
- scaffold choices and any deviations are recorded in this file or adjacent package notes

### WEV-BOOT-004 — Establish baseline engineering tooling
**Status:** Pending  
**Priority:** High  
**Traces:** [ARCH-TECH], [REQ-704], [REQ-707]

**Done when:**
- workspace-level `deno check` task exists
- minimal test approach is established using Deno test tooling or explicitly deferred with rationale
- root and package task conventions are present and consistent where needed
- a minimal `.gitignore` includes operational and generated artifacts including `.weave/`

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

### Readiness for Slice D1/D2 — Provider runtime boundary and first adapter
- first provider selection is specified
- provider configuration source is specified
- minimal request/response contract is specified
- streaming expectations are specified for the first provider slice
- normalized provider error policy is specified
- initial cost-accounting source is specified

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
- first provider choice
- provider key loading policy
- initial cost ledger format

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
- public package APIs should be exposed through stable top-level entrypoints rather than ad hoc deep imports

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
**Needed before:** WEV-P1-006, WEV-P1-023, WEV-P1-024

**Clarify:**
- whether FileReader must reject paths outside project root
- how symlinks should be handled in Phase 1
- whether only recognized paths may be read by ProjectStateLoader
- whether FileWriter must reject writes outside project root

### IC-009 — Shared export conventions
**Status:** Pending  
**Needed before:** WEV-BOOT-003, WEV-P1-001, WEV-P1-002

**Clarify:**
- preferred package export style
- whether package public APIs should be centralized through top-level public module entrypoints such as `mod.ts`
- whether deep imports should be disallowed by convention

### IC-010 — First provider selection
**Status:** Pending  
**Needed before:** WEV-P1-014

**Clarify:**
- which provider adapter should be implemented first:
  - OpenAI
  - Anthropic
  - Google Gemini

### IC-011 — Provider key loading policy
**Status:** Pending  
**Needed before:** WEV-P1-014

**Clarify:**
- whether provider keys are environment-variable only in the first implementation
- whether `.weave/config.json` may include non-secret provider defaults
- whether missing keys should fail adapter initialization or only fail first request

### IC-012 — Initial cost persistence format
**Status:** Pending  
**Needed before:** WEV-P1-016

**Clarify:**
- whether Phase 1 cost tracking starts with JSON only
- whether SQLite is deferred unless JSON proves insufficient

---

## Near-Term Implementation Strategy [TODO-STRATEGY]

The immediate objective is to make the next sessions highly likely to improve builder workflow, not merely to improve planning fidelity.

### Strategy steps
1. complete Deno workspace scaffold planning
2. capture builder clarifications for the first executable slices
3. confirm readiness checklist satisfaction for the next slice only
4. produce a precise first implementation plan in this file
5. begin coding once the plan is execution-grade and repository-captured
6. move as quickly as safely possible toward the direct-API repo-native CLI workflow
7. use Weave on the Weave repository itself as soon as project open, provider access, interactive CLI usage, and safe file operations are supervised-usable

### Near-term operating milestone
As soon as project open, direct provider access, interactive CLI usage, and safe file read/write reach supervised usability, Weave should be used on the Weave repository itself. This is a deliberate short-term acceleration step intended to reduce copy/paste workflow drag, reduce hosted-chat dependence, and mature the product through direct use.

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

## Phase 1 — Provider Integration and Cost Tracking [TODO-P1-AI]

### WEV-P1-013 — Implement provider interface in shared/core
**Status:** Pending  
**Priority:** Critical  
**Traces:** [DECISIONS-009], [ARCH-ROUTER], [ARCH-PACKAGES]

**Done when:** a stable provider runtime contract exists and can be consumed by the providers package.

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
**Priority:** Medium  
**Traces:** [ARCH-FLOW-SWITCH], [DECISIONS-006]

**Done when:** a session can switch active models while retaining continuity metadata and per-model usage visibility.

---

## Phase 1 — Project Open and State Loading [TODO-P1-OPEN]

### WEV-P1-005 — Implement recognized file registry
**Status:** Pending  
**Priority:** Critical  
**Traces:** [REQ-102], [ARCH-CONTEXT-COMPONENTS], [ARCH-FLOW-OPEN]

**Done when:**
- the core can enumerate recognized project files by convention from a target project root
- recognized file policy matches captured startup-file clarification
- required vs optional classification is represented in the registry or adjacent metadata

### WEV-P1-006 — Implement FileReader
**Status:** Pending  
**Priority:** Critical  
**Traces:** [REQ-103], [REQ-104], [REQ-105], [REQ-704], [ARCH-FILES]

**Done when:**
- the core can read recognized text files safely from a target project root
- path handling follows the captured path-resolution policy
- typed results exist for present, missing, and unreadable files
- optional missing files can be surfaced without terminating startup

### WEV-P1-007 — Implement ProjectStateLoader
**Status:** Pending  
**Priority:** High  
**Traces:** [ARCH-CONTEXT-COMPONENTS], [ARCH-FLOW-OPEN], [REQ-102], [REQ-103]

**Done when:** Weave can load discovered state files into a `ProjectState` structure with timestamps, sizes, and token estimates.

### WEV-P1-008 — Implement startup summary formatter
**Status:** Pending  
**Priority:** Medium  
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
**Priority:** Medium  
**Traces:** [ARCH-CONTEXT-COMPONENTS], [ARCH-FLOW-OPEN]

**Done when:** profile rules exist for planning, specification, architecture, and implementation sessions.

### WEV-P1-011 — Implement ContextAssembler
**Status:** Pending  
**Priority:** High  
**Traces:** [ARCH-CONTEXT], [ARCH-FLOW-OPEN], [REQ-501]

**Done when:** Weave can create a `ContextPayload` from loaded project state and a selected session profile.

### WEV-P1-012 — Implement TokenBudgetManager
**Status:** Pending  
**Priority:** Medium  
**Traces:** [ARCH-CONTEXT-COMPONENTS], [DECISIONS-011]

**Done when:** context payloads can be checked against a model budget with reserved response capacity.

---

## Phase 1 — Safe File and Git Operations [TODO-P1-IO]

### WEV-P1-023 — Implement FileWriter atomic write flow
**Status:** Pending  
**Priority:** Critical  
**Traces:** [DECISIONS-008], [REQ-106], [REQ-107], [REQ-108], [REQ-109]

**Done when:** file writes against a target project root follow the backup-temp-rename-verify sequence and fail safely.

### WEV-P1-024 — Implement ConflictDetector
**Status:** Pending  
**Priority:** Critical  
**Traces:** [REQ-110], [REQ-111], [ARCH-FILES-COMPONENTS]

**Done when:** writes are blocked if the target changed since last read.

### WEV-P1-025 — Implement GitOperations wrapper
**Status:** Pending  
**Priority:** Critical  
**Traces:** [ARCH-GIT], [REQ-704]

**Done when:** status, add, commit, and push are supported through the local git binary for an explicit target repository root with typed results.

### WEV-P1-026 — Implement git command generation
**Status:** Pending  
**Priority:** High  
**Traces:** [ARCH-DELIVERY-COMPONENTS], [ARCH-GIT]

**Done when:** approved file changes can be accompanied by generated git commands and a descriptive commit message.

---

## Phase 1 — Session State and Close Workflow [TODO-P1-SESSION]

### WEV-P1-018 — Implement SessionStateStore
**Status:** Pending  
**Priority:** High  
**Traces:** [ARCH-SESSION-COMPONENTS], [DECISIONS-010]

**Done when:** in-memory session state supports open, update, and snapshot operations.

### WEV-P1-019 — Implement checkpoint serializer
**Status:** Pending  
**Priority:** High  
**Traces:** [DECISIONS-010], [DECISIONS-012], [REQ-112]

**Done when:** session state can be persisted to and loaded from `.weave/session-checkpoint.json`.

### WEV-P1-020 — Implement resume-or-discard startup handling
**Status:** Pending  
**Priority:** Medium  
**Traces:** [DECISIONS-010], [ARCH-SESSION-COMPONENTS]

**Done when:** CLI startup detects interrupted sessions and lets the builder resume or discard.

### WEV-P1-021 — Implement SessionClosePipeline
**Status:** Pending  
**Priority:** High  
**Traces:** [DECISIONS-005], [ARCH-SESSION-COMPONENTS], [ARCH-FLOW-CLOSE]

**Done when:** close stage sequencing exists with resumable stage progress.

### WEV-P1-022 — Implement TODO-first close artifact generation
**Status:** Pending  
**Priority:** High  
**Traces:** [DECISIONS-005], [ARCH-FLOW-CLOSE]

**Done when:** the system can generate `TODO.md` and `HANDOFF.md` close outputs from session state.

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
**Priority:** Medium  
**Traces:** [ARCH-FLOW-SWITCH], [DECISIONS-003]

**Done when:** an active chat session can switch models explicitly.

### WEV-P1-030 — Implement `weave close`
**Status:** Pending  
**Priority:** High  
**Traces:** [DECISIONS-005], [ARCH-FLOW-CLOSE], [REQ-701]

**Done when:** the CLI can run the close pipeline, apply approved file changes, and generate or execute git steps.

---

## Planning and Clarification Tasks [TODO-PLAN]

These tasks strengthen implementation by ensuring early slices start from explicit repository-captured decisions without over-serializing progress.

### WEV-PLAN-001 — Record first-slice acceptance clarifications
**Status:** Pending  
**Priority:** Critical

**Done when:**
- builder answers for IC-001 through IC-012 are captured in `TODO-CLARIFICATIONS`
- any unresolved blocking ambiguity is converted into a new explicit task or gate
- readiness for the next slice can be reassessed from repository state alone

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

## Phase 1 Priority Model [TODO-P1-PRIORITY]

Phase 1 capabilities are intentionally not equally prioritized.

### Priority tiers

#### Tier 1 — Immediate workflow replacement
These slices should land first because they directly replace hosted-chat dependence with supervised direct-API CLI usage:
- WEV-BOOT-003
- WEV-BOOT-004
- WEV-P1-001
- WEV-P1-002
- WEV-P1-003
- WEV-P1-004
- WEV-P1-013
- WEV-P1-014
- WEV-P1-015
- WEV-P1-016
- WEV-P1-005
- WEV-P1-006
- WEV-P1-027
- WEV-P1-028

#### Tier 2 — Safe repo-native operation
These slices make Weave practical for supervised use on its own repo and then on external repos:
- WEV-P1-007
- WEV-P1-009
- WEV-P1-023
- WEV-P1-024
- WEV-P1-025
- WEV-P1-026
- WEV-P1-030

#### Tier 3 — Workflow hardening and continuity
These slices improve resumability, close quality, and context discipline:
- WEV-P1-008
- WEV-P1-010
- WEV-P1-011
- WEV-P1-012
- WEV-P1-018
- WEV-P1-019
- WEV-P1-020
- WEV-P1-021
- WEV-P1-022

#### Tier 4 — Optimization after baseline usefulness
These slices matter, but should not delay the baseline supervised CLI:
- WEV-P1-017
- WEV-P1-029
- later routing logic beyond manual switching

### Priority rule
If there is a sequencing conflict, prefer the work that:
1. replaces the manual hosted-chat workflow with direct API usage against a target repository
2. enables safe supervised operation on that repository
3. reduces repetitive human startup, file, and git work
4. improves continuity and polish
5. improves cost and speed further through routing or additional automation

---

## Phase 1 Execution Order [TODO-P1-ORDER]

This section defines the recommended implementation sequence for Phase 1 so work proceeds from foundational contracts to builder-facing CLI workflows with minimal rework.

### Ordered delivery path

1. Bootstrap and baseline tooling
   - WEV-BOOT-003
   - WEV-BOOT-004

2. Shared types and contracts
   - WEV-P1-001
   - WEV-P1-002
   - WEV-P1-003
   - WEV-P1-004

3. Provider runtime boundary and first direct model access
   - WEV-P1-013
   - WEV-P1-014
   - WEV-P1-015
   - WEV-P1-016

4. Project open and state loading
   - WEV-P1-005
   - WEV-P1-006
   - WEV-P1-009
   - WEV-P1-007
   - WEV-P1-010
   - WEV-P1-011
   - WEV-P1-012
   - WEV-P1-008

5. CLI integration for practical supervised use
   - WEV-P1-027
   - WEV-P1-028

6. Safe file and git operations
   - WEV-P1-023
   - WEV-P1-024
   - WEV-P1-025
   - WEV-P1-026
   - WEV-P1-030

7. Session state and close workflow hardening
   - WEV-P1-018
   - WEV-P1-019
   - WEV-P1-020
   - WEV-P1-021
   - WEV-P1-022

8. Manual model switching and later routing-oriented capabilities
   - WEV-P1-017
   - WEV-P1-029
   - follow-on routing work after baseline CLI workflow is proven faster and cheaper than the current manual process

### Sequencing notes

- Deno workspace scaffold must exist before meaningful implementation begins
- shared contracts come before subsystem implementation because all packages depend on them
- direct provider access is intentionally earlier than deeper workflow hardening because replacing manual hosted-chat use is the highest immediate leverage
- project open should follow early so Weave can read repo state directly instead of depending on copy/paste context assembly
- interactive CLI usage should exist before later polish so the core workflow can begin replacing hosted-chat sessions
- safe file operations and git operations should follow closely so Weave can complete the end-to-end repo-native loop
- session checkpointing and close hardening matter, but they should not block the first useful provider-backed CLI workflow
- manual model switching comes before routing automation
- routing-oriented cost optimization should not delay direct API access or safe repository workflows

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

### Slice S0 — Deno workspace scaffold
Includes:
- WEV-BOOT-003
- WEV-BOOT-004

**Goal:** create the workspace and package structure required for all subsequent implementation.

**Done when:**
- workspace packages exist
- strict TypeScript configuration exists
- typecheck tasks run successfully
- dependency direction is reflected in package structure and exports

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
- WEV-P1-016

**Goal:** connect one provider end-to-end with normalized response handling and direct API cost visibility.

**Done when:**
- one adapter supports key validation, request submission, and normalized response parsing
- streaming responses are exposed through a common chunk format
- token and cost records are created per interaction and rolled up by session

### Slice B1 — File discovery and safe reads
Includes:
- WEV-P1-005
- WEV-P1-006

**Goal:** enable the core to discover recognized project files and read them safely.

**Done when:**
- recognized file enumeration works from a target project root
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

### Slice F1 — Project open CLI
Includes:
- WEV-P1-027

**Goal:** expose startup loading through CLI.

**Done when:**
- `weave open <path>` loads project state and prints startup summary

### Slice F2 — Interactive chat CLI
Includes:
- WEV-P1-028

**Goal:** support provider-backed interactive sessions.

**Done when:**
- `weave chat` starts an interactive provider-backed session using loaded context

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
- typed git status, add, commit, and push operations work through the local git binary
- generated git commands and commit messages can accompany approved changes

### Slice F3 — Close CLI
Includes:
- WEV-P1-030

**Goal:** expose close workflow through CLI.

**Done when:**
- `weave close` runs close pipeline, applies approved file changes, and generates or executes git steps

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

### Slice D3 — Manual model switching
Includes:
- WEV-P1-017
- WEV-P1-029

**Goal:** allow supervised explicit model changes once the baseline CLI workflow is already useful.

**Done when:**
- active session can switch models while retaining continuity metadata and per-model usage visibility
- `/switch` changes active models within an active session

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
- OpenAI
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

Recommended next sequence for highest workflow leverage and lowest avoidable rework:

1. WEV-PLAN-001 — Record first-slice acceptance clarifications
2. WEV-PLAN-004 — Reassess implementation readiness after clarifications
3. WEV-PLAN-002 — Produce precise implementation plan for first executable slice
4. WEV-BOOT-003 — Create monorepo and package scaffold
5. WEV-BOOT-004 — Establish baseline engineering tooling
6. WEV-P1-001 — Implement Result type helpers
7. WEV-P1-002 — Define core domain interfaces
8. WEV-P1-003 — Define provider contract types
9. WEV-P1-004 — Define file and git error types
10. WEV-P1-013 — Implement provider interface in shared/core
11. WEV-P1-014 — Add first provider adapter skeleton
12. WEV-P1-015 — Add streaming chunk normalization
13. WEV-P1-016 — Implement CostTracker
14. WEV-P1-005 — Implement recognized file registry
15. WEV-P1-006 — Implement FileReader
16. WEV-P1-027 — Implement `weave open <path>`
17. WEV-P1-028 — Implement `weave chat`
18. WEV-P1-023 — Implement FileWriter atomic write flow
19. WEV-P1-024 — Implement ConflictDetector
20. WEV-P1-025 — Implement GitOperations wrapper
21. WEV-P1-026 — Implement git command generation
22. WEV-P1-030 — Implement `weave close`

This sequence prioritizes replacing the manual hosted-chat workflow with direct provider access and supervised repo-native operation as early as possible, while deferring more advanced routing behavior until the builder workflow is already materially improved.

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
- which provider should be first: OpenAI, Anthropic, or Gemini
- whether provider keys are environment-variable only in the first implementation
- whether JSON is sufficient for initial cost persistence

---

## Open Questions — Later Product and Architecture Decisions [TODO-QUESTIONS-LATER]

These questions do not block the earliest high-leverage slices but must be resolved before their respective gates.

- exact command set for `weave chat`
- whether TODO/HANDOFF generation should be provider-assisted or locally templated in the first implementation slice
- when simple routing rules should begin after manual switching exists
- when SQLite becomes necessary for cost persistence, if ever in Phase 1

---

## Notes for Future Planning Sessions [TODO-NOTES]

- prefer converting ambiguity into recorded clarification tasks rather than carrying it informally
- when a builder clarification changes a task acceptance condition, update the task text directly
- if implementation suggests a task should be split, rename or split it before proceeding rather than carrying hidden scope
- if a future session proposes coding without repository-captured readiness, treat that as a process failure and return to clarification
- if a lower-priority task threatens to delay a higher-priority workflow milestone, explicitly record the tradeoff and prefer the milestone unless safety is affected

---

*End of TODO.md*