# Vĩnh Hy Bay #70 — protected Preview release

Date: 2026-11-01. Development branch `feature/luxury-travel-seo-destinations-20261012`. Do **not** modify `main`, production, domains, booking APIs or pricing.

## Actual completed work

- Existing 88 geographic slugs retained, **70 integrated premium-editorial guides** (69 predecessors intact).
- Six-thousand-character original editorial per language (French and English), four factual operating properties at **distinct tiers**. Explicitly avoid inventing four comparable five-star resorts in Vinh Hy. Amanoi is the ultra-luxury landmark; Swiss-Belvillas Solavita is at Binh Tien 17 km away; Casa Maya and Vinh Hy Resort are simpler coastal accommodation.
- Five different sectors, five real experiences; 8 independent FAQs per language; useful family, location, private beach, coral and transfers caveats.
- Official property sources: https://www.aman.com/resorts/amanoi ; https://www.swiss-belhotel.com/hotels/swiss-belvillas-solavita-binh-tien ; https://casamayaresort.vn/ ; https://resortvinhhy.com/
- Nine Commons-licensed real Nui Chua / Vinh Hy / Hang Rai scenes, three separately sourced authentic official hotel photos per property (12). Original publisher URLs, credit, licence, original SHA-256 and pixel fingerprint per image in `data/travel/vinhHyBayMediaCandidates.json`.
- A local Vercel sandbox generated 21 optimised WebP photographs from the sources and checked uniqueness; those **binary files have not been committed to GitHub**. Review Preview uses 21 remote verified source URLs, which depend on third-party hosting stability.
- `scripts/collect-vinh-hy-local-media.py` allows local archival when required. Visual art-direction contact-sheet review is **not** completed and metadata correctly sets `publicUseApproved=false`.

## Verified technical QA on the integrated source branch

- `npm run typecheck` and `scripts/check-vinh-hy-final.cjs` PASS, covering 70 guides, 88 unique slugs, four correct lodging tiers, 9 Commons + 12 property photos, 16 FAQs and noindex.
- Hakone, Kyoto, Tokyo, Palawan regression scripts PASS. Global travel catalogue gates PASS.
- Local Next.js dev server returned HTTP 200 on all four FR/EN destination and hotel pages, displayed all four real accommodation names, and rendered noindex plus WebPage, BreadcrumbList, Article, ItemList and 8-FAQPage schema.
- Vercel Preview must reach READY before presenting as live; the production branch remains unchanged.

## Page paths

- /travel/destinations/vinh-hy-bay
- /en/travel/destinations/vinh-hy-bay
- /travel/hotels/vinh-hy-bay
- /en/travel/hotels/vinh-hy-bay

## Not approved for public release

The 12 hotel publisher photos do not have independently established commercial redistribution permissions, notwithstanding being accessible on official property websites. Manual image identity/photo quality remains pending. All four routes are noindex. Do not imply live stock, rates, booking contracts, payment collection, or after-sales obligations from an editorial guide. Never label unfinished Anara phases or new BIM Land luxury project as operational.

## 2026-11-01 — Casa Maya photo identity correction and release gate

The prior `casa-1` was **wrong**: a generic globe/suitcase artwork from Casa Maya's promotional web page (`trang-chu-163.jpg`), not a photograph of the hotel. Physically inspected all three Casa images, replaced `casa-1` with the unmistakable Casa Maya property building and pool (source PheTravel, licensed for **private owner-review only** pending independent public rights). Kept its two authentic official room photos. Also replaced `swiss-1` and `swiss-2` with first-party Swiss-Belvillas villa interiors (instead of vague coastline/golf images) and replaced `vinhhy-3` boat tour participants with the hotel's authentic Deluxe guest room.

Reviewed **12/12 actual hotel photographs**, keeping 3 individual images per property. The 9 landscape photos are independently sourced but have **not** received the same manual final visual review. Updated `data/travel/vinhHyBayMediaCandidates.json` with source and rights evidence, individual `visuallyVerified` + `previewVisualApproved`, source pixel dimensions and source hashes. Introduced `scripts/check-travel-photo-standards.cjs` reusable fail-closed photo subject/duplicate/source/attribution policy. **Low-resolution originals** (notably Amanoi and Vinh Hy) still need high-resolution sourcing before a public release. See `docs/travel-photo-standards.md` and `docs/travel-vinh-hy-casa-maya-photo-audit.md`.

Source-only checks: `npm run typecheck`, `node -r ./scripts/register-ts.cjs scripts/check-vinh-hy-final.cjs`, prior destination regressions, catalogue gate all passed. Four locale/route variants locally returned HTTP 200, rendered the correct Casa exterior pool photo and Swiss villa image, and did not render the old irrelevant URLs. **No main/production changes**.
