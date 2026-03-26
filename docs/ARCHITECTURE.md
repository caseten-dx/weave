# Project Weave — System Architecture

**Document Version:** 1.3  
**Date:** 2026-03-18  
**Last Updated:** 2026-03-26  
**Author:** Michael S. Gilmore + AI Co-Architect  
**Upstream Documents:** [VISION.md](../VISION.md), [INTENT.md](../INTENT.md), [PRINCIPLES.md](../PRINCIPLES.md)  
**Downstream Documents:** [requirements/REQUIREMENTS.md](requirements/REQUIREMENTS.md), [../TODO.md](../TODO.md)

---

## Summary [ARCH-SUMMARY]

This document defines the Phase 1 architecture for Weave. Weave is a shell-agnostic TypeScript monorepo built on Deno that orchestrates AI-driven software development through repo-native project state, scoped context assembly, session lifecycle management, cost-aware provider communication, structured handoff artifacts, safe file operations, and git integration. The system uses a layered architecture with strict downward dependencies: Interface, Orchestration, and Infrastructure. Phase 1 delivers a supervised CLI workflow with direct provider access, project state loading, session checkpointing, TODO-first close flow, atomic file writes, git operations, token and cost tracking, and initial model switching support. The architecture is explicitly designed to evolve from manual orchestration toward progressively trusted multi-model autonomy without requiring a rewrite of the core engine.

In the near term, Weave should replace the builder’s current manual hosted-chat workflow by connecting target-repository file access, direct provider API usage, reviewed file application, and git operations into one supervised CLI loop. This is intended to improve builder speed and reduce model-access cost at the same time. Self-application on the Weave repository is a deliberate acceleration strategy, not a narrowing of scope. Weave remains intended to operate on external repositories as a general tool once the core workflow is reliable.

---

## System Overview [ARCH-OVERVIEW]

### Design Philosophy [ARCH-PHILOSOPHY]

Weave is an orchestration layer, not an IDE and not an AI model.

Its primary function is to preserve builder intent while reducing the manual cost of AI-assisted development. It does this by treating the project repository as the source of truth, assembling only the context needed for a task, packaging work into explicit artifacts, and moving outputs back into repo state through safe and reviewable workflows.

The architecture is guided by eight operational commitments:

1. **Files are truth.** Project understanding must survive model swaps, crashes, shell changes, and tool removal.
2. **Startup and close are high-friction moments.** They must be optimized early.
3. **Context is a scarce resource.** It must be budgeted, scoped, and assembled deliberately.
4. **Automation follows evidence.** The system begins supervised and earns more autonomy through demonstrated reliability.
5. **The core must outlive any interface.** CLI comes first, but the orchestration engine must remain reusable.
6. **Builder time is more expensive than implementation cleverness.** Simple reliable mechanisms win.
7. **Use on self before use on others.** Weave should begin accelerating work on the Weave repository itself as soon as it can do so safely.
8. **Self-application does not redefine the boundary.** The core must still treat external repositories as first-class targets so the product does not become dependent on internal-only assumptions.

### Layered Architecture [ARCH-LAYERS]

Weave consists of three layers:

- **Interface Layer** — builder interaction, initially through CLI
- **Orchestration Layer** — context, session, routing, handoff, and delivery logic
- **Infrastructure Layer** — filesystem, git, provider APIs, local operational persistence

Dependency direction is strictly downward:

- Interface depends on Orchestration
- Orchestration depends on Infrastructure abstractions
- Infrastructure depends only on shared types and platform APIs

No upward dependency is allowed.

### Package Mapping [ARCH-PACKAGES]

The monorepo contains four packages:

- `packages/shared` — shared types, result utilities, constants, basic schemas
- `packages/core` — orchestration layer and infrastructure interfaces
- `packages/providers` — provider adapters and token/cost integration
- `packages/cli` — command-line interface

Dependency direction:

`shared` ← `core` ← `providers` ← `cli`

`providers` may implement interfaces defined in `core` or `shared`, but orchestration logic must not depend directly on a specific provider adapter.

### Repository Target Model [ARCH-REPO-TARGETS]

Weave is developed in its own repository, but it is not architected as an internal-only monorepo assistant.

Phase 1 supports two operating modes:

1. **Self-hosting mode** — Weave operates on the Weave repository itself in supervised fashion to accelerate its own development.
2. **External target mode** — Weave operates on a separate repository selected by the builder.

The short-term priority is self-hosting mode because it removes current workflow drag fastest. However, all file resolution, project loading, write safety, and git operations should be implemented against an explicit target project root rather than hardcoded assumptions about the Weave repository layout.

This preserves the product boundary needed for later use on WhyDown, Silver, and other repositories.

