'use client';

import Link from 'next/link';
import { useEffect, useState, type FormEvent } from 'react';
import { ArrowRight, Bookmark, BookmarkCheck, Building2, CircleAlert, FileText, LogOut, Save, ShieldCheck, UserRound } from 'lucide-react';
import { getPortalSupabase } from '@/lib/portalSupabase';
import { investmentVentures, type InvestmentVentureCode } from '@/data/investmentVentures';

type Role = 'investor' | 'entrepreneur';
type Lang = 'fr' | 'en';
type Account = {
  user_id:string; email:string; account_type:Role; full_name:string|null;
  country:string|null; company_name:string|null; investor_interests:string|null; investor_budget_band:string|null;
};
type Draft = { id:string; project_name:string; country:string; sector:string; funding_target:string; website:string; summary:string; updated_at:string; };
const emptyDraft={project_name:'',country:'',sector:'',funding_target:'',website:'',summary:''};
type DraftForm = typeof emptyDraft;

export function InvestmentMemberDashboard({role,locale}:{role:Role;locale:Lang}){
  const fr=locale==='fr';
  const supabase: any = getPortalSupabase();
  const [loading,setLoading]=useState(true);
  const [account,setAccount]=useState<Account|null>(null);
  const [userId,setUserId]=useState('');
  const [adminPreview,setAdminPreview]=useState(false);
  const [saved,setSaved]=useState<InvestmentVentureCode[]>([]);
  const [drafts,setDrafts]=useState<Draft[]>([]);
  const [draft,setDraft]=useState<DraftForm>(emptyDraft);
  const [editingId,setEditingId]=useState<string|null>(null);
  const [consentId,setConsentId]=useState<string|null>(null);
  const [message,setMessage]=useState('');
  const [error,setError]=useState('');
  const [busy,setBusy]=useState(false);
  const [profileBusy,setProfileBusy]=useState(false);
  const [workBusy,setWorkBusy]=useState(false);
  const base=locale==='fr'?'/investissement':'/en/investment';
  const access=fr?'/investissement/acces/'+(role==='investor'?'investisseur':'entrepreneur'):'/en/investment/access/'+role;
  const publicPage=base+'/'+(role==='investor'?(fr?'investisseurs':'investors'):'entrepreneurs');

  useEffect(()=>{
    let mounted=true;
    async function load(){
      try{
        const {data:auth,error:authError}=await supabase.auth.getUser();
        if(authError||!auth.user){if(mounted)window.location.replace(access);return;}
        const {data:profile,error:profileError}=await supabase.from('investment_accounts').select('*').eq('user_id',auth.user.id).maybeSingle();
        if(profileError||!profile||profile.account_type!==role){
          const {data:adminProfile}=await supabase.from('profiles').select('role,status,full_name').eq('user_id',auth.user.id).maybeSingle();
          if(adminProfile?.role==='admin' && adminProfile.status==='active'){
            if(!mounted)return;
            setUserId(auth.user.id);
            setAdminPreview(true);
            setAccount({
              user_id:auth.user.id,email:auth.user.email||'',account_type:role,
              full_name:adminProfile.full_name||null,country:null,company_name:null,
              investor_interests:null,investor_budget_band:null
            });
            return;
          }
          if(mounted){setError(fr?'Ce compte ne dispose pas de cet accès. Connectez-vous avec le bon profil.':'This account is not authorised for this workspace.');setLoading(false);}
          return;
        }
        if(!mounted)return;
        setUserId(auth.user.id);setAccount(profile as Account);
        if(role==='investor'){
          const {data,error}=await supabase.from('investment_watchlist').select('project_code').eq('user_id',auth.user.id);
          if(error)throw error;
          if(mounted)setSaved((data||[]).map((row:any)=>row.project_code as InvestmentVentureCode));
        }else{
          const {data,error}=await supabase.from('investment_project_drafts').select('id,project_name,country,sector,funding_target,website,summary,updated_at').eq('user_id',auth.user.id).order('updated_at',{ascending:false});
          if(error)throw error;
          if(mounted)setDrafts((data||[]) as Draft[]);
        }
      }catch(e){if(mounted)setError(e instanceof Error?e.message:'Unable to load workspace.');}
      finally{if(mounted)setLoading(false);}
    }
    void load();
    return()=>{mounted=false;};
  },[role,access,fr,supabase]);

  async function signOut(){
    await supabase.auth.signOut();
    window.location.assign(access);
  }

  async function updateAccount(event:FormEvent<HTMLFormElement>){
    event.preventDefault();if(!account||!userId)return;
    if(adminPreview){setMessage(fr?'Aperçu administrateur : aucune donnée client modifiée.':'Administrator preview: no client data was changed.');return;}
    setProfileBusy(true);setMessage('');setError('');
    const payload={
      full_name:(account.full_name||'').slice(0,130),country:(account.country||'').slice(0,90),
      company_name:(account.company_name||'').slice(0,180),
      investor_interests:(account.investor_interests||'').slice(0,300),
      investor_budget_band:(account.investor_budget_band||'').slice(0,90)
    };
    const {error}=await supabase.from('investment_accounts').update(payload).eq('user_id',userId);
    if(error)setError(error.message);else setMessage(fr?'Profil enregistré.':'Profile saved.');
    setProfileBusy(false);
  }

  async function toggleWatchlist(code:InvestmentVentureCode){
    if(!userId||role!=='investor')return;
    setBusy(true);setMessage('');setError('');
    const exists=saved.includes(code);
    if(adminPreview){
      setSaved(current=>exists?current.filter(p=>p!==code):[...current,code]);
      setBusy(false);
      return;
    }
    const result=exists
      ? await supabase.from('investment_watchlist').delete().eq('user_id',userId).eq('project_code',code)
      : await supabase.from('investment_watchlist').insert({user_id:userId,project_code:code});
    if(result.error)setError(result.error.message);
    else setSaved(current=>exists?current.filter(p=>p!==code):[...current,code]);
    setBusy(false);
  }

  async function refreshDrafts(){
    if(adminPreview||!userId)return;
    const {data,error}=await supabase.from('investment_project_drafts').select('id,project_name,country,sector,funding_target,website,summary,updated_at').eq('user_id',userId).order('updated_at',{ascending:false});
    if(error)throw error;
    setDrafts((data||[]) as Draft[]);
  }

  async function saveDraft(event:FormEvent<HTMLFormElement>){
    event.preventDefault();if(role!=='entrepreneur'||!userId)return;
    setWorkBusy(true);setError('');setMessage('');
    try{
      const payload={
        project_name:draft.project_name.trim().slice(0,180),
        country:draft.country.trim().slice(0,90),
        sector:draft.sector.trim().slice(0,120),
        funding_target:draft.funding_target.trim().slice(0,90),
        website:draft.website.trim().slice(0,250),
        summary:draft.summary.trim().slice(0,5000),
        updated_at:new Date().toISOString()
      };
      if(payload.project_name.length<2)throw new Error(fr?'Indiquez le nom du projet.':'Enter a project name.');
      if(adminPreview){
        if(editingId){
          setDrafts(current=>current.map(d=>d.id===editingId?{...d,...payload}:d));
        }else{
          setDrafts(current=>[{...payload,id:'admin-preview-'+Date.now()},...current]);
        }
        setEditingId(null);setDraft(emptyDraft);setConsentId(null);
        setMessage(fr?'Brouillon de démonstration conservé uniquement pendant cette session.':'Demo draft kept only for this session.');
        return;
      }
      const query=editingId
        ? await supabase.from('investment_project_drafts').update(payload).eq('id',editingId).eq('user_id',userId)
        : await supabase.from('investment_project_drafts').insert({...payload,user_id:userId});
      if(query.error)throw query.error;
      await refreshDrafts();
      setEditingId(null);setDraft(emptyDraft);setConsentId(null);
      setMessage(fr?'Brouillon privé enregistré.':'Private draft saved.');
    }catch(e){setError(e instanceof Error?e.message:'Could not save draft.');}
    finally{setWorkBusy(false);}
  }

  function editDraft(item:Draft){
    setEditingId(item.id);
    setDraft({project_name:item.project_name,country:item.country,sector:item.sector,funding_target:item.funding_target,website:item.website,summary:item.summary});
    setConsentId(null);setMessage('');setError('');
    window.scrollTo({top:0,behavior:'smooth'});
  }

  async function deleteDraft(item:Draft){
    if(!userId)return;
    if(!window.confirm(fr?'Supprimer ce brouillon privé ?':'Delete this private draft?'))return;
    setWorkBusy(true);setError('');setMessage('');
    if(adminPreview){
      setDrafts(current=>current.filter(d=>d.id!==item.id));
      if(editingId===item.id){setEditingId(null);setDraft(emptyDraft);}
      setMessage(fr?'Brouillon de démonstration supprimé.':'Demo draft removed.');
      setWorkBusy(false);
      return;
    }
    const {error}=await supabase.from('investment_project_drafts').delete().eq('id',item.id).eq('user_id',userId);
    if(error)setError(error.message);else{await refreshDrafts();setMessage(fr?'Brouillon supprimé.':'Draft deleted.');if(editingId===item.id){setEditingId(null);setDraft(emptyDraft);}}
    setWorkBusy(false);
  }

  async function requestReview(item:Draft){
    if(!account||!userId)return;
    if(adminPreview){setMessage(fr?'Aperçu administrateur : aucun e-mail envoyé.':'Administrator preview: no enquiry email was sent.');return;}
    if(consentId!==item.id){setError(fr?'Cochez la case de consentement avant l’envoi.':'Please confirm consent before sending.');return;}
    setWorkBusy(true);setError('');setMessage('');
    try{
      const fields:Record<string,string>={
        'Full name':account.full_name||'',
        Email:account.email,
        'Country of residence':account.country||'',
        Company:item.project_name,
        'Funding target':item.funding_target,
        Sector:item.sector,
        Website:item.website,
        Message:item.summary,
        Consent:'Yes',
        'Investment draft ID':item.id
      };
      const response=await fetch('/api/forms',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({locale,formKind:'investment-project',sourcePath:window.location.pathname,fields})});
      if(!response.ok)throw new Error(fr?'Envoi non confirmé. Le brouillon est conservé.':'Submission was not confirmed. Your draft is saved.');
      setMessage(fr?'Votre demande d’étude a été envoyée à Bosphoras. Votre brouillon reste modifiable ; aucune acceptation de financement n’est implicite.':'Your advisory enquiry has been sent to Bosphoras. Your draft remains editable; funding has not been accepted.');
      setConsentId(null);
    }catch(e){setError(e instanceof Error?e.message:'Could not send enquiry.');}
    finally{setWorkBusy(false);}
  }

  const input='mt-2 w-full border border-[#d1dade] bg-white p-3 text-sm text-[#26343c] outline-none focus:border-[#193344]';
  const label='block text-sm leading-6 text-[#354953]';
  if(loading)return <main className="min-h-screen bg-[#f5f5f3] px-6 py-24 text-[#193344]"><p role="status" className="mx-auto max-w-6xl">{fr?'Chargement de votre espace privé…':'Loading your private workspace…'}</p></main>;
  if(error&&!account)return <main className="min-h-screen bg-[#f5f5f3] px-6 py-24"><div className="mx-auto max-w-2xl"><h1 className="text-3xl text-[#193344]">{fr?'Accès indisponible':'Access unavailable'}</h1><p role="alert" className="mt-5">{error}</p><button onClick={signOut} className="mt-6 bg-[#193344] px-6 py-3 text-white">{fr?'Changer de compte':'Switch account'}</button></div></main>;
  return <main lang={locale} className="min-h-screen bg-[#f5f5f3] px-5 pb-20 pt-12 text-[#202629] md:px-12">
    <div className="mx-auto max-w-[1300px]">
      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[#ccd7db] pb-6">
        <div><p className="text-xs uppercase tracking-[.18em] text-[#52646e]">BOSPHORAS INVESTMENT</p>{adminPreview&&<p className="mt-3 inline-block border border-[#193344] px-3 py-1 text-xs font-medium text-[#193344]">{fr?'APERÇU ADMINISTRATEUR':'ADMINISTRATOR PREVIEW'}</p>}<h1 className="mt-4 text-3xl font-normal tracking-[-.04em] text-[#193344]">{role==='investor'?(fr?'Mon espace investisseur':'My investor space'):(fr?'Mon espace entrepreneur':'My entrepreneur space')}</h1><p className="mt-3 text-sm text-[#596b74]">{account?.email}</p></div>
        <div className="flex flex-wrap gap-3">{adminPreview&&<Link href={fr?('/investissement/espace/'+(role==='investor'?'entrepreneur':'investisseur')):('/en/investment/dashboard/'+(role==='investor'?'entrepreneur':'investor'))} className="border border-[#193344] px-4 py-3 text-sm text-[#193344]">{fr?(role==='investor'?'Voir l’espace entrepreneur':'Voir l’espace investisseur'):(role==='investor'?'Preview entrepreneur':'Preview investor')}</Link>}<Link href={publicPage} className="border border-[#bcc9cf] px-4 py-3 text-sm text-[#193344]">{fr?'Voir la présentation':'View overview'}</Link><button onClick={signOut} className="inline-flex items-center gap-2 border border-[#193344] px-4 py-3 text-sm text-[#193344]"><LogOut size={16}/>{fr?'Déconnexion':'Sign out'}</button></div>
      </header>
      {message&&<p role="status" aria-live="polite" className="mt-6 border-l-2 border-[#193344] bg-white p-4 text-sm text-[#193344]">{message}</p>}
      {error&&<p role="alert" className="mt-6 border-l-2 border-red-700 bg-red-50 p-4 text-sm text-red-800">{error}</p>}
      {adminPreview&&<p className="mt-6 text-sm leading-7 text-[#52616b]">{fr?'Vous voyez l’interface réelle en mode démonstration. Les projets enregistrés et les dossiers saisis ici ne sont pas sauvegardés dans les comptes clients.':'You are viewing the real interface in demo mode. Saved projects and drafts in this preview are not written to client accounts.'}</p>}
      <div className="mt-8 grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
        <aside className="self-start border border-[#d5dfe3] bg-white p-7">
          <UserRound size={28} strokeWidth={1.2} className="text-[#193344]"/>
          <h2 className="mt-6 text-2xl tracking-[-.04em] text-[#193344]">{fr?'Mon profil':'My profile'}</h2>
          <form onSubmit={updateAccount} className="mt-7 space-y-4">
            <label className={label}>{fr?'Nom complet':'Full name'}<input className={input} type="text" maxLength={130} value={account?.full_name||''} onChange={e=>setAccount(a=>a?{...a,full_name:e.target.value}:a)}/></label>
            <label className={label}>{fr?'Pays de résidence':'Country of residence'}<input className={input} type="text" maxLength={90} value={account?.country||''} onChange={e=>setAccount(a=>a?{...a,country:e.target.value}:a)}/></label>
            {role==='entrepreneur'?<label className={label}>{fr?'Société':'Company'}<input className={input} type="text" maxLength={180} value={account?.company_name||''} onChange={e=>setAccount(a=>a?{...a,company_name:e.target.value}:a)}/></label>:<>
              <label className={label}>{fr?'Secteurs d’intérêt':'Sectors of interest'}<input className={input} maxLength={300} value={account?.investor_interests||''} onChange={e=>setAccount(a=>a?{...a,investor_interests:e.target.value}:a)}/></label>
              <label className={label}>{fr?'Enveloppe indicative':'Indicative investment range'}<select className={input} value={account?.investor_budget_band||''} onChange={e=>setAccount(a=>a?{...a,investor_budget_band:e.target.value}:a)}><option value="">—</option><option>€1,000–€5,000</option><option>€5,000–€25,000</option><option>€25,000–€100,000</option><option>Above €100,000</option><option>Prefer to discuss</option></select></label>
            </>}
            <button type="submit" disabled={profileBusy} className="inline-flex items-center gap-2 bg-[#193344] px-5 py-3 text-sm text-white disabled:opacity-50"><Save size={15}/>{profileBusy?(fr?'Enregistrement…':'Saving…'):(fr?'Enregistrer mon profil':'Save profile')}</button>
          </form>
          <p className="mt-8 flex items-start gap-3 border-t border-[#d8e1e4] pt-5 text-xs leading-6 text-[#5e707a]"><ShieldCheck size={18} className="mt-1 shrink-0"/>{fr?'Cet accès est distinct du portail professionnel Bosphoras. Il ne contient ni compte bancaire ni souscription financière.':'This workspace is separate from the Bosphoras professional portal. It holds no bank account or investment subscription.'}</p>
        </aside>
        {role==='investor'?<section className="border border-[#d5dfe3] bg-white p-7 md:p-9">
          <Bookmark size={28} strokeWidth={1.2} className="text-[#193344]"/>
          <h2 className="mt-6 text-3xl tracking-[-.05em] text-[#193344]">{fr?'Projets à suivre':'Venture watchlist'}</h2>
          <p className="mt-5 text-sm leading-8 text-[#53616b]">{fr?'Enregistrez les projets qui vous intéressent. Ils sont en cours de préparation et ne constituent pas des offres d’investissement. Aucun montant, rendement ou droit à souscrire n’est annoncé.':'Save ventures that interest you. These are preliminary research dossiers, not available securities offerings or confirmed investment opportunities.'}</p>
          <p className="mt-4 text-sm font-medium text-[#193344]">{fr?'Projets enregistrés :':'Saved ventures:'} {saved.length} / {investmentVentures.length}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">{investmentVentures.map(v=><article key={v.code} className="border border-[#dae2e5] p-5"><p className="text-xs text-[#64747d]">{fr?v.sector:v.englishSector}</p><h3 className="mt-3 text-xl text-[#193344]">{v.name}</h3><p className="mt-3 min-h-20 text-sm leading-7 text-[#54656e]">{fr?v.summary:v.englishSummary}</p><button disabled={busy} onClick={()=>toggleWatchlist(v.code)} className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#193344] underline underline-offset-4 disabled:opacity-50">{saved.includes(v.code)?<BookmarkCheck size={17}/>:<Bookmark size={17}/>} {saved.includes(v.code)?(fr?'Ne plus suivre':'Remove from watchlist'):(fr?'Suivre ce projet':'Save venture')}</button></article>)}</div>
        </section>:<section className="border border-[#d5dfe3] bg-white p-7 md:p-9">
          <FileText size={28} strokeWidth={1.2} className="text-[#193344]"/>
          <h2 className="mt-6 text-3xl tracking-[-.05em] text-[#193344]">{fr?'Mes dossiers en préparation':'My private project drafts'}</h2>
          <p className="mt-5 text-sm leading-8 text-[#53616b]">{fr?'Créez ou modifiez un résumé privé avant de demander une étude. Aucun document sensible n’est requis ici. Les dossiers ne sont pas publiés et aucun financement n’est sollicité.':'Create and edit a private summary before submitting an advisory enquiry. No sensitive financial files are requested. Drafts are not publicly listed or offered for investment.'}</p>
          <form onSubmit={saveDraft} className="mt-8 grid gap-5">
            <label className={label}>{fr?'Nom du projet':'Project name'} *<input required minLength={2} maxLength={180} value={draft.project_name} onChange={e=>setDraft(d=>({...d,project_name:e.target.value}))} className={input}/></label>
            <div className="grid gap-5 md:grid-cols-2">
              <label className={label}>{fr?'Pays':'Country'}<input maxLength={90} value={draft.country} onChange={e=>setDraft(d=>({...d,country:e.target.value}))} className={input}/></label>
              <label className={label}>{fr?'Secteur':'Sector'}<input maxLength={120} value={draft.sector} onChange={e=>setDraft(d=>({...d,sector:e.target.value}))} className={input}/></label>
              <label className={label}>{fr?'Montant recherché':'Funding requirement'}<input maxLength={90} value={draft.funding_target} onChange={e=>setDraft(d=>({...d,funding_target:e.target.value}))} className={input}/></label>
              <label className={label}>{fr?'Site web':'Website'}<input maxLength={250} value={draft.website} onChange={e=>setDraft(d=>({...d,website:e.target.value}))} className={input}/></label>
            </div>
            <label className={label}>{fr?'Activité, revenus, besoin de financement et utilisation des fonds':'Business, revenue, financing need and use of proceeds'}<textarea rows={5} maxLength={5000} value={draft.summary} onChange={e=>setDraft(d=>({...d,summary:e.target.value}))} className={input}/></label>
            <div className="flex flex-wrap gap-3"><button type="submit" disabled={workBusy} className="inline-flex items-center gap-2 bg-[#193344] px-5 py-3 text-sm text-white disabled:opacity-50"><Save size={15}/>{editingId?(fr?'Mettre à jour le brouillon':'Update draft'):(fr?'Enregistrer le brouillon':'Save draft')}</button>{editingId&&<button type="button" onClick={()=>{setEditingId(null);setDraft(emptyDraft);setMessage('');setConsentId(null);}} className="border border-[#c5d1d6] px-5 py-3 text-sm text-[#193344]">{fr?'Nouveau brouillon':'New draft'}</button>}</div>
          </form>
          <div className="mt-12 border-t border-[#d5dfe3] pt-8"><h3 className="text-2xl tracking-[-.04em] text-[#193344]">{fr?'Brouillons enregistrés':'Saved drafts'}</h3>{drafts.length===0?<p className="mt-4 text-sm text-[#63737c]">{fr?'Aucun dossier enregistré pour le moment.':'No project drafts yet.'}</p>:<div className="mt-5 space-y-4">{drafts.map(item=><div key={item.id} className="border border-[#d9e1e3] p-5"><h4 className="text-lg text-[#193344]">{item.project_name}</h4><p className="mt-2 text-sm text-[#65747d]">{[item.country,item.sector,item.funding_target].filter(Boolean).join(' · ')}</p><p className="mt-3 line-clamp-3 text-sm leading-7 text-[#56656d]">{item.summary}</p><div className="mt-5 flex flex-wrap gap-4"><button type="button" disabled={workBusy} onClick={()=>editDraft(item)} className="text-sm text-[#193344] underline underline-offset-4">{fr?'Modifier':'Edit'}</button><button type="button" disabled={workBusy} onClick={()=>deleteDraft(item)} className="text-sm text-[#7a3c3c] underline underline-offset-4">{fr?'Supprimer':'Delete'}</button></div>
                <label className="mt-6 flex items-start gap-3 text-xs leading-6 text-[#596972]"><input type="checkbox" checked={consentId===item.id} onChange={e=>setConsentId(e.target.checked?item.id:null)} className="mt-1 h-4 w-4 accent-[#193344]"/><span>{fr?'J’autorise l’envoi de ce dossier à l’équipe Bosphoras pour qu’elle me contacte au sujet d’une éventuelle mission de conseil.':'I authorise sending this summary to Bosphoras so they can contact me about potential advisory services.'}</span></label>
                <button type="button" disabled={workBusy} onClick={()=>requestReview(item)} className="mt-4 inline-flex items-center gap-2 border border-[#193344] px-5 py-3 text-sm text-[#193344] disabled:opacity-50">{fr?'Demander une étude':'Request a review'}<ArrowRight size={15}/></button>
              </div>)}</div>}</div>
        </section>}
      </div>
      <p className="mt-12 flex max-w-[1300px] items-start gap-3 text-xs leading-7 text-[#61727a]"><CircleAlert size={16} className="mt-1 shrink-0"/>{fr?'Ce portail est un espace de préparation et de suivi des centres d’intérêt. Il ne constitue pas une offre de placement, un intermédiaire de paiement ou un outil de suivi de titres effectivement détenus.':'This portal stores early-stage interests and project drafts. It is not a securities offer, payment service or reporting platform for actual holdings.'}</p>
    </div>
  </main>;
}
