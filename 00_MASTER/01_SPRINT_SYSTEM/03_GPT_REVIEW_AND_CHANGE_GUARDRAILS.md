# GPT Review and Change Guardrails

Status: active support document  
Owner: Mike Gilmore

## GPT execution posture

GPT may read and modify tracked files in the authorized portfolio repository through connected GitHub when Mike has approved the scope.

This repository is public. GPT must treat every tracked change, branch, pull request, workflow log, artifact, issue, image, generated output, sprint note, doctrine file, and decision record as publicly discoverable and copyable.

The repository is also a professional artifact. Architecture, SDLC discipline, sprint execution, CI/CD, testing, accessibility, release control, and responsible AI-assisted delivery may intentionally remain visible when they are safe and useful evidence.

## Guardrails

- Never experiment on `main`.
- Read current files before replacement when editing existing paths.
- Perform both a public-disclosure review and a professional-read review before every tracked change.
- Ask: would Mike be comfortable with a recruiter, hiring manager, security engineer, stranger, or future fork owner reading or copying this exact content?
- Never commit credentials, passwords, tokens, private keys, recovery codes, cookies, secrets, or security-sensitive private configuration.
- Never commit private addresses, phone numbers, financial records, health information, private job-search records, recruiter/interview correspondence, private email/calendar/contact data, or other personal material not intentionally approved for unrestricted public display.
- Never expose confidential employer, customer, partner, NDA-covered, or proprietary information.
- Never use tracked docs as a substitute for private chat memory; record only the sanitized project truth needed to reproduce decisions and continue work.
- Sanitize screenshots, logs, exports, metadata, local paths, machine details, and workflow artifacts when they could reveal sensitive information or materially increase attack surface.
- If content is not clearly safe and professionally appropriate for public disclosure, exclude it and stop for owner review when needed.
- Preserve historical blog bodies, dates, tags, thumbnails, and public slugs unless a content change is separately approved.
- Do not add React, a CMS, database, analytics platform, or hosting vendor without a requirement and owner-approved architecture decision.
- Use GitHub-hosted standard runners for ordinary public-repository CI and deployment; do not expose private self-hosted infrastructure to untrusted fork or pull-request code.
- Review the complete changed-file list before PR/merge.
- Visual quality claims require rendered evidence, not source inspection alone.
- Build success does not prove navigation, responsive behavior, accessibility, URL continuity, or visual quality.
- When Mike needs to perform a local smoke test, GPT must provide the exact copy-paste shell command block needed to run it. The block must begin by changing into the local repository root with `cd`, then synchronize the intended candidate with GitHub by fetching, switching to the correct candidate branch when needed, and running `git pull --ff-only` before the smoke-test/build commands. Never assume the shell is already in the repository or that the local checkout is current. Before switching or pulling, protect tracked local edits; generated/untracked build artifacts alone should not be treated as source edits unless they would conflict with the candidate. Use the exact local checkout path when it is available from current private context. If the current path is unknown, obtain it before issuing the smoke-test command rather than inventing or reusing a stale path. Do not commit Mike's expanded personal home path into this public repository when a home-relative path is sufficient.
- For local browser smoke tests, first reuse the established shared Playwright environment. Its home-relative root is `~/Dev/dependencies/playwright`, its shared Node module path is `~/Dev/dependencies/playwright/node_modules`, and its shared browser cache is `~/Dev/dependencies/playwright/ms-playwright`. Prefer setting `NODE_PATH="$HOME/Dev/dependencies/playwright/node_modules"` and `PLAYWRIGHT_BROWSERS_PATH="$HOME/Dev/dependencies/playwright/ms-playwright"` before browser smoke commands. Do not assume Playwright or Chromium needs to be installed again merely because a project-local lookup cannot find the expected executable. If the shared environment cannot satisfy the current project version, explain the mismatch and use the least-destructive corrective step, preferably adding only the required browser revision to the shared browser cache.
- Other repositories are read-only unless separately authorized.

## GitHub-first continuity

Connected GitHub is the default recovery and execution surface. Do not ask Mike to generate ZIP handoff packages, run local apply scripts, or upload repository snapshots when current repository state can be read directly.

The master doctrine is the single startup entry point. It tells a fresh session which additional files and repository state to inspect.

## Git-history consequence

Deleting a sensitive value in a later commit does not make the earlier exposure disappear. If sensitive information is ever committed, treat it as exposed and stop to determine rotation, revocation, notification, and/or history-remediation requirements.

## Production merge

Production changes require the owner gate defined by current sprint/living state after public-disclosure, build, URL, content, visual, and deployment gates are satisfied.
