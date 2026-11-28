'use strict';
const audit=require('../docs/travel-nuitee-89-99-audit.json');
const rules={
  "Claridge’s": {
    "queries": [
      "Claridges",
      "Claridge's",
      "Claridge"
    ],
    "names": [
      "Claridges",
      "Claridge's",
      "Claridge’s Hotel",
      "Claridges Hotel"
    ],
    "tokens": [
      "brook",
      "street"
    ],
    "source": "https://www.maybourne.com/en/hotels/claridges/about/getting-here"
  },
  "Fontainebleau Las Vegas": {
    "queries": [
      "Fontainebleau"
    ],
    "names": [
      "Fontainebleau Las Vegas, MICHELIN Key Award Hotel",
      "Fontainebleau Las Vegas"
    ],
    "tokens": [
      "2777",
      "las vegas"
    ],
    "source": "https://www.fontainebleaulasvegas.com/information/business-center/"
  },
  "Hotel de Russie": {
    "queries": [
      "Rocco Forte Hotel De Russie"
    ],
    "names": [
      "Rocco Forte Hotel De Russie",
      "Hotel de Russie"
    ],
    "tokens": [
      "babuino",
      "9"
    ],
    "source": "https://www.roccofortehotels.com/hotels-and-resorts/hotel-de-russie/"
  },
  "Hotel Eden": {
    "queries": [
      "Hotel Eden Rome",
      "Hotel Eden Dorchester",
      "Eden"
    ],
    "names": [
      "Hotel Eden",
      "Hotel Eden Rome",
      "Hotel Eden - Dorchester Collection",
      "Hotel Eden - Dorchester"
    ],
    "tokens": [
      "ludovisi",
      "49"
    ],
    "source": "https://www.dorchestercollection.com/rome/hotel-eden/about"
  },
  "Majestic Hotel & Spa Barcelona": {
    "queries": [
      "Majestic Hotel"
    ],
    "names": [
      "Majestic Hotel & Spa Barcelona GL",
      "Majestic Hotel & Spa Barcelona"
    ],
    "tokens": [
      "gracia",
      "68"
    ],
    "source": "https://majestichotelgroup.com/en/barcelona/hotel-majestic/location-and-contact"
  },
  "Le Blanc Spa Resort Cancun": {
    "queries": [
      "Le Blanc Spa Resort"
    ],
    "names": [
      "Le Blanc Spa Resort Cancun - Adults Only - All-Inclusive",
      "Le Blanc Spa Resort Cancun"
    ],
    "tokens": [
      "kukulcan",
      "10"
    ],
    "source": "https://cancun.leblancsparesorts.com/"
  },
  "Hyatt Ziva Cancun": {
    "queries": [
      "Hyatt Ziva",
      "Hyatt Ziva Cancún",
      "Ziva Cancun"
    ],
    "names": [
      "Hyatt Ziva Cancun",
      "Hyatt Ziva Cancun - All Inclusive",
      "Hyatt Ziva Cancun All Inclusive"
    ],
    "tokens": [
      "kukulcan",
      "51"
    ],
    "source": "https://www.hyatt.com/ziva/en-US/canif-hyatt-ziva-cancun"
  },
  "Grand Fiesta Americana Coral Beach Cancún": {
    "queries": [
      "Grand Fiesta Americana Coral Beach"
    ],
    "names": [
      "Grand Fiesta Americana Coral Beach Cancun - All Inclusive",
      "Grand Fiesta Americana Coral Beach Cancun"
    ],
    "tokens": [
      "kukulcan",
      "9 5"
    ],
    "source": "https://www.fiestamericanatravelty.com/en/grand-fiesta-americana/hotels/grand-fiesta-americana-coral-beach-cancun-all-inclusive-spa-resort"
  },
  "Waldorf Astoria Orlando": {
    "queries": [
      "Waldorf Astoria Orlando"
    ],
    "names": [
      "Waldorf Astoria Orlando - An Official Walt Disney World Hotel",
      "Waldorf Astoria Orlando"
    ],
    "tokens": [
      "14200",
      "bonnet creek"
    ],
    "source": "https://www.waldorfastoriaorlando.com/map-and-directions/our-location/"
  },
  "Loews Portofino Bay Hotel": {
    "queries": [
      "Loews Portofino Bay"
    ],
    "names": [
      "Universal's Loews Portofino Bay Hotel",
      "Loews Portofino Bay Hotel"
    ],
    "tokens": [
      "5601",
      "universal"
    ],
    "source": "https://www.loewshotels.com/portofino-bay-hotel"
  },
  "Four Seasons Hotel Osaka": {
    "queries": [
      "Four Seasons Osaka",
      "Four Seasons",
      "Four Seasons Hotel"
    ],
    "names": [
      "Four Seasons Hotel Osaka",
      "Four Seasons Osaka"
    ],
    "tokens": [
      "dojima",
      "2 4 32"
    ],
    "source": "https://www.fourseasons.com/osaka/getting-here/"
  },
  "The Ritz-Carlton, Osaka": {
    "queries": [
      "Ritz Carlton Osaka",
      "Ritz-Carlton Osaka",
      "Ritz Carlton"
    ],
    "names": [
      "The Ritz-Carlton, Osaka",
      "Ritz Carlton Osaka",
      "The Ritz Carlton Osaka"
    ],
    "tokens": [
      "umeda",
      "2 5 25"
    ],
    "source": "https://www.ritzcarlton.com/en/hotels/osarz-the-ritz-carlton-osaka/overview/"
  }
};
rules["Claridge’s"].names.push("Claridge's, Maybourne");
rules["Four Seasons Hotel Osaka"].queries.push("フォーシーズンズホテル大阪","Four Seasons Hotel");
rules["Four Seasons Hotel Osaka"].names.push("フォーシーズンズホテル大阪");
rules["Hyatt Ziva Cancun"].queries.push("Hyatt Ziva Cancún All Inclusive","Hyatt Ziva Cancun All Inclusive");
const key=process.env.NUITEE_API_KEY;if(!key)throw new Error('Nuitée API key unavailable');
const norm=v=>String(v||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').replace(/['’]/g,'').replace(/&/g,' and ').replace(/[^\p{L}\p{N}]+/gu,' ').trim().toLowerCase();
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
async function api(path,params){const u=new URL('https://api.liteapi.travel/v3.0'+path);for(const [k,v] of Object.entries(params))u.searchParams.set(k,v);const r=await fetch(u,{headers:{accept:'application/json','X-API-Key':key},signal:AbortSignal.timeout(20000)});if(!r.ok)throw Error('HTTP '+r.status);await sleep(250);return (await r.json()).data;}
(async()=>{const rows=audit.hotels.filter(h=>!h.hotelId);let verified=0;for(const h of rows){const rule=rules[h.name];try{if(!rule)throw Error('no rule');const candidates=new Map((h.candidates||[]).map(x=>[x.id,x]));for(const query of rule.queries){const list=await api('/data/hotels',{countryCode:h.countryCode,cityName:h.city,hotelName:query,limit:'100',language:'en'});for(const x of Array.isArray(list)?list:[])if(x.id)candidates.set(x.id,x);}
if(h.destination!=='london'){
for(const query of rule.queries.slice(0,4)){const list=await api('/data/hotels',{countryCode:h.countryCode,hotelName:query,limit:'500',language:'en'});for(const x of Array.isArray(list)?list:[])if(x.id)candidates.set(x.id,x);}
const local=await api('/data/hotels',{countryCode:h.countryCode,cityName:h.destination==='cancun'?'Cancún':h.city,limit:'2000',language:'en'});for(const x of Array.isArray(local)?local:[])if(x.id&&(/hyatt.*ziva|four.*seasons|フォーシーズンズ/i.test(x.name)))candidates.set(x.id,x);
}
const names=new Set([h.name,...rule.names].map(norm));const eligible=[...candidates.values()].filter(x=>names.has(norm(x.name))&&/^lp[a-z0-9]+$/i.test(x.id));const confirmed=[];for(const x of eligible){const d=await api('/data/hotel',{hotelId:x.id,language:'en'});if(!d||typeof d!=='object'||Array.isArray(d)||(d.id&&d.id!==x.id))continue;const merged={...x,...Object.fromEntries(Object.entries(d).filter(([,v])=>v!==null&&v!==undefined&&v!==''))};const countries=[x.country,x.countryCode,merged.country,merged.countryCode].filter(Boolean).map(v=>String(v).toUpperCase());if(!countries.includes(h.countryCode)||countries.some(v=>v.length===2&&v!==h.countryCode))continue;if(!names.has(norm(merged.name)))continue;const address=norm(merged.address);if(!rule.tokens.every(t=>address.includes(norm(t))))continue;if(norm(merged.city)!==norm(h.city)&&!address.includes(norm(h.city))&&!norm(merged.name).includes(norm(h.city)))continue;confirmed.push({destination:h.destination,name:h.name,hotelId:x.id,address:merged.address,country:h.countryCode,supplierName:merged.name,officialAddressSource:rule.source});}
if(confirmed.length===1){verified++;console.log('NUITEE_ALIAS VERIFIED '+JSON.stringify(confirmed[0]));}else{console.log('NUITEE_ALIAS UNRESOLVED '+JSON.stringify({destination:h.destination,name:h.name,confirmed:confirmed.length,candidates:[...candidates.values()].filter(x=>norm(x.name).includes(norm(rule.queries[0]))||names.has(norm(x.name))||/hyatt.*ziva|four.*seasons|フォーシーズンズ/i.test(x.name)).slice(0,10).map(x=>({id:x.id,name:x.name,city:x.city,address:x.address}))}));}}catch(e){console.log('NUITEE_ALIAS UNRESOLVED '+JSON.stringify({destination:h.destination,name:h.name,error:String(e.message)}));}}console.log('NUITEE_ALIAS SUMMARY '+JSON.stringify({total:rows.length,verified,unresolved:rows.length-verified}));})().catch(e=>{console.error(e.message);process.exitCode=1});
