# ContactGilmore Portfolio Product Roadmap

Status: active canonical roadmap  
Updated: 2026-08-27  
Canonical path: `00_MASTER/PRODUCT_ROADMAP.md`

## North star

Maintain `contactgilmore.github.io` as a polished professional portfolio and technical writing platform that communicates Mike Gilmore's value quickly, demonstrates credible professional proof, and serves as a public example of disciplined AI-assisted software delivery.

The portfolio should remain useful to recruiters, hiring managers, technical leaders, implementation/professional-services teams, customer-facing technical organizations, and engineers interested in the writing.

## Product hierarchy

This is the repository's **one canonical roadmap**.

```text
Product Roadmap
-> Roadmap Horizon
-> Product Goal
-> Sprint Goal
-> Work Package
-> proof / owner decision / production increment
```

Sprint records under `docs/sprints/` advance goals defined here. Do not create another roadmap, roadmap-like plan, series plan, campaign plan, or strategy document.

## Current product position

Primary professional identity:

```text
Technical Delivery & Customer Solutions
```

Supporting role territory:

```text
Implementation / Professional Services
Technical Success
Solutions / Customer Engineering
Technical Program or Systems Delivery
```

Top-level visitor structure:

```text
Home / Work / Writing / About / Resume
```

Primary professional proof remains the three curated public-safe case studies under Work. Writing supports that proof by demonstrating technical depth, communication, judgment, and a disciplined AI-assisted publishing process; it must not displace employer-facing evidence.

## Roadmap Horizon H1 — Portfolio 2.0 foundation and employer readiness — COMPLETE

**Product Goal PG-1 — Establish a polished, public-safe, employer-ready portfolio with credible professional proof and a durable technical-writing system.**

Completed delivery sprints/phases:

```text
P1  Foundation and Astro migration
P2  Positioning and information architecture
P3  Visual design system
P4  Professional case studies and content refresh
P5  Quality, discoverability, and launch
P6  Recruiter proofread, voice, and case-study polish
P7  Blog editorial system and AI-assisted publishing
P8  Portfolio quality ratchet and series transition
P9  Editorial voice and full-blog quality
P10 Employer readiness and final portfolio polish
```

H1 accepted outcomes include Astro/TypeScript static production on GitHub Pages, stable historical blog URLs/publication dates, responsive/browser/accessibility coverage, public-safe AI-assisted repository workflow, three employer-facing case studies, scan-first Resume, the completed **Git to Know You #1–#10** series, the **Prompt. Prove. Ship.** introduction, the P9 long-form house standard, and P10's conclusion that the core portfolio does not need another redesign.

Historical detail belongs in the P1–P10 sprint records and Git history rather than expanding this roadmap indefinitely.

## Roadmap Horizon H2 — Sustained professional signal and editorial proof — ACTIVE

**Product Goal PG-2 — Keep the portfolio professionally current and publish a small number of high-value technical articles with GPT handling the repeatable editorial workload while Mike primarily reviews and approves public representation.**

### Why this goal exists

The core portfolio is stable. The highest-value ongoing work is not cosmetic redesign; it is maintaining accurate professional proof and demonstrating useful technical thinking over time.

The Writing system uses this operating model:

```text
repository authority
-> GPT topic/research decision
-> bounded sprint/work package
-> source pack
-> draft in established voice
-> technical + editorial proof
-> real-page owner review/approval
-> controlled merge/deploy
-> production verification
-> durable closeout
```

GPT should not ask Mike to supply routine article ideas, outlines, metadata, source research, branch mechanics, or test-driving steps that repository authority can resolve. Mike remains the public editorial gate.

### P11 — Prompt. Prove. Ship. editorial continuation — COMPLETE

Sprint record:

`docs/sprints/SPRINT_P11_PROMPT_PROVE_SHIP_EDITORIAL_CONTINUATION_2026-08-27.md`

P11 proved the low-owner-friction publishing model and reconciled the portfolio to the current one-roadmap/deterministic-startup hierarchy.

Accepted public increment:

```text
#1. Prompt. Prove. Ship.: Context Is Part of the System
slug = /prompt-prove-ship-context/
seriesOrder = 1
publication date = 2026-08-27
PR = #43
production merge = 736d0171b9905efcc442e5d0dc69eb90a0602fd6
Pages deployment = 33108684844 — SUCCESS
```

Accepted P11 operational outcomes include fail-closed `draft: true` routing, local real-page review through `npm run review:drafts`, generated-file ignore hygiene, exact-head CI/production proof, and the rule that test fixes must not silently weaken unrelated regression coverage.

There is **no active implementation sprint** immediately after P11 closeout.

### Next strongest H2 candidate — Plan Before Edit

If current evidence still supports it at the next startup, open a new bounded sprint for:

**Plan Before Edit** — allowed scope, no-touch boundaries, acceptance criteria, stop conditions, and why boundary writing matters before an AI agent edits a real system.

Do not treat this candidate as already active and do not publish merely to maintain cadence.

### Prompt. Prove. Ship. sequencing principles

The series remains bounded and value-driven rather than calendar-driven. The intro is `seriesOrder: 0`; numbered installments are selected one at a time based on reader value and source quality.

Current directional learning path:

1. **Context Is Part of the System** — PUBLISHED.
2. **Plan Before Edit** — next strongest candidate.
3. **The Agent Finished Is Not Evidence** — tests, browser evidence, source verification, and claim-matching proof.
4. **Give Tools Less Trust, Not Less Usefulness** — permissions, connectors/MCP, credentials, public/private boundaries, destructive operations.
5. **Review Is a Release Control** — branches, pull requests, expected-head checks, owner judgment, deployment/rollback/closeout.

AI-assisted troubleshooting and multi-agent/background work remain later candidates. This list is directional, not a publication promise. Reorder, combine, pause, replace, or stop when evidence says a different article better serves PG-2.

## Roadmap Horizon H3 — Future expansion — PLANNED / NOT ACTIVE

Possible future work only when evidence justifies it:

- meaningful new professional experience or public-safe case-study proof;
- a focused **Cloud Foundations** writing arc that teaches durable concepts rather than cataloging AWS services;
- category/topic discovery improvements if Writing volume becomes genuinely hard to scan;
- performance/accessibility/discoverability work supported by evidence;
- dependency/security/browser maintenance;
- alternate static hosting only if it materially improves privacy, reliability, workflow, or professional presentation without breaking URLs.

Do not activate H3 merely because H2 pauses between useful articles.

## Continuous portfolio operations

Ongoing maintenance should include:

- keep time-sensitive technical claims and external links current;
- preserve original article publication dates and public slugs;
- periodically review featured writing after meaningful new publications;
- keep dependencies and CI/browser checks healthy;
- remove stale assets/claims only with evidence;
- keep living state aligned with actual GitHub/production truth;
- archive closed sprint records after the central 30-day recent-history window;
- use public documentation as professional SDLC evidence without turning it into private project memory;
- prefer stability over cosmetic churn on Home, Work, About, Resume, and the shared design system.

## Explicit non-goals

- no forced article cadence;
- no content published merely to look active;
- no second roadmap or parallel series plan;
- no redesign without evidence of a real problem;
- no CMS/database/React dependency without a proven product need;
- no artificial publication-date refreshing;
- no invented personal experience, customer stories, or metrics;
- no public exposure of private project/job-search/infrastructure context;
- no unreviewed production merge;
- no private self-hosted runner exposure for this public repository.
