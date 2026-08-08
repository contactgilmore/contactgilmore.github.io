# Portfolio 2.0 Deployment and Rollback Contract

Updated: 2026-08-08  
Production repository: `contactgilmore/contactgilmore.github.io`  
Production URL: `https://contactgilmore.github.io/`

## Safety boundary

Portfolio 2.0 must not deploy until Mike explicitly approves cutover.

Current pre-cutover production authority:

```text
branch: main
commit: 2637f64cce154ded6086df2220e5889bdd6aa007
site generator: legacy Jekyll
GitHub Pages build type: legacy
Pages source: main /
```

The Portfolio 2.0 candidate is developed on `portfolio-2.0-foundation`. The deployment workflow is intentionally `workflow_dispatch` only. Merging code does not itself authorize a deployment.

## Cutover prerequisites

Before cutover, all of the following must be true on the exact candidate commit:

1. `Validate Astro migration` is green.
2. `Playwright portfolio smoke` is green, including accessibility checks.
3. `Package Astro Pages candidate` is green and produces a Pages artifact.
4. Blog source-integrity verification confirms all nine historical Markdown posts are byte-identical to their protected sources.
5. Public asset audit reports no missing referenced assets, no orphan public assets, and no public ZIP archives.
6. Generated route/discovery checks and internal-link checks are green.
7. PR #14 is mergeable and its head SHA matches the reviewed candidate.
8. Mike explicitly approves production cutover.

## Controlled cutover

Use this order so the legacy branch publisher never tries to publish the Astro source tree as a Jekyll site.

1. Record the current production commit and current Pages configuration.
2. In repository Settings > Pages, change **Build and deployment > Source** from the legacy branch source to **GitHub Actions**.
3. Confirm no deployment has been started merely by changing the source.
4. Merge PR #14 into `main`. Prefer a **squash merge** so the entire Portfolio 2.0 cutover is represented by one reversible commit on `main`.
5. Record the resulting `main` commit SHA as the Portfolio 2.0 cutover commit.
6. From GitHub Actions, manually run **Deploy Portfolio to GitHub Pages** from `main`.
7. Confirm the build job passes all source, asset, route, and link gates before the deploy job runs.
8. Confirm the deployment job succeeds and reports the expected Pages URL.
9. Validate the public site at `https://contactgilmore.github.io/` on desktop and phone, including Home, Work, Resume, Writing, one legacy article URL, sitemap, and `robots.txt`.
10. Record the successful deployment run and deployed commit in `00_MASTER/WHERE_WE_ARE.md`.

## Rollback triggers

Rollback immediately if the production site has a material rendering failure, broken primary navigation, missing historical content/assets, inaccessible critical content, wrong canonical/Pages URL behavior, or an unexpected disclosure issue.

Minor cosmetic defects that do not impair use or disclosure can be fixed forward instead.

## Deterministic rollback

The rollback target is the pre-cutover Jekyll production state at:

```text
2637f64cce154ded6086df2220e5889bdd6aa007
```

Preferred rollback after a squash merge:

1. Revert the single Portfolio 2.0 squash commit on `main` and push the revert.
2. In Settings > Pages, change **Build and deployment > Source** back to **Deploy from a branch**.
3. Select branch `main` and folder `/ (root)`.
4. Allow the legacy Pages build to publish the restored Jekyll tree.
5. Verify `https://contactgilmore.github.io/` and at least one historical article URL.
6. Record the rollback commit, Pages configuration, and verification result.

If the Portfolio 2.0 PR is merged with a merge commit instead of squash, revert that merge commit using the `main` parent rather than reverting individual feature commits.

## Deployment workflow contract

`.github/workflows/deploy-pages.yml` is intentionally manual-only and must remain so unless a later owner-approved operating decision changes deployment policy.

The workflow:

- runs only on GitHub-hosted `ubuntu-latest`;
- grants only `contents: read`, `pages: write`, and `id-token: write`;
- uses the `github-pages` environment;
- builds Astro from source rather than deploying a checked-in `dist/` directory;
- reruns blog-integrity, public-asset, route/discovery, and internal-link gates before upload;
- uploads `dist/` with `actions/upload-pages-artifact`;
- deploys only after the build job succeeds;
- does not use Node3, third-party deployment services, repository secrets, analytics, or external runtime infrastructure.

## Configuration note

This repository is the special user-site repository `contactgilmore/contactgilmore.github.io`, so Astro's configured site root is `https://contactgilmore.github.io` and no repository-name `base` path is required.
