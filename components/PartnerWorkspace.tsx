// @ts-nocheck
'use client';

import { FormEvent, useCallback, useEffect, useMemo, useState } from 'react';
import {
  Bell, Building2, Calculator, CheckCircle2, ChevronRight, CircleDollarSign, ClipboardCheck,
  Contact, KeyRound, LayoutDashboard, Link2, LogOut, MessageCircle, Plus, RefreshCw, Send,
  ShieldCheck, Trash2, UserRound, Users, XCircle,
} from 'lucide-react';
import { createIsolatedPortalSupabase, getPortalSupabase } from '@/lib/portalSupabase';
import { InvestmentCalculator } from '@/components/InvestmentCalculator';
import { ListingSubmissionEditor } from '@/components/ListingSubmissionEditor';
import { AdminPropertyImporter } from '@/components/AdminPropertyImporter';
import { AdminListingEditor } from '@/components/AdminListingEditor';
import { ProfessionalOperationsPanel } from '@/components/ProfessionalOperationsPanel';
import { PortalAccountPanel } from '@/components/PortalAccountPanel';

type Tab = 'dashboard' | 'listings' | 'import' | 'crm' | 'operations' | 'chat' | 'calculators' | 'partners' | 'approvals' | 'account';

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
  const [savedScenarios, setSavedScenarios] = useState<any[]>([]);
  const [editingSubmission, setEditingSubmission] = useState<any>(null);
  const [editingListing, setEditingListing] = useState<any>(null);
  const [showNewListing, setShowNewListing] = useState(false);

  const isAdmin = profile?.role === 'admin';

  const loadAll = useCallback(async () => {
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
      supabase.from('investment_scenarios').select('*').order('updated_at', { ascending: false }).limit(50),
      supabase.from('partner_companies').select('*').order('created_at', { ascending: false }),
    ];
    if (profileData.role === 'admin') {
      requests.push(
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
    setSavedScenarios(results[6].data || []);
    setPartners(results[7].data || []);
    if (profileData.role === 'admin') {
      setPartnerUsers(results[8].data || []);
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

  useEffect(() => {
    if (!user?.id) return;
    const channel = supabase
      .channel(`portal-alerts-${user.id}`)
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'notifications', filter: `user_id=eq.${user.id}` }, (payload) => {
        setNotifications((current) => [payload.new, ...current.filter((item) => item.id !== payload.new.id)]);
      })
      .on('postgres_changes', { event: '*', schema: 'public', table: 'property_listing_submissions' }, () => {
        if (profile?.role === 'admin') loadAll();
      })
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, [user?.id, profile?.role, supabase, loadAll]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const requestedTab = params.get('tab') as Tab | null;
    const requestedThread = params.get('thread');
    if (requestedTab && ['dashboard','listings','import','crm','operations','chat','calculators','partners','approvals','account'].includes(requestedTab)) {
      setTab(requestedTab);
    }
    if (requestedThread) setSelectedThread(requestedThread);
  }, []);

  async function openTab(next: Tab) {
    setTab(next);
    if (!user?.id) return;

    const types =
      next === 'chat'
        ? ['chat_message']
        : next === 'approvals'
        ? ['listing_submission']
        : next === 'listings'
        ? ['listing_review']
        : [];

    if (!types.length) return;

    const readAt = new Date().toISOString();
    await supabase
      .from('notifications')
      .update({ read_at: readAt })
      .eq('user_id', user.id)
      .is('read_at', null)
      .in('notification_type', types);

    setNotifications((current) =>
      current.map((item) => (types.includes(item.notification_type) ? { ...item, read_at: item.read_at || readAt } : item))
    );
  }

  async function logout() {
    await supabase.auth.signOut();
    window.location.href = '/connexion';
  }

  const unread = notifications.filter(n => !n.read_at).length;
  const chatUnread = notifications.filter(n => !n.read_at && n.notification_type === 'chat_message').length;
  const listingReviewUnread = notifications.filter(n => !n.read_at && n.notification_type === 'listing_review').length;
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
      ['operations','Opérations',ClipboardCheck],
      ['chat','Chat interne',MessageCircle],
      ['calculators','Calculateurs',Calculator],
      ['account','Mon compte',UserRound],
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
            <button onClick={()=>openTab('dashboard')} className="relative p-2 text-[#b9d0e0]"><Bell size={18}/>{unread>0&&<span className="absolute right-0 top-0 h-4 min-w-4 rounded-full bg-[#c76055] px-1 text-[0.6rem] leading-4 text-white">{unread}</span>}</button>
            <div className="hidden text-right text-xs md:block"><strong className="block text-white">{profile.full_name || profile.email}</strong><span className="text-[#9eb0bf]">{profile.role}</span></div>
            <button onClick={logout} className="p-2 text-[#9eb0bf] hover:text-white" aria-label="Se déconnecter"><LogOut size={18}/></button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1700px] lg:grid-cols-[245px_1fr]">
        <aside className="border-r border-[#d9e1e8] bg-white p-4 lg:min-h-[calc(100vh-65px)]">
          <nav className="grid gap-1">
            {nav.map(([value,label,Icon])=>(
              <button key={value} onClick={()=>openTab(value)} className={`flex items-center justify-between gap-3 px-4 py-3 text-left text-sm transition ${
                tab===value?'bg-[#12304a] text-white':'text-[#526272] hover:bg-[#f3f6f8]'
              }`}>
                <span className="flex items-center gap-3"><Icon size={17}/>{label}</span>
                {value==='chat'&&chatUnread>0&&<span className="rounded-full bg-[#c76055] px-2 py-0.5 text-[0.65rem] font-bold text-white">{chatUnread}</span>}
                {value==='listings'&&listingReviewUnread>0&&<span className="rounded-full bg-[#d8e6ef] px-2 py-0.5 text-[0.65rem] font-bold text-[#12304a]">{listingReviewUnread}</span>}
                {value==='approvals'&&pendingApprovals>0&&<span className="rounded-full bg-[#c76055] px-2 py-0.5 text-[0.65rem] font-bold text-white">{pendingApprovals}</span>}
              </button>
            ))}
          </nav>
          <div className="mt-8 border-t border-[#d9e1e8] pt-5">
            <a href="/immobilier-turquie" className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] text-[#315d7c]">Voir Property Desk <ChevronRight size={14}/></a>
          </div>
        </aside>

        <main className="min-w-0 p-4 md:p-7 lg:p-9">
          {message && <div className="mb-6 border border-[#d9e1e8] bg-white p-4 text-sm">{message}</div>}
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
          {tab==='crm' && <CrmPanel isAdmin={isAdmin} user={user} profile={profile} contacts={contacts} deals={deals} listings={listings} partnerUsers={partnerUsers} reload={loadAll}/>}
          {tab==='operations' && <Section title="Opérations immobilières" kicker="Visites · documents · commissions"><ProfessionalOperationsPanel
            user={user}
            profile={profile}
            isAdmin={isAdmin}
            contacts={contacts}
            deals={deals}
            listings={listings}
            partners={partners}
            partnerUsers={partnerUsers}
          /></Section>}
          {tab==='chat' && <ChatPanel isAdmin={isAdmin} user={user} threads={threads} partnerUsers={partnerUsers} selectedThread={selectedThread} setSelectedThread={setSelectedThread} messages={messages} notifications={notifications}/>}
          {tab==='calculators' && <Section title="Calculateurs investissement" kicker="Bosphoras Analysis"><InvestmentCalculator
            userId={user?.id}
            partnerId={profile?.partner_id}
            contacts={contacts}
            deals={deals}
            listings={listings}
            savedScenarios={savedScenarios}
            onSaved={loadAll}
          /></Section>}
          {tab==='partners' && isAdmin && <PartnersPanel partners={partners} partnerUsers={partnerUsers} reload={loadAll}/>}
          {tab==='account' && <Section title="Mon compte" kicker="Accès & sécurité"><PortalAccountPanel user={user} profile={profile} partner={partners.find((p:any)=>p.id===profile?.partner_id)} /></Section>}
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
      <div className="grid gap-px bg-[#d9e1e8] sm:grid-cols-2 xl:grid-cols-4">
        {cards.map(([label,value,Icon])=><article key={label as string} className="bg-white p-6"><Icon size={20} className="text-[#315d7c]"/><span className="mt-8 block text-xs font-bold uppercase tracking-[0.12em] text-[#687685]">{label as string}</span><strong className="mt-2 block font-sans text-4xl">{value as any}</strong></article>)}
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="border border-[#d9e1e8] bg-white p-6">
          <div className="flex items-center justify-between"><h2 className="font-sans text-3xl">Priorités</h2>{isAdmin&&pendingApprovals>0&&<button onClick={()=>setTab('approvals')} className="text-xs font-bold uppercase tracking-[0.12em] text-[#315d7c]">{pendingApprovals} validation(s)</button>}</div>
          <div className="mt-6 grid gap-3">
            <button onClick={()=>setTab('listings')} className="flex items-center justify-between border border-[#e7edf2] p-4 text-left"><span><strong className="block">Biens & projets</strong><span className="mt-1 block text-sm text-[#687685]">Créer, suivre ou réviser les opportunités.</span></span><ChevronRight size={17}/></button>
            <button onClick={()=>setTab('crm')} className="flex items-center justify-between border border-[#e7edf2] p-4 text-left"><span><strong className="block">CRM</strong><span className="mt-1 block text-sm text-[#687685]">Relances, pipeline, prochaines actions.</span></span><ChevronRight size={17}/></button>
            <button onClick={()=>setTab('calculators')} className="flex items-center justify-between border border-[#e7edf2] p-4 text-left"><span><strong className="block">Analyse investissement</strong><span className="mt-1 block text-sm text-[#687685]">Rendements, cash-flow, LTV, DSCR et échéanciers.</span></span><ChevronRight size={17}/></button>
          </div>
        </div>
        <div className="border border-[#d9e1e8] bg-[#12304a] p-6 text-white">
          <h2 className="font-sans text-3xl">Notifications</h2>
          <div className="mt-5 divide-y divide-white/10">
            {notifications.slice(0,6).map((n:any)=><div key={n.id} className="py-4"><strong className="block text-sm">{n.title}</strong><p className="mt-1 text-xs leading-5 text-[#a9bfd0]">{n.body}</p></div>)}
            {notifications.length===0&&<p className="py-6 text-sm text-[#a9bfd0]">Aucune notification.</p>}
          </div>
        </div>
      </div>
    </Section>
  );
}

