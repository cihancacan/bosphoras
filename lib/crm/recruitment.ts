export type RecruitmentApplication = {
  id:string; full_name:string; email:string; phone:string|null; locale:string;
  spoken_languages:string; role_area:string; experience_summary:string;
  personal_perspective:string|null; linkedin_url:string|null; cv_filename:string|null;
  cv_attached:boolean; status:string; created_at:string;
};

export const recruitmentStatuses:Record<string,string> = {
  received:'Reçue',reviewing:'En cours d’examen',contacted:'Contact établi',shortlisted:'Présélectionnée',closed:'Clôturée',
};
export const recruitmentAreas:Record<string,string> = {
  'client-relations':'Relations clients','property-advisory':'Conseil immobilier',concierge:'Conciergerie',
  operations:'Opérations & suivi',general:'Candidature spontanée','travel-hospitality':'Voyages & réservations hôtelières',
};
const normalize=(value:string)=>value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();

export function filterRecruitmentApplications(rows:RecruitmentApplication[],search:string,status:string,language:string) {
  const query=normalize(search);
  return rows.filter(row=>
    (status==='all'||row.status===status) && (language==='all'||row.locale===language) &&
    (!query||normalize([row.full_name,row.email,row.phone,row.spoken_languages,recruitmentAreas[row.role_area]||row.role_area].filter(Boolean).join(' ')).includes(query))
  );
}

// Read the application records themselves, including applicants who already had a CRM contact.
// Pagination avoids silently hiding applications after the server's default row limit.
export async function loadRecruitmentApplications(client:ReturnType<typeof import('@/lib/portalSupabase').getPortalSupabase>) {
  const rows:RecruitmentApplication[]=[];
  const pageSize=200;
  for(let offset=0;;offset+=pageSize){
    const {data,error}=await client.from('recruitment_applications')
      .select('id,full_name,email,phone,locale,spoken_languages,role_area,experience_summary,personal_perspective,linkedin_url,cv_filename,cv_attached,status,created_at')
      .order('created_at',{ascending:false}).order('id',{ascending:false}).range(offset,offset+pageSize-1);
    if(error)throw error;
    const batch=(data||[]) as RecruitmentApplication[];
    rows.push(...batch);
    if(batch.length<pageSize)return rows;
  }
}
