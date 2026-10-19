#!/usr/bin/env node
/** Monaco bilingual content and source-image QA; does NOT assert deployment readiness. */
import assert from 'node:assert/strict';
import {readFileSync,existsSync,statSync} from 'node:fs';
const read=(p)=>readFileSync(p,'utf8');
function tsJson(path,key){
 const s=read(path),a=s.indexOf('export const '+key+' = ');
 assert(a>=0,'Missing '+key);
 const str=s.slice(a+('export const '+key+' = ').length).trim();
 assert(str.endsWith('as const;'),'Bad TS JSON object '+path);
 return JSON.parse(str.slice(0,-'as const;'.length).trim());
}
const guide=tsJson('data/travel/monacoDraftGuide.ts','monacoDraftGuide');
const faq=tsJson('data/travel/monacoDraftFaq.ts','monacoDraftFaq');
const media=JSON.parse(read('data/travel/monacoMediaCandidates.json'));
const code=read('components/travel/FeaturedCityGuide.tsx');
const schema=read('components/travel/TravelPages.tsx');
const registry=read('data/travel/featuredCityGuides.ts');
const catalogue=read('data/travel/destinations.ts');
assert.equal(guide.slug,'monaco');
assert.equal(guide.country,'Monaco');
assert.equal(guide.hotels.length,4);
assert.equal(new Set(guide.hotels.map(h=>h.name)).size,4);
assert.equal(guide.areas.length,5);
assert.equal(new Set(guide.areas.map(x=>x.name)).size,5);
assert(guide.experiences.length>=5);
for (const h of guide.hotels) {
 assert(h.officialUrl.startsWith('https://'));
 assert(h.fr.length>=300 && h.en.length>=300);
 assert(h.frWatch.length>=70 && h.enWatch.length>=70);
}
for (const lang of ['fr','en']){
 const S=lang==='fr'?'Fr':'En';
 assert(guide['intro'+S].length>=250);
 assert(guide['editorial'+S].length>=350);
 assert.equal(faq[lang].length,7);
 assert(faq[lang].every(x=>x.q.length>=25 && x.a.length>=95));
}
assert.equal(media.destination,'monaco');
assert.equal(media.hotels.length,12);
assert.equal(media.destinationScenes.length,9);
assert.equal(media.expectedHotelPhotos,12);
assert.equal(media.expectedDestinationPhotos,9);
assert.equal(media.approvedForCommercialPublication,false);
assert.equal(media.visuallyVerified,false);
assert(registry.includes("'monaco': monacoGuide"));
assert(registry.includes("| 'monaco';"));
assert(catalogue.includes('slug: "monaco"'));
assert(catalogue.includes('approvedDestinationSlugs: ReadonlySet<string> = new Set([])'));
assert(code.includes('confirmedMonacoAssets.has(photo.src)'));
assert(code.includes('monacoAreaVisuals'));
assert(code.includes('monacoDraftFaq'));
assert(schema.includes('isMonaco?monacoDraftFaq'));
assert(schema.includes('confirmedMonacoAssets'));
assert(schema.includes("robots: { index: ready"));
const all=[...media.hotels,...media.destinationScenes];
const approved=all.filter(x=>x.visuallyVerified===true);
for(const x of approved){
 assert.equal(x.commercialRightsCleared,true);
 assert(!x.visualQaWarning);
 assert(x.sourcePage?.startsWith('https://'));
 assert(x.localPath?.startsWith('/images/travel/monaco-premium/'));
 assert(x.frCaption?.length>=35 && x.enCaption?.length>=35);
 const file='public'+x.localPath;
 assert(existsSync(file) && statSync(file).size>=20000,'Missing approved Monaco photo '+file);
}
const candidates=all.filter(x=>x.status==='candidate_needs_visual_review');
for(const x of all)if(x.status==='missing')assert(!x.visuallyVerified);
// Release-quality photo gate: all four hotels and all nine landscapes are truly reviewed.
assert.equal(approved.length,21,'Monaco cannot be declared finished with fewer than 21 approved photographs');
assert.equal(media.hotels.filter(x=>x.visuallyVerified).length,12,'Each of four hotels requires three approved frames');
assert.equal(media.destinationScenes.filter(x=>x.visuallyVerified).length,9,'All nine Monaco local scenes need visual approval');
assert.equal(new Set(approved.map(x=>x.localPath)).size,21,'Repeated local photo path');
assert.equal(new Set(approved.map(x=>x.sha256)).size,21,'Same image bytes used more than once');
assert.equal(new Set(approved.map(x=>x.dhash)).size,21,'Duplicate perceptual image hash');
for(const x of approved){
 assert.match(x.sha256||'',/^[a-f0-9]{64}$/,'Missing SHA256 for '+x.localPath);
 assert.match(x.dhash||'',/^[01]{64}$/,'Missing perceptual hash for '+x.localPath);
 assert(x.visualReviewBasis?.length>=30,'Individual visual review missing for '+x.localPath);
 assert(x.ownerRightsAuthorization?.length>=25,'Owner confirmation not recorded for '+x.localPath);
 assert(x.downloadUrl?.startsWith('https://'),'Original source URL missing');
 assert(x.credit?.length>=8,'Photo source credit missing');
 assert(x.originalSize?.length===2 && x.outputSize?.length===2,'Image dimensions missing');
}
const hamming=(a,b)=>[...a].reduce((sum,c,i)=>sum+(c!==b[i]),0);
for(let i=0;i<approved.length;i++)for(let j=i+1;j<approved.length;j++)
 assert(hamming(approved[i].dhash,approved[j].dhash)>=8,
  'Near-duplicate photographic composition detected: '+approved[i].localPath+' & '+approved[j].localPath);
const originalUrls=all.filter(x=>x.downloadUrl).map(x=>x.downloadUrl.split('?')[0]);
assert.equal(originalUrls.length,new Set(originalUrls).size,'Exact duplicate Monaco photo source URL');
console.log(JSON.stringify({checks:'PASS',hotels:guide.hotels.length,areas:guide.areas.length,
 experiences:guide.experiences.length,faqFr:faq.fr.length,faqEn:faq.en.length,
 approvedPhotos:approved.length,hotelApproved:media.hotels.filter(x=>x.visuallyVerified).length,
 sceneApproved:media.destinationScenes.filter(x=>x.visuallyVerified).length,
 candidatePhotos:candidates.length,totalRequired:21,
 protectedNoindex:true,readyToPublish:approved.length===21},null,2));
