#!/usr/bin/env node
/** Cap d'Antibes fail-closed bilingual editorial QA, not a Vercel build. */
import assert from 'node:assert/strict';
import {readFileSync,statSync,existsSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8');
function obj(path,name){
 const s=read(path),start=s.indexOf('export const '+name+' = ');
 assert(start>=0,'Missing export '+name);
 const val=s.slice(start+('export const '+name+' = ').length).trim();
 assert(val.endsWith('as const;'),'Not a TS JSON literal '+name);
 return JSON.parse(val.slice(0,-'as const;'.length).trim());
}
const guide=obj('data/travel/capDAntibesDraftGuide.ts','capDAntibesDraftGuide');
const faq=obj('data/travel/capDAntibesDraftFaq.ts','capDAntibesDraftFaq');
const media=JSON.parse(read('data/travel/capDAntibesMediaCandidates.json'));
const registry=read('data/travel/featuredCityGuides.ts');
const catalogue=read('data/travel/destinations.ts');
const view=read('components/travel/FeaturedCityGuide.tsx');
const pages=read('components/travel/TravelPages.tsx');
assert.equal(guide.slug,'cap-dantibes');assert.equal(guide.country,'France');
assert.equal(guide.hotels.length,4);assert.equal(guide.areas.length,5);
assert.equal(new Set(guide.hotels.map(x=>x.officialUrl)).size,4);
assert.equal(guide.experiences.length,5);
assert(guide.hotels.some(x=>x.name.includes('Eden-Roc')));
assert(guide.hotels.some(x=>x.name.includes('Villa Miraé')));
for(const k of ['introFr','introEn'])assert(guide[k].length>300,'Short '+k);
for(const k of ['editorialFr','editorialEn'])assert(guide[k].length>750,'Short '+k);
for(const hotel of guide.hotels){
 assert(hotel.fr.length>=350 && hotel.en.length>=350,'Thin hotel '+hotel.name);
 assert(hotel.frWatch.length>85 && hotel.enWatch.length>85);
 assert(hotel.officialUrl.startsWith('https://'));
}
assert(guide.editorialFr.includes('mai 2027')&&guide.editorialEn.includes('May 2027'));
for(const lang of ['fr','en']){
 assert.equal(faq[lang].length,7);
 assert(faq[lang].every(x=>x.q.length>22&&x.a.length>120),'Thin '+lang+' FAQ');
}
assert(media.destination===guide.slug);
assert.equal(media.hotels.length,12);assert.equal(media.destinationScenes.length,9);
assert.equal(media.approvedForCommercialPublication,false);
assert.equal(media.visuallyVerified,false);
assert(catalogue.includes('slug: "cap-dantibes"'));
assert(catalogue.includes('approvedDestinationSlugs: ReadonlySet<string> = new Set([])'));
assert(registry.includes("'cap-dantibes': capDAntibesGuide"));
assert(view.includes('confirmedCapDAntibesAssets'));
assert(pages.includes('confirmedCapDAntibesAssets'));
assert(pages.includes('capDAntibesDraftFaq'));
assert(pages.includes("robots: { index: ready"));
const imgs=media.hotels.concat(media.destinationScenes);
const usedUrl=new Set(),usedSha=new Set(),dhashes=[];
for(const x of imgs){
 assert(['missing','candidate_needs_visual_review'].includes(x.status),'Unexpected slot state');
 if(x.status==='missing'){assert(!x.visuallyVerified,'Missing photo approved');continue;}
 assert(x.localPath?.startsWith('/images/travel/cap-dantibes-premium/'));
 assert(x.sourcePage?.startsWith('https://')&&x.downloadUrl?.startsWith('https://'));
 assert(x.sha256?.match(/^[a-f0-9]{64}$/i)&&x.dhash?.match(/^[01]{64}$/));
 assert(!usedUrl.has(x.downloadUrl.split('?')[0])&&!usedSha.has(x.sha256),'Duplicate source '+x.key);
 usedUrl.add(x.downloadUrl.split('?')[0]);usedSha.add(x.sha256);
 for(const p of dhashes) assert([...p].filter((v,i)=>v!==x.dhash[i]).length>5,'Image crop duplicate '+x.key);
 dhashes.push(x.dhash);
 assert(existsSync('public'+x.localPath)&&statSync('public'+x.localPath).size>20000);
 if(x.visuallyVerified){
  assert(x.commercialRightsCleared===true && !x.visualQaWarning);
  assert(x.frCaption?.length>35&&x.enCaption?.length>35);
 }else assert(!x.commercialRightsCleared && Boolean(x.visualQaWarning),'Unreviewed photo exposed');
}
console.log(JSON.stringify({status:'CAP_DANTIBES_QA_PASSED',hotels:guide.hotels.length,areas:guide.areas.length,
 faqFr:faq.fr.length,faqEn:faq.en.length,photoSlots:imgs.length,
 downloaded:imgs.filter(x=>x.status!=='missing').length,
 approved:imgs.filter(x=>x.visuallyVerified).length,
 noindex:true,previewNotReleased:true},null,2));
