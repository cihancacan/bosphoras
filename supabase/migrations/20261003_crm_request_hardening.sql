-- Follow-up hardening for CRM request indexes and listing-internal trigger execution.

create index if not exists crm_contact_requests_partner_idx on public.crm_contact_requests(partner_id);
create index if not exists crm_contact_requests_created_by_idx on public.crm_contact_requests(created_by);

-- This function is trigger-only. Do not expose it as an RPC endpoint.
revoke execute on function public.sync_listing_internal_from_approved_submission() from public;
revoke execute on function public.sync_listing_internal_from_approved_submission() from anon;
revoke execute on function public.sync_listing_internal_from_approved_submission() from authenticated;
