# Tokens and Code References

Status: **ACTIVE — implemented token authority**  
Validated: 2026-09-29

Primary structural implementation: `src/styles/global.css`  
Approved identity-color layer: `src/styles/palette.css`

## Typeface

P14 aligns the personal portfolio with the frozen public presentation reference:

```css
display/headlines = "Onest", system-ui, sans-serif
body/UI = "Inter", system-ui, sans-serif
```

The same Google Fonts import used by the frozen Augusta Method public site is accepted for this portfolio alignment because the typography is now an intentional cross-surface presentation calibration rather than novelty. Preserve system fallbacks and keep weight usage bounded.

## Active color tokens

Neutral/depth foundation remains owned by `src/styles/global.css`:

```css
--ink: #18202a;
--ink-strong: #0d1117;
--muted: #5e6876;
--line: #dce1e7;
--surface: #ffffff;
--surface-soft: #eef2f6;
--dark: #111821;
--dark-soft: #1b2531;
```

P14 primary personal identity color aligns to the frozen Augusta Method public Purple while remaining personal-portfolio authority:

```css
--accent: #7142bb;
```

Supporting dark/light values may remain portfolio-specific when required for contrast, but they must derive from the same restrained purple family rather than restore the retired electric-blue family.

Page canvas:

```css
background: #f7f8fa;
```

The approved violet family is deliberately bounded. It is used for links/eyebrows, selected numeric emphasis, light emphasis on dark sections, blockquote/focus treatment, and similar small identifying moments. Ordinary page/card surfaces remain neutral; do not turn the portfolio into a purple-themed site.

The prior electric-blue accent family (`#1f5eff`, `#1746bf`, `#7aa0ff`, and related light blues) is retired as portfolio identity color.

## Augusta Method relationship

The portfolio remains a personal product and declares `CENTRAL_AUGUSTA_METHOD_BRAND = NOT_APPLICABLE`. It does not consume Augusta Method company brand.

However, the owner-approved 2026-08-27 portfolio color treatment was deliberately promoted into central Augusta Method governance as the successful reference for the company digital identity-color system. That promotion does not make portfolio layout, typography, spacing, geometry, navigation, or content company authority.

Central promotion anchor:

```text
contactgilmore/central-governance
GOV-3 — Company Color Token Freeze and Rollout
central merge = 35fc99a97e635e419e7af39541002421adfe470d
```

## Geometry

P14 intentionally reduces the prior SaaS-card geometry. The system should favor square/low-radius editorial surfaces, thin rules, and whitespace over shadows and floating panels. Large radius and shadow remain exceptions for content that genuinely needs containment rather than default identity behavior.

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
src/styles/palette.css
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
