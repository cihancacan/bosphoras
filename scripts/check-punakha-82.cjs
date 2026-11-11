const fs=require('node:fs'); const path=require('node:path');const crypto=require('node:crypto');const assert=require('node:assert/strict');
const root=process.cwd();const manifest=require('../data/travel/punakhaMediaCandidates.json');const ids=require('../data/travel/nuiteeResolvedMappings.json').hotels.filter(x=>x[0]==='punakha');
const names=['Pemako Punakha','Dhensa Resort','RKPO Green Resort','Zhingkham Resort'];const officialIds=['lp656dbea8','lp96bb0','lpa1200','lpa412e'];
assert.equal(manifest.destination,'punakha');assert.equal(manifest.destinationScenes.length,9);assert.equal(manifest.hotels.length,12);assert.equal(ids.length,4);
for(let i=0;i<names.length;i++){assert.deepEqual(ids[i],['punakha',names[i],officialIds[i]]);assert.equal(manifest.hotels.filter(p=>p.hotel===names[i]).length,3);}
const seen=new Set();let totalBytes=0;
for(const p of [...manifest.destinationScenes,...manifest.hotels]){
 assert.ok(p.commercialRightsCleared&&p.previewVisualApproved&&p.visuallyVerified,p.key+' permission');
 assert.match(p.localPath,/^\/images\/travel\/punakha-premium\//);
 const file=path.join(root,'public',p.localPath);assert.ok(fs.existsSync(file),file);
 const bytes=fs.readFileSync(file);assert.equal(bytes.subarray(0,4).toString(),'RIFF',p.key+' RIFF');assert.equal(bytes.subarray(8,12).toString(),'WEBP',p.key+' WebP');
 const sha=crypto.createHash('sha256').update(bytes).digest('hex');assert.equal(sha,p.webpSHA256,p.key+' SHA');
 assert.ok(!seen.has(sha),p.key+' duplicate image');seen.add(sha);totalBytes+=bytes.length;
 assert.ok(bytes.length<900000,p.key+' oversized');
 if(p.hotel){assert.ok(names.includes(p.hotel),p.key+' hotel identity');assert.ok(p.sourceResolvedUrl&&p.sourcePage,p.key+' hotel source');}
 else{assert.match(p.sourcePage,/^https:\/\/commons\.wikimedia\.org\/wiki\/File:/);assert.match(p.license,/^CC BY(-SA)? [234](\.\d)?$/);assert.ok(p.credit&&p.licenseUrl,p.key+' attribution');}
}
assert.ok(fs.readFileSync('data/travel/featuredCityGuides.ts','utf8').includes("'punakha': punakhaGuide"));
assert.ok(fs.readFileSync('data/travel/destinations.ts','utf8').includes("'hotels/punakha/en'"));
console.log('Punakha #82 verified:',manifest.destinationScenes.length,'destination WebP +',manifest.hotels.length,'hotel WebP, four exact Nuitée IDs;',Math.round(totalBytes/1024)+' KiB');
