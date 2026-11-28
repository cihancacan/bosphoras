const assert=require('node:assert/strict');
const {travelDestinations}=require('../data/travel/destinations');
const {nativeTravelNames}=require('../data/travel/localizedNames');
const {indexedTravelUrls,isTravelGuideIndexable,editorialTravelLocales}=require('../data/travel/guideIndexation');
const {travelPageMetadata}=require('../components/travel/TravelPages');
const {getLocalizedGuide,reviewedLocalizedGuides}=require('../data/travel/localizedGuides');
const {travelText,travelHref}=require('../lib/travel/i18n');
const root='https://www.bosphoras.com';
const expectedAlternates=(slug,variant)=>Object.fromEntries(editorialTravelLocales.filter(locale=>isTravelGuideIndexable(slug,variant,locale)).map(locale=>[travelText(locale).hreflang,root+travelHref(locale,variant+'/'+slug)]));
assert.equal(Object.keys(nativeTravelNames).length,99);
assert.equal(travelDestinations.length,99);
assert.equal(reviewedLocalizedGuides.size,704);
const urls=indexedTravelUrls(root), known=new Set(urls);
assert.equal(urls.length,known.size);
const titles=new Set();
for(const d of travelDestinations.filter(d=>!['london','las-vegas','rome','barcelona','cancun','orlando','hong-kong','kuala-lumpur','osaka','seoul','madrid'].includes(d.slug))){
 const n=nativeTravelNames[d.slug];assert.ok(n&&/[\u0600-\u06ff]/.test(n.ar)&&/[\u0400-\u052f]/.test(n.ru),d.slug);
 for(const locale of ['fr','en','ru','ar'])for(const variant of ['destinations','hotels']){
  const id=d.slug+'/'+locale+'/'+variant;
  assert.ok(isTravelGuideIndexable(d.slug,variant,locale),id);
  const m=travelPageMetadata(locale,[variant,d.slug]);
  assert.equal(m.robots.index,true,id);assert.ok(known.has(m.alternates.canonical),id);
  assert.ok(typeof m.title==='string'&&m.title.length>0&&typeof m.description==='string'&&m.description.length>0&&m.description.length<=160,id+' complete metadata');
  assert.ok(m.openGraph&&m.twitter,id+' social metadata');
  assert.equal(m.alternates.canonical,root+(locale==='fr'?'':'/'+locale)+'/travel/'+variant+'/'+d.slug,id);
  assert.deepEqual(m.alternates.languages,expectedAlternates(d.slug,variant),id);
  if(locale==='ar'||locale==='ru'){
   const script=locale==='ar'?/[\u0600-\u06ff]/:/[\u0400-\u052f]/;
   assert.ok(script.test(m.title)&&script.test(m.description),id+' metadata language');
   assert.ok(m.description.length<=160&&m.description.length>0&&m.openGraph.images&&m.twitter,id);
   assert.ok(!titles.has(m.title),id+' duplicate title');titles.add(m.title);
   for(const image of m.openGraph.images){const u=new URL(typeof image==='string'?image:image.url);assert.equal(u.protocol,'https:',id);assert.ok(!u.pathname.includes('https://'),id+' malformed image URL');}
   assert.ok(getLocalizedGuide(d.slug,locale),id);
  }
 }
}
for(const locale of ['fr','en','ar','ru'])for(const parts of [[],['destinations'],['hotels']])assert.equal(travelPageMetadata(locale,parts).robots.index,true);
assert.equal(titles.size,352);
assert.equal(urls.filter(u=>/\/travel\/(destinations|hotels)\/[^/]+$/.test(u)).length,1760);
assert.equal(travelPageMetadata('ru',['destinations','nonexistent']).robots.index,false);
for(const locale of ['tr','de','es','it','pt','zh'])for(const d of travelDestinations)for(const variant of ['destinations','hotels']){const m=travelPageMetadata(locale,[variant,d.slug]),ready=reviewedLocalizedGuides.has(d.slug+'/'+locale);assert.equal(m.robots.index,ready,d.slug+'/'+locale+'/'+variant);if(ready){assert.ok(known.has(m.alternates.canonical));assert.deepEqual(m.alternates.languages,expectedAlternates(d.slug,variant));assert.equal(m.alternates.languages[travelText(locale).hreflang],m.alternates.canonical);assert.ok(m.title&&m.description&&m.description.length<=160&&m.openGraph&&m.twitter);}}
const pilot=getLocalizedGuide('istanbul','tr');assert.equal(pilot.areas.length,5);assert.equal(pilot.hotels.length,9);assert.equal(pilot.experiences.length,6);assert.equal(pilot.faq.length,8);
console.log('1760 public guide and hotel routes, including Istanbul, Paris, Dubai, New York, Maldives, Bali, Phuket, Tokyo, Miami, Los Angeles, Bodrum, Antalya, Saint-Tropez, Monaco and Cap d’Antibes and Saint-Jean-Cap-Ferrat and Lake Como, Capri, Positano, Ravello, Mykonos, Antiparos, Ibiza, Formentera, Deià, Port d’Andratx, Comporta, Melides, Tivat, St. Moritz, Aspen, Jackson Hole, Big Sky, the Hamptons, Palm Beach, Nantucket, Harbour Island, Turks and Caicos, Canouan, Los Cabos, Costa Careyes, Mayakoba, San Miguel de Allende, Niseko, Kyoto, Hakone, Singapore, Sentosa, Langkawi, Bangkok, Chiang Mai, Koh Samui, Krabi, Koh Yao Noi, Hoi An, Da Nang, Phu Quoc, Vinh Hy Bay, Siem Reap, Koh Rong, Luang Prabang, Galle, Tangalle, Sumba, Rajasthan, Jaipur, Udaipur, Paro, Punakha, Gangtey, Palawan, Pamalican Island, Laucala Island, Jumby Bay, Okavango Delta, Punta Mita, Necker Island, North Island, Mustique, Porto Cervo, Saint-Barthélemy, Zermatt, Gstaad, Verbier, Val d’Isère, Megève, Courchevel 1850 and Desaru Coast in ten languages: robots, sitemap, reciprocal hreflang, localized metadata and image URLs verified.',urls.length,'travel URLs');

 // Audit every published language and keep unfinished destinations out of the sitemap.
 const auditTitles=new Map(),auditDescriptions=new Map(),auditWarnings=[];
 for(const d of travelDestinations)for(const locale of editorialTravelLocales)for(const variant of ['destinations','hotels']){
   if(!isTravelGuideIndexable(d.slug,variant,locale))continue;
   const id=d.slug+'/'+locale+'/'+variant,m=travelPageMetadata(locale,[variant,d.slug]);
   assert.ok(m.title&&typeof m.title==='string'&&m.description&&typeof m.description==='string',id+' metadata');
   assert.ok(m.description.length<=160,id+' description limit');
   assert.equal(m.alternates.canonical,root+travelHref(locale,variant+'/'+d.slug),id+' canonical');
   assert.equal(m.alternates.languages[travelText(locale).hreflang],m.alternates.canonical,id+' self hreflang');
   for(const [value,seen,field] of [[m.title,auditTitles,'title'],[m.description,auditDescriptions,'description']]){
     const key=locale+'/'+value.trim().toLowerCase();
     if(seen.has(key))auditWarnings.push({field,first:seen.get(key),second:id});
     else seen.set(key,id);
   }
 }
 for(const [slug,areaCount] of [['london',6],['las-vegas',5],['rome',5],['barcelona',5],['cancun',5],['orlando',6],['hong-kong',6],['kuala-lumpur',6],['osaka',6],['seoul',6],['madrid',6]]){
   for(const locale of ['tr','de','es','it','pt','zh','ru','ar']){
     const d=require('../data/travel/localized/'+slug+'-'+locale+'.json'),id=slug+'/'+locale;
     for(const field of ['name','country','eyebrow','heading','intro','editorial','hotelIntro','seoTitle','hotelSeoTitle','seoDescription'])assert.ok(typeof d[field]==='string'&&d[field].trim(),id+' '+field);
     for(const [field,count,width] of [['areas',areaCount,3],['experiences',4,2],['hotels',4,5],['faq',7,2]]){
       assert.equal(d[field].length,count,id+' '+field);
       assert.ok(d[field].every(row=>row.length===width&&row.every(s=>typeof s==='string'&&s.trim())),id+' '+field+' fields');
     }
     assert.equal(d.checks.length,5,id+' checks');
     assert.ok(d.seoDescription.length<=160,id+' description limit');
     const script={ru:/[\u0400-\u052f]/,ar:/[\u0600-\u06ff]/,zh:/[\u3400-\u9fff]/}[locale];
     if(script)for(const field of ['heading','editorial','seoTitle','hotelSeoTitle','seoDescription'])assert.ok(script.test(d[field]),id+' '+field+' language');
     for(const variant of ['destinations','hotels'])assert.ok(!known.has(root+travelHref(locale,variant+'/'+slug)),id+' draft must remain out of sitemap');
   }
 }
 console.log('All-language metadata audit:',auditTitles.size,'unique language/title pairs;',auditDescriptions.size,'unique language/description pairs;',auditWarnings.length,'duplicate metadata warnings.');
 if(auditWarnings.length)console.warn(JSON.stringify(auditWarnings.slice(0,30)));
 console.log('Destinations 89–99: 88 localized draft files checked; publication gate maintained.');

