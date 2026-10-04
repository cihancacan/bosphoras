// @ts-nocheck
'use client';

import { FormEvent, useCallback, useEffect, useMemo, useState } from 'react';
import {
  Archive, Bell, Building2, Calculator, CheckCircle2, CheckCheck, ChevronRight, CircleDollarSign, ClipboardCheck,
  Contact, KeyRound, LayoutDashboard, Link2, LogOut, MessageCircle, Moon, Plus, RefreshCw, Search, Send,
  ShieldCheck, Sun, Trash2, UserRound, Users, XCircle,
} from 'lucide-react';
import { getPortalSupabase } from '@/lib/portalSupabase';
import { InvestmentCalculator } from '@/components/InvestmentCalculator';
import { ListingSubmissionEditor } from '@/components/ListingSubmissionEditor';
import { AdminPropertyImporter } from '@/components/AdminPropertyImporter';
import { AdminListingEditor } from '@/components/AdminListingEditor';
import { ProfessionalOperationsPanel } from '@/components/ProfessionalOperationsPanel';
import { RealEstateInventoryPanel } from '@/components/RealEstateInventoryPanel';
import { TransactionsPanel } from '@/components/TransactionsPanel';
import { AgendaPanel } from '@/components/AgendaPanel';
import { FinancePanel } from '@/components/FinancePanel';
import { ExecutiveDashboardMetrics } from '@/components/ExecutiveDashboardMetrics';
import { ReportsPanel } from '@/components/ReportsPanel';
import { ProfessionalCrmPanel } from '@/components/ProfessionalCrmPanel';
import { ProfessionalListingsPanel } from '@/components/ProfessionalListingsPanel';
import { BackofficeLocaleBridge } from '@/components/BackofficeLocaleBridge';
import { PortalAccountPanel } from '@/components/PortalAccountPanel';
import { PortalNotificationBridge } from '@/components/PortalNotificationBridge';
import { PartnerAdminCrmPanel } from '@/components/PartnerAdminCrmPanel';

