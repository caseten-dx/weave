# Project Weave — Strategic Intent

**Document Version:** 1.0  
**Date:** 2026-03-18  
**Author:** Michael S. Gilmore + AI Co-Architect  
**Upstream Document:** [VISION.md](./VISION.md)

---

## Summary [INTENT-SUMMARY]

This document defines the strategic goals, hard constraints, non-goals, and success criteria for Weave. Weave is a local, TypeScript-based, repo-native orchestration system for AI-driven software development. It prioritizes intent preservation, cost-aware multi-model routing, human-readable project state, and progressive autonomy earned through checkpointed reliability. This document is the authority for product trade-offs.

---

## Strategic Goals [INTENT-GOALS]

### G1 — Eliminate Mechanical Friction [INTENT-G1]

Weave must remove manual process friction from AI-assisted development:
- loading context
- updating project state files
- formatting delivery artifacts
- executing git operations
- carrying context across sessions
- packaging handoffs between models

The builder should spend time on architecture, behavior, and judgment, not on copy-paste workflow.

### G2 — Preserve Intent with Durable Project State [INTENT-G2]

All important project knowledge must live in human-readable, version-controlled files within the repository. Weave must reduce dependence on transient model memory and ensure that truth lives in the repo, not in a context window.

### G3 — Enable Cost-Optimized Multi-Model Work [INTENT-G3]

Weave must support multiple providers and models using BYOK credentials, provide real-time and historical cost visibility, and route work according to capability, price, and context constraints.

### G4 — Support Progressive Autonomy [INTENT-G4]

Weave must begin as a supervised workflow and evolve toward trusted autonomy. The builder starts as the orchestrator. More autonomy is enabled only after reliability has been demonstrated through checkpoints, reviews, and measurable forward progress.

### G5 — Make Specification the Primary Human Work Product [INTENT-G5]

Weave must help the builder work at the level of:
- product intent
- architecture
- behavioral specifications
- acceptance criteria
- quality evaluation

The system should encourage development as intent engineering rather than prompt improvisation.

### G6 — Enable End-to-End AI-Assisted SDLC [INTENT-G6]

Weave should ultimately support the full development lifecycle:
- decomposition
- implementation
- test generation
- review
- git integration
- state updates
- retry loops
- staged release preparation

### G7 — Teach Better AI-Native Building Practice [INTENT-G7]

Using Weave should make the builder better at writing specifications, structuring work, constraining scope, and evaluating AI output. The system should expose its own reasoning and workflows rather than hiding them behind black-box automation.

---

## Constraints [INTENT-CONSTRAINTS]

### C1 — Local-First, Repo-Native Operation [INTENT-C1]

Weave is a local tool. Project state lives in repository files. The project must remain understandable and functional without Weave.

### C2 — TypeScript Monorepo [INTENT-C2]

Weave is implemented as a TypeScript monorepo. This is fixed.

### C3 — BYOK Only [INTENT-C3]

Weave does not proxy or resell model access. Builders use their own provider API keys stored locally.

### C4 — Shell-Agnostic Core [INTENT-C4]

The orchestration engine must not depend on any desktop shell. CLI is the initial interface. Other shells may be added later.

### C5 — Phased Delivery [INTENT-C5]

Each phase must deliver usable value. No phase exists solely as internal groundwork.

### C6 — Human Authority [INTENT-C6]

The builder remains the authority on intent, architecture, and release judgment. Autonomy never removes the builder’s ability to inspect and intervene.

---

## Non-Goals [INTENT-NONGOALS]

- Weave is not an IDE.
- Weave is not an AI model provider.
- Weave is not a web-first collaboration platform.
- Weave is not enterprise workflow software.
- Weave does not replace the need for architectural thinking.
- Weave does not require always-on connectivity for local operations.

---

## Guiding Trade-Off Principles [INTENT-PRINCIPLES]

### P1 — Builder Time Is the Most Precious Resource [INTENT-P1]

Every design choice should be evaluated against whether it reduces builder effort.

### P2 — State Must Survive Everything [INTENT-P2]

Crashes, interruptions, shell changes, provider changes, and tool removal must not destroy project state.

### P3 — Cost Visibility Is Mandatory [INTENT-P3]

The builder must be able to understand spend, token usage, and the reason for routing decisions.

### P4 — Simplicity Before Cleverness [INTENT-P4]

Reliable simple mechanisms beat sophisticated fragile automation.

### P5 — Files Are Truth [INTENT-P5]

If Weave’s in-memory state conflicts with repo files, repo files win.

### P6 — Transparency Builds Trust [INTENT-P6]

Weave should explain routing, handoffs, and automation decisions in builder-comprehensible terms.

---

## Success Criteria [INTENT-SUCCESS]

### Measurable [INTENT-SUCCESS-MEASURABLE]

- Session startup to productive interaction under 2 minutes
- Minimum session close under 1 minute of builder mechanical effort
- Project state preserved across interruption and crash
- Per-session and per-task AI cost visible
- Downward trend in cost per delivered feature over time
- Increasing first-pass acceptance rate of AI-produced work
- Successful delivery of a non-trivial application using Weave

### Qualitative [INTENT-SUCCESS-QUALITATIVE]

- Builders report spending more time on intent than on process
- AI-generated work is easier to trust because it is bounded and reviewable
- Builder skill improves through repeated use
- Multi-model workflows feel additive rather than chaotic
- Autonomy increases through confidence, not surrender

---

*Requirements and architecture must trace back to these goals and constraints. Anything that cannot be traced back should be questioned.*