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
Established the typed Astro blog, protected historical dates/URLs, refreshed the original series, added series metadata/navigation, established public-safe AI-assisted publishing, and expanded responsive/accessibility regression.

P7 source merge: `5af373ab34a2ea1fd4692dc271fc1063b99f11f8`.

### P8 — Portfolio Quality Ratchet and Series Transition — COMPLETE

Delivered:

- closed Git to Know You as a deliberate #1–#10 series;
- reconciled stale product/architecture/versioning backlog language;
- made autonomous bounded execution, exact-head proof, low owner friction, and concise owner gates durable startup rules;
- standardized sprint execution records under `docs/sprints/` with a 30-day recent-history window and historical-only archive;
- corrected the MacBook-class homepage hero composition and expanded laptop-specific proof;
- introduced **Prompt. Prove. Ship.** as the next writing series;
- published **Prompt. Prove. Ship.: From Chat to Change** with a purpose-built vector thumbnail and homepage feature placement;
- preserved responsive, route, asset, link, and accessibility quality gates.

Release record:

```text
PR: #25
production merge: fad90493ab0cad61fee834cdace94256e97e8557
automatic Pages deployment run: 31290363581
result: SUCCESS
final Validate run: 31290157900 — SUCCESS
final Playwright run: 31290157896 — 116 passed / 4 intentional skips
```

## Completed first writing series — Git to Know You #1–#10

Git to Know You remains a public beginner-friendly learning path from Rundeck through Argo CD / GitOps. The roadmap does not manufacture #11 simply to continue numbering.

Post-P7 release anchors:

```text
Kubernetes: PR #19 / merge 3986eab790441506eb8e34d31a7d51bbab4bcea3 / deploy 31284483589 / owner smoke 90/90
OpenTelemetry: PR #21 / merge 40d171466381516c6dd57da3ff5964ad0f2300a0 / deploy 31286854414 / owner smoke 99/99
Argo CD / GitOps: PR #23 / merge 6668237614720202adec43cd0feadd6dc36ce2af / deploy 31287772916 / owner smoke 108/108
```

## Current planning state

There is **no active implementation sprint**.

The portfolio uses a lightweight directional roadmap plus bounded sprints. Open a sprint only when there is a concrete, meaningful outcome to deliver.

## Next writing arc — Prompt. Prove. Ship.

**Prompt. Prove. Ship.** moves the Writing section from introductory tool education into the engineering operating model around increasingly capable AI agents.

Series promise:

> How do you use AI agents to move technical work faster without giving up context, verification, security boundaries, review, or human ownership?

Current public entry point:

`/prompt-prove-ship/` — **Prompt. Prove. Ship.: From Chat to Change**

Durable topic themes, not committed numbers or dates:

- repository instructions and context engineering;
- planning, allowed/no-touch scope, and stop conditions;
- tools, connectors, MCP, and controlled access to outside systems;
- tests, browser evidence, evaluation, and claim-matching proof;
- safe autonomy, permissions, credentials, and destructive operations;
- AI-assisted troubleshooting and evidence gathering;
- branch/PR/review/release controls;
- background and multi-agent workflows after the fundamentals are established.

Cloud Foundations remains a later candidate. Do not run both series simultaneously merely to increase publication volume.

## Employer-readiness finish line

After the next focused Prompt. Prove. Ship. writing arc:

1. pause new content;
2. perform one deliberate employer-facing final pass across Home / Work / Writing / About / Resume;
3. evaluate recruiter scanability, web-administration quality, responsive behavior, accessibility, metadata/discoverability, broken links, public safety, visual consistency, performance, and documentation/assets;
4. resolve only material issues found by that review;
5. publish the accepted final polish;
6. enter a stability period and avoid cosmetic churn until new career evidence, a real defect, or a meaningful content need justifies another change.

The portfolio should be credible when inspected as both a professional profile and a working example of web administration, content governance, accessibility, CI/CD, and AI-assisted delivery discipline.

One non-blocking visual observation remains for that final pass: the upper-right homepage focus rail may feel slightly open above its horizontal rule. Do not add decoration merely to fill space.

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

## Other directional work

Potential later work, only when evidence justifies it:

- periodically refresh professional case studies after meaningful career changes;
- Cloud Foundations writing series;
- social/Open Graph preview artwork if it materially improves sharing;
- richer topic/category discovery when archive volume justifies it;
- periodic Lighthouse/performance review;
- consider a custom domain when it improves professional presentation enough to justify the change.

## Continuous portfolio operations

Ongoing work should include:

- publish new writing when there is a useful topic, not to satisfy a calendar;
- periodically review featured content and professional positioning;
- maintain dependencies and CI/browser quality gates;
- review external links and time-sensitive technical claims;
- remove stale assets/claims/technologies;
- keep public documentation useful as SDLC/AI-delivery evidence while excluding private project memory;
- use sprint records for material redesign, migration, content-system, or publication arcs rather than every minor edit;
- archive closed sprint records after the 30-day recent-history window so execution history does not crowd current authority;
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
- no tracked private personal/job-search memory in the public repository.
