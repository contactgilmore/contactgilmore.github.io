# Closeout, Handoff, and Recovery

Status: active support document  
Owner: Mike Gilmore

## Closeout rule

At a material checkpoint update, as applicable:

```text
00_MASTER/WHERE_WE_ARE.md
00_MASTER/ACTIVE_SPRINT.md
00_MASTER/LAST_CLOSEOUT_PROMPT.txt
current docs/sprints/<sprint>.md
relevant domain document
ROADMAP.md when roadmap truth changed
CHANGELOG.md after accepted material changes
```

Closeout records must be safe for unrestricted public disclosure and professional enough to be read by a recruiter, hiring manager, security reviewer, or future fork owner.

At sprint closeout, record the close date in the sprint record. Do not move the record to archive immediately. The operational directory retains recently closed records for 30 calendar days; the sprint-system doctrine governs later archive eligibility and startup/closeout hygiene.

## Fresh-chat handoff

The normal handoff is repository-native.

A new GPT session should receive one primary instruction:

```text
Review contactgilmore/contactgilmore.github.io and begin with 00_MASTER/00_MASTER_DOCTRINE.md. Follow its startup protocol before taking action.
```

`00_MASTER/00_MASTER_DOCTRINE.md` then routes the session through startup doctrine, living state, the active sprint record, required domain docs, current source, PR state, and verification evidence.

Task-specific files, PRs, commits, or external references may be added to the prompt when they are unusually important, but Mike should not have to enumerate routine startup documents.

## Legacy transfer process

The former ZIP + local apply script + manual upload-to-new-chat process is retired for normal operation.

Do not create handoff ZIPs, patch scripts, or repository snapshots when connected GitHub can recover the current project. GitHub source/history plus tracked doctrine and living state are the durable handoff mechanism.

ZIP/manual transfer is allowed only as an explicit disaster-recovery fallback when connected GitHub is unavailable and Mike requests it.

## Evidence

Closeout should record, when relevant:

```text
branch and exact head SHA
PR number/state
completed work packages
validation run IDs/results
rendered/browser evidence when visual quality is claimed
public-disclosure review result
unresolved risks
owner decisions/gates
next recommended action
close date for sprint-retention purposes
```

Do not treat unverified visual assumptions as accepted UI. Rendered evidence is required for visual claims.

## Idempotence requirement

A fresh session following the master-doctrine startup must be able to reach the same project-state conclusion without relying on the prior chat transcript. If it cannot, living state or sprint documentation is incomplete and should be repaired before further substantial work.

Archived sprint records are not part of normal startup. They are read only when a historical question, regression, audit, or decision-provenance need makes them relevant.
