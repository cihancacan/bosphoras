import 'server-only';
import {isIP} from 'node:net';
import {lookup} from 'node:dns/promises';

export const AMENITIES=[
 {code:'pool',fr:'Piscine',en:'Pool',ru:'Бассейн',ar:'مسبح',pattern:/\b(?:swimming pool|pools?|poolside|piscine|yüzme havuzu|havuz|бассейн|مسبح)\b/i},
 {code:'gym',fr:'Salle de sport',en:'Gym',ru:'Тренажёрный зал',ar:'صالة رياضية',pattern:/\b(?:gym(?:nasium)?|fitness|health club|salle de sport|spor salonu|фитнес|gym)\b/i},
 {code:'spa',fr:'Spa',en:'Spa',ru:'Спа',ar:'سبا',pattern:/\b(?:spa|wellness center|centre de bien-être|спа|سبا)\b/i},
 {code:'hammam',fr:'Hammam',en:'Hammam',ru:'Хаммам',ar:'حمّام',pattern:/\b(?:hammam|hamam|turkish bath|steam room|buhar odası|хаммам)\b/i},
 {code:'sauna',fr:'Sauna',en:'Sauna',ru:'Сауна',ar:'ساونا',pattern:/\b(?:sauna|сауна)\b/i},
 {code:'bbq',fr:'Barbecue',en:'BBQ',ru:'Барбекю',ar:'شواء',pattern:/\b(?:bbq|barb[ae]cue|grilling area|barbekü|барбекю)\b/i},
 {code:'cinema',fr:'Cinéma',en:'Cinema',ru:'Кинотеатр',ar:'سينما',pattern:/\b(?:cinema|movie theatre|movie theater|screening room|outdoor theatre|outdoor theater|sinema|кинотеатр)\b/i},
 {code:'yoga',fr:'Yoga',en:'Yoga',ru:'Йога',ar:'يوغا',pattern:/\b(?:yoga|йога)\b/i},
 {code:'boxing',fr:'Boxe',en:'Boxing',ru:'Бокс',ar:'ملاكمة',pattern:/\b(?:boxing|boxing ring|boxe|boks|бокс)\b/i},
 {code:'kids',fr:'Espace enfants',en:'Kids area',ru:'Детская зона',ar:'منطقة أطفال',pattern:/\b(?:kids play|playground|children.s play|kids club|childrens playground|oyun alanı|детская площадка)\b/i},
 {code:'tennis',fr:'Tennis',en:'Tennis',ru:'Теннис',ar:'تنس',pattern:/\b(?:tennis|теннис)\b/i},
 {code:'basketball',fr:'Basketball',en:'Basketball',ru:'Баскетбол',ar:'كرة السلة',pattern:/\b(?:basketball|баскетбол)\b/i},
 {code:'jogging',fr:'Jogging',en:'Jogging trail',ru:'Беговая дорожка',ar:'مسار للجري',pattern:/\b(?:jogging|running track|running trail|course à pied|беговая дорожка)\b/i},
 {code:'garden',fr:'Jardins',en:'Gardens',ru:'Сады',ar:'حدائق',pattern:/\b(?:landscaped garden|gardens?|green spaces?|pocket park|jardin|bahçe|сад|حدائق)\b/i},
 {code:'concierge',fr:'Conciergerie',en:'Concierge',ru:'Консьерж',ar:'كونسيرج',pattern:/\b(?:concierge|conciergerie|консьерж)\b/i},
 {code:'security',fr:'Sécurité',en:'Security',ru:'Охрана',ar:'أمن',pattern:/\b(?:24.?7 security|security staff|gated community|security service|güvenlik|охрана)\b/i},
] as const;

