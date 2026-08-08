# Active Sprint

Sprint: **P4 — Professional Case Studies and Content Refresh**  
Status: OPEN  
Opened: 2026-08-08  
Branch: `portfolio-2.0-foundation`

Current work package: **P4-WP6 — Content safety and Playwright regression**

Sprint note: `docs/sprint_notes/SPRINT_P4_PROFESSIONAL_CASE_STUDIES_AND_CONTENT_REFRESH_2026-08-08.md`

Completed predecessor sprint:

```text
P3 — Astro Visual System and Portfolio Shell
final Playwright smoke: 21 / 21 passed
brand doctrine: smoke-tested and active
```

P4 completed work:

```text
P4-WP1 — Evidence inventory and case-study truth map
P4-WP2 — Enterprise implementation and migration case study
P4-WP3 — Reliability and cross-functional remediation case study
P4-WP4 — Program delivery and operating-model case study (implementation complete; final integrated regression in WP6)
P4-WP5 — Homepage / Work / About / Resume content integration and de-duplication
```

Professional positioning:

```text
Technical Delivery & Customer Solutions

Proof dimensions:
- Implementation & Technical Delivery
- Integrations & Troubleshooting
- Customer & Stakeholder Leadership
- Business / Systems Analysis and Program Delivery as explicit supporting capability
- Operational / Reliability Leadership as technical credibility
```

Case-study routes:

```text
/work/implementation-delivery/
/work/reliability-remediation/
/work/operating-model/
```

Protected boundaries:

```text
main production branch
historical blog article bodies and compatibility URLs
published assets
public-disclosure safety
no confidential customer/employer details
no invented metrics or outcomes
no unnecessary private contact information
no production Pages cutover without explicit owner approval
```

CI posture:

```text
feature branch validation: pull_request -> main
production validation after cutover: push -> main
runner: GitHub-hosted ubuntu-latest
```

Design authority: the P3 smoke-tested Portfolio 2.0 brand system in `docs/brand/` is active. P4 extends that system rather than reopening basic color/navigation/layout decisions without a product reason.

Next target: complete integrated public-safety/build/legacy-route/Playwright regression, then close P4 and hand off to P5 launch hardening.
