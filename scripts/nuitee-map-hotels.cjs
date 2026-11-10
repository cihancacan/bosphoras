/**
 * Bosphoras / Nuitée: resolve exact supplier hotel IDs for existing editorial
 * guides. Read-only supplier API; checkout, payment and traveller data stay at Nuitée.
 *
 * Audit only: npm run nuitee:coverage
 * Lookup only: NUITEE_API_KEY=<configured locally> npm run nuitee:resolve
 * Apply unique, supplier-verified identity matches:
 *   NUITEE_API_KEY=<configured locally> npm run nuitee:resolve -- --apply
 * Or use an account-exported catalogue:
 *   npm run nuitee:resolve -- --catalog=path/to/supplier-export.json --apply
 *
 * Do not put a production API key or account export in the Git repository.
 */
'use strict';
const fs=require('node:fs');
const path=require('node:path');
const {featuredCityGuides}=require('../data/travel/featuredCityGuides');
const manual=require('../data/travel/nuiteeMappings.json');
const generated=require('../data/travel/nuiteeResolvedMappings.json');
const output=path.join(__dirname,'../data/travel/nuiteeResolvedMappings.json');
const reportFile=path.join(__dirname,'../docs/travel-nuitee-coverage.json');
const csvFile=path.join(__dirname,'../docs/travel-nuitee-unmapped-hotels.csv');
const csvCell=value=>'"'+String(value??'').replace(/"/g,'""')+'"';
function writeMissingCsv(items) {
  const heading=['destination','hotel_name','city','country','editorial_key','reason'];
  const rows=items.map(item=>[item.destination,item.name,item.city,item.country,item.editorialKey,item.reason||'not_mapped']);
  fs.writeFileSync(csvFile,[heading,...rows].map(row=>row.map(csvCell).join(',')).join('\n')+'\n');
}
const flags=new Set(process.argv.slice(2));
const catalogFlag=[...flags].find(x=>x.startsWith('--catalog='));
const useApi=flags.has('--lookup')||flags.has('--apply');
const apply=flags.has('--apply');
const normalize=value=>String(value||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').replace(/&/g,' and ').replace(/[^\p{L}\p{N}]+/gu,' ').toLowerCase().trim();
const sleep=ms=>new Promise(resolve=>setTimeout(resolve,ms));
const countryCodeByName=new Map();
for(const language of ['en','fr','tr','es','it','de']) {
  const names=new Intl.DisplayNames([language],{type:'region'});
  for(let a=65;a<=90;a++)for(let b=65;b<=90;b++){
    const code=String.fromCharCode(a,b);
    const name=names.of(code);
    if(name&&name!==code)countryCodeByName.set(normalize(name),code);
  }
}
for(const [name,code] of Object.entries({
  'États-Unis':'US','Etats Unis':'US','Emirats Arabes Unis':'AE',
  'Émirats arabes unis':'AE','Royaume-Uni':'GB','Koh Samui':'TH',
  'Saint-Barthélemy':'BL','Maldives':'MV','Turquie':'TR'
}))countryCodeByName.set(normalize(name),code);
function countryCode(value) {
  const v=String(value||'').trim();
  if(/^[A-Z]{2}$/.test(v))return v;
  return countryCodeByName.get(normalize(v))||null;
}
const hotels=Object.values(featuredCityGuides).flatMap(city=>
  city.hotels.map(hotel=>({destination:city.slug,city:city.name,country:city.country,
    name:hotel.name,editorialKey:city.slug+':'+hotel.officialUrl})));
const existing=[...manual.hotels,...generated.hotels];
const assigned=new Set(existing.flatMap(hotel=>hotel.editorialKeys||[]));
const pending=hotels.filter(hotel=>!assigned.has(hotel.editorialKey));
const report={
  generatedAt:new Date().toISOString(),destinations:Object.keys(featuredCityGuides).length,
  editorialHotels:hotels.length,verifiedSupplierHotels:existing.length,
  editorialEntriesWithDirectLink:hotels.length-pending.length,
  editorialEntriesMissingDirectLink:pending.length,
  unresolved:[],newVerified:[]
};
if(!useApi&&!catalogFlag) {
  report.unresolved=pending.map(({destination,name,city,country,editorialKey})=>
    ({destination,name,city,country,editorialKey,reason:'no_supplier_id'}));
  writeMissingCsv(report.unresolved);
  fs.writeFileSync(reportFile,JSON.stringify(report,null,2)+'\n');
  console.log('Nuitée coverage: '+report.editorialEntriesWithDirectLink+'/'+hotels.length+
    ' editorial hotel links mapped; '+pending.length+' still need verified supplier IDs.');
  process.exit(0);
}
const apiKey=process.env.NUITEE_API_KEY||'';
if(!catalogFlag&&!apiKey) {
  console.error('NUITEE_API_KEY not configured; no supplier hotel IDs were guessed or assigned.');
  process.exit(2);
}
let catalog=null;
if(catalogFlag){
  const file=catalogFlag.slice('--catalog='.length);
  const value=JSON.parse(fs.readFileSync(file,'utf8'));
  catalog=Array.isArray(value)?value:(Array.isArray(value.data)?value.data:value.hotels);
  if(!Array.isArray(catalog))throw new Error('Expected an array of official supplier hotel records');
}
async function api(pathname,params) {
  const url=new URL('https://api.liteapi.travel/v3.0'+pathname);
  for(const [key,value] of Object.entries(params))if(value)url.searchParams.set(key,String(value));
  const response=await fetch(url,{headers:{'accept':'application/json','X-API-Key':apiKey},
    signal:AbortSignal.timeout(20000)});
  if(!response.ok)throw new Error('Supplier returned HTTP '+response.status);
  return (await response.json()).data;
}
function verifyIdentity(hotel,supplier) {
  const code=countryCode(hotel.country);
  if(!code)return {valid:false,reason:'unknown_country'};
  if(!supplier||!/^lp[a-z0-9]+$/i.test(String(supplier.id||'')))
    return {valid:false,reason:'invalid_supplier_hotel_id'};
  if(normalize(supplier.name)!==normalize(hotel.name))
    return {valid:false,reason:'name_mismatch'};
  if(!supplier.address||String(supplier.address).trim().length<6)
    return {valid:false,reason:'missing_supplier_address'};
  const supplierCountry=countryCode(supplier.country)||supplier.country;
  if(supplierCountry!==code)return {valid:false,reason:'country_mismatch'};
  const supplierCity=normalize(supplier.city).replace(/ city$/,'');
  const editorialCity=normalize(hotel.city).replace(/ city$/,'');
  const supplierAddress=normalize(supplier.address);
  const supplierName=normalize(supplier.name);
  // Islands and resort destinations often have administrative city names
  // different from the editorial destination. Do not reject a confirmed
  // destination mention in the address or exact supplier property name.
  const locationConfirmed=Boolean(editorialCity)&&(
    supplierCity===editorialCity ||
    supplierAddress.includes(editorialCity) ||
    supplierName.includes(editorialCity)
  );
  if(!locationConfirmed)
    return {valid:false,reason:'location_requires_manual_review'};
  return {valid:true};
}
(async()=>{
  const newMappings=[];
  const candidatesByName=new Map();
  if(catalog)for(const item of catalog){
    const key=normalize(item.name);
    if(!candidatesByName.has(key))candidatesByName.set(key,[]);
    candidatesByName.get(key).push(item);
  }
  for(let i=0;i<pending.length;i++){
    const hotel=pending[i];let matches=[];
    try{
      if(catalog){
        matches=candidatesByName.get(normalize(hotel.name))||[];
      }else{
        const code=countryCode(hotel.country);
        if(!code){report.unresolved.push({...hotel,reason:'unknown_country'});continue}
        const list=await api('/data/hotels',{
          countryCode:code,cityName:hotel.city,hotelName:hotel.name,limit:35,language:'en'
        });
        matches=Array.isArray(list)?list:[];
        await sleep(300);
        // If the resort is administratively outside the marketed destination,
        // search the same country by the exact property name (never across
        // unfiltered global inventory) before declaring it missing.
        if(!matches.some(item=>normalize(item.name)===normalize(hotel.name))) {
          const countryList=await api('/data/hotels',{
            countryCode:code,hotelName:hotel.name,limit:35,language:'en'
          });
          matches=Array.isArray(countryList)?countryList:[];
          await sleep(300);
        }
      }
      const exact=matches.filter(item=>normalize(item.name)===normalize(hotel.name));
      if(exact.length!==1){
        report.unresolved.push({...hotel,reason:exact.length>1?'ambiguous_name':'not_found_in_supplier',candidateCount:exact.length});
        continue;
      }
      let candidate=exact[0];
      if(!catalog){
        const details=await api('/data/hotel',{hotelId:candidate.id,language:'en'});
        await sleep(300);
        candidate={...candidate,...details};
      }
      const identity=verifyIdentity(hotel,candidate);
      if(!identity.valid){
        report.unresolved.push({...hotel,reason:identity.reason,supplierName:candidate.name,
          supplierCity:candidate.city,supplierAddress:candidate.address,supplierId:candidate.id});
        continue;
      }
      if(existing.concat(newMappings).some(item=>item.hotelId===candidate.id&&
          item.destination!==hotel.destination)){
        report.unresolved.push({...hotel,reason:'hotel_id_already_in_another_destination'});
        continue;
      }
      const evidence='Nuitée supplier '+(catalog?'catalogue export':'Static Hotel Data API')+
        ': unique exact title, same country, geographically compatible location, supplier street address '+String(candidate.address)+
        '; source confirmed '+new Date().toISOString().slice(0,10);
      const mapped={destination:hotel.destination,editorialKeys:[hotel.editorialKey],
        hotelId:candidate.id,name:hotel.name,address:String(candidate.address),
        matchEvidence:evidence,
        deepLinkEvidence:'Supplier-issued hotelId confirmed by '+(catalog?'account catalogue':'hotel detail API')+
          '; supported Whitelabel hotel route /hotels/'+candidate.id};
      newMappings.push(mapped);
      report.newVerified.push({destination:hotel.destination,name:hotel.name,hotelId:candidate.id,address:candidate.address});
    }catch(error){
      report.unresolved.push({...hotel,reason:'supplier_lookup_failed',detail:String(error.message||error).slice(0,130)});
    }
  }
  report.unresolvedCount=report.unresolved.length;
  report.newVerifiedCount=newMappings.length;
  report.editorialEntriesWithDirectLink+=newMappings.length;
  report.editorialEntriesMissingDirectLink-=newMappings.length;
  writeMissingCsv(report.unresolved);
  fs.writeFileSync(reportFile,JSON.stringify(report,null,2)+'\n');
  if(apply&&newMappings.length){
    const merged=[...generated.hotels,...newMappings].sort((a,b)=>
      (a.destination+':'+a.name).localeCompare(b.destination+':'+b.name));
    fs.writeFileSync(output,JSON.stringify({hotels:merged},null,2)+'\n');
  }
  console.log('Nuitée '+(apply?'mapping import':'candidate audit')+': '+
    newMappings.length+' exact supplier matches; '+report.unresolvedCount+
    ' unresolved; '+report.editorialEntriesWithDirectLink+'/'+hotels.length+
    ' guide hotels now represented by verified IDs.');
  console.log('Audit written to docs/travel-nuitee-coverage.json; no supplier secret written.');
})().catch(error=>{console.error(String(error.message||error));process.exitCode=1});
