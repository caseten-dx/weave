# REQ-SESSION.md

## Summary [REQ-SESSION-SUMMARY]

This document defines requirements for session lifecycle, startup, checkpointing, pause/resume, and close behavior.

### REQ-001 — Session Start
Weave shall support opening a project session by loading recognized project state files and assembling startup context.

### REQ-002 — Session Checkpointing
Weave shall periodically checkpoint in-memory session state to local operational storage.

### REQ-003 — Session Resume
Weave shall offer resume-from-checkpoint behavior after interruption.

### REQ-004 — Minimum Session Close
Weave shall support a minimum close protocol that updates TODO.md and produces HANDOFF.md.

### REQ-005 — Ordered Close Stages
When multiple close stages are active, Weave shall preserve a deterministic stage order.

**Traces:** [INTENT-G1], [INTENT-G4], [INTENT-P2]