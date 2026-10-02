// @ts-nocheck
'use client';

import { FormEvent, useCallback, useEffect, useMemo, useState } from 'react';
import {
  Bell, Building2, Calculator, CheckCircle2, ChevronRight, CircleDollarSign, ClipboardCheck,
  Contact, KeyRound, LayoutDashboard, Link2, LogOut, MessageCircle, Plus, RefreshCw, Send,
  ShieldCheck, Users, XCircle,
} from 'lucide-react';
import { createIsolatedPortalSupabase, getPortalSupabase } from '@/lib/portalSupabase';
import { InvestmentCalculator } from '@/components/InvestmentCalculator';
import { ListingSubmissionEditor } from '@/components/ListingSubmissionEditor';
import { AdminPropertyImporter } from '@/components/AdminPropertyImporter';
import { AdminListingEditor } from '@/components/AdminListingEditor';

type Tab = 'dashboard' | 'listings' | 'import' | 'crm' | 'chat' | 'calculators' | 'partners' | 'approvals';

function money(value: any, currency = 'EUR') {
  const n = Number(value || 0);
  return new Intl.NumberFormat('fr-FR', { style: 'currency', currency, maximumFractionDigits: 0 }).format(Number.isFinite(n) ? n : 0);
}

export function PartnerWorkspace() {
  const supabase = getPortalSupabase();
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [tab, setTab] = useState<Tab>('dashboard');
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [partners, setPartners] = useState<any[]>([]);
  const [partnerUsers, setPartnerUsers] = useState<any[]>([]);
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [listings, setListings] = useState<any[]>([]);
  const [contacts, setContacts] = useState<any[]>([]);
  const [deals, setDeals] = useState<any[]>([]);
  const [threads, setThreads] = useState<any[]>([]);
  const [messages, setMessages] = useState<any[]>([]);
  const [selectedThread, setSelectedThread] = useState<string | null>(null);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [editingSubmission, setEditingSubmission] = useState<any>(null);
  const [editingListing, setEditingListing] = useState<any>(null);
  const [showNewListing, setShowNewListing] = useState(false);

  const isAdmin = profile?.role === 'admin';

  const loadAll = useCallback(async () => {
    setLoading(true);
    const { data: authData } = await supabase.auth.getUser();
    if (!authData.user) {
      window.location.href = '/connexion';
      return;
    }
    setUser(authData.user);

    const { data: profileData, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', authData.user.id)
      .single();
    if (profileError || !profileData) {
      setMessage("Profil portail introuvable. Si c'est la première connexion, terminez d'abord l'activation.");
      setLoading(false);
      return;
    }
    setProfile(profileData);

    const requests: any[] = [
      supabase.from('property_listing_submissions').select('*').order('created_at', { ascending: false }),
      supabase.from('property_listings').select('*').order('updated_at', { ascending: false }),
      supabase.from('crm_contacts').select('*').order('updated_at', { ascending: false }),
      supabase.from('crm_deals').select('*').order('updated_at', { ascending: false }),
      supabase.from('chat_threads').select('*').order('last_message_at', { ascending: false, nullsFirst: false }),
      supabase.from('notifications').select('*').order('created_at', { ascending: false }).limit(50),
    ];
    if (profileData.role === 'admin') {
      requests.push(
        supabase.from('partner_companies').select('*').order('created_at', { ascending: false }),
        supabase.from('profiles').select('*').eq('role', 'partner').order('created_at', { ascending: false })
      );
    }

    const results = await Promise.all(requests);
    setSubmissions(results[0].data || []);
    setListings(results[1].data || []);
    setContacts(results[2].data || []);
    setDeals(results[3].data || []);
    setThreads(results[4].data || []);
    setNotifications(results[5].data || []);
    if (profileData.role === 'admin') {
      setPartners(results[6].data || []);
      setPartnerUsers(results[7].data || []);
    }

    const initialThread = (results[4].data || [])[0]?.id || null;
    if (initialThread && !selectedThread) setSelectedThread(initialThread);
    setLoading(false);
  }, [supabase, selectedThread]);

  useEffect(() => {
    loadAll();
  }, [loadAll]);

  useEffect(() => {
    if (!selectedThread) {
      setMessages([]);
      return;
    }
    supabase.from('chat_messages').select('*').eq('thread_id', selectedThread).order('created_at').then(({data})=>setMessages(data || []));
    const channel = supabase
      .channel(`thread-${selectedThread}`)
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'chat_messages', filter: `thread_id=eq.${selectedThread}` }, (payload) => {
        setMessages(current => [...current, payload.new]);
      })
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, [selectedThread, supabase]);

  async function logout() {
    await supabase.auth.signOut();
    window.location.href = '/connexion';
  }

  const unread = notifications.filter(n => !n.read_at).length;
  const pendingApprovals = submissions.filter(s => s.status === 'submitted').length;
  const activeDeals = deals.filter(d => !['closed_won','closed_lost'].includes(d.stage)).length;
  const pipeline = deals
    .filter(d => d.stage !== 'closed_lost')
    .reduce((sum, d) => sum + Number(d.deal_value || 0) * (Number(d.probability || 0) / 100), 0);

  const nav = useMemo(() => {
    const base = [
      ['dashboard','Vue d’ensemble',LayoutDashboard],
      ['listings','Biens & projets',Building2],
      ['crm','CRM',Contact],
      ['chat','Chat interne',MessageCircle],
      ['calculators','Calculateurs',Calculator],
    ] as any[];
    if (isAdmin) base.push(['import','Importer par lien',Link2],['partners','Partenaires',Users],['approvals','Validations',ClipboardCheck]);
    return base;
  }, [isAdmin]);

  if (loading) {
    return <div className="flex min-h-screen items-center justify-center bg-[#0f1725] text-white"><RefreshCw className="animate-spin" /></div>;
  }

  if (!profile) {
    return <div className="min-h-screen bg-[#0f1725] p-10 text-white"><p>{message || 'Accès indisponible.'}</p><button onClick={logout} className="mt-5 underline">Se déconnecter</button></div>;
  }

  if (profile.status !== 'active') {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0f1725] p-6 text-white">
        <div className="max-w-xl border border-white/15 p-8 text-center">
          <ShieldCheck className="mx-auto text-[#b9d0e0]" />
          <h1 className="mt-5 font-sans text-4xl">Accès suspendu</h1>
          <p className="mt-4 text-[#b9c0ca]">Votre compte est authentifié mais l'accès opérationnel Bosphoras a été suspendu. Contactez l'administrateur.</p>
          <button onClick={logout} className="mt-7 border border-white/20 px-5 py-3 text-sm uppercase tracking-[0.12em]">Se déconnecter</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f3f6f8] text-[#162334] [font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe_UI,sans-serif]">
      <header className="sticky top-0 z-40 border-b border-[#26394a] bg-[#0d1c2b] text-white">
        <div className="mx-auto flex max-w-[1700px] items-center justify-between gap-4 px-4 py-3 md:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center border border-[#456b88]/60 text-[#b9d0e0]"><KeyRound size={17}/></div>
            <div>
              <strong className="block text-lg font-semibold tracking-[-0.02em]">Bosphoras Partner Desk</strong>
              <span className="block text-[0.62rem] uppercase tracking-[0.16em] text-[#9eb0bf]">{isAdmin ? 'Administration complète' : 'Espace partenaire'}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={()=>setTab('dashboard')} className="relative p-2 text-[#b9d0e0]"><Bell size={18}/>{unread>0&&<span className="absolute right-0 top-0 h-4 min-w-4 rounded-full bg-[#c76055] px-1 text-[0.6rem] leading-4 text-white">{unread}</span>}</button>
            <div className="hidden text-right text-xs md:block"><strong className="block text-white">{profile.full_name || profile.email}</strong><span className="text-[#9eb0bf]">{profile.role}</span></div>
            <button onClick={logout} className="p-2 text-[#9eb0bf] hover:text-white" aria-label="Se déconnecter"><LogOut size={18}/></button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1700px] lg:grid-cols-[245px_1fr]">
        <aside className="border-r border-[#d9e1e8] bg-white p-4 lg:min-h-[calc(100vh-65px)]">
          <nav className="grid gap-1">
            {nav.map(([value,label,Icon])=>(
              <button key={value} onClick={()=>setTab(value)} className={`flex items-center justify-between gap-3 px-4 py-3 text-left text-sm transition ${
                tab===value?'bg-[#12304a] text-white':'text-[#526272] hover:bg-[#f3f6f8]'
              }`}>
                <span className="flex items-center gap-3"><Icon size={17}/>{label}</span>
                {value==='approvals'&&pendingApprovals>0&&<span className="rounded-full bg-[#d8e6ef] px-2 py-0.5 text-[0.65rem] font-bold text-[#12304a]">{pendingApprovals}</span>}
              </button>
            ))}
          </nav>
          <div className="mt-8 border-t border-[#d9e1e8] pt-5">
            <a href="/immobilier-turquie" className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] text-[#315d7c]">Voir Property Desk <ChevronRight size={14}/></a>
          </div>
        </aside>

        <main className="min-w-0 p-4 md:p-7 lg:p-9">
          {message && <div className="mb-6 border border-[#d8c7a1] bg-white p-4 text-sm">{message}</div>}
          {tab==='dashboard' && (
            <Dashboard
              isAdmin={isAdmin}
              partners={partners}
              listings={listings}
              contacts={contacts}
              deals={deals}
              pipeline={pipeline}
              pendingApprovals={pendingApprovals}
              activeDeals={activeDeals}
              notifications={notifications}
              setTab={setTab}
            />
          )}
          {tab==='listings' && (
            <ListingsPanel
              isAdmin={isAdmin}
              user={user}
              profile={profile}
              listings={listings}
              submissions={submissions}
              showNew={showNewListing}
              setShowNew={setShowNewListing}
              editingSubmission={editingSubmission}
              setEditingSubmission={setEditingSubmission}
              editingListing={editingListing}
              setEditingListing={setEditingListing}
              reload={loadAll}
            />
          )}
          {tab==='import' && isAdmin && <Section title="Importer une opportunité" kicker="Source partenaire → Bosphoras"><AdminPropertyImporter user={user} reload={loadAll}/></Section>}
          {tab==='crm' && <CrmPanel isAdmin={isAdmin} user={user} profile={profile} contacts={contacts} deals={deals} partnerUsers={partnerUsers} reload={loadAll}/>}
          {tab==='chat' && <ChatPanel isAdmin={isAdmin} user={user} threads={threads} partnerUsers={partnerUsers} selectedThread={selectedThread} setSelectedThread={setSelectedThread} messages={messages}/>}
          {tab==='calculators' && <Section title="Calculateurs investissement" kicker="Bosphoras Analysis"><InvestmentCalculator/></Section>}
          {tab==='partners' && isAdmin && <PartnersPanel partners={partners} partnerUsers={partnerUsers} reload={loadAll}/>}
          {tab==='approvals' && isAdmin && <ApprovalsPanel submissions={submissions} reload={loadAll}/>}
        </main>
      </div>
    </div>
  );
}

