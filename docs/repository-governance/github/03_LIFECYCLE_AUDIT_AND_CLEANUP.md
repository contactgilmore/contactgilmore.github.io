# Portfolio Lifecycle Audit and Cleanup

Status: active local adoption fact

Portfolio cleanup must preserve public URLs, publication history, accepted professional evidence, production availability, and public disclosure safety. Remove obsolete workflow/storage/process residue only after proving it has no current compatibility or recovery value.

## Accepted GOV-2E candidate cleanup

```text
cleanup base main = 6cd58c05a5b68de0eac4a69e2315c3539c0a0144
former candidate branch = portfolio-2.0-foundation
former candidate tip = c1211564f2086280d3a09fe992e1dc378aa960dd
merged PR = #14
merged PR commit = bb2968e523bd7af87e3cd31a3a7e045ecb44947b
branch-retirement transaction head = 97a1d746c4517e84fdfb9eca01cc8d292d8fbaf6
branch-retirement run = 31919041013 PASS
branch-retirement job = 95095736087 PASS
former candidate branch = ABSENT
temporary retirement branch = ABSENT
candidate-packaging workflow = ABSENT
live Actions artifacts = 0
live Actions caches = 0
```

The branch tip was not a direct ancestor of `main` because PR #14 was squash-merged. Deletion was accepted only after proving that the exact live branch tip equaled the merged PR head and the PR was merged. The bounded GitHub-hosted workflow then deleted only that branch and its own temporary branch; `main` remained unchanged.

The obsolete candidate-packaging workflow had no run after 2026-08-08 and no live artifact. Removing it preserves Git history while eliminating accidental execution/storage surface.

Completed sprint records follow the central 30-day archive lifecycle. Historical public engineering evidence remains in Git history; it is not duplicated into parallel status trees. Temporary destructive cleanup workflows must not remain after verified use.

## 2026-09-29 estate audit and archive reconciliation

The governed repository-estate audit re-read live Portfolio branch state against accepted `main`. All 28 non-main branches present at that checkpoint were ahead of or diverged from `main`; none was an ancestry-safe mechanical deletion candidate. Branch age, merged-looking names, and squash-merged PR history are not sufficient deletion evidence. Preserve a branch whenever its live tip contains commits not reachable from current `main` unless a later bounded provenance proof establishes an accepted equivalent history and authorizes retirement.

The same audit applied the central 30-day sprint-record lifecycle to P11. `SPRINT_P11_PROMPT_PROVE_SHIP_EDITORIAL_CONTINUATION_2026-08-27.md` moved from the active sprint root to `docs/sprints/archive/` with 100% content identity preserved. The roadmap and governance validator were reconciled to the archived path. Accepted merge `2beec5e1f433f8ac1fb40a3d4ada330851b06650` and post-merge governance run `36545064554` proved the archive transition.

Durable cleanup rule: cleanup is a provenance problem, not a naming or age heuristic. Reconcile the exact live object first, preserve unique history by default, and archive closed execution records without rewriting their evidence.
