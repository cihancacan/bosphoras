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

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email.trim().toLowerCase(),
        password,
      });
      if (error) throw error;
      window.location.href = '/espace';
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Connexion impossible.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b1220] px-5 py-10 text-[#122033] [font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]">
      <section className="w-full max-w-[430px] border border-[#dbe2ea] bg-white p-7 shadow-[0_24px_80px_rgba(15,23,42,0.18)] md:p-9">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center bg-[#12304a] text-white">
            <KeyRound size={19} strokeWidth={1.7} />
          </div>
          <div>
            <p className="text-[0.67rem] font-semibold uppercase tracking-[0.22em] text-[#6b7b8d]">Bosphoras</p>
            <h1 className="mt-1 text-xl font-semibold tracking-[-0.02em] text-[#122033]">BOSPHORAS PARTNER DESK</h1>
          </div>
        </div>

        <div className="mt-8 border-t border-[#e7ebf0] pt-7">
          <h2 className="text-2xl font-semibold tracking-[-0.025em] text-[#122033]">Connexion</h2>

          <form onSubmit={submit} className="mt-6 space-y-5">
            <label className="grid gap-2">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#64748b]">E-mail</span>
              <input
                type="email"
                autoComplete="username"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="min-h-[48px] border border-[#cfd8e3] bg-white px-4 text-sm outline-none transition focus:border-[#315d7c] focus:ring-2 focus:ring-[#315d7c]/10"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#64748b]">Mot de passe</span>
              <input
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                className="min-h-[48px] border border-[#cfd8e3] bg-white px-4 text-sm outline-none transition focus:border-[#315d7c] focus:ring-2 focus:ring-[#315d7c]/10"
              />
            </label>

            <button
              type="submit"
              disabled={busy}
              className="inline-flex min-h-[50px] w-full items-center justify-center gap-3 bg-[#12304a] px-6 text-sm font-semibold text-white transition hover:bg-[#1b405f] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {busy ? 'Connexion…' : 'Se connecter'}
              <ArrowRight size={16} />
            </button>
          </form>

          {message ? (
            <p className="mt-5 border border-[#efc7c7] bg-[#fff7f7] px-4 py-3 text-sm leading-6 text-[#8f3f3f]">
              {message}
            </p>
          ) : null}
        </div>
      </section>
    </main>
  );
}
