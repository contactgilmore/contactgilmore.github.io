# GPT Review and Change Guardrails

Status: active support document  
Owner: Mike Gilmore

## GPT execution posture

GPT may read and modify tracked files in the authorized portfolio repository through connected GitHub when Mike has approved the scope.

## Guardrails

- Never experiment on `main`.
- Read current files before replacement when editing existing paths.
- Preserve blog bodies, dates, tags, thumbnails, and public slugs during migration unless a content change is separately approved.
- Do not add React, a CMS, database, analytics platform, or hosting vendor without a requirement.
- Do not infer the self-hosted runner labels; verify them.
- Review the complete changed-file list before PR/merge.
- Visual quality claims require rendered evidence, not source inspection alone.
- Build success does not prove navigation, responsive behavior, accessibility, or URL continuity.
- Other repositories are read-only unless separately authorized.

## Production merge

Production migration requires explicit Mike approval after build, URL, content, visual, and deployment gates are satisfied.