#!/usr/bin/env node
/** Reusable Bosphoras photo-identity & private-preview rights gate, first enforced on destination #70.
 * Run after downloading and actually viewing ALL hotel photos; hash/url checks alone are insufficient.
 */
const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const file=process.argv[2] || 'data/travel/vinhHyBayMediaCandidates.json';
const m=JSON.parse(fs.readFileSync(path.resolve(file),'utf8'));
const scenes=m.destinationScenes||[],hotels=m.hotels||[],all=[...scenes,...hotels];
const permittedSubjects=new Set(['hotel-exterior-and-pool','hotel-villa-interior','hotel-guest-room','hotel-pool-residence','hotel-pool-villa','hotel-wellness','hotel-property-facility']);
assert.equal(m.publicUseApproved,false,'Unlicensed owner Preview must never be marked public-use approved');
assert.equal(m.internalReviewedPhotoCount,hotels.length,'Every selected hotel photo must be opened and visually reviewed first');
assert.equal(scenes.length,m.cityCount,'Missing location views');
assert.equal(hotels.length,m.hotelCount,'Missing hotel views');
assert.equal(new Set(all.map(p=>p.key)).size,all.length);
assert.equal(new Set(all.map(p=>p.sha256)).size,all.length,'Duplicated image bytes');
assert.equal(new Set(all.map(p=>p.pixelFingerprint)).size,all.length,'Duplicated/visually identical images');
const hotelNames=new Set(hotels.map(p=>p.property));
assert.equal(hotels.length,hotelNames.size*3,'Exactly 3 non-repeated photos per real hotel');
const lowResolution=[];
for(const p of hotels){
 assert.equal(p.visuallyVerified,true,'Photo not visually inspected: '+p.key);
 assert.equal(p.previewVisualApproved,true,'Photo not explicitly allowed for private preview: '+p.key);
 assert(permittedSubjects.has(p.subjectClass),'Non-hotel visual subject: '+p.key);
 assert(p.reviewNote && p.reviewNote.length>24,'Missing description of actual visual evidence: '+p.key);
 assert(p.visualIdentityEvidence && p.visualIdentityEvidence.length>30,'Missing genuine hotel/room visual identity evidence: '+p.key);
 assert(/^https:\/\//.test(p.publicPreviewUrl)&&/^https:\/\//.test(p.sourcePage),'Missing real original URL or source page: '+p.key);
 assert(p.frCaption&&p.enCaption&&p.license&&p.credit,'Missing bilingual caption, license or credit: '+p.key);
 assert.equal(p.commercialRightsCleared,false,'Hotel photo rights must be verified separately before production: '+p.key);
 assert.equal(p.publicUseApproved,false,'Cannot claim commercial publication rights: '+p.key);
 assert(!/trang-chu-163\.jpg|dich-vu-tau-day-kinh-tham-quan-vinh-ngam-san-ho/i.test(p.publicPreviewUrl),'Known disallowed promotional/boat photo: '+p.key);
 assert(!/generic|promotional|banner|stock|travel icon|illustration|mockup|tour group/i.test(p.subjectClass),'Rejected off-topic hotel imagery: '+p.key);
 if(!p.sourceWidth||!p.sourceHeight||p.sourceWidth<800||p.sourceHeight<450)lowResolution.push(p.key);
}
for(const p of scenes){
 assert(p.commercialRightsCleared,'Unlicensed destination photo: '+p.key);
 assert(/^https:\/\/commons\.wikimedia\.org\/wiki\/File:/.test(p.sourcePage),'Scene from unexpected source: '+p.key);
 assert(/^(CC BY(?:-SA)? [234]\.0|CC0|Public domain)/i.test(p.license),'Scene license not verified: '+p.key);
}
if(lowResolution.length)console.warn('PRIVATE_PREVIEW_LOW_RES_IMAGES_REQUIRING_HIGH_RES_REPLACEMENTS_BEFORE_PUBLICATION:',lowResolution.join(', '));
console.log('TRAVEL_PHOTO_STANDARDS_PRIVATE_PREVIEW_PASS:',m.destination,hotels.length,'visually reviewed real hotel photos;',scenes.length,'attributed landscapes; public rights NOT cleared');
