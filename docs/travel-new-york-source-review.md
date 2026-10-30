# New York · 56th premium destination — source and release ledger

**Prepared:** 28 October 2026
**Branch:** `feature/luxury-travel-seo-destinations-20261012`
**Stage:** 56th guide integrated, 21 photographs acquired and private QA underway; production NOT approved.

## Existing work preserved
- The catalogue in `data/travel/destinations.ts` still has 88 geographical slugs, including `new-york`.
- Before the New York work, the `FeaturedCitySlug` registry had 55 candidates ending in Istanbul; New York is the 56th.
- No changes to `main`, the protected production site, Istanbul hotel flagship, existing photos, backend, Wink, CRM, payment code, approved/robots policy or other destinations.
- New editorial files: `data/travel/newYorkDraftGuide.ts`, `data/travel/newYorkDraftFaq.ts`.
- Draft hero keys `scene-1` and `scene-4` are **NOT** valid imagery until local verified files are added. Do not register or activate this guide before photography QA.

## Operator / location evidence inspected

1. **Aman New York** — https://www.aman.com/hotels/aman-new-york and https://www.aman.com/resorts/aman-new-york/story. Crown Building at 730 Fifth Avenue and West 57th Street; the hotel's own material distinguishes suites, spa and separate residences. Central Park views and services are room-specific.
2. **The Fifth Avenue Hotel** — https://www.thefifthavenuehotel.com/about/ . Official address 1 West 28th Street, NoMad. Historic mansion + new tower; do not confuse with northern Fifth Avenue.
3. **The Greenwich Hotel** — https://www.thegreenwichhotel.com/services/ and https://www.thegreenwichhotel.com/shibui-spa/ and https://www.thegreenwichhotel.com/pool-gym/ . 377 Greenwich Street, Tribeca; spa with heated pool, separate spa appointments and family restrictions. Reconfirm family access/age with hotel.
4. **The Lowell** — https://www.lowellhotel.com/rooms-and-suites and https://www.lowellhotel.com/ . Upper East Side; selected rooms and suites have terraces or wood-burning fireplaces, not all categories.
5. **Geography** — https://visitmanhattan.nyc/neighborhoods-map and https://cityofnewyork.co/neighborhoods ; Midtown, NoMad, Tribeca, Upper East Side, Brooklyn/DUMBO separated. These references are for orientation, not exact transfer-time promises.

## Photography gate — must be completed before featured registration

- **Destination shots:** aim for nine distinct local New York views (Central Park / Midtown / historic Fifth Avenue / Flatiron-NoMad / Tribeca streets / Brooklyn Bridge from DUMBO / waterfront / Lower Manhattan / city evening); hero landscape and secondary must be strong, distinct and location-accurate.
- **Property gallery:** at least three unmistakably attributable photographic views for each of four hotels: Aman New York, The Fifth Avenue Hotel, The Greenwich Hotel, The Lowell; target 12 property images. No building photo may be misrepresented as a particular suite.
- For **each** image record immutable source URL, source page, photographer/rights owner, commercial licence or absence of proof, local WebP path, original dimensions, hash, alt/caption FR+EN, visual identity/duplication check, and Preview/public rights decision.
- Commons photo reuse requires exact image-page attribution and licence compliance; publisher hotel photography is **private-review-only until independently cleared for commercial publication**. Operator statements are not automatic proof of creator rights.
- Do not hotlink third-party production image URLs, reuse unrelated city assets, duplicate photos between hotels or claim photo QA for uninspected files.
- Missing or rejected photographs must stay hidden. A bland neutral fallback is safer than a fake hotel gallery, but a fallback does not count as a finished luxury destination.

## Editorial and product QA

- Rich original FR/EN prose, five genuine areas, four distinct hotels, five experiences, ten practical checks and eight FAQs per language.
- Cross-check actual hotel room categories, children policies, wheelchair access, pool restrictions and cancellation conditions at booking time. No invented room price, inclusion, live inventory, star ranking, transfer duration, or first-person stay.
- Bosphoras is an **affiliate introduction/referral only**: supplier/booking partner handles payment, confirmation, modification, cancellation, refund and after-sales. Do not imply Bosphoras directly services bookings.
- Preserve all 88 catalogue slugs; register as #56 only after photographs and source manifests are validated.
- Required route checks after one intentional Preview: `/travel/destinations/new-york` and `/en/travel/destinations/new-york` HTTP 200 with actual SSR, mobile/desktop galleries, photo attribution, metadata/JSON-LD, FAQ, internal links, **noindex**.
- Keep production untouched and no indexing until explicit owner sign-off. Mark final Preview commit with `[travel-batch-ready]` only after checks to avoid intermediate Vercel costs.

