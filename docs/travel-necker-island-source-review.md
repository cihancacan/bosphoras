# Necker Island — official verified sources, 27 October 2026

**Destination 3/10.** One genuine privately managed Necker Island retreat, four accommodation clusters — Great House, Bali Hi, Bali Lo and Temple House, **not four independent hotels**.

- Virgin Limited Edition island overview and true occupancy: https://www.virginlimitededition.com/necker-island/the-island/
- The Great House: https://www.virginlimitededition.com/necker-island/rooms-and-suites/the-great-house/
- Bali Hi: https://www.virginlimitededition.com/necker-island/rooms-and-suites/bali-hi/
- Bali Lo: https://www.virginlimitededition.com/necker-island/rooms-and-suites/bali-lo/
- Temple House: https://www.virginlimitededition.com/necker-island/rooms-and-suites/temple-house/
- Current individual-stay weeks 2026/2027: https://www.virginlimitededition.com/necker-island/individual-stays/
- Exclusive use, distinct room allocations: https://www.virginlimitededition.com/necker-island/exclusive-use/
- Boat arrival from Beef Island / Virgin Gorda: https://www.virginlimitededition.com/necker-island/the-island/getting-here/
- Published inclusion/exclusion and family policies: https://www.virginlimitededition.com/necker-island/faqs/

## Photo gate

3 publisher-specific photos per cluster (12) plus 9 genuinely labelled Necker Island landscape/experience images, 21 unique physical WebP files, actual contact-sheet check, immutable source URLs and SHA256. Keep original publication rights separate from operator's self-attested image permission: `approvedForCommercialPublication=false` and `approvedDestinationSlugs` empty. Warn about possible neighbour Moskito Island imagery in Virgin's general island overview, which must be excluded from Necker-specific scenes.

## Release policy

Branch: `feature/luxury-travel-seo-destinations-20261012`. Preserve 88 catalogue destinations. All routine work marked [skip ci], one owner Preview after QA only. No production promotion, no Wink live inventory claims.

## Owner Preview gate — 27 October 2026

Necker Island destination 3/10 completed as a private reviewer build. Verified genuine accommodation clusters: The Great House, Bali Hi, Bali Lo and Temple House, not four independent hotels. Exactly 12 original Virgin Limited Edition cluster photographs and 9 genuine island images saved as 21 individually distinct WebPs and visually reviewed on two contact sheets. French and English guides, 14 FAQ responses, location galleries and noindex preserved. GitHub Actions run 40556023482: 17 steps succeeded, including typecheck and physical-image QA. Preserve source attribution and continue to withhold public-commercial photo release until independent photographer licence verification. The publication of this Preview is explicitly for page review only and does not promote production or activate pricing/reservations.

## Routing fix and final Preview gate — 27 October 2026

Necker Island offers bookable rooms and suites through one resort operator and therefore now includes the `hotels` taxonomy alongside its preserved `villas` and `yachts` categories. The earlier Preview rendered both destination guides (HTTP 200) but returned HTTP 404 for `/travel/hotels/necker-island` in FR/EN due to the category guard. Corrected without changing any of 88 destination slugs. Added a regression assertion and reran GitHub Actions run `40557112327`: TypeScript, image source/physical file checks, full catalogue and old-destination tests all passed. Issue one new owner-only Preview build to verify that all four FR/EN routes render HTTP 200, without production promotion or public SEO indexing.
