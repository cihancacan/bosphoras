/** Miami operator-sourced hotel photography is available for PRIVATE owner review only.
 * No hotel publisher image is approved for public/commercial release; verify each
 * subject, correct property, room identity and licence before publication. */
import type {BodrumHotelEditorial,BodrumPremiumPhoto} from './bodrumPremiumEditorial';
import {miamiDraftGuide} from './miamiDraftGuide';
import {approvedMiamiCityPhoto, type MiamiCandidate} from './miamiGuide';
import media from './miamiMediaCandidates.json';

const ids=['setai','faena','edition','surf-club'] as const;
const hosts=['thesetaihotel.com','faena.com','editionhotels.com','fourseasons.com'] as const;
const validHotel=(p:MiamiCandidate,i:number):boolean=>
 p.propertyKey===ids[i] && p.status==='source_identified_private_preview'
 && p.rightsEvidenceType==='operator_publisher_not_commercially_cleared'
 && p.commercialRightsCleared!==true
 && p.localPath?.startsWith('/images/travel/miami-premium/'+ids[i]+'/')===true
 && !!p.sourcePage && (new URL(p.sourcePage).hostname.endsWith(hosts[i]) || new URL(p.sourcePage).hostname.endsWith('miamiandbeaches.com'))
 && !!p.credit && !!p.frCaption && !!p.enCaption
 && p.sha256?.length===64 && (p.bytes||0)>16000;

const asPhoto=(p:MiamiCandidate):BodrumPremiumPhoto=>({
 src:p.localPath!,fr:p.frCaption!,en:p.enCaption!,credit:p.credit!,sourcePage:p.sourcePage!
});
export const miamiHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(
 miamiDraftGuide.hotels.map((hotel,i)=>[hotel.name,{
  photos:(media.hotels as MiamiCandidate[]).filter(p=>validHotel(p,i)).map(asPhoto),
  credit:hotel.name+' — hotel publisher image, owner-only preview, rights unverified',
  sourcePage:hotel.officialUrl,frBest:hotel.frWatch,enBest:hotel.enWatch,
  frStory:hotel.fr+' '+hotel.frWatch,enStory:hotel.en+' '+hotel.enWatch
 }])
);
// Match original five Miami neighbourhoods exactly; never substitute one city's picture.
const areas=['scene-2','scene-3','scene-4','scene-5','scene-6'] as const;
export const miamiAreaVisuals:(BodrumPremiumPhoto|null)[]=areas.map(key=>{
 const p=(media.destinationScenes as MiamiCandidate[]).find(x=>x.key===key);
 return p&&approvedMiamiCityPhoto(p)?asPhoto(p):null;
});
export const confirmedMiamiPreviewAssets=new Set(
 ([...media.destinationScenes,...media.hotels] as MiamiCandidate[])
  .filter(p=>p.localPath?.startsWith('/images/travel/miami-premium/')
   && p.sha256?.length===64 && (p.bytes||0)>16000)
  .map(p=>p.localPath!)
);
export const miamiSchemaSafePhotos=new Set(
 (media.destinationScenes as MiamiCandidate[]).filter(approvedMiamiCityPhoto).map(p=>p.localPath!)
);
