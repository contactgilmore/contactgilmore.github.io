# Handoff and Recovery

Fresh GPT work begins from repository authority, not chat memory.

## Single-entry startup

The preferred new-chat instruction is:

```text
Review contactgilmore/contactgilmore.github.io and begin with 00_MASTER/00_MASTER_DOCTRINE.md. Follow its startup protocol before taking action.
```

The master doctrine routes the session to current living state, the active sprint note, required domain docs, current GitHub branch/PR state, and verification evidence.

Task-specific files, PRs, commits, or external references may be named in addition to the master-doctrine pointer when useful.

## Repository-native handoff

GitHub source/history is the authoritative transfer mechanism between sessions. Sprint notes preserve bounded execution history; living state captures the current conclusion; Git preserves exact source history and PR/CI/deployment evidence.

The old ZIP-package/local-script/upload handoff is retired for routine work and should not be recreated unless connected GitHub is unavailable and Mike explicitly requests a disaster-recovery fallback.

## Recovery

Before a production change, record the exact current production commit, candidate head, PR, validation evidence, and rollback point when applicable. If a deployment fails, recover through Git branch/ref/deployment history and the documented rollback contract rather than manual reconstruction.

## Public-repository constraint

All handoff/recovery documentation is public. Record enough sanitized information to reproduce project decisions and state, but never use tracked docs to preserve private personal context, sensitive infrastructure data, confidential employer/customer information, or private job-search material.
