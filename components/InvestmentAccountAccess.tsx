'use client';

import Link from 'next/link';
import { useEffect, useState, type FormEvent } from 'react';
import { ArrowRight, LockKeyhole, Mail, ShieldCheck } from 'lucide-react';
import { getPortalSupabase } from '@/lib/portalSupabase';

type Role = 'investor'|'entrepreneur';
type Lang = 'fr'|'en';
type Mode = 'signup'|'login';

export function InvestmentAccountAccess({ role, locale }: { role: Role; locale: Lang }) {
  const fr=locale==='fr';
  const [mode,setMode]=useState<Mode>('signup');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [fullName,setFullName]=useState('');
  const [consent,setConsent]=useState(false);
  const [busy,setBusy]=useState(false);
  const [message,setMessage]=useState('');
  const [checkBusy,setCheckBusy]=useState(true);
  const base=fr?'/investissement':'/en/investment';
  const dashboard=fr ? '/investissement/espace/'+(role==='investor'?'investisseur':'entrepreneur') : '/en/investment/dashboard/'+role;
  const sector=role==='investor'?(fr?'investisseurs':'investors'):'entrepreneurs';
  const back=base+'/'+sector;

  useEffect(()=>{
    let active=true;
    const supabase: any = getPortalSupabase();
    supabase.auth.getUser().then(async({data,error}:any)=>{
      if(!active)return;
      if(!error&&data.user){
        const {data:account}=await supabase.from('investment_accounts').select('account_type').eq('user_id',data.user.id).maybeSingle();
        if(active && account?.account_type===role){window.location.replace(dashboard);return;}
        const {data:professionalProfile}=await supabase.from('profiles').select('role,status').eq('user_id',data.user.id).maybeSingle();
        if(active && professionalProfile?.role==='admin' && professionalProfile.status==='active'){window.location.replace(dashboard);return;}
      }
      if(active)setCheckBusy(false);
    }).catch(()=>{if(active)setCheckBusy(false);});
    return()=>{active=false;};
  },[role,dashboard]);

  async function submit(event:FormEvent<HTMLFormElement>){
    event.preventDefault();setBusy(true);setMessage('');
    const supabase: any = getPortalSupabase();
    try{
      if(mode==='signup'){
        if(!consent)throw new Error(fr?'Veuillez accepter la politique de confidentialité.':'Please accept the privacy policy.');
        const {data,error}=await supabase.auth.signUp({
          email:email.trim().toLowerCase(), password,
          options:{data:{
            signup_source:'bosphoras_investment_v1',
            investment_account_type:role,
            full_name:fullName.trim()
          }}
        });
        if(error)throw error;
        if(data.session&&data.user){
          const {data:account}=await supabase.from('investment_accounts').select('account_type').eq('user_id',data.user.id).maybeSingle();
          if(account?.account_type===role){window.location.assign(dashboard);return;}
        }
        setMessage(fr
          ? 'Vérifiez votre boîte e-mail pour confirmer votre inscription. Revenez ensuite sur cette page et sélectionnez « Se connecter ». Aucun investissement n’est ouvert.'
          : 'Check your email to confirm your registration. Then return to this page and choose Sign in. No investment is currently open.');
        setMode('login');setPassword('');
      }else{
        const {data,error}=await supabase.auth.signInWithPassword({email:email.trim().toLowerCase(),password});
        if(error)throw error;
        if(!data.user)throw new Error(fr?'Connexion non confirmée.':'Could not confirm sign-in.');
        const {data:account,error:accountError}=await supabase.from('investment_accounts').select('account_type').eq('user_id',data.user.id).maybeSingle();
        if(!accountError && account?.account_type===role){window.location.assign(dashboard);return;}
        const {data:professionalProfile}=await supabase.from('profiles').select('role,status').eq('user_id',data.user.id).maybeSingle();
        if(professionalProfile?.role==='admin' && professionalProfile.status==='active'){window.location.assign(dashboard);return;}
        await supabase.auth.signOut();
        throw new Error(fr
          ? 'Ce compte n’a pas accès à cet espace. Utilisez le bon portail ou contactez Bosphoras.'
          : 'This account is not authorised for this workspace. Select the appropriate portal or contact Bosphoras.');
      }
    }catch(error){setMessage(error instanceof Error?error.message:(fr?'Une erreur est survenue.':'Something went wrong.'));}
    finally{setBusy(false);}
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f5f3] px-5 py-16 text-[#202629]">
      <div className="w-full max-w-[540px]">
        <Link href={back} className="text-sm text-[#193344] underline underline-offset-4">← {fr?'Retour à la présentation':'Back to the overview'}</Link>
        <div className="mt-10 border-t-2 border-[#193344] bg-white p-7 md:p-12">
          <div className="flex items-center gap-3 text-[#193344]"><LockKeyhole size={25} strokeWidth={1.3}/><span className="text-xs font-medium uppercase tracking-[.18em]">Bosphoras Investment</span></div>
          <p className="mt-7 text-sm text-[#60717a]">{role==='investor'?(fr?'Espace investisseur':'Investor workspace'):(fr?'Espace entrepreneur':'Entrepreneur workspace')}</p>
          <h1 className="mt-3 text-4xl font-normal tracking-[-.05em] text-[#193344]">{mode==='signup'?(fr?'Créer mon accès':'Create my account'):(fr?'Me connecter':'Sign in')}</h1>
          <p className="mt-4 text-xs leading-6 text-[#63737b]">{fr?'Si vous possédez déjà un compte administrateur Bosphoras, sélectionnez « Connexion » avec vos identifiants habituels pour visualiser cet espace.':'If you already have a Bosphoras administrator account, choose Sign in with your usual credentials to preview this workspace.'}</p>
          <p className="mt-5 text-sm leading-7 text-[#52616b]">{role==='investor'
            ? fr?'Suivez les projets qui vous intéressent et gérez vos préférences. Aucune souscription ni portefeuille bancaire n’est accessible ici.':'Follow ventures and manage your preferences. No subscriptions or bank-style portfolio are offered here.'
            : fr?'Enregistrez vos projets en brouillon et préparez votre demande d’étude. Aucun financement n’est garanti.':'Save private project drafts and prepare an advisory enquiry. Funding is never guaranteed.'}</p>
          <div className="mt-8 grid grid-cols-2 border border-[#cbd5d9] text-sm">
            <button type="button" onClick={()=>{setMode('signup');setMessage('');}} className={'p-3 '+(mode==='signup'?'bg-[#193344] text-white':'bg-white text-[#193344]')}>{fr?'Inscription':'Register'}</button>
            <button type="button" onClick={()=>{setMode('login');setMessage('');}} className={'p-3 '+(mode==='login'?'bg-[#193344] text-white':'bg-white text-[#193344]')}>{fr?'Connexion':'Sign in'}</button>
          </div>
          {checkBusy?<p role="status" className="mt-6 text-sm text-[#53616b]">{fr?'Vérification du compte…':'Checking account…'}</p>:
          <form onSubmit={submit} className="mt-8 space-y-5">
            {mode==='signup'&&<label className="block text-sm text-[#33464e]">{fr?'Nom complet':'Full name'} *<input name="name" type="text" autoComplete="name" required minLength={2} maxLength={130} value={fullName} onChange={e=>setFullName(e.target.value)} className="mt-2 w-full border border-[#cbd5d9] p-3.5 outline-none focus:border-[#193344]"/></label>}
            <label className="block text-sm text-[#33464e]">Email *<input name="email" type="email" required maxLength={180} autoComplete="email" value={email} onChange={e=>setEmail(e.target.value)} className="mt-2 w-full border border-[#cbd5d9] p-3.5 outline-none focus:border-[#193344]"/></label>
            <label className="block text-sm text-[#33464e]">{fr?'Mot de passe':'Password'} *<input name="password" type="password" autoComplete={mode==='signup'?'new-password':'current-password'} required minLength={10} maxLength={128} value={password} onChange={e=>setPassword(e.target.value)} className="mt-2 w-full border border-[#cbd5d9] p-3.5 outline-none focus:border-[#193344]"/><span className="mt-1 block text-xs text-[#6a7981]">{mode==='signup'?(fr?'10 caractères minimum.':'At least 10 characters.'):' '}</span></label>
            {mode==='signup'&&<label className="flex items-start gap-3 text-[13px] leading-6 text-[#52616b]"><input type="checkbox" required checked={consent} onChange={e=>setConsent(e.target.checked)} className="mt-1.5 h-4 w-4 accent-[#193344]"/><span>{fr?'J’accepte que Bosphoras traite les informations de ce compte conformément à sa':'I agree that Bosphoras processes my account information under its'} <Link href="/confidentialite" className="underline underline-offset-2">{fr?'politique de confidentialité':'privacy policy'}</Link>.</span></label>}
            <button type="submit" disabled={busy} className="flex min-h-12 w-full items-center justify-center gap-3 bg-[#193344] px-5 py-3 text-sm text-white hover:bg-[#2e5062] disabled:opacity-60">{busy?(fr?'Traitement en cours…':'Processing…'):(mode==='signup'?(fr?'Créer mon compte':'Create my account'):(fr?'Se connecter':'Sign in'))}<ArrowRight size={16}/></button>
          </form>}
          {message&&<p role="status" aria-live="polite" className="mt-6 border-l-2 border-[#193344] bg-[#f5f5f3] p-4 text-sm leading-7 text-[#193344]">{message}</p>}
          <p className="mt-8 flex items-start gap-3 border-t border-[#dce2e4] pt-6 text-xs leading-6 text-[#667781]"><ShieldCheck size={17} className="mt-1 shrink-0"/>{fr?'Compte privé distinct du portail des partenaires Bosphoras. Aucun paiement, placement ou versement financier n’est demandé ici.':'Private account separate from the Bosphoras partner portal. No investment, payment or fund transfer is requested.'}</p>
          <div className="mt-7 flex gap-2 text-xs text-[#667781]"><Mail size={15}/><a href="mailto:contact@bosphoras.com" className="underline">contact@bosphoras.com</a></div>
        </div>
      </div>
    </main>
  );
}
