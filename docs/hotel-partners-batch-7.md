# Bosphoras — commercial search and guide handoff wiring, 2 November 2026

## Intended release

The owner explicitly requested real commercial operation, not a customer-facing test phase. The existing project, design, wordmark, editorial content, photography and Wink configuration are preserved. This batch prepares the real supplier-hosted booking flow. It does not substitute a sandbox for a live booking service.

## Supplier account and actual activation boundary

LAS-3651 now contains a written reply from Lina Elkhettar confirming Nuitée as merchant of record on the Whitelabel, direct traveler payment, and supplier-managed confirmation, changes, cancellation, refunds and post-booking support. She permits linking existing editorial profiles to matching supplier hotel/destination pages and passing dates, occupancies and clientReference. Her reply identifies account terms and commission/payout rules. It does not explicitly answer co-location of an Expedia alternative or the two differing support telephone lists.

The owner approved the business-verification terms for the production onboarding. The public distribution model was selected, followed by “WhiteLabel / Payment SDK — Nuitée as Merchant of Record”. Onboarding reached step 4, Verification and payouts. It requires a card and says that adding the card authorizes charging API-key bookings to that card. A specific clarification was sent to Lina in LAS-3651 with the owner's explicit approval; two comments and the posted message were verified. No card/bank information was entered by the agent, no booking or payment was made, and production mode has not been enabled.

The provider's hosted engine still explicitly identifies sandbox data and no real transactions. It is therefore not exposed as an active commercial referral from Bosphoras. Production activation evidence, clarification of the card mandate and reporting attribution remain empty in `nuiteeLaunch.ts`. Owner commercial-launch consent is recorded; it alone does not invent the other evidence.

## Search wiring

- FR and EN existing search pages keep their approved layout and typography.
- Main form now calls POST `/api/travel/booking/search`; editorial exploration remains a separately labelled action.
- Dates are validated, each room has its own explicit adult count, and room/adult totals are derived consistently. No guessed allocation, traveler identity or payment fields.
- Supplier handoff includes only validated destination, dates, exact occupancies, language, EUR and a configured nonpersonal reference. No booking/prebooking/payment API call is implemented.
- Five supplier-selected destinations are recorded with actual Place IDs: Istanbul, Paris, Bali, Maldives and Dubai. Autocomplete labels, resulting URLs and named listing pages were checked manually. Existing 88 editorial destinations remain intact.
- A separate worldwide-engine link is prepared for other destinations; it is exposed only when the supplier account is genuinely activated. It is explicitly labelled as opening the Nuitée engine, not as a prefilled unknown search.
- Until activation, the endpoint returns HTTP 503 with `BOOKING_NOT_OPEN` and no URL; production search remains 404 and navigation stays hidden. Private review remains limited to the approved feature branch/local development.
- Once activation and attribution evidence is recorded, search availability, the header link, metadata and handoffs use the same launch state. Search metadata remains noindex/nofollow before activation.

## Hotel guide handoffs

`nuiteeMappings.json` holds nine manually checked Istanbul hotel matches and 18 editorial identity keys, covering both existing Istanbul ID-based templates and the official-URL keys used by the destination guide. Each supplier hotel page was opened directly and its title and physical address checked. No supplier rates, reviews, descriptions, photographs or inventory database were copied.

| Editorial hotel | Supplier ID |
| --- | --- |
| The Peninsula Istanbul | lp6558f17c |
| Çırağan Palace Kempinski Istanbul | lp85821 |
| Four Seasons Hotel Istanbul at the Bosphorus | lp547d3 |
| Mandarin Oriental Bosphorus, Istanbul | lp6556e28f |
| Four Seasons Hotel Istanbul at Sultanahmet | lp1e09b |
| Shangri-La Bosphorus, Istanbul | lp69fa3 |
| Raffles Istanbul | lp71a80 |
| The St. Regis Istanbul | lp791b8 |
| The Ritz-Carlton, Istanbul | lp2f170 |

Ritz-Carlton returned two same-address suggestions; the exact editorial-name entry was selected, followed by a direct-page title/address check. No link for a merely similar hotel was substituted.

The common booking block presents qualified booking options first and retains the official hotel website as a secondary information link. Old disabled Expedia placeholders are removed. No Expedia account/link is deleted or fabricated; verified alternatives remain supported by the provider layer. Unmapped hotels can lead to a clearly labelled search for other hotels when the engine opens, never a falsely labelled exact-property link.

Traveler terms are accessed in the supplier engine footer and before payment. No standalone terms-page URL was supplied; the link is explicitly labelled “Conditions in the partner booking engine” and opens the actual engine. Traveler assistance links directly to the supplier Help Center. No Bosphoras stay-support contact is substituted.

## Account appearance

The hosted project's primary color was saved as #172b2c and the saved appearance preview was checked. The existing Bosphoras website wordmark/font remain unchanged. No paid add-on, DNS, account API key, bank connection or extra support service was enabled. The owner approved the recommended uniform 10% default markup. It was published in Commission Management, and the separate 10% guest uplift was disabled and saved in Whitelabel Configuration. Both save acknowledgements were verified. No paid managed-pricing add-on was enabled. This is a markup on the net rate, not a guaranteed 10% of the selling price; SSP rules still apply.

## Validation

Local browser checks: FR/EN search renders; a request for Istanbul, 20–22 November, three adults explicitly in two rooms reaches the endpoint and correctly reports the closed-account state. Desktop and 390 px mobile have no horizontal overflow. The Istanbul guide renders nine booking blocks and nine secondary official-information links, zero broken loaded images and no disabled Expedia placeholder buttons.

Automated checks cover both the existing supplier gates and the new HTTP boundary, URL injection, private-vs-production access, activation evidence, exact property identity keys, room allocation, unsupported personal/checkout fields and cache behavior. Lint retains only two pre-existing external-image warnings. TypeScript and final build status are reported in the owner-facing release record.

One grouped Vercel Preview is used for release verification. No production promotion can provide real bookings while Nuitée remains in sandbox; the existing production is preserved until this boundary is resolved.

## Complete the real opening

1. Resolve the specific card-debit mandate with Nuitée and have the owner enter any required financial information directly in the secure provider flow.
2. Verify the account/Whitelabel is in production, keep Nuitée as merchant and traveler support, and record the actual activation time.
3. Verify attribution in the account/reporting and fill its evidence reference; retain the supplier's default support until exact phones are clarified.
4. Set the agreed markup, complete the owner's Stripe payout onboarding, and use a verified branded subdomain if desired. Do not add a second unverified price uplift.
5. Record the launch evidence in `nuiteeLaunch.ts`, complete production-build checks and release the reviewed code. Do not weaken gates or claim completed sales while mandatory account steps remain unfinished.

Sources: connected LAS-3651 and production onboarding; https://docs.liteapi.travel/docs/deeplinking-to-whitelabel ; https://docs.liteapi.travel/docs/whitelabel-booking-site ; https://docs.liteapi.travel/docs/revenue-management-and-commission .
