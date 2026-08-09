# Active Sprint

Status: **NO ACTIVE IMPLEMENTATION SPRINT**  
Updated: 2026-08-08

Most recently completed sprint: **P7 — Blog Editorial System and AI-Assisted Publishing**

Historical sprint note:

`docs/sprint_notes/SPRINT_P7_BLOG_EDITORIAL_SYSTEM_AND_AI_ASSISTED_PUBLISHING_2026-08-08.md`

Current production authority:

```text
production branch: main
current production merge: 40d171466381516c6dd57da3ff5964ad0f2300a0
current release: Git to Know You #9 — OpenTelemetry
automatic Pages deployment run: 31286854414
result: SUCCESS
```

Historical release anchors:

```text
P7 source merge: 5af373ab34a2ea1fd4692dc271fc1063b99f11f8
release-policy merge: 88d4a34d63234416f73ba4771cc9839359d5196a
first automatic Pages deployment run: 31280952066
Kubernetes merge: 3986eab790441506eb8e34d31a7d51bbab4bcea3
Kubernetes deployment run: 31284483589
```

Current release model:

```text
bounded branch
-> PR
-> required CI / browser / accessibility evidence
-> owner approval when required
-> merge to main = human production authorization
-> push to main automatically builds and deploys GitHub Pages
-> post-deploy verification
-> living-state closeout
```

`workflow_dispatch` remains available only as an operational fallback; it is no longer the normal release step.

## Next-work posture

Do not manufacture a sprint merely because the repository is active. Open a bounded sprint only when there is a concrete multi-file outcome, publication batch, redesign, migration, or other material change.

Git to Know You #9 — OpenTelemetry is published and deployed. Directional backlog now begins with:

- Git to Know You #10 — Argo CD / GitOps;
- homepage hero typography review at MacBook-class viewports;
- possible future Cloud Foundations and AI/engineering-workflow writing series;
- periodic portfolio/content maintenance as evidence warrants.

## Owner/local smoke posture

Owner smoke-test command blocks must begin with `cd`, synchronize the candidate with fetch/switch/`git pull --ff-only`, protect tracked local edits, and reuse the established shared Playwright environment documented in the GPT guardrails/editorial workflow.

Date-only editorial metadata must render consistently across machine timezones; do not change source publication dates to compensate for local rendering behavior.

For product/tool article thumbnails, prefer authoritative SVG artwork and the contained logo-card treatment. If only raster artwork is available, use a 16:9 source at 1600×900 or larger with generous whitespace around the logo.

## Public-repository rule

This repository remains a public professional artifact. Tracked documentation, branches, PRs, logs, artifacts, screenshots, and metadata must stay safe for unrestricted public reading/copying and must not become private project memory.
