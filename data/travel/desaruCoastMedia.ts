import raw from './desaruCoastMediaCandidates.json';
export type DesaruMediaCandidate = {key:string;sourcePage:string;sourceResolvedUrl:string|null;credit:string|null;license:string|null;licenseUrl:string|null;frCaption:string;enCaption:string;commercialRightsCleared:boolean;localPath:string;webpSHA256:string|null;visuallyVerified:boolean;previewVisualApproved:boolean;hotel:string|null};
const manifest:{destinationScenes:DesaruMediaCandidate[];hotels:DesaruMediaCandidate[]}=raw;
export default manifest;
