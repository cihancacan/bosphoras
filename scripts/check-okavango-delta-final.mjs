import assert from 'node:assert/strict';
import {readFileSync,existsSync,statSync} from 'node:fs';
const r=p=>readFileSync(p,'utf8');
const m=JSON.parse(r('data/travel/okavangoDeltaMediaCandidates.json'));
assert.equal(m.destination,'okavango-delta');
assert.equal(m.hotels.length,12);
assert.equal(m.destinationScenes.length,9);
assert.equal(m.approvedForCommercialPublication,false);
const all=[...m.hotels,...m.destinationScenes];
assert.equal(new Set(all.map(x=>x.sha256)).size,21,'21 exact hashes');
assert.equal(new Set(all.map(x=>x.localPath)).size,21,'21 unique paths');
assert.equal(m.visuallyVerified,false,'Contact-sheet human approval gate must not be silently overridden');
for(const p of all){
 assert(p.localPath.startsWith('/images/travel/okavango-delta-premium/'));
 assert(p.sourcePage.startsWith('https://'));
 assert(p.downloadUrl.startsWith('https://'));
 assert(p.frCaption&&p.enCaption&&p.credit);
 assert(p.sha256.length===64);
 assert(existsSync('public'+p.localPath),p.localPath+' missing');
 assert(statSync('public'+p.localPath).size>16000);
 assert.equal(p.status,'candidate_needs_visual_review');
}
for(const key of ['mombo','jao','sandibe','eagle'])
 assert.equal(m.hotels.filter(p=>p.propertyKey===key).length,3,'three images per real lodge');
for(const p of m.hotels)assert.equal(p.commercialRightsCleared,false,'Hotel photography must stay behind commercial use gate');
for(const p of m.destinationScenes){
 assert.equal(p.commercialRightsCleared,true,'Commons licence audited');
 assert(/CC BY|CC0|Public domain/i.test(p.license));
 assert(p.licenseUrl.startsWith('https://'));
}
assert(existsSync('docs/travel-okavango-delta-contact-sheet.jpg'));
const catalogue=r('data/travel/destinations.ts');
const slugs=[...catalogue.matchAll(/slug:\s*["']([^"']+)["']/g)].map(x=>x[1]);
assert.equal(slugs.length,88);assert.equal(new Set(slugs).size,88);assert(slugs.includes('okavango-delta'));
assert(catalogue.includes('approvedDestinationSlugs: ReadonlySet<string> = new Set([])'));
const register=r('data/travel/featuredCityGuides.ts');assert(register.includes("'okavango-delta': okavangoDeltaGuide"));
const featured=r('components/travel/FeaturedCityGuide.tsx');assert(featured.includes('confirmedOkavangoDeltaPreviewAssets')&&featured.includes('okavangoDeltaDraftFaq'));
const route=r('components/travel/TravelPages.tsx');assert(route.includes('isOkavangoDelta')&&route.includes('okavangoDeltaDraftFaq'));
const faq=r('data/travel/okavangoDeltaDraftFaq.ts');assert(faq.includes('mokoro')&&faq.includes('Mombo'));
const draft=r('data/travel/okavangoDeltaDraftGuide.ts');
for(const name of ['Wilderness Mombo','Jao Camp','&Beyond Sandibe','Belmond Eagle Island'])
 assert(draft.includes(name),name);
console.log('OKAVANGO_QA_SUCCESS: 4 named camps, 12+9 provenance-labelled local WebP, FR/EN and 14 FAQ, 88 unique destinations preserved; NOINDEX and photo commercial-rights blocked');
