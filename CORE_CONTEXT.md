**Version:** 1.2  
**Date:** 2026-03-18  
**Last Updated:** 2026-03-26

---

## Summary [CORE-SUMMARY]

Weave is a local, repo-native orchestration system for AI-driven software development. The builder focuses on intent, architecture, specifications, and evaluation; AI agents execute bounded delivery work. In the near term, Weave is being matured as a supervised CLI and should replace the builder’s current manual hosted-chat workflow by connecting target-repository files, direct provider API access, reviewed file application, and git operations into one repo-native loop. This file is the compact orientation brief loaded at the start of most sessions.

---

## What Is Weave? [CORE-IDENTITY]

Weave coordinates AI models, project documents, file operations, and git workflows so software can be built through structured specifications rather than ad hoc prompting.

Weave is not an IDE and not a model vendor. It is an orchestration layer that helps the builder move from intent to reviewed repository changes with less manual context assembly, less copy/paste workflow drag, lower model-access overhead, and better continuity across sessions and models.

---

## Core Concepts [CORE-CONCEPTS]

**Builder:** human authority on product intent, architecture, and quality.  
**Session:** bounded AI collaboration period with startup and close rituals.  
**Project State Files:** markdown files in a target repository representing durable project knowledge.  
**Scoped Context:** only the context needed for the current task or session.  
**Handoff Bundle:** structured package for transferring work between models or sessions.  
**Delivery Artifact:** builder-facing file or git output ready to review or apply.  
**Progressive Autonomy:** gradual increase in automation based on evidence rather than assumption.  
**Target Repository:** the repository Weave is currently operating on, which may be the Weave repo itself or a separate repo selected by the builder.

---

## Operating Priorities [CORE-PRIORITIES]

Phase 1 priorities are intentionally ordered and not equally weighted.

### Immediate priorities
1. replace the manual repo ↔ hosted-chat ↔ repo workflow with a supervised CLI workflow
2. enable direct provider API access through BYOK credentials so model work can move off hosted chat interfaces and onto lower-friction, lower-cost direct access
3. reduce startup friction through project loading and scoped context assembly
4. enable safe supervised file writing and git-assisted repository workflows
5. make Weave usable on the Weave repository itself as soon as that can be done safely

### Later Phase 1 priorities
6. strengthen resumability, close workflow quality, and continuity
7. support manual model switching within active sessions
8. improve cost and speed further through routing and optimization only after the baseline CLI workflow is already materially replacing the manual hosted-chat loop

### Priority rule
Prioritize changes that replace the manual hosted-chat development loop with a repo-native CLI workflow using direct provider APIs. Prefer improvements that reduce builder time and model cost together. Direct API access is an immediate requirement; more sophisticated routing-based optimization is later.

---

## Product Boundary [CORE-BOUNDARY]

Weave is being developed in its own repository, but it is not an internal-only tool.

In the short term, Weave should accelerate development on the Weave repository itself because that is the fastest path to reducing builder workflow drag and validating the architecture under real use. However, the core system must continue to treat an explicit target repository root as the operating boundary so Weave remains usable on external repositories without architectural rework.

Self-hosting is a near-term operating mode, not a narrowing of the product.

---

## Stack [CORE-STACK]

TypeScript monorepo. Deno runtime. Deno workspace. Packages: `shared`, `core`, `providers`, `cli`. Direct provider APIs through BYOK. Local git integration. Markdown project state. CLI-first interface now, with a future GUI layered on the same core.

---

## Package Roles [CORE-PACKAGES]

**`packages/shared`**  
Shared types, result helpers, constants, and cross-package contracts.

**`packages/core`**  
Orchestration logic and infrastructure interfaces.

**`packages/providers`**  
Provider-specific adapters and normalized provider communication.

**`packages/cli`**  
Command parsing, terminal display, and interactive flow control.

Dependency direction is strictly downward:

`shared` ← `core` ← `providers` ← `cli`

No package should violate this dependency flow.

---

## File Registry [CORE-REGISTRY]

Recognized Phase 1 project state files currently include:

- `VISION.md`
- `INTENT.md`
- `PRINCIPLES.md`
- `TODO.md`
- `DECISIONS.md`
- `SESSIONLOG.md`
- `HANDOFF.md`
- `SYSTEM_PROMPT.md`
- `CORE_CONTEXT.md`
- `ROADMAP.md`
- `docs/ARCHITECTURE.md`
- `docs/DESIGN-CONTEXT.md`
- `docs/requirements/`

Exact required-versus-optional handling is governed by `TODO.md` and architecture decisions for the current implementation slice.

---

## Core Workflow Model [CORE-WORKFLOW]

A normal supervised Weave session follows this shape:

1. open a target repository
2. discover and load recognized project state
3. assemble scoped context for the current task
4. interact with a selected provider/model through direct API access
5. track usage and cost
6. prepare reviewed file and git outputs
7. apply approved repository changes safely
8. close the session by updating durable project state

The goal is not to eliminate builder supervision. The goal is to replace the current manual copy/paste workflow with a faster, cheaper, more reviewable repo-native loop.

---

## Current Status [CORE-STATUS]

Project bootstrap is complete enough to support bounded implementation work. Phase 1 implementation slicing is active in `TODO.md`.

The current short-term priority is to reach a usable CLI path for the minimum useful loop:
- direct BYOK provider access
- target-repo-aware file reading
- project loading and scoped context assembly
- interactive CLI model usage
- safe supervised file writing
- basic git-assisted workflow support

Once that supervised baseline is usable, Weave should begin accelerating development on its own repository while preserving the same explicit target-root architecture required for external repositories.

---

## Session Guidance [CORE-SESSION-GUIDANCE]

At the start of most sessions:

1. review `TODO.md` for current focus and slice priority
2. review `docs/ARCHITECTURE.md` for boundary and subsystem intent
3. work from repository state rather than relying on chat memory
4. capture implementation-relevant clarifications back into repository documents
5. prefer bounded progress on the highest-priority workflow bottleneck in the end-to-end manual-workflow replacement loop

When there is a tradeoff between polish and builder workflow acceleration, prefer the path that safely reduces workflow drag unless it weakens architectural boundaries, write safety, or reviewability.

---

## Success Condition for Near-Term Use [CORE-NEAR-TERM-SUCCESS]

Weave reaches its next meaningful milestone when the builder can use it on the Weave repository itself to perform the normal model-assisted development loop without copying files into and out of a hosted chat interface.

That minimum milestone requires:
- direct BYOK provider access
- a usable CLI interaction path
- target-repo-aware file reading
- safe supervised file writing
- reviewed repo changes ready to apply
- basic git-assisted workflow support

This milestone should improve builder speed and lower model-access cost relative to the current manual Poe-style workflow. More sophisticated routing-based optimization comes after this baseline loop is working.

---

*End of CORE_CONTEXT.md*