-- Bosphoras investment CRM portfolio and private documents

-- Bosphoras Investment operations / CRM, strictly separate from property CRM.
create table if not exists public.investment_leads (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null default auth.uid(),
  kind text not null check(kind in ('placement','project_access','company_finance')),
  project_code text check(project_code is null or project_code in ('aqma','cliniqeo','medsestra','lovelockparis','qenerzy','bosphoras-luxury-stays')),
  full_name text not null check(char_length(trim(full_name)) between 2 and 130),
  email text not null check(char_length(email) between 5 and 180 and position('@' in email)>1),
  phone text not null default '' check(char_length(phone)<=50),
  country text not null default '' check(char_length(country)<=90),
  requested_amount numeric(15,2) check(requested_amount is null or requested_amount between 1000 and 100000000),
  currency text not null default 'EUR' check(currency in ('EUR','USD','AED')),
  notes text not null default '' check(char_length(notes)<=3000),
  consent boolean not null check(consent=true),
  source_path text not null default '' check(char_length(source_path)<=300),
  status text not null default 'new' check(status in ('new','qualifying','awaiting_documents','forwarded','qualified','declined','closed')),
  assigned_to uuid references auth.users(id) on delete set null,
  forwarded_to text not null default '',
  admin_notes text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists investment_leads_created_idx on public.investment_leads(created_at desc);
create index if not exists investment_leads_status_idx on public.investment_leads(status,created_at desc);
create index if not exists investment_leads_user_idx on public.investment_leads(user_id,created_at desc);
alter table public.investment_leads enable row level security;
revoke all on public.investment_leads from anon,authenticated;
grant insert(kind,project_code,full_name,email,phone,country,requested_amount,currency,notes,consent,source_path) on public.investment_leads to anon,authenticated;
grant select on public.investment_leads to authenticated;
grant update(status,assigned_to,forwarded_to,admin_notes,updated_at) on public.investment_leads to authenticated;
create policy "CRM admin sees investment leads" on public.investment_leads for select to authenticated using ((select is_admin()) or user_id=(select auth.uid()));
create policy "Public may send investment enquiry" on public.investment_leads for insert to anon,authenticated with check (
  status='new' and assigned_to is null and forwarded_to='' and admin_notes='' and consent=true
  and (user_id is null or user_id=(select auth.uid()))
);
create policy "Only admins qualify investment leads" on public.investment_leads for update to authenticated
 using ((select is_admin())) with check ((select is_admin()));
create or replace function public.check_investment_lead_throttle()
returns trigger language plpgsql security definer set search_path='public' as $$
declare recent_count integer;
begin
  select count(*) into recent_count from public.investment_leads
   where lower(email)=lower(new.email) and created_at > now()-interval '1 hour';
  if recent_count >= 5 then raise exception 'Too many requests from this contact'; end if;
  return new;
end; $$;
revoke all on function public.check_investment_lead_throttle() from public,anon,authenticated;
drop trigger if exists before_investment_lead_insert on public.investment_leads;
create trigger before_investment_lead_insert before insert on public.investment_leads
 for each row execute function public.check_investment_lead_throttle();

create table if not exists public.investment_positions (
  id uuid primary key default gen_random_uuid(),
  investor_user_id uuid not null references public.investment_accounts(user_id) on delete restrict,
  project_code text not null check(project_code in ('aqma','cliniqeo','medsestra','lovelockparis','qenerzy','bosphoras-luxury-stays')),
  issuer_name text not null default '',
  instrument text not null check(instrument in ('loan','bond','equity','other')),
  currency text not null default 'EUR' check(currency in ('EUR','USD','AED')),
  invested_amount numeric(15,2) not null check(invested_amount>0),
  annual_rate numeric(7,4) check(annual_rate is null or (annual_rate>=0 and annual_rate<=100)),
  units numeric(20,6) check(units is null or units>=0),
  status text not null default 'active' check(status in ('active','matured','closed','restructured','defaulted')),
  invested_at date not null,
  maturity_at date,
  exit_terms text not null default '',
  external_reference text not null default '',
  admin_note text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (maturity_at is null or maturity_at>=invested_at)
);
create index if not exists investment_positions_investor_idx on public.investment_positions(investor_user_id,invested_at desc);
alter table public.investment_positions enable row level security;
revoke all on public.investment_positions from anon,authenticated;
grant select on public.investment_positions to authenticated;
grant insert,update,delete on public.investment_positions to authenticated;
create policy "Positions readable by owner or investment admin" on public.investment_positions for select to authenticated using (investor_user_id=(select auth.uid()) or (select is_admin()));
create policy "Admin inserts verified positions" on public.investment_positions for insert to authenticated with check ((select is_admin()));
create policy "Admin updates positions" on public.investment_positions for update to authenticated using ((select is_admin())) with check ((select is_admin()));
create policy "Admin deletes positions" on public.investment_positions for delete to authenticated using ((select is_admin()));

create table if not exists public.investment_payments (
 id uuid primary key default gen_random_uuid(),
 position_id uuid not null references public.investment_positions(id) on delete cascade,
 kind text not null check(kind in ('interest','principal','dividend','fee','adjustment')),
 amount numeric(15,2) not null check(amount>=0),
 due_on date not null,
 status text not null default 'scheduled' check(status in ('scheduled','paid','late','cancelled')),
 paid_on date,
 reference text not null default '',
 comment text not null default '',
 created_at timestamptz not null default now(),
 updated_at timestamptz not null default now(),
 check ((status='paid' and paid_on is not null) or (status<>'paid' and paid_on is null))
);
create index if not exists investment_payments_due_idx on public.investment_payments(due_on,status);
create index if not exists investment_payments_position_idx on public.investment_payments(position_id,due_on);
alter table public.investment_payments enable row level security;
revoke all on public.investment_payments from anon,authenticated;
grant select,insert,update,delete on public.investment_payments to authenticated;
create policy "Payments visible to owner or admin" on public.investment_payments for select to authenticated using (
 (select is_admin()) or exists(select 1 from public.investment_positions p where p.id=position_id and p.investor_user_id=(select auth.uid()))
);
create policy "Admin creates verified payment schedule" on public.investment_payments for insert to authenticated with check ((select is_admin()));
create policy "Admin records actual payments" on public.investment_payments for update to authenticated using ((select is_admin())) with check ((select is_admin()));
create policy "Admin removes mistaken rows" on public.investment_payments for delete to authenticated using ((select is_admin()));

create table if not exists public.investment_documents (
 id uuid primary key default gen_random_uuid(),
 project_draft_id uuid not null references public.investment_project_drafts(id) on delete cascade,
 user_id uuid not null references public.investment_accounts(user_id) on delete cascade,
 storage_path text not null unique,
 file_name text not null check(char_length(file_name) between 1 and 250),
 mime_type text not null,
 file_size bigint not null check(file_size between 1 and 15728640),
 category text not null default 'other' check(category in ('registration','financial','business_plan','contract','permit','presentation','other')),
 status text not null default 'received' check(status in ('received','reviewing','validated','more_info')),
 admin_note text not null default '',
 created_at timestamptz not null default now(),
 check(left(storage_path,length(user_id::text)+1)=user_id::text||'/')
);
create index if not exists investment_docs_draft_idx on public.investment_documents(project_draft_id,created_at desc);
alter table public.investment_documents enable row level security;
revoke all on public.investment_documents from anon,authenticated;
grant select,insert,delete on public.investment_documents to authenticated;
grant update(status,admin_note) on public.investment_documents to authenticated;
create policy "Entrepreneur or admin views dossier documents" on public.investment_documents for select to authenticated using (user_id=(select auth.uid()) or (select is_admin()));
create policy "Entrepreneur registers own private upload" on public.investment_documents for insert to authenticated with check (
 user_id=(select auth.uid()) and status='received' and admin_note='' and
 exists(select 1 from public.investment_project_drafts d where d.id=project_draft_id and d.user_id=(select auth.uid()))
);
create policy "Entrepreneur removes own file metadata" on public.investment_documents for delete to authenticated using (user_id=(select auth.uid()) or (select is_admin()));
create policy "Admin reviews documents" on public.investment_documents for update to authenticated using ((select is_admin())) with check ((select is_admin()));
create policy "CRM admins see entrepreneur drafts" on public.investment_project_drafts for select to authenticated using ((select is_admin()));
create policy "CRM admins see investment members" on public.investment_accounts for select to authenticated using ((select is_admin()));

insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types)
values('investment-dossiers','investment-dossiers',false,15728640,array[
 'application/pdf','image/jpeg','image/png','image/webp',
 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
])
on conflict(id) do update set public=false,file_size_limit=15728640,
 allowed_mime_types=excluded.allowed_mime_types;
