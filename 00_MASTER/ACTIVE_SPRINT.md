# Active Sprint

Status: **NO ACTIVE IMPLEMENTATION SPRINT**  
Updated: 2026-08-08

Most recently completed sprint: **P8 — Portfolio Quality Ratchet and Series Transition**

Historical sprint record:

`docs/sprints/SPRINT_P8_PORTFOLIO_QUALITY_RATCHET_AND_SERIES_TRANSITION_2026-08-08.md`

A bounded post-P8 employer-facing polish package has also been completed and deployed; it did not open another sprint.

Current production authority:

```text
production branch: main
current production merge: e4f368365a36923295d0c4272a2caeb0ea67f05f
current release: post-P8 employer-facing polish — Writing order/series intros + Work spacing
automatic Pages deployment run: 31293406396
result: SUCCESS
production Validate Astro migration: 31293406399 — SUCCESS
production Playwright portfolio smoke: 31293406404 — SUCCESS
final candidate head: 09b5e21e7ba8fe98aaced5a84a6a72bac0e2c423
final candidate validation: 31293235502 — SUCCESS
final candidate Playwright: 31293235506 — 125 passed / 4 intentional skips
Playwright artifact: 9032136163
artifact digest: sha256:99330d1e6d60a9486376767e13801744fe085aea0ada35778d0ece694f381bcb
```

## Current production state

- Git to Know You is complete at #1–#10; no #11 is implied.
- The owner-approved MacBook homepage hero calibration remains deployed. The post-P8 polish did not roll it back; `src/styles/home.css` remained unchanged through the release.
- **Prompt. Prove. Ship.: From Chat to Change** is published and intentionally featured on the homepage.
- **Prompt. Prove. Ship.** is the approved next writing-series direction: AI-assisted engineering without outsourcing judgment.
- No numbered Prompt. Prove. Ship. follow-on article is currently committed.
- Writing uses deterministic publication ordering. `publishedAt`, when present, is the immutable first-publication/production-authorization instant; later revisions use `updated` and do not affect publication order.
- Series introductions use a subtle light-neutral divider-card treatment in Writing.
- Series-introduction thumbnails are wordless conceptual SVGs by default; thumbnail art should add meaning rather than repeat visible title/series copy.
- Work case-study actions have deliberate separation from capability pills.
- Canonical sprint execution records live under `docs/sprints/`; closed records become archive-eligible 30 calendar days after their recorded close date and move to `docs/sprints/archive/` when eligible.
- Routine startup does not read the sprint archive.

## Next-work posture

Do not manufacture a sprint merely because the repository is active.

The next meaningful content sprint may develop a focused **Prompt. Prove. Ship.** arc around durable AI-assisted engineering practices such as repository context, bounded autonomy, claim-matching proof, safe tool access, troubleshooting, and review/release controls. Topic order and article count are not yet commitments.

After that focused writing arc, pause new content and perform one deliberate employer-readiness pass across Home / Work / Writing / About / Resume, then prefer a stability period over cosmetic churn.

A non-blocking final-polish observation remains for that later pass: the upper-right homepage focus rail may feel slightly open above its rule. Do not add filler simply to occupy the space.

## Release model

```text
bounded branch
-> PR
-> required CI / browser / accessibility evidence
-> owner approval when required
-> merge to main = human production authorization
-> automatic GitHub Pages deployment
-> post-deploy verification
-> living-state closeout
```

`workflow_dispatch` remains operational fallback only.

## Owner-effort posture

GPT should continue routine bounded repository work autonomously through connected GitHub until a genuine owner decision, local-only proof requirement, scope expansion, safety uncertainty, or production authorization gate is reached. Owner gates should be concise and mobile-friendly without weakening evidence requirements.

## Public-repository rule

This repository remains a public professional artifact. Tracked documentation, branches, PRs, logs, artifacts, screenshots, and metadata must stay safe for unrestricted public reading/copying and must not become private project memory.
