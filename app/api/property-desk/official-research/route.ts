import {NextRequest,NextResponse} from 'next/server';
import {createClient} from '@supabase/supabase-js';
import {AMENITIES,discoverProjectLink,fetchPublicHtml,parseOfficialProjectPage,validExternalUrl} from '@/lib/projectOfficialResearch';
export const runtime='nodejs';
export const maxDuration=45;
const base=process.env.SUPABASE_URL||process.env.NEXT_PUBLIC_SUPABASE_URL||'https://udbzytlmcnljlegmolcx.supabase.co';
const anon=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY||'sb_publishable_yQPc71ry-F3aqBLhj6OPig_cFs_u-Pa';
const uuid=(s:string)=>/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(s);
async function context(req:NextRequest){
 const h=req.headers.get('authorization')||'';
 const jwt=h.startsWith('Bearer ')?h.slice(7).trim():'';
 if(!jwt)return null;
 const client=createClient(base,anon,{global:{headers:{Authorization:'Bearer '+jwt}},auth:{persistSession:false,autoRefreshToken:false}});
 const u=await client.auth.getUser(jwt);if(!u.data.user)return null;
 const p=await client.from('profiles').select('role,status').eq('user_id',u.data.user.id).maybeSingle();
 if(p.error||p.data?.role!=='admin'||p.data?.status!=='active')return null;
 return {client,user:u.data.user};
}
export async function POST(req:NextRequest){
 const ctx=await context(req);
 if(!ctx)return NextResponse.json({error:'Administrateur connecté requis.'},{status:401});
 const body=await req.json().catch(()=>null);
 const projectId=String(body?.project_id||'');
 if(!uuid(projectId))return NextResponse.json({error:'Projet non reconnu.'},{status:400});
 const {client,user}=ctx;
 const p=await client.from('real_estate_projects')
  .select('id,name,city,district,description,images,hero_image,latitude,longitude,amenities,highlights,official_project_url,developer_id')
  .eq('id',projectId).maybeSingle();
 if(p.error||!p.data)return NextResponse.json({error:'Projet inaccessible.'},{status:404});
 const project=p.data;
 const action=String(body.action||'scan');
 if(action==='apply'){
   const r=await client.from('project_official_research').select('*').eq('project_id',projectId).maybeSingle();
   if(r.error||!r.data||r.data.status!=='ready')return NextResponse.json({error:'Aucune recherche officielle prête à valider.'},{status:409});
   const draft=await client.from('property_listings').select('id,published,description,highlights,images,hero_image,project_latitude,project_longitude,project_unit_options').eq('real_estate_project_id',projectId).is('deleted_at',null).maybeSingle();
   if(draft.error)return NextResponse.json({error:'Impossible de vérifier le brouillon public.'},{status:503});
   if(draft.data?.published)return NextResponse.json({error:'Programme déjà en ligne. Dépublie-le avant d’appliquer des modifications.'},{status:409});
   const chosen=Array.isArray(body.amenity_codes)?body.amenity_codes.filter((c:any)=>typeof c==='string'):[];
   const authorized=new Set(r.data.suggested_amenities||[]);
   const approved=[...new Set(chosen)].filter((c:any)=>authorized.has(c)&&AMENITIES.some(a=>a.code===c)).slice(0,25);
   const photoChoices=Array.isArray(body.image_urls)?body.image_urls.filter((v:any)=>typeof v==='string'):[];
   const candidates=new Set((r.data.suggested_images||[]).map((v:any)=>v.url));
   const images=[...new Set(photoChoices)].filter((url:any)=>candidates.has(url)).slice(0,25);
   if(images.length && body.rights_confirmed!==true)return NextResponse.json({error:'Confirme les droits de réutilisation des photos avant de les ajouter.'},{status:400});
   const unitAllowed=new Set(r.data.unit_mentions||[]);
   const unitSelected=[...new Set(Array.isArray(body.unit_mentions)?body.unit_mentions:[])].filter((name:any)=>typeof name==='string'&&unitAllowed.has(name)).slice(0,12) as string[];
   const acceptDesc=body.description===true;
   const acceptLocation=body.location===true;
   const amendedDesc=acceptDesc?{...(project.description||{}),fr:r.data.suggested_description?.fr||''}:project.description;
   const localized=approved.map(code=>{
     const a=AMENITIES.find(x=>x.code===code)!;
     return {fr:a.fr,en:a.en,ru:a.ru,ar:a.ar};
   });
   const projectUpdates:any={
     official_project_url:r.data.official_url,
     ...(unitSelected.length?{official_unit_types:unitSelected}:{}),
     ...(acceptDesc?{description:amendedDesc}:{}),
     ...(approved.length?{amenities:approved,highlights:localized}:{}),
     ...(images.length?{
       images:[...new Set([...(project.images||[]),...images])].slice(0,32),
       hero_image:project.hero_image||images[0],
     }:{}),
     ...(acceptLocation && r.data.suggested_latitude!=null&&r.data.suggested_longitude!=null?
       {latitude:r.data.suggested_latitude,longitude:r.data.suggested_longitude}:{}),
     updated_by:user.id
   };
   const updateProject=await client.from('real_estate_projects').update(projectUpdates).eq('id',projectId);
   if(updateProject.error)return NextResponse.json({error:updateProject.error.message},{status:503});
   if(draft.data){
     const existingUnits:any[]=Array.isArray(draft.data.project_unit_options)?draft.data.project_unit_options:[];
     const listing:any={
       source_url:r.data.official_url,source_last_checked_at:new Date().toISOString(),
       ...(acceptDesc?{description:{...(draft.data.description||{}),fr:r.data.suggested_description?.fr||''}}:{}),
       ...(approved.length?{project_amenity_codes:approved,highlights:localized}:{}),
       ...(unitSelected.length?{project_unit_options:[
         ...existingUnits,
         ...unitSelected.filter(label=>!existingUnits.some((u:any)=>u.label===label))
           .map(label=>({label,availability:'on_request',source:'source_offer'}))
       ].slice(0,16)}:{}),
       ...(images.length?{images:[...new Set([...(draft.data.images||[]),...images])].slice(0,32),
         hero_image:draft.data.hero_image||images[0]}:{}),
       ...(acceptLocation && r.data.suggested_latitude!=null&&r.data.suggested_longitude!=null?
         {project_latitude:r.data.suggested_latitude,project_longitude:r.data.suggested_longitude}:{})
     };
     const u=await client.from('property_listings').update(listing).eq('id',draft.data.id).eq('published',false);
     if(u.error)return NextResponse.json({error:'Projet privé actualisé, mais brouillon public non mis à jour : '+u.error.message},{status:503});
   }
   await client.from('project_official_research').update({approved_by:user.id,approved_at:new Date().toISOString()}).eq('project_id',projectId);
   return NextResponse.json({ok:true,message:'Suggestions approuvées et sauvegardées en brouillon. Aucune publication automatique.'});
 }
 if(action!=='scan')return NextResponse.json({error:'Action non prise en charge.'},{status:400});
 const developer=project.developer_id
   ?await client.from('developers').select('name,website').eq('id',project.developer_id).maybeSingle()
   :{data:null,error:null};
 const dev=developer.data;
 const explicit=typeof body.official_url==='string'?body.official_url.trim():'';
 const current=explicit||project.official_project_url||'';
 const existing=await client.from('project_official_research').select('fetched_at,status,official_url').eq('project_id',projectId).maybeSingle();
 if(existing.error)return NextResponse.json({error:'Lecture des recherches précédentes impossible.'},{status:503});
 const fresh=existing.data?.fetched_at && Date.now()-new Date(existing.data.fetched_at).getTime()<12*60*60*1000;
 if(!explicit && fresh && existing.data?.status==='ready')return NextResponse.json({ok:true,cached:true,message:'Analyse officielle déjà disponible dans le brouillon.'});
 let official=current;
 let developerDomain:string|null=null;
 try{
   if(!official){
     if(!dev?.website) {
       const row={project_id:projectId,status:'needs_url',status_message:'Le flux API ne donne pas la page officielle et le promoteur n’a pas encore de site renseigné. Ajoute l’URL officielle une seule fois.',fetched_by:user.id,fetched_at:new Date().toISOString()};
       const u=await client.from('project_official_research').upsert(row,{onConflict:'project_id'});
       if(u.error)throw new Error(u.error.message);
       return NextResponse.json({ok:false,needs_url:true,message:row.status_message},{status:200});
     }
     const root=await validExternalUrl(dev.website);
     developerDomain=root.hostname;
     const home=await fetchPublicHtml(root.toString());
     const match=discoverProjectLink(home.html,home.url,project.name);
     if(!match){
       const msg:string='Le site du promoteur est connu, mais la page exacte du programme n’a pas été identifiée avec certitude. Renseigne son URL officielle.';
       const u=await client.from('project_official_research').upsert({project_id:projectId,status:'needs_url',status_message:msg,developer_domain:developerDomain,fetched_by:user.id,fetched_at:new Date().toISOString()},{onConflict:'project_id'});
       if(u.error)throw new Error(u.error.message);
       return NextResponse.json({ok:false,needs_url:true,message:msg},{status:200});
     }
     official=match;
   }
   const original=await validExternalUrl(official);
   if(dev?.website)developerDomain=(await validExternalUrl(dev.website)).hostname;
   // An explicitly submitted official URL is accepted only as a pending human-reviewed source.
   // This never grants rights to copy descriptions or media.
   const page=await fetchPublicHtml(original.toString());
   const result=parseOfficialProjectPage(page.html,page.url,{
     name:project.name,city:project.city||'',district:project.district||'',developer:dev?.name||'le promoteur'
   });
   const staged=await client.from('project_official_research').upsert({
     project_id:projectId,official_url:page.url,developer_domain:developerDomain,
     source_title:result.source_title,source_excerpt:result.source_excerpt,
     suggested_description:result.suggested_description,
     suggested_amenities:result.suggested_amenities,amenity_evidence:result.amenity_evidence,
     suggested_images:result.suggested_images,
     suggested_latitude:result.suggested_latitude,suggested_longitude:result.suggested_longitude,
     unit_mentions:result.unit_mentions,status:'ready',
     status_message:'Propositions extraites de la page soumise, à vérifier avant utilisation.',
     fetched_at:new Date().toISOString(),fetched_by:user.id,
   },{onConflict:'project_id'});
   if(staged.error)throw new Error(staged.error.message);
   const p=await client.from('real_estate_projects').update({official_project_url:page.url,updated_by:user.id}).eq('id',projectId);
   if(p.error)throw new Error(p.error.message);
   return NextResponse.json({ok:true,source_url:page.url,amenities:result.suggested_amenities.length,images:result.suggested_images.length,unit_mentions:result.unit_mentions.length,
     message:'Source analysée. Sélectionne les informations à conserver dans le brouillon.'});
 }catch(err:any){
   const message=String(err?.message||'Impossible de lire cette page officielle.').slice(0,500);
   await client.from('project_official_research').upsert({
     project_id:projectId,official_url:official||null,developer_domain:developerDomain,
     status:'error',status_message:message,fetched_at:new Date().toISOString(),fetched_by:user.id
   },{onConflict:'project_id'});
   return NextResponse.json({error:message},{status:422});
 }
}
