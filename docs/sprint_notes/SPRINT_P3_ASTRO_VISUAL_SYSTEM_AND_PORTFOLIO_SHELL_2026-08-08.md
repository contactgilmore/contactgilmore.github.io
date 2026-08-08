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
Status: IN PROGRESS

Implement BaseLayout, semantic navigation/footer, global design tokens, responsive layout primitives, accessibility defaults, and homepage shell.

### P3-WP2 — Work, About, and public Resume pages
Status: QUEUED

Implement public-safe detail pages using only substantiated professional claims. Do not publish unnecessary private contact information.

### P3-WP3 — Writing/archive and article reading experience
Status: QUEUED

Apply the shared shell to Writing and article pages while preserving all historical article bodies and compatibility URLs.

### P3-WP4 — Visual and content regression
Status: QUEUED

Run Astro build, source-integrity checks, legacy URL/asset checks, responsive/accessibility review, and inspect rendered candidate evidence.

### P3-WP5 — Owner review checkpoint
Status: QUEUED

Present the implemented visual direction and copy for owner review. Production remains untouched until explicitly approved.

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
