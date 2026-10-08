-- One optional public storefront listing per private real-estate project.
-- The project and source payload retain their private RLS policies.
alter table public.property_listings
  add column if not exists real_estate_project_id uuid
  references public.real_estate_projects(id) on delete set null;

alter table public.property_listings
  add column if not exists project_unit_options jsonb not null default '[]'::jsonb;

create unique index if not exists property_listings_project_unique
  on public.property_listings(real_estate_project_id)
  where real_estate_project_id is not null;

create index if not exists property_listings_project_public_idx
  on public.property_listings(real_estate_project_id, published)
  where real_estate_project_id is not null;

comment on column public.property_listings.project_unit_options
  is 'Curated public-safe snapshot of typology possibilities; never raw stock, internal notes, unverified availability claims or API payloads.';
