# Bosphoras Luxury Stays — Siem Reap #84

Completed after Gangtey #83 on 12 November 2026. The existing page templates, logo, favicon, other destinations and account-managed Nuitée white-label routing are unchanged.

## Exact pages
- `/travel/destinations/siem-reap`
- `/travel/hotels/siem-reap`
- `/en/travel/destinations/siem-reap`
- `/en/travel/hotels/siem-reap`

## Four active properties
Verified in the account's own Nuitée WhiteLabel search-by-name and exact-property details (`mapped=true`, `deletedAt=null`, country `KH`, exact names).
- Zannier Phum Baitang `lp8319c`.
- Raffles Grand Hotel d'Angkor `lp27341`.
- Park Hyatt Siem Reap `lp3988b`.
- Shinta Mani Angkor `lp36205`.
- Amansara `lpf0c2a` was excluded because supplier details returned `deletedAt` non-null, despite appearing in the search. Do not invent a booking link.

## Photos
- Nine actual Siem Reap/Angkor photos with verified Creative Commons license, image title, artist, exact Commons image page and licensing URL.
- Twelve property-specific images from exact Nuitée supplier hotel galleries, three per hotel, visually reviewed for identity and distinct angles. User approved commercial use and publication.
- All 21 images are local optimized WebP with SHA-256 and source traces in `data/travel/siemReapMediaCandidates.json`; no image is reused from other destinations.

## Editorial
- FR and EN luxury guide, four differentiated hotel profiles, six neighbourhoods/areas, six Angkor and city experiences, ten FAQs per language, travel and airport advice, real Angkor ticketing.
- Official visitor source: https://www.angkorenterprise.gov.kh/en . Verify passes and visitor code of conduct before travel.
- No invented room availability, nightly rates, official offers or hotel characteristics.
- Bosphoras curates content, Nuitée remains direct booking merchant for checkout, cancellations, changes and after-sales support.

## QA
`node scripts/check-siem-reap-84.cjs`; `npm run typecheck`; confirm HTTP 200 for all four routes, approved local images and exact 307 redirects in both languages.

