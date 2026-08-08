# Branch and Release Workflow

Default:

```text
main -> bounded working branch -> exact changed-file review -> CI -> draft PR -> rendered acceptance -> Mike approval -> merge/cutover
```

Large implementation sprints may use additional bounded branches later, but current foundation authority is `portfolio-2.0-foundation`.

Do not merge migration scaffolding into production merely because it builds.