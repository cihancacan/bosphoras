const {test} = require('node:test');
const assert = require('node:assert/strict');
const launch = require('../lib/travel/nuiteeLaunch');
const {handleNuiteeSearch} = require('../lib/travel/nuiteeSearchEndpoint');
const {supplierResponsibilities} = require('../lib/travel/hotelPartners');
const {isHotelSearchAvailable} = require('../lib/travel/hotelSearchPreview');
const request = {destinationKey:'fixture-city',checkin:'2099-01-10',checkout:'2099-01-12',locale:'fr',rooms:[{adults:2,children:[]}]};
const post = body => new Request('https://bosphoras.example.invalid/api/travel/booking/search', {method:'POST',body:JSON.stringify(body)});

test('unactivated account exposes neither a booking URL nor the production search page', async () => {
  const saved=launch.nuiteeLaunch.productionVerifiedAt;
  launch.nuiteeLaunch.productionVerifiedAt='';
  try {
  assert.equal(launch.isNuiteeBookingLive(), false);
  assert.equal(launch.getNuiteeSearchConnection(), null);
  assert.deepEqual(launch.getNuiteeHotelLinks('istanbul:peninsula','fr'), []);
  assert.equal(isHotelSearchAvailable({VERCEL_ENV:'production'}), false);
  const response = await handleNuiteeSearch(post(request));
  assert.equal(response.status, 503);
  assert.equal(response.headers.get('cache-control'), 'no-store');
  assert.deepEqual(await response.json(), {code:'BOOKING_NOT_OPEN'});
  } finally {launch.nuiteeLaunch.productionVerifiedAt=saved;}
});

test('private review access remains confined to the approved branch', () => {
  const saved=launch.nuiteeLaunch.productionVerifiedAt;launch.nuiteeLaunch.productionVerifiedAt='';
  try {
  assert.equal(isHotelSearchAvailable({VERCEL_ENV:'preview',VERCEL_GIT_COMMIT_REF:'feature/luxury-travel-seo-destinations-20261012'}), true);
  assert.equal(isHotelSearchAvailable({VERCEL_ENV:'preview',VERCEL_GIT_COMMIT_REF:'other'}), false);
  } finally {launch.nuiteeLaunch.productionVerifiedAt=saved;}
});

test('launch requires supplier payment model, attribution and verified production, not merely owner consent', () => {
  const original = {...launch.nuiteeLaunch};
  const now = Date.parse('2026-11-02T12:00:00Z');
  try {
    Object.assign(launch.nuiteeLaunch, {productionVerifiedAt:'2026-11-02T11:00:00Z',paymentModelReference:'fixture-supplier-payment-confirmation',attributionEvidence:'fixture-dashboard-evidence'});
    assert.equal(launch.isNuiteeBookingLive(now), true);
    for (const key of ['paymentModelReference','attributionEvidence','productionVerifiedAt','ownerApprovalReference']) {
      const value=launch.nuiteeLaunch[key]; launch.nuiteeLaunch[key]='';
      assert.equal(launch.isNuiteeBookingLive(now), false, key); launch.nuiteeLaunch[key]=value;
    }
    assert.equal(launch.isNuiteeBookingLive(Date.parse('2026-12-03T00:00:00Z')), false);
  } finally {Object.assign(launch.nuiteeLaunch, original);}
});

test('verified Istanbul mappings resolve both editorial keys to the same exact hotel, never another property', () => {
  const mappings=require('../data/travel/nuiteeMappings.json');
  const {istanbulHotels}=require('../data/travel/istanbulFlagship');
  const original={...launch.nuiteeLaunch};
  const now=Date.parse('2026-11-02T12:00:00Z');
  try {
    Object.assign(launch.nuiteeLaunch,{productionVerifiedAt:'2026-11-02T11:00:00Z',paymentModelReference:'fixture-payment-confirmation',attributionEvidence:'fixture-dashboard-evidence'});
    assert.equal(mappings.hotels.length,istanbulHotels.length);
    assert.equal(new Set(mappings.hotels.map(h=>h.hotelId)).size,mappings.hotels.length);
    for (const hotel of istanbulHotels) {
      const matches=mappings.hotels.filter(h=>h.editorialKeys.includes(`istanbul:${hotel.id}`));
      assert.equal(matches.length,1,hotel.id);
      assert(matches[0].editorialKeys.includes(`istanbul:${hotel.officialUrl}`));
      for (const key of matches[0].editorialKeys) {
        const links=launch.getNuiteeHotelLinks(key,'fr',now);
        assert.equal(links.length,1,key);
        const url=new URL(links[0].url);
        assert.equal(url.hostname,'bosphoras.nuitee.link');
        assert.equal(url.pathname,`/hotels/${matches[0].hotelId}`);
        assert.equal(url.searchParams.get('language'),'fr');
        assert.equal(url.searchParams.get('currency'),'EUR');
        assert(url.searchParams.get('clientReference').startsWith('bosphoras_istanbul_'));
      }
    }
    assert.deepEqual(launch.getNuiteeHotelLinks('istanbul:unknown-hotel','fr',now),[]);
    const origin=launch.nuiteeLaunch.origin;launch.nuiteeLaunch.origin='https://evil.example.invalid';
    assert.equal(launch.isNuiteeBookingLive(now),false);
    launch.nuiteeLaunch.origin=origin;
  } finally {Object.assign(launch.nuiteeLaunch,original);}
});

