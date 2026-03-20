# REQ-NONFUNCTIONAL.md

## Summary [REQ-NONFUNCTIONAL-SUMMARY]

This document defines performance, reliability, portability, and security requirements.

### REQ-700 — Session Startup Performance
Weave should enable productive startup within two minutes.

### REQ-701 — Session Close Performance
Weave should enable minimum close within one minute of builder mechanical effort.

### REQ-702 — Secret Safety
Weave shall never write provider secrets to project files or logs.

### REQ-703 — Local-Only Core Operation
Local file and git operations shall function independently of model connectivity.

### REQ-704 — Data Portability
All project state files produced by Weave shall remain plain-text and tool-independent.

**Traces:** [INTENT-C1], [INTENT-C3], [INTENT-P2], [INTENT-P3]