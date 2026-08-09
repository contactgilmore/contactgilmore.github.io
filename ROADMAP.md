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

- typed Astro content schema and historical URL/date preservation;
- living Git to Know You series overview;
- refreshed original series articles;
- explicit `updated`, `slug`, `series`, `seriesOrder`, and `seriesStatus` metadata;
- previous/next series navigation;
- public-safe AI-assisted publishing workflow;
- expanded article/archive responsive Playwright and accessibility coverage;
- owner local smoke testing before merge.

P7 source merge: `5af373ab34a2ea1fd4692dc271fc1063b99f11f8`.

Release policy was then simplified so approved merges to `main` automatically deploy GitHub Pages. Policy merge: `88d4a34d63234416f73ba4771cc9839359d5196a`. First automatic deployment run `31280952066` succeeded.

## Completed first writing series — Git to Know You #1–#10

Git to Know You is now the first complete portfolio writing series. It remains a public beginner-friendly learning path, but the roadmap does not manufacture #11 simply to continue numbering.

### #8 Kubernetes — PUBLISHED

```text
PR: #19
production merge: 3986eab790441506eb8e34d31a7d51bbab4bcea3
automatic Pages deployment run: 31284483589
owner local Playwright smoke: 90 / 90 passed
```

The owner smoke caught timezone-dependent date rendering that UTC CI did not expose; the fix preserved historical source dates and made calendar-date rendering deterministic.

### #9 OpenTelemetry — PUBLISHED

```text
PR: #21
production merge: 40d171466381516c6dd57da3ff5964ad0f2300a0
automatic Pages deployment run: 31286854414
owner local Playwright smoke: 99 / 99 passed
```

Owner visual review caught a logo-thumbnail presentation issue despite green automated tests. The final release established authoritative SVG artwork and a contained 16:9 logo-card treatment; raster fallback should be 1600×900 or larger with generous whitespace.

### #10 Argo CD / GitOps — PUBLISHED

```text
PR: #23
production merge: 6668237614720202adec43cd0feadd6dc36ce2af
automatic Pages deployment run: 31287772916
owner local Playwright smoke: 108 / 108 passed
```

The release completed the cloud-native learning arc, refreshed the living series overview through #10, used authoritative CNCF Argo vector artwork, and extended series/browser/accessibility regression coverage.

## P8 — Portfolio Quality Ratchet and Series Transition — ACTIVE

Sprint authority:

`docs/sprints/SPRINT_P8_PORTFOLIO_QUALITY_RATCHET_AND_SERIES_TRANSITION_2026-08-08.md`

P8 exists to consolidate quality rather than increase publishing volume.

Work packages:

1. close Git to Know You cleanly and reconcile stale roadmap/domain backlog items;
2. harden deterministic startup/execution/publishing guidance so GPT continues routine bounded work autonomously until a genuine owner decision/local-only proof/production gate;
3. preserve exact-head CI/browser/accessibility quality while minimizing owner manual effort and presenting concise mobile-friendly gates;
4. resolve the known MacBook-class homepage hero typography backlog with browser evidence;
5. standardize sprint execution records under `docs/sprints/` with a 30-day recent-record window and historical-only archive;
6. establish the next writing-series foundation and publish one owner-approved intro/sneak-peek only;
7. complete full responsive/accessibility/public-disclosure closeout.

Owner decisions now resolved:

- MacBook homepage hero calibration: **APPROVED**;
- next series: **Prompt. Prove. Ship.**;
- series direction: **AI-assisted engineering without outsourcing judgment**;
- publish one series introduction/sneak-peek in P8;
- do not publish numbered follow-on Prompt. Prove. Ship. articles until P8 is closed and the next focused content sprint is opened deliberately.

## Next writing arc — Prompt. Prove. Ship.

**Prompt. Prove. Ship.** moves the Writing section from introductory tool education into the engineering operating model around increasingly capable AI agents.

Series promise:

> How do you use AI agents to move technical work faster without giving up context, verification, security boundaries, review, or human ownership?

Durable topic themes, not yet fixed article numbers or dates:

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

After the next focused Prompt. Prove. Ship. update arc:

1. pause new content;
2. perform one deliberate employer-facing final pass across Home / Work / Writing / About / Resume;
3. evaluate recruiter scanability, web-administration quality, responsive behavior, accessibility, metadata/discoverability, broken links, public safety, visual consistency, and unnecessary documentation/assets;
4. resolve only material issues found by that review;
5. publish the accepted final polish;
6. enter a stability period and avoid cosmetic churn until new career evidence, a real defect, or a meaningful content need justifies another change.

The portfolio should be credible when inspected as both a professional profile and a working example of web administration, content governance, accessibility, CI/CD, and AI-assisted delivery discipline.

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

- publish new writing through the typed content schema and AI-assisted publishing workflow when there is a useful topic, not to satisfy a calendar;
- periodically review featured content and professional positioning;
- maintain dependencies and CI/browser quality gates;
- review external links and time-sensitive technical claims;
- remove stale assets/claims/technologies;
- keep public documentation useful as SDLC/AI-delivery evidence while excluding private project memory;
- use sprint records for material redesign, migration, content-system, or publication arcs rather than every minor edit;
- archive closed sprint records after the 30-day recent-history window so execution history does not crowd current authority;
- treat merge to `main` as the human production authorization and verify the automatic Pages deployment afterward;
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
