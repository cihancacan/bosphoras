import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const runtime='nodejs';
const url=process.env.SUPABASE_URL||process.env.NEXT_PUBLIC_SUPABASE_URL||'https://udbzytlmcnljlegmolcx.supabase.co';
const key=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY||'sb_publishable_yQPc71ry-F3aqBLhj6OPig_cFs_u-Pa';

const trim=(v:unknown,max:number)=>String(v??'').trim().slice(0,max);

export async function POST(request:NextRequest){
  try {
    const body=await request.json().catch(()=>null);
    if(!body || typeof body!=='object')return NextResponse.json({error:'Données invalides.'},{status:400});
    if(body.website)return NextResponse.json({ok:true}); // hidden spam trap
    const full_name=trim(body.full_name,160);
    const email=trim(body.email,254).toLowerCase();
    const phone=trim(body.phone,60);
    const budget=trim(body.budget,100);
    const message=trim(body.message,2000);
    const listing_id=trim(body.listing_id,80);
    const project_id=trim(body.project_id,80);
    const locale=['fr','en','ru','ar'].includes(body.locale)?body.locale:'fr';
    if(full_name.length<2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !body.accepts_contact || !/^[0-9a-f-]{36}$/i.test(listing_id) || !/^[0-9a-f-]{36}$/i.test(project_id)){
      return NextResponse.json({error:'Complétez le nom, un e-mail valide et le consentement.'},{status:400});
    }
    const client=createClient(url,key,{auth:{persistSession:false,autoRefreshToken:false}});
    const {error}=await client.from('project_inquiries').insert({
      listing_id,project_id,full_name,email,phone:phone||null,budget:budget||null,message:message||null,
      locale,accepts_contact:true,wants_similar_options:body.wants_similar_options===true
    });
    if(error){
      console.error('[project-inquiry] insert refused',error.code,error.message);
      return NextResponse.json({error:'La demande n’a pas pu être enregistrée. Réessayez ou contactez Bosphoras.'},{status:503});
    }
    return NextResponse.json({ok:true});
  }catch(error){
    console.error('[project-inquiry] error',error instanceof Error?error.message:'unknown');
    return NextResponse.json({error:'Une erreur est survenue.'},{status:500});
  }
}
