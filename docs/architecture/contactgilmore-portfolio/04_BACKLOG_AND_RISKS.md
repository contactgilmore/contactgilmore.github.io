# Architecture Backlog and Risks

Backlog:
- inventory all Jekyll/Liquid dependencies;
- inventory `_posts` and referenced assets;
- verify self-hosted runner labels/node availability;
- scaffold Astro on working branch;
- define blog content schema;
- build migration script or controlled copy process;
- add build/link/URL regression CI;
- design GitHub Pages deployment workflow;
- remove Jekyll only after acceptance.

Risks: slug drift, broken image paths, unsupported Markdown/Liquid constructs, dependency churn, deployment misconfiguration, or introducing unnecessary client JavaScript.