export type AmenityCode=typeof AMENITIES[number]['code'];
export function detectAmenities(text:string){
 return AMENITIES.flatMap(a=>{
  const match=a.pattern.exec(text);
  if(!match)return [];
  const context=text.slice(Math.max(0,match.index-48),Math.min(text.length,match.index+100)).replace(/\s+/g,' ').trim();
  if(/\b(?:without|no|not included|pas de|sans)\s+(?:\w+\s+){0,2}$/i.test(context.slice(0,50)))return [];
  return [{code:a.code,evidence:context.slice(0,135)}];
 });
}
const decode=(s:string)=>s.replace(/&(?:amp|lt|gt|quot|apos|nbsp|#39|#34|#x27);/gi,a=>({'&amp;':'&','&lt;':'<','&gt;':'>','&quot;':'"','&apos;':"'",'&nbsp;':' ','&#39;':"'",'&#34;':'"','&#x27;':"'"}[a.toLowerCase()]||' ')).replace(/&#(\d+);/g,(_,n)=>String.fromCharCode(Number(n))).replace(/\s+/g,' ').trim();
const cleanHtml=(s:string)=>decode(s.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,' ').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi,' ').replace(/<svg\b[^>]*>[\s\S]*?<\/svg>/gi,' ').replace(/<[^>]+>/g,' '));
const norm=(s:string)=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
function privateIp(ip:string){
 if(isIP(ip)===4){
  const a=ip.split('.').map(Number);
  return a[0]===0||a[0]===10||a[0]===127||a[0]>=224||
    (a[0]===169&&a[1]===254)||(a[0]===172&&a[1]>=16&&a[1]<=31)||
    (a[0]===192&&a[1]===168)||(a[0]===100&&a[1]>=64&&a[1]<=127)||
    (a[0]===192&&a[1]===0)||(a[0]===198&&a[1]>=18&&a[1]<=19);
 }
 if(isIP(ip)===6){
  const v=ip.toLowerCase();
  return v==='::1'||v==='::'||v.startsWith('fe80:')||v.startsWith('fc')||v.startsWith('fd')||
    v.startsWith('ff')||v.startsWith('::ffff:');
 }
 return true;
}
export async function validExternalUrl(value:string){
 let url:URL;
 try{url=new URL(value);}catch{throw new Error('Adresse du site officiel invalide.');}
 const host=url.hostname.toLowerCase().replace(/\.$/,'');
 if(url.protocol!=='https:'||!host||host==='localhost'||host.endsWith('.local')||host.endsWith('.internal')||
   host.endsWith('.localhost')||url.port&&url.port!=='443'||url.username||url.password||isIP(host)) {
  throw new Error('Seuls les sites publics HTTPS avec domaine DNS sont autorisés.');
 }
 if(url.href.length>1600)throw new Error('URL trop longue.');
 const addresses=await lookup(host,{all:true,verbatim:true});
 if(!addresses.length||addresses.some(a=>privateIp(a.address)))throw new Error('Le domaine ne résout pas vers une adresse Internet publique.');
 url.hash='';return url;
}
export async function fetchPublicHtml(value:string){
 let url=await validExternalUrl(value);
 for(let attempt=0;attempt<3;attempt++){
  const res=await fetch(url,{redirect:'manual',cache:'no-store',signal:AbortSignal.timeout(11000),
    headers:{Accept:'text/html,application/xhtml+xml','User-Agent':'BosphorasProjectResearch/1.0 (+https://bosphoras.com)'}});
  if(res.status>=300&&res.status<400){
   const target=res.headers.get('location');if(!target)throw new Error('Redirection non valide.');
   const next=await validExternalUrl(new URL(target,url).toString());
   if(next.hostname!==url.hostname&&!next.hostname.endsWith('.'+url.hostname)&&!url.hostname.endsWith('.'+next.hostname))
    throw new Error('La page redirige vers un domaine différent. Vérifie le lien officiel.');
   url=next;continue;
  }
  if(!res.ok)throw new Error('Site officiel inaccessible (HTTP '+res.status+').');
  if(!/text\/html|application\/xhtml/i.test(res.headers.get('content-type')||''))throw new Error('La page ne fournit pas de HTML exploitable.');
  const len=Number(res.headers.get('content-length')||0);if(len>1300000)throw new Error('Page trop volumineuse.');
  const reader=res.body?.getReader();
  if(!reader)throw new Error('Réponse vide.');
  const parts:Uint8Array[]=[];let total=0;
  while(true){const {done,value}=await reader.read();if(done)break;total+=value.length;if(total>1300000){await reader.cancel();throw new Error('Page trop volumineuse.');}parts.push(value)}
  const bytes=new Uint8Array(total);let at=0;for(const part of parts){bytes.set(part,at);at+=part.length}
  return {url:url.toString(),html:new TextDecoder().decode(bytes)};
 }
 throw new Error('Trop de redirections.');
}
function attr(node:string,name:string){
 const m=new RegExp('(?:\\s|^)'+name+'\\s*=\\s*(?:"([^"]*)"|\x27([^\x27]*)\x27|([^\\s>]+))','i').exec(node);
 return decode(m?.[1]||m?.[2]||m?.[3]||'');
}
function meta(html:string,name:string){
 const tags=html.match(/<meta\b[^>]+>/gi)||[];
 const tag=tags.find(t=>attr(t,'property')===name||attr(t,'name')===name);
 return tag?attr(tag,'content'):'';
}
function eligibleImage(raw:string,base:string){
 if(!raw||raw.startsWith('data:')||raw.startsWith('blob:'))return null;
 try{const u=new URL(raw,base);if(u.protocol!=='https:'||!u.hostname)return null;
   if(/\.svg(?:\?|$)|icon|favicon|logo|pixel|tracker|sprite/i.test(u.pathname)||u.href.length>1500)return null;
   return u.toString();
 }catch{return null}
}
function jsonLd(html:string){
 const match=[...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
 const objects:any[]=[];
 for(const m of match.slice(0,12)){try{const obj=JSON.parse(m[1]);objects.push(...(Array.isArray(obj)?obj:[obj]));}catch{}}
 return objects;
}
export function normalizeSiteName(value:string){return norm(value);}
function matchesProject(name:string,url:string,title:string,h1:string){
 const q=norm(name),where=norm([url,title,h1].join(' '));if(!q||!where)return false;
 const terms=q.split(' ').filter(t=>t.length>=3&&!['the','tower','residences','dubai','phase','gardens','apartments'].includes(t));
 const matched=terms.filter(t=>where.split(' ').includes(t));
 return terms.length===0?where.includes(q):matched.length>=Math.min(2,terms.length) && (terms.length<3||matched.length>=Math.ceil(terms.length*.55));
}
export function parseOfficialProjectPage(html:string,url:string,project:{name:string;city:string;district:string;developer:string}){
 const title=meta(html,'og:title')||meta(html,'twitter:title')||cleanHtml((/<title[^>]*>([\s\S]*?)<\/title>/i.exec(html)||[])[1]||'');
 const h1=cleanHtml((/<h1\b[^>]*>([\s\S]*?)<\/h1>/i.exec(html)||[])[1]||'');
 if(!matchesProject(project.name,url,title,h1))throw new Error('Page non reconnue comme celle de ce programme. Vérifie son titre ou son URL.');
 const main=(/<main\b[^>]*>([\s\S]*?)<\/main>/i.exec(html)||[])[1]||html;
 const body=cleanHtml(main).slice(0,55000);
 const metaDesc=meta(html,'og:description')||meta(html,'description')||'';
 const paragraphs=Array.from(main.matchAll(/<(?:p|h[2-5]|li)\b[^>]*>([\s\S]*?)<\/(?:p|h[2-5]|li)>/gi))
   .map(m=>cleanHtml(m[1])).filter(t=>t.length>=35&&t.length<=650).slice(0,35);
 const excerpt=[metaDesc,...paragraphs].filter(Boolean).slice(0,9).join('\n').slice(0,2500);
 const facts=detectAmenities([metaDesc,...paragraphs,body.slice(0,16000)].join(' '));
 const images:string[]=[];
 const add=(value:string)=>{const image=eligibleImage(value,url);if(image)images.push(image)};
 for(const v of [meta(html,'og:image'),meta(html,'twitter:image'),meta(html,'twitter:image:src')])add(v);
 // Include lazy-loaded, responsive <picture> sources and common project gallery attributes.
 for(const m of html.matchAll(/<(?:img|source)\b[^>]*>/gi)){
   for(const key of ['src','data-src','data-lazy-src','data-original','data-image','data-full','data-zoom-image','poster'])add(attr(m[0],key));
   for(const key of ['srcset','data-srcset']){
     const list=attr(m[0],key);
     for(const part of list.split(',')){const candidate=part.trim().split(/\s+/)[0];if(candidate)add(candidate)}
   }
 }
 // Structured data frequently carries the gallery even when HTML uses a JS carousel.
 for(const obj of jsonLd(html)){
   const visit=(value:any,depth=0):void=>{
     if(depth>5||images.length>100)return;
     if(typeof value==='string'){if(/^https?:\/\//.test(value)&&/\.(?:jpe?g|png|webp|avif)(?:\?|$)/i.test(value))add(value);return}
     if(Array.isArray(value)){for(const x of value.slice(0,40))visit(x,depth+1);return}
     if(value&&typeof value==='object'){for(const k of ['image','images','photo','photos','contentUrl','url','thumbnailUrl','@graph','associatedMedia'])if(value[k])visit(value[k],depth+1)}
   };
   visit(obj);
 }
 // JSON hydration often embeds absolute gallery URLs, which are suggestions only.
 for(const match of html.matchAll(/https?:\\?\/\\?\/[^"'\s<>\\]+\.(?:jpe?g|png|webp|avif)(?:\?[^"'\s<>\\]*)?/gi)){
   if(images.length>110)break;
   add(match[0].replace(/\\\//g,'/'));
 }
 const media=[...new Set(images)].slice(0,24).map(url=>({url}));
 const units=Array.from(new Set(Array.from(body.matchAll(/\b(?:studio|[1-6](?:\s*(?:-|to)\s*[1-6])?\s*(?:bedroom|bed|br|chambres?|yatak odalı))\b/gi)).map(x=>x[0]))).slice(0,9);
 let coordinates:{lat:number;lng:number}|null=null;
 for(const item of jsonLd(html)){
  for(const info of [item,item?.geo,item?.location,item?.address]){
    const geo=info?.geo||info;
    const lat=Number(geo?.latitude),lng=Number(geo?.longitude);
    if(Number.isFinite(lat)&&Number.isFinite(lng)&&lat!==0&&lng!==0&&Math.abs(lat)<=90&&Math.abs(lng)<=180){
      coordinates={lat,lng};break;
    }
  }
  if(coordinates)break;
 }
 const intro='Le programme '+project.name+' est présenté par '+project.developer+
   (project.district?' dans le secteur de '+project.district:'')+
   (project.city?', à '+project.city:'')+'.';
 const amenityNames=facts.map(x=>AMENITIES.find(a=>a.code===x.code)?.fr).filter(Boolean);
 const summary=intro+(amenityNames.length?' Parmi les installations et espaces mentionnés figurent : '+amenityNames.join(', ')+'.':'')+
    (units.length?' La présentation évoque notamment '+units.join(', ')+'.':'')+
    ' Les caractéristiques, dates, prix et disponibilités doivent être vérifiés auprès du promoteur.';
 return {
   source_title:title||h1,source_excerpt:excerpt,
   suggested_description:{fr:excerpt ? (intro+' '+excerpt.slice(0,1700)+' Les prix et disponibilités doivent être confirmés auprès du promoteur.') : summary,en:'',ru:'',ar:''},
   suggested_amenities:facts.map(x=>x.code),
   amenity_evidence:Object.fromEntries(facts.map(x=>[x.code,x.evidence])),
   suggested_images:media,suggested_latitude:coordinates?.lat??null,
   suggested_longitude:coordinates?.lng??null,
   unit_mentions:units,
 };
}
export function discoverProjectLink(html:string,base:string,name:string){
 const links=[...html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)].slice(0,600);
 let best:{url:string;score:number}|null=null;
 const tokens=norm(name).split(' ').filter(w=>w.length>=3);
 for(const m of links){
  const href=attr(m[0],'href');if(!href)continue;
  let target:URL;try{target=new URL(href,base)}catch{continue}
  const origin=new URL(base);
  if(target.hostname!==origin.hostname&&!target.hostname.endsWith('.'+origin.hostname))continue;
  const text=norm(cleanHtml(m[2])+' '+target.pathname);
  let score=tokens.reduce((n,t)=>n+(text.split(' ').includes(t)?2:0),0);
  if(norm(target.pathname).includes(norm(name)))score+=9;
  if(score>=(tokens.length===1?3:Math.ceil(tokens.length*.8)*2) && (!best||score>best.score))best={url:target.toString(),score};
 }
 return best?.url||null;
}
