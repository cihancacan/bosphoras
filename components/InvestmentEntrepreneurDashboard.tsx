'use client';
import Link from 'next/link';
import {useEffect,useState,type FormEvent} from 'react';
import {ArrowRight,BriefcaseBusiness,CalendarDays,CheckCircle2,ClipboardList,CloudUpload,FileText,FolderOpen,Landmark,LogOut,Menu,Plus,Save,ShieldCheck,Trash2,X} from 'lucide-react';
import {getPortalSupabase} from '@/lib/portalSupabase';
import {InvestmentDocumentVault} from '@/components/InvestmentDocumentVault';
import {InvestmentEntrepreneurPhotos} from '@/components/InvestmentEntrepreneurPhotos';
type Lang='fr'|'en';type Tab='overview'|'projects'|'documents'|'requests'|'settings';
type Profile={user_id:string;email:string;full_name:string|null;country:string|null;company_name:string|null};
type Draft={id:string;project_name:string;legal_entity:string;country:string;sector:string;funding_target:string;funding_type:string;annual_revenue:string;website:string;summary:string;use_of_funds:string;team_summary:string;project_timeline:string;review_status:string;review_note:string;created_at:string;updated_at:string;};
type Lead={id:string;project_code:string|null;kind:string;status:string;created_at:string;notes:string};
const empty={project_name:'',legal_entity:'',country:'',sector:'',funding_target:'',funding_type:'',annual_revenue:'',website:'',summary:'',use_of_funds:'',team_summary:'',project_timeline:''};
const db:any=getPortalSupabase();
const labelStatus:Record<string,string>={draft:'Brouillon',received:'Reçu',analysis:'En analyse',documents_requested:'Compléments demandés',qualified:'Dossier retenu',closed:'Clôturé',new:'Nouvelle demande',qualifying:'Étude en cours',forwarded:'Transmise',awaiting_documents:'Documents attendus',declined:'Non retenue'};
const inp='mt-2 block w-full rounded-lg border border-[#ccd7dd] bg-white p-3.5 text-sm text-[#20343e] outline-none focus:border-[#193344]';
export function InvestmentEntrepreneurDashboard({locale}:{locale:Lang}){
 const fr=locale==='fr';
 const access=fr?'/investissement/acces/entrepreneur':'/en/investment/access/entrepreneur';
 const [profile,setProfile]=useState<Profile|null>(null),[adminPreview,setAdminPreview]=useState(false),[loading,setLoading]=useState(true),[busy,setBusy]=useState(false),[error,setError]=useState(''),[notice,setNotice]=useState(''),[tab,setTab]=useState<Tab>('overview'),[mobile,setMobile]=useState(false);
 const [drafts,setDrafts]=useState<Draft[]>([]),[leads,setLeads]=useState<Lead[]>([]),[editing,setEditing]=useState<string|null>(null),[fields,setFields]=useState({...empty}),[activeDraft,setActiveDraft]=useState(''),[consent,setConsent]=useState(false);
 const tabs:[Tab,string,any][]=[['overview',fr?'Tableau de bord':'Overview',BriefcaseBusiness],['projects',fr?'Mes dossiers':'My projects',FolderOpen],['documents',fr?'Documents':'Documents',CloudUpload],['requests',fr?'Demandes & suivi':'Enquiries & progress',ClipboardList],['settings',fr?'Mon entreprise':'My company',ShieldCheck]];
 useEffect(()=>{let on=true;(async()=>{try{
  const {data:{user},error:authError}=await db.auth.getUser();if(authError||!user){location.replace(access);return;}
  const {data:acc}=await db.from('investment_accounts').select('user_id,email,full_name,country,company_name,account_type').eq('user_id',user.id).maybeSingle();
  if(acc?.account_type==='entrepreneur'){
   if(!on)return;setProfile(acc);
   const [d,l]=await Promise.all([
    db.from('investment_project_drafts').select('*').eq('user_id',user.id).order('updated_at',{ascending:false}),
    db.from('investment_leads').select('id,project_code,kind,status,created_at,notes').eq('user_id',user.id).eq('kind','company_finance').order('created_at',{ascending:false})
   ]);
   if(d.error||l.error)throw d.error||l.error;
   if(on){setDrafts(d.data||[]);setLeads(l.data||[]);setActiveDraft((d.data||[])[0]?.id||'');}
  }else{
   const {data:staff}=await db.from('profiles').select('role,status,full_name').eq('user_id',user.id).maybeSingle();
   if(staff?.role==='admin'&&staff?.status==='active'&&on){setAdminPreview(true);setProfile({user_id:user.id,email:user.email||'',full_name:staff.full_name,country:null,company_name:null});}
   else setError(fr?'Accès réservé aux entrepreneurs.':'Entrepreneur access only.');
  }
 }catch(e){if(on)setError(e instanceof Error?e.message:'Unable to load');}finally{if(on)setLoading(false);}})();return()=>{on=false;};},[access,fr]);
 async function refresh(){
  if(!profile||adminPreview)return;
  const {data,error}=await db.from('investment_project_drafts').select('*').eq('user_id',profile.user_id).order('updated_at',{ascending:false});
  if(error)throw error;setDrafts(data||[]);
 }
 function edit(d:Draft){setEditing(d.id);setFields(Object.fromEntries(Object.keys(empty).map(k=>[k,(d as any)[k]||''])) as typeof empty);setTab('projects');scrollTo({top:0,behavior:'smooth'});}
 function reset(){setEditing(null);setFields({...empty});}
 async function save(e:FormEvent){e.preventDefault();if(!profile)return;setBusy(true);setError('');setNotice('');
  try{
   if(fields.project_name.trim().length<2)throw new Error(fr?'Indiquez le nom du projet.':'Project name required.');
   const payload=Object.fromEntries(Object.entries(fields).map(([k,v])=>[k,v.trim()]));
   if(adminPreview){
    if(editing)setDrafts(ds=>ds.map(d=>d.id===editing?{...d,...payload,updated_at:new Date().toISOString()}:d));
    else{const id=crypto.randomUUID();setDrafts(ds=>[{...payload,id,user_id:profile.user_id,created_at:new Date().toISOString(),updated_at:new Date().toISOString(),review_status:'draft',review_note:''} as any,...ds]);setActiveDraft(id);}
    reset();setNotice(fr?'Dossier de démonstration enregistré localement.':'Demo dossier saved locally.');return;
   }
   const result=editing
    ? await db.from('investment_project_drafts').update({...payload,updated_at:new Date().toISOString()}).eq('id',editing).eq('user_id',profile.user_id)
    : await db.from('investment_project_drafts').insert({...payload,user_id:profile.user_id}).select('id').single();
   if(result.error)throw result.error;
   if(result.data?.id)setActiveDraft(result.data.id);
   await refresh();reset();setNotice(fr?'Dossier enregistré.':'Dossier saved.');
  }catch(e){setError(e instanceof Error?e.message:'Unable to save dossier');}finally{setBusy(false);}
 }
 async function remove(d:Draft){if(!profile||!confirm(fr?'Supprimer ce dossier et ses documents ?':'Delete dossier and its documents?'))return;
  if(adminPreview){setDrafts(ds=>ds.filter(x=>x.id!==d.id));return;}
  setBusy(true);const {data:docs,error:e1}=await db.from('investment_documents').select('storage_path').eq('project_draft_id',d.id);
  if(e1){setError(e1.message);setBusy(false);return;}
  if((docs||[]).length){const {error:e2}=await db.storage.from('investment-dossiers').remove(docs.map((x:any)=>x.storage_path));if(e2){setError(e2.message);setBusy(false);return;}}
  const {error:e3}=await db.from('investment_project_drafts').delete().eq('id',d.id).eq('user_id',profile.user_id);
  if(e3)setError(e3.message);else{await refresh();if(activeDraft===d.id)setActiveDraft('');}setBusy(false);
 }
 async function submitRequest(d:Draft){
  if(!profile)return;if(!consent){setError(fr?'Confirmez votre demande avant l’envoi.':'Please consent to submitting the request.');return;}
  if(adminPreview){setNotice(fr?'Mode démonstration : aucune demande transmise.':'Preview mode: no enquiry sent.');return;}
  setBusy(true);setError('');try{
   const {error}=await db.from('investment_leads').insert({
    kind:'company_finance',project_code:null,full_name:profile.full_name||profile.company_name||d.project_name,
    email:profile.email,country:profile.country||d.country||'',phone:'',notes:[d.project_name,d.legal_entity,d.funding_target,d.funding_type,d.summary,d.use_of_funds,'Dossier ID: '+d.id].filter(Boolean).join(' — ').slice(0,3000),
    requested_amount:null,currency:'EUR',consent:true,source_path:location.pathname
   });
   if(error)throw error;
   const {data}=await db.from('investment_leads').select('id,project_code,kind,status,created_at,notes').eq('user_id',profile.user_id).eq('kind','company_finance').order('created_at',{ascending:false});
   setLeads(data||[]);setConsent(false);setNotice(fr?'Demande enregistrée dans le CRM Bosphoras Investment.':'Enquiry recorded in the Bosphoras Investment CRM.');
  }catch(e){setError(e instanceof Error?e.message:'Submission error');}finally{setBusy(false);}
 }
 async function saveProfile(e:FormEvent){e.preventDefault();if(!profile)return;if(adminPreview){setNotice(fr?'Mode démonstration : profil inchangé.':'Preview: profile not changed.');return;}setBusy(true);const {error}=await db.from('investment_accounts').update({full_name:profile.full_name,country:profile.country,company_name:profile.company_name}).eq('user_id',profile.user_id);if(error)setError(error.message);else setNotice(fr?'Profil enregistré.':'Profile saved.');setBusy(false);}
 function choose(t:Tab){setTab(t);setMobile(false);}
 if(loading)return <main className="min-h-screen bg-[#f4f6f7] p-10" role="status">Chargement de l’espace entreprise…</main>;
 if(error&&!profile)return <main className="min-h-screen bg-[#f4f6f7] p-10"><p role="alert">{error}</p><Link href={access} className="underline">Connexion</Link></main>;
 const selected=drafts.find(d=>d.id===activeDraft)||drafts[0];
 return <main lang={locale} className="min-h-screen bg-[#f4f6f7] text-[#23353f]"><div className="flex min-h-screen">
  <aside className={'z-30 w-[250px] shrink-0 border-r border-[#dce4e8] bg-white p-5 lg:block '+(mobile?'fixed inset-y-0 left-0 block shadow-2xl':'hidden')}>
   <div className="mb-11 flex justify-between"><div><p className="text-[11px] font-semibold tracking-[.18em] text-[#193344]">BOSPHORAS</p><p className="mt-1 text-xl text-[#193344]">Investment</p><p className="mt-1 text-[11px] text-[#60717b]">{fr?'Entreprises':'Business portal'}</p></div><button className="lg:hidden" onClick={()=>setMobile(false)}><X/></button></div>
   <nav className="space-y-1">{tabs.map(([key,label,Icon])=><button key={key} onClick={()=>choose(key)} className={'flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm '+(tab===key?'bg-[#193344] text-white':'text-[#53646e] hover:bg-[#edf2f4]')}><Icon size={17}/>{label}</button>)}</nav>
   <div className="mt-11 space-y-4 border-t border-[#dce4e8] pt-6"><Link href={fr?'/investissement/entrepreneurs':'/en/investment/entrepreneurs'} className="block text-sm text-[#193344] underline underline-offset-4">{fr?'Financer mon entreprise':'Company financing'}</Link>{adminPreview&&<Link href="/investissement/admin" className="block text-sm text-[#193344]">Administration Investment</Link>}<Link href={fr?'/investissement/espace/investisseur':'/en/investment/dashboard/investor'} className="block text-xs text-[#6d7e86]">{fr?'Espace investisseur':'Investor portal'}</Link><button onClick={async()=>{await db.auth.signOut();location.assign(access);}} className="flex items-center gap-2 text-xs text-[#6a7a81]"><LogOut size={14}/>{fr?'Déconnexion':'Sign out'}</button></div>
  </aside>
  <div className="min-w-0 flex-1">
   <header className="sticky top-0 z-20 flex items-center justify-between border-b border-[#dce3e7] bg-white/95 px-5 py-4 backdrop-blur md:px-9"><div className="flex items-center gap-3"><button className="lg:hidden" onClick={()=>setMobile(true)}><Menu/></button><span className="text-sm font-medium text-[#193344]">{fr?'Espace entrepreneur':'Entrepreneur workspace'}</span>{adminPreview&&<span className="rounded-md bg-[#fff2d7] px-2 py-1 text-xs text-[#815710]">Aperçu admin</span>}</div><span className="text-sm text-[#60717a]">{profile?.company_name||profile?.full_name||profile?.email}</span></header>
   <div className="mx-auto max-w-[1400px] space-y-7 px-5 py-9 md:px-9"><div className="flex flex-wrap items-end justify-between gap-5"><div><p className="text-xs uppercase tracking-[.18em] text-[#6a7c85]">BOSPHORAS BUSINESS</p><h1 className="mt-2 text-3xl font-medium tracking-[-.05em] text-[#193344] md:text-4xl">{tabs.find(x=>x[0]===tab)?.[1]}</h1></div><button onClick={()=>{reset();choose('projects');}} className="inline-flex items-center gap-2 rounded-lg bg-[#193344] px-5 py-3 text-sm text-white"><Plus size={17}/>{fr?'Nouveau dossier':'New dossier'}</button></div>
   {notice&&<p className="rounded-lg bg-[#eaf5ef] p-4 text-sm text-[#2c5f42]" role="status">{notice}</p>}{error&&<p role="alert" className="rounded-lg bg-red-50 p-4 text-sm text-red-800">{error}</p>}
   {tab==='overview'&&<><div className="grid gap-4 sm:grid-cols-3"><div className="rounded-xl bg-[#193344] p-7 text-white"><FolderOpen size={23}/><p className="mt-6 text-xs text-[#bfd0d8]">{fr?'Dossiers actifs':'Active dossiers'}</p><p className="mt-2 text-4xl">{drafts.length}</p></div><div className="rounded-xl border border-[#dce4e7] bg-white p-7"><ClipboardList size={23} className="text-[#193344]"/><p className="mt-6 text-xs text-[#60727b]">{fr?'Demandes envoyées':'Enquiries sent'}</p><p className="mt-2 text-4xl text-[#193344]">{leads.length}</p></div><div className="rounded-xl border border-[#dce4e7] bg-white p-7"><CloudUpload size={23} className="text-[#193344]"/><p className="mt-6 text-xs text-[#60727b]">{fr?'Coffre documentaire':'Document vault'}</p><p className="mt-2 text-xl text-[#193344]">{fr?'Accès privé':'Private access'}</p></div></div>
    <div className="grid gap-6 lg:grid-cols-[1.2fr_.8fr]"><section className="rounded-xl border border-[#dce4e7] bg-white p-7"><div className="flex items-center justify-between"><h2 className="text-xl text-[#193344]">{fr?'Mes projets':'My projects'}</h2><button className="text-sm text-[#193344] underline" onClick={()=>choose('projects')}>{fr?'Gérer':'Manage'}</button></div><div className="mt-5 space-y-3">{drafts.length===0?<p className="text-sm leading-7 text-[#60717b]">{fr?'Créez votre premier dossier pour préparer une demande de financement.':'Create a project dossier to prepare a financing request.'}</p>:drafts.slice(0,6).map(d=><button key={d.id} onClick={()=>{setActiveDraft(d.id);choose('projects');}} className="flex w-full items-center justify-between rounded-lg border border-[#e1e8eb] p-4 text-left"><span className="font-medium text-[#193344]">{d.project_name}</span><span className="text-xs text-[#657781]">{labelStatus[d.review_status]||d.review_status}</span></button>)}</div></section><section className="rounded-xl border border-[#dce4e7] bg-white p-7"><h2 className="text-xl text-[#193344]">{fr?'Étapes de préparation':'Preparation stages'}</h2><div className="mt-7 space-y-5">{['Créer le dossier','Compléter le modèle économique','Déposer les pièces justificatives','Demander une étude financière','Suivre les échanges'].map((x,i)=><div className="flex items-start gap-4" key={x}><span className="rounded-full bg-[#e8eef1] px-3 py-1 text-xs text-[#193344]">{i+1}</span><span className="text-sm text-[#53656d]">{x}</span></div>)}</div></section></div>
   </>}
   {tab==='projects'&&<><section className="rounded-xl border border-[#dce4e7] bg-white p-7 md:p-9"><h2 className="text-xl font-medium text-[#193344]">{editing?'Modifier le projet':'Préparer un dossier de financement'}</h2><form onSubmit={save} className="mt-7 grid gap-5 md:grid-cols-2">
    {([['project_name','Nom du projet *'],['legal_entity','Société juridique'],['country','Pays d’immatriculation'],['sector','Secteur'],['funding_target','Montant recherché'],['annual_revenue','CA annuel'],['website','Site internet'],['project_timeline','Calendrier']] as const).map(([k,label])=><label key={k} className="block text-sm text-[#465862]">{label}<input className={inp} required={k==='project_name'} maxLength={k==='project_name'?180:250} value={fields[k]} onChange={e=>setFields(f=>({...f,[k]:e.target.value}))}/></label>)}
    <label className="block text-sm text-[#465862]">Type de financement<select className={inp} value={fields.funding_type} onChange={e=>setFields(f=>({...f,funding_type:e.target.value}))}><option value="">À définir</option><option value="debt">Prêt / obligations</option><option value="equity">Capital / actions</option><option value="mixed">Mixte</option><option value="project_finance">Financement de projet</option></select></label>
    {([['summary','Présentation du projet'],['use_of_funds','Utilisation des fonds'],['team_summary','Équipe et dirigeants']] as const).map(([k,label])=><label key={k} className="block text-sm text-[#465862] md:col-span-2">{label}<textarea rows={4} className={inp} maxLength={5000} value={fields[k]} onChange={e=>setFields(f=>({...f,[k]:e.target.value}))}/></label>)}
    <div className="flex flex-wrap gap-3 md:col-span-2"><button disabled={busy} type="submit" className="inline-flex items-center gap-2 rounded-lg bg-[#193344] px-5 py-3 text-sm text-white"><Save size={16}/>{editing?'Mettre à jour':'Enregistrer le dossier'}</button>{editing&&<button type="button" onClick={reset} className="rounded-lg border border-[#c4d2d8] px-5 py-3 text-sm">Nouveau dossier</button>}</div>
   </form></section><section className="rounded-xl border border-[#dce4e7] bg-white p-7"><h2 className="text-xl text-[#193344]">Mes dossiers</h2><div className="mt-5 grid gap-4 md:grid-cols-2">{drafts.map(d=><article key={d.id} className="rounded-lg border border-[#dfe7ea] p-5"><p className="text-xs text-[#60717b]">{labelStatus[d.review_status]||d.review_status}</p><h3 className="mt-3 text-xl font-medium text-[#193344]">{d.project_name}</h3><p className="mt-3 text-sm text-[#65767d]">{[d.country,d.sector,d.funding_target].filter(Boolean).join(' · ')}</p><div className="mt-6 flex flex-wrap gap-4"><button onClick={()=>edit(d)} className="text-sm text-[#193344] underline">Modifier</button><button onClick={()=>{setActiveDraft(d.id);choose('documents');}} className="text-sm text-[#193344] underline">Documents</button><button disabled={busy} onClick={()=>remove(d)} className="text-sm text-red-700 underline">Supprimer</button></div><label className="mt-5 flex items-start gap-2 text-xs leading-6 text-[#52646c]"><input type="checkbox" checked={consent&&activeDraft===d.id} onChange={e=>{setActiveDraft(d.id);setConsent(e.target.checked);}} className="mt-1 h-4 w-4 accent-[#193344]"/>Autoriser la transmission de ce dossier à Bosphoras pour une étude.</label><button onClick={()=>submitRequest(d)} disabled={busy} className="mt-4 flex items-center gap-2 rounded-lg border border-[#193344] px-4 py-3 text-sm text-[#193344]">Demander une étude <ArrowRight size={16}/></button></article>)}</div>{drafts.length===0&&<p className="mt-5 text-sm text-[#61727a]">Aucun dossier enregistré.</p>}</section></>}
   {tab==='documents'&&<><div className="rounded-xl border border-[#dce4e7] bg-white p-6"><h2 className="text-lg font-medium text-[#193344]">Documents par projet</h2><select className={inp} value={selected?.id||''} onChange={e=>setActiveDraft(e.target.value)}><option value="">Sélectionner un dossier</option>{drafts.map(d=><option key={d.id} value={d.id}>{d.project_name}</option>)}</select></div>{selected?<div className="space-y-6"><InvestmentEntrepreneurPhotos key={'pictures-'+selected.id} draftId={selected.id} userId={profile!.user_id} adminPreview={adminPreview}/><InvestmentDocumentVault key={selected.id} draftId={selected.id} userId={profile!.user_id} adminPreview={adminPreview}/></div>:<p className="rounded-xl bg-white p-8 text-sm text-[#60717b]">Créez un dossier de projet avant de déposer les documents.</p>}</>}
   {tab==='requests'&&<section className="rounded-xl border border-[#dce4e7] bg-white p-7 md:p-9"><h2 className="text-xl font-medium text-[#193344]">{fr?'Suivi des demandes de financement':'Funding enquiry tracking'}</h2>{leads.length===0?<p className="mt-7 text-sm text-[#60717b]">Vos demandes apparaîtront ici dès leur enregistrement.</p>:<div className="mt-6 space-y-4">{leads.map(l=><div key={l.id} className="flex flex-wrap items-center justify-between gap-5 rounded-lg border border-[#e0e8eb] p-5"><div><p className="text-sm font-medium text-[#193344]">{l.notes?.slice(0,95)||'Étude de financement'}</p><p className="mt-2 text-xs text-[#60717a]">{new Date(l.created_at).toLocaleDateString('fr-FR')}</p></div><span className="rounded-full bg-[#eaf1f3] px-4 py-2 text-xs text-[#193344]">{labelStatus[l.status]||l.status}</span></div>)}</div>}</section>}
   {tab==='settings'&&<section className="max-w-2xl rounded-xl border border-[#dce4e7] bg-white p-7"><h2 className="text-xl font-medium text-[#193344]">Mon entreprise</h2><form onSubmit={saveProfile} className="mt-7 space-y-5">{([['full_name','Nom du représentant'],['company_name','Entreprise'],['country','Pays']] as const).map(([k,label])=><label key={k} className="block text-sm">{label}<input className={inp} maxLength={180} value={profile?.[k]||''} onChange={e=>setProfile(p=>p?{...p,[k]:e.target.value}:p)}/></label>)}<button disabled={busy} className="rounded-lg bg-[#193344] px-5 py-3 text-sm text-white" type="submit">Enregistrer</button></form></section>}
   <p className="text-xs leading-7 text-[#70818a]">Les dossiers et fichiers sont accessibles uniquement aux personnes autorisées. Une demande de financement ne constitue pas une confirmation d’obtention de fonds.</p>
   </div>
  </div>
 </div></main>;
}
