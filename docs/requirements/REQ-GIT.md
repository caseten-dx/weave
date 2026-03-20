# REQ-GIT.md

**Version:** 1.1  
**Date:** 2026-03-18

---

## Summary [REQ-GIT-SUMMARY]

This document defines requirements for repository awareness, git command generation, and direct git execution in CLI mode.

---

## Repository Awareness [REQ-GIT-REPO]

### REQ-400 — Git Repository Detection

Weave shall detect whether the target project path is a git repository before git-dependent workflows proceed.

**Traces:** [INTENT-G1], [INTENT-P4]

### REQ-401 — Git Status Retrieval

Weave shall support retrieval of working tree status for presentation and workflow safety.

**Traces:** [INTENT-G1]

---

## Git Command Support [REQ-GIT-COMMANDS]

### REQ-402 — Git Command Generation

Weave shall generate git add, commit, and push commands corresponding to approved file changes.

**Traces:** [INTENT-G1], [INTENT-P1]

### REQ-403 — Meaningful Commit Messages

Weave shall generate descriptive commit messages derived from session context rather than generic placeholders.

**Traces:** [INTENT-G5], [INTENT-P1]

### REQ-404 — Direct Git Execution in CLI

CLI mode shall support direct execution of approved git commands using the local git binary.

**Traces:** [INTENT-G1], [INTENT-C4]

---

## Safety [REQ-GIT-SAFETY]

### REQ-405 — Builder Confirmation Before Execution

Weave shall require builder confirmation before direct git execution in supervised Phase 1 workflows.

**Traces:** [INTENT-C6], [INTENT-G4]

### REQ-406 — User-Actionable Git Errors

Git failures shall be surfaced as user-actionable errors with command context.

**Traces:** [INTENT-P4], [INTENT-P6]

---

*These requirements ensure git automation saves time without removing control.*