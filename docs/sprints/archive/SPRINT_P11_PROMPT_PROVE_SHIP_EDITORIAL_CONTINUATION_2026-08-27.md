# P11 — Prompt. Prove. Ship. Editorial Continuation

Status: **COMPLETE / OWNER APPROVED / MERGED / DEPLOYED / PRODUCTION VERIFIED**  
Opened: 2026-08-27  
Closed: 2026-08-27  
Owner: Mike Gilmore  
Repository: `contactgilmore/contactgilmore.github.io`  
Roadmap Horizon: **H2 — Sustained professional signal and editorial proof**  
Product Goal: **PG-2**  
Working branch: `p11-prompt-prove-ship-editorial-continuation` — merged/deleted by repository lifecycle  
PR: **#43 — MERGED**  
Activation base: `ba9eac79873f5224e6f4ecdb664d1fbb386bbbd3`  
Production merge: `736d0171b9905efcc442e5d0dc69eb90a0602fd6`  
Consumed central snapshot: `065c670ea96878d2d21f065908d6b66d49c16dc2`

## Sprint Goal

Prove that the technical blog can continue with GPT carrying routine editorial/project work while Mike primarily reviews and approves the real public representation.

**Outcome: ACCEPTED.** P11 published the first numbered **Prompt. Prove. Ship.** installment, reconciled deterministic startup/roadmap authority, established fail-closed draft review, retained local repository hygiene, and completed production proof.

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

## P11-WP1 — Context Is Part of the System — COMPLETE / OWNER APPROVED

Published article:

```text
#1. Prompt. Prove. Ship.: Context Is Part of the System
source = src/content/blog/2026-08-27-prompt-prove-ship-context.md
slug = /prompt-prove-ship-context/
seriesOrder = 1
publication date = 2026-08-27
thumbnail = /assets/images/blog2026/082026/prompt-prove-ship-context.svg
owner approval = 2026-08-27
```

Editorial assessment: the article is the right length for the current long-form corpus; its opening matches the direct voice of the strongest Git/Terraform/Cursor pieces; it stays centered on one context-architecture mental model; and it ends with a natural transition into **Plan Before Edit** rather than absorbing that article.

No personal experience, customer story, metric, or screenshot was invented. Current first-party OpenAI Codex, GitHub Copilot, and Cursor instruction documentation was used as contemporary evidence for a vendor-neutral operating idea.

## Owner-review workflow learned and retained

A Markdown diff alone is not a sufficient owner editorial surface for a visual portfolio article.

Accepted workflow:

```text
GPT prepares article + thumbnail + branch/PR
-> article remains draft: true
-> normal build/public routes exclude the draft
-> owner checks out the PR branch locally
-> npm run review:drafts
-> owner reviews the actual Astro page at its intended route
-> editorial/visual approval or notes
-> GPT removes draft status and runs publishable exact-head proof
-> controlled merge/deploy
-> production verification
```

`npm run review:drafts` is review-only. Normal `npm run dev`, builds, CI, and production retain draft exclusion. The initial preview implementation failed because `getStaticPaths()` could not see an outer-scope review flag; the source was corrected rather than weakening the draft boundary.

## Local repository hygiene learned and retained

Owner review exposed generated local files in GitHub Desktop that were not intended source changes. The repository now ignores:

```text
node_modules/
.astro/
dist/
test-results/
playwright-report/
.DS_Store
```

GitHub remains source authority; generated local build output is disposable.

## P11-WP2 — Publication and production proof — COMPLETE

Final reviewed PR head:

`a3652ed6c6549ba23114b21797d9d7df1a1c9235`

Pre-merge exact-head proof:

```text
Portfolio governance check 33108072525 = SUCCESS
Validate Astro migration 33108072628 = SUCCESS
Playwright portfolio smoke 33108072580 = SUCCESS
Playwright = 146 passed / 4 intentional skips / 0 failures
```

The material-diff review caught an attempted smoke-test repair that had removed unrelated historical regression coverage. That coverage was restored before merge; the final `tests/smoke.spec.ts` delta against the activation base contained only the seven obsolete Home-feature assertion lines. This is retained as a closeout lesson: a green test run is not sufficient if the diff weakened unrelated proof.

Merge/deployment:

```text
PR #43 = SQUASH MERGED
production merge = 736d0171b9905efcc442e5d0dc69eb90a0602fd6
post-merge governance 33108684787 = SUCCESS
post-merge Astro 33108684801 = SUCCESS
post-merge Playwright 33108684776 = SUCCESS
Pages deployment 33108684844 = SUCCESS
```

P11's public claim is therefore supported: the approved article is merged to `main`, the production build/deploy completed successfully, and post-merge validation remained green.

## Next candidate after P11

P11 is closed. **Plan Before Edit** is not a hidden P11 work package and no implementation sprint is active for it yet.

The strongest current next editorial candidate under H2 / PG-2 is:

**Plan Before Edit** — allowed scope, no-touch boundaries, acceptance criteria, stop conditions, and why boundary writing matters more as agent autonomy grows.

A fresh chat should reconcile live truth and open a new bounded sprint only if this remains the strongest useful article. Topic order remains editorial direction, not a forced calendar.

## Protected boundaries retained

Do not alter historical article identity, P10-approved core portfolio copy/design, production deployment semantics, public-runner trust boundaries, or private context as a side effect of later Writing work.
