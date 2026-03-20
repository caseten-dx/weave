# REQ-AUTONOMY.md

**Version:** 1.1  
**Date:** 2026-03-18

---

## Summary [REQ-AUTONOMY-SUMMARY]

This document defines requirements for progressive autonomy, builder authority, checkpoint gates, and future escalation rules.

---

## Phase 1 Authority Model [REQ-AUTONOMY-P1]

### REQ-600 — Supervised Workflow

Phase 1 shall operate in supervised mode, with the builder approving substantive file and git actions.

**Traces:** [INTENT-G4], [INTENT-C6]

### REQ-601 — No Silent Promotion of Work

Phase 1 shall not silently apply major file changes or advance workflow stages without builder confirmation.

**Traces:** [INTENT-G4], [INTENT-C6]

---

## Checkpoints [REQ-AUTONOMY-CHECKPOINT]

### REQ-602 — Explicit Checkpoint Gates

Weave shall treat review and confirmation points as explicit gates rather than informal pauses.

**Traces:** [INTENT-G4], [INTENT-G6]

### REQ-603 — Gate Failure Stops Advancement

When a required gate fails, the workflow shall stop rather than partially advancing downstream stages.

**Traces:** [INTENT-G4], [INTENT-P2]

---

## Future Escalation Foundations [REQ-AUTONOMY-FUTURE]

### REQ-604 — Store Artifacts Needed for Future Autonomy

Phase 1 should define artifact schemas and state structures that future guided and autonomous phases can build upon.

**Traces:** [INTENT-G4], [INTENT-G6]

### REQ-605 — Reliability Before Autonomy Increase

Higher autonomy shall require evidence of reliable forward progress rather than assumption.

**Traces:** [INTENT-G4]

---

*These requirements preserve the trust-earned progression at the heart of Weave’s design.*