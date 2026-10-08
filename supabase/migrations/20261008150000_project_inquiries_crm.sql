create table if not exists public.project_inquiries (
  id uuid primary key default gen_random_uuid(),
  listing_id uuid not null references public.property_listings(id) on delete restrict,
  project_id uuid references public.real_estate_projects(id) on delete set null,
  full_name text not null check (char_length(full_name) between 2 and 160),
  email text not null check (char_length(email) between 5 and 254 and position('@' in email)>1),
  phone text check (phone is null or char_length(phone)<=60),
  budget text check (budget is null or char_length(budget)<=100),
  message text check (message is null or char_length(message)<=2000),
  locale text not null default 'fr' check (locale in ('fr','en','ru','ar')),
  accepts_contact boolean not null default false check (accepts_contact),
  wants_similar_options boolean not null default false,
  status text not null default 'new' check (status in ('new','contacted','qualified','converted','closed')),
  crm_contact_id uuid references public.crm_contacts(id) on delete set null,
  crm_request_id uuid references public.crm_contact_requests(id) on delete set null,
  created_at timestamptz not null default now()
);

create index if not exists project_inquiries_project_created_idx on public.project_inquiries(project_id,created_at desc);
create index if not exists project_inquiries_listing_created_idx on public.project_inquiries(listing_id,created_at desc);

alter table public.project_inquiries enable row level security;
grant insert on public.project_inquiries to anon, authenticated;
grant select, insert, update, delete on public.project_inquiries to authenticated;

create policy "Public may request a published project" on public.project_inquiries
for insert to anon, authenticated
with check (
  status='new' and accepts_contact=true and crm_contact_id is null and crm_request_id is null
  and project_id is not null
  and exists (
    select 1 from public.property_listings l
    where l.id=listing_id and l.real_estate_project_id=project_id
      and l.published=true and l.review_status='approved'
      and l.deleted_at is null
  )
);

create policy "Admins manage project inquiries" on public.project_inquiries
for all to authenticated
using ((select public.is_admin()))
with check ((select public.is_admin()));

create or replace function public.route_project_inquiry_to_crm()
returns trigger language plpgsql security definer
set search_path=public,pg_temp
as $$
declare
  assigned_admin uuid;
  matching_contact uuid;
  created_request uuid;
  project_title text;
  city_name text;
begin
  select user_id into assigned_admin from public.profiles
    where role='admin' and status='active' order by user_id limit 1;
  if assigned_admin is null then return new; end if;

  select id into matching_contact from public.crm_contacts
    where owner_user_id=assigned_admin and lower(email)=lower(new.email)
    order by created_at desc limit 1;

  if matching_contact is null then
    insert into public.crm_contacts(
      owner_user_id,created_by,first_name,email,phone,language,source,status,lead_priority,notes,tags
    ) values (
      assigned_admin,assigned_admin,new.full_name,new.email,nullif(new.phone,''),
      new.locale,'Bosphoras project page','new','warm',
      'Demande projet immobilier via Bosphoras','{projet-web}'::text[]
    ) returning id into matching_contact;
  else
    update public.crm_contacts set
      phone=coalesce(nullif(phone,''),nullif(new.phone,'')),updated_at=now()
    where id=matching_contact;
  end if;

  select name,city into project_title,city_name from public.real_estate_projects where id=new.project_id;
  insert into public.crm_contact_requests(
    contact_id,owner_user_id,created_by,title,status,target_cities,notes
  ) values (
    matching_contact,assigned_admin,assigned_admin,
    'Intérêt programme : '||coalesce(project_title,'Projet immobilier'),
    'active',
    case when city_name is not null then array[city_name]::text[] else array[]::text[] end,
    'Projet : '||coalesce(project_title,'—')||
    E'\nBudget souhaité : '||coalesce(new.budget,'Non renseigné')||
    E'\nAlternatives autorisées : '||case when new.wants_similar_options then 'oui' else 'non' end||
    E'\nMessage : '||coalesce(new.message,'')||
    E'\nRéférence demande : '||new.id::text
  ) returning id into created_request;

  update public.project_inquiries set crm_contact_id=matching_contact,crm_request_id=created_request
  where id=new.id;
  return new;
end;
$$;
revoke all on function public.route_project_inquiry_to_crm() from public,anon,authenticated;
drop trigger if exists trg_project_inquiry_to_crm on public.project_inquiries;
create trigger trg_project_inquiry_to_crm
after insert on public.project_inquiries for each row
execute function public.route_project_inquiry_to_crm();