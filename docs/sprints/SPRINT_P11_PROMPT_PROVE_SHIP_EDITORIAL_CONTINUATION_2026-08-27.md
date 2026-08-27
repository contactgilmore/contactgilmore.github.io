# P11 — Prompt. Prove. Ship. Editorial Continuation

Status: **ACTIVE**  
Opened: 2026-08-27  
Owner: Mike Gilmore  
Repository: `contactgilmore/contactgilmore.github.io`  
Roadmap Horizon: **H2 — Sustained professional signal and editorial proof**  
Product Goal: **PG-2**  
Working branch: `p11-prompt-prove-ship-editorial-continuation`  
Activation base: `ba9eac79873f5224e6f4ecdb664d1fbb386bbbd3`

## Sprint Goal

Prove the low-owner-friction publishing model by selecting, researching, drafting, validating, and presenting the next **Prompt. Prove. Ship.** installment for owner approval while bringing the portfolio onto the current one-roadmap/deterministic-startup governance hierarchy.

## Why P11 exists

P7 established GPT-assisted publishing. P9 established the durable long-form voice/quality standard. P10 completed the employer-facing site finish line. The next useful product increment is not another redesign; it is to prove that the Writing system can continue with GPT carrying the routine editorial workload and the owner acting mainly as the final public editorial gate.

The 2026-08-27 startup reconciliation also found a small set of continuity defects that would undermine that experiment if left in place. They belong in this sprint because they directly affect whether future GPT sessions can recover the correct roadmap/editorial state and keep unpublished content unpublished.

## Work packages

### P11-WP0 — Deterministic startup and editorial-system reconciliation — ACTIVE

Objective: align the portfolio with current central Development Governance and remove stale current-state assumptions before the new article is prepared for publication.

Changes permitted:

- move the one canonical roadmap from root `ROADMAP.md` to `00_MASTER/PRODUCT_ROADMAP.md` and add H2 / PG-2 / P11 direction;
- reconcile Master startup routing, `WHERE_WE_ARE`, `ACTIVE_SPRINT`, `LAST_CLOSEOUT_PROMPT`, `00_MASTER/README`, and package profile;
- reconcile local Repository Governance consumed snapshot and live settings facts;
- reconcile the existing product backlog and series foundation;
- update `scripts/check_governance.py` so CI enforces the current hierarchy rather than the closed GOV-2E campaign;
- make `draft: true` exclude article route generation as well as archive/home/series discovery.

Acceptance:

```text
exactly one canonical roadmap = 00_MASTER/PRODUCT_ROADMAP.md
root ROADMAP.md = absent from current tree
H2 / PG-2 / P11 agree across current authority
central snapshot = 065c670ea96878d2d21f065908d6b66d49c16dc2
P10 = complete, not active
former settings drift = current live settings fact, not pending work
public draft route isolation = enforced in source
current governance check = PASS
```

Owner gate: none beyond already authorized repository/editorial-continuity direction; these are deterministic governance/current-state repairs and do not publish the article.

### P11-WP1 — Context Is Part of the System — PLANNED AFTER WP0 PROOF

Selected article:

```text
#1. Prompt. Prove. Ship.: Context Is Part of the System
planned source = src/content/blog/2026-08-27-prompt-prove-ship-context.md
planned slug = /prompt-prove-ship-context/
seriesOrder = 1
```

Objective: teach a practical, vendor-neutral context architecture for AI agents: thin entry instructions route to durable authority, current roadmap/sprint state, task-specific evidence, and live system truth instead of duplicating the entire project into one prompt.

Source-pack targets include current first-party documentation for repository/project instructions from multiple current agent ecosystems. Research breadth may exceed article breadth.

Draft requirements:

- technical essay/tutorial hybrid under P9;
- sample the established real corpus before drafting;
- direct beginner-friendly opening with a clear human problem;
- one primary mental model rather than a vendor feature catalog;
- authorial judgment without invented personal experience;
- distinguish tool-entry instructions from durable project documentation;
- explain stale/duplicated context as a reliability problem;
- show a lightweight starting pattern and a larger-repository pattern without making the portfolio's exact governance mandatory for everyone;
- use this public portfolio only as public-safe evidence/example;
- leave detailed task-boundary design for the next installment, **Plan Before Edit**.

Candidate state before owner approval:

```text
draft: true
no publishedAt fabrication
new wordless concept thumbnail
no direct public route
absent from Writing index/home featured cards/series navigation
```

Owner gate: Mike reviews and approves final article copy and visual representation before publication/merge.

### P11-WP2 — Publication and production proof — BLOCKED ON OWNER APPROVAL

After owner approval only:

- resolve final truthful publication date;
- remove `draft: true` or set it false;
- do not fabricate `publishedAt`; add it only if a real ordering need and known first-publication instant justify it;
- update tests from draft-isolation expectations to published-route/archive/series/accessibility expectations;
- run exact-head build/browser/accessibility/link/asset proof;
- review exact diff;
- merge under the repository's squash-only production contract;
- verify automatic GitHub Pages deployment and affected live surfaces;
- close P11 and reconcile roadmap/living state/series status.

## Allowed paths

The sprint may modify the smallest necessary set under:

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
ROADMAP.md only for removal after canonical migration
```

If another source/test path is genuinely required to make claim-matching proof pass, record the reason here before widening.

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

## Proof model

WP0 proof:

- governance checker passes current hierarchy/invariants;
- exact changed-file set is reviewed;
- root roadmap removal does not remove historical provenance from Git;
- draft-route source contract is visible and coherent.

WP1 proof before owner review:

- source pack rechecked against current first-party docs;
- factual/version-sensitive claims verified;
- voice/read-aloud review passes separately;
- public-safety/professional-read review passes;
- Astro content/build, internal/external link and asset checks pass;
- Playwright proves the draft article is not directly routable or discoverable;
- no historical route/date regressions.

WP2 production proof:

- exact publishable head passes applicable build/browser/axe/link/asset regression;
- article route, Writing index, series navigation, and responsive rendering behave correctly;
- automatic Pages deployment succeeds after approved merge;
- live route is verified after deployment.

## Risks and stop conditions

Stop rather than invent or widen scope if:

- a useful article requires an unsupported first-person implementation story;
- current sources materially undermine the selected thesis;
- a private sibling project would need to be exposed to make the example work;
- the article becomes a generic product feature tour;
- the scope turns into a site redesign or rewrite of existing corpus;
- draft isolation cannot be proven;
- an owner-reserved product/editorial/security/paid-service decision appears.

## Current checkpoint

P11 direction is selected. WP0 authority reconciliation is the first repository transaction. The article is not yet owner approved or publishable.
