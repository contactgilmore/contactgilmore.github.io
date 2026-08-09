# Sprint Rhythm and Work Packages

Status: active support document  
Owner: Mike Gilmore

## Core rhythm

```text
direction -> sprint -> sprint record -> work package -> implement/audit -> prove -> disposition -> closeout
```

## Sprint opening requirements

Every sprint names:

```text
identifier
thesis
current authority
scope
non-goals
protected paths/content
work-package queue
acceptance condition
closeout condition
owner gates
```

The sprint record lives under `docs/sprints/` while active and through the recent-history retention window defined by sprint-system doctrine.

## Work-package contract

Every substantial package identifies:

```text
Current authority:
Objective:
Required source:
Allowed update paths:
No-touch paths:
Non-goals:
Content/data classification:
Verification gates:
Expected result:
Commit and merge rule:
Local follow-up:
Stop conditions:
```

## Task classifications

```text
read-only audit
documentation update
remote tracked-file patch
framework migration
content migration
visual implementation
browser validation
deployment change
closeout
blocked
```

## Autonomous continuation

Once Mike has authorized a sprint or bounded work package, GPT should continue through routine GitHub execution, research, implementation, exact-diff review, CI/browser investigation, in-scope defect correction, and documentation maintenance without repeatedly asking Mike to drive intermediate mechanics.

A checkpoint is not automatically an owner gate. Stop for Mike only when the active sprint/work package identifies an owner decision, scope must materially broaden, public safety is uncertain, local-only evidence is uniquely valuable, or production authorization is required.

When an owner gate is reached, GPT should first assemble the strongest available evidence and then present a concise, mobile-friendly decision packet:

```text
what changed
exact candidate/head or PR
what passed
what remains subjective/uncertain
exact decision requested
```

Do not offload repository operations to Mike merely to create a checkpoint. If connected GitHub can perform the operation safely, GPT should perform it.

## Change discipline

Do not hide broad cleanup inside a feature. Do not mix production cutover with unrelated redesign work. Migration, content restructuring, visual design, and deployment may share a sprint but should remain separate work packages with independent verification.

Reducing owner effort never means reducing proof. Visual claims still require rendered evidence, accessibility claims require accessibility evidence, and local/device-specific claims require matching proof when those claims matter.
