'use client';

import { FormEvent, useEffect, useState } from 'react';

const locales = ['fr', 'en', 'ru', 'ar'] as const;

function text(fd: FormData, key: string) {
  return String(fd.get(key) || '').trim();
}

function localized(fd: FormData, prefix: string) {
  return Object.fromEntries(locales.map((locale) => [locale, text(fd, `${prefix}_${locale}`)]));
}

function localizedLines(fd: FormData, prefix: string) {
  const lines = Object.fromEntries(
    locales.map((locale) => [
      locale,
      text(fd, `${prefix}_${locale}`)
        .split('\n')
        .map((item) => item.trim())
        .filter(Boolean),
    ])
  ) as Record<(typeof locales)[number], string[]>;

  const max = Math.max(...locales.map((locale) => lines[locale].length), 0);
  return Array.from({ length: max }, (_, index) =>
    Object.fromEntries(locales.map((locale) => [locale, lines[locale][index] || '']))
  );
}

function Field({ label, name, type = 'text', placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#66707b]">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="min-h-[46px] border border-[#d8c7a1] bg-white px-3 text-sm text-[#121826]"
      />
    </label>
  );
}

function TextArea({ label, name, rows = 4, placeholder }: { label: string; name: string; rows?: number; placeholder?: string }) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#66707b]">{label}</span>
      <textarea
        name={name}
        rows={rows}
        placeholder={placeholder}
        className="border border-[#d8c7a1] bg-white px-3 py-3 text-sm leading-6 text-[#121826]"
      />
    </label>
  );
}

function LocalizedBlock({ title, prefix, kind = 'input', rows = 4 }: { title: string; prefix: string; kind?: 'input' | 'textarea'; rows?: number }) {
  return (
    <fieldset className="border border-[#d8c7a1] p-5">
      <legend className="px-2 font-serif text-xl text-[#121826]">{title}</legend>
      <div className="grid gap-4 md:grid-cols-2">
        {locales.map((locale) =>
          kind === 'textarea' ? (
            <TextArea key={locale} label={locale.toUpperCase()} name={`${prefix}_${locale}`} rows={rows} />
          ) : (
            <Field key={locale} label={locale.toUpperCase()} name={`${prefix}_${locale}`} />
          )
        )}
      </div>
    </fieldset>
  );
}

