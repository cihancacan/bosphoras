# Wink: staging validation and production preparation

No production rollout is authorized. Keep the 88 editorial destinations and curated luxury selection intact. Live inventory is additional, and must not imply all editorial hotels can be booked through Wink.

## Confirmed configuration

- Staging search uses SearchByCity with urlName=bangkok-thailand, not a numeric-only city selector.
- Only Bangkok is offered in the staging diagnostic. Future dates only; at most three results; one night by default; no automatic calls on load; existing 15-second best-effort guard retained.
- Prices are whole-stay totals for the returned room quantity, in minor units divided by 10^currencyExponent. Unavailable offers have no displayed price.
- Booking links require the staging client ID and WINK_STAGING_CUSTOMIZATION_ID; no unattributed fallback link.
- Content galleries and complete booking attribution still need live verification. A Search hero image is not a full Content response.

## Production setup (user action)

1. Sign in/register at https://app.wink.travel and create/select the Bosphoras Affiliate account.
2. Manage account → Applications → Create new application → Machine-to-machine → Inventory & rates (read), scope inventory.read. Authorize it for the intended Affiliate account.
3. Manage account → Customizations: select/create the Bosphoras customization; confirm branding, language and currency.
4. Enter credentials directly in Vercel project bosphoras, initially scoped to Preview and feature/luxury-travel-seo-destinations-20261012. Never paste secrets in chat or commit them.
5. Use separate names: WINK_PRODUCTION_CLIENT_ID, WINK_PRODUCTION_CLIENT_SECRET (Secret), WINK_PRODUCTION_AFFILIATE_ID, WINK_PRODUCTION_CUSTOMIZATION_ID. The prepared configuration helper deliberately has no fallback to old WINK_CLIENT_ID / SECRET or staging credentials.

Production hosts: https://iam.wink.travel/oauth2/token; partner.wink.travel:443; https://book.wink.travel.

## Required before enabling commercial inventory

- ListAccounts must return the exact configured Affiliate ID, with the expected account name/type. Never silently select the first account.
- Verify the customization belongs to this account and the booking engine preserves both client-id and configuration-id.
- Run one small destination search, then only a bounded sample of prioritized destinations; record dates, occupancy, returned/available counts and direct flag. Zero for a date is not proof of permanent absence. Do not sweep all 88 destinations or run paid searches during builds.
- Fetch Content for a returned property; cache by property ID and last_update. Verify gallery, description, policies, prices and hosted booking handoff. Fetch Inventory when complete room/rate detail is required.
- Keep unavailable destinations editorial; only show bookable offers from verified production results. Do not label every result “luxury curated” merely because the API returned it.
- Validate staging booking and any webhook signature verification separately. A successful search is not evidence of a successful booking/payment/webhook.
- Run checks and browser verification on Preview. Obtain explicit user approval before any production deployment.

Sources: https://wink.travel/developers/quickstart/ and https://wink.travel/developers/rest-and-grpc/ (checked 2026-10-14).

## Live result on 2026-10-14

Preview commit d984a2b: SearchByCity bangkok-thailand, 2026-10-28 to 2026-10-29, 2 adults, 1 room. TotalElements=5, page size=3, 2 pages. TraveliGo Hotel (available, 11 room types), New Yann Hotel 2 (unavailable, 1 room type), Hotel Wink (available, 3 room types). All three hero images loaded at 1024px. Direct=false for all three. Test amounts included EUR 0.28 and EUR 211.66; these are staging prices, not commercial offers. Customization missing; no attributed booking or payment attempted. One successful paid search, no coverage sweep.
