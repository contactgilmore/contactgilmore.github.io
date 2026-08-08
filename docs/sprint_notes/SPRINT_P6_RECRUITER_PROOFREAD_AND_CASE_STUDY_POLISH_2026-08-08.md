# Sprint P6 — Recruiter Proofread, Voice, and Case-Study Polish

Opened: 2026-08-08  
Branch: `portfolio-2.0-polish`  
Production baseline: `bb2968e523bd7af87e3cd31a3a7e045ecb44947b`

## Objective

Read Portfolio 2.0 as a recruiter and hiring manager would. Improve authenticity, first-person ownership, case-study specificity, scanability, and career narrative while preserving the current visual system, protected blog content, verified metrics, and public-disclosure rules.

## External review findings already incorporated

Current university/career-center portfolio guidance supports a small curated set of relevant work rather than a career chronology. Strong project pages should explain context, role, approach, outcome, and reflection. Recruiter/hiring-manager discussion also reinforces that portfolio evidence must be fast to scan and should add proof/context rather than repeat the resume.

Portfolio decision:

- retain three deep case studies focused on the most relevant 2018–2026 enterprise/technical period;
- use earlier customer-operations and leadership experience as the foundation of the career narrative, especially influence without authority and people leadership;
- avoid adding a fourth case study only to represent older roles.

## Public-safe experience facts approved for writing

The following facts were supplied by Mike for portfolio polishing. They are recorded here in intentionally generalized form because this repository is public.

### Enterprise implementation / Cityworks era

- Participated directly in customer discovery with project managers, third-party implementation partners, Product, Customer Success, Sales Engineering, licensing/entitlement stakeholders, and customers.
- Worked across API configuration and authentication patterns, including OAuth/token and API-key style integrations where applicable.
- Common integration context included GIS/ArcGIS, asset/barcode workflows, inventory/material-management workflows, external applications, licensing, customer configuration, and data validation.
- A major early migration required moving legacy customer data/configuration from an older Windows/storage model to a newer Linux/containerized cloud platform.
- The first migration required iterative scripting, customer/partner coordination, and repeated data-integrity checks over multiple weeks.
- Lessons from that first migration were converted into custom scripts, repeatable validation steps, runbooks, and eventually an orchestrated automation workflow so later migrations could be executed consistently.

Public-writing boundary: do not publish customer identity, proprietary scripts, exact internal topology, privileged configuration, internal ticket data, or implementation artifacts.

### Reliability / Trimble era

- Major customers reported intermittent outages that were difficult to explain from existing visibility.
- Mike created/improved observability to correlate affected customers, outage timing, duration, and recurring patterns.
- Investigation isolated a software defect triggered by unusually heavy reporting workloads that caused severe memory spikes and application/server crashes affecting hosted customers.
- Mike documented detailed RCAs, presented evidence to director-level leadership, and worked with project/program and development teams toward corrective action.
- The professional story is customer complaint -> telemetry -> pattern recognition -> diagnosis -> customer impact -> executive communication -> cross-functional fix.

Public-writing boundary: do not publish customer names, internal host/server identifiers, proprietary architecture diagrams, ticket IDs, confidential RCA artifacts, or internal code/configuration.

### Operating model / program delivery

- Improved observability through more useful dashboards and more accurate/actionable alerting.
- Standardized runbooks through shared templates.
- Standardized RCA structure and introduced more consistent in-incident documentation flow.
- Added Jira automation to support ticket/incident workflow management.
- Helped onboard an India-based team into shared tooling, alerting, runbook, incident, RCA, handoff, and operating practices.
- The leadership outcome was not merely documentation; it was adoption of a shared operating model across teams.

### Earlier leadership / Best Buy foundation

- Multi-unit leadership required shifting from direct authority to influence without title.
- Learned to support store leaders rather than report their business back to them: understand their perspective, bring expertise, coach behaviors and planning, and use relationships to mobilize outside support.
- Helped leaders build plans around business/P&L results while preserving their ownership of the operation.
- This experience is relevant to current customer-facing technical work because implementation, success, solutions, and systems roles depend heavily on influence across people the role does not directly manage.

### Leadership philosophy

Mike's natural strength is identifying what people are good at, where those strengths give them energy, and positioning complementary strengths so the team works as a system rather than trying to make every person equally strong in every area.

Public-facing phrasing should emphasize complementary strengths, fit, energy, ownership, and team balance rather than labeling people by weaknesses.

## Copy problems to remove

- governance language such as “substantiated professional experience” on public pages;
- repeated “public-safe summary” disclaimers where one simple confidentiality sentence is enough;
- passive ownership phrases such as “the work centered on,” “the role sat between,” and “the work included” when Mike can truthfully own the action;
- wording that understates eight years of engineering experience, such as “enough engineering context”;
- repeated use of the same metrics on Home, Work, Resume, and case-study pages where hierarchy can carry the proof more naturally;
- security/process explanations on the public Resume page that do not help a hiring decision.

## Work packages

### P6-WP1 — audit and continuity capture

Acceptance:
- current findings and approved facts captured in repository authority;
- no sensitive/proprietary detail exposed;
- branch is isolated from production.

### P6-WP2 — implementation case study

Target story: **from difficult first migration to repeatable migration system**.

Must show:
- direct discovery/customer/partner involvement;
- integration/authentication/data/licensing context;
- migration trial-and-error without implying recklessness;
- custom scripting + validation + repeatability + orchestration;
- data-integrity/customer handoff judgment;
- first-person ownership where supported.

### P6-WP3 — reliability case study

Target story: **from customer outage complaints to observable pattern and permanent remediation**.

Must show:
- customer signal;
- missing observability;
- correlation by customer/time/duration;
- workload/memory failure pattern;
- RCA and director-level communication;
- Product/Engineering/development coordination;
- permanent corrective action rather than ticket closure.

### P6-WP4 — operating-model case study

Target story: **build a repeatable operating system for reliability work**.

Must show:
- meaningful dashboards/alerts;
- shared runbook templates;
- RCA + real-time incident documentation structure;
- Jira automation/workflow support;
- onboarding/adoption by another team;
- leadership through standards, enablement, and cross-team adoption.

### P6-WP5 — About / career foundation

Build a concise progression:

```text
customer operations & leadership
-> enterprise SaaS implementation & cloud delivery
-> site reliability & cross-functional remediation
-> Technical Delivery & Customer Solutions
```

Use Best Buy as a short influence-without-authority lesson, not a full case study.

Introduce the people-powered leadership philosophy in natural language.

### P6-WP6 — Home / Work / Resume de-duplication

Hierarchy:
- Home: strongest signals and reasons to continue;
- Work: enough proof/context to choose a case study;
- Case studies: full narrative/evidence;
- Resume: concise chronology and selected outcomes.

### P6-WP7 — regression

Run all existing CI/browser/accessibility/disclosure gates.

### P6-WP8 — owner proofread gate

Do not merge/deploy until Mike has read the polished candidate and approves production change.
