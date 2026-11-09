-- Add travel and hospitality to recruitment only; retain every existing area.
alter table public.recruitment_applications
  drop constraint recruitment_applications_role_area_check,
  add constraint recruitment_applications_role_area_check
    check (role_area in ('client-relations','property-advisory','concierge','operations','general','travel-hospitality'));
