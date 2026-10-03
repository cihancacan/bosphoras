// @ts-nocheck
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const runtime='nodejs';
export const maxDuration=30;

const SUPABASE_URL=process.env.SUPABASE_URL||process.env.NEXT_PUBLIC_SUPABASE_URL||'https://udbzytlmcnljlegmolcx.supabase.co';
const PUBLISHABLE_KEY=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY||'sb_publishable_yQPc71ry-F3aqBLhj6OPig_cFs_u-Pa';
const SOURCE_ORIGIN='https://www.istanbulpropertyforsale.com';

function bearer(request:NextRequest){
  const h=request.headers.get('authorization')||'';
  return h.startsWith('Bearer ')?h.slice(7).trim():'';
}
async function verifyAdmin(request:NextRequest){
  const token=bearer(request); if(!token)return null;
  const client=createClient(SUPABASE_URL,PUBLISHABLE_KEY,{global:{headers:{Authorization:`Bearer ${token}`}},auth:{persistSession:false,autoRefreshToken:false}});
  const {data:auth}=await client.auth.getUser(token); if(!auth.user)return null;
  const {data:profile}=await client.from('profiles').select('role,status').eq('user_id',auth.user.id).maybeSingle();
  if(!profile||profile.status!=='active'||profile.role!=='admin')return null;
  return {client,user:auth.user};
}
function decode(value=''){
  return value.replace(/&#x([0-9a-f]+);/gi,(_,h)=>String.fromCodePoint(parseInt(h,16)||32))
    .replace(/&#([0-9]+);/g,(_,d)=>String.fromCodePoint(parseInt(d,10)||32))
    .replace(/&nbsp;/gi,' ').replace(/&amp;/gi,'&').replace(/&quot;/gi,'"').replace(/&#39;/gi,"'")
    .replace(/&lt;/gi,'<').replace(/&gt;/gi,'>').replace(/\s+/g,' ').trim();
}
function strip(value=''){return decode(value.replace(/<script[\s\S]*?<\/script>/gi,' ').replace(/<style[\s\S]*?<\/style>/gi,' ').replace(/<[^>]+>/g,' '));}
function absolute(value=''){try{return new URL(decode(value),SOURCE_ORIGIN).toString();}catch{return '';}}
function parseMoney(text=''){
  const patterns=[
    /(\$)\s*([0-9][0-9.,\s]{2,})/,
    /(€)\s*([0-9][0-9.,\s]{2,})/,
    /(£)\s*([0-9][0-9.,\s]{2,})/,
    /(₺)\s*([0-9][0-9.,\s]{2,})/,
    /\b(USD|EUR|GBP|TRY|TL)\s*([0-9][0-9.,\s]{2,})/i,
  ];
  for(const re of patterns){
    const m=re.exec(text); if(!m)continue;
    const sym=m[1].toUpperCase();
    const currency=sym==='$'?'USD':sym==='€'?'EUR':sym==='£'?'GBP':sym==='₺'||sym==='TL'?'TRY':sym;
    const raw=m[2].replace(/\s/g,'');
    const lastComma=raw.lastIndexOf(','),lastDot=raw.lastIndexOf('.');
    let normalized=raw;
    if(lastDot>lastComma&&raw.length-lastDot===4)normalized=raw.replace(/,/g,'');
    else if(lastComma>lastDot&&raw.length-lastComma===4)normalized=raw.replace(/\./g,'').replace(/,/g,'');
    else normalized=raw.replace(/[.,](?=\d{3}(?:\D|$))/g,'').replace(',','.');
    const price=Number(normalized.replace(/[^0-9.]/g,''));
    if(Number.isFinite(price)&&price>0)return {price,currency};
  }
  return {price:null,currency:''};
}
function pickImage(chunk=''){
  const tags=chunk.match(/<img\s+[^>]*>/gi)||[];
  for(const tag of tags){
    for(const attr of ['data-src','data-original','src']){
      const m=new RegExp(`${attr}=["']([^"']+)["']`,'i').exec(tag);
      const url=m?.[1]?absolute(m[1]):'';
      if(url&&!/logo|favicon|icon|flag/i.test(url))return url;
    }
  }
  return '';
}
function sourceId(url:string){
  return /\/real-estate\/(\d+)\//.exec(url)?.[1]||/\/real-estate\/(\d+)/.exec(url)?.[1]||'';
}

export async function GET(request:NextRequest){
  const admin=await verifyAdmin(request);
  if(!admin)return NextResponse.json({error:'Accès administrateur requis.'},{status:401});
  const page=Math.min(300,Math.max(1,Number(request.nextUrl.searchParams.get('page')||1)||1));
  const remote=page===1?`${SOURCE_ORIGIN}/istanbul-properties`:`${SOURCE_ORIGIN}/istanbul-properties/page/${page}`;
  const response=await fetch(remote,{headers:{'User-Agent':'Mozilla/5.0 (compatible; BosphorasPartnerCatalog/1.0; +https://www.bosphoras.com)','Accept':'text/html,application/xhtml+xml'},redirect:'follow',signal:AbortSignal.timeout(15000)});
  if(!response.ok)return NextResponse.json({error:`Catalogue partenaire indisponible (${response.status}).`},{status:502});
  const html=await response.text();
  const re=/<a\b[^>]*href=["']([^"']*\/istanbul-property\/real-estate\/\d+\/[^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi;
  const found=new Map<string,{url:string,title:string,positions:number[]}>();
  let m:RegExpExecArray|null;
  while((m=re.exec(html))){
    const url=absolute(m[1]); if(!url)continue;
    const title=strip(m[2]);
    const row=found.get(url)||{url,title:'',positions:[]};
    if(title.length>row.title.length&&title.length<220)row.title=title;
    row.positions.push(m.index);
    found.set(url,row);
  }
  const items=Array.from(found.values()).map(row=>{
    const pos=row.positions[0]||0;
    const chunk=html.slice(Math.max(0,pos-1800),Math.min(html.length,pos+4200));
    const text=strip(chunk);
    const money=parseMoney(text);
    let title=row.title;
    if(!title||title.toLowerCase()==='view more'){
      const h=/<h[2-4][^>]*>([\s\S]*?)<\/h[2-4]>/i.exec(chunk)?.[1]||'';
      title=strip(h);
    }
    const id=sourceId(row.url);
    return {
      source:'istanbulpropertyforsale',
      sourceId:id,
      externalId:id?`IPFS-${id}`:'',
      sourceUrl:row.url,
      title:title||`Property ${id}`,
      price:money.price,
      currency:money.currency,
      image:pickImage(chunk),
    };
  }).filter(x=>x.sourceId);
  const nextHref=`/istanbul-properties/page/${page+1}`;
  const hasNext=html.includes(nextHref)||items.length>=8;
  return NextResponse.json({ok:true,source:'Istanbul Property For Sale',page,items,hasNext,sourceUrl:remote});
}
