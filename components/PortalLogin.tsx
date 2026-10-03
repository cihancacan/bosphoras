'use client';

import Link from 'next/link';
import { FormEvent, useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, KeyRound } from 'lucide-react';
import { getPortalSupabase } from '@/lib/portalSupabase';

export function PortalLogin() {
  const supabase = getPortalSupabase();
  const [email, setEmail] = useState('cacancihan@gmail.com');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');
  const [locale,setLocale]=useState<'fr'|'en'|'ru'>('fr');
  const copy=locale==='en'?{title:'Sign in',password:'Password',busy:'Signing in…',submit:'Sign in',back:'Back to website'}:locale==='ru'?{title:'Вход',password:'Пароль',busy:'Вход…',submit:'Войти',back:'Вернуться на сайт'}:{title:'Connexion',password:'Mot de passe',busy:'Connexion…',submit:'Se connecter',back:'Retour au site'};

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) window.location.href = '/espace';
    });
  }, [supabase]);

  useEffect(()=>{
    const saved=localStorage.getItem('bosphoras-desk-locale');
    if(saved==='en'||saved==='ru')setLocale(saved);
  },[]);

  function changeLocale(next:'fr'|'en'|'ru'){
    setLocale(next);
    localStorage.setItem('bosphoras-desk-locale',next);
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setMessage('');
    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim().toLowerCase(),
      password,
    });
    if (error) {
      setMessage(error.message);
      setBusy(false);
      return;
    }
    window.location.href = '/espace';
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#07141f] px-5 py-12 text-white">
      <section className="w-full max-w-[460px]">
        <div className="mb-5 flex items-center justify-between">
          <Link href={locale==='en'?'/en':locale==='ru'?'/ru':'/'} className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#aeb7c2] transition hover:text-white"><ArrowLeft size={14}/>{copy.back}</Link>
          <select value={locale} onChange={(e)=>changeLocale(e.target.value as 'fr'|'en'|'ru')} className="h-9 border border-white/15 bg-[#0b1c2a] px-2 text-xs font-semibold uppercase text-[#c5a36b] outline-none"><option value="fr">FR</option><option value="en">EN</option><option value="ru">RU</option></select>
        </div>
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-[#c5a36b]">
            <KeyRound size={19} strokeWidth={1.6} />
          </div>
          <p className="mt-6 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#c5a36b]">BOSPHORAS PARTNER DESK</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">{copy.title}</h1>
        </div>

        <form onSubmit={submit} className="rounded-2xl border border-white/10 bg-white/[0.055] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.28)] backdrop-blur md:p-8">
          <label className="grid gap-2">
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#aeb7c2]">E-mail</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              autoComplete="username"
              className="min-h-[49px] rounded-lg border border-white/10 bg-[#0b1c2a] px-4 text-sm text-white outline-none transition focus:border-[#c5a36b]"
            />
          </label>

          <label className="mt-5 grid gap-2">
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#aeb7c2]">{copy.password}</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              autoComplete="current-password"
              className="min-h-[49px] rounded-lg border border-white/10 bg-[#0b1c2a] px-4 text-sm text-white outline-none transition focus:border-[#c5a36b]"
            />
          </label>

          <button
            type="submit"
            disabled={busy}
            className="mt-7 inline-flex min-h-[50px] w-full items-center justify-center gap-3 rounded-lg bg-[#c5a36b] px-5 text-sm font-semibold text-[#07141f] transition hover:bg-[#d3b47c] disabled:opacity-50"
          >
            {busy ? copy.busy : copy.submit} <ArrowRight size={16} />
          </button>

          {message ? <p className="mt-4 text-center text-sm leading-6 text-[#f0b7ae]">{message}</p> : null}
        </form>
      </section>
    </main>
  );
}
