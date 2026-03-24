# Project Weave — Drift Guard

**Document Version:** 1.0  
**Date:** 2026-03-18  
**Author:** Michael S. Gilmore + AI Co-Architect

---

## Summary [DRIFT-SUMMARY]

This document exists to detect and prevent strategic drift in Weave. The greatest risk to the project is not lack of effort but optimization toward a weaker, easier-to-build version of the system. Drift Guard lists the most likely failure modes, the questions that detect them, and the correction rule when drift indicators appear.

---

## Purpose [DRIFT-PURPOSE]

Weave is vulnerable to becoming:

- a generic AI chat tool
- a prompt-and-file wrapper
- a code generator with governance language
- a documentation-heavy process that never improves real workflow
- an autonomy theater project without reliability evidence

This document is the early warning system against those outcomes.

---

## Primary Drift Risks [DRIFT-RISKS]

### DR-001 — Chat Wrapper Drift

Weave begins to function mainly as a nicer prompt interface rather than as a repo-native workflow system.

**Warning signs:**
- most value comes from prompt formatting
- artifact updates are weak or inconsistent
- repo continuity is still manual and fragile

### DR-002 — Codegen Drift

Implementation generation advances faster than requirements, BDD, test, and review artifacts.

**Warning signs:**
- code tasks are easy to pull
- BDD or acceptance artifacts remain vague
- test generation is weak or delayed

### DR-003 — Shell Polish Drift

Interface and UX polish become a priority before core orchestration value is proven.

**Warning signs:**
- time spent on shell concerns exceeds time spent on state, session, and routing concerns
- the core workflow is still weak but presentation gets richer

### DR-004 — Hidden-State Drift

Important project memory migrates into chats, tool metadata, or `.weave/` instead of repo files.

**Warning signs:**
- sessions are hard to resume from repo artifacts alone
- “you had to be there” knowledge accumulates

### DR-005 — Autonomy Hype Drift

The project starts planning for high autonomy faster than it proves supervised reliability.

**Warning signs:**
- automation language outruns checkpoint design
- autonomy is discussed without metrics
- approval boundaries get blurred

### DR-006 — Architecture Vanity Drift

The project becomes overly satisfied with architecture documents while live workflow remains clumsy.

**Warning signs:**
- subsystem design grows
- real builder workflow does not get easier
- dogfooding reveals friction that docs have not solved

### DR-007 — Artifact Bloat Drift

More and more files are created without clear use in actual sessions.

**Warning signs:**
- many artifacts are not loaded or updated
- state is duplicated across files
- maintaining docs consumes more effort than the workflow saves

### DR-008 — Routing Theater Drift

Model routing exists conceptually but has little operational impact on cost, quality, or continuity.

**Warning signs:**
- routing is manual forever without learning value
- no actual cost-based or capability-based decisions are being improved

---

## Drift Detection Questions [DRIFT-QUESTIONS]

Review these at milestones or every 3–5 substantive sessions.

1. Did this iteration reduce real builder friction?
2. Can the next session resume from repo artifacts alone?
3. Did this iteration strengthen requirements, BDD, or acceptance clarity?
4. Did this iteration improve traceability between intent and outputs?
5. Did this iteration improve routing, context management, or cost visibility in practice?
6. Did this iteration preserve supervised usability?
7. Did this iteration add complexity faster than value?
8. Are more artifacts being used, or just created?
9. Did any important information remain only in chat?
10. Are we automating a real pain point, or just something easy to build?

---

## Drift Response Rule [DRIFT-RESPONSE]

If two or more drift risks are triggered in a milestone review:

1. stop feature expansion temporarily
2. run a correction session
3. identify which founding intent clause is being weakened
4. adjust roadmap, docs, or implementation priorities accordingly
5. record the correction in DECISIONS.md or SESSIONLOG.md

Do not ignore drift signals in the name of momentum.

---

## Anti-Drift Heuristics [DRIFT-HEURISTICS]

Prefer changes that:

- reduce startup or close friction
- strengthen repo-native continuity
- make BDD and acceptance criteria more operational
- improve trust and verification
- reduce cost or context waste
- support the builder’s abstraction shift upward

Be suspicious of changes that:

- are visually impressive but workflow-light
- create many new abstractions with little dogfooding value
- weaken traceability
- increase reliance on hidden state
- promise autonomy before evidence

---

## Practical Rule [DRIFT-PRACTICAL]

Every major proposed change should answer:

- What founding intent does this preserve?
- What friction does this remove?
- What drift risk does this reduce?
- What new drift risk might it create?

If it cannot answer these clearly, it is likely not the right priority.

---

*Use this document as a recurring review instrument. Drift is easier to prevent than to reverse.*