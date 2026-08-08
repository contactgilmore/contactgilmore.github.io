# Where We Are

Status: active living state  
Updated: 2026-08-08

## Production authority

Production remains the existing Jekyll site on `main`. No production Pages setting, content, or URL has been changed by Portfolio 2.0 work.

Working branch: `portfolio-2.0-foundation`.

## Durable decisions

- Preserve the technical blog and its Markdown content.
- Replace the homepage information architecture and visual presentation rather than merely rewriting copy.
- Astro 7+ with TypeScript/content collections is the replacement static-site foundation.
- Do not default to React, a CMS, a database, or another hosting platform.
- Treat the entire repository, branches, PRs, Actions logs/artifacts, screenshots, metadata, and generated evidence as public disclosure surfaces.
- Use GitHub-hosted `ubuntu-latest` for this public repository; Node3 is not an ordinary runner for this repo.
- Preserve existing article URLs and `/assets/...` paths through migration.

## P1 closeout

Sprint P1 — Portfolio 2.0 Foundation and Astro Migration is complete.

Proven on the working branch:

- nine real Markdown articles migrated byte-for-byte from their original Git blobs;
- two non-article `_posts` files excluded from the Astro collection;
- typed Astro content schema accepts the current metadata shapes;
- exact mixed-case legacy article routes are generated;
- public blog assets are present in Astro build output;
- automated source-integrity and build-output regression gates pass;
- GitHub-hosted validation succeeds;
- a non-deploying `github-pages` artifact was packaged successfully;
- production remains the legacy Jekyll `main:/` Pages source.

P1 candidate evidence:

```text
candidate head: 8590942ee8d560fdfaddf8372ca567085c7072cd
Pages artifact workflow run: 31249469185
artifact name: github-pages
artifact digest: sha256:7e3364af7c68ffbc15ac3b5d76298d10d018d16736d8a9a7781dd516c7fc6cd6
```

## Current sprint

Sprint P2 — Professional Positioning and Information Architecture.

Detailed note: `docs/sprint_notes/SPRINT_P2_POSITIONING_AND_INFORMATION_ARCHITECTURE_2026-08-08.md`.

## Next action

P2-WP1: benchmark current professional/technical portfolio patterns and define the visitor decision model before writing final homepage copy or implementing the redesign.