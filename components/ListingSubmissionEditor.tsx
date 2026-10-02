// @ts-nocheck
'use client';

import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';
import { ArrowRight, ImagePlus, Save, Send, X } from 'lucide-react';
import { getPortalSupabase } from '@/lib/portalSupabase';
import { PropertyUrlAutofill } from '@/components/PropertyUrlAutofill';

type LocaleKey = 'fr' | 'en' | 'ru' | 'ar';
type Localized = Record<LocaleKey, string>;

interface Props {
  userId: string;
  listingId?: string | null;
  initialSubmission?: any;
  onSaved?: () => void;
  onClose?: () => void;
}

const locales: LocaleKey[] = ['fr', 'en', 'ru', 'ar'];
const blankLocalized = (): Localized => ({ fr: '', en: '', ru: '', ar: '' });

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

function localizedFrom(value: any): Localized {
  return {
    fr: String(value?.fr || ''),
    en: String(value?.en || ''),
    ru: String(value?.ru || ''),
    ar: String(value?.ar || ''),
  };
}

function localizedLines(value: Localized) {
  const split: Record<LocaleKey, string[]> = {
    fr: value.fr.split('\n').map((v) => v.trim()).filter(Boolean),
    en: value.en.split('\n').map((v) => v.trim()).filter(Boolean),
    ru: value.ru.split('\n').map((v) => v.trim()).filter(Boolean),
    ar: value.ar.split('\n').map((v) => v.trim()).filter(Boolean),
  };
  const max = Math.max(split.fr.length, split.en.length, split.ru.length, split.ar.length, 0);
  return Array.from({ length: max }, (_, i) => ({
    fr: split.fr[i] || '',
    en: split.en[i] || split.fr[i] || '',
    ru: split.ru[i] || split.fr[i] || '',
    ar: split.ar[i] || split.fr[i] || '',
  }));
}

function normalizeLocalized(value: Localized, fallback = ''): Localized {
  const fr = value.fr.trim() || fallback;
  return {
    fr,
    en: value.en.trim() || fr,
    ru: value.ru.trim() || fr,
    ar: value.ar.trim() || fr,
  };
}

