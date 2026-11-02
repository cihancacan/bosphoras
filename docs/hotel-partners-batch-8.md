# Bosphoras — live supplier booking page, 2 November 2026

## Verified account change

The owner completed Nuitée's mandatory card step directly and explicitly requested continuation with real hotel search and booking. Connect's post-go-live page now states that the account is enabled for production and that its Whitelabel accepts production bookings. The public project no longer shows the sandbox warning. No financial data, account API key or credential was read or copied by the agent.

LAS-3651's written Whitelabel confirmation remains the basis for Nuitée as merchant of record and direct traveler support for confirmations, changes, cancellation and refunds. The separate clarification about possible account-card debits remains unanswered. It is not represented as resolved. This integration uses only the supplier-hosted Whitelabel: no Bosphoras booking, prebook, payment or cancellation API calls. Completing the owner onboarding does not make Bosphoras the seller or support desk.

## Booking-first page

The existing FR/EN `/travel/search` routes now present a dedicated booking page. The compact Bosphoras wordmark and approved Helvetica typography are retained. The destination/date/guest search is prominent; travel guides are secondary inspiration links.

The official public Nuitée Connect SDK (`https://components.liteapi.travel/v1.0/sdk.umd.js`) supplies worldwide place suggestions, calendar and guest controls, using the verified account-owned Whitelabel hostname. No private API key is required or exposed. The documented `onSearchClick` callback sends search context only to Bosphoras's validated URL-preparation endpoint; the resulting supplier listing is displayed inside the page. Supplier filters, actual rates, map, property details, room options and checkout remain supplier-owned. Selecting an offer may open the supplier hotel page in a new tab, as controlled by the official engine. A clearly labelled full-screen option is always available for browser/payment compatibility.

The five manually verified destination shortcuts remain supported. Worldwide widget-selected places are no longer limited to those five. Destination/name text is user search context, not a claim that an editorial hotel has been matched. Only the nine verified Istanbul supplier IDs are accepted for exact hotel prefill from guides. Unknown IDs and arbitrary URLs cannot become iframe sources.

The official widget sometimes emits one grouped occupancy object with a separate selected room count. The live check found that passing this group alone can produce one-room price cards despite the two-room header. For grouped multi-room searches, Bosphoras therefore asks the visitor to explicitly allocate adults and each child to their room before requesting prices. No allocation is preselected or guessed. Only exact per-room arrays are sent to the supplier. The server checks dates, guest ages/counts, room count and total occupancy and rejects grouped ambiguity, identity/payment fields or arbitrary destination URLs.

## Attribution and commercial boundary

The live browser flow Rome → real supplier listing → Hotel Caravita → supplier checkout retained `clientReference=bosphoras_search`, language FR and EUR, plus the supplier's own session/tracking IDs. The checkout displayed traveler details and live Stripe payment controls. No traveler information, card details or paid booking were submitted. The first selected offer expired; the supplier handled the availability change, and a fresh offered room reached checkout. This is not proof of a completed-sale commission or payout.

Guides for the nine matched Istanbul hotels now link to `/travel/search?hotel=<verified-id>`, which opens the exact supplier hotel inside the booking space. Other providers keep their existing verified external-link handling. Unmapped guide hotels offer a general search without asserting an exact property match. Official hotel information links, editorial data, media, SEO, Wink configuration and secrets are preserved.

## Validation and release

Owner-facing release notes record final browser checks, tests, build, commit and the single Vercel Preview. No production deployment is part of this batch; production requires explicit approval of the reviewed version.

Known supplier UI limits: the public search widget has some English guest/date labels; its documented translation options cover the search action and destination placeholder. The hosted booking engine is requested in FR or EN. Final payment/3DS, confirmations, cancellation, support response and commission payout require an actual owner-controlled booking and were not simulated as completed.

Sources: account post-go-live page and LAS-3651; [official Search Bar SDK](https://docs.liteapi.travel/docs/integrate-a-search-bar-widget), [Whitelabel deep links](https://docs.liteapi.travel/docs/deeplinking-to-whitelabel). No supplier inventory was copied into the editorial catalogue.
