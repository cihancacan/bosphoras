'use client';

import { FormEvent, useMemo, useState } from 'react';
import { BellRing, Camera, KeyRound, LockKeyhole, Save, ShieldCheck, UserRound } from 'lucide-react';
import { getPortalSupabase } from '@/lib/portalSupabase';

export function PortalAccountPanel({ user, profile, partner }: { user:any; profile:any; partner?:any }) {
  const supabase:any=getPortalSupabase();
  const [password,setPassword]=useState('');
  const [confirm,setConfirm]=useState('');
  const [busy,setBusy]=useState(false);
  const [profileBusy,setProfileBusy]=useState(false);
  const [message,setMessage]=useState('');
  const [localProfile,setLocalProfile]=useState<any>({...profile});
  const notificationStatus=useMemo(()=>typeof window!=='undefined'&&'Notification' in window?Notification.permission:'unsupported',[]);

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

  function patch(key:string,value:any){
    setLocalProfile((current:any)=>({...current,[key]:value}));
  }

  async function uploadAvatar(file?:File){
    if(!file)return;
    setProfileBusy(true);setMessage('');
    try{
      if(file.size>5*1024*1024)throw new Error('La photo doit faire moins de 5 Mo.');
      const ext=(file.name.split('.').pop()||'jpg').toLowerCase().replace(/[^a-z0-9]/g,'')||'jpg';
      const path=`${user.id}/avatar-${Date.now()}.${ext}`;
      const {error}=await supabase.storage.from('profile-avatars').upload(path,file,{cacheControl:'3600',upsert:false,contentType:file.type});
      if(error)throw error;
      const {data}=supabase.storage.from('profile-avatars').getPublicUrl(path);
      const avatarUrl=data.publicUrl;
      const {error:updateError}=await supabase.from('profiles').update({avatar_url:avatarUrl}).eq('user_id',user.id);
      if(updateError)throw updateError;
      patch('avatar_url',avatarUrl);
      setMessage('Photo de profil mise à jour.');
    }catch(error){setMessage(error instanceof Error?error.message:'Upload impossible.');}
    finally{setProfileBusy(false);}
  }

  async function saveProfile(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    setProfileBusy(true);setMessage('');
    try{
      const payload={
        full_name:String(localProfile.full_name||'').trim()||null,
        phone:String(localProfile.phone||'').trim()||null,
        whatsapp:String(localProfile.whatsapp||'').trim()||null,
        job_title:String(localProfile.job_title||'').trim()||null,
        preferred_language:String(localProfile.preferred_language||'').trim()||null,
        timezone:String(localProfile.timezone||'').trim()||null,
        bio:String(localProfile.bio||'').trim()||null,
        theme_preference:['light','dark','system'].includes(localProfile.theme_preference)?localProfile.theme_preference:'system',
      };
      const {error}=await supabase.from('profiles').update(payload).eq('user_id',user.id);
      if(error)throw error;
      localStorage.setItem('bosphoras-desk-theme',payload.theme_preference);
      window.dispatchEvent(new CustomEvent('bosphoras-theme-change',{detail:payload.theme_preference}));
      setMessage('Profil mis à jour.');
    }catch(error){setMessage(error instanceof Error?error.message:'Mise à jour impossible.');}
    finally{setProfileBusy(false);}
  }

  async function requestNotifications(){
    if(!('Notification' in window)){setMessage('Les notifications système ne sont pas disponibles dans ce navigateur.');return;}
    const result=await Notification.requestPermission();
    localStorage.setItem('bosphoras-notification-choice',result);
    setMessage(result==='granted'?'Notifications activées sur cet appareil.':'Notifications non activées.');
  }

  const input='min-h-[44px] w-full rounded-lg border border-[#cfd8e3] bg-white px-3 text-sm text-[#162334] outline-none focus:border-[#315d7c]';
  const label='grid gap-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-[#526272]';

  return (
    <div className="space-y-7 [font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]">
      <section className="grid gap-px bg-[#d9e1e8] md:grid-cols-3">
        <div className="bg-white p-6">
          <div className="flex items-center gap-4">
            <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#e7eef3] text-[#315d7c]">
              {localProfile.avatar_url?<img src={localProfile.avatar_url} alt="" className="h-full w-full object-cover"/>:<UserRound size={24}/>}
            </div>
            <div className="min-w-0">
              <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[#687685]">Compte</span>
              <strong className="mt-1 block truncate text-lg text-[#162334]">{localProfile.full_name||user?.email}</strong>
              <p className="truncate text-sm text-[#687685]">{user?.email}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6">
          <ShieldCheck size={19} className="text-[#315d7c]"/>
          <span className="mt-6 block text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[#687685]">Niveau d'accès</span>
          <strong className="mt-2 block text-lg text-[#162334]">{localProfile.role==='admin'?'Administrateur complet':'Partenaire'}</strong>
          <p className="mt-1 text-sm text-[#687685]">{localProfile.status==='active'?'Accès actif':'Accès limité'}</p>
        </div>
        <div className="bg-white p-6">
          <KeyRound size={19} className="text-[#315d7c]"/>
          <span className="mt-6 block text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[#687685]">Organisation</span>
          <strong className="mt-2 block text-lg text-[#162334]">{partner?.name||'Bosphoras'}</strong>
          <p className="mt-1 text-sm text-[#687685]">{partner?.city||'Türkiye'}</p>
        </div>
      </section>

      <section className="border border-[#d9e1e8] bg-white p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-[#162334]">Profil professionnel</h2>
            <p className="mt-1 text-xs leading-5 text-[#7b8794]">Ces informations facilitent les échanges dans le Partner Desk et l’identification dans le chat.</p>
          </div>
          <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-[#cfd8e3] px-4 py-2 text-sm font-semibold text-[#315d7c]">
            <Camera size={16}/>Changer la photo
            <input type="file" accept="image/jpeg,image/png,image/webp,image/avif" className="hidden" onChange={(e)=>uploadAvatar(e.target.files?.[0])}/>
          </label>
        </div>

        <form onSubmit={saveProfile} className="mt-6 grid gap-4 md:grid-cols-2">
          <label className={label}>Nom complet<input value={localProfile.full_name||''} onChange={(e)=>patch('full_name',e.target.value)} className={input}/></label>
          <label className={label}>Fonction<input value={localProfile.job_title||''} onChange={(e)=>patch('job_title',e.target.value)} placeholder="Investment advisor, broker…" className={input}/></label>
          <label className={label}>Téléphone<input value={localProfile.phone||''} onChange={(e)=>patch('phone',e.target.value)} className={input}/></label>
          <label className={label}>WhatsApp<input value={localProfile.whatsapp||''} onChange={(e)=>patch('whatsapp',e.target.value)} className={input}/></label>
          <label className={label}>Langue préférée<select value={localProfile.preferred_language||''} onChange={(e)=>patch('preferred_language',e.target.value)} className={input}><option value="">Automatique</option><option value="fr">Français</option><option value="en">English</option><option value="ru">Русский</option><option value="tr">Türkçe</option><option value="ar">العربية</option></select></label>
          <label className={label}>Fuseau horaire<input value={localProfile.timezone||''} onChange={(e)=>patch('timezone',e.target.value)} placeholder="Europe/Istanbul" className={input}/></label>
          <label className={label}>Apparence<select value={localProfile.theme_preference||'system'} onChange={(e)=>patch('theme_preference',e.target.value)} className={input}><option value="system">Système</option><option value="light">Clair</option><option value="dark">Sombre</option></select></label>
          <label className={label}>E-mail<input value={user?.email||''} disabled className={input+' opacity-60'}/></label>
          <label className={label+' md:col-span-2'}>Présentation / spécialité<textarea rows={3} value={localProfile.bio||''} onChange={(e)=>patch('bio',e.target.value)} placeholder="Marchés suivis, spécialités, langues…" className="w-full rounded-lg border border-[#cfd8e3] bg-white px-3 py-3 text-sm leading-6 text-[#162334]"/></label>
          <button disabled={profileBusy} className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#12304a] px-5 text-sm font-semibold text-white disabled:opacity-50 md:col-span-2"><Save size={15}/>{profileBusy?'Enregistrement…':'Enregistrer le profil'}</button>
        </form>
      </section>

      {localProfile.role!=='admin'?<section className="border border-[#d9e1e8] bg-[#f7f9fb] p-5">
        <div className="flex items-start gap-3">
          <ShieldCheck size={19} className="mt-0.5 shrink-0 text-[#315d7c]"/>
          <div>
            <h2 className="text-base font-semibold text-[#162334]">Sécurité & traçabilité</h2>
            <p className="mt-1 text-sm leading-6 text-[#687685]">Pour protéger les clients, les actifs et les échanges Bosphoras, les changements importants du compte et les actions opérationnelles sensibles peuvent être journalisés avec leur date et leur auteur. Ces journaux servent à la sécurité, à la conformité et au suivi interne.</p>
          </div>
        </div>
      </section>:null}

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="border border-[#d9e1e8] bg-white p-6">
          <div className="flex items-center gap-3">
            <BellRing size={19} className="text-[#315d7c]"/>
            <div><h2 className="text-xl font-semibold text-[#162334]">Notifications appareil</h2><p className="mt-1 text-xs leading-5 text-[#7b8794]">Messages, validations et alertes importantes.</p></div>
          </div>
          <p className="mt-5 text-sm text-[#526272]">État actuel : <strong>{notificationStatus==='granted'?'activées':notificationStatus==='denied'?'refusées':notificationStatus==='default'?'à autoriser':'non disponible'}</strong></p>
          <button type="button" onClick={requestNotifications} className="mt-4 min-h-[42px] rounded-lg border border-[#12304a] px-4 text-sm font-semibold text-[#12304a]">Gérer l’autorisation</button>
        </div>

        <div className="border border-[#d9e1e8] bg-white p-6">
          <div className="flex items-center gap-3">
            <LockKeyhole size={19} className="text-[#315d7c]"/>
            <div><h2 className="text-xl font-semibold text-[#162334]">Changer le mot de passe</h2><p className="mt-1 text-xs leading-5 text-[#7b8794]">Au moins 10 caractères.</p></div>
          </div>
          <form onSubmit={changePassword} className="mt-5 grid gap-3">
            <input type="password" autoComplete="new-password" value={password} onChange={(e)=>setPassword(e.target.value)} required minLength={10} placeholder="Nouveau mot de passe" className={input}/>
            <input type="password" autoComplete="new-password" value={confirm} onChange={(e)=>setConfirm(e.target.value)} required minLength={10} placeholder="Confirmation" className={input}/>
            <button disabled={busy} className="min-h-[43px] rounded-lg bg-[#12304a] px-5 text-sm font-semibold text-white disabled:opacity-50">{busy?'Mise à jour…':'Mettre à jour le mot de passe'}</button>
          </form>
        </div>
      </section>

      {message?<p className="border border-[#d9e1e8] bg-[#f7f9fb] px-4 py-3 text-sm text-[#526272]">{message}</p>:null}
    </div>
  );
}
