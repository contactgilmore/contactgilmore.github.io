# Visual System Hard Standards

Status: **ACTIVE — smoke-tested visual system**  
Validated: 2026-08-08

## Design posture

The Portfolio 2.0 design is a restrained modern B2B/technical product system with editorial scale. It uses large, decisive typography, quiet neutral surfaces, one restrained blue accent family, strong evidence hierarchy, and minimal decorative UI.

Desired qualities:

```text
clear
credible
quietly technical
precise
spacious
readable
confident without being flashy
```

Do not copy another company's identity. External product sites may inform hierarchy and flow, but ContactGilmore must remain visually independent.

## Layout

- Main content uses a centered responsive shell with a maximum width of approximately 1180px.
- Page composition should favor content-led grids and surface bands rather than giant fixed margins.
- Long-form article copy uses a substantially narrower reading measure than marketing/profile pages.
- Use `grid`, `flex`, `min()`, `max()`, and `clamp()` to preserve fluid behavior.
- Desktop layouts may use asymmetric columns when hierarchy benefits.
- Narrow layouts collapse into one intentional semantic reading order.
- Ordinary content must not create horizontal viewport scrolling.
- Horizontal rails or left-to-right storytelling are permitted only when they add real value; mobile must receive a clean stacked or intentionally scrollable equivalent.

## Typography

Primary type stack:

```text
Inter
ui-sans-serif
system-ui
-apple-system
BlinkMacSystemFont
Segoe UI
sans-serif
```

The design intentionally uses oversized editorial display headlines. Large typography is a brand element, not decoration.

Rules:

- Homepage display headlines may reach roughly 6–6.6rem on wide screens and scale fluidly.
- Interior page heroes use a slightly smaller fluid display scale with a mobile minimum around 2.5rem so long professional terms fit without viewport overflow.
- Section headings should remain clearly subordinate to page/hero headlines but visibly stronger than cards.
- Card titles use compact high-weight typography and restrained negative tracking.
- Body copy stays comfortably readable with generous line-height and muted rather than low-contrast color.
- Metadata/eyebrows use small uppercase text with increased tracking and the blue accent family.
- Never shrink text merely to force complex material into a desktop composition.

## Color

The active visual system is light-first with one dark technical-depth band available for contrast.

Core palette authority is recorded in `03_TOKENS_AND_CODE_REFERENCES.md` and implemented in `src/styles/global.css`.

Behavioral rules:

- `#f7f8fa` is the primary page background.
- White is the primary elevated/card surface.
- `#eef2f6` is the soft alternate section surface.
- Near-black/navy values carry primary typography and dark-band backgrounds.
- Blue is a signal/accent, not a page-filling brand color.
- Blue is appropriate for eyebrows, metrics, links, and selected emphasis.
- Do not introduce multiple competing brand accents without a redesign reason.
- Maintain WCAG 2.2 AA contrast for ordinary text and applicable controls.

## Surfaces and cards

- Primary evidence cards use white surfaces, quiet gray borders, approximately 20px corner radii, and restrained shadows.
- Cards should group evidence, not fragment every sentence into a UI box.
- Professional case studies/evidence receive more visual weight than technology lists or lab projects.
- Metric treatments may use oversized blue numerals paired with restrained explanatory text.
- Dark sections should be used sparingly for meaningful tonal transitions, such as technical-depth content.

## Spacing

- Use generous section spacing, generally fluid in the ~72–132px range.
- Whitespace must communicate grouping and hierarchy; empty space that does not improve scanning should be reduced.
- Card padding is generous on desktop and deliberately reduced on small screens.
- Section gaps should feel consistent even where composition changes.

## Navigation

- Header is sticky, light, and visually quiet.
- `MG` monogram plus Mike Gilmore name is the desktop brand treatment.
- Primary navigation is Home / Work / Writing / About / Resume.
- Narrow layouts may hide the full name and use a compact two-row header/navigation arrangement rather than squeezing links below usable size.
- Active-page state must be visible without relying on color alone where practical.
- Focus states must remain clearly visible.

## Interaction and motion

- Native HTML behavior is preferred when it solves the interaction cleanly.
- Hover states should be restrained and immediate.
- Motion should support hierarchy or orientation, not simulate technical sophistication.
- Respect `prefers-reduced-motion`.
- Avoid scroll-jacking, autoplay spectacle, cursor effects, parallax-for-decoration, terminal gimmicks, or animation that delays content.
- Sticky storytelling, scroll-supported progression, or horizontal proof rails may be introduced when content materially benefits and mobile degradation is designed explicitly.

## Structural accessibility

- Use semantic landmarks and logical heading hierarchy.
- Preserve a functional skip-to-content link.
- Keyboard order must match visual/semantic order.
- Page titles and link text must describe destination/purpose.
- Primary controls should provide comfortable pointer targets beyond bare minimums.
- Browser console errors and horizontal overflow are release failures, not cosmetic issues.

## Evidence hierarchy

Visual weight follows professional importance:

```text
professional identity/value proposition
professional evidence / case studies
technical depth
writing
experience/about
supporting credentials
```

Case studies and outcomes outrank lab projects. Tools support the story rather than become the story.

## Blog/article rule

Article pages prioritize reading. Preserve the narrow editorial column, strong heading rhythm, responsive images, usable code blocks, and quiet navigation. The blog should feel like the same brand as the portfolio without reproducing homepage marketing density.

## Prohibited portfolio clichés

```text
skill bars or percentage proficiency
logo walls
cyberpunk/glowing UI
terminal-animation hero gimmicks
fake dashboards
gratuitous gradients
excessive nested cards
carousel controls without a content reason
motion added only to look technical
```

## Validation baseline

This system became doctrine only after the 2026-08-08 Playwright smoke pass covered Home, Work, Writing, About, Resume, and a representative historical article across desktop, tablet, and phone widths, including navigation/focus, console-error, response, heading, and horizontal-overflow checks.
