const { test } = require('node:test');
const assert = require('node:assert/strict');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const { hotelProviders, hotelPartnerLinks, supplierResponsibilities, hotelPartnerKey, isVerifiedHotelLink, getHotelPartnerLinks } = require('../lib/travel/hotelPartners');
const { HotelPartnerBooking } = require('../components/travel/HotelPartnerBooking');

// Reserved .invalid domains: test fixtures only; never rendered by application config.
const now = Date.parse('2026-10-27T12:00:00Z');
const provider = {
  id: 'expedia-creator', name: 'Fixture supplier', status: 'approved', mode: 'tracked-redirect',
  merchantOfRecord: 'supplier', agreementReference: 'fixture-contract',
  responsibilities: Object.fromEntries(supplierResponsibilities.map(key => [key, true])),
  bookingHosts: ['booking.example.invalid'],
};
const link = {
  id: 'fixture', providerId: provider.id, hotelKey: hotelPartnerKey('istanbul', 'fixture-hotel'),
  bookingBrand: 'Fixture booking brand', url: 'https://booking.example.invalid/hotel?affiliate=fixture&campaign=fixture',
  sellerLegalName: 'Fixture supplier entity', supplierAgreementReference: 'fixture-advertiser-contract',
  supplierResponsibilities: { ...provider.responsibilities },
  supportUrl: 'https://booking.example.invalid/support', termsUrl: 'https://booking.example.invalid/terms',
  verifiedAt: '2026-10-26T00:00:00Z', reviewBy: '2026-11-26T00:00:00Z',
  propertyMatchEvidence: 'fixture-property-check', deepLinkEvidence: 'fixture-redirect-check', attributionEvidence: 'fixture-dashboard-check',
};

test('no provider activates without all six responsibilities and its account agreement', () => {
  assert.equal(isVerifiedHotelLink(link, provider, now), true);
  assert.equal(isVerifiedHotelLink(link, undefined, now), false);
  for (const key of supplierResponsibilities) {
    assert.equal(isVerifiedHotelLink(link, { ...provider, responsibilities: { ...provider.responsibilities, [key]: false } }, now), false, key);
    assert.equal(isVerifiedHotelLink({ ...link, supplierResponsibilities: { ...link.supplierResponsibilities, [key]: false } }, provider, now), false, `advertiser ${key}`);
  }
  for (const patch of [{ status: 'pending' }, { status: 'suspended' }, { agreementReference: '' }, { mode: 'api-booking' }, { merchantOfRecord: 'bosphoras' }, { id: 'wink' }]) {
    assert.equal(isVerifiedHotelLink(link, { ...provider, ...patch }, now), false);
  }
});

test('requires exact allowed HTTPS host and rejects URL injection', () => {
  for (const url of ['javascript:alert(1)', '//booking.example.invalid/hotel', 'http://booking.example.invalid/hotel',
    'https://booking.example.invalid.evil.invalid/hotel', 'https://evil.invalid/?next=https://booking.example.invalid',
    'https://user:password@booking.example.invalid/hotel', 'https://booking.example.invalid:444/hotel', 'https://booking.example.invalid/hotel#token']) {
    assert.equal(isVerifiedHotelLink({ ...link, url }, provider, now), false, url);
  }
  assert.equal(isVerifiedHotelLink(link, { ...provider, bookingHosts: [] }, now), false);
});

test('requires property, deep-link, attribution, support, terms and current review evidence', () => {
  for (const key of ['id', 'hotelKey', 'bookingBrand', 'sellerLegalName', 'supplierAgreementReference', 'supportUrl', 'termsUrl', 'propertyMatchEvidence', 'deepLinkEvidence', 'attributionEvidence', 'verifiedAt', 'reviewBy']) {
    assert.equal(isVerifiedHotelLink({ ...link, [key]: '' }, provider, now), false, key);
  }
  assert.equal(isVerifiedHotelLink({ ...link, reviewBy: '2026-10-27T12:00:00Z' }, provider, now), false);
  assert.equal(isVerifiedHotelLink({ ...link, verifiedAt: '2026-10-28T00:00:00Z' }, provider, now), false);
  assert.equal(isVerifiedHotelLink({ ...link, supportUrl: 'javascript:alert(1)' }, provider, now), false);
});

test('only exact property links are selected and issued tracking URL is unchanged', () => {
  assert.deepEqual(getHotelPartnerLinks(link.hotelKey, [link], [provider], now), [link]);
  assert.equal(getHotelPartnerLinks('paris:fixture-hotel', [link], [provider], now).length, 0);
  assert.equal(getHotelPartnerLinks(link.hotelKey, [link], [provider], now)[0].url, link.url);
});

test('checked-in configuration has no invented or incomplete active links', () => {
  assert.equal(new Set(hotelProviders.map(item => item.id)).size, hotelProviders.length);
  assert.equal(new Set(hotelPartnerLinks.map(item => item.id)).size, hotelPartnerLinks.length);
  for (const item of hotelPartnerLinks) {
    assert.equal(isVerifiedHotelLink(item, hotelProviders.find(p => p.id === item.providerId)), true, item.id);
    assert(!item.url.includes('.invalid'));
  }
  // Lot 1: account-specific evidence is not available yet.
  assert(hotelProviders.every(item => item.status === 'pending'));
  assert.equal(hotelPartnerLinks.length, 0);
});

test('FR/EN pages explain referral role without an unverified CTA, price or checkout', () => {
  for (const locale of ['fr', 'en']) {
    const html = renderToStaticMarkup(React.createElement(HotelPartnerBooking, { hotelKey: link.hotelKey, locale }));
    assert(html.includes(locale === 'fr' ? 'Aucun lien de réservation partenaire vérifié' : 'No verified partner booking link'));
    assert(html.includes(locale === 'fr' ? 'n’assure pas leur SAV' : 'after-sales support'));
    assert(!/<a\b|<form\b|<input\b|sponsored|\bprice\b|\bavailability\b/.test(html));
  }
});

test('verified handoff keeps issued URL, affiliate disclosure, supplier terms and support', () => {
  const registry = require('../lib/travel/hotelPartners');
  const original = registry.getHotelPartnerLinks;
  registry.getHotelPartnerLinks = () => [link];
  try {
    for (const locale of ['fr', 'en']) {
      const html = renderToStaticMarkup(React.createElement(HotelPartnerBooking, { hotelKey: link.hotelKey, locale }));
      assert(html.includes('href="https://booking.example.invalid/hotel?affiliate=fixture&amp;campaign=fixture"'));
      assert(html.includes('rel="sponsored noopener noreferrer"'));
      assert(html.includes(`href="${link.supportUrl}"`));
      assert(html.includes(`href="${link.termsUrl}"`));
      assert(html.includes(locale === 'fr' ? 'Liens affiliés' : 'Affiliate links'));
      assert(html.includes(locale === 'fr' ? 'les remboursements et le service après-vente' : 'refunds and customer service'));
      assert(!/<form\b|<input\b/.test(html));
    }
  } finally { registry.getHotelPartnerLinks = original; }
});
