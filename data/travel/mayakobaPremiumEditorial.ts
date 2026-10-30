/** Mayakoba 2026 operator photography is strictly owner-only Preview with unverified commercial rights. */
import type {BodrumHotelEditorial,BodrumPremiumPhoto} from './bodrumPremiumEditorial';
import {mayakobaDraftGuide} from './mayakobaDraftGuide';
import {approvedMayakobaOwnerPhoto,type MayakobaCandidate} from './mayakobaGuide';
import manifest from './mayakobaMediaCandidates.json';
const ids=['rosewood','banyan-tree','fairmont','alila'] as const;
const pages=ids.map(id=>'https://mayakoba.com/hotels-overview/'+id+'-mayakoba/');
const valid=(p:MayakobaCandidate,i:number):boolean=>
 p.propertyKey===ids[i] && p.status==='source_identified_private_preview'
 && p.rightsEvidenceType==='official_hotel_destination_publisher_not_commercially_cleared'
 && p.commercialRightsCleared===false
 && p.localPath?.startsWith('/images/travel/mayakoba-premium/'+ids[i]+'/')===true
 && p.sourcePage?.startsWith(pages[i])===true
 && !!p.credit && !!p.frCaption && !!p.enCaption&&p.sha256?.length===64&&(p.bytes||0)>18000;
const asPhoto=(x:MayakobaCandidate):BodrumPremiumPhoto=>({
 src:x.localPath!,fr:x.frCaption!,en:x.enCaption!,credit:x.credit!,sourcePage:x.sourcePage!
});
export const mayakobaHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(
 mayakobaDraftGuide.hotels.map((hotel,i)=>[hotel.name,{
  photos:(manifest.hotels as MayakobaCandidate[]).filter(p=>valid(p,i)).map(asPhoto),
  credit:hotel.name+' — official Mayakoba publisher images, licensing pending',
  sourcePage:hotel.officialUrl,frBest:hotel.frWatch,enBest:hotel.enWatch,
  frStory:hotel.fr+' '+hotel.frWatch,enStory:hotel.en+' '+hotel.enWatch
 }])
);
const keys=['scene-2','scene-3','scene-4','scene-5','scene-6'] as const;
export const mayakobaAreaVisuals:(BodrumPremiumPhoto|null)[]=keys.map(key=>{
 const p=(manifest.destinationScenes as MayakobaCandidate[]).find(x=>x.key===key);
 return p&&approvedMayakobaOwnerPhoto(p)?asPhoto(p):null;
});
export const confirmedMayakobaPreviewAssets=new Set(
 ([...manifest.destinationScenes,...manifest.hotels] as MayakobaCandidate[])
 .filter(p=>p.localPath?.startsWith('/images/travel/mayakoba-premium/') && p.sha256?.length===64&&(p.bytes||0)>18000)
 .map(p=>p.localPath!)
);
// All official destination/hotel photographs are publisher content with no
// independently cleared commercial reuse license; exclude them from JSON-LD.
export const mayakobaSchemaSafePhotos=new Set<string>();
