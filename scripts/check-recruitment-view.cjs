const test=require('node:test');const assert=require('node:assert/strict');
const {filterRecruitmentApplications,loadRecruitmentApplications}=require('../lib/crm/recruitment.ts');
const rows=[
  {id:'app-existing-contact',full_name:'André Martin',email:'andre@example.invalid',phone:null,locale:'ru',spoken_languages:'Русский, français',role_area:'travel-hospitality',status:'received'},
  {id:'app-no-contact',full_name:'София',email:'sofia@example.invalid',phone:'+90000000',locale:'ar',spoken_languages:'العربية',role_area:'general',status:'reviewing'},
];
test('candidate filters use actual applications without depending on contact tags or links',()=>{
 assert.equal(filterRecruitmentApplications(rows,'','all','all').length,2);
 assert.equal(filterRecruitmentApplications(rows,'andre','all','all')[0].id,'app-existing-contact');
 assert.equal(filterRecruitmentApplications(rows,'СОФИЯ','all','all')[0].id,'app-no-contact');
 assert.equal(filterRecruitmentApplications(rows,'hôtel','all','ru')[0].id,'app-existing-contact');
 assert.equal(filterRecruitmentApplications(rows,'','reviewing','ar')[0].id,'app-no-contact');
 assert.equal(filterRecruitmentApplications(rows,'','reviewing','ru').length,0);
 assert.deepEqual(rows.map(row=>row.status),['received','reviewing']);
});
test('all application pages are loaded beyond the first batch',async()=>{
 const fixtures=Array.from({length:405},(_,id)=>({...rows[0],id:String(id)})),ranges=[];
 const client={from(table){assert.equal(table,'recruitment_applications');return {select(){return this},order(){return this},async range(start,end){ranges.push([start,end]);return {data:fixtures.slice(start,end+1),error:null}}}}};
 const loaded=await loadRecruitmentApplications(client);assert.equal(loaded.length,405);
 assert.deepEqual(ranges,[[0,199],[200,399],[400,599]]);
});
test('permission or network errors produce an error rather than a misleading empty list',async()=>{
 const client={from(){return {select(){return this},order(){return this},async range(){return {data:null,error:new Error('not allowed')}}}}};
 await assert.rejects(()=>loadRecruitmentApplications(client),/not allowed/);
});
