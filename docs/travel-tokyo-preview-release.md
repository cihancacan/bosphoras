# Tokyo #67 — protected owner Preview release and QA

**Date:** 31 October 2026 · **Branch:** `feature/luxury-travel-seo-destinations-20261012` · **Production:** unchanged.

## Completed and integrated

- The existing 88 geographic slugs are unchanged. **67 premium destination guides** are now registered; Tokyo is #67 after Palawan #66.
- Original independent editorial French and English, five neighbourhoods with realistic train/airport logistics, five city experiences, four individually distinguished hotels and eight original FAQs per language.
- Selected hotels: **Aman Tokyo** (Otemachi), **Bvlgari Hotel Tokyo** (Yaesu), **Park Hyatt Tokyo** (Nishi-Shinjuku; reopened 9 December 2025) and **1 Hotel Tokyo** (Akasaka; opened 5 March 2026).
- Shared French/English destination and hotel routes; Tokyo-specific SERP titles and descriptions; readable dark hero gradient and contrast-enhanced text; a city panorama section; verified hotel comparison fields and official booking/reference URLs; protected HotelList/Article/FAQPage JSON-LD without unapproved image claims.
- 9 independently sourced Tokyo Wikimedia Commons city photographs and 12 named-property publisher gallery/press photographs, for a total of **21 distinct image identities**. SHA-256, source URLs, captions and licence evidence are recorded in `data/travel/tokyoMediaCandidates.json`.
- Image assets were downloaded and converted to 21 distinct WebP files in an isolated Vercel sandbox during acquisition; the **binary WebPs are not yet committed to GitHub**. Consequently owner Preview images use the validated external publisher/Commons URLs. The deterministic collector `scripts/collect-tokyo-local-media.py` is included for local archival, but remote URL permanence is not guaranteed.

## QA executed before Preview release

- `npm ci --ignore-scripts --no-audit --no-fund` succeeded in Vercel isolated sandbox.
- `npm run typecheck` completed without diagnostic errors.
- `node -r ./scripts/register-ts.cjs scripts/check-tokyo-final.cjs`: success (67 guides, 88 slugs, 21 unique image references, 16 FAQs, four hotels, five districts).
- Prior Sumba #65 and Palawan #66 regression tests, travel catalogue and noindex checks: success.
- No change to `main`, indexed public content, API inventory, payment, booking rights, or supplier after-sales.

## Preview review URLs

- French: `/travel/destinations/tokyo`
- English: `/en/travel/destinations/tokyo`
- French hotels: `/travel/hotels/tokyo`
- English hotels: `/en/travel/hotels/tokyo`

**Unresolved, do not misstate as completed:** 12 publisher hotel photos have no independent public commercial republication licence; all 21 still require final editorial contact-sheet/visual approval; external images are not locally archived in the GitHub project. This guide remains **private, noindex, not production**. Vercel READY is not proof of all four paths returning HTTP 200. Public publishing requires explicit owner approval after rights and visual QA.
