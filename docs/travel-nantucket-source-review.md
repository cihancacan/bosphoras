# Nantucket, Massachusetts — Bosphoras editorial and photographic source ledger

**Date:** 27 October 2026 · **Branch:** `feature/luxury-travel-seo-destinations-20261012` · **Batch:** 9/10 (Formentera, Deià, Port d'Andratx, Comporta, Melides, Tivat, The Hamptons, Palm Beach, Nantucket). Original catalogue: exactly 88 slugs preserved.

## Four exact properties and hotel geography
1. **White Elephant Nantucket** — 50 Easton Street, Brant Point/Nantucket Harbor. Multi-building Harborside Hotel, cottages, Inn, Residences and downtown Lofts; **some downtown lofts are not directly on the harbor**. Dining Brant Point Grill, bicycles, spa. Official https://www.whiteelephantnantucket.com/ and https://www.whiteelephantnantucket.com/accommodation.
2. **The Wauwinet** — 120 Wauwinet Road in the northeast, Relais & Châteaux inn with TOPPER'S, distinctive bay vs Atlantic views, off-site cottages and houses. Far from the ferry/downtown restaurant streets. Official https://www.wauwinet.com/ and https://www.wauwinet.com/accommodations.
3. **Greydon House** — Broad Street close to ferry/Whaling Museum; 20 different guestrooms designed by Roman and Williams in former captain's house, Via Mare dining and Green Room. Official https://greydonhouse.com/ and https://greydonhouse.com/restaurant/ . Green Room and restaurant have different hours, and published 2026 events should not be assumed permanent.
4. **The Nantucket Hotel & Resort** — 77 Easton Street downtown, seasonal heated family pool and kiddie pool, seasonally supervised Kids' Club **ages 3+ toilet-trained**, quiet/lower pool and hot tub **ages 14+ depending on schedule**; all-season hot tub subject to hotel opening; seasonal family pool may be closed in autumn. Official https://www.thenantuckethotel.com/ and https://www.thenantuckethotel.com/activities-amenities/nantucket-swimming-pools/ and https://www.thenantuckethotel.com/signature-experiences/complimentary-childrens-program/ .

## Destination and safety facts
- **Nantucket is an island, not a peninsula**. Ferry from Hyannis on Steamship Authority (fast passenger approx 1 h, traditional approx 2 h 15 min) https://www.steamshipauthority.com/schedules?Port=NT . Vehicle transport has separate limited advance reservations; weather/fog can cancel services.
- Great Point's protected Coskata-Coatue Wildlife Refuge requires a **distinct driving permit**, not the town's beach sticker. Sources: https://www.nantucket-ma.gov/266/Beach-Vehicle-Permits , https://www.nantucket-ma.gov/2484/Great-Point-Coskata-Coatue-Wildlife-Refu , https://nantucketconservation.org/what-we-protect/visitor-information/ . Migratory shorebird protections and erosion can restrict routes.
- Five local areas: Nantucket Town cobbles and ferry wharves; Brant Point; northeast Wauwinet, Great Point/Coskata-Coatue; 'Sconset/Sankaty Head; Surfside southern beaches.
- Kids on the south coast: variable strong Atlantic surf/currents, heed lifeguards and weather. Private gardens and eroding cliffs are not public access paths.

## Exact assets and code
- `data/travel/nantucketDraftGuide.ts`, `nantucketDraftFaq.ts`: extensive FR/EN narrative, four properties, five geographic zones, five experiences, six cautions per language, seven practical FAQs per language.
- `data/travel/nantucketGuide.ts`, `nantucketPremiumEditorial.ts`, `nantucketMediaCandidates.json`: premium guide gallery, image-eligibility gate, FR/EN photo captions and rights metadata.
- `public/images/travel/nantucket-premium/`: twelve hotel photos exactly 3 per property sourced from each **property's own official site**, nine genuine Nantucket Wikimedia Commons views (three lighthouses, Main Street, Surfside, Whaling Museum and town architecture), 21 unique SHA256 and each author/licence/URL recorded.
- `scripts/collect-nantucket-media.py`, `scripts/check-nantucket-draft.mjs`, `.github/workflows/travel-nantucket-media.yml`: photo download, rights-source verification, aspect-preserving WebP, size, uniqueness, catalogue 88 and GitHub-only commit validation.
- Existing `data/travel/featuredCityGuides.ts`, `components/travel/FeaturedCityGuide.tsx`, `components/travel/TravelPages.tsx` reused and extended, with no rewriting of the other destinations.

## Copyright / approval / go-live
- Hotel photographs are from official hotel sites and the project operator previously attested broad permission to use hotel photography. **Individual photographer licensing agreements have NOT been reviewed independently.** Recording `commercialRightsCleared=true` is the *operator-attested internal gallery gate*, not independent legal verification.
- Wikimedia Commons photographs are attributed to each author with exact Commons page and open licence URL (often Creative Commons BY-SA 4.0, whose licence conditions remain applicable).
- No hotel room stock, room rate, ferry crossing, vehicle permit, restaurant reservation, private beach entitlement or supplier distribution agreement is promised.
- `approvedForCommercialPublication=false`, existing site `approvedDestinationSlugs` remains empty, **noindex**. Do not publish this page independently. Run **one Vercel Preview after 10 destinations**, inspect desktops/mobiles, verify photo licensing and supplier rights and only then approve any indexing.
