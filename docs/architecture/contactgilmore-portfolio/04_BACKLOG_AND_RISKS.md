# Architecture Backlog and Risks

Status: active maintenance record  
Updated: 2026-08-08

## Completed foundation

The Jekyll-to-Astro migration is complete. Current production architecture already includes:

- Astro 7+ static generation;
- typed Markdown content collections;
- preserved historical blog routes/assets;
- generated sitemap/canonical/discovery metadata;
- GitHub-hosted Actions for build, validation, browser smoke, and Pages deployment;
- responsive Playwright and axe coverage;
- automatic GitHub Pages deployment after approved merge to `main`;
- no React/CMS/database/runtime server dependency.

Do not reopen migration scaffolding or self-hosted-runner work as if it were pending.

## Current backlog

- maintain dependency currency without unnecessary framework churn;
- periodically run Lighthouse/performance review when a measurable performance question exists;
- expand route/asset/link regressions when new content-system behavior is introduced;
- review draft-content routing before relying on `draft: true` for unpublished material, because route generation must not accidentally make drafts publicly addressable;
- consider richer topic/category discovery only if archive scale justifies additional presentation logic;
- consider a custom domain or alternate static host only when there is a concrete professional/reliability benefit and URL continuity is protected.

## Risks

- slug or historical URL drift during future content changes;
- broken image/social-preview paths;
- timezone-sensitive handling of date-only editorial metadata;
- dependency upgrades changing Markdown/Astro behavior unexpectedly;
- adding unnecessary client JavaScript/framework dependencies;
- assuming a draft flag is private without verifying route-generation behavior;
- changing hosting/deployment in a way that weakens rollback or public URL continuity;
- public-repository workflows exposing secrets/private infrastructure through logs, artifacts, or self-hosted runners.
