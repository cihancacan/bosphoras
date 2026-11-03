# Galle #79 — editorial-only private Preview gate (2026-11-04)

This feature branch change approves **one build for a private, nonindexed editorial QA preview only**; it is not an authorization to publish to production or to claim hotel imagery rights.

- Original FR+EN guides and 4 official hotels / 6 area descriptions are committed.
- 16 French + 16 English FAQs are wired in the existing guide and metadata.
- Correct URLs: /travel/destinations/galle and /en/travel/destinations/galle, plus /travel/hotels/galle and /en/travel/hotels/galle.
- Gallery manifest is deliberately fail closed until original Commons license metadata, 21 downloaded WebPs, visual exact-property checks and contact-sheet review are completed.
- Workflow scripts exist, but GitHub Actions has not started a Galle image import run. Therefore no verified Galle image assets may appear on this preview.
- The UI must never substitute photos from another destination or mislabel a photo as belonging to an unrelated hotel.
- No public usage rights or hotel supplier agreements are claimed.
- TypeScript/build and HTTP route smoke checks remain required before sharing this as a functional editorial preview.

This preview is for **content and responsive layout QA**, not the completed photo-rich destination.
