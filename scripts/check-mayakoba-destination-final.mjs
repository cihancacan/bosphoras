import assert from 'node:assert/strict';
import {readFileSync,existsSync,statSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8');
const catalogue=read('data/travel/destinations.ts');
const geographic=[...catalogue.matchAll(/slug:\s*["']([^"']+)["']/g)].map(x=>x[1]);
assert.equal(geographic.length,88,'Preserve original 88 geographic destinations');
assert.equal(new Set(geographic).size,88);
assert(geographic.includes('mayakoba'));
assert(catalogue.includes('approvedDestinationSlugs: ReadonlySet<string> = new Set([])'),'Do not publish/index private editorial');
const registry=read('data/travel/featuredCityGuides.ts');
const union=registry.match(/export type FeaturedCitySlug\s*=\s*([\s\S]*?);/)?.[1]||'';
const featured=[...union.matchAll(/'([^']+)'/g)].map(x=>x[1]);
assert.equal(featured.length,59,'Mayakoba is premium #59');
assert.equal(new Set(featured).size,59);
for(const term of ["'mayakoba': mayakobaGuide","'los-angeles': losAngelesGuide","'miami': miamiGuide","'new-york': newYorkGuide",'istanbul: istanbulGuide'])assert(registry.includes(term),'Feature not preserved '+term);
const guide=read('data/travel/mayakobaDraftGuide.ts');
for(const name of ['Rosewood Mayakoba','Banyan Tree Mayakoba','Fairmont Mayakoba','Alila Mayakoba'])assert(guide.includes('"name": "'+name+'"'),name);
assert(guide.includes('"secondary": "scene-7"')&&guide.includes('"hero": "scene-1"'));
for(const setting of ['Lagunes et canaux de Mayakoba','Plages et horizon caraïbe','Sentiers de mangrove et forêt','El Pueblito et traditions locales','El Camaleón et les grands espaces'])assert(guide.includes(setting),'Missing setting '+setting);
assert(guide.includes('février 2026')&&guide.includes('February 2026'),'Alila 2026 rebranding dates');
const faq=read('data/travel/mayakobaDraftFaq.ts');
assert.equal((faq.match(/"q":/g)||[]).length,16,'Eight FR and eight EN Mayakoba FAQ');
const manifest=JSON.parse(read('data/travel/mayakobaMediaCandidates.json'));
assert.equal(manifest.destination,'mayakoba');
assert.equal(manifest.destinationScenes.length,9,'Nine distinct authentic Mayakoba destination photos');
assert.equal(manifest.hotels.length,12,'Three operator-attributed photo per hotel');
const files=new Set(),sha=new Set(),pixels=new Set(),sourceOriginals=new Set();
for(const p of [...manifest.destinationScenes,...manifest.hotels]){
 assert(p.localPath?.startsWith('/images/travel/mayakoba-premium/'));
 assert(p.sourcePage?.startsWith('https://mayakoba.com/') || p.sourcePage?.startsWith('https://www.banyantree.com/mexico/mayakoba') || p.sourcePage?.startsWith('https://www.fairmont-mayakoba.com/'),'Named hotel official source page only');
 assert(p.downloadUrl?.startsWith('https://'));
 assert(p.sha256?.length===64&&(p.bytes||0)>18000);
 assert(p.credit&&p.frCaption&&p.enCaption);
 assert.equal(p.commercialRightsCleared,false,'Mayakoba publisher images have no independent commercial-use licence');
 assert(p.license?.includes('NOT cleared')||p.license?.includes('NOT')||p.license?.includes('not'),'Rights status missing');
 assert(!files.has(p.localPath),'Repeated file path');files.add(p.localPath);
 const url=new URL(p.downloadUrl);
 if(url.hostname==='mayakoba.com'||url.hostname==='www.mayakoba.com'){
  const canonical=url.pathname.toLowerCase().replace(/-\d{2,4}x\d{2,4}(?=\.)/,'').replace(/\.(?:webp|jpe?g|png)$/,'');
  assert(!sourceOriginals.has(canonical),'Same original publisher photo repeated in different formats: '+canonical);
  sourceOriginals.add(canonical);
 }
 assert(!sha.has(p.sha256),'Identical photo file SHA reused');sha.add(p.sha256);
 assert(!pixels.has(p.pixelFingerprint),'Identical resized photo pixels reused');pixels.add(p.pixelFingerprint);
 assert(existsSync('public'+p.localPath),'Image WebP missing '+p.localPath);
 assert.equal(statSync('public'+p.localPath).size,p.bytes,'Image size mismatch '+p.localPath);
}
for(let i=1;i<=9;i++)assert(manifest.destinationScenes.find(p=>p.key==='scene-'+i),'Missing scene '+i);
for(const p of manifest.destinationScenes)assert.equal(p.rightsEvidenceType,'official_destination_publisher_not_commercially_cleared');
for(const id of ['rosewood','banyan-tree','fairmont','alila']){
 const p=manifest.hotels.filter(x=>x.propertyKey===id);
 assert.equal(p.length,3,'Three named property images missing '+id);
 for(const item of p){
  const expected=id==='banyan-tree'?'https://www.banyantree.com/mexico/mayakoba'
   :id==='fairmont'?'https://www.fairmont-mayakoba.com/'
   :'https://mayakoba.com/hotels-overview/'+id+'-mayakoba/';
  assert(item.sourcePage.startsWith(expected),'Hotel imagery cannot be swapped for '+id);
  assert.equal(item.rightsEvidenceType,'official_hotel_destination_publisher_not_commercially_cleared');
 }
}
const ui=read('components/travel/FeaturedCityGuide.tsx');
for(const t of ['mayakobaHotelEditorial','mayakobaAreaVisuals','confirmedMayakobaPreviewAssets','mayakobaDraftFaq','id="panoramas-mayakoba"',"'scene-9'","city.slug==='mayakoba'||city.slug==='los-angeles'","city.slug === 'mayakoba'||city.slug === 'los-angeles'"])assert(ui.includes(t),'UI component missing '+t);
const seo=read('components/travel/TravelPages.tsx');
for(const t of ['isMayakobaDestination','mayakobaDraftFaq','mayakobaSchemaSafePhotos','Mayakoba : 4 hôtels de luxe','Mayakoba: 4 Luxury Resorts'])assert(seo.includes(t),'Mayakoba SEO missing '+t);
assert(read('data/travel/mayakobaPremiumEditorial.ts').includes('mayakobaSchemaSafePhotos=new Set<string>()'),'Do not publish publisher photos in public schema');
console.log('MAYAKOBA_PASSED: 59 premium guides, 88 geographic slugs, 9+12 distinct operator photos, noindex, 16 bilingual FAQs, real 2026 Alila brand.');
