# REQ-STATE.md

## Summary [REQ-STATE-SUMMARY]

This document defines requirements for project state representation, markdown conventions, and file safety.

### REQ-100 — Repo-Native State
Project state shall be stored in repository files using human-readable markdown.

### REQ-101 — File Safety
Weave shall write files using an atomic write protocol with failure protection.

### REQ-102 — Conflict Detection
Weave shall detect external modifications before overwriting files.

### REQ-103 — Portability
Projects shall remain understandable and usable without Weave installed.

**Traces:** [INTENT-G2], [INTENT-C1], [INTENT-P2], [INTENT-P5]