
-- Premium investment listings; public fields are admin-curated and gated by publication status.
create table if not exists public.investment_listings (
  code text primary key check (code in ('cliniqeo','aqma','medsestra','lovelockparis','qenerzy','bosphoras-luxury-stays')),
  title_fr text not null default '',
  title_en text not null default '',
  tagline_fr text not null default '',
  tagline_en text not null default '',
  short_fr text not null default '',
  short_en text not null default '',
  story_fr text not null default '',
  story_en text not null default '',
  highlights_fr text not null default '',
  highlights_en text not null default '',
  sector text not null default '',
  location text not null default '',
  issuer_name text not null default '',
  currency text not null default 'EUR' check(currency in ('EUR','USD','AED')),
  target_amount numeric(15,2) check(target_amount is null or target_amount>0),
  minimum_ticket numeric(15,2) check(minimum_ticket is null or minimum_ticket>0),
  maximum_ticket numeric(15,2) check(maximum_ticket is null or maximum_ticket>0),
  investment_type text not null default '' check(investment_type in ('','loan','bond','equity','project_finance','other')),
  annual_rate numeric(8,3) check(annual_rate is null or annual_rate between 0 and 100),
  term_months integer check(term_months is null or term_months between 1 and 600),
  first_payment_month integer check(first_payment_month is null or first_payment_month between 1 and 600),
  payment_frequency text not null default '' check(payment_frequency in ('','monthly','quarterly','annual','at_maturity','variable')),
  exit_terms_fr text not null default '',
  exit_terms_en text not null default '',
  use_of_funds_fr text not null default '',
  use_of_funds_en text not null default '',
  risk_summary_fr text not null default '',
  risk_summary_en text not null default '',
  cover_path text not null default '',
  featured boolean not null default false,
  display_order integer not null default 50,
  publication_status text not null default 'draft' check(publication_status in ('draft','published','private')),
  approved_by uuid references auth.users(id) on delete set null,
  published_at timestamptz,
  updated_at timestamptz not null default now()
);
alter table public.investment_listings enable row level security;
revoke all on public.investment_listings from anon,authenticated;
grant select on public.investment_listings to anon,authenticated;
grant insert,update,delete on public.investment_listings to authenticated;
create policy "Published investment listings only" on public.investment_listings for select to anon,authenticated using (publication_status='published' or (select public.is_admin()));
create policy "Investment admin creates listings" on public.investment_listings for insert to authenticated with check ((select public.is_admin()));
create policy "Investment admin edits listings" on public.investment_listings for update to authenticated using ((select public.is_admin())) with check ((select public.is_admin()));
create policy "Investment admin removes listings" on public.investment_listings for delete to authenticated using ((select public.is_admin()));

create table if not exists public.investment_listing_media (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  draft_id uuid references public.investment_project_drafts(id) on delete set null,
  listing_code text references public.investment_listings(code) on delete set null,
  category text not null check(category in ('cover','gallery','logo')),
  original_name text not null,
  private_path text not null default '',
  public_path text not null default '',
  content_type text not null check(content_type in ('image/jpeg','image/png','image/webp')),
  size_bytes integer not null check(size_bytes between 1 and 10485760),
  sort_order integer not null default 0,
  status text not null default 'pending' check(status in ('pending','approved','rejected')),
  created_at timestamptz not null default now(),
  check (status<>'approved' or (public_path<>'' and listing_code is not null))
);
create index if not exists investment_listing_media_draft_idx on public.investment_listing_media(draft_id,created_at);
create index if not exists investment_listing_media_listing_idx on public.investment_listing_media(listing_code,status,sort_order);
alter table public.investment_listing_media enable row level security;
revoke all on public.investment_listing_media from anon,authenticated;
grant select on public.investment_listing_media to anon,authenticated;
grant insert(owner_id,draft_id,category,original_name,private_path,content_type,size_bytes,sort_order) on public.investment_listing_media to authenticated;
grant update,delete on public.investment_listing_media to authenticated;
create policy "Approved project images or own private media" on public.investment_listing_media for select to anon,authenticated using (
 (status='approved' and public_path<>'' and exists (select 1 from public.investment_listings l where l.code=listing_code and l.publication_status='published'))
 or owner_id=(select auth.uid()) or (select public.is_admin())
);
create policy "Entrepreneur submits media for their draft" on public.investment_listing_media for insert to authenticated with check (
 owner_id=(select auth.uid()) and status='pending' and private_path<>'' and public_path='' and listing_code is null
 and exists(select 1 from public.investment_project_drafts d where d.id=draft_id and d.user_id=(select auth.uid()))
 and split_part(private_path,'/',1)=(select auth.uid())::text
 and split_part(private_path,'/',2)=draft_id::text
);
create policy "Investment admin publishes images" on public.investment_listing_media for update to authenticated using ((select public.is_admin())) with check ((select public.is_admin()));
create policy "Owner or admin deletes media" on public.investment_listing_media for delete to authenticated using (owner_id=(select auth.uid()) or (select public.is_admin()));

insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types)
values('investment-listing-public','investment-listing-public',true,10485760,array['image/jpeg','image/png','image/webp'])
on conflict(id) do update set public=true,file_size_limit=10485760,allowed_mime_types=excluded.allowed_mime_types;
create policy "Investment admin uploads public listing imagery" on storage.objects for insert to authenticated with check (
 bucket_id='investment-listing-public' and (select public.is_admin())
);
create policy "Investment admin edits public listing imagery" on storage.objects for update to authenticated using(
 bucket_id='investment-listing-public' and (select public.is_admin())
) with check (bucket_id='investment-listing-public' and (select public.is_admin()));
create policy "Investment admin removes public listing imagery" on storage.objects for delete to authenticated using (
 bucket_id='investment-listing-public' and (select public.is_admin())
);

insert into public.investment_listings(code,title_fr,title_en,sector,location,short_fr,short_en,display_order,publication_status)
values
('aqma','AQMA','AQMA','Construction & rénovation','France','Développer un réseau national d’acquisition de clients et de partenaires de travaux.','Building a national customer acquisition network for construction and renovation.',1,'draft'),
('qenerzy','Qenerzy — Kus Solar Park 1','Qenerzy — Kus Solar Park 1','Énergie solaire','Kazakhstan','Un projet de parc solaire destiné à accompagner la transition énergétique.','A solar park development targeting the energy transition.',2,'draft'),
('bosphoras-luxury-stays','Bosphoras Luxury Stays','Bosphoras Luxury Stays','Hôtellerie et séjours','International','Développer une distribution internationale d’hôtels et de séjours d’exception.','Scaling an international hospitality and luxury travel distribution platform.',3,'draft'),
('cliniqeo','Cliniqeo','Cliniqeo','Santé internationale','France / Turquie','Un accompagnement francophone dans les parcours de soins dentaires internationaux.','French-speaking coordination for international dental care.',4,'draft'),
('medsestra','Medsestra.kz','Medsestra.kz','Services médicaux','Kazakhstan','Développer la coordination de services médicaux et d’assistance.','Scaling medical assistance and coordination services.',5,'draft'),
('lovelockparis','LoveLockParis','LoveLockParis','Technologie & tourisme','France / international','Une expérience numérique autour des souvenirs et des destinations.','A digital experience connecting memories and destinations.',6,'draft')
on conflict(code) do nothing;
