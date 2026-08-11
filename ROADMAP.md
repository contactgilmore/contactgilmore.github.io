# ContactGilmore Portfolio 2.0 Roadmap

Status: active roadmap  
Updated: 2026-08-11

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

## Design / product direction

Portfolio 2.0 leads with one coherent professional identity:

`Technical Delivery & Customer Solutions`

Current top-level structure:

`Home / Work / Writing / About / Resume`

Primary professional proof is carried by three curated sanitized case studies rather than a chronological project dump. Technical projects and long-form Writing support that professional evidence rather than replacing it.

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
Recruiter-facing copy polish, stronger first-person ownership, deeper case-study specificity, career-foundation narrative, responsive visual review, public-repository hardening, and GitHub-first continuation doctrine.

### P7 — Blog editorial system and AI-assisted publishing — COMPLETE
Established the typed Astro blog, protected historical dates/URLs, refreshed the original series, added series metadata/navigation, established public-safe AI-assisted publishing, and expanded responsive/accessibility regression.

### P8 — Portfolio Quality Ratchet and Series Transition — COMPLETE

Delivered:

- closed Git to Know You as a deliberate #1–#10 series;
- reconciled stale product/architecture/versioning backlog language;
- made autonomous bounded execution, exact-head proof, low owner friction, and concise owner gates durable startup rules;
- standardized sprint execution records under `docs/sprints/` with a 30-day recent-history window and historical-only archive;
- corrected the MacBook-class homepage hero composition and expanded laptop-specific proof;
- introduced **Prompt. Prove. Ship.** as the next writing direction;
- published **Prompt. Prove. Ship.: From Chat to Change** with a purpose-built vector thumbnail and homepage feature placement;
- preserved responsive, route, asset, link, and accessibility quality gates.

Release anchor:

```text
PR: #25
production merge: fad90493ab0cad61fee834cdace94256e97e8557
Pages deployment: 31290363581 — SUCCESS
```

### P9 — Editorial Voice and Full Blog Quality — COMPLETE

Audited the full current article corpus and established the durable long-form house standard:

- technical essay/tutorial hybrid rather than condensed upstream documentation;
- source packs as evidence rather than automatic outlines;
- cohesive short paragraphs as the normal rhythm;
- one-sentence paragraphs only when emphasis/transition/humor genuinely earns them;
- headings and lists used for meaningful structure rather than fragmentation;
- explicit authorial value beyond source synthesis;
- a separate voice/read-aloud gate from factual/technical verification;
- the established human-written / AI-assisted corpus as the internal voice baseline.

Materially revised Kubernetes, OpenTelemetry, Argo CD / GitOps, and the Prompt. Prove. Ship. introduction while preserving historical publication identity. P9 remains the long-form Writing authority.

Release anchor:

```text
PR: #29
production merge: 80614d4d24c6f7fbf6087ed2325f27a63786d3d2
Pages deployment: 31454588266 — SUCCESS
```

### P10 — Employer Readiness and Final Portfolio Polish — COMPLETE

Performed the deliberate full non-blog employer-facing finish-line audit across Home, Work, all three case studies, Writing index/navigation, About, Resume, and shared site shell.

Accepted outcomes:

- preserved the approved Portfolio 2.0 design after evidence found no redesign requirement;
- made Resume a scan-first employer artifact with direct identity/role/contact, one Professional Summary, capabilities, and accomplishment-led experience;
- removed duplicated Resume opening positioning so experience evidence appears sooner, especially on phone;
- tightened claim wording to `durable remediation` and `shared operating model` where more literal language better fits the evidence;
- added Resume evaluation exits to all three professional case studies;
- distinguished exact current pages from nested current section locations with tested ARIA semantics;
- added stable favicon/site-name/WebSite identity metadata and clearer interior titles;
- consolidated case-study truth/evidence authority and restored product documentation's five-file contract;
- kept all P9 article bodies untouched.

Release anchor:

```text
PR: #31
production merge: 99bcd3a82cc37a99350d6eae2171b053d8f27199
Pages deployment: 31464158531 — SUCCESS
Validate: 31464158520 — SUCCESS
Playwright: 31464158526 — 140 passed / 4 intentional skips / 0 failures
production evidence artifact: 9090915653
```

