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
production deployment: manual-only
```

The original Jekyll pre-cutover rollback target remains recorded for historical recovery:

```text
2637f64cce154ded6086df2220e5889bdd6aa007
```

The initial Portfolio 2.0 production site-source squash commit was:

```text
bb2968e523bd7af87e3cd31a3a7e045ecb44947b
```

Later documentation or approved content commits may advance `main`; always use current GitHub and `00_MASTER` state for present production truth.

## Production-change prerequisites

Before a material production change, all applicable gates must pass on the exact candidate commit:

1. Astro validation is green.
2. Historical blog source-integrity protection remains green when protected article bodies are not intentionally being edited.
3. Public asset audit reports no missing referenced assets or unexplained orphan/archive files.
4. Generated route/discovery and internal-link checks are green.
5. Playwright browser regression is green across the supported desktop/tablet/phone projects.
6. axe accessibility checks are green.
7. The exact changed-file set has passed the public-disclosure and professional-read review.
8. The PR head matches the reviewed candidate.
9. Mike explicitly approves merge/deployment when the change is production-significant.

## Controlled deployment

1. Record the current production `main` commit and candidate PR/head.
2. Confirm required CI checks on the exact candidate.
3. Merge only after the applicable owner gate is satisfied.
4. From GitHub Actions, manually run **Deploy Portfolio to GitHub Pages** from `main`.
5. Confirm the build job passes all configured source, asset, route, and link gates before deployment.
6. Confirm the deployment job succeeds and reports the expected Pages URL.
7. Validate the public site on representative desktop and phone surfaces, including affected pages and at least one protected historical article route when relevant.
8. Record the successful deployment commit/run in `00_MASTER` when production truth materially changes.

## Rollback triggers

Rollback or fix forward based on severity.

Rollback is preferred for material rendering failure, broken primary navigation, missing historical content/assets, inaccessible critical content, incorrect canonical/Pages behavior, or an unexpected public-disclosure/security issue.

Minor cosmetic defects that do not impair use, accessibility, disclosure, or core navigation can normally be fixed forward.

## Rollback procedure

For a newly merged production change:

1. Identify the exact production commit immediately before the change.
2. Revert the bounded merge/squash commit or restore the last known-good source state through normal Git history.
3. Manually run the Pages deployment workflow from the restored `main` state.
4. Verify the public site and the specific surfaces that triggered rollback.
5. Record the rollback commit, deployment run, and verification result in repository authority when material.

The original Jekyll commit exists as a historical disaster-recovery point, but routine Portfolio 2.0 rollback should normally return to the immediately previous known-good Astro production commit rather than reverting the entire platform migration.

## Deployment workflow contract

`.github/workflows/deploy-pages.yml` remains intentionally manual-only unless a later owner-approved operating decision changes deployment policy.

The workflow:

- runs only on GitHub-hosted `ubuntu-latest`;
- grants only the permissions needed for source read and Pages deployment;
- uses the `github-pages` environment;
- builds Astro from source rather than deploying a checked-in `dist/` directory;
- reruns configured integrity/asset/route/link gates before upload;
- uploads the generated static site as the Pages artifact;
- deploys only after the build job succeeds;
- does not depend on private self-hosted infrastructure or third-party deployment services.

## Configuration note

This repository is the user-site repository `contactgilmore/contactgilmore.github.io`, so Astro's configured site root is `https://contactgilmore.github.io` and no repository-name base path is required.
