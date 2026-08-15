# Portfolio Actions, Runners, Storage, and Cache

Status: active local adoption fact

- ordinary workflows use GitHub-hosted runners because the repository is public;
- GitHub dependency caching is disabled unless a later bounded exception is justified;
- repository package identity is lockfile-controlled;
- Playwright failure evidence may upload only as a short-retention diagnostic exception;
- the accepted historical `playwright-smoke-evidence` artifact is intentionally preserved until its existing retention expires or a later evidence decision changes that classification;
- GitHub Pages deployment artifacts are deployment mechanics rather than the repository's general evidence warehouse.

Current audit at central adoption: Actions caches = 0.
