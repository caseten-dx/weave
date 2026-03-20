# DECISIONS.md

**Version:** 1.1  
**Date:** 2026-03-18  
**Last Updated:** 2026-03-18

---

## Summary [DECISIONS-SUMMARY]

This document records active architectural and process decisions for Weave. Each decision includes context, the chosen direction, alternatives considered, and traceability. These decisions govern the current implementation unless superseded.

---

## DEC-001 — TypeScript Monorepo [DECISIONS-001]

**Date:** 2026-03-18  
**Status:** Active

**Context:** Weave requires shared types, orchestration logic, provider adapters, and an interface layer with enforceable boundaries.

**Decision:** Weave will be implemented as a TypeScript monorepo with at least four packages: `shared`, `core`, `providers`, and `cli`.

**Alternatives Considered:** Single-package repo rejected because it weakens boundary discipline and blurs dependency direction.

**Traces:** [INTENT-C2], [ARCH-PACKAGES]

---

## DEC-002 — Repo-Native Project State [DECISIONS-002]

**Date:** 2026-03-18  
**Status:** Active

**Context:** Weave’s core value depends on durable, human-readable, version-controlled state.

**Decision:** Project truth lives in markdown files inside the repository. Operational data may live in a gitignored local directory but is never authoritative over repo files.

**Alternatives Considered:** Database-backed project truth rejected because it weakens portability and violates the files-are-truth model.

**Traces:** [INTENT-G2], [INTENT-P5], [PRINCIPLE-2]

---

## DEC-003 — Shell-Agnostic Core with CLI First [DECISIONS-003]

**Date:** 2026-03-18  
**Status:** Active

**Context:** The core value of Weave does not depend on a GUI, and immediate usability matters more than committing to a shell early.

**Decision:** The orchestration engine will be shell-agnostic. CLI is the first interface.

**Alternatives Considered:** Electron-first rejected as premature interface lock-in.

**Traces:** [INTENT-C4], [ARCH-LAYERS]

---

## DEC-004 — Progressive Autonomy [DECISIONS-004]

**Date:** 2026-03-18  
**Status:** Active

**Context:** The system aims to evolve from supervised workflows to higher autonomy without losing builder trust.

**Decision:** Weave will begin in supervised mode and increase autonomy only through explicit checkpointed progression.

**Alternatives Considered:** Autonomous-first design rejected as unsafe and misaligned with trust-earned operation.

**Traces:** [INTENT-G4], [PRINCIPLE-4], [PRINCIPLE-8]

---

## DEC-005 — TODO-First Close Protocol [DECISIONS-005]

**Date:** 2026-03-18  
**Status:** Active

**Context:** Session close is frequent and must be low-friction.

**Decision:** The minimum close protocol updates TODO.md and generates HANDOFF.md. Other state documents update when warranted.

**Alternatives Considered:** Mandatory full multi-document close rejected as too expensive for frequent sessions.

**Traces:** [INTENT-G1], [ARCH-FLOW-CLOSE]

---

## DEC-006 — Structured Model Handoffs [DECISIONS-006]

**Date:** 2026-03-18  
**Status:** Active

**Context:** Work will move between models as context, capability, and cost needs change.

**Decision:** Weave will use explicit artifacts for model-to-model transfers: Change Orders, Change Reports, and Handoff Bundles.

**Alternatives Considered:** Informal continuation rejected as unreliable and hard to scale.

**Traces:** [INTENT-G6], [ARCH-HANDOFF], [PRINCIPLE-13]

---

## DEC-007 — Result Type for Expected Failures [DECISIONS-007]

**Date:** 2026-03-18  
**Status:** Active

**Context:** File operations, provider communication, git execution, and session close stages all have expected failure modes that should be visible in type signatures.

**Decision:** Public subsystem methods will use a discriminated `Result<T, E>` type for expected failures. Exceptions are reserved for bugs, invariant violations, and impossible states.

**Alternatives Considered:** Throw/catch-only error handling rejected because failure modes become invisible and easier to mishandle.

**Traces:** [ARCH-ERRORS], [INTENT-P2], [INTENT-P4]

---

## DEC-008 — Atomic Write with Backup-First Protocol [DECISIONS-008]

**Date:** 2026-03-18  
**Status:** Active

**Context:** Weave must not corrupt project state during file writes.

**Decision:** File writes use a four-step protocol: backup existing file, write temp file in same directory, atomically rename temp over target, then verify the result. If backup fails, the write aborts.

**Alternatives Considered:** Direct overwrite rejected because it risks partial corruption on interruption.

**Traces:** [ARCH-FILES], [REQ-106], [REQ-107], [INTENT-P2]

---

## DEC-009 — Provider Abstraction Interface [DECISIONS-009]

**Date:** 2026-03-18  
**Status:** Active

**Context:** Phase 1 starts with one or a small number of providers, but routing and portability require normalized communication.

**Decision:** Provider communication is defined behind a shared abstraction supporting message submission, optional streaming, token estimation, and key validation.

**Alternatives Considered:** Provider-specific orchestration logic rejected because it would spread vendor coupling into core workflows.

**Traces:** [ARCH-ROUTER], [REQ-201], [INTENT-G3]

---

## DEC-010 — Session Checkpoint Persistence [DECISIONS-010]

**Date:** 2026-03-18  
**Status:** Active

**Context:** In-memory session state is fast but fragile.

**Decision:** Active session state will be checkpointed locally in operational storage both periodically and after significant workflow events. Interrupted sessions can be resumed or discarded.

**Alternatives Considered:** In-memory-only rejected because it violates state survival requirements.

**Traces:** [REQ-006], [REQ-008], [INTENT-P2]

---

## DEC-011 — Cost Actuals Preferred over Estimates [DECISIONS-011]

**Date:** 2026-03-18  
**Status:** Active

**Context:** Builders need reliable spend visibility, but pre-submission work requires estimates.

**Decision:** Provider-reported usage actuals are authoritative when available. Estimates are used for previews and budget awareness only, and must be clearly marked as estimates.

**Alternatives Considered:** Estimates-only accounting rejected because it obscures real spend and reduces trust.

**Traces:** [REQ-303], [REQ-304], [INTENT-P3]

---

## DEC-012 — Local Operational Storage under `.weave/` [DECISIONS-012]

**Date:** 2026-03-18  
**Status:** Active

**Context:** Weave needs a place for backups, checkpoints, and operational metadata that is separate from project truth.

**Decision:** Weave will use a gitignored `.weave/` directory in the project root for local operational storage in Phase 1.

**Alternatives Considered:** Storing operational state in the markdown corpus rejected because it mixes tool operation with project truth.

**Traces:** [ARCH-OPS-STORAGE], [REQ-112], [INTENT-C1]

---

*End of DECISIONS.md*