# Where We Are

Status: active living state  
Updated: 2026-08-08

## Production authority

Production remains the existing Jekyll site on `main`. Portfolio 2.0 work is isolated to `portfolio-2.0-foundation`; no Pages cutover has occurred.

## Durable decisions

- Astro 7+ with TypeScript/content collections is the replacement static-site foundation.
- Preserve the technical blog, article bodies, compatibility URLs, and published assets.
- Use GitHub-hosted `ubuntu-latest` for this public repository.
- Treat all repository content, branches, PRs, logs, artifacts, and evidence as public disclosure surfaces.
- Avoid React/CMS/database additions unless a later requirement justifies them.

## P1

Foundation and Astro migration complete. Nine real Markdown posts are migrated byte-for-byte, legacy routes/assets are regression-tested, and a non-deploying GitHub Pages artifact has been successfully packaged.

## P2

Professional positioning and information architecture accepted by Mike on 2026-08-08.

Accepted direction:

```text
Technical Delivery & Customer Solutions
Implementation & Technical Delivery
Integrations & Troubleshooting
Customer & Stakeholder Leadership
```

Resume review confirmed the site must also keep business systems analysis and program delivery visible, alongside implementation, technical integration depth, and operational/reliability leadership.

Accepted top-level structure:

```text
Home / Work / Writing / About / Resume
```

## Current sprint

Sprint P3 — Astro Visual System and Portfolio Shell.

Detailed note: `docs/sprint_notes/SPRINT_P3_ASTRO_VISUAL_SYSTEM_AND_PORTFOLIO_SHELL_2026-08-08.md`.

## Current action

Implement the shared visual system and primary Astro page shell on the working branch, then run existing migration regression gates before owner review.
