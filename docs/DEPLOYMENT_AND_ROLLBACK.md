# Portfolio 2.0 Deployment and Rollback Contract

Updated: 2026-08-08  
Production repository: `contactgilmore/contactgilmore.github.io`  
Production URL: `https://contactgilmore.github.io/`

## Current production authority

Portfolio 2.0 is live from Astro through GitHub Pages workflow publishing.

```text
production branch: main
site generator: Astro
GitHub Pages build type: workflow
HTTPS: enforced
production deployment: automatic on push to main after approved merge
manual workflow dispatch: fallback only
```

The original Jekyll pre-cutover rollback target remains recorded for historical recovery:

`2637f64cce154ded6086df2220e5889bdd6aa007`

The initial Portfolio 2.0 production site-source squash commit was:

`bb2968e523bd7af87e3cd31a3a7e045ecb44947b`

P7 source was merged as:

`5af373ab34a2ea1fd4692dc271fc1063b99f11f8`

Automatic deployment policy was established by:

`88d4a34d63234416f73ba4771cc9839359d5196a`

First successful automatic Pages deployment run:

`31280952066`

## Production-change prerequisites

Before a material production change, all applicable gates must pass on the exact candidate commit: Astro validation; protected blog identity/date/route checks; public asset audit; generated route/internal-link checks; Playwright browser regression; axe accessibility checks; public-disclosure/professional-read review; reviewed PR head match; and owner approval when the change materially affects public representation.

## Controlled deployment

Normal release path:

```text
bounded branch
-> PR
-> exact-head applicable validation
-> owner approval when required
-> merge to main
-> push event automatically runs Deploy Portfolio to GitHub Pages
-> build/integrity gates
-> Pages artifact upload
-> deploy
-> post-deploy verification
```

Merge to `main` is the human production authorization. A separate manual deployment click is not required for routine releases.

`workflow_dispatch` remains available for deliberate re-runs, operational fallback, or recovery.

## Rollback triggers

Rollback or fix forward based on severity. Rollback is preferred for material rendering failure, broken primary navigation, missing historical content/assets, inaccessible critical content, incorrect canonical/Pages behavior, or unexpected public-disclosure/security issues. Minor cosmetic defects can normally be fixed forward.

## Rollback procedure

1. Identify the exact known-good production commit immediately before the change.
2. Revert the bounded merge/squash commit or restore the last known-good source state through normal Git history.
3. Merge the rollback/fix to `main`; the push automatically redeploys Pages.
4. If automatic deployment requires an operational retry, use `workflow_dispatch` or the appropriate Actions retry control.
5. Verify the public site and affected surfaces.
6. Record material rollback evidence in repository authority.

Routine rollback should normally return to the immediately previous known-good Astro production commit rather than reverting the entire platform migration.

## Deployment workflow contract

`.github/workflows/deploy-pages.yml` triggers on pushes to `main` and retains `workflow_dispatch` as fallback.

The workflow uses GitHub-hosted `ubuntu-latest`, grants only required source/Pages permissions, uses the `github-pages` environment, builds Astro from source, reruns integrity/asset/route/link gates, uploads the generated static artifact, and deploys only after the build job succeeds. It does not depend on private self-hosted infrastructure or third-party deployment services.

## Configuration note

This is the user-site repository `contactgilmore/contactgilmore.github.io`, so Astro's site root is `https://contactgilmore.github.io` and no repository-name base path is required.
