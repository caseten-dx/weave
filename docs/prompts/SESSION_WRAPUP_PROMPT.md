# Weave — Session Wrap-Up Prompt

**Version:** 1.0  
**Date:** 2026-03-18

---

## Purpose [WRAPUP-PURPOSE]

This prompt is used at the end of a session to force explicit artifact reconciliation and continuity preservation. It exists because session closure is where hidden-state loss most often occurs.

---

## Prompt Text [WRAPUP-TEXT]

Use the work completed in this session and produce a full session wrap-up for Weave.

Requirements:

1. Summarize the session outcome in 3–6 bullets.
2. List every file that should be created or updated.
3. For each affected file, provide either:
   - the exact full file content, or
   - exact targeted edit instructions with clear placement guidance.
4. Reconcile operational state explicitly:
   - TODO.md
   - PROJECT_STATE.md
   - HANDOFF.md
5. If applicable, include:
   - DECISIONS.md update
   - SESSIONLOG.md update
   - CHANGELOG.md update
   - per-session log entry
6. List unresolved questions, risks, and assumptions.
7. Recommend the next bounded session objective.
8. Provide a suggested git commit message.

Constraints:

- Do not assume the repository has already been updated.
- Do not leave important state only in prose if it belongs in a project artifact.
- Prefer exact outputs over vague suggestions.
- Keep scope aligned with what was actually accomplished.
- Distinguish between completed, proposed, and unverified work.

Expected output structure:

## Session Summary
...

## Files to Create or Update
...

## Exact File Outputs / Edit Instructions
...

## TODO.md Updates
...

## PROJECT_STATE.md Updates
...

## HANDOFF.md Updates
...

## Optional Additional Artifact Updates
...

## Open Questions / Risks / Assumptions
...

## Recommended Next Session
...

## Suggested Git Commit Message
...