import assert from 'node:assert/strict';
import {readFileSync,existsSync,statSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8');
const catalogue=read('data/travel/destinations.ts');
const geos=[...catalogue.matchAll(/slug:\s*["']([^"']+)["']/g)].map(m=>m[1]);
assert.equal(geos.length,88,'88 original geographical destinations preserved');
assert.equal(new Set(geos).size,88,'No geo duplication');
for(const s of ['los-angeles','miami','new-york','istanbul'])assert(geos.includes(s));
assert(catalogue.includes('approvedDestinationSlugs: ReadonlySet<string> = new Set([])'),'Never index private guide');

const featured=read('data/travel/featuredCityGuides.ts');
const union=featured.match(/export type FeaturedCitySlug\s*=\s*([\s\S]*?);/)?.[1]||'';
const slugs=[...union.matchAll(/'([^']+)'/g)].map(x=>x[1]);
assert.equal(slugs.length,58,'LA must be featured guide #58');
assert.equal(new Set(slugs).size,58,'Premium city slugs unique');
for(const s of ["'los-angeles': losAngelesGuide","'miami': miamiGuide","'new-york': newYorkGuide","istanbul: istanbulGuide"])assert(featured.includes(s),s);

const guide=read('data/travel/losAngelesDraftGuide.ts');
for(const hotel of ['Hotel Bel-Air','The Beverly Hills Hotel','Sunset Tower Hotel','Shutters on the Beach'])assert(guide.includes('"name": "'+hotel+'"'),'Missing LA hotel '+hotel);
for(const area of ['Bel-Air & Brentwood','Beverly Hills & Rodeo Drive','West Hollywood & Sunset Strip','Santa Monica & Pacific Coast','Hollywood Hills & Griffith Park'])assert(guide.includes(area),'Missing real LA area '+area);
assert(guide.includes('"hero": "scene-1"') && guide.includes('"secondary": "scene-7"'),'Hero and secondary must be distinct');
assert((guide.match(/"frWatch":/g)||[]).length>=9,'Missing LA neighbourhood and property safeguards');
const faq=read('data/travel/losAngelesDraftFaq.ts');
assert.equal((faq.match(/"q":/g)||[]).length,16,'Eight FR and eight EN FAQs required');
const manifest=JSON.parse(read('data/travel/losAngelesMediaCandidates.json'));
assert.equal(manifest.destination,'los-angeles');
assert.equal(manifest.destinationScenes.length,9,'Nine authentic LA destination scenes required');
assert.equal(manifest.hotels.length,12,'Three sourced photos per four actual LA hotels required');
const keys=new Set(),paths=new Set(),hashes=new Set();
for(const p of [...manifest.destinationScenes,...manifest.hotels]){
 assert(p.localPath.startsWith('/images/travel/los-angeles-premium/'),'No reused different-city asset '+p.localPath);
 assert(p.sourcePage.startsWith('https://') && p.downloadUrl.startsWith('https://'),'Photo source missing');
 assert(p.frCaption && p.enCaption && p.credit,'No anonymous photo');
 assert(p.sha256?.length===64 && p.bytes>18000,'Invalid source photo metadata');
 assert(!paths.has(p.localPath),'Same photo path twice');paths.add(p.localPath);
 assert(!hashes.has(p.sha256),'Identical media duplicated');hashes.add(p.sha256);
 assert(existsSync('public'+p.localPath),'Local WebP not found '+p.localPath);
 assert.equal(statSync('public'+p.localPath).size,p.bytes,'WebP hash manifest size mismatch');
}
for(let i=1;i<=9;i++)assert(manifest.destinationScenes.some(x=>x.key==='scene-'+i),'Missing LA scene '+i);
for(const c of manifest.destinationScenes){
 assert(c.sourcePage.startsWith('https://commons.wikimedia.org/wiki/File:'));
 assert(c.rightsEvidenceType==='wikimedia_cc_attribution' && c.commercialRightsCleared===true);
 assert(c.license.startsWith('CC BY')||c.license==='CC0'||c.license==='Public domain');
}
for(const id of ['bel-air','beverly-hills','sunset-tower','shutters']){
 const pics=manifest.hotels.filter(x=>x.propertyKey===id);
 assert.equal(pics.length,3,'Three distinct property pictures needed for '+id);
 for(const p of pics) {
  assert.equal(p.commercialRightsCleared,false,'Publisher photo commercial reuse not granted');
  assert.equal(p.rightsEvidenceType,'operator_publisher_not_commercially_cleared');
 }
}
const ui=read('components/travel/FeaturedCityGuide.tsx');
for(const token of ['losAngelesHotelEditorial','losAngelesAreaVisuals','confirmedLosAngelesPreviewAssets',
 'losAngelesDraftFaq','id="panoramas-los-angeles"',"'scene-8'","key:'scene-9'",
 "city.slug==='los-angeles'||city.slug==='miami'",
 "city.slug === 'los-angeles'||city.slug === 'miami'"])
 assert(ui.includes(token),'Missing LA page element '+token);
const seo=read('components/travel/TravelPages.tsx');
for(const token of ['isLosAngelesDestination','losAngelesDraftFaq','losAngelesSchemaSafePhotos','Los Angeles : 4 hôtels de luxe','Los Angeles: 4 Luxury Hotels','robots: { index: ready'])
 assert(seo.includes(token),'Missing LA SEO safeguard '+token);
assert(read('data/travel/losAngelesGuide.ts').includes('approvedLACityPhoto'));
assert(read('data/travel/losAngelesPremiumEditorial.ts').includes('commercialRightsCleared!==true'));
console.log('LOS_ANGELES_PASSED: 58 premium guides, 88 geographic slugs, 9 CC city scenes, 12 source-labelled hotel images, 16 FR/EN FAQ, noindex and safe JSON-LD.');
