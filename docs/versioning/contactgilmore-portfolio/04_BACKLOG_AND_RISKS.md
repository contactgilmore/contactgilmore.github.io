# Versioning Backlog and Risks

Backlog:
- verify current GitHub Pages source/deployment configuration;
- verify self-hosted runner labels and Node tooling;
- define durable CI/deploy workflows;
- add exact URL regression inventory before cutover;
- define release/rollback checklist;
- add closeout helper only if it materially reduces handoff burden.

Risks: accidental production branch edits, unreviewed workflow permissions, runner-offline queues, deployment source confusion, and loss of exact rollback authority.