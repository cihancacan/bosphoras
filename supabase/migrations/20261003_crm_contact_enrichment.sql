-- CRM contact enrichment: secondary coordinates, priority/tags and multiple investment requests.

alter table public.crm_contacts
  add column if not exists alternate_emails text[] not null default array[]::text[],
  add column if not exists alternate_phones text[] not null default array[]::text[],
  add column if not exists preferred_contact_method text,
  add column if not exists preferred_contact_time text,
  add column if not exists lead_priority text not null default 'warm',
  add column if not exists tags text[] not null default array[]::text[];

do $$
begin
  if not exists (select 1 from pg_constraint where conname='crm_contacts_lead_priority_check') then
    alter table public.crm_contacts
      add constraint crm_contacts_lead_priority_check
      check (lead_priority in ('hot','warm','cold'));
  end if;
end $$;

create table if not exists public.crm_contact_requests (
  id uuid primary key default gen_random_uuid(),
  contact_id uuid not null references public.crm_contacts(id) on delete cascade,
  owner_user_id uuid not null references auth.users(id) on delete cascade,
  partner_id uuid references public.partner_companies(id) on delete set null,
  title text not null default 'Demande complémentaire',
  status text not null default 'active',
  target_cities text[] not null default array[]::text[],
  target_types text[] not null default array[]::text[],
  budget_min numeric,
  budget_max numeric,
  capital_available numeric,
  currency text default 'EUR',
  investment_goal text,
  timeframe text,
  bedrooms_min integer,
  notes text,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

do $$
begin
  if not exists (select 1 from pg_constraint where conname='crm_contact_requests_status_check') then
    alter table public.crm_contact_requests
      add constraint crm_contact_requests_status_check
      check (status in ('active','paused','converted','closed'));
  end if;
end $$;

alter table public.crm_contact_requests enable row level security;

grant select,insert,update,delete on public.crm_contact_requests to authenticated;
revoke all on public.crm_contact_requests from anon;

drop policy if exists "Admins manage all CRM contact requests" on public.crm_contact_requests;
create policy "Admins manage all CRM contact requests"
on public.crm_contact_requests for all to authenticated
using ((select public.is_admin()))
with check ((select public.is_admin()));

drop policy if exists "Partners read assigned CRM contact requests" on public.crm_contact_requests;
create policy "Partners read assigned CRM contact requests"
on public.crm_contact_requests for select to authenticated
using (
  owner_user_id=(select auth.uid())
  and partner_id=(select public.current_partner_id())
  and (select public.is_active_user())
);

drop policy if exists "Partners create assigned CRM contact requests" on public.crm_contact_requests;
create policy "Partners create assigned CRM contact requests"
on public.crm_contact_requests for insert to authenticated
with check (
  owner_user_id=(select auth.uid())
  and partner_id=(select public.current_partner_id())
  and created_by=(select auth.uid())
  and (select public.is_active_user())
);

drop policy if exists "Partners update assigned CRM contact requests" on public.crm_contact_requests;
create policy "Partners update assigned CRM contact requests"
on public.crm_contact_requests for update to authenticated
using (
  owner_user_id=(select auth.uid())
  and partner_id=(select public.current_partner_id())
  and (select public.is_active_user())
)
with check (
  owner_user_id=(select auth.uid())
  and partner_id=(select public.current_partner_id())
  and (select public.is_active_user())
);

drop policy if exists "Partners delete assigned CRM contact requests" on public.crm_contact_requests;
create policy "Partners delete assigned CRM contact requests"
on public.crm_contact_requests for delete to authenticated
using (
  owner_user_id=(select auth.uid())
  and partner_id=(select public.current_partner_id())
  and (select public.is_active_user())
);

create index if not exists crm_contact_requests_contact_idx on public.crm_contact_requests(contact_id);
create index if not exists crm_contact_requests_owner_idx on public.crm_contact_requests(owner_user_id);
create index if not exists crm_contact_requests_status_idx on public.crm_contact_requests(status);
