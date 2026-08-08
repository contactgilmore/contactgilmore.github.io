# ContactGilmore Portfolio 2.0 Roadmap

Status: active roadmap  
Updated: 2026-08-08

## North star

Transform `contactgilmore.github.io` from a basic hand-built portfolio/resume page into a polished professional portfolio and technical writing platform that communicates Mike Gilmore's value quickly, demonstrates credible professional proof, and remains straightforward for GPT-assisted maintenance over the long term.

## Technology decision

Target:

```text
Astro 7+
TypeScript
Markdown content collections
custom HTML/CSS
minimal client JavaScript
GitHub-hosted Actions for this public repository
GitHub Pages
Playwright browser smoke testing
```

Why:

- preserve Markdown blog content;
- modern, actively maintained static-site ecosystem;
- strong component/layout model without requiring a client framework;
- typed content metadata;
- clean source structure for GPT-assisted changes;
- static output with low operational complexity;
- compatible with GitHub Pages;
- public-repository GitHub-hosted Actions avoid exposing Node3 to untrusted public workflow code;
- browser testing protects the responsive visual system rather than relying only on successful compilation.

Jekyll remains production authority until the final launch cutover. React is not part of the default architecture.

## Design/product direction

Portfolio 2.0 leads with one coherent professional identity:

```text
Technical Delivery & Customer Solutions
```

The site treats implementation, integrations/troubleshooting, customer/stakeholder leadership, systems/program delivery, and operational/reliability depth as connected proof rather than competing identities.

Current homepage hierarchy:

```text
navigation
hero: identity + value proposition + CTA
three concise capability/proof pillars
selected professional evidence
technical-depth section
featured writing
compact experience continuity
about/contact
```

The full blog is a dedicated archive rather than every post being rendered onto the homepage.

## Proof strategy

Primary evidence is sanitized professional case-study material, not only lab-style projects.

Initial lanes:

1. enterprise implementation / migration / delivery;
2. reliability / cross-functional remediation / customer impact;
3. program delivery / operating-model improvement.

Existing Terraform, New Relic, GitHub Actions, automation, cloud, API, SQL, and reliability experience remain supporting technical proof where useful.

## Phase P1 — Foundation and Astro migration

Status: **COMPLETE**

Goal: modernize the engine with zero intentional content loss and no production disruption.

Delivered:

- governance/doctrine system;
- Jekyll dependency/content/URL audit;
- public-repo runner + Pages contract verification;
- Astro scaffold and typed blog schema;
- nine Markdown/article migrations byte-for-byte;
- dedicated blog archive foundation;
- exact legacy URL/link/asset regression checks;
- non-deploying Pages candidate workflow.

Exit achieved: Astro can build/package the existing content without unexplained loss or broken compatibility paths. Production cutover remains explicit.

## Phase P2 — Positioning and information architecture

Status: **COMPLETE**

Goal: make the site communicate the right professional story in seconds.

Delivered:

- professional umbrella and message hierarchy;
- audience journeys;
- homepage content hierarchy;
- Work/case-study architecture;
- technical-project demotion to supporting evidence;
- experience/about/resume strategy;
- featured-writing/archive rules.

Exit achieved: positioning and page map accepted before detailed implementation.

## Phase P3 — Visual design system

Status: **COMPLETE**

Goal: create a restrained modern professional look informed by high-quality B2B SaaS/editorial patterns without becoming a flashy developer template.

Delivered:

- editorial/system typography system;
- light neutral + restrained blue accent palette;
- spacing/layout tokens and 1180px responsive shell;
- sticky navigation/footer;
- evidence cards and metric treatments;
- responsive Home, Work, Writing, About, Resume, and article surfaces;
- focus/reduced-motion/accessibility defaults;
- long-form article/archive design;
- durable Playwright smoke suite across desktop/tablet/phone;
- full-page screenshot evidence and visual inspection;
- active brand doctrine based on the tested implementation.

P3 smoke evidence:

```text
commit: 3372e074745d4a22d1ee18f6f525063414756700
Playwright run: 31251097496
21 / 21 tests passed
```

Exit achieved: responsive design language is browser-proven and doctrine-backed.

## Phase P4 — Professional case studies and content refresh

Status: **ACTIVE**

Goal: replace broad skill-list claims with stronger evidence while preserving recruiter scanability.

Deliverables:

- truth-mapped public-safe evidence inventory;
- three sanitized professional case studies;
- homepage/Work/About copy refinement aligned to current career targets;
- technical project descriptions reframed around problem/approach/result where supported;
- selected featured articles;
- public Resume/contact integration review;
- confidentiality/public-disclosure review;
- full Playwright regression after content integration.

Exit: portfolio tells a coherent senior technical-delivery story with deeper proof paths.

## Phase P5 — Quality, discoverability, and launch

Deliverables:

- semantic HTML/accessibility hardening beyond current smoke coverage;
- metadata/canonical audit;
- Open Graph/social preview image;
- sitemap/robots checks;
- structured Person/profile data where appropriate;
- image optimization;
- performance/Lighthouse budget and review;
- broken-link/URL regression expansion;
- final mobile/desktop browser acceptance;
- production GitHub Actions Pages cutover and rollback checkpoint.

Exit: Portfolio 2.0 is live, verifiably healthy, and maintainable.

## Phase P6 — Continuous portfolio operations

Ongoing:

- new blog posts use typed content schema;
- quarterly featured-content review;
- update case studies when professional experience changes;
- dependency maintenance;
- CI/browser quality gates;
- remove stale claims and technologies;
- retain sprint notes for major redesign/migration arcs rather than every minor edit.

## Explicit non-goals

- no database or application server;
- no CMS unless publishing friction proves the need;
- no React merely for prestige;
- no animation-heavy portfolio aesthetic;
- no giant skill icon wall or proficiency bars;
- no destructive rewrite of historical blog content during framework migration;
- no production cutover based only on a successful build;
- no public-repo self-hosted runner exposure without a future security justification.
