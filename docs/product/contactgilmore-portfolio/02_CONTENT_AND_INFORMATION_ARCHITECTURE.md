# Content and Information Architecture

Status: active product support document  
Blueprint checkpoint: 2026-08-10

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

Writing is also a **professional proof surface**. It should demonstrate Mike's technical depth, judgment, ability to explain complex systems, customer/reader awareness, and practical operating perspective. An article that is factually correct but reads like anonymous reference documentation is therefore not fully successful for this portfolio.

Long-form portfolio articles should normally behave as **technical essay/tutorial hybrids**: teach one primary mental model, explain why it matters, provide useful practical guidance and tradeoffs, and retain a recognizable authorial point of view. Upstream product/project documentation remains the reference authority for exhaustive feature/API coverage; the portfolio blog should not try to reproduce it.

### About

Purpose: concise professional narrative, working style, experience context, and selected credentials. Avoid copying the full resume.

### Resume

Purpose: fast evaluation artifact. It must pass the repository disclosure gate before it is hosted or linked from repository-controlled content.

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

### Long-form editorial shape

Scannability and narrative reading must coexist.

Use headings, lists, code, diagrams, and emphasis where they help a reader navigate, but do not fragment ordinary explanation into a heading or isolated sentence for every concept. Cohesive short paragraphs are the default reading rhythm. One-sentence paragraphs remain available for intentional emphasis rather than becoming the article's dominant shape.

A strong article should add something beyond a source summary through verified experience, practical judgment, analogy, recommendation, tradeoff analysis, or a clear mental model. Never invent experience to create personality.

Detailed drafting and review rules live in:

```text
docs/editorial/AI_ASSISTED_PUBLISHING_WORKFLOW.md
```

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

Within Writing, technical completeness is not the same as editorial value. Include enough detail to teach the reader's intended outcome, then link to authoritative reference material for exhaustive implementation detail when appropriate.

## Research basis

The 2026-08-08 benchmark used current Linear, Stripe, and Vercel homepages as structural references rather than visual templates, plus WCAG 2.2 and web.dev guidance for responsive layout, typography, navigation, and semantic structure.

Observed transferable pattern:

```text
one concise promise
-> grouped proof
-> concrete examples/evidence
-> deeper technical or functional detail
-> clear next action
```

Portfolio adaptation:

```text
one coherent professional identity
-> how Mike creates value
-> evidence through work
-> supporting technical depth/writing
-> clear evaluation/contact paths
```

The 2026-08-10 Writing revision additionally established that the blog's role as professional proof requires a recognizable editorial voice and practical point of view, not only technically correct source synthesis. The detailed house style remains in the existing editorial workflow rather than creating another product document.
