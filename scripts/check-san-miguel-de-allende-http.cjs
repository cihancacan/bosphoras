/** Run against a local or authenticated Preview base URL. No supplier/API requests. */
const assert=require('node:assert/strict');
const manifest=require('../data/travel/sanMiguelDeAllendeMediaCandidates.json');
const base=new URL(process.argv[2]||'http://localhost:3100');
const at=path=>{const url=new URL(path,base);url.search=base.search;return url;};
(async()=>{
 for(const locale of ['fr','en'])for(const kind of ['destinations','hotels']){
  const path=(locale==='en'?'/en':'')+'/travel/'+kind+'/san-miguel-de-allende';
  const res=await fetch(at(path));assert.equal(res.status,200,path);const html=await res.text();
  assert(new RegExp('<(?:html|div) lang="'+locale+'"').test(html),path+' content language');
  assert(/name="robots" content="noindex/.test(html),path+' must stay noindex');
  assert(html.includes('rel="canonical" href="https://www.bosphoras.com'+path+'"'),path+' canonical');
  assert.equal((html.match(/<h1\b/g)||[]).length,1,path+' one H1');
  const ld=[...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap(m=>{const d=JSON.parse(m[1]);return d['@graph']||[d];});
  const faq=ld.find(x=>x['@type']==='FAQPage');assert.equal(faq?.mainEntity.length,8,path+' JSON-LD FAQ');
  const list=ld.find(x=>x['@type']==='ItemList');assert.equal(list?.numberOfItems,4,path+' editorial hotel count');
  assert(list.itemListElement.every(x=>/^(https:\/\/www\.rosewoodhotels\.com\/en\/san-miguel-de-allende|https:\/\/www\.belmond\.com\/hotels\/north-america\/mexico\/san-miguel-de-allende|https:\/\/hotelmatilda\.com\/|https:\/\/www\.fiestamericanatravelty\.com\/en\/live-aqua\/hotels\/live-aqua-san-miguel-de-allende)/.test(x.url)));
  const article=ld.find(x=>x['@type']==='Article');assert(article?.headline.includes('San Miguel de Allende'));assert(!article.image,'Publisher hero not licensed for structured data');
  assert(!JSON.stringify(ld).includes('Offer'),'No invented price or availability schema');
  for(const h of ['Rosewood San Miguel de Allende','Casa de Sierra Nevada','Hotel Matilda','Live Aqua San Miguel de Allende'])assert(html.includes(h),path+' '+h);
  if(kind==='hotels')assert.equal(new Set([...html.matchAll(/san-miguel-de-allende-premium(?:%2F|\/)(rosewood|belmond|matilda|live-aqua)(?:%2F|\/)view-[123]\.webp/g)].map(m=>m[0])).size,12,path+' twelve hotel photos');
  console.log('HTTP_OK',locale,kind,'200, noindex, canonical, 8 FAQ, 4 hotel ItemList, rights-safe Article');
 }
 for(const p of [...manifest.destinationScenes,...manifest.hotels]){
  const res=await fetch(at(p.localPath));assert.equal(res.status,200,p.localPath);assert(res.headers.get('content-type')?.includes('image/webp'));assert.equal((await res.arrayBuffer()).byteLength,p.bytes);
 }
 console.log('ASSETS_OK: all 21 actual WebPs served with matching file sizes.');
})().catch(e=>{console.error(e);process.exitCode=1;});
