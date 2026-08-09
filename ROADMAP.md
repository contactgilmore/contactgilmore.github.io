# ContactGilmore Portfolio 2.0 Roadmap

Status: active roadmap  
Updated: 2026-08-08

## North star

Maintain `contactgilmore.github.io` as a polished professional portfolio and technical writing platform that communicates Mike Gilmore's value quickly, demonstrates credible professional proof, and serves as a public example of disciplined AI-assisted software delivery.

## Technology authority

Current production stack:

```text
Astro 7+
TypeScript
Markdown content collections
custom HTML/CSS
minimal client JavaScript
GitHub-hosted Actions for this public repository
GitHub Pages
Playwright browser smoke testing
axe accessibility checks
```

React, a CMS, database, or alternate hosting provider is not part of the default architecture unless a later requirement justifies the change.

## Design/product direction

Portfolio 2.0 leads with one coherent professional identity:

`Technical Delivery & Customer Solutions`

Current top-level structure:

`Home / Work / Writing / About / Resume`

Primary professional proof is carried by three curated case studies rather than a chronological project dump.

## Completed delivery phases

### P1 — Foundation and Astro migration — COMPLETE
Governance, Jekyll/content/URL audit, Astro scaffold, typed blog schema, migration of the original published Markdown set, legacy route/asset regression, and Pages candidate packaging.

### P2 — Positioning and information architecture — COMPLETE
Professional umbrella, audience journeys, homepage hierarchy, Work/case-study architecture, About/Resume strategy, and Writing/archive rules.

### P3 — Visual design system — COMPLETE
Responsive design system, accessibility defaults, long-form article styling, Playwright desktop/tablet/phone coverage, screenshot evidence, and proven brand doctrine.

### P4 — Professional case studies and content refresh — COMPLETE
Three sanitized professional case studies, truth-mapped evidence, Home/Work/About/Resume integration, recruiter-scan hierarchy, and browser/accessibility regression.

### P5 — Quality, discoverability, and launch — COMPLETE
Public-asset minimization, sitemap/robots/canonical/social metadata, structured data, accessibility hardening, link/route regression, Pages deployment/rollback controls, and production launch.

### P6 — Recruiter proofread, voice, and case-study polish — COMPLETE
Recruiter-facing copy polish, stronger first-person ownership, deeper case-study specificity, career-foundation narrative, responsive visual review, public-repository hardening, and GitHub-first continuation doctrine. Squash-merged as `21031c0a18ae1c10ab9bafcbd0922c4b620c5383`.

### P7 — Blog editorial system and AI-assisted publishing — COMPLETE

Delivered:

- eight active public articles plus a compatibility route for the retired launch post;
- living Git to Know You series introduction;
- current-source refreshes for Rundeck, New Relic, PagerDuty, Terraform, GitHub Actions, and Cursor;
- typed `updated`, `slug`, `series`, `seriesOrder`, and `seriesStatus` metadata;
- Published/Updated and `dateModified` support;
- previous/next series navigation;
- future article slugs without route-map code changes;
- preserved historical publication dates and legacy URLs;
- public-safe GPT-assisted publishing workflow;
- expanded Writing/article Playwright and accessibility coverage;
- owner local smoke testing before merge.

P7 source merge: `5af373ab34a2ea1fd4692dc271fc1063b99f11f8`.

Release policy was then simplified so approved merges to `main` automatically deploy GitHub Pages. Policy merge: `88d4a34d63234416f73ba4771cc9839359d5196a`. First automatic deployment run `31280952066` succeeded.

## Post-P7 publication milestones

### Git to Know You #8 — Kubernetes — PUBLISHED

Kubernetes was delivered as a bounded editorial work package rather than a manufactured implementation sprint.

Release record:

```text
PR: #19
production merge: 3986eab790441506eb8e34d31a7d51bbab4bcea3
automatic Pages deployment run: 31284483589
result: SUCCESS
owner local Playwright smoke: 90 / 90 passed
```

The owner smoke test caught a timezone-dependent rendering defect that UTC CI did not expose. Date-only editorial metadata now renders as the stored calendar date on article pages, the Writing archive, and homepage featured writing without changing historical source dates.

The owner-side shared Playwright environment and `cd` + pull smoke-test expectations are documented as durable operating guidance for future publication work.

### Git to Know You #9 — OpenTelemetry — PUBLISHED

OpenTelemetry was delivered as the next bounded editorial work package.

Release record:

```text
PR: #21
production merge: 40d171466381516c6dd57da3ff5964ad0f2300a0
automatic Pages deployment run: 31286854414
result: SUCCESS
owner local Playwright smoke: 99 / 99 passed
```

The first owner visual review caught a logo-thumbnail presentation problem even though automated smoke testing was green. The corrective release kept Kubernetes on its authoritative SVG, replaced the low-resolution OpenTelemetry navigation image with an authoritative vector asset, and changed SVG/product-logo thumbnails from crop-to-fill to a contained 16:9 logo-card treatment. The publishing workflow now prefers authoritative SVG artwork; raster fallback should be 16:9 at 1600×900 or larger with generous whitespace.

## Current planning state

There is **no active implementation sprint**.

The portfolio uses a lightweight directional roadmap plus bounded sprints rather than a permanent product backlog. Open a sprint only when there is a concrete, meaningful outcome to deliver.

## Directional future work

Likely future themes, in current order:

- **Git to Know You #10 — Argo CD / GitOps**;
- establish a second AI/engineering-workflow writing series when there is enough material;
- consider a focused Cloud Foundations series rather than a single broad AWS article;
- periodically refresh professional case studies after meaningful career changes;
- revisit the homepage hero typography backlog using MacBook-class Playwright screenshots;
- consider a custom domain when it improves professional presentation enough to justify the change.

## Continuous portfolio operations

Ongoing work should include:

- publish new writing through the typed content schema and AI-assisted publishing workflow;
- periodically review featured content and professional positioning;
- maintain dependencies and CI/browser quality gates;
- review external links and time-sensitive technical claims;
- remove stale assets/claims/technologies;
- keep public documentation useful as SDLC/AI-delivery evidence while excluding private project memory;
- use sprint notes for material redesign, migration, content-system, or publication arcs rather than every minor edit;
- treat merge to `main` as the human production authorization and verify the automatic Pages deployment afterward;
- keep living state current after bounded publications so the next deterministic startup begins from production truth.

## Explicit non-goals

- no database or application server;
- no CMS unless publishing friction proves the need;
- no React merely for prestige;
- no animation-heavy portfolio aesthetic;
- no giant skill icon wall or proficiency bars;
- no artificial publication-date refreshing merely to make older articles look newer;
- no unreviewed production merge;
- no public-repository self-hosted runner exposure without a future security justification;
- no tracked private personal/job-search memory in the public repository.
