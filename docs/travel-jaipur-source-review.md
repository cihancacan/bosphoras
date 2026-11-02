# Jaipur #77 — source review and photo QA gate (in progress)

Updated 2026-11-02. Repository: `cihancacan/bosphoras`. Feature branch only: `feature/luxury-travel-seo-destinations-20261012`.

**Editorial draft only — NOT an integrated or completed destination.** Do not claim Vercel READY for Jaipur, no public indexing, no production promotion, no inherited hotel photo permission. Jaipur is #77 in the existing 88-slug catalogue, after verified Udaipur #76. The 76 existing published-in-Preview guides must remain unchanged.

## Verified hotel identities and geography

| Hotel | Confirmed official URL | Geography | Distinguishing factual detail |
| --- | --- | --- | --- |
| Rambagh Palace, Jaipur | https://www.tajhotels.com/en-in/hotels/rambagh-palace-jaipur | Bhawani Singh Road; central Jaipur | Historic palace operated by Taj; operator lists 78 rooms and suites |
| The Oberoi Rajvilas, Jaipur | https://www.oberoihotels.com/hotels-in-jaipur-rajvilas-resort/ | Goner Road, eastern Jaipur, **not Amer** | Landscaped estate, approximately 8 km from central city by operator description |
| Raffles Jaipur | https://www.raffles.com/jaipur/ | Kukas, Amer area, north of central Jaipur | Contemporary crafted palace; operator confirms 50 rooms and suites |
| The Leela Palace Jaipur | https://www.theleela.com/the-leela-palace-jaipur | Kukas, Jaipur-Delhi Highway, **not central Jaipur** | Different room, suite and villa categories; group factsheet places hotel about 22 km from centre |

Monument/geography primary reference: Rajasthan Tourism https://www.tourism.rajasthan.gov.in/jaipur.html and https://www.tourism.rajasthan.gov.in/amber-palace.html. Rajasthan Tourism places Amer Fort roughly 11 km from Jaipur. Hawa Mahal, Jal Mahal, Amer, Jaigarh and City Palace must be treated as separate historical sites, **never swapped as a hotel photograph**. Do not use the incorrect city-to-city distance aggregator visible in unrelated search snippets.

## Editorial work already saved in GitHub

- `data/travel/jaipurDraftGuide.ts`: original FR/EN text, 4 actual hotels, 5 real geographical areas, 5 curated experiences and practical checks.
- `data/travel/jaipurDraftFaq.ts`: 8 factual FR and 8 EN questions and answers.
- Drafts are not imported into the integrated guide registry and do not expose a Jaipur guide route. This intentional separation prevents a visually incomplete page from masquerading as complete.

## REQUIRED images before release — not yet obtained or approved

- **9 geography images**, all of the actual Jaipur region, ideally daylight: Hawa Mahal façade (not hotel); City Palace courtyard; Amer Palace ramparts; Amer courtyard / Sheesh Mahal with correct identification; Jal Mahal from the lake shore; Jaipur old-city streets; Johari or Bapu Bazaar; Jaigarh or Nahargarh landscape; Jantar Mantar architecture. Locate individually reviewed Commons Creative Commons files where licensing and attribution are verifiable. Do not use watermarked stock, unrelated palaces, icon illustrations or night images where daylight is needed.
- **12 authentic hotel images, precisely 3 per hotel**, one meaningful exterior/estate, one actual room/suite and one distinct authentic pool/courtyard/spa angle. Source exact property media; original URL, source page, author and usage rights must be recorded per image. Do not pass off Taj Jai Mahal Palace as Rambagh or confuse The Leela Palace with Raffles simply because both are in Kukas.
- Generate **21 physical local WebP files** in `public/images/travel/jaipur-premium/`. Validate RIFF/WEBP header, dimensions, hash, pixel fingerprint, source identity and image bytes. No superficial .webp filename over JPEG or hotlinked external JPG. Create manifest `data/travel/jaipurMediaCandidates.json` and audit `data/travel/jaipurWebpOptimization.json` only when real files and evidence exist.
- Review every image visually in labelled contact sheets. Mark `visuallyVerified` and `previewVisualApproved` only after real inspection. Keep `publicUseApproved=false` for the destination and every hotel image until commercial republication rights are independently confirmed.

## Integration and release gate still outstanding

1. Only after actual photography: build `jaipurGuide.ts` and `jaipurPremiumEditorial.ts`, integrate `jaipur` in `featuredCityGuides.ts`, hotel editorial, FAQ and SEO metadata in the existing Travel components, without breaking the 76 prior guides.
2. Run TypeScript build and dedicated QA ensuring 77/88 integrated guides, 4 hotels, 9 licensed city images, 3 per hotel, 16 FAQ and unchanged `approvedDestinationSlugs` safety.
3. Serve 4 local pages HTTP 200 with FR/EN titles, FAQ schema and `noindex`. Verify actual WebP images locally before Vercel.
4. Intermediate commits use `[skip ci]`; one deliberate Vercel Preview build uses `[travel-batch-ready]` after QA. Validate READY and all 4 deployed pages, then issue authentic Vercel share links. **Never touch `main` or production without approval.**

Potential separate SEO defect observed during Udaipur deployed check: English Travel HTTP responses were served with initial `<html lang="fr">` due to `app/layout.tsx`; `DocumentLanguage` may change this client-side. Do not change the global root layout casually because that could affect all Bosphoras routes. Plan scoped international-SEO remediation and regression testing before any such code change.
