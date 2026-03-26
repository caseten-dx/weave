**Version:** 1.5  
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

**Readiness status:** Ready after S0 scaffold exists. Clarification blockers resolved on 2026-03-26.

### Readiness for Slice B1 — File discovery and safe reads
- recognized Phase 1 startup file set is specified
- required vs optional file classification is specified for startup/open workflow
- file path resolution policy is specified
- missing optional file behavior is specified
- required file absence behavior is specified
- startup surfacing expectations for missing files are specified

**Readiness status:** Ready after upstream shared contracts and scaffold prerequisites. Clarification blockers resolved on 2026-03-26.

### Readiness for Slice D1/D2 — Provider runtime boundary and first adapter
- first provider selection is specified
- provider configuration source is specified
- minimal request/response contract is specified
- streaming expectations are specified for the first provider slice
- normalized provider error policy is specified
- initial cost-accounting source is specified

**Readiness status:** Partial. Provider choice and key-loading policy are resolved, but minimal provider runtime contracts, normalized streaming contract shape, and normalized provider error contract still require explicit repository-captured planning before coding D1/D2.

### Readiness rule
If a future session cannot point to the captured clarification in repository state, the clarification should be treated as unresolved.

---

## Captured Clarifications [TODO-CLARIFICATIONS]

This section records implementation-relevant clarifications once explicitly confirmed by the builder.

### CLAR-001 — Canonical Result shape
**Status:** Confirmed  
**Date:** 2026-03-26  
**Resolves:** IC-001

`Result<T, E>` uses the canonical discriminated shape:

```ts
type Result<T, E> =
  | { ok: true; value: T }
  | { ok: false; error: E };