#!/usr/bin/env node
/**
 * Rajasthan #78 protected Preview quality gate.
 * Usage: node scripts/check-rajasthan-photo-gates.mjs
 * This does NOT authorize indexation or commercial hotel-media reuse.
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const root=process.cwd();
const manifestFile=path.join(root,'data/travel/rajasthanMediaCandidates.json');
if(!fs.existsSync(manifestFile)){
  console.error('RAJASTHAN_78_MEDIA_MISSING: local WebP pack has not been imported');
  process.exit(1);
}
const m=JSON.parse(fs.readFileSync(manifestFile,'utf8'));
const issues=[];
const fail=m=>issues.push(m);
const scenes=m.destinationScenes||[], hotels=m.hotels||[];
const all=[...scenes,...hotels];
if(m.destination!=='rajasthan'||m.destinationNumber!==78)fail('Wrong destination or number');
if(scenes.length!==9||hotels.length!==12||all.length!==21)fail('Require 9 landscapes and 12 hotel photos');
if(m.publicUseApproved!==false||!m.scope.includes('noindex'))fail('Private owner Preview / noindex guard missing');
if(new Set(all.map(p=>p.key)).size!==21)fail('Duplicate photo keys');
if(new Set(all.map(p=>p.sourcePage)).size<10)fail('Insufficient distinct photo source pages');
if(new Set(all.map(p=>p.webpSHA256)).size!==21)fail('Duplicate WebP file hash');
let total=0;
for(const p of all){
 const prefix=p.key;
 if(!p.sourceResolvedUrl?.startsWith('https://'))fail(prefix+': resolved source URL missing');
 if(!p.sourcePage?.startsWith('https://'))fail(prefix+': source page missing');
 if(!p.credit||!p.frCaption||!p.enCaption)fail(prefix+': credit or caption missing');
 if(!p.visuallyVerified||!p.previewVisualApproved)fail(prefix+': visual subject approval missing');
 if(!/^[a-f0-9]{64}$/i.test(p.sourceSHA256||''))fail(prefix+': original SHA256 missing');
 const local=p.localPath||'';
 if(!/^\/images\/travel\/rajasthan-premium\/(destination|hotels)\/[a-z0-9-]+\.webp$/.test(local)){
    fail(prefix+': invalid path');continue;
 }
 const file=path.join(root,'public',local.slice(1));
 if(!fs.existsSync(file)){fail(prefix+': WebP missing '+local);continue;}
 const bytes=fs.readFileSync(file);
 total+=bytes.length;
 if(bytes.length<5000||bytes.length>350000||bytes.toString('ascii',0,4)!=='RIFF'||bytes.toString('ascii',8,12)!=='WEBP')fail(prefix+': invalid WebP format/size');
 if(crypto.createHash('sha256').update(bytes).digest('hex')!==p.webpSHA256)fail(prefix+': WebP hash differs from original audit');
 if(p.commercialRightsCleared){
   if(!p.sourcePage.startsWith('https://commons.wikimedia.org/wiki/File:')||!p.license||!p.licenseUrl)fail(prefix+': Commons attribution/license incomplete');
 }
}
if(scenes.some(p=>!p.commercialRightsCleared))fail('All landscape sources must be appropriately licensed');
if(hotels.filter(p=>p.commercialRightsCleared).length!==3)fail('Do not falsely claim hotel-photo usage rights');
if(total>6500000)fail('Image set greater than 6.5 MB');
const faq=fs.readFileSync(path.join(root,'data/travel/rajasthanDraftFaq.ts'),'utf8');
const editorial=fs.readFileSync(path.join(root,'data/travel/rajasthanDraftGuide.ts'),'utf8');
if((faq.match(/"q":/g)||[]).length!==20)fail('Must have 10 FR and 10 EN FAQs');
if(!editorial.includes('Rajasthan')||editorial.length<20000)fail('Guide text missing or too brief');
for(const p of ['components/travel/FeaturedCityGuide.tsx','components/travel/TravelPages.tsx','data/travel/featuredCityGuides.ts']){
 const code=fs.readFileSync(path.join(root,p),'utf8');
 if(!code.includes('rajasthan'))fail(p+' missing Rajasthan route wiring');
}
if(issues.length){
 console.error('RAJASTHAN_78_PREVIEW_QA_FAILED '+issues.length+' issue(s)');
 for(const issue of issues)console.error(' - '+issue);
 process.exit(1);
}
console.log('RAJASTHAN_78_PRIVATE_PREVIEW_QA_GREEN: 21 WebPs, 9 landscapes, 4 hotels, bilingual editorials, noindex');
