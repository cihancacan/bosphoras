const assert=require('node:assert/strict'),fs=require('node:fs'),crypto=require('node:crypto');
const {featuredCityGuides}=require('../data/travel/featuredCityGuides');
const {desaruCoastDraftFaq}=require('../data/travel/desaruCoastDraftGuide');
const {desaruCoastHotelEditorial}=require('../data/travel/desaruCoastPremiumEditorial');
const {approvedDestinationSlugs,approvedCategorySlugs}=require('../data/travel/destinations');
const {bookingTarget}=require('../components/travel/HotelPartnerBooking');
const manifest=require('../data/travel/desaruCoastMediaCandidates.json');
const g=featuredCityGuides['desaru-coast'];assert.ok(g);assert.equal(g.hotels.length,4);assert.equal(desaruCoastDraftFaq.fr.length,10);assert.equal(desaruCoastDraftFaq.en.length,10);
if(process.argv.includes('--release')){
 assert.ok(Object.keys(g.photos).length>=9,'Nine validated destination photos required');
 for(const h of g.hotels){assert.equal(desaruCoastHotelEditorial[h.name].photos.length,3);for(const locale of ['fr','en'])assert.ok(bookingTarget(g.slug+':'+h.name,locale).exact,'Exact Nuitée ID required');}
 const hashes=new Set();for(const p of [...manifest.destinationScenes,...manifest.hotels].filter(p=>p.previewVisualApproved)){assert.ok(p.visuallyVerified&&p.commercialRightsCleared);const b=fs.readFileSync('public'+p.localPath);assert.equal(b.toString('ascii',0,4),'RIFF');assert.equal(b.toString('ascii',8,12),'WEBP');assert.ok(b.length<=150000);assert.equal(crypto.createHash('sha256').update(b).digest('hex'),p.webpSHA256);assert.ok(!hashes.has(p.webpSHA256));hashes.add(p.webpSHA256);}
}else{for(const locale of ['fr','en']){assert.ok(!approvedDestinationSlugs.has(g.slug+'/'+locale));assert.ok(!approvedCategorySlugs.has('hotels/'+g.slug+'/'+locale));}console.log('Desaru Coast preview structure validated; release requires imagery and exact mappings.');}
