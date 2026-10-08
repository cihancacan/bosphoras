alter table public.real_estate_projects add column if not exists official_project_url text;
alter table public.property_listings add column if not exists project_amenity_codes text[] not null default '{}'::text[];
create table if not exists public.project_official_research (
 project_id uuid primary key references public.real_estate_projects(id) on delete cascade,
 official_url text,
 developer_domain text,
 source_title text,
 source_excerpt text,
 suggested_description jsonb not null default '{}'::jsonb,
 suggested_amenities text[] not null default '{}'::text[],
 amenity_evidence jsonb not null default '{}'::jsonb,
 suggested_images jsonb not null default '[]'::jsonb,
 suggested_address text,
 suggested_latitude numeric,
 suggested_longitude numeric,
 unit_mentions text[] not null default '{}'::text[],
 status text not null default 'pending' check(status in ('pending','ready','needs_url','blocked','error')),
 status_message text,
 fetched_at timestamptz not null default now(),
 fetched_by uuid references auth.users(id) on delete set null
);
alter table public.project_official_research enable row level security;
grant select,insert,update on public.project_official_research to authenticated;
drop policy if exists "Admin only official project research" on public.project_official_research;
create policy "Admin only official project research" on public.project_official_research for all to authenticated
 using ((select public.is_admin())) with check ((select public.is_admin()));
create index if not exists idx_official_project_research_status on public.project_official_research(status,fetched_at desc);
comment on table public.project_official_research is 'Staged provenance-tagged factual suggestions; not published or copied until human review.';
