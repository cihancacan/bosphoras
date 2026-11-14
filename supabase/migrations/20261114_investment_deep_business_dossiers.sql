
alter table public.investment_project_drafts
 add column if not exists legal_entity text not null default '',
 add column if not exists funding_type text not null default '',
 add column if not exists annual_revenue text not null default '',
 add column if not exists use_of_funds text not null default '',
 add column if not exists team_summary text not null default '',
 add column if not exists project_timeline text not null default '',
 add column if not exists review_status text not null default 'draft'
   check(review_status in ('draft','received','analysis','documents_requested','qualified','closed')),
 add column if not exists review_note text not null default '';
grant update(legal_entity,funding_type,annual_revenue,use_of_funds,team_summary,project_timeline) on public.investment_project_drafts to authenticated;
grant update(review_status,review_note) on public.investment_project_drafts to authenticated;
create policy "Investment admin reviews entrepreneur projects" on public.investment_project_drafts
 for update to authenticated using ((select is_admin())) with check ((select is_admin()));
