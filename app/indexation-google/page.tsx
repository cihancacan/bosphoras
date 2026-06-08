import Link from 'next/link';

export const metadata = {
  title: 'Indexation Google | Bosphoras',
  description: 'Connexion Google OAuth et test Indexing API pour Bosphoras.',
};

export default function IndexationGooglePage({ searchParams }: { searchParams: { connected?: string } }) {
  const connected = searchParams?.connected === '1';

  return (
    <main style={{ minHeight: '100vh', background: '#080808', color: '#f5f0e8', padding: '48px 20px' }}>
      <section style={{ maxWidth: 760, margin: '0 auto', border: '1px solid rgba(212,175,55,.35)', borderRadius: 24, padding: 32, background: 'linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02))' }}>
        <p style={{ color: '#d4af37', letterSpacing: 2, textTransform: 'uppercase', fontSize: 13 }}>Bosphoras SEO</p>
        <h1 style={{ fontSize: 38, lineHeight: 1.1, margin: '12px 0 16px' }}>Indexation Google</h1>
        <p style={{ color: '#c9c1b5', fontSize: 17, lineHeight: 1.7 }}>
          Connecte ton vrai compte Google propriétaire Search Console, puis teste l’envoi d’une URL Bosphoras vers l’Indexing API.
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
            Google est connecté. Tu peux maintenant tester une URL avec le formulaire ci-dessous.
          </div>
        )}

        <form action="/api/index-url" method="post" style={{ marginTop: 30 }}>
          <label htmlFor="url" style={{ display: 'block', marginBottom: 10, fontWeight: 700 }}>URL Bosphoras à envoyer</label>
          <input
            id="url"
            name="url"
            type="url"
            required
            defaultValue="https://bosphoras.com/"
            style={{ width: '100%', padding: '14px 16px', borderRadius: 14, border: '1px solid rgba(255,255,255,.2)', background: '#111', color: '#fff', fontSize: 16 }}
          />
          <p style={{ marginTop: 10, color: '#9ca3af', fontSize: 14 }}>
            Important : ce formulaire simple envoie l’URL à l’API. Pour voir la réponse technique complète, il faudra tester depuis le navigateur ou ajouter une interface plus avancée.
          </p>
        </form>

        <div style={{ marginTop: 26, color: '#9ca3af', fontSize: 14, lineHeight: 1.7 }}>
          <p>Note : l’Indexing API est officiellement limitée par Google à certains types de contenus. Pour le SEO classique, il faut aussi travailler sitemap, Search Console, maillage interne et qualité technique.</p>
        </div>
      </section>
    </main>
  );
}
