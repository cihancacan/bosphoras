import assert from 'node:assert/strict';
import {readFileSync,existsSync,statSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8');
const catalogue=read('data/travel/destinations.ts');
const slugs=[...catalogue.matchAll(/slug:\s*["']([^"']+)["']/g)].map(x=>x[1]);
assert.equal(slugs.length,88,'Preserve original 88 geographic destination slugs');
assert.equal(new Set(slugs).size,88);
for(const slug of ['miami','new-york','istanbul','los-angeles']) assert(slugs.includes(slug));
assert(catalogue.includes('approvedDestinationSlugs: ReadonlySet<string> = new Set([])'),'No public indexing approval');

const regs=read('data/travel/featuredCityGuides.ts');
const union=regs.match(/export type FeaturedCitySlug\s*=\s*([\s\S]*?);/)?.[1]||'';
const featured=[...union.matchAll(/'([^']+)'/g)].map(x=>x[1]);
assert(featured.length>=57,'Miami and the preceding premium destinations remain registered');
assert.equal(new Set(featured).size,featured.length,'All premium featured slugs remain unique');
assert(regs.includes("'miami': miamiGuide")||regs.includes("miami: miamiGuide"),'Missing Miami featured registry');
assert(regs.includes("'new-york': newYorkGuide"),'New York must remain featured');
assert(regs.includes('istanbul: istanbulGuide'),'Istanbul must remain featured');

const draft=read('data/travel/miamiDraftGuide.ts');
for(const name of ['The Setai, Miami Beach','Faena Hotel Miami Beach','The Miami Beach EDITION','Four Seasons Hotel at The Surf Club'])assert(draft.includes(name),'Hotel missing: '+name);
assert(draft.includes('"hero": "scene-1"') && draft.includes('"secondary": "scene-7"'),'Miami experience skyline image should differ from hero');
for(const key of ['South Beach','Mid-Beach','Surfside','Brickell','Wynwood'])assert(draft.includes(key),'City area missing: '+key);
const faq=read('data/travel/miamiDraftFaq.ts');
assert.equal((faq.match(/"q":/g)||[]).length,16,'8 authentic FR/EN FAQ questions required');
const data=JSON.parse(read('data/travel/miamiMediaCandidates.json'));
assert.equal(data.destination,'miami');
assert.equal(data.destinationScenes.length,9,'9 sourced Miami landscapes required');
assert.equal(data.hotels.length,12,'4 hotels x 3 verified source-labelled photos required');
const photos=[...data.destinationScenes,...data.hotels];
const uniquePaths=new Set(),hashes=new Set();
for(const photo of photos){
 assert(photo.localPath?.startsWith('/images/travel/miami-premium/'),'Wrong city file: '+photo.localPath);
 assert(photo.sourcePage?.startsWith('https://'),'Missing source page');
 assert(photo.downloadUrl?.startsWith('https://'),'Missing individual photo source URL');
 assert(photo.sha256?.length===64);
 assert((photo.bytes||0)>16000,'Possible placeholder');
 assert(photo.frCaption&&photo.enCaption&&photo.credit,'Missing bilingual captions/credits');
 assert(!uniquePaths.has(photo.localPath),'Duplicate image path '+photo.localPath);
 uniquePaths.add(photo.localPath);
 assert(!hashes.has(photo.sha256),'Duplicate actual photo pixels/hash '+photo.localPath);
 hashes.add(photo.sha256);
 assert(existsSync('public'+photo.localPath),'Missing local WebP '+photo.localPath);
 assert.equal(statSync('public'+photo.localPath).size,photo.bytes,'Local WebP integrity mismatch '+photo.localPath);
}
const cityKeys=new Set(data.destinationScenes.map(x=>x.key));
for(let i=1;i<=9;i++)assert(cityKeys.has('scene-'+i),'Missing Miami photograph scene-'+i);
for(const p of data.destinationScenes){
 assert.equal(p.commercialRightsCleared,true);
 assert.equal(p.rightsEvidenceType,'wikimedia_cc_attribution');
 assert(p.sourcePage.startsWith('https://commons.wikimedia.org/wiki/File:'));
 assert(p.license.startsWith('CC BY')||p.license==='CC0'||p.license==='Public domain');
}
for(const id of ['setai','faena','edition','surf-club']){
 const subset=data.hotels.filter(x=>x.propertyKey===id);
 assert.equal(subset.length,3,'3 distinct attributable property pictures required for '+id);
 for(const p of subset){
  assert.equal(p.commercialRightsCleared,false,'Never claim publisher photo commercial rights');
  assert.equal(p.rightsEvidenceType,'operator_publisher_not_commercially_cleared');
  assert(p.sourcePage.startsWith('https://'));
 }
}
const ui=read('components/travel/FeaturedCityGuide.tsx');
for(const str of ['miamiHotelEditorial','miamiAreaVisuals','confirmedMiamiPreviewAssets','miamiDraftFaq',
                  'id="panoramas-miami"','city.slug===\'miami\' ? <div className=',
                  "city.slug==='miami'||city.slug==='new-york'||city.slug==='istanbul'",
                  "city.slug === 'miami'||city.slug === 'new-york'"])assert(ui.includes(str),'UI feature missing '+str);
const travel=read('components/travel/TravelPages.tsx');
for(const str of ['isMiamiDestination','miamiDraftFaq','miamiSchemaSafePhotos','Miami : 4 hôtels de luxe',
                  'Miami: 4 Luxury Hotels','robots: { index: ready'])
 assert(travel.includes(str),'SEO/JSON-LD/noindex missing '+str);
assert(!read('data/travel/miamiPremiumEditorial.ts').includes('commercialRightsCleared===true'),'Hotel images cannot falsely assert public licensing');
console.log('MIAMI_PASSED: original Miami and newer curated guides, 88 geographic slugs preserved, 9 unique CC Miami landscapes, 12 source-labelled hotel photos, 8+8 FR/EN FAQs, image provenance/rights gates, metadata and noindex.');
