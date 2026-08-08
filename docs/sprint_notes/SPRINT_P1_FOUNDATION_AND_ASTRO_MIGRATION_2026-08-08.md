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
Pages mode: legacy branch build from main:/
```

## Scope

- establish Job Search Studio-style `00_MASTER` governance adapted to this site;
- establish product, architecture, brand, and versioning domain docs;
- create Portfolio 2.0 roadmap;
- audit existing Jekyll/Liquid dependencies and all blog posts/assets;
- establish safe CI/deployment runner contract for the public repository;
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
nine published _posts/ article bodies
existing published blog URLs including source case
assets/images used by posts
production GitHub Pages availability
public-disclosure safety
```

## Work-package queue

### P1-WP1 — Governance and migration foundation
Status: COMPLETE

Delivered: branch, six-file startup doctrine, living state, product/architecture/brand/versioning domains, roadmap, sprint note, public-disclosure guardrails, and migration contracts.

Acceptance: repository doctrine and living state provide fresh-session authority.

### P1-WP2 — Jekyll and content dependency audit
Status: COMPLETE

Findings:

- nine published dated Markdown posts use `layout: post`;
- all nine define `title`, `date`, and `thumbnail`;
- seven of nine define `categories` and `tags`, so these fields are optional in Astro;
- no Liquid constructs occur inside published Markdown article bodies;
- Liquid/Jekyll dependencies are concentrated in `index.html`, `_layouts/default.html`, `_layouts/post.html`, and `_config.yml`;
- current permalink rule is `/:title/`, whose filename-derived title preserves case;
- exact compatibility URL manifest is recorded in `docs/architecture/contactgilmore-portfolio/03_CONTENT_AND_URL_CONTRACT.md`;
- `_posts/--2024-06-22-project-template.html` and `_posts/sre-tool-template.md` are not articles and must not enter the Astro content collection;
- existing article image paths should remain under `/assets/...` during the initial migration;
- homepage JavaScript is only smooth-scroll behavior and creates no framework dependency;
- legacy `project-pages/` templates are not linked from the homepage and must not be deleted incidentally.

Acceptance: published post set, migration-sensitive constructs, URL behavior, and exclusions are accounted for.

### P1-WP3 — CI runner and Pages deployment contract
Status: COMPLETE

Decision/evidence:

- repository is public;
- default workflows use GitHub-hosted `ubuntu-latest`;
- Node3-MINI-S is not exposed to ordinary public-repository workflow execution;
- current GitHub Pages reports `build_type: legacy`, `source: main:/`, `public: true`, and HTTPS enforced;
- Astro production deployment will eventually require an intentional GitHub Actions Pages cutover.

Acceptance: runner and deployment assumptions are evidenced and recorded in architecture doctrine.

### P1-WP4 — Astro scaffold and content schema
Status: IN PROGRESS

Add Astro 7+, TypeScript, clean project structure, global CSS foundation, content collection/schema, static build configuration, and safe GitHub-hosted validation.

Acceptance: clean install/build succeeds on branch without touching production; schema accepts all nine source post metadata shapes and rejects the two non-article files.

### P1-WP5 — Blog migration
Status: QUEUED

Migrate all nine Markdown posts/assets, preserve metadata/body, implement article layout/archive, and resolve any Jekyll-specific presentation behavior.

Acceptance: migrated post count is exactly nine and representative articles render correctly.

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
- public-disclosure safety check before commits/artifacts;
- post/asset inventory match;
- Astro clean build;
- URL regression evidence;
- representative visual/browser proof;
- GitHub-hosted public-repo runner contract maintained;
- owner approval before cutover.

## Checkpoint 2026-08-08 — Sprint opened

Decision: Portfolio 2.0 will use Job Search Studio-style governance. Astro is the preferred migration target. Production Jekyll remains intact while migration is developed and proven on a branch.

## Checkpoint 2026-08-08 — Audit and CI contract complete

WP2 and WP3 accepted. Nine published posts are directly portable Markdown with no embedded Liquid. Exact legacy URL compatibility and static asset preservation are documented. Public-repository CI will use GitHub-hosted runners, and current Pages production remains the legacy `main:/` branch build. P1-WP4 is now active.