# Brand Backlog and Risks

Status: active maintenance record  
Updated: 2026-08-08

## Completed foundation

The following are no longer open brand questions:

- restrained B2B/editorial visual direction selected;
- system/Inter type stack accepted;
- light neutral + blue accent palette accepted;
- responsive shell and fluid typography implemented;
- homepage evidence hierarchy implemented;
- Work, Writing, About, and public Resume surfaces implemented;
- article reading experience implemented;
- desktop/tablet/phone Playwright smoke coverage established;
- horizontal-overflow regression caught and corrected before doctrine freeze.

## Future backlog

Potential improvements should be evaluated against actual content need rather than added as decoration:

- **Desktop/laptop homepage hero typography calibration:** owner review on macOS Chrome found the current 14ch / `clamp(3rem, 7.4vw, 6.6rem)` hero visually aggressive at a common laptop/desktop viewport. Oversized editorial display type is a legitimate contemporary pattern, but the current combination creates many short lines and pushes the value proposition/CTA below the first viewport. Before changing it, compare a modestly wider measure and/or lower desktop maximum against the current design using Playwright screenshots at MacBook-class widths. Preserve the confident editorial hierarchy; optimize recruiter scanability rather than reverting to generic small corporate typography.
- stronger individual case-study detail pages when enough public-safe material exists;
- selective project imagery/diagrams where they provide evidence;
- social/Open Graph preview artwork;
- optional subtle entrance/scroll behavior if it improves orientation;
- optional horizontal proof/writing rail if content volume makes it useful;
- richer article topic/category discovery as the archive grows;
- accessibility audit expansion beyond current structural/browser smoke tests;
- periodic performance/Lighthouse review.

## Risks to guard against

- diluting the clear professional identity by reintroducing competing job-title lists;
- letting technical tags/logos outrank professional evidence;
- excessive empty space that stops feeling editorial and starts feeling unfinished;
- oversized display typography that is technically responsive but visually slows scanning at intermediate desktop/laptop widths;
- adding animation simply to make the site look modern;
- inconsistent one-off component styles that erode the established system;
- turning Work into confidential employer/customer disclosure;
- adding private résumé/contact information to a public repository;
- allowing the blog archive to overwhelm the homepage as article count grows;
- accepting visual changes without Playwright/mobile evidence.

## Doctrine change threshold

A future visual experiment does not automatically become brand doctrine. Update doctrine only after the pattern has proven useful in the actual site and passed responsive/browser review.
