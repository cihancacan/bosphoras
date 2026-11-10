# Jaipur #77 — acceptance and private Preview release
Date: 2026-11-08

## Scope
- Preserve original 88-destination catalogue, all other integrated guides, main branch and production.
- Jaipur becomes the 79th *integrated* guide (destination's catalogue rank remains #77).
- Existing JAIPUR FR/EN draft remains the editorial source; verified authentic property photographs in local WebP are the only gallery assets.
- Pages: `/travel/destinations/jaipur`, `/en/travel/destinations/jaipur`, `/travel/hotels/jaipur`, `/en/travel/hotels/jaipur`.

## Media and provenance
- 21 locally optimized WebPs: nine Commons-licensed Jaipur scenes, exactly three actual hotel-related photos per each of Rambagh Palace, The Oberoi Rajvilas, Raffles Jaipur and The Leela Palace Jaipur.
- Image package 2,640,864 bytes; each WebP <350 KB, originals and conversions SHA-256 documented in `data/travel/jaipurMediaCandidates.json` and `data/travel/jaipurWebpOptimization.json`.
- Source pages, photo-specific credits and license URLs recorded. Assistant visually examined the labeled 21-photo contact sheet. This is **not** a declaration that the project owner has personally inspected or approved the pictures.
- 14 source images have verified Commons CC license metadata; **7 hotel/publisher images do not have public commercial reuse permissions**. They are strictly for authenticated, unindexed private Preview; must be licensed or replaced prior to public usage.
- `publicUseApproved=false`, `productionApproved=false`, `approvedDestinationSlugs` left empty, and image JSON-LD withheld for unapproved photos.

## QA requirements
- `npm run typecheck`
- `node scripts/check-jaipur-photo-gates.mjs`
- `node scripts/check-jaipur-final.mjs`
- `node scripts/check-travel-catalogue.mjs`
- Vercel Preview READY, four bilingual routes render, noindex for all, images respond as actual image/webp; user may need to authenticate for SSO-protected previews.
- No release to main/production, no public permission to republish third-party hotel photos.

## Not claimed
No live hotel inventory, supplier partnerships, booking guarantees, owner visual approval, or blanket commercial image reuse rights.