type Tab = 'dashboard' | 'crm' | 'projects' | 'listings' | 'transactions' | 'agenda' | 'documents' | 'finance' | 'reports' | 'import' | 'chat' | 'calculators' | 'partners' | 'approvals' | 'account';

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
  const [listingInternal, setListingInternal] = useState<any[]>([]);
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
  const [profileCards, setProfileCards] = useState<any[]>([]);
  const [deskTheme, setDeskTheme] = useState<'light'|'dark'>('light');
  const [deskLocale, setDeskLocale] = useState<'fr'|'en'|'ru'>('fr');

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
    await supabase.from('profiles').update({last_seen_at:new Date().toISOString()}).eq('user_id',authData.user.id);

    const requests: any[] = [
      supabase.from('property_listing_submissions').select('*').order('created_at', { ascending: false }),
      supabase.from('property_listings').select('*').is('deleted_at', null).order('updated_at', { ascending: false }),
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
    const {data:directory}=await supabase.from('portal_profile_cards').select('*');
    setProfileCards(directory||[]);
    const {data:internalRows}=await supabase.from('property_listing_internal').select('*');
    setListingInternal(internalRows||[]);

    const savedTheme=localStorage.getItem('bosphoras-desk-theme') || profileData.theme_preference || 'system';
    const resolved=savedTheme==='system'
      ? (window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')
      : savedTheme;
    setDeskTheme(resolved==='dark'?'dark':'light');
    const savedLocale=localStorage.getItem('bosphoras-desk-locale') || profileData.preferred_language || 'fr';
    setDeskLocale(savedLocale==='en'||savedLocale==='ru'?savedLocale:'fr');

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
    const onTheme=(event:any)=>{
      const requested=event?.detail || localStorage.getItem('bosphoras-desk-theme') || 'system';
      const resolved=requested==='system'
        ? (window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')
        : requested;
      setDeskTheme(resolved==='dark'?'dark':'light');
    };
    window.addEventListener('bosphoras-theme-change',onTheme);
    return ()=>window.removeEventListener('bosphoras-theme-change',onTheme);
  },[]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const requestedTab = params.get('tab') as Tab | null;
    const requestedThread = params.get('thread');
    if (requestedTab && ['dashboard','crm','projects','listings','transactions','agenda','documents','finance','reports','import','chat','calculators','partners','approvals','account'].includes(requestedTab)) {
      setTab(requestedTab);
    }
    if (requestedThread) setSelectedThread(requestedThread);
  }, []);

  useEffect(()=>{
    if(!profile)return;
    if(!isAdmin&&['reports','partners','approvals','import'].includes(tab))setTab('dashboard');
    if(!isAdmin&&tab==='finance'&&profile?.permissions?.can_view_finance!==true)setTab('dashboard');
    if(!isAdmin&&tab==='documents'&&profile?.permissions?.can_download_documents!==true)setTab('dashboard');
    if(!isAdmin&&tab==='transactions'&&profile?.permissions?.can_manage_deals===false)setTab('dashboard');
  },[profile,isAdmin,tab]);


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

  async function toggleDeskTheme(){
    const next=deskTheme==='dark'?'light':'dark';
    setDeskTheme(next);
    localStorage.setItem('bosphoras-desk-theme',next);
    if(user?.id) await supabase.from('profiles').update({theme_preference:next}).eq('user_id',user.id);
  }

  async function changeDeskLocale(next:'fr'|'en'|'ru'){
    setDeskLocale(next);
    localStorage.setItem('bosphoras-desk-locale',next);
    if(user?.id) await supabase.from('profiles').update({preferred_language:next}).eq('user_id',user.id);
  }

  const unread = notifications.filter(n => !n.read_at).length;
  const chatUnread = notifications.filter(n => !n.read_at && n.notification_type === 'chat_message').length;
  const listingReviewUnread = notifications.filter(n => !n.read_at && n.notification_type === 'listing_review').length;
  const pendingApprovals = submissions.filter(s => s.status === 'submitted').length;
  const activeDeals = deals.filter(d => !['closed_won','closed_lost'].includes(d.stage)).length;
  const pipeline = deals
    .filter(d => d.stage !== 'closed_lost')
    .reduce((sum, d) => sum + Number(d.deal_value || 0) * (Number(d.probability || 0) / 100), 0);

  const access = {
    can_view_contact_details: profile?.permissions?.can_view_contact_details !== false,
    can_manage_deals: profile?.permissions?.can_manage_deals !== false,
    can_view_finance: profile?.permissions?.can_view_finance === true,
    can_download_documents: profile?.permissions?.can_download_documents === true,
  };

  const nav = useMemo(() => {
    const base = [
      ['dashboard','Vue d’ensemble',LayoutDashboard],
      ['crm','CRM',Contact],
      ['projects','Projets & unités',Building2],
      ['listings','Publications',ClipboardCheck],
      ...(isAdmin||access.can_manage_deals?[['transactions','Transactions',CircleDollarSign]]:[]),
      ['agenda','Agenda & tâches',CheckCheck],
      ...(isAdmin||access.can_download_documents?[['documents','Documents',Archive]]:[]),
      ...(isAdmin||access.can_view_finance?[['finance','Finance',Calculator]]:[]),
      ['chat','Chat interne',MessageCircle],
      ['calculators','Calculateurs',Calculator],
      ['account','Mon compte',UserRound],
    ] as any[];
    if (isAdmin) base.push(['reports','Rapports',Archive],['import','Importer par lien',Link2],['partners','Partenaires',Users],['approvals','Validations',ClipboardCheck]);
    return base;
  }, [isAdmin, access.can_manage_deals, access.can_download_documents, access.can_view_finance]);

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
    <div className={`bosphoras-desk ${deskTheme==='dark'?'desk-dark':'desk-light'} min-h-screen bg-[#f3f6f8] text-[#162334] [font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe_UI,sans-serif]`}>
      <BackofficeLocaleBridge locale={deskLocale}/>
      <PortalNotificationBridge userId={user?.id}/>
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
            <select value={deskLocale} onChange={(e)=>changeDeskLocale(e.target.value as 'fr'|'en'|'ru')} aria-label="Langue du back-office" className="h-9 border border-white/15 bg-[#102638] px-2 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-[#c4d2dd] outline-none">
              <option value="fr">FR</option><option value="en">EN</option><option value="ru">RU</option>
            </select>
            <button onClick={toggleDeskTheme} className="p-2 text-[#b9d0e0] hover:text-white" aria-label={deskTheme==='dark'?'Passer en mode clair':'Passer en mode sombre'}>{deskTheme==='dark'?<Sun size={18}/>:<Moon size={18}/>}</button>
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
              reload={loadAll}
            />
          )}
          {tab==='listings' && (
            <ProfessionalListingsPanel
              locale={deskLocale}
              isAdmin={isAdmin}
              user={user}
              profile={profile}
              listings={listings}
              listingInternal={listingInternal}
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
          {tab==='crm' && <ProfessionalCrmPanel isAdmin={isAdmin} user={user} profile={profile} contacts={contacts} deals={deals} listings={listings} partnerUsers={partnerUsers} reload={loadAll} canViewContactDetails={isAdmin||access.can_view_contact_details} canManageDeals={isAdmin||access.can_manage_deals}/>}
          {tab==='projects' && <Section title="Projets & unités" kicker="Promoteurs · projets · stock"><RealEstateInventoryPanel user={user} profile={profile} isAdmin={isAdmin} partners={partners}/></Section>}
          {tab==='transactions' && (isAdmin||access.can_manage_deals) && <TransactionsPanel user={user} isAdmin={isAdmin} contacts={contacts} deals={deals} listings={listings} reloadWorkspace={loadAll}/>}
          {tab==='agenda' && <Section title="Agenda & tâches" kicker="Relances · visites · priorités"><AgendaPanel user={user} profile={profile} isAdmin={isAdmin} contacts={contacts} deals={deals} listings={listings}/></Section>}
          {tab==='documents' && (isAdmin||access.can_download_documents) && <Section title="Documents" kicker="Coffre partenaire · conformité"><ProfessionalOperationsPanel
            user={user}
            profile={profile}
            isAdmin={isAdmin}
            contacts={contacts}
            deals={deals}
            listings={listings}
            partners={partners}
            partnerUsers={partnerUsers}
            initialArea="documents"
            lockedArea
          /></Section>}
          {tab==='finance' && (isAdmin||access.can_view_finance) && <FinancePanel isAdmin={isAdmin} deals={deals}/>}
          {tab==='reports' && isAdmin && <ReportsPanel contacts={contacts} deals={deals}/>}
          {tab==='chat' && <ChatPanel isAdmin={isAdmin} user={user} threads={threads} profileCards={profileCards} partnerUsers={partnerUsers} selectedThread={selectedThread} setSelectedThread={setSelectedThread} messages={messages} notifications={notifications} reload={loadAll}/>}

          {tab==='calculators' && <Section title="Calculateurs investissement" kicker="Bosphoras Analysis"><InvestmentCalculator
            locale={deskLocale}
            userId={user?.id}
            partnerId={profile?.partner_id}
            contacts={contacts}
            deals={deals}
            listings={listings}
            savedScenarios={savedScenarios}
            onSaved={loadAll}
            allowExport={isAdmin}
          /></Section>}
          {tab==='partners' && isAdmin && <PartnerAdminCrmPanel partners={partners} partnerUsers={partnerUsers} contacts={contacts} deals={deals} reload={loadAll}/>}
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

function Dashboard({isAdmin,partners,listings,contacts,deals,pipeline,pendingApprovals,activeDeals,notifications,setTab,reload}:any) {
  const supabase=getPortalSupabase();
  async function deleteNotification(id:string){
    const {error}=await supabase.from('notifications').delete().eq('id',id);
    if(error)alert(error.message);else reload();
  }
  async function clearNotifications(){
    if(!notifications.length)return;
    if(!window.confirm('Effacer les notifications affichées ?'))return;
    const ids=notifications.map((n:any)=>n.id);
    const {error}=await supabase.from('notifications').delete().in('id',ids);
    if(error)alert(error.message);else reload();
  }
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
      <ExecutiveDashboardMetrics contacts={contacts} deals={deals}/>
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
          <div className="flex items-center justify-between gap-3"><h2 className="font-sans text-3xl">Notifications</h2>{notifications.length>0?<button onClick={clearNotifications} className="text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-[#b9d0e0] hover:text-white">Tout effacer</button>:null}</div>
          <div className="mt-5 divide-y divide-white/10">
            {notifications.slice(0,6).map((n:any)=><div key={n.id} className="flex items-start gap-3 py-4"><div className="min-w-0 flex-1"><strong className="block text-sm">{n.title}</strong><p className="mt-1 text-xs leading-5 text-[#a9bfd0]">{n.body}</p></div><button onClick={()=>deleteNotification(n.id)} className="p-1 text-[#8fa1b0] hover:text-white" aria-label="Effacer la notification"><Trash2 size={14}/></button></div>)}
            {notifications.length===0&&<p className="py-6 text-sm text-[#a9bfd0]">Aucune notification.</p>}
          </div>
        </div>
      </div>
    </Section>
  );
}

function ChatPanel({isAdmin,user,threads,profileCards,partnerUsers,selectedThread,setSelectedThread,messages,notifications,reload}:any) {
  const supabase=getPortalSupabase();
  const [body,setBody]=useState('');
  const [showArchived,setShowArchived]=useState(false);
  const profileMap=Object.fromEntries((profileCards||[]).map((p:any)=>[p.user_id,p]));
  const visibleThreads=(threads||[]).filter((t:any)=>showArchived ? true : !(isAdmin?t.archived_by_admin_at:t.archived_by_partner_at));
  const selected=threads.find((t:any)=>t.id===selectedThread);
  const selectedPartner=isAdmin?profileMap[selected?.partner_user_id]:null;

  async function markThreadRead(threadId:string){
    const now=new Date().toISOString();
    const readColumn=isAdmin?'read_by_admin_at':'read_by_partner_at';
    const unreadColumn=isAdmin?'admin_marked_unread_at':'partner_marked_unread_at';
    await Promise.all([
      supabase.from('chat_messages').update({[readColumn]:now}).eq('thread_id',threadId).is(readColumn,null),
      supabase.from('chat_threads').update({[unreadColumn]:null,updated_at:now}).eq('id',threadId),
    ]);
  }

  async function openThread(threadId:string){
    setSelectedThread(threadId);
    await markThreadRead(threadId);
    reload();
  }

  useEffect(()=>{
    if(selectedThread) markThreadRead(selectedThread);
  },[selectedThread,messages.length]);

  async function send(e:FormEvent) {
    e.preventDefault();
    if(!selectedThread||!body.trim())return;
    const {error}=await supabase.from('chat_messages').insert({thread_id:selectedThread,sender_user_id:user.id,body:body.trim()});
    if(error)alert(error.message);else setBody('');
  }

  async function archiveThread(thread:any){
    const column=isAdmin?'archived_by_admin_at':'archived_by_partner_at';
    const next=thread[column]?null:new Date().toISOString();
    const {error}=await supabase.from('chat_threads').update({[column]:next,updated_at:new Date().toISOString()}).eq('id',thread.id);
    if(error)alert(error.message);else{if(next&&selectedThread===thread.id)setSelectedThread(null);reload();}
  }

  async function markUnread(thread:any){
    const column=isAdmin?'admin_marked_unread_at':'partner_marked_unread_at';
    const {error}=await supabase.from('chat_threads').update({[column]:new Date().toISOString(),updated_at:new Date().toISOString()}).eq('id',thread.id);
    if(error)alert(error.message);else reload();
  }

  async function deleteThread(thread:any){
    if(!isAdmin)return;
    if(!window.confirm('Supprimer définitivement cette conversation et tous ses messages ?'))return;
    const {error}=await supabase.from('chat_threads').delete().eq('id',thread.id);
    if(error)alert(error.message);else{setSelectedThread(null);reload();}
  }

  return <Section title="Chat interne" kicker="Bosphoras Partner Support" action={<button onClick={()=>setShowArchived(!showArchived)} className="inline-flex min-h-[42px] items-center gap-2 rounded-lg border border-[#cfd8e3] bg-white px-4 text-xs font-semibold text-[#526272]"><Archive size={14}/>{showArchived?'Masquer les archives':'Voir les archives'}</button>}>
    <div className="grid min-h-[620px] overflow-hidden rounded-xl border border-[#d9e1e8] bg-white lg:grid-cols-[320px_1fr]">
      <aside className="border-b border-[#d9e1e8] lg:border-b-0 lg:border-r">
        <div className="p-4 text-xs font-bold uppercase tracking-[0.14em] text-[#687685]">{isAdmin?'Conversations partenaires':'Votre fil Bosphoras'}</div>
        {visibleThreads.map((t:any)=>{
          const unreadForThread=(notifications||[]).filter((n:any)=>!n.read_at&&n.notification_type==='chat_message'&&String(n.href||'').includes(t.id)).length;
          const forcedUnread=Boolean(isAdmin?t.admin_marked_unread_at:t.partner_marked_unread_at);
          const person=isAdmin?profileMap[t.partner_user_id]:null;
          return <button key={t.id} onClick={()=>openThread(t.id)} className={`w-full border-t border-[#e7edf2] p-4 text-left ${selectedThread===t.id?'bg-[#edf3f7]':''}`}>
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#e5edf2] text-xs font-bold text-[#315d7c]">{person?.avatar_url?<img src={person.avatar_url} alt="" className="h-full w-full object-cover"/>:(person?.full_name||'B').slice(0,1).toUpperCase()}</div>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2"><strong className="block truncate text-sm">{isAdmin?(person?.full_name||'Partenaire'):t.subject}</strong>{unreadForThread>0||forcedUnread?<span className="min-w-5 rounded-full bg-[#c76055] px-1.5 text-center text-[0.65rem] font-bold leading-5 text-white">{unreadForThread||'•'}</span>:null}</div>
                <span className="mt-1 block text-xs text-[#7b8490]">{t.last_message_at?new Date(t.last_message_at).toLocaleString('fr-FR'):'Aucun message'}{(isAdmin?t.archived_by_admin_at:t.archived_by_partner_at)?' · archivé':''}</span>
              </div>
            </div>
          </button>;
        })}
        {visibleThreads.length===0?<p className="p-5 text-sm text-[#687685]">{showArchived?'Aucune conversation.':'Aucune conversation active.'}</p>:null}
      </aside>

      <section className="flex min-h-[620px] flex-col">
        {selected?<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#d9e1e8] bg-white p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-[#e5edf2] text-sm font-bold text-[#315d7c]">{selectedPartner?.avatar_url?<img src={selectedPartner.avatar_url} alt="" className="h-full w-full object-cover"/>:(selectedPartner?.full_name||'B').slice(0,1).toUpperCase()}</div>
            <div><strong className="block text-sm">{isAdmin?(selectedPartner?.full_name||selected.subject):'Support Bosphoras'}</strong><span className="text-xs text-[#7b8794]">{isAdmin?(selectedPartner?.job_title||'Partenaire'):'Équipe Bosphoras'}</span></div>
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={()=>markUnread(selected)} className="rounded-lg border border-[#cfd8e3] px-3 py-2 text-xs font-semibold">Non lu</button>
            <button onClick={()=>archiveThread(selected)} className="inline-flex items-center gap-1.5 rounded-lg border border-[#cfd8e3] px-3 py-2 text-xs font-semibold"><Archive size={13}/>{(isAdmin?selected.archived_by_admin_at:selected.archived_by_partner_at)?'Désarchiver':'Archiver'}</button>
            {isAdmin?<button onClick={()=>deleteThread(selected)} className="inline-flex items-center gap-1.5 rounded-lg border border-[#b96363] px-3 py-2 text-xs font-semibold text-[#9b4444]"><Trash2 size={13}/>Supprimer</button>:null}
          </div>
        </div>:null}

        <div className="flex-1 space-y-3 overflow-y-auto bg-[#f3f6f8] p-5">
          {messages.map((m:any)=>{
            const mine=m.sender_user_id===user.id;
            const sender=profileMap[m.sender_user_id];
            const readAt=mine?(isAdmin?m.read_by_partner_at:m.read_by_admin_at):null;
            return <div key={m.id} className={`flex items-end gap-2 ${mine?'justify-end':'justify-start'}`}>
              {!mine?<div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white text-[0.65rem] font-bold text-[#315d7c]">{sender?.avatar_url?<img src={sender.avatar_url} alt="" className="h-full w-full object-cover"/>:(sender?.full_name||'B').slice(0,1).toUpperCase()}</div>:null}
              <div className={`max-w-[78%] rounded-2xl px-4 py-3 text-sm leading-6 ${mine?'rounded-br-sm bg-[#12304a] text-white':'rounded-bl-sm bg-white text-[#303a46]'}`}>
                <p>{m.body}</p>
                <span className={`mt-1 flex items-center justify-end gap-1 text-[0.62rem] ${mine?'text-[#a9bfd0]':'text-[#8a929d]'}`}>
                  {new Date(m.created_at).toLocaleString('fr-FR')}
                  {mine?<><CheckCheck size={12}/>{readAt?'Lu':'Distribué'}</>:null}
                </span>
              </div>
            </div>;
          })}
          {!selectedThread&&<p className="text-sm text-[#687685]">Sélectionnez une conversation.</p>}
        </div>

        <form onSubmit={send} className="flex gap-2 border-t border-[#d9e1e8] p-4">
          <input value={body} onChange={e=>setBody(e.target.value)} disabled={!selectedThread} placeholder="Écrire un message…" className="min-h-[46px] flex-1 rounded-lg border border-[#d9e1e8] px-3 text-sm"/>
          <button disabled={!selectedThread||!body.trim()} className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#12304a] text-white disabled:opacity-40"><Send size={16}/></button>
        </form>
      </section>
    </div>
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
    <div className="space-y-5">{pending.map((s:any)=>{const p=s.payload||{};return <article key={s.id} className="border border-[#d9e1e8] bg-white p-6"><div className="grid gap-6 lg:grid-cols-[1fr_320px]"><div><span className="text-xs font-bold uppercase tracking-[0.14em] text-[#315d7c]">{s.submission_type} · {p.city} · {p.district}</span><h2 className="mt-2 font-sans text-3xl">{p.title?.fr||'Sans titre'}</h2><p className="mt-3 text-sm leading-6 text-[#687685]">{p.summary?.fr}</p><div className="mt-5 grid gap-3 sm:grid-cols-3"><div><span className="text-xs text-[#7b8490]">Prix</span><strong className="block">{money(p.totalPrice,p.currency)}</strong></div><div><span className="text-xs text-[#7b8490]">Capital aujourd'hui</span><strong className="block">{money(p.entryCapital,p.currency)}</strong></div><div><span className="text-xs text-[#7b8490]">Promoteur</span><strong className="block">{p.developer||'—'}</strong></div></div>{p.watchpoints?.length>0&&<div className="mt-5 border-l-2 border-[#315d7c] pl-4"><strong className="text-sm">Points de vigilance</strong><ul className="mt-2 space-y-1 text-sm text-[#687685]">{p.watchpoints.slice(0,4).map((x:any,i:number)=><li key={i}>• {x.fr||Object.values(x)[0]}</li>)}</ul></div>}{p._internal&&Object.values(p._internal).some(Boolean)&&<div className="mt-5 rounded-lg border border-[#c7d7d0] bg-[#f3f7f5] p-4"><strong className="text-sm text-[#2f6d59]">Informations vendeur · internes</strong><div className="mt-3 grid gap-3 text-sm sm:grid-cols-2"><p><span className="text-[#7b8794]">Vendeur :</span> {p._internal.sellerName||p._internal.sellerCompany||'—'}</p><p><span className="text-[#7b8794]">WhatsApp / tél. :</span> {p._internal.sellerWhatsapp||p._internal.sellerPhone||'—'}</p><p><span className="text-[#7b8794]">Prix demandé :</span> {p._internal.sellerAskingPrice||'—'}</p><p><span className="text-[#7b8794]">Minimum :</span> {p._internal.sellerFloorPrice||'—'}</p></div>{p._internal.internalNotes?<p className="mt-3 border-t border-[#d8e3de] pt-3 text-sm leading-6 text-[#687685]">{p._internal.internalNotes}</p>:null}</div>}</div><div>{p.images?.[0]?<img src={p.images[0]} alt="" className="aspect-[4/3] w-full object-cover"/>:<div className="flex aspect-[4/3] items-center justify-center bg-[#e8edf2] text-xs uppercase tracking-[0.15em] text-[#8a7f70]">Sans photo</div>}</div></div><div className="mt-6 flex flex-wrap gap-2 border-t border-[#e7edf2] pt-5"><button onClick={()=>review(s.id,'approved',true)} className="inline-flex items-center gap-2 bg-[#12304a] px-4 py-3 text-xs font-bold uppercase text-white"><CheckCircle2 size={15}/>Approuver & publier</button><button onClick={()=>review(s.id,'approved',false)} className="border border-[#12304a] px-4 py-3 text-xs font-bold uppercase">Approuver sans publier</button><button onClick={()=>review(s.id,'changes_requested',false)} className="border border-[#315d7c] px-4 py-3 text-xs font-bold uppercase text-[#315d7c]">Demander modifications</button><button onClick={()=>review(s.id,'rejected',false)} className="inline-flex items-center gap-2 border border-[#a85656] px-4 py-3 text-xs font-bold uppercase text-[#a85656]"><XCircle size={15}/>Refuser</button></div></article>})}{pending.length===0&&<div className="border border-[#d9e1e8] bg-white p-10 text-center"><ClipboardCheck className="mx-auto text-[#315d7c]"/><h2 className="mt-4 font-sans text-3xl">Aucune validation en attente</h2></div>}</div>
  </Section>;
}
