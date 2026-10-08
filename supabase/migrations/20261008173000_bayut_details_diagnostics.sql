alter table public.project_media_api_calls
  add column if not exists response_diagnostics jsonb not null default '{}'::jsonb;
alter table public.project_media_api_calls
  drop constraint if exists project_media_api_calls_result_check;
alter table public.project_media_api_calls
  add constraint project_media_api_calls_result_check
  check (result in ('requested','success','error','no_usable_details'));
-- Previously received HTTP 200 responses but no usable images. A repeat within 24h
-- is unlikely to help and wastes quota; preserve original timestamp and status.
update public.project_media_api_calls
  set result='no_usable_details',
  response_diagnostics=jsonb_build_object(
    'reason','HTTP 200 received; current detail parser found no photos or floorplans',
    'id_source','search-new-projects'
  )
where result='error' and http_status=200;
