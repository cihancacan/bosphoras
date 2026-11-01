# Da Nang #71 — owner Preview editorial release

Date 2026-11-01. Repository `cihancacan/bosphoras`, work branch `feature/luxury-travel-seo-destinations-20261012`. **Never edit main or Production without owner authorisation.**

## Complete integrated work

- Existing **88 unique destination slugs preserved**; **71 fully integrated editorial guides** including Da Nang.
- Substantial original French and English content, four factually confirmed and distinctly positioned operating resorts, five districts, five activities and eight original FAQs per locale (16).
- Resorts and official sources: [InterContinental Danang Sun Peninsula Resort](https://www.danang.intercontinental.com/about/) on Son Tra; [TIA Wellness Resort](https://tiawellnessresort.com/) with separately named Wellness Inclusive plan; [Hyatt Regency Danang Resort and Spa](https://www.hyatt.com/hyatt-regency/en-US/danhr-hyatt-regency-danang-resort-and-spa) at Non Nuoc Beach; [Naman Retreat](https://namanretreat.com/en/en) on Truong Sa.
- Meaningful details: TIA treatments total **80 minutes per person per night** under the specifically named Wellness Inclusive offer; Hyatt waterslide minimum **80 cm** and room-villa differences; InterContinental at remote protected Son Tra (not downtown), Michelin-related restaurant not guaranteed without reservation; Naman bamboo architecture with different bedroom and pool-villa categories.
- Photographs: **9 real, visually reviewed, author-and-licence-attributed Wikimedia CC city scenes** and **3 manually examined genuine, hotel-specific photos for each of four hotels (12)**, 21 unique file SHA-256 and pixel fingerprints. Off-topic, inappropriate or low-resolution alternatives rejected during contact-sheet review. Subject identity, source, original size and rights flags in `data/travel/daNangMediaCandidates.json`. The 12 hotel photos include official hotel publishers and one photo reproduced by Tripadvisor; **commercial image redistribution permission is NOT independently confirmed**.
- Gallery uses fail-closed `visuallyVerified && previewVisualApproved` gate. Nine destination scenes, hotel cards, local experience information, strong gradient for hero readability and a three-image destination panorama section.
- FR / EN metadata and `WebPage`, `BreadcrumbList`, `Article`, `ItemList`, `FAQPage` JSON-LD. External images excluded from public image schema. **Noindex**.
- The 21 WebP binaries and contact sheets were generated in an isolated Vercel sandbox, **not committed to GitHub**; Preview displays exact checked remote publisher/source URLs. `scripts/collect-da-nang-local-media.py` can later recreate private WebP copies from the auditable URLs.

## Executed and passed QA

- `npm ci --ignore-scripts --no-audit --no-fund`, `npm run typecheck`.
- `node scripts/check-travel-photo-standards.cjs data/travel/daNangMediaCandidates.json`.
- `scripts/check-da-nang-final.cjs`: 71 integrated, 88 unique slugs, photos, 16 FAQ, noindex, family caveats and prior guides.
- Prior `vinh-hy`, `hakone`, `kyoto`, `tokyo` regression scripts and travel catalogue checker all passed.
- Actual local Next.js dev server delivered **HTTP 200 on four FR/EN destination and hotel URLs** with all four real hotel names, correct title, `noindex,follow`, and schema graph `WebPage,BreadcrumbList,Article,ItemList,FAQPage` with 8 FAQs per language.
- Vercel Git-based preview must separately reach `READY` before claiming deployed delivery. Production and main unchanged.

## Review paths

- `/travel/destinations/da-nang`
- `/en/travel/destinations/da-nang`
- `/travel/hotels/da-nang`
- `/en/travel/hotels/da-nang`

## Blockers before public publication

The 12 hotel/press source photos must receive independently confirmed commercial republication permissions or be replaced with licensed alternatives; the current visually approved photos are *only* for a protected nonindexed owner-preview, and third-party image URLs can change. No live booking inventory, price, API reseller status, advance payment or after-sales promise has been confirmed. Keep noindex and do not promote to main.
