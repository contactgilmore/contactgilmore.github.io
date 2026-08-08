# Where We Are

Status: active living state  
Updated: 2026-08-08

## Production authority

Portfolio 2.0 is live at `https://contactgilmore.github.io/` using Astro and GitHub Pages workflow publishing.

P6 recruiter/case-study polish and public-repository hardening were accepted and squash-merged to `main`:

```text
P6 merge commit: 21031c0a18ae1c10ab9bafcbd0922c4b620c5383
production branch: main
GitHub Pages build type: workflow
production deployment policy: manual-only
```

Production remains unchanged while P7 is developed on `portfolio-blog-editorial` / draft PR #16.

## Durable decisions

- Astro 7+ with TypeScript/content collections is the production static-site foundation.
- Preserve technical-writing URLs/history unless an explicit editorial decision changes content or metadata.
- Use GitHub-hosted `ubuntu-latest` for this public repository; do not expose private self-hosted infrastructure to ordinary public-repo workflows.
- Treat all repository content, branches, PRs, logs, artifacts, screenshots, metadata, and evidence as public disclosure surfaces.
- Public repository documentation may demonstrate SDLC, sprint execution, CI/CD, testing, accessibility, release controls, rollback planning, and responsible AI-assisted delivery, but must never become private project memory.
- Retain only public assets that have a content, brand, or compatibility reason.
- Avoid React/CMS/database additions unless a later requirement justifies them.
- The smoke-tested Portfolio 2.0 brand system remains active visual authority.
- Routine design/UX/navigation/color/layout decisions are delegated to GPT, with owner review for material representation/production decisions.
- Production deployment is intentionally manual-only unless a later owner-approved operating decision changes that policy.
- Portfolio planning uses a lightweight directional roadmap plus bounded sprints for concrete work.

## Current production structure

```text
Home / Work / Writing / About / Resume
```

Current professional positioning:

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

P6 improved recruiter scanability, first-person ownership, case-study specificity, career narrative, and public-repository governance. Full Astro/Playwright/axe regression and manual screenshot review passed before owner acceptance.

Historical sprint record:

`docs/sprint_notes/SPRINT_P6_RECRUITER_PROOFREAD_AND_CASE_STUDY_POLISH_2026-08-08.md`

## P7 — active

Sprint: **Blog Editorial System and AI-Assisted Publishing**  
Branch: `portfolio-blog-editorial`  
Draft PR: `#16`

Sprint authority:

`docs/sprint_notes/SPRINT_P7_BLOG_EDITORIAL_SYSTEM_AND_AI_ASSISTED_PUBLISHING_2026-08-08.md`

Current work package: **P7-WP4 — priority article refresh batch**.

Completed:

```text
P7-WP1 editorial strategy / topic relevance / AI authoring contract
P7-WP2 nine-post audit
P7-WP3 typed series + updated-date metadata foundation
```

Active/current decisions:

- keep the clean Writing list unless evidence justifies a visual change;
- retain original publication dates and add separate Updated/dateModified values only after substantive refresh;
- Terraform and GitHub Actions are the first high-priority technical refreshes;
- the old byte-for-byte migration guard has been evolved to protect article identity, original publication dates, and legacy routes while allowing reviewed editorial maintenance;
- `We have a blog!` is retired from the active article collection; `/we-have-a-blog/` remains as a lightweight compatibility page pointing readers to Writing;
- its old Vault Boy thumbnail is removed because it no longer serves active content;
- product-logo thumbnails remain the default Git to Know You pattern unless a specific image is obsolete, low-quality, or visually unsuitable;
- the SRE Tools overview should become a living series introduction rather than a promise to complete an outdated ten-tool list;
- current working direction for Git to Know You #8–#10 is Kubernetes -> OpenTelemetry -> Argo CD / GitOps, pending final editorial research/owner gate;
- AWS is better treated as a possible future cloud-foundations series than one oversized tool article;
- FireHydrant is no longer an obligation;
- GPT is the default research/drafting engine but may not invent personal experience, employer/customer stories, metrics, or first-person claims;
- owner approval remains required before merge/deploy.

## Brand backlog note

A macOS Chrome owner review identified the homepage display headline as potentially too aggressive at a common laptop/desktop viewport. This is backlogged, not an active P7 redesign. A future visual-maintenance pass should compare a modestly wider hero measure and/or lower desktop maximum using Playwright screenshots while preserving the confident editorial hierarchy.

## Public-writing boundaries

Do not publish customer identities, private employer/customer artifacts, proprietary scripts/configuration, privileged topology, internal host names, ticket IDs, private RCA documents, private correspondence, unsupported metrics, or private job-search/personal context.

For AI-assisted articles, do not fabricate personal anecdotes or tool usage. Use sourced technical examples or ask for a small amount of factual input when a genuine first-person story materially improves the article.

## Verification posture

Any P7 publication candidate must pass the checks appropriate to its scope, including:

```text
technical/source verification
Astro validation
legacy identity/date/compatibility checks
public asset audit
internal-link verification
Playwright responsive smoke for affected surfaces
axe accessibility checks where presentation changes
public-disclosure review
owner editorial approval before merge/deploy
```
