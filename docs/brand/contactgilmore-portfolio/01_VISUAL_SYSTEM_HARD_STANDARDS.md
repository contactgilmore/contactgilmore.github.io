# Visual System Hard Standards

Status: active brand support document  
Benchmark checkpoint: 2026-08-08

## Design posture

The visual system should feel like a restrained modern B2B/technical product site rather than a themed developer portfolio.

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

Avoid copying any specific company's visual identity. Linear, Stripe, Vercel, and similar sites are references for hierarchy, restraint, and evidence presentation only.

## Layout

- Use a centered responsive content container rather than giant fixed desktop margins.
- General marketing/profile content should use a comfortable max-width roughly in the 1120–1200px range, adjusted by content need rather than device-name breakpoints.
- Long-form article copy should generally remain under roughly 75–80 characters per line.
- Use fluid layout primitives (`grid`, `flex`, `min()`, `max()`, `clamp()`) rather than a pile of fixed breakpoint overrides.
- At narrow widths, content must collapse into one clear semantic reading order.
- Do not create horizontal scrolling for ordinary portfolio content.

## Typography

- Establish a visibly distinct display/title scale, section-heading scale, card-title scale, body scale, and metadata scale.
- Body copy must remain comfortably readable and should not rely on very light font weights.
- Use real text rather than images of text except where an actual logo requires it.
- Break dense material into headings, short paragraphs, lists, callouts, and grouped evidence.
- Preserve generous line height and paragraph spacing.

## Color and contrast

- Favor a neutral/light foundation with restrained accent use unless a later accepted brand direction provides a stronger reason.
- Ordinary text should meet WCAG 2.2 AA contrast minimums (4.5:1 for normal text, 3:1 for qualifying large text).
- Required UI boundaries/states should meet applicable non-text contrast requirements.
- Never use low-contrast gray solely because it looks minimalist.

## Interaction

- All interactive elements must have clear hover and visible keyboard-focus states.
- Pointer targets must satisfy WCAG 2.2 minimum target-size rules; primary navigation/CTA targets should generally be comfortably larger than the minimum.
- Interaction must not depend on hover alone.
- Avoid gratuitous scroll-jacking, parallax, cursor effects, autoplay motion, or animations that delay access to content.
- Respect `prefers-reduced-motion` for nonessential animation.
- Native HTML behavior is preferred over custom interaction when native behavior solves the need.

## Structural accessibility

- Use semantic landmarks and a logical heading hierarchy.
- Include a functional skip-to-content path.
- Navigation order and keyboard order must preserve meaning across responsive layouts.
- Page titles must describe page purpose.
- Link text should be meaningful in context; repeated generic `Read More` controls should be avoided where a descriptive destination is practical.

## Evidence hierarchy

Visual weight must follow professional importance:

```text
professional identity/value proposition
professional case studies / proof
technical depth
writing
experience/about
supporting credentials
```

Case studies visually outrank lab projects on the homepage. Technology badges and logos must never dominate the story.

## Prohibited portfolio clichés

```text
skill bars/meters
percentage proficiency claims
giant logo/icon walls
glowing cyberpunk UI
gratuitous gradients
terminal-animation hero gimmicks
excessive card nesting
fake dashboards
unnecessary carousel controls
motion used only to make the site feel technical
```

## Blog/article rule

Article pages prioritize reading. Use a restrained reading measure, strong heading rhythm, responsive images, usable code blocks, descriptive alt text where images convey content, and navigation that does not distract from the article.

## Research basis

Standards are informed by WCAG 2.2, web.dev accessibility/typography/responsive-design guidance, and a 2026-08-08 structural benchmark of current technical/SaaS sites. Accessibility rules are constraints, not optional polish.
