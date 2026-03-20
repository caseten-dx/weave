# REQ-GUIDANCE.md

**Version:** 1.1  
**Date:** 2026-03-18

---

## Summary [REQ-GUIDANCE-SUMMARY]

This document defines requirements for builder-visible reasoning, conflict surfacing, acceptance criteria reinforcement, and transparent workflow guidance.

---

## Transparency [REQ-GUIDANCE-TRANSPARENCY]

### REQ-500 — Explain Workflow Choices

Weave shall explain important workflow choices such as model selection, profile loading, and close-stage activation.

**Traces:** [INTENT-G7], [INTENT-P6]

### REQ-501 — Surface Missing Context

When Weave lacks information required to continue safely, it shall say so explicitly rather than inferring missing project state.

**Traces:** [INTENT-P2], [INTENT-P6]

### REQ-502 — Surface Document or Decision Conflict

Weave shall detect and surface conflicts between builder requests and governing project state when such conflict is identifiable.

**Traces:** [INTENT-G7], [INTENT-C6]

---

## Bounded Work Support [REQ-GUIDANCE-BOUNDED]

### REQ-503 — Acceptance Criteria Reinforcement

Before implementation work begins on a pulled task, Weave should encourage explicit acceptance criteria if they are missing or weak.

**Traces:** [INTENT-G5], [INTENT-G7]

### REQ-504 — Scope Expansion Warning

When a requested change appears to exceed the current bounded task, Weave should flag likely scope expansion.

**Traces:** [INTENT-P4], [INTENT-P6]

---

*These requirements help Weave teach good AI-native building practice rather than merely executing commands.*