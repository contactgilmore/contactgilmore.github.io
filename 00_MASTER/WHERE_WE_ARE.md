# Where We Are

Status: active living state  
Updated: 2026-08-08

## Production authority

Portfolio 2.0 is live at `https://contactgilmore.github.io/` using Astro and GitHub Pages workflow publishing.

Current production truth:

```text
production branch: main
site generator: Astro
GitHub Pages build type: workflow
P7 source merge: 5af373ab34a2ea1fd4692dc271fc1063b99f11f8
release-policy merge: 88d4a34d63234416f73ba4771cc9839359d5196a
automatic deployment run: 31280952066
result: SUCCESS
production deployment policy: automatic after approved merge to main
manual workflow dispatch: fallback only
```

There is no active implementation sprint.

## Durable decisions

- Astro 7+ with TypeScript/content collections is the production static-site foundation.
- Use GitHub-hosted runners for ordinary public-repository workflows; do not expose private self-hosted infrastructure.
- Treat repository content, docs, branches, PRs, logs, artifacts, screenshots, and metadata as public disclosure surfaces.
- Public docs may demonstrate SDLC, sprint execution, CI/CD, testing, accessibility, release controls, rollback planning, and responsible AI-assisted delivery, but must never become private project memory.
- Retain only public assets with a current content, brand, or compatibility purpose.
- Avoid React/CMS/database additions unless a real requirement justifies them.
- The smoke-tested Portfolio 2.0 visual system remains brand authority.
- Merge to `main` is the human production authorization; GitHub Pages deploys automatically from pushes to `main` after the workflow's build/integrity gates pass.
- `workflow_dispatch` remains an operational fallback, not the normal release path.
- Portfolio planning uses a lightweight directional roadmap plus bounded sprints for concrete work.

## Current production structure

```text
Home / Work / Writing / About / Resume
```

Current positioning:

```text
Technical Delivery & Customer Solutions
Implementation & Technical Delivery
Integrations & Troubleshooting
Customer & Stakeholder Leadership
```

Current case studies:

```text
/work/implementation-delivery/
/work/reliability-remediation/
/work/operating-model/
```

## P6 — complete

P6 improved recruiter scanability, first-person ownership, case-study specificity, career narrative, responsive visual QA, and public-repository governance.

Historical record:

`docs/sprint_notes/SPRINT_P6_RECRUITER_PROOFREAD_AND_CASE_STUDY_POLISH_2026-08-08.md`

## P7 — complete and deployed

Sprint: **Blog Editorial System and AI-Assisted Publishing**

Authorities:

```text
docs/sprint_notes/SPRINT_P7_BLOG_EDITORIAL_SYSTEM_AND_AI_ASSISTED_PUBLISHING_2026-08-08.md
docs/editorial/AI_ASSISTED_PUBLISHING_WORKFLOW.md
```

P7 outcomes:

- eight active articles remain; the obsolete `We have a blog!` launch article is retired from the active collection;
- `/we-have-a-blog/` remains as a compatibility page to Writing and its weak Vault Boy thumbnail is removed;
- `Git to Know You: SRE Tools` is a living series introduction rather than a fixed 2025 top-ten promise;
- Rundeck, New Relic, PagerDuty, Terraform, GitHub Actions, and Cursor received substantive 2026 refreshes with separate Updated metadata;
- Git remains largely unchanged because its core content is durable; it received series metadata without an artificial Updated date;
- migrated posts retain exact legacy URLs; future posts declare a typed lowercase/hyphenated `slug` so new publishing does not require route-map edits;
- the overview and #1–#7 use explicit series metadata and articles provide previous/next series navigation;
- orphan logo assets created by the overview reframe were pruned rather than exempted from the asset policy;
- product-logo thumbnails remain the default for individual tool articles unless a specific asset is obsolete, low-quality, misleading, or visually unsuitable;
- GPT is the default research/drafting engine for future posts under the public-safe editorial workflow and may not invent personal experience, employer/customer stories, metrics, screenshots, or first-person claims.

P7 final candidate passed exact-head Astro validation, historical identity/date/compatibility checks, zero-orphan asset audit, internal-link verification, expanded desktop/tablet/phone Playwright, representative axe scans, rendered screenshot review, public-disclosure review, and owner local smoke testing before merge.

Approved Git to Know You continuation:

```text
#8 Kubernetes
#9 OpenTelemetry
#10 Argo CD / GitOps
```

AWS moves to a possible future Cloud Foundations series because it is too broad for one generic tool article. FireHydrant is no longer required to complete Git to Know You.

## Brand backlog note

A macOS Chrome owner review identified the homepage display headline as potentially too aggressive at a common laptop/desktop viewport. This remains a future visual-maintenance item. Compare a modestly wider hero measure and/or lower desktop maximum with Playwright evidence while preserving the confident editorial hierarchy.

## Public-writing boundaries

Do not publish customer identities, private employer/customer artifacts, proprietary scripts/configuration, privileged topology, internal host names, ticket IDs, private RCA documents, private correspondence, unsupported metrics, or private job-search/personal context.

For AI-assisted articles, do not fabricate anecdotes or tool usage. Use sourced generic examples or ask for small factual input when a genuine first-person story materially improves an article.

## Verification posture for future releases

Material changes should follow:

```text
bounded branch
PR
exact-head applicable CI / route / asset / browser / accessibility checks
public-disclosure review
owner approval when public representation materially changes
merge to main
automatic GitHub Pages deployment
post-deploy verification
living-state closeout
```
