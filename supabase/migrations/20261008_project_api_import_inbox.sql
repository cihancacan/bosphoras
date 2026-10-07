create table if not exists public.project_import_candidates (
  id uuid primary key default gen_random_uuid(),
  source_system text not null,
  source_external_id text,
  source_url text,
  source_page integer,
  source_payload jsonb not null default '{}'::jsonb,
  project_name text not null,
  developer_name text,
  country_code text not null,
  country_name text,
  city text,
  district text,
  currency text,
  price_min numeric,
  price_max numeric,
  handover_text text,
  completion_date date,
  hero_image text,
  images text[] not null default array[]::text[],
  dedupe_key text not null,
  review_status text not null default 'new'
    check (review_status in ('new','reviewing','imported','rejected','duplicate')),
  matched_project_id uuid references public.real_estate_projects(id) on delete set null,
  imported_project_id uuid references public.real_estate_projects(id) on delete set null,
  reviewed_by uuid references auth.users(id) on delete set null,
  reviewed_at timestamptz,
  rejection_reason text,
  first_seen_at timestamptz not null default now(),
  last_seen_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.project_source_sync_runs (
  id uuid primary key default gen_random_uuid(),
  source_system text not null,
  source_page integer,
  request_count integer not null default 1 check (request_count >= 0),
  fetched_count integer not null default 0 check (fetched_count >= 0),
  upserted_count integer not null default 0 check (upserted_count >= 0),
  status text not null default 'success' check (status in ('success','partial','failed')),
  error_message text,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);

create unique index if not exists project_import_candidates_source_uidx
  on public.project_import_candidates(source_system, source_external_id)
  where source_external_id is not null;

create index if not exists project_import_candidates_review_idx
  on public.project_import_candidates(review_status, last_seen_at desc);

create index if not exists project_import_candidates_dedupe_idx
  on public.project_import_candidates(dedupe_key);

create index if not exists project_import_candidates_match_idx
  on public.project_import_candidates(matched_project_id);

create index if not exists project_source_sync_runs_source_created_idx
  on public.project_source_sync_runs(source_system, created_at desc);

drop trigger if exists trg_project_import_candidates_touch on public.project_import_candidates;
create trigger trg_project_import_candidates_touch
before update on public.project_import_candidates
for each row execute function public.touch_updated_at();

alter table public.project_import_candidates enable row level security;
alter table public.project_source_sync_runs enable row level security;

revoke all on table public.project_import_candidates from anon, authenticated;
revoke all on table public.project_source_sync_runs from anon, authenticated;

grant select, insert, update, delete on table public.project_import_candidates to authenticated;
grant select, insert on table public.project_source_sync_runs to authenticated;

drop policy if exists "Admins read project import candidates" on public.project_import_candidates;
create policy "Admins read project import candidates"
on public.project_import_candidates for select
to authenticated
using ((select public.is_admin()));

drop policy if exists "Admins insert project import candidates" on public.project_import_candidates;
create policy "Admins insert project import candidates"
on public.project_import_candidates for insert
to authenticated
with check ((select public.is_admin()));

drop policy if exists "Admins update project import candidates" on public.project_import_candidates;
create policy "Admins update project import candidates"
on public.project_import_candidates for update
to authenticated
using ((select public.is_admin()))
with check ((select public.is_admin()));

drop policy if exists "Admins delete project import candidates" on public.project_import_candidates;
create policy "Admins delete project import candidates"
on public.project_import_candidates for delete
to authenticated
using ((select public.is_admin()));

drop policy if exists "Admins read project source sync runs" on public.project_source_sync_runs;
create policy "Admins read project source sync runs"
on public.project_source_sync_runs for select
to authenticated
using ((select public.is_admin()));

drop policy if exists "Admins insert project source sync runs" on public.project_source_sync_runs;
create policy "Admins insert project source sync runs"
on public.project_source_sync_runs for insert
to authenticated
with check ((select public.is_admin()));

comment on table public.project_import_candidates is
'Private API import inbox. External projects are never public until an administrator validates them and creates a Bosphoras draft project.';

comment on table public.project_source_sync_runs is
'Tracks Bosphoras external project API calls and imported candidate counts for quota monitoring.';
