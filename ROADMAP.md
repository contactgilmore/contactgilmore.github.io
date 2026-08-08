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

```text
Technical Delivery & Customer Solutions
```

Current top-level structure:

```text
Home / Work / Writing / About / Resume
```

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

Recruiter-facing copy polish, stronger first-person ownership, deeper case-study specificity, career-foundation narrative, responsive visual review, public-repository hardening, and GitHub-first continuation doctrine. Accepted and squash-merged to `main` as `21031c0a18ae1c10ab9bafcbd0922c4b620c5383`.

## Active phase — P7 Writing editorial system and AI-assisted publishing

Branch: `portfolio-blog-editorial`  
Draft PR: `#16`

Goals:

- keep the clean Writing archive unless content growth creates a real navigation problem;
- audit and refresh existing technical articles using current first-party sources;
- retain original publication dates and use a separate Updated/dateModified field only after substantive revisions;
- add typed series metadata and lightweight series continuity;
- use GPT as the default research/drafting engine while preserving Mike's established voice and requiring owner approval;
- never invent personal experience, employer/customer details, metrics, or first-person claims;
- reconsider the original Git to Know You topic list based on current relevance instead of mechanically finishing it;
- preserve product-logo thumbnails as the default visual pattern for tool articles unless a logo is obsolete, low-quality, or visually unsuitable;
- keep the public repository documentation concise, sanitized, and professionally readable.

Current editorial decisions:

```text
“We have a blog!”: retired from the active article set; legacy URL retained as a compatibility page
SRE Tools overview: evolve into a living series introduction
Terraform: substantive 2026 refresh in progress
GitHub Actions: substantive 2026 refresh in progress
Git to Know You #8–#10 working direction: Kubernetes -> OpenTelemetry -> Argo CD / GitOps
AWS: better candidate for a future cloud-foundations series than one oversized tool article
FireHydrant: no longer an obligation; lower incremental educational value than current candidates
```

## Directional future work

The portfolio uses a lightweight roadmap plus bounded sprints rather than a permanent product backlog.

Likely future themes:

- complete and maintain the Git to Know You series;
- establish a second AI/engineering-workflow writing series when there is enough material;
- consider a focused cloud-foundations series rather than a single broad AWS article;
- periodically refresh professional case studies after meaningful career changes;
- revisit the homepage hero typography backlog using MacBook-class Playwright screenshots;
- consider a custom domain when it improves professional presentation enough to justify the change.

## Continuous portfolio operations

Ongoing work should include:

- publish new writing through the typed content schema;
- periodically review featured content and professional positioning;
- maintain dependencies and CI/browser quality gates;
- review external links and time-sensitive technical claims;
- remove stale assets/claims/technologies;
- keep public documentation useful as SDLC/AI-delivery evidence while excluding private project memory;
- use sprint notes for material redesign, migration, content-system, or publication arcs rather than every minor edit.

## Explicit non-goals

- no database or application server;
- no CMS unless publishing friction proves the need;
- no React merely for prestige;
- no animation-heavy portfolio aesthetic;
- no giant skill icon wall or proficiency bars;
- no artificial publication-date refreshing merely to make older articles look newer;
- no production cutover based only on a successful build;
- no public-repository self-hosted runner exposure without a future security justification;
- no tracked private personal/job-search memory in the public repository.
