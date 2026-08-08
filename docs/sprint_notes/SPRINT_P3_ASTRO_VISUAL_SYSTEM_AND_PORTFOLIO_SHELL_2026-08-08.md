# Sprint P3 — Astro Visual System and Portfolio Shell

Opened: 2026-08-08  
Status: OPEN  
Owner: Mike Gilmore  
Project manager/executor: GPT  
Working branch: `portfolio-2.0-foundation`

## Thesis

Implement the accepted Portfolio 2.0 positioning and information architecture as a restrained, accessible Astro site without changing production. Establish the shared design system and primary page shell before deeper case-study content and final production cutover.

## Accepted P2 direction

- Primary umbrella: `Technical Delivery & Customer Solutions`.
- Proof pillars: Implementation & Technical Delivery; Integrations & Troubleshooting; Customer & Stakeholder Leadership.
- Resume calibration: explicitly preserve business/systems analysis and program-delivery capability alongside implementation, integrations, and reliability.
- Top-level navigation: Home / Work / Writing / About / Resume.
- Technical projects remain supporting proof rather than the seniority-defining homepage feature.

## Work packages

### P3-WP1 — Shared visual system and primary page shell
Status: COMPLETE

Implemented shared BaseLayout, semantic sticky navigation/footer, skip link, metadata/canonical support, global design tokens, responsive layout primitives, focus states, reduced-motion behavior, and the accepted homepage content sequence.

### P3-WP2 — Work, About, and public Resume pages
Status: COMPLETE

Implemented public-safe Work, About, and Resume routes. Resume content deliberately excludes unnecessary private contact details and uses only substantiated professional claims from the current resumes.

### P3-WP3 — Writing/archive and article reading experience
Status: COMPLETE

Applied the shared shell to the writing archive and article layout, added long-form reading styles, and preserved the existing Markdown bodies and compatibility routes.

### P3-WP4 — Visual and content regression
Status: IN PROGRESS

Automated gates on branch head `2603d6799811456c402f73e6bc5179da100c40c5` passed:

```text
GitHub-hosted validation workflow: success
migrated blog source-integrity gate: success
Astro build: success
legacy route and required-asset gate: success
non-deploying Pages artifact package: success
```

Remaining: inspect visual hierarchy, responsive behavior, wording density, and obvious accessibility/layout regressions before the owner review checkpoint.

### P3-WP5 — Owner review checkpoint
Status: QUEUED

Present the implemented visual direction and copy for owner review. Production remains untouched until explicitly approved.

## Implementation direction

The initial visual system uses a light neutral foundation, dark ink, restrained blue accent, large typography, spacious sections, evidence-focused cards, and a dark technical-depth band. It intentionally avoids skill meters, icon/logo walls, decorative gradients, cyberpunk styling, and unnecessary client JavaScript.

Homepage evidence currently uses resume-supported public metrics including 100+ enterprise implementations/deployments, 40% faster deployments, 50% lower onboarding effort, 55% fewer repeat escalations, 99.9% service availability/SLA, and 60% response/recovery improvement.

## Public-disclosure rules

The repository remains public. Use only professional information intentionally suitable for unrestricted public disclosure. Do not import private job-search state, correspondence, health/financial information, credentials, infrastructure secrets, or unnecessary personal details.

## Verification gates

- no direct `main` mutation;
- Astro clean build;
- migrated blog source-integrity gate remains green;
- all legacy article routes/assets remain green;
- semantic heading and navigation order;
- visible focus and reduced-motion support;
- responsive layout without horizontal overflow;
- owner review before production cutover.
