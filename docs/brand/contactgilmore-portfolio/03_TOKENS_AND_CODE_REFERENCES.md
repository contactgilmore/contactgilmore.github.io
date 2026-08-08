# Tokens and Code References

Status: **ACTIVE — implemented token authority**  
Validated: 2026-08-08

Primary implementation: `src/styles/global.css`

## Typeface

```css
font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

The stack is intentionally system-friendly. Do not add externally hosted web fonts merely for novelty. A future type change must improve the system enough to justify dependency/performance impact.

## Active color tokens

```css
--ink: #18202a;
--ink-strong: #0d1117;
--muted: #5e6876;
--line: #dce1e7;
--surface: #ffffff;
--surface-soft: #eef2f6;
--accent: #1f5eff;
--accent-strong: #1746bf;
--dark: #111821;
--dark-soft: #1b2531;
```

Page canvas:

```css
background: #f7f8fa;
```

Focus indication currently uses:

```css
outline: 3px solid #7aa0ff;
outline-offset: 4px;
```

## Geometry

```css
--max-width: 1180px;
--radius: 20px;
--shadow: 0 18px 50px rgba(18, 28, 45, 0.08);
```

The general page shell is:

```css
width: min(var(--max-width), calc(100% - 48px));
```

and tightens on small screens.

## Active scale references

Major spacing and typography intentionally use fluid `clamp()` values rather than a rigid utility scale.

Examples:

```css
section padding: clamp(72px, 10vw, 132px)
home hero: clamp(3rem, 7.4vw, 6.6rem)
interior hero: clamp(2.5rem, 7vw, 6rem)
section heading: clamp(2.15rem, 4.4vw, 4.2rem)
```

These are design-system anchors, not values that must be copied mechanically into every future component.

## Core implementation references

```text
src/styles/global.css
src/layouts/BaseLayout.astro
src/layouts/BlogPostLayout.astro
src/components/SiteHeader.astro
src/components/SiteFooter.astro
src/pages/index.astro
src/pages/work/index.astro
src/pages/blog/index.astro
src/pages/about/index.astro
src/pages/resume/index.astro
```

## Browser quality references

```text
playwright.config.ts
tests/smoke.spec.ts
.github/workflows/playwright-smoke.yml
```

The smoke suite is part of brand protection because it verifies responsive rendering, page structure, console cleanliness, navigation/focus behavior, and horizontal-overflow safety across the primary surfaces.

## Implementation posture

Prefer a small set of semantic CSS classes and custom properties over framework utility lock-in. New tokens should represent repeated design meaning, not simply mirror every one-off numeric value in CSS.
