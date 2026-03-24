# BDD_FEATURES.md

**Version:** 1.0  
**Date:** 2026-03-18

---

## Summary [BDD-SUMMARY]

This document defines the role of BDD in Weave and establishes the initial convention for expressing behavior as a first-class project artifact. In Weave, BDD is not optional ceremony. It is one of the primary contract layers between human intent and AI implementation. Features, scenarios, edge cases, and observable outcomes described here should help drive implementation, test generation, review, and builder sniff testing.

---

## Purpose of BDD in Weave [BDD-PURPOSE]

BDD in Weave exists to make software behavior explicit before implementation.

It helps the builder define:

- what the system should do
- under what conditions it should do it
- what outcomes must be observable
- what edge cases matter
- what should be rejected
- what good behavior looks like from a user perspective

This matters because Weave aims to shift the human role upward from implementation detail toward behavior definition and evaluation.

---

## BDD as Contract Layer [BDD-CONTRACT]

BDD is one of the core contract layers in Weave between:

- product intent
- requirements
- architecture
- implementation
- tests
- sniff testing
- release confidence

A feature that lacks clear behavioral definition is more likely to produce ambiguous implementation, weak tests, and fragile review.

---

## How BDD Should Be Used [BDD-USAGE]

BDD artifacts should:

- describe user-visible behavior
- be concrete and testable
- include happy path and important edge cases
- support generation of tests and review criteria
- help the builder evaluate whether AI-produced output matches intent

BDD artifacts should not:

- become vague ceremony
- duplicate architecture detail unnecessarily
- replace requirements entirely
- exist without being used by implementation and QA flows

---

## Feature Structure Convention [BDD-STRUCTURE]

Each feature should include:

1. **Feature title**
2. **Business or user context**
3. **Acceptance notes**
4. **Gherkin-style scenarios**
5. **Important edge cases**
6. **Open questions or exclusions**

Recommended structure:

### Feature
A short statement of the capability.

### Context
Why this feature exists and who it serves.

### Acceptance Notes
Important constraints, assumptions, or non-goals.

### Scenarios
Behavior written in Gherkin style where useful.

### Edge Cases
Failure modes, limits, and uncommon but important cases.

### Exclusions
What is explicitly out of scope for now.

---

## Initial Example Template [BDD-TEMPLATE]

```text
Feature: [Feature name]

Context:
[Why this feature exists and what user problem it addresses.]

Acceptance Notes:
- [Important acceptance note 1]
- [Important acceptance note 2]

Scenario: [Primary happy path]
  Given [initial state]
  And [relevant condition]
  When [action]
  Then [observable outcome]
  And [secondary observable outcome]

Scenario: [Important edge case]
  Given [initial state]
  When [action]
  Then [expected rejection, fallback, or boundary behavior]

Edge Cases:
- [Boundary case]
- [Error condition]
- [Permission or policy case]

Exclusions:
- [Out-of-scope item]