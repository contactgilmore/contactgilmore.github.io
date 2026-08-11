# Active Sprint

Status: **P10 ACTIVE — EMPLOYER READINESS / FINAL PORTFOLIO POLISH**  
Updated: 2026-08-10

Sprint: **P10 — Employer Readiness and Final Portfolio Polish**

Sprint record:

`docs/sprints/SPRINT_P10_EMPLOYER_READINESS_AND_FINAL_PORTFOLIO_POLISH_2026-08-10.md`

Current authority:

```text
production branch: main
production main at P10 open: d0c1600f2af85541084aa4afd888beaf0f2a48e5
P10 branch: p10-employer-readiness-final-polish
open PRs at sprint open: none
```

## Goal

Run the deliberate final employer-readiness pass across the non-blog portfolio surfaces for recruiters, hiring managers, technical leaders, and cross-functional stakeholders. Improve only material evaluation, credibility, navigation, resume, discovery, or web-administration issues. Do not redesign an already approved visual system.

## In scope

```text
Home
Work
three professional case studies
About
Resume
Writing index / global navigation only
shared header/footer/meta shell
responsive/accessibility/browser proof
documentation hygiene required by existing doctrine
```

Blog article bodies are protected by P9 and are out of scope.

## Work-package state

```text
P10-WP1 full non-blog employer-facing audit             COMPLETE
P10-WP2 resume / claim / evaluation-flow polish         IN PROGRESS
P10-WP3 navigation / search / site-identity polish      QUEUED
P10-WP4 documentation-law reconciliation                QUEUED
P10-WP5 exact-head browser/accessibility/owner gate     QUEUED
```

## Bounded implementation direction

- Resume becomes more resume-like at the top: direct identity, public-safe contact paths, concise non-first-person professional summary, existing accomplishment bullets preserved.
- Replace absolute `permanent remediation` wording with evidence-aligned `durable remediation`.
- Prefer literal `shared operating model` over `shared operating system` on employer-facing proof labels.
- Case-study endings add a Resume next step while retaining Back to selected work.
- Nested Work routes keep Work active in global navigation; article routes keep Writing active without article-body edits.
- Add missing site identity/discovery basics: favicon, `og:site_name`, home `WebSite` structured data, and more descriptive compact interior page titles where justified.
- Restore Product doctrine's five-document law by consolidating the sixth case-study truth-map file into the canonical Proof & Case Study Strategy without losing evidence.
- Reconcile stale completed P8/P9 backlog language rather than carrying it forward.

## Protected boundaries

- no blog article-body edits;
- no new claims, metrics, education, certifications, dates, phone/address, or private details;
- no homepage hero re-layout, palette redesign, or typography-system replacement;
- no new framework, CMS, database, analytics, or hosting work;
- no private interview/job-search context in this public repository.

## Required proof

```text
exact changed-file review
public-disclosure/professional-read review
Astro/content/build integrity
asset/internal-link integrity
navigation aria-current regression
resume content/semantic regression
case-study CTA regression
favicon/site-identity checks
Playwright desktop/tablet/phone smoke
representative axe accessibility
focused visual review for non-blog employer-facing surfaces
owner approval for material public representation changes
```

Merge to `main` remains production authorization. GitHub Pages deploys automatically after an approved merge.
