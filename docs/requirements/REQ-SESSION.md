# REQ-SESSION.md

**Version:** 1.1  
**Date:** 2026-03-18

---

## Summary [REQ-SESSION-SUMMARY]

This document defines requirements for session lifecycle behavior in Weave, including project open, session initialization, checkpointing, resume, close, and close-stage recovery. These requirements are central to the supervised Phase 1 workflow.

---

## Session Lifecycle [REQ-SESSION-LIFECYCLE]

### REQ-001 — Project Session Open

Weave shall support opening a project session from a target filesystem path.

**Acceptance notes:** The open workflow must validate the path, discover recognized state files, and initialize a session record.

**Traces:** [INTENT-G1], [INTENT-C1], [INTENT-C4]

### REQ-002 — Recognized State Discovery

On session open, Weave shall discover recognized project state files by convention, including root files and supported documents under `docs/` and `docs/requirements/`.

**Traces:** [INTENT-G1], [INTENT-G2]

### REQ-003 — Session Profile Selection

Weave shall support at least four session profiles in Phase 1:
- planning
- specification
- architecture
- implementation

**Traces:** [INTENT-G1], [INTENT-G5]

### REQ-004 — Session Initialization Summary

After session open, Weave shall present a structured startup summary including discovered files, missing expected files, and context size estimates.

**Traces:** [INTENT-G1], [INTENT-P6]

### REQ-005 — In-Memory Session State

Weave shall maintain in-memory session state for the currently active session.

**Traces:** [INTENT-G1], [INTENT-P2]

---

## Checkpointing and Recovery [REQ-SESSION-CHECKPOINT]

### REQ-006 — Periodic Session Checkpointing

Weave shall periodically checkpoint session state to local operational storage during an active session.

**Traces:** [INTENT-P2], [INTENT-C1]

### REQ-007 — Significant-Change Checkpointing

Weave shall checkpoint session state immediately after significant state transitions, including:
- accepted file changes
- close stage completion
- model switch
- decision capture
- task status update

**Traces:** [INTENT-P2]

### REQ-008 — Resume Interrupted Session

If an interrupted session checkpoint exists, Weave shall offer the builder a resume-or-discard choice on next startup.

**Traces:** [INTENT-P2], [INTENT-G4]

### REQ-009 — Preserve Close Pipeline Progress

If interruption occurs during session close, Weave shall preserve close stage completion state and allow resume from the failed or incomplete stage.

**Traces:** [INTENT-P2], [INTENT-G4]

---

## Session Close [REQ-SESSION-CLOSE]

### REQ-010 — Minimum Close Protocol

Weave shall support a minimum close protocol that updates TODO.md and generates HANDOFF.md.

**Traces:** [INTENT-G1], [INTENT-G2]

### REQ-011 — Optional Close Artifacts

Weave shall support optional close-stage updates for DECISIONS.md and SESSIONLOG.md when session state indicates they are warranted.

**Traces:** [INTENT-G1], [INTENT-G5]

### REQ-012 — Deterministic Close Stage Order

When multiple close stages are active, Weave shall preserve deterministic ordering:
1. DECISIONS
2. TODO
3. SESSIONLOG
4. HANDOFF

**Traces:** [INTENT-P4], [INTENT-P2]

### REQ-013 — Builder Confirmation of Close Artifacts

Before approved writes occur in CLI mode, Weave shall present generated close artifacts for builder confirmation.

**Traces:** [INTENT-C6], [INTENT-G4]

### REQ-014 — Closed Session Finalization

On successful completion of close stages, Weave shall mark the session closed and clear or archive the active checkpoint.

**Traces:** [INTENT-P2]

---

*These requirements govern the session backbone of Phase 1.*