// London preview: all images and ten-language captions exist, but no search index release yet.
const londonMedia=require('../data/travel/londonReviewedMedia.json');const londonCaptions=require('../data/travel/localized/london-photo-captions-draft.json');
const fs=require('node:fs'),crypto=require('node:crypto');
assert.equal(londonMedia.destinationScenes.length,9);assert.equal(londonMedia.hotels.length,12);const seenLondon=new Set();
for(const p of [...londonMedia.destinationScenes,...londonMedia.hotels]){assert.ok(p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved&&p.credit&&p.licenseUrl);const b=fs.readFileSync('public'+p.localPath);assert.equal(b.toString('ascii',0,4),'RIFF');assert.equal(b.toString('ascii',8,12),'WEBP');assert.equal(crypto.createHash('sha256').update(b).digest('hex'),p.webpSHA256);assert.ok(!seenLondon.has(p.webpSHA256));seenLondon.add(p.webpSHA256);assert.ok(b.length<=260000);}
for(const locale of editorialTravelLocales){assert.equal(Object.keys(londonCaptions.captions[locale]).length,21);for(const variant of ['destinations','hotels']){assert.equal(travelPageMetadata(locale,[variant,'london']).robots.index,false);assert.ok(!known.has(root+travelHref(locale,variant+'/london')));}}
console.log('London preview: 21 WebP hashes, 210 captions and noindex gate verified.');

