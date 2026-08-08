# Active Sprint

Sprint: **P7 — Blog Editorial System and AI-Assisted Publishing**  
Status: ACTIVE  
Opened: 2026-08-08  
Branch: `portfolio-blog-editorial`

Current work package: **P7-WP7 — browser/editorial regression and owner gate**

Sprint note: `docs/sprint_notes/SPRINT_P7_BLOG_EDITORIAL_SYSTEM_AND_AI_ASSISTED_PUBLISHING_2026-08-08.md`
Editorial workflow: `docs/editorial/AI_ASSISTED_PUBLISHING_WORKFLOW.md`

Production baseline:

```text
P6 accepted and squash-merged to main: 21031c0a18ae1c10ab9bafcbd0922c4b620c5383
GitHub Pages build type: workflow
production deployment: manual-only
```

P7 status:

```text
P7-WP1 editorial strategy / topic relevance / AI authoring contract: COMPLETE
P7-WP2 existing-content editorial audit: COMPLETE
P7-WP3 content schema and updated/series metadata foundation: COMPLETE
P7-WP4 article refresh and series cleanup: COMPLETE
P7-WP5 Git to Know You continuation decision: COMPLETE
P7-WP6 reusable AI publication workflow: COMPLETE
P7-WP7 browser/editorial regression and owner gate: ACTIVE
```

## Accepted editorial decisions

- Original publication dates remain historical facts.
- Materially revised articles use a separate `updated` date and `dateModified` structured data.
- The clean Writing list remains the default archive presentation.
- Series ordering/status and future article slugs are typed content metadata rather than hard-coded editorial logic.
- Existing migrated articles retain their exact compatibility URLs; future articles declare a lowercase hyphenated `slug`.
- GPT is the default research/drafting engine but must not invent personal experience, employer/customer stories, metrics, screenshots, or first-person claims.
- Product-logo thumbnails remain the default for individual tool articles unless obsolete, low-quality, misleading, or visually unsuitable.
- `We have a blog!` is retired from the active article set. `/we-have-a-blog/` remains as a compatibility page and the weak launch thumbnail is removed.
- The current SRE Tools overview visual remains unless final browser evidence shows a real problem; do not create replacement artwork merely for novelty.
- `Git to Know You: SRE Tools` is now a living series introduction rather than a fixed 2025 top-ten promise.
- Final continuation sequence: **#8 Kubernetes -> #9 OpenTelemetry -> #10 Argo CD / GitOps**.
- AWS moves to a possible future cloud-foundations series rather than one oversized generic tool article.
- FireHydrant is no longer required to complete Git to Know You.

## P7-WP4 completed implementation

- retired the obsolete launch article and removed its orphan thumbnail;
- reframed the series overview;
- materially refreshed Rundeck, New Relic, PagerDuty, Terraform, GitHub Actions, and Cursor using current source verification;
- retained Git as a durable/light-touch article and added structural series metadata without manufacturing an Updated date;
- applied explicit series metadata to the overview and #1–#7;
- added Published/Updated presentation plus `dateModified` structured data;
- added metadata-driven previous/next series navigation;
- evolved migration-era integrity checks to preserve historical identity/date/compatibility while permitting deliberate editorial maintenance;
- pruned orphan public assets created by the overview reframe;
- added slug-aware routing for future AI-authored posts without changing legacy URLs;
- expanded Playwright coverage to the active Writing archive, series overview, all seven current installments, retirement compatibility page, updated metadata, and series navigation.

## Final gate

Before P7 can be offered for owner approval:

```text
exact-head Astro validation: REQUIRED GREEN
public asset audit: REQUIRED GREEN
legacy identity/date/compatibility checks: REQUIRED GREEN
internal-link verification: REQUIRED GREEN
expanded Playwright desktop/tablet/phone: REQUIRED GREEN
axe representative article/archive scans: REQUIRED GREEN
rendered screenshot visual review: REQUIRED
public-disclosure/editorial diff review: REQUIRED
```

Production remains unchanged until owner approval and a separate merge/deploy action.

## Portfolio planning model

Maintain a lightweight directional roadmap for durable themes and known future work, but execute changes through bounded one-off/maintenance sprints when there is a concrete outcome.

Roadmap answers **where the portfolio is heading**. Sprints answer **what we are changing now**.

## Public-repository rule

All P7 notes, drafts committed to Git, source research summaries, PRs, workflow artifacts, and metadata are public artifacts. Do not use the repository as private brainstorming memory. Research notes must be concise, sanitized, professionally readable, and necessary to reproduce an editorial decision.
