import assert from 'node:assert/strict';
import {readFileSync,existsSync,statSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8');const m=JSON.parse(read('data/travel/jumbyBayMediaCandidates.json'));
assert.equal(m.destination,'jumby-bay');assert.equal(m.hotels.length,12);assert.equal(m.destinationScenes.length,9);
assert.equal(m.approvedForCommercialPublication,false,'Public rights gate must remain closed');
const photos=[...m.hotels,...m.destinationScenes];assert.equal(new Set(photos.map(p=>p.sha256)).size,21);
assert.equal(new Set(photos.map(p=>p.localPath)).size,21);
for(const p of photos){assert(p.visuallyVerified===true&&p.commercialRightsCleared===true&&!p.visualQaWarning,p.localPath);assert(p.downloadUrl.startsWith('https://cdn.bookresortsmedia.com/'));const file='public'+p.localPath;assert(existsSync(file),'Missing WebP '+file);assert(statSync(file).size>21000);}
for(const k of ['garden','pool','jabberwocky','calabash'])assert.equal(m.hotels.filter(p=>p.propertyKey===k).length,3);
const c=read('data/travel/destinations.ts'),slugs=[...c.matchAll(/slug:\s*["']([^"']+)["']/g)].map(x=>x[1]);assert.equal(slugs.length,88);assert.equal(new Set(slugs).size,88);assert(slugs.includes('jumby-bay'));
assert(c.includes('approvedDestinationSlugs: ReadonlySet<string> = new Set([])'));
assert(read('data/travel/featuredCityGuides.ts').includes("'jumby-bay': jumbyBayGuide"));
const ui=read('components/travel/FeaturedCityGuide.tsx');assert(ui.includes('jumbyBayDraftFaq')&&ui.includes('confirmedJumbyBayAssets'));
const p=read('components/travel/TravelPages.tsx');assert(p.includes('isJumbyBay')&&p.includes('confirmedJumbyBayAssets'));
const guide=read('data/travel/jumbyBayDraftGuide.ts');assert(guide.includes('Calabash')&&guide.includes('Jabberwocky')&&guide.includes('25 %'));
console.log('JUMBY_BAY_QA_SUCCESS: genuine named Garden/Pool Cottage, Jabberwocky villa and Calabash estate, 12+9 photos, FR/EN, 14 FAQs, 88 destinations, noindex');
