# Proof and Case Study Strategy

Status: active product support document  
Updated: 2026-08-10

## Purpose

Primary proof should shift from basic technology demonstrations to sanitized professional case studies. Existing Terraform, New Relic, automation, and similar GitHub projects remain useful as secondary engineering evidence.

This file is also the canonical truth/evidence authority for the three published professional case studies. It constrains public writing to evidence Mike can safely and truthfully present. It is not a résumé replacement and must not accumulate private job-search notes or confidential work artifacts.

Evidence basis: Mike's current 2026-08-08 Business Systems Analyst / Program Delivery and Implementation Consultant / Professional Services resumes, plus claims already accepted for the public Portfolio 2.0 pages.

## Candidate case-study lanes

1. **SaaS integration and API troubleshooting** — authentication, request/response flow, data validation, SQL verification, integration partners/middleware, and cross-team diagnosis.
2. **Customer implementation and technical delivery** — requirements, implementation coordination, testing/UAT, release readiness, documentation/training, and partner/internal alignment.
3. **Reliability and operational improvement** — observability, automation, incident/problem analysis, alerting/runbook/process improvement, or another safely documentable example of making systems easier to operate.

These are lanes, not permission to publish confidential employer or customer details.

## Case-study contract

Every professional case study should distinguish:

```text
Context — what kind of problem/environment existed
Problem — what needed to be implemented, understood, fixed, improved, or coordinated
Role — what Mike was actually responsible for
Constraints — only public-safe operating/delivery constraints
Approach — the repeatable pattern Mike used
Evidence — supported metrics or observable outputs
Technical context — only what can be tied safely to the work
Tradeoffs / judgment — only when supportable without inventing private decisions
Outcome — DIRECT evidence only
Lesson — professional synthesis, clearly framed as a takeaway rather than a historical metric
```

### Context

Use a short sanitized description of the environment or customer/problem class. Do not identify a customer unless the identity is already intentionally public and using it is clearly appropriate.

### Problem

State the problem without revealing sensitive architecture, data, credentials, or internal business information.

### My role

State Mike's actual scope and responsibility. Distinguish direct ownership, collaboration, support, recommendation, and implementation-partner responsibility accurately.

### Constraints

Only constraints safe for publication: legacy compatibility, ambiguous requirements, integration boundaries, operational risk, stakeholder coordination, time/sequence dependencies, or similar generalized factors.

### Approach

Show reasoning and process, typically using a subset of:

```text
discovery / requirements
system or data-flow mapping
authentication/integration analysis
SQL or data validation
testing / UAT
troubleshooting and isolation
partner/internal coordination
documentation / training
release or handoff planning
```

### Technical patterns

Name relevant technologies and patterns only where they clarify the work. Technology is evidence, not the headline.

### Decisions and tradeoffs

Explain one or more meaningful judgment calls where safely shareable. This is often stronger senior-level proof than a long technology list.

### Outcome

Use only factual, safely shareable results. Exact metrics are optional and must never be invented. When numbers are unavailable or confidential, a precise qualitative result is acceptable, such as:

```text
isolated the failure domain
validated integration behavior
unblocked implementation testing
reduced ambiguity for customer/internal teams
created a repeatable support or release process
enabled a safer handoff
```

Do not inflate qualitative outcomes into unsupported business impact.

### Lessons / reusable insight

One short section should show what the work demonstrates about technical delivery, customer communication, integrations, or systems thinking.

## Evidence labels

```text
DIRECT — explicitly stated in the current resume evidence
SAFE GENERALIZATION — faithful synthesis of multiple DIRECT statements without adding a new factual outcome
SUPPORTING SKILL — appears in the current skills/certification evidence but should not be falsely tied to a specific measured outcome
DO NOT CLAIM — unsupported, confidential, private, or too specific to infer safely
```

---

# Case Study 1 — Enterprise implementation and migration delivery

