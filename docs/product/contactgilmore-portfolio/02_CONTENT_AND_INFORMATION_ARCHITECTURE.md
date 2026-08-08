# Content and Information Architecture

Status: active product support document  
Blueprint checkpoint: 2026-08-08

## Recommended top-level navigation

Keep global navigation intentionally small:

```text
Mike Gilmore / Home
Work
Writing
About
Resume
```

Persistent restrained links may also expose LinkedIn and GitHub without turning them into primary content sections.

`Projects` is not a peer top-level destination by default. Technical repositories/labs belong under `Work` as supporting evidence or in a clearly secondary homepage section. This prevents entry-level lab work from visually competing with professional case studies.

`Resume` means a public-safe artifact or public-safe external destination only.

## Page responsibilities

### Home

Purpose: answer professional identity and value quickly, then curate the strongest evidence.

### Work

Purpose: strongest evidence surface, ordered as professional/sanitized case studies first and supporting technical projects second.

### Writing

Purpose: dedicated technical-writing archive with clean long-form article reading. Homepage exposes only selected pieces.

### About

Purpose: concise professional narrative, working style, experience context, and selected credentials. Avoid copying the full resume.

### Resume

Purpose: fast evaluation artifact. It must pass the repository disclosure gate before being hosted or linked from repository-controlled content.

## Homepage content blueprint

### 1. Hero

Required content:

```text
name
one coherent professional identity
one concise value/outcome statement
short supporting descriptor
primary CTA: Work
secondary CTA: Resume or Writing
```

Constraints:

- no multi-paragraph biography;
- no four-title headline;
- no giant technology list;
- no discussion of Astro/Jekyll in the primary message;
- value statement should remain roughly one or two short lines at common desktop widths.

### 2. Proof pillars

Exactly three primary pillars:

```text
Implementation & Technical Delivery
Integrations & Troubleshooting
Customer & Stakeholder Leadership
```

Each receives a short explanation and a few concrete proof terms. These are not generic skill cards; they establish how the rest of the evidence is organized.

### 3. Selected Work

Feature two or three strongest sanitized professional case studies.

Each homepage card should expose:

```text
problem class
Mike's role
one meaningful approach or decision signal
link with descriptive case-study title
```

Do not require confidential screenshots or fabricated metrics.

### 4. Technical Depth

A smaller supporting section containing selected engineering projects and/or concise technology patterns.

Recommended starting evidence:

- Terraform/cloud infrastructure project;
- New Relic/API automation project;
- optionally one later project that better demonstrates integrations or automation.

The section exists to prove hands-on depth, not to redefine the site as a junior developer portfolio.

### 5. Featured Writing

Show three selected articles. Prefer articles that demonstrate judgment and communication across infrastructure, reliability, automation, integrations, or responsible AI/tool use.

Each card includes title, date/topic context, short excerpt, and descriptive link. Full archive lives under Writing.

### 6. Experience Snapshot

A compact narrative/timeline rather than full resume bullets.

It should demonstrate continuity across:

```text
customer-facing technical leadership
enterprise software / implementation / integrations
cloud / reliability / technical operations depth
```

Use only public-safe employer/context details. Exact resume remains separate.

### 7. About and Contact CTA

Short human/professional context, likely no more than a few compact paragraphs, followed by clear public contact/evaluation options.

Do not repeat the hero or reproduce a career autobiography.

## Work page blueprint

```text
intro / proof framing
professional case studies
supporting technical projects
optional capability index
```

Professional case studies visually outrank technical labs.

## Writing page blueprint

```text
Writing heading + short purpose statement
optional topic filters only if content volume justifies them
article archive ordered by date
clear article cards/list rows
```

Do not introduce filter/search complexity until the archive size creates an actual navigation problem.

## Navigation and semantic rules

- Use semantic `<header>`, `<nav>`, `<main>`, and `<footer>` landmarks.
- Include a skip-to-content link.
- Link text should state destination/purpose rather than repeat generic `Read More` everywhere.
- Keep global navigation consistent across main pages and article pages.
- Mobile visual order and keyboard order must preserve the desktop information hierarchy.
- Each page has one descriptive `h1`; section headings follow a logical hierarchy.

## Information-density rule

Home supports scanning first and deeper reading second. Long-form explanation belongs in case studies, About, and Writing pages.

Do not render every article, every technology, every certification, or every resume bullet on Home.

## Research basis

Current Linear, Stripe, and Vercel homepages were reviewed as information-hierarchy examples. WCAG 2.2 and web.dev navigation/content-structure guidance establish semantic, keyboard, heading, responsive, and readability constraints. The portfolio adapts these principles rather than imitating another company's visual identity.
