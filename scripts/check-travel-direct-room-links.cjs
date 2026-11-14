/** Read-only whole-catalogue audit using the real production link generator. */
const fs=require('node:fs');
const assert=require('node:assert/strict');
const {featuredCityGuides}=require('../data/travel/featuredCityGuides');
const {getNuiteeHotelLinks,isNuiteeBookingLive,nuiteeLaunch}=require('../lib/travel/nuiteeLaunch');
const {hotelPartnerKey}=require('../lib/travel/hotelPartners');
const {bookingTarget}=require('../components/travel/HotelPartnerBooking');
const manual=require('../data/travel/nuiteeMappings.json').hotels;
const tuples=require('../data/travel/nuiteeResolvedMappings.json').hotels;
const mappings=[...manual.map(m=>[m.destination,m.name,m.hotelId]),...tuples];
const keys=new Map();
for(const row of mappings){
 assert(Array.isArray(row)&&row.length===3&&typeof row[0]==='string'&&typeof row[1]==='string'&&/^lp[a-z0-9]+$/i.test(row[2]),'Invalid mapping tuple');
 const key=hotelPartnerKey(row[0],row[1]);
 const ids=keys.get(key)||new Set();
 ids.add(row[2]);keys.set(key,ids);
}
const missing=[],linked=[],ambiguous=[],destinations=[];
const live=isNuiteeBookingLive();
assert(live,'Booking gate not currently live; never bypass it');
for(const city of Object.values(featuredCityGuides)){
 let exact=0;
 for(const h of city.hotels){
  const key=hotelPartnerKey(city.slug,h.name);
  const ids=keys.get(key)||new Set();
  if(ids.size>1){ambiguous.push({destination:city.slug,name:h.name,ids:[...ids]});continue}
  const fr=getNuiteeHotelLinks(key,'fr'),en=getNuiteeHotelLinks(key,'en');
  if(!fr.length||!en.length){missing.push({destination:city.slug,name:h.name,country:city.country});continue}
  assert.equal(fr.length,1,key);assert.equal(en.length,1,key);
  const row={destination:city.slug,name:h.name,id:null};
  for(const [locale,link] of [['fr',fr[0]],['en',en[0]]]){
   const u=new URL(link.url);assert.equal(u.origin,'https://bosphoras.nuitee.link');
   assert.match(u.pathname,/^\/hotels\/lp[a-z0-9]+$/i);
   const id=u.pathname.split('/').pop();
   assert(ids.has(id),key+' identity mapping mismatch');
   assert.equal(u.searchParams.get('language'),locale);assert.equal(u.searchParams.get('currency'),'EUR');
   assert.equal(u.searchParams.get('clientReference'),'bosphoras_'+city.slug+'_'+id);
   const target=bookingTarget(key,locale);
   assert.equal(target.exact,true,key);assert.equal(target.href,link.url,key+' must link directly');
   if(row.id)assert.equal(row.id,id,key);row.id=id;
  }
  linked.push(row);exact++;
 }
 destinations.push({slug:city.slug,hotels:city.hotels.length,exact});
}
const fallback=bookingTarget('unknown:unknown','fr');
assert.equal(fallback.exact,false);assert.equal(new URL(fallback.href).pathname,'/');
const report={destinations:destinations.length,editorialEntries:destinations.reduce((s,d)=>s+d.hotels,0),exactLinks:linked.length,missingLinks:missing.length,ambiguousLinks:ambiguous.length,uniqueSupplierHotels:new Set(linked.map(x=>x.id)).size,scope:'Repository/runtime URL validation only; not live HTTP room inventory, title or availability inspection.',coverage:destinations,missing,ambiguous};
console.log(JSON.stringify(report,null,2));
if(process.argv.includes('--report'))fs.writeFileSync('docs/travel-nuitee-direct-link-audit.json',JSON.stringify(report,null,2)+'\n');
assert.equal(ambiguous.length,0,'Ambiguous mappings require manual identity review');
