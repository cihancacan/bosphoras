#!/usr/bin/env node
/** Fail closed before approving a Galle #79 private Vercel Preview or public promotion. */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
const root=process.cwd();
const dest='data/travel/galleMediaCandidates.json';
const manifest=JSON.parse(fs.readFileSync(path.join(root,dest),'utf8'));
const issues=[];
const fail=s=>issues.push(s);
const scenes=manifest.destinationScenes||[],hotels=manifest.hotels||[],all=[...scenes,...hotels];
if(manifest.destination!=='galle'||manifest.destinationNumber!==79)fail('Wrong destination');
if(scenes.length!==9||hotels.length!==12||all.length!==21)fail('Require 9 scenes and 12 hotel photos');
if(manifest.publicUseApproved||!String(manifest.scope).includes('noindex'))fail('Private noindex only');
if(new Set(all.map(p=>p.key)).size!==21)fail('Duplicate slots');
if(new Set(all.map(p=>p.sourcePage)).size!==21)fail('Duplicate photo source pages');
if(new Set(all.map(p=>p.webpSHA256).filter(Boolean)).size!==21)fail('21 unique WebP hashes needed');
let total=0;
for(const p of all){
 const prefix=p.key||'photo';
 if(!p.visuallyVerified||!p.previewVisualApproved)fail(prefix+': owner visual identity approval missing');
 if(!p.credit||!p.sourcePage||!p.sourceResolvedUrl||!p.frCaption||!p.enCaption)fail(prefix+': source, credit or caption missing');
 if(!/^[a-f\d]{64}$/i.test(p.sourceSHA256||''))fail(prefix+': source SHA256 missing');
 if(!/^\/images\/travel\/galle-premium\/(destination|hotels)\/[a-z0-9-]+\.webp$/.test(p.localPath||'')){fail(prefix+': invalid path');continue;}
 const filename=path.join(root,'public',p.localPath.slice(1));
 if(!fs.existsSync(filename)){fail(prefix+': local WebP missing');continue;}
 const b=fs.readFileSync(filename);
 total+=b.length;
 if(b.length<5000||b.length>350000||b.toString('ascii',0,4)!=='RIFF'||b.toString('ascii',8,12)!=='WEBP')fail(prefix+': WebP invalid');
 if(crypto.createHash('sha256').update(b).digest('hex')!==p.webpSHA256)fail(prefix+': WebP checksum mismatch');
 if(p.commercialRightsCleared&&(!p.license||!p.licenseUrl||!p.sourcePage.startsWith('https://commons.wikimedia.org/wiki/File:')))fail(prefix+': CC attribution missing');
}
if(scenes.some(p=>!p.commercialRightsCleared))fail('All geographic photographs require CC license');
if(total>6500000)fail('WebP pack exceeds 6.5MB');
for(const filename of ['data/travel/galleDraftGuide.ts','data/travel/galleDraftFaq.ts','data/travel/galleGuide.ts','data/travel/gallePremiumEditorial.ts','data/travel/featuredCityGuides.ts','components/travel/TravelPages.tsx','components/travel/FeaturedCityGuide.tsx']){
 const code=fs.readFileSync(path.join(root,filename),'utf8');
 if(!code.toLowerCase().includes('galle'))fail(filename+' route/content not wired');
}
const faq=fs.readFileSync(path.join(root,'data/travel/galleDraftFaq.ts'),'utf8');
if((faq.match(/"q":/g)||[]).length!==32)fail('Require 16 French and 16 English FAQs');
if(issues.length){
 console.error('GALLE_79_NOT_PREVIEW_READY '+issues.length+' blockers');
 for(const i of issues.slice(0,75))console.error(' - '+i);
 process.exitCode=1;
}else console.log('GALLE_79_PRIVATE_PREVIEW_MEDIA_QA_GREEN 21 real unique image files');
