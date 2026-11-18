-- Public editorial SEO metadata only; does not expose private project drafts.
create table if not exists public.investment_project_seo (
 code text not null references public.investment_listings(code) on delete cascade,
 locale text not null check (locale in ('fr','en','ru','ar')),
 title text not null default '' check (char_length(title)<=100),
 description text not null default '' check (char_length(description)<=200),
 primary key(code,locale)
);
alter table public.investment_project_seo enable row level security;
revoke all on public.investment_project_seo from anon,authenticated;
grant select on public.investment_project_seo to anon,authenticated;
grant insert,update,delete on public.investment_project_seo to authenticated;
create policy "Public reads investment SEO" on public.investment_project_seo for select to anon,authenticated using (true);
create policy "Admin inserts investment SEO" on public.investment_project_seo for insert to authenticated with check ((select public.is_admin()));
create policy "Admin updates investment SEO" on public.investment_project_seo for update to authenticated using ((select public.is_admin())) with check ((select public.is_admin()));
create policy "Admin deletes investment SEO" on public.investment_project_seo for delete to authenticated using ((select public.is_admin()));
alter table public.investment_leads drop constraint investment_leads_kind_check;
alter table public.investment_leads add constraint investment_leads_kind_check check (kind in ('placement','project_access','company_finance','counterproposal'));
alter table public.investment_leads add constraint investment_leads_counterproposal_check check (kind <> 'counterproposal' or (project_code is not null and char_length(trim(notes))>=10));
-- Only administrators need object SELECT for managing approved public images.
create policy "Investment admin reads public listing objects" on storage.objects for select to authenticated using (bucket_id='investment-listing-public' and (select public.is_admin()));
