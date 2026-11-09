-- Run with database administrator access. Every test record and contact change is rolled back.
begin;
create temporary table recruitment_qa_fixture as
select
  (select user_id from public.profiles where role='admin' and status='active' order by created_at limit 1) as admin_id,
  (select id from public.crm_contacts where length(regexp_replace(coalesce(phone,''),'[^0-9]+','','g'))>=7 limit 1) as phone_contact_id,
  (select phone from public.crm_contacts where length(regexp_replace(coalesce(phone,''),'[^0-9]+','','g'))>=7 limit 1) as shared_phone,
  c.id as email_contact_id,c.email as existing_email,c.owner_user_id as original_owner,c.tags as original_tags
from public.crm_contacts c
where c.email ~* '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'
order by (c.owner_user_id=(select user_id from public.profiles where role='admin' and status='active' order by created_at limit 1)), c.created_at desc
limit 1;
grant select on recruitment_qa_fixture to anon;
set local role anon;
insert into public.recruitment_applications(id,full_name,email,phone,locale,spoken_languages,role_area,experience_summary,consent)
select '19f1a382-640a-4ba8-9401-4cd6608aeb91','Bosphoras QA rollback','careers-duplicate-phone-qa@example.invalid',shared_phone,'ar','العربية، Русский','travel-hospitality','Transactional duplicate-phone recruitment verification; rolled back.',true
from recruitment_qa_fixture;
insert into public.recruitment_applications(id,full_name,email,locale,spoken_languages,role_area,experience_summary,consent)
select '19f1a382-640a-4ba8-9401-4cd6608aeb92','Bosphoras QA rollback',existing_email,'ru','Русский, العربية','travel-hospitality','Transactional existing-email recruitment verification; rolled back.',true
from recruitment_qa_fixture;
reset role;
do $$
declare f record; a record; r record; c record;
begin
  select * into strict f from recruitment_qa_fixture;
  select * into strict a from public.recruitment_applications where id='19f1a382-640a-4ba8-9401-4cd6608aeb91';
  select * into strict c from public.crm_contacts where id=a.crm_contact_id;
  select * into strict r from public.crm_contact_requests where id=a.crm_request_id;
  if a.phone is distinct from f.shared_phone or c.phone is not null or c.id=f.phone_contact_id
    or position(f.shared_phone in r.notes)=0 or r.owner_user_id<>f.admin_id or r.partner_id is not null then
    raise exception 'Shared phone handling failed';
  end if;
  select * into strict a from public.recruitment_applications where id='19f1a382-640a-4ba8-9401-4cd6608aeb92';
  select * into strict c from public.crm_contacts where id=a.crm_contact_id;
  select * into strict r from public.crm_contact_requests where id=a.crm_request_id;
  if c.id<>f.email_contact_id or c.owner_user_id<>f.original_owner
    or r.owner_user_id<>f.admin_id or r.partner_id is not null then
    raise exception 'Existing email handling failed';
  end if;
  if f.original_owner<>f.admin_id and c.tags is distinct from f.original_tags then
    raise exception 'Partner contact changed';
  end if;
end $$;
select 'PASS: anonymous applications with an existing phone or email are recorded and privately routed; original contact ownership retained' as result;
rollback;
