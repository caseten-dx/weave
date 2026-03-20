# Project Weave — System Architecture

**Document Version:** 1.0  
**Date:** 2026-03-18  
**Author:** Michael S. Gilmore + AI Co-Architect  
**Upstream Documents:** [VISION.md](../VISION.md), [INTENT.md](../INTENT.md), [PRINCIPLES.md](../PRINCIPLES.md)

---

## Summary [ARCH-SUMMARY]

This document defines the architecture of Weave. Weave is a shell-agnostic TypeScript monorepo that orchestrates AI-driven software development through repo-native project state, scoped context assembly, session lifecycle management, cost-aware model routing, structured model handoffs, delivery formatting, safe file operations, and git integration. The system is organized into three layers — Interface, Orchestration, and Infrastructure — with strict downward dependency direction. The core system begins with a CLI interface and is designed to evolve from supervised manual workflows toward progressively autonomous multi-model coordination.

---

## System Overview [ARCH-OVERVIEW]

### Design Philosophy [ARCH-PHILOSOPHY]

Weave is an orchestration layer between the builder, the project repository, and one or more AI providers.

Its design is based on five architectural commitments:

1. The repository is the source of truth.
2. Context must be assembled deliberately rather than improvised ad hoc.
3. Session startup and session close are the highest-friction points and must be optimized first.
4. Autonomy is phased and checkpointed.
5. The core engine must remain independent of any specific shell.

### Layered Architecture [ARCH-LAYERS]

Weave is divided into three layers:

- **Interface Layer** — CLI initially; other shells later
- **Orchestration Layer** — context, session, routing, handoffs, formatting
- **Infrastructure Layer** — providers, filesystem, git, configuration, persistence

Dependencies flow downward only.

---

## Core Subsystems [ARCH-SUBSYSTEMS]

### 1. Context Engine [ARCH-CONTEXT]

Responsible for:
- reading project state
- parsing markdown state files
- assembling scoped context payloads
- managing token budgets
- tracking aggregate context usage across active models

Components:
- ProjectStateLoader
- ContextAssembler
- TokenBudgetManager
- AggregateContextManager

### 2. Session Manager [ARCH-SESSION]

Responsible for:
- session lifecycle
- in-memory session state
- checkpoint persistence
- ordered session close pipeline

Components:
- SessionLifecycle
- SessionStateStore
- SessionClosePipeline

### 3. Model Router [ARCH-ROUTER]

Responsible for:
- provider registration
- model selection
- cost tracking
- provider communication

Components:
- ProviderRegistry
- ModelSelector
- CostTracker
- APIClient

### 4. Model Handoff Protocol [ARCH-HANDOFF]

Responsible for:
- packaging model-to-model transfers
- generating change reports
- generating change orders
- tracking context responsibility partitions

Components:
- HandoffBundleGenerator
- ChangeReportGenerator
- ChangeOrderGenerator
- ContextPartitionTracker

### 5. Delivery Formatter [ARCH-DELIVERY]

Responsible for:
- builder-facing file delivery
- direct-apply file content formatting
- git command generation
- confirmation/presentation flow

Components:
- FileDeliveryFormatter
- GitCommandGenerator
- DeliveryArtifactPresenter

### 6. File Manager [ARCH-FILES]

Responsible for:
- safe file reads and writes
- atomic write protocol
- conflict detection
- backup retention

Components:
- FileReader
- FileWriter
- ConflictDetector

### 7. Git Integration [ARCH-GIT]

Responsible for:
- git status/add/commit/push workflows
- meaningful commit message generation
- branch support

Components:
- GitOperations
- AutoCommit
- BranchManager

---

## Data Flow [ARCH-DATAFLOW]

### Session Start [ARCH-FLOW-START]

1. Builder opens a project
2. ProjectStateLoader reads state files
3. ContextAssembler composes startup context
4. TokenBudgetManager validates payload size
5. APIClient sends first request
6. Session becomes active

Target: productive interaction in under two minutes.

### Mid-Session [ARCH-FLOW-MID]

1. Builder interacts through CLI
2. Responses are streamed from provider
3. Candidate file changes become Delivery Artifacts
4. Builder confirms application
5. FileWriter writes changes safely
6. Git operations may be executed or generated
7. Session state checkpoints periodically

### Handoff [ARCH-FLOW-HANDOFF]

1. Work is transferred to another model
2. HandoffBundleGenerator produces package
3. ChangeReport summarizes prior work
4. ChangeOrder defines next work
5. AggregateContextManager updates per-model context state

### Session Close [ARCH-FLOW-CLOSE]

1. Builder initiates close
2. SessionClosePipeline determines active stages
3. At minimum, TODO.md is updated
4. Optional DECISIONS.md and SESSIONLOG.md updates follow
5. Git actions are executed or generated
6. HANDOFF.md is updated for next session
7. Session transitions to closed

---

## Phased Delivery [ARCH-PHASES]

### Phase 1 — Supervised CLI Workflow [ARCH-PHASE1]

Delivers:
- direct BYOK API access
- project state loading
- scoped context assembly
- session persistence
- safe file writes
- git integration
- cost visibility
- manual/rule-based model selection
- basic model switching

### Phase 2 — Guided Multi-Model Coordination [ARCH-PHASE2]

Delivers:
- operational handoff bundles
- aggregate context management
- rule-based multi-model routing
- automated review support
- cost-annotated delivery artifacts
- checkpoint automation for mechanical validation

### Phase 3 — Progressive Orchestration [ARCH-PHASE3]

Delivers:
- orchestrated decomposition
- automated routing and retries
- multi-model parallel work streams
- confidence-based approval workflows
- autonomous session continuation
- higher-autonomy SDLC execution

---

## Technology Stack [ARCH-TECH]

- **Language:** TypeScript
- **Runtime:** Node.js
- **Monorepo:** pnpm workspaces
- **Packages:** `shared`, `core`, `providers`, `cli`
- **Git integration:** local git binary through child process
- **File processing:** Node filesystem APIs
- **State format:** markdown for project state, JSON/SQLite for operational data
- **Provider model:** direct HTTPS APIs, no proxy
- **Initial interface:** CLI

---

## Safety and Reliability [ARCH-SAFETY]

- atomic file writes with backup-first behavior
- external modification conflict detection
- periodic session checkpoints
- resumable failed close stages
- local-only secret handling
- no telemetry
- explicit checkpoint gates before promotion of work

---

## Cross-Cutting Concerns [ARCH-CROSSCUTTING]

### Error Handling [ARCH-ERRORS]

Expected failures return `Result<T, E>`. Unexpected failures throw and are caught at subsystem boundaries. Errors ares translated across boundaries into user-meaningful messages.

### Logging [ARCH-LOGGING]

Local logs only. Standard log levels. No remote collection.

### Security [ARCH-SECURITY]

API keys via environment variables or encrypted local storage. No project-file secret storage. HTTPS for all provider traffic.

### Testing [ARCH-TESTING]

Subsystem unit tests plus end-to-end flow tests through the CLI.

---

*This architecture is the implementation blueprint for the strategic goals in INTENT.md. It should evolve only through explicit decisions recorded in DECISIONS.md.*