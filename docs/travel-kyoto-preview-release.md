# Kyoto #68 — preview release, validated routes and outstanding image rights

Date: 2026-10-31. Development branch: `feature/luxury-travel-seo-destinations-20261012`. **No production write.**

## Integrated preview deliverable

- Preserve original 88 slugs and 67 earlier luxury guides. **Kyoto is premium guide #68.**
- Two longform original editorials: French and English, informed by actual hotel geography and official sources; distinct Higashiyama, Kamogawa, Takagamine, Arashiyama and Kyoto Station sectors.
- Four specific current hotels: Aman Kyoto (forest and onsen), Park Hyatt Kyoto (Higashiyama), The Ritz-Carlton, Kyoto (river), Four Seasons Hotel Kyoto (Shakusui-en).
- Five neighbourhood summaries and five independent experiences, plus eight detailed FAQ per language (16).
- Tokyo-compatible shared components, hotel editorial gallery, strong gradient and shadow for legible text, three authentic Kyoto destination panorama cards, hotel detail links, official hotel URLs and local activities/transfer guidance.
- FR + EN destination/hotel metadata titles, descriptions, 4-hotel ItemList, Article and bilingual FAQPage structured data with external-image whitelist empty.
- Nine Wikimedia Commons city photographs (source page and license attribution) and three exact-property photos for each of the four hotels (12), **21 distinct photo sources and sha256/pixel fingerprints** in `data/travel/kyotoMediaCandidates.json`. Official first-party property photos from Aman, Hyatt and Ritz. Four Seasons images are traceable to travel publishers rather than first party; do not claim original photographer copyright/clearance.
- The original 21 WebPs and a contact sheet were generated in an isolated Vercel sandbox, but **binary files and contact sheet are NOT yet in GitHub**. The private Preview uses the 21 source URLs to show the visuals. The collector script archives them deterministically when used in an authenticated environment.

## QA actually executed on source SHA prior to release

- `npm ci --ignore-scripts --no-audit --no-fund` and `npm run typecheck` succeeded.
- `scripts/check-kyoto-final.cjs`, previous Tokyo, Palawan and Sumba regression scripts and catalogue noindex check passed.
- All four pages returned HTTP 200 on a local Next.js dev server and rendered Kyoto, four hotel names, FAQs and `noindex`.
- New source commit must produce a separate READY preview before claiming a Vercel deployment is complete. Production/main unchanged.

## Review routes

- /travel/destinations/kyoto
- /en/travel/destinations/kyoto
- /travel/hotels/kyoto
- /en/travel/hotels/kyoto

## Non-negotiable publication gates

The **12 hotel/publisher images do not have independent confirmed commercial republication rights**; they are restricted to the protected non-indexed owner Preview. The 21 images have not received a manual visual contact-sheet identity signoff, and external URL stability is not guaranteed. Do not move these photos to a public domain page or assert rights, real-time inventory, guaranteed booking, prices, payment collection or after-sales until the respective commercial agreements and photo QA are complete. The site remains noindex.

