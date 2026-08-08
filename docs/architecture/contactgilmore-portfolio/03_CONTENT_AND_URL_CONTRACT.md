# Content and URL Contract

Status: active architecture support document  
Owner: Mike Gilmore  
Audit checkpoint: 2026-08-08

## Migration source authority

Published blog source authority is the nine dated Markdown files under `_posts/` that declare `layout: post`.

Astro migration target is `src/content/blog/` or the equivalent Astro content-layer location selected during implementation.

## Published post inventory and compatibility URLs

Current `_config.yml` uses:

```text
permalink: /:title/
```

Jekyll `:title` is derived from the post filename and preserves source case. These paths are therefore compatibility contracts for the migration:

```text
_posts/2025-06-03-we-have-a-blog.md          -> /we-have-a-blog/
_posts/2025-06-10-SRE-tools.md               -> /SRE-tools/
_posts/2025-06-17-GTNY-rundeck.md            -> /GTNY-rundeck/
_posts/2025-06-24-GTNY-newrelic.md           -> /GTNY-newrelic/
_posts/2025-07-01-GTNY-pagerduty.md          -> /GTNY-pagerduty/
_posts/2025-07-08-GTNY-git.md                -> /GTNY-git/
_posts/2025-07-13-GTNY-terraform.md          -> /GTNY-terraform/
_posts/2025-07-20-GTNY-github-actions.md     -> /GTNY-github-actions/
_posts/2026-02-25-GTNY-cursor.md             -> /GTNY-cursor/
```

Astro must generate these exact paths or provide explicit verified redirects before production cutover.

## Frontmatter contract

Common published-post fields:

```text
title       required
date        required
thumbnail   required
layout      Jekyll-only migration input
categories  optional
tags        optional
```

`categories` and `tags` currently appear on seven of nine published posts, so the Astro schema must not require them.

Preserve at minimum:

```text
title
date
thumbnail
categories when present
tags when present
article Markdown body
inline images
code blocks
external/internal links
public slug/permalink semantics
```

Jekyll-only `layout: post` may be removed only after equivalent Astro article layout behavior is proven.

## Non-article files currently inside `_posts`

The following are not part of the published blog migration set:

```text
_posts/--2024-06-22-project-template.html
_posts/sre-tool-template.md
```

The first is an old HTML project-page template. The second contains a stray GNOME rollback note. Neither should enter the Astro blog content collection. They may be retired in a separate cleanup work package after production migration safety is established.

## Liquid and Jekyll dependency inventory

No Liquid constructs were found inside the nine Markdown article bodies.

Liquid/Jekyll behavior is concentrated in:

```text
index.html
_layouts/default.html
_layouts/post.html
_config.yml
```

Migration-sensitive behavior includes:

- `site.posts` iteration and generated excerpts on the homepage;
- `post.thumbnail`, `post.title`, `post.excerpt`, and `post.url`;
- `page.thumbnail`, `page.title`, `page.date`, and rendered `content`;
- `page.previous` / `page.next` article navigation;
- `site.title`, `site.description`, `site.baseurl`, and `relative_url` helpers;
- global `/:title/` permalink behavior.

Astro should reproduce intentional behavior with native content queries and components rather than carrying Liquid forward.

## Static assets and browser dependencies

Current site uses repository-root static directories:

```text
assets/
css/
js/
project-pages/
```

Published article images and thumbnails predominantly use absolute `/assets/images/...` paths. During migration the safest first pass is to preserve those public asset paths exactly, even if files are later reorganized internally.

Current JavaScript is minimal and only smooth-scrolls homepage links to the work and blog sections. It does not create a framework dependency.

`project-pages/project-template.html` and `project-pages/testing-template.html` are legacy static templates and are not linked from the current homepage. They remain public files today and should not be deleted incidentally during framework migration.

## Current Pages deployment contract

As of 2026-08-08 GitHub Pages reports:

```text
status: built
build_type: legacy
source branch: main
source path: /
public: true
https_enforced: true
custom domain: none
```

The Astro cutover therefore requires an explicit transition from legacy branch/Jekyll publishing to a GitHub Actions Pages deployment. Production `main` must remain deployable until that transition is accepted.

## Build and documentation assumptions

Current build authority is Jekyll 4.4 through `Gemfile`/`Gemfile.lock`. `README.md` documents the Jekyll/Bundler local workflow and will become stale when Astro becomes accepted build authority.

No existing `.github/workflows/` deployment pipeline is part of the current Jekyll production site.

## Acceptance rule

No production cutover until all nine source posts are represented in Astro, all nine compatibility URLs pass regression checks, referenced assets render, article navigation behavior is intentionally replaced, and the Pages deployment transition is proven on an exact candidate authority.
