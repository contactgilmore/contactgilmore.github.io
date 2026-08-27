# P11 — Prompt. Prove. Ship. Editorial Continuation

Status: **ACTIVE**  
Opened: 2026-08-27  
Owner: Mike Gilmore  
Repository: `contactgilmore/contactgilmore.github.io`  
Roadmap Horizon: **H2 — Sustained professional signal and editorial proof**  
Product Goal: **PG-2**  
Working branch: `p11-prompt-prove-ship-editorial-continuation`  
PR: **#43**  
Activation base: `ba9eac79873f5224e6f4ecdb664d1fbb386bbbd3`  
Consumed central snapshot: `065c670ea96878d2d21f065908d6b66d49c16dc2`

## Sprint Goal

Prove that the technical blog can continue with GPT carrying routine editorial/project work while Mike primarily reviews and approves the real public representation.

## P11-WP0 — Deterministic startup and editorial-system reconciliation — COMPLETE

Accepted outcomes:

- canonical roadmap moved to `00_MASTER/PRODUCT_ROADMAP.md` and parallel root roadmap retired;
- H2 / PG-2 / P11 startup hierarchy made deterministic;
- stale P10/GOV-2E living-state contradictions removed;
- current central and repository-settings facts reconciled;
- governance validation moved to current roadmap/sprint invariants;
- `draft: true` posts are excluded from normal generated article routes and discovery.

Accepted checkpoint:

```text
head = 11cceb19bd4de54b0d2a45f8e579cbc492acf3fc
Portfolio governance check 33103394319 = SUCCESS
Validate Astro migration 33103394300 = SUCCESS
Playwright portfolio smoke 33103394302 = SUCCESS
```

## P11-WP1 — Context Is Part of the System — OWNER APPROVED

Article:

```text
#1. Prompt. Prove. Ship.: Context Is Part of the System
source = src/content/blog/2026-08-27-prompt-prove-ship-context.md
slug = /prompt-prove-ship-context/
seriesOrder = 1
thumbnail = /assets/images/blog2026/082026/prompt-prove-ship-context.svg
owner approval = 2026-08-27
```

### Editorial assessment

The approved draft is the right length for the current long-form corpus. Its opening has the direct voice found in the strongest Git/Terraform/Cursor pieces, the article stays centered on one context-architecture mental model, and the ending creates a natural transition into **Plan Before Edit** rather than pre-writing that article.

No personal experience, customer story, metric, or screenshot was invented. Current first-party OpenAI Codex, GitHub Copilot, and Cursor instruction documentation was used as contemporary evidence for a vendor-neutral operating idea.

## Owner-review workflow learned and retained

P11 exposed a missing operational step: a Markdown diff is not a sufficient owner editorial surface for a visual portfolio article.

Accepted workflow:

```text
GPT prepares article + thumbnail + branch/PR
-> article remains draft: true
-> normal build/public routes exclude the draft
-> Mike checks out the PR branch locally
-> npm run review:drafts
-> Mike reviews the actual Astro page at its intended route
-> editorial/visual approval or notes
-> GPT removes draft status and runs publishable exact-head proof
```

`npm run review:drafts` is review-only. Normal `npm run dev`, builds, CI, and production retain draft exclusion. The initial preview implementation failed because `getStaticPaths()` could not see an outer-scope review flag; the implementation was corrected at the source rather than weakening the draft boundary.

## Local repository hygiene learned and retained

Owner review also exposed thousands of generated local files in GitHub Desktop. They were not intended source changes.

The repository now ignores local/generated output including:

```text
node_modules/
.astro/
dist/
test-results/
playwright-report/
.DS_Store
```

GitHub remains source authority; generated local build output is disposable and must not be committed merely because a local review/build created it.

## P11-WP2 — Publication and production proof — OWNER AUTHORIZED / ACTIVE

Publication transaction requirements:

- remove draft status;
- retain truthful publication date `2026-08-27`;
- do not fabricate `publishedAt` when no real ordering need exists;
- make the new article discoverable on Writing, Home featured content, and series navigation;
- add published-route and accessibility regression proof;
- run exact-head governance, Astro/content/link/asset, and Playwright proof;
- review the exact diff and expected PR head;
- mark PR ready and squash merge only after all proof passes;
- verify automatic Pages deployment and the live article.

## P11-WP3 — Plan Before Edit — NEXT AFTER PRODUCTION PROOF

Primary question:

How do you define what an AI agent may change before it starts editing?

Planned focus:

- allowed scope;
- no-touch boundaries;
- acceptance criteria;
- stop conditions;
- why boundary writing matters more as agent autonomy grows.

Topic order remains editorial direction, not a forced calendar.

## Allowed paths

P11 may modify the smallest necessary set under:

```text
00_MASTER/
.gitignore
package.json
docs/product/contactgilmore-portfolio/04_BACKLOG_AND_RISKS.md
docs/editorial/NEXT_SERIES_FOUNDATION.md
docs/repository-governance/
docs/sprints/SPRINT_P11_PROMPT_PROVE_SHIP_EDITORIAL_CONTINUATION_2026-08-27.md
scripts/check_governance.py
src/pages/[...slug].astro
src/content/blog/2026-08-27-prompt-prove-ship-context.md
public/assets/images/blog2026/082026/prompt-prove-ship-context.svg
tests/prompt-prove-ship.spec.ts
```

## Protected boundaries

Do not alter historical article identity, P10-approved core portfolio copy/design, production deployment semantics, public-runner trust boundaries, or private context as a side effect.
