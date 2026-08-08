# Sprint P5 — Quality, Discoverability, and Launch Hardening

Opened: 2026-08-08  
Status: OPEN  
Owner: Mike Gilmore  
Project manager/executor: GPT  
Working branch: `portfolio-2.0-foundation`

## Thesis

Turn the content-complete Portfolio 2.0 candidate into a production-ready public site: minimize unnecessary public assets, improve discoverability and metadata, harden accessibility/performance, prove links and browser behavior, and prepare a reversible GitHub Pages cutover without deploying until Mike explicitly approves it.

## Protected boundaries

- `main` remains current production until explicit cutover approval.
- Historical Markdown article bodies and compatibility URLs remain protected.
- Repository and build outputs must remain safe for unrestricted public disclosure.
- Do not expose Node3 to public repository workflows.
- Do not add tracking/analytics, third-party scripts, CMS, React, or services unless a product need is separately justified.

## Work packages

### P5-WP1 — Public asset minimization and disclosure audit
Status: IN PROGRESS

Build an evidence-based inventory of assets referenced by Astro source and the nine historical Markdown articles. Preserve required assets and intentional site identity assets; remove unnecessary legacy archives/gallery carryovers rather than publishing the entire old asset tree by default.

Acceptance: every retained public asset has a content/brand/compatibility reason; no referenced historical article asset is broken.

### P5-WP2 — Metadata, sitemap, robots, and social discovery
Status: QUEUED

Add production-grade sitemap/robots behavior, improve Open Graph/Twitter metadata and social-preview handling, and preserve canonical URL correctness.

Acceptance: built output exposes canonical metadata, sitemap discovery, robots policy, and stable social-preview metadata without leaking private information.

### P5-WP3 — Structured data and semantic discovery
Status: QUEUED

Add conservative schema.org structured data for the public professional profile and, where appropriate, article metadata. Use only public-safe facts already supported by the portfolio.

Acceptance: structured data is valid, minimal, and does not claim unsupported roles, organizations, credentials, or personal details.

### P5-WP4 — Accessibility, performance, and image hardening
Status: QUEUED

Review semantic structure, focus behavior, contrast, responsive rendering, image dimensions/loading, asset weight, and Lighthouse-class performance/accessibility concerns. Fix issues rather than merely recording scores.

Acceptance: no material accessibility or performance blockers and no regression in the proven brand system.

### P5-WP5 — Link, URL, browser, and Pages artifact regression
Status: QUEUED

Expand automated checks for internal links, compatibility URLs, required assets, and production-build browser behavior. Package a non-deploying Pages candidate from the final hardened commit.

Acceptance: link/route/browser gates are green and the exact candidate produces a valid GitHub Pages artifact.

### P5-WP6 — Deployment workflow and rollback contract
Status: QUEUED

Prepare the trusted GitHub Pages deployment workflow and document the rollback path from Astro back to the pre-cutover Jekyll production commit. Do not execute deployment during this work package.

Acceptance: cutover and rollback are deterministic and documented, with production deployment still gated by owner approval.

### P5-WP7 — Owner cutover gate
Status: QUEUED

Present the final production candidate and evidence. Merge/deploy only after explicit Mike approval.

## Validation posture

Use GitHub-hosted `ubuntu-latest`. The existing migration validator and Playwright suite remain mandatory. Add quality gates only when they provide actionable protection rather than CI theater.

## Production boundary

P5 may prepare and package production artifacts, but no `main` merge, Pages source change, or deployment occurs without explicit owner approval.
