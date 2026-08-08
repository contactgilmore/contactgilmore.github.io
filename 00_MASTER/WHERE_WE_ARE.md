# Where We Are

Status: active living state  
Updated: 2026-08-08

## Production authority

Portfolio 2.0 is now production at `https://contactgilmore.github.io/`.

Production site deployment:

```text
site source commit: bb2968e523bd7af87e3cd31a3a7e045ecb44947b
deployment workflow: Deploy Portfolio to GitHub Pages
deployment run: 31253088467
build job: SUCCESS
deploy job: SUCCESS
GitHub Pages status: built
GitHub Pages build type: workflow
HTTPS: enforced
```

The pre-cutover Jekyll rollback target remains:

```text
2637f64cce154ded6086df2220e5889bdd6aa007
```

Documentation-only commits may advance `main` after the deployed site-source commit. Do not confuse repository head with the exact deployed site commit when performing rollback or deployment forensics.

## Durable decisions

- Astro 7+ with TypeScript/content collections is the production static-site foundation.
- Preserve the technical blog, historical article bodies, compatibility URLs, and required published assets.
- Use GitHub-hosted `ubuntu-latest` for this public repository; do not expose Node3 to ordinary public-repo workflows.
- Treat all repository content, branches, PRs, logs, artifacts, screenshots, metadata, and evidence as public disclosure surfaces.
- Retain only public assets that have a content, brand, or compatibility reason; legacy carryovers are not automatically authoritative.
- Avoid React/CMS/database additions unless a later requirement justifies them.
- The P3 smoke-tested Portfolio 2.0 brand system is active visual authority.
- Mike delegates routine design/UX/navigation/color/layout decisions to GPT; the site must continue to accurately represent Mike.
- Production deployment is intentionally manual-only through `.github/workflows/deploy-pages.yml` unless a later owner-approved operating decision changes that policy.

## P1 — complete

Foundation and Astro migration complete. Nine real Markdown posts were migrated byte-for-byte and legacy routes/assets were regression-tested.

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

## P5 — complete and deployed

Quality, discoverability, accessibility, disclosure minimization, regression hardening, deployment preparation, owner approval, merge, and production deployment are complete.

Final pre-cutover hardened evidence included:

```text
site-source candidate: 5d6d7b52291507725e6ee0373d192075c3dd2e07
Validate Astro migration run 31252636550: SUCCESS
Playwright portfolio smoke run 31252636547: SUCCESS
Package Astro Pages candidate run 31252635171: SUCCESS
Pages artifact: 9020471211
Playwright evidence artifact: 9020486613
```

Final PR head after release-control documentation:

```text
c1211564f2086280d3a09fe992e1dc378aa960dd
```

PR #14 was squash-merged into production as:

```text
bb2968e523bd7af87e3cd31a3a7e045ecb44947b
```

Production deployment run:

```text
31253088467: SUCCESS
```

The deployment build reran blog source integrity, public-asset audit, Astro build, route/discovery verification, and internal-link verification before uploading the Pages artifact. The deploy job then completed successfully.

P5 hardening results:

```text
blog source integrity: 9 / 9 byte-identical
public assets: 29 referenced / 29 present / 0 orphan / 0 ZIP archives
sitemap-index.xml: generated
robots.txt: verified in build output
canonical metadata: verified
Open Graph / Twitter article metadata: verified
public-safe Person + BlogPosting structured data: verified
internal generated links: verified
responsive browser checks: passed
axe accessibility gate: passed after correcting homepage contrast findings
```

## Current operating state

Portfolio 2.0 is live from GitHub Pages workflow publishing.

The deployment and rollback authority remains:

`docs/DEPLOYMENT_AND_ROLLBACK.md`

No active implementation sprint is open. Future work belongs to ongoing portfolio operations / maintenance unless a new bounded redesign or content sprint is explicitly opened.

## Verification note

GitHub's deployment records confirm the Pages deployment succeeded and Pages reports the site as built in workflow mode. The current execution environment could not independently resolve the public `contactgilmore.github.io` hostname for an external HTTP/browser spot check after deployment, so that specific external verification remains a manual browser check rather than a claimed automated result.
