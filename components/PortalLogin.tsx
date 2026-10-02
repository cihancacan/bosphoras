'use client';

import { FormEvent, useEffect, useState } from 'react';
import { ArrowRight, Building2, KeyRound, LockKeyhole, ShieldCheck } from 'lucide-react';
import { getPortalSupabase } from '@/lib/portalSupabase';

type Mode = 'login' | 'partner-signup' | 'admin-activate';

const ADMIN_EMAIL = 'cacancihan@gmail.com';

export function PortalLogin() {
  const supabase = getPortalSupabase();
  const [mode, setMode] = useState<Mode>('login');
  const [email, setEmail] = useState(ADMIN_EMAIL);
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [inviteCode, setInviteCode] = useState('');
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) window.location.href = '/espace';
    });
  }, [supabase]);

  async function submit(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    setMessage('');

    try {
      if (mode === 'login') {
        const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
        if (error) throw error;
        window.location.href = '/espace';
        return;
      }

      if (mode === 'admin-activate') {
        if (email.trim().toLowerCase() !== ADMIN_EMAIL) {
          throw new Error('Cette activation est réservée au compte administrateur principal.');
        }
        const { data, error } = await supabase.auth.signUp({
          email: ADMIN_EMAIL,
          password,
          options: { data: { full_name: fullName || 'Cihan Cacan' } },
        });
        if (error) throw error;
        setMessage(
          data.session
            ? 'Accès administrateur activé. Redirection…'
            : 'Compte administrateur créé. Vérifiez votre e-mail si Supabase demande une confirmation.'
        );
        if (data.session) window.location.href = '/espace';
        return;
      }

      if (!inviteCode.trim()) throw new Error("Le code d'invitation est obligatoire.");

      const { data, error } = await supabase.auth.signUp({
        email: email.trim().toLowerCase(),
        password,
        options: {
          data: {
            full_name: fullName.trim(),
            invite_code: inviteCode.trim(),
          },
        },
      });
      if (error) throw error;
      setMessage(
        data.session
          ? 'Compte partenaire activé. Redirection…'
          : 'Compte créé. Vérifiez votre e-mail si une confirmation est demandée.'
      );
      if (data.session) window.location.href = '/espace';
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Connexion impossible.');
    } finally {
      setBusy(false);
    }
  }

  const isSignup = mode !== 'login';

  return (
    <main className="min-h-screen bg-[#0f1725] px-5 py-16 text-white md:px-8">
      <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-[1180px] items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <section>
          <div className="inline-flex h-12 w-12 items-center justify-center border border-[#c9a45d]/50 text-[#d9b972]">
            <KeyRound size={22} strokeWidth={1.5} />
          </div>
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.32em] text-[#d9b972]">Bosphoras Partner Desk</p>
          <h1 className="mt-5 max-w-2xl font-serif text-5xl leading-[1.02] tracking-[-0.045em] md:text-7xl">
            Un espace professionnel, pas un simple extranet.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#c7ccd4]">
            Biens, soumissions, validations, CRM, discussions internes, suivi d'investissement et outils de calcul sont réunis dans un seul espace sécurisé.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              [ShieldCheck, 'Validation admin', 'Aucune annonce partenaire ne passe en ligne sans validation.'],
              [Building2, 'Property Desk', 'Suivi des projets, versions, prix et plans de paiement.'],
              [LockKeyhole, 'CRM privé', 'Chaque partenaire ne voit que les contacts qui lui sont attribués.'],
            ].map(([Icon, title, text]) => {
              const C = Icon as typeof ShieldCheck;
              return (
                <article key={title as string} className="border border-white/10 bg-white/[0.03] p-5">
                  <C size={20} className="text-[#d9b972]" strokeWidth={1.5} />
                  <h2 className="mt-5 font-serif text-xl">{title as string}</h2>
                  <p className="mt-2 text-sm leading-6 text-[#9fa7b3]">{text as string}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="border border-white/10 bg-[#f8f2e8] p-6 text-[#121826] shadow-2xl md:p-9">
          <div className="grid grid-cols-3 gap-px bg-[#d8c7a1]">
            {[
              ['login', 'Connexion'],
              ['partner-signup', 'Partenaire'],
              ['admin-activate', 'Activation admin'],
            ].map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => {
                  setMode(value as Mode);
                  setMessage('');
                  if (value === 'admin-activate') setEmail(ADMIN_EMAIL);
                  if (value === 'partner-signup') setEmail('');
                }}
                className={`min-h-[46px] px-3 text-[0.68rem] font-bold uppercase tracking-[0.1em] ${
                  mode === value ? 'bg-[#101827] text-white' : 'bg-white text-[#5d6672]'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8a6728]">
              {mode === 'login' ? 'Accès sécurisé' : mode === 'partner-signup' ? 'Invitation partenaire' : 'Première activation'}
            </p>
            <h2 className="mt-3 font-serif text-4xl tracking-[-0.035em]">
              {mode === 'login'
                ? 'Accéder à votre espace'
                : mode === 'partner-signup'
                ? 'Créer votre compte partenaire'
                : 'Activer le compte administrateur'}
            </h2>
          </div>

          <form onSubmit={submit} className="mt-8 space-y-5">
            {isSignup && (
              <label className="grid gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#66707b]">Nom complet</span>
                <input
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                  required
                  className="min-h-[48px] border border-[#d8c7a1] bg-white px-4 text-sm outline-none focus:border-[#8a6728]"
                />
              </label>
            )}

            <label className="grid gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#66707b]">E-mail</span>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                readOnly={mode === 'admin-activate'}
                className="min-h-[48px] border border-[#d8c7a1] bg-white px-4 text-sm outline-none focus:border-[#8a6728] read-only:bg-[#eee7dc]"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#66707b]">Mot de passe</span>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                minLength={8}
                autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
                className="min-h-[48px] border border-[#d8c7a1] bg-white px-4 text-sm outline-none focus:border-[#8a6728]"
              />
            </label>

            {mode === 'partner-signup' && (
              <label className="grid gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#66707b]">Code d'invitation Bosphoras</span>
                <input
                  value={inviteCode}
                  onChange={(event) => setInviteCode(event.target.value)}
                  required
                  className="min-h-[48px] border border-[#d8c7a1] bg-white px-4 text-sm outline-none focus:border-[#8a6728]"
                />
              </label>
            )}

            <button
              type="submit"
              disabled={busy}
              className="inline-flex min-h-[52px] w-full items-center justify-center gap-3 bg-[#101827] px-6 text-sm font-bold uppercase tracking-[0.13em] text-white disabled:opacity-50"
            >
              {busy ? 'Traitement…' : mode === 'login' ? 'Se connecter' : 'Créer l’accès'}
              <ArrowRight size={16} />
            </button>
          </form>

          {message && (
            <p className="mt-5 border border-[#d8c7a1] bg-white px-4 py-3 text-sm leading-6 text-[#4f5965]">{message}</p>
          )}

          <p className="mt-7 text-xs leading-5 text-[#7b8490]">
            Les comptes partenaires sont exclusivement créés à partir d'une invitation émise par l'administrateur Bosphoras.
            Un partenaire suspendu peut encore s'authentifier mais n'a plus accès aux données opérationnelles.
          </p>
        </section>
      </div>
    </main>
  );
}
