'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import { Camera, KeyRound, LockKeyhole, ShieldCheck, UserRound } from 'lucide-react';
import { getPortalSupabase } from '@/lib/portalSupabase';

export function PortalAccountPanel({ user, profile, partner, onSaved }: { user:any; profile:any; partner?:any; onSaved?:()=>void }) {
  const supabase=getPortalSupabase();
  const [password,setPassword]=useState('');
  const [confirm,setConfirm]=useState('');
  const [busy,setBusy]=useState(false);
  const [profileBusy,setProfileBusy]=useState(false);
  const [avatarBusy,setAvatarBusy]=useState(false);
  const [message,setMessage]=useState('');
  const [avatarUrl,setAvatarUrl]=useState(profile?.avatar_url||'');

  async function saveProfile(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    const fd=new FormData(event.currentTarget);
    setProfileBusy(true); setMessage('');
    try{
      const patch={
        full_name:String(fd.get('full_name')||'').trim()||null,
        phone:String(fd.get('phone')||'').trim()||null,
        whatsapp:String(fd.get('whatsapp')||'').trim()||null,
        job_title:String(fd.get('job_title')||'').trim()||null,
        preferred_language:String(fd.get('preferred_language')||'fr'),
        timezone:String(fd.get('timezone')||'Europe/Istanbul'),
        bio:String(fd.get('bio')||'').trim()||null,
        avatar_url:avatarUrl||null,
        updated_at:new Date().toISOString(),
      };
      const {error}=await supabase.from('profiles').update(patch).eq('user_id',user.id);
      if(error)throw error;
      setMessage('Profil mis à jour.');
      onSaved?.();
    }catch(error){setMessage(error instanceof Error?error.message:'Mise à jour impossible.');}
    finally{setProfileBusy(false);}
  }

  async function uploadAvatar(event:ChangeEvent<HTMLInputElement>){
    const file=event.target.files?.[0];
    if(!file)return;
    if(!file.type.startsWith('image/')){setMessage('Choisissez une image.');return;}
    if(file.size>5*1024*1024){setMessage('La photo doit faire moins de 5 Mo.');return;}
    setAvatarBusy(true); setMessage('');
    try{
      const ext=(file.name.split('.').pop()||'jpg').toLowerCase().replace(/[^a-z0-9]/g,'');
      const path=`${user.id}/avatar.${ext||'jpg'}`;
      const {error}=await supabase.storage.from('profile-avatars').upload(path,file,{upsert:true,cacheControl:'3600',contentType:file.type});
      if(error)throw error;
      const {data}=supabase.storage.from('profile-avatars').getPublicUrl(path);
      const url=`${data.publicUrl}?v=${Date.now()}`;
      setAvatarUrl(url);
      const {error:updateError}=await supabase.from('profiles').update({avatar_url:url,updated_at:new Date().toISOString()}).eq('user_id',user.id);
      if(updateError)throw updateError;
      setMessage('Photo de profil mise à jour.');
      onSaved?.();
    }catch(error){setMessage(error instanceof Error?error.message:'Upload impossible.');}
    finally{setAvatarBusy(false); event.target.value='';}
  }

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
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 overflow-hidden rounded-full border border-[#d9e1e8] bg-[#eef4f8]">
              {avatarUrl?<img src={avatarUrl} alt="" className="h-full w-full object-cover"/>:<div className="flex h-full w-full items-center justify-center"><UserRound size={25} className="text-[#315d7c]"/></div>}
            </div>
            <label className="inline-flex cursor-pointer items-center gap-2 border border-[#cfd8e3] px-3 py-2 text-xs font-semibold text-[#315d7c]">
              <Camera size={14}/>{avatarBusy?'Upload…':'Photo'}
              <input type="file" accept="image/*" onChange={uploadAvatar} className="hidden" disabled={avatarBusy}/>
            </label>
          </div>
          <span className="mt-5 block text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[#687685]">Compte</span>
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

      <section className="border border-[#d9e1e8] bg-white p-6">
        <h2 className="text-xl font-semibold text-[#162334]">Informations professionnelles</h2>
        <p className="mt-1 text-xs leading-5 text-[#7b8794]">Ces informations servent au CRM, au chat et à l’identification interne de l’agent.</p>
        <form onSubmit={saveProfile} className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <label className="grid gap-2 text-xs font-semibold text-[#526272]">Nom complet<input name="full_name" defaultValue={profile?.full_name||''} className="min-h-[44px] border border-[#cfd8e3] px-3 text-sm"/></label>
          <label className="grid gap-2 text-xs font-semibold text-[#526272]">Fonction<input name="job_title" defaultValue={profile?.job_title||''} placeholder="Investment Advisor" className="min-h-[44px] border border-[#cfd8e3] px-3 text-sm"/></label>
          <label className="grid gap-2 text-xs font-semibold text-[#526272]">Téléphone<input name="phone" defaultValue={profile?.phone||''} className="min-h-[44px] border border-[#cfd8e3] px-3 text-sm"/></label>
          <label className="grid gap-2 text-xs font-semibold text-[#526272]">WhatsApp<input name="whatsapp" defaultValue={profile?.whatsapp||''} className="min-h-[44px] border border-[#cfd8e3] px-3 text-sm"/></label>
          <label className="grid gap-2 text-xs font-semibold text-[#526272]">Langue<select name="preferred_language" defaultValue={profile?.preferred_language||'fr'} className="min-h-[44px] border border-[#cfd8e3] bg-white px-3 text-sm"><option value="fr">Français</option><option value="en">English</option><option value="ru">Русский</option><option value="tr">Türkçe</option><option value="ar">العربية</option></select></label>
          <label className="grid gap-2 text-xs font-semibold text-[#526272]">Fuseau horaire<input name="timezone" defaultValue={profile?.timezone||'Europe/Istanbul'} className="min-h-[44px] border border-[#cfd8e3] px-3 text-sm"/></label>
          <label className="grid gap-2 text-xs font-semibold text-[#526272] md:col-span-2 xl:col-span-3">Présentation interne<textarea name="bio" defaultValue={profile?.bio||''} rows={3} placeholder="Marchés suivis, langues parlées, spécialités, zone géographique…" className="border border-[#cfd8e3] px-3 py-3 text-sm"/></label>
          <button disabled={profileBusy} className="min-h-[44px] bg-[#12304a] px-5 text-sm font-semibold text-white disabled:opacity-50 md:col-span-2 xl:col-span-3">{profileBusy?'Enregistrement…':'Enregistrer le profil'}</button>
        </form>
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
          <label className="grid gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-[#526272]">Nouveau mot de passe<input type="password" autoComplete="new-password" value={password} onChange={(e)=>setPassword(e.target.value)} required minLength={10} className="min-h-[45px] border border-[#cfd8e3] px-3 text-sm normal-case tracking-normal outline-none focus:border-[#315d7c]"/></label>
          <label className="grid gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-[#526272]">Confirmation<input type="password" autoComplete="new-password" value={confirm} onChange={(e)=>setConfirm(e.target.value)} required minLength={10} className="min-h-[45px] border border-[#cfd8e3] px-3 text-sm normal-case tracking-normal outline-none focus:border-[#315d7c]"/></label>
          <button disabled={busy} className="min-h-[45px] bg-[#12304a] px-5 text-sm font-semibold text-white disabled:opacity-50 md:col-span-2">{busy?'Mise à jour…':'Mettre à jour le mot de passe'}</button>
        </form>
        {message?<p className="mt-4 border border-[#d9e1e8] bg-[#f7f9fb] px-4 py-3 text-sm text-[#526272]">{message}</p>:null}
      </section>
    </div>
  );
}
