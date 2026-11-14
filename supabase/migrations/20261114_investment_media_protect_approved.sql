drop policy if exists "Owner or admin deletes media" on public.investment_listing_media;
create policy "Owner removes unapproved media or admin manages all" on public.investment_listing_media for delete to authenticated using (
 (owner_id=(select auth.uid()) and status<>'approved') or (select public.is_admin())
);