---

## Phase 1 Scope [ARCH-PHASE1]

### Phase 1 Objective [ARCH-PHASE1-OBJECTIVE]

Phase 1 delivers enough value that the builder can use Weave for real work immediately.

In practical terms, Phase 1 should first eliminate the most expensive parts of the current workflow:
1. manual copy/paste interaction between the local repository and hosted chat tools
2. repeated manual startup context assembly
3. repeated manual file application and git bookkeeping
4. higher-cost hosted-chat usage when direct provider APIs would suffice

That value is defined by one primary near-term outcome:

**Replace the current manual repo ↔ hosted-chat ↔ repo loop with a supervised CLI workflow that:**
- reads files directly from a target repository
- uses direct BYOK provider APIs for model access
- supports interactive work in the CLI
- prepares and safely applies reviewed file changes
- assists with git operations

This workflow replacement should improve builder throughput and reduce model-access cost relative to the current hosted-chat process.

### Phase 1 Deliverables [ARCH-PHASE1-DELIVERABLES]

Phase 1 includes:

- direct BYOK provider access
- project state file discovery and loading
- session profile-based context assembly
- token budget estimation
- per-interaction and per-session cost tracking
- session lifecycle management
- local session checkpoint persistence
- TODO-first close protocol
- HANDOFF.md generation
- safe file read/write operations
- conflict detection before writes
- local git status/add/commit/push integration
- CLI project open and chat workflows
- manual model switching with context carryover
- shared artifact schemas for future handoffs

Phase 1 does **not** yet include:

- fully automated decomposition
- multi-model review loops
- automatic retry orchestration
- autonomous approval
- parallel agent execution
- code execution sandboxing
- autonomous routing without builder direction

### Phase 1 Minimum Useful Loop [ARCH-PHASE1-MIN-LOOP]

The minimum useful Phase 1 loop is:

1. open a target repository
2. read recognized project files directly from that repository
3. interact with a chosen model through direct provider API access
4. work through the CLI instead of a hosted chat interface
5. generate reviewed file updates or close artifacts
6. apply approved changes safely to the repository
7. assist with git add/commit/push operations

Phase 1 is not meaningfully successful until this loop is supervised-usable and materially better than the current manual copy/paste workflow.

### Phase 1 Priority Model [ARCH-PHASE1-PRIORITY]

Phase 1 capabilities are intentionally not equally prioritized.

#### Priority Tier 1 — Immediate workflow replacement
Deliver first:
- workspace/bootstrap foundation
- shared contracts needed for early implementation
- direct provider API access
- first provider adapter
- normalized streaming
- direct API cost visibility
- project open
- file discovery and safe reads
- interactive CLI chat

#### Priority Tier 2 — Safe repo-native operation
Deliver next:
- project state loading with token estimation
- safe file writes
- conflict detection
- git integration
- supervised close command

#### Priority Tier 3 — Workflow hardening and continuity
Deliver after baseline usefulness exists:
- checkpointing
- resume/discard handling
- close pipeline sequencing
- TODO/HANDOFF generation hardening
- richer context budgeting and startup summary polish

#### Priority Tier 4 — Optimization after baseline utility
Deliver last in Phase 1:
- manual model switching
- command-surface expansion beyond the minimum useful set
- routing-oriented optimization beyond builder-directed model choice

Priority should be resolved by this rule:
1. replace the manual hosted-chat workflow with the direct-API repo-native loop
2. enable safe supervised repository operations
3. reduce repetitive human startup, file, and git work
4. improve continuity and hardening
5. improve cost and speed further through routing sophistication

---

## Core Subsystems [ARCH-SUBSYSTEMS]

### Context Engine [ARCH-CONTEXT]

**Purpose:** Build the context payload sent to a model and track context usage state.

#### Components [ARCH-CONTEXT-COMPONENTS]

**ProjectStateLoader**  
Discovers and reads recognized project state files from an explicit target repository root. In Phase 1 it supports:

- root governance files
- `docs/ARCHITECTURE.md`
- `docs/DESIGN-CONTEXT.md`
- `docs/requirements/*.md`

For each file it records:
- existence
- last-modified timestamp
- byte size
- estimated token count

**ContextAssembler**  
Builds a context payload from loaded files according to session profile:
- planning
- specification
- architecture
- implementation

It applies priority ordering if token limits are approached:
1. system instructions
2. active task context
3. architecture and decisions
4. historical context

**TokenBudgetManager**  
Produces pre-submission estimates for:
- total input size
- reserved output capacity
- remaining context headroom

It records actual usage when provider responses include token accounting.

