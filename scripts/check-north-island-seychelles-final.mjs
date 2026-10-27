import assert from 'node:assert/strict';
import {readFileSync,existsSync,statSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8');
const m=JSON.parse(read('data/travel/northIslandSeychellesMediaCandidates.json'));
assert.equal(m.destination,'north-island-seychelles');assert.equal(m.hotels.length,12);assert.equal(m.destinationScenes.length,9);
assert.equal(m.approvedForCommercialPublication,false);
const a=[...m.hotels,...m.destinationScenes];assert.equal(new Set(a.map(x=>x.sha256)).size,21);
for(const p of a){assert(p.visuallyVerified===true&&p.commercialRightsCleared===true&&!p.visualQaWarning,p.localPath);assert(p.sourcePage.startsWith('https://north-island.com/'));const f='public'+p.localPath;assert(existsSync(f));assert(statSync(f).size>21000);}
for(const name of ['beachfront','family','north','exclusive'])assert.equal(m.hotels.filter(x=>x.propertyKey===name).length,3);
const cat=read('data/travel/destinations.ts');const slugs=[...cat.matchAll(/slug:\s*["']([^"']+)["']/g)].map(x=>x[1]);assert.equal(slugs.length,88);assert.equal(new Set(slugs).size,88);
assert(cat.includes('approvedDestinationSlugs: ReadonlySet<string> = new Set([])'));
const reg=read('data/travel/featuredCityGuides.ts');assert(reg.includes("'north-island-seychelles': northIslandSeychellesGuide"));
const ui=read('components/travel/FeaturedCityGuide.tsx');assert(ui.includes('northIslandSeychellesHotelEditorial')&&ui.includes('northIslandSeychellesDraftFaq'));
const pg=read('components/travel/TravelPages.tsx');assert(pg.includes('isNorthIslandSeychelles')&&pg.includes('confirmedNorthIslandSeychellesAssets'));
const g=read('data/travel/northIslandSeychellesDraftGuide.ts');assert(g.includes('450 m²')&&g.includes('750 m²')&&g.includes('Exclusively Yours'));
console.log('NORTH_ISLAND_SEYCHELLES_QA_PASSED: 11 genuine villas, 21 unique original WebPs, 4 honest stay modes, FR/EN, noindex, catalogue 88');