function Section({title,kicker,children,action}:{title:string;kicker?:string;children:any;action?:any}) {
  return <section><div className="mb-7 flex flex-wrap items-end justify-between gap-4"><div>{kicker&&<p className="text-xs font-bold uppercase tracking-[0.24em] text-[#315d7c]">{kicker}</p>}<h1 className="mt-2 font-sans text-4xl tracking-[-0.035em] md:text-5xl">{title}</h1></div>{action}</div>{children}</section>;
}

function Dashboard({isAdmin,partners,listings,contacts,deals,pipeline,pendingApprovals,activeDeals,notifications,setTab}:any) {
  const cards: Array<[string, string | number, any]> = [
    [isAdmin?'Partenaires actifs':'Biens attribués', isAdmin?partners.filter((p:any)=>p.status==='active').length:listings.length, Users],
    ['Contacts CRM', contacts.length, Contact],
    ['Deals actifs', activeDeals, CircleDollarSign],
    ['Pipeline pondéré', money(pipeline), Calculator],
  ];
  return (
    <Section title={isAdmin?'Pilotage Bosphoras':'Votre activité'} kicker={isAdmin?'Administration':'Partner Desk'}>
      <div className="grid gap-px bg-[#d8c7a1] sm:grid-cols-2 xl:grid-cols-4">
        {cards.map(([label,value,Icon])=><article key={label as string} className="bg-white p-6"><Icon size={20} className="text-[#315d7c]"/><span className="mt-8 block text-xs font-bold uppercase tracking-[0.12em] text-[#66707b]">{label as string}</span><strong className="mt-2 block font-sans text-4xl">{value as any}</strong></article>)}
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="border border-[#d8c7a1] bg-white p-6">
          <div className="flex items-center justify-between"><h2 className="font-sans text-3xl">Priorités</h2>{isAdmin&&pendingApprovals>0&&<button onClick={()=>setTab('approvals')} className="text-xs font-bold uppercase tracking-[0.12em] text-[#315d7c]">{pendingApprovals} validation(s)</button>}</div>
          <div className="mt-6 grid gap-3">
            <button onClick={()=>setTab('listings')} className="flex items-center justify-between border border-[#eee3d2] p-4 text-left"><span><strong className="block">Biens & projets</strong><span className="mt-1 block text-sm text-[#66707b]">Créer, suivre ou réviser les opportunités.</span></span><ChevronRight size={17}/></button>
            <button onClick={()=>setTab('crm')} className="flex items-center justify-between border border-[#eee3d2] p-4 text-left"><span><strong className="block">CRM</strong><span className="mt-1 block text-sm text-[#66707b]">Relances, pipeline, prochaines actions.</span></span><ChevronRight size={17}/></button>
            <button onClick={()=>setTab('calculators')} className="flex items-center justify-between border border-[#eee3d2] p-4 text-left"><span><strong className="block">Analyse investissement</strong><span className="mt-1 block text-sm text-[#66707b]">Rendements, cash-flow, LTV, DSCR et échéanciers.</span></span><ChevronRight size={17}/></button>
          </div>
        </div>
        <div className="border border-[#d8c7a1] bg-[#101827] p-6 text-white">
          <h2 className="font-sans text-3xl">Notifications</h2>
          <div className="mt-5 divide-y divide-white/10">
            {notifications.slice(0,6).map((n:any)=><div key={n.id} className="py-4"><strong className="block text-sm">{n.title}</strong><p className="mt-1 text-xs leading-5 text-[#aeb5bf]">{n.body}</p></div>)}
            {notifications.length===0&&<p className="py-6 text-sm text-[#aeb5bf]">Aucune notification.</p>}
          </div>
        </div>
      </div>
    </Section>
  );
}

