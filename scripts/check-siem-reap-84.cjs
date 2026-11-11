const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),assert=require('node:assert/strict');
const root=process.cwd(),m=require('../data/travel/siemReapMediaCandidates.json'),ids=require('../data/travel/nuiteeResolvedMappings.json').hotels.filter(x=>x[0]==='siem-reap');
const props=[['Zannier Phum Baitang','lp8319c'],["Raffles Grand Hotel d'Angkor",'lp27341'],['Park Hyatt Siem Reap','lp3988b'],['Shinta Mani Angkor','lp36205']];
assert.equal(m.destination,'siem-reap');assert.equal(m.destinationNumber,84);assert.equal(m.destinationScenes.length,9);assert.equal(m.hotels.length,12);assert.equal(ids.length,4);
for(const [name,id] of props){assert.ok(ids.some(x=>x[1]===name&&x[2]===id),name+' exact Nuitée ID');assert.equal(m.hotels.filter(x=>x.hotel===name).length,3,name+' photo count');}
let total=0;const sha=new Set();
for(const img of [...m.destinationScenes,...m.hotels]){
 assert.ok(img.visuallyVerified&&img.previewVisualApproved&&img.commercialRightsCleared,img.key);
 assert.ok(img.localPath.startsWith('/images/travel/siem-reap-premium/'));
 const b=fs.readFileSync(path.join(root,'public',img.localPath));
 assert.equal(b.toString('ascii',0,4),'RIFF');assert.equal(b.toString('ascii',8,12),'WEBP');
 let digest=crypto.createHash('sha256').update(b).digest('hex');assert.equal(digest,img.webpSHA256,img.key+' SHA');
 assert.ok(!sha.has(digest),img.key+' duplicate');sha.add(digest);total+=b.length;
 assert.ok(b.length<350000,img.key+' oversized');
 if(img.hotel){let row=props.find(x=>x[0]===img.hotel);assert.ok(row);assert.equal(img.sourcePage,'https://bosphoras.nuitee.link/hotels/'+row[1]);assert.ok(img.sourceResolvedUrl.startsWith('https://nuitee-hotels.b-cdn.net/hotels/'));}
 else {assert.match(img.sourcePage,/^https:\/\/commons\.wikimedia\.org\/wiki\/File:/);assert.ok(img.credit&&img.licenseUrl);assert.match(img.license,/^(CC BY(?:-SA)? [234](?:\.\d)?|CC0|Public domain)$/);}
}
for(const file of ['siemReapDraftGuide.ts','siemReapPremiumEditorial.ts','siemReapGuide.ts','siemReapDraftFaq.ts'])assert.ok(fs.existsSync(path.join(root,'data/travel',file)));
let city=fs.readFileSync('data/travel/featuredCityGuides.ts','utf8');assert.match(city,/'siem-reap': siemReapGuide/);
let f=fs.readFileSync('components/travel/FeaturedCityGuide.tsx','utf8');assert.ok(f.includes('siemReapHotelEditorial')&&f.includes('panoramas-siem-reap'));
let pages=fs.readFileSync('components/travel/TravelPages.tsx','utf8');assert.ok(pages.includes('isSiemReapGuide'));
console.log('Siem Reap #84 verified: 9 licensed destination WebP + 12 exact-hotel authorized WebP; 4 live matched Nuitée hotel identities; '+Math.round(total/1024)+' KiB.');

