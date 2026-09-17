# Portfolio Actions, Runners, Storage, and Cache

Status: active local adoption fact

Current routing and storage posture:

```text
ordinary CI = GitHub-hosted runners only
private self-hosted execution = PROHIBITED for public PR/fork code
GitHub Actions artifacts = PROHIBITED
GitHub Actions caches = PROHIBITED
routine successful validation artifacts = OFF
GitHub dependency cache = OFF
Playwright failure artifact upload = OFF
GitHub Pages Actions artifact deployment = DISABLED
```

Current living workflow contract:

```text
governance-check.yml
  -> all pull requests + main push + manual
  -> universal repository/public-trust proof
  -> stale PR heads cancel

validate-astro.yml
  -> application/source/build-relevant pull requests + main pushes
  -> static build, source integrity, route, asset and link proof
  -> stale PR heads cancel

playwright-smoke.yml
  -> browser-relevant pull requests + main pushes
  -> real-browser responsive/accessibility/regression proof
  -> stale PR heads cancel
```

The three workflows above are intentionally separate. The fast Astro validation remains an independent structural signal from the slower browser suite. Do not collapse them merely to eliminate a few seconds of duplicated hosted setup unless measured evidence shows the separation no longer provides useful failure isolation.

Public GitHub-hosted compute and GitHub-hosted persistent storage are separate policy decisions. Standard hosted runners remain the correct isolation boundary for this public repository; using them does not authorize Actions artifacts, Pages artifacts, dependency caches, Packages, LFS, or other convenience storage.

Repository package identity is lockfile-controlled. Setup actions explicitly disable package-manager caching, and workflows use `npm ci` rather than ad-hoc dependency installation.

Playwright diagnostics remain available through Actions logs and reproducible reruns. Persistent GitHub artifact storage is not required to operate or review the public portfolio.

GitHub-native Actions storage is fail-closed. `actions/upload-artifact`, `actions/upload-pages-artifact`, `actions/cache`, and setup-action cloud package caches are prohibited. No repository-local artifact exception is authorized.

The former GitHub Pages Actions deployment workflow is removed because its required Pages artifact conflicts with the zero-native-storage rule. The currently published site must not be treated as authorization to recreate that workflow. A future hosting/deployment route must preserve the public-repository trust boundary while avoiding GitHub Actions artifact/cache storage.

The retired candidate-packaging workflow remains prohibited and must not be recreated as a storage workaround.

Stale pull-request heads are non-authoritative. Governance, Astro validation, and Playwright must use PR/ref-keyed concurrency with `cancel-in-progress: true` so superseded heads stop consuming hosted compute.
