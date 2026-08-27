# P11 — Prompt. Prove. Ship. Editorial Continuation

Status: **ACTIVE — OWNER ARTICLE REVIEW GATE NEXT**  
Opened: 2026-08-27  
Owner: Mike Gilmore  
Repository: `contactgilmore/contactgilmore.github.io`  
Roadmap Horizon: **H2 — Sustained professional signal and editorial proof**  
Product Goal: **PG-2**  
Working branch: `p11-prompt-prove-ship-editorial-continuation`  
Draft PR: **#43**  
Activation base: `ba9eac79873f5224e6f4ecdb664d1fbb386bbbd3`  
Consumed central snapshot: `065c670ea96878d2d21f065908d6b66d49c16dc2`

## Sprint Goal

Prove the low-owner-friction publishing model by selecting, researching, drafting, validating, and presenting the next **Prompt. Prove. Ship.** installment for owner approval while bringing the portfolio onto the current one-roadmap/deterministic-startup governance hierarchy.

## Why P11 exists

P7 established GPT-assisted publishing. P9 established the durable long-form voice/quality standard. P10 completed the employer-facing site finish line. The next useful product increment is not another redesign; it is to prove that Writing can continue with GPT carrying the routine editorial workload and Mike acting mainly as the final public editorial gate.

P11 also owns the small continuity repairs directly required to make that model reliable for future GPT sessions. It does not reopen the accepted core portfolio.

## P11-WP0 — Deterministic startup and editorial-system reconciliation — COMPLETE

Objective: align the portfolio with current central Development Governance and remove stale current-state assumptions before a new article becomes publishable.

Accepted changes:

- canonical roadmap migrated from root `ROADMAP.md` to `00_MASTER/PRODUCT_ROADMAP.md`;
- H2 / PG-2 / P11 startup chain made explicit in Master/living authority;
- stale P10-active product backlog language reconciled;
- local Repository Governance snapshot/settings facts reconciled to current central/live truth;
- `scripts/check_governance.py` moved from closed GOV-2E campaign tokens to current roadmap/sprint/settings invariants;
- Astro catch-all route generation now excludes `draft: true` posts.

Checkpoint head:

`11cceb19bd4de54b0d2a45f8e579cbc492acf3fc`

Proof:

```text
Portfolio governance check run 33103394319 = SUCCESS
Validate Astro migration run 33103394300 = SUCCESS
Playwright portfolio smoke run 33103394302 = SUCCESS
```

A first governance attempt (`33103301762`) failed because the active sprint did not contain the newly required central snapshot token. The authority was corrected once; the quality gate was not weakened.

## P11-WP1 — Context Is Part of the System — OWNER REVIEW CANDIDATE

Selected article:

```text
#1. Prompt. Prove. Ship.: Context Is Part of the System
source = src/content/blog/2026-08-27-prompt-prove-ship-context.md
planned slug = /prompt-prove-ship-context/
seriesOrder = 1
draft = true
publishedAt = intentionally absent
thumbnail = /assets/images/blog2026/082026/prompt-prove-ship-context.svg
```

### Editorial objective

Teach a practical, vendor-neutral context architecture for AI agents: thin entry instructions route to durable authority, current roadmap/sprint state, task-specific evidence, and live system truth instead of duplicating the entire project into one prompt.

The article deliberately leaves detailed allowed/no-touch scope, acceptance criteria, and stop-condition design for the next installment, **Plan Before Edit**.

### Source pack

Current first-party sources checked on 2026-08-27:

- OpenAI Codex `AGENTS.md` guidance: `https://learn.chatgpt.com/docs/agent-configuration/agents-md`
- GitHub Copilot repository/path/agent instructions: `https://docs.github.com/en/copilot/how-tos/configure-custom-instructions-in-your-ide/add-repository-instructions-in-your-ide`
- Cursor Rules / `AGENTS.md`: `https://prod.cursor.com/docs/rules`

Current product details are examples only. The durable article claim is that agent context should be recoverable from project authority rather than reconstructed from one chat or duplicated across tool-specific files.