test('HTTP boundary rejects malformed data, destination injection, personal data and checkout tokens', async () => {
  const originalConnection=launch.getNuiteeSearchConnection;
  const originalProviders=launch.getNuiteeProviders;
  const provider={id:'nuitee-connect',name:'Fixture',status:'approved',mode:'supplier-hosted',merchantOfRecord:'supplier',agreementReference:'fixture-contract',bookingHosts:['supplier.example.invalid'],responsibilities:Object.fromEntries(supplierResponsibilities.map(key=>[key,true]))};
  const connection={origin:'https://supplier.example.invalid',supportUrl:'https://supplier.example.invalid/help',termsUrl:'https://supplier.example.invalid/terms',sellerLegalName:'Fixture supplier',mappingPermissionReference:'fixture-permission',deepLinkEvidence:'fixture-search',attributionEvidence:'fixture-reporting',liveApprovalReference:'fixture-approval',clientReference:'fixture_search',verifiedAt:'2020-01-01T00:00:00Z',reviewBy:'2099-12-31T00:00:00Z',destinations:[{key:'fixture-city',placeId:'fixture_place',displayName:'Fixture city',matchEvidence:'fixture-identity'}]};
  launch.getNuiteeSearchConnection=()=>connection;
  launch.getNuiteeProviders=()=>[provider];
  try {
    for (const invalid of [null,[],{}, {...request,email:'never@example.invalid'}, {...request,offerId:'never'}, {...request,url:'https://evil.invalid'}, {...request,destinationKey:'unknown'}, {...request,rooms:[{adults:2,children:[],email:'never@example.invalid'}]}, {...request,rooms:[{adults:0,children:[]}]}, {...request,checkout:request.checkin}]) {
      const response=await handleNuiteeSearch(post(invalid));
      assert.equal(response.status,400);
      assert.equal('url' in await response.json(),false);
    }
    const broken=await handleNuiteeSearch(new Request('https://bosphoras.example.invalid',{method:'POST',body:'{'}));
    assert.equal(broken.status,400);
    const valid=await handleNuiteeSearch(post(request));
    assert.equal(valid.status,200);
    const result=await valid.json();const url=new URL(result.url);
    assert.equal(url.origin,connection.origin);assert.equal(url.pathname,'/hotels');
    assert.equal(url.searchParams.get('checkin'),request.checkin);
    assert.equal(url.searchParams.get('clientReference'),'fixture_search');
    assert(!url.searchParams.has('offerId'));assert(!url.searchParams.has('email'));
    const worldwide={...request,destinationKey:undefined,placeId:'ChIJ-fixture-worldwide',displayName:'Ville, Région & pays'};
    const worldResponse=await handleNuiteeSearch(post(worldwide));
    assert.equal(worldResponse.status,200);
    const worldwideUrl=new URL((await worldResponse.json()).url);
    assert.equal(worldwideUrl.origin,connection.origin);
    assert.equal(worldwideUrl.searchParams.get('placeId'),worldwide.placeId);
    assert.equal(worldwideUrl.searchParams.get('name'),worldwide.displayName);
    const grouped={...worldwide,rooms:[{adults:3,children:[],rooms:2}]};
    const groupedResponse=await handleNuiteeSearch(post(grouped));
    assert.equal(groupedResponse.status,400);
    const allocated={...worldwide,rooms:[{adults:2,children:[]},{adults:1,children:[]}]};
    const allocatedResponse=await handleNuiteeSearch(post(allocated));
    assert.equal(allocatedResponse.status,200);
    const allocatedUrl=new URL((await allocatedResponse.json()).url);
    assert.equal(allocatedUrl.searchParams.get('rooms'),'2');
    assert.equal(allocatedUrl.searchParams.get('adults'),'3');
    assert.deepEqual(JSON.parse(atob(allocatedUrl.searchParams.get('occupancies'))),allocated.rooms);
    for(const rooms of [[{adults:2,children:[],rooms:3}], [{adults:8,children:[],rooms:7}], [{adults:4,children:[],rooms:2.5}]]) {
      assert.equal((await handleNuiteeSearch(post({...worldwide,rooms}))).status,400);
    }
    for(const invalid of [{...worldwide,placeId:'https://evil.invalid'}, {...worldwide,displayName:'bad\nname'}, {...worldwide,displayName:'x'.repeat(201)}, {...worldwide,destinationKey:'fixture-city'}]) {
      assert.equal((await handleNuiteeSearch(post(invalid))).status,400);
    }
  } finally {launch.getNuiteeSearchConnection=originalConnection;launch.getNuiteeProviders=originalProviders;}
});

