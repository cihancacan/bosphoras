import {NextResponse} from 'next/server';
import {createClient} from '@supabase/supabase-js';
export const runtime='nodejs';
const supabaseUrl=process.env.SUPABASE_URL||process.env.NEXT_PUBLIC_SUPABASE_URL||'https://udbzytlmcnljlegmolcx.supabase.co';
const anon=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY||'sb_publishable_yQPc71ry-F3aqBLhj6OPig_cFs_u-Pa';
const safe=(v:unknown,max:number)=>String(v??'').trim().slice(0,max);
export async function POST(request:Request){
  try{
    const body=await request.json().catch(()=>null);
    if(!body||typeof body!=='object')return NextResponse.json({error:'Format invalide.'},{status:400});
    if(body.website)return NextResponse.json({ok:true});
    const listingIds=Array.isArray(body.listing_ids)?[...new Set(body.listing_ids)].slice(0,7):[];
    const valid=listingIds.length>=2&&listingIds.length<=6&&listingIds.every(x=>typeof x==='string'&&/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(x));
    const full_name=safe(body.full_name,160),email=safe(body.email,254).toLowerCase();
    if(!valid||full_name.length<2||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)||body.accepts_contact!==true)
      return NextResponse.json({error:'Sélectionnez 2 à 6 programmes, puis indiquez votre nom, email et consentement.'},{status:400});
    const client=createClient(supabaseUrl,anon,{auth:{persistSession:false,autoRefreshToken:false}});
    const {error}=await client.from('project_shortlist_inquiries').insert({
      listing_ids:listingIds,full_name,email,phone:safe(body.phone,60)||null,
      budget:safe(body.budget,100)||null,investment_goal:safe(body.investment_goal,150)||null,
      desired_timeline:safe(body.desired_timeline,100)||null,message:safe(body.message,2000)||null,
      locale:['fr','en','ru','ar'].includes(body.locale)?body.locale:'fr',
      accepts_contact:true,wants_alternatives:body.wants_alternatives===true,
    });
    if(error){
      console.error('[shortlist] insert',error.code,error.message);
      return NextResponse.json({error:'Demande non enregistrée. Vérifiez que les projets sont toujours publiés.'},{status:503});
    }
    return NextResponse.json({ok:true});
  }catch(e){
    console.error('[shortlist] unexpected',e instanceof Error?e.message:'error');
    return NextResponse.json({error:'Impossible d’enregistrer la demande.'},{status:500});
  }
}