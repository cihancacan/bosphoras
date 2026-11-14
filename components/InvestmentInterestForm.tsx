'use client';
import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, Mail, ShieldCheck } from 'lucide-react';
import { getPortalSupabase } from '@/lib/portalSupabase';
import { investmentVentures, type InvestmentVentureCode } from '@/data/investmentVentures';

type Lang='fr'|'en';
type Kind='placement'|'project_access';
const inp='mt-2 block w-full rounded-lg border border-[#cfd9df] bg-white px-4 py-3 text-[15px] outline-none focus:border-[#193344] focus:ring-1 focus:ring-[#193344]';
export function InvestmentInterestForm({locale,projectCode,compact=false,initialKind='placement'}:{locale:Lang;projectCode:InvestmentVentureCode;compact?:boolean;initialKind?:Kind}){
 const fr=locale==='fr',v=investmentVentures.find(x=>x.code===projectCode)!;
 const [kind,setKind]=useState<Kind>(initialKind),[name,setName]=useState(''),[email,setEmail]=useState(''),[phone,setPhone]=useState(''),[country,setCountry]=useState(''),[amount,setAmount]=useState('1000'),[currency,setCurrency]=useState('EUR'),[notes,setNotes]=useState(''),[consent,setConsent]=useState(false),[bot,setBot]=useState(''),[busy,setBusy]=useState(false),[error,setError]=useState(''),[sent,setSent]=useState(false);
 async function submit(e:FormEvent<HTMLFormElement>){
  e.preventDefault();if(busy)return;setBusy(true);setError('');
  try{
    const payload={kind,project_code:projectCode,full_name:name,email,phone,country,requested_amount:kind==='placement'?Number(amount):null,currency,notes,consent,website_confirmation:bot,source_path:window.location.pathname};
    const {data:{user}}=await getPortalSupabase().auth.getUser();
    let ok=false;
    if(user){
      const db:any=getPortalSupabase();
      const {error:dbErr}=await db.from('investment_leads').insert({
       kind,project_code:projectCode,full_name:name.trim(),email:email.trim().toLowerCase(),phone:phone.trim(),
       country:country.trim(),requested_amount:kind==='placement'?Number(amount):null,currency,notes:notes.trim(),consent:true,source_path:window.location.pathname
      });
      if(dbErr)throw new Error(dbErr.message);ok=true;
    }else{
      const response=await fetch('/api/investment/intake',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
      if(!response.ok)throw new Error(response.status===429?(fr?'Trop de demandes récentes pour cette adresse.':'Too many recent enquiries.'):(fr?'Envoi indisponible. Réessayez.':'Unable to submit. Please retry.'));
      ok=true;
    }
    if(ok){
      setSent(true);
      // CRM persistence is primary. Notify the existing mail workflow where configured.
      void fetch('/api/forms',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({
        locale,formKind:'investment-investor',sourcePath:window.location.pathname,fields:{
          'Full name':name,Email:email,Phone:phone,'Country of residence':country,
          'Project':v.name,'Interest type':kind,'Indicative amount':kind==='placement'?amount+' '+currency:'Access request',
          Message:notes,Consent:'Yes'
        }
      })}).catch(()=>{});
    }
  }catch(e){setError(e instanceof Error?e.message:(fr?'Erreur de transmission':'Submission failed'));}
  finally{setBusy(false);}
 }
 if(sent)return <div role="status" className="rounded-xl border border-[#cbd9d6] bg-[#eef4f1] p-8 text-[#193344]"><Check size={28}/><h2 className="mt-5 text-2xl font-medium">{fr?'Demande enregistrée':'Enquiry recorded'}</h2><p className="mt-3 text-sm leading-7">{fr?'Votre demande concernant '+v.name+' a été enregistrée dans notre espace de suivi. Un membre de l’équipe pourra vous recontacter pour connaître les prochaines étapes.':'Your enquiry for '+v.name+' has been recorded in our tracking system. Our team can contact you about next steps.'}</p><p className="mt-4 text-xs leading-6 text-[#52636b]">{fr?'Aucune somme n’a été débitée et aucun investissement n’a été souscrit.':'No funds have been charged and no investment was executed.'}</p></div>;
 return <form onSubmit={submit} className="space-y-5">
  <div className="grid grid-cols-2 gap-2 rounded-lg bg-[#eaf0f2] p-1">
    <button type="button" onClick={()=>setKind('placement')} className={'rounded-md p-3 text-sm '+(kind==='placement'?'bg-white text-[#193344] shadow-sm':'text-[#566873]')}>{fr?'Demander un placement':'Investment enquiry'}</button>
    <button type="button" onClick={()=>setKind('project_access')} className={'rounded-md p-3 text-sm '+(kind==='project_access'?'bg-white text-[#193344] shadow-sm':'text-[#566873]')}>{fr?'Accéder au projet':'Project access request'}</button>
  </div>
  <div className="grid gap-5 sm:grid-cols-2">
    <label className="text-sm font-medium">{fr?'Nom et prénom':'Full name'} *<input required minLength={2} maxLength={130} autoComplete="name" className={inp} value={name} onChange={e=>setName(e.target.value)}/></label>
    <label className="text-sm font-medium">Email *<input type="email" required maxLength={180} autoComplete="email" className={inp} value={email} onChange={e=>setEmail(e.target.value)}/></label>
    <label className="text-sm font-medium">{fr?'Téléphone':'Phone'}<input type="tel" maxLength={50} autoComplete="tel" className={inp} value={phone} onChange={e=>setPhone(e.target.value)}/></label>
    <label className="text-sm font-medium">{fr?'Pays de résidence':'Country of residence'}<input maxLength={90} autoComplete="country-name" className={inp} value={country} onChange={e=>setCountry(e.target.value)}/></label>
    {kind==='placement'&&<><label className="text-sm font-medium">{fr?'Montant envisagé':'Indicative amount'} *<input required type="number" min={1000} max={100000000} step={100} className={inp} value={amount} onChange={e=>setAmount(e.target.value)}/></label><label className="text-sm font-medium">{fr?'Devise':'Currency'}<select className={inp} value={currency} onChange={e=>setCurrency(e.target.value)}><option>EUR</option><option>USD</option><option>AED</option></select></label></>}
  </div>
  <label className="block text-sm font-medium">{fr?'Message ou questions complémentaires':'Message or questions'}<textarea rows={compact?3:4} maxLength={3000} className={inp} value={notes} onChange={e=>setNotes(e.target.value)} placeholder={fr?'Vos objectifs et les informations souhaitées':'Your objectives and requested information'}/></label>
  <label className="sr-only" aria-hidden="true">Website<input tabIndex={-1} autoComplete="off" value={bot} onChange={e=>setBot(e.target.value)}/></label>
  <label className="flex items-start gap-3 text-xs leading-6 text-[#52616b]"><input type="checkbox" required checked={consent} onChange={e=>setConsent(e.target.checked)} className="mt-1 h-4 w-4 accent-[#193344]"/><span>{fr?'J’accepte le traitement de cette demande et d’être recontacté à ce sujet.':'I agree to the processing of this enquiry and to be contacted about it.'} <Link className="underline" href="/confidentialite">{fr?'Confidentialité':'Privacy'}</Link>.</span></label>
  {error&&<p role="alert" className="rounded-md bg-red-50 p-3 text-sm text-red-800">{error}</p>}
  <button disabled={busy} type="submit" className="flex w-full items-center justify-center gap-3 rounded-lg bg-[#193344] px-6 py-4 text-sm font-medium text-white hover:bg-[#305568] disabled:opacity-60">{busy?(fr?'Transmission…':'Sending…'):(kind==='placement'?(fr?'Envoyer ma demande de placement':'Send investment enquiry'):(fr?'Demander l’accès au projet':'Request project access'))}<ArrowRight size={17}/></button>
  <p className="text-xs leading-6 text-[#667781]">{fr?'La demande est sans engagement et ne constitue pas une souscription. Aucun paiement n’est requis.':'This is a non-binding enquiry, not a subscription. No payment is required.'}</p>
 </form>;
}
