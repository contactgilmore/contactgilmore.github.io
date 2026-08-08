# Where We Are

Status: active living state  
Updated: 2026-08-08

## Production authority

Portfolio 2.0 is live at `https://contactgilmore.github.io/` using Astro and GitHub Pages workflow publishing.

Current production baseline:

```text
P6 merge commit: 21031c0a18ae1c10ab9bafcbd0922c4b620c5383
production branch: main
GitHub Pages build type: workflow
production deployment policy: manual-only
```

Production remains unchanged while P7 is developed on `portfolio-blog-editorial` / draft PR #16.

## Durable decisions

- Astro 7+ with TypeScript/content collections is the production static-site foundation.
- Use GitHub-hosted runners for ordinary public-repository workflows; do not expose private self-hosted infrastructure.
- Treat repository content, docs, branches, PRs, logs, artifacts, screenshots, and metadata as public disclosure surfaces.
- Public docs may demonstrate SDLC, sprint execution, CI/CD, testing, accessibility, release controls, rollback planning, and responsible AI-assisted delivery, but must never become private project memory.
- Retain only public assets with a current content, brand, or compatibility purpose.
- Avoid React/CMS/database additions unless a real requirement justifies them.
- The smoke-tested Portfolio 2.0 visual system remains brand authority.
- Production deployment remains manual-only unless owner-approved doctrine changes it.
- Portfolio planning uses a lightweight directional roadmap plus bounded sprints.

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

P6 improved recruiter scanability, first-person ownership, case-study specificity, career narrative, responsive visual QA, and public-repository governance. It was owner-approved and merged before P7 began.

Historical record:

`docs/sprint_notes/SPRINT_P6_RECRUITER_PROOFREAD_AND_CASE_STUDY_POLISH_2026-08-08.md`

## P7 — active, implementation complete

Sprint: **Blog Editorial System and AI-Assisted Publishing**  
Branch: `portfolio-blog-editorial`  
Draft PR: `#16`  
Current work package: **P7-WP7 — browser/editorial regression and owner gate**

Authorities:

```text
docs/sprint_notes/SPRINT_P7_BLOG_EDITORIAL_SYSTEM_AND_AI_ASSISTED_PUBLISHING_2026-08-08.md
docs/editorial/AI_ASSISTED_PUBLISHING_WORKFLOW.md
```

Status:

```text
P7-WP1 editorial strategy / topic relevance / AI authoring contract: COMPLETE
P7-WP2 existing-content editorial audit: COMPLETE
P7-WP3 content schema / updated / series / slug model: COMPLETE
P7-WP4 article refresh and series cleanup: COMPLETE
P7-WP5 Git to Know You continuation decision: COMPLETE
P7-WP6 reusable AI publication workflow: COMPLETE
P7-WP7 browser/editorial regression and owner gate: ACTIVE
```

P7 candidate state:

- eight active articles remain; the obsolete `We have a blog!` launch article is retired from the active collection;
- `/we-have-a-blog/` remains as a compatibility page to Writing and its weak Vault Boy thumbnail is removed;
- `Git to Know You: SRE Tools` is a living series introduction rather than a fixed 2025 top-ten promise;
- Rundeck, New Relic, PagerDuty, Terraform, GitHub Actions, and Cursor received substantive 2026 refreshes with separate Updated metadata;
- Git remains largely unchanged because its core content is durable; it received series metadata without an artificial Updated date;
- migrated posts retain exact legacy URLs; future posts declare a typed lowercase/hyphenated `slug` so new publishing does not require route-map edits;
- the overview and #1–#7 use explicit series metadata and articles now provide previous/next series navigation;
- orphan logo assets created by the overview reframe were pruned rather than exempted from the asset policy;
- product-logo thumbnails remain the default for individual tool articles unless a specific asset is obsolete, low-quality, misleading, or visually unsuitable;
- no replacement overview artwork is required unless final browser evidence demonstrates a visual problem.

Approved Git to Know You continuation:

```text
#8 Kubernetes
#9 OpenTelemetry
#10 Argo CD / GitOps
```

AWS moves to a possible future Cloud Foundations series because it is too broad for one generic tool article. FireHydrant is no longer required to complete Git to Know You.

GPT is the default research/drafting engine for future posts, but it must not invent personal experience, employer/customer stories, metrics, screenshots, or first-person claims. Owner approval remains required before merge/deploy.

## Brand backlog note

A macOS Chrome owner review identified the homepage display headline as potentially too aggressive at a common laptop/desktop viewport. This remains a future visual-maintenance item, not P7 scope. Compare a modestly wider hero measure and/or lower desktop maximum with Playwright evidence while preserving the confident editorial hierarchy.

## Public-writing boundaries

Do not publish customer identities, private employer/customer artifacts, proprietary scripts/configuration, privileged topology, internal host names, ticket IDs, private RCA documents, private correspondence, unsupported metrics, or private job-search/personal context.

For AI-assisted articles, do not fabricate anecdotes or tool usage. Use sourced generic examples or ask for small factual input when a genuine first-person story materially improves an article.

## P7 final verification posture

Required before owner approval:

```text
exact-head Astro validation
legacy identity/date/compatibility checks
zero-orphan public asset audit
internal-link verification
expanded Playwright desktop/tablet/phone coverage
axe representative Writing/article scans
rendered screenshot visual review
public-disclosure/editorial diff review
```
