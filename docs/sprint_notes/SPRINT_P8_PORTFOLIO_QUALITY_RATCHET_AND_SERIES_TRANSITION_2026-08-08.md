# P8 — Portfolio Quality Ratchet and Series Transition

Status: ACTIVE — OWNER GATES PENDING  
Opened: 2026-08-08  
Owner: Mike Gilmore

## Thesis

Consolidate the quality gains proven during the final Git to Know You releases, reduce owner effort without weakening evidence, resolve the known MacBook-class homepage typography issue, and prepare the next writing-series direction without immediately publishing another run of articles.

P8 is deliberately not a content-volume sprint. Git to Know You #10 closes the first complete series. The next series may receive a public-safe concept/intro or sneak-peek only after its direction is coherent; P8 must not manufacture follow-on articles merely to keep publishing momentum.

## Current authority

```text
production branch: main
production release entering P8: Git to Know You #10 — Argo CD / GitOps
production merge: 6668237614720202adec43cd0feadd6dc36ce2af
automatic Pages deployment run: 31287772916
result: SUCCESS
owner local smoke: 108 / 108 Playwright tests passed
P8 authority merge: a19e196660777259fe18bcad2bc556c000011eab
implementation PR: #25
```

Repository startup, public-disclosure, release, and owner-gate authority remain in `00_MASTER/00_MASTER_DOCTRINE.md` and `00_MASTER/01_SPRINT_SYSTEM/`.

## Scope

P8 may:

- close Git to Know You as the completed #1–#10 series and reconcile overview/metadata/living state where needed;
- audit roadmap and domain backlogs for stale pre-launch/pre-P7 items and replace them with current truth;
- harden master/startup/execution/publishing guidance so fresh chats continue autonomously through bounded work until a genuine owner decision or local-only proof gate;
- minimize owner manual effort while preserving exact-head CI, browser, accessibility, public-disclosure, and professional-read gates;
- preserve the proven local smoke command contract: one copy-paste block beginning with `cd`, synchronizing the branch, reusing the shared Playwright environment, building, testing, and opening review surfaces when needed;
- make owner review summaries concise and phone-friendly while clearly distinguishing automated evidence from any still-required local/visual decision;
- calibrate the homepage hero typography at MacBook-class desktop/laptop widths using browser evidence, preserving the established editorial hierarchy and recruiter scanability;
- define the next writing-series concept and a possible intro/sneak-peek only, without publishing follow-on series articles in this sprint;
- update brand/product/roadmap doctrine only when new behavior has been proven and accepted.

## Non-goals

- no additional Git to Know You numbered articles beyond #10;
- no batch of next-series articles;
- no redesign of navigation, case studies, Resume, or core portfolio positioning;
- no React, CMS, database, analytics platform, or hosting migration;
- no speculative animation or decorative feature work;
- no private job-search, personal, financial, health, or infrastructure context in this public repository;
- no weakening of CI/browser/accessibility gates to reduce owner effort.

## Protected paths/content

Do not change unless a work package explicitly authorizes it:

```text
historical blog publication dates
published article slugs/URLs
case-study claims and metrics
Resume content/download contract
main deployment workflow
public safety/secret rules
existing professional positioning
```

## Work-package queue and status

### WP1 — Series closeout and roadmap/backlog reconciliation

Status: IMPLEMENTED / VERIFIED, OWNER PRODUCTION GATE PENDING.

Delivered:

- Git to Know You overview and #1–#10 now consistently use `seriesStatus: complete`;
- the overview presents a complete ten-article learning path and no longer implies a required #11;
- historical publication dates, slugs/URLs, thumbnails, and article bodies remain protected except the explicitly approved series-closeout overview wording;
- product, architecture, and versioning backlogs were reconciled with current Astro/GitHub Pages production truth instead of retaining completed migration work as future tasks;
- architecture maintenance now explicitly warns that `draft: true` must not be treated as private until route generation is verified to exclude drafts.

Verification:

- exact diff/public-read review completed;
- no site routes or historical publication dates were changed;
- dedicated browser contract verifies the overview is complete, #10 links correctly, #10 points back to OpenTelemetry, and #10 has no Next link.

### WP2 — Deterministic quality and low-owner-effort workflow audit

Status: IMPLEMENTED / PUBLIC-SAFE.

Delivered:

- GPT guardrails now make autonomous bounded continuation a hard operating rule;
- sprint rhythm distinguishes routine checkpoints from genuine owner gates;
- future sessions should not ask Mike to click GitHub, copy patches, repeat recoverable repository state, or drive routine branch/PR/CI mechanics;
- owner gates must state what changed, exact evidence, remaining subjective/uncertain items, and the exact decision requested in mobile-friendly form;
- low owner effort may not weaken claim-matching visual/browser/accessibility evidence;
- local smoke remains one coherent `cd` -> sync/pull -> shared Playwright -> build/test -> review command block;
- interactive owner commands must not use `set -e` merely to simplify failure handling;
- documentation-only commits after a green implementation head do not force redundant owner smoke when they cannot affect the approved claim;
- publishing workflow explicitly allows a pause after a completed series rather than manufacturing content momentum.

Verification:

- deterministic startup still reads these support documents every session;
- no expanded personal local path was committed;
- public-repository safety remains a hard gate;
- workflow still requires rendered/browser proof for visual claims.

