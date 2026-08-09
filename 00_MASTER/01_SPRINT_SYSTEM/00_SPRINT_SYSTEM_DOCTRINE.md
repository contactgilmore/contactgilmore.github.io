# ContactGilmore Portfolio Sprint System Doctrine

Status: active doctrine  
Owner: Mike Gilmore

## Purpose

Governs sprint rhythm, work-package structure, sprint records, closeout, GPT guardrails, backlog routing, and accountability.

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

`00_MASTER/ACTIVE_SPRINT.md` is a concise pointer. Detailed scope, queue, evidence, gates, and closeout live in a bounded record under `docs/sprints/`.

## Sprint-record lifecycle and anti-creep rule

`docs/sprints/` is the operational sprint-record directory. It contains the active sprint record plus recently completed records that are still useful for near-term continuity.

A completed sprint record becomes archive-eligible **30 calendar days after its recorded close date**. Archive-eligible records move to:

```text
docs/sprints/archive/
```

Rules:

- startup and closeout perform a lightweight age/hygiene check of `docs/sprints/`;
- never archive the record named by `00_MASTER/ACTIVE_SPRINT.md`;
- never archive a record while a current living-state document still depends on its operational path;
- archive by Git move so history remains intact;
- routine startup does **not** read `docs/sprints/archive/`;
- read archived records only for explicit historical recovery, audit, regression, or decision provenance;
- the archive is evidence, not current authority;
- do not create placeholder archive files merely to keep an empty directory in Git;
- do not create separate sprint summaries when the sprint record itself already carries the needed closeout evidence.

This retention rule is intentionally simple: enough recent history stays close at hand while old execution records stop competing with current authority.

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
check sprint-record hygiene
read active sprint record
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
Execution evidence -> `docs/sprints/`

## Stop rules

Stop if authority is unknown, scope broadens without approval, production/blog continuity is unresolved, exact verification cannot be performed, or another repository would require mutation without separate authorization.