const vegasMedia=require('../data/travel/lasVegasReviewedMedia.json'),vegasCaptions=require('../data/travel/localized/las-vegas-photo-captions-draft.json');
assert.equal(vegasMedia.destinationScenes.length,9);assert.equal(vegasMedia.hotels.length,12);const seenVegas=new Set();
for(const p of [...vegasMedia.destinationScenes,...vegasMedia.hotels]){assert.ok(p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved&&p.credit&&p.licenseUrl);const b=fs.readFileSync('public'+p.localPath);assert.equal(b.toString('ascii',0,4),'RIFF');assert.equal(b.toString('ascii',8,12),'WEBP');assert.equal(crypto.createHash('sha256').update(b).digest('hex'),p.webpSHA256);assert.ok(!seenVegas.has(p.webpSHA256));seenVegas.add(p.webpSHA256);assert.ok(b.length<=260000);}
for(const locale of editorialTravelLocales){assert.equal(Object.keys(vegasCaptions.captions[locale]).length,21);for(const variant of ['destinations','hotels']){assert.equal(travelPageMetadata(locale,[variant,'las-vegas']).robots.index,false);assert.ok(!known.has(root+travelHref(locale,variant+'/las-vegas')));}}
console.log('Las Vegas preview: 21 WebP hashes, 210 captions and noindex gate verified.');

