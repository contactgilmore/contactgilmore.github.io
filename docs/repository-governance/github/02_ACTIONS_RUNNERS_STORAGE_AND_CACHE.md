# Portfolio Actions, Runners, Storage, and Cache

Status: active local adoption fact

Current routing and storage posture:

```text
ordinary CI and deployment = GitHub-hosted runners only
private self-hosted execution = PROHIBITED for public PR/fork code
GitHub Actions artifacts audit (2026-08-15) = 0
GitHub Actions caches audit (2026-08-15) = 0
routine successful validation artifacts = OFF
GitHub dependency cache = OFF by default
Playwright failure evidence = smallest useful payload / 1 day
```

Repository package identity is lockfile-controlled. Setup actions explicitly disable package-manager caching, and workflows use `npm ci` rather than ad-hoc dependency installation.

The former successful `playwright-smoke-evidence` object and the P10 production artifact remain historical evidence by recorded ID/digest and GitHub run history; they are not live Actions storage now.

GitHub Pages deployment artifacts are bounded deployment mechanics rather than the repository's general evidence warehouse. The retired candidate-packaging workflow, `.github/workflows/package-pages-candidate.yml`, must remain absent unless a future owner-approved release architecture proves a new need through the Document Creation Gate and storage exception law.
