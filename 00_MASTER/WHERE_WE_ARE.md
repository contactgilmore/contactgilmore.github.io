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

The original pre-Astro Jekyll rollback target remains historical release evidence at `2637f64cce154ded6086df2220e5889bdd6aa007`. Current rollback decisions should use Git/deployment history appropriate to the release being changed rather than assuming that historical target is always the preferred rollback point.

## Durable decisions

- Astro 7+ with TypeScript/content collections is the production static-site foundation.
- Preserve technical-writing URLs/history unless an explicit editorial decision changes content or metadata.
- Use GitHub-hosted `ubuntu-latest` for this public repository; do not expose private self-hosted infrastructure to ordinary public-repo workflows.
- Treat all repository content, branches, PRs, logs, artifacts, screenshots, metadata, and evidence as public disclosure surfaces.
- Public repository documentation is allowed to demonstrate SDLC, sprint execution, CI/CD, testing, accessibility, release controls, rollback planning, and responsible AI-assisted delivery, but must never become private project memory.
- Retain only public assets that have a content, brand, or compatibility reason.
- Avoid React/CMS/database additions unless a later requirement justifies them.
- The smoke-tested Portfolio 2.0 brand system remains active visual authority.
- Routine design/UX/navigation/color/layout decisions are delegated to GPT, with owner review for material representation/production decisions.
- Production deployment is intentionally manual-only through `.github/workflows/deploy-pages.yml` unless a later owner-approved operating decision changes that policy.
- Three deep professional case studies remain the right portfolio shape; earlier leadership experience supports the career foundation rather than becoming a fourth retail case study by default.
- Portfolio planning uses a lightweight directional roadmap plus bounded sprints for concrete work. Do not manufacture product-style phases/backlog volume when no real outcome requires them.

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

Sprint authority:

`docs/sprint_notes/SPRINT_P7_BLOG_EDITORIAL_SYSTEM_AND_AI_ASSISTED_PUBLISHING_2026-08-08.md`

Current work package: **P7-WP1 — editorial strategy, topic relevance, and AI publishing contract**.

P7 decisions already accepted:

- keep the clean Writing list unless evidence justifies a visual change;
- audit every existing post for current technical accuracy, links, examples, screenshots, voice, and relevance;
- retain original publication dates; add `dateModified`/Updated only after substantive refresh;
- do not mechanically finish the original ten-tool Git to Know You list;
- research AWS, Argo CD, FireHydrant, and stronger replacement topics before selecting the next installments;
- GPT becomes the default research/drafting engine for future blog posts using the established templates and voice;
- GPT may research, outline, draft, verify, prepare metadata/graphics, and run quality gates, but may not invent Mike's personal experience, employer/customer stories, metrics, or first-person claims;
- Mike remains final editorial/publication authority.

## Brand backlog note

A macOS Chrome owner review identified the homepage display headline as potentially too aggressive at a common laptop/desktop viewport. This is **backlogged**, not an active P7 redesign. Oversized editorial typography is a legitimate modern pattern, but the current narrow measure can create many short lines and push supporting value/CTA content below the first viewport. A future visual-maintenance pass should compare a modestly wider hero measure and/or lower desktop maximum using Playwright screenshots while preserving the confident editorial hierarchy.

## Public-writing boundaries

Do not publish customer identities, private employer/customer artifacts, proprietary scripts/configuration, privileged topology, internal host names, ticket IDs, private RCA documents, private correspondence, unsupported metrics, or private job-search/personal context.

For AI-assisted articles, do not fabricate personal anecdotes or tool usage. Use sourced technical examples or ask Mike for a small amount of factual input when a genuine first-person story materially improves the article.

## Verification posture

Any P7 publication candidate must pass the checks appropriate to its scope, including:

```text
technical/source verification
Astro validation
public asset audit
internal-link verification
Playwright responsive smoke for affected surfaces
axe accessibility checks where presentation changes
public-disclosure review
owner editorial approval before merge/deploy
```
