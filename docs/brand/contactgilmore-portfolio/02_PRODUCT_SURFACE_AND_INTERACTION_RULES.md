# Product Surface and Interaction Rules

Status: **ACTIVE — Portfolio 2.0 interaction authority**  
Validated: 2026-08-10

## Primary navigation

Top-level navigation remains:

```text
Home
Work
Writing
About
Resume
```

External professional links belong in restrained footer/contact surfaces rather than competing with primary navigation.

The header remains sticky and visually quiet. On narrow layouts the brand may compact and navigation may use a two-row treatment; do not reduce links to unreadably small controls merely to preserve one row.

Current location should remain clear on nested routes. `Work` remains current while a visitor is inside a professional case study under `/work/`, and `Writing` remains current while a visitor is reading an article. Preserve `aria-current="page"` on the relevant top-level destination rather than treating only exact top-level URLs as current.

## Homepage flow

The homepage is a progressive pitch rather than a résumé dump:

```text
identity and value proposition
-> capability/proof pillars
-> selected professional evidence
-> technical depth
-> featured writing
-> experience continuity
-> about/contact
```

Each section should earn the next scroll. Repetition between sections should be removed rather than decorated differently.

## Modern flow patterns

The system allows contemporary content flow where useful:

- asymmetric editorial layouts;
- alternating light/soft/dark section bands;
- horizontal proof or writing rails;
- sticky explanatory panels;
- controlled scroll-supported storytelling;
- progressive disclosure for deeper case-study detail.

These are tools, not brand requirements. Use them only when they improve comprehension, scanning, or evidence. Any horizontally oriented desktop experience must have an intentional mobile behavior: stacking, an accessible horizontal scroller, or a simpler equivalent.

## Buttons and links

- Primary CTAs use dark filled buttons.
- Secondary CTAs use quiet bordered/light surfaces.
- Text links may use the accent blue and visible underline treatment.
- Link labels should explain destination; avoid repeated vague `Learn more` or `Read more` where specific wording is practical.
- Hover/focus treatment must not shift layout.

## Cards

Use cards for bounded proof, not for every content unit.

Accepted card families:

```text
capability pillar
professional evidence / case study
article preview
resume/experience detail
metric treatment
```

Technical tags use quiet pills. They are metadata, not primary UI.

## Work surface

`/work/` should prioritize sanitized professional evidence. Each evidence block should communicate context, approach, and substantiated outcomes without confidential customer/employer implementation details.

Technical projects may appear beneath professional evidence where they strengthen the story.

A deep case study should end with a restrained evaluation path: return to selected Work and move to Resume. This keeps the employer journey obvious without adding a sales-style conversion funnel.

## Writing surface

`/blog/` is a scan-friendly archive using date, title, and restrained topic metadata. The homepage features only selected writing.

Historical article bodies remain content authority unless intentionally edited in a future content sprint. Article layout should preserve long-form readability and support images/code without turning posts into card grids.

## Resume surface

The public Resume page is intentionally web-native and public-safe. It is not required to reproduce the private/application résumé PDF exactly, but it should behave like a resume rather than another About page.

The first scan should expose Mike's name, coherent professional identity, concise professional summary, public-safe location, and public professional contact paths. Experience remains accomplishment-led and evidence-heavy, using supported metrics where available.

Avoid unnecessary personal data such as private phone/address information. Do not invent education, certifications, dates, or other conventional résumé fields merely to make the page look more complete. Use evidence already approved for public professional presentation.

## Responsive behavior

Mobile is first-class, not a compressed desktop fallback.

- Multi-column grids collapse cleanly.
- Display type scales down before it causes long professional terms to overflow.
- Card padding tightens without becoming cramped.
- Navigation remains usable and visible.
- No ordinary page may create horizontal viewport overflow.
- Full-page visual smoke tests should cover phone, tablet, and desktop before major visual changes are accepted.

## JavaScript posture

No interaction should require client JavaScript when native HTML/CSS provides the needed behavior. Add client code only for a real interaction requirement, and keep it isolated and progressively enhanced.
