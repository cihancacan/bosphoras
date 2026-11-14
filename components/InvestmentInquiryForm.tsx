'use client';

import { useState, type FormEvent } from 'react';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';
type FormKind = 'investment-project' | 'investment-investor';
type FormLocale = 'fr' | 'en';

const copy = {
  fr: {
    name: 'Nom et prénom', email: 'Adresse e-mail', phone: 'Téléphone', country: 'Pays de résidence',
    company: 'Entreprise ou nom du projet', website: 'Site web (facultatif)', amount: 'Montant recherché',
    sector: 'Secteur d’activité', summary: 'Présentez le projet et son besoin de financement',
    profile: 'Votre profil', capacity: 'Montant d’investissement envisagé',
    interests: 'Quels secteurs vous intéressent ?', message: 'Votre message',
    consent: 'J’accepte que Bosphoras utilise mes coordonnées pour traiter cette demande et me contacter. J’ai consulté la politique de confidentialité.',
    submitProject: 'Soumettre mon projet', submitInvestor: 'Envoyer ma demande',
    sending: 'Envoi en cours…', success: 'Votre demande a été transmise. Notre équipe pourra revenir vers vous après examen.',
    error: 'Impossible de transmettre la demande. Réessayez ou écrivez à contact@bosphoras.com.',
    placeholder: 'Décrivez l’activité, les revenus existants, l’utilisation envisagée des fonds et le calendrier souhaité.',
    optional: 'Facultatif', privacy: 'Politique de confidentialité'
  },
  en: {
    name: 'Full name', email: 'Email address', phone: 'Phone number', country: 'Country of residence',
    company: 'Company or project name', website: 'Website (optional)', amount: 'Funding target',
    sector: 'Industry', summary: 'Tell us about your business and financing needs',
    profile: 'Investor profile', capacity: 'Indicative investment amount',
    interests: 'Which sectors interest you?', message: 'Your message',
    consent: 'I agree that Bosphoras may use my contact information to process this enquiry and contact me. I have read the privacy policy.',
    submitProject: 'Submit a project', submitInvestor: 'Send my enquiry',
    sending: 'Sending…', success: 'Your enquiry has been submitted. Our team may contact you following its review.',
    error: 'We could not send your enquiry. Please retry or email contact@bosphoras.com.',
    placeholder: 'Describe your business, existing revenue, intended use of funds and proposed timetable.',
    optional: 'Optional', privacy: 'Privacy policy'
  }
};

const fieldStyle = 'mt-2 block w-full rounded-none border border-[#d6dddf] bg-white px-4 py-3 text-[15px] text-[#202629] outline-none transition-colors focus:border-[#193344] focus:ring-1 focus:ring-[#193344]';
const labelStyle = 'block text-sm font-medium leading-6 text-[#26343c]';

export function InvestmentInquiryForm({ locale, kind }: { locale: FormLocale; kind: FormKind }) {
  const c = copy[locale];
  const project = kind === 'investment-project';
  const [status, setStatus] = useState<FormStatus>('idle');

  async function send(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields: Record<string, string> = {};
    new FormData(form).forEach((value, key) => { fields[key] = String(value); });
    setStatus('sending');
    try {
      const response = await fetch('/api/forms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ locale, formKind: kind, fields, sourcePath: window.location.pathname })
      });
      if (!response.ok) { setStatus('error'); return; }
      form.reset();
      setStatus('success');
    } catch { setStatus('error'); }
  }

  return (
    <form onSubmit={send} className="relative grid gap-5" aria-label={project ? c.submitProject : c.submitInvestor}>
      <div className="pointer-events-none absolute -left-[9999px]" aria-hidden="true">
        <label>Leave this empty<input type="text" name="Bosphoras bot trap" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={labelStyle}>{c.name} *<input className={fieldStyle} type="text" name="Full name" required maxLength={130} autoComplete="name" /></label>
        <label className={labelStyle}>{c.email} *<input className={fieldStyle} type="email" name="Email" required maxLength={180} autoComplete="email" /></label>
        <label className={labelStyle}>{c.phone}<input className={fieldStyle} type="tel" name="Phone" maxLength={50} autoComplete="tel" /></label>
        <label className={labelStyle}>{c.country} *<input className={fieldStyle} type="text" name="Country of residence" required maxLength={90} autoComplete="country-name" /></label>
      </div>
      {project ? (
        <>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className={labelStyle}>{c.company} *<input className={fieldStyle} name="Company" required maxLength={180} /></label>
            <label className={labelStyle}>{c.website}<input className={fieldStyle} type="url" name="Website" placeholder="https://" maxLength={250} /></label>
            <label className={labelStyle}>{c.amount} *<select className={fieldStyle} name="Funding target" required defaultValue=""><option value="" disabled>—</option><option>Under €100,000</option><option>€100,000–€500,000</option><option>€500,000–€2,000,000</option><option>€2,000,000–€5,000,000</option><option>Above €5,000,000</option><option>To be determined</option></select></label>
            <label className={labelStyle}>{c.sector} *<select className={fieldStyle} name="Sector" required defaultValue=""><option value="" disabled>—</option><option>Industry & manufacturing</option><option>Energy & environment</option><option>Technology & AI</option><option>Healthcare</option><option>Travel & hospitality</option><option>Construction</option><option>Other</option></select></label>
          </div>
          <label className={labelStyle}>{c.summary} *<textarea className={fieldStyle} name="Message" required minLength={30} maxLength={3000} rows={6} placeholder={c.placeholder} /></label>
        </>
      ) : (
        <>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className={labelStyle}>{c.profile}<select className={fieldStyle} name="Investor profile" defaultValue=""><option value="">—</option><option>Individual investor</option><option>Entrepreneur</option><option>Professional investor</option><option>Family office</option><option>Institution</option></select></label>
            <label className={labelStyle}>{c.capacity}<select className={fieldStyle} name="Indicative budget" defaultValue=""><option value="">—</option><option>€1,000–€5,000</option><option>€5,000–€25,000</option><option>€25,000–€100,000</option><option>Above €100,000</option><option>Prefer to discuss</option></select></label>
          </div>
          <label className={labelStyle}>{c.interests}<input className={fieldStyle} name="Sectors of interest" maxLength={250} /></label>
          <label className={labelStyle}>{c.message}<textarea className={fieldStyle} name="Message" maxLength={2000} rows={4}/></label>
        </>
      )}
      <label className="flex items-start gap-3 text-[13px] leading-6 text-[#4a5961]">
        <input type="checkbox" name="Consent" value="Yes" required className="mt-1.5 h-4 w-4 shrink-0 accent-[#193344]"/>
        <span>{c.consent} <a className="underline underline-offset-2" href="/confidentialite">{c.privacy}</a>.</span>
      </label>
      <button type="submit" disabled={status === 'sending'} className="inline-flex min-h-12 items-center justify-center bg-[#193344] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#2b4e63] disabled:cursor-wait disabled:opacity-60">{status === 'sending' ? c.sending : project ? c.submitProject : c.submitInvestor} <span aria-hidden="true" className="ml-3">→</span></button>
      {status === 'success' && <p role="status" className="border-l-2 border-[#193344] bg-[#eef1f2] p-4 text-sm text-[#193344]">{c.success}</p>}
      {status === 'error' && <p role="alert" className="border-l-2 border-red-700 bg-red-50 p-4 text-sm text-red-800">{c.error}</p>}
    </form>
  );
}
