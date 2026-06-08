'use client';

import { useRef, useState } from 'react';

type Row = { url: string; ok: boolean; status: number; text: string };

const KEY = 'bosphoras-auto-submit-next';
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function urlsFromSitemap(xml: string) {
  return Array.from(xml.matchAll(/<loc>(.*?)<\/loc>/g))
    .map((m) => m[1].trim())
    .filter((url, index, array) => array.indexOf(url) === index)
    .filter((url) => {
      try {
        const u = new URL(url);
        return u.protocol === 'https:' && (u.hostname === 'bosphoras.com' || u.hostname === 'www.bosphoras.com');
      } catch {
        return false;
      }
    });
}

function savedNext() {
  if (typeof window === 'undefined') return 0;
  return Number(window.localStorage.getItem(KEY) || '0') || 0;
}

function saveNext(value: number) {
  if (typeof window !== 'undefined') window.localStorage.setItem(KEY, String(value));
}

export function AutoSubmitTool({ connected }: { connected: boolean }) {
  const [urls, setUrls] = useState<string[]>([]);
  const [next, setNextState] = useState(0);
  const [running, setRunning] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState<Row[]>([]);
  const [message, setMessage] = useState('');
  const stop = useRef(false);

  function setNext(value: number) {
    const clean = Math.max(0, value || 0);
    setNextState(clean);
    saveNext(clean);
  }

  async function load() {
    setLoading(true);
    setMessage('');
    setRows([]);
    try {
      const res = await fetch('/sitemap.xml', { cache: 'no-store' });
      const xml = await res.text();
      const list = urlsFromSitemap(xml);
      setUrls(list);
      setNextState(savedNext());
      setMessage(`${list.length} URLs chargées depuis le sitemap.`);
    } catch {
      setMessage('Impossible de charger le sitemap.');
    }
    setLoading(false);
  }

  async function start() {
    if (!connected) {
      setMessage('Connecte Google avant de lancer.');
      return;
    }
    if (!urls.length) {
      setMessage('Charge le sitemap avant de lancer.');
      return;
    }

    stop.current = false;
    setRunning(true);
    setRows([]);
    setMessage('Démarrage automatique...');

    for (let i = next; i < urls.length; i += 1) {
      if (stop.current) {
        setMessage(`Arrêt manuel. Reprise possible au numéro ${i}.`);
        break;
      }

      const url = urls[i];
      try {
        const res = await fetch('/api/index-url', {
          method: 'POST',
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url }),
        });
        const data = await res.json().catch(() => ({}));
        const detail = String(data?.result?.urlNotificationMetadata?.url || data?.error || data?.result?.error?.message || 'Réponse reçue');
        setRows((old) => [{ url, ok: res.ok, status: res.status, text: detail }, ...old].slice(0, 100));

        if (res.ok) {
          setNext(i + 1);
          setMessage(`Progression : ${i + 1} / ${urls.length}`);
        } else {
          setMessage(`Google a arrêté les envois au numéro ${i}. Reprends plus tard au même numéro.`);
          break;
        }
      } catch {
        setRows((old) => [{ url, ok: false, status: 0, text: 'Erreur navigateur' }, ...old].slice(0, 100));
        setMessage(`Erreur au numéro ${i}. Reprends au même numéro.`);
        break;
      }

      await wait(250);
    }

    setRunning(false);
  }

  const ok = rows.filter((r) => r.ok).length;
  const ko = rows.filter((r) => !r.ok).length;

  return (
    <section style={{ marginTop: 32, padding: 22, borderRadius: 22, border: '1px solid rgba(255,255,255,.14)', background: 'rgba(255,255,255,.035)' }}>
      <p style={{ color: '#d4af37', letterSpacing: 1.5, textTransform: 'uppercase', fontSize: 12, margin: 0 }}>Automatique</p>
      <h2 style={{ fontSize: 26, margin: '10px 0 12px' }}>Indexer automatiquement le sitemap</h2>
      <p style={{ color: '#c9c1b5', lineHeight: 1.7, marginTop: 0 }}>Charge le sitemap, puis lance. L’outil avance URL par URL et mémorise le prochain numéro.</p>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 18 }}>
        <button type="button" onClick={load} disabled={loading || running} style={{ padding: '12px 18px', borderRadius: 999, background: 'transparent', color: '#f5f0e8', border: '1px solid rgba(255,255,255,.2)', cursor: 'pointer', fontWeight: 800 }}>{loading ? 'Chargement...' : '1. Charger le sitemap'}</button>
        <button type="button" onClick={start} disabled={running || loading || !urls.length} style={{ padding: '12px 18px', borderRadius: 999, background: '#d4af37', color: '#090909', border: 0, cursor: 'pointer', fontWeight: 800 }}>{running ? 'En cours...' : '2. Lancer automatique'}</button>
        {running && <button type="button" onClick={() => { stop.current = true; }} style={{ padding: '12px 18px', borderRadius: 999, background: 'transparent', color: '#fecaca', border: '1px solid rgba(239,68,68,.35)', cursor: 'pointer', fontWeight: 800 }}>Arrêter</button>}
        <button type="button" disabled={running} onClick={() => { setNext(0); setRows([]); setMessage('Reprise remise à zéro.'); }} style={{ padding: '12px 18px', borderRadius: 999, background: 'transparent', color: '#f5f0e8', border: '1px solid rgba(255,255,255,.2)', cursor: 'pointer', fontWeight: 800 }}>Remettre à zéro</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: 14 }}>
        <div style={{ padding: 14, borderRadius: 14, background: 'rgba(0,0,0,.24)' }}><div style={{ color: '#9ca3af', fontSize: 13 }}>URLs chargées</div><div style={{ fontSize: 24, fontWeight: 800 }}>{urls.length}</div></div>
        <div style={{ padding: 14, borderRadius: 14, background: 'rgba(0,0,0,.24)' }}><div style={{ color: '#9ca3af', fontSize: 13 }}>Prochain numéro</div><div style={{ fontSize: 24, fontWeight: 800 }}>{next}</div></div>
        <div style={{ padding: 14, borderRadius: 14, background: 'rgba(0,0,0,.24)' }}><div style={{ color: '#9ca3af', fontSize: 13 }}>Restant</div><div style={{ fontSize: 24, fontWeight: 800 }}>{Math.max(0, urls.length - next)}</div></div>
        <div style={{ padding: 14, borderRadius: 14, background: 'rgba(0,0,0,.24)' }}><div style={{ color: '#9ca3af', fontSize: 13 }}>Derniers résultats</div><div style={{ fontSize: 24, fontWeight: 800 }}>{ok} OK / {ko} erreurs</div></div>
      </div>

      {message && <div style={{ marginTop: 18, padding: 14, borderRadius: 14, background: 'rgba(212,175,55,.10)', border: '1px solid rgba(212,175,55,.25)', color: '#f8e7a4', lineHeight: 1.6 }}>{message}</div>}

      {!!rows.length && <div style={{ marginTop: 20, maxHeight: 360, overflow: 'auto', border: '1px solid rgba(255,255,255,.12)', borderRadius: 14 }}>{rows.map((r, idx) => <div key={`${r.url}-${idx}`} style={{ padding: '10px 12px', borderBottom: '1px solid rgba(255,255,255,.08)', color: r.ok ? '#bbf7d0' : '#fecaca', fontSize: 13 }}><strong>{r.status}</strong> — {r.text}<br /><span style={{ color: '#c9c1b5' }}>{r.url}</span></div>)}</div>}
    </section>
  );
}
