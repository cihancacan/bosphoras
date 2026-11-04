# Galle #79 — protected Preview media / release QA evidence
Date: 2026-11-04

## Source and media QA
- 21 local and distinct optimized WebP assets committed under `public/images/travel/galle-premium/`: 9 geographic scenes, 12 hotel or locally contextualized hotel-area images.
- Total local photo bytes: 2,960,828. All 21 exist in the current feature tree and are below 350 KB each.
- Original-source URLs, SHA-256 source and WebP hashes, photographer credits and licensing references retained in `data/travel/galleMediaCandidates.json` and `data/travel/galleWebpOptimization.json`.
- Assistant visually inspected the 4-by-6 contact sheet containing all 21 photographs, compared the pictured subjects with the referenced landmark/hotel sources, and added subject-specific visual QA notes.
- The three The Fort Printers area images show streets and architecture near the hotel; their captions must not claim that these are room or amenity photos.
- One Jetwing Lighthouse photo is credited to its named hotel gallery source with public reproduction rights not independently established. It is restricted to owner-only protected, noindex Preview. No public/indexed launch authorized.
- Do not claim that the owner personally reviewed or approved the photo set; `photosVisuallyApprovedByOwner` remains zero.
- All other claimed CC license names and attribution links must remain visible and correct in the UI. Commercial public rights have not been approved globally.

## Guide and release rules
- Galle FR/EN destination guides, hotel guides, editorial metadata and 16 FAQ per language already integrated in the existing feature branch.
- Build on Vercel Preview only using the established branch-specific ignored-build gate; do NOT modify or deploy main/production.
- Required final acceptance: Vercel READY; HTTP 200 for four FR/EN destination/hotel routes; rendered HTML contains gallery and landscape WebP paths; a representative landscape and all 12 hotel images are served HTTP 200 with image/webp content type; robots noindex and responsive markup.
- If the Vercel build or live smoke tests fail, the destination must not be described as finished.
