# Runtime and Workflow

Production output remains static HTML/CSS/assets. Build/deploy automation uses GitHub Actions and GitHub Pages.

## CI runner contract

This repository is public. Standard GitHub-hosted runners are the default execution environment:

```text
runs-on: ubuntu-latest
```

Do not register or expose Node3-MINI-S to ordinary workflows for this public repository. In particular, untrusted fork or pull-request code must never execute on Mike's self-hosted infrastructure.

The separate private Job Search Studio repository may continue to use its Node3 self-hosted runner; that is not this repository's runtime contract.

## Current Pages authority

As of 2026-08-08 production Pages is:

```text
build_type: legacy
source: main:/
public: true
https_enforced: true
```

During P1 the existing legacy Jekyll deployment remains production authority. Astro deployment will be introduced as a candidate GitHub Actions workflow and must not replace production until explicit cutover acceptance.

## Package/runtime direction

Development favors `npm` unless implementation evidence gives a reason to choose another package manager. Dependency count remains intentionally small.

Target stack:

```text
Astro 7+
TypeScript
Markdown/content collections
custom CSS
minimal client JavaScript
GitHub-hosted Actions
GitHub Pages
```

Expected future layout:

```text
src/components/
src/content/blog/
src/layouts/
src/pages/
public/assets/
astro.config.mjs
package.json
.github/workflows/
```

Initial migration should preserve existing `/assets/...` public paths to minimize blog regression risk.