**AggregateContextManager**  
In Phase 1 this is visibility-only. It tracks per-model context state when the builder switches models mid-session. It does not yet automate routing decisions.

---

### Session Manager [ARCH-SESSION]

**Purpose:** Manage the lifecycle of a working session from open to close.

#### Components [ARCH-SESSION-COMPONENTS]

**SessionLifecycle**  
Handles state transitions:
- initializing
- active
- pausing
- closing
- closed
- crashed-resumable

**SessionStateStore**  
Maintains in-memory session state:
- active model
- conversation summary or history handles
- pending file changes
- task updates
- decisions flagged during session
- cost totals
- close pipeline progress

This state is checkpointed to local operational storage.

**SessionClosePipeline**  
Implements ordered close stages. Phase 1 minimum:

1. update TODO.md
2. generate HANDOFF.md

Optional:
3. update DECISIONS.md
4. update SESSIONLOG.md

Ordering when multiple stages are active:
- DECISIONS
- TODO
- SESSIONLOG
- HANDOFF

HANDOFF is always generated at end of close.

The pipeline stores per-stage completion state so failed closes can resume from the failed stage instead of restarting.

---

### Model Router [ARCH-ROUTER]

**Purpose:** Communicate with AI models through a stable provider boundary, expose cost and capability trade-offs, and support progressively more efficient model usage over time.

#### Components [ARCH-ROUTER-COMPONENTS]

**ProviderRegistry**  
Stores configured providers, credentials lookup metadata, supported models, and pricing metadata.

**ModelSelector**  
Phase 1 prioritizes:
- direct provider access
- explicit model selection by builder
- manual model switching within an active session

Simple routing rules may be added later in Phase 1 if they do not slow delivery of the core CLI workflow. It does not autonomously choose models without builder direction.

**CostTracker**  
Records:
- input tokens
- output tokens
- estimated and/or actual cost
- provider
- model
- session ID
- timestamp

**APIClient**  
Normalizes provider communication into a common streaming format. Handles:
- request formatting
- response parsing
- retryable transport errors
- provider-specific token/accounting extraction

### Cost Optimization Model [ARCH-COST-MODEL]

Phase 1 distinguishes between two kinds of cost optimization:

1. **Direct API cost control** — immediate priority. Moving model usage from hosted chat interfaces to direct provider APIs through BYOK credentials improves cost visibility and can reduce spend while also reducing workflow friction.
2. **Routing-based cost optimization** — later priority. More sophisticated model/provider selection based on price, capability, and context constraints can be added after the baseline supervised CLI workflow is already useful.

This distinction should guide sequencing decisions and prevent advanced routing work from delaying the direct-API workflow replacement milestone.

---

### Model Handoff Protocol [ARCH-HANDOFF]

**Purpose:** Define artifacts for model-to-model work transfer.

Phase 1 establishes the schemas but only basic manual usage.

#### Components [ARCH-HANDOFF-COMPONENTS]

**ChangeOrderGenerator**  
Packages a bounded task for another model.

**ChangeReportGenerator**  
Summarizes what a model changed and any concerns.

**HandoffBundleGenerator**  
Packages summary, relevant files, and next-step instructions for another model.

**ContextPartitionTracker**  
Phase 1 stores only lightweight responsibility notes. Full partitioned coordination is Phase 2.

---

### Delivery Formatter [ARCH-DELIVERY]

**Purpose:** Convert model output into builder-usable artifacts.

#### Components [ARCH-DELIVERY-COMPONENTS]

**FileDeliveryFormatter**  
Formats changes as either:
- full file replacement
- targeted edit instruction

Phase 1 should prefer full file output for source files and TODO/HANDOFF updates unless the targeted edit is significantly clearer.

**GitCommandGenerator**  
Generates:
- `git add`
- `git commit`
- `git push`

with commit messages derived from session context.

**DeliveryArtifactPresenter**  
In CLI mode, presents pending file changes and collects builder confirmation.

---

### File Manager [ARCH-FILES]

**Purpose:** Read and write project files safely.

#### Components [ARCH-FILES-COMPONENTS]

**FileReader**  
Reads recognized text files relative to an explicit target project root, with bounded path resolution and missing-file handling.

**FileWriter**  
Writes files relative to an explicit target project root and uses a backup-first atomic write sequence:
1. backup existing file if present
2. write temp file in same directory
3. rename temp over original
4. verify final size/readability

**ConflictDetector**  
Blocks writes when a file changed since Weave last read it.

---

### Git Integration [ARCH-GIT]

**Purpose:** Support version control operations directly from the CLI workflow.

#### Components [ARCH-GIT-COMPONENTS]

**GitOperations**  
Wraps the local git binary for an explicit target repository root and supports:
- status
- add
- commit
- push
- log

