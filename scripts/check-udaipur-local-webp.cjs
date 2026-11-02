#!/usr/bin/env node
/** Udaipur #76 physically committed WebP gallery regression gate (not just .webp name). */
const assert=require('node:assert/strict');
const fs=require('node:fs');
const crypto=require('node:crypto');
const manifest=require('../data/travel/udaipurMediaCandidates.json');
const audit=require('../data/travel/udaipurWebpOptimization.json');
const images=[...manifest.destinationScenes,...manifest.hotels];
assert.equal(images.length,21);
assert.equal(audit.totalPhotos,21);
assert.equal(audit.photos.length,21);
assert.equal(audit.publicUseApproved,false);
let total=0;
for(const photo of images){
 const report=audit.photos.find(x=>x.key===photo.key);
 assert(report,'Missing image audit: '+photo.key);
 assert.equal(report.localPath,photo.localPath);
 assert.equal(report.commercialRightsCleared,photo.commercialRightsCleared);
 assert.equal(report.reviewedOriginalSha256,photo.sha256);
 assert(report.visualDhashDistance<=6);
 const path='public'+photo.localPath;
 assert(fs.existsSync(path),'Missing actual WebP binary: '+path);
 const bytes=fs.readFileSync(path);
 assert.equal(bytes.toString('ascii',0,4),'RIFF');
 assert.equal(bytes.toString('ascii',8,12),'WEBP');
 assert.equal(bytes.length,report.webpBytes);
 assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),report.webpSha256);
 assert(bytes.length<350000);
 total+=bytes.length;
}
const {udaipurGuide}=require('../data/travel/udaipurGuide.ts');
const {udaipurHotelEditorial,confirmedUdaipurPreviewAssets}=require('../data/travel/udaipurPremiumEditorial.ts');
assert.equal(Object.keys(udaipurGuide.photos).length,9);
assert.equal(confirmedUdaipurPreviewAssets.size,21);
for(const p of Object.values(udaipurGuide.photos))assert(p.src.startsWith('/images/travel/udaipur-premium/')&&p.src.endsWith('.webp'));
for(const h of Object.values(udaipurHotelEditorial)){
 assert.equal(h.photos.length,3);
 for(const p of h.photos)assert(p.src.startsWith('/images/travel/udaipur-premium/')&&p.src.endsWith('.webp'));
}
console.log('UDAIPUR_21_LOCAL_WEBP_QA_SUCCESS',total,'bytes across',images.length,'actual compressed photos. Original rights restrictions unchanged.');
