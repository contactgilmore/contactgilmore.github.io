# Where We Are

Status: active living state  
Updated: 2026-08-08

## Production authority

Portfolio 2.0 is live at `https://contactgilmore.github.io/` using Astro and GitHub Pages workflow publishing.

Current production truth:

```text
production branch: main
current production merge: 6668237614720202adec43cd0feadd6dc36ce2af
current release: Git to Know You #10 — Argo CD / GitOps
automatic deployment run: 31287772916
result: SUCCESS
owner local smoke: 108 / 108 Playwright tests passed
production deployment policy: automatic after approved merge to main
manual workflow dispatch: fallback only
```

Historical release anchors:

```text
P7 source merge: 5af373ab34a2ea1fd4692dc271fc1063b99f11f8
release-policy merge: 88d4a34d63234416f73ba4771cc9839359d5196a
first automatic deployment run: 31280952066
Kubernetes merge: 3986eab790441506eb8e34d31a7d51bbab4bcea3
Kubernetes deployment run: 31284483589
OpenTelemetry merge: 40d171466381516c6dd57da3ff5964ad0f2300a0
OpenTelemetry deployment run: 31286854414
Argo CD / GitOps merge: 6668237614720202adec43cd0feadd6dc36ce2af
Argo CD / GitOps deployment run: 31287772916
```

## Active sprint

P8 — **Portfolio Quality Ratchet and Series Transition** is active.

Authority:

`docs/sprint_notes/SPRINT_P8_PORTFOLIO_QUALITY_RATCHET_AND_SERIES_TRANSITION_2026-08-08.md`

P8 is not another article batch. It closes Git to Know You as the first complete #1–#10 series, hardens the proven low-owner-effort quality workflow, resolves the existing MacBook-class homepage hero typography backlog, and prepares only the foundation/sneak-peek for the next writing series.

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
- Date-only editorial metadata must render as the stored calendar date regardless of build-machine timezone.
- Owner/local browser smoke tests should reuse the documented shared Playwright environment before installing duplicate browser tooling.
- Product/tool logo thumbnails should prefer authoritative SVG artwork and use a contained logo-card treatment rather than crop-to-fill behavior. If only raster artwork is available, use a 16:9 source at 1600×900 or larger with generous whitespace.
- GPT should continue autonomously through routine bounded repository work until a genuine owner decision, local-only proof, or production gate is reached; owner gates should be concise and mobile-friendly without weakening evidence requirements.

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

P7 established the typed Astro blog, preserved historical dates/URLs, refreshed the original series content, added explicit series metadata/navigation, retired the obsolete launch article safely, and established the public-safe AI-assisted publishing workflow with responsive Playwright/axe gates and owner smoke review.

## Git to Know You — complete #1–#10 series

The first complete Git to Know You series now runs from Rundeck through Argo CD / GitOps. The series remains public as a coherent beginner-friendly learning path, but P8 must not manufacture #11 merely to continue numbering.

### #8 Kubernetes — published and deployed

```text
PR: #19
production merge: 3986eab790441506eb8e34d31a7d51bbab4bcea3
automatic Pages deployment run: 31284483589
result: SUCCESS
owner local smoke: 90 / 90
```

The owner smoke exposed a timezone-dependent date-rendering defect that UTC CI did not reveal; source dates were preserved and rendering became timezone-stable.

### #9 OpenTelemetry — published and deployed

```text
PR: #21
production merge: 40d171466381516c6dd57da3ff5964ad0f2300a0
automatic Pages deployment run: 31286854414
result: SUCCESS
owner local smoke: 99 / 99
```

Owner visual review caught overly cropped logo thumbnails. The final release established authoritative SVG artwork plus a contained 16:9 logo-card treatment.

### #10 Argo CD / GitOps — published and deployed

```text
PR: #23
production merge: 6668237614720202adec43cd0feadd6dc36ce2af
automatic Pages deployment run: 31287772916
result: SUCCESS
owner local smoke: 108 / 108
```

The release refreshed the living series overview through #10, used authoritative CNCF Argo vector artwork, and extended responsive/accessibility/series-navigation coverage through the completed learning arc.

## Current P8 direction

```text
WP1 series closeout + roadmap/backlog reconciliation
WP2 deterministic quality + low-owner-effort workflow audit
WP3 MacBook-class homepage hero typography calibration
WP4 next-series foundation / optional intro sneak-peek only
WP5 full verification + closeout
```

The next writing-series direction is intentionally undecided entering P8. AI-assisted engineering workflow and Cloud Foundations are candidates, but usefulness, distinctiveness, and portfolio positioning must decide the direction. Do not begin numbered follow-on articles in P8.

## Brand backlog note

A macOS Chrome owner review identified the homepage display headline as visually aggressive at a common laptop/desktop viewport. P8 owns this item: compare a modestly wider hero measure and/or lower desktop maximum with browser evidence while preserving confident editorial hierarchy and recruiter scanability.

## Public-writing boundaries

Do not publish customer identities, private employer/customer artifacts, proprietary scripts/configuration, privileged topology, internal host names, ticket IDs, private RCA documents, private correspondence, unsupported metrics, or private job-search/personal context.

For AI-assisted articles, do not fabricate anecdotes or tool usage. Use sourced generic examples or ask for small factual input when a genuine first-person story materially improves an article.

## Verification posture

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

A fresh chat must recover this same conclusion from repository authority without depending on conversation memory.
