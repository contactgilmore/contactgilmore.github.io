# Audience and Visitor Journeys

Status: active product support document  
Benchmark checkpoint: 2026-08-08

## Primary audiences

1. **Recruiter / talent partner** — needs a fast answer on professional identity, level, role fit, location/work context only where intentionally public, and a clear route to resume/contact.
2. **Hiring manager** — needs evidence that Mike can own ambiguous customer-facing technical delivery, communicate clearly, and work across implementation, integrations, troubleshooting, and internal teams.
3. **Technical interviewer / leader** — needs credible technical depth in APIs, SQL, SaaS integrations, cloud, automation, observability, reliability, and structured troubleshooting without the site pretending Mike is applying only as a pure infrastructure engineer.
4. **Professional peer / reader** — may enter through a blog article or GitHub project and should be able to discover the broader professional portfolio without losing the article-reading experience.

## Visitor decision model

The site should support progressively deeper evaluation rather than requiring a full-page read.

### First scan

The first viewport must answer:

```text
Who is Mike?
What kind of problems does he solve?
Who does he solve them for?
What is the strongest next proof to inspect?
```

Do not begin with a multi-paragraph biography or a list of unrelated titles.

### Short evaluation

Within the next few sections a visitor should be able to identify:

```text
professional proof categories
selected case-study evidence
technical depth
recent/high-value writing
career continuity
```

### Deep evaluation

Visitors who want more detail can move into:

```text
Work / case studies
Writing archive
About / experience
GitHub technical projects
public-safe resume/contact channel
```

## Preferred journey

```text
identity/value proposition
-> proof pillars
-> selected professional work
-> supporting technical projects
-> featured writing
-> compact experience/about
-> contact/resume
```

## Entry-path rules

### Homepage arrival

The homepage is a curated decision surface, not the full archive.

### Blog arrival

Every article should preserve reading focus while exposing restrained links back to Writing, Work, and the main profile.

### GitHub/project arrival

Technical projects should reinforce engineering credibility but should not become the primary seniority signal when a professional case study can demonstrate broader ownership and judgment.

## Trust and safety rules

- Use only contact details intentionally designated for public use.
- Any public resume must itself pass the repository public-disclosure gate before it is linked or stored.
- Do not expose private job-search state, private correspondence, customer identities, internal system details, or confidential work artifacts.
- Do not use fabricated metrics, client logos, testimonials, or outcome claims.

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
