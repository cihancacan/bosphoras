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
