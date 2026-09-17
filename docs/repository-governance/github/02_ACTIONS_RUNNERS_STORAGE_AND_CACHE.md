# Portfolio Actions, Runners, Storage, and Cache

Status: active local adoption fact

Current routing and storage posture:

```text
ordinary CI and deployment = GitHub-hosted runners only
private self-hosted execution = PROHIBITED for public PR/fork code
GitHub Actions artifacts audit (2026-09-09) = ordinary validation artifacts disabled
GitHub Actions caches audit (2026-09-09) = 0
routine successful validation artifacts = OFF
GitHub dependency cache = OFF by default
Playwright failure artifact upload = OFF
GitHub Pages deployment artifact = APPROVED PLATFORM EXCEPTION
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

deploy-pages.yml
  -> qualifying main pushes + manual recovery
  -> production GitHub Pages build/deploy
  -> no pull-request deployment
  -> existing Pages deployment concurrency remains authoritative
```

The four workflows above are intentionally separate. The fast Astro validation remains an independent structural signal from the slower browser suite. Do not collapse them merely to eliminate a few seconds of duplicated hosted setup unless measured evidence shows the separation no longer provides useful failure isolation.

Public GitHub-hosted compute and GitHub-hosted persistent storage are separate policy decisions. Standard hosted runners remain the correct isolation boundary for this public repository; using them does not authorize ordinary Actions artifacts, dependency caches, Packages, LFS, or other convenience storage.

Repository package identity is lockfile-controlled. Setup actions explicitly disable package-manager caching, and workflows use `npm ci` rather than ad-hoc dependency installation.

Playwright failure diagnostics remain available through Actions logs and reproducible reruns. The former large `playwright-smoke-failure-evidence` upload is disabled because persistent GitHub storage is not required to operate or review the public portfolio.

The former successful `playwright-smoke-evidence` object and the P10 production artifact remain historical evidence by recorded ID/digest and GitHub run history; they are not live Actions storage now.

GitHub Pages deployment artifacts are bounded, platform-required deployment mechanics rather than the repository's general evidence warehouse. `actions/upload-pages-artifact` remains approved while GitHub Pages is the accepted public hosting architecture. This exception does not permit ordinary `actions/upload-artifact` test/build evidence. The retired candidate-packaging workflow, `.github/workflows/package-pages-candidate.yml`, must remain absent unless a future owner-approved release architecture proves a new need through the Document Creation Gate and storage exception law.

Stale pull-request heads are non-authoritative. Governance, Astro validation, and Playwright must use PR/ref-keyed concurrency with `cancel-in-progress: true` so superseded heads stop consuming hosted compute. Pages keeps its separate deployment concurrency because deployment serialization is a production concern rather than PR-validation scheduling.