const romeMedia=require('../data/travel/romeReviewedMedia.json'),romeCaptions=require('../data/travel/localized/rome-photo-captions-draft.json');
assert.equal(romeMedia.destinationScenes.length,9);assert.equal(romeMedia.hotels.length,12);const seenRome=new Set();
for(const p of [...romeMedia.destinationScenes,...romeMedia.hotels]){assert.ok(p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved&&p.credit&&p.licenseUrl);const b=fs.readFileSync('public'+p.localPath);assert.equal(b.toString('ascii',0,4),'RIFF');assert.equal(b.toString('ascii',8,12),'WEBP');assert.equal(crypto.createHash('sha256').update(b).digest('hex'),p.webpSHA256);assert.ok(!seenRome.has(p.webpSHA256));seenRome.add(p.webpSHA256);assert.ok(b.length<=260000);}
for(const locale of editorialTravelLocales){assert.equal(Object.keys(romeCaptions.captions[locale]).length,21);for(const variant of ['destinations','hotels']){assert.equal(travelPageMetadata(locale,[variant,'rome']).robots.index,false);assert.ok(!known.has(root+travelHref(locale,variant+'/rome')));}}
console.log('Rome preview: 21 WebP hashes, 210 captions and noindex gate verified.');

const barcelonaMedia=require('../data/travel/barcelonaReviewedMedia.json'),barcelonaCaptions=require('../data/travel/localized/barcelona-photo-captions-draft.json');
assert.equal(barcelonaMedia.destinationScenes.length,9);assert.equal(barcelonaMedia.hotels.length,12);const seenBarcelona=new Set();
for(const p of [...barcelonaMedia.destinationScenes,...barcelonaMedia.hotels]){assert.ok(p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved&&p.credit&&p.licenseUrl);const b=fs.readFileSync('public'+p.localPath);assert.equal(b.toString('ascii',0,4),'RIFF');assert.equal(b.toString('ascii',8,12),'WEBP');assert.equal(crypto.createHash('sha256').update(b).digest('hex'),p.webpSHA256);assert.ok(!seenBarcelona.has(p.webpSHA256));seenBarcelona.add(p.webpSHA256);assert.ok(b.length<=260000);}
for(const locale of editorialTravelLocales){assert.equal(Object.keys(barcelonaCaptions.captions[locale]).length,21);for(const variant of ['destinations','hotels']){assert.equal(travelPageMetadata(locale,[variant,'barcelona']).robots.index,false);assert.ok(!known.has(root+travelHref(locale,variant+'/barcelona')));}}
console.log('Barcelona preview: 21 WebP hashes, 210 captions and noindex gate verified.');

const cancunMedia=require('../data/travel/cancunReviewedMedia.json'),cancunCaptions=require('../data/travel/localized/cancun-photo-captions-draft.json');
assert.equal(cancunMedia.destinationScenes.length,9);assert.equal(cancunMedia.hotels.length,12);const seenCancun=new Set();
for(const p of [...cancunMedia.destinationScenes,...cancunMedia.hotels]){assert.ok(p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved&&p.credit&&p.licenseUrl);const b=fs.readFileSync('public'+p.localPath);assert.equal(b.toString('ascii',0,4),'RIFF');assert.equal(b.toString('ascii',8,12),'WEBP');assert.equal(crypto.createHash('sha256').update(b).digest('hex'),p.webpSHA256);assert.ok(!seenCancun.has(p.webpSHA256));seenCancun.add(p.webpSHA256);assert.ok(b.length<=260000);}
for(const locale of editorialTravelLocales){assert.equal(Object.keys(cancunCaptions.captions[locale]).length,21);for(const variant of ['destinations','hotels']){assert.equal(travelPageMetadata(locale,[variant,'cancun']).robots.index,false);assert.ok(!known.has(root+travelHref(locale,variant+'/cancun')));}}
console.log('Cancun preview: 21 WebP hashes, 210 captions and noindex gate verified.');

