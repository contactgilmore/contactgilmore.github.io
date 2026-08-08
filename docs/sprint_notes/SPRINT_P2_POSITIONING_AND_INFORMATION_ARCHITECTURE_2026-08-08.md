# Sprint P2 — Professional Positioning and Information Architecture

Opened: 2026-08-08  
Status: OPEN  
Owner: Mike Gilmore  
Project manager/executor: GPT  
Working branch: `portfolio-2.0-foundation`

## Thesis

Turn the Astro migration foundation into a professional portfolio structure that communicates Mike's value quickly, prioritizes evidence over skill lists, preserves the technical blog as proof of communication ability, and gives recruiters, hiring managers, and technical leaders clear paths to evaluate his work.

## Public-disclosure boundary

This entire sprint is designed for a public repository. Do not record private applications, interview details, compensation, private correspondence, home/private infrastructure details, health/financial information, or confidential employer/customer information.

Professional case studies must be sanitized and must not expose proprietary systems, customer identities, credentials, internal URLs, sensitive datasets, or unpublished business information.

## Positioning direction to test

The site should move away from presenting multiple competing identities such as SRE, cloud architect, sales engineer, and support leader simultaneously.

The working direction is a customer-facing technical delivery identity spanning role families such as:

```text
Implementation / Professional Services
Technical Success
Solutions / Customer Engineering
Technical Program or Systems Delivery
```

Technical depth remains supporting evidence through SaaS integrations, APIs, SQL, cloud, automation, observability, troubleshooting, and technical writing.

Final public wording remains an owner gate.

## Proposed visitor model

Primary visitors:

1. recruiter or talent partner performing a fast credibility scan;
2. hiring manager evaluating role fit and seniority;
3. technical interviewer/leader looking for evidence of systems thinking and technical depth;
4. professional peer or reader arriving through a blog article or GitHub project.

The homepage should answer quickly:

```text
Who is Mike?
What kind of problems does he solve?
What evidence supports that claim?
What should I look at next?
How do I contact or evaluate him further?
```

## Work-package queue

### P2-WP1 — Professional portfolio benchmark and visitor decision model
Status: IN PROGRESS

Research current professional portfolio, content-design, accessibility, and technical-personal-site patterns. Distill only patterns that improve credibility, scanning, proof, and navigation.

Acceptance: documented benchmark principles and visitor decision model that can drive the homepage without copying another site's visual identity.

### P2-WP2 — Positioning hierarchy and message architecture
Status: QUEUED

Define headline hierarchy, value proposition, proof categories, technical-depth role, and what should be removed or demoted from the existing homepage.

Acceptance: one recommended positioning architecture plus bounded alternatives where an owner decision is needed.

### P2-WP3 — Site information architecture
Status: QUEUED

Define navigation and page responsibilities for Home, Work/Case Studies, Technical Projects, Writing, About, and contact/resume paths.

Acceptance: every major content type has one clear home and the homepage no longer acts as the full archive.

### P2-WP4 — Case-study and proof framework
Status: QUEUED

Create a reusable sanitized case-study structure emphasizing problem, role, constraints, approach, collaboration, technologies, decisions, and outcomes/lessons. Identify which existing public projects remain technical-lab evidence rather than primary senior-level case studies.

Acceptance: case-study schema is useful without exposing confidential information or inventing outcomes.

### P2-WP5 — Homepage content blueprint
Status: QUEUED

Produce the section-by-section homepage content blueprint, including hero, proof pillars, selected case studies, technical projects, featured writing, experience summary, about, and contact CTA.

Acceptance: content density and sequence support both fast scanning and deeper exploration.

### P2-WP6 — Owner positioning gate and implementation handoff
Status: QUEUED

Present recommended public identity and homepage architecture to Mike for acceptance, record decisions, and prepare the visual-design/implementation sprint.

Acceptance: final positioning direction and information architecture are explicitly accepted before they become polished public copy.

## Non-goals

- production deployment;
- private job-search tracking;
- fabricated metrics or customer outcomes;
- final visual styling implementation;
- rewriting historical blog bodies;
- adding frontend frameworks for aesthetic reasons.

## Verification gates

- every recommendation maps to a visitor need or evidence function;
- public-safety review;
- no confidential or private career details enter tracked documentation;
- no unsupported claims or invented metrics;
- information architecture remains usable on desktop and mobile;
- final positioning remains Mike's decision.
