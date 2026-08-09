# P8 — Portfolio Quality Ratchet and Series Transition

Status: **ACTIVE — FINAL VERIFICATION / RELEASE**  
Opened: 2026-08-08  
Owner: Mike Gilmore

## Thesis

Consolidate the quality gains proven during the final Git to Know You releases, reduce owner effort without weakening evidence, resolve the known MacBook-class homepage typography issue, close the first writing series cleanly, and establish the next series without starting another article batch.

## Authority

```text
production entering P8: Git to Know You #10 — Argo CD / GitOps
production merge: 6668237614720202adec43cd0feadd6dc36ce2af
Pages deployment run: 31287772916 — SUCCESS
owner local smoke entering P8: 108 / 108
P8 authority merge: a19e196660777259fe18bcad2bc556c000011eab
implementation PR: #25
branch: p8-quality-ratchet-series-transition
```

Repository-wide safety/release authority remains in `00_MASTER/00_MASTER_DOCTRINE.md` and `00_MASTER/01_SPRINT_SYSTEM/`.

## Scope / non-goals

P8 may:

- close Git to Know You as a complete #1–#10 series;
- reconcile stale roadmap/domain backlog material;
- harden deterministic low-owner-effort execution/publishing rules;
- calibrate the homepage hero at MacBook-class widths;
- standardize sprint execution records and archive hygiene;
- define the next writing series and publish **one** owner-approved intro/sneak-peek;
- complete full verification and closeout.

P8 does **not** add another Git to Know You number, publish a batch of next-series articles, redesign case studies/navigation/Resume, or weaken quality/public-safety gates.

## Work-package status

### WP1 — Git to Know You closeout / backlog reconciliation — COMPLETE IN CANDIDATE

- overview + #1–#10 consistently use `seriesStatus: complete`;
- overview presents a complete ten-article learning path and no #11;
- historical dates, URLs, thumbnails, and article bodies remain protected except intentional overview closeout wording;
- product/architecture/versioning backlogs were reconciled with current Astro/GitHub Pages truth;
- dedicated browser coverage verifies #10 links correctly, points back to OpenTelemetry, and has no Next link.

### WP2 — deterministic quality / documentation hygiene — COMPLETE IN CANDIDATE

- autonomous bounded continuation is a hard operating rule;
- routine GitHub mechanics do not become owner chores;
- owner gates are concise/mobile-friendly without lowering evidence quality;
- local smoke remains one coherent `cd` -> sync/pull -> shared Playwright -> build/test -> review block;
- documentation-only commits after a green implementation head do not force redundant owner smoke when they cannot affect the approved claim;
- canonical sprint records moved from `docs/sprint_notes/` to `docs/sprints/`;
- closed sprint records remain recent for 30 days, then become archive-eligible under `docs/sprints/archive/`;
- routine startup does not read the archive;
- no duplicate summary or placeholder archive document is created.

### WP3 — MacBook homepage hero calibration — OWNER APPROVED

Delivered:

- more horizontal room for the primary value proposition;
- narrower signal rail and desktop gap;
- calibrated desktop display scale/measure;
- reduced excess top whitespace on shorter laptop-class screens;
- standard desktop regression changed to 1440×900;
- focused geometry checks added for 1440×900 and 1280×800.

Quality-ratchet evidence:

1. first focused gate failed correctly: CTA bottom was ~1217px on a 900px viewport;
2. the test was not weakened;
3. composition was corrected structurally;
4. the same gate passed at both laptop targets;
5. owner reviewed the candidate on a MacBook and approved it.

Final-polish observation only: the upper-right focus rail may feel slightly open above its horizontal rule. Do not add decorative filler now; reconsider only during the later employer-readiness pass if it still feels unfinished.

### WP4 — Prompt. Prove. Ship. series transition — APPROVED / INTRO IN CANDIDATE

Owner decisions:

```text
series name: Prompt. Prove. Ship.
direction: AI-assisted engineering without outsourcing judgment
intro timing: publish now
follow-on numbered articles in P8: NO
```

Candidate public introduction:

```text
title: Prompt. Prove. Ship.: From Chat to Change
slug: /prompt-prove-ship/
seriesOrder: 0
seriesStatus: ongoing
thumbnail: purpose-built 1600×900 SVG
```

The introduction is concept-first: repository context, task boundaries, claim-matching proof, safe autonomy, human judgment, and controlled release. It uses current first-party OpenAI/GitHub material for time-sensitive agent-workflow claims and does not invent first-person tool experience.

Cloud Foundations remains a later series candidate.

### WP5 — final verification / release / closeout — ACTIVE

Previous green implementation evidence before the approved intro:

```text
implementation head: 13799698d53350058d8949df72f2f43922abcd78
Validate Astro migration: 31288824838 — SUCCESS
Playwright smoke: 31288824836 — SUCCESS
Playwright: 110 passed / 4 expected skips
artifact: 9030756177
artifact digest: sha256:d0e6a753e7a65b21deae01ca812a65b7259a1a903517e7cd9804f44e809befce
```

The new Prompt. Prove. Ship. intro, thumbnail, sprint-path migration, and associated tests require a fresh exact-head validation pass before merge.

## Acceptance

P8 is accepted when:

- Git to Know You is durably closed as the first complete series;
- current startup doctrine encodes the autonomous, quality-gated, low-owner-effort workflow;
- sprint records use `docs/sprints/` and the 30-day archive lifecycle;
- the MacBook hero is owner-approved and responsive evidence remains green;
- **Prompt. Prove. Ship.** intro is validated and deployed;
- public-disclosure/professional-read review passes;
- production deploy succeeds and live affected surfaces are verified;
- living state/roadmap/closeout records production truth.

## Closeout update set

```text
00_MASTER/WHERE_WE_ARE.md
00_MASTER/ACTIVE_SPRINT.md
00_MASTER/LAST_CLOSEOUT_PROMPT.txt
this record
relevant domain docs
ROADMAP.md
CHANGELOG.md when accepted material site behavior changed
```

A fresh session following master doctrine must reach the same project-state conclusion without the previous chat or archived sprint records.
