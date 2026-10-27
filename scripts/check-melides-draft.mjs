#!/usr/bin/env node
/** Melides internal-preview integrity: 4 real hotels, bilingual prose, 21 source-traced images, noindex. */
import assert from 'node:assert/strict';
import {readFileSync,existsSync,statSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8');
const obj=(p,name)=>{const s=read(p),m='export const '+name+' = ',i=s.indexOf(m);assert(i>=0);return JSON.parse(s.slice(i+m.length).trim().replace(/ as const;\s*$/,''));};
const g=obj('data/travel/melidesDraftGuide.ts','melidesDraftGuide');
const f=obj('data/travel/melidesDraftFaq.ts','melidesDraftFaq');
const m=JSON.parse(read('data/travel/melidesMediaCandidates.json'));
assert.equal(g.slug,'melides');assert.equal(g.hotels.length,4);assert.equal(new Set(g.hotels.map(x=>x.name)).size,4);
assert.equal(g.areas.length,5);assert.equal(g.experiences.length,5);
assert(g.editorialFr.length>1500&&g.editorialEn.length>1500,'thin editorial');
for(const h of g.hotels)assert(h.fr.length>460&&h.en.length>460&&h.frWatch.length>55&&h.enWatch.length>55&&h.officialUrl.startsWith('https://'),h.name);
for(const lang of ['fr','en']){assert.equal(f[lang].length,7);assert(f[lang].every(x=>x.q.length>26&&x.a.length>130));}
assert(g.hotels.find(x=>x.name==='Vermelho Melides').frWatch.includes('Treize chambres'),'Vermelho room specificity missing');
assert(g.hotels.find(x=>x.name==='Pa.te.os').enWatch.includes('dirt road'),'Pa.te.os access warning missing');
assert(g.hotels.find(x=>x.name==='CASAVADIA Melides').enWatch.includes('self-catering'),'CASAVADIA independent-stay warning missing');
assert.equal(m.hotels.length,12);assert.equal(m.destinationScenes.length,9);
assert.equal(m.approvedForCommercialPublication,false);
const all=m.hotels.concat(m.destinationScenes),seen=new Set();
for(const x of all){
 assert(x.localPath?.startsWith('/images/travel/melides-premium/'));
 assert(existsSync('public'+x.localPath)&&statSync('public'+x.localPath).size>23000,x.localPath);
 assert(x.visuallyVerified&&x.commercialRightsCleared&&!x.visualQaWarning&&x.status==='candidate_needs_visual_review');
 assert(x.sha256&&/^[0-9a-f]{64}$/.test(x.sha256)&&!seen.has(x.sha256),'Duplicate image');
 seen.add(x.sha256);
 assert(x.frCaption?.length>20&&x.enCaption?.length>20&&x.credit?.length>2&&x.sourcePage?.startsWith('https://')&&x.licenseUrl?.startsWith('https://'));
}
const ed=read('data/travel/melidesPremiumEditorial.ts');
for(const id of ['vermelho','pateos','amala','casavadia'])assert(ed.includes(id),'missing '+id);
assert(read('data/travel/featuredCityGuides.ts').includes("'melides': melidesGuide"));
assert(read('components/travel/FeaturedCityGuide.tsx').includes('confirmedMelidesAssets'));
assert(read('components/travel/TravelPages.tsx').includes('isMelides'));
const dest=read('data/travel/destinations.ts');
assert(dest.includes('approvedDestinationSlugs: ReadonlySet<string> = new Set([])'));
const slugs=[...dest.matchAll(/slug:\s*["']([^"']+)["']/g)].map(x=>x[1]);
assert(slugs.length===88&&new Set(slugs).size===88&&slugs.includes('melides'));
console.log(JSON.stringify({status:'MELIDES_INTERNAL_DRAFT_QA_PASSED',hotels:4,areas:5,experiences:5,faqEach:7,images:21,catalogue:88,index:false}));
