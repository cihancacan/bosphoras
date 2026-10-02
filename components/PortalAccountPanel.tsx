'use client';

import { FormEvent, useState } from 'react';
import { KeyRound, LockKeyhole, ShieldCheck, UserRound } from 'lucide-react';
import { getPortalSupabase } from '@/lib/portalSupabase';

export function PortalAccountPanel({ user, profile, partner }: { user:any; profile:any; partner?:any }) {
  const supabase=getPortalSupabase();
  const [password,setPassword]=useState('');
  const [confirm,setConfirm]=useState('');
  const [busy,setBusy]=useState(false);
  const [message,setMessage]=useState('');

  async function changePassword(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    setMessage('');
    if(password.length<10){setMessage('Utilisez au moins 10 caractères.');return;}
    if(password!==confirm){setMessage('Les deux mots de passe ne correspondent pas.');return;}
    setBusy(true);
    try{
      const {error}=await supabase.auth.updateUser({password});
      if(error)throw error;
      setPassword('');setConfirm('');
      setMessage('Mot de passe mis à jour.');
    }catch(error){setMessage(error instanceof Error?error.message:'Modification impossible.');}
    finally{setBusy(false);}
  }

  return (
    <div className="space-y-7 [font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]">
      <section className="grid gap-px bg-[#d9e1e8] md:grid-cols-3">
        <div className="bg-white p-6">
          <UserRound size={19} className="text-[#315d7c]"/>
          <span className="mt-6 block text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[#687685]">Compte</span>
          <strong className="mt-2 block text-lg text-[#162334]">{profile?.full_name||user?.email}</strong>
          <p className="mt-1 text-sm text-[#687685]">{user?.email}</p>
        </div>
        <div className="bg-white p-6">
          <ShieldCheck size={19} className="text-[#315d7c]"/>
          <span className="mt-6 block text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[#687685]">Niveau d'accès</span>
          <strong className="mt-2 block text-lg text-[#162334]">{profile?.role==='admin'?'Administrateur complet':'Partenaire'}</strong>
          <p className="mt-1 text-sm text-[#687685]">{profile?.status==='active'?'Accès actif':'Accès limité'}</p>
        </div>
        <div className="bg-white p-6">
          <KeyRound size={19} className="text-[#315d7c]"/>
          <span className="mt-6 block text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[#687685]">Organisation</span>
          <strong className="mt-2 block text-lg text-[#162334]">{partner?.name||'Bosphoras'}</strong>
          <p className="mt-1 text-sm text-[#687685]">{partner?.city||'Türkiye'}</p>
        </div>
      </section>

      <section className="max-w-2xl border border-[#d9e1e8] bg-white p-6">
        <div className="flex items-center gap-3">
          <LockKeyhole size={19} className="text-[#315d7c]"/>
          <div>
            <h2 className="text-xl font-semibold text-[#162334]">Changer le mot de passe</h2>
            <p className="mt-1 text-xs leading-5 text-[#7b8794]">Le nouveau mot de passe remplace immédiatement l'ancien pour la prochaine connexion.</p>
          </div>
        </div>
        <form onSubmit={changePassword} className="mt-6 grid gap-4 md:grid-cols-2">
          <label className="grid gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-[#526272]">
            Nouveau mot de passe
            <input type="password" autoComplete="new-password" value={password} onChange={(e)=>setPassword(e.target.value)} required minLength={10} className="min-h-[45px] border border-[#cfd8e3] px-3 text-sm normal-case tracking-normal outline-none focus:border-[#315d7c]"/>
          </label>
          <label className="grid gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-[#526272]">
            Confirmation
            <input type="password" autoComplete="new-password" value={confirm} onChange={(e)=>setConfirm(e.target.value)} required minLength={10} className="min-h-[45px] border border-[#cfd8e3] px-3 text-sm normal-case tracking-normal outline-none focus:border-[#315d7c]"/>
          </label>
          <button disabled={busy} className="min-h-[45px] bg-[#12304a] px-5 text-sm font-semibold text-white disabled:opacity-50 md:col-span-2">{busy?'Mise à jour…':'Mettre à jour le mot de passe'}</button>
        </form>
        {message?<p className="mt-4 border border-[#d9e1e8] bg-[#f7f9fb] px-4 py-3 text-sm text-[#526272]">{message}</p>:null}
      </section>
    </div>
  );
}
