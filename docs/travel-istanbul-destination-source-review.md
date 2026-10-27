# Istanbul destination guide: 55th featured city (28 October 2026)

## Preserve existing work
- Existing fully researched **nine-hotel IstanbulFlagship** remains at `/travel/hotels/istanbul`, unchanged. Nine property profiles and their photograph galleries are reused, not reimported.
- `/travel/destinations/istanbul` is the complementary FR/EN city-wide destination guide built from `istanbulHotels`, `istanbulDistricts`, and `istanbulCityScenes`.
- Six existing city-scene photographs include five CC-labelled with attribution and one source-origin Sultanahmet image not independently licensed. 9 hotel groups already provide dozens of labelled local hotel WebPs. Do not imply these publishers granted commercial reproduction rights.
- Five distinct geographic areas, nine actual hotels, six experiences and eight FR/EN FAQs; preserve all 88 destination slugs.
- The page remains **noindex** and uses only Commons-labelled hero city photographs in Article JSON-LD. No confirmed booking rates, supplier channel, private yacht inclusion, or claim of site visitation.

## Operators cross-checked
- https://www.peninsula.com/en/istanbul/5-star-luxury-hotel-bosphorus
- https://press.fourseasons.com/bosphorus/hotel-facts/
- https://www.fourseasons.com/bosphorus/accommodations/
- https://www.kempinski.com/en/ciragan-palace
- https://cigarankempinski.com/en/odalar-sueitler
- https://www.mandarinoriental.com/en/istanbul/bosphorus/stay
- https://galataport.com/en/about-us/about-the-project
- Details about the other hotels come from existing `istanbulFlagship.ts` source-verified editorial content.

## Release gates
- [ ] New 55th guide in registry
- [ ] Image and FAQ integration
- [ ] TypeScript and catalogue regression checks
- [ ] Source and photography rights recorded; public indexing blocked
- [ ] READY Vercel Preview + 200 status for FR/EN destination and unchanged Istanbul flagship hotel page

## Preview readiness — 28 October 2026
- `istanbul` registered as the 55th FeaturedCityGuide; all 88 original catalogue slugs preserved.
- Nine independently identified hotel records reused from `istanbulFlagship.ts`, with original local image sets from `hotelPhotography.ts` and five city areas from `istanbulCityScenes.ts`.
- The independent nine-hotel flagship at `/travel/hotels/istanbul` is preserved and must remain the hotel listing page.
- TypeScript and prior regression suite passed after integration (GitHub Actions run 40596099493); dedicated new 55th-guide check added to editorial QA workflow.
- CC-labelled city hero assets explicitly filtered for Article structured data. Other publisher photos remain private-preview candidates; public commercial rights and indexation unapproved.
- User explicitly requests one Vercel Preview after each destination, so this build is deliberately labelled `[travel-batch-ready]`, with production unchanged.
