# Sprint P2 — Professional Positioning and Information Architecture

Opened: 2026-08-08  
Status: OPEN — OWNER POSITIONING GATE  
Owner: Mike Gilmore  
Project manager/executor: GPT  
Working branch: `portfolio-2.0-foundation`

## Thesis

Turn the validated Astro migration foundation into a professional portfolio structure that communicates Mike's value quickly, prioritizes evidence over skill lists, preserves technical writing as proof of communication ability, and gives recruiters, hiring managers, and technical leaders clear paths to evaluate his work.

## Public-disclosure boundary

This sprint is designed for a public repository. Do not record private applications, interview details, compensation, private correspondence, home/private infrastructure details, health/financial information, or confidential employer/customer information.

Professional case studies must be sanitized and must not expose proprietary systems, customer identities, credentials, internal URLs, sensitive datasets, or unpublished business information.

## Recommended positioning

Primary umbrella:

```text
Technical Delivery & Customer Solutions
```

Supporting role territory:

```text
Implementation / Professional Services
Technical Success
Solutions / Customer Engineering
Technical Program or Systems Delivery
```

Supporting technical credibility:

```text
SaaS integrations
REST APIs and authentication
SQL/data troubleshooting
cloud and automation
observability and reliability
technical documentation/writing
```

Three proof pillars:

```text
Implementation & Technical Delivery
Integrations & Troubleshooting
Customer & Stakeholder Leadership
```

Cloud/SRE depth supports the main identity instead of competing with it in the hero.

## Work-package results

### P2-WP1 — Professional portfolio benchmark and visitor decision model
Status: COMPLETE

Reviewed current Linear, Stripe, and Vercel homepages as hierarchy/evidence references, plus WCAG 2.2 and web.dev guidance for semantics, typography, navigation, responsiveness, and interaction.

Accepted transferable pattern:

```text
one concise promise
-> grouped proof
-> concrete examples/evidence
-> deeper detail
-> clear next action
```

Portfolio adaptation:

```text
one coherent professional identity
-> value/problem framing
-> professional proof
-> selected work
-> supporting technical depth and writing
-> clear evaluation/contact paths
```

### P2-WP2 — Positioning hierarchy and message architecture
Status: COMPLETE — PENDING OWNER ACCEPTANCE

Recommended one coherent umbrella rather than the current competing Cloud Architect / SRE / Sales Engineering / Support identities. Detailed message hierarchy is recorded in `docs/product/contactgilmore-portfolio/00_PRODUCT_BRIEF.md`.

### P2-WP3 — Site information architecture
Status: COMPLETE — PENDING OWNER ACCEPTANCE

Recommended top-level structure:

```text
Home
Work
Writing
About
Resume
```

Technical Projects is deliberately demoted from top-level navigation and becomes supporting evidence under Work/homepage.

### P2-WP4 — Case-study and proof framework
Status: COMPLETE

A public-safe reusable case-study contract is recorded in `docs/product/contactgilmore-portfolio/03_PROOF_AND_CASE_STUDY_STRATEGY.md` with strict truth/confidentiality gates and no requirement for fabricated metrics.

Candidate evidence lanes remain:

1. SaaS integration and API troubleshooting;
2. customer implementation and technical delivery;
3. reliability / operational improvement.

### P2-WP5 — Homepage content blueprint
Status: COMPLETE — PENDING OWNER ACCEPTANCE

Recommended sequence:

```text
Hero
Proof pillars
Selected professional work
Technical depth
Featured writing
Experience snapshot
About/contact CTA
```

Detailed density and section contracts are recorded in `docs/product/contactgilmore-portfolio/02_CONTENT_AND_INFORMATION_ARCHITECTURE.md`.

### P2-WP6 — Owner positioning gate and implementation handoff
Status: IN PROGRESS

Owner decisions requested:

1. accept `Technical Delivery & Customer Solutions` as the primary positioning umbrella;
2. accept the three proof pillars;
3. accept the reduced navigation with Technical Projects demoted beneath Work;
4. accept the homepage section sequence;
5. authorize the next sprint to implement the accepted architecture and visual system in Astro on the working branch.

## Visual constraints already established

The visual direction is restrained modern B2B/technical rather than developer-portfolio themed. Hard standards include responsive centered layout, readable line lengths, semantic landmarks/headings, WCAG 2.2 AA contrast where applicable, visible focus, adequate pointer targets, restrained motion, case studies outranking labs, and no skill meters/logo walls/cyberpunk gimmicks.

## Non-goals

- production deployment;
- private job-search tracking;
- fabricated metrics or customer outcomes;
- rewriting historical blog bodies;
- adding frontend frameworks for aesthetic reasons.

## Verification gates

- every recommendation maps to a visitor need or evidence function;
- public-safety review;
- no confidential/private career details in tracked documentation;
- no unsupported claims or invented metrics;
- information architecture works as one semantic order on desktop/mobile;
- final positioning remains Mike's decision.

## Checkpoint 2026-08-08 — Ready for owner gate

Benchmark, positioning architecture, information architecture, case-study contract, homepage blueprint, and visual hard standards are now documented. No polished production copy or redesign implementation should be treated as final until Mike accepts the positioning gate.