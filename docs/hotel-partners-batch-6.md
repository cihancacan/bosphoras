# Nuitée — search handoff preparation, 30 October 2026

Ticket LAS-3651 was checked in the connected account: **In Triage**, priority Low, no supplier reply displayed. A targeted connected-mailbox search found no matching reply; this is not evidence about other mailboxes. No follow-up message was sent.

## Flow selected

Keep the existing Bosphoras search interface and prepare a supplier-hosted search handoff. The supplier runs inventory search and booking on its own branded engine. This flow does not need a payment API key in Bosphoras. It does not replace the pending contractual review or authorize live booking. No API booking/prebooking/payment implementation was added.

`lib/travel/nuiteeSearchHandoff.ts` prepares the search URL only after the provider account is approved, all six supplier responsibilities are confirmed, a current account agreement and exact booking host are registered, and mapping permission, deep-link validation, reporting attribution and owner live-activation approval references exist. The checked-in connection remains **null** and returns a blocked result with no URL. The module is not wired to the public form or a new HTTP route.

Only a verified destination entry may be used. No approximate destination or hotel matching. Room occupancy must be explicit per room; a party total is not automatically split. Input validation rejects past/impossible/reversed dates, invalid room allocations, ages and counts, unsupported locales and arbitrary query parameters. Dates are checked against the UTC day; recheck the final date on the supplier side when activating.

The prepared request carries placeId, name, checkin, checkout, rooms, adults, base64 occupancies, language, EUR and a configured clientReference. No guest names, emails, checkout tokens, payment data, arbitrary URLs or secrets are accepted or forwarded. A clientReference parameter is a documented reference tag, **not proof of affiliate attribution**.

## Account qualification test

Manual sandbox-only search, using the destination selected from the supplier's own autocomplete. No inventory was copied, and no hotel mapping was added to the application.

- The hosted engine now explicitly displays a banner stating test data only and no real transactions. This is a new observation compared with 27 October.
- French and EUR were accepted. Search dates: 20–22 November 2026; two rooms, occupancies of two adults and one adult.
- Supplier results reflect the requested dates, party and room count. Prices remain supplier sandbox data and are not published or represented as bookable Bosphoras prices.
- Browser testing found that the documented minimal placeId link leaves the destination label empty. The provider's own UI includes `name`; the adapter includes a verified displayName from the configuration.
- The provider UI also adds rooms/adults summary parameters. They are derived from the exact occupancies to avoid fallback totals.
- No booking, prebooking, payment or traveler personal information. No API credential created or copied.

## Remaining account decisions

Nuitée must confirm the applicable partner contract, merchant of record, all six traveler responsibilities and remaining Bosphoras liabilities; total costs, markup/SSP and payouts; editorial mapping and Expedia-alternative permission; account-specific deep linking and persistent attribution; live activation; authoritative traveler support contacts; custom-domain process.

The account's domain remains unchanged. Support remains supplier-managed. No commission, guest markup, DNS, billing, paid service or tracking container was changed. No provisional hosted URL or real mapping was committed into runtime configuration.

## Validation and release scope

17 automated checks cover the new handoff and existing provider protections. Targeted lint and TypeScript checks accompany this batch. Only the new adapter, its tests and this note are added. Existing UI, wordmark, photos, destinations, hotel content, SEO and Wink secrets remain intact.

This is preparatory code with no interface change. No new Vercel deployment or production promotion is requested by this batch; the last reviewed interface Preview remains the visual reference.

Sources reviewed on 30 October 2026:
- https://docs.liteapi.travel/docs/deeplinking-to-whitelabel
- https://docs.liteapi.travel/docs/whitelabel-booking-site
- https://docs.liteapi.travel/docs/configuring-your-liteapi-powered-white-label-booking-site
- Connected account: Request Assistance and Whitelabel Settings; manual hosted sandbox search.
