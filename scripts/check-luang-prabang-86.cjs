const assert=require('node:assert/strict'),fs=require('node:fs'),crypto=require('node:crypto');
const {featuredCityGuides}=require('../data/travel/featuredCityGuides');
const {luangPrabangHotelEditorial,confirmedLuangPrabangPreviewAssets}=require('../data/travel/luangPrabangPremiumEditorial');
const {luangPrabangDraftFaq}=require('../data/travel/luangPrabangDraftFaq');
const {approvedDestinationSlugs,approvedCategorySlugs}=require('../data/travel/destinations');
const {bookingTarget}=require('../components/travel/HotelPartnerBooking');
const m=require('../data/travel/luangPrabangMediaCandidates.json'),v=require('../data/travel/luangPrabangNuiteeVerified.json');
const g=featuredCityGuides['luang-prabang'];
assert.equal(Object.keys(featuredCityGuides).length,86);
assert.equal(Object.keys(g.photos).length,9);assert.equal(g.hotels.length,4);
assert.equal(m.destinationScenes.length,9);assert.equal(m.hotels.length,12);assert.equal(confirmedLuangPrabangPreviewAssets.size,21);
assert.equal(luangPrabangDraftFaq.fr.length,10);assert.equal(luangPrabangDraftFaq.en.length,10);
const hashes=new Set();
for(const p of [...m.destinationScenes,...m.hotels]){
 assert.ok(p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved);
 const b=fs.readFileSync('public'+p.localPath);assert.equal(b.toString('ascii',0,4),'RIFF');assert.equal(b.toString('ascii',8,12),'WEBP');
 assert.equal(crypto.createHash('sha256').update(b).digest('hex'),p.webpSHA256);assert.ok(b.length<=150000);assert.ok(!hashes.has(p.webpSHA256));hashes.add(p.webpSHA256);
 if(p.type==='wikimedia'){assert.ok(p.credit&&p.licenseUrl);assert.match(p.sourcePage,/^https:\/\/commons.wikimedia.org\/wiki\/File:/);}
 else{assert.match(p.sourceResolvedUrl,/^https:\/\/nuitee-hotels\.b-cdn\.net\/hotels\//);assert.equal(p.sourcePage,'https://bosphoras.nuitee.link/hotels/'+v.hotels.find(h=>h.name===p.hotel).id);}
}
for(const h of g.hotels){
 const id=v.hotels.find(x=>x.name===h.name).id;assert.equal(luangPrabangHotelEditorial[h.name].photos.length,3);
 for(const locale of ['fr','en']){
  assert.ok(approvedDestinationSlugs.has('luang-prabang/'+locale));assert.ok(approvedCategorySlugs.has('hotels/luang-prabang/'+locale));
  const t=bookingTarget('luang-prabang:'+h.name,locale);assert.ok(t.exact);const u=new URL(t.href);assert.equal(u.pathname,'/hotels/'+id);assert.equal(u.searchParams.get('language'),locale);assert.equal(u.searchParams.get('clientReference'),'bosphoras_luang-prabang_'+id);
 }
}
console.log('Luang Prabang #86 PASS: 9 geographic images, 12 exact hotel images, 4 direct suppliers FR/EN, 20 FAQs, 86 registered guides');
