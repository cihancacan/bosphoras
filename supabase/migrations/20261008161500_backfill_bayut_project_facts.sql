-- Repair legacy Bayut imports where a numeric floor area was mistakenly written as
-- the district, and where the source's completion timestamp was ignored.
with raw as (
  select p.id, c.id candidate_id,
    nullif(trim(c.source_payload->'location'->-2->>'name'),'') as proper_district,
    case when (c.source_payload #>> '{completionDetails,completionDate}') ~ '^[0-9]{10}$'
      then to_timestamp((c.source_payload #>> '{completionDetails,completionDate}')::bigint)::date
      else null::date end as delivery,
    coalesce((c.source_payload #>> '{paymentPlanSummaries,0,breakdown,downPaymentPercentage}')::numeric,0) as down,
    coalesce((c.source_payload #>> '{paymentPlanSummaries,0,breakdown,preHandoverPercentage}')::numeric,0) as during,
    coalesce((c.source_payload #>> '{paymentPlanSummaries,0,breakdown,handoverPercentage}')::numeric,0) as handover,
    coalesce((c.source_payload #>> '{paymentPlanSummaries,0,breakdown,postHandoverPercentage}')::numeric,0) as after
  from public.real_estate_projects p
  join public.project_import_candidates c on c.imported_project_id=p.id
  where p.source_system='bayut'
), fixed as (
  select raw.*,
    (select coalesce(jsonb_agg(jsonb_build_object(
      'label',jsonb_build_object('fr',stage.fr,'en',stage.en,'ru',stage.ru,'ar',stage.ar),
      'due',jsonb_build_object('fr','À confirmer','en','To confirm','ru','Уточняется','ar','يُؤكد لاحقًا'),
      'percentage',stage.pct
    ) order by stage.idx),'[]'::jsonb) from (values
      (1,'Acompte','Down payment','Первый взнос','دفعة أولى',raw.down),
      (2,'Avant livraison','Before handover','До сдачи','قبل التسليم',raw.during),
      (3,'À la livraison','At handover','При сдаче','عند التسليم',raw.handover),
      (4,'Après livraison','After handover','После сдачи','بعد التسليم',raw.after)
    ) as stage(idx,fr,en,ru,ar,pct) where stage.pct>0 and stage.pct<=100) as plan
  from raw
)
update public.real_estate_projects p set
  district=case when (p.district is null or p.district ~ '^[0-9]+([.][0-9]+)?$')
        and f.proper_district is not null then f.proper_district else p.district end,
  completion_date=coalesce(p.completion_date,f.delivery),
  handover_text=case when p.handover_text is null or p.handover_text in ('under-construction','completed','ready')
     then coalesce(to_char(coalesce(p.completion_date,f.delivery),'YYYY-MM-DD'),p.handover_text) else p.handover_text end,
  payment_plan=case when (p.payment_plan is null or p.payment_plan='[]'::jsonb)
     and f.down+f.during+f.handover+f.after between 99.5 and 100.5
     then f.plan else p.payment_plan end,
  description=case when p.description::text like '%[object Object]%'
    then jsonb_build_object(
      'fr','Le programme '||p.name||' se situe à '||coalesce(f.proper_district,p.district,'Dubai')||', '||coalesce(p.city,'Dubai')||'. La sélection et les prix proviennent d’une offre immobilière consultée. Les types de logements, les tarifs de toutes les unités et les disponibilités sont à confirmer auprès du promoteur.'||
        case when f.delivery is not null then ' Livraison prévisionnelle indiquée : '||to_char(f.delivery,'DD/MM/YYYY')||'.' else '' end,
      'en','The '||p.name||' project is located in '||coalesce(f.proper_district,p.district,'Dubai')||', '||coalesce(p.city,'Dubai')||'. Indicative pricing comes from a source listing. Full inventory and actual availability require developer confirmation.'||
        case when f.delivery is not null then ' Reported expected handover: '||to_char(f.delivery,'DD/MM/YYYY')||'.' else '' end,
      'ru','Жилой проект '||p.name||' в районе '||coalesce(f.proper_district,p.district,'Dubai')||'. Цены и доступность необходимо уточнить у застройщика.',
      'ar','مشروع '||p.name||' في '||coalesce(f.proper_district,p.district,'دبي')||'. الأسعار والتوافر بحاجة إلى تأكيد المطور.'
    ) else p.description end
from fixed f where p.id=f.id;

update public.project_import_candidates c set
  district=coalesce(nullif(trim(source_payload->'location'->-2->>'name'),''),c.district),
  completion_date=case when completion_date is null
    and (source_payload #>> '{completionDetails,completionDate}') ~ '^[0-9]{10}$'
  then to_timestamp((source_payload #>> '{completionDetails,completionDate}')::bigint)::date
  else completion_date end
where source_system='bayut'
  and jsonb_typeof(source_payload->'location')='array'
  and (district is null or district ~ '^[0-9]+([.][0-9]+)?$');