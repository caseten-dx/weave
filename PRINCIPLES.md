# Project Weave — Foundational Principles

**Document Version:** 1.0  
**Date:** 2026-03-18  
**Author:** Michael S. Gilmore + AI Co-Architect  
**Upstream Documents:** [VISION.md](./VISION.md), [INTENT.md](./INTENT.md)

---

## Summary [PRINCIPLES-SUMMARY]

These principles are load-bearing. They govern how Weave is designed, built, and operated. Violating them weakens the system’s core value proposition.

---

## 1. Intent Transfer Is the Bottleneck [PRINCIPLE-1]

Software development fails more often from degraded intent transfer than from insufficient implementation speed. Weave exists to preserve intent across documents, sessions, models, and delivery stages.

## 2. Truth Lives in Files [PRINCIPLE-2]

No model conversation is authoritative. The repository is authoritative. Project state must be recoverable from files, not from model memory.

## 3. Architecture Is a Deliverable [PRINCIPLE-3]

Architecture, requirements, behavioral specifications, and decisions are not preparatory overhead. They are core work products.

## 4. Trust Is Earned [PRINCIPLE-4]

Autonomy must be granted incrementally based on demonstrated reliability. Reliability is measured through checkpoints, review outcomes, and useful forward progress.

## 5. Context Must Be Scoped [PRINCIPLE-5]

No task should require loading the entire project by default. If work cannot be scoped, the architecture is insufficiently decomposed.

## 6. The Human Remains the Authority [PRINCIPLE-6]

Weave amplifies the builder. It does not replace responsibility for intent or quality judgment.

## 7. Decisions Must Be Traceable [PRINCIPLE-7]

Important decisions require rationale, alternatives, and durable record so future sessions and models can understand why the system is the way it is.

## 8. Autonomy Is a Spectrum [PRINCIPLE-8]

The workflow must support manual supervision, guided coordination, and increasing automation without forcing a single interaction style.

## 9. Token Budgets Are Structural [PRINCIPLE-9]

Document size and context usage are architecture concerns, not cleanup concerns. Bloated context degrades every downstream interaction.

## 10. Tasks Must Be Bounded and Verifiable [PRINCIPLE-10]

Every work unit must have explicit acceptance criteria and a bounded scope small enough to review with confidence.

## 11. Nothing Advances Without a Gate [PRINCIPLE-11]

Work must pass a checkpoint before advancing to the next stage. Review, file existence, budget compliance, and acceptance coverage are all gate conditions.

## 12. Capability Tiers Matter [PRINCIPLE-12]

Expensive models should handle hard reasoning. Cheaper models should handle routine work. Routing discipline is essential for sustainable cost.

## 13. Handoffs Must Be First-Class Artifacts [PRINCIPLE-13]

When work moves between models, the transfer must be structured. Informal “continue from here” is not a reliable protocol.

## 14. Delivery Must Be Directly Usable [PRINCIPLE-14]

Outputs to the builder must be ready to apply with minimal interpretation. Weave should reduce translation work, not create more of it.

## 15. Reliability Beats Magic [PRINCIPLE-15]

A transparent, constrained, checkpointed workflow is more valuable than impressive but unpredictable autonomy.

---

*If a future feature conflicts with these principles, the feature should be revised before implementation proceeds.*