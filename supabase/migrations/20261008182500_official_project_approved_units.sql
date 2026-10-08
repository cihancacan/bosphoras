alter table public.real_estate_projects add column if not exists official_unit_types text[] not null default '{}'::text[];
alter table public.project_official_research add column if not exists approved_at timestamptz;
alter table public.project_official_research add column if not exists approved_by uuid references auth.users(id) on delete set null;
