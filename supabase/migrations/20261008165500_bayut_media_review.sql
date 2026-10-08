-- Bayut detail-enrichment proposals remain private until an admin explicitly selects assets.
create table if not exists public.project_media_enrichments (
  project_id uuid primary key references public.real_estate_projects(id) on delete cascade,
  candidate_id uuid references public.project_import_candidates(id) on delete set null,
  listing_external_id text not null,
  photos jsonb not null default '[]'::jsonb,
  floorplans jsonb not null default '[]'::jsonb,
  source_description text,
  amenities jsonb not null default '[]'::jsonb,
  fetched_at timestamptz not null default now(),
  fetched_by uuid references auth.users(id) on delete set null
);
create table if not exists public.project_media_api_calls (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.real_estate_projects(id) on delete cascade,
  listing_external_id text not null,
  requested_at timestamptz not null default now(),
  result text not null default 'requested' check(result in ('requested','success','error')),
  http_status integer,
  requested_by uuid references auth.users(id) on delete set null
);
create index if not exists project_media_api_calls_project_time on public.project_media_api_calls(project_id,requested_at desc);
create index if not exists project_media_api_calls_month on public.project_media_api_calls(requested_at desc);
alter table public.project_media_enrichments enable row level security;
alter table public.project_media_api_calls enable row level security;
grant select,insert,update on public.project_media_enrichments to authenticated;
grant select,insert,update on public.project_media_api_calls to authenticated;
drop policy if exists project_media_enrichments_admin on public.project_media_enrichments;
create policy project_media_enrichments_admin on public.project_media_enrichments for all to authenticated
 using ((select public.is_admin())) with check ((select public.is_admin()));
drop policy if exists project_media_api_calls_admin on public.project_media_api_calls;
create policy project_media_api_calls_admin on public.project_media_api_calls for all to authenticated
 using ((select public.is_admin())) with check ((select public.is_admin()));
comment on table public.project_media_enrichments is 'PRIVATE candidates from one Bayut property listing; photos are never auto-published.';
