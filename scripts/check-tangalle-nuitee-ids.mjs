#!/usr/bin/env node
/** Targeted read-only supplier matching for Tangalle #80: no other hotel or file is touched.
 * Requires an authorized NUITEE_API_KEY in GitHub Actions secrets. Never prints the key.
 * Every proposed ID must be manually reviewed before a booking deep link is created.
 */
const hotels=[
  {name:"Amanwella",aliases:["Amanwella"],location:/tangall|godellawela|wella wathura|bodhi mawatha/i},
  {name:"Anantara Peace Haven Tangalle Resort",aliases:["Anantara Peace Haven Tangalle Resort","Anantara Peace Haven Resort","Anantara Tangalle"],location:/tangall|goyambokka/i},
  {name:"Kayaam Wellness",aliases:["Kayaam Wellness","Kayaam House","Kayaam"],location:/tangall|rekawa|wellodeya/i},
  {name:"Buckingham Place",aliases:["Buckingham Place","Buckingham Place Tangalle"],location:/tangall|rekawa|netolpitiya/i},
];
const key=process.env.NUITEE_API_KEY||"";
if(!key){console.error("NO_NUITEE_API_KEY: not configured in GitHub Actions for this repository. No IDs guessed.");process.exit(2)}
const normalize=x=>String(x||"").normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/&/g," and ").replace(/[^a-z0-9]+/g," ").trim();
async function list(params) {
 const u=new URL("https://api.liteapi.travel/v3.0/data/hotels");
 for(const [k,v] of Object.entries(params))if(v)u.searchParams.set(k,String(v));
 const resp=await fetch(u,{headers:{"X-API-Key":key,accept:"application/json"},signal:AbortSignal.timeout(22000)});
 if(!resp.ok)throw new Error("Supplier HTTP "+resp.status);
 const body=await resp.json();
 return Array.isArray(body.data)?body.data:[];
}
const candidates=[];
for(const hotel of hotels) {
 const found=new Map();
 for(const alias of hotel.aliases){
  for(const scope of ["city","country"]){
   try {
    const records=await list({countryCode:"LK",...(scope==="city"?{cityName:"Tangalle"}:{}),hotelName:alias,limit:100,language:"en"});
    for(const x of records)if(x.id)found.set(x.id,x);
   }catch(e){console.error("LOOKUP_ERROR",hotel.name,scope,String(e.message||e));}
  }
 }
 const exact=[...found.values()].filter(x=>hotel.aliases.some(a=>normalize(x.name)===normalize(a)));
 const verified=exact.map(x=>({
  hotel:hotel.name,supplierId:String(x.id),supplierName:x.name,
  country:x.country,city:x.city,address:x.address,
  supplierCountryOk:normalize(x.country)==="sri lanka"||normalize(x.country)==="lk",
  locationOk:hotel.location.test([x.city,x.address,x.name].join(" ")),
  idOk:/^lp[a-z0-9]+$/i.test(String(x.id)),
 })).filter(x=>x.supplierCountryOk&&x.locationOk&&x.idOk);
 console.log("TANGALLE_SUPPLIER_MATCH",JSON.stringify({
  hotel:hotel.name,matched:verified.length,listed:found.size,
  verified,
  status:verified.length===1?"unique_eligible":"needs_manual_review_or_unavailable"
 }));
 candidates.push({name:hotel.name,verified});
}
console.log("TANGALLE_EXACT_IDS_VERIFIED",candidates.filter(x=>x.verified.length===1).length,"OF",candidates.length);
