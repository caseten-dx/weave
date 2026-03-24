# Project Weave — Founding Intent

**Document Version:** 1.0  
**Date:** 2026-03-18  
**Author:** Michael S. Gilmore + AI Co-Architect  
**Status:** Canonical founding reference

---

## Summary [FOUNDING-SUMMARY]

This document preserves the founding thesis of Weave. It exists to prevent the project from drifting into a generic AI developer tool, chat wrapper, or code generator. Weave is intended to be a repo-native, artifact-driven, progressively autonomous software delivery system in which the human builder focuses on intent, architecture, behavioral definition, and quality judgment while AI agents execute bounded delivery work under explicit guardrails. This document is not a marketing statement. It is a constitutional memory artifact that records what Weave is fundamentally for, what must not be optimized away, and how to detect drift from its intended trajectory.

---

## Founding Thesis [FOUNDING-THESIS]

Weave exists to help a human builder create software by working primarily at the level of:

- product intent
- specifications
- BDD scenarios
- architecture
- constraints
- acceptance criteria
- sniff testing and outcome review
- governance of trust and autonomy

AI agents should do the majority of the mechanical and implementation-heavy work:

- refining requirements
- generating task plans
- producing code
- writing tests
- performing review passes
- preparing delivery artifacts
- updating project state
- assisting with SDLC mechanics

The system must begin with a manual, auditable, Git-backed, artifact-driven operating model. It should then gradually automate the parts of the workflow that become predictable and trustworthy, while keeping the human in authority over intent and risk.

---

## The Problem Weave Solves [FOUNDING-PROBLEM]

Current AI-assisted development workflows fail in predictable ways:

- project state is trapped in chats instead of files
- context is reassembled manually every session
- model outputs are not traceable to requirements or decisions
- models lose context or go down rabbit holes
- the builder spends time on mechanical process instead of architectural thinking
- autonomy is imagined before reliability is proven
- code generation is overemphasized while requirements, BDD, tests, and review remain weak

Weave solves these structurally by making the repository the source of truth and treating AI interactions as artifact transformations rather than as ephemeral conversations.

---

## Human Role [FOUNDING-HUMAN]

The builder’s role is not to disappear. It is to move upward in abstraction.

The human should spend increasing amounts of time on:

- clarifying product intent
- defining behavior and acceptance criteria
- refining specifications
- shaping architecture
- deciding trade-offs
- reviewing outputs
- sniff testing working application slices
- setting policies for what may become autonomous

The human should spend decreasing amounts of time on:

- manually loading context
- repeatedly formatting prompts
- copying model output into files
- manually stitching implementation details
- repeating predictable workflow mechanics
- re-explaining project state every session

---

## AI Role [FOUNDING-AI]

AI agents are workers operating on explicit repo artifacts.

They are not the source of truth.  
They are not entitled to broad, vague, open-ended autonomy.  
They are not allowed to replace durable project state with chat memory.

Their role is to transform durable artifacts into other durable artifacts under scoped context, explicit task boundaries, and verification gates.

---

## The Intended End-State [FOUNDING-ENDSTATE]

The intended end-state of Weave is a near-dark-factory software delivery workflow in which:

- the builder defines goals, features, behavioral expectations, and architectural boundaries
- AI agents translate that intent into code, tests, docs, and delivery artifacts
- model routing optimizes for capability, token cost, and context preservation
- autonomy increases only where evidence shows the system is reliable
- the builder moves from operator, to approver, to exception handler, to governor
- all major outputs remain inspectable, auditable, reversible, and traceable

This end-state must be reached gradually through measured success, not asserted by design language alone.

---

## What Must Never Be Optimized Away [FOUNDING-INVARIANTS]

The following are load-bearing founding commitments:

1. **Repo truth over chat memory.** If knowledge matters, it must exist in files.
2. **Artifacts over vibes.** Work must be represented in durable artifacts, not implied by conversation.
3. **BDD and acceptance criteria matter.** Behavior definition is not optional ceremony.
4. **Supervised mode must remain valuable.** The system must be useful before autonomy is high.
5. **Autonomy is earned.** No major workflow should be made autonomous without evidence.
6. **Context is structural.** Scoped loading, token budgets, and handoffs are first-class concerns.
7. **Routing is essential.** Capability, cost, and context preservation are core product functions.
8. **The builder remains the authority.** The system may automate execution, not ownership of intent.
9. **Tests and evidence matter.** The system must not drift into unverified code production.
10. **The workflow is full-SDLC.** Weave is not just a code generator.

---

## What Weave Must Never Collapse Into [FOUNDING-NOT]

Weave must not collapse into any of the following:

- a prettier prompt manager
- a chat shell with file writes
- an IDE replacement
- a generic agent swarm demo
- a one-model code generation wrapper
- a doc-heavy system that is never used in practice
- a tool that optimizes for architecture diagrams while ignoring delivery loops
- a tool that claims autonomy without measurement
- a workflow where tests and evidence are afterthoughts
- a system where the builder still does most of the mechanical orchestration manually

---

## Founding Success Conditions [FOUNDING-SUCCESS]

Weave is successful when the following become true in practice:

- the builder can start productive sessions quickly without reconstructing project context manually
- repo artifacts are sufficient to resume work across sessions
- the builder increasingly writes intent, BDD, specs, and architecture instead of implementation detail
- AI-generated outputs become cheaper and more reliable over time
- tasks are bounded and traceable
- code, tests, and decisions stay linked to requirements and behavior
- session close reliably preserves continuity
- autonomy expands only where the system has earned trust through evidence

---

## Drift Warning Signs [FOUNDING-DRIFT]

The project is drifting if:

- shell UX becomes more important than orchestration value
- code generation gets stronger while requirements and BDD remain weak
- project truth moves into `.weave/` or chat state instead of repo files
- the workflow cannot be run manually with clarity
- outputs are not traceable to acceptance criteria
- the builder still spends large amounts of time on session setup and close mechanics
- routing is nominal rather than operational
- more autonomy is added without reliability metrics
- prompts become the system instead of artifacts becoming the system

---

## Use of This Document [FOUNDING-USE]

This document should be consulted when:

- making significant architectural decisions
- redefining roadmap priorities
- evaluating whether a proposed feature belongs in Weave
- deciding whether to automate a workflow stage
- reviewing milestone completion
- resolving ambiguity between implementation convenience and product fidelity

If another document conflicts with this document’s founding thesis, the conflict should be surfaced explicitly and resolved through decision review rather than allowed to drift silently.

---

*This file is the preserved statement of original intent. It should change rarely and only with deliberate review.*