// Export only published editorial text; never send account or visitor data to a model.
const fs=require('node:fs'),assert=require('node:assert/strict');
const {featuredCityGuides}=require('../data/travel/featuredCityGuides');
const {travelDestinations}=require('../data/travel/destinations');
const {getApprovedDestinationPhotos,getApprovedHotelPhotos,getGuideSourceFaq,hotelEditorialByCity}=require('../components/travel/FeaturedCityGuide');
const out={};const lookup=new Map(travelDestinations.map(d=>[d.slug,d]));
for(const city of Object.values(featuredCityGuides)){
 const dest=lookup.get(city.slug);
 const hotels=city.hotels.map(h=>{
  const editorial=hotelEditorialByCity[city.slug]?.[h.name];
  return [h.area,h.en,h.enWatch,editorial?.enBest||'',editorial?.enStory||''];
 });
 out[city.slug]={name:city.name,country:dest?.country||city.country,eyebrow:city.eyebrowEn,heading:city.headingEn,intro:city.introEn,editorial:city.editorialEn,hotelIntro:city.hotelIntroEn,areas:city.areas.map(a=>[a.enName,a.en,a.enWatch]),experiences:city.experiences.map(e=>[e.enTitle,e.en]),checks:city.checksEn,hotels,faq:getGuideSourceFaq(city,'en').map(f=>[f.q,f.a]),photoCaptions:getApprovedDestinationPhotos(city).map(p=>p.en),hotelCaptionGroups:city.hotels.map(h=>getApprovedHotelPhotos(city.slug,h.name).slice(0,3).map(p=>p.en)),seoTitle:city.name+': luxury stays, areas and experiences',hotelSeoTitle:'Luxury hotels in '+city.name+': curated guide',seoDescription:city.introEn};
}
assert.equal(Object.keys(out).length,88);
const manual=require('../data/travel/localized/desaru-coast.json');
for(const loc of ['ru','ar']){
 const src=out['desaru-coast'],target=manual[loc];
 for(const key of ['areas','experiences','checks','hotels','faq','photoCaptions','hotelCaptionGroups'])assert.equal(target[key].length,src[key].length,loc+': '+key);
}
fs.writeFileSync(process.argv[2],JSON.stringify(out,null,2));
console.log('88 editorial sources exported; Desaru manual translation coverage verified.');
