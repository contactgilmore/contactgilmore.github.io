# ContactGilmore Portfolio Sprint System Doctrine

Status: active doctrine  
Owner: Mike Gilmore

## Purpose

Governs sprint rhythm, work-package structure, sprint notes, closeout, GPT guardrails, backlog routing, and accountability.

## Five-document law

`00_MASTER/01_SPRINT_SYSTEM/` contains exactly:

```text
00_SPRINT_SYSTEM_DOCTRINE.md
01_SPRINT_RHYTHM_AND_WORK_PACKAGES.md
02_CLOSEOUT_HANDOFF_AND_PACKAGING.md
03_GPT_REVIEW_AND_CHANGE_GUARDRAILS.md
04_BACKLOG_RISKS_AND_ACCOUNTABILITY.md
```

## Living sprint state

`00_MASTER/ACTIVE_SPRINT.md` is a concise pointer. Detailed scope, queue, evidence, gates, and closeout live in a bounded file under `docs/sprint_notes/`.

## Units of work

```text
sprint
work package
checkpoint
closeout
```

A sprint defines thesis, authority, scope, non-goals, protected boundaries, work-package queue, acceptance, and closeout.

## Default flow

```text
confirm authority
read startup doctrine/living state
read active sprint note
read smallest required domain source
confirm one bounded work package
implement on bounded branch
run claim-matching proof
review exact change set
update living state
close or continue
```

## Domain routing

Product/content strategy -> `docs/product/`  
Framework/build/deploy -> `docs/architecture/`  
Visual/interaction -> `docs/brand/`  
Git/release/handoff -> `docs/versioning/`  
Execution evidence -> `docs/sprint_notes/`

## Stop rules

Stop if authority is unknown, scope broadens without approval, production/blog continuity is unresolved, exact verification cannot be performed, or another repository would require mutation without separate authorization.