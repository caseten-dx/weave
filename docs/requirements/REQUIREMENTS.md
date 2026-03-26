# Weave Requirements — Index and Traceability

**Version:** 1.3  
**Date:** 2026-03-18  
**Last Updated:** 2026-03-26

---

## Summary [REQ-SUMMARY]

This document is the entry point to the Weave requirements corpus. Requirements are decomposed by domain so implementation sessions can load only the relevant slice. Each requirement is assigned a stable ID and traces to strategic goals and constraints defined in `INTENT.md`.

This index also records the current Phase 1 priority model so requirement loading and implementation sequencing reflect the actual near-term objective: replace the builder’s manual hosted-chat workflow with a supervised repo-native CLI workflow that improves project pace and reduces model-access cost at the same time.

---

## Requirement Domains [REQ-DOMAINS]

- `REQ-SESSION.md` — session lifecycle, startup, checkpointing, close
- `REQ-STATE.md` — project state files, parsing, persistence, file safety
- `REQ-AI.md` — provider access, context assembly, model switching, handoffs
- `REQ-COST.md` — token accounting, estimation, and spend visibility
- `REQ-GIT.md` — repository awareness, git commands, direct execution
- `REQ-GUIDANCE.md` — transparency, conflict surfacing, acceptance criteria support
- `REQ-AUTONOMY.md` — progressive autonomy and checkpoint governance
- `REQ-NONFUNCTIONAL.md` — performance, security, resilience, portability

---

## Traceability Rule [REQ-TRACE]

Every requirement must trace to at least one strategic goal or hard constraint in `INTENT.md`. Requirements that cannot be traced should not enter implementation.

Traceability should remain visible enough that planning sessions can explain not only why a requirement exists, but also why it is currently prioritized or deferred.

---

## Phase 1 Scope Marker [REQ-PHASE1]

Phase 1 includes requirements necessary for a supervised CLI workflow with:

- direct provider API access through BYOK credentials
- repo-native state loading
- cost visibility
- safe file operations
- git integration
- TODO-first session close

Phase 1 does not treat all included capabilities as equally prioritized. Inclusion in scope does not mean equal sequencing priority.

---

## Primary Workflow Replacement Target [REQ-WORKFLOW-TARGET]

Phase 1 requirements should be prioritized according to their contribution to replacing the builder’s current manual workflow:

1. copying repository content into a hosted chat interface
2. selecting a model in that interface
3. receiving changes or artifacts in chat
4. copying those artifacts back into the local repository
5. manually applying changes and handling git steps

The target workflow is:

1. open a target repository in Weave
2. read project files directly from the repository
3. select and use models through direct provider APIs
4. work through the Weave CLI
5. generate and safely apply reviewed file changes to the repository
6. assist with git commit and push operations

Requirements that most directly enable this end-to-end workflow should be prioritized first.

---

## Phase 1 Cost Priority Distinction [REQ-COST-PRIORITY]

Phase 1 distinguishes between two types of cost optimization:

1. **Direct API cost control** — immediate priority. Moving from hosted chat usage to direct provider API access can reduce model-access cost while also reducing workflow friction.
2. **Routing-based cost optimization** — later priority. More sophisticated automatic or semi-automatic model selection based on cost, capability, and context constraints should not delay delivery of the baseline supervised CLI workflow.

This distinction should be preserved when sequencing requirements across AI, cost, and workflow domains.

---

## Phase 1 Priority Model [REQ-PHASE1-PRIORITY]

The current implementation priority for Phase 1 is:

### Tier 1 — Immediate workflow replacement
Load and implement first when possible:
- direct provider access through BYOK APIs
- first provider adapter and normalized response handling
- direct API cost visibility
- project open and recognized-file loading
- safe file reads
- baseline CLI interaction paths

### Tier 2 — Safe repo-native operation
Load and implement next:
- safe file writes
- conflict detection
- explicit target-repository handling
- git integration
- supervised close workflow

### Tier 3 — Workflow hardening and continuity
Load and implement after the baseline CLI is already useful:
- checkpoint persistence
- resume/discard flows
- TODO/HANDOFF close hardening
- richer context budgeting and startup summary behavior

### Tier 4 — Optimization after baseline usefulness
Load and implement later in Phase 1:
- manual model switching
- expanded interactive command surface
- routing-oriented optimization beyond builder-directed model choice

### Priority rule
If multiple requirement slices compete for implementation attention, prefer the slice that most directly:
1. replaces the manual hosted-chat workflow with the direct-API repo-native loop
2. enables safe supervised operation on a target repository
3. reduces repetitive human startup, file, and git work
4. improves continuity and hardening
5. improves cost and speed further through routing sophistication

---

## Repository Target Rule [REQ-TARGET-ROOT]

Requirements for file access, project state loading, write safety, and git operations must be framed against an explicit target repository root.

In the near term, Weave will be used on the Weave repository itself to accelerate its own development. That self-hosting mode is intentional, but requirements must not assume Weave-only repository structure in ways that prevent later use on external repositories.

---

## Requirement Loading Guidance [REQ-LOADING]

When choosing which requirement documents to load for a session:

- load only the domains needed for the current implementation slice
- prefer the highest-priority slice that most directly advances the end-to-end workflow replacement target
- avoid loading lower-priority routing or autonomy requirements before the baseline CLI workflow exists
- if a requirement is in Phase 1 scope but lower priority, mark it as deferred rather than treating it as unresolved

---

*Use this index to determine which requirement document to load for a specific implementation task and to keep implementation sequencing aligned with current Phase 1 priorities.*