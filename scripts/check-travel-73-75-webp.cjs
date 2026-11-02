#!/usr/bin/env node
/** Verify Bosphoras photo packs #73–75 contain actual locally persisted WebP binaries. */
const assert=require('node:assert/strict'),fs=require('node:fs'),crypto=require('node:crypto');
const cities=[
 {slug:'phu-quoc',stem:'phuQuoc',mod:'phuQuoc'},
 {slug:'singapore',stem:'singapore',mod:'singapore'},
 {slug:'sentosa',stem:'sentosa',mod:'sentosa'},
];
let total=0,bytes=0,orig=0;
for(const city of cities){
 const m=require('../data/travel/'+city.stem+'MediaCandidates.json');
 const audit=require('../data/travel/'+city.stem+'WebpOptimization.json');
 const p=[...m.destinationScenes,...m.hotels];
 assert.equal(p.length,21);assert.equal(audit.totalPhotos,21);
 assert.equal(audit.photos.length,21);assert.equal(m.publicUseApproved,false);
 assert.equal(audit.publicUseApproved,false);
 assert(audit.photos.every(x=>x.webpBytes<350000));
 for(const item of p){
  const x=audit.photos.find(z=>z.key===item.key);
  assert(x,'Missing '+item.key);
  assert.equal(item.localPath,x.localPath);
  assert.equal(item.sha256,x.reviewedOriginalSha256);
  assert(item.visuallyVerified && item.previewVisualApproved);
  const path='public'+item.localPath;
  assert(fs.existsSync(path),'Missing physical file '+path);
  const b=fs.readFileSync(path);
  assert.equal(b.toString('ascii',0,4),'RIFF');
  assert.equal(b.toString('ascii',8,12),'WEBP');
  assert.equal(b.length,x.webpBytes);
  assert.equal(crypto.createHash('sha256').update(b).digest('hex'),x.webpSha256);
  bytes+=b.length;total++;
 }
 orig+=audit.totalOriginalBytes;
 const { [city.stem+'Guide']: guide }=require('../data/travel/'+city.mod+'Guide.ts');
 const e=require('../data/travel/'+city.mod+'PremiumEditorial.ts');
 const gallery=e[city.stem+'HotelEditorial'];
 const confirmed=e['confirmed'+city.stem[0].toUpperCase()+city.stem.slice(1)+'PreviewAssets'];
 assert(confirmed,'No confirmed gallery asset Set for '+city.slug);
 assert.equal(confirmed.size,21);
 assert.equal(Object.keys(guide.photos).length,9);
 for(const src of Object.values(guide.photos).map(x=>x.src))assert(src.startsWith('/images/travel/'+city.slug+'-premium/')&&src.endsWith('.webp'));
 assert.equal(Object.keys(gallery).length,4);
 for(const x of Object.values(gallery)){
  assert.equal(x.photos.length,3);
  for(const photo of x.photos)assert(photo.src.startsWith('/images/travel/'+city.slug+'-premium/') && photo.src.endsWith('.webp'));
 }
 console.log('LOCAL_WEBP_OK',city.slug,21,'images',audit.totalWebpBytes,'bytes');
}
assert.equal(total,63);
console.log('BOSPHORAS_63_LOCAL_WEBP_QA_SUCCESS',bytes,'bytes / originals',orig,'saved',Math.round((1-bytes/orig)*100)+'%');
