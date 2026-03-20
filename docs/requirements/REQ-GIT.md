# REQ-GIT.md

## Summary [REQ-GIT-SUMMARY]

This document defines requirements for git command generation and optional direct execution.

### REQ-400 — Git Status Awareness
Weave shall inspect repository git state before applying change workflows.

### REQ-401 — Git Command Generation
Weave shall generate git add, commit, and push commands corresponding to delivered changes.

### REQ-402 — Direct Git Execution
CLI mode shall support direct execution of approved git operations.

**Traces:** [INTENT-G1], [INTENT-P1]