const orlandoMedia=require('../data/travel/orlandoReviewedMedia.json'),orlandoCaptions=require('../data/travel/localized/orlando-photo-captions-draft.json');
assert.equal(orlandoMedia.destinationScenes.length,9);assert.equal(orlandoMedia.hotels.length,12);const seenOrlando=new Set();
for(const p of [...orlandoMedia.destinationScenes,...orlandoMedia.hotels]){assert.ok(p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved&&p.credit&&p.licenseUrl);const b=fs.readFileSync('public'+p.localPath);assert.equal(b.toString('ascii',0,4),'RIFF');assert.equal(b.toString('ascii',8,12),'WEBP');assert.equal(crypto.createHash('sha256').update(b).digest('hex'),p.webpSHA256);assert.ok(!seenOrlando.has(p.webpSHA256));seenOrlando.add(p.webpSHA256);assert.ok(b.length<=260000);}
for(const locale of editorialTravelLocales){assert.equal(Object.keys(orlandoCaptions.captions[locale]).length,21);for(const variant of ['destinations','hotels']){assert.equal(travelPageMetadata(locale,[variant,'orlando']).robots.index,false);assert.ok(!known.has(root+travelHref(locale,variant+'/orlando')));}}
console.log('Orlando preview: 21 WebP hashes, 210 captions and noindex gate verified.');

const hongKongMedia=require('../data/travel/hongKongReviewedMedia.json'),hongKongCaptions=require('../data/travel/localized/hong-kong-photo-captions-draft.json');
assert.equal(hongKongMedia.destinationScenes.length,9);assert.equal(hongKongMedia.hotels.length,12);const seenHongKong=new Set();
for(const p of [...hongKongMedia.destinationScenes,...hongKongMedia.hotels]){assert.ok(p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved&&p.credit&&p.licenseUrl);const b=fs.readFileSync('public'+p.localPath);assert.equal(b.toString('ascii',0,4),'RIFF');assert.equal(b.toString('ascii',8,12),'WEBP');assert.equal(crypto.createHash('sha256').update(b).digest('hex'),p.webpSHA256);assert.ok(!seenHongKong.has(p.webpSHA256));seenHongKong.add(p.webpSHA256);assert.ok(b.length<=260000);}
for(const locale of editorialTravelLocales){assert.equal(Object.keys(hongKongCaptions.captions[locale]).length,21);for(const variant of ['destinations','hotels']){assert.equal(travelPageMetadata(locale,[variant,'hong-kong']).robots.index,false);assert.ok(!known.has(root+travelHref(locale,variant+'/orlando')));}}
console.log('Hong Kong preview: 21 WebP hashes, 210 captions and noindex gate verified.');

const kualaLumpurMedia=require('../data/travel/kualaLumpurReviewedMedia.json'),kualaLumpurCaptions=require('../data/travel/localized/kuala-lumpur-photo-captions-draft.json');
assert.equal(kualaLumpurMedia.destinationScenes.length,9);assert.equal(kualaLumpurMedia.hotels.length,12);const seenKualaLumpur=new Set();
for(const p of [...kualaLumpurMedia.destinationScenes,...kualaLumpurMedia.hotels]){assert.ok(p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved&&p.credit&&p.licenseUrl);const b=fs.readFileSync('public'+p.localPath);assert.equal(b.toString('ascii',0,4),'RIFF');assert.equal(b.toString('ascii',8,12),'WEBP');assert.equal(crypto.createHash('sha256').update(b).digest('hex'),p.webpSHA256);assert.ok(!seenKualaLumpur.has(p.webpSHA256));seenKualaLumpur.add(p.webpSHA256);assert.ok(b.length<=260000);}
for(const locale of editorialTravelLocales){assert.equal(Object.keys(kualaLumpurCaptions.captions[locale]).length,21);for(const variant of ['destinations','hotels']){assert.equal(travelPageMetadata(locale,[variant,'kuala-lumpur']).robots.index,false);assert.ok(!known.has(root+travelHref(locale,variant+'/kuala-lumpur')));}}
console.log('Kuala Lumpur preview: 21 WebP hashes, 210 captions and noindex gate verified.');

