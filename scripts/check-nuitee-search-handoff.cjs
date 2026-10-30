const { test } = require('node:test');
const assert = require('node:assert/strict');
const { getNuiteeSearchHandoff, nuiteeSearchConnection } = require('../lib/travel/nuiteeSearchHandoff');
const { supplierResponsibilities } = require('../lib/travel/hotelPartners');

// Reserved .invalid host and synthetic IDs: never put fixtures into runtime config.
const now = Date.parse('2026-10-30T12:00:00Z');
const provider = {
  id: 'nuitee-connect', name: 'Fixture', status: 'approved', mode: 'supplier-hosted', merchantOfRecord: 'supplier',
  agreementReference: 'fixture-contract', bookingHosts: ['supplier.example.invalid'],
  responsibilities: Object.fromEntries(supplierResponsibilities.map(key => [key, true])),
};
const connection = {
  origin: 'https://supplier.example.invalid', supportUrl: 'https://supplier.example.invalid/help',
  termsUrl: 'https://supplier.example.invalid/terms', sellerLegalName: 'Fixture supplier',
  mappingPermissionReference: 'fixture-permission', deepLinkEvidence: 'fixture-search-check',
  attributionEvidence: 'fixture-reporting-check', liveApprovalReference: 'fixture-owner-approval', clientReference: 'fixture_search',
  verifiedAt: '2026-10-29T00:00:00Z', reviewBy: '2026-11-29T00:00:00Z',
  destinations: [{ key: 'fixture-city', placeId: 'fixture_place', displayName: 'Fixture City', matchEvidence: 'fixture-identity-check' }],
};
const request = { destinationKey: 'fixture-city', checkin: '2026-11-20', checkout: '2026-11-22', locale: 'fr', rooms: [{ adults: 2, children: [] }] };
const handoff = (req = request, cfg = connection, suppliers = [provider]) => getNuiteeSearchHandoff(req, cfg, suppliers, now);
const blocked = result => { assert.equal(result.status, 'blocked'); assert.equal('url' in result, false); };

test('current account stays disconnected and returns no URL', () => {
  assert.equal(nuiteeSearchConnection, null);
  blocked(getNuiteeSearchHandoff(request));
  blocked(handoff(request, connection, []));
  blocked(handoff(request, null));
});

test('requires supplier contract, all six responsibilities and hosted mode', () => {
  for (const patch of [{ status: 'pending' }, { status: 'suspended' }, { mode: 'tracked-redirect' },
    { agreementReference: '' }, { merchantOfRecord: 'bosphoras' }, { id: 'wink' }]) {
    blocked(handoff(request, connection, [{ ...provider, ...patch }]));
  }
  for (const key of supplierResponsibilities) blocked(handoff(request, connection, [{ ...provider, responsibilities: { ...provider.responsibilities, [key]: false } }]));
});

test('requires private qualification, attribution and explicit live approval evidence', () => {
  for (const key of ['sellerLegalName', 'mappingPermissionReference', 'deepLinkEvidence', 'attributionEvidence', 'liveApprovalReference', 'clientReference', 'supportUrl', 'termsUrl', 'verifiedAt', 'reviewBy']) {
    blocked(handoff(request, { ...connection, [key]: '' }));
  }
  blocked(handoff(request, { ...connection, reviewBy: '2026-10-30T12:00:00Z' }));
  blocked(handoff(request, { ...connection, verifiedAt: '2026-10-31T00:00:00Z' }));
});

test('rejects open redirects, credentials, unexpected paths, ports and injected references', () => {
  for (const origin of ['http://supplier.example.invalid', 'https://evil.invalid', 'https://supplier.example.invalid.evil.invalid',
    'https://user:secret@supplier.example.invalid', 'https://supplier.example.invalid:444',
    'https://supplier.example.invalid/booking', 'https://supplier.example.invalid?next=evil', 'https://supplier.example.invalid/#fragment']) {
    blocked(handoff(request, { ...connection, origin }));
  }
  blocked(handoff(request, { ...connection, clientReference: 'person@example.invalid' }));
});

test('never derives a destination from its name or selects an ambiguous mapping', () => {
  blocked(handoff({ ...request, destinationKey: 'unknown-city' }));
  blocked(handoff(request, { ...connection, destinations: [] }));
  blocked(handoff(request, { ...connection, destinations: [...connection.destinations, ...connection.destinations] }));
  blocked(handoff(request, { ...connection, destinations: [{ ...connection.destinations[0], matchEvidence: '' }] }));
});

test('rejects past, impossible and reversed dates', () => {
  for (const dates of [{ checkin: '2026-10-29' }, { checkin: '2026-02-30' }, { checkin: '2026-11-31' },
    { checkin: '2026-11-22' }, { checkout: '2026-11-19' }, { checkout: '2026-11-20' }, { checkout: 'garbage' }]) {
    blocked(handoff({ ...request, ...dates }));
  }
});

test('requires exact room allocation and valid guest counts and ages', () => {
  for (const rooms of [[], [{ adults: 0, children: [] }], [{ adults: 1.5, children: [] }], [{ adults: 2, children: [-1] }],
    [{ adults: 2, children: [18] }], [{ adults: 2, children: [2.5] }], Array(7).fill({ adults: 1, children: [] }),
    [{ adults: 12, children: [] }, { adults: 1, children: [] }]]) blocked(handoff({ ...request, rooms }));
});

test('uses listing-only protocol, exact rooms and whitelisted nonpersonal parameters', () => {
  for (const locale of ['fr', 'en']) {
    const rooms = [{ adults: 2, children: [8] }, { adults: 1, children: [] }];
    const result = handoff({ ...request, rooms, locale, email: 'never@example.invalid', offerId: 'never', xData: 'never' });
    assert.equal(result.status, 'ready');
    const url = new URL(result.url);
    assert.equal(url.origin, connection.origin);
    assert.equal(url.pathname, '/hotels');
    assert.equal(url.searchParams.get('placeId'), 'fixture_place');
    assert.equal(url.searchParams.get('name'), 'Fixture City');
    assert.equal(url.searchParams.get('checkin'), request.checkin);
    assert.equal(url.searchParams.get('checkout'), request.checkout);
    assert.equal(url.searchParams.get('rooms'), '2');
    assert.equal(url.searchParams.get('adults'), '3');
    assert.deepEqual(JSON.parse(Buffer.from(url.searchParams.get('occupancies'), 'base64').toString()), rooms);
    assert.equal(url.searchParams.get('language'), locale);
    assert.equal(url.searchParams.get('currency'), 'EUR');
    assert.equal(url.searchParams.get('clientReference'), connection.clientReference);
    assert.deepEqual([...url.searchParams.keys()].sort(), ['adults', 'checkin', 'checkout', 'clientReference', 'currency', 'language', 'name', 'occupancies', 'placeId', 'rooms']);
    assert.equal(result.supportUrl, connection.supportUrl);
    assert(!result.url.includes('never'));
  }
  blocked(handoff({ ...request, locale: 'xx' }));
});
