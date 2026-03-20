# REQ-AI.md

## Summary [REQ-AI-SUMMARY]

This document defines requirements for provider integration, model selection, context assembly, and inter-model handoffs.

### REQ-200 — BYOK Provider Access
Weave shall support direct provider API access using locally stored builder credentials.

### REQ-201 — Provider Abstraction
Weave shall communicate with models through a provider abstraction interface.

### REQ-202 — Context Assembly
Weave shall assemble model context from project state according to session type and token budget.

### REQ-203 — Model Handoffs
Weave shall support structured handoff artifacts for transferring work between models.

### REQ-204 — Model Selection
Weave shall support manual and rule-based model selection in Phase 1.

**Traces:** [INTENT-G3], [INTENT-C3], [INTENT-C4]