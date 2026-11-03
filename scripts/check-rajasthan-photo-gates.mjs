#!/usr/bin/env node
/**
 * Rajasthan #78 strict photo approval gate.
 * Run before registering this draft as a live featured city guide or deploying.
 * Usage: node scripts/check-rajasthan-photo-gates.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const root=process.cwd();
const manifest=JSON.parse(fs.readFileSync(path.join(root,'data/travel/rajasthanPhotoProductionPlan.json'),'utf8'));
const errors=[];
const fail=(message)=>errors.push(message);
const scenes=manifest.sceneCandidates||[];
const hotels=manifest.hotelPhotoSlots||[];
const all=[...scenes,...hotels];
if(manifest.destination!=='rajasthan'||manifest.destinationNumber!==78)fail('wrong destination number or slug');
if(scenes.length!==9||hotels.length!==12||all.length!==21)fail('nine geographic and twelve hotel photos are required');
if(new Set(all.map(x=>x.key)).size!==21)fail('duplicate slot keys');
if(new Set(scenes.map(x=>x.sourcePage)).size!==9)fail('duplicate Commons source photos');
if(!manifest.previewApproved)fail('owner Preview approval is missing');
if(manifest.publicUseApproved)fail('public use must be separately approved');
const shaSet=new Set();
let totalBytes=0;
for(const p of all){
  const k=p.key||'<unnamed>';
  if(!p.identityVisuallyReviewed||!p.identityApproved)fail(k+': original not visually verified against the exact location or hotel');
  if(!p.convertedWebPVerified)fail(k+': original-to-WebP conversion not QA approved');
  if(p.kind==='regional-landscape'){
    if(!p.credit||!p.license||!p.licenseUrl||!p.sourcePage?.startsWith('https://commons.wikimedia.org/wiki/File:'))
      fail(k+': geographic source credit / Creative Commons evidence missing');
    if(!p.verifiedOriginalImageUrl)fail(k+': original source URL not verified');
    if(!p.sourceImageDownloaded)fail(k+': original not downloaded');
    if(!p.commercialRightsCandidate)fail(k+': license does not support intended use');
  } else {
    if(!p.hotelOfficialUrl||!p.photoSourcePage||!p.sourceImageUrl||!p.usageRightsEvidence||!p.attribution)
      fail(k+': exact hotel identity, source or usage rights not established');
  }
  const originalSHA = p.verifiedOriginalSHA256 || p.sourceSHA256;
  if(!/^[0-9a-f]{64}$/i.test(originalSHA||'')) fail(k+': original photo SHA-256 missing');
  if(!/^\/images\/travel\/rajasthan-premium\/(destination|hotels)\/[a-z0-9-]+\.webp$/.test(p.webpLocalPath||'')){
    fail(k+': invalid local media path');continue;
  }
  const file=path.join(root,'public',p.webpLocalPath.slice(1));
  if(!fs.existsSync(file)){fail(k+': WebP binary absent');continue;}
  const bytes=fs.readFileSync(file);
  if(bytes.length<5000||bytes.length>350000||
     bytes.toString('ascii',0,4)!=='RIFF'||bytes.toString('ascii',8,12)!=='WEBP'){
    fail(k+': invalid or oversized WebP binary');
    continue;
  }
  totalBytes+=bytes.length;
  const digest=crypto.createHash('sha256').update(bytes).digest('hex');
  if(shaSet.has(digest)) fail(k+': exact duplicate WebP binary');
  shaSet.add(digest);
}
if(totalBytes>5000000)fail('total local images exceed 5MB');
if(errors.length){
  console.error('RAJASTHAN_78_NOT_READY '+errors.length+' blockers');
  for(const e of errors.slice(0,55))console.error(' - '+e);
  process.exitCode=1;
}else console.log('RAJASTHAN_78_PRIVATE_PREVIEW_MEDIA_READY: 21 reviewed distinct local WebPs');
