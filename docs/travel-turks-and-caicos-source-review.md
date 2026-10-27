# Turks and Caicos — source review and draft gate (27 October 2026)

**Branch:** `feature/luxury-travel-seo-destinations-20261012`. **Lot 3 / destination 1 of 10.** Preserve the catalogue of 88 distinct destinations.

## Selected authentic properties and verified distinctions

1. **Amanyara** — https://www.aman.com/resorts/amanyara ; pavilions and three- to six-bedroom villas at Northwest Point, Providenciales. Official current site notes temporary closure until **1 November 2026**; not a confirmed reopening. Accommodation categories: https://www.aman.com/resorts/amanyara/accommodation . No universal private pool or ocean view.
2. **COMO Parrot Cay** — https://www.comohotels.com/turks-and-caicos/como-parrot-cay ; genuinely separate private island, official approximation **15-minute road + 35-minute boat** after PLS. Regular Garden/Ocean View Rooms are not Beach Houses, Villas or Residences with private pools: https://www.comohotels.com/turks-and-caicos/como-parrot-cay/accommodation/rooms .
3. **The Shore Club** — https://theshoreclubtc.com/ ; Long Bay Beach, not Grace Bay. Estate Villas have 3–6 bedrooms and private pools; these do not describe normal suites: https://theshoreclubtc.com/villas/ .
4. **Wymara Resort + Villas** — https://www.wymara.com/ ; Resort at Grace Bay Beach, separate Villas Sunset Cove at Turtle Tail. Specific Resort category list: https://www.wymara.com/accommodation .

## Destination context

- PLS international arrivals and passport/onward-ticket precautions: https://www.visittci.com/providenciales/getting-here
- Long Bay shallow kiteboarding waters but no lifeguard: https://www.visittci.com/providenciales/long-bay-beach
- Hurricane season 1 June–30 November: https://www.visittci.com/weather-and-astronomy
- Respect reefs, protected areas and licensed marine operators: https://www.visittci.com/providenciales/things-to-do/water-sports-and-activities

## Editorial files created

- `data/travel/turksAndCaicosDraftGuide.ts`: bilingual source-checked long-form overview, four distinct hotels, five geographical areas, five experiences and traveller caution checklists.
- `data/travel/turksAndCaicosDraftFaq.ts`: seven practical and substantive FAQs per language.

## Next gate: authentic photo collection, then wiring into Premium Guide

**Not yet complete.** Require **12 genuine property photos** (three from the correct official property per hotel) and **nine distinct geographical landscapes** with recorded original URLs, creator credits/licence evidence, visual verification and non-duplicate checks. Avoid placeholder, stock, wrong properties, unsupported photography rights or fabricated WebPs. Hotel owners' general photo permissions are not independent photographer-level licence audits.

Once images exist and are reviewed, create `turksAndCaicosMediaCandidates.json`, `turksAndCaicosGuide.ts`, `turksAndCaicosPremiumEditorial.ts`; wire them into `featuredCityGuides.ts`, `FeaturedCityGuide.tsx`, `TravelPages.tsx` with the shared fail-closed image logic and a dedicated checker. **Do not wire a photo-less premium page or set `visuallyVerified=true` without real manual inspection.**

## Release policy

- No production edits or indexation. `approvedDestinationSlugs` remains empty and no Wink room prices or availability are asserted.
- No Vercel build for an individual destination. Ordinary branch work commits tagged `[skip ci]`; only one `[travel-batch-ready]` commit after all ten guides and assets pass QA, then inspect 20 FR/EN pages behind Vercel authentication.
- The existing release at SHA `766126c74287771ad15318b140fecc702e9c5d31` remains untouched.