## Intended visitor takeaway

Mike can turn customer requirements into repeatable implementation plans, coordinate onboarding/migration/integration/deployment readiness, and improve delivery outcomes without needing to be positioned as a pure project coordinator or pure infrastructure engineer.

## DIRECT evidence

Professional context:

- Cityworks Cloud Engineer, 2018–2022.
- Guided municipal and enterprise customers through discovery, onboarding, migration, integration, and deployment planning.
- Translated requirements into clear implementation plans and practical customer decisions.

Measured/supportable outcomes:

```text
100+ enterprise migrations, implementations, and deployments supported
40% faster deployments through repeatable workflows/runbooks
50% lower onboarding effort through repeatable workflows/runbooks
30% lower onboarding escalations through stronger discovery/readiness/customer handoffs
20% lower cloud costs through standardized customer environments/operating practices
99.9% uptime support and SOC 2 readiness through governance, controls, and documentation
```

## SAFE GENERALIZATION

The public case study may say that the work moved customers from discovery and requirements through readiness and execution using repeatable delivery practices.

The public case study may describe the operating pattern as:

```text
discovery
-> requirements clarification
-> readiness assessment
-> implementation / migration planning
-> integration and deployment coordination
-> customer handoff / operational readiness
```

It may say repeatability reduced delivery friction and escalations because that synthesis is directly supported by the measured outcomes above.

## SUPPORTING SKILLS

These are safe to present as Mike's broader technical context, but do not attribute a specific metric to them without stronger evidence:

```text
AWS
cloud infrastructure
APIs & integrations
SQL
authentication
Linux
Kubernetes
Terraform
```

## DO NOT CLAIM

- specific customer names;
- exact proprietary Cityworks architecture or internal implementation tooling unless already intentionally public and relevant;
- that every one of the 100+ engagements used APIs, SQL, Terraform, Kubernetes, or a specific authentication method;
- project revenue, contract value, customer-count breakdowns, or team size unless separately evidenced;
- fabricated before/after timelines beyond the supported percentage outcomes;
- internal tickets, screenshots, credentials, environment names, or customer datasets.

---

# Case Study 2 — Reliability and cross-functional remediation

## Intended visitor takeaway

Mike can connect recurring production behavior to customer impact, coordinate across technical/product teams, clarify ownership, and turn reliability work into measurable service improvement.

## DIRECT evidence

Professional context:

- Trimble Site Reliability Engineer, 2022–2026.
- Supported customer-facing SaaS services where reliability issues could become customer escalations and delivery risk.
- Partnered across Product, Engineering, and customer-facing teams to improve operational readiness.

Measured/supportable outcomes:

```text
55% reduction in repeat customer escalations through prioritized Product/Engineering remediation
99.9% SLA / availability protection across customer-facing SaaS services and production environments
60% improvement in response/recovery metrics through clearer alerts, escalation paths, and ownership
40% reduction in repeat incidents through root-cause analysis/readiness work
30% improvement in release reliability through root-cause analysis/release readiness
```

## SAFE GENERALIZATION

The public case study may frame the work as a recurring-pattern remediation loop:

```text
customer/service signal
-> pattern analysis
-> ownership and prioritization
-> Product/Engineering remediation
-> readiness/release controls
-> reduced recurrence and faster response
```

It may say the work bridged service reliability and customer outcomes because the resume explicitly connects reliability issues with escalations/delivery risk.

## SUPPORTING SKILLS

Safe broader context:

```text
observability
Linux
AWS
Kubernetes
incident/reliability practices
technical documentation
governance
```

Do not imply a specific monitoring vendor, incident platform, cloud service, or automation tool caused a measured result unless separately evidenced.

## DO NOT CLAIM

- names/details of incidents or affected customers;
- internal severity data, postmortems, dashboards, alert rules, or architecture diagrams;
- exact SLA contractual terms beyond the public 99.9% evidence;
- that Mike personally implemented every remediation rather than coordinating/partnering where that distinction matters;
- financial impact of downtime or escalation reduction unless separately evidenced.

