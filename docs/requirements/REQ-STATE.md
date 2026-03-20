# REQ-STATE.md

**Version:** 1.1  
**Date:** 2026-03-18

---

## Summary [REQ-STATE-SUMMARY]

This document defines requirements for project state representation, file discovery, markdown handling, atomic writes, backup retention, and conflict detection. The repository is authoritative project memory.

---

## Project State Representation [REQ-STATE-REP]

### REQ-100 — Repo-Native Project State

Weave shall represent project state in human-readable markdown files stored in the repository.

**Traces:** [INTENT-G2], [INTENT-C1], [INTENT-P5]

### REQ-101 — Tool Independence

A project managed with Weave shall remain understandable and operable if Weave is removed.

**Traces:** [INTENT-C1], [INTENT-P2]

### REQ-102 — Convention-Based Discovery

Weave shall discover project state files by naming convention and supported directory paths rather than by a mandatory database registry.

**Traces:** [INTENT-G1], [INTENT-P4]

---

## File Reading and Parsing [REQ-STATE-READ]

### REQ-103 — Read Recognized Text Files

Weave shall read recognized markdown and text files using path-safe local file operations.

**Traces:** [INTENT-G1]

### REQ-104 — Missing Optional File Handling

When an optional state file is missing, Weave shall continue operating and surface the absence in startup or workflow summaries.

**Traces:** [INTENT-P4], [INTENT-P6]

### REQ-105 — Required File Absence Signaling

When a required file for a workflow stage is missing, Weave shall surface a user-actionable error rather than silently proceeding.

**Traces:** [INTENT-P2], [INTENT-C6]

---

## Safe Writes [REQ-STATE-WRITE]

### REQ-106 — Atomic Write Protocol

Weave shall write files using an atomic write protocol that prevents partial overwrites on failure.

**Traces:** [INTENT-P2]

### REQ-107 — Backup Before Overwrite

Before overwriting an existing file, Weave shall create a recoverable backup in local operational storage.

**Traces:** [INTENT-P2]

### REQ-108 — Same-Directory Temp File

Weave shall write temp files in the same directory as the target file prior to atomic rename.

**Traces:** [INTENT-P2]

### REQ-109 — Post-Write Verification

After a write operation, Weave shall verify the result is readable and consistent with the expected content length.

**Traces:** [INTENT-P2]

---

## Conflict Detection [REQ-STATE-CONFLICT]

### REQ-110 — Detect External Modification

Weave shall detect when a target file has been modified since it was last read by the current session.

**Traces:** [INTENT-P2], [INTENT-P5]

### REQ-111 — Block Unsafe Overwrite

When a conflict is detected, Weave shall block the write and surface the conflict to the builder.

**Traces:** [INTENT-P2], [INTENT-C6]

---

## Operational Storage [REQ-STATE-OPS]

### REQ-112 — Local Operational Directory

Weave shall use a gitignored local operational directory for backups, checkpoints, and operational metadata.

**Traces:** [INTENT-C1], [INTENT-P2]

### REQ-113 — Backup Retention

Weave shall retain backups for a configurable period, with a default retention policy suitable for short-term recovery.

**Traces:** [INTENT-P2]

---

*These requirements ensure that Weave protects project state rather than putting it at risk.*