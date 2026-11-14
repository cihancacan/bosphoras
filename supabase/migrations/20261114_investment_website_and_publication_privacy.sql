
alter table public.investment_listings add column if not exists official_website text not null default ''
 check (official_website='' or (length(official_website)<=500 and official_website ~ '^https://'));
update public.investment_listings set official_website=case code when 'aqma' then 'https://aqma.fr' when 'cliniqeo' then 'https://cliniqeo.com' when 'medsestra' then 'https://medsestra.kz' when 'bosphoras-luxury-stays' then 'https://www.bosphoras.com/travel' else official_website end
where official_website='';
-- Public readers never receive upload owners, private storage paths or draft identifiers.
revoke select on public.investment_listing_media from anon;
grant select(id,listing_code,category,public_path,sort_order,status) on public.investment_listing_media to anon;
drop policy if exists "Public sees only approved images of published projects" on public.investment_listing_media;
create policy "Anonymous sees only approved public images" on public.investment_listing_media for select to anon using (
 status='approved' and public_path<>'' and exists(select 1 from public.investment_listings l where l.code=listing_code and l.publication_status='published')
);
-- Entrepreneurs cannot create an already-approved dossier.
revoke insert on public.investment_project_drafts from authenticated;
grant insert(user_id,project_name,country,sector,funding_target,website,summary,legal_entity,funding_type,annual_revenue,use_of_funds,team_summary,project_timeline) on public.investment_project_drafts to authenticated;
