-- Recruitment applications — isolated records, private by default, routed to the existing CRM.
create schema if not exists recruitment_private;
revoke all on schema recruitment_private from public, anon, authenticated;

create table if not exists public.recruitment_applications (
  id uuid primary key default gen_random_uuid(),
  full_name text not null check (char_length(full_name) between 2 and 140),
  email text not null check (char_length(email) between 5 and 254 and email ~* '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'),
  phone text check (phone is null or char_length(phone)<=50),
  locale text not null default 'fr' check (locale in ('fr','en','ru','ar','tr','de','es','it','pt','zh')),
  spoken_languages text not null check (char_length(spoken_languages) between 2 and 180),
  role_area text not null check (role_area in ('client-relations','property-advisory','concierge','operations','general')),
  experience_summary text not null check (char_length(experience_summary) between 30 and 2000),
  linkedin_url text check (linkedin_url is null or char_length(linkedin_url)<=400),
  cv_filename text check (cv_filename is null or char_length(cv_filename)<=140),
  cv_attached boolean not null default false,
  consent boolean not null default false check (consent),
  status text not null default 'received' check (status in ('received','reviewing','contacted','shortlisted','closed')),
  crm_contact_id uuid references public.crm_contacts(id) on delete set null,
  crm_request_id uuid references public.crm_contact_requests(id) on delete set null,
  created_at timestamptz not null default now()
);
create index if not exists recruitment_applications_received_idx on public.recruitment_applications(created_at desc);
create index if not exists recruitment_applications_email_idx on public.recruitment_applications(lower(email));

alter table public.recruitment_applications enable row level security;
revoke all on table public.recruitment_applications from public, anon, authenticated;
grant insert(id,full_name,email,phone,locale,spoken_languages,role_area,experience_summary,linkedin_url,cv_filename,cv_attached,consent) on public.recruitment_applications to anon;
grant select, insert, update, delete on public.recruitment_applications to authenticated;

drop policy if exists "Visitors submit recruitment applications" on public.recruitment_applications;
create policy "Visitors submit recruitment applications" on public.recruitment_applications
for insert to anon
with check (status='received' and consent=true and crm_contact_id is null and crm_request_id is null);

drop policy if exists "Administrators manage recruitment applications" on public.recruitment_applications;
create policy "Administrators manage recruitment applications" on public.recruitment_applications
for all to authenticated
using ((select public.is_admin()))
with check ((select public.is_admin()));

create or replace function recruitment_private.send_application_to_crm()
returns trigger language plpgsql security definer
set search_path = ''
as $$
declare
  admin_id uuid;
  contact_id uuid;
  request_id uuid;
  contact_notes text;
begin
  select p.user_id into admin_id
  from public.profiles p where p.role='admin' and p.status='active'
  order by p.created_at limit 1;
  if admin_id is null then return new; end if;

  select c.id into contact_id from public.crm_contacts c
  where c.owner_user_id=admin_id and lower(c.email)=lower(new.email)
  order by c.created_at desc limit 1;

  contact_notes := 'Candidature via bosphoras.com/carrieres — profil recrutement.';
  if contact_id is null then
    insert into public.crm_contacts (
      owner_user_id,created_by,first_name,email,phone,language,source,status,lead_priority,notes,tags
    ) values (
      admin_id,admin_id,new.full_name,new.email,new.phone,new.locale,
      'Bosphoras — recrutement','new','warm',contact_notes,array['recrutement']::text[]
    ) returning id into contact_id;
  else
    update public.crm_contacts set
      tags = case when 'recrutement' = any(tags) then tags else array_append(tags,'recrutement') end,
      updated_at=now()
    where id=contact_id;
  end if;

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
drop trigger if exists trg_recruitment_application_crm on public.recruitment_applications;
create trigger trg_recruitment_application_crm
after insert on public.recruitment_applications
for each row execute function recruitment_private.send_application_to_crm();