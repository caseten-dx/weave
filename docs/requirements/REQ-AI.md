# REQ-AI.md

**Version:** 1.1  
**Date:** 2026-03-18

---

## Summary [REQ-AI-SUMMARY]

This document defines requirements for provider integration, context assembly, token budgeting, model switching, and future-oriented handoff artifact support in Phase 1.

---

## Provider Integration [REQ-AI-PROVIDER]

### REQ-200 — Direct BYOK Access

Weave shall support direct model-provider API access using locally stored builder credentials.

**Traces:** [INTENT-G3], [INTENT-C3]

### REQ-201 — Provider Abstraction Interface

Weave shall normalize provider communication through a shared abstraction interface.

**Traces:** [INTENT-G3], [INTENT-C4]

### REQ-202 — Provider Key Validation

Weave shall support validation of configured provider credentials before use.

**Traces:** [INTENT-C3], [INTENT-P4]

### REQ-203 — Streaming Response Support

Phase 1 provider communication should support streaming model responses where supported by the provider.

**Traces:** [INTENT-G1], [INTENT-G3]

---

## Context Assembly [REQ-AI-CONTEXT]

### REQ-204 — Session-Profile Context Assembly

Weave shall assemble model context according to the selected session profile.

**Traces:** [INTENT-G1], [INTENT-G5]

### REQ-205 — Context Priority Rules

When assembled context approaches model limits, Weave shall prioritize:
1. system and workflow instructions
2. active task context
3. relevant architecture/decisions
4. historical context

**Traces:** [INTENT-G2], [INTENT-P3]

### REQ-206 — File-Level Token Estimation

Weave shall estimate token size for loaded files prior to submission.

**Traces:** [INTENT-G3], [INTENT-P3]

### REQ-207 — Reserved Response Capacity

Weave shall reserve output space when determining whether an input payload fits within the selected model’s context window.

**Traces:** [INTENT-P3], [INTENT-P4]

---

## Model Use [REQ-AI-MODEL]

### REQ-208 — Manual Model Selection

Phase 1 shall support builder-controlled model selection.

**Traces:** [INTENT-G3], [INTENT-G4]

### REQ-209 — Mid-Session Model Switching

Phase 1 shall support switching models mid-session while preserving session continuity through context carryover.

**Traces:** [INTENT-G3], [INTENT-G4]

### REQ-210 — Context Usage Visibility by Model

When more than one model is used in a session, Weave shall show per-model usage visibility.

**Traces:** [INTENT-G3], [INTENT-P6]

---

## Handoff Foundations [REQ-AI-HANDOFF]

### REQ-211 — Change Order Schema

Weave shall define a structured Change Order artifact for passing bounded work to another model.

**Traces:** [INTENT-G6], [INTENT-G7]

### REQ-212 — Change Report Schema

Weave shall define a structured Change Report artifact for summarizing model output.

**Traces:** [INTENT-G6], [INTENT-P6]

### REQ-213 — Handoff Bundle Schema

Weave shall define a Handoff Bundle artifact containing summary, file scope, and next-step instructions.

**Traces:** [INTENT-G6], [INTENT-G4]

---

*These requirements establish the AI integration foundation for Phase 1 while keeping full orchestration features deferred.*