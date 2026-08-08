# Sprint P1 — Portfolio 2.0 Foundation and Astro Migration

Opened: 2026-08-08  
Status: OPEN  
Owner: Mike Gilmore  
Project manager/executor: GPT  
Working branch: `portfolio-2.0-foundation`

## Thesis

Establish durable project governance and migrate the portfolio's technical foundation from Jekyll to Astro without changing production or losing blog content, assets, metadata, or public URLs. End the sprint with a validated Astro foundation ready for the visual/content redesign sprint.

## Current authority

Production start point:

```text
repo: contactgilmore/contactgilmore.github.io
branch: main
head at sprint opening: 2637f64cce154ded6086df2220e5889bdd6aa007
framework: Jekyll 4.4 line + custom HTML/CSS
```

## Scope

- establish Job Search Studio-style `00_MASTER` governance adapted to this site;
- establish product, architecture, brand, and versioning domain docs;
- create Portfolio 2.0 roadmap;
- audit existing Jekyll/Liquid dependencies and all blog posts/assets;
- verify self-hosted GitHub Actions runner contract;
- scaffold Astro 7+ + TypeScript on the working branch;
- define typed Markdown/content schema;
- migrate blog content without intentional body rewrites;
- preserve or explicitly map existing public blog URLs;
- create dedicated blog archive and compatible article rendering foundation;
- add repository-portable validation and Pages deployment candidate workflow;
- produce rendered evidence before any cutover discussion.

## Non-goals

- final homepage visual redesign;
- final professional copy/positioning wording;
- rewriting historical blog articles;
- adding a CMS/database;
- adding React by default;
- production cutover before acceptance.

## Protected boundaries

```text
main
_posts/ article bodies
existing published blog URLs
assets/images used by posts
production GitHub Pages availability
```

## Work-package queue

### P1-WP1 — Governance and migration foundation
Status: IN PROGRESS

Deliverables: branch, `00_MASTER`, domain doctrine, roadmap, sprint note, initial migration contracts.

Acceptance: fresh GPT session can recover project authority and next action from repository docs alone.

### P1-WP2 — Jekyll and content dependency audit
Status: QUEUED

Audit `_posts`, layouts, config, Liquid constructs, permalink behavior, images/assets, CSS/JS dependencies, README/build assumptions, and current Pages configuration. Produce migration inventory and URL manifest.

Acceptance: every published post and migration-sensitive construct is accounted for.

### P1-WP3 — Runner and CI contract
Status: QUEUED

Verify the portfolio repository's self-hosted runner labels, Node/runtime availability, permissions, and current Pages deployment mode. Design durable CI without copying another repo's labels blindly.

Acceptance: runner/deployment assumptions are evidenced.

### P1-WP4 — Astro scaffold and content schema
Status: QUEUED

Add Astro 7+, TypeScript, clean project structure, global CSS foundation, content collection/schema, and static build configuration.

Acceptance: clean install/build succeeds without touching production.

### P1-WP5 — Blog migration
Status: QUEUED

Migrate all eligible Markdown posts/assets, preserve metadata/body, implement article layout/archive, and resolve any Jekyll-specific constructs.

Acceptance: migrated post count matches source inventory and representative articles render correctly.

### P1-WP6 — URL and quality regression
Status: QUEUED

Validate old URL compatibility/redirects, internal links, assets, responsive rendering, accessibility basics, and build output.

Acceptance: no unexplained URL/content loss and quality gates are documented.

### P1-WP7 — Deployment candidate and closeout
Status: QUEUED

Create candidate Pages workflow, gather deployment evidence without replacing production prematurely, close migration risks, and prepare P2 visual/content redesign sprint.

Acceptance: Mike has a reviewed migration candidate and explicit cutover decision point.

## Owner gates

Mike approval is required for:

1. changing the final public professional identity/value proposition;
2. deleting or materially rewriting historical blog content;
3. changing hosting away from GitHub Pages;
4. introducing a major UI framework/CMS/database;
5. production cutover/merge.

## Verification gates

- exact changed-file review;
- no direct `main` mutation;
- post/asset inventory match;
- Astro clean build;
- URL regression evidence;
- representative visual/browser proof;
- self-hosted runner assumptions verified;
- owner approval before cutover.

## Checkpoint 2026-08-08 — Sprint opened

Decision: Portfolio 2.0 will use Job Search Studio-style governance. Astro is the preferred migration target. Production Jekyll remains intact while migration is developed and proven on a branch.