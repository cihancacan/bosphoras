-- Bosphoras Property Desk
-- Prepared for a dedicated Bosphoras Supabase project.
-- Do not run this migration against another business database.

create extension if not exists pgcrypto;

create table if not exists public.property_listings (
  id uuid primary key default gen_random_uuid(),
  external_id text not null unique,
  published boolean not null default false,
  featured boolean not null default false,
  status text not null default 'available' check (status in ('available','reserved','sold','private')),
  collection text not null default 'selected-investment' check (collection in ('selected-investment','signature','private')),
  transaction_type text not null default 'sale' check (transaction_type in ('sale','rent')),
  property_type text not null default 'apartment' check (property_type in ('apartment','villa','residence','penthouse','commercial')),
  city text not null check (city in ('istanbul','bodrum','antalya')),
  district text not null,

  slug_fr text not null unique,
  slug_en text not null unique,
  slug_ru text not null unique,
  slug_ar text not null unique,

  title jsonb not null default '{}'::jsonb,
  short_title jsonb,
  summary jsonb not null default '{}'::jsonb,
  description jsonb not null default '{}'::jsonb,
  seo_title jsonb not null default '{}'::jsonb,
  seo_description jsonb not null default '{}'::jsonb,

  currency text not null default 'EUR' check (currency in ('EUR','USD','TRY','GBP','CHF')),
  total_price numeric,
  price_on_request boolean not null default false,
  entry_capital numeric,
  surface_m2 numeric,
  bedrooms integer,
  bathrooms integer,
  delivery jsonb,
  developer text,
  partner text,

  payment_plan jsonb not null default '[]'::jsonb,
  highlights jsonb not null default '[]'::jsonb,
  technical_notes jsonb not null default '[]'::jsonb,
  strengths jsonb not null default '[]'::jsonb,
  watchpoints jsonb not null default '[]'::jsonb,

  images text[] not null default array[]::text[],
  hero_image text,
  verified_at timestamptz,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists property_listings_public_idx
  on public.property_listings (published, status, city, collection);

create index if not exists property_listings_entry_capital_idx
  on public.property_listings (entry_capital)
  where published = true;

create or replace function public.set_property_listing_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists property_listings_set_updated_at on public.property_listings;
create trigger property_listings_set_updated_at
before update on public.property_listings
for each row execute procedure public.set_property_listing_updated_at();

alter table public.property_listings enable row level security;

drop policy if exists "Public can read published property listings" on public.property_listings;
create policy "Public can read published property listings"
on public.property_listings
for select
to anon, authenticated
using (published = true);

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'property-images',
  'property-images',
  true,
  15728640,
  array['image/jpeg','image/png','image/webp','image/avif']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Public can read property images" on storage.objects;
create policy "Public can read property images"
on storage.objects
for select
to anon, authenticated
using (bucket_id = 'property-images');

comment on table public.property_listings is
'Bosphoras Property Desk inventory. Draft/private records stay unpublished. Public reads are restricted by RLS to published=true.';