export function ListingSubmissionEditor({ userId, listingId = null, initialSubmission, onSaved, onClose }: Props) {
  const supabase = getPortalSupabase();
  const initial = initialSubmission?.payload || {};

  const [submissionId, setSubmissionId] = useState<string | null>(initialSubmission?.id || null);
  const [status, setStatus] = useState<string>(initialSubmission?.status || 'draft');
  const [busy, setBusy] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  const [core, setCore] = useState({
    externalId: String(initial.externalId || ''),
    countryCode: String(initial.countryCode || 'TR'),
    countryName: String(initial.countryName || 'Turkey'),
    city: String(initial.city || 'istanbul'),
    cityName: String(initial.cityName || initial.city || 'Istanbul'),
    district: String(initial.district || ''),
    collection: String(initial.collection || 'selected-investment'),
    propertyType: String(initial.propertyType || 'apartment'),
    transaction: String(initial.transaction || 'sale'),
    currency: String(initial.currency || 'EUR'),
    totalPrice: String(initial.totalPrice || ''),
    entryCapital: String(initial.entryCapital || ''),
    surfaceM2: String(initial.surfaceM2 || ''),
    bedrooms: String(initial.bedrooms || ''),
    bathrooms: String(initial.bathrooms || ''),
    developer: String(initial.developer || ''),
    featured: Boolean(initial.featured),
    priceOnRequest: Boolean(initial.priceOnRequest),
    paymentPlanEnabled: initial.paymentPlanEnabled !== false,
    paymentInterestMode: String(initial.paymentInterestMode || 'not_specified'),
    paymentInterestRate: String(initial.paymentInterestRate ?? ''),
    cashDiscountPct: String(initial.cashDiscountPct ?? ''),
    cashPrice: String(initial.cashPrice ?? ''),
    installmentPrice: String(initial.installmentPrice ?? ''),
    sourceUrl: String(initial.sourceUrl || ''),
    sourceHost: String(initial.sourceHost || ''),
  });

  const [title, setTitle] = useState<Localized>(localizedFrom(initial.title));
  const [slug, setSlug] = useState<Localized>(localizedFrom(initial.slugs));
  const [summary, setSummary] = useState<Localized>(localizedFrom(initial.summary));
  const [description, setDescription] = useState<Localized>(localizedFrom(initial.description));
  const [seoTitle, setSeoTitle] = useState<Localized>(localizedFrom(initial.seoTitle));
  const [seoDescription, setSeoDescription] = useState<Localized>(localizedFrom(initial.seoDescription));
  const [delivery, setDelivery] = useState<Localized>(localizedFrom(initial.delivery));
  const [strengths, setStrengths] = useState<Localized>(() => {
    const out = blankLocalized();
    locales.forEach((l) => { out[l] = (initial.strengths || []).map((x: any) => x?.[l]).filter(Boolean).join('\n'); });
    return out;
  });
  const [technicalNotes, setTechnicalNotes] = useState<Localized>(() => {
    const out = blankLocalized();
    locales.forEach((l) => { out[l] = (initial.technicalNotes || []).map((x: any) => x?.[l]).filter(Boolean).join('\n'); });
    return out;
  });
  const [watchpoints, setWatchpoints] = useState<Localized>(() => {
    const out = blankLocalized();
    locales.forEach((l) => { out[l] = (initial.watchpoints || []).map((x: any) => x?.[l]).filter(Boolean).join('\n'); });
    return out;
  });
  const [images, setImages] = useState<string[]>(Array.isArray(initial.images) ? initial.images : []);
  const [paymentPlan, setPaymentPlan] = useState<any[]>(
    Array.isArray(initial.paymentPlan) && initial.paymentPlan.length
      ? initial.paymentPlan
      : [
          { label: { fr: 'Réservation', en: 'Reservation', ru: 'Бронирование', ar: 'الحجز' }, percentage: 30, due: { fr: 'À la signature', en: 'At signing', ru: 'При подписании', ar: 'عند التوقيع' } },
          { label: { fr: 'Pendant construction', en: 'During construction', ru: 'Во время строительства', ar: 'أثناء الإنشاء' }, percentage: 50, due: { fr: 'Selon échéancier', en: 'Per schedule', ru: 'По графику', ar: 'حسب الجدول' } },
          { label: { fr: 'Livraison', en: 'Handover', ru: 'Передача', ar: 'التسليم' }, percentage: 20, due: { fr: 'À la livraison', en: 'At handover', ru: 'При передаче', ar: 'عند التسليم' } },
        ]
  );

  const editable = status === 'draft' || status === 'changes_requested';
  const input = 'min-h-[44px] w-full border border-[#d9e1e8] bg-white px-3 text-sm';
  const textarea = 'w-full border border-[#d9e1e8] bg-white px-3 py-3 text-sm leading-6';
  const label = 'grid gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[#526272]';

  function setLocalized(setter: (value: Localized) => void, current: Localized, locale: LocaleKey, value: string) {
    setter({ ...current, [locale]: value });
  }

  function payload() {
    const normalizedTitle = normalizeLocalized(title);
    const normalizedSlug: Localized = {
      fr: slugify(slug.fr || normalizedTitle.fr),
      en: slugify(slug.en || normalizedTitle.en || normalizedTitle.fr),
      ru: slugify(slug.ru || normalizedTitle.ru || normalizedTitle.fr),
      ar: slugify(slug.ar || normalizedTitle.ar || normalizedTitle.fr),
    };
    return {
      externalId: core.externalId,
      featured: core.featured,
      status: 'available',
      collection: core.collection,
      transaction: core.transaction,
      propertyType: core.propertyType,
      countryCode: core.countryCode.trim().toUpperCase(),
      countryName: core.countryName.trim(),
      city: slugify(core.cityName || core.city),
      cityName: core.cityName.trim(),
      district: core.district,
      slugs: normalizedSlug,
      title: normalizedTitle,
      summary: normalizeLocalized(summary),
      description: normalizeLocalized(description),
      seoTitle: normalizeLocalized(seoTitle, normalizedTitle.fr),
      seoDescription: normalizeLocalized(seoDescription, summary.fr),
      currency: core.currency,
      totalPrice: core.totalPrice,
      priceOnRequest: core.priceOnRequest,
      entryCapital: core.entryCapital,
      surfaceM2: core.surfaceM2,
      bedrooms: core.bedrooms,
      bathrooms: core.bathrooms,
      delivery: normalizeLocalized(delivery),
      developer: core.developer,
      partner: '',
      paymentPlan,
      paymentPlanEnabled: core.paymentPlanEnabled,
      paymentInterestMode: core.paymentInterestMode,
      paymentInterestRate: core.paymentInterestRate,
      cashDiscountPct: core.cashDiscountPct,
      cashPrice: core.cashPrice,
      installmentPrice: core.installmentPrice,
      paymentNotes: normalizeLocalized(delivery),
      highlights: [],
      strengths: localizedLines(strengths),
      technicalNotes: localizedLines(technicalNotes),
      watchpoints: localizedLines(watchpoints),
      images,
      heroImage: images[0] || '',
      verifiedAt: new Date().toISOString(),
      sourceUrl: core.sourceUrl,
      sourceHost: core.sourceHost,
      sourceLastCheckedAt: core.sourceUrl ? new Date().toISOString() : null,
    };
  }

  function applyImported(prepared:any){
    setCore((current:any)=>({
      ...current,
      city:prepared.city||current.city,
      district:prepared.district||current.district,
      collection:prepared.collection||current.collection,
      propertyType:prepared.propertyType||current.propertyType,
      transaction:prepared.transaction||current.transaction,
      currency:prepared.currency||current.currency,
      totalPrice:prepared.totalPrice!==''&&prepared.totalPrice!==null&&prepared.totalPrice!==undefined?String(prepared.totalPrice):current.totalPrice,
      entryCapital:prepared.entryCapital!==''&&prepared.entryCapital!==null&&prepared.entryCapital!==undefined?String(prepared.entryCapital):current.entryCapital,
      surfaceM2:prepared.surfaceM2!==''&&prepared.surfaceM2!==null&&prepared.surfaceM2!==undefined?String(prepared.surfaceM2):current.surfaceM2,
      bedrooms:prepared.bedrooms!==''&&prepared.bedrooms!==null&&prepared.bedrooms!==undefined?String(prepared.bedrooms):current.bedrooms,
      bathrooms:prepared.bathrooms!==''&&prepared.bathrooms!==null&&prepared.bathrooms!==undefined?String(prepared.bathrooms):current.bathrooms,
      developer:prepared.developer||current.developer,
      priceOnRequest:Boolean(prepared.priceOnRequest&&!(prepared.totalPrice||current.totalPrice)),
      sourceUrl:prepared.sourceUrl||current.sourceUrl,
      sourceHost:prepared.sourceHost||current.sourceHost,
    }));
    if(prepared.title) setTitle(localizedFrom(prepared.title));
    if(prepared.summary) setSummary(localizedFrom(prepared.summary));
    if(prepared.description) setDescription(localizedFrom(prepared.description));
    if(prepared.seoTitle) setSeoTitle(localizedFrom(prepared.seoTitle));
    if(prepared.seoDescription) setSeoDescription(localizedFrom(prepared.seoDescription));
    if(prepared.delivery) setDelivery(localizedFrom(prepared.delivery));
    if(Array.isArray(prepared.paymentPlan)&&prepared.paymentPlan.length) setPaymentPlan(prepared.paymentPlan);
    if(Array.isArray(prepared.images)&&prepared.images.length) setImages((current)=>Array.from(new Set([...prepared.images,...current])));
    if(Array.isArray(prepared.strengths)){
      const out=blankLocalized(); locales.forEach((l)=>{out[l]=prepared.strengths.map((x:any)=>x?.[l]).filter(Boolean).join('\n');}); setStrengths(out);
    }
    if(Array.isArray(prepared.technicalNotes)){
      const out=blankLocalized(); locales.forEach((l)=>{out[l]=prepared.technicalNotes.map((x:any)=>x?.[l]).filter(Boolean).join('\n');}); setTechnicalNotes(out);
    }
    if(Array.isArray(prepared.watchpoints)){
      const out=blankLocalized(); locales.forEach((l)=>{out[l]=prepared.watchpoints.map((x:any)=>x?.[l]).filter(Boolean).join('\n');}); setWatchpoints(out);
    }
    setMessage('Préremplissage appliqué. Vérifiez surtout le prix, le quartier, le plan de paiement et les informations techniques avant soumission.');
  }

  async function uploadFiles(event: ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;
    if (!files?.length) return;
    setUploading(true);
    setMessage('');
    try {
      const urls: string[] = [];
      for (const file of Array.from(files).slice(0, Math.max(0, 16 - images.length))) {
        const safeName = file.name.toLowerCase().replace(/[^a-z0-9._-]+/g, '-');
        const path = `submissions/${userId}/${crypto.randomUUID()}-${safeName}`;
        const { error } = await supabase.storage.from('property-images').upload(path, file, {
          cacheControl: '31536000',
          upsert: false,
          contentType: file.type,
        });
        if (error) throw error;
        const { data } = supabase.storage.from('property-images').getPublicUrl(path);
        urls.push(data.publicUrl);
      }
      setImages((current) => [...current, ...urls]);
      event.target.value = '';
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
        p_payload: payload(),
      });
      if (error) throw error;
      const id = data ? String(data) : null;
      setSubmissionId(id);
      setStatus('draft');
      setMessage('Brouillon enregistré.');
      onSaved?.();
      return id;
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Enregistrement impossible.');
      return null;
    } finally {
      setBusy(false);
    }
  }

  async function submitForReview(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!title.fr.trim() || !core.district.trim() || (!core.priceOnRequest && !core.totalPrice.trim())) {
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
      setMessage('Annonce envoyée à Bosphoras pour validation. Elle est verrouillée jusqu’à la décision administrateur.');
      onSaved?.();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Soumission impossible.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submitForReview} className="space-y-7 [font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe_UI,sans-serif]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#d9e1e8] pb-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#315d7c]">Soumission partenaire</p>
          <h3 className="mt-2 font-sans text-3xl">{listingId ? 'Proposer une modification' : 'Nouvelle opportunité'}</h3>
          <p className="mt-2 text-sm text-[#526272]">Statut : <strong>{status}</strong>. La version publique ne change jamais avant validation Bosphoras.</p>
        </div>
        {onClose ? <button type="button" onClick={onClose} className="p-2 text-[#526272]" aria-label="Fermer"><X size={20} /></button> : null}
      </div>

      {!editable ? <div className="border border-[#d9e1e8] bg-[#eef4f8] p-5 text-sm text-[#58616d]">Cette version est verrouillée pendant la revue administrateur.</div> : null}

      {editable ? <PropertyUrlAutofill onPrepared={applyImported} compact /> : null}

      <fieldset disabled={!editable} className="space-y-7 disabled:opacity-70">
        <div className="grid gap-4 md:grid-cols-4">
          <label className={label}>Pays<input value={core.countryName} onChange={(e)=>setCore({...core,countryName:e.target.value})} className={input} placeholder="Turkey, UAE, Georgia…"/></label>
          <label className={label}>Code pays<input value={core.countryCode} onChange={(e)=>setCore({...core,countryCode:e.target.value.toUpperCase().slice(0,3)})} className={input} placeholder="TR, AE, GE…"/></label>
          <label className={label}>Ville<input value={core.cityName} onChange={(e)=>setCore({...core,cityName:e.target.value,city:slugify(e.target.value)})} className={input} placeholder="Istanbul, Dubai, Batumi…"/></label>
          <label className={label}>Quartier<input value={core.district} onChange={(e)=>setCore({...core,district:e.target.value})} className={input}/></label>
          <label className={label}>Collection<select value={core.collection} onChange={(e)=>setCore({...core,collection:e.target.value})} className={input}><option value="selected-investment">Selected Investment</option><option value="signature">Signature Collection</option><option value="private">Private Opportunity</option></select></label>
          <label className={label}>Type<select value={core.propertyType} onChange={(e)=>setCore({...core,propertyType:e.target.value})} className={input}><option value="apartment">Appartement</option><option value="residence">Résidence</option><option value="villa">Villa</option><option value="penthouse">Penthouse</option><option value="commercial">Commercial</option></select></label>
          <label className={label}>Transaction<select value={core.transaction} onChange={(e)=>setCore({...core,transaction:e.target.value})} className={input}><option value="sale">Vente</option><option value="rent">Location</option></select></label>
          <label className={label}>Référence<input value={core.externalId} onChange={(e)=>setCore({...core,externalId:e.target.value})} className={input}/></label>
          <label className={label}>Promoteur<input value={core.developer} onChange={(e)=>setCore({...core,developer:e.target.value})} className={input}/></label>
          <label className={label}>Devise<select value={core.currency} onChange={(e)=>setCore({...core,currency:e.target.value})} className={input}><option>EUR</option><option>USD</option><option>TRY</option><option>GBP</option><option>CHF</option><option>AED</option></select></label>
          <label className={label}>Prix total<input value={core.totalPrice} onChange={(e)=>setCore({...core,totalPrice:e.target.value})} className={input}/></label>
          <label className={label}>Capital aujourd'hui<input value={core.entryCapital} onChange={(e)=>setCore({...core,entryCapital:e.target.value})} className={input}/></label>
          <label className={label}>Surface m²<input value={core.surfaceM2} onChange={(e)=>setCore({...core,surfaceM2:e.target.value})} className={input}/></label>
          <label className={label}>Chambres<input value={core.bedrooms} onChange={(e)=>setCore({...core,bedrooms:e.target.value})} className={input}/></label>
          <label className={label}>Salles de bain<input value={core.bathrooms} onChange={(e)=>setCore({...core,bathrooms:e.target.value})} className={input}/></label>
          <label className="flex items-center gap-3 pt-7 text-sm"><input type="checkbox" checked={core.priceOnRequest} onChange={(e)=>setCore({...core,priceOnRequest:e.target.checked})}/> Prix sur demande</label>
          <label className="flex items-center gap-3 pt-7 text-sm"><input type="checkbox" checked={core.featured} onChange={(e)=>setCore({...core,featured:e.target.checked})}/> Proposition mise en avant</label>
        </div>

        <section className="border border-[#d9e1e8] bg-white p-5">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[#315d7c]">Contenu principal</p>
          <h4 className="mt-1 text-lg font-semibold">Version française</h4>
          <p className="mt-1 text-xs text-[#7b8794]">(à relire en priorité ; les autres langues et le SEO sont déjà préparés automatiquement)</p>
          <div className="mt-5 grid gap-4">
            <label className={label}>Titre public<input value={title.fr} onChange={(e)=>setTitle({...title,fr:e.target.value})} className={input}/></label>
            <label className={label}>Résumé<textarea rows={3} value={summary.fr} onChange={(e)=>setSummary({...summary,fr:e.target.value})} className={textarea}/></label>
            <label className={label}>Description<textarea rows={7} value={description.fr} onChange={(e)=>setDescription({...description,fr:e.target.value})} className={textarea}/></label>
          </div>
        </section>

        <details className="border border-[#d9e1e8] bg-white">
          <summary className="cursor-pointer list-none px-5 py-4 text-sm font-semibold text-[#162334]">Traductions & SEO <span className="ml-2 text-xs font-normal text-[#7b8794]">(ouvrir seulement pour vérifier ou modifier)</span></summary>
          <div className="space-y-5 border-t border-[#e7edf2] p-5">
            <LocalizedFields title="Titre public" value={title} setValue={setTitle} inputClass={input} textareaClass={textarea} labelClass={label} />
            <LocalizedFields title="Slug SEO" value={slug} setValue={setSlug} inputClass={input} textareaClass={textarea} labelClass={label} />
            <LocalizedFields title="Résumé" value={summary} setValue={setSummary} multiline inputClass={input} textareaClass={textarea} labelClass={label} />
            <LocalizedFields title="Description complète" value={description} setValue={setDescription} multiline rows={6} inputClass={input} textareaClass={textarea} labelClass={label} />
            <LocalizedFields title="SEO title" value={seoTitle} setValue={setSeoTitle} inputClass={input} textareaClass={textarea} labelClass={label} />
            <LocalizedFields title="Meta description" value={seoDescription} setValue={setSeoDescription} multiline inputClass={input} textareaClass={textarea} labelClass={label} />
            <LocalizedFields title="Livraison" value={delivery} setValue={setDelivery} inputClass={input} textareaClass={textarea} labelClass={label} />
          </div>
        </details>

        <details className="border border-[#d9e1e8] bg-white">
          <summary className="cursor-pointer list-none px-5 py-4 text-sm font-semibold text-[#162334]">Analyse Bosphoras <span className="ml-2 text-xs font-normal text-[#7b8794]">(points forts, technique, vigilance)</span></summary>
          <div className="grid gap-5 border-t border-[#e7edf2] p-5 lg:grid-cols-3">
            <LocalizedFields title="Pourquoi le sélectionner" value={strengths} setValue={setStrengths} multiline rows={5} inputClass={input} textareaClass={textarea} labelClass={label} />
            <LocalizedFields title="Technical Notes" value={technicalNotes} setValue={setTechnicalNotes} multiline rows={5} inputClass={input} textareaClass={textarea} labelClass={label} />
            <LocalizedFields title="Points de vigilance" value={watchpoints} setValue={setWatchpoints} multiline rows={5} inputClass={input} textareaClass={textarea} labelClass={label} />
          </div>
        </details>

        <section className="border border-[#d9e1e8] bg-white p-5">
          <h4 className="font-sans text-2xl">Plan de paiement</h4>
          <div className="mt-5 space-y-3">
            {paymentPlan.map((step, index) => (
              <div key={index} className="grid gap-3 border-t border-[#edf1f5] pt-4 md:grid-cols-[1.2fr_0.5fr_1.2fr_auto]">
                <input value={String(step?.label?.fr || '')} onChange={(e)=>setPaymentPlan(paymentPlan.map((s,i)=>i===index?{...s,label:{...(s.label||{}),fr:e.target.value,en:s.label?.en||e.target.value,ru:s.label?.ru||e.target.value,ar:s.label?.ar||e.target.value}}:s))} className={input} />
                <input value={String(step?.percentage ?? '')} onChange={(e)=>setPaymentPlan(paymentPlan.map((s,i)=>i===index?{...s,percentage:Number(e.target.value)}:s))} className={input} />
                <input value={String(step?.due?.fr || '')} onChange={(e)=>setPaymentPlan(paymentPlan.map((s,i)=>i===index?{...s,due:{...(s.due||{}),fr:e.target.value,en:s.due?.en||e.target.value,ru:s.due?.ru||e.target.value,ar:s.due?.ar||e.target.value}}:s))} className={input} />
                <button type="button" onClick={()=>setPaymentPlan(paymentPlan.filter((_,i)=>i!==index))} className="px-3 text-[#a85656]">×</button>
              </div>
            ))}
          </div>
          <button type="button" onClick={()=>setPaymentPlan([...paymentPlan,{label:{fr:'Nouvelle étape',en:'New step',ru:'Новый этап',ar:'مرحلة جديدة'},percentage:0,due:{fr:'À définir',en:'To define',ru:'Уточнить',ar:'يحدد لاحقاً'}}])} className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-[#315d7c]">+ Ajouter une étape</button>
        </section>

        <section className="border border-[#d9e1e8] bg-white p-5">
          <div className="flex items-center gap-3"><ImagePlus size={20} className="text-[#315d7c]"/><h4 className="font-sans text-2xl">Photos</h4></div>
          <input type="file" multiple accept="image/jpeg,image/png,image/webp,image/avif" onChange={uploadFiles} className="mt-5 text-sm"/>
          {uploading ? <p className="mt-3 text-sm text-[#526272]">Upload en cours…</p> : null}
          {images.length ? <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">{images.map((url,index)=><div key={url} className="relative aspect-[4/3] overflow-hidden bg-[#edf1f5]"><img src={url} alt="" className="h-full w-full object-cover"/><button type="button" onClick={()=>setImages(images.filter((_,i)=>i!==index))} className="absolute right-2 top-2 bg-[#12304a] p-1.5 text-white"><X size={14}/></button></div>)}</div> : null}
        </section>
      </fieldset>

      {message ? <div className="border border-[#d9e1e8] bg-[#f7f9fb] p-4 text-sm leading-6 text-[#58616d]">{message}</div> : null}

      {editable ? <div className="flex flex-wrap gap-3">
        <button type="button" disabled={busy} onClick={saveDraft} className="inline-flex min-h-[48px] items-center gap-2 border border-[#12304a] px-5 text-sm font-semibold uppercase tracking-[0.12em]"><Save size={16}/> Enregistrer le brouillon</button>
        <button type="submit" disabled={busy} className="inline-flex min-h-[48px] items-center gap-2 bg-[#12304a] px-6 text-sm font-semibold uppercase tracking-[0.12em] text-white"><Send size={16}/> Soumettre à validation <ArrowRight size={15}/></button>
      </div> : null}
    </form>
  );
}

function LocalizedFields({
  title,
  value,
  setValue,
  multiline = false,
  rows = 3,
  inputClass,
  textareaClass,
  labelClass,
}: {
  title: string;
  value: Localized;
  setValue: (value: Localized) => void;
  multiline?: boolean;
  rows?: number;
  inputClass: string;
  textareaClass: string;
  labelClass: string;
}) {
  return (
    <section className="border border-[#d9e1e8] bg-white p-5">
      <h4 className="font-sans text-xl">{title}</h4>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {locales.map((locale) => (
          <label key={locale} className={labelClass}>
            {locale.toUpperCase()}
            {multiline ? (
              <textarea rows={rows} value={value[locale]} onChange={(e)=>setValue({...value,[locale]:e.target.value})} className={textareaClass}/>
            ) : (
              <input value={value[locale]} onChange={(e)=>setValue({...value,[locale]:e.target.value})} className={inputClass}/>
            )}
          </label>
        ))}
      </div>
    </section>
  );
}
