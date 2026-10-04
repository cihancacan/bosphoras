
alter table public.developers
  add column if not exists logo_url text;

alter table public.real_estate_projects
  add column if not exists logo_url text,
  add column if not exists hero_image text;

alter table public.property_import_jobs
  add column if not exists project_id uuid references public.real_estate_projects(id) on delete set null,
  add column if not exists developer_id uuid references public.developers(id) on delete set null;

create index if not exists property_import_jobs_project_id_idx on public.property_import_jobs(project_id);
create index if not exists property_import_jobs_developer_id_idx on public.property_import_jobs(developer_id);
