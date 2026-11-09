-- Optional candidate perspective; existing applications and access policies are retained.
alter table public.recruitment_applications add column personal_perspective text
  constraint recruitment_applications_personal_perspective_check check (personal_perspective is null or char_length(personal_perspective)<=1500);
grant insert(personal_perspective) on public.recruitment_applications to anon;

create or replace function recruitment_private.send_application_to_crm()
returns trigger language plpgsql security definer
set search_path = ''
as $$
declare
  admin_id uuid;
  contact_id uuid;
  request_id uuid;
  contact_notes text;
  contact_phone text;
  attempt integer;
begin
  select p.user_id into admin_id
  from public.profiles p where p.role='admin' and p.status='active'
  order by p.created_at limit 1;
  if admin_id is null then return new; end if;

  -- Email identifies an existing contact globally. Keep ownership and personal data intact.
  -- A shared phone alone never merges two applicants; retain it in the application/request.
  contact_notes := 'Candidature via bosphoras.com/carrieres — profil recrutement.';
  for attempt in 1..3 loop
    select c.id into contact_id from public.crm_contacts c
    where lower(btrim(c.email))=lower(btrim(new.email))
    order by c.created_at desc limit 1;
    exit when contact_id is not null;

    contact_phone := new.phone;
    if length(regexp_replace(coalesce(contact_phone,''),'[^0-9]+','','g'))>=7
      and exists (
        select 1 from public.crm_contacts c
        where regexp_replace(coalesce(c.phone,''),'[^0-9]+','','g')
          =regexp_replace(contact_phone,'[^0-9]+','','g')
      ) then contact_phone := null;
    end if;
    begin
      insert into public.crm_contacts (
        owner_user_id,created_by,first_name,email,phone,language,source,status,lead_priority,notes,tags
      ) values (
        admin_id,admin_id,new.full_name,new.email,contact_phone,new.locale,
        'Bosphoras — recrutement','new','warm',contact_notes,array['recrutement']::text[]
      ) returning id into contact_id;
      exit;
    exception when sqlstate 'P0001' then
      -- Retry only known duplicate races; retain every other database failure.
      if SQLERRM not in ('DUPLICATE_CRM_EMAIL','DUPLICATE_CRM_PHONE') or attempt=3 then raise; end if;
    end;
  end loop;

  -- Recruitment information stays in the administrator's request, never on a partner's contact.
  update public.crm_contacts set
    tags = case when 'recrutement' = any(coalesce(tags,array[]::text[])) then tags
      else array_append(coalesce(tags,array[]::text[]),'recrutement') end,
    updated_at=now()
  where id=contact_id and owner_user_id=admin_id;

  insert into public.crm_contact_requests(
    contact_id,owner_user_id,created_by,title,status,notes
  ) values (
    contact_id,admin_id,admin_id,
    'Candidature : '||replace(new.role_area,'-',' '),
    'active',
    'Nom : '||new.full_name||E'\nEmail : '||new.email||
    E'\nTéléphone : '||coalesce(new.phone,'—')||
    E'\nLangue de réponse : '||new.locale||
    E'\nLangues parlées : '||new.spoken_languages||
    E'\nService : '||new.role_area||
    E'\nExpérience : '||new.experience_summary||
    case when nullif(btrim(new.personal_perspective),'') is null then '' else E'\nVotre regard sur Bosphoras : '||new.personal_perspective end||
    E'\nProfil : '||coalesce(new.linkedin_url,'—')||
    E'\nCV : '||case when new.cv_attached then 'Transmis au destinataire par email (pièce jointe)' else 'Non joint' end||
    E'\nCandidature ID : '||new.id::text
  ) returning id into request_id;
  update public.recruitment_applications
  set crm_contact_id=contact_id,crm_request_id=request_id where id=new.id;
  return new;
end;
$$;
revoke all on function recruitment_private.send_application_to_crm() from public,anon,authenticated;
