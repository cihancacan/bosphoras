-- Newly imported source offers are not confirmed unit inventory.
-- Keep unknown stock out of the available count until verified with the developer.
alter table public.project_units
  drop constraint if exists project_units_status_check;

alter table public.project_units
  add constraint project_units_status_check
  check (status in ('unverified','available','option','reserved','deposit_received','contracted','sold','withdrawn'));

alter table public.project_units
  alter column status set default 'unverified';

-- Only reclassify completely empty, unpriced Bayut placeholders previously
-- auto-marked as available by the old create-unit form.
update public.project_units
set status='unverified', last_verified_at=null
where status='available'
  and source_system='bayut'
  and unit_number is null and external_id is null
  and list_price is null and cash_price is null and installment_price is null
  and gross_area_m2 is null;
