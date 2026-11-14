
-- Review status cannot be edited by entrepreneur accounts.
revoke update(review_status,review_note) on public.investment_project_drafts from authenticated;
create or replace function public.investment_admin_review_draft(
 p_draft_id uuid,p_review_status text,p_review_note text
) returns void language plpgsql security definer set search_path='public' as $$
begin
 if not public.is_admin() then raise exception 'Not authorised'; end if;
 if p_review_status not in ('draft','received','analysis','documents_requested','qualified','closed') then raise exception 'Invalid review status'; end if;
 update public.investment_project_drafts
    set review_status=p_review_status,review_note=left(coalesce(p_review_note,''),2500),updated_at=now()
  where id=p_draft_id;
 if not found then raise exception 'Dossier not found'; end if;
end; $$;
revoke all on function public.investment_admin_review_draft(uuid,text,text) from public,anon,authenticated;
grant execute on function public.investment_admin_review_draft(uuid,text,text) to authenticated;
