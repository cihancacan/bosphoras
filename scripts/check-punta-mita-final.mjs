import assert from 'node:assert/strict';
import {existsSync,readFileSync,statSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8');
const m=JSON.parse(read('data/travel/puntaMitaMediaCandidates.json'));
assert.equal(m.destination,'punta-mita');
assert.equal(m.hotels.length,12);assert.equal(m.destinationScenes.length,9);
assert.equal(m.approvedForCommercialPublication,false);
const a=[...m.hotels,...m.destinationScenes];
assert.equal(new Set(a.map(x=>x.sha256)).size,21);
assert.equal(new Set(a.map(x=>x.localPath)).size,21);
for(const x of a){
 assert(x.localPath.startsWith('/images/travel/punta-mita-premium/'));
 assert(x.sourcePage.startsWith('https://'));assert(x.downloadUrl.startsWith('https://'));
 assert(x.bytes>13000);assert(x.sha256.length===64);
 assert(x.frCaption&&x.enCaption&&x.credit);
 assert(existsSync('public'+x.localPath),'missing image '+x.localPath);
 assert(statSync('public'+x.localPath).size>13000);
}
for(const k of ['four-seasons','st-regis','conrad','susurros'])
 assert.equal(m.hotels.filter(x=>x.propertyKey===k).length,3);
for(const h of m.hotels)assert.equal(h.commercialRightsCleared,false);
for(const s of m.destinationScenes){
 assert.equal(s.commercialRightsCleared,true);
 assert(/CC BY|CC0|Public domain/i.test(s.license));
 assert(s.licenseUrl.startsWith('https://'));
}
assert(existsSync('docs/travel-punta-mita-contact-sheet.jpg'));
const catalogue=read('data/travel/destinations.ts');
const slugs=[...catalogue.matchAll(/slug:\s*["']([^"']+)["']/g)].map(x=>x[1]);
assert.equal(slugs.length,88);assert.equal(new Set(slugs).size,88);assert(slugs.includes('punta-mita'));
assert(catalogue.includes('approvedDestinationSlugs: ReadonlySet<string> = new Set([])'));
assert(read('data/travel/featuredCityGuides.ts').includes("'punta-mita': puntaMitaGuide"));
assert(read('components/travel/FeaturedCityGuide.tsx').includes('puntaMitaDraftFaq'));
assert(read('components/travel/TravelPages.tsx').includes('isPuntaMita'));
assert(read('components/travel/TravelPages.tsx').includes('confirmedPuntaMitaPreviewAssets'));
const d=read('data/travel/puntaMitaDraftGuide.ts');
for(const h of ['Four Seasons Resort Punta Mita','The St. Regis Punta Mita Resort','Conrad Punta de Mita','Susurros del Corazón'])
 assert(d.includes(h));
const f=read('data/travel/puntaMitaDraftFaq.ts');
assert(f.includes('CONANP')&&f.includes('Punta Mita'));
console.log('PUNTA_MITA_QA_PASS: four actual noninterchangeable hotels, 12 hotel + 9 licensed landscape WebP, 14 FR/EN FAQ, 88 original destinations, private noindex and rights gate');
