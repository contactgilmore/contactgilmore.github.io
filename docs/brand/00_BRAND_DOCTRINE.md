# Portfolio Brand Doctrine

Status: **ACTIVE — smoke-tested Portfolio 2.0 visual authority**  
Validated: 2026-08-08  
Implementation authority: `src/styles/global.css` plus shared Astro layouts/components

## Purpose

This domain governs the public visual identity and experience of ContactGilmore Portfolio 2.0. The design is no longer provisional. It has been exercised in a production Astro build and browser-tested across desktop, tablet, and phone before becoming doctrine.

Brand authority lives in `docs/brand/contactgilmore-portfolio/` and contains exactly:

```text
00_BRAND_BRIEF.md
01_VISUAL_SYSTEM_HARD_STANDARDS.md
02_PRODUCT_SURFACE_AND_INTERACTION_RULES.md
03_TOKENS_AND_CODE_REFERENCES.md
04_BACKLOG_AND_RISKS.md
```

## Proven brand posture

The site should feel like a restrained modern B2B technical/product site with strong editorial hierarchy. It should communicate experienced technical judgment, customer awareness, systems thinking, and calm confidence rather than resemble a themed developer portfolio.

Core qualities:

```text
clear
credible
quietly technical
modern
editorial
spacious but purposeful
high-contrast
customer-aware
professional rather than decorative
```

## Change doctrine

Future GPT work should extend the proven system rather than casually redesign it.

Changes to typography scale, palette, navigation model, core page width, major surfaces, or evidence hierarchy require a clear product reason and browser evidence. New patterns such as horizontal rails, sticky storytelling, progressive reveal, or scroll-supported sections are allowed when they improve comprehension or proof presentation, but they are not required and must degrade cleanly on narrow/mobile layouts.

Do not freeze the site into static sameness: variation is allowed inside the system. New pages can use asymmetric composition, alternate surface bands, or restrained motion when content benefits, while preserving the identity defined here.

## Non-negotiable public-safety boundary

Visual assets, screenshots, metadata, copy, test artifacts, and generated examples committed to this public repository must be safe for unrestricted public disclosure. Never use private correspondence, credentials, internal infrastructure details, private addresses/phone numbers, health/financial information, confidential customer material, or non-public employer artifacts as design content.

## Verification expectation

Material visual changes should continue to pass the repository Playwright smoke suite at desktop, tablet, and phone widths and should be visually inspected before becoming new doctrine.
