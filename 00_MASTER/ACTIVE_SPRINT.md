# Active Sprint

Status: **ACTIVE**  
Updated: 2026-08-27

## P11 — Prompt. Prove. Ship. Editorial Continuation

```text
Roadmap = 00_MASTER/PRODUCT_ROADMAP.md
Roadmap Horizon = H2 — Sustained professional signal and editorial proof
Product Goal = PG-2
Sprint = P11 — Prompt. Prove. Ship. Editorial Continuation
Sprint record = docs/sprints/SPRINT_P11_PROMPT_PROVE_SHIP_EDITORIAL_CONTINUATION_2026-08-27.md
Working branch = p11-prompt-prove-ship-editorial-continuation
PR = #43
Activation base = ba9eac79873f5224e6f4ecdb664d1fbb386bbbd3
Consumed central snapshot = 065c670ea96878d2d21f065908d6b66d49c16dc2
Current branch/head/Actions = resolve from live GitHub
```

## Sprint Goal

Prove the low-owner-friction **Prompt. Prove. Ship.** publishing model: GPT selects, researches, drafts, verifies, and maintains the publication transaction; Mike reviews the real rendered page and approves public representation.

## Current work package

**P11-WP2 — Publish Context Is Part of the System — OWNER APPROVED / RELEASE TRANSACTION**

Article:

```text
#1. Prompt. Prove. Ship.: Context Is Part of the System
source = src/content/blog/2026-08-27-prompt-prove-ship-context.md
slug = /prompt-prove-ship-context/
seriesOrder = 1
publication date = 2026-08-27
thumbnail = /assets/images/blog2026/082026/prompt-prove-ship-context.svg
owner editorial/visual approval = RECEIVED 2026-08-27
publishedAt = intentionally absent; no ordering need requires fabrication
```

Editorial review concluded that the article length, tone, structure, and transition are appropriate for the established portfolio corpus. The article stays on one mental model and leads directly into **Plan Before Edit** without absorbing that topic.

## Durable review workflow learned in P11

Candidate articles remain `draft: true` until owner approval. Normal Astro builds and public routes exclude drafts. For owner editorial review, use the actual site locally with:

```text
npm run review:drafts
```

This review mode exposes draft routes only in the local review process so Mike can evaluate the real layout, typography, thumbnail, navigation, and article flow before publication. A failed preview is a source defect to fix, not a reason to weaken draft isolation.

Local generated output is not source authority. `.astro/`, `dist/`, `node_modules/`, Playwright output, and `.DS_Store` are ignored so GitHub Desktop stays focused on intentional source changes.

## Next work package

After exact-head publication proof, merge, and production verification, advance P11 to:

**P11-WP3 — Plan Before Edit**

Primary topic: allowed/no-touch scope, acceptance criteria, stop conditions, and why boundary writing matters before an agent edits a real system.

## Protected / no-touch scope

Do not reopen historical articles, P10-approved Home/Work/case-study/About/Resume content, shared visual design, production deploy semantics, or the public-runner trust boundary as a side effect of this writing sprint.

## Release gates

Before merge:

- article is publishable rather than draft-only;
- current first-party source claims remain valid;
- governance, Astro/content/link/asset, Playwright responsive, and accessibility proof pass on the exact head;
- exact changed-file/material review passes;
- PR head still matches the reviewed head.

## Owner gate

The P11-WP2 owner gate is satisfied. Further owner approval is not required for routine exact-scope CI repair, merge, or production verification unless the public article/visual changes materially from the approved candidate.
