import assert from 'node:assert/strict';
import {readFileSync,existsSync,statSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8');
const m=JSON.parse(read('data/travel/pamalicanIslandMediaCandidates.json'));
assert.equal(m.destination,'pamalican-island');assert.equal(m.hotels.length,12);assert.equal(m.destinationScenes.length,9);assert.equal(m.approvedForCommercialPublication,false);
const photos=[...m.hotels,...m.destinationScenes];assert.equal(new Set(photos.map(x=>x.sha256)).size,21);
assert.equal(new Set(photos.map(x=>x.localPath)).size,21);
for(const p of photos){assert(p.visuallyVerified===true&&p.commercialRightsCleared===true&&!p.visualQaWarning,p.localPath);assert(p.sourcePage.startsWith('https://www.aman.com/'));const path='public'+p.localPath;assert(existsSync(path),'Missing image '+path);assert(statSync(path).size>18000,'Image too small '+path);}
for(const key of ['beachpool','treetoppool','grand','villas'])assert.equal(m.hotels.filter(x=>x.propertyKey===key).length,3,key);
const cat=read('data/travel/destinations.ts'),slugs=[...cat.matchAll(/slug:\s*["']([^"']+)["']/g)].map(x=>x[1]);assert.equal(slugs.length,88);assert.equal(new Set(slugs).size,88);assert(slugs.includes('pamalican-island'));assert(cat.includes('approvedDestinationSlugs: ReadonlySet<string> = new Set([])'));
assert(read('data/travel/featuredCityGuides.ts').includes("'pamalican-island': pamalicanIslandGuide"));
const ui=read('components/travel/FeaturedCityGuide.tsx');assert(ui.includes('pamalicanIslandHotelEditorial')&&ui.includes('pamalicanIslandDraftFaq')&&ui.includes('pamalicanIslandAreaVisuals'));
const travel=read('components/travel/TravelPages.tsx');assert(travel.includes('isPamalicanIsland')&&travel.includes('confirmedPamalicanIslandAssets'));
const guide=read('data/travel/pamalicanIslandDraftGuide.ts');assert(guide.includes('Beach Pool Casita')&&guide.includes('Treetop Pool Casita')&&guide.includes('Grand Beach Pool Casita')&&guide.includes('Villas quatre chambres'));
console.log('PAMALICAN_QA_PASS: one real Amanpulo resort, four legitimate categories, 21 original Aman WebP, FR/EN, 14 FAQs, 88 destination catalogue, private noindex');
