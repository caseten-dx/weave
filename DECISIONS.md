# DECISIONS.md

**Version:** 1.0  
**Date:** 2026-03-18  
**Last Updated:** 2026-03-18

---

## Summary [DECISIONS-SUMMARY]

This document records active architectural and process decisions for Weave. Each decision includes context, decision, alternatives considered, and traceability. Active decisions govern current implementation until superseded or archived.

---

## DEC-001 — TypeScript Monorepo [DECISIONS-001]

**Date:** 2026-03-18  
**Status:** Active

**Context:** Weave requires shared types, orchestration logic, provider adapters, and an interface layer with clean boundaries.

**Decision:** Weave will be implemented as a TypeScript monorepo with at least four packages: `shared`, `core`, `providers`, and `cli`.

**Alternatives Considered:** Single-package repo rejected because it weakens boundary discipline.

**Traces:** [INTENT-C2], [ARCH-TECH]

---

## DEC-002 — Repo-Native State [DECISIONS-002]

**Date:** 2026-03-18  
**Status:** Active

**Context:** The system’s value depends on durable, human-readable project state.

**Decision:** Project truth lives in version-controlled markdown files in the repository. Operational data may live under a gitignored local directory.

**Alternatives Considered:** Database-backed project truth rejected because it violates portability and inspectability goals.

**Traces:** [INTENT-G2], [INTENT-P5], [PRINCIPLE-2]

---

## DEC-003 — Shell-Agnostic Core with CLI First [DECISIONS-003]

**Date:** 2026-03-18  
**Status:** Active

**Context:** Weave needs immediate usability without committing prematurely to a desktop shell.

**Decision:** The orchestration engine will be shell-agnostic. CLI is the initial interface. Future shells may be added without changing core orchestration logic.

**Alternatives Considered:** Electron-first rejected as premature platform lock-in.

**Traces:** [INTENT-C4], [ARCH-LAYERS]

---

## DEC-004 — Progressive Autonomy [DECISIONS-004]

**Date:** 2026-03-18  
**Status:** Active

**Context:** The system is intended to evolve from manual supervision toward trusted autonomy.

**Decision:** Weave will ship in phases that preserve human approval at the beginning and automate more of the workflow only after reliability is demonstrated.

**Alternatives Considered:** Fully autonomous first design rejected as unsafe and strategically misaligned.

**Traces:** [INTENT-G4], [PRINCIPLE-4], [PRINCIPLE-8]

---

## DEC-005 — TODO-First Close Protocol [DECISIONS-005]

**Date:** 2026-03-18  
**Status:** Active

**Context:** Session close is frequent and must be lightweight.

**Decision:** The minimum close pipeline updates TODO.md and produces HANDOFF.md. Additional close artifacts are conditional.

**Alternatives Considered:** Mandatory full-session multi-document close rejected as too expensive for frequent use.

**Traces:** [INTENT-G1], [ARCH-FLOW-CLOSE]

---

## DEC-006 — Structured Model Handoffs [DECISIONS-006]

**Date:** 2026-03-18  
**Status:** Active

**Context:** Work will move between models as cost, capability, and context needs change.

**Decision:** Model-to-model transfers will use explicit artifacts: Change Orders, Change Reports, and Handoff Bundles.

**Alternatives Considered:** Informal conversation continuation rejected as unreliable and unscalable.

**Traces:** [INTENT-G3], [ARCH-HANDOFF], [PRINCIPLE-13]

---

*End of DECISIONS.md*