#!/usr/bin/env node
/** Lake Como bilingual editorial and photo provenance QA. Fails closed. */
import assert from 'node:assert/strict';
import {readFileSync,statSync,existsSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8');
const tsobj=(p,name)=>{const v=read(p),anchor='export const '+name+' = ',at=v.indexOf(anchor);assert(at>=0);const q=v.slice(at+anchor.length).trim();assert(q.endsWith('as const;'));return JSON.parse(q.slice(0,-'as const;'.length).trim());};
const guide=tsobj('data/travel/lakeComoDraftGuide.ts','lakeComoDraftGuide');
const faq=tsobj('data/travel/lakeComoDraftFaq.ts','lakeComoDraftFaq');
const m=JSON.parse(read('data/travel/lakeComoMediaCandidates.json'));
assert.equal(guide.slug,'lake-como');assert.equal(guide.hotels.length,4);
assert.equal(guide.areas.length,5);assert.equal(guide.experiences.length,5);
assert(guide.editorialFr.length>750&&guide.editorialEn.length>750);
assert(new Set(guide.hotels.map(x=>x.officialUrl)).size===4);
for(const h of guide.hotels){assert(h.fr.length>=350&&h.en.length>=350,'Thin hotel '+h.name);assert(h.frWatch.length>85&&h.enWatch.length>85);assert(h.officialUrl.startsWith('https://'));}
for(const lang of ['fr','en']){assert.equal(faq[lang].length,7);assert(faq[lang].every(x=>x.q.length>20&&x.a.length>110));}
const registry=read('data/travel/featuredCityGuides.ts'),page=read('components/travel/TravelPages.tsx'),view=read('components/travel/FeaturedCityGuide.tsx');
assert(registry.includes("'lake-como': lakeComoGuide"));assert(page.includes("isLakeComo"));assert(view.includes("confirmedLakeComoAssets"));
const catalog=read('data/travel/destinations.ts');assert(catalog.includes('slug: "lake-como"'));assert(catalog.includes('approvedDestinationSlugs: ReadonlySet<string> = new Set([])'));
assert(!m.visuallyVerified&&!m.approvedForCommercialPublication);
const all=m.hotels.concat(m.destinationScenes);
assert.equal(all.length,21);assert.equal(m.hotels.length,12);assert.equal(m.destinationScenes.length,9);
assert.equal(m.downloadedHotelCandidates,12,'All hotel originals must be present');
assert.equal(m.downloadedDestinationCandidates,9,'All geographic originals must be present');
assert.equal(all.filter(x=>x.localPath).length,21,'Cannot finish Lake Como without 21 real WebP photos');
assert.equal(all.filter(x=>x.visuallyVerified===true).length,21,'Cannot finish Lake Como with unreviewed photographs');
assert.equal(all.filter(x=>x.commercialRightsCleared===true).length,21,'Every photo needs operator rights review');
assert(all.every(x=>x.visualReviewBasis?.length>45 && x.ownerRightsAuthorization?.length>55),
  'Missing individual visual / operator rights review trail');
const hashes=new Set(),urls=new Set(),vis=[];
for(const x of all){
 assert(['missing','candidate_needs_visual_review'].includes(x.status));
 if(!x.localPath){assert(!x.visuallyVerified);continue;}
 assert(x.localPath.startsWith('/images/travel/lake-como-premium/'));
 assert(x.downloadUrl?.startsWith('https://')&&x.sourcePage?.startsWith('https://')&&x.credit?.length>=5);
 assert(/^[a-f0-9]{64}$/i.test(x.sha256||'')&&/^[01]{64}$/.test(x.dhash||''));
 assert(existsSync('public'+x.localPath)&&statSync('public'+x.localPath).size>20000);
 assert(!urls.has(x.downloadUrl.split('?')[0])&&!hashes.has(x.sha256),'Duplicate original '+x.key);
 urls.add(x.downloadUrl.split('?')[0]);hashes.add(x.sha256);
 for(const previous of vis)assert([...x.dhash].filter((bit,i)=>bit!==previous[i]).length>5,'Near-duplicate '+x.key);
 vis.push(x.dhash);
 if(x.visuallyVerified){assert(x.commercialRightsCleared===true&&!x.visualQaWarning&&x.frCaption?.length>35&&x.enCaption?.length>35);}
 else assert(x.commercialRightsCleared===false&&Boolean(x.visualQaWarning));
}
assert(!m.approvedForCommercialPublication && !m.visuallyVerified);
assert(page.includes("const isLakeComo") && page.includes("confirmedLakeComoAssets"));
assert(read('data/travel/lakeComoPremiumEditorial.ts').includes("confirmedLakeComoAssets"));
assert(read('components/travel/FeaturedCityGuide.tsx').includes("lakeComoDraftFaq"));
console.log(JSON.stringify({status:'LAKE_COMO_QA_PASSED',hotels:4,areas:5,faqFr:7,faqEn:7,photoSlots:21,
 sourced:all.filter(x=>x.localPath).length,approved:all.filter(x=>x.visuallyVerified).length,noindex:true},null,2));
