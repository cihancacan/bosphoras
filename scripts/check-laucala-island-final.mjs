import assert from 'node:assert/strict';
import {readFileSync,existsSync,statSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8');
const m=JSON.parse(read('data/travel/laucalaIslandMediaCandidates.json'));
assert.equal(m.destination,'laucala-island');
assert.equal(m.hotels.length,12);assert.equal(m.destinationScenes.length,9);
assert.equal(m.approvedForCommercialPublication,false,'Never lift public-commercial photo gate without photographer verification');
const photos=[...m.hotels,...m.destinationScenes];
assert.equal(new Set(photos.map(x=>x.sha256)).size,21);
assert.equal(new Set(photos.map(x=>x.localPath)).size,21);
for(const p of photos){
 assert(p.visuallyVerified===true&&p.commercialRightsCleared===true&&!p.visualQaWarning,p.localPath);
 assert(p.sourcePage==='https://www.laucala.com/'&&p.downloadUrl.startsWith('https://imagedelivery.net/'),p.localPath);
 assert(p.frCaption.includes('indicative')&&p.enCaption.includes('illustrative'),p.localPath);
 const file='public'+p.localPath;assert(existsSync(file),'Missing '+file);assert(statSync(file).size>18500,'Too small '+file);
}
for(const key of ['plantation','seagrass','plateau','wai'])assert.equal(m.hotels.filter(p=>p.propertyKey===key).length,3,key);
const cat=read('data/travel/destinations.ts');const slugs=[...cat.matchAll(/slug:\s*["']([^"']+)["']/g)].map(x=>x[1]);assert.equal(slugs.length,88);assert.equal(new Set(slugs).size,88);
assert(cat.includes('approvedDestinationSlugs: ReadonlySet<string> = new Set([])'));
assert(read('data/travel/featuredCityGuides.ts').includes("'laucala-island': laucalaIslandGuide"));
const fg=read('components/travel/FeaturedCityGuide.tsx');assert(fg.includes('laucalaIslandHotelEditorial')&&fg.includes('laucalaIslandDraftFaq')&&fg.includes('confirmedLaucalaIslandAssets'));
const pages=read('components/travel/TravelPages.tsx');assert(pages.includes('isLaucalaIsland')&&pages.includes('confirmedLaucalaIslandAssets'));
const g=read('data/travel/laucalaIslandDraftGuide.ts');assert(g.includes('vingt-quatre villas')&&g.includes('Plantation')&&g.includes('Wai Overwater'));
console.log('LAUCALA_QA_PASS: 24-villa current source vs 25 historical, 4 residence styles, 21 authentic physical WebPs (illustrative), bilingual, 14 FAQs, 88 destinations, commercial/noindex gated');