function listingToPayload(l:any) {
  return {
    externalId:l.external_id, featured:l.featured, status:l.status, collection:l.collection, transaction:l.transaction_type,
    propertyType:l.property_type, countryCode:l.country_code||'TR', countryName:l.country_name||'Turkey', city:l.city, cityName:l.city_name||l.city, district:l.district,
    slugs:{fr:l.slug_fr,en:l.slug_en,ru:l.slug_ru,ar:l.slug_ar},
    title:l.title, summary:l.summary, description:l.description, seoTitle:l.seo_title, seoDescription:l.seo_description,
    currency:l.currency,totalPrice:l.total_price,priceOnRequest:l.price_on_request,entryCapital:l.entry_capital,surfaceM2:l.surface_m2,
    bedrooms:l.bedrooms,bathrooms:l.bathrooms,delivery:l.delivery,developer:l.developer,partner:l.partner,paymentPlan:l.payment_plan,paymentPlanEnabled:l.payment_plan_enabled!==false,paymentInterestMode:l.payment_interest_mode||'not_specified',paymentInterestRate:l.payment_interest_rate,cashDiscountPct:l.cash_discount_pct,cashPrice:l.cash_price,installmentPrice:l.installment_price,
    highlights:l.highlights,technicalNotes:l.technical_notes,strengths:l.strengths,watchpoints:l.watchpoints,images:l.images,heroImage:l.hero_image,
    verifiedAt:l.verified_at,
    sourceUrl:l.source_url||'',sourceHost:l.source_host||'',
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
  return <Section title="Biens & projets" kicker={isAdmin?'Inventaire global':'Vos opportunités'} action={!isAdmin?<button onClick={()=>setShowNew(true)} className="inline-flex min-h-[46px] items-center gap-2 bg-[#12304a] px-5 text-xs font-bold uppercase tracking-[0.12em] text-white"><Plus size={15}/>Nouvelle annonce</button>:null}>
    {!isAdmin&&<div className="mb-8 border border-[#d9e1e8] bg-[#f7f9fb] p-5 text-sm leading-6 text-[#526272]"><strong>Règle Bosphoras :</strong> une annonce créée ou modifiée par un partenaire reste en brouillon/soumission jusqu’à validation de l’administrateur. Une modification d’un bien déjà publié ne change jamais la version publique avant approbation.</div>}
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="border border-[#d9e1e8] bg-white p-5">
        <h2 className="font-sans text-2xl">{isAdmin?'Toutes les annonces':'Biens attribués'}</h2>
        <div className="mt-5 space-y-3">
          {listings.map((l:any)=><article key={l.id} className="border border-[#e7edf2] p-4"><div className="flex items-start justify-between gap-4"><div><span className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[#315d7c]">{l.city} · {l.district}</span><h3 className="mt-1 font-sans text-xl">{l.title?.fr || l.external_id}</h3><p className="mt-2 text-sm text-[#687685]">{money(l.total_price,l.currency)} · {l.published?'Publié':'Non publié'} · rév. {l.revision}</p></div>{l.hero_image&&<img src={l.hero_image} alt="" className="h-16 w-20 object-cover"/>}</div><div className="mt-4 flex flex-wrap gap-2"><a href={'/espace/apercu?listing='+l.id} target="_blank" rel="noreferrer" className="border border-[#315d7c] bg-[#eef4f8] px-3 py-2 text-xs font-semibold uppercase text-[#315d7c]">Aperçu</a>{l.published&&l.slug_fr?<a href={'/investissement-immobilier-international/'+l.slug_fr} target="_blank" rel="noreferrer" className="border border-[#2f6d59] px-3 py-2 text-xs font-semibold uppercase text-[#2f6d59]">Page publique</a>:null}{isAdmin?<><button onClick={()=>setEditingListing(l)} className="border border-[#12304a] px-3 py-2 text-xs font-semibold uppercase text-[#12304a]">Modifier</button><button onClick={()=>togglePublish(l)} className="border border-[#12304a] px-3 py-2 text-xs font-semibold uppercase">{l.published?'Dépublier':'Publier'}</button></>:<button onClick={()=>setEditingListing(l)} className="border border-[#12304a] px-3 py-2 text-xs font-semibold uppercase">Proposer une modification</button>}</div></article>)}
          {listings.length===0&&<p className="py-6 text-sm text-[#687685]">Aucun bien attribué pour le moment.</p>}
        </div>
      </div>
      <div className="border border-[#d9e1e8] bg-white p-5">
        <h2 className="font-sans text-2xl">{isAdmin?'Soumissions récentes':'Mes soumissions'}</h2>
        <div className="mt-5 space-y-3">
          {submissions.slice(0,20).map((s:any)=><article key={s.id} className="border border-[#e7edf2] p-4"><div className="flex items-start justify-between gap-4"><div><span className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[#315d7c]">{s.submission_type} · {s.status}</span><h3 className="mt-1 font-sans text-xl">{s.payload?.title?.fr || 'Annonce sans titre'}</h3><p className="mt-2 text-sm text-[#687685]">{s.payload?.city} · {s.payload?.district}</p>{s.admin_feedback&&<p className="mt-3 border-l-2 border-[#315d7c] pl-3 text-sm text-[#526272]">{s.admin_feedback}</p>}</div></div><div className="mt-4 flex flex-wrap gap-2"><a href={'/espace/apercu?submission='+s.id} target="_blank" rel="noreferrer" className="border border-[#315d7c] bg-[#eef4f8] px-3 py-2 text-xs font-semibold uppercase text-[#315d7c]">Aperçu</a>{!isAdmin&&['draft','changes_requested'].includes(s.status)&&<button onClick={()=>setEditingSubmission(s)} className="border border-[#12304a] px-3 py-2 text-xs font-bold uppercase">Continuer</button>}</div></article>)}
          {submissions.length===0&&<p className="py-6 text-sm text-[#687685]">Aucune soumission.</p>}
        </div>
      </div>
    </div>
  </Section>;
}

function CrmPanel({isAdmin,user,profile,contacts,deals,listings,partnerUsers,reload}:any) {
  const supabase=getPortalSupabase();
  const [show,setShow]=useState(false);
  const [dealContact,setDealContact]=useState<string>('');
  const [activityContact,setActivityContact]=useState<string>('');
  const [matchContact,setMatchContact]=useState<any>(null);
  const [activities,setActivities]=useState<any[]>([]);
  const [contactBusy,setContactBusy]=useState(false);
  const [contactNotice,setContactNotice]=useState<{type:'success'|'error';text:string}|null>(null);

  async function loadActivities(){
    const {data}=await supabase.from('crm_activities').select('*').order('created_at',{ascending:false}).limit(100);
    setActivities(data||[]);
  }
  useEffect(()=>{loadActivities();},[]);

  async function createContact(e:FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if(contactBusy) return;

    const form=e.currentTarget;
    const fd=new FormData(form);
    const email=String(fd.get('email')||'').trim().toLowerCase();
    const phone=String(fd.get('phone')||'').trim();
    const normalizedPhone=phone.replace(/\D+/g,'');
    const duplicate=contacts.find((contact:any)=>{
      const sameEmail=email && String(contact.email||'').trim().toLowerCase()===email;
      const existingPhone=String(contact.phone||'').replace(/\D+/g,'');
      const samePhone=normalizedPhone.length>=7 && existingPhone===normalizedPhone;
      return sameEmail||samePhone;
    });

    if(duplicate){
      setContactNotice({
        type:'error',
        text:`Ce contact existe déjà dans le CRM : ${[duplicate.first_name,duplicate.last_name].filter(Boolean).join(' ')||duplicate.email||duplicate.phone}.`
      });
      return;
    }

    setContactBusy(true);
    setContactNotice(null);

    const row:any={
      owner_user_id:user.id,
      partner_id:isAdmin?null:profile.partner_id,
      first_name:String(fd.get('first_name')||'').trim(),
      last_name:String(fd.get('last_name')||'').trim(),
      email:email||null,
      phone:phone||null,
      source:String(fd.get('source')||'partner').trim()||'partner',
      status:'new',
      budget_min:Number(fd.get('budget_min')||0)||null,
      budget_max:Number(fd.get('budget_max')||0)||null,
      capital_available:Number(fd.get('capital_available')||0)||null,
      currency:String(fd.get('currency')||'EUR'),
      target_cities:String(fd.get('target_city')||'').trim()?[String(fd.get('target_city'))]:[],
      target_types:String(fd.get('target_type')||'').trim()?[String(fd.get('target_type'))]:[],
      investment_goal:String(fd.get('investment_goal')||'').trim()||null,
      timeframe:String(fd.get('timeframe')||'').trim()||null,
      next_action_at:String(fd.get('next_action_at')||'')?new Date(String(fd.get('next_action_at'))).toISOString():null,
      notes:String(fd.get('notes')||'').trim()||null,
      created_by:user.id,
    };

    try{
      const {data,error}=await supabase.from('crm_contacts').insert(row).select('*').single();
      if(error) throw error;
      await reload();
      form.reset();
      setShow(false);
      setContactNotice({
        type:'success',
        text:`Contact enregistré : ${[data?.first_name,data?.last_name].filter(Boolean).join(' ')||data?.email||data?.phone||'nouveau contact'}.`
      });
      window.setTimeout(()=>setContactNotice(null),5000);
    }catch(error:any){
      const raw=String(error?.message||'');
      const duplicateMessage=raw.includes('DUPLICATE_CRM_EMAIL')
        ? 'Impossible d’enregistrer : cette adresse e-mail existe déjà dans le CRM.'
        : raw.includes('DUPLICATE_CRM_PHONE')
        ? 'Impossible d’enregistrer : ce numéro de téléphone existe déjà dans le CRM.'
        : null;
      setContactNotice({type:'error',text:duplicateMessage||raw||'Enregistrement impossible.'});
    }finally{
      setContactBusy(false);
    }
  }

  async function deleteContact(contact:any){
    if(!isAdmin) return;
    const name=[contact.first_name,contact.last_name].filter(Boolean).join(' ')||contact.email||contact.phone||'ce contact';
    const confirmed=window.confirm(`Supprimer définitivement ${name} ? Les deals, activités, visites et scénarios liés seront également supprimés.`);
    if(!confirmed) return;

    const {error}=await supabase.from('crm_contacts').delete().eq('id',contact.id);
    if(error){
      setContactNotice({type:'error',text:error.message});
      return;
    }
    await reload();
    setContactNotice({type:'success',text:`${name} a été supprimé du CRM.`});
    window.setTimeout(()=>setContactNotice(null),5000);
  }

  async function assign(contactId:string,owner:string) {
    if(!owner)return;
    const {error}=await supabase.rpc('admin_assign_crm_contact',{p_contact_id:contactId,p_owner_user_id:owner});
    if(error)alert(error.message);else reload();
  }

  async function contactStatus(contactId:string,status:string){
    const {error}=await supabase.from('crm_contacts').update({status}).eq('id',contactId);
    if(error)alert(error.message);else reload();
  }

  async function createDeal(e:FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd=new FormData(e.currentTarget);
    const contact=contacts.find((c:any)=>c.id===dealContact);
    if(!contact)return;
    const row={
      contact_id:contact.id,
      owner_user_id:contact.owner_user_id,
      partner_id:contact.partner_id,
      title:String(fd.get('title')||'Acquisition immobilière'),
      stage:'lead',
      deal_value:Number(fd.get('deal_value')||0)||null,
      currency:String(fd.get('currency')||'EUR'),
      probability:Number(fd.get('probability')||10),
      expected_close_date:String(fd.get('expected_close_date')||'')||null,
      created_by:user.id,
    };
    const {error}=await supabase.from('crm_deals').insert(row);
    if(error)alert(error.message);else{setDealContact('');reload();}
  }

  async function dealStage(dealId:string,stage:string){
    const probabilityMap:any={lead:10,qualified:25,viewing:40,offer:60,reservation:75,due_diligence:82,contract:90,closed_won:100,closed_lost:0};
    const {error}=await supabase.from('crm_deals').update({stage,probability:probabilityMap[stage]??10}).eq('id',dealId);
    if(error)alert(error.message);else reload();
  }

  async function createActivity(e:FormEvent<HTMLFormElement>){
    e.preventDefault();
    const fd=new FormData(e.currentTarget);
    const contact=contacts.find((x:any)=>x.id===activityContact);
    if(!contact)return;
    const dealId=String(fd.get('deal_id')||'');
    const {error}=await supabase.from('crm_activities').insert({
      contact_id:contact.id,
      deal_id:dealId||null,
      owner_user_id:contact.owner_user_id||user.id,
      activity_type:String(fd.get('activity_type')||'task'),
      subject:String(fd.get('subject')||'').trim()||'Relance',
      body:String(fd.get('body')||'').trim()||null,
      due_at:String(fd.get('due_at')||'')?new Date(String(fd.get('due_at'))).toISOString():null,
      created_by:user.id,
    });
    if(error)alert(error.message);
    else{
      if(fd.get('due_at')) await supabase.from('crm_contacts').update({next_action_at:new Date(String(fd.get('due_at'))).toISOString()}).eq('id',contact.id);
      e.currentTarget.reset();
      setActivityContact('');
      await loadActivities();
      reload();
    }
  }

  async function completeActivity(id:string){
    const {error}=await supabase.from('crm_activities').update({completed_at:new Date().toISOString()}).eq('id',id);
    if(error)alert(error.message);else loadActivities();
  }

  const contactById=Object.fromEntries(contacts.map((x:any)=>[x.id,x]));
  const dealById=Object.fromEntries(deals.map((x:any)=>[x.id,x]));
  const openActivities=activities.filter((x:any)=>!x.completed_at);
  const overdue=openActivities.filter((x:any)=>x.due_at&&new Date(x.due_at)<new Date()).length;

  return <Section title="CRM investissement" kicker="Contacts · pipeline · relances" action={<button onClick={()=>setShow(!show)} className="inline-flex min-h-[46px] items-center gap-2 bg-[#12304a] px-5 text-xs font-semibold uppercase tracking-[0.1em] text-white"><Plus size={15}/>Nouveau contact</button>}>
    {contactNotice?<div className={`mb-5 flex items-center justify-between border px-4 py-3 text-sm shadow-sm ${contactNotice.type==='success'?'border-[#a8c8b8] bg-[#f1faf5] text-[#245943]':'border-[#e0b5b5] bg-[#fff6f6] text-[#8b4040]'}`}><span>{contactNotice.text}</span><button type="button" onClick={()=>setContactNotice(null)} className="ml-4 text-lg leading-none">×</button></div>:null}
    <div className="mb-6 grid gap-px bg-[#d9e1e8] sm:grid-cols-3">
      <div className="bg-white p-5"><span className="text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-[#687685]">Contacts visibles</span><strong className="mt-2 block text-2xl font-semibold">{contacts.length}</strong></div>
      <div className="bg-white p-5"><span className="text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-[#687685]">Relances ouvertes</span><strong className="mt-2 block text-2xl font-semibold">{openActivities.length}</strong></div>
      <div className={`p-5 ${overdue?'bg-[#fff5f5]':'bg-white'}`}><span className="text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-[#687685]">Relances en retard</span><strong className={`mt-2 block text-2xl font-semibold ${overdue?'text-[#a85656]':''}`}>{overdue}</strong></div>
    </div>

    {show&&<form onSubmit={createContact} className="mb-8 grid gap-4 border border-[#d9e1e8] bg-white p-6 md:grid-cols-4">
      <input name="first_name" placeholder="Prénom" className="border border-[#d9e1e8] px-3 py-3"/>
      <input name="last_name" placeholder="Nom" className="border border-[#d9e1e8] px-3 py-3"/>
      <input name="email" type="email" placeholder="E-mail" className="border border-[#d9e1e8] px-3 py-3"/>
      <input name="phone" placeholder="Téléphone / WhatsApp" className="border border-[#d9e1e8] px-3 py-3"/>
      <input name="source" placeholder="Source du lead" className="border border-[#d9e1e8] px-3 py-3"/>
      <input name="budget_min" placeholder="Budget min" inputMode="decimal" className="border border-[#d9e1e8] px-3 py-3"/>
      <input name="budget_max" placeholder="Budget max" inputMode="decimal" className="border border-[#d9e1e8] px-3 py-3"/>
      <input name="capital_available" placeholder="Capital disponible aujourd'hui" inputMode="decimal" className="border border-[#d9e1e8] px-3 py-3"/>
      <select name="currency" className="border border-[#d9e1e8] px-3 py-3"><option>EUR</option><option>USD</option><option>TRY</option><option>GBP</option><option>CHF</option></select>
      <select name="target_city" className="border border-[#d9e1e8] px-3 py-3"><option value="">Ville cible</option><option value="istanbul">Istanbul</option><option value="bodrum">Bodrum</option><option value="antalya">Antalya</option></select>
      <select name="target_type" className="border border-[#d9e1e8] px-3 py-3"><option value="">Type cible</option><option value="apartment">Appartement</option><option value="residence">Résidence</option><option value="villa">Villa</option><option value="penthouse">Penthouse</option><option value="commercial">Commercial</option></select>
      <select name="investment_goal" className="border border-[#d9e1e8] px-3 py-3"><option value="">Objectif</option><option value="rental">Rendement locatif</option><option value="capital_growth">Valorisation</option><option value="residence">Résidence personnelle</option><option value="family">Usage familial</option><option value="diversification">Diversification</option></select>
      <input name="timeframe" placeholder="Horizon / délai (ex. 3 mois)" className="border border-[#d9e1e8] px-3 py-3"/>
      <input name="next_action_at" type="datetime-local" className="border border-[#d9e1e8] px-3 py-3"/>
      <textarea name="notes" placeholder="Contexte, critères, contraintes, préférences…" className="border border-[#d9e1e8] px-3 py-3 md:col-span-2"/>
      <button disabled={contactBusy} className="bg-[#12304a] px-4 py-3 text-xs font-semibold uppercase text-white disabled:cursor-wait disabled:opacity-60">{contactBusy?'Enregistrement…':'Créer le contact'}</button>
    </form>}

    <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
      <div className="border border-[#d9e1e8] bg-white p-5">
        <h2 className="text-2xl font-semibold tracking-[-0.02em]">Contacts</h2>
        <div className="mt-5 space-y-3">
          {contacts.map((contact:any)=><article key={contact.id} className="border border-[#e7edf2] p-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-semibold">{[contact.first_name,contact.last_name].filter(Boolean).join(' ')||contact.company||'Contact'}</h3>
                <p className="mt-1 text-sm text-[#687685]">{contact.email||contact.phone||'—'}</p>
                <p className="mt-2 text-xs text-[#315d7c]">Capital {money(contact.capital_available,contact.currency)} · Budget max {money(contact.budget_max,contact.currency)}</p>
                {contact.next_action_at?<p className={`mt-2 text-xs ${new Date(contact.next_action_at)<new Date()?'font-semibold text-[#a85656]':'text-[#687685]'}`}>Prochaine action : {new Date(contact.next_action_at).toLocaleString('fr-FR')}</p>:null}
              </div>
              <div className="flex flex-wrap gap-2">
                <button onClick={()=>setDealContact(contact.id)} className="border border-[#12304a] px-3 py-2 text-xs font-semibold">Créer deal</button>
                <button onClick={()=>setActivityContact(contact.id)} className="border border-[#315d7c] px-3 py-2 text-xs font-semibold text-[#315d7c]">Ajouter relance</button>
                <button onClick={()=>setMatchContact(contact)} className="border border-[#4d718a] bg-[#eef4f8] px-3 py-2 text-xs font-semibold text-[#315d7c]">Matcher les biens</button>
                {isAdmin?<button onClick={()=>deleteContact(contact)} className="inline-flex items-center gap-1.5 border border-[#b96363] px-3 py-2 text-xs font-semibold text-[#9b4444]"><Trash2 size={13}/>Supprimer</button>:null}
              </div>
            </div>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              <select value={contact.status} onChange={(e)=>contactStatus(contact.id,e.target.value)} className="min-h-[38px] border border-[#d9e1e8] px-2 text-xs">
                <option value="new">Nouveau</option><option value="contacted">Contacté</option><option value="qualified">Qualifié</option><option value="nurturing">À nourrir</option><option value="inactive">Inactif</option><option value="converted">Converti</option><option value="lost">Perdu</option>
              </select>
              {isAdmin?<select value={contact.owner_user_id||''} onChange={(e)=>assign(contact.id,e.target.value)} className="min-h-[38px] border border-[#d9e1e8] px-2 text-xs"><option value="">Attribuer à un partenaire…</option>{partnerUsers.map((p:any)=><option key={p.user_id} value={p.user_id}>{p.full_name||p.email}</option>)}</select>:null}
            </div>
          </article>)}
          {contacts.length===0&&<p className="py-5 text-sm text-[#687685]">Aucun contact.</p>}
        </div>
      </div>

      <div className="border border-[#d9e1e8] bg-[#12304a] p-5 text-white">
        <h2 className="text-2xl font-semibold tracking-[-0.02em]">Pipeline</h2>
        {dealContact&&<form onSubmit={createDeal} className="mt-5 grid gap-3 border border-white/10 p-4">
          <input name="title" placeholder="Nom du deal" className="bg-white px-3 py-2 text-sm text-[#162334]"/>
          <div className="grid grid-cols-3 gap-2"><input name="deal_value" placeholder="Valeur" className="bg-white px-3 py-2 text-sm text-[#162334]"/><select name="currency" className="bg-white px-2 text-sm text-[#162334]"><option>EUR</option><option>USD</option><option>TRY</option></select><input name="probability" defaultValue="10" placeholder="%" className="bg-white px-3 py-2 text-sm text-[#162334]"/></div>
          <input name="expected_close_date" type="date" className="bg-white px-3 py-2 text-sm text-[#162334]"/>
          <button className="bg-[#d8e6ef] px-4 py-2 text-xs font-semibold uppercase text-[#12304a]">Ajouter au pipeline</button>
        </form>}
        <div className="mt-5 space-y-3">
          {deals.map((deal:any)=><article key={deal.id} className="border border-white/10 p-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div><span className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#b9d0e0]">{deal.stage}</span><h3 className="mt-1 text-xl font-semibold">{deal.title}</h3></div>
              <strong>{deal.probability}%</strong>
            </div>
            <div className="mt-3 flex justify-between text-sm text-[#b9c0ca]"><span>{money(deal.deal_value,deal.currency)}</span><span>{deal.expected_close_date||'Date à définir'}</span></div>
            <select value={deal.stage} onChange={(e)=>dealStage(deal.id,e.target.value)} className="mt-4 min-h-[38px] w-full bg-white px-2 text-xs text-[#162334]">
              <option value="lead">Lead</option><option value="qualified">Qualifié</option><option value="viewing">Visite</option><option value="offer">Offre</option><option value="reservation">Réservation</option><option value="due_diligence">Due diligence</option><option value="contract">Contrat</option><option value="closed_won">Gagné</option><option value="closed_lost">Perdu</option>
            </select>
          </article>)}
          {deals.length===0&&<p className="py-5 text-sm text-[#a9bfd0]">Aucun deal.</p>}
        </div>
      </div>
    </div>

    {matchContact ? <section className="mt-6 border border-[#d9e1e8] bg-white p-5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <span className="text-[0.66rem] font-semibold uppercase tracking-[0.1em] text-[#315d7c]">Matching client ↔ propriété</span>
          <h2 className="mt-1 text-2xl font-semibold tracking-[-0.02em]">{[matchContact.first_name,matchContact.last_name].filter(Boolean).join(' ')||matchContact.email||'Client'}</h2>
          <p className="mt-2 text-sm text-[#687685]">Classement interne basé sur ville, type de bien, budget total et capital disponible aujourd'hui. Ce score aide à prioriser ; il ne remplace pas votre analyse.</p>
        </div>
        <button onClick={()=>setMatchContact(null)} className="text-sm font-semibold text-[#687685]">Fermer</button>
      </div>
      <div className="mt-5 grid gap-3 lg:grid-cols-3">
        {listings
          .map((listing:any)=>{
            let score=0;
            const reasons:string[]=[];
            const targetCities=Array.isArray(matchContact.target_cities)?matchContact.target_cities:[];
            const targetTypes=Array.isArray(matchContact.target_types)?matchContact.target_types:[];
            if(!targetCities.length||targetCities.includes(listing.city)){score+=30;reasons.push('ville compatible');}
            if(!targetTypes.length||targetTypes.includes(listing.property_type)){score+=20;reasons.push('type compatible');}
            const budget=Number(matchContact.budget_max||0);
            const price=Number(listing.total_price||0);
            if(!budget||!price||price<=budget){score+=25;reasons.push('budget compatible');}
            const capital=Number(matchContact.capital_available||0);
            const entry=Number(listing.entry_capital||listing.total_price||0);
            if(!capital||!entry||entry<=capital){score+=25;reasons.push('capital initial compatible');}
            return {listing,score,reasons};
          })
          .filter((x:any)=>x.score>=50)
          .sort((a:any,b:any)=>b.score-a.score)
          .slice(0,6)
          .map(({listing,score,reasons}:any)=><article key={listing.id} className="border border-[#e1e7ed] bg-[#f8fafb] p-4">
            <div className="flex items-start justify-between gap-3"><div><span className="text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-[#315d7c]">{listing.city} · {listing.district}</span><h3 className="mt-1 font-semibold text-[#162334]">{listing.title?.fr||listing.external_id}</h3></div><strong className="text-lg text-[#315d7c]">{score}%</strong></div>
            <p className="mt-3 text-sm text-[#687685]">{money(listing.total_price,listing.currency)} · entrée {money(listing.entry_capital||listing.total_price,listing.currency)}</p>
            <p className="mt-2 text-xs leading-5 text-[#7b8794]">({reasons.join(' · ')})</p>
          </article>)}
      </div>
    </section> : null}

    <section className="mt-6 border border-[#d9e1e8] bg-white p-5">
      <div className="flex flex-wrap items-center justify-between gap-3"><div><h2 className="text-2xl font-semibold tracking-[-0.02em]">Relances & activités</h2><p className="mt-1 text-sm text-[#687685]">Appels, WhatsApp, e-mails, réunions, tâches et notes liés au dossier.</p></div><span className="text-xs font-semibold text-[#315d7c]">{openActivities.length} ouverte(s)</span></div>

      {activityContact&&<form onSubmit={createActivity} className="mt-5 grid gap-3 border border-[#e7edf2] bg-[#f7f9fb] p-4 md:grid-cols-4">
        <select name="activity_type" className="border border-[#cfd8e3] bg-white px-3 py-2 text-sm"><option value="task">Tâche</option><option value="call">Appel</option><option value="whatsapp">WhatsApp</option><option value="email">E-mail</option><option value="meeting">Réunion</option><option value="note">Note</option><option value="viewing">Visite</option><option value="document">Document</option></select>
        <input name="subject" required placeholder="Objet / prochaine action" className="border border-[#cfd8e3] bg-white px-3 py-2 text-sm"/>
        <input name="due_at" type="datetime-local" className="border border-[#cfd8e3] bg-white px-3 py-2 text-sm"/>
        <select name="deal_id" className="border border-[#cfd8e3] bg-white px-3 py-2 text-sm"><option value="">Sans deal</option>{deals.filter((d:any)=>d.contact_id===activityContact).map((d:any)=><option key={d.id} value={d.id}>{d.title}</option>)}</select>
        <textarea name="body" placeholder="Compte rendu / détail" className="border border-[#cfd8e3] bg-white px-3 py-2 text-sm md:col-span-3"/>
        <button className="bg-[#12304a] px-4 py-2 text-xs font-semibold uppercase text-white">Enregistrer</button>
      </form>}

      <div className="mt-5 divide-y divide-[#e7edf2]">
        {activities.map((activity:any)=>{const contact=contactById[activity.contact_id];const deal=dealById[activity.deal_id];return <div key={activity.id} className="flex flex-wrap items-start justify-between gap-4 py-4">
          <div><span className="text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-[#315d7c]">{activity.activity_type}{activity.completed_at?' · terminé':''}</span><h3 className="mt-1 font-semibold">{activity.subject}</h3><p className="mt-1 text-sm text-[#687685]">{contact?[contact.first_name,contact.last_name].filter(Boolean).join(' '):'Contact'}{deal?` · ${deal.title}`:''}</p>{activity.body?<p className="mt-2 text-sm leading-6 text-[#526272]">{activity.body}</p>:null}{activity.due_at?<p className={`mt-2 text-xs ${!activity.completed_at&&new Date(activity.due_at)<new Date()?'font-semibold text-[#a85656]':'text-[#7b8794]'}`}>Échéance {new Date(activity.due_at).toLocaleString('fr-FR')}</p>:null}</div>
          {!activity.completed_at?<button onClick={()=>completeActivity(activity.id)} className="border border-[#2f6d59] px-3 py-2 text-xs font-semibold text-[#2f6d59]">Terminer</button>:<CheckCircle2 size={18} className="text-[#2f6d59]"/>}
        </div>})}
        {!activities.length?<p className="py-6 text-sm text-[#687685]">Aucune activité enregistrée.</p>:null}
      </div>
    </section>
  </Section>;
}

function ChatPanel({isAdmin,user,threads,partnerUsers,selectedThread,setSelectedThread,messages,notifications}:any) {
  const supabase=getPortalSupabase();
  const [body,setBody]=useState('');
  async function send(e:FormEvent) {e.preventDefault(); if(!selectedThread||!body.trim())return; const {error}=await supabase.from('chat_messages').insert({thread_id:selectedThread,sender_user_id:user.id,body:body.trim()}); if(error)alert(error.message);else setBody('');}
  const profileMap=Object.fromEntries(partnerUsers.map((p:any)=>[p.user_id,p]));
  return <Section title="Chat interne" kicker="Bosphoras Partner Support">
    <div className="grid min-h-[620px] overflow-hidden border border-[#d9e1e8] bg-white lg:grid-cols-[300px_1fr]">
      <aside className="border-b border-[#d9e1e8] lg:border-b-0 lg:border-r"><div className="p-4 text-xs font-bold uppercase tracking-[0.14em] text-[#687685]">{isAdmin?'Partenaires':'Votre fil Bosphoras'}</div>{threads.map((t:any)=>{const unreadForThread=(notifications||[]).filter((n:any)=>!n.read_at&&n.notification_type==='chat_message'&&String(n.href||'').includes(t.id)).length;return <button key={t.id} onClick={()=>setSelectedThread(t.id)} className={`w-full border-t border-[#e7edf2] p-4 text-left ${selectedThread===t.id?'bg-[#edf3f7]':''}`}><div className="flex items-start justify-between gap-3"><div><strong className="block text-sm">{isAdmin?(profileMap[t.partner_user_id]?.full_name||profileMap[t.partner_user_id]?.email||'Partenaire'):t.subject}</strong><span className="mt-1 block text-xs text-[#7b8490]">{t.last_message_at?new Date(t.last_message_at).toLocaleString('fr-FR'):'Aucun message'}</span></div>{unreadForThread>0?<span className="min-w-5 rounded-full bg-[#c76055] px-1.5 text-center text-[0.65rem] font-bold leading-5 text-white">{unreadForThread}</span>:null}</div></button>})}</aside>
      <section className="flex min-h-[620px] flex-col"><div className="flex-1 space-y-3 overflow-y-auto bg-[#f3f6f8] p-5">{messages.map((m:any)=>{const mine=m.sender_user_id===user.id;return <div key={m.id} className={`max-w-[80%] p-3 text-sm leading-6 ${mine?'ml-auto bg-[#12304a] text-white':'bg-white text-[#303a46]'}`}><p>{m.body}</p><span className={`mt-1 block text-[0.62rem] ${mine?'text-[#a9bfd0]':'text-[#8a929d]'}`}>{new Date(m.created_at).toLocaleString('fr-FR')}</span></div>})}{!selectedThread&&<p className="text-sm text-[#687685]">Sélectionnez une conversation.</p>}</div><form onSubmit={send} className="flex gap-2 border-t border-[#d9e1e8] p-4"><input value={body} onChange={e=>setBody(e.target.value)} disabled={!selectedThread} placeholder="Écrire un message…" className="min-h-[46px] flex-1 border border-[#d9e1e8] px-3 text-sm"/><button disabled={!selectedThread||!body.trim()} className="inline-flex h-11 w-11 items-center justify-center bg-[#12304a] text-white disabled:opacity-40"><Send size={16}/></button></form></section>
    </div>
  </Section>;
}

function PartnersPanel({partners,partnerUsers,reload}:any) {
  const supabase=getPortalSupabase();
  const [created,setCreated]=useState<any>(null);
  const [busy,setBusy]=useState(false);
  const [terms,setTerms]=useState<any[]>([]);

  async function loadTerms(){
    const {data}=await supabase.from('partner_admin_terms').select('*').order('updated_at',{ascending:false});
    setTerms(data||[]);
  }
  useEffect(()=>{loadTerms();},[]);

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
      options:{data:{full_name:fullName,provision_code:prepared.provision_code}},
    });

    if(signupError){
      alert(signupError.message);
      setBusy(false);
      return;
    }

    setCreated({email,fullName,company,sessionReady:Boolean(signup.session)});
    e.currentTarget.reset();
    await reload();
    await loadTerms();
    setBusy(false);
  }

  async function status(id:string,next:string){
    const {error}=await supabase.rpc('admin_set_partner_status',{p_partner_id:id,p_status:next});
    if(error)alert(error.message);else reload();
  }

  async function updateCompany(event:FormEvent<HTMLFormElement>,partnerId:string){
    event.preventDefault();
    const fd=new FormData(event.currentTarget);
    const {error}=await supabase.from('partner_companies').update({
      name:String(fd.get('name')||'').trim(),
      legal_name:String(fd.get('legal_name')||'').trim()||null,
      email:String(fd.get('email')||'').trim()||null,
      phone:String(fd.get('phone')||'').trim()||null,
      website:String(fd.get('website')||'').trim()||null,
      city:String(fd.get('city')||'').trim()||null,
      address:String(fd.get('address')||'').trim()||null,
      tax_number:String(fd.get('tax_number')||'').trim()||null,
      license_number:String(fd.get('license_number')||'').trim()||null,
    }).eq('id',partnerId);
    if(error)alert(error.message);else reload();
  }

  async function updateTerms(partnerId:string,patch:any){
    const current=terms.find((x:any)=>x.partner_id===partnerId)||{};
    const payload={
      commission_type:patch.commission_type??current.commission_type??'custom',
      commission_rate:patch.commission_rate??current.commission_rate??null,
      fixed_fee:patch.fixed_fee??current.fixed_fee??null,
      default_currency:patch.default_currency??current.default_currency??'EUR',
      agreement_status:patch.agreement_status??current.agreement_status??'pending',
      kyc_status:patch.kyc_status??current.kyc_status??'pending',
      admin_notes:patch.admin_notes??current.admin_notes??null,
    };
    const {error}=await supabase.from('partner_admin_terms').upsert({partner_id:partnerId,...payload},{onConflict:'partner_id'});
    if(error)alert(error.message);else loadTerms();
  }

  const usersByPartner=partnerUsers.reduce((acc:any,u:any)=>{(acc[u.partner_id] ||= []).push(u);return acc;},{});

  return <Section title="Gestion des partenaires" kicker="Administration complète">
    <div className="mb-6 border border-[#d9e1e8] bg-[#eef4f8] p-5 text-sm leading-6 text-[#51606f]">
      <strong className="text-[#162334]">Création contrôlée par l’administrateur.</strong> Le partenaire ne dispose d’aucun écran d’inscription.
      Vous créez ici sa société, son utilisateur et son mot de passe initial. Vous pouvez ensuite contrôler son statut, son KYC, sa convention et ses conditions commerciales.
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
          ? 'Le compte est utilisable immédiatement avec le mot de passe défini.'
          : 'Selon la configuration Auth, Supabase peut encore demander une confirmation e-mail avant la première connexion.'}
      </p>
    </div>}

    <div className="mt-8 space-y-5">{partners.map((partner:any)=>{
      const term=terms.find((x:any)=>x.partner_id===partner.id)||{};
      return <article key={partner.id} className="border border-[#d9e1e8] bg-white">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#e7edf2] p-5">
          <div>
            <span className="text-[0.67rem] font-semibold uppercase tracking-[0.1em] text-[#315d7c]">{partner.status}</span>
            <h3 className="mt-1 text-xl font-semibold tracking-[-0.02em]">{partner.name}</h3>
            <p className="mt-2 text-sm text-[#687685]">{partner.email||'—'} · {usersByPartner[partner.id]?.map((u:any)=>u.full_name||u.email).join(', ')||'Compte utilisateur en attente'}</p>
          </div>
          <div className="flex gap-2">
            {partner.status!=='active'&&<button onClick={()=>status(partner.id,'active')} className="border border-[#12304a] px-3 py-2 text-xs font-semibold uppercase text-[#12304a]">Activer</button>}
            {partner.status==='active'&&<button onClick={()=>status(partner.id,'suspended')} className="border border-[#a85656] px-3 py-2 text-xs font-semibold uppercase text-[#a85656]">Suspendre</button>}
          </div>
        </div>

        <div className="grid gap-6 p-5 xl:grid-cols-[1.15fr_0.85fr]">
          <form onSubmit={(e)=>updateCompany(e,partner.id)} className="grid gap-3 md:grid-cols-2">
            <h4 className="text-sm font-semibold text-[#162334] md:col-span-2">Identité & conformité société</h4>
            <input name="name" defaultValue={partner.name||''} placeholder="Nom commercial" className="min-h-[40px] border border-[#cfd8e3] px-3 text-sm"/>
            <input name="legal_name" defaultValue={partner.legal_name||''} placeholder="Raison sociale" className="min-h-[40px] border border-[#cfd8e3] px-3 text-sm"/>
            <input name="email" defaultValue={partner.email||''} placeholder="E-mail société" className="min-h-[40px] border border-[#cfd8e3] px-3 text-sm"/>
            <input name="phone" defaultValue={partner.phone||''} placeholder="Téléphone" className="min-h-[40px] border border-[#cfd8e3] px-3 text-sm"/>
            <input name="website" defaultValue={partner.website||''} placeholder="Site web" className="min-h-[40px] border border-[#cfd8e3] px-3 text-sm"/>
            <input name="city" defaultValue={partner.city||''} placeholder="Ville" className="min-h-[40px] border border-[#cfd8e3] px-3 text-sm"/>
            <input name="tax_number" defaultValue={partner.tax_number||''} placeholder="N° fiscal" className="min-h-[40px] border border-[#cfd8e3] px-3 text-sm"/>
            <input name="license_number" defaultValue={partner.license_number||''} placeholder="N° licence / autorisation" className="min-h-[40px] border border-[#cfd8e3] px-3 text-sm"/>
            <input name="address" defaultValue={partner.address||''} placeholder="Adresse" className="min-h-[40px] border border-[#cfd8e3] px-3 text-sm md:col-span-2"/>
            <button className="min-h-[40px] border border-[#12304a] px-4 text-xs font-semibold uppercase text-[#12304a] md:col-span-2">Enregistrer la société</button>
          </form>

          <div className="border border-[#e7edf2] bg-[#f7f9fb] p-4">
            <h4 className="text-sm font-semibold text-[#162334]">Cadre partenaire</h4>
            <div className="mt-4 grid gap-3">
              <label className="grid gap-1 text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-[#687685]">KYC
                <select value={term.kyc_status||'pending'} onChange={(e)=>updateTerms(partner.id,{kyc_status:e.target.value})} className="min-h-[39px] border border-[#cfd8e3] bg-white px-2 text-sm normal-case tracking-normal"><option value="pending">En attente</option><option value="verified">Vérifié</option><option value="rejected">Refusé</option><option value="expired">Expiré</option></select>
              </label>
              <label className="grid gap-1 text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-[#687685]">Convention
                <select value={term.agreement_status||'pending'} onChange={(e)=>updateTerms(partner.id,{agreement_status:e.target.value})} className="min-h-[39px] border border-[#cfd8e3] bg-white px-2 text-sm normal-case tracking-normal"><option value="pending">En attente</option><option value="signed">Signée</option><option value="expired">Expirée</option><option value="suspended">Suspendue</option></select>
              </label>
              <label className="grid gap-1 text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-[#687685]">Commission
                <div className="grid grid-cols-[0.8fr_1fr] gap-2">
                  <select value={term.commission_type||'custom'} onChange={(e)=>updateTerms(partner.id,{commission_type:e.target.value})} className="min-h-[39px] border border-[#cfd8e3] bg-white px-2 text-sm normal-case tracking-normal"><option value="percent">%</option><option value="fixed">Fixe</option><option value="custom">Sur mesure</option></select>
                  <input defaultValue={term.commission_rate??''} onBlur={(e)=>updateTerms(partner.id,{commission_rate:e.target.value===''?null:Number(e.target.value)})} placeholder="Taux %" className="min-h-[39px] border border-[#cfd8e3] bg-white px-2 text-sm normal-case tracking-normal"/>
                </div>
              </label>
              <label className="grid gap-1 text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-[#687685]">Note admin
                <textarea defaultValue={term.admin_notes||''} onBlur={(e)=>updateTerms(partner.id,{admin_notes:e.target.value||null})} rows={3} className="border border-[#cfd8e3] bg-white px-2 py-2 text-sm normal-case tracking-normal"/>
              </label>
            </div>
          </div>
        </div>
      </article>;
    })}</div>
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
    <div className="mb-6 border border-[#d9e1e8] bg-[#f7f9fb] p-5 text-sm leading-6 text-[#526272]">Aucune version partenaire ne modifie le site public ici sans votre décision. Pour une modification d’annonce existante, l’ancienne version reste visible jusqu’à approbation.</div>
    <div className="space-y-5">{pending.map((s:any)=>{const p=s.payload||{};return <article key={s.id} className="border border-[#d9e1e8] bg-white p-6"><div className="grid gap-6 lg:grid-cols-[1fr_320px]"><div><span className="text-xs font-bold uppercase tracking-[0.14em] text-[#315d7c]">{s.submission_type} · {p.city} · {p.district}</span><h2 className="mt-2 font-sans text-3xl">{p.title?.fr||'Sans titre'}</h2><p className="mt-3 text-sm leading-6 text-[#687685]">{p.summary?.fr}</p><div className="mt-5 grid gap-3 sm:grid-cols-3"><div><span className="text-xs text-[#7b8490]">Prix</span><strong className="block">{money(p.totalPrice,p.currency)}</strong></div><div><span className="text-xs text-[#7b8490]">Capital aujourd'hui</span><strong className="block">{money(p.entryCapital,p.currency)}</strong></div><div><span className="text-xs text-[#7b8490]">Promoteur</span><strong className="block">{p.developer||'—'}</strong></div></div>{p.watchpoints?.length>0&&<div className="mt-5 border-l-2 border-[#315d7c] pl-4"><strong className="text-sm">Points de vigilance</strong><ul className="mt-2 space-y-1 text-sm text-[#687685]">{p.watchpoints.slice(0,4).map((x:any,i:number)=><li key={i}>• {x.fr||Object.values(x)[0]}</li>)}</ul></div>}</div><div>{p.images?.[0]?<img src={p.images[0]} alt="" className="aspect-[4/3] w-full object-cover"/>:<div className="flex aspect-[4/3] items-center justify-center bg-[#e8edf2] text-xs uppercase tracking-[0.15em] text-[#8a7f70]">Sans photo</div>}</div></div><div className="mt-6 flex flex-wrap gap-2 border-t border-[#e7edf2] pt-5"><button onClick={()=>review(s.id,'approved',true)} className="inline-flex items-center gap-2 bg-[#12304a] px-4 py-3 text-xs font-bold uppercase text-white"><CheckCircle2 size={15}/>Approuver & publier</button><button onClick={()=>review(s.id,'approved',false)} className="border border-[#12304a] px-4 py-3 text-xs font-bold uppercase">Approuver sans publier</button><button onClick={()=>review(s.id,'changes_requested',false)} className="border border-[#315d7c] px-4 py-3 text-xs font-bold uppercase text-[#315d7c]">Demander modifications</button><button onClick={()=>review(s.id,'rejected',false)} className="inline-flex items-center gap-2 border border-[#a85656] px-4 py-3 text-xs font-bold uppercase text-[#a85656]"><XCircle size={15}/>Refuser</button></div></article>})}{pending.length===0&&<div className="border border-[#d9e1e8] bg-white p-10 text-center"><ClipboardCheck className="mx-auto text-[#315d7c]"/><h2 className="mt-4 font-sans text-3xl">Aucune validation en attente</h2></div>}</div>
  </Section>;
}