### Voice review

The draft was shaped after sampling the established internal references named by P9, including Rundeck, New Relic, PagerDuty, Git, Terraform, GitHub Actions, Cursor, and recent long-form Git to Know You entries.

Target authorial signals preserved:

- direct beginner-friendly opening;
- one central mental model;
- practical judgment rather than source-summary prose;
- short cohesive paragraphs with intentional variation;
- earned analogy/humor rather than repeated AI-style rhetorical devices;
- explicit warning against over-documenting small repositories;
- no invented tool use, incidents, customer stories, screenshots, or metrics.

### Candidate publication boundary

Until owner approval:

```text
draft: true
no generated article route
not listed on Writing
not featured on Home
not present in series navigation
no publishedAt fabrication
PR remains draft
```

`tests/prompt-prove-ship.spec.ts` contains explicit draft-isolation regression coverage for these surfaces.

### Owner gate

Mike reviews the exact article copy and wordless concept thumbnail after exact-head automated proof passes. Routine corrections remain delegated if they do not materially change the article's public thesis/voice or protected scope.

## P11-WP2 — Publication and production proof — BLOCKED ON OWNER APPROVAL

After owner approval only:

- resolve the truthful final publication date;
- remove `draft: true` or set it false;
- do not fabricate `publishedAt`; add it only for a real ordering need with a known first-publication instant;
- replace draft-isolation expectations with published-route/archive/series/accessibility expectations;
- run exact-head governance/build/browser/axe/link/asset proof;
- review exact changed files;
- mark PR ready only after all gates pass;
- squash merge under the repository production contract;
- verify automatic GitHub Pages deployment and affected live surfaces;
- close P11 and reconcile roadmap/living state/series status.

## Allowed paths

P11 may modify only the smallest necessary set under:

```text
00_MASTER/
docs/product/contactgilmore-portfolio/04_BACKLOG_AND_RISKS.md
docs/editorial/NEXT_SERIES_FOUNDATION.md
docs/repository-governance/00_REPOSITORY_GOVERNANCE_DOCTRINE.md
docs/repository-governance/github/01_REPOSITORY_SETTINGS_AND_SECURITY.md
docs/sprints/SPRINT_P11_PROMPT_PROVE_SHIP_EDITORIAL_CONTINUATION_2026-08-27.md
scripts/check_governance.py
src/pages/[...slug].astro
src/content/blog/2026-08-27-prompt-prove-ship-context.md
public/assets/images/blog2026/082026/prompt-prove-ship-context.svg
tests/prompt-prove-ship.spec.ts
ROADMAP.md only for completed removal after canonical migration
```

If another path is genuinely required to make claim-matching proof pass, record the reason here before widening.

## Protected / no-touch paths and facts

```text
historical blog article bodies / original dates / slugs
existing compatibility routes
P10-approved Home / Work / case studies / About / Resume content
shared site visual system except the new article-specific asset
production deploy trigger semantics
public GitHub-hosted runner trust boundary
private sibling-repository content
private job-search, personal, financial, health, or infrastructure-security context
```

## Current proof gate

The article transaction must pass on its exact candidate head:

- Portfolio governance check;
- Astro build/content validation;
- public asset and route/link checks;
- Playwright draft-isolation and existing responsive regressions;
- accessibility checks on unchanged published Prompt. Prove. Ship. surfaces;
- exact changed-file review.

If the draft source itself is not publicly rendered because isolation works, editorial review occurs from the tracked Markdown and thumbnail source rather than weakening the draft boundary.

## Risks and stop conditions

Stop rather than invent or widen scope if:

- a useful article requires an unsupported first-person implementation story;
- current sources materially undermine the selected thesis;
- private sibling-project details would need to be exposed;
- the article becomes a generic product feature tour;
- the scope turns into a site redesign or rewrite of existing corpus;
- draft isolation cannot be proven;
- an owner-reserved product/editorial/security/paid-service decision appears.
