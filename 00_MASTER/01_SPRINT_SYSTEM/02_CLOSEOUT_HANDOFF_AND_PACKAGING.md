# Closeout, Handoff, and Packaging

Status: active support document  
Owner: Mike Gilmore

## Closeout rule

At a material checkpoint update, as applicable:

```text
00_MASTER/WHERE_WE_ARE.md
00_MASTER/ACTIVE_SPRINT.md
00_MASTER/LAST_CLOSEOUT_PROMPT.txt
current docs/sprint_notes/<sprint>.md
relevant domain document
ROADMAP.md when roadmap truth changed
CHANGELOG.md after accepted material changes
```

## Fresh-chat handoff

A fresh GPT session should be able to recover authority by reading the startup doctrine, living state, active sprint note, and only the referenced domain files.

## Evidence

Closeout should record exact branch/head when known, completed work packages, validation performed, unresolved risks, owner decisions, and the next recommended action.

Do not treat unverified visual assumptions as accepted UI. Mike owns final visual acceptance.