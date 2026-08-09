# Versioning Backlog and Risks

Status: active maintenance record  
Updated: 2026-08-08

## Completed foundation

The current release contract is established:

```text
bounded branch
-> PR
-> exact-head applicable CI/browser/accessibility evidence
-> owner approval when required
-> squash merge to main
-> automatic GitHub Pages build/deploy
-> post-deploy verification
-> living-state closeout
```

Production uses GitHub-hosted Actions. `workflow_dispatch` is fallback only. Public-repository work does not depend on Mike's self-hosted runner infrastructure.

Historical URL regression, public-asset audit, internal-link verification, responsive Playwright, axe checks, and rollback authority are established.

## Current backlog

- keep living-state/roadmap closeout synchronized with actual merged production truth;
- preserve expected-head guards for production merges when the PR head could move between approval and merge;
- keep owner/local smoke requirements claim-matching and avoid redundant reruns after documentation-only commits;
- periodically review workflow permissions/dependency versions;
- consider path-filter optimization for documentation-only `main` pushes only if redundant Pages deployments become a meaningful cost/noise problem;
- maintain exact rollback anchors for material releases.

## Risks

- accidental edits directly on `main`;
- merging a head that changed after owner approval;
- treating a green build as proof of browser/visual/accessibility quality;
- stale living-state docs causing a new chat to operate from old production truth;
- unnecessary owner GitHub/manual-command work when connected GitHub could execute safely;
- local/CI environment differences hiding a defect, as demonstrated by the timezone-sensitive date issue;
- workflow permission drift, dependency compromise, or logs/artifacts exposing public-repository-sensitive information;
- deployment-source confusion if the automatic `main` release contract is changed without doctrine updates.
