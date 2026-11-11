# Bosphoras Luxury Stays — Koh Rong #85 & Google search favicon

## Destination
Completed as continuation of Siem Reap #84 on 12 November 2026.

- FR: `/travel/destinations/koh-rong`, `/travel/hotels/koh-rong`
- EN: `/en/travel/destinations/koh-rong`, `/en/travel/hotels/koh-rong`

Four active Nuitée WhiteLabel exact-property identities (verified `country=KH`, `mapped=true`, `deletedAt=null`, exact name and supplier ID):
- The Royal Sands Koh Rong — `lpacb6e` (5 stars, Koh Rong main island).
- Song Saa Private Island — `lp65176` (5 stars, on Koh Ouen, separate private island in Koh Rong archipelago).
- Long Set Resort — `lp9dadf` (4 stars, Long Set Beach).
- Anaya Koh Rong — `lp323828` (4 stars, Pagoda Beach).

The user authorized hotel photography. Nine genuine Koh Rong landscape scenes with Commons licenses and copyright attribution and twelve actual supplier-property photographs are optimized to local WebP. Source pages, credits, license links, photo hashes and verified status are preserved in `data/travel/kohRongMediaCandidates.json`. Song Saa's island and marine transport are explicitly differentiated; no fictional room prices or package inclusions.

The shared booking route `/travel/search?hotel=<id>` and English `/en/travel/search?hotel=<id>` redirect to `https://bosphoras.nuitee.link/hotels/<id>?language=<fr|en>&currency=EUR&clientReference=bosphoras_koh-rong_<id>`. Confirm exact room inventory and cancellation conditions with Nuitée.

## Search favicon
- User explicitly chose the **original** `app/icon.png`: it remains unchanged, not recreated or restyled.
- Created `app/favicon.ico` from that exact image at 16/32/48/64/96/192/256 sizes, and stable public 48/96/192-pixel PNG assets from that exact image.
- Declared crawlable `/favicon.ico`, `/favicon-96.png`, `/favicon-192.png` and apple icon in the root Next.js metadata on the canonical hostname `www.bosphoras.com`.
- `robots.txt` allows crawling and homepage returns index, follow. Verify paths 200 and valid image MIME on live domain.
- Google says suitable favicons must be square, at least 8x8, recommends more than 48x48; Googlebot and Googlebot-Image must crawl home and favicon. Even after compliance, Google chooses whether to display the icon and recrawl can take days to weeks. Official docs: https://developers.google.com/search/docs/appearance/favicon-in-search
- Optional user action: Request indexing of `https://www.bosphoras.com/` in Search Console URL Inspection, not an indexing guarantee.

## QA
Run `node scripts/check-koh-rong-85.cjs`, `npm run typecheck`, test 4 pages HTTP 200, 8 direct supplier redirects, all 21 WebP HTTP 200, favicon dimensions, stable URLs and Googlebot fetches. Previous destination guides and existing icon source remain intact.

