# Runtime and Workflow

Production output remains static HTML/CSS/assets. Build/deploy automation should use GitHub Actions and GitHub Pages.

The repository has access to Mike's dedicated self-hosted runner, but labels must be verified before workflow implementation.

Development should favor `npm` unless the existing environment provides a clear reason to choose another package manager. Dependency count should remain intentionally small.

Expected future layout:

```text
src/components/
src/content/blog/
src/layouts/
src/pages/
public/images/
public/icons/
astro.config.mjs
package.json
```