## Integration and source-specific QA — 28 October 2026
- Genuine New York destination scene images (9): Wikimedia Commons attribution and CC by/by-sa records, local WebP, original image URL, checksum and source page in `newYorkMediaCandidates.json`.
- Four different actual hotel references: Aman New York, Fifth Avenue Hotel, Greenwich Hotel and Lowell. Twelve locally retained photos: 3 per property, not stock or cross-hotel substitutions.
- **Aman** images explicitly represent true named Aman New York hotel suites (Premier Suite 56th Street, Aman Suite, Premier Suite bedroom), *not* separate private Homes.
- **The Lowell** publisher Garden Suite and Hollywood Suite pictures plus a third correctly attributed magazine terrace photo. Rights not independently cleared for commercial republication.
- Registered as **56th** premium `FeaturedCityGuide`; 88 catalogue entries untouched; no new hotel inventory/booking claims.
- Design uses existing luxury guide components, four hotel photo stories, five place images, experiential descriptions, eight FAQ questions in each language.
- Distinctive French and English title tags/meta descriptions, index-safe Article, ItemList and FAQ structured data, source-labelled WebP captions and contextual crosslinks.
- Preview URL pattern: `/travel/destinations/new-york` and `/en/travel/destinations/new-york`.
- Production `main` unchanged, noindex remains; private owner Preview is *not* commercial photography rights approval.

## Current status

- [x] Source-backed four-hotel editorial draft in French and English
- [x] Eight FR/EN practical FAQs
- [x] Original geographical catalogue and previously completed destinations preserved
- [x] Source-identified 9 CC city photographs and 12 individually labelled hotel photographs; 21 local WebPs verified by collector, final human visual/public-rights approval still pending
- [x] Per-image attribution, source URL, hash, local path and explicit commercial-rights flags
- [ ] Premium editorial mapping / media gallery integration in `FeaturedCityGuide.tsx`
- [ ] New York `FeaturedCityGuideData` integration / registry update 55→56
- [ ] Typecheck, catalogue regression, New York visual checks and noindex tests
- [ ] Single intentional READY Preview and **verified** FR/EN HTTP 200, screenshots and mobile QA


## Verified GitHub-only pre-release QA
- GitHub Actions run 40601095663: **SUCCESS** — TypeScript, 88-destination catalogue, earlier premium destination regressions, old Istanbul flagship and all 21 New York source media.
- Collector run 40600883749: **SUCCESS** — 9 attributed New York Commons city views + 12 sourced distinct property images (3 each).
- New York is guide #56, with French `/travel/destinations/new-york` and English `/en/travel/destinations/new-york`; their Preview, not production, is ready for human inspection.
- Public commercial photo release is still blocked. Source publisher rights and photographic visual approval must be evaluated before removing `noindex`.
- No real-time inventory or referral supplier agreement claimed; preserve partner-handled service after sale.


## New York photo visibility correction — 28 October 2026
- Root cause: `FeaturedCityGuide.tsx` mapped `newYorkAreaVisuals`, but the JSX area-card eligibility gate omitted `city.slug==='new-york'`; all five neighbourhood cards silently rendered without their image component.
- Fixed that visibility condition. Manhattan landscape scenes are now allocated without repeated uses:
  - Hero: `scene-1`, New York skyline at dusk.
  - Five neighbourhoods: `scene-2` Central Park, `scene-3` Flatiron/NoMad, `scene-5` Tribeca, `scene-9` Upper East Side, `scene-4` Brooklyn waterfront.
  - Dedicated landscape essay: `scene-6` Central Park nature and `scene-8` Lower Manhattan skyline; responsive two-column FR/EN story, image credits in captions.
  - Experience: `scene-7` Top of the Rock skyline, instead of reusing the Brooklyn waterfront image.
- Lightened New York hero gradient so the panorama reads better; new navigation anchor `#panoramas-new-york`.
- Regression guard `scripts/check-new-york-destination-final.mjs` now validates district render gate, two extra landscapes, nine distinct photo slots and unique original image files.
- Preserve 88 destination slugs, the other 55 premium guides, noindex, property galleries and hotel rights restrictions. No production promotion.

## Hero legibility fix — 30 October 2026
- Owner review found the New York landscape-rich home hero unreadable because New York was omitted from the premium background-panel, headline-shadow and introduction-shadow predicates.
- Added `new-york` to all three shared predicates in `components/travel/FeaturedCityGuide.tsx`: a translucent `bg-[#091c24]/65` backdrop-blurred card; white title with `0 3px 14px` shadow; and bright introductory copy with `0 2px 8px` shadow.
- Added a dedicated eyebrow text shadow for New York and a slightly stronger left-side gradient, preserving the uncovered skyline on the right.
- Changes automatically apply to FR and EN, and to both destination and hotel-guide variants; other cities unchanged.
- GitHub Actions run `41049347975` passed TypeScript, full catalogue integrity and New York travel QA. Production untouched. Private Preview remains noindex.
