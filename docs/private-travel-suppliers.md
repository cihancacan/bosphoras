# Bosphoras Private Travel — partner onboarding

Status: preview only. Flights, hotels and experiences use existing Nuitée strategy; activation of flights and experiences was already requested. Do not duplicate.

Selected prospective partners:
- Villas and chalets: Plum Guide (curated) and Villa Tracker (signature).
- Private jets: Jets & Partners.
- Helicopter private charter: JetsFly.
- Yachts: Cosmos Yachting; fully crewed superyachts on bespoke quote, not assumed in standard live catalogue.

These are not signed integrations. Do not claim live price, inventory, reservations or commission entitlement before approval.

## Steps
1. Plum Guide: apply https://www.plumguide.com/partnership ; affiliate feed + real-time Partner API credentials via affiliates@plumguide.com. Their official policy requires approved affiliate feed as the primary listing source and an API for optional live prices. Checkout occurs on Plum Guide.
2. Villa Tracker: request branded widget or affiliate deeplink at https://villatracker.com/affiliate-program/ and agree the actual widget commission (the B2B 10% rate is not automatically guaranteed on affiliate embeds).
3. Jets & Partners: request API key and sandbox at hello@jets.partners; obtain written white-label authorization before displaying API results.
4. JetsFly: apply https://jetsfly.com/partners/travel-agents for partner panel, attribution tracking and API access. Commission rates subject to approval letter.
5. Cosmos Yachting: apply https://cosmosyachting.com/boat-holidays-partner-program for hosted storefront/widget/API. Standard 10% applies to eligible charter-only price, excluding mandatory extras; crewed superyachts require negotiated quote.

## Safe activation
Each pair of Vercel variables must be set intentionally after approval:
- NEXT_PUBLIC_BOSPHORAS_PLUM_LIVE=true and NEXT_PUBLIC_BOSPHORAS_PLUM_AFFILIATE_URL
- NEXT_PUBLIC_BOSPHORAS_VILLA_TRACKER_LIVE=true and NEXT_PUBLIC_BOSPHORAS_VILLA_TRACKER_AFFILIATE_URL
- NEXT_PUBLIC_BOSPHORAS_JETS_PARTNERS_LIVE=true and NEXT_PUBLIC_BOSPHORAS_JETS_PARTNERS_AFFILIATE_URL
- NEXT_PUBLIC_BOSPHORAS_JETSFLY_LIVE=true and NEXT_PUBLIC_BOSPHORAS_JETSFLY_AFFILIATE_URL
- NEXT_PUBLIC_BOSPHORAS_COSMOS_LIVE=true and NEXT_PUBLIC_BOSPHORAS_COSMOS_AFFILIATE_URL

The URL must be an approved commission-tracked HTTPS referral/white-label link for Bosphoras, not a generic website or application page. Do not append unverified tracking parameters. Validate real payout attribution and user checkout before marking a link as active. Never place API keys in NEXT_PUBLIC_ variables.

UX handles both villas and chalets collections and separate crewed yacht enquiries; missing approvals always retain the Bosphoras private-assessment fallback. The assessment form now preserves the selected service, dates, group size and preferred supplier in the CRM request.

Keep new collection pages noindex until partner activation, end-to-end QA, supplier photo licensing and travel compliance checks.