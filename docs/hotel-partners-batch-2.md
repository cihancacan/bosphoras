# Hotel partners — batch 2: search preparation

Build on the existing feature branch and preserve all editorial content, images, SEO and Wink configuration.

- Add FR `/travel/search` and EN `/en/travel/search`, confined to the approved Vercel Preview branch (or local development). Production returns 404. Both pages are noindex, nofollow and are not added to the sitemap.
- Reuse the existing Luxury Stays header, footer, photography and palette. Add the search navigation link only in FR/EN Preview.
- Offer a working filter of existing hotel destination guides. Clearly distinguish editorial results from supplier inventory. No supplier request, invented availability or fake price. Stay dates, guest selection and availability CTA remain disabled.
- Add clearly labelled, disabled Bosphoras and Expedia CTA previews in existing hotel booking blocks, only in Preview. No incomplete partner link is rendered.
- Extend the provider model with supplier-hosted handoff, subject to the same six responsibility, exact hotel, contract, URL allowlist and attribution checks. All real providers remain pending; link registry remains empty.
- Prepare future white-label CTA wording with the actual supplier legal name alongside it. Bosphoras remains a referrer and never handles stay payments or support.

## Account qualification (not activation)

Owner created the Nuitée account and approved submitting a qualification ticket. The hosted project displays the Bosphoras Luxury Stays name and retains Nuitée-managed traveler support. A destination search returns supplier results, but the dashboard Sandbox badge does not establish that hosted bookings are test-only. No booking or payment was performed. Account-specific details and screenshots stay outside the repository.

Ticket LAS-3651 was verified Open on 27 October 2026. Outstanding: partner obligations and merchant of record; all fees and payout conditions; allocation of guest markup and SSP enforcement; permission to associate editorial hotel profiles with supplier IDs and offer Expedia alternatives; exact deep-link attribution; live/test status; support telephone discrepancy; custom domain procedure. No automated monitoring or paid subscription was created.

## Activation gate

Do not populate real booking hosts, links, contract evidence or responsibility approvals until qualification is complete. Do not link visitors to the provisional hosted project, embed it, collect traveler data or enable payment during this batch. Live activation and production deployment require the owner's explicit approval.
