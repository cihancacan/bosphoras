/** Los Angeles property photography is displayed only on private noindex owner Preview.
 * No publishing/reuse permission independently verified. Every image source page
 * must be explicitly tied to the hotel; empty sources are hidden. */
import type {BodrumHotelEditorial,BodrumPremiumPhoto} from './bodrumPremiumEditorial';
import {losAngelesDraftGuide} from './losAngelesDraftGuide';
import {approvedLACityPhoto,type LACandidate} from './losAngelesGuide';
import manifest from './losAngelesMediaCandidates.json';
const ids=['bel-air','beverly-hills','sunset-tower','shutters'] as const;
const hosts=['dorchestercollection.com','dorchestercollection.com','sunsettowerhotel.com','shuttersonthebeach.com'] as const;
const validHotel=(p:LACandidate,i:number):boolean=>{
 if(!p.sourcePage)return false;
 const host=new URL(p.sourcePage).hostname;
 const urlPath=new URL(p.sourcePage).pathname.toLowerCase();
 const sourceHotel=hosts[i]==='dorchestercollection.com'
  ? (i===0?urlPath.includes('/hotel-bel-air'):urlPath.includes('/the-beverly-hills-hotel'))
  : host.endsWith(hosts[i]);
 return p.propertyKey===ids[i] && p.status==='source_identified_private_preview'
 && p.rightsEvidenceType==='operator_publisher_not_commercially_cleared'
 && p.commercialRightsCleared!==true
 && p.localPath?.startsWith('/images/travel/los-angeles-premium/'+ids[i]+'/')===true
 && host.endsWith(hosts[i]) && sourceHotel
 && !!p.credit && !!p.frCaption && !!p.enCaption && p.sha256?.length===64&&(p.bytes||0)>18000;
};
const asPhoto=(p:LACandidate):BodrumPremiumPhoto=>({
 src:p.localPath!,fr:p.frCaption!,en:p.enCaption!,credit:p.credit!,sourcePage:p.sourcePage!
});
export const losAngelesHotelEditorial:Record<string,BodrumHotelEditorial>=Object.fromEntries(
 losAngelesDraftGuide.hotels.map((hotel,i)=>[hotel.name,{
  photos:(manifest.hotels as LACandidate[]).filter(p=>validHotel(p,i)).map(asPhoto),
  credit:hotel.name+' — photographer/licensing permissions pending, private owner preview',
  sourcePage:hotel.officialUrl,
  frBest:hotel.frWatch,enBest:hotel.enWatch,
  frStory:hotel.fr+' '+hotel.frWatch,enStory:hotel.en+' '+hotel.enWatch
 }])
);
const areaKeys=['scene-2','scene-3','scene-4','scene-5','scene-6'] as const;
export const losAngelesAreaVisuals:(BodrumPremiumPhoto|null)[]=areaKeys.map(key=>{
 const p=(manifest.destinationScenes as LACandidate[]).find(x=>x.key===key);
 return p&&approvedLACityPhoto(p)?asPhoto(p):null;
});
export const confirmedLosAngelesPreviewAssets=new Set(
 ([...manifest.destinationScenes,...manifest.hotels] as LACandidate[])
  .filter(p=>p.localPath?.startsWith('/images/travel/los-angeles-premium/')&&p.sha256?.length===64&&(p.bytes||0)>18000)
  .map(p=>p.localPath!)
);
export const losAngelesSchemaSafePhotos=new Set(
 (manifest.destinationScenes as LACandidate[]).filter(approvedLACityPhoto).map(p=>p.localPath!)
);
