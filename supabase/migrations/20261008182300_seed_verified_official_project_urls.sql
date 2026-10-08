update public.developers set website='https://www.emaar.com'
 where lower(name)='emaar' and (website is null or trim(website)='');
update public.developers set website='https://meraas.com'
 where lower(name)='meraas' and (website is null or trim(website)='');
update public.developers set website='https://www.binghatti.com'
 where lower(name)='binghatti' and (website is null or trim(website)='');
update public.real_estate_projects set official_project_url='https://www.emaar.com/en/properties/nima'
 where source_system='bayut' and lower(name)='nima' and official_project_url is null;
update public.real_estate_projects set official_project_url='https://nasg.meraas.com/old-home-3'
 where source_system='bayut' and lower(name)='nad al sheba gardens 7' and official_project_url is null;
update public.real_estate_projects set official_project_url='https://www2.binghatti.com/bugatti-residences-assets/'
 where source_system='bayut' and lower(name)='bugatti residences by binghatti' and official_project_url is null;
