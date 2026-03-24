# Project Weave — Session Protocol

**Document Version:** 1.0  
**Date:** 2026-03-18  
**Author:** Michael S. Gilmore + AI Co-Architect

---

## Summary [SESSION-PROTOCOL-SUMMARY]

This document defines the standard protocol for running a Weave work session. Its purpose is to ensure that sessions are bounded, reproducible, traceable, and easy to resume later without hidden chat memory. Every productive session should load state deliberately, define one primary objective, reconcile all impacted artifacts, and end with preserved continuity.

---

## Session Purpose [SESSION-PURPOSE]

A session is a bounded unit of project work conducted with one or more AI models against the current repo state.

A session is successful when:

- the objective was clear
- scope remained bounded
- outputs were reconciled into durable artifacts
- continuity for the next session was preserved
- no critical state remained only in chat

---

## Session Lifecycle [SESSION-LIFECYCLE]

Every session follows seven steps:

1. **Load state**
2. **Define objective**
3. **Confirm scope**
4. **Execute work**
5. **Reconcile artifacts**
6. **Produce check-in instructions**
7. **Close and commit**

---

## Step 1 — Load State [SESSION-LOAD]

Before substantive work begins, load the minimum set of repo artifacts needed for the session type.

### Required Always
- SYSTEM_PROMPT.md
- CORE_CONTEXT.md
- TODO.md

### Add by Session Type

**Planning**
- ROADMAP.md
- SESSIONLOG.md
- PROJECT_STATE.md

**Specification**
- DECISIONS.md
- docs/DESIGN-CONTEXT.md
- target specification file
- BDD-related artifacts if behavior is involved

**Architecture**
- DECISIONS.md
- docs/DESIGN-CONTEXT.md
- docs/ARCHITECTURE.md
- PROJECT_STATE.md

**Implementation**
- relevant architecture slice
- relevant requirements slice
- relevant BDD scenarios
- target source files if they exist
- PROJECT_STATE.md

### Load Rule
Do not load the whole repo by default. Load only the files needed for the current bounded objective.

---

## Step 2 — Define Objective [SESSION-OBJECTIVE]

Every session must have one primary goal.

Good examples:
- refine BDD scenarios for feature X
- define architecture for session close pipeline
- implement project open flow
- create shared domain interfaces
- update TODO and handoff state after implementation slice

Bad examples:
- build the whole provider system
- clean up architecture and also code and also session tooling
- make Weave smarter

The objective should be short enough that success and failure are both obvious.

---

## Step 3 — Confirm Scope [SESSION-SCOPE]

Before execution, the AI should restate:

- what the session is trying to accomplish
- what it is not trying to accomplish
- which artifacts are likely to be updated
- any assumptions or missing information
- any likely scope expansion risk

No substantive work should begin until scope is aligned.

---

## Step 4 — Execute Work [SESSION-EXECUTE]

During execution:

- work one bounded unit at a time
- prefer concrete outputs over broad advice
- update affected artifacts consistently
- surface uncertainty rather than silently inventing facts
- stop if scope begins to expand materially

For implementation work, acceptance criteria should be explicit before proceeding.

---

## Step 5 — Reconcile Artifacts [SESSION-RECONCILE]

Before the session ends, reconcile all affected artifacts.

At minimum, ask:
- what changed?
- which files should reflect it?
- what state changed?
- what must the next session know?

Typical files affected:
- TODO.md
- PROJECT_STATE.md
- DECISIONS.md
- SESSIONLOG.md
- HANDOFF.md
- architecture or requirements files
- source files or tests

No meaningful session outcome should exist only in narrative prose if it belongs in an artifact.

---

## Step 6 — Produce Check-In Instructions [SESSION-CHECKIN]

Every productive session should end with explicit output in this shape:

### Required
- Session summary
- Files created or changed
- Exact file contents or exact targeted edit instructions
- TODO updates
- PROJECT_STATE updates
- HANDOFF updates
- Open questions
- Recommended next session
- Suggested git commit message

### Conditional
- DECISIONS updates
- SESSIONLOG entry
- CHANGELOG entry
- per-session log file content
- test or evidence summary

This is the minimum continuity protocol.

---

## Step 7 — Close and Commit [SESSION-CLOSE]

Once artifact updates are reviewed:

1. save or apply file changes
2. inspect `git status`
3. inspect `git diff`
4. confirm staged changes are aligned with session scope
5. commit with a descriptive message
6. update any final session records if needed

The session is not truly complete until project state is durable in the repository.

---

## Mandatory Session Outputs [SESSION-OUTPUTS]

Every meaningful session should preserve:

- what the objective was
- what was accomplished
- what files changed
- what remains unresolved
- what the next session should do first

If this information is missing from the repo at the end of the session, the session is incomplete.

---

## Standard Wrap-Up Questions [SESSION-WRAPUP]

Before ending a session, verify:

1. What changed in project truth?
2. What changed in operational state?
3. What must the next session load?
4. Did any decisions get made?
5. Are acceptance criteria or BDD artifacts now stale?
6. Is the next recommended step obvious?

---

## Failure Modes to Avoid [SESSION-FAILURES]

A session has failed operationally if:

- critical state remains only in chat
- scope drifted without acknowledgement
- TODO or handoff state was not updated
- files were changed without reconciling related artifacts
- the next session would need hidden context to continue safely

---

## Relationship to Automation [SESSION-AUTOMATION]

This manual session protocol is the reference workflow for future automation.

Automation is successful only if it improves this protocol without weakening:

- clarity
- traceability
- safety
- bounded scope
- builder control
- continuity across sessions

---

*This protocol is how Weave sessions should be run, whether manually today or increasingly through tooling later.*