function listingToPayload(l:any) {
  return {
    externalId:l.external_id, featured:l.featured, status:l.status, collection:l.collection, transaction:l.transaction_type,
    propertyType:l.property_type, city:l.city, district:l.district,
    slugs:{fr:l.slug_fr,en:l.slug_en,ru:l.slug_ru,ar:l.slug_ar},
    title:l.title, summary:l.summary, description:l.description, seoTitle:l.seo_title, seoDescription:l.seo_description,
    currency:l.currency,totalPrice:l.total_price,priceOnRequest:l.price_on_request,entryCapital:l.entry_capital,surfaceM2:l.surface_m2,
    bedrooms:l.bedrooms,bathrooms:l.bathrooms,delivery:l.delivery,developer:l.developer,partner:l.partner,paymentPlan:l.payment_plan,
    highlights:l.highlights,technicalNotes:l.technical_notes,strengths:l.strengths,watchpoints:l.watchpoints,images:l.images,heroImage:l.hero_image,
    verifiedAt:l.verified_at,
  };
}

function ListingsPanel({isAdmin,user,profile,listings,submissions,showNew,setShowNew,editingSubmission,setEditingSubmission,editingListing,setEditingListing,reload}:any) {
  const supabase=getPortalSupabase();
  async function togglePublish(listing:any) {
    const next=!listing.published;
    const {error}=await supabase.from('property_listings').update({published:next,published_at:next?new Date().toISOString():null}).eq('id',listing.id);
    if(error) alert(error.message); else reload();
  }
  const editor = showNew || editingSubmission || editingListing;
  if(editingListing && isAdmin) {
    return <Section title="Modifier une annonce" kicker="Contrôle administrateur">
      <AdminListingEditor
        listing={editingListing}
        reload={reload}
        onClose={()=>setEditingListing(null)}
      />
    </Section>;
  }
  if(editor && !isAdmin) {
    return <Section title="Éditeur partenaire" kicker="Validation obligatoire">
      <ListingSubmissionEditor
        userId={user.id}
        listingId={editingListing?.id || editingSubmission?.listing_id || null}
        initialSubmission={editingSubmission || (editingListing?{status:'draft',payload:listingToPayload(editingListing)}:undefined)}
        onSaved={reload}
        onClose={()=>{setShowNew(false);setEditingSubmission(null);setEditingListing(null);}}
      />
    </Section>;
  }
  return <Section title="Biens & projets" kicker={isAdmin?'Inventaire global':'Vos opportunités'} action={!isAdmin?<button onClick={()=>setShowNew(true)} className="inline-flex min-h-[46px] items-center gap-2 bg-[#101827] px-5 text-xs font-bold uppercase tracking-[0.12em] text-white"><Plus size={15}/>Nouvelle annonce</button>:null}>
    {!isAdmin&&<div className="mb-8 border border-[#d8c7a1] bg-[#fffaf3] p-5 text-sm leading-6 text-[#58616d]"><strong>Règle Bosphoras :</strong> une annonce créée ou modifiée par un partenaire reste en brouillon/soumission jusqu’à validation de l’administrateur. Une modification d’un bien déjà publié ne change jamais la version publique avant approbation.</div>}
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="border border-[#d8c7a1] bg-white p-5">
        <h2 className="font-sans text-2xl">{isAdmin?'Toutes les annonces':'Biens attribués'}</h2>
        <div className="mt-5 space-y-3">
          {listings.map((l:any)=><article key={l.id} className="border border-[#eee3d2] p-4"><div className="flex items-start justify-between gap-4"><div><span className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[#315d7c]">{l.city} · {l.district}</span><h3 className="mt-1 font-sans text-xl">{l.title?.fr || l.external_id}</h3><p className="mt-2 text-sm text-[#66707b]">{money(l.total_price,l.currency)} · {l.published?'Publié':'Non publié'} · rév. {l.revision}</p></div>{l.hero_image&&<img src={l.hero_image} alt="" className="h-16 w-20 object-cover"/>}</div><div className="mt-4 flex flex-wrap gap-2">{isAdmin?<><button onClick={()=>setEditingListing(l)} className="border border-[#12304a] px-3 py-2 text-xs font-semibold uppercase text-[#12304a]">Modifier</button><button onClick={()=>togglePublish(l)} className="border border-[#12304a] px-3 py-2 text-xs font-semibold uppercase">{l.published?'Dépublier':'Publier'}</button></>:<button onClick={()=>setEditingListing(l)} className="border border-[#12304a] px-3 py-2 text-xs font-semibold uppercase">Proposer une modification</button>}</div></article>)}
          {listings.length===0&&<p className="py-6 text-sm text-[#66707b]">Aucun bien attribué pour le moment.</p>}
        </div>
      </div>
      <div className="border border-[#d8c7a1] bg-white p-5">
        <h2 className="font-sans text-2xl">{isAdmin?'Soumissions récentes':'Mes soumissions'}</h2>
        <div className="mt-5 space-y-3">
          {submissions.slice(0,20).map((s:any)=><article key={s.id} className="border border-[#eee3d2] p-4"><div className="flex items-start justify-between gap-4"><div><span className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[#315d7c]">{s.submission_type} · {s.status}</span><h3 className="mt-1 font-sans text-xl">{s.payload?.title?.fr || 'Annonce sans titre'}</h3><p className="mt-2 text-sm text-[#66707b]">{s.payload?.city} · {s.payload?.district}</p>{s.admin_feedback&&<p className="mt-3 border-l-2 border-[#c9a45d] pl-3 text-sm text-[#58616d]">{s.admin_feedback}</p>}</div></div>{!isAdmin&&['draft','changes_requested'].includes(s.status)&&<button onClick={()=>setEditingSubmission(s)} className="mt-4 border border-[#101827] px-3 py-2 text-xs font-bold uppercase">Continuer</button>}</article>)}
          {submissions.length===0&&<p className="py-6 text-sm text-[#66707b]">Aucune soumission.</p>}
        </div>
      </div>
    </div>
  </Section>;
}

function CrmPanel({isAdmin,user,profile,contacts,deals,partnerUsers,reload}:any) {
  const supabase=getPortalSupabase();
  const [show,setShow]=useState(false);
  const [dealContact,setDealContact]=useState<string>('');
  async function createContact(e:FormEvent<HTMLFormElement>) {
    e.preventDefault(); const fd=new FormData(e.currentTarget);
    const row:any={owner_user_id:user.id,partner_id:isAdmin?null:profile.partner_id,first_name:String(fd.get('first_name')||''),last_name:String(fd.get('last_name')||''),email:String(fd.get('email')||''),phone:String(fd.get('phone')||''),source:String(fd.get('source')||'partner'),status:'new',budget_min:Number(fd.get('budget_min')||0)||null,budget_max:Number(fd.get('budget_max')||0)||null,capital_available:Number(fd.get('capital_available')||0)||null,currency:String(fd.get('currency')||'EUR'),notes:String(fd.get('notes')||''),created_by:user.id};
    const {error}=await supabase.from('crm_contacts').insert(row); if(error) alert(error.message); else {e.currentTarget.reset();setShow(false);reload();}
  }
  async function assign(contactId:string,owner:string) { const {error}=await supabase.rpc('admin_assign_crm_contact',{p_contact_id:contactId,p_owner_user_id:owner}); if(error)alert(error.message);else reload(); }
  async function createDeal(e:FormEvent<HTMLFormElement>) {
    e.preventDefault(); const fd=new FormData(e.currentTarget); const contact=contacts.find((c:any)=>c.id===dealContact); if(!contact)return;
    const row={contact_id:contact.id,owner_user_id:contact.owner_user_id,partner_id:contact.partner_id,title:String(fd.get('title')||'Acquisition immobilière'),stage:'lead',deal_value:Number(fd.get('deal_value')||0)||null,currency:String(fd.get('currency')||'EUR'),probability:Number(fd.get('probability')||10),created_by:user.id};
    const {error}=await supabase.from('crm_deals').insert(row); if(error)alert(error.message);else{setDealContact('');reload();}
  }
  return <Section title="CRM investissement" kicker="Contacts · deals · relances" action={<button onClick={()=>setShow(!show)} className="inline-flex min-h-[46px] items-center gap-2 bg-[#101827] px-5 text-xs font-bold uppercase tracking-[0.12em] text-white"><Plus size={15}/>Contact</button>}>
    {show&&<form onSubmit={createContact} className="mb-8 grid gap-4 border border-[#d8c7a1] bg-white p-6 md:grid-cols-4"><input name="first_name" placeholder="Prénom" className="border border-[#d8c7a1] px-3 py-3"/><input name="last_name" placeholder="Nom" className="border border-[#d8c7a1] px-3 py-3"/><input name="email" type="email" placeholder="E-mail" className="border border-[#d8c7a1] px-3 py-3"/><input name="phone" placeholder="Téléphone" className="border border-[#d8c7a1] px-3 py-3"/><input name="source" placeholder="Source" className="border border-[#d8c7a1] px-3 py-3"/><input name="budget_min" placeholder="Budget min" inputMode="decimal" className="border border-[#d8c7a1] px-3 py-3"/><input name="budget_max" placeholder="Budget max" inputMode="decimal" className="border border-[#d8c7a1] px-3 py-3"/><input name="capital_available" placeholder="Capital disponible" inputMode="decimal" className="border border-[#d8c7a1] px-3 py-3"/><select name="currency" className="border border-[#d8c7a1] px-3 py-3"><option>EUR</option><option>USD</option><option>TRY</option></select><textarea name="notes" placeholder="Notes / besoin" className="border border-[#d8c7a1] px-3 py-3 md:col-span-2"/><button className="bg-[#101827] px-4 py-3 text-xs font-bold uppercase text-white">Créer</button></form>}
    <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
      <div className="border border-[#d8c7a1] bg-white p-5"><h2 className="font-sans text-2xl">Contacts</h2><div className="mt-5 space-y-3">{contacts.map((c:any)=><article key={c.id} className="border border-[#eee3d2] p-4"><div className="flex flex-wrap items-start justify-between gap-3"><div><h3 className="font-semibold">{[c.first_name,c.last_name].filter(Boolean).join(' ')||c.company||'Contact'}</h3><p className="mt-1 text-sm text-[#66707b]">{c.email||c.phone||'—'} · {c.status}</p><p className="mt-2 text-xs text-[#315d7c]">Capital {money(c.capital_available,c.currency)} · Budget max {money(c.budget_max,c.currency)}</p></div><button onClick={()=>setDealContact(c.id)} className="border border-[#101827] px-3 py-2 text-xs font-bold uppercase">Créer deal</button></div>{isAdmin&&<select value={c.owner_user_id||''} onChange={e=>assign(c.id,e.target.value)} className="mt-3 min-h-[38px] w-full border border-[#d8c7a1] px-2 text-xs"><option value="">Attribuer à un partenaire…</option>{partnerUsers.map((p:any)=><option key={p.user_id} value={p.user_id}>{p.full_name||p.email}</option>)}</select>}</article>)}{contacts.length===0&&<p className="py-5 text-sm text-[#66707b]">Aucun contact.</p>}</div></div>
      <div className="border border-[#d8c7a1] bg-[#101827] p-5 text-white"><h2 className="font-sans text-2xl">Pipeline</h2>{dealContact&&<form onSubmit={createDeal} className="mt-5 grid gap-3 border border-white/10 p-4"><input name="title" placeholder="Nom du deal" className="bg-white px-3 py-2 text-sm text-[#121826]"/><div className="grid grid-cols-3 gap-2"><input name="deal_value" placeholder="Valeur" className="bg-white px-3 py-2 text-sm text-[#121826]"/><select name="currency" className="bg-white px-2 text-sm text-[#121826]"><option>EUR</option><option>USD</option><option>TRY</option></select><input name="probability" defaultValue="10" placeholder="%" className="bg-white px-3 py-2 text-sm text-[#121826]"/></div><button className="bg-[#c9a45d] px-4 py-2 text-xs font-bold uppercase text-[#12304a]">Ajouter au pipeline</button></form>}<div className="mt-5 space-y-3">{deals.map((d:any)=><article key={d.id} className="border border-white/10 p-4"><span className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[#b9d0e0]">{d.stage}</span><h3 className="mt-1 font-sans text-xl">{d.title}</h3><div className="mt-3 flex justify-between text-sm text-[#b9c0ca]"><span>{money(d.deal_value,d.currency)}</span><span>{d.probability}%</span></div></article>)}{deals.length===0&&<p className="py-5 text-sm text-[#aeb5bf]">Aucun deal.</p>}</div></div>
    </div>
  </Section>;
}

function ChatPanel({isAdmin,user,threads,partnerUsers,selectedThread,setSelectedThread,messages}:any) {
  const supabase=getPortalSupabase();
  const [body,setBody]=useState('');
  async function send(e:FormEvent) {e.preventDefault(); if(!selectedThread||!body.trim())return; const {error}=await supabase.from('chat_messages').insert({thread_id:selectedThread,sender_user_id:user.id,body:body.trim()}); if(error)alert(error.message);else setBody('');}
  const profileMap=Object.fromEntries(partnerUsers.map((p:any)=>[p.user_id,p]));
  return <Section title="Chat interne" kicker="Bosphoras Partner Support">
    <div className="grid min-h-[620px] overflow-hidden border border-[#d8c7a1] bg-white lg:grid-cols-[300px_1fr]">
      <aside className="border-b border-[#d8c7a1] lg:border-b-0 lg:border-r"><div className="p-4 text-xs font-bold uppercase tracking-[0.14em] text-[#66707b]">{isAdmin?'Partenaires':'Votre fil Bosphoras'}</div>{threads.map((t:any)=><button key={t.id} onClick={()=>setSelectedThread(t.id)} className={`w-full border-t border-[#eee3d2] p-4 text-left ${selectedThread===t.id?'bg-[#f2eadf]':''}`}><strong className="block text-sm">{isAdmin?(profileMap[t.partner_user_id]?.full_name||profileMap[t.partner_user_id]?.email||'Partenaire'):t.subject}</strong><span className="mt-1 block text-xs text-[#7b8490]">{t.last_message_at?new Date(t.last_message_at).toLocaleString('fr-FR'):'Aucun message'}</span></button>)}</aside>
      <section className="flex min-h-[620px] flex-col"><div className="flex-1 space-y-3 overflow-y-auto bg-[#fbf7f0] p-5">{messages.map((m:any)=>{const mine=m.sender_user_id===user.id;return <div key={m.id} className={`max-w-[80%] p-3 text-sm leading-6 ${mine?'ml-auto bg-[#101827] text-white':'bg-white text-[#303a46]'}`}><p>{m.body}</p><span className={`mt-1 block text-[0.62rem] ${mine?'text-[#aeb5bf]':'text-[#8a929d]'}`}>{new Date(m.created_at).toLocaleString('fr-FR')}</span></div>})}{!selectedThread&&<p className="text-sm text-[#66707b]">Sélectionnez une conversation.</p>}</div><form onSubmit={send} className="flex gap-2 border-t border-[#d9e1e8] p-4"><input value={body} onChange={e=>setBody(e.target.value)} disabled={!selectedThread} placeholder="Écrire un message…" className="min-h-[46px] flex-1 border border-[#d8c7a1] px-3 text-sm"/><button disabled={!selectedThread||!body.trim()} className="inline-flex h-11 w-11 items-center justify-center bg-[#101827] text-white disabled:opacity-40"><Send size={16}/></button></form></section>
    </div>
  </Section>;
}

function PartnersPanel({partners,partnerUsers,reload}:any) {
  const supabase=getPortalSupabase();
  const [created,setCreated]=useState<any>(null);
  const [busy,setBusy]=useState(false);

  async function createPartner(e:FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setCreated(null);
    const fd=new FormData(e.currentTarget);
    const email=String(fd.get('email')||'').trim().toLowerCase();
    const password=String(fd.get('password')||'');
    const fullName=String(fd.get('full_name')||'').trim();
    const company=String(fd.get('company')||'').trim();
    const phone=String(fd.get('phone')||'').trim();
    const city=String(fd.get('city')||'').trim();

    if(password.length<10){
      alert('Le mot de passe initial doit contenir au moins 10 caractères.');
      setBusy(false);
      return;
    }

    const {data:prepared,error:prepareError}=await supabase.rpc('admin_prepare_partner_account',{
      p_email:email,
      p_company_name:company,
      p_full_name:fullName,
      p_phone:phone||null,
      p_city:city||null,
      p_country:'TR',
    });

    if(prepareError){
      alert(prepareError.message);
      setBusy(false);
      return;
    }

    const isolated=createIsolatedPortalSupabase();
    const {data:signup,error:signupError}=await isolated.auth.signUp({
      email,
      password,
      options:{
        data:{
          full_name:fullName,
          provision_code:prepared.provision_code,
        },
      },
    });

    if(signupError){
      alert(signupError.message);
      setBusy(false);
      return;
    }

    setCreated({
      email,
      fullName,
      company,
      sessionReady:Boolean(signup.session),
    });
    e.currentTarget.reset();
    await reload();
    setBusy(false);
  }

  async function status(id:string,next:string){
    const {error}=await supabase.rpc('admin_set_partner_status',{p_partner_id:id,p_status:next});
    if(error)alert(error.message);else reload();
  }

  const usersByPartner=partnerUsers.reduce((acc:any,u:any)=>{(acc[u.partner_id] ||= []).push(u);return acc;},{});

  return <Section title="Gestion des partenaires" kicker="Administration complète">
    <div className="mb-6 border border-[#d9e1e8] bg-[#eef4f8] p-5 text-sm leading-6 text-[#51606f]">
      <strong className="text-[#162334]">Création contrôlée par l’administrateur.</strong> Le partenaire ne dispose d’aucun écran d’inscription.
      Vous créez ici sa société, son utilisateur et son mot de passe initial. Il ne voit ensuite que ses dossiers, ses contacts CRM et ses conversations.
    </div>

    <form onSubmit={createPartner} className="grid gap-4 border border-[#d9e1e8] bg-white p-6 md:grid-cols-3">
      <input name="company" required placeholder="Société partenaire" className="min-h-[44px] border border-[#cfd8e3] px-3 text-sm"/>
      <input name="full_name" required placeholder="Nom du contact" className="min-h-[44px] border border-[#cfd8e3] px-3 text-sm"/>
      <input name="email" type="email" required placeholder="E-mail de connexion" className="min-h-[44px] border border-[#cfd8e3] px-3 text-sm"/>
      <input name="password" type="password" required minLength={10} placeholder="Mot de passe initial" className="min-h-[44px] border border-[#cfd8e3] px-3 text-sm"/>
      <input name="phone" placeholder="Téléphone" className="min-h-[44px] border border-[#cfd8e3] px-3 text-sm"/>
      <input name="city" placeholder="Ville / bureau" className="min-h-[44px] border border-[#cfd8e3] px-3 text-sm"/>
      <button disabled={busy} className="min-h-[46px] bg-[#12304a] px-5 text-xs font-semibold uppercase tracking-[0.1em] text-white disabled:opacity-50 md:col-span-3">
        {busy?'Création du compte…':'Créer le compte partenaire'}
      </button>
    </form>

    {created&&<div className="mt-4 border border-[#b9cbd8] bg-white p-5">
      <strong className="block text-[#162334]">Compte créé : {created.fullName} · {created.company}</strong>
      <p className="mt-2 text-sm leading-6 text-[#5f6e7d]">
        Identifiant : {created.email}. {created.sessionReady
          ? 'Le compte est utilisable immédiatement avec le mot de passe que vous venez de définir.'
          : 'Le compte Auth a été créé mais Supabase demande encore une confirmation e-mail avant la première connexion.'}
      </p>
    </div>}

    <div className="mt-8 grid gap-4 xl:grid-cols-2">{partners.map((p:any)=><article key={p.id} className="border border-[#d9e1e8] bg-white p-5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <span className="text-[0.67rem] font-semibold uppercase tracking-[0.1em] text-[#315d7c]">{p.status}</span>
          <h3 className="mt-1 text-xl font-semibold tracking-[-0.02em]">{p.name}</h3>
          <p className="mt-2 text-sm text-[#687685]">{p.email||'—'} · {usersByPartner[p.id]?.map((u:any)=>u.full_name||u.email).join(', ')||'Compte utilisateur en attente'}</p>
        </div>
        <div className="flex gap-2">
          {p.status!=='active'&&<button onClick={()=>status(p.id,'active')} className="border border-[#12304a] px-3 py-2 text-xs font-semibold uppercase text-[#12304a]">Activer</button>}
          {p.status==='active'&&<button onClick={()=>status(p.id,'suspended')} className="border border-[#a85656] px-3 py-2 text-xs font-semibold uppercase text-[#a85656]">Suspendre</button>}
        </div>
      </div>
    </article>)}</div>
  </Section>;
}

function ApprovalsPanel({submissions,reload}:any) {
  const supabase=getPortalSupabase();
  const pending=submissions.filter((s:any)=>s.status==='submitted');
  async function review(id:string,decision:string,publish=false) {
    const feedback=decision==='approved'?window.prompt('Note interne / message partenaire (optionnel) :',''):window.prompt(decision==='changes_requested'?'Indiquez les modifications demandées :':'Motif du refus :','');
    if(feedback===null)return;
    const {error}=await supabase.rpc('admin_review_listing_submission',{p_submission_id:id,p_decision:decision,p_feedback:feedback||null,p_publish:publish});
    if(error)alert(error.message);else reload();
  }
  return <Section title="Validations annonces" kicker="Contrôle Bosphoras">
    <div className="mb-6 border border-[#d8c7a1] bg-[#fffaf3] p-5 text-sm leading-6 text-[#58616d]">Aucune version partenaire ne modifie le site public ici sans votre décision. Pour une modification d’annonce existante, l’ancienne version reste visible jusqu’à approbation.</div>
    <div className="space-y-5">{pending.map((s:any)=>{const p=s.payload||{};return <article key={s.id} className="border border-[#d8c7a1] bg-white p-6"><div className="grid gap-6 lg:grid-cols-[1fr_320px]"><div><span className="text-xs font-bold uppercase tracking-[0.14em] text-[#315d7c]">{s.submission_type} · {p.city} · {p.district}</span><h2 className="mt-2 font-sans text-3xl">{p.title?.fr||'Sans titre'}</h2><p className="mt-3 text-sm leading-6 text-[#66707b]">{p.summary?.fr}</p><div className="mt-5 grid gap-3 sm:grid-cols-3"><div><span className="text-xs text-[#7b8490]">Prix</span><strong className="block">{money(p.totalPrice,p.currency)}</strong></div><div><span className="text-xs text-[#7b8490]">Capital aujourd'hui</span><strong className="block">{money(p.entryCapital,p.currency)}</strong></div><div><span className="text-xs text-[#7b8490]">Promoteur</span><strong className="block">{p.developer||'—'}</strong></div></div>{p.watchpoints?.length>0&&<div className="mt-5 border-l-2 border-[#c9a45d] pl-4"><strong className="text-sm">Points de vigilance</strong><ul className="mt-2 space-y-1 text-sm text-[#66707b]">{p.watchpoints.slice(0,4).map((x:any,i:number)=><li key={i}>• {x.fr||Object.values(x)[0]}</li>)}</ul></div>}</div><div>{p.images?.[0]?<img src={p.images[0]} alt="" className="aspect-[4/3] w-full object-cover"/>:<div className="flex aspect-[4/3] items-center justify-center bg-[#eee3d2] text-xs uppercase tracking-[0.15em] text-[#8a7f70]">Sans photo</div>}</div></div><div className="mt-6 flex flex-wrap gap-2 border-t border-[#eee3d2] pt-5"><button onClick={()=>review(s.id,'approved',true)} className="inline-flex items-center gap-2 bg-[#101827] px-4 py-3 text-xs font-bold uppercase text-white"><CheckCircle2 size={15}/>Approuver & publier</button><button onClick={()=>review(s.id,'approved',false)} className="border border-[#101827] px-4 py-3 text-xs font-bold uppercase">Approuver sans publier</button><button onClick={()=>review(s.id,'changes_requested',false)} className="border border-[#c9a45d] px-4 py-3 text-xs font-bold uppercase text-[#315d7c]">Demander modifications</button><button onClick={()=>review(s.id,'rejected',false)} className="inline-flex items-center gap-2 border border-[#9c5a52] px-4 py-3 text-xs font-bold uppercase text-[#9c5a52]"><XCircle size={15}/>Refuser</button></div></article>})}{pending.length===0&&<div className="border border-[#d8c7a1] bg-white p-10 text-center"><ClipboardCheck className="mx-auto text-[#315d7c]"/><h2 className="mt-4 font-sans text-3xl">Aucune validation en attente</h2></div>}</div>
  </Section>;
}
