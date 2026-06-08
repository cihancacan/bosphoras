'use client';

import { useMemo, useState } from 'react';

type ResultItem = {
  url: string;
  ok: boolean;
  status: number;
  message: string;
};

const buttonStyle: React.CSSProperties = {
  display: 'inline-flex',
  padding: '12px 18px',
  borderRadius: 999,
  border: '1px solid rgba(212,175,55,.45)',
  background: '#d4af37',
  color: '#090909',
  fontWeight: 800,
  cursor: 'pointer',
};

const secondaryButtonStyle: React.CSSProperties = {
  ...buttonStyle,
  background: 'transparent',
  color: '#f5f0e8',
  border: '1px solid rgba(255,255,255,.2)',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 14px',
  borderRadius: 14,
  border: '1px solid rgba(255,255,255,.2)',
  background: '#111',
  color: '#fff',
  fontSize: 15,
};

function extractUrls(xml: string) {
  const matches = Array.from(xml.matchAll(/<loc>(.*?)<\/loc>/g));
  return Array.from(new Set(matches.map((match) => match[1].trim()))).filter((url) => {
    try {
      const parsed = new URL(url);
      return parsed.protocol === 'https:' && ['bosphoras.com', 'www.bosphoras.com'].includes(parsed.hostname);
    } catch {
      return false;
    }
  });
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function GoogleIndexingBulkTool({ connected }: { connected: boolean }) {
  const [urls, setUrls] = useState<string[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const [limit, setLimit] = useState(200);
  const [loadingSitemap, setLoadingSitemap] = useState(false);
  const [running, setRunning] = useState(false);
  const [results, setResults] = useState<ResultItem[]>([]);
  const [error, setError] = useState('');

  const selectedUrls = useMemo(() => {
    return urls.slice(startIndex, startIndex + limit);
  }, [urls, startIndex, limit]);

  async function loadSitemap() {
    setError('');
    setLoadingSitemap(true);
    setResults([]);

    try {
      const response = await fetch('/sitemap.xml', { cache: 'no-store' });
      const xml = await response.text();
      const extracted = extractUrls(xml);
      setUrls(extracted);

      if (!extracted.length) {
        setError('Aucune URL trouvée dans le sitemap.');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Impossible de charger le sitemap.');
    } finally {
      setLoadingSitemap(false);
    }
  }

  async function indexSelectedUrls() {
    if (!connected) {
      setError('Connecte Google avant de lancer l’indexation.');
      return;
    }

    if (!selectedUrls.length) {
      setError('Charge le sitemap et choisis un lot avant de lancer.');
      return;
    }

    setError('');
    setRunning(true);
    setResults([]);

    for (const url of selectedUrls) {
      try {
        const response = await fetch('/api/index-url', {
          method: 'POST',
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url }),
        });

        const data = await response.json().catch(() => ({}));
        const message = data?.result?.urlNotificationMetadata?.url
          ? 'Envoyée à Google'
          : data?.error || data?.result?.error?.message || 'Réponse reçue';

        setResults((previous) => [
          { url, ok: response.ok, status: response.status, message },
          ...previous,
        ].slice(0, 80));

        if (response.status === 401) {
          setError('Connexion Google expirée. Reconnecte Google puis relance le lot.');
          break;
        }

        if (response.status === 429) {
          setError('Quota Google atteint. Arrête-toi ici et reprends demain avec le prochain lot.');
          break;
        }
      } catch (err) {
        setResults((previous) => [
          { url, ok: false, status: 0, message: err instanceof Error ? err.message : 'Erreur inconnue' },
          ...previous,
        ].slice(0, 80));
      }

      await delay(250);
    }

    setRunning(false);
  }

  const okCount = results.filter((result) => result.ok).length;
  const failCount = results.filter((result) => !result.ok).length;

  return (
    <section style={{ marginTop: 32, padding: 22, borderRadius: 22, border: '1px solid rgba(255,255,255,.14)', background: 'rgba(255,255,255,.035)' }}>
      <p style={{ color: '#d4af37', letterSpacing: 1.5, textTransform: 'uppercase', fontSize: 12, margin: 0 }}>Indexation massive</p>
      <h2 style={{ fontSize: 26, margin: '10px 0 12px' }}>Indexer les pages du sitemap par lots</h2>
      <p style={{ color: '#c9c1b5', lineHeight: 1.7, marginTop: 0 }}>
        Google donne généralement 200 demandes d’indexation par jour au départ. Pour 4 200 pages, lance un lot de 200 par jour, puis reprends demain avec le numéro de départ suivant.
      </p>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 18 }}>
        <button type="button" onClick={loadSitemap} disabled={loadingSitemap || running} style={secondaryButtonStyle}>
          {loadingSitemap ? 'Chargement…' : 'Charger le sitemap'}
        </button>
        <button type="button" onClick={indexSelectedUrls} disabled={running || loadingSitemap || !urls.length} style={buttonStyle}>
          {running ? 'Indexation en cours…' : `Indexer ce lot (${selectedUrls.length})`}
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14 }}>
        <div>
          <label style={{ display: 'block', marginBottom: 8, fontWeight: 700 }}>Départ</label>
          <input type="number" min={0} value={startIndex} onChange={(event) => setStartIndex(Math.max(0, Number(event.target.value) || 0))} style={inputStyle} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: 8, fontWeight: 700 }}>Nombre d’URL</label>
          <input type="number" min={1} max={200} value={limit} onChange={(event) => setLimit(Math.min(200, Math.max(1, Number(event.target.value) || 1)))} style={inputStyle} />
        </div>
        <div style={{ padding: 14, borderRadius: 14, background: 'rgba(0,0,0,.24)' }}>
          <div style={{ color: '#9ca3af', fontSize: 13 }}>URLs trouvées</div>
          <div style={{ fontSize: 24, fontWeight: 800 }}>{urls.length}</div>
        </div>
        <div style={{ padding: 14, borderRadius: 14, background: 'rgba(0,0,0,.24)' }}>
          <div style={{ color: '#9ca3af', fontSize: 13 }}>Lot sélectionné</div>
          <div style={{ fontSize: 24, fontWeight: 800 }}>{startIndex} → {Math.max(startIndex, startIndex + selectedUrls.length - 1)}</div>
        </div>
      </div>

      <div style={{ marginTop: 18, padding: 14, borderRadius: 14, background: 'rgba(212,175,55,.10)', border: '1px solid rgba(212,175,55,.25)', color: '#f8e7a4', lineHeight: 1.6 }}>
        Exemple : aujourd’hui départ 0, demain départ 200, après-demain départ 400, puis 600, 800, etc.
      </div>

      {error && (
        <div style={{ marginTop: 18, padding: 14, borderRadius: 14, background: 'rgba(239,68,68,.12)', border: '1px solid rgba(239,68,68,.35)', color: '#fecaca' }}>
          {error}
        </div>
      )}

      {!!results.length && (
        <div style={{ marginTop: 20 }}>
          <h3 style={{ margin: '0 0 10px' }}>Résultat du lot : {okCount} OK / {failCount} erreurs</h3>
          <div style={{ maxHeight: 360, overflow: 'auto', border: '1px solid rgba(255,255,255,.12)', borderRadius: 14 }}>
            {results.map((result, index) => (
              <div key={`${result.url}-${index}`} style={{ padding: '10px 12px', borderBottom: '1px solid rgba(255,255,255,.08)', color: result.ok ? '#bbf7d0' : '#fecaca', fontSize: 13 }}>
                <strong>{result.status}</strong> — {result.message}<br />
                <span style={{ color: '#c9c1b5' }}>{result.url}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
