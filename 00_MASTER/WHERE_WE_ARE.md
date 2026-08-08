# Where We Are

Status: active living state  
Updated: 2026-08-08

## Production authority

Production remains the existing Jekyll site on `main`. Portfolio 2.0 work is isolated to `portfolio-2.0-foundation`; no Pages cutover has occurred.

## Durable decisions

- Astro 7+ with TypeScript/content collections is the replacement static-site foundation.
- Preserve the technical blog, historical article bodies, compatibility URLs, and required published assets.
- Use GitHub-hosted `ubuntu-latest` for this public repository; do not expose Node3 to ordinary public-repo workflows.
- Treat all repository content, branches, PRs, logs, artifacts, screenshots, metadata, and evidence as public disclosure surfaces.
- Retain only public assets that have a content, brand, or compatibility reason; legacy carryovers are not automatically authoritative.
- Avoid React/CMS/database additions unless a later requirement justifies them.
- The P3 smoke-tested Portfolio 2.0 brand system is active visual authority.
- Mike delegates routine design/UX/navigation/color/layout decisions to GPT; explicit owner approval remains required for production cutover and the site must accurately represent Mike.

## P1 — complete

Foundation and Astro migration complete. Nine real Markdown posts are migrated byte-for-byte, legacy routes/assets are regression-tested, and a non-deploying GitHub Pages artifact has been successfully packaged.

## P2 — complete

Professional positioning and information architecture accepted on 2026-08-08.

Accepted direction:

```text
Technical Delivery & Customer Solutions
Implementation & Technical Delivery
Integrations & Troubleshooting
Customer & Stakeholder Leadership
```

Business systems analysis, program delivery, and operational/reliability leadership remain explicit supporting dimensions.

Accepted top-level structure:

```text
Home / Work / Writing / About / Resume
```

## P3 — complete

Astro visual system and primary portfolio shell implemented and browser-tested across desktop, tablet, and phone. Brand doctrine now records the proven palette, typography, spacing, navigation, responsive behavior, component language, motion posture, and allowed modern flow patterns.

## P4 — complete

Professional evidence and content refresh completed.

Case studies:

```text
/work/implementation-delivery/
/work/reliability-remediation/
/work/operating-model/
```

Home, Work, Resume, and About were integrated around these evidence lanes without turning the site into a duplicated resume. Historical blog prose remains unchanged.

Final P4 evidence:

```text
source candidate: 9d983a771d02d14dc71821d2f9777647920c57b6
Validate Astro migration run 31251998310: SUCCESS
Playwright portfolio smoke run 31251998311: SUCCESS
blog integrity: SUCCESS
Astro build: SUCCESS
legacy route/assets: SUCCESS
expanded browser smoke: SUCCESS
```

Public-safety review began pruning unnecessary legacy asset carryovers; P5 continues that work using a reference-based inventory rather than deleting historical assets by guesswork.

## Current sprint

Sprint P5 — Quality, Discoverability, and Launch Hardening.

Detailed note: `docs/sprint_notes/SPRINT_P5_QUALITY_DISCOVERABILITY_AND_LAUNCH_2026-08-08.md`.

## Current action

P5-WP1: inventory actual asset references from Astro source and all nine historical Markdown posts, minimize unnecessary public carryovers, and preserve required compatibility assets before SEO/accessibility/deployment hardening.
