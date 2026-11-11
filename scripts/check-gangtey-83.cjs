const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),assert=require('node:assert/strict');
const root=process.cwd(),m=require('../data/travel/gangteyMediaCandidates.json'),links=require('../data/travel/nuiteeResolvedMappings.json').hotels.filter(x=>x[0]==='gangtey');
const hotelIds=[['Taj Gangtey Resort And Spa','lp6588144d'],['Gangtey Tent Resort','lp65876ec5'],['Kichu Resort Phobjikha','lp233a35'],['Gangtey Pinewood Resort','lp65867f3e']];
assert.equal(m.destination,'gangtey');assert.equal(m.destinationNumber,83);
assert.equal(m.destinationScenes.length,9);assert.equal(m.hotels.length,12);
assert.equal(links.length,4);
for(const [name,id] of hotelIds){
 assert.ok(links.some(x=>x[1]===name&&x[2]===id),name+' verified supplier ID');
 assert.equal(m.hotels.filter(x=>x.hotel===name).length,3,name+' three photos');
}
let size=0;const hashes=new Set();
for(const item of [...m.destinationScenes,...m.hotels]){
 assert.ok(item.commercialRightsCleared&&item.visuallyVerified&&item.previewVisualApproved,item.key+' approved');
 assert.ok(item.localPath.startsWith('/images/travel/gangtey-premium/'));
 const p=path.join(root,'public',item.localPath),b=fs.readFileSync(p);
 assert.equal(b.toString('ascii',0,4),'RIFF',item.key);
 assert.equal(b.toString('ascii',8,12),'WEBP',item.key);
 const hash=crypto.createHash('sha256').update(b).digest('hex');
 assert.equal(hash,item.webpSHA256,item.key+' hash');assert.ok(!hashes.has(hash),item.key+' duplicate');hashes.add(hash);size+=b.length;
 assert.ok(b.length<600000,item.key+' oversized');
 if(item.hotel)assert.match(item.sourcePage,/^https:\/\/bosphoras\.nuitee\.link\/hotels\/lp[a-zA-Z0-9]+$/);
 else {assert.match(item.sourcePage,/^https:\/\/commons\.wikimedia\.org\/wiki\/File:/);assert.ok(item.credit&&item.licenseUrl);assert.match(item.license,/^CC BY(?:-SA)? [234](?:\.\d)?$/);}
}
const guide=fs.readFileSync('data/travel/gangteyDraftGuide.ts','utf8');
for(const [name,id] of hotelIds)assert.ok(guide.includes(name),name+' guide');
const registry=fs.readFileSync('data/travel/featuredCityGuides.ts','utf8');
assert.match(registry,/'gangtey': gangteyGuide/);
const component=fs.readFileSync('components/travel/FeaturedCityGuide.tsx','utf8');
assert.match(component,/gangteyHotelEditorial/);
const page=fs.readFileSync('components/travel/TravelPages.tsx','utf8');
assert.match(page,/isGangteyGuide/);
console.log('Gangtey #83: verified 9 landscape WebPs, 12 actual hotel WebPs, 4 exact active Nuitée hotel identities, '+Math.round(size/1024)+' KiB.');

