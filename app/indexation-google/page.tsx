import Link from 'next/link';
import { AutoSubmitTool } from './AutoSubmitTool';

export const metadata = {
  title: 'Indexation Google | Bosphoras',
  description: 'Connexion Google OAuth et indexation automatique du sitemap Bosphoras.',
};

export default function IndexationGooglePage({ searchParams }: { searchParams: { connected?: string } }) {
  const connected = searchParams?.connected === '1';

  return (
    <main style={{ minHeight: '100vh', background: '#080808', color: '#f5f0e8', padding: '48px 20px' }}>
      <section style={{ maxWidth: 920, margin: '0 auto', border: '1px solid rgba(212,175,55,.35)', borderRadius: 24, padding: 32, background: 'linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02))' }}>
        <p style={{ color: '#d4af37', letterSpacing: 2, textTransform: 'uppercase', fontSize: 13 }}>Bosphoras SEO</p>
        <h1 style={{ fontSize: 38, lineHeight: 1.1, margin: '12px 0 16px' }}>Indexation Google</h1>
        <p style={{ color: '#c9c1b5', fontSize: 17, lineHeight: 1.7 }}>
          Connecte ton compte Google propriétaire Search Console, charge le sitemap et lance l’envoi automatique.
        </p>

        <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Link href="/api/auth/google" style={{ display: 'inline-flex', padding: '14px 20px', borderRadius: 999, background: '#d4af37', color: '#090909', fontWeight: 700, textDecoration: 'none' }}>
            Connecter Google
          </Link>
          <Link href="/" style={{ display: 'inline-flex', padding: '14px 20px', borderRadius: 999, border: '1px solid rgba(255,255,255,.2)', color: '#f5f0e8', textDecoration: 'none' }}>
            Retour au site
          </Link>
        </div>

        {connected && (
          <div style={{ marginTop: 24, padding: 16, borderRadius: 16, background: 'rgba(34,197,94,.12)', border: '1px solid rgba(34,197,94,.35)', color: '#bbf7d0' }}>
            Google est connecté. Tu peux maintenant lancer l’indexation automatique du sitemap.
          </div>
        )}

        <AutoSubmitTool connected={connected} />

        <div style={{ marginTop: 26, color: '#9ca3af', fontSize: 14, lineHeight: 1.7 }}>
          <p>Note : une réponse Google acceptée ne garantit pas l’indexation immédiate. Le suivi final se fait dans Search Console.</p>
        </div>
      </section>
    </main>
  );
}