### WP3 — MacBook-class homepage hero typography calibration

Status: IMPLEMENTED / AUTOMATED EVIDENCE GREEN / OWNER VISUAL GATE PENDING.

Delivered:

- homepage desktop hero gives more width to the primary value proposition and a narrower signal rail;
- desktop headline maximum/measure and short-viewport top spacing were calibrated without changing the homepage copy or professional positioning;
- standard desktop Playwright viewport changed from 1440×1000 to **1440×900** so routine regression reflects a common laptop-class screen;
- dedicated desktop evidence checks both **1440×900** and **1280×800** and requires `View selected work` to remain in the initial viewport.

Quality-ratchet evidence:

1. First focused test correctly failed at implementation head `c147aa8932dd3eab4a0818e4a612e92e208d3eca`: at 1440×900 the primary CTA bottom was approximately **1217px**, outside the 900px initial viewport. The gate was not weakened.
2. The hero composition was corrected structurally rather than merely shrinking text.
3. Focused laptop evidence then passed on implementation head `b1424ce0c04cb8dcdb7c8ddb05dcf3617602947d` at both target viewports, with the full existing responsive/accessibility suite green.
4. Final exact implementation head `13799698d53350058d8949df72f2f43922abcd78` passed the focused laptop contract again as part of the final Playwright suite.

Owner visual approval on the actual MacBook remains required because automated geometry does not prove subjective visual quality.

### WP4 — Next-series foundation / sneak-peek

Status: STRATEGY/DRAFT READY / NOT PUBLISHED / OWNER DIRECTION GATE PENDING.

Delivered:

- AI-assisted engineering workflow is the recommended next **direction** because it connects technical delivery, repository context, agentic implementation, verification, troubleshooting, review, and release control in a way this public repository can transparently demonstrate;
- Cloud Foundations remains a future series candidate rather than being rejected;
- `docs/editorial/NEXT_SERIES_FOUNDATION.md` defines audience, promise, non-goals, durable themes, potential topic arc, and naming alternatives without assigning article numbers/dates;
- `docs/editorial/NEXT_SERIES_INTRO_DRAFT.md` contains a concept-first **NOT PUBLISHED** intro draft so owner review can happen before any route/content entry is created;
- working concept/name `Prompt to Proof` remains provisional because a current naming scan found the exact phrase in use elsewhere; `Prompt. Prove. Ship.` is staged as the more distinctive delivery-oriented alternative.

No next-series site-visible content is authorized or published by P8 until the owner approves the name/promise/timing.

### WP5 — Full sprint verification and closeout

Status: AUTOMATED IMPLEMENTATION EVIDENCE GREEN; OWNER GATES / PRODUCTION MERGE / CLOSEOUT PENDING.

Final exact implementation head:

```text
13799698d53350058d8949df72f2f43922abcd78
```

Exact-head evidence:

```text
Validate Astro migration: run 31288824838 — SUCCESS
Playwright portfolio smoke: run 31288824836 — SUCCESS
Playwright result: 110 passed / 4 expected desktop-only skips
Playwright evidence artifact: 9030756177
artifact digest: sha256:d0e6a753e7a65b21deae01ca812a65b7259a1a903517e7cd9804f44e809befce
```

The final browser run includes:

- desktop 1440×900 responsive regression;
- tablet and phone regression;
- 1440×900 and 1280×800 focused hero first-viewport proof;
- Git to Know You completion contract;
- all existing route/series/navigation/browser checks;
- representative axe accessibility scans;
- zero-orphan public asset audit and successful Astro build.

One intermediate series-completion test failed because the test incorrectly expected `#10` inside the link's accessible name even though the rendered semantic structure was correct (`#10.` in the heading and `Argo CD and GitOps` as the link). The selector was corrected to match the actual markup; the presentation requirement was not weakened.

Subsequent changes after the green implementation head are documentation-only strategy/evidence updates and do not affect runtime, visual, route, or browser claims. Per the hardened workflow, they do not require a redundant full owner smoke rerun.

## Acceptance condition

P8 is accepted when:

- Git to Know You is durably closed as the first complete series;
- fresh-chat documentation encodes the proven autonomous, quality-gated, low-owner-effort workflow;
- the known MacBook hero typography issue has a tested and owner-approved disposition;
- the next series has a coherent foundation without starting another article batch;
- all accepted public changes have responsive/accessibility evidence and are safely deployed.

## Closeout condition

Close P8 only after production truth and remaining roadmap items are reflected in:

```text
00_MASTER/WHERE_WE_ARE.md
00_MASTER/ACTIVE_SPRINT.md
00_MASTER/LAST_CLOSEOUT_PROMPT.txt
this sprint note
relevant domain docs
ROADMAP.md
CHANGELOG.md when accepted material site behavior changed
```

A fresh session following `00_MASTER/00_MASTER_DOCTRINE.md` must reach the same state conclusion without relying on the prior chat.

## Remaining owner gates

Owner approval is now required only for:

1. **Homepage hero visual disposition** on the actual MacBook after the automated laptop geometry/responsive evidence passed.
2. **Next-series public direction**: final name/promise and whether an intro/sneak-peek should publish now or wait for a deliberate pause.
3. **Production merge of PR #25** after those public-representation decisions are resolved.

Routine documentation reconciliation, research, CI investigation, exact-diff review, and non-production preparation should continue autonomously within this sprint's boundaries.
