# P8 — Portfolio Quality Ratchet and Series Transition

Status: ACTIVE  
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

## Work-package queue

### WP1 — Series closeout and roadmap/backlog reconciliation

Classification: documentation/content maintenance.

Expected result:

- Git to Know You is clearly represented as a completed #1–#10 series;
- Argo #10 production/deployment/owner-smoke evidence is recorded;
- roadmap and domain backlogs no longer present completed work as future work;
- next-series work remains directional, not a publication commitment.

Verification:

- exact diff/public-read review;
- article/series navigation and historical dates remain unchanged except explicitly approved series-status/overview wording;
- no stale #10-as-future references remain in living authority.

### WP2 — Deterministic quality and low-owner-effort workflow audit

Classification: governance/documentation update.

Expected result:

A fresh chat following master doctrine should autonomously:

1. recover authority from GitHub;
2. declare bounded scope/no-touch paths;
3. continue implementation and verification without repeatedly asking Mike to drive routine steps;
4. use exact-head CI and browser/accessibility evidence;
5. request owner input only at genuine public-representation, local-only, or production gates;
6. when local smoke is needed, issue one complete `cd` + sync + shared-Playwright command block;
7. present owner gates in concise, mobile-friendly language with the exact decision needed;
8. close out living state so the next chat reaches the same conclusion without chat memory.

Verification:

- startup doctrine remains deterministic and non-duplicative;
- rules do not expose personal local paths unnecessarily;
- public-repository safety remains stronger than convenience;
- no rule implies that CI alone proves visual quality when a visual claim changed.

### WP3 — MacBook-class homepage hero typography calibration

Classification: visual implementation/browser validation.

Required source:

- current homepage source/styles;
- brand doctrine/backlog;
- existing Playwright viewport evidence.

Expected result:

The homepage hero remains confident/editorial but improves first-viewport recruiter scanability at common laptop widths by testing a modestly wider measure and/or lower desktop maximum rather than reverting to generic small typography.

Verification:

- desktop MacBook-class evidence plus existing desktop/tablet/phone regression;
- no horizontal overflow;
- CTA/value proposition remain clear;
- axe accessibility remains clean;
- owner visual approval before production merge.

### WP4 — Next-series foundation / sneak-peek

Classification: product/editorial strategy with optional bounded content implementation.

Expected result:

- choose the next series only after comparing the strongest directions against the portfolio north star;
- likely candidates include AI-assisted engineering workflow and Cloud Foundations, but repository evidence and usefulness control the decision;
- define audience, promise, scope boundaries, likely topic arc, and naming;
- if a public intro/sneak-peek is useful, prepare only that intro for owner review;
- do not publish numbered follow-on articles in P8.

Verification:

- no fabricated first-person experience;
- no forced publishing calendar;
- concept is distinct from Git to Know You and supports Mike's technical-delivery positioning;
- owner approval required before any new public series representation merges.

### WP5 — Full sprint verification and closeout

Classification: browser validation/closeout.

Expected result:

- exact changed-file review;
- public-disclosure and professional-read pass;
- applicable Astro/asset/link/route validation;
- Playwright desktop/tablet/phone and axe evidence for affected surfaces;
- owner smoke/visual gate only where it adds unique proof;
- accepted changes merged/deployed under current release contract;
- living state, roadmap, sprint note, relevant domain docs, and closeout prompt updated.

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

## Owner gates

Owner approval is required for:

- final homepage hero visual disposition;
- any public next-series name/intro/sneak-peek;
- production merge of public-representation changes.

Routine documentation reconciliation, research, branch work, CI investigation, exact-diff review, and non-production preparation should proceed autonomously within this sprint's boundaries.
