-- Applied through Supabase migration: bosphoras_investment_public_accounts_isolated, 2026-11-14

-- Bosphoras Investment public accounts are isolated from the existing Partner Desk.
-- Existing professional provisioning and admin roles are deliberately unchanged.
create table if not exists public.investment_accounts (
  user_id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  account_type text not null check (account_type in ('investor','entrepreneur')),
  full_name text,
  country text,
  company_name text,
  investor_interests text,
  investor_budget_band text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.investment_accounts enable row level security;
revoke all on public.investment_accounts from anon, authenticated;
grant select on public.investment_accounts to authenticated;
grant update (full_name,country,company_name,investor_interests,investor_budget_band) on public.investment_accounts to authenticated;
create policy "Investment members read own account" on public.investment_accounts for select to authenticated using ((select auth.uid()) = user_id);
create policy "Investment members edit own public fields" on public.investment_accounts for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

create table if not exists public.investment_watchlist (
  user_id uuid not null references public.investment_accounts(user_id) on delete cascade,
  project_code text not null check (project_code in ('cliniqeo','aqma','medsestra','lovelockparis','qenerzy','bosphoras-luxury-stays')),
  created_at timestamptz not null default now(),
  primary key (user_id,project_code)
);
alter table public.investment_watchlist enable row level security;
revoke all on public.investment_watchlist from anon,authenticated;
grant select,insert,delete on public.investment_watchlist to authenticated;
create policy "Investors view own watchlist" on public.investment_watchlist for select to authenticated using ((select auth.uid())=user_id);
create policy "Investors save listed ventures" on public.investment_watchlist for insert to authenticated with check (
  (select auth.uid())=user_id and exists (
    select 1 from public.investment_accounts a where a.user_id=(select auth.uid()) and a.account_type='investor'
  )
);
create policy "Investors remove own saved ventures" on public.investment_watchlist for delete to authenticated using ((select auth.uid())=user_id);

create table if not exists public.investment_project_drafts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.investment_accounts(user_id) on delete cascade,
  project_name text not null check (char_length(project_name) between 2 and 180),
  country text not null default '',
  sector text not null default '',
  funding_target text not null default '',
  website text not null default '',
  summary text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists investment_project_drafts_user_id_idx on public.investment_project_drafts(user_id,updated_at desc);
alter table public.investment_project_drafts enable row level security;
revoke all on public.investment_project_drafts from anon,authenticated;
grant select,insert,delete on public.investment_project_drafts to authenticated;
grant update (project_name,country,sector,funding_target,website,summary,updated_at) on public.investment_project_drafts to authenticated;
create policy "Entrepreneurs view own drafts" on public.investment_project_drafts for select to authenticated using ((select auth.uid())=user_id);
create policy "Entrepreneurs create own drafts" on public.investment_project_drafts for insert to authenticated with check (
  (select auth.uid())=user_id and exists (
    select 1 from public.investment_accounts a where a.user_id=(select auth.uid()) and a.account_type='entrepreneur'
  )
);
create policy "Entrepreneurs edit own drafts" on public.investment_project_drafts for update to authenticated using (
  (select auth.uid())=user_id and exists (
    select 1 from public.investment_accounts a where a.user_id=(select auth.uid()) and a.account_type='entrepreneur'
  )
) with check ((select auth.uid())=user_id);
create policy "Entrepreneurs delete own drafts" on public.investment_project_drafts for delete to authenticated using ((select auth.uid())=user_id);

create or replace function public.handle_new_portal_user()
returns trigger
language plpgsql security definer
set search_path to 'public', 'extensions'
as $function$
declare
  v_email text := lower(coalesce(new.email,''));
  v_full_name text := nullif(new.raw_user_meta_data->>'full_name','');
  v_provision_code text := coalesce(new.raw_user_meta_data->>'provision_code','');
  v_provision public.partner_account_provisioning%rowtype;
  v_role text := coalesce(new.raw_app_meta_data->>'portal_role','');
  v_partner_id uuid;
  v_admin_provisioned boolean := coalesce((new.raw_app_meta_data->>'admin_provisioned')::boolean,false);
  v_investment_source text := coalesce(new.raw_user_meta_data->>'signup_source','');
  v_investment_type text := coalesce(new.raw_user_meta_data->>'investment_account_type','');
begin
  if v_email='cacancihan@gmail.com' then
    insert into public.profiles(user_id,email,full_name,role,status)
    values(new.id,v_email,coalesce(v_full_name,'Cihan Cacan'),'admin','active')
    on conflict(user_id) do update
      set role='admin',status='active',email=excluded.email,full_name=coalesce(excluded.full_name,public.profiles.full_name);
    return new;
  end if;

  -- Public registration can obtain ONLY an investor/entrepreneur workspace,
  -- never an admin or partner profile; editable metadata is not trusted for privileges.
  if v_investment_source='bosphoras_investment_v1' then
    if v_investment_type not in ('investor','entrepreneur') then
      raise exception 'Invalid investment account type';
    end if;
    insert into public.investment_accounts(user_id,email,account_type,full_name)
    values(new.id,v_email,v_investment_type,v_full_name);
    return new;
  end if;

  if v_admin_provisioned and v_role='partner' then
    begin
      v_partner_id := (new.raw_app_meta_data->>'partner_id')::uuid;
    exception when others then
      raise exception 'Invalid partner account configuration';
    end;
  else
    select * into v_provision
    from public.partner_account_provisioning
    where lower(email)=v_email
      and status='pending'
      and expires_at>now()
      and provision_code_hash=encode(digest(v_provision_code,'sha256'),'hex')
    order by created_at desc
    limit 1;
    if v_provision.id is null then
      raise exception 'Partner accounts must be created by a Bosphoras administrator';
    end if;
    v_partner_id := v_provision.partner_id;
    v_full_name := coalesce(v_full_name,v_provision.full_name);
    update public.partner_account_provisioning
      set status='consumed',consumed_by=new.id,consumed_at=now()
      where id=v_provision.id;
  end if;

  if not exists(
    select 1 from public.partner_companies
    where id=v_partner_id and status in('pending','active')
  ) then
    raise exception 'Partner company not found';
  end if;

  insert into public.profiles(user_id,email,full_name,role,status,partner_id)
  values(new.id,v_email,v_full_name,'partner','active',v_partner_id)
  on conflict(user_id) do update
    set email=excluded.email,full_name=excluded.full_name,role='partner',status='active',partner_id=excluded.partner_id;
  update public.partner_companies set status='active',updated_at=now() where id=v_partner_id;
  insert into public.chat_threads(partner_user_id,subject)
  values(new.id,'Bosphoras Partner Desk')
  on conflict do nothing;
  insert into public.audit_log(actor_user_id,action,entity_type,entity_id,metadata)
  values(new.id,'partner_account_provisioned','partner',v_partner_id::text,jsonb_build_object('email',v_email));
  return new;
end;
$function$;
