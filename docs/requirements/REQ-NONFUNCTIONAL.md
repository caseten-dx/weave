# REQ-NONFUNCTIONAL.md

**Version:** 1.1  
**Date:** 2026-03-18

---

## Summary [REQ-NONFUNCTIONAL-SUMMARY]

This document defines Phase 1 non-functional requirements for performance, resilience, security, portability, and local-first behavior.

---

## Performance [REQ-NFR-PERF]

### REQ-700 — Startup Performance Target

Weave should support session startup to productive interaction in under two minutes on the target development machine.

**Traces:** [INTENT-G1], [INTENT-P1]

### REQ-701 — Close Performance Target

Weave should support the minimum close workflow in under one minute of builder mechanical effort, excluding review time.

**Traces:** [INTENT-G1], [INTENT-P1]

---

## Security [REQ-NFR-SEC]

### REQ-702 — Secret Non-Persistence in Repo

Weave shall never write provider secrets to repository files.

**Traces:** [INTENT-C3], [INTENT-P2]

### REQ-703 — Local Credential Usage

Weave shall use locally available credentials and avoid remote credential brokering.

**Traces:** [INTENT-C3], [INTENT-C1]

---

## Resilience [REQ-NFR-RES]

### REQ-704 — Local Operations Without Connectivity

Local file operations, git operations, and state inspection shall remain usable without provider connectivity.

**Traces:** [INTENT-C1], [INTENT-P2]

### REQ-705 — Graceful Provider Failure

Provider failures shall not corrupt session state or project files.

**Traces:** [INTENT-P2], [INTENT-P4]

---

## Portability [REQ-NFR-PORT]

### REQ-706 — Plain-Text State Portability

Project state files produced by Weave shall remain plain-text, human-readable, and tool-independent.

**Traces:** [INTENT-C1], [INTENT-P5]

### REQ-707 — Shell-Independent Core

Core orchestration logic shall not require a specific desktop shell framework.

**Traces:** [INTENT-C4]

---

*These non-functional requirements define the minimum quality bar for Phase 1 usefulness.*