const osakaMedia=require('../data/travel/osakaReviewedMedia.json'),osakaCaptions=require('../data/travel/localized/osaka-photo-captions-draft.json');
assert.equal(osakaMedia.destinationScenes.length,9);assert.equal(osakaMedia.hotels.length,12);const seenOsaka=new Set();
for(const p of [...osakaMedia.destinationScenes,...osakaMedia.hotels]){assert.ok(p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved&&p.credit&&p.licenseUrl);const b=fs.readFileSync('public'+p.localPath);assert.equal(b.toString('ascii',0,4),'RIFF');assert.equal(b.toString('ascii',8,12),'WEBP');assert.equal(crypto.createHash('sha256').update(b).digest('hex'),p.webpSHA256);assert.ok(!seenOsaka.has(p.webpSHA256));seenOsaka.add(p.webpSHA256);assert.ok(b.length<=260000);}
for(const locale of editorialTravelLocales){assert.equal(Object.keys(osakaCaptions.captions[locale]).length,21);for(const variant of ['destinations','hotels']){assert.equal(travelPageMetadata(locale,[variant,'osaka']).robots.index,false);assert.ok(!known.has(root+travelHref(locale,variant+'/osaka')));}}
console.log('Osaka preview: 21 WebP hashes, 210 captions and noindex gate verified.');

const seoulMedia=require('../data/travel/seoulReviewedMedia.json'),seoulCaptions=require('../data/travel/localized/seoul-photo-captions-draft.json');
assert.equal(seoulMedia.destinationScenes.length,9);assert.equal(seoulMedia.hotels.length,12);const seenSeoul=new Set();
for(const p of [...seoulMedia.destinationScenes,...seoulMedia.hotels]){assert.ok(p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved&&p.credit&&p.licenseUrl);const b=fs.readFileSync('public'+p.localPath);assert.equal(b.toString('ascii',0,4),'RIFF');assert.equal(b.toString('ascii',8,12),'WEBP');assert.equal(crypto.createHash('sha256').update(b).digest('hex'),p.webpSHA256);assert.ok(!seenSeoul.has(p.webpSHA256));seenSeoul.add(p.webpSHA256);assert.ok(b.length<=260000);}
for(const locale of editorialTravelLocales){assert.equal(Object.keys(seoulCaptions.captions[locale]).length,21);for(const variant of ['destinations','hotels']){assert.equal(travelPageMetadata(locale,[variant,'seoul']).robots.index,false);assert.ok(!known.has(root+travelHref(locale,variant+'/seoul')));}}
console.log('Seoul preview: 21 WebP hashes, 210 captions and noindex gate verified.');

// Madrid is not yet released: verify its actual media and source content without relaxing the rights gate.
const madridMedia=require('../data/travel/madridReviewedMedia.json'),madridCaptions=require('../data/travel/localized/madrid-photo-captions-draft.json');
assert.equal(madridMedia.destinationScenes.length,9);assert.equal(madridMedia.hotels.length,12);assert.equal(madridMedia.publicUseApproved,false);
const seenMadrid=new Set();
for(const p of [...madridMedia.destinationScenes,...madridMedia.hotels]){assert.ok(p.visuallyVerified&&p.credit&&p.sourcePage);const b=fs.readFileSync('public'+p.localPath);assert.equal(b.toString('ascii',0,4),'RIFF');assert.equal(b.toString('ascii',8,12),'WEBP');assert.equal(crypto.createHash('sha256').update(b).digest('hex'),p.webpSHA256);assert.ok(!seenMadrid.has(p.webpSHA256));seenMadrid.add(p.webpSHA256);assert.ok(b.length<=260000);}
for(const locale of editorialTravelLocales){assert.equal(Object.keys(madridCaptions.captions[locale]).length,21);for(const variant of ['destinations','hotels']){assert.equal(travelPageMetadata(locale,[variant,'madrid']).robots.index,false);assert.ok(!known.has(root+travelHref(locale,variant+'/madrid')));}}
const recentSeoSources=[['london','london'],['las-vegas','lasVegas'],['rome','rome'],['barcelona','barcelona'],['cancun','cancun'],['orlando','orlando'],['hong-kong','hongKong'],['kuala-lumpur','kualaLumpur'],['osaka','osaka'],['seoul','seoul'],['madrid','madrid']];
const recentTitles=new Set(),recentDescriptions=new Set();
for(const [slug,name] of recentSeoSources){const bilingual=require('../data/travel/'+name+'DraftGuide')[name+'DraftSeo'];for(const locale of editorialTravelLocales){const source=locale==='fr'||locale==='en'?bilingual[locale]:require('../data/travel/localized/'+slug+'-'+locale+'.json');const title=source.title||source.seoTitle,hotelTitle=source.hotelTitle||source.hotelSeoTitle,description=source.description||source.seoDescription;for(const val of [title,hotelTitle]){assert.ok(typeof val==='string'&&val.trim()&&val.length<=100,slug+'/'+locale+' title');const key=locale+'/'+val.trim().toLowerCase();assert.ok(!recentTitles.has(key),slug+'/'+locale+' duplicate title');recentTitles.add(key);}assert.ok(description.trim()&&description.length<=160,slug+'/'+locale+' description');const key=locale+'/'+description.trim().toLowerCase();assert.ok(!recentDescriptions.has(key),slug+'/'+locale+' duplicate description');recentDescriptions.add(key);}}
console.log('89–99 SEO sources:',recentTitles.size,'distinct localized titles;',recentDescriptions.size,'distinct destination descriptions; Madrid 21 WebP hashes and 210 captions verified.');

