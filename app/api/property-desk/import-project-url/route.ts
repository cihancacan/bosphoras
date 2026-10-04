import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { lookup } from 'node:dns/promises';
import net from 'node:net';

export const runtime='nodejs';
export const maxDuration=30;

const SUPABASE_URL=process.env.SUPABASE_URL||process.env.NEXT_PUBLIC_SUPABASE_URL||'https://udbzytlmcnljlegmolcx.supabase.co';
const PUBLISHABLE_KEY=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY||'sb_publishable_yQPc71ry-F3aqBLhj6OPig_cFs_u-Pa';

function bearer(request:NextRequest){
  const h=request.headers.get('authorization')||'';
  return h.startsWith('Bearer ')?h.slice(7).trim():'';
}
function isPrivateIp(ip:string){
  if(net.isIP(ip)===4){
    const p=ip.split('.').map(Number);
    return p[0]===10||p[0]===127||(p[0]===169&&p[1]===254)||(p[0]===172&&p[1]>=16&&p[1]<=31)||(p[0]===192&&p[1]===168)||(p[0]===100&&p[1]>=64&&p[1]<=127)||p[0]===0;
  }
  if(net.isIP(ip)===6){
    const x=ip.toLowerCase();
    return x==='::1'||x.startsWith('fc')||x.startsWith('fd')||x.startsWith('fe80:');
  }
  return true;
}
async function safeUrl(raw:string){
  const url=new URL(raw);
  if(!['http:','https:'].includes(url.protocol))throw new Error('URL non autorisée');
  if(url.username||url.password)throw new Error('URL avec authentification non autorisée');
  const host=url.hostname.toLowerCase();
  if(host==='localhost'||host.endsWith('.local'))throw new Error('Hôte local non autorisé');
  if(net.isIP(host)&&isPrivateIp(host))throw new Error('Adresse privée non autorisée');
  if(!net.isIP(host)){
    const addresses=await lookup(host,{all:true});
    if(!addresses.length||addresses.some((x)=>isPrivateIp(x.address)))throw new Error('Hôte non autorisé');
  }
  return url;
}
function decode(value=''){
  return value
    .replace(/&#x([0-9a-f]+);/gi,(_,hex)=>{const n=parseInt(hex,16);return Number.isFinite(n)&&n>0&&n<=0x10ffff?String.fromCodePoint(n):'';})
    .replace(/&#([0-9]+);/g,(_,dec)=>{const n=parseInt(dec,10);return Number.isFinite(n)&&n>0&&n<=0x10ffff?String.fromCodePoint(n):'';})
    .replace(/&nbsp;/gi,' ').replace(/&amp;/gi,'&').replace(/&quot;/gi,'"').replace(/&#39;/gi,"'").replace(/&apos;/gi,"'")
    .replace(/&lt;/gi,'<').replace(/&gt;/gi,'>').replace(/\s+/g,' ').trim();
}
function stripHtml(value=''){
  return decode(value.replace(/<script[\s\S]*?<\/script>/gi,' ').replace(/<style[\s\S]*?<\/style>/gi,' ').replace(/<[^>]+>/g,' '));
}
function meta(html:string,key:string){
  const safe=key.replace(/[.*+?^$()|[\]\\]/g,'\\$&');
  const a=new RegExp('<meta[^>]+(?:property|name)=["\\\']'+safe+'["\\\'][^>]+content=["\\\']([^"\\\']+)["\\\'][^>]*>','i').exec(html);
  const b=new RegExp('<meta[^>]+content=["\\\']([^"\\\']+)["\\\'][^>]+(?:property|name)=["\\\']'+safe+'["\\\'][^>]*>','i').exec(html);
  return decode((a&&a[1])||(b&&b[1])||'');
}
function allMeta(html:string,key:string){
  const out:string[]=[]; const tags=html.match(/<meta\s+[^>]*>/gi)||[];
  for(const tag of tags){
    const property=(/(?:property|name)=["']([^"']+)["']/i.exec(tag)||[])[1]||'';
    if(property.toLowerCase()!==key.toLowerCase())continue;
    const content=(/content=["']([^"']+)["']/i.exec(tag)||[])[1]||'';
    if(content)out.push(decode(content));
  }
  return out;
}
function jsonLd(html:string){
  const blocks:any[]=[]; const re=/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi; let m:RegExpExecArray|null;
  while((m=re.exec(html))){
    try{const parsed=JSON.parse(m[1].trim());if(Array.isArray(parsed))blocks.push(...parsed);else if(parsed&&parsed['@graph'])blocks.push(...parsed['@graph']);else blocks.push(parsed);}catch{}
  }
  return blocks;
}
function unique<T>(values:T[]){return Array.from(new Set(values));}
function absolute(base:URL,value:string){try{return new URL(value,base).toString();}catch{return '';}}
function attr(tag:string,name:string){
  const safe=name.replace(/[.*+?^$()|[\]\\]/g,'\\$&');
  const m=new RegExp(safe+'=["\\\']([^"\\\']+)["\\\']','i').exec(tag);
  return decode((m&&m[1])||'');
}
function unwrapImage(base:URL,value:string){
  const abs=absolute(base,decode(value));
  try{
    const parsed=new URL(abs);
    if(parsed.pathname.includes('/_next/image')&&parsed.searchParams.get('url'))return absolute(base,decode(parsed.searchParams.get('url')||''));
    return parsed.toString();
  }catch{return '';}
}
function imageCandidates(html:string,base:URL){
  const out:Array<{url:string;descriptor:string}>=[];
  const tags=html.match(/<img\s+[^>]*>/gi)||[];
  for(const tag of tags){
    let raw='';
    for(const key of ['src','data-src','data-lazy-src','data-original']){raw=attr(tag,key);if(raw)break;}
    if(!raw){
      const srcset=attr(tag,'srcset')||attr(tag,'data-srcset');
      raw=(srcset.split(',')[0]||'').trim().split(/\s+/)[0]||'';
    }
    const url=unwrapImage(base,raw);
    if(!/^https?:\/\//i.test(url))continue;
    const descriptor=[attr(tag,'alt'),attr(tag,'title'),attr(tag,'class'),attr(tag,'id'),raw].filter(Boolean).join(' ').toLowerCase();
    if(!out.some((x)=>x.url===url))out.push({url,descriptor});
  }
  return out;
}
function words(value=''){
  return decode(value).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').split(/\s+/)
    .filter((x)=>x.length>=4&&!['istanbul','turkey','property','properties','project','residence','apartments','apartment','sale','investment'].includes(x)).slice(0,8);
}
function firstNumber(...values:any[]){
  for(const value of values){
    const raw=String(value??'').replace(/\s/g,'').replace(/[^0-9.,-]/g,'');
    if(!raw)continue;
    const lc=raw.lastIndexOf(','),ld=raw.lastIndexOf('.');
    let normalized=raw;
    if(lc>ld)normalized=raw.replace(/\./g,'').replace(',','.');
    else if(ld>lc)normalized=raw.replace(/,/g,'');
    else normalized=raw.replace(/,/g,'.');
    const n=Number(normalized); if(Number.isFinite(n)&&n>0)return n;
  }
  return null;
}
function currencyFromText(text:string){
  const x=text.toUpperCase();
  if(/\bAED\b|DIRHAM/.test(x))return'AED';
  if(/\bUSD\b|US\s*DOLLAR|\$/.test(x))return'USD';
  if(/\bEUR\b|EURO|€/.test(x))return'EUR';
  if(/\bTRY\b|\bTL\b|TURK LIRASI|TÜRK LİRASI|₺/.test(x))return'TRY';
  if(/\bGBP\b|POUND|£/.test(x))return'GBP';
  return'';
}
function heuristicPrice(text:string){
  const patterns=[
    /(?:starting\s+price|price\s+from|price|prix|fiyat|satış\s+fiyatı|satis\s+fiyati)\s*[:\-]?\s*(?:AED|USD|EUR|TRY|TL|GBP|€|£|₺|\$)?\s*([0-9][0-9\s.,]{3,})/i,
    /(?:AED|USD|EUR|TRY|TL|GBP|€|£|₺|\$)\s*([0-9][0-9\s.,]{3,})/i,
    /([0-9][0-9\s.,]{3,})\s*(?:AED|USD|EUR|TRY|TL|GBP|€|£|₺|\$)/i
  ];
  for(const p of patterns){const m=p.exec(text);const n=m&&m[1]?firstNumber(m[1]):null;if(n&&n>=1000)return n;}
  return null;
}
function locationFromText(text:string){
  const lower=text.toLocaleLowerCase('tr-TR');
  const list=[
    {city:'istanbul',cityName:'Istanbul',countryCode:'TR',countryName:'Turkey',terms:['istanbul','i̇stanbul']},
    {city:'bodrum',cityName:'Bodrum',countryCode:'TR',countryName:'Turkey',terms:['bodrum']},
    {city:'antalya',cityName:'Antalya',countryCode:'TR',countryName:'Turkey',terms:['antalya']},
    {city:'dubai',cityName:'Dubai',countryCode:'AE',countryName:'United Arab Emirates',terms:['dubai','دبي']},
    {city:'batumi',cityName:'Batumi',countryCode:'GE',countryName:'Georgia',terms:['batumi','ბათუმი']},
    {city:'almaty',cityName:'Almaty',countryCode:'KZ',countryName:'Kazakhstan',terms:['almaty','алматы']}
  ];
  for(const item of list)if(item.terms.some((t)=>lower.includes(t)))return item;
  return{city:'',cityName:'',countryCode:'',countryName:''};
}
function heuristicDistrict(text:string){
  const patterns=[
    /Projenin\s+Yeri\s*[:\-]?\s*(?:İstanbul|Istanbul)\s*\/\s*([^|·,]{2,60})/i,
    /(?:district|quartier|ilçe|ilce|location)\s*[:\-]?\s*([^|·,]{2,60})/i
  ];
  for(const p of patterns){const m=p.exec(text);const v=decode((m&&m[1])||'').trim();if(v&&v.length<=60)return v;}
  return'';
}
function heuristicDelivery(text:string){
  const patterns=[
    /(?:handover|delivery|livraison|teslim(?:at)?(?:\s+tarihi)?)\s*[:\-]?\s*((?:Q[1-4]\s*)?20[2-4][0-9])/i,
    /((?:Q[1-4]\s*)?20[2-4][0-9])\s*(?:handover|delivery|livraison|teslim)/i
  ];
  for(const p of patterns){const m=p.exec(text);if(m&&m[1])return decode(m[1]);}
  return'';
}
function explicitDate(text:string){
  const iso=/\b(20[2-4][0-9])[-\/.](0?[1-9]|1[0-2])[-\/.](0?[1-9]|[12][0-9]|3[01])\b/.exec(text);
  if(iso)return iso[1]+'-'+String(iso[2]).padStart(2,'0')+'-'+String(iso[3]).padStart(2,'0');
  const dmy=/\b(0?[1-9]|[12][0-9]|3[01])[-\/.](0?[1-9]|1[0-2])[-\/.](20[2-4][0-9])\b/.exec(text);
  if(dmy)return dmy[3]+'-'+String(dmy[2]).padStart(2,'0')+'-'+String(dmy[1]).padStart(2,'0');
  return'';
}
function developerInfo(item:any,offer:any,text:string){
  const explicit=[item&&item.developer,item&&item.brand,item&&item.manufacturer,item&&item.provider,item&&item.seller,offer&&offer.seller,offer&&offer.provider].flat().filter(Boolean);
  for(const e of explicit){
    if(typeof e==='string'&&e.trim())return{name:decode(e),website:'',logo:''};
    if(e&&typeof e==='object'){
      const logoValue=typeof e.logo==='string'?e.logo:(e.logo&&e.logo.url)||(e.logo&&e.logo.contentUrl)||'';
      const info={name:decode(String(e.name||e.legalName||'')),website:decode(String(e.url||(Array.isArray(e.sameAs)&&e.sameAs[0])||'')),logo:decode(String(logoValue||''))};
      if(info.name||info.website||info.logo)return info;
    }
  }
  const patterns=[
    /(?:developed\s+by|developer(?:\s+behind)?|promoteur|geliştirici|gelistirici)\s*[:\-]?\s*([A-Z0-9][A-Za-z0-9&.'’\-\s]{2,80})/i,
    /(?:güvencesi\s+ve|guvencesi\s+ve)\s*([A-ZÇĞİÖŞÜ0-9][A-Za-zÇĞİÖŞÜçğıöşü0-9&.'’\-\s]{2,60})/i
  ];
  for(const p of patterns){const m=p.exec(text);const name=decode((m&&m[1])||'').split(/\s{2,}|\.|,|\||FAQ|About/i)[0].trim();if(name&&name.length<=80)return{name,website:'',logo:''};}
  return{name:'',website:'',logo:''};
}
function paymentPlan(text:string){
  const out:Array<{label:any;percentage:number;amount:null;due:any}>=[];
  const defs:Array<[RegExp,string,string]>=[
    [/booking|reservation|réservation|rezervasyon/i,'Reservation','At booking'],
    [/during\s+construction|construction|pendant\s+construction|inşaat|insaat/i,'During construction','During construction'],
    [/handover|delivery|livraison|teslim/i,'Handover','At handover'],
    [/post[-\s]?handover|after\s+handover|après\s+livraison|teslim\s+sonrası|teslim\s+sonrasi/i,'Post-handover','After handover']
  ];
  const snippets=text.match(/.{0,90}\b[0-9]{1,3}\s*%.{0,90}/gi)||[];
  for(const snippet of snippets.slice(0,25)){
    const pm=/([0-9]{1,3})\s*%/.exec(snippet); if(!pm)continue;
    const pct=Number(pm[1]); if(pct<=0||pct>100)continue;
    for(const def of defs){
      if(def[0].test(snippet)&&!out.some((x)=>x.label.fr===def[1]&&x.percentage===pct)){
        out.push({label:{fr:def[1],en:def[1],ru:def[1],ar:def[1]},percentage:pct,amount:null,due:{fr:def[2],en:def[2],ru:def[2],ar:def[2]}}); break;
      }
    }
  }
  const total=out.reduce((s,x)=>s+x.percentage,0); return !out.length||total>120?[]:out.slice(0,8);
}
function amenities(item:any,text:string){
  const raw=Array.isArray(item&&item.amenityFeature)?item.amenityFeature:(item&&item.amenityFeature?[item.amenityFeature]:[]);
  const structured=raw.map((x:any)=>decode(String(typeof x==='string'?x:(x&&x.name)||(x&&x.value)||''))).filter(Boolean);
  const defs:Array<[RegExp,string]>=[
    [/swimming pool|pool|piscine|yüzme havuzu|yuzme havuzu/i,'Swimming pool'],
    [/fitness|gym|spor salonu/i,'Fitness / gym'],[/spa|wellness/i,'Spa / wellness'],[/sauna/i,'Sauna'],[/hamam|hammam|turkish bath/i,'Hammam'],
    [/24\/7 security|security|güvenlik|guvenlik/i,'Security'],[/parking|car park|otopark/i,'Parking'],[/concierge/i,'Concierge'],
    [/playground|children.*play|çocuk oyun|cocuk oyun/i,'Children playground'],[/garden|landscap|bahçe|bahce/i,'Landscaped gardens'],
    [/sea view|deniz manzar/i,'Sea view'],[/metro|subway|underground|metrobus|metrobüs/i,'Public transport access']
  ];
  return unique(structured.concat(defs.filter((d)=>d[0].test(text)).map((d)=>d[1]))).slice(0,30);
}
function projectLinks(html:string,base:URL){
  let brochureUrl='';let floorplanUrl='';const re=/<a\s+[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;let m:RegExpExecArray|null;
  while((m=re.exec(html))){
    const href=absolute(base,decode(m[1]||''));const text=(stripHtml(m[2]||'')+' '+href).toLowerCase();
    if(!brochureUrl&&/brochure|catalog|catalogue|katalog|tanitim|tanıtım/.test(text))brochureUrl=href;
    if(!floorplanUrl&&/floor\s*plan|kat\s*plani|kat\s*planı|plan\s*d['’]?etage|plan\s*d['’]?étage/.test(text))floorplanUrl=href;
  }
  return{brochureUrl,floorplanUrl};
}
function logoData(candidates:Array<{url:string;descriptor:string}>,projectName:string,developerName:string,item:any,dev:any,base:URL,nodes:any[]){
  const logoLike=candidates.filter((x)=>/logo|brandmark|wordmark/.test(x.descriptor));
  const pw=words(projectName),dw=words(developerName);
  const has=(desc:string,ws:string[])=>ws.length>0&&ws.some((w)=>desc.includes(w));
  let developerLogo=dev.logo?absolute(base,dev.logo):'';
  if(!developerLogo&&dw.length)developerLogo=(logoLike.find((x)=>has(x.descriptor,dw))||{url:''}).url;
  let projectLogo='';
  if(pw.length)projectLogo=(logoLike.find((x)=>has(x.descriptor,pw)&&x.url!==developerLogo)||{url:''}).url;
  const itemLogo=typeof (item&&item.logo)==='string'?item.logo:(item&&item.logo&&item.logo.url)||(item&&item.logo&&item.logo.contentUrl)||'';
  if(!projectLogo&&itemLogo)projectLogo=absolute(base,String(itemLogo));
  const orgLogos:string[]=[];
  for(const node of nodes){
    const ts=Array.isArray(node&&node['@type'])?node['@type']:[node&&node['@type']];
    if(!ts.some((t:any)=>['Organization','Corporation','RealEstateAgent'].includes(String(t))))continue;
    const lv=typeof node.logo==='string'?node.logo:(node.logo&&node.logo.url)||(node.logo&&node.logo.contentUrl)||'';
    const nw=words(String(node.name||node.legalName||''));
    if(lv&&(!developerName||nw.some((w)=>dw.includes(w))))orgLogos.push(absolute(base,String(lv)));
  }
  if(!developerLogo&&orgLogos.length)developerLogo=orgLogos[0];
  return{projectLogo,developerLogo,logoCandidates:unique([projectLogo,developerLogo].concat(logoLike.map((x)=>x.url)).concat(orgLogos).filter(Boolean)).slice(0,12)};
}
async function verifyPortalUser(request:NextRequest){
  const token=bearer(request);if(!token)return null;
  const client=createClient(SUPABASE_URL,PUBLISHABLE_KEY,{global:{headers:{Authorization:'Bearer '+token}},auth:{persistSession:false,autoRefreshToken:false}});
  const auth=await client.auth.getUser(token);if(!auth.data.user)return null;
  const p=await client.from('profiles').select('role,status').eq('user_id',auth.data.user.id).maybeSingle();
  if(!p.data||p.data.status!=='active'||!['admin','partner'].includes(p.data.role))return null;
  return{client,user:auth.data.user};
}
async function copyMap(client:any,userId:string,urls:string[],folder:string){
  const out:Record<string,string>={};
  for(const remote of urls.slice(0,16)){
    try{
      const r=await fetch(remote,{redirect:'follow',signal:AbortSignal.timeout(12000)});if(!r.ok)continue;
      const type=(r.headers.get('content-type')||'').split(';')[0];if(!['image/jpeg','image/png','image/webp','image/avif'].includes(type))continue;
      const bytes=new Uint8Array(await r.arrayBuffer());if(bytes.byteLength>15*1024*1024)continue;
      const ext=type==='image/png'?'png':type==='image/webp'?'webp':type==='image/avif'?'avif':'jpg';
      const path='submissions/'+userId+'/'+folder+'/'+crypto.randomUUID()+'.'+ext;
      const up=await client.storage.from('property-images').upload(path,bytes,{contentType:type,cacheControl:'31536000'});if(up.error)continue;
      out[remote]=client.storage.from('property-images').getPublicUrl(path).data.publicUrl;
    }catch{}
  }
  return out;
}

export async function POST(request:NextRequest){
  const portal=await verifyPortalUser(request);
  if(!portal)return NextResponse.json({error:'Accès Bosphoras actif requis.'},{status:401});
  const body=await request.json().catch(()=>null);const source=String(body&&body.url||'').trim();
  if(!source)return NextResponse.json({error:'URL manquante.'},{status:400});
  let url:URL;try{url=await safeUrl(source);}catch(e){return NextResponse.json({error:e instanceof Error?e.message:'URL invalide.'},{status:400});}
  const response=await fetch(url,{redirect:'follow',headers:{'User-Agent':'Mozilla/5.0 (compatible; BosphorasProjectDesk/1.0; +https://www.bosphoras.com)',Accept:'text/html,application/xhtml+xml'},signal:AbortSignal.timeout(15000)});
  if(!response.ok)return NextResponse.json({error:'La page distante répond '+response.status+'.'},{status:422});
  const html=await response.text();if(html.length>6000000)return NextResponse.json({error:'Page trop volumineuse.'},{status:422});

  const nodes=jsonLd(html).filter((x)=>x&&typeof x==='object');
  const offer=nodes.find((x)=>x['@type']==='Offer'||x['@type']==='AggregateOffer'||x.offers)||{};
  const item=(offer&&offer.itemOffered)||nodes.find((x)=>['Apartment','House','Residence','Product','RealEstateListing','Accommodation','Place'].includes(String(x['@type'])))||{};
  const nested=Array.isArray(item.offers)?item.offers[0]:(item.offers||offer||{});
  const address=item.address||offer.address||{};
  const h1=stripHtml((/<h1[^>]*>([\s\S]*?)<\/h1>/i.exec(html)||[])[1]||'');
  const ogTitle=meta(html,'og:title');
  const htmlTitle=decode((/<title[^>]*>([\s\S]*?)<\/title>/i.exec(html)||[])[1]||'');
  const projectName=decode(String(item.name||offer.name||h1||ogTitle||htmlTitle||''));
  const description=meta(html,'og:description')||meta(html,'description')||stripHtml(String(item.description||offer.description||''));
  const rawText=stripHtml(html).slice(0,30000);
  const dev=developerInfo(item,offer,rawText);
  const imagesMeta=imageCandidates(html,url);
  const logos=logoData(imagesMeta,projectName,dev.name,item,dev,url,nodes);
  const galleryRemote=unique(
    allMeta(html,'og:image').map((x)=>absolute(url,x))
      .concat([item.image,offer.image].flat(Infinity).filter((x)=>typeof x==='string').map((x:any)=>absolute(url,x)))
      .concat(imagesMeta.map((x)=>x.url))
  ).filter((x)=>/^https?:\/\//i.test(x)&&!logos.logoCandidates.includes(x)&&!/favicon|icon\.(?:png|svg|ico)(?:\?|$)/i.test(x)).slice(0,28);

  const copy=body&&body.copyImages===false?{}:await copyMap(portal.client,portal.user.id,galleryRemote,'project-imports');
  const copiedImages=galleryRemote.map((x)=>copy[x]).filter(Boolean);
  const logoCopy=body&&body.copyImages===false?{}:await copyMap(portal.client,portal.user.id,logos.logoCandidates,'project-assets');
  const projectLogo=logos.projectLogo?(logoCopy[logos.projectLogo]||logos.projectLogo):'';
  const developerLogo=logos.developerLogo?(logoCopy[logos.developerLogo]||logos.developerLogo):'';

  const structuredCurrency=String(nested.priceCurrency||offer.priceCurrency||item.priceCurrency||'').toUpperCase();
  const currency=['EUR','USD','TRY','GBP','CHF','AED','KZT','GEL'].includes(structuredCurrency)?structuredCurrency:currencyFromText(rawText);
  const priceMin=firstNumber(nested.lowPrice,offer.lowPrice,nested.price,item.price)||heuristicPrice(rawText);
  const priceMax=firstNumber(nested.highPrice,offer.highPrice);
  const structuredLocality=decode(String(address.addressLocality||item.addressLocality||''));
  const structuredRegion=decode(String(address.addressRegion||''));
  const detected=locationFromText(projectName+' '+structuredLocality+' '+structuredRegion+' '+rawText.slice(0,7000));
  const cityName=structuredLocality||detected.cityName;
  const city=detected.city||(cityName?cityName.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''):'');
  const district=structuredRegion||heuristicDistrict(rawText);
  const countryName=decode(String((address.addressCountry&&address.addressCountry.name)||address.addressCountry||''))||detected.countryName;
  const countryCode=detected.countryCode||'';
  const street=decode(String(address.streetAddress||''));const postal=decode(String(address.postalCode||''));
  const fullAddress=[street,postal,cityName,district].filter(Boolean).join(', ');
  const delivery=heuristicDelivery(rawText);
  const completionDate=explicitDate(delivery)||explicitDate(rawText.slice(0,12000));
  const plan=paymentPlan(rawText);
  const firstPct=Number(plan[0]&&plan[0].percentage||0);
  const entryCapital=priceMin&&firstPct>0?Math.round(Number(priceMin)*firstPct/100):null;
  const links=projectLinks(html,url);

  const data={
    sourceUrl:url.toString(),sourceHost:url.hostname,projectName,
    description:decode(description).slice(0,10000),summary:decode(description).slice(0,700),
    developer:dev.name,developerWebsite:dev.website,developerLogo,
    projectLogo,logoCandidates:logos.logoCandidates.map((x)=>logoCopy[x]||x),
    countryCode,countryName,city,cityName,district,address:fullAddress,
    currency,priceMin,priceMax,entryCapital,delivery,completionDate,
    paymentPlan:plan,amenities:amenities(item,rawText),highlights:[],
    brochureUrl:links.brochureUrl,floorplanUrl:links.floorplanUrl,
    images:copiedImages.length?copiedImages:galleryRemote,remoteImages:galleryRemote,
    heroImage:(copiedImages[0]||galleryRemote[0]||''),rawText
  };

  const job=await portal.client.from('property_import_jobs').insert({
    created_by:portal.user.id,source_url:url.toString(),source_host:url.hostname,status:'extracted',extracted_data:data
  }).select('id').single();

  return NextResponse.json({ok:true,importJobId:job.data&&job.data.id||null,data});
}