---

# Case Study 3 — Program delivery and operating-model improvement

## Intended visitor takeaway

Mike can improve how teams operate across organizational boundaries: clarifying response ownership, standardizing practices, documenting governance, and onboarding teams into a shared operating model.

## DIRECT evidence

Professional context:

- Trimble SRE work included operating-practice standardization and onboarding across combined businesses.
- Business Systems Analyst / Program Delivery resume explicitly emphasizes program delivery, project management, stakeholder management, process improvement, operational analysis, change management, documentation/governance, and data validation.

Measured/supportable outcomes:

```text
60% improvement in response/recovery metrics through clearer alerts, escalation paths, and ownership
operating practices standardized across three combined businesses
India-based team onboarded into shared operating practices
40% fewer repeat incidents
30% improved release reliability
```

## SAFE GENERALIZATION

The public case study may frame the problem as inconsistent operating practices/ownership across organizational boundaries and the work as standardizing how teams respond, document, govern, and hand off operational responsibility.

It may present a systems/program-delivery pattern such as:

```text
identify inconsistent operating patterns
-> clarify roles and ownership
-> standardize workflows/documentation
-> align escalation/readiness practices
-> onboard teams into the shared model
-> measure response/recovery and recurrence
```

This case study should make systems analysis and program delivery visible without pretending the work was a formal PMO program unless the source evidence supports that label.

## SUPPORTING SKILLS

```text
program delivery
project management
stakeholder management
process improvement
change management
documentation & governance
operational analysis
data validation
```

## DO NOT CLAIM

- merger/acquisition details beyond the public-safe phrase `three combined businesses`;
- confidential org charts, staffing details, internal team names, or transformation plans;
- formal authority Mike did not hold;
- a specific program budget, schedule, or headcount unless separately evidenced;
- that standardization alone caused all reliability metrics where the source only shows multiple contributing practices.

---

# Earlier leadership evidence

Earlier customer-facing leadership is useful for career continuity, not as a fourth primary case study unless needed later.

DIRECT public-safe evidence includes:

- Sears: operations in a $20M+ business, 20% fewer repeat customer issues, 15% improved customer engagement, 10+ future leaders coached.
- Apple: technical discovery/escalation resolution, 15% improved CSAT, 30% fewer repeat contacts.
- Best Buy: B2B service operations across 15+ locations, 90%+ CSAT, sub-24-hour SLA performance, 20+ specialists developed with 10+ advancing into leadership, one-year China market rollout support.

Use these primarily to prove long-standing customer/service leadership and people/operations experience rather than letting retail history dominate the modern technical-delivery story.

## Evidence hierarchy

Homepage case-study cards should emphasize:

```text
problem class
Mike's role
one concrete approach/proof signal
```

The full case-study page carries detail.

Technical project cards should emphasize:

```text
what was built
the technical concept demonstrated
repository / write-up link
```

Do not present a basic lab as equivalent to professional ownership.

## Confidentiality and truth gate

Before any case-study page is committed, confirm it contains none of the following:

```text
credentials or secrets
private phone/address
customer identities
internal URLs/environment names
private screenshots/tickets/emails
confidential datasets
non-public architecture detail
health/financial/job-search information
invented testimonials or client logos
unsupported revenue or financial impact
```

Also:

- do not reproduce proprietary diagrams or documentation;
- do not disclose private employer/customer metrics;
- do not claim sole ownership of collaborative work;
- do not fabricate metrics, testimonials, quotes, or outcomes;
- prefer generalized diagrams created specifically for the portfolio when a visual explanation helps;
- do not add a metric merely because a case study feels incomplete without one;
- do not imply causality stronger than the resume language supports.

If a useful story cannot be told safely without confidential detail, do not publish it.
