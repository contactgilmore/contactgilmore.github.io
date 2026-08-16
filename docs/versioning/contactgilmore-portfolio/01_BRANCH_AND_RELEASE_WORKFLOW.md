# Branch and Release Workflow

Default:

```text
exact current main
-> bounded working branch
-> public-disclosure and professional-read review
-> exact changed-file review
-> GitHub-hosted CI
-> draft PR while evidence is incomplete
-> rendered/claim-matching acceptance
-> Mike approval when public representation or production significance requires it
-> squash merge to main
-> automatic Pages deployment
-> affected-surface verification
```

`main` is the only production branch. The former `portfolio-2.0-foundation` branch was retired after its exact tip was proven as merged PR #14 head. The associated candidate-packaging workflow is retired; ordinary work must not recreate a persistent parallel release branch or routine candidate artifact path.

Migration scaffolding, experimental code, or a green build alone never authorizes production. Public self-hosted execution remains prohibited.
