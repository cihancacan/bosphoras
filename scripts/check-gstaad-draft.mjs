#!/usr/bin/env node
/** Gstaad source-draft guard: preparation is not a live or bookable premium page. */
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
function read(path){return readFileSync(path,"utf8");}
function objectInTs(path) {
  const source=read(path);
  const start=source.indexOf("= {");
  assert(start>=0, "Missing exported object in "+path);
  const end=source.lastIndexOf("};");
  assert(end>start, "Incomplete draft in "+path);
  return JSON.parse(source.slice(start+2,end+1).trim());
}
const guide=objectInTs("data/travel/gstaadDraftGuide.ts");
const faq=objectInTs("data/travel/gstaadDraftFaq.ts");
const media=JSON.parse(read("data/travel/gstaadMediaCandidates.json"));
const catalogue=read("data/travel/destinations.ts");
const registry=read("data/travel/featuredCityGuides.ts");
assert.equal(guide.slug,"gstaad");
assert.equal(guide.country,"Suisse");
assert.equal(guide.areas.length,5,"Gstaad requires five distinct geographic sectors");
assert.equal(new Set(guide.areas.map(x=>x.name)).size,5);
assert.equal(guide.hotels.length,4,"Gstaad requires four real hotels");
assert.equal(new Set(guide.hotels.map(x=>x.name)).size,4);
assert.equal(new Set(guide.hotels.map(x=>x.officialUrl)).size,4);
for(const hotel of guide.hotels){
  assert(hotel.officialUrl.startsWith("https://"));
  assert(hotel.fr.length>200&&hotel.en.length>200);
  assert(hotel.frWatch.length>50&&hotel.enWatch.length>50);
}
assert(guide.introFr.length>220&&guide.introEn.length>220);
assert(guide.editorialFr.length>360&&guide.editorialEn.length>360);
for(const lang of ["fr","en"]){
  assert.equal(faq[lang].length,7);
  assert(faq[lang].every(x=>x.q.length>=15&&x.a.length>=75));
}
assert.equal(media.destination,"gstaad");
assert.equal(media.hotels.length,12);
assert.equal(media.destinationScenes.length,9);
assert.equal(media.expectedHotelPhotos,12);
assert.equal(media.expectedDestinationPhotos,9);
assert(media.hotels.every((x,i)=>x.property===guide.hotels[Math.floor(i/3)].name));
assert.equal(media.visuallyVerified,false);
assert.equal(media.approvedForCommercialPublication,false);
assert(media.hotels.concat(media.destinationScenes).every(x=>x.visuallyVerified!==true),
  "Do not mark unreviewed photos as verified");
assert(catalogue.includes('slug: "gstaad"'),"The original 88 destinations must include Gstaad");
assert(catalogue.includes("approvedDestinationSlugs: ReadonlySet<string> = new Set([])"),"Noindex guard missing");
assert(!registry.includes("'gstaad': gstaadGuide"),"Cannot publish Gstaad while images are unreviewed");
const present=media.hotels.concat(media.destinationScenes).filter(x=>x.status==="candidate_needs_visual_review");
const urls=present.map(x=>(x.downloadUrl||"").split("?")[0]);
const duplicates=urls.filter((x,i)=>urls.indexOf(x)!==i);
console.log("Gstaad draft: 4 hotels, 5 sectors, FR+EN, 7 FAQ/language: PASS");
console.log("Image source candidates:",present.length,"/21 (not approved)");
if(duplicates.length) console.warn("Duplicate original image URLs require replacement:",[...new Set(duplicates)]);
console.log("Gstaad premium route deliberately not published; production/noindex unchanged.");
