create table if not exists public.project_shortlist_inquiries(
  id uuid primary key default gen_random_uuid(),
  listing_ids uuid[] not null,
  full_name text not null check (char_length(full_name) between 2 and 160),
  email text not null check (char_length(email) between 5 and 254 and position('@' in email)>1),
  phone text check (phone is null or char_length(phone)<=60),
  budget text check (budget is null or char_length(budget)<=100),
  investment_goal text check (investment_goal is null or char_length(investment_goal)<=150),
  desired_timeline text check (desired_timeline is null or char_length(desired_timeline)<=100),
  message text check (message is null or char_length(message)<=2000),
  locale text not null default 'fr' check (locale in ('fr','en','ru','ar')),
  accepts_contact boolean not null default false check (accepts_contact),
  wants_alternatives boolean not null default false,
  crm_contact_id uuid references public.crm_contacts(id) on delete set null,
  crm_request_id uuid references public.crm_contact_requests(id) on delete set null,
  created_at timestamptz not null default now(),
  constraint project_shortlist_items_count check(cardinality(listing_ids) between 2 and 6)
);
alter table public.project_shortlist_inquiries enable row level security;
grant insert on public.project_shortlist_inquiries to anon,authenticated;
grant select,update,delete on public.project_shortlist_inquiries to authenticated;

drop policy if exists "Visitors submit approved project shortlists" on public.project_shortlist_inquiries;
create policy "Visitors submit approved project shortlists" on public.project_shortlist_inquiries
for insert to anon,authenticated
with check (
  accepts_contact=true and crm_contact_id is null and crm_request_id is null
  and cardinality(listing_ids) between 2 and 6
  and (select count(*) from public.property_listings l where l.id=any(listing_ids)
    and l.published=true and l.review_status='approved' and l.deleted_at is null
    and l.real_estate_project_id is not null)=cardinality(listing_ids)
);

drop policy if exists "Admins manage shortlists" on public.project_shortlist_inquiries;
create policy "Admins manage shortlists" on public.project_shortlist_inquiries for all to authenticated
using ((select public.is_admin())) with check ((select public.is_admin()));

create or replace function public.shortlist_lead_to_crm() returns trigger
language plpgsql security definer set search_path=public,pg_temp as $$
declare owner_admin uuid; existing_contact uuid; new_request uuid; names text; cities text[];
begin
 select user_id into owner_admin from public.profiles where role='admin' and status='active' order by user_id limit 1;
 if owner_admin is null then return new; end if;
 select id into existing_contact from public.crm_contacts where owner_user_id=owner_admin
    and lower(email)=lower(new.email) order by created_at desc limit 1;
 if existing_contact is null then
   insert into public.crm_contacts(owner_user_id,created_by,first_name,email,phone,language,source,status,lead_priority,notes,tags)
   values(owner_admin,owner_admin,new.full_name,new.email,nullif(new.phone,''),new.locale,'Bosphoras project shortlist','new','hot',
       'Sélection de plusieurs projets immobiliers','{comparaison-projets}'::text[])
   returning id into existing_contact;
 else
   update public.crm_contacts set phone=coalesce(nullif(phone,''),nullif(new.phone,'')),updated_at=now()
   where id=existing_contact;
 end if;
 select string_agg(coalesce(l.title->>'fr',l.external_id),', ' order by l.created_at),
   array_agg(distinct l.city_name)
 into names,cities from public.property_listings l where l.id=any(new.listing_ids);
 insert into public.crm_contact_requests(contact_id,owner_user_id,created_by,title,status,target_cities,notes)
 values(existing_contact,owner_admin,owner_admin,
   'Comparaison projets : '||coalesce(names,'Sélection immobilière'),
   'active',coalesce(cities,array[]::text[]),
   'Projets sélectionnés : '||coalesce(names,'—')||
   E'\nListe des annonces : '||array_to_string(new.listing_ids,', ')||
   E'\nBudget : '||coalesce(new.budget,'Non indiqué')||
   E'\nObjectif : '||coalesce(new.investment_goal,'Non indiqué')||
   E'\nCalendrier : '||coalesce(new.desired_timeline,'Non indiqué')||
   E'\nAutorise alternatives : '||case when new.wants_alternatives then 'oui' else 'non' end||
   E'\nDemande : '||coalesce(new.message,'')||
   E'\nRéf. : '||new.id::text
 ) returning id into new_request;
 update public.project_shortlist_inquiries set crm_contact_id=existing_contact,crm_request_id=new_request where id=new.id;
 return new;
end; $$;
revoke all on function public.shortlist_lead_to_crm() from public,anon,authenticated;
drop trigger if exists on_shortlist_inquiry_to_crm on public.project_shortlist_inquiries;
create trigger on_shortlist_inquiry_to_crm after insert on public.project_shortlist_inquiries
for each row execute function public.shortlist_lead_to_crm();