// Supplier link routing across every new editorial language. Missing IDs intentionally retain the generic search.
const supplierAudit=require('../docs/travel-nuitee-89-99-audit.json');
const {getNuiteeHotelLinks}=require('../lib/travel/nuiteeLaunch');
const {hotelPartnerKey}=require('../lib/travel/hotelPartners');
const {getNuiteeWhiteLabelSearchHref}=require('../lib/travel/nuiteeWhiteLabel');
const fixedSupplierDate=Date.parse('2026-11-28T00:00:00Z');
let exactChecks=0,fallbackChecks=0;
for(const h of supplierAudit.hotels)for(const locale of editorialTravelLocales){const target=getNuiteeHotelLinks(hotelPartnerKey(h.destination,h.name),locale,fixedSupplierDate).find(x=>x.providerId==='nuitee-connect');if(h.hotelId){assert.ok(target,h.name+'/'+locale);const u=new URL(target.url);assert.equal(u.origin,'https://bosphoras.nuitee.link');assert.equal(u.pathname,'/hotels/'+h.hotelId);assert.equal(u.searchParams.get('language'),locale);assert.equal(u.searchParams.get('currency'),'EUR');assert.equal(u.searchParams.get('clientReference'),'bosphoras_'+h.destination+'_'+h.hotelId);exactChecks++;}else{assert.equal(target,undefined,h.name+' must not route to another property');const u=new URL(getNuiteeWhiteLabelSearchHref(locale));assert.equal(u.origin,'https://bosphoras.nuitee.link');assert.equal(u.searchParams.get('language'),locale);fallbackChecks++;}}
assert.equal(exactChecks,supplierAudit.verifiedMappingCount*editorialTravelLocales.length);assert.equal(fallbackChecks,supplierAudit.remainingCount*editorialTravelLocales.length);
console.log('Nuitée localized booking routes:',exactChecks,'exact property links;',fallbackChecks,'safe search fallbacks.');
const renderedRecentTitles=new Set(),renderedRecentDescriptions=new Set();
for(const [slug] of recentSeoSources)for(const locale of editorialTravelLocales)for(const variant of ['destinations','hotels']){const id=slug+'/'+locale+'/'+variant,m=travelPageMetadata(locale,[variant,slug]);assert.ok(m.title&&m.title!=='Not found'&&typeof m.description==='string'&&m.description.trim()&&m.description.length<=160,id+' rendered metadata');assert.equal(m.alternates.canonical,root+travelHref(locale,variant+'/'+slug),id+' canonical');assert.ok(m.openGraph&&m.twitter,id+' social metadata');assert.equal(m.robots.index,false,id+' remains draft');const title=locale+'/'+m.title.trim().toLowerCase(),description=locale+'/'+m.description.trim().toLowerCase();assert.ok(!renderedRecentTitles.has(title),id+' duplicate rendered title');assert.ok(!renderedRecentDescriptions.has(description),id+' duplicate rendered description');renderedRecentTitles.add(title);renderedRecentDescriptions.add(description);}
console.log('Destinations 89–99 rendered metadata:',renderedRecentTitles.size,'distinct language/title pairs;',renderedRecentDescriptions.size,'distinct language/description pairs.');
