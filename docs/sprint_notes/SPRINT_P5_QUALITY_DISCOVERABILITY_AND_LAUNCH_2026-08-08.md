# Sprint P5 — Quality, Discoverability, and Launch Hardening

Opened: 2026-08-08  
Status: OWNER CUTOVER GATE  
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

## Final hardened site candidate

```text
site-source commit: 5d6d7b52291507725e6ee0373d192075c3dd2e07
Validate Astro migration: run 31252636550 — SUCCESS
Playwright portfolio smoke: run 31252636547 — SUCCESS
Package Astro Pages candidate: run 31252635171 — SUCCESS
Pages artifact: github-pages / artifact 9020471211
Playwright evidence: artifact 9020486613
```

Release-control documentation and the manual deployment workflow were added after the site-source candidate without changing site source/content.

## Work packages

### P5-WP1 — Public asset minimization and disclosure audit
Status: COMPLETE

A deterministic source-reference audit now compares `/assets/...` references in Astro source and all nine protected Markdown posts with the public asset tree.

Result on the hardened candidate:

```text
29 referenced
29 present
0 unreferenced
0 public ZIP archives
```

Forty-two unnecessary legacy carryovers were removed, including duplicate logo sets, dormant gallery/profile images, old project images, unused icons, and the remaining ZIP archive. Missing, orphan, or archive public assets now fail validation.

### P5-WP2 — Metadata, sitemap, robots, and social discovery
Status: COMPLETE

Implemented:

- official Astro sitemap integration;
- generated `sitemap-index.xml`;
- `robots.txt` with sitemap discovery;
- canonical URL verification;
- Open Graph and Twitter metadata;
- article thumbnail social-preview metadata.

Build and Playwright gates verify the discovery outputs.

### P5-WP3 — Structured data and semantic discovery
Status: COMPLETE

Added conservative public-safe schema.org structured data:

- site-wide `Person` identity graph for Mike Gilmore;
- `BlogPosting` data for technical articles;
- public GitHub and LinkedIn identity links only;
- no telephone, street address, birth date, unsupported employer claim, or inferred credential data.

Playwright verifies both presence and disclosure boundaries.

### P5-WP4 — Accessibility, performance, and image hardening
Status: COMPLETE

Added `@axe-core/playwright` accessibility scans on representative Home, Work, and article surfaces across desktop, tablet, and phone projects.

The first axe run found six serious homepage color-contrast violations in pale micro-label/date text. The design was corrected using the existing muted text token rather than suppressing the rule. The final Playwright run passed.

Existing browser gates continue to verify one H1, main content, responsive rendering, horizontal overflow, browser console/page errors, navigation, and skip-link focus. Reduced-motion behavior remains part of the brand CSS.

### P5-WP5 — Link, URL, browser, and Pages artifact regression
Status: COMPLETE

Added deterministic generated-output internal-link verification and expanded static output checks for discovery files. Both the validation and non-deploying Pages package workflows run the hardened source/asset/route/link gates.

Final non-deploying Pages artifact:

```text
workflow run: 31252635171
artifact id: 9020471211
artifact name: github-pages
head SHA: 5d6d7b52291507725e6ee0373d192075c3dd2e07
result: SUCCESS
```

### P5-WP6 — Deployment workflow and rollback contract
Status: COMPLETE / NOT EXECUTED

Prepared `.github/workflows/deploy-pages.yml` using the current GitHub Pages custom-workflow contract:

- manual `workflow_dispatch` only;
- GitHub-hosted `ubuntu-latest`;
- `contents: read`, `pages: write`, `id-token: write` permissions;
- `actions/configure-pages@v5`;
- `actions/upload-pages-artifact@v4`;
- `github-pages` deployment environment;
- `actions/deploy-pages@v4`;
- deployment only after all build/source/asset/route/link gates pass.

The deployment workflow has not run because it is intentionally not on production `main` yet and production approval has not been granted.

Rollback/cutover authority: `docs/DEPLOYMENT_AND_ROLLBACK.md`.

Current Pages configuration remains:

```text
build type: legacy
source: main /
production commit: 2637f64cce154ded6086df2220e5889bdd6aa007
```

### P5-WP7 — Owner cutover gate
Status: READY / WAITING FOR OWNER APPROVAL

No merge, Pages publishing-source change, or production deployment has occurred.

Owner gate sequence after explicit approval:

1. Reconfirm PR #14 head and final checks.
2. Change Pages source from legacy branch publishing to GitHub Actions.
3. Squash-merge PR #14 into `main`.
4. Manually dispatch **Deploy Portfolio to GitHub Pages** from `main`.
5. Verify the live public site and record deployment evidence.

## Validation posture

GitHub-hosted `ubuntu-latest` remains mandatory. Node3 is not exposed. Site validation and browser validation run on PRs; the final production deployment workflow is manual-only to prevent an accidental cutover.

## Production boundary

P5 engineering work is complete. Production remains unchanged until Mike explicitly authorizes WP7 cutover.
