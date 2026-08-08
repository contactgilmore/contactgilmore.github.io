# Sprint Rhythm and Work Packages

Status: active support document  
Owner: Mike Gilmore

## Core rhythm

```text
direction -> sprint -> bounded note -> work package -> implement/audit -> prove -> disposition -> closeout
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

## Change discipline

Do not hide broad cleanup inside a feature. Do not mix production cutover with unrelated redesign work. Migration, content restructuring, visual design, and deployment may share a sprint but should remain separate work packages with independent verification.