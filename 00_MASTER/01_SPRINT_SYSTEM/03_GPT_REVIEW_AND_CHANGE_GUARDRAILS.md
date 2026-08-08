# GPT Review and Change Guardrails

Status: active support document  
Owner: Mike Gilmore

## GPT execution posture

GPT may read and modify tracked files in the authorized portfolio repository through connected GitHub when Mike has approved the scope.

This repository is public. GPT must treat every tracked change, branch, pull request, workflow log, artifact, issue, image, and generated output as publicly discoverable.

## Guardrails

- Never experiment on `main`.
- Read current files before replacement when editing existing paths.
- Perform a public-disclosure review before every tracked change.
- Never commit credentials, passwords, tokens, private keys, recovery codes, cookies, secrets, or security-sensitive private configuration.
- Never commit private addresses, phone numbers, financial records, health information, private job-search records, recruiter/interview correspondence, private email/calendar/contact data, or other personal material not intentionally approved for unrestricted public display.
- Never expose confidential employer, customer, partner, NDA-covered, or proprietary information.
- Sanitize screenshots, logs, exports, metadata, local paths, machine details, and workflow artifacts when they could reveal sensitive information or materially increase attack surface.
- If content is not clearly safe for public disclosure, exclude it and stop for owner review when needed.
- Preserve blog bodies, dates, tags, thumbnails, and public slugs during migration unless a content change is separately approved.
- Do not add React, a CMS, database, analytics platform, or hosting vendor without a requirement.
- Use GitHub-hosted standard runners for ordinary public-repository CI and deployment; do not expose Node3 to untrusted fork or pull-request code.
- Review the complete changed-file list before PR/merge.
- Visual quality claims require rendered evidence, not source inspection alone.
- Build success does not prove navigation, responsive behavior, accessibility, or URL continuity.
- Other repositories are read-only unless separately authorized.

## Git-history consequence

Deleting a sensitive value in a later commit does not make the earlier exposure disappear. If sensitive information is ever committed, treat it as exposed and stop to determine rotation, revocation, and/or history-remediation requirements.

## Production merge

Production migration requires explicit Mike approval after public-disclosure, build, URL, content, visual, and deployment gates are satisfied.