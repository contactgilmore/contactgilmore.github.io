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
GitHub Actions
GitHub Pages
```

Why:

- preserve Markdown blog content;
- modern, actively maintained static-site ecosystem;
- strong component/layout model without requiring a client framework;
- typed content metadata;
- clean source structure for GPT-assisted changes;
- static output with low operational complexity;
- compatible with GitHub Pages and the dedicated self-hosted Actions runner.

Jekyll remains production authority until the migration candidate is verified. React is not part of the default architecture.

## Design/product direction

The current homepage is too close to an extended resume and mixes several identities: cloud architect/SRE, sales engineer, and customer support leader. Portfolio 2.0 should lead with a coherent customer-facing technical delivery identity and use cloud/SRE depth as supporting evidence.

Target homepage hierarchy:

```text
navigation
hero: identity + value proposition + key CTA
three concise capability/proof pillars
selected professional case studies
secondary technical projects
featured writing (approximately three posts)
compact experience/credentials
short about/contact
```

The full blog becomes a dedicated archive rather than every post being rendered onto the homepage.

## Proof strategy

Primary evidence should become sanitized professional case studies, not only lab-style projects.

Initial lanes:

1. enterprise SaaS integrations / APIs / authentication / troubleshooting;
2. customer implementation / technical delivery / partner coordination;
3. reliability / observability / operational improvement.

Existing Terraform, New Relic, GitHub Actions, automation, and cloud projects remain as secondary technical proof.

## Phase P1 — Foundation and Astro migration

Goal: modernize the engine with zero intentional content loss and no production disruption.

Deliverables:

- governance/doctrine system;
- Jekyll dependency/content/URL audit;
- self-hosted runner + Pages contract verification;
- Astro scaffold and typed blog schema;
- Markdown/article migration;
- dedicated blog archive foundation;
- URL/link/asset regression checks;
- candidate CI/deploy workflow;
- rendered acceptance evidence.

Exit: Astro candidate can replace Jekyll without unexplained loss or broken links. Production cutover remains an explicit owner decision.

## Phase P2 — Positioning and information architecture

Goal: make the site communicate the right professional story in seconds.

Deliverables:

- finalized hero/value proposition;
- audience journeys;
- homepage wireframe/content hierarchy;
- work/case-study architecture;
- technical project hierarchy;
- experience/about/resume strategy;
- blog categorization and featured-writing rules.

Exit: approved page map and copy system before detailed visual polish.

## Phase P3 — Visual design system

Goal: create a restrained modern professional look inspired by high-quality B2B SaaS/editorial design without becoming a flashy developer template.

Deliverables:

- typography system;
- neutral/accent palette;
- spacing/layout tokens;
- navigation/footer;
- cards and case-study components;
- responsive states;
- accessible focus/contrast behavior;
- article/archive design.

Exit: approved responsive design language.

## Phase P4 — Professional case studies and content refresh

Goal: replace skill-list claims with evidence.

Deliverables:

- three sanitized professional case studies;
- rewritten homepage/about copy aligned to current career targets;
- project descriptions reframed around problem/approach/result;
- selected featured articles;
- resume/contact integrations;
- confidentiality review.

Exit: portfolio tells a coherent senior technical-delivery story.

## Phase P5 — Quality, discoverability, and launch

Deliverables:

- semantic HTML/accessibility pass;
- metadata, canonical URLs, Open Graph/social image;
- sitemap/robots checks;
- structured Person/profile data where appropriate;
- image optimization;
- performance/Lighthouse review;
- broken-link and URL regression suite;
- final mobile/desktop browser acceptance;
- production Pages cutover and rollback checkpoint.

Exit: Portfolio 2.0 is live, verifiably healthy, and maintainable.

## Phase P6 — Continuous portfolio operations

Ongoing:

- new blog posts use typed content schema;
- quarterly featured-content review;
- update case studies when professional experience changes;
- dependency maintenance;
- CI quality gates;
- remove stale claims and technologies;
- retain sprint notes for major redesign/migration arcs rather than every minor edit.

## Explicit non-goals

- no database or application server;
- no CMS unless publishing friction proves the need;
- no React merely for prestige;
- no animation-heavy portfolio aesthetic;
- no giant skill icon wall or proficiency bars;
- no destructive rewrite of historical blog content during framework migration;
- no production cutover based only on a successful build.