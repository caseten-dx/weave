# Project Weave — Operating Model

**Document Version:** 1.0  
**Date:** 2026-03-18  
**Author:** Michael S. Gilmore + AI Co-Architect

---

## Summary [OPERATING-SUMMARY]

This document defines how Weave is intended to operate as a software delivery system. It explains the roles of the builder and AI agents, the artifact model, the workflow loop, approval boundaries, and how Weave evolves from a manual Git-backed process into a progressively more autonomous orchestration system. It is the operational constitution of the project.

---

## Purpose [OPERATING-PURPOSE]

Weave is designed to transform software development from a primarily implementation-centered activity into an intent-centered, artifact-driven workflow.

Its operating model assumes:

- durable state belongs in the repository
- AI agents operate on explicit artifacts
- bounded sessions produce bounded outputs
- verification gates prevent silent drift and low-trust automation
- autonomy is phased and conditional

---

## Core Operating Principle [OPERATING-CORE]

The repository is the canonical project memory.

Every meaningful state transition in the project should be represented through durable artifacts such as:

- vision and intent docs
- requirements
- BDD scenarios
- architecture docs
- decision records
- backlog items
- TODO state
- session logs
- handoff artifacts
- code changes
- tests
- delivery evidence

Conversations are useful, but they are not authoritative.

---

## Roles [OPERATING-ROLES]

### Builder [OPERATING-BUILDER]

The builder is the authority on:

- product intent
- architecture direction
- trade-off acceptance
- quality judgment
- autonomy policy
- risk acceptance
- final approval of substantive changes

The builder’s primary work should gradually move toward:

- specification
- behavior definition
- architecture refinement
- output evaluation
- sniff testing
- governance

### AI Agents [OPERATING-AI]

AI agents are specialized workers that transform artifacts under constraints. Their work may include:

- refining requirements
- generating BDD scenarios
- proposing architecture options
- decomposing work
- writing code
- writing tests
- reviewing diffs
- generating delivery artifacts
- summarizing session state
- preparing handoffs

AI agents must not be treated as canonical memory.

### Weave System [OPERATING-SYSTEM]

Weave itself is the orchestration layer. It is responsible for:

- loading state from repo artifacts
- assembling context
- routing work to models
- tracking cost and context budgets
- preserving session continuity
- formatting builder-facing outputs
- managing safe file and git workflows
- enabling guardrailed autonomy escalation

---

## Artifact Classes [OPERATING-ARTIFACTS]

Weave operates on four major classes of artifacts.

### 1. Canonical Project Artifacts [OPERATING-ARTIFACTS-CANONICAL]

These define the project and should remain human-readable and durable:

- VISION.md
- INTENT.md
- PRINCIPLES.md
- ARCHITECTURE.md
- REQUIREMENTS.md and requirement slices
- BDD features
- DECISIONS.md
- ROADMAP.md

### 2. Operational State Artifacts [OPERATING-ARTIFACTS-STATE]

These preserve current working continuity:

- TODO.md
- PROJECT_STATE.md
- HANDOFF.md
- SESSIONLOG.md
- per-session logs

### 3. Delivery Artifacts [OPERATING-ARTIFACTS-DELIVERY]

These move outputs toward builder action:

- file replacements
- targeted edit instructions
- git commands
- commit messages
- change summaries

### 4. Inter-Model Artifacts [OPERATING-ARTIFACTS-HANDOFF]

These move work between AI agents:

- Change Orders
- Change Reports
- Handoff Bundles

---

## Session Operating Loop [OPERATING-LOOP]

Every Weave session should follow the same high-level loop:

1. **Load state**
2. **Define objective**
3. **Confirm scope**
4. **Execute bounded work**
5. **Reconcile impacted artifacts**
6. **Produce check-in outputs**
7. **Persist and commit**

This loop must remain intelligible even when parts of it are automated later.

---

## Manual-First Mode [OPERATING-MANUAL]

Weave begins as a manual Git-backed workflow.

In this mode:

- the builder selects the task
- the builder loads the context packet
- the builder chooses or confirms the model
- the AI produces artifact changes
- the builder reviews and applies outputs
- the builder confirms close artifacts
- the builder approves git actions

This manual mode is not a temporary embarrassment. It is the reference process the software must faithfully improve.

---

## Progressive Autonomy Model [OPERATING-AUTONOMY]

Weave evolves through four operational levels.

### Level 1 — Manual Artifact Process [OPERATING-AUTONOMY-L1]

- copy/paste context loading
- manual artifact reconciliation
- full human approval
- no autonomous writes or merges

### Level 2 — Script-Assisted Workflow [OPERATING-AUTONOMY-L2]

- scripts and CLI package context
- state discovery becomes automatic
- close pipeline becomes assisted
- review remains human-led

### Level 3 — Tool-Assisted Orchestration [OPERATING-AUTONOMY-L3]

- model routing becomes operational
- handoffs are structured
- low-risk mechanics are automated
- checkpoint enforcement becomes stronger

### Level 4 — Policy-Bounded Autonomy [OPERATING-AUTONOMY-L4]

- bounded tasks may be executed with limited autonomous progression
- exceptions escalate to the builder
- autonomy is controlled by confidence, evidence, and policy

Weave should not skip levels.

---

## Scope Discipline [OPERATING-SCOPE]

Bounded work is essential.

Every non-trivial session or subtask should specify:

- objective
- in-scope work
- out-of-scope work
- artifacts likely to change
- acceptance criteria
- escalation conditions

If a request cannot be bounded, it should be decomposed before implementation proceeds.

---

## Approval Model [OPERATING-APPROVAL]

In Phase 1, the builder approves:

- substantive document changes
- code changes
- TODO updates
- git execution
- any potentially destructive operation
- any change that expands scope materially

Automation may only reduce approval burden where reliability has been demonstrated.

---

## Evidence and Verification [OPERATING-EVIDENCE]

Weave must distinguish between:

- proposed work
- completed work
- verified work

Claims such as “done,” “fixed,” or “complete” should be tied to evidence whenever possible, such as:

- passing tests
- traceability to acceptance criteria
- generated review output
- static checks
- builder sniff-test acceptance

---

## Why This Model Matters [OPERATING-WHY]

The operating model exists to ensure that Weave develops into the intended system:

- not just faster prompting
- not just AI code generation
- not just documentation
- but a real software delivery operating system centered on intent preservation, bounded execution, and trustworthy autonomy

---

*This document defines how Weave should function operationally. Session-level behavior is detailed in SESSION_PROTOCOL.md.*