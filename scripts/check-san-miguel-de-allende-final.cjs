/** Integrity checks run against runtime exports, files and the retained base catalogue. */
const assert=require('node:assert/strict');
const fs=require('node:fs');
const crypto=require('node:crypto');
const {featuredCityGuides}=require('../data/travel/featuredCityGuides.ts');
const {travelDestinations,approvedDestinationSlugs}=require('../data/travel/destinations.ts');
const {sanMiguelDeAllendeGuide:g,approvedSanMiguelPhoto}=require('../data/travel/sanMiguelDeAllendeGuide.ts');
const {sanMiguelHotelEditorial:hotels,sanMiguelAreaVisuals:areas,confirmedSanMiguelAssets:assets,sanMiguelSchemaSafePhotos:schema}=require('../data/travel/sanMiguelDeAllendePremiumEditorial.ts');
const {sanMiguelDeAllendeDraftFaq:faq}=require('../data/travel/sanMiguelDeAllendeDraftFaq.ts');
const m=require('../data/travel/sanMiguelDeAllendeMediaCandidates.json');
assert.equal(travelDestinations.length,88);assert.equal(new Set(travelDestinations.map(x=>x.slug)).size,88);
assert(Object.keys(featuredCityGuides).length>=60,'Keep San Miguel and all previous guides when later destinations are added');assert.equal(approvedDestinationSlugs.size,0);
assert.equal(g.slug,'san-miguel-de-allende');assert.equal(g.hotels.length,4);assert.equal(g.areas.length,5);assert.equal(g.experiences.length,5);
assert.deepEqual(g.hotels.map(x=>x.name),['Rosewood San Miguel de Allende','Casa de Sierra Nevada, A Belmond Hotel','Hotel Matilda','Live Aqua San Miguel de Allende']);
assert.equal(Object.keys(g.photos).length,9);assert.equal(m.hotels.length,12);assert.equal(areas.length,5);
assert(areas.every(p=>p&&assets.has(p.src)));assert.equal(assets.size,21);
assert.equal(areas[2].src,g.photos['scene-4'].src);assert(g.areas[2].enName.includes('Parque Juárez'),'Do not place a park photo under La Aurora');
const hashes=new Set(),pixels=new Set();
for(const p of [...m.destinationScenes,...m.hotels]){
 const b=fs.readFileSync('public'+p.localPath);
 assert.equal(crypto.createHash('sha256').update(b).digest('hex'),p.sha256,'Actual image hash '+p.localPath);
 assert.equal(b.length,p.bytes);assert.equal(b.toString('ascii',0,4),'RIFF');assert.equal(b.toString('ascii',8,12),'WEBP');
 assert(p.bytes>18000&&p.width>=600&&p.height>=500);assert(p.visuallyVerified&&p.credit&&p.sourcePage.startsWith('https://'));
 assert(!hashes.has(p.sha256),'Duplicate image bytes');hashes.add(p.sha256);
 assert(!pixels.has(p.pixelFingerprint),'Duplicate photo pixels');pixels.add(p.pixelFingerprint);
 assert(p.frCaption&&p.enCaption&&p.license&&p.licenseUrl);
 if(!p.commercialRightsCleared)assert(!schema.has(p.localPath),'Unlicensed publisher images excluded from structured data');
}
for(const h of g.hotels){assert.equal(hotels[h.name].photos.length,3,h.name);assert(h.officialUrl.startsWith('https://'));}
for(const lang of ['fr','en']){assert.equal(faq[lang].length,8);assert.equal(new Set(faq[lang].map(x=>x.q)).size,8);assert(faq[lang].every(x=>x.q.length>20&&x.a.length>80));assert(g[lang==='fr'?'editorialFr':'editorialEn'].length>1800);}
const p=m.destinationScenes[0];assert(approvedSanMiguelPhoto(p));
for(const bad of [{...p,localPath:'/images/travel/mayakoba-premium/destination/scene-1.webp'},{...p,sourcePage:'https://example.com/'},{...p,visuallyVerified:false},{...p,sha256:''}])assert(!approvedSanMiguelPhoto(bad),'Reject substituted or unreviewed photo');
for(const slug of ['mayakoba','los-angeles','miami','new-york','istanbul','costa-careyes','punta-mita','okavango-delta'])assert(featuredCityGuides[slug],'Retain previous '+slug);
console.log('SAN_MIGUEL_PASSED: 60 premium guides, 88 geographic destinations, 9+12 unique verified WebPs, 5 illustrated sectors, 16 FAQ, attribution and schema rights gates.');
