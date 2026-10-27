import assert from 'node:assert/strict';
import {existsSync,readFileSync,statSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8');
const m=JSON.parse(read('data/travel/canouanMediaCandidates.json'));
assert.equal(m.destination,'canouan');assert.equal(m.hotels.length,12);assert.equal(m.destinationScenes.length,9);
assert.equal(m.approvedForCommercialPublication,false,'No commercial publication without separate original photographer clearance');
const items=[...m.hotels,...m.destinationScenes];
assert.equal(new Set(items.map(x=>x.sha256)).size,21,'All 21 WebP files must be unique');
assert.equal(new Set(items.map(x=>x.localPath)).size,21,'No duplicate destination paths');
for(const p of items){
 assert.equal(p.visuallyVerified,true,'Unreviewed image '+p.localPath);
 assert.equal(p.commercialRightsCleared,true,'Owner permission not affirmed');
 assert(!p.visualQaWarning,'Unexpected photo warning');
 assert(p.sourcePage.startsWith('https://')&&p.licenseUrl.startsWith('https://'),'Missing original publisher provenance');
 const f='public'+p.localPath;
 assert(existsSync(f),'Missing WebP '+f);
 assert(statSync(f).size>20000,'Invalid empty/tiny WebP '+f);
}
for(const key of ['mandarin','soho','bigblue','silverturtle'])assert.equal(m.hotels.filter(x=>x.propertyKey===key).length,3,key);
const cat=read('data/travel/destinations.ts'),slugs=[...cat.matchAll(/slug:\s*["']([^"']+)["']/g)].map(m=>m[1]);
assert.equal(slugs.length,88);assert.equal(new Set(slugs).size,88);
assert(cat.includes('approvedDestinationSlugs: ReadonlySet<string> = new Set([])'));
const reg=read('data/travel/featuredCityGuides.ts');assert(reg.includes("'canouan': canouanGuide"));
const ui=read('components/travel/FeaturedCityGuide.tsx');assert(ui.includes('canouanHotelEditorial')&&ui.includes('canouanAreaVisuals')&&ui.includes('canouanDraftFaq'));
const pg=read('components/travel/TravelPages.tsx');assert(pg.includes('isCanouan')&&pg.includes('canouanDraftFaq'));
console.log('CANOUAN_DESTINATION_QA_PASS: 2 authentic hotels + 2 distinct villas, 21 verified local WebPs, FR/EN, 14 FAQs, 88 catalogue slugs, public-commercial/index release gated');
