
grant insert on public.investment_listing_media to authenticated;
create policy "Investment admin adds approved listing images" on public.investment_listing_media for insert to authenticated with check (
  (select public.is_admin()) and owner_id=(select auth.uid()) and
  status='approved' and public_path<>'' and listing_code is not null
);
