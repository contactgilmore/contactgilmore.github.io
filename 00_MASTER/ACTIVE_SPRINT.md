# Active Sprint

Sprint: **P5 — Quality, Discoverability, and Launch Hardening**  
Status: OPEN  
Opened: 2026-08-08  
Branch: `portfolio-2.0-foundation`

Current work package: **P5-WP1 — Public asset minimization and disclosure audit**

Sprint note: `docs/sprint_notes/SPRINT_P5_QUALITY_DISCOVERABILITY_AND_LAUNCH_2026-08-08.md`

Completed predecessor sprint:

```text
P4 — Professional Case Studies and Content Refresh
final source candidate: 9d983a771d02d14dc71821d2f9777647920c57b6
Validate Astro migration: SUCCESS
Playwright portfolio smoke: SUCCESS
three professional case-study routes: complete
public-safety content review: complete
```

Current production boundary:

```text
production: legacy Jekyll on main
Portfolio 2.0: portfolio-2.0-foundation
no Pages cutover yet
owner approval required before merge/deploy
```

P5 priorities:

```text
1. reference-based public asset minimization
2. sitemap / robots / social metadata
3. conservative structured data
4. accessibility / performance / image hardening
5. link / URL / Playwright / Pages artifact regression
6. deployment and rollback contract
7. owner cutover gate
```

Public-disclosure rule remains absolute: retain or publish only information and assets appropriate for unrestricted public access.

CI posture:

```text
feature branch validation: pull_request -> main
production validation after cutover: push -> main
runner: GitHub-hosted ubuntu-latest
Node3: not exposed to public repo workflows
```

Design authority: the P3 smoke-tested Portfolio 2.0 brand doctrine remains active. P5 hardens the candidate; it does not casually redesign it.
