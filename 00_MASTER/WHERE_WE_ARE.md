# Where We Are

Status: active living state  
Updated: 2026-08-27

## Current repository authority

```text
repository = contactgilmore/contactgilmore.github.io
production branch = main
current main = resolve from live GitHub at startup
working branch = p11-prompt-prove-ship-editorial-continuation
current PR = #43
hosting = GitHub Pages
build = Astro static HTML
CENTRAL_REPOSITORY_GOVERNANCE = REQUIRED
CENTRAL_DEVELOPMENT_GOVERNANCE = REQUIRED
CENTRAL_AUGUSTA_METHOD_BRAND = NOT_APPLICABLE
consumed central snapshot = 065c670ea96878d2d21f065908d6b66d49c16dc2
```

## Product position

Portfolio 2.0 is live and stable. P10 — Employer Readiness and Final Portfolio Polish — remains **COMPLETE / OWNER APPROVED / DEPLOYED**. Home, Work, professional case studies, About, Resume, and the shared visual system stay in stability posture unless new evidence justifies change.

Accepted P10 production anchor:

```text
P10 PR = #31
production merge = 99bcd3a82cc37a99350d6eae2171b053d8f27199
Pages run = 31464158531 — SUCCESS
Validate run = 31464158520 — SUCCESS
Playwright run = 31464158526 — SUCCESS
historical production artifact = 9090915653
```

## Roadmap state

```text
canonical roadmap = 00_MASTER/PRODUCT_ROADMAP.md
Roadmap Horizon = H2 — Sustained professional signal and editorial proof — ACTIVE
Product Goal = PG-2 — ACTIVE
current sprint = P11 — Prompt. Prove. Ship. Editorial Continuation — ACTIVE
current work package = P11-WP2 — publish Context Is Part of the System
next work package = P11-WP3 — Plan Before Edit
```

## Writing state

The completed **Git to Know You #1–#10** series remains published history. P9 remains the long-form voice/quality authority through `docs/editorial/AI_ASSISTED_PUBLISHING_WORKFLOW.md`.

**Prompt. Prove. Ship.** now has:

```text
series introduction = Prompt. Prove. Ship.: From Chat to Change
seriesOrder 0 = /prompt-prove-ship/

#1 = Context Is Part of the System
seriesOrder 1 = /prompt-prove-ship-context/
owner editorial/visual approval = RECEIVED 2026-08-27
publication transaction = AUTHORIZED

next = Plan Before Edit
```

Editorial review found #1 appropriate in length, tone, structure, and flow. It opens with a direct practical thesis, stays centered on recoverable context rather than becoming a product feature tour, and intentionally ends at the boundary question that **Plan Before Edit** will own.

## Publishing workflow learned in P11

A tracked Markdown draft is not the best owner-review surface for a visual portfolio article. The durable review model is:

```text
draft: true
-> normal build/public route excludes draft
-> npm run review:drafts exposes the draft only for local editorial review
-> Mike reviews the actual Astro page
-> owner notes/approval
-> GPT makes the candidate publishable and runs exact-head proof
```

The first preview implementation failed due to Astro `getStaticPaths()` scope; the implementation was corrected without weakening draft isolation. This is retained as an operational lesson: review tooling must fail closed and source defects are repaired at the source.

Local review also exposed generated-file noise in GitHub Desktop. `.astro/`, `dist/`, `node_modules/`, Playwright output, and `.DS_Store` are disposable local output and are now ignored rather than treated as source changes.

## Public-safety boundary

Do not publish private correspondence, customer identities, proprietary employer/customer artifacts, credentials, private infrastructure/security details, private addresses/phone numbers, health/financial information, unsupported metrics, private job-search context, or invented first-person experience.
