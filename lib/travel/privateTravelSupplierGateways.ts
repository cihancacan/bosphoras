/** Approved, commission-tracked partner handoffs. Never use generic booking links. */
export type PrivateTravelPartnerService = 'villas'|'chalets'|'jets'|'helicopters'|'yachts';
export type HomeCollection = 'curated'|'signature';
type PartnerKey = 'plum'|'villa'|'jets'|'heli'|'yachts';
type Rule = {enabled:boolean;href?:string;domains:string[]};
function rule(key:PartnerKey):Rule {
 switch(key){
 case 'plum':return {enabled:process.env.NEXT_PUBLIC_BOSPHORAS_PLUM_LIVE==='true',href:process.env.NEXT_PUBLIC_BOSPHORAS_PLUM_AFFILIATE_URL,domains:['plumguide.com','prf.hn','partnerize.com']};
 case 'villa':return {enabled:process.env.NEXT_PUBLIC_BOSPHORAS_VILLA_TRACKER_LIVE==='true',href:process.env.NEXT_PUBLIC_BOSPHORAS_VILLA_TRACKER_AFFILIATE_URL,domains:['villatracker.com']};
 case 'jets':return {enabled:process.env.NEXT_PUBLIC_BOSPHORAS_JETS_PARTNERS_LIVE==='true',href:process.env.NEXT_PUBLIC_BOSPHORAS_JETS_PARTNERS_AFFILIATE_URL,domains:['jets.partners']};
 case 'heli':return {enabled:process.env.NEXT_PUBLIC_BOSPHORAS_JETSFLY_LIVE==='true',href:process.env.NEXT_PUBLIC_BOSPHORAS_JETSFLY_AFFILIATE_URL,domains:['jetsfly.com']};
 case 'yachts':return {enabled:process.env.NEXT_PUBLIC_BOSPHORAS_COSMOS_LIVE==='true',href:process.env.NEXT_PUBLIC_BOSPHORAS_COSMOS_AFFILIATE_URL,domains:['cosmosyachting.com']};
 }
}
export function getPrivateTravelPartnerName(service:PrivateTravelPartnerService, collection:HomeCollection='curated'):string{
 if(service==='villas'||service==='chalets')return collection==='curated'?'Plum Guide':'Villa Tracker';
 if(service==='jets')return 'Jets & Partners';
 if(service==='helicopters')return 'JetsFly';
 return 'Cosmos Yachting';
}
export function getApprovedPartnerUrl(service:PrivateTravelPartnerService,collection:HomeCollection='curated'):string|null{
 const key:PartnerKey=(service==='villas'||service==='chalets')?(collection==='curated'?'plum':'villa'):service==='jets'?'jets':service==='helicopters'?'heli':'yachts';
 const config=rule(key);
 if(!config.enabled || !config.href)return null;
 try{
   const url=new URL(config.href);
   if(url.protocol!=='https:'||url.username||url.password)return null;
   const hostname=url.hostname.toLowerCase();
   if(!config.domains.some(domain=>hostname===domain||hostname.endsWith('.'+domain)))return null;
   return url.toString();
 }catch{return null;}
}
