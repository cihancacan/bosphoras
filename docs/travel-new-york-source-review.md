# New York · 56th premium destination — source and release ledger

**Prepared:** 28 October 2026
**Branch:** `feature/luxury-travel-seo-destinations-20261012`
**Stage:** editorial + bilingual FAQ draft only; **NOT complete, NOT registered, NOT deployed**.

## Existing work preserved
- The catalogue in `data/travel/destinations.ts` still has 88 geographical slugs, including `new-york`.
- At the time of this draft the `FeaturedCitySlug` registry has **55** complete candidates ending in Istanbul.
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

## Current status

- [x] Source-backed four-hotel editorial draft in French and English
- [x] Eight FR/EN practical FAQs
- [x] Original geographical catalogue and previously completed destinations preserved
- [ ] Source-verified, local and visually inspected 9 city photographs and 12 individual hotel photographs
- [ ] Per-image rights/provenance and source-manifest completeness
- [ ] Premium editorial mapping / media gallery integration in `FeaturedCityGuide.tsx`
- [ ] New York `FeaturedCityGuideData` integration / registry update 55→56
- [ ] Typecheck, catalogue regression, New York visual checks and noindex tests
- [ ] Single intentional READY Preview and **verified** FR/EN HTTP 200, screenshots and mobile QA
