/** Hotel photographs for New York OWNER Preview only.
 * Every entry comes from the named hotel's official domain; creator rights and
 * room identity have NOT been independently verified. No public-indexing permission.
 */
import type {BodrumHotelEditorial, BodrumPremiumPhoto} from './bodrumPremiumEditorial';
import {newYorkDraftGuide} from './newYorkDraftGuide';
import media from './newYorkMediaCandidates.json';
import {approvedNewYorkCityPhoto} from './newYorkGuide';
type Candidate = {key:string;propertyKey?:string;property?:string;localPath?:string;status:string;
 sourcePage?:string;credit?:string;frCaption?:string;enCaption?:string;
 bytes?:number;sha256?:string;rightsEvidenceType?:string};
const ids=['aman','fifth','greenwich','lowell'] as const;
const hosts=['aman.com','thefifthavenuehotel.com','thegreenwichhotel.com','lowellhotel.com'];
const validHotelPhoto=(p:Candidate, index:number):boolean=>
 p.propertyKey===ids[index]
 && p.status==='source_identified_private_preview'
 && p.rightsEvidenceType==='operator_publisher_not_commercially_cleared'
 && p.localPath?.startsWith('/images/travel/new-york-premium/'+ids[index]+'/')===true
 && !!p.sourcePage && new URL(p.sourcePage).hostname.endsWith(hosts[index])
 && !!p.credit && !!p.frCaption && !!p.enCaption
 && p.sha256?.length===64 && (p.bytes||0)>14000;
const asPhoto=(p:Candidate):BodrumPremiumPhoto=>({
 src:p.localPath!,fr:p.frCaption!,en:p.enCaption!,
 sourcePage:p.sourcePage!,credit:p.credit!
});
export const newYorkHotelEditorial:Record<string,BodrumHotelEditorial> = Object.fromEntries(
 newYorkDraftGuide.hotels.map((hotel,i)=>[hotel.name,{
  photos:(media.hotels as Candidate[]).filter(photo=>validHotelPhoto(photo,i)).map(asPhoto),
  credit:hotel.name+' — private owner Preview; creator rights unverified.',
  sourcePage:hotel.officialUrl,frBest:hotel.frWatch,enBest:hotel.enWatch,
  frStory:hotel.fr+' '+hotel.frWatch,enStory:hotel.en+' '+hotel.enWatch
 }])
);
const scenes=['scene-2','scene-3','scene-5','scene-9','scene-4'] as const;
export const newYorkAreaVisuals:(BodrumPremiumPhoto|null)[]=scenes.map(key=>{
 const p=(media.destinationScenes as Candidate[]).find(x=>x.key===key);
 return p&&approvedNewYorkCityPhoto(p)?asPhoto(p):null;
});
// These assets may be displayed on the private noindex Preview; commercial rights
// for hotel photos and manual visual identities are not thereby approved.
export const confirmedNewYorkPreviewAssets=new Set(
 ([...media.destinationScenes,...media.hotels] as Candidate[])
  .filter(p=>p.localPath?.startsWith('/images/travel/new-york-premium/') && p.sha256?.length===64 && (p.bytes||0)>14000)
  .map(p=>p.localPath!)
);
export const newYorkSchemaSafePhotos=new Set(
 (media.destinationScenes as Candidate[]).filter(approvedNewYorkCityPhoto).map(p=>p.localPath!)
);
