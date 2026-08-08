# Where We Are

Status: active living state  
Updated: 2026-08-08

## Production authority

Production remains the existing Jekyll site on `main` at commit `2637f64cce154ded6086df2220e5889bdd6aa007`. Portfolio 2.0 work is isolated to `portfolio-2.0-foundation`; no Pages cutover has occurred.

GitHub Pages currently remains in legacy branch publishing mode from `main` `/`. The production source has not been changed to GitHub Actions.

## Durable decisions

- Astro 7+ with TypeScript/content collections is the replacement static-site foundation.
- Preserve the technical blog, historical article bodies, compatibility URLs, and required published assets.
- Use GitHub-hosted `ubuntu-latest` for this public repository; do not expose Node3 to ordinary public-repo workflows.
- Treat all repository content, branches, PRs, logs, artifacts, screenshots, metadata, and evidence as public disclosure surfaces.
- Retain only public assets that have a content, brand, or compatibility reason; legacy carryovers are not automatically authoritative.
- Avoid React/CMS/database additions unless a later requirement justifies them.
- The P3 smoke-tested Portfolio 2.0 brand system is active visual authority.
- Mike delegates routine design/UX/navigation/color/layout decisions to GPT; explicit owner approval remains required for production cutover and the site must accurately represent Mike.
- Production deployment for Portfolio 2.0 is intentionally manual-only after cutover approval; merging code is not itself deployment authorization.

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

Astro visual system and primary portfolio shell implemented and browser-tested across desktop, tablet, and phone. Brand doctrine records the proven palette, typography, spacing, navigation, responsive behavior, component language, motion posture, and allowed modern flow patterns.

## P4 — complete

Professional evidence and content refresh completed.

Case studies:

```text
/work/implementation-delivery/
/work/reliability-remediation/
/work/operating-model/
```

Home, Work, Resume, and About are integrated around these evidence lanes without turning the site into a duplicated resume. Historical blog prose remains unchanged.

## P5 — engineering complete; owner cutover gate

Quality, discoverability, accessibility, disclosure minimization, regression hardening, and deployment preparation are complete.

Final hardened site-source candidate:

```text
commit: 5d6d7b52291507725e6ee0373d192075c3dd2e07
Validate Astro migration run 31252636550: SUCCESS
Playwright portfolio smoke run 31252636547: SUCCESS
Package Astro Pages candidate run 31252635171: SUCCESS
Pages artifact: 9020471211
Playwright evidence artifact: 9020486613
```

P5 results:

```text
blog source integrity: 9 / 9 byte-identical
public assets: 29 referenced / 29 present / 0 orphan / 0 ZIP archives
sitemap-index.xml: generated
robots.txt: verified
canonical metadata: verified
Open Graph / Twitter article metadata: verified
public-safe Person + BlogPosting structured data: verified
internal generated links: verified
responsive browser checks: passed
axe accessibility gate: passed after correcting homepage contrast findings
```

A first axe pass found six serious homepage color-contrast violations in pale card-index/date text. Those colors were corrected using the established muted text token; the final browser run passed on desktop, tablet, and phone.

Deployment preparation is complete but unexecuted:

- `.github/workflows/deploy-pages.yml` is manual-only via `workflow_dispatch`;
- `docs/DEPLOYMENT_AND_ROLLBACK.md` defines the controlled cutover and deterministic rollback;
- current Pages remains legacy `main /` publishing;
- no merge, Pages source change, or production deployment has occurred.

## Current sprint

Sprint P5 — Quality, Discoverability, and Launch Hardening.

Current state: **P5-WP7 — Owner cutover gate**.

Detailed note: `docs/sprint_notes/SPRINT_P5_QUALITY_DISCOVERABILITY_AND_LAUNCH_2026-08-08.md`.

## Current action

Wait for explicit owner cutover approval. After approval, follow `docs/DEPLOYMENT_AND_ROLLBACK.md`: re-confirm PR #14 and the production baseline, switch Pages source to GitHub Actions, squash-merge the Portfolio 2.0 PR, manually dispatch the Pages deployment from `main`, validate production, and record the deployed commit/run.
