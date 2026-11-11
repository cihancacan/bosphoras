const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),assert=require('node:assert/strict');
const root=process.cwd(),m=require('../data/travel/kohRongMediaCandidates.json'),ids=require('../data/travel/nuiteeResolvedMappings.json').hotels.filter(x=>x[0]==='koh-rong');
const names=[['The Royal Sands Koh Rong','lpacb6e'],['Song Saa Private Island','lp65176'],['Long Set Resort','lp9dadf'],['Anaya Koh Rong','lp323828']];
assert.equal(m.destination,'koh-rong');assert.equal(m.destinationNumber,85);assert.equal(m.destinationScenes.length,9);assert.equal(m.hotels.length,12);assert.equal(ids.length,4);
for(const [name,id] of names){assert.ok(ids.some(x=>x[1]===name&&x[2]===id),name+' exact supplier ID');assert.equal(m.hotels.filter(x=>x.hotel===name).length,3,name+' exactly 3 photos');}
let total=0;const seen=new Set();
for(const p of [...m.destinationScenes,...m.hotels]){
 assert.ok(p.commercialRightsCleared&&p.visuallyVerified&&p.previewVisualApproved,p.key+' approval');
 assert.ok(p.localPath.startsWith('/images/travel/koh-rong-premium/'),p.localPath);
 const buf=fs.readFileSync(path.join(root,'public',p.localPath));
 assert.equal(buf.toString('ascii',0,4),'RIFF');assert.equal(buf.toString('ascii',8,12),'WEBP');
 const hash=crypto.createHash('sha256').update(buf).digest('hex');
 assert.equal(hash,p.webpSHA256,p.key+' sha');assert.ok(!seen.has(hash),p.key+' duplicate');seen.add(hash);
 assert.ok(buf.length<150000,p.key+' file too large');total+=buf.length;
 if(p.hotel){const entry=names.find(x=>x[0]===p.hotel);assert.ok(entry);assert.equal(p.sourcePage,'https://bosphoras.nuitee.link/hotels/'+entry[1]);assert.match(p.sourceResolvedUrl,/^https:\/\/nuitee-hotels\.b-cdn\.net\/hotels\//);}
 else {assert.match(p.sourcePage,/^https:\/\/commons\.wikimedia\.org\/wiki\/File:/);assert.ok(p.credit&&p.licenseUrl);assert.match(p.license,/^(CC BY(?:-SA)? [234](?:\.\d)?|CC0|Public domain)$/);}
}
const guide=fs.readFileSync('data/travel/kohRongDraftGuide.ts','utf8');
assert.ok(guide.includes('Koh Ouen')&&guide.includes('Sihanoukville'));
const city=fs.readFileSync('data/travel/featuredCityGuides.ts','utf8');assert.match(city,/'koh-rong': kohRongGuide/);
const comp=fs.readFileSync('components/travel/FeaturedCityGuide.tsx','utf8');assert.match(comp,/kohRongHotelEditorial/);assert.match(comp,/panoramas-koh-rong/);
const tp=fs.readFileSync('components/travel/TravelPages.tsx','utf8');assert.match(tp,/isKohRongGuide/);
const metadata=fs.readFileSync('app/layout.tsx','utf8');assert.match(metadata,/favicon-96\.png/);assert.match(metadata,/favicon-192\.png/);
for(const size of [48,96,192]){const b=fs.readFileSync('public/favicon-'+size+'.png');assert.equal(b.toString('hex',0,8),'89504e470d0a1a0a');assert.equal(b.readUInt32BE(16),size);assert.equal(b.readUInt32BE(20),size);}
assert.ok(fs.statSync('app/icon.png').size>500000);
const ico=fs.readFileSync('app/favicon.ico');assert.equal(ico.readUInt16LE(2),1);assert.ok(ico.readUInt16LE(4)>=4);
console.log('Koh Rong #85: '+m.destinationScenes.length+' unique geo-scene WebPs, '+m.hotels.length+' verified hotel WebPs; '+names.length+' exact active Nuitée properties, '+Math.round(total/1024)+' KiB. Favicon 48/96/192 + ICO from unchanged app/icon.png.');