create policy "Investment file owner or admin reads" on storage.objects for select to authenticated using (
 bucket_id='investment-dossiers' and
 ((storage.foldername(name))[1]=(select auth.uid())::text or (select is_admin()))
);
create policy "Entrepreneur uploads to their own draft folder" on storage.objects for insert to authenticated with check (
 bucket_id='investment-dossiers'
 and (storage.foldername(name))[1]=(select auth.uid())::text
 and exists(select 1 from public.investment_project_drafts d
   where d.user_id=(select auth.uid()) and d.id::text=(storage.foldername(name))[2])
);
create policy "Owner or admin removes investment files" on storage.objects for delete to authenticated using (
 bucket_id='investment-dossiers'
 and ((storage.foldername(name))[1]=(select auth.uid())::text or (select is_admin()))
);

create table if not exists public.investment_crm_notes (
 id uuid primary key default gen_random_uuid(),
 lead_id uuid not null references public.investment_leads(id) on delete cascade,
 author_user_id uuid not null references auth.users(id),
 body text not null check(char_length(body) between 2 and 4000),
 created_at timestamptz not null default now()
);
create index if not exists investment_crm_notes_lead_idx on public.investment_crm_notes(lead_id,created_at desc);
alter table public.investment_crm_notes enable row level security;
revoke all on public.investment_crm_notes from anon,authenticated;
grant select,insert,delete on public.investment_crm_notes to authenticated;
create policy "Investment admin reads CRM notes" on public.investment_crm_notes for select to authenticated using ((select is_admin()));
create policy "Investment admin records CRM notes" on public.investment_crm_notes for insert to authenticated with check ((select is_admin()) and author_user_id=(select auth.uid()));
create policy "Investment admin deletes CRM notes" on public.investment_crm_notes for delete to authenticated using ((select is_admin()));

create table if not exists public.investment_crm_tasks(
 id uuid primary key default gen_random_uuid(),
 lead_id uuid references public.investment_leads(id) on delete cascade,
 title text not null check(char_length(title) between 2 and 250),
 due_on date,
 status text not null default 'todo' check(status in ('todo','doing','done')),
 assigned_to uuid references auth.users(id) on delete set null,
 created_at timestamptz not null default now()
);
alter table public.investment_crm_tasks enable row level security;
revoke all on public.investment_crm_tasks from anon,authenticated;
grant select,insert,update,delete on public.investment_crm_tasks to authenticated;
create policy "Admin manages investment CRM tasks" on public.investment_crm_tasks for all to authenticated using ((select is_admin())) with check ((select is_admin()));
