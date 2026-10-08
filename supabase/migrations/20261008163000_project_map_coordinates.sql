alter table public.property_listings
 add column if not exists project_latitude numeric,
 add column if not exists project_longitude numeric;
alter table public.property_listings
 drop constraint if exists project_listing_latitude_check;
alter table public.property_listings
 add constraint project_listing_latitude_check
 check(project_latitude is null or (project_latitude between -90 and 90));
alter table public.property_listings
 drop constraint if exists project_listing_longitude_check;
alter table public.property_listings
 add constraint project_listing_longitude_check
 check(project_longitude is null or (project_longitude between -180 and 180));
comment on column public.property_listings.project_latitude is 'Verified or manually supplied location coordinate; otherwise map falls back to district.';
comment on column public.property_listings.project_longitude is 'Verified or manually supplied location coordinate; otherwise map falls back to district.';