export function PropertyAdminForm() {
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const saved = window.sessionStorage.getItem('bosphoras-property-admin-token');
    if (saved) setToken(saved);
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setMessage('');

    const form = event.currentTarget;
    const fd = new FormData(form);

    let paymentPlan: unknown[] = [];
    const paymentRaw = text(fd, 'payment_plan_json');
    if (paymentRaw) {
      try {
        const parsed = JSON.parse(paymentRaw);
        if (!Array.isArray(parsed)) throw new Error('Payment plan must be an array');
        paymentPlan = parsed;
      } catch (error) {
        setMessage(`Plan de paiement JSON invalide: ${error instanceof Error ? error.message : 'erreur'}`);
        setBusy(false);
        return;
      }
    }

    const payload = {
      externalId: text(fd, 'external_id'),
      published: fd.get('published') === 'on',
      featured: fd.get('featured') === 'on',
      status: text(fd, 'status'),
      collection: text(fd, 'collection'),
      transaction: text(fd, 'transaction'),
      propertyType: text(fd, 'property_type'),
      city: text(fd, 'city'),
      district: text(fd, 'district'),
      slugs: localized(fd, 'slug'),
      title: localized(fd, 'title'),
      summary: localized(fd, 'summary'),
      description: localized(fd, 'description'),
      seoTitle: localized(fd, 'seo_title'),
      seoDescription: localized(fd, 'seo_description'),
      currency: text(fd, 'currency'),
      totalPrice: text(fd, 'total_price'),
      priceOnRequest: fd.get('price_on_request') === 'on',
      entryCapital: text(fd, 'entry_capital'),
      surfaceM2: text(fd, 'surface_m2'),
      bedrooms: text(fd, 'bedrooms'),
      bathrooms: text(fd, 'bathrooms'),
      delivery: localized(fd, 'delivery'),
      developer: text(fd, 'developer'),
      partner: text(fd, 'partner'),
      paymentPlan,
      strengths: localizedLines(fd, 'strengths'),
      technicalNotes: localizedLines(fd, 'technical_notes'),
      watchpoints: localizedLines(fd, 'watchpoints'),
      highlights: localizedLines(fd, 'highlights'),
      verifiedAt: text(fd, 'verified_at') || null,
    };

    const outbound = new FormData();
    outbound.set('payload', JSON.stringify(payload));
    for (const file of fd.getAll('images')) {
      if (file instanceof File && file.size > 0) outbound.append('images', file);
    }

    window.sessionStorage.setItem('bosphoras-property-admin-token', token);

    try {
      const response = await fetch('/api/property-desk/admin', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: outbound,
      });
      const result = await response.json();
      if (!response.ok) {
        setMessage(result.details ? `${result.error}: ${result.details.join(', ')}` : result.error || 'Erreur');
      } else {
        setMessage(`Bien créé : ${result.property?.external_id || 'OK'}`);
        form.reset();
      }
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Erreur réseau');
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <section className="border border-[#d8c7a1] bg-[#fffaf3] p-6">
        <h2 className="font-serif text-2xl">Accès administrateur</h2>
        <p className="mt-2 text-sm leading-6 text-[#66707b]">Le token n’est jamais envoyé dans la fiche publique. Il reste dans la session de ce navigateur.</p>
        <label className="mt-5 grid gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#66707b]">Token admin</span>
          <input
            type="password"
            value={token}
            onChange={(event) => setToken(event.target.value)}
            required
            className="min-h-[46px] border border-[#d8c7a1] bg-white px-3 text-sm"
          />
        </label>
      </section>

      <section className="grid gap-5 border border-[#d8c7a1] bg-white p-6 md:grid-cols-3">
        <Field label="Référence interne" name="external_id" placeholder="IST-2026-001" />
        <label className="grid gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#66707b]">Ville</span>
          <select name="city" required className="min-h-[46px] border border-[#d8c7a1] bg-white px-3 text-sm">
            <option value="istanbul">Istanbul</option>
            <option value="bodrum">Bodrum</option>
            <option value="antalya">Antalya</option>
          </select>
        </label>
        <Field label="Quartier" name="district" placeholder="Nişantaşı, Yalıkavak..." />
        <label className="grid gap-2"><span className="text-xs font-bold uppercase tracking-[0.12em] text-[#66707b]">Collection</span><select name="collection" className="min-h-[46px] border border-[#d8c7a1] bg-white px-3 text-sm"><option value="selected-investment">Selected Investment</option><option value="signature">Signature Collection</option><option value="private">Private Opportunity</option></select></label>
        <label className="grid gap-2"><span className="text-xs font-bold uppercase tracking-[0.12em] text-[#66707b]">Type</span><select name="property_type" className="min-h-[46px] border border-[#d8c7a1] bg-white px-3 text-sm"><option value="apartment">Appartement</option><option value="residence">Résidence</option><option value="villa">Villa</option><option value="penthouse">Penthouse</option><option value="commercial">Commercial</option></select></label>
        <label className="grid gap-2"><span className="text-xs font-bold uppercase tracking-[0.12em] text-[#66707b]">Statut</span><select name="status" className="min-h-[46px] border border-[#d8c7a1] bg-white px-3 text-sm"><option value="available">Disponible</option><option value="reserved">Réservé</option><option value="sold">Vendu</option><option value="private">Privé</option></select></label>
        <label className="grid gap-2"><span className="text-xs font-bold uppercase tracking-[0.12em] text-[#66707b]">Transaction</span><select name="transaction" className="min-h-[46px] border border-[#d8c7a1] bg-white px-3 text-sm"><option value="sale">Vente</option><option value="rent">Location</option></select></label>
        <label className="flex items-center gap-3 pt-7 text-sm"><input type="checkbox" name="featured" /> Mis en avant</label>
        <label className="flex items-center gap-3 pt-7 text-sm"><input type="checkbox" name="published" /> Publier immédiatement</label>
      </section>

      <LocalizedBlock title="URLs SEO — slug uniquement" prefix="slug" />
      <LocalizedBlock title="Titre public" prefix="title" />
      <LocalizedBlock title="Résumé carte / hero" prefix="summary" kind="textarea" rows={3} />
      <LocalizedBlock title="Description complète" prefix="description" kind="textarea" rows={7} />
      <LocalizedBlock title="SEO title" prefix="seo_title" />
      <LocalizedBlock title="Meta description" prefix="seo_description" kind="textarea" rows={3} />

      <section className="grid gap-5 border border-[#d8c7a1] bg-white p-6 md:grid-cols-4">
        <label className="grid gap-2"><span className="text-xs font-bold uppercase tracking-[0.12em] text-[#66707b]">Devise</span><select name="currency" className="min-h-[46px] border border-[#d8c7a1] bg-white px-3 text-sm"><option>EUR</option><option>USD</option><option>TRY</option><option>GBP</option><option>CHF</option><option>AED</option></select></label>
        <Field label="Prix total" name="total_price" type="number" />
        <Field label="Capital aujourd’hui" name="entry_capital" type="number" />
        <label className="flex items-center gap-3 pt-7 text-sm"><input type="checkbox" name="price_on_request" /> Prix sur demande</label>
        <Field label="Surface m²" name="surface_m2" type="number" />
        <Field label="Chambres" name="bedrooms" type="number" />
        <Field label="Salles de bain" name="bathrooms" type="number" />
        <Field label="Date de vérification" name="verified_at" type="datetime-local" />
        <Field label="Promoteur" name="developer" />
        <Field label="Partenaire immobilier" name="partner" />
      </section>

      <LocalizedBlock title="Livraison" prefix="delivery" />

      <section className="grid gap-5 md:grid-cols-2">
        <LocalizedBlock title="Pourquoi nous l’avons sélectionné — 1 point par ligne" prefix="strengths" kind="textarea" rows={5} />
        <LocalizedBlock title="Technical Notes — 1 point par ligne" prefix="technical_notes" kind="textarea" rows={5} />
        <LocalizedBlock title="Points de vigilance — 1 point par ligne" prefix="watchpoints" kind="textarea" rows={5} />
        <LocalizedBlock title="Highlights — 1 point par ligne" prefix="highlights" kind="textarea" rows={5} />
      </section>

      <section className="border border-[#d8c7a1] bg-white p-6">
        <TextArea
          label="Plan de paiement JSON — option avancée"
          name="payment_plan_json"
          rows={8}
          placeholder={'[{"label":{"fr":"Réservation","en":"Reservation","ru":"Бронирование","ar":"الحجز"},"percentage":20,"due":{"fr":"À la signature","en":"At signing","ru":"При подписании","ar":"عند التوقيع"}}]'}
        />
      </section>

      <section className="border border-[#d8c7a1] bg-white p-6">
        <label className="grid gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#66707b]">Photos — JPG, PNG, WebP ou AVIF, 15 Mo max / image</span>
          <input name="images" type="file" accept="image/jpeg,image/png,image/webp,image/avif" multiple className="text-sm" />
        </label>
      </section>

      <button
        type="submit"
        disabled={busy || !token}
        className="min-h-[52px] bg-[#101827] px-8 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white disabled:cursor-not-allowed disabled:opacity-50"
      >
        {busy ? 'Enregistrement…' : 'Créer la fiche'}
      </button>

      {message && <p className="border border-[#d8c7a1] bg-white p-4 text-sm leading-6 text-[#121826]">{message}</p>}
    </form>
  );
}
