# Bosphoras Luxury Stays — batch-ready preview release, 27 October 2026

**Environment:** Vercel Preview, **never production**. **Branch:** `feature/luxury-travel-seo-destinations-20261012`. Build tagged once using required marker `[travel-batch-ready]` after code, photo-source and catalogue checks. Production/main, Wink staging, payments and CRM unchanged.

## Exactly ten premium FR/EN destinations in this batch
1. `/travel/destinations/formentera`
2. `/travel/destinations/deia`
3. `/travel/destinations/port-andratx`
4. `/travel/destinations/comporta`
5. `/travel/destinations/melides`
6. `/travel/destinations/tivat`
7. `/travel/destinations/the-hamptons`
8. `/travel/destinations/palm-beach`
9. `/travel/destinations/nantucket`
10. `/travel/destinations/harbour-island`

English routes are prefixed by `/en`; SEO approval remains empty/noindex pending visual and photo-rights sign-off. The original catalogue continues to contain **88 distinct destination slugs**.

**Assets:** each of the ten destinations has 12 genuine property images (3 per selected hotel) and 9 distinct local/attributed scene WebPs, i.e. 210 total photos. Individual photo credits, original URLs, author attribution and Commons licences are stored in the ten `*MediaCandidates.json` files. Hotel photo commercial-rights flags reflect project-operator permission assertion, not independently examined creator licences. Historical archival scene images are captioned as such.

**Automated checks:** independent GitHub Actions image collectors, `npm run typecheck`, `scripts/check-travel-catalogue.mjs` and `scripts/check-travel-batch-preview.mjs` all passed before build authorisation. No commercial inventory or dynamic third-party booking availability is asserted by the editorial guide.

**Release gates after READY:** inspect ten French and ten English URLs with Vercel authentication, verify hotel photo correctness and rights, hero images, multi-language copy, scroll/mobile widths, JSON-LD and noindex metadata. Do not promote or enable SEO indexing without separate express approval.

**Build budget:** this release marker is the only intentional build request after preparing the ten pages. All earlier work commits included `[skip ci]` or otherwise matched the project's ignored-build protection. Keep subsequent fixes in a new batch or accumulate them before another explicit preview.
