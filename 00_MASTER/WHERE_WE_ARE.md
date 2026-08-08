# Where We Are

Status: active living state  
Updated: 2026-08-08

## Current authority

Production remains the existing Jekyll site on `main` at commit `2637f64cce154ded6086df2220e5889bdd6aa007` when Portfolio 2.0 planning began.

Working branch: `portfolio-2.0-foundation`.

## Decision state

- Keep the technical blog and its Markdown content.
- Replace the portfolio information architecture and visual presentation rather than merely rewriting copy.
- Target Astro 7+ with TypeScript, Markdown/content collections, custom HTML/CSS, minimal JavaScript, GitHub Actions, and GitHub Pages.
- Do not default to React.
- Preserve current production until the replacement is validated.
- Use the Job Search Studio governance model adapted for this repository.
- Treat the entire repository, branches, PRs, logs, artifacts, and generated evidence as public disclosure surfaces.
- Use GitHub-hosted `ubuntu-latest` for this public repository; do not expose Node3 to ordinary public-repo workflows.

## Migration audit state

Completed:

```text
P1-WP1 governance/bootstrap
P1-WP2 Jekyll/content dependency audit
P1-WP3 CI runner and Pages deployment contract
```

Audit established:

- nine published Markdown posts;
- two non-article/template files inside `_posts` that must be excluded;
- no Liquid embedded in published Markdown article bodies;
- Jekyll permalink compatibility paths derived from filenames with case preserved;
- current Pages deployment is legacy `main:/` with HTTPS enforced;
- existing `/assets/...` paths should be preserved through the first Astro migration pass;
- `categories` and `tags` are optional because only seven of nine published posts define them.

Detailed URL/content contract: `docs/architecture/contactgilmore-portfolio/03_CONTENT_AND_URL_CONTRACT.md`.

## Current sprint

Sprint P1: Portfolio 2.0 Foundation and Astro Migration.

Detailed note: `docs/sprint_notes/SPRINT_P1_FOUNDATION_AND_ASTRO_MIGRATION_2026-08-08.md`.

## Next action

P1-WP4: scaffold Astro and TypeScript, define the blog content schema, preserve the existing static asset URL contract, and establish a clean build before migrating article bodies.