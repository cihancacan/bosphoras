-- Private listing ownership and seller intelligence.
-- Public property reads remain isolated in property_listings.

create table if not exists public.property_listing_internal (
  listing_id uuid primary key references public.property_listings(id) on delete cascade,
  owner_user_id uuid references auth.users(id) on delete set null,
  seller_name text,
  seller_company text,
  seller_phone text,
  seller_whatsapp text,
  seller_email text,
  seller_asking_price numeric,
  seller_floor_price numeric,
  internal_notes text,
  access_scope text not null default 'owner_only'
    check (access_scope in ('owner_only','all_agents')),
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.property_listing_internal enable row level security;

grant select, insert, update, delete on public.property_listing_internal to authenticated;
revoke all on public.property_listing_internal from anon;

drop policy if exists "Admins manage listing internal data" on public.property_listing_internal;
create policy "Admins manage listing internal data"
on public.property_listing_internal
for all
to authenticated
using ((select public.is_admin()))
with check ((select public.is_admin()));

drop policy if exists "Agents read permitted listing internal data" on public.property_listing_internal;
create policy "Agents read permitted listing internal data"
on public.property_listing_internal
for select
to authenticated
using (
  (select public.is_active_user())
  and (
    owner_user_id = (select auth.uid())
    or access_scope = 'all_agents'
  )
);

create index if not exists property_listing_internal_owner_idx
  on public.property_listing_internal(owner_user_id);

insert into public.property_listing_internal (listing_id, owner_user_id, created_by)
select id, created_by, created_by
from public.property_listings
where deleted_at is null
on conflict (listing_id) do nothing;

create or replace function public.sync_listing_internal_from_approved_submission()
returns trigger
language plpgsql
security definer
set search_path = 'public'
as $$
declare
  i jsonb := coalesce(new.payload->'_internal', '{}'::jsonb);
begin
  if new.status = 'approved' and new.listing_id is not null then
    insert into public.property_listing_internal(
      listing_id, owner_user_id, seller_name, seller_company, seller_phone,
      seller_whatsapp, seller_email, seller_asking_price, seller_floor_price,
      internal_notes, access_scope, created_by, updated_at
    )
    values(
      new.listing_id,
      new.submitted_by,
      nullif(i->>'sellerName',''),
      nullif(i->>'sellerCompany',''),
      nullif(i->>'sellerPhone',''),
      nullif(i->>'sellerWhatsapp',''),
      nullif(i->>'sellerEmail',''),
      nullif(i->>'sellerAskingPrice','')::numeric,
      nullif(i->>'sellerFloorPrice','')::numeric,
      nullif(i->>'internalNotes',''),
      'owner_only',
      new.submitted_by,
      now()
    )
    on conflict (listing_id) do update
    set
      owner_user_id = coalesce(public.property_listing_internal.owner_user_id, excluded.owner_user_id),
      seller_name = coalesce(excluded.seller_name, public.property_listing_internal.seller_name),
      seller_company = coalesce(excluded.seller_company, public.property_listing_internal.seller_company),
      seller_phone = coalesce(excluded.seller_phone, public.property_listing_internal.seller_phone),
      seller_whatsapp = coalesce(excluded.seller_whatsapp, public.property_listing_internal.seller_whatsapp),
      seller_email = coalesce(excluded.seller_email, public.property_listing_internal.seller_email),
      seller_asking_price = coalesce(excluded.seller_asking_price, public.property_listing_internal.seller_asking_price),
      seller_floor_price = coalesce(excluded.seller_floor_price, public.property_listing_internal.seller_floor_price),
      internal_notes = coalesce(excluded.internal_notes, public.property_listing_internal.internal_notes),
      updated_at = now();
  end if;
  return new;
end;
$$;

drop trigger if exists trg_sync_listing_internal_from_approved_submission
on public.property_listing_submissions;

create trigger trg_sync_listing_internal_from_approved_submission
after update of status, listing_id
on public.property_listing_submissions
for each row
when (new.status = 'approved')
execute function public.sync_listing_internal_from_approved_submission();
