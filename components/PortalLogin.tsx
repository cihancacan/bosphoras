'use client';

import { FormEvent, useEffect, useState } from 'react';
import { ArrowRight, KeyRound } from 'lucide-react';
import { getPortalSupabase } from '@/lib/portalSupabase';

export function PortalLogin() {
  const supabase = getPortalSupabase();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) window.location.href = '/espace';
    });
  }, [supabase]);

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
    <main className="flex min-h-screen items-center justify-center bg-[#11151a] px-5 py-12 text-white [font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe_UI,sans-serif]">
      <section className="w-full max-w-[460px]">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-[#b28b5a]">
            <KeyRound size={19} strokeWidth={1.6} />
          </div>
          <p className="mt-6 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#b28b5a]">BOSPHORAS PARTNER DESK</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">Connexion</h1>
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
              className="min-h-[49px] rounded-lg border border-white/10 bg-[#22262c] px-4 text-sm text-white outline-none transition focus:border-[#b28b5a]"
            />
          </label>

          <label className="mt-5 grid gap-2">
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#aeb7c2]">Mot de passe</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              autoComplete="current-password"
              className="min-h-[49px] rounded-lg border border-white/10 bg-[#22262c] px-4 text-sm text-white outline-none transition focus:border-[#b28b5a]"
            />
          </label>

          <button
            type="submit"
            disabled={busy}
            className="mt-7 inline-flex min-h-[50px] w-full items-center justify-center gap-3 rounded-lg bg-[#b28b5a] px-5 text-sm font-semibold text-[#171a1f] transition hover:bg-[#c39b68] disabled:opacity-50"
          >
            {busy ? 'Connexion…' : 'Se connecter'} <ArrowRight size={16} />
          </button>

          {message ? <p className="mt-4 text-center text-sm leading-6 text-[#f0b7ae]">{message}</p> : null}
        </form>
      </section>
    </main>
  );
}
