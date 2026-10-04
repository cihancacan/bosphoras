
-- Bosphoras real-estate OS hardening and compatibility layer.

do $$ begin
  alter table public.crm_activities add constraint crm_activities_priority_check
    check (priority in ('low','normal','high','urgent'));
exception when duplicate_object then null;
end $$;

do $$ begin
  alter table public.property_documents add constraint property_documents_visibility_check
    check (visibility in ('internal','partner','client'));
exception when duplicate_object then null;
end $$;

drop policy if exists "Partners read own deal documents" on public.property_documents;
create policy "Partners read own deal documents" on public.property_documents
for select to authenticated using (
  deal_id is not null and exists(
    select 1 from public.crm_deals d
    where d.id=deal_id and d.owner_user_id=(select auth.uid())
  )
);

drop policy if exists "Partners add own deal documents metadata" on public.property_documents;
create policy "Partners add own deal documents metadata" on public.property_documents
for insert to authenticated with check (
  deal_id is not null and exists(
    select 1 from public.crm_deals d
    where d.id=deal_id and d.owner_user_id=(select auth.uid())
  )
);

drop policy if exists "Users read deal documents" on storage.objects;
create policy "Users read deal documents" on storage.objects
for select to authenticated using (
  bucket_id='deal-documents' and (
    (select public.is_admin()) or exists(
      select 1 from public.crm_deals d
      where d.id=((storage.foldername(name))[1])::uuid
        and d.owner_user_id=(select auth.uid())
    )
  )
);

drop policy if exists "Users upload deal documents" on storage.objects;
create policy "Users upload deal documents" on storage.objects
for insert to authenticated with check (
  bucket_id='deal-documents' and (
    (select public.is_admin()) or exists(
      select 1 from public.crm_deals d
      where d.id=((storage.foldername(name))[1])::uuid
        and d.owner_user_id=(select auth.uid())
    )
  )
);

drop policy if exists "Users delete deal documents" on storage.objects;
create policy "Users delete deal documents" on storage.objects
for delete to authenticated using (
  bucket_id='deal-documents' and (
    (select public.is_admin()) or exists(
      select 1 from public.crm_deals d
      where d.id=((storage.foldername(name))[1])::uuid
        and d.owner_user_id=(select auth.uid())
    )
  )
);

alter policy "Users read own profile" on public.profiles
using ((user_id=(select auth.uid())) or (select public.is_admin()));

alter policy "Partners read own submissions" on public.property_listing_submissions
using ((submitted_by=(select auth.uid())) and (partner_id=(select public.current_partner_id())));

alter policy "Partners manage assigned CRM deals" on public.crm_deals
using ((owner_user_id=(select auth.uid())) and (select public.is_active_user()))
with check ((owner_user_id=(select auth.uid())) and (partner_id=(select public.current_partner_id())) and (select public.is_active_user()));

alter policy "Partners manage assigned CRM activities" on public.crm_activities
using ((owner_user_id=(select auth.uid())) and (select public.is_active_user()))
with check ((owner_user_id=(select auth.uid())) and (select public.is_active_user()));

alter policy "Partners read own chat thread" on public.chat_threads
using ((partner_user_id=(select auth.uid())) and (select public.is_active_user()));

alter policy "Partners create own chat thread" on public.chat_threads
with check ((partner_user_id=(select auth.uid())) and (select public.is_active_user()));

alter policy "Partners read own chat messages" on public.chat_messages
using ((select public.is_active_user()) and exists(
  select 1 from public.chat_threads t
  where t.id=chat_messages.thread_id and t.partner_user_id=(select auth.uid())
));

alter policy "Partners send own chat messages" on public.chat_messages
with check (
  sender_user_id=(select auth.uid())
  and (select public.is_active_user())
  and exists(
    select 1 from public.chat_threads t
    where t.id=chat_messages.thread_id
      and t.partner_user_id=(select auth.uid())
      and t.status='open'
  )
);

alter policy "Users read own notifications" on public.notifications
using ((user_id=(select auth.uid())) or (select public.is_admin()));

alter policy "Users mark own notifications read" on public.notifications
using (user_id=(select auth.uid()))
with check (user_id=(select auth.uid()));

alter policy "Partners manage own property import jobs" on public.property_import_jobs
using ((created_by=(select auth.uid())) and (select public.is_active_user()))
with check ((created_by=(select auth.uid())) and (select public.is_active_user()));

alter policy "Partners upload own partner documents metadata" on public.partner_documents
with check (
  partner_id=(select public.current_partner_id())
  and uploaded_by=(select auth.uid())
  and (select public.is_active_user())
);

alter policy "Partners add own property documents metadata" on public.property_documents
with check (
  partner_id=(select public.current_partner_id())
  and uploaded_by=(select auth.uid())
  and (select public.is_active_user())
);

alter policy "Partners manage own scenarios" on public.investment_scenarios
using ((owner_user_id=(select auth.uid())) and (select public.is_active_user()))
with check (
  owner_user_id=(select auth.uid())
  and partner_id=(select public.current_partner_id())
  and (select public.is_active_user())
);

alter policy "Partners manage own viewings" on public.viewings
using ((owner_user_id=(select auth.uid())) and (select public.is_active_user()))
with check (
  owner_user_id=(select auth.uid())
  and partner_id=(select public.current_partner_id())
  and (select public.is_active_user())
);

alter policy "Partners read assigned CRM contacts" on public.crm_contacts
using (
  owner_user_id=(select auth.uid())
  and partner_id=(select public.current_partner_id())
  and (select public.is_active_user())
);

alter policy "Partners create assigned CRM contacts" on public.crm_contacts
with check (
  owner_user_id=(select auth.uid())
  and partner_id=(select public.current_partner_id())
  and created_by=(select auth.uid())
  and (select public.is_active_user())
);

alter policy "Partners update assigned CRM contacts" on public.crm_contacts
using (
  owner_user_id=(select auth.uid())
  and partner_id=(select public.current_partner_id())
  and (select public.is_active_user())
)
with check (
  owner_user_id=(select auth.uid())
  and partner_id=(select public.current_partner_id())
  and (select public.is_active_user())
);

revoke execute on function public.admin_assign_crm_contact(uuid,uuid) from public,anon;
revoke execute on function public.admin_prepare_partner_account(text,text,text,text,text,text) from public,anon;
revoke execute on function public.admin_review_listing_submission(uuid,text,text,boolean) from public,anon;
revoke execute on function public.admin_set_partner_status(uuid,text) from public,anon;
revoke execute on function public.current_partner_id() from public,anon;
revoke execute on function public.is_active_user() from public,anon;
revoke execute on function public.is_admin() from public,anon;
revoke execute on function public.partner_save_listing_draft(uuid,uuid,jsonb) from public,anon;
revoke execute on function public.partner_submit_listing(uuid) from public,anon;

grant execute on function public.admin_assign_crm_contact(uuid,uuid) to authenticated,service_role;
grant execute on function public.admin_prepare_partner_account(text,text,text,text,text,text) to authenticated,service_role;
grant execute on function public.admin_review_listing_submission(uuid,text,text,boolean) to authenticated,service_role;
grant execute on function public.admin_set_partner_status(uuid,text) to authenticated,service_role;
grant execute on function public.current_partner_id() to authenticated,service_role;
grant execute on function public.is_active_user() to authenticated,service_role;
grant execute on function public.is_admin() to authenticated,service_role;
grant execute on function public.partner_save_listing_draft(uuid,uuid,jsonb) to authenticated,service_role;
grant execute on function public.partner_submit_listing(uuid) to authenticated,service_role;