**AutoCommit**  
Generates commit messages from current session context.

**BranchManager**  
Deferred in Phase 1 unless basic branch name visibility is trivial to add.

---

## Data Flow [ARCH-DATAFLOW]

### Project Open Flow [ARCH-FLOW-OPEN]

1. Builder runs `weave open <path>`
2. CLI validates project path
3. ProjectStateLoader discovers recognized files
4. token estimates are computed per file
5. startup summary is displayed
6. builder selects or confirms session profile
7. context payload is assembled
8. session state is initialized and checkpoint baseline is written

### Chat Interaction Flow [ARCH-FLOW-CHAT]

1. Builder sends prompt
2. current context payload and message are submitted through the selected provider/model
3. response streams back through provider adapter
4. token/cost usage is recorded
5. session state is updated
6. pending changes are staged as Delivery Artifacts when appropriate

### Model Switch Flow [ARCH-FLOW-SWITCH]

1. Builder invokes model switch
2. current session summary is packaged
3. new model context payload is assembled
4. AggregateContextManager records usage shift
5. new provider request begins under same session ID

### Close Flow [ARCH-FLOW-CLOSE]

1. Builder invokes session close
2. close stages are determined
3. TODO update is prepared and confirmed
4. optional additional documents are prepared in order
5. HANDOFF.md is generated
6. approved file changes are written safely
7. git commands are generated or executed
8. session state checkpoint is cleared or marked closed

---

## Operational Storage [ARCH-OPS-STORAGE]

Weave uses a local gitignored operational directory:

`.weave/`

Phase 1 stores:
- session checkpoint JSON
- backup files
- optional config JSON
- cost ledger JSON or SQLite database depending on implementation timing

Project state files in the target repository remain authoritative for project understanding.

When Weave is operating on the Weave repository itself, `.weave/` lives in that repository as normal. When operating on another repository, operational storage should remain clearly scoped to the active target so checkpoint, backup, and cost state do not become ambiguous across projects.

---

## Error Handling [ARCH-ERRORS]

### Error Philosophy [ARCH-ERRORS-PHILOSOPHY]

Expected failures return `Result<T, E>`. Examples:
- missing file
- parse failure
- provider auth failure
- token budget exceeded
- external modification conflict

Unexpected failures throw and are caught at subsystem boundaries.

### Error Categories [ARCH-ERRORS-CATEGORIES]

**Recoverable**
- temporary provider failure
- retryable network issue
- optional file missing

**User-Actionable**
- invalid API key
- required file missing
- git repo not initialized
- file conflict detected

**Fatal**
- invariant violation
- corrupted checkpoint format preventing safe continuation
- internal impossible-state bug

### Close Pipeline Failure Rule [ARCH-ERRORS-CLOSE]

A failed close stage preserves all previously confirmed stages. The builder can retry from the failed stage.

---

## Security [ARCH-SECURITY]

- provider keys from environment variables first
- no secrets written to repo files
- no telemetry
- HTTPS provider communication
- local-only logs
- project remains usable without Weave
- Deno runtime permissions should be kept as narrow as practical for the active workflow
- subprocess access for git remains a high-sensitivity capability and should be bounded to explicit repository operations

---

## Non-Functional Targets [ARCH-NFR]

- startup to productive interaction under two minutes
- minimum close under one minute of mechanical effort
- no partial overwrite on failed write
- local operations remain usable without provider connectivity
- project state remains plain text and portable

---

## Technology Stack [ARCH-TECH]

- Deno runtime
- TypeScript strict mode
- Deno workspace monorepo
- direct provider HTTP integration
- local git binary via `Deno.Command`
- CLI initial interface
- future GUI as a second interface over the same core
- markdown project state
- JSON or SQLite operational persistence

---

## Near-Term Delivery Priority [ARCH-NEAR-TERM]

Phase 1 should be sequenced to maximize builder workflow improvement early:

1. establish the Deno workspace and shared contracts
2. enable direct provider access through BYOK APIs
3. support project open and target-repo-aware state loading
4. support interactive CLI model usage
5. support safe file read/write against an explicit target root
6. support git-assisted supervised close workflow
7. add session checkpointing and close hardening
8. add manual model switching
9. add routing-oriented optimization only after the CLI workflow is already materially replacing the manual hosted-chat loop

This sequencing is intended to move the builder from the current repo/VS Code → hosted chat → repo/VS Code → git workflow to a supervised repo-native direct-API CLI workflow as quickly as possible.

---

*This document defines the implementation architecture for Phase 1. Expanded multi-model orchestration and autonomous workflow features are intentionally deferred until the supervised CLI workflow proves reliable in real use.*