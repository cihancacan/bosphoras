
create table if not exists public.partner_admin_notes (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references public.partner_companies(id) on delete cascade,
  note text not null check (char_length(btrim(note)) between 1 and 5000),
  note_type text not null default 'note' check (note_type in ('note','warning','follow_up','compliance')),
  pinned boolean not null default false,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);

alter table public.partner_admin_notes enable row level security;

drop policy if exists "Admins manage partner admin notes" on public.partner_admin_notes;
create policy "Admins manage partner admin notes"
on public.partner_admin_notes for all to authenticated
using ((select public.is_admin()))
with check ((select public.is_admin()));

create index if not exists partner_admin_notes_partner_idx
  on public.partner_admin_notes(partner_id, created_at desc);

alter table public.partner_admin_terms
  add column if not exists internal_rating integer,
  add column if not exists risk_level text,
  add column if not exists last_reviewed_at timestamptz;

do $$ begin
  alter table public.partner_admin_terms
    add constraint partner_admin_terms_internal_rating_check
    check (internal_rating is null or internal_rating between 1 and 5);
exception when duplicate_object then null;
end $$;

do $$ begin
  alter table public.partner_admin_terms
    add constraint partner_admin_terms_risk_level_check
    check (risk_level is null or risk_level in ('low','medium','high','critical'));
exception when duplicate_object then null;
end $$;

create schema if not exists private;
revoke all on schema private from public, anon, authenticated;

create or replace function public.protect_profile_privileged_fields()
returns trigger
language plpgsql
set search_path = 'public','auth'
as $$
begin
  if (select auth.uid()) = old.user_id then
    new.user_id := old.user_id;
    new.email := old.email;
    new.role := old.role;
    new.status := old.status;
    new.partner_id := old.partner_id;
    new.workspace_role := old.workspace_role;
    new.permissions := old.permissions;
  end if;
  new.updated_at := now();
  return new;
end;
$$;

create or replace function private.audit_partner_profile_changes()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare changed jsonb := '{}'::jsonb;
begin
  if new.role <> 'partner' then return new; end if;

  if old.full_name is distinct from new.full_name then changed := changed || jsonb_build_object('full_name', jsonb_build_array(old.full_name,new.full_name)); end if;
  if old.phone is distinct from new.phone then changed := changed || jsonb_build_object('phone_changed', true); end if;
  if old.whatsapp is distinct from new.whatsapp then changed := changed || jsonb_build_object('whatsapp_changed', true); end if;
  if old.avatar_url is distinct from new.avatar_url then changed := changed || jsonb_build_object('avatar_changed', true); end if;
  if old.job_title is distinct from new.job_title then changed := changed || jsonb_build_object('job_title', jsonb_build_array(old.job_title,new.job_title)); end if;
  if old.bio is distinct from new.bio then changed := changed || jsonb_build_object('bio_changed', true); end if;
  if old.preferred_language is distinct from new.preferred_language then changed := changed || jsonb_build_object('preferred_language', jsonb_build_array(old.preferred_language,new.preferred_language)); end if;
  if old.workspace_role is distinct from new.workspace_role then changed := changed || jsonb_build_object('workspace_role', jsonb_build_array(old.workspace_role,new.workspace_role)); end if;
  if old.permissions is distinct from new.permissions then changed := changed || jsonb_build_object('permissions_changed', true); end if;
  if old.status is distinct from new.status then changed := changed || jsonb_build_object('status', jsonb_build_array(old.status,new.status)); end if;

  if changed <> '{}'::jsonb then
    insert into public.audit_log(actor_user_id,action,entity_type,entity_id,metadata)
    values ((select auth.uid()),'partner_profile_updated','partner_user',new.user_id::text,
      changed || jsonb_build_object('partner_id',new.partner_id));
  end if;
  return new;
end;
$$;

revoke all on function private.audit_partner_profile_changes() from public, anon, authenticated;

drop trigger if exists trg_audit_partner_profile_changes on public.profiles;
create trigger trg_audit_partner_profile_changes
after update on public.profiles
for each row execute function private.audit_partner_profile_changes();

create or replace function private.audit_partner_company_changes()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare changed jsonb := '{}'::jsonb;
begin
  if old.name is distinct from new.name then changed := changed || jsonb_build_object('name', jsonb_build_array(old.name,new.name)); end if;
  if old.status is distinct from new.status then changed := changed || jsonb_build_object('status', jsonb_build_array(old.status,new.status)); end if;
  if old.email is distinct from new.email then changed := changed || jsonb_build_object('email_changed', true); end if;
  if old.phone is distinct from new.phone then changed := changed || jsonb_build_object('phone_changed', true); end if;
  if old.website is distinct from new.website then changed := changed || jsonb_build_object('website_changed', true); end if;
  if old.address is distinct from new.address then changed := changed || jsonb_build_object('address_changed', true); end if;
  if old.tax_number is distinct from new.tax_number then changed := changed || jsonb_build_object('tax_number_changed', true); end if;
  if old.license_number is distinct from new.license_number then changed := changed || jsonb_build_object('license_number_changed', true); end if;

  if changed <> '{}'::jsonb then
    insert into public.audit_log(actor_user_id,action,entity_type,entity_id,metadata)
    values ((select auth.uid()),'partner_company_updated','partner',new.id::text,changed);
  end if;
  return new;
end;
$$;

revoke all on function private.audit_partner_company_changes() from public, anon, authenticated;

drop trigger if exists trg_audit_partner_company_changes on public.partner_companies;
create trigger trg_audit_partner_company_changes
after update on public.partner_companies
for each row execute function private.audit_partner_company_changes();

create or replace function private.audit_partner_deal_changes()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare changed jsonb := '{}'::jsonb;
begin
  if new.partner_id is null then return new; end if;

  if tg_op = 'INSERT' then
    changed := jsonb_build_object('stage',new.stage,'deal_value',new.deal_value,'currency',new.currency);
  else
    if old.stage is distinct from new.stage then changed := changed || jsonb_build_object('stage',jsonb_build_array(old.stage,new.stage)); end if;
    if old.deal_value is distinct from new.deal_value then changed := changed || jsonb_build_object('deal_value_changed',true); end if;
    if old.next_action_at is distinct from new.next_action_at then changed := changed || jsonb_build_object('next_action_changed',true); end if;
  end if;

  if changed <> '{}'::jsonb then
    insert into public.audit_log(actor_user_id,action,entity_type,entity_id,metadata)
    values ((select auth.uid()),
      case when tg_op='INSERT' then 'partner_deal_created' else 'partner_deal_updated' end,
      'crm_deal',new.id::text,
      changed || jsonb_build_object('partner_id',new.partner_id));
  end if;
  return new;
end;
$$;

revoke all on function private.audit_partner_deal_changes() from public, anon, authenticated;

drop trigger if exists trg_audit_partner_deal_changes on public.crm_deals;
create trigger trg_audit_partner_deal_changes
after insert or update on public.crm_deals
for each row execute function private.audit_partner_deal_changes();
