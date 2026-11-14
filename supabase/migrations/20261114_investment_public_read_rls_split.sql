
drop policy if exists "Published investment listings only" on public.investment_listings;
create policy "Public sees published investment listings" on public.investment_listings
  for select to anon,authenticated using (publication_status='published');
create policy "Administrators read all investment listing drafts" on public.investment_listings
  for select to authenticated using ((select public.is_admin()));

drop policy if exists "Approved project images or own private media" on public.investment_listing_media;
create policy "Public sees only approved images of published projects" on public.investment_listing_media
 for select to anon,authenticated using (
  status='approved' and public_path<>'' and
  exists(select 1 from public.investment_listings l where l.code=listing_code and l.publication_status='published')
 );
create policy "Owner and investment admins read private project media" on public.investment_listing_media
 for select to authenticated using (owner_id=(select auth.uid()) or (select public.is_admin()));
