
-- Bosphoras Real Estate Operating System
-- Consolidates project/unit inventory, transaction workflow, finance, CRM matching and RLS.

alter table public.profiles
  add column if not exists workspace_role text,
  add column if not exists permissions jsonb not null default '{}'::jsonb;

update public.profiles
set workspace_role=case when role='admin' then 'super_admin' else 'partner' end
where workspace_role is null;

do $$ begin
  alter table public.profiles add constraint profiles_workspace_role_check
    check (workspace_role in ('super_admin','sales_manager','advisor','operations','finance','partner','read_only'));
exception when duplicate_object then null;
end $$;

create table if not exists public.developers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  legal_name text,
  country_code text,
  city text,
  website text,
  email text,
  phone text,
  whatsapp text,
  contact_name text,
  source_system text,
  source_external_id text,
  commission_type text not null default 'custom' check (commission_type in ('percent','fixed','custom')),
  commission_rate numeric,
  fixed_fee numeric,
  default_currency text not null default 'EUR',
  payment_terms text,
  kyc_status text not null default 'pending' check (kyc_status in ('pending','verified','rejected','expired')),
  agreement_status text not null default 'pending' check (agreement_status in ('pending','signed','expired','suspended')),
  rating integer check (rating between 1 and 5),
  notes text,
  active boolean not null default true,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.real_estate_projects (
  id uuid primary key default gen_random_uuid(),
  developer_id uuid references public.developers(id) on delete set null,
  partner_id uuid references public.partner_companies(id) on delete set null,
  external_id text,
  source_system text,
  source_url text,
  name text not null,
  name_i18n jsonb not null default '{}'::jsonb,
  country_code text not null default 'TR',
  country_name text,
  city text,
  district text,
  address text,
  latitude numeric,
  longitude numeric,
  status text not null default 'draft' check (status in ('draft','active','paused','completed','archived')),
  sales_status text not null default 'available' check (sales_status in ('prelaunch','available','limited','sold_out','closed')),
  completion_date date,
  handover_text text,
  construction_progress numeric check (construction_progress between 0 and 100),
  currency text not null default 'EUR',
  price_min numeric,
  price_max numeric,
  entry_capital_min numeric,
  service_charge numeric,
  service_charge_unit text,
  unit_count integer,
  available_count integer,
  payment_plan jsonb not null default '[]'::jsonb,
  amenities jsonb not null default '[]'::jsonb,
  highlights jsonb not null default '[]'::jsonb,
  description jsonb not null default '{}'::jsonb,
  images text[] not null default array[]::text[],
  brochure_url text,
  floorplan_url text,
  internal_notes text,
  source_last_synced_at timestamptz,
  last_verified_at timestamptz,
  created_by uuid references auth.users(id) on delete set null,
  updated_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.project_units (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.real_estate_projects(id) on delete cascade,
  listing_id uuid references public.property_listings(id) on delete set null,
  external_id text,
  source_system text,
  unit_number text,
  building text,
  block text,
  floor text,
  unit_type text,
  bedrooms integer,
  bathrooms integer,
  view text,
  orientation text,
  gross_area_m2 numeric,
  net_area_m2 numeric,
  balcony_area_m2 numeric,
  parking_spaces integer,
  currency text not null default 'EUR',
  list_price numeric,
  cash_price numeric,
  installment_price numeric,
  discount_pct numeric,
  entry_capital numeric,
  status text not null default 'available' check (status in ('available','option','reserved','deposit_received','contracted','sold','withdrawn')),
  option_expires_at timestamptz,
  payment_plan jsonb not null default '[]'::jsonb,
  handover_date date,
  source_updated_at timestamptz,
  last_verified_at timestamptz,
  metadata jsonb not null default '{}'::jsonb,
  created_by uuid references auth.users(id) on delete set null,
  updated_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.project_unit_history (
  id bigserial primary key,
  unit_id uuid not null references public.project_units(id) on delete cascade,
  event_type text not null check (event_type in ('created','price','status','availability','sync','manual')),
  old_values jsonb,
  new_values jsonb,
  changed_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);

alter table public.crm_contacts
  add column if not exists target_yield_pct numeric,
  add column if not exists financing_required boolean,
  add column if not exists visa_or_residency_goal text,
  add column if not exists preferred_delivery_before date,
  add column if not exists min_surface_m2 numeric,
  add column if not exists max_entry_capital numeric,
  add column if not exists must_haves jsonb not null default '[]'::jsonb,
  add column if not exists excluded_areas text[] not null default array[]::text[];

alter table public.crm_contact_requests
  add column if not exists target_yield_pct numeric,
  add column if not exists financing_required boolean,
  add column if not exists visa_or_residency_goal text,
  add column if not exists preferred_delivery_before date,
  add column if not exists min_surface_m2 numeric,
  add column if not exists max_entry_capital numeric,
  add column if not exists must_haves jsonb not null default '[]'::jsonb,
  add column if not exists excluded_areas text[] not null default array[]::text[];

alter table public.crm_deals
  add column if not exists project_id uuid references public.real_estate_projects(id) on delete set null,
  add column if not exists unit_id uuid references public.project_units(id) on delete set null,
  add column if not exists final_sale_price numeric,
  add column if not exists closing_date date,
  add column if not exists reservation_amount numeric,
  add column if not exists last_stage_changed_at timestamptz default now();

create table if not exists public.deal_offers (
  id uuid primary key default gen_random_uuid(),
  deal_id uuid not null references public.crm_deals(id) on delete cascade,
  listing_id uuid references public.property_listings(id) on delete set null,
  project_id uuid references public.real_estate_projects(id) on delete set null,
  unit_id uuid references public.project_units(id) on delete set null,
  version integer not null default 1,
  currency text not null default 'EUR',
  list_price numeric,
  proposed_price numeric not null,
  seller_floor_price_snapshot numeric,
  discount_pct numeric,
  terms text,
  expires_at timestamptz,
  status text not null default 'draft' check (status in ('draft','sent','countered','accepted','rejected','expired','cancelled')),
  counter_price numeric,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.deal_reservations (
  id uuid primary key default gen_random_uuid(),
  deal_id uuid not null references public.crm_deals(id) on delete cascade,
  unit_id uuid references public.project_units(id) on delete set null,
  reservation_reference text,
  amount numeric,
  currency text not null default 'EUR',
  reserved_at timestamptz not null default now(),
  expires_at timestamptz,
  status text not null default 'pending' check (status in ('pending','confirmed','cancelled','expired','completed')),
  payment_method text,
  receipt_reference text,
  notes text,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.deal_payments (
  id uuid primary key default gen_random_uuid(),
  deal_id uuid not null references public.crm_deals(id) on delete cascade,
  reservation_id uuid references public.deal_reservations(id) on delete set null,
  unit_id uuid references public.project_units(id) on delete set null,
  sequence_no integer,
  label text not null,
  payment_type text not null default 'installment' check (payment_type in ('reservation','deposit','installment','handover','fee','tax','commission','other')),
  percentage numeric,
  amount numeric not null,
  amount_paid numeric not null default 0,
  currency text not null default 'EUR',
  due_date date,
  status text not null default 'planned' check (status in ('planned','due','partial','paid','overdue','cancelled')),
  paid_at timestamptz,
  payment_reference text,
  evidence_path text,
  notes text,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.deal_stage_history (
  id bigserial primary key,
  deal_id uuid not null references public.crm_deals(id) on delete cascade,
  from_stage text,
  to_stage text not null,
  changed_by uuid references auth.users(id) on delete set null,
  note text,
  created_at timestamptz not null default now()
);

create table if not exists public.client_property_shortlist (
  id uuid primary key default gen_random_uuid(),
  contact_id uuid not null references public.crm_contacts(id) on delete cascade,
  request_id uuid references public.crm_contact_requests(id) on delete set null,
  listing_id uuid references public.property_listings(id) on delete cascade,
  project_id uuid references public.real_estate_projects(id) on delete cascade,
  unit_id uuid references public.project_units(id) on delete cascade,
  score integer check (score between 0 and 100),
  status text not null default 'shortlisted' check (status in ('shortlisted','sent','favorite','rejected','visited','reserved')),
  notes text,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (listing_id is not null or project_id is not null or unit_id is not null)
);

alter table public.crm_activities
  add column if not exists priority text not null default 'normal',
  add column if not exists reminder_at timestamptz;

alter table public.property_documents
  add column if not exists contact_id uuid references public.crm_contacts(id) on delete set null,
  add column if not exists deal_id uuid references public.crm_deals(id) on delete cascade,
  add column if not exists status text not null default 'active',
  add column if not exists visibility text not null default 'internal',
  add column if not exists expires_at date,
  add column if not exists version integer not null default 1,
  add column if not exists storage_bucket text not null default 'deal-documents';

create unique index if not exists developers_source_external_uidx on public.developers(source_system,source_external_id) where source_system is not null and source_external_id is not null;
create index if not exists developers_name_idx on public.developers(lower(name));
create index if not exists developers_created_by_idx on public.developers(created_by);
create unique index if not exists real_estate_projects_source_uidx on public.real_estate_projects(source_system,external_id) where source_system is not null and external_id is not null;
create index if not exists real_estate_projects_market_idx on public.real_estate_projects(country_code,city,district,sales_status);
create index if not exists real_estate_projects_developer_idx on public.real_estate_projects(developer_id);
create index if not exists real_estate_projects_partner_idx on public.real_estate_projects(partner_id);
create index if not exists real_estate_projects_created_by_idx on public.real_estate_projects(created_by);
create index if not exists real_estate_projects_updated_by_idx on public.real_estate_projects(updated_by);
create unique index if not exists project_units_source_uidx on public.project_units(project_id,source_system,external_id) where external_id is not null;
create index if not exists project_units_project_status_idx on public.project_units(project_id,status);
create index if not exists project_units_price_idx on public.project_units(currency,list_price);
create index if not exists project_units_listing_idx on public.project_units(listing_id);
create index if not exists project_units_created_by_idx on public.project_units(created_by);
create index if not exists project_units_updated_by_idx on public.project_units(updated_by);
create index if not exists project_unit_history_unit_idx on public.project_unit_history(unit_id,created_at desc);
create index if not exists project_unit_history_changed_by_idx on public.project_unit_history(changed_by);
create index if not exists crm_deals_project_id_idx on public.crm_deals(project_id);
create index if not exists crm_deals_unit_id_idx on public.crm_deals(unit_id);
create index if not exists property_listing_internal_created_by_idx on public.property_listing_internal(created_by);
create index if not exists deal_offers_deal_idx on public.deal_offers(deal_id,created_at desc);
create index if not exists deal_offers_listing_idx on public.deal_offers(listing_id);
create index if not exists deal_offers_project_idx on public.deal_offers(project_id);
create index if not exists deal_offers_unit_idx on public.deal_offers(unit_id);
create index if not exists deal_offers_created_by_idx on public.deal_offers(created_by);
create index if not exists deal_reservations_deal_idx on public.deal_reservations(deal_id,created_at desc);
create index if not exists deal_reservations_unit_idx on public.deal_reservations(unit_id);
create index if not exists deal_reservations_created_by_idx on public.deal_reservations(created_by);
create index if not exists deal_payments_deal_due_idx on public.deal_payments(deal_id,due_date);
create index if not exists deal_payments_status_due_idx on public.deal_payments(status,due_date);
create index if not exists deal_payments_reservation_idx on public.deal_payments(reservation_id);
create index if not exists deal_payments_unit_idx on public.deal_payments(unit_id);
create index if not exists deal_payments_created_by_idx on public.deal_payments(created_by);
create index if not exists deal_stage_history_deal_idx on public.deal_stage_history(deal_id,created_at desc);
create index if not exists deal_stage_history_changed_by_idx on public.deal_stage_history(changed_by);
create index if not exists client_property_shortlist_contact_idx on public.client_property_shortlist(contact_id,status);
create index if not exists client_property_shortlist_listing_idx on public.client_property_shortlist(listing_id);
create index if not exists client_property_shortlist_project_idx on public.client_property_shortlist(project_id);
create index if not exists client_property_shortlist_unit_idx on public.client_property_shortlist(unit_id);
create index if not exists client_property_shortlist_request_idx on public.client_property_shortlist(request_id);
create index if not exists client_property_shortlist_created_by_idx on public.client_property_shortlist(created_by);
create unique index if not exists client_property_shortlist_unique_target on public.client_property_shortlist(contact_id,listing_id,project_id,unit_id) nulls not distinct;
create index if not exists property_documents_deal_idx on public.property_documents(deal_id,created_at desc);
create index if not exists property_documents_contact_idx on public.property_documents(contact_id);

create or replace function public.touch_updated_at()
returns trigger language plpgsql set search_path=public as $$
begin new.updated_at=now(); return new; end; $$;

create or replace function public.log_unit_change()
returns trigger language plpgsql security invoker set search_path=public as $$
declare evt text := 'manual';
begin
  if tg_op='INSERT' then
    insert into public.project_unit_history(unit_id,event_type,new_values,changed_by) values(new.id,'created',to_jsonb(new),auth.uid());
    return new;
  end if;
  if old.status is distinct from new.status then evt:='status';
  elsif old.list_price is distinct from new.list_price or old.cash_price is distinct from new.cash_price or old.installment_price is distinct from new.installment_price then evt:='price';
  end if;
  insert into public.project_unit_history(unit_id,event_type,old_values,new_values,changed_by) values(new.id,evt,to_jsonb(old),to_jsonb(new),auth.uid());
  return new;
end; $$;

create or replace function public.set_deal_stage_changed_at()
returns trigger language plpgsql security invoker set search_path=public as $$
begin if old.stage is distinct from new.stage then new.last_stage_changed_at=now(); end if; return new; end; $$;

create or replace function public.log_deal_stage_change_after()
returns trigger language plpgsql security invoker set search_path=public as $$
begin
  if tg_op='INSERT' then
    insert into public.deal_stage_history(deal_id,from_stage,to_stage,changed_by) values(new.id,null,new.stage,auth.uid());
  elsif old.stage is distinct from new.stage then
    insert into public.deal_stage_history(deal_id,from_stage,to_stage,changed_by) values(new.id,old.stage,new.stage,auth.uid());
  end if;
  return new;
end; $$;

drop trigger if exists trg_developers_touch on public.developers;
create trigger trg_developers_touch before update on public.developers for each row execute function public.touch_updated_at();
drop trigger if exists trg_projects_touch on public.real_estate_projects;
create trigger trg_projects_touch before update on public.real_estate_projects for each row execute function public.touch_updated_at();
drop trigger if exists trg_units_touch on public.project_units;
create trigger trg_units_touch before update on public.project_units for each row execute function public.touch_updated_at();
drop trigger if exists trg_offers_touch on public.deal_offers;
create trigger trg_offers_touch before update on public.deal_offers for each row execute function public.touch_updated_at();
drop trigger if exists trg_reservations_touch on public.deal_reservations;
create trigger trg_reservations_touch before update on public.deal_reservations for each row execute function public.touch_updated_at();
drop trigger if exists trg_payments_touch on public.deal_payments;
create trigger trg_payments_touch before update on public.deal_payments for each row execute function public.touch_updated_at();
drop trigger if exists trg_project_units_history on public.project_units;
create trigger trg_project_units_history after insert or update on public.project_units for each row execute function public.log_unit_change();
drop trigger if exists trg_crm_deals_stage_timestamp on public.crm_deals;
create trigger trg_crm_deals_stage_timestamp before update of stage on public.crm_deals for each row execute function public.set_deal_stage_changed_at();
drop trigger if exists trg_crm_deals_stage_history on public.crm_deals;
create trigger trg_crm_deals_stage_history after insert or update of stage on public.crm_deals for each row execute function public.log_deal_stage_change_after();

alter table public.developers enable row level security;
alter table public.real_estate_projects enable row level security;
alter table public.project_units enable row level security;
alter table public.project_unit_history enable row level security;
alter table public.deal_offers enable row level security;
alter table public.deal_reservations enable row level security;
alter table public.deal_payments enable row level security;
alter table public.deal_stage_history enable row level security;
alter table public.client_property_shortlist enable row level security;

drop policy if exists "Admins manage developers" on public.developers;
create policy "Admins manage developers" on public.developers for all to authenticated using ((select public.is_admin())) with check ((select public.is_admin()));
drop policy if exists "Active users read developers" on public.developers;
create policy "Active users read developers" on public.developers for select to authenticated using ((select public.is_active_user()));

drop policy if exists "Admins manage projects" on public.real_estate_projects;
create policy "Admins manage projects" on public.real_estate_projects for all to authenticated using ((select public.is_admin())) with check ((select public.is_admin()));
drop policy if exists "Partners read own projects" on public.real_estate_projects;
create policy "Partners read own projects" on public.real_estate_projects for select to authenticated using ((select public.is_active_user()) and partner_id=(select public.current_partner_id()));
drop policy if exists "Partners manage own projects" on public.real_estate_projects;
create policy "Partners manage own projects" on public.real_estate_projects for insert to authenticated with check ((select public.is_active_user()) and partner_id=(select public.current_partner_id()));
drop policy if exists "Partners update own projects" on public.real_estate_projects;
create policy "Partners update own projects" on public.real_estate_projects for update to authenticated using ((select public.is_active_user()) and partner_id=(select public.current_partner_id())) with check ((select public.is_active_user()) and partner_id=(select public.current_partner_id()));

drop policy if exists "Admins manage units" on public.project_units;
create policy "Admins manage units" on public.project_units for all to authenticated using ((select public.is_admin())) with check ((select public.is_admin()));
drop policy if exists "Partners read own units" on public.project_units;
create policy "Partners read own units" on public.project_units for select to authenticated using (exists(select 1 from public.real_estate_projects p where p.id=project_id and p.partner_id=(select public.current_partner_id())));
drop policy if exists "Partners insert own units" on public.project_units;
create policy "Partners insert own units" on public.project_units for insert to authenticated with check (exists(select 1 from public.real_estate_projects p where p.id=project_id and p.partner_id=(select public.current_partner_id())));
drop policy if exists "Partners update own units" on public.project_units;
create policy "Partners update own units" on public.project_units for update to authenticated using (exists(select 1 from public.real_estate_projects p where p.id=project_id and p.partner_id=(select public.current_partner_id()))) with check (exists(select 1 from public.real_estate_projects p where p.id=project_id and p.partner_id=(select public.current_partner_id())));

drop policy if exists "Admins read unit history" on public.project_unit_history;
create policy "Admins read unit history" on public.project_unit_history for select to authenticated using ((select public.is_admin()));
drop policy if exists "Partners read own unit history" on public.project_unit_history;
create policy "Partners read own unit history" on public.project_unit_history for select to authenticated using (exists(select 1 from public.project_units u join public.real_estate_projects p on p.id=u.project_id where u.id=unit_id and p.partner_id=(select public.current_partner_id())));
drop policy if exists "System inserts unit history" on public.project_unit_history;
create policy "System inserts unit history" on public.project_unit_history for insert to authenticated with check ((select public.is_admin()) or exists(select 1 from public.project_units u join public.real_estate_projects p on p.id=u.project_id where u.id=unit_id and p.partner_id=(select public.current_partner_id())));

drop policy if exists "Admins manage deal offers" on public.deal_offers;
create policy "Admins manage deal offers" on public.deal_offers for all to authenticated using ((select public.is_admin())) with check ((select public.is_admin()));
drop policy if exists "Partners manage own deal offers" on public.deal_offers;
create policy "Partners manage own deal offers" on public.deal_offers for all to authenticated using (exists(select 1 from public.crm_deals d where d.id=deal_id and d.owner_user_id=(select auth.uid()))) with check (exists(select 1 from public.crm_deals d where d.id=deal_id and d.owner_user_id=(select auth.uid())));

drop policy if exists "Admins manage deal reservations" on public.deal_reservations;
create policy "Admins manage deal reservations" on public.deal_reservations for all to authenticated using ((select public.is_admin())) with check ((select public.is_admin()));
drop policy if exists "Partners manage own deal reservations" on public.deal_reservations;
create policy "Partners manage own deal reservations" on public.deal_reservations for all to authenticated using (exists(select 1 from public.crm_deals d where d.id=deal_id and d.owner_user_id=(select auth.uid()))) with check (exists(select 1 from public.crm_deals d where d.id=deal_id and d.owner_user_id=(select auth.uid())));

drop policy if exists "Admins manage deal payments" on public.deal_payments;
create policy "Admins manage deal payments" on public.deal_payments for all to authenticated using ((select public.is_admin())) with check ((select public.is_admin()));
drop policy if exists "Partners manage own deal payments" on public.deal_payments;
create policy "Partners manage own deal payments" on public.deal_payments for all to authenticated using (exists(select 1 from public.crm_deals d where d.id=deal_id and d.owner_user_id=(select auth.uid()))) with check (exists(select 1 from public.crm_deals d where d.id=deal_id and d.owner_user_id=(select auth.uid())));

drop policy if exists "Admins read deal stage history" on public.deal_stage_history;
create policy "Admins read deal stage history" on public.deal_stage_history for select to authenticated using ((select public.is_admin()));
drop policy if exists "Partners read own deal stage history" on public.deal_stage_history;
create policy "Partners read own deal stage history" on public.deal_stage_history for select to authenticated using (exists(select 1 from public.crm_deals d where d.id=deal_id and d.owner_user_id=(select auth.uid())));
drop policy if exists "System inserts deal stage history" on public.deal_stage_history;
create policy "System inserts deal stage history" on public.deal_stage_history for insert to authenticated with check ((select public.is_admin()) or exists(select 1 from public.crm_deals d where d.id=deal_id and d.owner_user_id=(select auth.uid())));

drop policy if exists "Admins manage shortlists" on public.client_property_shortlist;
create policy "Admins manage shortlists" on public.client_property_shortlist for all to authenticated using ((select public.is_admin())) with check ((select public.is_admin()));
drop policy if exists "Partners manage own shortlists" on public.client_property_shortlist;
create policy "Partners manage own shortlists" on public.client_property_shortlist for all to authenticated using (exists(select 1 from public.crm_contacts c where c.id=contact_id and c.owner_user_id=(select auth.uid()))) with check (exists(select 1 from public.crm_contacts c where c.id=contact_id and c.owner_user_id=(select auth.uid())));

grant select,insert,update,delete on public.developers,public.real_estate_projects,public.project_units,public.deal_offers,public.deal_reservations,public.deal_payments,public.client_property_shortlist to authenticated;
grant select,insert on public.project_unit_history,public.deal_stage_history to authenticated;
grant usage,select on sequence public.project_unit_history_id_seq,public.deal_stage_history_id_seq to authenticated;

insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types)
values('deal-documents','deal-documents',false,26214400,array['application/pdf','image/jpeg','image/png','image/webp','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'])
on conflict(id) do nothing;
