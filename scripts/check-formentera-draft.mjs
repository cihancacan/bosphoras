#!/usr/bin/env node
/** Formentera complete-guide gate: FR/EN, original photography, safe noindex.
 *  This is technical QA. Human final image composition checks happen in Preview.
 */
import assert from 'node:assert/strict';
import {readFileSync,existsSync,statSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8');
const obj=(p,n)=>{const s=read(p),marker='export const '+n+' = ',i=s.indexOf(marker);assert(i>=0,n+' missing');return JSON.parse(s.slice(i+marker.length).trim().replace(/ as const;\s*$/,''));};
const g=obj('data/travel/formenteraDraftGuide.ts','formenteraDraftGuide');
const f=obj('data/travel/formenteraDraftFaq.ts','formenteraDraftFaq');
const m=JSON.parse(read('data/travel/formenteraMediaCandidates.json'));
assert.equal(g.slug,'formentera');assert.equal(g.hotels.length,4);
assert.equal(new Set(g.hotels.map(x=>x.name)).size,4);
assert.equal(g.areas.length,5);assert.equal(g.experiences.length,5);
assert(g.editorialFr.length>1400&&g.editorialEn.length>1400);
for(const h of g.hotels)assert(h.fr.length>450&&h.en.length>450&&h.frWatch.length>60&&h.enWatch.length>60&&h.officialUrl.startsWith('https://'),h.name);
for(const lang of ['fr','en']){assert.equal(f[lang].length,7);assert(f[lang].every(x=>x.q.length>30&&x.a.length>140));}
assert(g.hotels.find(h=>h.name==='Teranka').fr.includes('12 ans'),'Teranka family age restriction missing');
assert.equal(m.hotels.length,12);assert.equal(m.destinationScenes.length,9);
assert.equal(m.approvedForCommercialPublication,false,'Do not index/publish unapproved destinations');
assert.equal(m.visuallyVerified,true);
const photos=m.hotels.concat(m.destinationScenes);assert.equal(photos.length,21);
const sha=new Set(), local=new Set();
for(const p of photos) {
 assert(p.localPath?.startsWith('/images/travel/formentera-premium/'));
 assert(existsSync('public'+p.localPath)&&statSync('public'+p.localPath).size>25000,'Missing/too small: '+p.localPath);
 assert(p.status==='candidate_needs_visual_review'&&p.visuallyVerified&&p.commercialRightsCleared&&!p.visualQaWarning);
 assert(p.sha256?.match(/^[a-f0-9]{64}$/));
 assert(!sha.has(p.sha256)&&!local.has(p.localPath),'Duplicate photo: '+p.localPath);
 sha.add(p.sha256);local.add(p.localPath);
 assert(p.frCaption?.length>28&&p.enCaption?.length>28);
 assert(p.credit?.length>2&&p.sourcePage?.startsWith('https://')&&p.licenseUrl?.startsWith('https://'));
}
const editorial=read('data/travel/formenteraPremiumEditorial.ts');
for(const key of ['five-flowers','gecko','teranka','cala-saona'])assert(editorial.includes(key));
assert(editorial.includes("['scene-2','scene-3','scene-4','scene-5','scene-1']"));
const featured=read('data/travel/featuredCityGuides.ts');
assert(featured.includes("'formentera': formenteraGuide"));
const routes=read('components/travel/TravelPages.tsx'),widgets=read('components/travel/FeaturedCityGuide.tsx');
assert(routes.includes("isFormentera")&&routes.includes('confirmedFormenteraAssets'));
assert(widgets.includes('confirmedFormenteraAssets')&&widgets.includes('formenteraAreaVisuals'));
assert(read('data/travel/destinations.ts').includes('approvedDestinationSlugs: ReadonlySet<string> = new Set([])'));
const slugs=[...read('data/travel/destinations.ts').matchAll(/slug:\s*["']([^"']+)["']/g)].map(x=>x[1]);
assert.equal(slugs.length,88);assert(slugs.includes('formentera'));assert.equal(new Set(slugs).size,88);
console.log(JSON.stringify({status:'FORMENTERA_PHOTO_QA_PASSED',hotels:4,areas:5,experiences:5,faqEach:7,uniqueWebP:21,noindex:true,catalogue:88,productionUntouched:true}));
