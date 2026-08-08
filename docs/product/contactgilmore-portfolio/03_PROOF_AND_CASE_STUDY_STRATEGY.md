# Proof and Case Study Strategy

Status: active product support document  
Updated: 2026-08-08

## Purpose

Primary proof should shift from basic technology demonstrations to sanitized professional case studies. Existing Terraform, New Relic, automation, and similar GitHub projects remain useful as secondary engineering evidence.

## Candidate case-study lanes

1. **SaaS integration and API troubleshooting** — authentication, request/response flow, data validation, SQL verification, integration partners/middleware, and cross-team diagnosis.
2. **Customer implementation and technical delivery** — requirements, implementation coordination, testing/UAT, release readiness, documentation/training, and partner/internal alignment.
3. **Reliability and operational improvement** — observability, automation, incident/problem analysis, alerting/runbook/process improvement, or another safely documentable example of making systems easier to operate.

These are lanes, not permission to publish confidential employer or customer details.

## Case-study contract

Every professional case study should use a consistent evidence structure:

### Context

A short sanitized description of the environment or customer/problem class. Do not identify a customer unless the identity is already intentionally public and using it is clearly appropriate.

### Problem

What needed to be implemented, understood, fixed, improved, or coordinated? State the problem without revealing sensitive architecture, data, credentials, or internal business information.

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

One short section showing what the work demonstrates about technical delivery, customer communication, integrations, or systems thinking.

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

Before a case study is committed:

- remove customer names unless explicitly appropriate;
- remove internal URLs, hostnames, credentials, identifiers, screenshots, data, ticket numbers, and unpublished architecture details;
- do not reproduce proprietary diagrams or documentation;
- do not disclose private employer/customer metrics;
- do not claim sole ownership of collaborative work;
- do not fabricate metrics, testimonials, quotes, or outcomes;
- prefer generalized diagrams created specifically for the portfolio when a visual explanation helps.

If a useful story cannot be told safely without confidential detail, do not publish it.
