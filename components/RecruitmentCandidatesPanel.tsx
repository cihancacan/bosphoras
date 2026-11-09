'use client';

import {useEffect,useMemo,useState} from 'react';
import {getPortalSupabase} from '@/lib/portalSupabase';
import {careerLanguageNames} from '@/lib/careers/copy';
import {filterRecruitmentApplications,loadRecruitmentApplications,recruitmentAreas,recruitmentStatuses,type RecruitmentApplication} from '@/lib/crm/recruitment';

const input='min-h-[44px] w-full border border-[#cfd8e3] bg-white px-3 text-sm text-[#162334] focus:outline-none focus:ring-2 focus:ring-[#315d7c]';
function receivedAt(value:string){
  const date=new Date(value);
  return Number.isNaN(date.getTime())?'—':date.toLocaleString('fr-FR',{dateStyle:'medium',timeStyle:'short'});
}

export function RecruitmentCandidatesPanel(){
  const [applications,setApplications]=useState<RecruitmentApplication[]>([]);
  const [loading,setLoading]=useState(true);
  const [failed,setFailed]=useState(false);
  const [revision,setRevision]=useState(0);
  const [search,setSearch]=useState('');
  const [status,setStatus]=useState('all');
  const [language,setLanguage]=useState('all');
  const [selectedId,setSelectedId]=useState<string|null>(null);
  useEffect(()=>{
    let active=true;
    setLoading(true);setFailed(false);
    loadRecruitmentApplications(getPortalSupabase()).then(rows=>{
      if(active)setApplications(rows);
    }).catch(()=>{if(active)setFailed(true);}).finally(()=>{if(active)setLoading(false);});
    return ()=>{active=false;};
  },[revision]);
  const filtered=useMemo(()=>filterRecruitmentApplications(applications,search,status,language),[applications,search,status,language]);
  const selected=filtered.find(row=>row.id===selectedId)||filtered[0]||null;
  const languages=Object.entries(careerLanguageNames);
  return <section aria-labelledby="candidates-title" className="text-[#162334]">
    <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
      <div><h1 id="candidates-title" className="text-3xl font-semibold">Candidatures</h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-[#687685]">Les dossiers reçus depuis la page Carrières, réservés à l’administration.</p>
      </div>
      <button type="button" onClick={()=>setRevision(value=>value+1)} disabled={loading} className="min-h-[44px] border border-[#cfd8e3] bg-white px-4 text-sm disabled:opacity-50">Actualiser</button>
    </div>
    <div className="mb-5 grid gap-3 md:grid-cols-[2fr_1fr_1fr]">
      <label className="grid gap-2 text-sm">Rechercher un candidat<input value={search} onChange={event=>setSearch(event.target.value)} className={input} placeholder="Nom, e-mail, téléphone, métier…"/></label>
      <div className="grid gap-2 text-sm"><label htmlFor="candidate-status">Statut de la candidature</label><select id="candidate-status" value={status} onChange={event=>setStatus(event.target.value)} className={input}><option value="all">Tous les statuts</option>{Object.entries(recruitmentStatuses).map(([value,label])=><option key={value} value={value}>{label}</option>)}</select></div>
      <div className="grid gap-2 text-sm"><label htmlFor="candidate-language">Langue de candidature</label><select id="candidate-language" value={language} onChange={event=>setLanguage(event.target.value)} className={input}><option value="all">Toutes les langues</option>{languages.map(([value,label])=><option key={value} value={value}>{label}</option>)}</select></div>
    </div>
    {loading?<p role="status" className="mb-4 text-sm">Chargement des candidatures…</p>:null}
    {failed?<div role="alert" className="mb-4 border border-[#e0b5b5] bg-[#fff6f6] p-4 text-sm text-[#8b4040]">Impossible de charger les candidatures. <button type="button" onClick={()=>setRevision(value=>value+1)} className="underline">Réessayer</button></div>:null}
    <div className="grid gap-5 xl:grid-cols-[360px_minmax(0,1fr)]">
      <aside aria-label="Liste des candidats" className="min-w-0 border border-[#d9e1e8] bg-white">
        <p className="border-b border-[#e7edf2] p-4 text-sm"><strong>{filtered.length}</strong> candidature(s)</p>
        <div className="max-h-[640px] overflow-y-auto">
          {filtered.map(row=><button key={row.id} type="button" onClick={()=>setSelectedId(row.id)} aria-pressed={selected?.id===row.id} className={'block min-h-[90px] w-full border-b border-[#edf1f4] p-4 text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#315d7c] '+(selected?.id===row.id?'bg-[#edf4f7]':'hover:bg-[#f8fafb]')}>
            <strong className="block break-words text-sm">{row.full_name}</strong>
            <span className="mt-1 block text-xs text-[#526272]">{recruitmentAreas[row.role_area]||row.role_area}</span>
            <span className="mt-2 block text-xs text-[#687685]">{recruitmentStatuses[row.status]||row.status} · {careerLanguageNames[row.locale as keyof typeof careerLanguageNames]||row.locale}</span>
            <span className="mt-1 block text-xs text-[#687685]">{receivedAt(row.created_at)}</span>
          </button>)}
          {!loading&&!failed&&!filtered.length?<p className="p-5 text-sm text-[#687685]">{applications.length?'Aucun candidat avec ces filtres.':'Aucune candidature reçue.'}</p>:null}
        </div>
      </aside>
      {selected?<article aria-label="Dossier de candidature" className="min-w-0 space-y-6 border border-[#d9e1e8] bg-white p-5 md:p-8">
        <div><p className="text-xs font-semibold uppercase tracking-wider text-[#315d7c]">{recruitmentStatuses[selected.status]||selected.status}</p><h2 className="mt-2 break-words text-2xl font-semibold">{selected.full_name}</h2><p className="mt-2 text-sm text-[#687685]">{recruitmentAreas[selected.role_area]||selected.role_area}</p></div>
        <dl className="grid gap-5 text-sm sm:grid-cols-2">
          <div><dt className="mb-1 text-[#687685]">E-mail</dt><dd className="break-all"><a href={'mailto:'+selected.email} className="underline">{selected.email}</a></dd></div>
          <div><dt className="mb-1 text-[#687685]">Téléphone</dt><dd>{selected.phone?<a href={'tel:'+selected.phone.replace(/[^+0-9]/g,'')} className="underline">{selected.phone}</a>:'—'}</dd></div>
          <div><dt className="mb-1 text-[#687685]">Langue de candidature</dt><dd>{careerLanguageNames[selected.locale as keyof typeof careerLanguageNames]||selected.locale}</dd></div>
          <div><dt className="mb-1 text-[#687685]">Langues professionnelles</dt><dd className="break-words">{selected.spoken_languages}</dd></div>
          <div><dt className="mb-1 text-[#687685]">Reçue le</dt><dd>{receivedAt(selected.created_at)}</dd></div>
          <div><dt className="mb-1 text-[#687685]">Profil professionnel</dt><dd>{selected.linkedin_url?.startsWith('https://')?<a href={selected.linkedin_url} target="_blank" rel="noopener noreferrer" className="break-all underline">{selected.linkedin_url}</a>:'—'}</dd></div>
        </dl>
        <div className="border-t border-[#e7edf2] pt-5"><h3 className="font-semibold">Parcours et expérience</h3><p className="mt-3 whitespace-pre-wrap break-words text-sm leading-7">{selected.experience_summary}</p></div>
        <div className="border-t border-[#e7edf2] pt-5"><h3 className="font-semibold">Votre regard sur Bosphoras</h3><p className="mt-3 whitespace-pre-wrap break-words text-sm leading-7">{selected.personal_perspective||'Non renseigné'}</p></div>
        <div className="border-t border-[#e7edf2] pt-5 text-sm"><h3 className="font-semibold">CV</h3>{selected.cv_attached?<><p className="mt-2 break-all">{selected.cv_filename||'CV joint'}</p><p className="mt-2 text-[#687685]">À consulter dans l’e-mail de recrutement.</p></>:<p className="mt-2 text-[#687685]">Aucun CV joint.</p>}</div>
        <p className="break-all border-t border-[#e7edf2] pt-5 text-xs text-[#687685]">Référence de candidature : {selected.id}</p>
      </article>:<div className="flex min-h-[280px] items-center justify-center border border-dashed border-[#cfd8e3] p-6 text-center text-sm text-[#687685]">Sélectionnez une candidature pour consulter son dossier.</div>}
    </div>
  </section>;
}
