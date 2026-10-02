'use client';

import { FormEvent, useMemo, useState } from 'react';
import { ArrowRight, ImagePlus, Save, Send, X } from 'lucide-react';
import { getPortalSupabase } from '@/lib/portalSupabase';

const locales = ['fr', 'en', 'ru', 'ar'] as const;

function slugify(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\u0400-\u04ff\u0600-\u06ff]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 110);
}

function localText(seed = '') {
  return { fr: seed, en: '', ru: '', ar: '' };
}

interface Props {
  userId: string;
  listingId?: string | null;
  initialSubmission?: any;
  onSaved?: () => void;
  onClose?: () => void;
}

export function ListingSubmissionEditor({ userId, listingId = null, initialSubmission, onSaved, onClose }: Props) {
  const supabase = getPortalSupabase();
  const initialPayload = initialSubmission?.payload || {};
  const [submissionId, setSubmissionId] = useState<string | null>(initialSubmission?.id || null);
  const [status, setStatus] = useState(initialSubmission?.status || 'draft');
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');

  const [city, setCity] = useState(initialPayload.city || 'istanbul');
  const [district, setDistrict] = useState(initialPayload.district || '');
  const [collection, setCollection] = useState(initialPayload.collection || 'selected-investment');
  const [propertyType, setPropertyType] = useState(initialPayload.propertyType || 'apartment');
  const [transaction, setTransaction] = useState(initialPayload.transaction || 'sale');
  const [currency, setCurrency] = useState(initialPayload.currency || 'EUR');
  const [totalPrice, setTotalPrice] = useState(initialPayload.totalPrice || '');
  const [entryCapital, setEntryCapital] = useState(initialPayload.entryCapital || '');
  const [surfaceM2, setSurfaceM2] = useState(initialPayload.surfaceM2 || '');
  const [bedrooms, setBedrooms] = useState(initialPayload.bedrooms || '');
  const [bathrooms, setBathrooms] = useState(initialPayload.bathrooms || '');
  const [developer, setDeveloper] = useState(initialPayload.developer || '');
  const [externalId, setExternalId] = useState(initialPayload.externalId || '');
  const [featured, setFeatured] = useState(Boolean(initialPayload.featured));
  const [priceOnRequest, setPriceOnRequest] = useState(Boolean(initialPayload.priceOnRequest));
  const [titles, setTitles] = useState<any>(initialPayload.title || localText());
  const [summaries, setSummaries] = useState<any>(initialPayload.summary || localText());
  const [descriptions, setDescriptions] = useState<any>(initialPayload.description || localText());
  const [seoTitles, setSeoTitles] = useState<any>(initialPayload.seoTitle || localText());
  const [seoDescriptions, setSeoDescriptions] = useState<any>(initialPayload.seoDescription || localText());
  const [slugs, setSlugs] = useState<any>(initialPayload.slugs || localText());
  const [delivery, setDelivery] = useState<any>(initialPayload.delivery || localText());
  const [strengths, setStrengths] = useState<any>(
    Object.fromEntries(locales.map((l) => [l, (initialPayload.strengths || []).map((x:any)=>x?.[l]).filter(Boolean).join('\n')]))
  );
  const [technicalNotes, setTechnicalNotes] = useState<any>(
    Object.fromEntries(locales.map((l) => [l, (initialPayload.technicalNotes || []).map((x:any)=>x?.[l]).filter(Boolean).join('\n')]))
  );
  const [watchpoints, setWatchpoints] = useState<any>(
    Object.fromEntries(locales.map((l) => [l, (initialPayload.watchpoints || []).map((x:any)=>x?.[l]).filter(Boolean).join('\n')]))
  );
  const [paymentPlan, setPaymentPlan] = useState(initialPayload.paymentPlan || [
    { label: localText('Réservation'), percentage: 30, due: localText('À la signature') },
    { label: localText('Pendant construction'), percentage: 50, due: localText('Selon échéancier') },
    { label: localText('Livraison'), percentage: 20, due: localText('À la livraison') },
  ]);
  const [images, setImages] = useState<string[]>(initialPayload.images || []);
  const [uploading, setUploading] = useState(false);

  const editable = status === 'draft' || status === 'changes_requested';

  function localizedLines(source: any) {
    const arrays: Record<string, string[]> = {};
    for (const locale of locales) arrays[locale] = String(source[locale] || '').split('\n').map(x=>x.trim()).filter(Boolean);
    const max = Math.max(0, ...locales.map(l=>arrays[l].length));
    return Array.from({ length: max }, (_, index) =>
      Object.fromEntries(locales.map(locale => [locale, arrays[locale][index] || arrays.fr[index] || '']))
    );
  }

  function normalizedLocalized(source: any, fallback = '') {
    const fr = String(source.fr || fallback).trim();
    return Object.fromEntries(locales.map(locale => [locale, String(source[locale] || fr).trim()]));
  }

  const payload = useMemo(() => {
    const normalizedTitles = normalizedLocalized(titles);
    const normalizedSlugs = Object.fromEntries(
      locales.map(locale => [locale, slugify(slugs[locale] || normalizedTitles[locale] || normalizedTitles.fr)])
    );
    return {
      externalId,
      featured,
      status: 'available',
      collection,
      transaction,
      propertyType,
      city,
      district,
      slugs: normalizedSlugs,
      title: normalizedTitles,
      summary: normalizedLocalized(summaries),
      description: normalizedLocalized(descriptions),
      seoTitle: normalizedLocalized(seoTitles, normalizedTitles.fr),
      seoDescription: normalizedLocalized(seoDescriptions, summaries.fr),
      currency,
      totalPrice,
      priceOnRequest,
      entryCapital,
      surfaceM2,
      bedrooms,
      bathrooms,
      delivery: normalizedLocalized(delivery),
      developer,
      partner: '',
      paymentPlan,
      highlights: [],
      strengths: localizedLines(strengths),
      technicalNotes: localizedLines(technicalNotes),
      watchpoints: localizedLines(watchpoints),
      images,
      heroImage: images[0] || '',
      verifiedAt: new Date().toISOString(),
    };
  }, [
    externalId, featured, collection, transaction, propertyType, city, district, slugs, titles,
    summaries, descriptions, seoTitles, seoDescriptions, currency, totalPrice, priceOnRequest,
    entryCapital, surfaceM2, bedrooms, bathrooms, delivery, developer, paymentPlan, strengths,
    technicalNotes, watchpoints, images,
  ]);

  async function uploadFiles(files: FileList | null) {
    if (!files?.length) return;
    setUploading(true);
    setMessage('');
    try {
      const urls: string[] = [];
      for (const file of Array.from(files).slice(0, 16 - images.length)) {
        const safe = file.name.toLowerCase().replace(/[^a-z0-9._-]+/g, '-');
        const path = `submissions/${userId}/${crypto.randomUUID()}-${safe}`;
        const { error } = await supabase.storage.from('property-images').upload(path, file, {
          cacheControl: '31536000',
          upsert: false,
          contentType: file.type,
        });
        if (error) throw error;
        const { data } = supabase.storage.from('property-images').getPublicUrl(path);
        urls.push(data.publicUrl);
      }
      setImages(current => [...current, ...urls]);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Upload impossible.');
    } finally {
      setUploading(false);
    }
  }

  async function saveDraft() {
    setBusy(true);
    setMessage('');
    try {
      const { data, error } = await supabase.rpc('partner_save_listing_draft', {
        p_submission_id: submissionId,
        p_listing_id: listingId,
        p_payload: payload,
      });
      if (error) throw error;
      setSubmissionId(data);
      setStatus('draft');
      setMessage('Brouillon enregistré.');
      onSaved?.();
      return data as string;
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Enregistrement impossible.');
      return null;
    } finally {
      setBusy(false);
    }
  }

  async function submitForReview(event: FormEvent) {
    event.preventDefault();
    if (!titles.fr.trim() || !district.trim() || (!priceOnRequest && !String(totalPrice).trim())) {
      setMessage('Titre FR, quartier et prix (ou prix sur demande) sont obligatoires.');
      return;
    }
    const id = await saveDraft();
    if (!id) return;
    setBusy(true);
    try {
      const { error } = await supabase.rpc('partner_submit_listing', { p_submission_id: id });
      if (error) throw error;
      setStatus('submitted');
      setMessage('Annonce envoyée à Bosphoras pour validation. Elle ne peut plus être modifiée tant que l’administrateur ne l’a pas examinée.');
      onSaved?.();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Soumission impossible.');
    } finally {
      setBusy(false);
    }
  }

  const input = 'min-h-[44px] w-full border border-[#d8c7a1] bg-white px-3 text-sm';
  const textarea = 'w-full border border-[#d8c7a1] bg-white px-3 py-3 text-sm leading-6';
  const label = 'grid gap-2 text-[0.68rem] font-bold uppercase tracking-[0.1em] text-[#66707b]';

  return (
    <form onSubmit={submitForReview} className="space-y-7">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#d8c7a1] pb-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8a6728]">Soumission partenaire</p>
          <h3 className="mt-2 font-serif text-3xl">{listingId ? 'Proposer une modification' : 'Nouvelle opportunité'}</h3>
          <p className="mt-2 text-sm text-[#66707b]">Statut : <strong>{status}</strong>. Aucune modification partenaire n’affecte le site public avant validation administrateur.</p>
        </div>
        {onClose && <button type="button" onClick={onClose} className="p-2 text-[#66707b]" aria-label="Fermer"><X size={20}/></button>}
      </div>

      {!editable && (
        <div className="border border-[#d8c7a1] bg-[#f6efe4] p-5 text-sm leading-6 text-[#58616d]">
          Cette version est verrouillée pendant la revue Bosphoras.
        </div>
      )}

      <fieldset disabled={!editable} className="space-y-7 disabled:opacity-70">
        <div className="grid gap-4 md:grid-cols-4">
          <label className={label}>Ville<select value={city} onChange={e=>setCity(e.target.value)} className={input}><option value="istanbul">Istanbul</option><option value="bodrum">Bodrum</option><option value="antalya">Antalya</option></select></label>
          <label className={label}>Quartier<input value={district} onChange={e=>setDistrict(e.target.value)} className={input}/></label>
          <label className={label}>Collection<select value={collection} onChange={e=>setCollection(e.target.value)} className={input}><option value="selected-investment">Selected Investment</option><option value="signature">Signature Collection</option><option value="private">Private Opportunity</option></select></label>
          <label className={label}>Type<select value={propertyType} onChange={e=>setPropertyType(e.target.value)} className={input}><option value="apartment">Appartement</option><option value="residence">Résidence</option><option value="villa">Villa</option><option value="penthouse">Penthouse</option><option value="commercial">Commercial</option></select></label>
          <label className={label}>Transaction<select value={transaction} onChange={e=>setTransaction(e.target.value)} className={input}><option value="sale">Vente</option><option value="rent">Location</option></select></label>
          <label className={label}>Référence<input value={externalId} onChange={e=>setExternalId(e.target.value)} className={input} placeholder="PARTNER-001"/></label>
          <label className={label}>Promoteur<input value={developer} onChange={e=>setDeveloper(e.target.value)} className={input}/></label>
          <label className={label}>Devise<select value={currency} onChange={e=>setCurrency(e.target.value)} className={input}><option>EUR</option><option>USD</option><option>TRY</option><option>GBP</option><option>CHF</option></select></label>
          <label className={label}>Prix total<input value={totalPrice} onChange={e=>setTotalPrice(e.target.value)} className={input} inputMode="decimal"/></label>
          <label className={label}>Capital aujourd'hui<input value={entryCapital} onChange={e=>setEntryCapital(e.target.value)} className={input} inputMode="decimal"/></label>
          <label className={label}>Surface m²<input value={surfaceM2} onChange={e=>setSurfaceM2(e.target.value)} className={input} inputMode="decimal"/></label>
          <label className={label}>Chambres<input value={bedrooms} onChange={e=>setBedrooms(e.target.value)} className={input} inputMode="numeric"/></label>
          <label className={label}>Salles de bain<input value={bathrooms} onChange={e=>setBathrooms(e.target.value)} className={input} inputMode="numeric"/></label>
          <label className="flex items-center gap-3 pt-7 text-sm"><input type="checkbox" checked={priceOnRequest} onChange={e=>setPriceOnRequest(e.target.checked)}/> Prix sur demande</label>
          <label className="flex items-center gap-3 pt-7 text-sm"><input type="checkbox" checked={featured} onChange={e=>setFeatured(e.target.checked)}/> À proposer comme mise en avant</label>
        </div>

        {[
          ['Titre', titles, setTitles, false],
          ['Slug SEO', slugs, setSlugs, false],
          ['Résumé', summaries, setSummaries, true],
          ['Description complète', descriptions, setDescriptions, true],
          ['SEO title', seoTitles, setSeoTitles, false],
          ['Meta description', seoDescriptions, setSeoDescriptions, true],
          ['Livraison', delivery, setDelivery, false],
        ].map(([name, state, setter, multi]) => (
          <section key={name as string} className="border border-[#d8c7a1] bg-white p-5">
            <h4 className="font-serif text-xl">{name as string}</h4>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {locales.map(locale => (
                <label key={locale} className={label}>{locale.toUpperCase()}
                  {multi ? (
                    <textarea rows={name === 'Description complète' ? 7 : 3} value={(state as any)[locale] || ''} onChange={e=>(setter as any)({...(state as any),[locale]:e.target.value})} className={textarea}/>
                  ) : (
                    <input value={(state as any)[locale] || ''} onChange={e=>(setter as any)({...(state as any),[locale]:e.target.value})} className={input}/>
                  )}
                </label>
              ))}
            </div>
          </section>
        ))}

        <section className="grid gap-5 lg:grid-cols-3">
          {[
            ['Pourquoi le sélectionner', strengths, setStrengths],
            ['Technical Notes', technicalNotes, setTechnicalNotes],
            ['Points de vigilance', watchpoints, setWatchpoints],
          ].map(([name, state, setter]) => (
            <div key={name as string} className="border border-[#d8c7a1] bg-white p-5">
              <h4 className="font-serif text-xl">{name as string}</h4>
              <p className="mt-2 text-xs text-[#7b8490]">Un point par ligne. FR peut servir de fallback si une traduction manque.</p>
              <div className="mt-4 space-y-4">
                {locales.map(locale => (
                  <label key={locale} className={label}>{locale.toUpperCase()}
                    <textarea rows={4} value={(state as any)[locale] || ''} onChange={e=>(setter as any)({...(state as any),[locale]:e.target.value})} className={textarea}/>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="border border-[#d8c7a1] bg-white p-5">
          <h4 className="font-serif text-2xl">Plan de paiement</h4>
          <div className="mt-5 grid gap-3">
            {paymentPlan.map((step:any, index:number) => (
              <div key={index} className="grid gap-3 border-t border-[#eee3d2] pt-4 md:grid-cols-[1.2fr_0.5fr_1.2fr_auto]">
                <input value={step.label?.fr || ''} onChange={e=>setPaymentPlan((x:any[])=>x.map((s,i)=>i===index?{...s,label:{...s.label,fr:e.target.value,en:s.label?.en||e.target.value,ru:s.label?.ru||e.target.value,ar:s.label?.ar||e.target.value}}:s))} className={input} placeholder="Étape"/>
                <input value={step.percentage ?? ''} onChange={e=>setPaymentPlan((x:any[])=>x.map((s,i)=>i===index?{...s,percentage:Number(e.target.value)}:s))} className={input} placeholder="%"/>
                <input value={step.due?.fr || ''} onChange={e=>setPaymentPlan((x:any[])=>x.map((s,i)=>i===index?{...s,due:{...s.due,fr:e.target.value,en:s.due?.en||e.target.value,ru:s.due?.ru||e.target.value,ar:s.due?.ar||e.target.value}}:s))} className={input} placeholder="Échéance"/>
                <button type="button" onClick={()=>setPaymentPlan((x:any[])=>x.filter((_,i)=>i!==index))} className="px-3 text-[#9c5a52]">×</button>
              </div>
            ))}
          </div>
          <button type="button" onClick={()=>setPaymentPlan((x:any[])=>[...x,{label:localText('Nouvelle étape'),percentage:0,due:localText('À définir')}])} className="mt-5 text-xs font-bold uppercase tracking-[0.12em] text-[#8a6728]">+ Ajouter une étape</button>
        </section>

        <section className="border border-[#d8c7a1] bg-white p-5">
          <div className="flex items-center gap-3"><ImagePlus size={20} className="text-[#8a6728]"/><h4 className="font-serif text-2xl">Photos</h4></div>
          <input type="file" multiple accept="image/jpeg,image/png,image/webp,image/avif" onChange={e=>uploadFiles(e.target.files)} className="mt-5 text-sm"/>
          {uploading && <p className="mt-3 text-sm text-[#66707b]">Upload en cours…</p>}
          {images.length > 0 && (
            <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
              {images.map((url,index)=>(
                <div key={url} className="relative aspect-[4/3] overflow-hidden bg-[#eee3d2]">
                  <img src={url} alt="" className="h-full w-full object-cover"/>
                  <button type="button" onClick={()=>setImages(x=>x.filter((_,i)=>i!==index))} className="absolute right-2 top-2 bg-[#101827] p-1.5 text-white"><X size={14}/></button>
                </div>
              ))}
            </div>
          )}
        </section>
      </fieldset>

      {message && <div className="border border-[#d8c7a1] bg-[#fffaf3] p-4 text-sm leading-6 text-[#58616d]">{message}</div>}

      {editable && (
        <div className="flex flex-wrap gap-3">
          <button type="button" disabled={busy} onClick={saveDraft} className="inline-flex min-h-[48px] items-center gap-2 border border-[#101827] px-5 text-sm font-bold uppercase tracking-[0.12em]">
            <Save size={16}/> Enregistrer le brouillon
          </button>
          <button type="submit" disabled={busy} className="inline-flex min-h-[48px] items-center gap-2 bg-[#101827] px-6 text-sm font-bold uppercase tracking-[0.12em] text-white">
            <Send size={16}/> Soumettre à validation <ArrowRight size={15}/>
          </button>
        </div>
      )}
    </form>
  );
}
