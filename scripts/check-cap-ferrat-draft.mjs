#!/usr/bin/env node
/** Saint-Jean-Cap-Ferrat draft integrity + fail-closed media validation, never a publication gate. */
import assert from 'node:assert/strict';
import {readFileSync,statSync,existsSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8');
function tsJson(path,constant){
 const s=read(path),needle='export const '+constant+' = ',pos=s.indexOf(needle);
 assert(pos>=0,'Missing '+constant);
 const tail=s.slice(pos+needle.length).trim();
 assert(tail.endsWith('as const;'),'Expected TS JSON object for '+constant);
 return JSON.parse(tail.slice(0,-'as const;'.length).trim());
}
const guide=tsJson('data/travel/saintJeanCapFerratDraftGuide.ts','saintJeanCapFerratDraftGuide');
const faq=tsJson('data/travel/saintJeanCapFerratDraftFaq.ts','saintJeanCapFerratDraftFaq');
const media=JSON.parse(read('data/travel/saintJeanCapFerratMediaCandidates.json'));
const registry=read('data/travel/featuredCityGuides.ts');
const catalogue=read('data/travel/destinations.ts');
const component=read('components/travel/FeaturedCityGuide.tsx');
const schema=read('components/travel/TravelPages.tsx');
assert.equal(guide.slug,'saint-jean-cap-ferrat');
assert.equal(guide.country,'France');
assert.equal(guide.hotels.length,4);
assert.equal(new Set(guide.hotels.map(h=>h.name)).size,4);
assert(guide.hotels.some(h=>h.name.includes('Four Seasons')));
assert(guide.hotels.some(h=>h.name.includes('Brise Marine')),'Include actual three-star local hotel, do not invent four palaces');
for(const hotel of guide.hotels){
 assert(hotel.officialUrl.startsWith('https://'),'Hotel official source missing');
 assert(hotel.fr.length>=350 && hotel.en.length>=350);
 assert(hotel.frWatch.length>=80 && hotel.enWatch.length>=80);
}
assert.equal(guide.areas.length,5);
assert.equal(new Set(guide.areas.map(a=>a.name)).size,5);
assert(guide.experiences.length>=5);
for(const suffix of ['Fr','En']){
 assert(guide['intro'+suffix].length>=250);
 assert(guide['editorial'+suffix].length>=600);
}
for(const language of ['fr','en']){
 assert.equal(faq[language].length,7);
 assert(faq[language].every(x=>x.q.length>=20&&x.a.length>=85));
}
assert.equal(media.destination,guide.slug);
assert.equal(media.hotels.length,12);
assert.equal(media.destinationScenes.length,9);
assert.equal(media.approvedForCommercialPublication,false);
assert.equal(media.visuallyVerified,false);
assert(registry.includes("'saint-jean-cap-ferrat': saintJeanCapFerratGuide"));
assert(catalogue.includes('slug: "saint-jean-cap-ferrat"'));
assert(catalogue.includes('approvedDestinationSlugs: ReadonlySet<string> = new Set([])'));
assert(component.includes('confirmedCapFerratAssets.has(photo.src)'));
assert(component.includes('capFerratAreaVisuals'));
assert(component.includes('saintJeanCapFerratDraftFaq'));
assert(schema.includes('isCapFerrat?saintJeanCapFerratDraftFaq'));
assert(schema.includes('confirmedCapFerratAssets'));
assert(schema.includes("robots: { index: ready"));
const all=media.hotels.concat(media.destinationScenes);
// Acquisition-complete safety gate for all 21 Cap Ferrat sources.
// Validation of source metadata is not permission to publish: visual approval
// remains per image, and all draft pages must continue noindex.
assert.equal(all.length,21);
assert(all.every(x=>x.status==='candidate_needs_visual_review'),'Cap Ferrat 21/21 sourced candidates required');
const sourceHashes=new Set();
const perceptualHashes=[];
for(const x of all){
 assert(x.localPath?.startsWith('/images/travel/saint-jean-cap-ferrat-premium/'),'Source local path missing '+x.key);
 assert(x.sourcePage?.startsWith('https://'),'Source page missing '+x.key);
 assert(x.downloadUrl?.startsWith('https://'),'Source image URL missing '+x.key);
 assert(x.credit?.trim().length>=5,'Photographic attribution missing '+x.key);
 assert(/^[a-f0-9]{64}$/i.test(x.sha256||''),'SHA-256 invalid '+x.key);
 assert(/^[01]{64}$/.test(x.dhash||''),'Perceptual hash invalid '+x.key);
 const path='public'+x.localPath;
 assert(existsSync(path)&&statSync(path).size>20000,'Missing downloaded WebP '+path);
 assert(!sourceHashes.has(x.sha256),'Duplicate Cap Ferrat file '+x.key);
 sourceHashes.add(x.sha256);
 for(const previous of perceptualHashes){
  assert([...x.dhash].filter((bit,i)=>bit!==previous[i]).length>5,
   'Perceptual near-duplicate in Cap Ferrat source photos '+x.key);
 }
 perceptualHashes.push(x.dhash);
 if(!x.visuallyVerified){
  assert(x.commercialRightsCleared===false && Boolean(x.visualQaWarning),
   'Unreviewed photo cannot be published '+x.key);
 }
}
for(const x of all)if(x.visuallyVerified){
 assert.equal(x.commercialRightsCleared,true);
 assert.equal(x.status,'candidate_needs_visual_review');
 assert(!x.visualQaWarning);
 assert(x.sourcePage?.startsWith('https://'));
 assert(x.localPath?.startsWith('/images/travel/saint-jean-cap-ferrat-premium/'));
 assert(x.frCaption?.length>30&&x.enCaption?.length>30,'Exact FR EN alt text required');
 const p='public'+x.localPath;
 assert(existsSync(p) && statSync(p).size>20000,'Missing approved image '+p);
}
// Approved images must be truly sourced, independently identifiable and non-duplicate.
const approved=all.filter(x=>x.visuallyVerified);
for(const x of approved){
 assert(/^[a-f0-9]{64}$/i.test(x.sha256||''),'Missing photograph SHA-256 '+x.key);
 assert(/^[01]{64}$/.test(x.dhash||''),'Missing 64-bit visual fingerprint '+x.key);
 assert(x.downloadUrl?.startsWith('https://'),'Missing original photographic URL '+x.key);
 assert(x.credit?.trim().length>=6,'Missing photographic source credit '+x.key);
}
for(let i=0;i<approved.length;i++)for(let j=i+1;j<approved.length;j++){
 const hamming=[...approved[i].dhash].filter((bit,k)=>bit!==approved[j].dhash[k]).length;
 assert(hamming>5,'Near-duplicate approved Cap-Ferrat photos '+approved[i].key+'/'+approved[j].key);
}
const urls=all.filter(x=>x.downloadUrl).map(x=>x.downloadUrl.split('?')[0]);
assert.equal(urls.length,new Set(urls).size,'Duplicate original photo sources');
console.log(JSON.stringify({status:'QA_CHECKS_PASSED',hotelProfiles:guide.hotels.length,
 areas:guide.areas.length,faqFr:faq.fr.length,faqEn:faq.en.length,
 approvedHotelPhotos:media.hotels.filter(x=>x.visuallyVerified).length,
 approvedDestinationPhotos:media.destinationScenes.filter(x=>x.visuallyVerified).length,
 missingPhotos:all.filter(x=>!x.visuallyVerified).length,
 noindex:true,readyForVisualPreview:all.every(x=>x.visuallyVerified)},null,2));
