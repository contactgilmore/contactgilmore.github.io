# Active Sprint

Status: **ACTIVE IMPLEMENTATION SPRINT**  
Updated: 2026-08-08

Current sprint: **P8 — Portfolio Quality Ratchet and Series Transition**

Sprint authority:

`docs/sprints/SPRINT_P8_PORTFOLIO_QUALITY_RATCHET_AND_SERIES_TRANSITION_2026-08-08.md`

Current production authority entering P8:

```text
production branch: main
current production merge: 6668237614720202adec43cd0feadd6dc36ce2af
current release: Git to Know You #10 — Argo CD / GitOps
automatic Pages deployment run: 31287772916
result: SUCCESS
owner local smoke: 108 / 108 Playwright tests passed
```

Most recently completed formal sprint before P8: **P7 — Blog Editorial System and AI-Assisted Publishing**.

Historical P7 record:

`docs/sprints/SPRINT_P7_BLOG_EDITORIAL_SYSTEM_AND_AI_ASSISTED_PUBLISHING_2026-08-08.md`

## P8 thesis

Consolidate the quality gains proven during the final Git to Know You releases, reduce owner effort without weakening evidence, resolve the MacBook-class homepage typography issue, and prepare the next writing-series direction without immediately publishing another run of articles.

## Current work-package queue

1. **WP1 — Series closeout and roadmap/backlog reconciliation** — implementation complete; final release bookkeeping pending
2. **WP2 — Deterministic quality and low-owner-effort workflow audit** — implementation complete; sprint-record lifecycle added
3. **WP3 — MacBook-class homepage hero typography calibration** — owner approved after MacBook review
4. **WP4 — Next-series foundation / sneak-peek** — **Prompt. Prove. Ship.** approved; public introduction candidate now in branch
5. **WP5 — Full sprint verification and closeout** — next

Git to Know You #10 closes the first complete #1–#10 series. P8 is authorized to publish one **Prompt. Prove. Ship.** series introduction/sneak-peek; no numbered follow-on Prompt. Prove. Ship. articles belong in P8.

## Current owner decisions

Approved 2026-08-08:

- calibrated homepage hero is accepted on the owner's MacBook;
- **Prompt. Prove. Ship.** is the approved next-series name;
- descriptor/direction: AI-assisted engineering without outsourcing judgment;
- publish the series sneak-peek now;
- after the next focused series arc, perform a final employer-readiness pass and then favor portfolio stability over constant churn.

Final-polish observation, not a current defect: the top-right homepage focus rail may feel slightly open above its rule. Do not add decoration merely to fill space; revisit only during the final employer-readiness pass if the composition still feels unfinished.

## Sprint-record hygiene

Canonical execution-history path is now:

```text
docs/sprints/
```

Completed sprint records remain operationally nearby for 30 calendar days after close, then become eligible for Git move to `docs/sprints/archive/`. Routine startup does not read the archive. P1–P8 are all dated 2026-08-08 and therefore none are archive-eligible yet.

## Release model

```text
bounded branch
-> PR
-> required CI / browser / accessibility evidence
-> owner approval when required
-> merge to main = human production authorization
-> push to main automatically builds and deploys GitHub Pages
-> post-deploy verification
-> living-state closeout
```

`workflow_dispatch` remains fallback only.

## Owner-effort posture

GPT should continue autonomously through routine GitHub reads/writes, bounded implementation, exact-diff review, research, and CI/browser investigation until a genuine owner decision or local-only proof gate is reached.

When owner/local smoke is needed, provide one complete copy-paste block that begins with `cd`, synchronizes the candidate with fetch/switch/`git pull --ff-only`, protects tracked local edits, reuses the shared Playwright environment, and runs the required build/test/review steps.

Owner gates should be concise and mobile-friendly: state what changed, what evidence passed, what remains uncertain, and the exact approval/notes decision required.

## Public-repository rule

This repository remains a public professional artifact. Tracked documentation, branches, PRs, logs, artifacts, screenshots, and metadata must stay safe for unrestricted public reading/copying and must not become private project memory.
