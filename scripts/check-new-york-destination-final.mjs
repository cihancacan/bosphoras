import assert from 'node:assert/strict';
import {readFileSync,existsSync,statSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8');
const catalog=read('data/travel/destinations.ts');
const slugs=[...catalog.matchAll(/slug:\s*["']([^"']+)["']/g)].map(m=>m[1]);
assert.equal(slugs.length,88,'All 88 original destination slugs must remain');
assert.equal(new Set(slugs).size,88);
assert(slugs.includes('new-york'));
assert(catalog.includes('approvedDestinationSlugs: ReadonlySet<string> = new Set([])'),'No production indexing approval');
const guide=read('data/travel/newYorkDraftGuide.ts');
for(const hotel of ['Aman New York','The Fifth Avenue Hotel','The Greenwich Hotel','The Lowell'])
 assert(guide.includes(hotel),'Missing actual New York hotel '+hotel);
const refs=read('data/travel/featuredCityGuides.ts');
const types=refs.match(/export type FeaturedCitySlug\s*=\s*([\s\S]*?);/)?.[1]||'';
const featured=[...types.matchAll(/'([^']+)'/g)].map(x=>x[1]);
assert.equal(featured.length,56,'56 premium destinations including New York');
assert.equal(new Set(featured).size,56);
assert(refs.includes("'new-york': newYorkGuide"));
assert(refs.includes('istanbul: istanbulGuide'));
const faq=read('data/travel/newYorkDraftFaq.ts');
assert.equal((faq.split(' en: [')[0].match(/\{q:/g)||[]).length,8);
assert.equal((faq.split(' en: [')[1]?.match(/\{q:/g)||[]).length,8);
const data=JSON.parse(read('data/travel/newYorkMediaCandidates.json'));
assert.equal(data.destination,'new-york');
assert.equal(data.destinationScenes.length,9);
assert.equal(data.hotels.length,12);
const all=[...data.destinationScenes,...data.hotels];
const unique=new Set(), digests=new Set();
for(const photo of all){
 assert(photo.localPath?.startsWith('/images/travel/new-york-premium/'),'Invalid website public image URL '+photo.localPath);
 assert(photo.sourcePage?.startsWith('https://'),'Source missing');
 assert(photo.sha256?.length===64);
 assert((photo.bytes||0)>14000);
 assert(!unique.has(photo.localPath),'Duplicate path '+photo.localPath);
 unique.add(photo.localPath);
 assert(!digests.has(photo.sha256),'Identical photograph duplicated '+photo.localPath);
 digests.add(photo.sha256);
 assert(existsSync('public'+photo.localPath),'Missing image '+photo.localPath);
 assert(statSync('public'+photo.localPath).size>14000,'Placeholder image '+photo.localPath);
}
for(const city of data.destinationScenes){
 assert(city.license?.startsWith('CC BY'),'City image attribution licence missing '+city.key);
 assert.equal(city.commercialRightsCleared,true);
}
for(const hotel of ['aman','fifth','greenwich','lowell']){
 const pics=data.hotels.filter(x=>x.propertyKey===hotel);
 assert.equal(pics.length,3,'Three genuine source-labelled photographs expected for '+hotel);
 for(const p of pics) assert.equal(p.commercialRightsCleared,false,'Do not imply commercial hotel photo rights');
}
const ui=read('components/travel/FeaturedCityGuide.tsx');
for(const code of ['newYorkHotelEditorial','newYorkAreaVisuals','confirmedNewYorkPreviewAssets','newYorkDraftFaq'])assert(ui.includes(code));
const travel=read('components/travel/TravelPages.tsx');
for(const code of ['isNewYorkDestination','newYorkDraftFaq','newYorkSchemaSafePhotos','New York : 4 hôtels de luxe','New York: 4 Luxury Hotels','robots: { index: ready'])assert(travel.includes(code),code);
const city=read('data/travel/newYorkGuide.ts');
assert(city.includes('approvedNewYorkCityPhoto'));
assert(city.includes('photos'));
console.log('NEW_YORK_PASSED: 56 premium guides, 88 unique catalogue destinations, 9 CC New York city images, 12 property photos from 4 verified hotel identities, 16 FR/EN FAQs, safe JSON-LD and noindex.');