## Completed first writing series — Git to Know You #1–#10

Git to Know You remains a public beginner-friendly learning path from Rundeck through Argo CD / GitOps. The roadmap does not manufacture #11 simply to continue numbering.

## Current planning state

There is **no active implementation sprint**.

P10 reached the employer-readiness finish line. The default posture is now **stability over cosmetic churn**.

Open another sprint only for a concrete meaningful outcome, such as:

- material new professional evidence or a new safely documentable case study;
- a real employer/user defect;
- meaningful accessibility/performance/discoverability evidence;
- dependency/security/browser maintenance that requires tracked change;
- a deliberate useful article or bounded writing arc;
- a justified architecture/hosting/product requirement.

Do not create work merely because the portfolio can always be made different.

## Prompt. Prove. Ship. — directional future writing arc

**Prompt. Prove. Ship.** remains the next likely long-form direction, but it is not a committed cadence, article count, or active sprint.

Series promise:

> How do you use AI agents to move technical work faster without giving up context, verification, security boundaries, review, or human ownership?

Current public entry point:

`/prompt-prove-ship/` — **Prompt. Prove. Ship.: From Chat to Change**

Potential durable themes:

- repository instructions and context engineering;
- planning, allowed/no-touch scope, and stop conditions;
- tools, connectors, MCP, and controlled access to outside systems;
- tests, browser evidence, evaluation, and claim-matching proof;
- safe autonomy, permissions, credentials, and destructive operations;
- AI-assisted troubleshooting and evidence gathering;
- branch/PR/review/release controls;
- background and multi-agent workflows after the fundamentals are established.

If this arc is pursued, open it deliberately and follow the P9 editorial standard from the first outline. Do not publish merely to maintain a calendar.

Cloud Foundations remains a later candidate. Do not run multiple series merely to increase publication volume.

## Employer-readiness finish line — COMPLETE

P10 completed the previously planned employer-facing final pass. The accepted site was evaluated for recruiter/hiring-manager scanability, web-administration quality, responsive behavior, accessibility, metadata/discoverability, routes/links/assets, public safety, visual consistency, Resume conventions, proof precision, and documentation governance.

The final audit explicitly rejected unnecessary redesign and filler. Future changes to Home / Work / About / Resume should require evidence that the current surface is materially wrong, stale, or incomplete.

## Sprint-record lifecycle

Canonical sprint execution history is:

```text
docs/sprints/
```

Active and recently completed records remain there. A completed sprint becomes archive-eligible 30 calendar days after its recorded close date and moves to:

```text
docs/sprints/archive/
```

Routine startup does not read archived records. Archive lookup is only for historical recovery, regression, audit, or decision provenance. Do not create duplicate sprint summaries or placeholder archive files.

## Continuous portfolio operations

Ongoing work should include:

- publish new writing only when there is a useful topic;
- periodically review featured content and professional positioning when career evidence changes;
- maintain dependencies and CI/browser quality gates;
- review external links and time-sensitive technical claims;
- remove stale assets/claims/technologies when evidence supports removal;
- keep public documentation useful as SDLC/AI-delivery evidence while excluding private project memory;
- use sprint records for material redesign, migration, content-system, or publication arcs rather than every minor edit;
- archive closed sprint records after the 30-day recent-history window;
- treat merge to `main` as human production authorization and verify automatic Pages deployment afterward;
- keep living state current so fresh chats recover production truth deterministically;
- minimize owner manual work without replacing human public-representation judgment or claim-matching evidence.

## Explicit non-goals

- no database or application server;
- no CMS unless publishing friction proves the need;
- no React merely for prestige;
- no animation-heavy portfolio aesthetic;
- no giant skill icon wall or proficiency bars;
- no artificial publication-date refreshing merely to make older articles look newer;
- no forced article cadence or invented series numbering;
- no unreviewed production merge;
- no public-repository self-hosted runner exposure without a future security justification;
- no tracked private personal/job-search memory in the public repository;
- no continuous cosmetic churn after P10 without evidence of a real problem.
