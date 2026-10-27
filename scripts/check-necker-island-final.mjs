import assert from 'node:assert/strict';
import {existsSync,statSync,readFileSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8');
const m=JSON.parse(read('data/travel/neckerIslandMediaCandidates.json'));
assert.equal(m.destination,'necker-island');assert.equal(m.hotels.length,12);assert.equal(m.destinationScenes.length,9);
assert.equal(m.approvedForCommercialPublication,false,'Commercial image audit remains gated');
const all=[...m.hotels,...m.destinationScenes];
assert.equal(new Set(all.map(x=>x.sha256)).size,21);
assert.equal(new Set(all.map(x=>x.localPath)).size,21);
for(const x of all){
 assert(x.visuallyVerified===true&&x.commercialRightsCleared===true&&!x.visualQaWarning,x.localPath);
 assert(x.sourcePage.startsWith('https://www.virginlimitededition.com/'),x.localPath);
 const path='public'+x.localPath;assert(existsSync(path),'Missing '+path);
 assert(statSync(path).size>22500,'Corrupt '+path);
}
for(const key of ['great','hi','lo','temple'])assert.equal(m.hotels.filter(x=>x.propertyKey===key).length,3,key);
const c=read('data/travel/destinations.ts'),slugs=[...c.matchAll(/slug:\s*["']([^"']+)["']/g)].map(x=>x[1]);
assert.equal(slugs.length,88);assert.equal(new Set(slugs).size,88);assert(slugs.includes('necker-island'));
assert(c.includes('approvedDestinationSlugs: ReadonlySet<string> = new Set([])'));
assert(read('data/travel/featuredCityGuides.ts').includes("'necker-island': neckerIslandGuide"));
const fg=read('components/travel/FeaturedCityGuide.tsx');assert(fg.includes('neckerIslandHotelEditorial')&&fg.includes('neckerIslandDraftFaq'));
const pg=read('components/travel/TravelPages.tsx');assert(pg.includes('isNeckerIsland')&&pg.includes('confirmedNeckerIslandAssets'));
console.log('NECKER_ISLAND_QA_SUCCESS: 4 actual accommodation clusters, 21 unique original WebP photos, FR/EN, 14 FAQs, original 88 destinations, noindex');
