import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const runtime='nodejs';
export const maxDuration=30;
const url=process.env.SUPABASE_URL||process.env.NEXT_PUBLIC_SUPABASE_URL||'https://udbzytlmcnljlegmolcx.supabase.co';
const anonKey=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY||'sb_publishable_yQPc71ry-F3aqBLhj6OPig_cFs_u-Pa';
const host='uae-real-estate3.p.rapidapi.com';
const isUUID=(s:string)=>/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(s);
const t=(value:any)=>typeof value==='string'?value.trim():'';

async function admin(request:NextRequest){
 const authorization=request.headers.get('authorization')||'';
 const token=authorization.startsWith('Bearer ')?authorization.slice(7).trim():'';
 if(!token)return null;
 const client=createClient(url,anonKey,{global:{headers:{Authorization:'Bearer '+token}},auth:{persistSession:false,autoRefreshToken:false}});
 const auth=await client.auth.getUser(token);
 if(!auth.data.user)return null;
 const profile=await client.from('profiles').select('role,status').eq('user_id',auth.data.user.id).maybeSingle();
 if(profile.error||profile.data?.role!=='admin'||profile.data?.status!=='active')return null;
 return {client,user:auth.data.user};
}

function mediaUrl(input:any):string|null{
 const value=typeof input==='string'?input:input?.original||input?.large||input?.url_1||input?.url||input?.src;
 if(typeof value!=='string'||value.length>1800)return null;
 try{
  const parsed=new URL(value);
  if(parsed.protocol!=='https:'||!parsed.hostname||parsed.username||parsed.password)return null;
  return parsed.toString();
 }catch{return null;}
}
function photoList(data:any){
 const images:any[]=[];
 const raw=[data?.photos,data?.images,data?.gallery,data?.photoGallery,data?.media?.photos];
 for(const items of raw){
  if(Array.isArray(items))images.push(...items);
  else if(items&&typeof items==='object'&&Array.isArray(items.photos))images.push(...items.photos);
 }
 if(data?.coverPhoto)images.push(data.coverPhoto);
 const result:{url:string;title:string}[]=[];
 const seen=new Set<string>();
 for(const v of images){
  const image=mediaUrl(v);
  if(!image||seen.has(image))continue;
  seen.add(image);result.push({url:image,title:t(v?.title||v?.caption).slice(0,120)});
  if(result.length>=35)break;
 }
 return result;
}
function floorplans(data:any){
 const candidates=[data?.floorPlans,data?.floorplans,data?.floorPlan,data?.floor_plans,data?.plans];
 const result:{url:string;title:string}[]=[];
 const seen=new Set<string>();
 for(const entries of candidates){
  const items=Array.isArray(entries)?entries:entries?[entries]:[];
  for(const v of items){
    const image=mediaUrl(v?.image||v?.photo||v?.imageUrl||v?.url||v);
    if(!image||seen.has(image))continue;
    seen.add(image);result.push({url:image,title:t(v?.title||v?.name).slice(0,120)});
    if(result.length>=16)return result;
  }
 }
 return result;
}
function description(data:any){
 const d=data?.description;
 return (typeof d==='string'?d:t(d?.en||d?.fr)).slice(0,12000)||null;
}
function amenities(data:any){
 const all=Array.isArray(data?.amenities)?data.amenities:[];
 return Array.from(new Set(all.map((v:any)=>typeof v==='string'?v:t(v?.name?.en||v?.name||v?.title?.en||v?.title)).filter(Boolean))).slice(0,40);
}
export async function POST(request:NextRequest){
 const scope=await admin(request);
 if(!scope)return NextResponse.json({error:'Réservé aux administrateurs.'},{status:401});
 const body=await request.json().catch(()=>null);
 const projectId=String(body?.project_id||'');
 if(!isUUID(projectId))return NextResponse.json({error:'Projet invalide.'},{status:400});
 const {data:project,error:projErr}=await scope.client.from('real_estate_projects').select('id,name,source_system').eq('id',projectId).maybeSingle();
 if(projErr||!project||project.source_system!=='bayut')return NextResponse.json({error:'Seuls les projets Bayut peuvent être enrichis par cet endpoint.'},{status:400});
 const {data:candidate,error:candidateErr}=await scope.client.from('project_import_candidates').select('id,source_payload').eq('imported_project_id',projectId).eq('source_system','bayut').eq('review_status','imported').limit(1).maybeSingle();
 if(candidateErr||!candidate)return NextResponse.json({error:"Aucune annonce Bayut source rattachée à ce programme. Réimportation manuelle nécessaire."},{status:404});
 // CRITICAL: the project external ID is NOT the property-listing externalID expected by /property-details.
 const listingId=String(candidate.source_payload?.externalID??candidate.source_payload?.externalId??'').trim();
 if(!/^[0-9]{4,18}$/.test(listingId))return NextResponse.json({error:"Identifiant d'annonce Bayut absent. Il faut un externalID d'annonce, pas l'identifiant du programme."},{status:422});
 const existing=await scope.client.from('project_media_enrichments').select('project_id,photos,floorplans,fetched_at,listing_external_id').eq('project_id',projectId).maybeSingle();
 if(existing.error)return NextResponse.json({error:'Lecture du cache impossible.'},{status:503});
 const age=existing.data?.fetched_at?Date.now()-new Date(existing.data.fetched_at).getTime():Infinity;
 if(existing.data?.listing_external_id===listingId&&age>=0&&age<24*60*60*1000){
  return NextResponse.json({ok:true,cached:true,photos:existing.data.photos?.length||0,floorplans:existing.data.floorplans?.length||0,message:'Résultat du jour déjà enregistré. Aucun appel RapidAPI supplémentaire.'});
 }
 const month=new Date();const monthStart=new Date(Date.UTC(month.getUTCFullYear(),month.getUTCMonth(),1)).toISOString();
 const calls=await scope.client.from('project_media_api_calls').select('id',{count:'exact',head:true}).gte('requested_at',monthStart);
 if(calls.error)return NextResponse.json({error:'Impossible de vérifier la limite mensuelle.'},{status:503});
 if((calls.count||0)>=60)return NextResponse.json({error:'Limite de sécurité atteinte (60 appels détail ce mois). Aucun appel supplémentaire.'},{status:429});
 const rapidKey=process.env.RAPIDAPI_BAYUT_KEY||process.env.RAPIDAPI_KEY||'';
 if(!rapidKey)return NextResponse.json({error:'Clé RAPIDAPI_BAYUT_KEY indisponible sur Vercel.'},{status:503});
 const audit=await scope.client.from('project_media_api_calls').insert({project_id:projectId,listing_external_id:listingId,requested_by:scope.user.id}).select('id').single();
 if(audit.error||!audit.data)return NextResponse.json({error:'Journalisation impossible, appel API annulé.'},{status:503});
 let status=502;
 try{
   const remote=new URL('https://'+host+'/property-details');
   remote.searchParams.set('external_id',listingId);remote.searchParams.set('langs','en');
   const response=await fetch(remote,{headers:{'x-rapidapi-key':rapidKey,'x-rapidapi-host':host,Accept:'application/json'},cache:'no-store',signal:AbortSignal.timeout(20000)});
   status=response.status;
   const raw=await response.json().catch(()=>null);
   if(!response.ok){
     const message=status===429?'Quota RapidAPI atteint.':status>=500?'Le fournisseur Bayut renvoie une erreur serveur.':'Bayut a refusé la demande de détails.';
     throw new Error(message+' (HTTP '+status+')');
   }
   const details=raw?.data?.property||raw?.data?.listing||raw?.data||raw?.property||raw;
   if(!details||typeof details!=='object'||raw?.success===false)throw new Error('La réponse Bayut ne contient pas de détails exploitables.');
   // Never stage media from a different property returned by a mismatched identifier.
   const returnedId=t(details.externalID??String(details.externalId??''));
   if(returnedId&&returnedId!==listingId)throw new Error("L'annonce renvoyée ne correspond pas à la source du projet.");
   const photos=photoList(details);
   const plans=floorplans(details);
   if(!photos.length&&!plans.length)throw new Error("L'annonce détaillée ne contient aucune photo ni aucun plan.");
   const staged=await scope.client.from('project_media_enrichments').upsert({
     project_id:projectId,candidate_id:candidate.id,listing_external_id:listingId,
     photos,floorplans:plans,source_description:description(details),amenities:amenities(details),
     fetched_at:new Date().toISOString(),fetched_by:scope.user.id
   },{onConflict:'project_id'});
   if(staged.error)throw new Error('Impossible de sauvegarder les images candidates dans le back-office.');
   await scope.client.from('project_media_api_calls').update({result:'success',http_status:status}).eq('id',audit.data.id);
   return NextResponse.json({ok:true,cached:false,photos:photos.length,floorplans:plans.length,message:'Photos et plans récupérés pour validation privée. Aucune publication automatique.'});
 }catch(e:any){
   await scope.client.from('project_media_api_calls').update({result:'error',http_status:status}).eq('id',audit.data.id);
   return NextResponse.json({error:e?.message||'Erreur lors de la récupération Bayut.'},{status:502});
 }
}
