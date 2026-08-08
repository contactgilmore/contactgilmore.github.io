# Content and URL Contract

Existing `_posts/*.md` are migration source authority.

Migration target is `src/content/blog/` or the Astro content-layer equivalent in the selected Astro version.

Preserve at minimum:

```text
title
date
thumbnail
categories
tags
article Markdown body
inline images
code blocks
external/internal links
public slug/permalink semantics
```

Jekyll-only `layout` metadata may be removed after equivalent Astro layout behavior is proven.

No production cutover until an old-URL -> new-URL regression inventory passes or explicit redirects exist.