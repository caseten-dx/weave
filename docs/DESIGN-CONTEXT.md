# Project Weave — Design Context

**Document Version:** 1.0  
**Date:** 2026-03-18

---

## Summary [DESIGN-SUMMARY]

This document is the synthesized architectural state brief for Weave. It exists so architecture and specification sessions can load a single high-value summary of project identity, core commitments, phase structure, safety invariants, and technical constraints without needing to reread the entire document corpus.

---

## Project Identity [DESIGN-IDENTITY]

Weave is a local, shell-agnostic orchestration system for AI-driven software development. It is repo-native, specification-first, and designed to preserve builder intent across sessions, models, and delivery stages.

## Builder Relationship [DESIGN-BUILDER]

The builder is initially the orchestrator. Autonomy is earned, not assumed. Weave assists first, coordinates second, automates third.

## Architecture [DESIGN-ARCH]

Three layers: Interface, Orchestration, Infrastructure. Seven core subsystems: Context Engine, Session Manager, Model Router, Model Handoff Protocol, Delivery Formatter, File Manager, Git Integration.

## Workflow Thesis [DESIGN-WORKFLOW]

The system optimizes for:
- context loading at session start
- reliable handoffs
- cheap capable routing
- bounded work units
- direct-apply delivery artifacts
- explicit close rituals
- file-based truth

## Phase Structure [DESIGN-PHASES]

Phase 1 establishes direct API access, session automation, file safety, cost visibility, and CLI workflow.  
Phase 2 adds operational multi-model handoffs, rule-based coordination, and checkpoint automation.  
Phase 3 adds higher-autonomy orchestration and parallel agent workflows.

## Safety Invariants [DESIGN-SAFETY]

- project files remain authoritative
- writes are atomic
- changes are conflict-checked
- close stages are resumable
- no secrets in repo files
- no silent promotion of unverified work

## Technical Constraints [DESIGN-TECH]

TypeScript monorepo, Node.js runtime, pnpm workspace, BYOK provider model, local git integration, markdown project state, shell-agnostic core.

---

*This is a state-synthesis brief, not the authoritative full architecture. See docs/ARCHITECTURE.md for detailed subsystem design.*