test('booking-page prefill accepts only exact mapped hotels or destinations', () => {
  const now=Date.parse('2026-11-03T00:00:00Z');
  assert.equal(launch.isNuiteeBookingLive(now),true);
  const hotel=new URL(launch.getNuiteeReservationStart('fr',{hotel:'lp6558f17c'},now));
  assert.equal(hotel.origin,launch.nuiteeLaunch.origin);
  assert.equal(hotel.pathname,'/hotels/lp6558f17c');
  assert.equal(hotel.searchParams.get('clientReference'),'bosphoras_istanbul_lp6558f17c');
  const destination=new URL(launch.getNuiteeReservationStart('en',{destination:'paris'},now));
  assert.equal(destination.pathname,'/hotels');
  assert.equal(destination.searchParams.get('language'),'en');
  for(const selection of [{hotel:'lp-unknown'}, {hotel:'https://evil.invalid'}, {destination:'unknown'}, {destination:'../booking'}]) {
    assert.equal(launch.getNuiteeReservationStart('fr',selection,now),null);
  }
});

test('Bosphoras booking result navigation does not embed a second booking application', () => {
  const fs = require('node:fs');
  const path = require('node:path');
  const searchPage = fs.readFileSync(path.join(__dirname, '../components/travel/HotelReservationSearch.tsx'), 'utf8');
  const preparationPage = fs.readFileSync(path.join(__dirname, '../components/travel/HotelSearchPreparationPage.tsx'), 'utf8');
  assert(searchPage.includes('window.location.assign(body.url)'), 'search should navigate to qualified supplier URL');
  assert(searchPage.includes('new URL(body.url).origin !== origin'), 'navigation must remain supplier-origin locked');
  assert(!searchPage.includes('<iframe'), 'do not reintroduce the slow embedded results');
  assert(preparationPage.includes('if (initialUrl) redirect(initialUrl)'), 'prefilled supplier links should redirect without hydration');
});

test('search CTAs use the supplier white-label directly while editorial navigation stays on Bosphoras', () => {
  const fs = require('node:fs');
  const path = require('node:path');
  const read = name => fs.readFileSync(path.join(__dirname,'..',name),'utf8');
  const { getNuiteeWhiteLabelSearchHref, NUITEE_WHITE_LABEL_ORIGIN } = require('../lib/travel/nuiteeWhiteLabel');
  for (const code of ['fr','en','ru','ar']) {
    const url = new URL(getNuiteeWhiteLabelSearchHref(code));
    assert.equal(url.origin, NUITEE_WHITE_LABEL_ORIGIN);
    assert.equal(url.pathname, '/');
    assert.equal(url.searchParams.get('language'), code==='fr'?'fr':'en');
    assert.equal(url.searchParams.get('currency'),'EUR');
    assert.equal(url.searchParams.get('clientReference'),'bosphoras_worldwide');
  }
  assert.equal(launch.getNuiteeWorldwideSearch('fr'), getNuiteeWhiteLabelSearchHref('fr'));
  assert(read('components/Header.tsx').includes('const hotelSearchHref = getNuiteeWhiteLabelSearchHref(locale);'));
  assert(read('components/Header.tsx').includes("const travelHomeHref = locale === 'fr' ? '/travel'"));
  assert(read('components/travel/TravelPages.tsx').includes('href={hotelSearchUrl}'));
  assert(read('components/travel/TravelPages.tsx').includes('href: hotelSearchUrl, featured: true'));
  assert(read('components/travel/TravelPages.tsx').includes("href={travelHref(locale,'destinations')}"));
  assert(read('components/travel/HotelSearchPreparationPage.tsx').includes('if (worldwideUrl) redirect(worldwideUrl)'));
  assert(read('components/travel/HotelSearchPreparationPage.tsx').includes('if (initialUrl) redirect(initialUrl)'));
  assert(!read('components/travel/HotelReservationSearch.tsx').includes('<iframe'));
});
