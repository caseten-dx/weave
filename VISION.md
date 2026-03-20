# Project Weave — Vision

**Document Version:** 1.0  
**Date:** 2026-03-18  
**Author:** Michael S. Gilmore + AI Co-Architect

---

## Summary [VISION-SUMMARY]

This document defines the long-term vision for Weave. Weave is a repo-native orchestration system for AI-driven software development in which the human builder focuses on product intent, architecture, behavioral specifications, and quality judgment while AI agents execute bounded software delivery work across the SDLC. Weave manages context, handoffs, routing, state preservation, and workflow guardrails so that AI collaboration can evolve from manual supervision to progressively trusted autonomy. The end-state is not fully unsupervised software generation by default, but a near-dark-factory development workflow in which autonomy is earned through reliable forward progress, verifiable outputs, and file-based truth.

---

## What Weave Is [VISION-WHAT]

Weave is an orchestration layer for software development with AI agents.

It exists to help a builder translate intent into a working system with minimal loss across handoffs between humans, models, documents, and sessions. The builder does not spend their time manually reconstructing context, copying outputs into files, or managing git mechanics. Instead, they spend their time defining what the system should do, how it should behave, what quality looks like, and what constraints matter.

AI agents, routed through Weave, produce implementation artifacts, tests, document updates, and change packages under explicit constraints and checkpoint gates.

Weave is not an IDE. It is not a model host. It is not a SaaS proxy for model traffic. It is a local orchestration tool that sits between the builder, the repository, and one or more model providers.

---

## Why Weave Exists [VISION-WHY]

AI can produce code quickly, but speed of output is not the real bottleneck in software development. The real bottleneck is preserving intent: ensuring that what gets built matches what the builder actually meant.

Intent degrades when:
- context is loaded inconsistently
- decisions are not recorded
- tasks are too broad
- models lose state
- outputs are accepted without verification
- work is routed to the wrong capability tier
- builders spend their energy on mechanical process instead of architectural clarity

Weave exists to solve those failures structurally.

It treats files in the repository as the durable source of truth. It scopes context to the task. It packages work into bounded units. It routes work to the cheapest capable model. It preserves decisions and task state in markdown. It closes sessions with explicit state capture. It enables handoffs between models without requiring every model to reread the entire project.

---

## The Future Weave Enables [VISION-FUTURE]

The long-term aim of Weave is to enable a solo builder to operate with the effective delivery capacity of a coordinated engineering organization.

In the beginning, the builder manually orchestrates everything:
- choosing models
- confirming context
- approving file changes
- recording decisions
- running checkpoint reviews

As Weave proves itself, more of that orchestration becomes automated:
- routing becomes rule-based
- handoffs become structured and generated
- review becomes multi-model
- checkpoint validation becomes automatic
- retries become managed
- session continuation becomes seamless
- parallel work streams become practical

Eventually, a builder can specify a feature or system slice in behavior-first and architectural terms, and Weave can coordinate decomposition, implementation, testing, review, state updates, and commits with minimal intervention.

The end-state is a trusted, highly autonomous build workflow where the human remains the authority on intent and quality, but no longer performs the mechanical labor of software delivery.

---

## Human Role in the Weave Model [VISION-HUMAN]

The builder remains the source of intent.

Their role evolves upward:
- from prompt writer
- to context engineer
- to intent engineer
- to specification engineer
- to portfolio-level architect and evaluator

Weave does not aim to eliminate the human from software development. It aims to remove the human from low-leverage mechanical orchestration so their time can be spent on vision, product judgment, architecture, behavioral definition, and quality review.

---

## The Core Shift [VISION-SHIFT]

Traditional AI-assisted development is usually:
human writes code with model assistance.

Weave aims for:
human defines intent and acceptance boundaries; AI executes bounded delivery work under orchestration.

This is not “AI autocomplete for developers.”  
It is a new workflow for repo-native, specification-first software production.

---

## Success Picture [VISION-SUCCESS]

Weave succeeds when:

- a returning builder can start productive work in minutes
- project truth survives every crash, session break, or model switch
- feature work becomes cheaper over time through model routing and better specification quality
- AI-generated changes become easier to trust because they are bounded, reviewed, and traceable
- the builder spends the majority of their energy on intent, not mechanics
- autonomy is enabled gradually through evidence rather than hype
- a real non-trivial software product is shipped using Weave as the primary development workflow

---

*This document describes the long-term direction of Weave. Strategic goals, constraints, and measurable success criteria are defined in INTENT.md. Architectural realization is defined in docs/ARCHITECTURE.md.*