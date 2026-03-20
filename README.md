# Weave

Weave is a TypeScript monorepo for orchestrating AI-driven software development through structured specifications, scoped context, progressive autonomy, and cost-aware multi-model routing.

The human builder focuses on product intent, architecture, requirements, behavior specifications, and acceptance criteria. Weave manages context assembly, session state, delivery formatting, model routing, handoff packaging, file operations, and git workflows so that AI agents can execute bounded work reliably.

Weave is not an IDE and not an AI model. It is an orchestration layer between the builder, the project repository, and multiple AI providers.

## Core Thesis

Software development bottlenecks are primarily failures of intent transfer, not typing speed. Weave exists to preserve intent in durable project files, assemble the right context for the right task, and coordinate model work so that AI agents can produce reliable forward progress with increasing autonomy over time.

## Status

Pre-implementation. Repository bootstrap and foundational documentation.

## Initial Goals

- Automate AI session startup through repo-native context loading
- Automate session close through file updates and git operations
- Support direct BYOK provider access
- Enable cost-aware model routing
- Preserve project truth in human-readable markdown files
- Evolve from manual orchestration toward trusted autonomy

## Monorepo Packages

- `packages/shared` — shared types, utilities, constants
- `packages/core` — orchestration logic
- `packages/providers` — provider adapters
- `packages/cli` — first interface

## Documents

- `VISION.md` — what Weave is and why it exists
- `INTENT.md` — goals, constraints, success criteria
- `PRINCIPLES.md` — non-negotiable governing principles
- `docs/ARCHITECTURE.md` — system architecture
- `docs/DESIGN-CONTEXT.md` — synthesized architectural state
- `TODO.md` — active work backlog
- `DECISIONS.md` — active decision log
- `SESSIONLOG.md` — recent session history
- `HANDOFF.md` — next-session continuation brief
- `SYSTEM_PROMPT.md` — AI session governance
- `CORE_CONTEXT.md` — compact project orientation

## Development Philosophy

Weave is built using the same methodology it is meant to enable: specification-first, architecture-led, checkpointed, and progressively autonomous.

## License

TBD