# Changelog

## 2026-08-11

### Employer Readiness and Final Portfolio Polish

- Completed the deliberate final employer-facing audit across Home, Work, all three professional case studies, Writing index/navigation, About, Resume, and shared site metadata/navigation surfaces.
- Preserved the approved Portfolio 2.0 visual system and homepage composition after the audit found no redesign requirement.
- Reworked the public Resume into a scan-first resume sequence: direct identity and role, public-safe contact paths, one concise non-first-person Professional Summary, capabilities, and accomplishment-led experience evidence.
- Removed duplicated Resume opening positioning so experience evidence appears sooner, particularly on phone layouts, without changing supported claims, metrics, chronology, or accomplishment bullets.
- Tightened employer-facing proof wording from `permanent remediation` to `durable remediation` and from `shared operating system` to `shared operating model` where the revised language is more literal and evidence-aligned.
- Added a clear `View resume` evaluation path to all three professional case studies while retaining `Back to selected work`.
- Distinguished exact current navigation destinations (`aria-current="page"`) from nested current section locations (`aria-current="location"`) and reconciled brand interaction authority to that tested rule.
- Added the stable MG favicon, `og:site_name`, home `WebSite` structured data, and clearer Work/About/Writing/Resume document titles.
- Consolidated case-study DIRECT / SAFE GENERALIZATION / SUPPORTING SKILLS / DO NOT CLAIM evidence into canonical `03_PROOF_AND_CASE_STUDY_STRATEGY.md`, removed the redundant sixth product authority file, and restored the product folder's five-document contract.
- Kept all blog article bodies unchanged; P9 remains long-form editorial authority.
- Final candidate source `db1e1f3a25ee8192909ee91655216084c66680e4` passed 140 Playwright tests with 4 intentional skips, 21-page Astro build, 22/22 public asset audit, responsive employer-readiness regression, and representative axe accessibility coverage.
- Owner approved P10; PR #31 was squash-merged as production release `99bcd3a82cc37a99350d6eae2171b053d8f27199`.
- Automatic GitHub Pages deployment run `31464158531`, production validation run `31464158520`, and production Playwright run `31464158526` all succeeded; production Playwright again passed 140 tests with 4 intentional skips and 0 failures.
- Entered the planned post-P10 stability posture: no further cosmetic portfolio churn without a real defect, meaningful new professional evidence, deliberate useful content, or maintenance evidence.

## 2026-08-08

### Portfolio Quality Ratchet and Series Transition

- Closed Git to Know You as the complete #1–#10 first writing series.
- Calibrated the homepage hero for laptop-class recruiter scanability and added explicit 1440×900 / 1280×800 first-viewport proof.
- Hardened repository doctrine around autonomous bounded execution, exact-head evidence, concise owner gates, and low owner friction without lowering quality standards.
- Standardized sprint execution records under `docs/sprints/` with a 30-day recent-history window and historical-only `docs/sprints/archive/` lifecycle.
- Introduced **Prompt. Prove. Ship.** as the next writing series: AI-assisted engineering without outsourcing judgment.
- Published **Prompt. Prove. Ship.: From Chat to Change** with a purpose-built vector thumbnail and intentional homepage feature placement.
- Final candidate passed Astro/source/asset/link validation and responsive Playwright/axe coverage with 116 tests passed and 4 intentional skips.
- Production release merged as `fad90493ab0cad61fee834cdace94256e97e8557`; automatic GitHub Pages deployment run `31290363581` succeeded.

### Portfolio 2.0 foundation

- Opened Sprint P1 for governance and Jekyll-to-Astro migration.
- Established Job Search Studio-style `00_MASTER` governance adapted to the portfolio.
- Added product, architecture, brand, and versioning documentation domains.
- Added Portfolio 2.0 roadmap.
- Set Astro 7+ / TypeScript / Markdown / custom CSS / GitHub Actions / GitHub Pages as the target architecture.
- Protected current production, blog content, assets, and public URL continuity during migration.
