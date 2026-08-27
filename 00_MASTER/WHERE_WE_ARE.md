# Where We Are

Status: active living state  
Updated: 2026-08-27

## Current repository authority

```text
repository = contactgilmore/contactgilmore.github.io
production branch = main
main at P11 activation = ba9eac79873f5224e6f4ecdb664d1fbb386bbbd3
current main = resolve from live GitHub at startup
working branch = p11-prompt-prove-ship-editorial-continuation
current PR = #43 — DRAFT / DO NOT MERGE UNTIL OWNER ARTICLE APPROVAL
hosting = GitHub Pages
build = Astro static HTML
CENTRAL_REPOSITORY_GOVERNANCE = REQUIRED
CENTRAL_DEVELOPMENT_GOVERNANCE = REQUIRED
CENTRAL_AUGUSTA_METHOD_BRAND = NOT_APPLICABLE
consumed central snapshot = 065c670ea96878d2d21f065908d6b66d49c16dc2
```

Live GitHub must be reconciled again before any later mutation or merge.

## Product position

Portfolio 2.0 is live and stable. P10 — Employer Readiness and Final Portfolio Polish — is **COMPLETE / OWNER APPROVED / DEPLOYED**.

Accepted P10 production anchor:

```text
P10 PR = #31
production merge = 99bcd3a82cc37a99350d6eae2171b053d8f27199
Pages run = 31464158531 — SUCCESS
Validate run = 31464158520 — SUCCESS
Playwright run = 31464158526 — SUCCESS
Playwright = 140 passed / 4 intentional skips / 0 failures
historical production artifact = 9090915653
```

Home, Work, the three professional case studies, About, Resume, the shared visual system, and the P9 long-form house standard remain accepted. The default for those surfaces is stability rather than cosmetic churn.

## Canonical roadmap state

```text
canonical roadmap = 00_MASTER/PRODUCT_ROADMAP.md
Roadmap Horizon = H2 — Sustained professional signal and editorial proof — ACTIVE
Product Goal = PG-2 — ACTIVE
current sprint = P11 — Prompt. Prove. Ship. Editorial Continuation — ACTIVE
current work package = P11-WP1 — Context Is Part of the System — OWNER REVIEW CANDIDATE
```

P11 is the first deliberate continuation of the **Prompt. Prove. Ship.** series after its published introduction. It is also the proving ground for the intended low-owner-friction publishing model: GPT selects/researches/drafts/verifies useful articles; Mike primarily reviews and approves public representation.

## P11 setup proof

The deterministic startup/editorial-system reconciliation is complete on checkpoint head `11cceb19bd4de54b0d2a45f8e579cbc492acf3fc`.

```text
Portfolio governance check run 33103394319 = SUCCESS
Validate Astro migration run 33103394300 = SUCCESS
Playwright portfolio smoke run 33103394302 = SUCCESS
```

A prior governance run (`33103301762`) correctly failed because `ACTIVE_SPRINT.md` lacked the new central snapshot token. The authority was corrected once and the full checkpoint passed; no quality gate was weakened.

Resolved continuity defects:

1. canonical roadmap migrated from root `ROADMAP.md` to `00_MASTER/PRODUCT_ROADMAP.md`;
2. stale P10-active product backlog language reconciled;
3. governance validator moved from closed GOV-2E campaign tokens to current roadmap/sprint/settings invariants;
4. `draft: true` article content is excluded from catch-all route generation as well as Writing/home/series discovery;
5. live repository settings were reconciled to the already-correct squash-only/delete-merged-branch posture.

## Current Writing authority

The completed **Git to Know You #1–#10** series remains historical published content. P9 remains the durable long-form voice/quality authority through:

`docs/editorial/AI_ASSISTED_PUBLISHING_WORKFLOW.md`

Current series foundation:

`docs/editorial/NEXT_SERIES_FOUNDATION.md`

Published series introduction:

```text
Prompt. Prove. Ship.: From Chat to Change
slug = /prompt-prove-ship/
seriesOrder = 0
```

Current draft candidate:

```text
#1. Prompt. Prove. Ship.: Context Is Part of the System
source = src/content/blog/2026-08-27-prompt-prove-ship-context.md
planned slug = /prompt-prove-ship-context/
seriesOrder = 1
draft = true
publishedAt = intentionally absent
owner publication gate = PENDING
```

The article teaches a durable vendor-neutral idea: increasingly autonomous agents need recoverable, layered project context rather than one giant prompt or chat-dependent memory. Current first-party Codex, GitHub Copilot, and Cursor documentation provides contemporary examples; the article teaches the operating model rather than a product feature tour.

## Current owner gate

The draft article and its wordless concept thumbnail are the next genuine owner-review surfaces. Automated draft-isolation, build, browser, accessibility, link, and asset evidence must pass on the exact article candidate head before the draft can be considered ready for approval.

Do not remove draft status, fabricate `publishedAt`, mark the PR ready, or merge until Mike approves the public article/visual representation.

## Public-safety boundary

Do not publish private correspondence, customer identities, proprietary employer/customer artifacts, credentials, private infrastructure/security details, private addresses/phone numbers, health/financial information, unsupported metrics, private job-search context, or invented first-person experience.
