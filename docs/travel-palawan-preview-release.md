# Palawan #66 — protected owner preview release candidate

**Date**: 31 October 2026. **Branch**: `feature/luxury-travel-seo-destinations-20261012`. **Production/main**: unchanged.

## Scope delivered
- Catalog still preserves all **88 unique destination slugs**, now **66 integrated premium editorial guides**, retaining Sumba #65 and Pamalican/Amanpulo in its independent destination.
- Four independently identified real hotel properties: El Nido Resorts Lagen Island, El Nido Resorts Pangulasian Island, Cauayan Boutique Private Island and Discovery Coron, with real publisher pages and category cautions.
- Original longform independent French and English destination copy, five geographically separated areas, five locally relevant experiences, eight FAQs in each language, metadata, noindex, JSON-LD Article + curated HotelList + FAQs, shared responsive hotel cards and panorama section.
- 9 **distinct source-licensed Commons** scenes + 12 real official publisher hotel photos identified, acquired independently, resized to WebP and SHA-256 fingerprinted in the sandbox. Source URLs, official origin, rights notices and photo captions stored in `palawanRemoteScenes.json` and `palawanRemoteHotels.json`.
- **Important media limitation:** Because the original WebP binaries were not uploaded to this GitHub branch, the owner Preview uses the remote source photo URLs. The ready-to-run GitHub-only collector `scripts/collect-palawan-media.py` and workflow `travel-palawan-media.yml` document how to persist the WebPs; until then, do not claim the images have been stored in the repo or their publisher URLs are stable indefinitely.
- **Rights gate:** 9 Commons scenes have compatible attribution-based reuse terms; 12 hotel publisher images remain **unlicensed for independent commercial public redistribution**. Owner preview only; **do not promote to production or expose images publicly**. Contact-sheet visual review is also outstanding, and source identification alone is not proof of artistic quality.

## QA executed directly in isolated Vercel sandbox
- `npm ci --ignore-scripts --no-audit --no-fund`: success.
- `npm run typecheck`: success.
- `node -r ./scripts/register-ts.cjs scripts/check-palawan-final.cjs`: success. New #66 guide, 88 slugs, four hotels, 5 sectors, 5 experiences, 16 bilingual FAQs, 21 source images, zero public indexing.
- Existing `check-sumba-final.cjs`, `check-chiang-mai-final.cjs`, `check-bangkok-final.cjs`, `check-koh-yao-noi-final.cjs`, travel catalogue, and all existing Alpine/batch draft tests: success. Sumba exact 65 assertion updated to preserve `>=65` rather than block newer guides.

## Routes to verify once Vercel Preview is READY
- French destination: `/travel/destinations/palawan`
- English destination: `/en/travel/destinations/palawan`
- French hotels: `/travel/hotels/palawan`
- English hotels: `/en/travel/hotels/palawan`

**Not done by this report**: public rights acquisition, physical image upload to GitHub, full 21-photo visual approval, production release, supplier booking API or after-sales contract.

Vercel `READY` is not the same as four HTTP 200 route checks; run authenticated route checks before marking the preview route QA completed.
