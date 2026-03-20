# REQ-COST.md

**Version:** 1.1  
**Date:** 2026-03-18

---

## Summary [REQ-COST-SUMMARY]

This document defines requirements for token accounting, cost visibility, pre-submission estimation, and local cost history. Cost visibility is a first-class feature, not an afterthought.

---

## Cost Visibility [REQ-COST-VISIBILITY]

### REQ-300 — Per-Interaction Usage Record

Weave shall record token usage and estimated or actual cost for each provider interaction.

**Traces:** [INTENT-G3], [INTENT-P3]

### REQ-301 — Session Cost Total

Weave shall provide a running session cost total.

**Traces:** [INTENT-G3], [INTENT-P3]

### REQ-302 — Provider and Model Attribution

Each cost record shall include provider and model identifiers.

**Traces:** [INTENT-G3]

---

## Estimation [REQ-COST-ESTIMATION]

### REQ-303 — Pre-Submission Estimate

Before sending a request, Weave shall estimate request size and expected budget impact using provider counting or a calibrated estimate when possible.

**Traces:** [INTENT-P3], [INTENT-P4]

### REQ-304 — Actual Usage Preference

When provider response usage data is available, Weave shall treat provider actuals as authoritative over estimates.

**Traces:** [INTENT-P3]

### REQ-305 — Distinguish Estimated from Actual

Weave shall clearly distinguish estimated values from authoritative actuals in CLI output and stored records.

**Traces:** [INTENT-P6], [INTENT-P3]

---

## Persistence [REQ-COST-PERSIST]

### REQ-306 — Local Cost Persistence

Weave shall persist cost records locally outside the project markdown corpus.

**Traces:** [INTENT-C1], [INTENT-P5]

### REQ-307 — Per-Session Cost Query

Weave shall support retrieval of cost records by session.

**Traces:** [INTENT-G3]

---

*These requirements operationalize the principle that cost visibility is non-negotiable.*