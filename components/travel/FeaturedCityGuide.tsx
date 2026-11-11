import {jaipurDraftFaq} from '@/data/travel/jaipurDraftFaq';
import {galleDraftFaq} from '@/data/travel/galleDraftFaq';
import {tangalleDraftFaq} from '@/data/travel/tangalleDraftFaq';
import {paroDraftFaq} from '@/data/travel/paroDraftFaq';
import {rajasthanDraftFaq} from '@/data/travel/rajasthanDraftFaq';
import {udaipurDraftFaq} from '@/data/travel/udaipurDraftFaq';
import {sentosaDraftFaq} from '@/data/travel/sentosaDraftFaq';
import {singaporeDraftFaq} from '@/data/travel/singaporeDraftFaq';
import {phuQuocDraftFaq} from '@/data/travel/phuQuocDraftFaq';
import {hoiAnDraftFaq} from '@/data/travel/hoiAnDraftFaq';
import {daNangDraftFaq} from '@/data/travel/daNangDraftFaq';
import {vinhHyBayDraftFaq} from '@/data/travel/vinhHyBayDraftFaq';
import {hakoneDraftFaq} from '@/data/travel/hakoneDraftFaq';
import {kyotoDraftFaq} from '@/data/travel/kyotoDraftFaq';
import {tokyoDraftFaq} from '@/data/travel/tokyoDraftFaq';
import {palawanDraftFaq} from '@/data/travel/palawanDraftFaq';
import {sumbaDraftFaq} from '@/data/travel/sumbaDraftFaq';
import {jaipurHotelEditorial,jaipurAreaVisuals,confirmedJaipurPreviewAssets,jaipurPhotoLicenses} from '@/data/travel/jaipurPremiumEditorial';
import {galleHotelEditorial,galleAreaVisuals,confirmedGallePreviewAssets,gallePhotoLicenses} from '@/data/travel/gallePremiumEditorial';
import {tangalleHotelEditorial,tangalleAreaVisuals,confirmedTangallePreviewAssets,tangallePhotoLicenses} from '@/data/travel/tangallePremiumEditorial';
import {paroHotelEditorial,paroAreaVisuals,confirmedParoPreviewAssets,paroPhotoLicenses} from '@/data/travel/paroPremiumEditorial';
import {rajasthanHotelEditorial,rajasthanAreaVisuals,confirmedRajasthanPreviewAssets,rajasthanPhotoLicenses} from '@/data/travel/rajasthanPremiumEditorial';
import {udaipurHotelEditorial,udaipurAreaVisuals,confirmedUdaipurPreviewAssets,udaipurPhotoLicenses} from '@/data/travel/udaipurPremiumEditorial';
import {sentosaHotelEditorial,sentosaAreaVisuals,confirmedSentosaPreviewAssets,sentosaPhotoLicenses} from '@/data/travel/sentosaPremiumEditorial';
import {singaporeHotelEditorial,singaporeAreaVisuals,confirmedSingaporePreviewAssets,singaporePhotoLicenses} from '@/data/travel/singaporePremiumEditorial';
import {phuQuocHotelEditorial,phuQuocAreaVisuals,confirmedPhuQuocPreviewAssets,phuQuocPhotoLicenses} from '@/data/travel/phuQuocPremiumEditorial';
import {hoiAnHotelEditorial,hoiAnAreaVisuals,confirmedHoiAnPreviewAssets,hoiAnPhotoLicenses} from '@/data/travel/hoiAnPremiumEditorial';
import {daNangHotelEditorial,daNangAreaVisuals,confirmedDaNangPreviewAssets,daNangPhotoLicenses} from '@/data/travel/daNangPremiumEditorial';
import {vinhHyBayHotelEditorial,vinhHyBayAreaVisuals,confirmedVinhHyBayPreviewAssets,vinhHyBayPhotoLicenses} from '@/data/travel/vinhHyBayPremiumEditorial';
import {hakoneHotelEditorial,hakoneAreaVisuals,confirmedHakonePreviewAssets,hakonePhotoLicenses} from '@/data/travel/hakonePremiumEditorial';
import {kyotoHotelEditorial,kyotoAreaVisuals,confirmedKyotoPreviewAssets,kyotoPhotoLicenses} from '@/data/travel/kyotoPremiumEditorial';
import {tokyoHotelEditorial,tokyoAreaVisuals,confirmedTokyoPreviewAssets,tokyoPhotoLicenses} from '@/data/travel/tokyoPremiumEditorial';
import {palawanHotelEditorial,palawanAreaVisuals,confirmedPalawanPreviewAssets,palawanPhotoLicenses} from '@/data/travel/palawanPremiumEditorial';
import {sumbaHotelEditorial,sumbaAreaVisuals,confirmedSumbaAssets,sumbaPhotoLicenses} from '@/data/travel/sumbaPremiumEditorial';
import {chiangMaiDraftFaq} from '@/data/travel/chiangMaiDraftFaq';
import {chiangMaiHotelEditorial,chiangMaiAreaVisuals,confirmedChiangMaiAssets,chiangMaiPhotoLicenses} from '@/data/travel/chiangMaiPremiumEditorial';
import {bangkokDraftFaq} from '@/data/travel/bangkokDraftFaq';
import {bangkokHotelEditorial,bangkokAreaVisuals,confirmedBangkokAssets,bangkokPhotoLicenses} from '@/data/travel/bangkokPremiumEditorial';
import {kohYaoNoiDraftFaq} from '@/data/travel/kohYaoNoiDraftFaq';
import {kohYaoNoiHotelEditorial,kohYaoNoiAreaVisuals,confirmedKohYaoNoiAssets,kohYaoNoiPhotoLicenses} from '@/data/travel/kohYaoNoiPremiumEditorial';
import {krabiDraftFaq} from '@/data/travel/krabiDraftFaq';
import {krabiHotelEditorial, krabiAreaVisuals, confirmedKrabiAssets, krabiPhotoLicenses} from '@/data/travel/krabiPremiumEditorial';
import {sanMiguelDeAllendeDraftFaq} from '@/data/travel/sanMiguelDeAllendeDraftFaq';
import {sanMiguelHotelEditorial,sanMiguelAreaVisuals,confirmedSanMiguelAssets,sanMiguelPhotoLicenses} from '@/data/travel/sanMiguelDeAllendePremiumEditorial';
import Image from 'next/image';
import { EditorialProse } from '@/components/travel/EditorialProse';
import { HotelNuiteeLink, HotelPartnerBooking } from '@/components/travel/HotelPartnerBooking';
import { hotelPartnerKey } from '@/lib/travel/hotelPartners';
import type { BodrumHotelEditorial } from '@/data/travel/bodrumPremiumEditorial';
import { alpineHotelEditorialByCity,alpineAreaVisualsByCity,alpineAvailablePhotoPathsByCity } from '@/data/travel/alpinePremiumEditorial';
import { stMoritzDraftFaq } from '@/data/travel/stMoritzDraftFaq';
import { aspenDraftFaq } from '@/data/travel/aspenDraftFaq';
import { nisekoDraftFaq } from '@/data/travel/nisekoDraftFaq';
import { megeveDraftFaq } from '@/data/travel/megeveDraftFaq';
import { jacksonHoleDraftFaq } from '@/data/travel/jacksonHoleDraftFaq';
import { bigSkyDraftFaq } from '@/data/travel/bigSkyDraftFaq';
import { valDisereDraftFaq } from '@/data/travel/valDisereDraftFaq';
import { verbierDraftFaq } from '@/data/travel/verbierDraftFaq';
import { gstaadDraftFaq } from '@/data/travel/gstaadDraftFaq';
import { zermattDraftFaq } from '@/data/travel/zermattDraftFaq';
import { monacoDraftFaq } from '@/data/travel/monacoDraftFaq';
import { saintJeanCapFerratDraftFaq } from '@/data/travel/saintJeanCapFerratDraftFaq';
import { monacoHotelEditorial, monacoAreaVisuals, confirmedMonacoAssets } from '@/data/travel/monacoPremiumEditorial';
import { capFerratHotelEditorial, capFerratAreaVisuals, confirmedCapFerratAssets } from '@/data/travel/saintJeanCapFerratPremiumEditorial';
import { capDAntibesHotelEditorial, capDAntibesAreaVisuals, confirmedCapDAntibesAssets } from '@/data/travel/capDAntibesPremiumEditorial';
import { lakeComoHotelEditorial, lakeComoAreaVisuals, confirmedLakeComoAssets } from '@/data/travel/lakeComoPremiumEditorial';
import { capDAntibesDraftFaq } from '@/data/travel/capDAntibesDraftFaq';
import { lakeComoDraftFaq } from '@/data/travel/lakeComoDraftFaq';
import { capriDraftFaq } from '@/data/travel/capriDraftFaq';
import { positanoDraftFaq } from '@/data/travel/positanoDraftFaq';
import { ravelloDraftFaq } from '@/data/travel/ravelloDraftFaq';
import { mykonosDraftFaq } from '@/data/travel/mykonosDraftFaq';
import { antiparosDraftFaq } from '@/data/travel/antiparosDraftFaq';
import { ibizaDraftFaq } from '@/data/travel/ibizaDraftFaq';
import { formenteraDraftFaq } from '@/data/travel/formenteraDraftFaq';
import { deiaDraftFaq } from '@/data/travel/deiaDraftFaq';
import { portAndratxDraftFaq } from '@/data/travel/portAndratxDraftFaq';
import { comportaDraftFaq } from '@/data/travel/comportaDraftFaq';
import { melidesDraftFaq } from '@/data/travel/melidesDraftFaq';
import { tivatDraftFaq } from '@/data/travel/tivatDraftFaq';
import { theHamptonsDraftFaq } from '@/data/travel/theHamptonsDraftFaq';
import { palmBeachDraftFaq } from '@/data/travel/palmBeachDraftFaq';
import { nantucketDraftFaq } from '@/data/travel/nantucketDraftFaq';
import { harbourIslandDraftFaq } from '@/data/travel/harbourIslandDraftFaq';
import { turksAndCaicosDraftFaq } from '@/data/travel/turksAndCaicosDraftFaq';
import { canouanDraftFaq } from '@/data/travel/canouanDraftFaq';
import { neckerIslandDraftFaq } from '@/data/travel/neckerIslandDraftFaq';
import { northIslandSeychellesDraftFaq } from '@/data/travel/northIslandSeychellesDraftFaq';
import { pamalicanIslandDraftFaq } from '@/data/travel/pamalicanIslandDraftFaq';
import { laucalaIslandDraftFaq } from '@/data/travel/laucalaIslandDraftFaq';
import { jumbyBayDraftFaq } from '@/data/travel/jumbyBayDraftFaq';
import { okavangoDeltaDraftFaq } from '@/data/travel/okavangoDeltaDraftFaq';
import { puntaMitaDraftFaq } from '@/data/travel/puntaMitaDraftFaq';
import { costaCareyesDraftFaq } from '@/data/travel/costaCareyesDraftFaq';
import { ibizaHotelEditorial, ibizaAreaVisuals, confirmedIbizaAssets } from '@/data/travel/ibizaPremiumEditorial';
import { formenteraHotelEditorial, formenteraAreaVisuals, confirmedFormenteraAssets } from '@/data/travel/formenteraPremiumEditorial';
import { deiaHotelEditorial, deiaAreaVisuals, confirmedDeiaAssets } from '@/data/travel/deiaPremiumEditorial';
import { portAndratxHotelEditorial, portAndratxAreaVisuals, confirmedPortAndratxAssets } from '@/data/travel/portAndratxPremiumEditorial';
import { comportaHotelEditorial, comportaAreaVisuals, confirmedComportaAssets } from '@/data/travel/comportaPremiumEditorial';
import { melidesHotelEditorial, melidesAreaVisuals, confirmedMelidesAssets } from '@/data/travel/melidesPremiumEditorial';
import { tivatHotelEditorial, tivatAreaVisuals, confirmedTivatAssets } from '@/data/travel/tivatPremiumEditorial';
import { theHamptonsHotelEditorial, theHamptonsAreaVisuals, confirmedTheHamptonsAssets } from '@/data/travel/theHamptonsPremiumEditorial';
import { palmBeachHotelEditorial, palmBeachAreaVisuals, confirmedPalmBeachAssets } from '@/data/travel/palmBeachPremiumEditorial';
import { nantucketHotelEditorial, nantucketAreaVisuals, confirmedNantucketAssets } from '@/data/travel/nantucketPremiumEditorial';
import { harbourIslandHotelEditorial, harbourIslandAreaVisuals, confirmedHarbourIslandAssets } from '@/data/travel/harbourIslandPremiumEditorial';
import { turksAndCaicosHotelEditorial, turksAndCaicosAreaVisuals, confirmedTurksAndCaicosAssets } from '@/data/travel/turksAndCaicosPremiumEditorial';
import { canouanHotelEditorial, canouanAreaVisuals, confirmedCanouanAssets } from '@/data/travel/canouanPremiumEditorial';
import { neckerIslandHotelEditorial, neckerIslandAreaVisuals, confirmedNeckerIslandAssets } from '@/data/travel/neckerIslandPremiumEditorial';
import { northIslandSeychellesHotelEditorial, northIslandSeychellesAreaVisuals, confirmedNorthIslandSeychellesAssets } from '@/data/travel/northIslandSeychellesPremiumEditorial';
import { pamalicanIslandHotelEditorial, pamalicanIslandAreaVisuals, confirmedPamalicanIslandAssets } from '@/data/travel/pamalicanIslandPremiumEditorial';
import { laucalaIslandHotelEditorial, laucalaIslandAreaVisuals, confirmedLaucalaIslandAssets } from '@/data/travel/laucalaIslandPremiumEditorial';
import { jumbyBayHotelEditorial, jumbyBayAreaVisuals, confirmedJumbyBayAssets } from '@/data/travel/jumbyBayPremiumEditorial';
import { okavangoDeltaHotelEditorial, okavangoDeltaAreaVisuals, confirmedOkavangoDeltaPreviewAssets } from '@/data/travel/okavangoDeltaPremiumEditorial';
import { puntaMitaHotelEditorial, puntaMitaAreaVisuals, confirmedPuntaMitaPreviewAssets } from '@/data/travel/puntaMitaPremiumEditorial';
import { costaCareyesHotelEditorial, costaCareyesAreaVisuals, confirmedCostaCareyesPreviewAssets } from '@/data/travel/costaCareyesPremiumEditorial';
import { istanbulHotelEditorial, istanbulAreaVisuals, confirmedIstanbulPreviewAssets } from '@/data/travel/istanbulPremiumEditorial';
import { istanbulDestinationFaq } from '@/data/travel/istanbulDestinationFaq';
import { newYorkDraftFaq } from '@/data/travel/newYorkDraftFaq';
import { miamiDraftFaq } from '@/data/travel/miamiDraftFaq';
import { losAngelesDraftFaq } from '@/data/travel/losAngelesDraftFaq';
import { mayakobaDraftFaq } from '@/data/travel/mayakobaDraftFaq';
import { newYorkHotelEditorial, newYorkAreaVisuals, confirmedNewYorkPreviewAssets } from '@/data/travel/newYorkPremiumEditorial';
import { miamiHotelEditorial, miamiAreaVisuals, confirmedMiamiPreviewAssets } from '@/data/travel/miamiPremiumEditorial';
import { losAngelesHotelEditorial, losAngelesAreaVisuals, confirmedLosAngelesPreviewAssets } from '@/data/travel/losAngelesPremiumEditorial';
import { mayakobaHotelEditorial, mayakobaAreaVisuals, confirmedMayakobaPreviewAssets } from '@/data/travel/mayakobaPremiumEditorial';
import { antiparosHotelEditorial, antiparosAreaVisuals, confirmedAntiparosAssets } from '@/data/travel/antiparosPremiumEditorial';
import { mykonosHotelEditorial, mykonosAreaVisuals, confirmedMykonosAssets } from '@/data/travel/mykonosPremiumEditorial';
import { ravelloHotelEditorial, ravelloAreaVisuals, confirmedRavelloAssets } from '@/data/travel/ravelloPremiumEditorial';
import { positanoHotelEditorial, positanoAreaVisuals, confirmedPositanoAssets } from '@/data/travel/positanoPremiumEditorial';
import {capriHotelEditorial,capriAreaVisuals,confirmedCapriAssets} from '@/data/travel/capriPremiumEditorial';
import Link from 'next/link';
import { featuredCityGuides, type FeaturedCityGuideData, type FeaturedCityPhoto } from '@/data/travel/featuredCityGuides';
import { travelHref } from '@/lib/travel/i18n';
import { bodrumHotelEditorial, bodrumAreaVisuals } from '@/data/travel/bodrumPremiumEditorial';
import { antalyaHotelEditorial, antalyaAreaVisuals } from '@/data/travel/antalyaPremiumEditorial';
import { dubaiHotelEditorial, dubaiAreaVisuals } from '@/data/travel/dubaiPremiumEditorial';
import { parisHotelEditorial, parisAreaVisuals } from '@/data/travel/parisPremiumEditorial';
import { saintTropezHotelEditorial, saintTropezAreaVisuals } from '@/data/travel/saintTropezPremiumEditorial';
import { baliHotelEditorial, baliAreaVisuals } from '@/data/travel/baliPremiumEditorial';
import { phuketHotelEditorial, phuketAreaVisuals } from '@/data/travel/phuketPremiumEditorial';
import { kohSamuiHotelEditorial, kohSamuiAreaVisuals } from '@/data/travel/kohSamuiPremiumEditorial';
import { kohSamuiFaq } from '@/data/travel/kohSamuiFaq';
import { maldivesHotelEditorial, maldivesAreaVisuals } from '@/data/travel/maldivesPremiumEditorial';
import { maldivesFaq } from '@/data/travel/maldivesFaq';
import { losCabosFaq } from '@/data/travel/losCabosFaq';
import { saintBarthelemyFaq } from '@/data/travel/saintBarthelemyFaq';
import { courchevel1850Faq } from '@/data/travel/courchevel1850Faq';
import { courchevel1850HotelEditorial, courchevel1850AreaVisuals } from '@/data/travel/courchevel1850PremiumEditorial';
import courchevel1850HotelManifest from '@/data/travel/courchevel1850PremiumImageSources.json';
import courchevel1850DestinationManifest from '@/data/travel/courchevel1850DestinationImageSources.json';
import { mustiqueHotelEditorial, mustiqueAreaVisuals } from '@/data/travel/mustiquePremiumEditorial';
import mustiqueHotelManifest from '@/data/travel/mustiquePremiumImageSources.json';
import mustiqueDestinationManifest from '@/data/travel/mustiqueDestinationImageSources.json';
import { mustiqueFaq } from '@/data/travel/mustiqueFaq';
import { portoCervoFaq } from '@/data/travel/portoCervoFaq';
import { portoCervoHotelEditorial, portoCervoAreaVisuals } from '@/data/travel/portoCervoPremiumEditorial';
import portoCervoHotelManifest from '@/data/travel/portoCervoPremiumImageSources.json';
import portoCervoDestinationManifest from '@/data/travel/portoCervoDestinationImageSources.json';
import { losCabosHotelEditorial, losCabosAreaVisuals } from '@/data/travel/losCabosPremiumEditorial';
import { saintBarthelemyHotelEditorial, saintBarthelemyAreaVisuals } from '@/data/travel/saintBarthelemyPremiumEditorial';
import saintBarthelemyHotelManifest from '@/data/travel/saintBarthelemyPremiumImageSources.json';
import saintBarthelemyDestinationManifest from '@/data/travel/saintBarthelemyDestinationImageSources.json';
import losCabosHotelManifest from '@/data/travel/losCabosPremiumImageSources.json';
import losCabosDestinationManifest from '@/data/travel/losCabosDestinationImageSources.json';
import maldivesHotelManifest from '@/data/travel/maldivesPremiumImageSources.json';
import maldivesDestinationManifest from '@/data/travel/maldivesDestinationImageSources.json';
import kohSamuiHotelManifest from '@/data/travel/kohSamuiPremiumImageSources.json';
import kohSamuiDestinationManifest from '@/data/travel/kohSamuiDestinationImageSources.json';
import phuketPhotoManifest from '@/data/travel/phuketPremiumImageSources.json';
import baliPhotoManifest from '@/data/travel/baliPremiumImageSources.json';
import saintTropezPhotoManifest from '@/data/travel/saintTropezPremiumImageSources.json';
import parisPhotoManifest from '@/data/travel/parisPremiumImageSources.json';
import dubaiPhotoManifest from '@/data/travel/dubaiPremiumImageSources.json';
export const hotelEditorialByCity:Record<FeaturedCityGuideData['slug'],Record<string,BodrumHotelEditorial>>={'jaipur':jaipurHotelEditorial,'galle':galleHotelEditorial,'tangalle':tangalleHotelEditorial,'paro':paroHotelEditorial,'rajasthan':rajasthanHotelEditorial,'udaipur':udaipurHotelEditorial,'sentosa':sentosaHotelEditorial,'singapore':singaporeHotelEditorial,'phu-quoc':phuQuocHotelEditorial,'hoi-an':hoiAnHotelEditorial,'da-nang':daNangHotelEditorial,'vinh-hy-bay':vinhHyBayHotelEditorial,'hakone':hakoneHotelEditorial,'kyoto':kyotoHotelEditorial,'tokyo':tokyoHotelEditorial,'palawan':palawanHotelEditorial,'sumba':sumbaHotelEditorial,'chiang-mai':chiangMaiHotelEditorial,bangkok:bangkokHotelEditorial,'koh-yao-noi':kohYaoNoiHotelEditorial,krabi:krabiHotelEditorial,'san-miguel-de-allende':sanMiguelHotelEditorial,mayakoba:mayakobaHotelEditorial,'los-angeles':losAngelesHotelEditorial,miami:miamiHotelEditorial,'new-york':newYorkHotelEditorial,istanbul:istanbulHotelEditorial,bodrum:bodrumHotelEditorial,antalya:antalyaHotelEditorial,dubai:dubaiHotelEditorial,paris:parisHotelEditorial,'saint-tropez':saintTropezHotelEditorial,bali:baliHotelEditorial,phuket:phuketHotelEditorial,'koh-samui':kohSamuiHotelEditorial,maldives:maldivesHotelEditorial,'los-cabos':losCabosHotelEditorial,'saint-barthelemy':saintBarthelemyHotelEditorial,'porto-cervo':portoCervoHotelEditorial, mustique:mustiqueHotelEditorial,'courchevel-1850':courchevel1850HotelEditorial, ...alpineHotelEditorialByCity,monaco:monacoHotelEditorial,'saint-jean-cap-ferrat':capFerratHotelEditorial,'cap-dantibes':capDAntibesHotelEditorial,'lake-como':lakeComoHotelEditorial,capri:capriHotelEditorial,positano:positanoHotelEditorial,ravello:ravelloHotelEditorial,mykonos:mykonosHotelEditorial,antiparos:antiparosHotelEditorial,ibiza:ibizaHotelEditorial,formentera:formenteraHotelEditorial,deia:deiaHotelEditorial,'port-andratx':portAndratxHotelEditorial,comporta:comportaHotelEditorial,melides:melidesHotelEditorial,tivat:tivatHotelEditorial,'the-hamptons':theHamptonsHotelEditorial,'palm-beach':palmBeachHotelEditorial,nantucket:nantucketHotelEditorial,'harbour-island':harbourIslandHotelEditorial,'turks-and-caicos':turksAndCaicosHotelEditorial,canouan:canouanHotelEditorial,'necker-island':neckerIslandHotelEditorial,'north-island-seychelles':northIslandSeychellesHotelEditorial,'pamalican-island':pamalicanIslandHotelEditorial,'laucala-island':laucalaIslandHotelEditorial,'jumby-bay':jumbyBayHotelEditorial,'okavango-delta':okavangoDeltaHotelEditorial,'punta-mita':puntaMitaHotelEditorial,'costa-careyes':costaCareyesHotelEditorial};
const confirmedDubaiAssets=new Set(dubaiPhotoManifest.items.filter(photo=>photo.status==='downloaded').map(photo=>photo.localPath));
const confirmedParisAssets=new Set(parisPhotoManifest.items.filter(photo=>photo.status==='downloaded').map(photo=>photo.localPath));
const confirmedSaintTropezAssets=new Set(saintTropezPhotoManifest.items.filter(photo=>photo.status==='downloaded').map(photo=>photo.localPath));
const confirmedBaliAssets=new Set(baliPhotoManifest.items.filter(photo=>photo.status==='downloaded').map(photo=>photo.localPath));
const confirmedPhuketAssets=new Set(phuketPhotoManifest.items.filter(photo=>photo.status==='downloaded').map(photo=>photo.localPath));
const confirmedKohSamuiAssets=new Set([...kohSamuiHotelManifest.items,...kohSamuiDestinationManifest.items].filter(photo=>photo.status==='downloaded').map(photo=>photo.localPath));
const confirmedMaldivesAssets=new Set([...maldivesHotelManifest.items,...maldivesDestinationManifest.items].filter(photo=>photo.status==='downloaded').map(photo=>photo.localPath));
const confirmedLosCabosAssets=new Set([...losCabosHotelManifest.items,...losCabosDestinationManifest.items].filter(photo=>photo.status==='downloaded').map(photo=>photo.localPath));
const confirmedSaintBarthelemyAssets=new Set([...saintBarthelemyHotelManifest.items,...saintBarthelemyDestinationManifest.items].filter(photo=>photo.status==='downloaded').map(photo=>photo.localPath));
const confirmedCourchevelAssets=new Set([...courchevel1850HotelManifest.items,...courchevel1850DestinationManifest.items].filter(photo=>photo.status==='downloaded').map(photo=>photo.localPath));
const confirmedMustiqueAssets=new Set([...mustiqueHotelManifest.items,...mustiqueDestinationManifest.items].filter(photo=>photo.status==='downloaded').map(photo=>photo.localPath));
const confirmedPortoCervoAssets=new Set([...portoCervoHotelManifest.items,...portoCervoDestinationManifest.items].filter(photo=>photo.status==='downloaded').map(photo=>photo.localPath));

const isAlpineCity=(slug:FeaturedCityGuideData['slug']):slug is keyof typeof alpineAvailablePhotoPathsByCity => Object.prototype.hasOwnProperty.call(alpineAvailablePhotoPathsByCity,slug);
const alpineFaqByCity={'st-moritz':stMoritzDraftFaq,aspen:aspenDraftFaq,niseko:nisekoDraftFaq,megeve:megeveDraftFaq,'jackson-hole':jacksonHoleDraftFaq,'big-sky':bigSkyDraftFaq,'val-disere':valDisereDraftFaq,verbier:verbierDraftFaq,gstaad:gstaadDraftFaq,zermatt:zermattDraftFaq,monaco:monacoDraftFaq,'saint-jean-cap-ferrat':saintJeanCapFerratDraftFaq,'cap-dantibes':capDAntibesDraftFaq,'lake-como':lakeComoDraftFaq,capri:capriDraftFaq,positano:positanoDraftFaq,ravello:ravelloDraftFaq,mykonos:mykonosDraftFaq,antiparos:antiparosDraftFaq,ibiza:ibizaDraftFaq,formentera:formenteraDraftFaq,deia:deiaDraftFaq,'port-andratx':portAndratxDraftFaq,comporta:comportaDraftFaq,melides:melidesDraftFaq,tivat:tivatDraftFaq,'the-hamptons':theHamptonsDraftFaq,'palm-beach':palmBeachDraftFaq,nantucket:nantucketDraftFaq,'harbour-island':harbourIslandDraftFaq,'turks-and-caicos':turksAndCaicosDraftFaq,canouan:canouanDraftFaq,'necker-island':neckerIslandDraftFaq,'north-island-seychelles':northIslandSeychellesDraftFaq,'pamalican-island':pamalicanIslandDraftFaq,'laucala-island':laucalaIslandDraftFaq,'jumby-bay':jumbyBayDraftFaq,'okavango-delta':okavangoDeltaDraftFaq,'punta-mita':puntaMitaDraftFaq,'costa-careyes':costaCareyesDraftFaq} as const;
type Lang = 'fr' | 'en';
type Variant = 'destination' | 'hotels';

function CityPhoto({photo,locale,priority=false}: {photo:FeaturedCityPhoto;locale:Lang;priority?:boolean}) {
  return <figure className="min-w-0">
    <div className="relative aspect-[16/10] overflow-hidden bg-[#e0d8c9]">
      <Image src={photo.src} alt={locale === 'fr' ? photo.fr : photo.en} fill priority={priority}
        sizes="(max-width: 1024px) 100vw, 700px" className="object-cover" />
    </div>
  </figure>;
}


/** The photo must depict THIS hotel. No implied room view, booking inventory or verified photo rights. */
function PremiumHotelGallery({hotelName,city,locale,expanded=false}: {hotelName:string;city:FeaturedCityGuideData['slug'];locale:Lang;expanded?:boolean}) {
  const entry=hotelEditorialByCity[city][hotelName];
  if(!entry || !entry.photos.length) return null;
  const photos=city==='jaipur' ? entry.photos.filter(photo=>confirmedJaipurPreviewAssets.has(photo.src)) : city==='galle' ? entry.photos.filter(photo=>confirmedGallePreviewAssets.has(photo.src)) : city==='tangalle' ? entry.photos.filter(photo=>confirmedTangallePreviewAssets.has(photo.src)) : city==='paro' ? entry.photos.filter(photo=>confirmedParoPreviewAssets.has(photo.src)) : city==='rajasthan' ? entry.photos.filter(photo=>confirmedRajasthanPreviewAssets.has(photo.src)) : city==='udaipur' ? entry.photos.filter(photo=>confirmedUdaipurPreviewAssets.has(photo.src)) : city==='sentosa' ? entry.photos.filter(photo=>confirmedSentosaPreviewAssets.has(photo.src)) : city==='singapore' ? entry.photos.filter(photo=>confirmedSingaporePreviewAssets.has(photo.src)) : city==='phu-quoc' ? entry.photos.filter(photo=>confirmedPhuQuocPreviewAssets.has(photo.src)) : city==='hoi-an' ? entry.photos.filter(photo=>confirmedHoiAnPreviewAssets.has(photo.src)) : city==='da-nang' ? entry.photos.filter(photo=>confirmedDaNangPreviewAssets.has(photo.src)) : city==='vinh-hy-bay' ? entry.photos.filter(photo=>confirmedVinhHyBayPreviewAssets.has(photo.src)) : city==='hakone' ? entry.photos.filter(photo=>confirmedHakonePreviewAssets.has(photo.src)) : city==='kyoto' ? entry.photos.filter(photo=>confirmedKyotoPreviewAssets.has(photo.src)) : city==='tokyo' ? entry.photos.filter(photo=>confirmedTokyoPreviewAssets.has(photo.src)) : city==='palawan' ? entry.photos.filter(photo=>confirmedPalawanPreviewAssets.has(photo.src)) : city==='sumba' ? entry.photos.filter(photo=>confirmedSumbaAssets.has(photo.src)) : city==='chiang-mai' ? entry.photos.filter(photo=>confirmedChiangMaiAssets.has(photo.src)) : city==='bangkok' ? entry.photos.filter(photo=>confirmedBangkokAssets.has(photo.src)) : city==='koh-yao-noi' ? entry.photos.filter(photo=>confirmedKohYaoNoiAssets.has(photo.src)) : city==='krabi' ? entry.photos.filter(photo=>confirmedKrabiAssets.has(photo.src)) : city==='san-miguel-de-allende' ? entry.photos.filter(photo=>confirmedSanMiguelAssets.has(photo.src)) : city==='mayakoba' ? entry.photos.filter(photo=>confirmedMayakobaPreviewAssets.has(photo.src)) : city==='los-angeles' ? entry.photos.filter(photo=>confirmedLosAngelesPreviewAssets.has(photo.src)) : city==='miami' ? entry.photos.filter(photo=>confirmedMiamiPreviewAssets.has(photo.src)) : city==='new-york' ? entry.photos.filter(photo=>confirmedNewYorkPreviewAssets.has(photo.src)) : city==='istanbul' ? entry.photos.filter(photo=>confirmedIstanbulPreviewAssets.has(photo.src)) : city==='dubai' ? entry.photos.filter(photo=>confirmedDubaiAssets.has(photo.src)) : city==='paris' ? entry.photos.filter(photo=>confirmedParisAssets.has(photo.src)) : city==='saint-tropez' ? entry.photos.filter(photo=>confirmedSaintTropezAssets.has(photo.src)) : city==='bali' ? entry.photos.filter(photo=>confirmedBaliAssets.has(photo.src)) : city==='phuket' ? entry.photos.filter(photo=>confirmedPhuketAssets.has(photo.src)) : city==='koh-samui' ? entry.photos.filter(photo=>confirmedKohSamuiAssets.has(photo.src)) : city==='maldives' ? entry.photos.filter(photo=>confirmedMaldivesAssets.has(photo.src)) : city==='los-cabos' ? entry.photos.filter(photo=>confirmedLosCabosAssets.has(photo.src)) : city==='saint-barthelemy' ? entry.photos.filter(photo=>confirmedSaintBarthelemyAssets.has(photo.src)) : city==='porto-cervo' ? entry.photos.filter(photo=>confirmedPortoCervoAssets.has(photo.src)) : city==='mustique' ? entry.photos.filter(photo=>confirmedMustiqueAssets.has(photo.src)) : city==='courchevel-1850' ? entry.photos.filter(photo=>confirmedCourchevelAssets.has(photo.src)) : city==='monaco' ? entry.photos.filter(photo=>confirmedMonacoAssets.has(photo.src)) : city==='saint-jean-cap-ferrat' ? entry.photos.filter(photo=>confirmedCapFerratAssets.has(photo.src)) : city==='cap-dantibes' ? entry.photos.filter(photo=>confirmedCapDAntibesAssets.has(photo.src)) : city==='lake-como' ? entry.photos.filter(photo=>confirmedLakeComoAssets.has(photo.src)) : city==='capri' ? entry.photos.filter(photo=>confirmedCapriAssets.has(photo.src)) : city==='positano' ? entry.photos.filter(photo=>confirmedPositanoAssets.has(photo.src)) : city==='ravello' ? entry.photos.filter(photo=>confirmedRavelloAssets.has(photo.src)) : city==='mykonos' ? entry.photos.filter(photo=>confirmedMykonosAssets.has(photo.src)) : city==='antiparos' ? entry.photos.filter(photo=>confirmedAntiparosAssets.has(photo.src)) : city==='ibiza' ? entry.photos.filter(photo=>confirmedIbizaAssets.has(photo.src)) : city==='formentera' ? entry.photos.filter(photo=>confirmedFormenteraAssets.has(photo.src)) : city==='deia' ? entry.photos.filter(photo=>confirmedDeiaAssets.has(photo.src)) : city==='port-andratx' ? entry.photos.filter(photo=>confirmedPortAndratxAssets.has(photo.src)) : city==='comporta' ? entry.photos.filter(photo=>confirmedComportaAssets.has(photo.src)) : city==='melides' ? entry.photos.filter(photo=>confirmedMelidesAssets.has(photo.src)) : city==='tivat' ? entry.photos.filter(photo=>confirmedTivatAssets.has(photo.src)) : city==='the-hamptons' ? entry.photos.filter(photo=>confirmedTheHamptonsAssets.has(photo.src)) : city==='palm-beach' ? entry.photos.filter(photo=>confirmedPalmBeachAssets.has(photo.src)) : city==='nantucket' ? entry.photos.filter(photo=>confirmedNantucketAssets.has(photo.src)) : city==='harbour-island' ? entry.photos.filter(photo=>confirmedHarbourIslandAssets.has(photo.src)) : city==='turks-and-caicos' ? entry.photos.filter(photo=>confirmedTurksAndCaicosAssets.has(photo.src)) : city==='canouan' ? entry.photos.filter(photo=>confirmedCanouanAssets.has(photo.src)) : city==='necker-island' ? entry.photos.filter(photo=>confirmedNeckerIslandAssets.has(photo.src)) : city==='north-island-seychelles' ? entry.photos.filter(photo=>confirmedNorthIslandSeychellesAssets.has(photo.src)) : city==='pamalican-island' ? entry.photos.filter(photo=>confirmedPamalicanIslandAssets.has(photo.src)) : city==='laucala-island' ? entry.photos.filter(photo=>confirmedLaucalaIslandAssets.has(photo.src)) : city==='costa-careyes' ? entry.photos.filter(photo=>confirmedCostaCareyesPreviewAssets.has(photo.src)) : city==='punta-mita' ? entry.photos.filter(photo=>confirmedPuntaMitaPreviewAssets.has(photo.src)) : city==='okavango-delta' ? entry.photos.filter(photo=>confirmedOkavangoDeltaPreviewAssets.has(photo.src)) : city==='jumby-bay' ? entry.photos.filter(photo=>confirmedJumbyBayAssets.has(photo.src)) : isAlpineCity(city) ? entry.photos.filter(photo=>alpineAvailablePhotoPathsByCity[city].has(photo.src)) : entry.photos;
  if(!photos.length) return null;
  const first=photos[0];
  return <figure className="mt-5">
    <div className="relative aspect-[16/10] overflow-hidden bg-[#e8dfd0]">
      <Image src={first.src} alt={locale==='fr'?first.fr:first.en} fill
        sizes="(max-width: 768px) 100vw, 620px" className="object-cover"/>
    </div>
    {expanded && photos.length>1 && <div className="mt-2 grid grid-cols-2 gap-2">
      {photos.slice(1,3).map(photo=><div key={photo.src} className="relative aspect-[16/10] overflow-hidden bg-[#e8dfd0]">
        <Image src={photo.src} alt={locale==='fr'?photo.fr:photo.en} fill
          sizes="(max-width: 768px) 50vw, 300px" className="object-cover" />
      </div>)}
    </div>}

  </figure>;
}

export function getDestinationAreaPhoto(city:FeaturedCityGuideData['slug'],index:number) {
  return city==='jaipur' ? jaipurAreaVisuals[index] : city==='galle' ? galleAreaVisuals[index] : city==='tangalle' ? tangalleAreaVisuals[index] : city==='paro' ? paroAreaVisuals[index] : city==='rajasthan' ? rajasthanAreaVisuals[index] : city==='udaipur' ? udaipurAreaVisuals[index] : city==='sentosa' ? sentosaAreaVisuals[index] : city==='singapore' ? singaporeAreaVisuals[index] : city==='phu-quoc' ? phuQuocAreaVisuals[index] : city==='hoi-an' ? hoiAnAreaVisuals[index] : city==='da-nang' ? daNangAreaVisuals[index] : city==='vinh-hy-bay' ? vinhHyBayAreaVisuals[index] : city==='hakone' ? hakoneAreaVisuals[index] : city==='kyoto' ? kyotoAreaVisuals[index] : city==='tokyo' ? tokyoAreaVisuals[index] : city==='palawan' ? palawanAreaVisuals[index] : city==='sumba' ? sumbaAreaVisuals[index] : city==='chiang-mai' ? chiangMaiAreaVisuals[index] : city==='bangkok' ? bangkokAreaVisuals[index] : city==='koh-yao-noi' ? kohYaoNoiAreaVisuals[index] : city==='krabi' ? krabiAreaVisuals[index] : city==='san-miguel-de-allende' ? sanMiguelAreaVisuals[index] : city==='mayakoba' ? mayakobaAreaVisuals[index] : city==='los-angeles' ? losAngelesAreaVisuals[index] : city==='miami' ? miamiAreaVisuals[index] : city==='new-york' ? newYorkAreaVisuals[index] : city==='istanbul' ? istanbulAreaVisuals[index] : city==='bodrum' ? bodrumAreaVisuals[index] : city==='antalya' ? antalyaAreaVisuals[index] : city==='dubai' ? dubaiAreaVisuals[index] : city==='paris' ? parisAreaVisuals[index] : city==='saint-tropez' ? saintTropezAreaVisuals[index] : city==='bali' ? baliAreaVisuals[index] : city==='phuket' ? phuketAreaVisuals[index] : city==='koh-samui' ? kohSamuiAreaVisuals[index] : city==='maldives' ? maldivesAreaVisuals[index] : city==='los-cabos' ? losCabosAreaVisuals[index] : city==='saint-barthelemy' ? saintBarthelemyAreaVisuals[index] : city==='courchevel-1850' ? courchevel1850AreaVisuals[index] : city==='mustique' ? mustiqueAreaVisuals[index] : city==='monaco' ? monacoAreaVisuals[index] : city==='saint-jean-cap-ferrat' ? capFerratAreaVisuals[index] : city==='cap-dantibes' ? capDAntibesAreaVisuals[index] : city==='lake-como' ? lakeComoAreaVisuals[index] : city==='capri' ? capriAreaVisuals[index] : city==='positano' ? positanoAreaVisuals[index] : city==='ravello' ? ravelloAreaVisuals[index] : city==='mykonos' ? mykonosAreaVisuals[index] : city==='antiparos' ? antiparosAreaVisuals[index] : city==='ibiza' ? ibizaAreaVisuals[index] : city==='formentera' ? formenteraAreaVisuals[index] : city==='deia' ? deiaAreaVisuals[index] : city==='port-andratx' ? portAndratxAreaVisuals[index] : city==='comporta' ? comportaAreaVisuals[index] : city==='melides' ? melidesAreaVisuals[index] : city==='tivat' ? tivatAreaVisuals[index] : city==='the-hamptons' ? theHamptonsAreaVisuals[index] : city==='palm-beach' ? palmBeachAreaVisuals[index] : city==='nantucket' ? nantucketAreaVisuals[index] : city==='harbour-island' ? harbourIslandAreaVisuals[index] : city==='turks-and-caicos' ? turksAndCaicosAreaVisuals[index] : city==='canouan' ? canouanAreaVisuals[index] : city==='necker-island' ? neckerIslandAreaVisuals[index] : city==='north-island-seychelles' ? northIslandSeychellesAreaVisuals[index] : city==='pamalican-island' ? pamalicanIslandAreaVisuals[index] : city==='laucala-island' ? laucalaIslandAreaVisuals[index] : city==='costa-careyes' ? costaCareyesAreaVisuals[index] : city==='punta-mita' ? puntaMitaAreaVisuals[index] : city==='okavango-delta' ? okavangoDeltaAreaVisuals[index] : city==='jumby-bay' ? jumbyBayAreaVisuals[index] : isAlpineCity(city) ? alpineAreaVisualsByCity[city][index] : portoCervoAreaVisuals[index];
}

export const areaPhotoLicensesByCity:Record<string,Record<string,{name:string;url:string}>>={
  'jaipur':jaipurPhotoLicenses,
  'galle':gallePhotoLicenses,
  'tangalle':tangallePhotoLicenses,
  'paro':paroPhotoLicenses,
  'rajasthan':rajasthanPhotoLicenses,
  'udaipur':udaipurPhotoLicenses,
  'sentosa':sentosaPhotoLicenses,
  'singapore':singaporePhotoLicenses,
  'phu-quoc':phuQuocPhotoLicenses,
  'hoi-an':hoiAnPhotoLicenses,
  'da-nang':daNangPhotoLicenses,
  'vinh-hy-bay':vinhHyBayPhotoLicenses,
  'hakone':hakonePhotoLicenses,
  'kyoto':kyotoPhotoLicenses,
  'tokyo':tokyoPhotoLicenses,
  'palawan':palawanPhotoLicenses,
  'sumba':sumbaPhotoLicenses,
  'chiang-mai':chiangMaiPhotoLicenses,
  'bangkok':bangkokPhotoLicenses,
  'koh-yao-noi':kohYaoNoiPhotoLicenses,
  'krabi':krabiPhotoLicenses,
  'san-miguel-de-allende':sanMiguelPhotoLicenses,
};

function DestinationAreaPhoto({city,index,locale}: {city:FeaturedCityGuideData['slug'];index:number;locale:Lang}) {
  const photo=getDestinationAreaPhoto(city,index);
  if(!photo || ((city==='jaipur' && !confirmedJaipurPreviewAssets.has(photo.src)) || (city==='galle' && !confirmedGallePreviewAssets.has(photo.src)) || (city==='tangalle' && !confirmedTangallePreviewAssets.has(photo.src)) || (city==='paro' && !confirmedParoPreviewAssets.has(photo.src)) || (city==='rajasthan' && !confirmedRajasthanPreviewAssets.has(photo.src)) || (city==='udaipur' && !confirmedUdaipurPreviewAssets.has(photo.src)) || (city==='sentosa' && !confirmedSentosaPreviewAssets.has(photo.src)) || (city==='singapore' && !confirmedSingaporePreviewAssets.has(photo.src)) || (city==='phu-quoc' && !confirmedPhuQuocPreviewAssets.has(photo.src)) || (city==='hoi-an' && !confirmedHoiAnPreviewAssets.has(photo.src)) || (city==='da-nang' && !confirmedDaNangPreviewAssets.has(photo.src)) || (city==='vinh-hy-bay' && !confirmedVinhHyBayPreviewAssets.has(photo.src)) || (city==='hakone' && !confirmedHakonePreviewAssets.has(photo.src)) || (city==='kyoto' && !confirmedKyotoPreviewAssets.has(photo.src)) || (city==='tokyo' && !confirmedTokyoPreviewAssets.has(photo.src)) || (city==='palawan' && !confirmedPalawanPreviewAssets.has(photo.src)) || (city==='sumba' && !confirmedSumbaAssets.has(photo.src)) || (city==='chiang-mai' && !confirmedChiangMaiAssets.has(photo.src)) || (city==='bangkok' && !confirmedBangkokAssets.has(photo.src)) || (city==='koh-yao-noi' && !confirmedKohYaoNoiAssets.has(photo.src)) || (city==='krabi' && !confirmedKrabiAssets.has(photo.src)) || (city==='san-miguel-de-allende' && !confirmedSanMiguelAssets.has(photo.src)) || (city==='mayakoba' && !confirmedMayakobaPreviewAssets.has(photo.src)) || (city==='los-angeles' && !confirmedLosAngelesPreviewAssets.has(photo.src)) || (city==='miami' && !confirmedMiamiPreviewAssets.has(photo.src)) || (city==='new-york' && !confirmedNewYorkPreviewAssets.has(photo.src)) || (city==='istanbul' && !confirmedIstanbulPreviewAssets.has(photo.src)) || (city==='koh-samui' && !confirmedKohSamuiAssets.has(photo.src)) || (city==='maldives' && !confirmedMaldivesAssets.has(photo.src)) || (city==='los-cabos' && !confirmedLosCabosAssets.has(photo.src)) || (city==='saint-barthelemy' && !confirmedSaintBarthelemyAssets.has(photo.src)) || (city==='porto-cervo' && !confirmedPortoCervoAssets.has(photo.src)) || (city==='mustique' && !confirmedMustiqueAssets.has(photo.src)) || (city==='courchevel-1850' && !confirmedCourchevelAssets.has(photo.src)) || (city==='monaco' && !confirmedMonacoAssets.has(photo.src)) || (city==='saint-jean-cap-ferrat' && !confirmedCapFerratAssets.has(photo.src)) || (city==='cap-dantibes' && !confirmedCapDAntibesAssets.has(photo.src)) || (city==='lake-como' && !confirmedLakeComoAssets.has(photo.src)) || (city==='capri' && !confirmedCapriAssets.has(photo.src)) || (city==='positano' && !confirmedPositanoAssets.has(photo.src)) || (city==='ravello' && !confirmedRavelloAssets.has(photo.src)) || (city==='mykonos' && !confirmedMykonosAssets.has(photo.src)) || (city==='antiparos' && !confirmedAntiparosAssets.has(photo.src)) || (city==='ibiza' && !confirmedIbizaAssets.has(photo.src)) || (city==='formentera' && !confirmedFormenteraAssets.has(photo.src)) || (city==='deia' && !confirmedDeiaAssets.has(photo.src)) || (city==='port-andratx' && !confirmedPortAndratxAssets.has(photo.src)) || (city==='comporta' && !confirmedComportaAssets.has(photo.src)) || (city==='melides' && !confirmedMelidesAssets.has(photo.src)) || (city==='tivat' && !confirmedTivatAssets.has(photo.src)) || (city==='the-hamptons' && !confirmedTheHamptonsAssets.has(photo.src)) || (city==='palm-beach' && !confirmedPalmBeachAssets.has(photo.src)) || (city==='nantucket' && !confirmedNantucketAssets.has(photo.src)) || (city==='harbour-island' && !confirmedHarbourIslandAssets.has(photo.src)) || (city==='turks-and-caicos' && !confirmedTurksAndCaicosAssets.has(photo.src)) || (city==='canouan' && !confirmedCanouanAssets.has(photo.src)) || (city==='necker-island' && !confirmedNeckerIslandAssets.has(photo.src)) || (city==='north-island-seychelles' && !confirmedNorthIslandSeychellesAssets.has(photo.src)) || (city==='pamalican-island' && !confirmedPamalicanIslandAssets.has(photo.src)) || (city==='laucala-island' && !confirmedLaucalaIslandAssets.has(photo.src)) || (city==='costa-careyes' && !confirmedCostaCareyesPreviewAssets.has(photo.src)) || (city==='punta-mita' && !confirmedPuntaMitaPreviewAssets.has(photo.src)) || (city==='okavango-delta' && !confirmedOkavangoDeltaPreviewAssets.has(photo.src)) || (city==='jumby-bay' && !confirmedJumbyBayAssets.has(photo.src)) || (isAlpineCity(city) && !alpineAvailablePhotoPathsByCity[city].has(photo.src))))return null;
  return <figure className="mt-5">
    <div className="relative aspect-[16/10] overflow-hidden bg-[#e8dfd0]">
      <Image src={photo.src} alt={locale==='fr'?photo.fr:photo.en} fill
        sizes="(max-width: 768px) 100vw, 360px" className="object-cover" />
    </div>
    
  </figure>;
}

function HotelTeaser({ guide, locale }: {guide:FeaturedCityGuideData;locale:Lang}) {
  const fr=locale==='fr';
  return <section id="adresses" className="scroll-mt-24 bg-[#f5f5f3] py-16 sm:py-24">
    <div className="mx-auto max-w-7xl px-5">
      <p className="text-[#193344] text-xs font-semibold tracking-[.2em] uppercase">
        {fr?'Notre sélection':'Our shortlist'}</p>
      <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
        <h2 className="max-w-3xl font-sans font-normal text-3xl sm:text-5xl">
          {fr?'Des adresses pour des séjours différents.':'Addresses for different kinds of stays.'}
        </h2>
        <Link href={travelHref(locale,'hotels/'+guide.slug)}
          className="bg-[#142c38] px-5 py-4 text-sm font-semibold text-white hover:bg-[#254755]">
          {fr?'Lire le guide des hôtels':'Explore the hotel guide'} →
        </Link>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {guide.hotels.map((hotel)=><article key={hotel.name} className="flex flex-col bg-white p-6">
          <span className="text-xs tracking-[.15em] text-[#193344]">{hotel.area}</span>
          <h3 className="mt-4 font-sans font-normal text-2xl">{hotel.name}</h3>
          {Boolean(hotelEditorialByCity[guide.slug]) && <PremiumHotelGallery city={guide.slug} hotelName={hotel.name} locale={locale}/>}
          <p className="mt-4 line-clamp-2 text-sm leading-7 text-[#53636a]">{fr?hotel.fr:hotel.en}</p>
          <div className="mt-auto pt-5"><HotelNuiteeLink hotelKey={hotelPartnerKey(guide.slug, hotel.name)} locale={locale} /></div>
          <details className="mt-5 border-t border-[#e1e5e5] pt-4">
            <summary className="cursor-pointer text-sm text-[#193344]">{fr?'En savoir plus sur cette adresse':'Read about this hotel'}</summary>
            <EditorialProse text={fr?hotel.fr:hotel.en} className="mt-4 text-sm text-[#53636a]" maxChars={245} />
            {Boolean(hotelEditorialByCity[guide.slug]) && hotelEditorialByCity[guide.slug][hotel.name] && <p className="mt-4 text-sm leading-7 text-[#53616b]">
              {fr?hotelEditorialByCity[guide.slug][hotel.name].frBest:hotelEditorialByCity[guide.slug][hotel.name].enBest}
            </p>}
          </details>
        </article>)}
      </div>
    </div>
  </section>;
}
function HotelSelection({guide,locale}: {guide:FeaturedCityGuideData;locale:Lang}) {
  const fr=locale==='fr';
  return <section id="selection" className="scroll-mt-24 mx-auto max-w-7xl px-5 py-16 sm:py-24">
    <p className="text-xs uppercase tracking-[.2em] text-[#193344]">{fr?'Les adresses':'The shortlist'}</p>
    <h2 className="mt-4 max-w-4xl font-sans font-normal text-3xl sm:text-5xl">{fr
      ? 'Quatre styles, quatre raisons de choisir.'
      : 'Four distinctive reasons to stay.'}</h2>
    <div className="mt-8 grid gap-5 md:grid-cols-2">
      {guide.hotels.map((hotel)=><article key={hotel.name} className="flex flex-col border border-[#e1e5e5] bg-white p-7 sm:p-9">
        <p className="text-xs uppercase tracking-[.14em] text-[#193344]">
          {hotel.area}</p>
        <h3 className="mt-4 font-sans font-normal text-3xl">{hotel.name}</h3>
        {Boolean(hotelEditorialByCity[guide.slug]) && <PremiumHotelGallery city={guide.slug} hotelName={hotel.name} locale={locale} expanded />}
        <p className="mt-5 line-clamp-2 text-sm leading-7 text-[#475862]">{fr?hotel.fr:hotel.en}</p>
        <HotelPartnerBooking hotelKey={hotelPartnerKey(guide.slug, hotel.name)} locale={locale} />
        <details className="mt-7 border-t border-[#e1e5e5] pt-5">
          <summary className="cursor-pointer text-sm font-medium text-[#193344]">{fr?'Découvrir notre analyse de cet hôtel':'Read our hotel review'}</summary>
          <EditorialProse text={fr?hotel.fr:hotel.en} className="mt-5 text-base text-[#475862]" />
          {Boolean(hotelEditorialByCity[guide.slug]) && hotelEditorialByCity[guide.slug][hotel.name] && <div className="mt-7 border-t border-[#e1e5e5] pt-6">
          <h4 className="font-sans font-normal text-xl">{fr?'Notre lecture de cette adresse':'Our take on this address'}</h4>
          <EditorialProse
            text={fr?hotelEditorialByCity[guide.slug][hotel.name].frStory:hotelEditorialByCity[guide.slug][hotel.name].enStory}
            className="mt-4 text-base text-[#51616b]"
          />
          <p className="mt-5 text-sm leading-7 font-medium text-[#193344]">
            {fr?'À privilégier pour : ':'Best for: '}{fr?hotelEditorialByCity[guide.slug][hotel.name].frBest:hotelEditorialByCity[guide.slug][hotel.name].enBest}
          </p>
        </div>}
        <div className="mt-7 border-t border-[#e1e5e5] pt-5">
          <h4 className="text-sm font-medium text-[#193344]">{fr?'Avant de réserver':'Before booking'}</h4>
          <EditorialProse text={fr?hotel.frWatch:hotel.enWatch} className="mt-3 text-sm text-[#53616b]" maxChars={260} />
        </div>
        </details>
      </article>)}
    </div>
    <EditorialProse text={fr?guide.hotelIntroFr:guide.hotelIntroEn} className="mt-10 max-w-3xl text-base text-[#52616b]" />
  </section>;
}
function Advice({guide,locale}: {guide:FeaturedCityGuideData;locale:Lang}) {
  const fr=locale==='fr';
  return <section id="conseils" className="scroll-mt-24 bg-[#f5f5f3] py-16 sm:py-24">
    <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
      <div>
        <p className="text-xs uppercase tracking-[.2em] text-[#193344]">{fr?'Avant de partir':'Before you travel'}</p>
        <h2 className="mt-4 font-sans font-normal text-3xl sm:text-4xl">{fr?'Les détails qui changent l’expérience.':'Details that change the experience.'}</h2>
        <EditorialProse text={fr?guide.editorialFr:guide.editorialEn} className="mt-6 text-base text-[#52636e]" />
      </div>
      <div className="bg-white p-7 sm:p-10">
        <h3 className="font-sans font-normal text-2xl">{fr?'Notre liste de vérification':'Our pre-booking checklist'}</h3>
        <ul className="mt-6 space-y-4">{(fr?guide.checksFr:guide.checksEn).map(item=><li key={item} className="flex gap-3 text-sm leading-7 text-[#435761]">
          <span aria-hidden="true" className="font-semibold text-[#193344]">◆</span><span>{item}</span>
        </li>)}</ul>
        <p className="mt-7 border-t border-[#e1e5e5] pt-5 text-sm leading-7 text-[#596a72]">{fr
          ? 'Les chambres et les conditions se consultent dans notre espace de réservation Nuitée. Le partenaire assure la confirmation et l’assistance du séjour.'
          : 'Rooms and booking conditions are available through our Nuitée booking space. The partner handles confirmation and stay support.'}</p>
      </div>
    </div>
  </section>;
}

export function FeaturedCityGuide({ city, locale, variant }: {city:FeaturedCityGuideData;locale:Lang;variant:Variant}) {
  const fr=locale==='fr',hotelPage=variant==='hotels';
  const destinationAssets=city.slug==='jaipur'?confirmedJaipurPreviewAssets:city.slug==='galle'?confirmedGallePreviewAssets:city.slug==='tangalle'?confirmedTangallePreviewAssets:city.slug==='paro'?confirmedParoPreviewAssets:city.slug==='rajasthan'?confirmedRajasthanPreviewAssets:city.slug==='udaipur'?confirmedUdaipurPreviewAssets:city.slug==='sentosa'?confirmedSentosaPreviewAssets:city.slug==='singapore'?confirmedSingaporePreviewAssets:city.slug==='phu-quoc'?confirmedPhuQuocPreviewAssets:city.slug==='hoi-an'?confirmedHoiAnPreviewAssets:city.slug==='da-nang'?confirmedDaNangPreviewAssets:city.slug==='vinh-hy-bay'?confirmedVinhHyBayPreviewAssets:city.slug==='hakone'?confirmedHakonePreviewAssets:city.slug==='kyoto'?confirmedKyotoPreviewAssets:city.slug==='tokyo'?confirmedTokyoPreviewAssets:city.slug==='palawan'?confirmedPalawanPreviewAssets:city.slug==='sumba'?confirmedSumbaAssets:city.slug==='chiang-mai'?confirmedChiangMaiAssets:city.slug==='bangkok'?confirmedBangkokAssets:city.slug==='koh-yao-noi'?confirmedKohYaoNoiAssets:city.slug==='krabi'?confirmedKrabiAssets:city.slug==='san-miguel-de-allende'?confirmedSanMiguelAssets:city.slug==='mayakoba'?confirmedMayakobaPreviewAssets:city.slug==='los-angeles'?confirmedLosAngelesPreviewAssets:city.slug==='miami'?confirmedMiamiPreviewAssets:city.slug==='new-york'?confirmedNewYorkPreviewAssets:city.slug==='istanbul'?confirmedIstanbulPreviewAssets:city.slug==='costa-careyes'?confirmedCostaCareyesPreviewAssets:city.slug==='punta-mita'?confirmedPuntaMitaPreviewAssets:city.slug==='okavango-delta'?confirmedOkavangoDeltaPreviewAssets:city.slug==='monaco'?confirmedMonacoAssets:city.slug==='saint-jean-cap-ferrat'?confirmedCapFerratAssets:city.slug==='cap-dantibes'?confirmedCapDAntibesAssets:city.slug==='lake-como'?confirmedLakeComoAssets:city.slug==='capri'?confirmedCapriAssets:city.slug==='positano'?confirmedPositanoAssets:city.slug==='ravello'?confirmedRavelloAssets:city.slug==='mykonos'?confirmedMykonosAssets:city.slug==='antiparos'?confirmedAntiparosAssets:city.slug==='ibiza'?confirmedIbizaAssets:city.slug==='formentera'?confirmedFormenteraAssets:city.slug==='deia'?confirmedDeiaAssets:city.slug==='port-andratx'?confirmedPortAndratxAssets:city.slug==='comporta'?confirmedComportaAssets:city.slug==='melides'?confirmedMelidesAssets:city.slug==='tivat'?confirmedTivatAssets:city.slug==='the-hamptons'?confirmedTheHamptonsAssets:city.slug==='palm-beach'?confirmedPalmBeachAssets:city.slug==='nantucket'?confirmedNantucketAssets:city.slug==='harbour-island'?confirmedHarbourIslandAssets:isAlpineCity(city.slug)?alpineAvailablePhotoPathsByCity[city.slug]:city.slug==='courchevel-1850'?confirmedCourchevelAssets:city.slug==='mustique'?confirmedMustiqueAssets:city.slug==='porto-cervo'?confirmedPortoCervoAssets:city.slug==='saint-barthelemy'?confirmedSaintBarthelemyAssets:city.slug==='los-cabos'?confirmedLosCabosAssets:city.slug==='maldives'?confirmedMaldivesAssets:null;
  // The approved manifest can advance ahead of hand-curated guide captions.
  // Never read a photo's .src before proving the key exists and the asset is allowed.
  const approvedPhotos=Object.values(city.photos).filter(photo=>!destinationAssets || destinationAssets.has(photo.src));
  const requestedHero=city.photos[city.hero];
  const hero=requestedHero && approvedPhotos.some(photo=>photo.src===requestedHero.src)
    ? requestedHero : approvedPhotos[0];
  const requestedSecondary=city.photos[city.secondary];
  const secondary=requestedSecondary && approvedPhotos.some(photo=>photo.src===requestedSecondary.src) && requestedSecondary.src!==hero?.src
    ? requestedSecondary : (approvedPhotos.find(photo=>photo.src!==hero?.src) || hero);
  const hubHref=travelHref(locale,'destinations/'+city.slug);
  const hotelsHref=travelHref(locale,'hotels/'+city.slug);
  const allOtherDestinations = Object.values(featuredCityGuides).filter(other => other.slug !== city.slug);
  const sameCountry = allOtherDestinations.filter(other => other.country === city.country).slice(0, 6);
  const selectedDestinations = [
    ...sameCountry,
    ...allOtherDestinations.filter(other => other.country !== city.country).slice(0, 6 - sameCountry.length),
  ];
  const featuredSlugs = new Set(selectedDestinations.map(other => other.slug));
  const additionalDestinations = allOtherDestinations.filter(other => !featuredSlugs.has(other.slug));
  const earlyPreviewPhotos = approvedPhotos.filter(photo => photo.src !== hero?.src).slice(0, 3);
  return <main className="min-h-screen bg-white text-[#202629]">
    {city.slug==='san-miguel-de-allende' ? <section className="bg-[#f5f5f3] text-[#202629]">
      <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[0.9fr_1.1fr]">
        <div className="order-2 flex flex-col justify-center px-6 py-8 sm:px-12 lg:order-1 lg:px-14 lg:py-16">
          <p className="max-w-md text-[11px] font-medium uppercase leading-6 tracking-[.15em] text-[#193344]">
            Bosphoras · Luxury Stays<br/>{fr?city.eyebrowFr:city.eyebrowEn}
          </p>
          <h1 className="mt-6 max-w-xl font-sans font-normal text-4xl leading-[1.08] sm:text-5xl xl:text-[56px]">
            {hotelPage?(fr?'Hôtels de luxe à '+city.name+' : choisir la bonne adresse.':'Luxury hotels in '+city.name+': choose the right address.'):(fr?city.headingFr:city.headingEn)}
          </h1>
          <div className="mt-6 h-px w-14 bg-[#193344]/30"/>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href={hotelPage?'#selection':'#quartiers'} className="bg-[#193344] px-5 py-4 text-sm font-medium text-white hover:bg-[#25485e]">
              {hotelPage?(fr?'Comparer les quatre adresses':'Compare four hotels'):(fr?'Découvrir les quartiers':'Discover neighbourhoods')} →
            </a>
            <Link href={hotelPage?hubHref:hotelsHref} className="border-b border-[#193344] py-2 text-sm font-medium text-[#193344]">
              {hotelPage?(fr?'Voir le guide de la ville':'Explore the city guide'):(fr?'Voir les hôtels sélectionnés':'See the selected hotels')}
            </Link>
          </div>
        </div>
        <div className="relative order-1 aspect-[16/10] overflow-hidden lg:order-2 lg:aspect-auto lg:min-h-[600px]">
          {hero && <Image src={hero.src} alt={fr?hero.fr:hero.en} fill priority sizes="(min-width:1024px) 60vw, 100vw" className="object-cover object-[58%_center]"/>}
        </div>
      </div>
    </section> : (
    <section className="relative isolate overflow-hidden bg-[#f5f5f3] text-[#202629]">
      {hero && <div className="relative h-[38vh] min-h-[260px] overflow-hidden sm:hidden">
        <Image src={hero.src} alt={fr?hero.fr:hero.en} fill priority sizes="100vw" className="object-cover" />
      </div>}
      <div className="absolute inset-0 hidden sm:block" aria-hidden="true">
        {hero && (destinationAssets ? destinationAssets.has(hero.src) : true) && <Image src={hero.src} alt={fr?hero.fr:hero.en} fill priority sizes="100vw" className="object-cover" />}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f5f5f3]/90 via-[#f5f5f3]/45 to-transparent" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-8 sm:pb-24 sm:pt-20">
        <div className={(city.slug === 'hoi-an'||city.slug === 'da-nang'||city.slug === 'vinh-hy-bay'||city.slug === 'hakone'||city.slug === 'kyoto'||city.slug === 'tokyo'||city.slug === 'palawan'||city.slug === 'sumba'||city.slug === 'chiang-mai'||city.slug === 'bangkok'||city.slug === 'koh-yao-noi'||city.slug === 'krabi'||city.slug === 'mayakoba'||city.slug === 'los-angeles'||city.slug === 'miami'||city.slug === 'new-york'||city.slug === 'bodrum'||city.slug === 'antalya'||city.slug === 'dubai'||city.slug === 'paris'||city.slug === 'saint-tropez'||city.slug === 'bali'||city.slug === 'phuket'||city.slug === 'koh-samui'||city.slug === 'maldives'||city.slug === 'los-cabos'||city.slug === 'saint-barthelemy'||city.slug === 'porto-cervo'||city.slug==='mykonos') ? 'max-w-[760px] bg-[#f5f5f3]/85 px-0 py-0 sm:px-8 sm:py-7' : ''}>
        <p className="text-xs font-medium uppercase tracking-[.12em] text-[#193344]">Bosphoras · Luxury Stays
          {' / '}{fr?city.eyebrowFr:city.eyebrowEn}</p>
        <h1 className="mt-4 max-w-4xl font-sans font-normal text-4xl leading-[1.12] tracking-[-0.04em] text-[#202629] sm:mt-7 sm:text-6xl lg:text-7xl">
          {hotelPage?(city.slug==='mykonos'?(fr?'Hôtels de luxe à Mykonos : quatre adresses d’exception':'Luxury hotels in Mykonos: four exceptional island addresses'):city.slug==='courchevel-1850'?(fr?'Courchevel 1850 : quatre palaces d’exception':'Courchevel 1850: four exceptional alpine palaces'):city.slug==='mustique'?(fr?'Mustique : un hôtel et trois villas de luxe':'Mustique: one hotel and three luxury villas'):city.slug==='porto-cervo'?(fr?'Hôtels de luxe à Porto Cervo : nos quatre adresses iconiques':'Luxury hotels in Porto Cervo: four iconic Sardinian stays'):city.slug==='saint-barthelemy'?(fr?'Hôtels de luxe à Saint-Barth : quatre adresses iconiques':'Luxury hotels in St Barth: four iconic island stays'):city.slug==='los-cabos'?(fr?'Hôtels de luxe à Los Cabos : quatre resorts d’exception':'Luxury hotels in Los Cabos: four exceptional resorts'):city.slug==='maldives'?(fr?'Hôtels de luxe aux Maldives : villas et îles privées d’exception':'Luxury hotels in the Maldives: exceptional private islands and villas'):city.slug==='koh-samui'?(fr?'Hôtels de luxe à Koh Samui : notre sélection d’adresses d’exception':'Luxury hotels in Koh Samui: our curated island collection'):(fr?'Hôtels de luxe à '+city.name+' : choisir la bonne adresse.':'Luxury hotels in '+city.name+': choose the right address.'))
            :(fr?city.headingFr:city.headingEn)}</h1>
        
        <p className="mt-5 line-clamp-2 max-w-xl text-sm leading-7 text-[#475862] sm:text-base">
          {hotelPage?(fr?city.hotelIntroFr:city.hotelIntroEn):(fr?city.introFr:city.introEn)}
        </p>
        
        
        
        
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={hotelPage?'#selection':'#quartiers'} className="bg-[#193344] px-6 py-4 text-sm font-medium text-white hover:bg-[#25485e]">
            {hotelPage?(city.slug==='mustique'?(fr?'Comparer hôtel et villas':'Compare hotel and villas'):(fr?'Comparer les quatre adresses':'Compare four hotels')):(city.slug==='porto-cervo'?(fr?'Découvrir la Costa Smeralda':'Explore the Emerald Coast'):city.slug==='saint-barthelemy'?(fr?'Choisir son paysage':'Choose your setting'):city.slug==='los-cabos'?(fr?'Découvrir la côte':'Explore the coastline'):city.slug==='maldives'?(fr?'Découvrir les atolls':'Explore the atolls'):(fr?'Découvrir les quartiers':'Discover neighbourhoods'))} →
          </a>
          <Link href={hotelPage?hubHref:hotelsHref} className="border border-[#193344] px-6 py-4 text-sm text-[#193344] hover:bg-white/70">
            {hotelPage?(fr?'Voir le guide de la ville':'Explore the city guide'):(fr?'Voir les hôtels sélectionnés':'See the selected hotels')}
          </Link>
        </div>
      </div>
    </section>
    )}
    <nav className="sticky top-0 z-20 border-b border-[#e1e5e5] bg-white/95 px-5 backdrop-blur" aria-label={fr?'Naviguer dans le guide':'Guide sections'}>
      <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto py-4 text-xs sm:text-sm">
        <a href={hotelPage?'#selection':'#quartiers'} className="shrink-0 hover:text-[#193344]">{hotelPage?(fr?'Les hôtels':'Hotels'):(city.slug==='porto-cervo'?(fr?'Les secteurs':'Areas'):city.slug==='saint-barthelemy'?(fr?'Les lieux':'Places'):city.slug==='los-cabos'?(fr?'Les secteurs':'Areas'):city.slug==='maldives'?(fr?'Les atolls':'Atolls'):(fr?'Les quartiers':'Areas'))}</a>
        {city.slug==='galle' && approvedPhotos.length>0 && <a href="#panoramas-galle" className="shrink-0 hover:text-[#193344]">{fr?'Vues de Galle':'Galle landscapes'}</a>}
        {city.slug==='tangalle' && approvedPhotos.length>0 && <a href="#panoramas-tangalle" className="shrink-0 hover:text-[#193344]">{fr?'Vues de Tangalle':'Tangalle landscapes'}</a>}
        {city.slug==='paro' && approvedPhotos.length>0 && <a href="#panoramas-paro" className="shrink-0 hover:text-[#193344]">{fr?'Vues de Paro':'Paro landscapes'}</a>}
        {city.slug==='rajasthan' && <a href="#panoramas-rajasthan" className="shrink-0 hover:text-[#193344]">{fr?'Panoramas':'Landscapes'}</a>}
        {city.slug==='udaipur' && <a href="#panoramas-udaipur" className="shrink-0 hover:text-[#193344]">{fr?'Panoramas':'Landscapes'}</a>}
        {city.slug==='sentosa' && <a href="#panoramas-sentosa" className="shrink-0 hover:text-[#193344]">{fr?'Panoramas':'Landscapes'}</a>}
        {city.slug==='singapore' && <a href="#panoramas-singapore" className="shrink-0 hover:text-[#193344]">{fr?'Panoramas':'Landscapes'}</a>}
        {city.slug==='phu-quoc' && <a href="#panoramas-phu-quoc" className="shrink-0 hover:text-[#193344]">{fr?'Panoramas':'Landscapes'}</a>}
        {city.slug==='hoi-an' && <a href="#panoramas-hoi-an" className="shrink-0 hover:text-[#193344]">{fr?'Panoramas':'Landscapes'}</a>}
        {city.slug==='da-nang' && <a href="#panoramas-da-nang" className="shrink-0 hover:text-[#193344]">{fr?'Panoramas':'Landscapes'}</a>}
        {city.slug==='vinh-hy-bay' && <a href="#panoramas-vinh-hy-bay" className="shrink-0 hover:text-[#193344]">{fr?'Panoramas':'Landscapes'}</a>}
        {city.slug==='hakone' && <a href="#panoramas-hakone" className="shrink-0 hover:text-[#193344]">{fr?'Panoramas':'Landscapes'}</a>}
        {city.slug==='kyoto' && <a href="#panoramas-kyoto" className="shrink-0 hover:text-[#193344]">{fr?'Panoramas':'Landscapes'}</a>}
        {city.slug==='tokyo' && <a href="#panoramas-tokyo" className="shrink-0 hover:text-[#193344]">{fr?'Panoramas':'Landscapes'}</a>}
        {city.slug==='palawan' && <a href="#panoramas-palawan" className="shrink-0 hover:text-[#193344]">{fr?'Panoramas':'Landscapes'}</a>}
        {city.slug==='sumba' && <a href="#panoramas-sumba" className="shrink-0 hover:text-[#193344]">{fr?'Panoramas':'Landscapes'}</a>}
        {city.slug==='chiang-mai' && <a href="#panoramas-chiang-mai" className="shrink-0 hover:text-[#193344]">{fr?'Panoramas':'Landscapes'}</a>}
        {city.slug==='bangkok' && <a href="#panoramas-bangkok" className="shrink-0 hover:text-[#193344]">{fr?'Panoramas':'Landscapes'}</a>}
        {city.slug==='koh-yao-noi' && <a href="#panoramas-koh-yao-noi" className="shrink-0 hover:text-[#193344]">{fr?'Panoramas':'Landscapes'}</a>}
        {city.slug==='krabi' && <a href="#panoramas-krabi" className="shrink-0 hover:text-[#193344]">{fr?'Panoramas':'Landscapes'}</a>}
        {city.slug==='san-miguel-de-allende' && <a href="#panoramas-san-miguel-de-allende" className="shrink-0 hover:text-[#193344]">{fr?'Panoramas':'Landscapes'}</a>}
        {city.slug==='mayakoba' && <a href="#panoramas-mayakoba" className="shrink-0 hover:text-[#193344]">{fr?'Panoramas':'Landscapes'}</a>}
        {city.slug==='los-angeles' && <a href="#panoramas-los-angeles" className="shrink-0 hover:text-[#193344]">{fr?'Panoramas':'Landscapes'}</a>}
        {city.slug==='miami' && <a href="#panoramas-miami" className="shrink-0 hover:text-[#193344]">{fr?'Panoramas':'Landscapes'}</a>}
        {city.slug==='new-york' && <a href="#panoramas-new-york" className="shrink-0 hover:text-[#193344]">{fr?'Panoramas':'Landscapes'}</a>}
        <a href="#experience" className="shrink-0 hover:text-[#193344]">{fr?'L’expérience':'Experiences'}</a>
        <a href="#conseils" className="shrink-0 hover:text-[#193344]">{fr?'Les conseils':'Advice'}</a>
      </div>
    </nav>
    {earlyPreviewPhotos.length > 0 && <section aria-label={fr?'Images de la destination':'Destination photographs'} className="mx-auto max-w-7xl px-5 pt-8 sm:pt-12">
      <div className={earlyPreviewPhotos.length > 1 ? 'grid gap-3 sm:grid-cols-2 lg:grid-cols-3' : 'grid gap-3'}>
        {earlyPreviewPhotos.map((photo,index)=><CityPhoto key={photo.src} photo={photo} locale={locale} priority={index===0}/>)}
      </div>
    </section>}
    {hotelPage&&<HotelSelection guide={city} locale={locale}/>}
    <section id={hotelPage?'quartiers':'quartiers'} className="scroll-mt-24 mx-auto max-w-7xl px-5 py-16 sm:py-24">
      <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#193344]">
        {hotelPage?(fr?'Comprendre la destination':'Read the destination'):(fr?'Choisir son paysage':'Choose your surroundings')}
      </p>
      <h2 className="mt-4 max-w-4xl font-sans font-normal text-3xl sm:text-5xl">{fr
        ?city.slug==='porto-cervo'?'Une côte mythique, cinq façons de séjourner.':city.slug==='saint-barthelemy'?'Une île, cinq atmosphères à découvrir.':city.slug==='los-cabos'?'Entre désert et océan, cinq paysages à choisir.':city.slug==='maldives'?'Un archipel, plusieurs façons de vivre le luxe.':'Une ville, plusieurs façons de séjourner.'
        :city.slug==='porto-cervo'?'One legendary coast, five ways to stay.':city.slug==='saint-barthelemy'?'One island, five distinct atmospheres.':city.slug==='los-cabos'?'Five distinctive landscapes between desert and sea.':city.slug==='maldives'?'An archipelago, many ways to experience luxury.':'One destination, very different places to stay.'}</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {city.areas.map((area,i)=><article key={area.name} className="flex flex-col border border-[#e1e5e5] bg-white p-7">
          
          {(city.slug==='jaipur'||city.slug==='galle'||city.slug==='tangalle'||city.slug==='paro'||city.slug==='rajasthan'||city.slug==='udaipur'||city.slug==='sentosa'||city.slug==='singapore'||city.slug==='phu-quoc'||city.slug==='hoi-an'||city.slug==='da-nang'||city.slug==='vinh-hy-bay'||city.slug==='hakone'||city.slug==='kyoto'||city.slug==='tokyo'||city.slug==='palawan'||city.slug==='sumba'||city.slug==='chiang-mai'||city.slug==='bangkok'||city.slug==='koh-yao-noi'||city.slug==='krabi'||city.slug==='san-miguel-de-allende'||city.slug==='mayakoba'||city.slug==='los-angeles'||city.slug==='miami'||city.slug==='new-york'||city.slug==='istanbul'||city.slug==='bodrum'||city.slug==='antalya'||city.slug==='dubai'||city.slug==='paris'||city.slug==='saint-tropez'||city.slug==='bali'||city.slug==='phuket'||city.slug==='koh-samui'||city.slug==='maldives'||city.slug==='los-cabos'||city.slug==='saint-barthelemy'||city.slug==='porto-cervo'||city.slug==='mustique'||city.slug==='courchevel-1850'||isAlpineCity(city.slug)||city.slug==='monaco'||city.slug==='saint-jean-cap-ferrat'||city.slug==='cap-dantibes'||city.slug==='lake-como'||city.slug==='capri'||city.slug==='positano'||city.slug==='ravello'||city.slug==='mykonos'||city.slug==='antiparos'||city.slug==='ibiza'||city.slug==='formentera'||city.slug==='deia'||city.slug==='port-andratx'||city.slug==='comporta'||city.slug==='melides'||city.slug==='tivat'||city.slug==='the-hamptons'||city.slug==='palm-beach'||city.slug==='nantucket'||city.slug==='harbour-island'||city.slug==='turks-and-caicos'||city.slug==='canouan'||city.slug==='necker-island'||city.slug==='north-island-seychelles'||city.slug==='pamalican-island'||city.slug==='laucala-island'||city.slug==='jumby-bay'||city.slug==='okavango-delta'||city.slug==='punta-mita'||city.slug==='costa-careyes') && <DestinationAreaPhoto city={city.slug} index={i} locale={locale}/>}
          <h3 className="mt-5 font-sans font-normal text-2xl">{fr?area.name:area.enName}</h3>
          <EditorialProse text={fr?area.fr:area.en} className="mt-5 text-sm text-[#4c606b]" maxChars={235} />
          <EditorialProse text={fr?area.frWatch:area.enWatch} className="mt-auto border-t border-[#e1e5e5] pt-5 text-sm text-[#53616b]" maxChars={240} />
        </article>)}
      </div>
      <div className="mt-12 grid gap-8 border-t border-[#e1e5e5] pt-8 lg:grid-cols-2 lg:gap-14">
        <EditorialProse text={hotelPage?(fr?city.hotelIntroFr:city.hotelIntroEn):(fr?city.introFr:city.introEn)}
          className="text-base text-[#475862]" />
        <EditorialProse text={fr?city.editorialFr:city.editorialEn}
          className="text-base text-[#50616b]" />
      </div>
    </section>
    {city.slug==='san-miguel-de-allende' && <section id="panoramas-san-miguel-de-allende" className="scroll-mt-24 bg-[#f5f5f3] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#193344]">
          {fr?'San Miguel · la pierre et les hauts plateaux':'San Miguel · stone and highland horizons'}
        </p>
        <h2 className="mt-4 max-w-4xl font-sans font-normal text-3xl leading-tight sm:text-5xl">
          {fr?'Au-delà des façades, le paysage se dévoile.':'Beyond the facades, another landscape unfolds.'}
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[#4e626b]">
          {fr?'Les reliefs du Charco et les détails de pierre de la ville composent deux promenades différentes, à prévoir au rythme de la lumière.':'The contours of El Charco and the town’s stone details offer two different walks, each best explored at the pace of the changing light.'}
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {([
            {key:'scene-8',frTitle:'El Charco · les reliefs de la cañada',enTitle:'El Charco · the canyon landscape'},
            {key:'scene-9',frTitle:'La pierre rose · détails d’architecture',enTitle:'Pink stone · architectural details'}
          ] as const).map(view=>{
            const photo=city.photos[view.key];
            return photo && confirmedSanMiguelAssets.has(photo.src) &&
              <article key={view.key} className="bg-white p-4 shadow-sm sm:p-5">
                <CityPhoto photo={photo} locale={locale}/>
              </article>;
          })}
        </div>
      </div>
    </section>}
    {city.slug==='galle' && approvedPhotos.length>0 && <section id="panoramas-galle" className="scroll-mt-24 bg-[#e6eeeb] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#806944]">{fr?'Galle · patrimoine et océan':'Galle · heritage and ocean'}</p>
        <h2 className="mt-4 max-w-4xl font-sans font-normal text-3xl leading-tight sm:text-5xl">{fr?'Neuf perspectives authentiques sur Galle et sa côte.':'Nine real perspectives on Galle Fort and the coast.'}</h2>
        <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {approvedPhotos.slice(0,9).map((photo,index)=><CityPhoto key={photo.src} photo={photo} locale={locale} priority={index===0}/>)}
        </div>
        
      </div>
    </section>}
    {city.slug==='tangalle' && approvedPhotos.length>0 && <section id="panoramas-tangalle" className="scroll-mt-24 bg-[#e6eeeb] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#806944]">{fr?'Tangalle · plages et lagunes':'Tangalle · beaches and lagoons'}</p>
        <h2 className="mt-4 max-w-4xl font-sans font-normal text-3xl leading-tight sm:text-5xl">{fr?'Neuf regards authentiques sur la côte de Tangalle.':'Nine authentic perspectives on the Tangalle coast.'}</h2>
        <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {approvedPhotos.slice(0,9).map((photo,index)=><CityPhoto key={photo.src} photo={photo} locale={locale} priority={index===0}/>)}
        </div>
      </div>
    </section>}
    {city.slug==='paro' && approvedPhotos.length>0 && <section id="panoramas-paro" className="scroll-mt-24 bg-[#e6eeeb] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#806944]">{fr?'Paro · vallée et monastères':'Paro · valleys and monasteries'}</p>
        <h2 className="mt-4 max-w-4xl font-sans font-normal text-3xl leading-tight sm:text-5xl">{fr?'Neuf perspectives authentiques sur la vallée de Paro.':'Nine authentic perspectives on Bhutan’s Paro Valley.'}</h2>
        <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {approvedPhotos.slice(0,9).map((photo,index)=><CityPhoto key={photo.src} photo={photo} locale={locale} priority={index===0}/>)}
        </div>
      </div>
    </section>}
    {city.slug==='rajasthan' && <section id="panoramas-rajasthan" className="scroll-mt-24 bg-[#f5f5f3] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#806944]">{fr?'Rajasthan · du désert aux palais':'Rajasthan · from desert to palaces'}</p>
        <h2 className="mt-4 max-w-4xl font-sans font-normal text-3xl leading-tight sm:text-5xl">{fr?'Jodhpur, Jaisalmer, Ranthambore : neuf regards sur un Rajasthan pluriel.':'Jodhpur, Jaisalmer, Ranthambore: nine authentic Rajasthan perspectives.'}</h2>
        
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {([
            {key:'scene-1',frTitle:'Mehrangarh et ville bleue',enTitle:'Mehrangarh and Blue City'},
            {key:'scene-2',frTitle:'Fort doré de Jaisalmer',enTitle:'Jaisalmer Golden Fort'},
            {key:'scene-3',frTitle:'Dunes de Sam',enTitle:'Sam Sand Dunes'},
            {key:'scene-4',frTitle:'Padam Talao',enTitle:'Padam Talao'},
            {key:'scene-5',frTitle:'Kumbhalgarh',enTitle:'Kumbhalgarh'},
            {key:'scene-6',frTitle:'Udaipur et Pichola',enTitle:'Udaipur and Pichola'},
            {key:'scene-7',frTitle:'Lac de Pushkar',enTitle:'Pushkar Lake'},
            {key:'scene-8',frTitle:'Chand Baori',enTitle:'Chand Baori'},
            {key:'scene-9',frTitle:'Jodhpur, ville bleue',enTitle:'Jodhpur, Blue City'}
          ] as const).map(entry=>{
            const photo=city.photos[entry.key];
            return photo && confirmedRajasthanPreviewAssets.has(photo.src) && <article key={entry.key} className="bg-white p-4 shadow-sm sm:p-5">
              <CityPhoto photo={photo} locale={locale}/>
            </article>;
          })}
        </div>
      </div>
    </section>}
    {city.slug==='udaipur' && <section id="panoramas-udaipur" className="scroll-mt-24 bg-[#f5f5f3] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#806944]">{fr?'Rajasthan · Udaipur et ses lacs':'Rajasthan · Udaipur and the lakes'}</p>
        <h2 className="mt-4 max-w-4xl font-sans font-normal text-3xl leading-tight sm:text-5xl">{fr?'Palais de marbre, ghats de Pichola et reliefs des Aravalli.':'Marble palaces, Pichola ghats and the Aravalli hills.'}</h2>
        
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {([
            {key:'scene-1',frTitle:'Traversée de Pichola',enTitle:'Crossing Lake Pichola'},
            {key:'scene-2',frTitle:'City Palace',enTitle:'City Palace'},
            {key:'scene-3',frTitle:'Rive de Pichola',enTitle:'Lake Pichola shoreline'},
            {key:'scene-4',frTitle:'Vieille ville sur le lac',enTitle:'Old town on the lake'},
            {key:'scene-5',frTitle:'Architecture de Mewar',enTitle:'Mewar heritage'},
            {key:'scene-6',frTitle:'Collines des Aravalli',enTitle:'Aravalli hills'},
            {key:'scene-7',frTitle:'Balcons du palais',enTitle:'Palace balconies'},
            {key:'scene-8',frTitle:'Cours et façades',enTitle:'Courtyards and facades'},
            {key:'scene-9',frTitle:'Panorama d’Udaipur',enTitle:'Udaipur panorama'}
          ] as const).map(entry=>{
            const photo=city.photos[entry.key];
            return photo && confirmedUdaipurPreviewAssets.has(photo.src) && <article key={entry.key} className="bg-white p-4 shadow-sm sm:p-5">
              <CityPhoto photo={photo} locale={locale}/>
            </article>;
          })}
        </div>
      </div>
    </section>}
    {city.slug==='sentosa' && <section id="panoramas-sentosa" className="scroll-mt-24 bg-[#e5ece9] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#806944]">{fr?'Sentosa · trois plages et deux histoires':'Sentosa · beaches, woods and heritage'}</p>
        <h2 className="mt-4 max-w-4xl font-sans font-normal text-3xl leading-tight sm:text-5xl">{fr?'Palawan, Siloso, Fort Siloso et la marina.':'Palawan, Siloso, Fort Siloso and the marina.'}</h2>
        
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {([
            {key:'scene-1',frTitle:'Palawan Beach',enTitle:'Palawan Beach'},
            {key:'scene-2',frTitle:'Siloso Beach',enTitle:'Siloso Beach'},
            {key:'scene-4',frTitle:'Sentosa Cove',enTitle:'Sentosa Cove'},
            {key:'scene-5',frTitle:'Fort Siloso',enTitle:'Fort Siloso'},
            {key:'scene-6',frTitle:'Les eaux de Palawan',enTitle:'Palawan shoreline'},
            {key:'scene-7',frTitle:'Siloso et ses palmiers',enTitle:'Siloso shoreline'},
            {key:'scene-8',frTitle:'Vues sur le détroit',enTitle:'Coastal viewpoint'},
            {key:'scene-9',frTitle:'Palawan en lumière du jour',enTitle:'Palawan in daylight'},
            {key:'scene-3',frTitle:'Le littoral de Tanjong',enTitle:'Tanjong coastal area'}
          ] as const).map(entry=>{
            const photo=city.photos[entry.key];
            return photo && confirmedSentosaPreviewAssets.has(photo.src) && <article key={entry.key} className="bg-white p-4 shadow-sm sm:p-5">
              <CityPhoto photo={photo} locale={locale}/>
            </article>;
          })}
        </div>
      </div>
    </section>}
    {city.slug==='singapore' && <section id="panoramas-singapore" className="scroll-mt-24 bg-[#e6ebe8] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#806944]">{fr?'Singapour · skyline, jardins et héritage':'Singapore · skyline, gardens and heritage'}</p>
        <h2 className="mt-4 max-w-4xl font-sans font-normal text-3xl leading-tight sm:text-5xl">{fr?'De Marina Bay aux jardins tropicaux et aux quartiers historiques.':'From Marina Bay to tropical gardens and heritage quarters.'}</h2>
        
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {([
            {key:'scene-1',frTitle:'Marina Bay en plein jour',enTitle:'Marina Bay in daylight'},
            {key:'scene-4',frTitle:'La baie et le quartier civique',enTitle:'The bay and Civic District'},
            {key:'scene-9',frTitle:'Les Supertrees des jardins',enTitle:'Gardens by the Bay Supertrees'},
            {key:'scene-3',frTitle:'Cloud Forest',enTitle:'Cloud Forest'},
            {key:'scene-7',frTitle:'Les maisons de Chinatown',enTitle:'Chinatown shophouses'},
            {key:'scene-6',frTitle:'Kampong Gelam',enTitle:'Kampong Gelam'},
            {key:'scene-5',frTitle:'Le jardin botanique',enTitle:'Singapore Botanic Gardens'},
            {key:'scene-8',frTitle:'La promenade tropicale',enTitle:'Tropical gardens'},
            {key:'scene-2',frTitle:'La baie illuminée',enTitle:'Marina Bay after dark'}
          ] as const).map(entry=>{
            const photo=city.photos[entry.key];
            return photo && confirmedSingaporePreviewAssets.has(photo.src) && <article key={entry.key} className="bg-white p-4 shadow-sm sm:p-5">
              <CityPhoto photo={photo} locale={locale}/>
            </article>;
          })}
        </div>
      </div>
    </section>}
    {city.slug==='phu-quoc' && <section id="panoramas-phu-quoc" className="scroll-mt-24 bg-[#e6eee9] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#806944]">{fr?'Phu Quoc · paysages, plages et îlots':'Phu Quoc · beaches, coast and islands'}</p>
        <h2 className="mt-4 max-w-4xl font-sans font-normal text-3xl leading-tight sm:text-5xl">{fr?'L’île authentique, de Sao Beach aux îlots du sud.':'The island itself, from Sao Beach to the southern islets.'}</h2>
        
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {([
            {key:'scene-3',frTitle:'Une plage de Phu Quoc',enTitle:'Phu Quoc beach'},
            {key:'scene-5',frTitle:'La plage Sao',enTitle:'Sao Beach'},
            {key:'scene-6',frTitle:'Les îles du sud',enTitle:'Southern islands'},
            {key:'scene-7',frTitle:'La côte rocheuse',enTitle:'Rocky shoreline'},
            {key:'scene-8',frTitle:'Le téléphérique de Hon Thom',enTitle:'Hon Thom cable car'},
            {key:'scene-9',frTitle:"L'archipel d'An Thoi",enTitle:'An Thoi archipelago'},
            {key:'scene-1',frTitle:'Le soleil couchant',enTitle:'Sunset'},
            {key:'scene-2',frTitle:'La lumière du soir',enTitle:'Evening light'},
            {key:'scene-4',frTitle:'Le sable et la mer',enTitle:'Sand and sea'}
          ] as const).map(entry=>{
            const photo=city.photos[entry.key];
            return photo && confirmedPhuQuocPreviewAssets.has(photo.src) && <article key={entry.key} className="bg-white p-4 shadow-sm sm:p-5">
              <CityPhoto photo={photo} locale={locale}/>
            </article>;
          })}
        </div>
      </div>
    </section>}
    {city.slug==='hoi-an' && <section id="panoramas-hoi-an" className="scroll-mt-24 bg-[#e8e8de] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#886e47]">{fr?'Hội An · ville patrimoniale et rivière':'Hoi An · heritage town and river'}</p>
        <h2 className="mt-4 max-w-4xl font-sans font-normal text-3xl leading-tight sm:text-5xl">{fr?'La rivière Thu Bồn, les façades anciennes et les ateliers.':'The Thu Bon River, centuries-old streets and craft heritage.'}</h2>
        
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {([
            {key:'scene-3',frTitle:'Le fleuve Thu Bồn',enTitle:'Thu Bon River'},
            {key:'scene-7',frTitle:'La vieille ville jaune ocre',enTitle:'Ochre historic streets'},
            {key:'scene-9',frTitle:'La végétation de Cẩm Thanh',enTitle:'Cam Thanh waterways'}
          ] as const).map(entry=>{
            const photo=city.photos[entry.key];
            return photo && confirmedHoiAnPreviewAssets.has(photo.src) && <article key={entry.key} className="bg-white p-4 shadow-sm sm:p-5">
              <CityPhoto photo={photo} locale={locale}/>
            </article>;
          })}
        </div>
      </div>
    </section>}
    {city.slug==='da-nang' && <section id="panoramas-da-nang" className="scroll-mt-24 bg-[#dcece8] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#82694a]">{fr?'Da Nang · plages, rivière et montagne':'Da Nang · ocean, river and mountains'}</p>
        <h2 className="mt-4 max-w-4xl font-sans font-normal text-3xl leading-tight sm:text-5xl">{fr?'De My Khe au pont du Dragon et aux Montagnes de Marbre.':'From My Khe to Dragon Bridge and the Marble Mountains.'}</h2>
        
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {([
            {key:'scene-1',frTitle:'My Khe · la plage',enTitle:'My Khe · the shoreline'},
            {key:'scene-2',frTitle:'Pont du Dragon · la rivière',enTitle:'Dragon Bridge · the river'},
            {key:'scene-3',frTitle:'Ngũ Hành Sơn · les montagnes',enTitle:'Marble Mountains · the ridges'}
          ] as const).map(entry=>{
            const pic=city.photos[entry.key];
            return pic && confirmedDaNangPreviewAssets.has(pic.src) && <article key={entry.key} className="bg-white p-4 shadow-sm sm:p-5">
              <CityPhoto photo={pic} locale={locale}/>
            </article>;
          })}
        </div>
      </div>
    </section>}
    {city.slug==='vinh-hy-bay' && <section id="panoramas-vinh-hy-bay" className="scroll-mt-24 bg-[#dcece8] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#82694a]">{fr?'Vietnam · côte du parc de Núi Chúa':"Vietnam · Nui Chua's wild coastline"}</p>
        <h2 className="mt-4 max-w-4xl font-sans font-normal text-3xl leading-tight sm:text-5xl">{fr?'Vĩnh Hy : la baie, les reliefs et Hang Rái.':'Vinh Hy: the bay, wild headlands and Hang Rai.'}</h2>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[#4e626b]">{fr?'Des lieux photographiés séparément et attribués. Ils ne constituent pas des vues garanties depuis un hôtel : Amanoi, Bình Tiên et le village sont trois façons distinctes de vivre cette côte.':'Individually sourced and credited landscape photographs, never promises of a room view. Amanoi, Binh Tien and the fishing village offer genuinely different stays.'}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {([
            {key:'scene-1',frTitle:'Vĩnh Hy · la baie',enTitle:'Vinh Hy · the bay'},
            {key:'scene-2',frTitle:'Núi Chúa · la côte',enTitle:'Nui Chua · wild coastline'},
            {key:'scene-5',frTitle:'Hang Rái · les rochers',enTitle:'Hang Rai · rocky shore'}
          ] as const).map(v=>{
            const pic=city.photos[v.key];
            return pic && confirmedVinhHyBayPreviewAssets.has(pic.src) && <article key={v.key} className="bg-white p-4 shadow-sm sm:p-5">
              <CityPhoto photo={pic} locale={locale}/>
            </article>;
          })}
        </div>
      </div>
    </section>}
    {city.slug==='hakone' && <section id="panoramas-hakone" className="scroll-mt-24 bg-[#f5f5f3] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#193344]">{fr?'Hakone · montagnes, vapeur et lacs':'Hakone · mountain, steam and lakes'}</p>
        <h2 className="mt-4 max-w-4xl font-sans font-normal text-3xl leading-tight sm:text-5xl">{fr?'Le lac Ashi, Owakudani et les jardins de Gora.':'Lake Ashi, Owakudani and Gora gardens.'}</h2>
        
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {([
            {key:'scene-1',frTitle:'Lac Ashi · mont Fuji',enTitle:'Lake Ashi · Mount Fuji'},
            {key:'scene-2',frTitle:'Owakudani · fumerolles',enTitle:'Owakudani · volcanic valley'},
            {key:'scene-3',frTitle:'Gora · jardin de montagne',enTitle:'Gora · mountain park'}
          ] as const).map(v=>{
            const pic=city.photos[v.key];
            return pic && confirmedHakonePreviewAssets.has(pic.src) && <article key={v.key} className="bg-white p-4 shadow-sm sm:p-5">
              <CityPhoto photo={pic} locale={locale}/>
            </article>;
          })}
        </div>
      </div>
    </section>}
    {city.slug==='kyoto' && <section id="panoramas-kyoto" className="scroll-mt-24 bg-[#f5f5f3] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#193344]">{fr?'Kyoto · trois paysages, trois rythmes':'Kyoto · three landscapes, three different rhythms'}</p>
        <h2 className="mt-4 max-w-4xl font-sans font-normal text-3xl leading-tight sm:text-5xl">{fr?'Les rues de Higashiyama, la rivière et Arashiyama.':'Higashiyama lanes, the river and Arashiyama.'}</h2>
        
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {([
            {key:'scene-1',frTitle:'Higashiyama · Yasaka',enTitle:'Higashiyama · Yasaka'},
            {key:'scene-2',frTitle:'Kamogawa · les berges',enTitle:'Kamogawa · riverside'},
            {key:'scene-3',frTitle:'Arashiyama · bambous',enTitle:'Arashiyama · bamboo grove'}
          ] as const).map(v=>{
            const pic=city.photos[v.key];
            return pic && confirmedKyotoPreviewAssets.has(pic.src) && <article key={v.key} className="bg-white p-4 shadow-sm sm:p-5">
              <CityPhoto photo={pic} locale={locale}/>
            </article>;
          })}
        </div>
      </div>
    </section>}
    {city.slug==='tokyo' && <section id="panoramas-tokyo" className="scroll-mt-24 bg-[#f5f5f3] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#193344]">{fr?'Tokyo · les visages d’une métropole':'Tokyo · three faces of the capital'}</p>
        <h2 className="mt-4 max-w-4xl font-sans font-normal text-3xl leading-tight sm:text-5xl">{fr?'Entre les jardins impériaux et les lumières de Shinjuku.':'From Imperial Palace gardens to Shinjuku lights.'}</h2>
        
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {([
            {key:'scene-1',frTitle:'Otemachi · jardins impériaux',enTitle:'Otemachi · Imperial Palace'},
            {key:'scene-3',frTitle:'Ginza · les lumières du soir',enTitle:'Ginza · evening lights'},
            {key:'scene-4',frTitle:'Shinjuku · la ville en hauteur',enTitle:'Shinjuku · skyline'}
          ] as const).map(v=>{
            const pic=city.photos[v.key];
            return pic && confirmedTokyoPreviewAssets.has(pic.src) && <article key={v.key} className="bg-white p-4 shadow-sm sm:p-5">
              <CityPhoto photo={pic} locale={locale}/>
            </article>;
          })}
        </div>
      </div>
    </section>}
    {city.slug==='palawan' && <section id="panoramas-palawan" className="scroll-mt-24 bg-[#f5f5f3] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#193344]">{fr?'Palawan · trois horizons, trois géographies':'Palawan · three landscapes, three different coasts'}</p>
        <h2 className="mt-4 max-w-4xl font-sans font-normal text-3xl leading-tight sm:text-5xl">{fr?'La baie de Bacuit ne ressemble pas à Coron.':'Bacuit Bay is not the same as Coron.'}</h2>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[#4e626b]">{fr?'Des falaises de Bacuit aux lagons de Coron puis aux rivages plus paisibles de Port Barton : des territoires distincts, jamais la vue garantie depuis chaque chambre.':'From Bacuit karsts to Coron lagoons and the quieter Port Barton shoreline, these are different places—not a promise of the view from any hotel room.'}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {([
            {key:'scene-2',frTitle:'El Nido · falaises de Bacuit',enTitle:'El Nido · Bacuit karsts'},
            {key:'scene-4',frTitle:'Coron · Twin Lagoon',enTitle:'Coron · Twin Lagoon'},
            {key:'scene-5',frTitle:'Port Barton · rivage au couchant',enTitle:'Port Barton · sunset shoreline'}
          ] as const).map(view=>{
            const photo=city.photos[view.key];
            return photo && confirmedPalawanPreviewAssets.has(photo.src) &&
              <article key={view.key} className="bg-white p-4 shadow-sm sm:p-5">
                <CityPhoto photo={photo} locale={locale}/>
              </article>;
          })}
        </div>
      </div>
    </section>}
    {city.slug==='sumba' && <section id="panoramas-sumba" className="scroll-mt-24 bg-[#f5f5f3] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#193344]">{fr?'Sumba · des paysages qui se méritent':'Sumba · landscapes worth travelling for'}</p>
        <h2 className="mt-4 max-w-4xl font-sans font-normal text-3xl leading-tight sm:text-5xl">{fr?'Entre le lagon turquoise et les collines de l’est.':'Between the turquoise lagoon and the eastern hills.'}</h2>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[#4e626b]">{fr?'Les maisons de Ratenggaro et les collines de Wairinding racontent deux visages d’une île immense.':'Ratenggaro’s extraordinary roofs and Wairinding’s hills reveal two distinct sides of a vast island.'}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {([{key:'scene-2',frTitle:'Ratenggaro · architecture vivante',enTitle:'Ratenggaro · living heritage'},
             {key:'scene-3',frTitle:'Wairinding · collines de Sumba',enTitle:'Wairinding · Sumba’s rolling hills'}] as const).map(v=>{
              const pic=city.photos[v.key];
              return pic && confirmedSumbaAssets.has(pic.src) && <article key={v.key} className="bg-white p-4 shadow-sm sm:p-5">
                <CityPhoto photo={pic} locale={locale}/>
              </article>;
          })}
        </div>
      </div>
    </section>}
    {city.slug==='chiang-mai' && <section id="panoramas-chiang-mai" className="scroll-mt-24 bg-[#f5f5f3] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#193344]">{fr?'Chiang Mai · temples et paysages du Nord':'Chiang Mai · northern landscapes and temples'}</p>
        <h2 className="mt-4 max-w-4xl font-sans font-normal text-3xl leading-tight sm:text-5xl">{fr?'De l’or des temples au vert des rizières.':'From golden temples to rice-field greens.'}</h2>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[#4e626b]">{fr?'Un temple sur Doi Suthep, les rizières de la région et une autre lecture du Nord thaïlandais. Ce sont des lieux réels, pas des vues garanties depuis chaque suite.':'Doi Suthep and rice fields near Chiang Mai reveal Northern Thailand beyond hotel walls. These scenes are real, not a promise of the view from a booked suite.'}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {([{key:'scene-3',frTitle:'Wat Phra Singh · l’héritage Lanna',enTitle:'Wat Phra Singh · Lanna heritage'},
             {key:'scene-7',frTitle:'Rizières · le rythme de la région',enTitle:'Rice fields · the region’s slower rhythm'}] as const).map(v=>{
              const pic=city.photos[v.key];
              return pic && confirmedChiangMaiAssets.has(pic.src) && <article key={v.key} className="bg-white p-4 shadow-sm sm:p-5">
                <CityPhoto photo={pic} locale={locale}/>
              </article>;
          })}
        </div>
      </div>
    </section>}
    {city.slug==='bangkok' && <section id="panoramas-bangkok" className="scroll-mt-24 bg-[#f5f5f3] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#193344]">{fr?'Bangkok · patrimoine et modernité':'Bangkok · heritage and city life'}</p>
        <h2 className="mt-4 max-w-4xl font-sans font-normal text-3xl leading-tight sm:text-5xl">{fr?'Le temple du fleuve et la métropole.':'River temples and a modern metropolis.'}</h2>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[#4e626b]">{fr?'Wat Arun raconte la ville fluviale ; les tours contemporaines en offrent une autre lecture. Ces photos ne garantissent aucune vue depuis les chambres.':'Wat Arun reveals the river city, while contemporary towers show another face. These images do not guarantee hotel room views.'}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {([{key:'scene-2',frTitle:'Wat Arun · le Chao Phraya',enTitle:'Wat Arun · the Chao Phraya'},
             {key:'scene-9',frTitle:'Bangkok · tours contemporaines',enTitle:'Bangkok · skyline'}] as const).map(v=>{
              const photo=city.photos[v.key];
              return photo && confirmedBangkokAssets.has(photo.src) && <article key={v.key} className="bg-white p-4 shadow-sm sm:p-5">
                <CityPhoto photo={photo} locale={locale}/>
              </article>;
          })}
        </div>
      </div>
    </section>}
    {city.slug==='koh-yao-noi' && <section id="panoramas-koh-yao-noi" className="scroll-mt-24 bg-[#f5f5f3] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#193344]">{fr?'Koh Yao Noi · îlots et lumière':'Koh Yao Noi · limestone islands and morning light'}</p>
        <h2 className="mt-4 max-w-4xl font-sans font-normal text-3xl leading-tight sm:text-5xl">{fr?'La baie se dévoile avec la marée.':'The bay revealed as tides change.'}</h2>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[#4e626b]">{fr?'Des îlots calcaires sortent de la brume au fil des marées.':'Limestone islets emerge from the haze as the tides change.'}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {([{key:'scene-8',frTitle:'Le matin sur la baie',enTitle:'Dawn on the bay'},{key:'scene-9',frTitle:'Les îles calcaires',enTitle:'Limestone islands'}] as const).map(v=>{
            const p=city.photos[v.key];
            return p && confirmedKohYaoNoiAssets.has(p.src) && <article key={v.key} className="bg-white p-4 shadow-sm sm:p-5">
              <CityPhoto photo={p} locale={locale}/>
            </article>;
          })}
        </div>
      </div>
    </section>}
    {city.slug==='krabi' && <section id="panoramas-krabi" className="scroll-mt-24 bg-[#f5f5f3] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#193344]">{fr?'Krabi · le relief et les îles':'Krabi · limestone and the islands'}</p>
        <h2 className="mt-4 max-w-4xl font-sans font-normal text-3xl leading-tight sm:text-5xl">{fr?'L’Andaman, entre falaises et îlots de pierre.':'The Andaman Sea, between cliffs and limestone islets.'}</h2>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[#4e626b]">{fr?'Deux horizons distincts : le sable blanc de Phra Nang et les bateaux devant l’îlot rocheux de Koh Poda. Ces vues ne sont pas les perspectives promises depuis chaque chambre d’hôtel.':'Two separate horizons: Phra Nang’s white sand and long-tail boats in front of Koh Poda’s limestone islet. Neither view can be promised from every hotel room.'}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {([
            {key:'scene-8',frTitle:'Phra Nang · la falaise et la plage',enTitle:'Phra Nang · cliffs and sandy beach'},
            {key:'scene-9',frTitle:'Koh Poda · les îlots et les bateaux',enTitle:'Koh Poda · islands and boats'}
          ] as const).map(view=>{
            const photo=city.photos[view.key];
            return photo && confirmedKrabiAssets.has(photo.src) &&
              <article key={view.key} className="bg-white p-4 shadow-sm sm:p-5">
                <CityPhoto photo={photo} locale={locale}/>
              </article>;
          })}
        </div>
      </div>
    </section>}
    {city.slug==='mayakoba' && <section id="panoramas-mayakoba" className="scroll-mt-24 bg-[#f5f5f3] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#193344]">
          {fr?'Mayakoba · l’eau et la nature comme horizon':'Mayakoba · water, nature and open horizons'}
        </p>
        <h2 className="mt-4 max-w-4xl font-sans font-normal text-3xl leading-tight sm:text-5xl">
          {fr?'La lagune raconte une autre idée des Caraïbes.':'The lagoon tells another Caribbean story.'}
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[#4e626b]">
          {fr?'Une destination où la mangrove, les villas et la mer se répondent, et où la promenade compte autant que l’arrivée.':'Mangrove, villas and open sea form a continuous landscape, where the journey through the estate becomes part of the stay.'}
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {([
            {key:'scene-8',frTitle:'Mayakoba · architecture sur l’eau',enTitle:'Mayakoba · living beside the water'},
            {key:'scene-9',frTitle:'Jardins · lumière tropicale',enTitle:'Tropical gardens · another kind of light'}
          ] as const).map(view=>{
            const photo=city.photos[view.key];
            return photo && confirmedMayakobaPreviewAssets.has(photo.src) &&
              <article key={view.key} className="bg-white p-4 shadow-sm sm:p-5">
                <CityPhoto photo={photo} locale={locale}/>
              </article>;
          })}
        </div>
      </div>
    </section>}
    {city.slug==='los-angeles' && <section id="panoramas-los-angeles" className="scroll-mt-24 bg-[#f5f5f3] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#193344]">
          {fr?'Los Angeles · paysages et grands horizons':'Los Angeles · landscapes and wider horizons'}
        </p>
        <h2 className="mt-4 max-w-4xl font-sans font-normal text-3xl leading-tight sm:text-5xl">
          {fr?'Du Pacifique aux collines, la Californie en grand.':'From the Pacific to the hills, a city of open horizons.'}
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[#4e626b]">
          {fr?'Au-delà des tapis rouges : la route de Malibu, les chemins au-dessus de la ville et des quartiers où l’on prend le temps de regarder.':'Beyond red carpets: Malibu’s coast, hillside trails and slower neighbourhoods invite you to see Los Angeles differently.'}
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {([
            {key:'scene-8',frTitle:'Malibu · la route et le Pacifique',enTitle:'Malibu · the open Pacific coast'},
            {key:'scene-9',frTitle:'Venice · une Californie inattendue',enTitle:'Venice · another side of California'}
          ] as const).map(view=>{
            const photo=city.photos[view.key];
            return photo && confirmedLosAngelesPreviewAssets.has(photo.src) &&
              <article key={view.key} className="bg-white p-4 shadow-sm sm:p-5">
                <CityPhoto photo={photo} locale={locale}/>
              </article>;
          })}
        </div>
      </div>
    </section>}
    {city.slug==='miami' && <section id="panoramas-miami" className="scroll-mt-24 bg-[#f5f5f3] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#73674e]">
          {fr?'Miami · lumière et horizons':'Miami · light and horizons'}
        </p>
        <h2 className="mt-4 max-w-4xl font-sans font-normal text-3xl leading-tight sm:text-5xl">
          {fr?'De la baie à l’océan : deux horizons, mille sensations.':'From the bay to the ocean: Miami in a different light.'}
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[#4e626b]">
          {fr?'Miami se découvre au-delà des piscines et des palaces : la géométrie du Design District, les jardins du littoral et le sable de South Pointe dessinent une ville à savourer lentement.':'Beyond pools and palaces, Design District architecture and South Pointe sands reveal an entirely different Miami.'}
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {([
            {key:'scene-8',frTitle:'Design District · architecture et créativité',enTitle:'Design District · architecture and creativity'},
            {key:'scene-9',frTitle:'South Pointe · les couleurs de l’Atlantique',enTitle:'South Pointe · Atlantic colours'}
          ] as const).map(view=>{
            const photo=city.photos[view.key];
            return photo && confirmedMiamiPreviewAssets.has(photo.src) &&
              <article key={view.key} className="bg-white p-4 shadow-sm sm:p-5">
                <CityPhoto photo={photo} locale={locale}/>
              </article>;
          })}
        </div>
      </div>
    </section>}
    {city.slug==='new-york' && <section id="panoramas-new-york" className="scroll-mt-24 bg-[#ede7dc] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#8d6a42]">
          {fr?'New York · paysages et grands espaces':'New York · landscapes and open horizons'}
        </p>
        <h2 className="mt-4 max-w-4xl font-sans font-normal text-3xl leading-tight sm:text-5xl">
          {fr?'Au-delà des palaces, la ville qui vous fera revenir.':'Beyond the hotels, the city you will want to return to.'}
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[#4d6069]">
          {fr
            ?'Avant les rendez-vous et les lumières de Broadway, il y a le silence des allées de Central Park. Puis le fleuve, les quais et le panorama des gratte-ciel : New York se découvre aussi en prenant le temps de regarder.'
            :'Before meetings and Broadway lights, there are the quiet paths of Central Park. Then the riverfront, piers and the Manhattan skyline: discovering New York also means finding time to take it all in.'}
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {([
            {key:'scene-6',titleFr:'Central Park · une parenthèse de nature',titleEn:'Central Park · a natural pause',
              detailFr:'Un paysage d’eau, d’arbres et de gratte-ciel, pour imaginer un matin différent au cœur de Manhattan.',
              detailEn:'Water, trees and distant towers suggest a gentler Manhattan morning.'},
            {key:'scene-8',titleFr:'Lower Manhattan · le spectacle des quais',titleEn:'Lower Manhattan · the waterfront skyline',
              detailFr:'Au bord de l’Hudson, New York se révèle par ses perspectives monumentales et l’énergie de ses rives.',
              detailEn:'Along the Hudson, the city reveals its monumental skyline and waterfront energy.'}
          ] as const).map(view=>{
            const landscape=city.photos[view.key];
            return landscape && confirmedNewYorkPreviewAssets.has(landscape.src) && <article key={view.key} className="bg-white p-4 shadow-sm sm:p-5">
              <CityPhoto photo={landscape} locale={locale}/>
              <p className="mt-3 text-sm leading-7 text-[#51646c]">{fr?view.detailFr:view.detailEn}</p>
            </article>;
          })}
        </div>
      </div>
    </section>}
    {city.slug==='koh-samui' && <section id="explorer-koh-samui" className="bg-[#f1ece2] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-xs uppercase tracking-[.2em] text-[#9a744a]">{fr?'Plus loin que votre villa':'Beyond your villa'}</p>
        <h2 className="mt-4 max-w-4xl font-sans font-normal text-3xl sm:text-5xl">{fr?'Quatre autres façons de découvrir Koh Samui.':'Four more sides of Koh Samui to explore.'}</h2>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-[#53646c]">{fr
          ?'Derrière les piscines privées, Koh Samui révèle ses temples, son archipel protégé et des rivages aux ambiances très différentes. Choisissez vos excursions selon la saison, la météo et votre envie de bouger.'
          :'Beyond private pools, Samui reveals temples, protected island scenery and coastlines with very different moods. Choose excursions to suit the season, sea conditions and your pace.'}</p>
        <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {([
            {key:'ang-thong',fr:'L’archipel d’Ang Thong',en:'Ang Thong islands',frDetail:'Sortie en mer à préparer selon la météo et les conditions du parc marin.',enDetail:'Plan a boat excursion around the weather and marine-park conditions.'},
            {key:'big-buddha',fr:'Le temple du Grand Bouddha',en:'Big Buddha temple',frDetail:'Une parenthèse culturelle à découvrir avec une tenue respectueuse du lieu.',enDetail:'A cultural stop best visited with respectful temple attire.'},
            {key:'chaweng-coast',fr:'L’énergie de Chaweng',en:'Lively Chaweng',frDetail:'Une plage plus animée, pour changer du calme des hôtels isolés.',enDetail:'A busier stretch of beach to contrast with secluded resorts.'},
            {key:'silver-beach',fr:'La petite Silver Beach',en:'Small-scale Silver Beach',frDetail:'Une crique à découvrir près de Lamai, selon l’affluence et l’état de la mer.',enDetail:'A pretty small cove near Lamai, best checked for crowds and sea conditions.'}
          ] as const).map(item=><article key={item.key} className="bg-white p-4">
            <CityPhoto photo={city.photos[item.key]} locale={locale}/>
            <p className="mt-3 text-sm leading-6 text-[#546772]">{fr?item.frDetail:item.enDetail}</p>
          </article>)}
        </div>
      </div>
    </section>}
    {city.slug==='maldives' && <section id="explorer-maldives" className="bg-[#f1ece2] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-xs uppercase tracking-[.2em] text-[#9a744a]">{fr?'La vie entre deux horizons':'Beyond the horizon'}</p>
        <h2 className="mt-4 font-sans font-normal text-3xl sm:text-5xl">{fr?'Depuis le ciel, jusque sous la surface.':'From the sky to life beneath the water.'}</h2>
        <div className="mt-9 grid gap-6 sm:grid-cols-2">
          {([{key:'seaplane',frTitle:'L’arrivée en hydravion',enTitle:'The seaplane arrival',frDetail:'Préparer les correspondances et les horaires de vols de jour.',enDetail:'Plan connections and daylight operating windows.'},{key:'manta-reef',frTitle:'Les raies manta',enTitle:'Manta encounters',frDetail:'Une rencontre avec la nature qui dépend de la saison et ne peut être garantie.',enDetail:'Seasonal wildlife sightings can never be guaranteed.'}] as const).map(item=>confirmedMaldivesAssets.has(city.photos[item.key].src) && <article key={item.key} className="bg-white p-5">
            <CityPhoto photo={city.photos[item.key]} locale={locale}/>
            <p className="mt-3 text-sm leading-7 text-[#53646c]">{fr?item.frDetail:item.enDetail}</p>
          </article>)}
        </div>
      </div>
    </section>}
    {city.slug==='los-cabos' && <section id="explorer-los-cabos" className="bg-[#f1ece2] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-xs uppercase tracking-[.2em] text-[#9a744a]">{fr?'Au-delà des resorts':'Beyond the resorts'}</p>
        <h2 className="mt-4 font-sans font-normal text-3xl sm:text-5xl">{fr?'Du désert aux deux mers.':'Desert, cliffs and two seas.'}</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {([{key:'el-arco',frTitle:'El Arco',enTitle:'Land’s End',frText:'Naviguer vers les rochers de Cabo San Lucas.',enText:'Private boat trips toward Cabo San Lucas rock arch.'},{key:'cabo-marina',frTitle:'Marina de Cabo',enTitle:'Cabo Marina',frText:'Yachts, restaurants et départs en mer.',enText:'Yachts, dining and the starting point for boat trips.'},{key:'whales',frTitle:'Les baleines',enTitle:'Whale season',frText:'Observation hivernale responsable, sans garantie.',enText:'Responsible winter wildlife trips, without guaranteed sightings.'},{key:'baja-coast',frTitle:'La côte de Baja',enTitle:'The Baja coast',frText:'Rochers et cactus au bord de l’océan.',enText:'Desert cliffs and golden light by the sea.'}] as const).map(item=><article key={item.key} className="bg-white p-4">
            {confirmedLosCabosAssets.has(city.photos[item.key].src) && <CityPhoto photo={city.photos[item.key]} locale={locale}/>}
            <h3 className="mt-4 font-sans font-normal text-xl">{fr?item.frTitle:item.enTitle}</h3>
            <p className="mt-3 text-sm leading-7 text-[#53646c]">{fr?item.frText:item.enText}</p>
          </article>)}
        </div>
      </div>
    </section>}
    {city.slug==='saint-barthelemy' && <section id="explorer-saint-barth" className="bg-[#f0e9df] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-xs uppercase tracking-[.2em] text-[#a37d54]">{fr?'L’île, au-delà des hôtels':'The island, beyond the hotels'}</p>
        <h2 className="mt-4 font-sans font-normal text-3xl sm:text-5xl">{fr?'Quatre autres moments à Saint-Barth.':'Four more sides of St Barth.'}</h2>
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {([{key:'colombier-bay',frTitle:'Colombier',enTitle:'Colombier Bay',frDetail:'Une crique sauvage à rejoindre en bateau ou à pied selon les parcours autorisés.',enDetail:'A secluded bay reached by boat or an authorised trail.'},{key:'gustavia-aerial',frTitle:'Gustavia',enTitle:'Gustavia harbour',frDetail:'Le port, les terrasses et les ruelles sous les toits rouges.',enDetail:'The harbour, sunset restaurants and red-roofed streets.'},{key:'saline-beach',frTitle:'Grande Saline',enTitle:'Grande Saline beach',frDetail:'Une plage spectaculaire, sans présumer des conditions de baignade.',enDetail:'A wild beach; always check sea conditions.'},{key:'saint-barth-sailing',frTitle:'Voile et criques',enTitle:'Sailing and coves',frDetail:'Une sortie privée adaptée à la houle et aux règles des zones protégées.',enDetail:'Private sailing adjusted to swell and protected-area rules.'}] as const).map(item=><article key={item.key} className="bg-white p-4">
            {confirmedSaintBarthelemyAssets.has(city.photos[item.key].src) && <CityPhoto photo={city.photos[item.key]} locale={locale}/>}
            <h3 className="mt-4 font-sans font-normal text-xl">{fr?item.frTitle:item.enTitle}</h3>
            <p className="mt-3 text-sm leading-7 text-[#53646c]">{fr?item.frDetail:item.enDetail}</p>
          </article>)}
        </div>
      </div>
    </section>}
    {city.slug==='porto-cervo' && <section id="explorer-porto-cervo" className="bg-[#f1ece2] py-16 sm:py-20"><div className="mx-auto max-w-7xl px-5">
      <p className="text-xs uppercase tracking-[.2em] text-[#9a744a]">{fr?'Criques et art de vivre':'Coves and the good life'}</p>
      <h2 className="mt-4 font-sans font-normal text-3xl sm:text-5xl">{fr?'Quatre autres facettes de Porto Cervo.':'Four more sides of Porto Cervo.'}</h2>
      <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {([{key:'porto-cervo-marina',fr:'La marina',en:'The marina',frText:'Une promenade emblématique entre bateaux et maisons pastel.',enText:'An iconic harbour promenade.'},{key:'spiaggia-del-principe',fr:'La plage du Prince',en:'The Prince’s beach',frText:'Une anse à découvrir tôt, après vérification des accès.',enText:'A luminous cove best explored early.'},{key:'capriccioli-beach',fr:'Capriccioli',en:'Capriccioli',frText:'Granite, sable et eaux turquoise.',enText:'Granite, sand and clear sea.'},{key:'sardinia-sailing',fr:'La mer en bateau',en:'Sailing the coast',frText:'Découvrir les baies au rythme de la météo.',enText:'Discover the coastline by boat, weather permitting.'}] as const).map(item=><article key={item.key} className="bg-white p-4">
          {confirmedPortoCervoAssets.has(city.photos[item.key].src) && <CityPhoto photo={city.photos[item.key]} locale={locale}/>}
          <h3 className="mt-4 font-sans font-normal text-xl">{fr?item.fr:item.en}</h3>
          <p className="mt-3 text-sm leading-7 text-[#53646c]">{fr?item.frText:item.enText}</p>
        </article>)}
      </div>
    </div></section>}
    <section id="experience" className="scroll-mt-24 bg-[#193344] py-16 text-[#f8f3e8] sm:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {secondary && (destinationAssets ? destinationAssets.has(secondary.src) : true) && <CityPhoto photo={secondary} locale={locale}/>}
          <div>
            <p className="text-xs uppercase tracking-[.2em] text-[#e0e9ee]">
              {fr?'L’esprit du lieu':'A sense of place'}</p>
            <h2 className="mt-5 font-sans font-normal text-3xl sm:text-4xl">{fr
              ?'L’expérience avant le catalogue.':'Experience before inventory.'}</h2>
            <EditorialProse text={fr?city.introFr:city.introEn} className="mt-6 max-w-2xl text-base text-[#d2dcdf]" />
            
          </div>
        </div>
        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {city.experiences.map((experience)=><article key={experience.frTitle} className="border-t border-[#748d9e] pt-6">
            
            <h3 className="mt-4 font-sans font-normal text-2xl">{fr?experience.frTitle:experience.enTitle}</h3>
            <EditorialProse text={fr?experience.fr:experience.en} className="mt-4 text-sm text-[#ccdbdc]" maxChars={245} />
          </article>)}
        </div>
      </div>
    </section>
    {hotelPage?<section className="mx-auto max-w-7xl px-5 py-12">
      <Link className="text-sm font-semibold text-[#193344] underline underline-offset-4" href={hubHref}>
        ← {fr?'Retour au guide complet de la destination':'Back to the complete destination guide'}
      </Link>
    </section>:<HotelTeaser guide={city} locale={locale}/>}
    {(city.slug==='jaipur'||city.slug==='galle'||city.slug==='tangalle'||city.slug==='paro'||city.slug==='rajasthan'||city.slug==='udaipur'||city.slug==='sentosa'||city.slug==='singapore'||city.slug==='phu-quoc'||city.slug==='hoi-an'||city.slug==='da-nang'||city.slug==='vinh-hy-bay'||city.slug==='hakone'||city.slug==='kyoto'||city.slug==='tokyo'||city.slug==='palawan'||city.slug==='sumba'||city.slug==='chiang-mai'||city.slug==='bangkok'||city.slug==='koh-yao-noi'||city.slug==='krabi'||city.slug==='san-miguel-de-allende'||city.slug==='mayakoba'||city.slug==='los-angeles'||city.slug==='miami'||city.slug==='new-york'||city.slug==='istanbul'||city.slug==='koh-samui'||city.slug==='maldives'||city.slug==='los-cabos'||city.slug==='saint-barthelemy'||city.slug==='porto-cervo'||city.slug==='mustique'||city.slug==='courchevel-1850'||isAlpineCity(city.slug)||city.slug==='monaco'||city.slug==='saint-jean-cap-ferrat'||city.slug==='cap-dantibes'||city.slug==='lake-como'||city.slug==='capri'||city.slug==='positano'||city.slug==='ravello'||city.slug==='mykonos'||city.slug==='antiparos'||city.slug==='ibiza'||city.slug==='formentera'||city.slug==='deia'||city.slug==='port-andratx'||city.slug==='comporta'||city.slug==='melides'||city.slug==='tivat'||city.slug==='the-hamptons'||city.slug==='palm-beach'||city.slug==='nantucket'||city.slug==='harbour-island'||city.slug==='turks-and-caicos'||city.slug==='canouan'||city.slug==='necker-island'||city.slug==='north-island-seychelles'||city.slug==='pamalican-island'||city.slug==='laucala-island'||city.slug==='jumby-bay'||city.slug==='okavango-delta'||city.slug==='punta-mita'||city.slug==='costa-careyes') && <section id={city.slug==='jaipur'?'faq-jaipur':city.slug==='mayakoba'?'faq-mayakoba':city.slug==='los-angeles'?'faq-los-angeles':city.slug==='miami'?'faq-miami':isAlpineCity(city.slug)?'faq-'+city.slug:city.slug==='courchevel-1850'?'faq-courchevel-1850':city.slug==='mustique'?'faq-mustique':city.slug==='porto-cervo'?'faq-porto-cervo':city.slug==='saint-barthelemy'?'faq-saint-barthelemy':city.slug==='los-cabos'?'faq-los-cabos':city.slug==='maldives'?'faq-maldives':'faq-koh-samui'} className="mx-auto max-w-7xl px-5 py-14 sm:py-20">
      <p className="text-xs uppercase tracking-[.2em] text-[#193344]">{fr?'Questions fréquentes':'Frequently asked questions'}</p>
      <h2 className="mt-4 font-sans font-normal text-3xl sm:text-5xl">{(city.slug==='jaipur'||city.slug==='galle'||city.slug==='tangalle'||city.slug==='paro'||city.slug==='rajasthan'||city.slug==='udaipur'||city.slug==='sentosa'||city.slug==='singapore'||city.slug==='phu-quoc'||city.slug==='hoi-an'||city.slug==='da-nang'||city.slug==='vinh-hy-bay'||city.slug==='hakone'||city.slug==='kyoto'||city.slug==='tokyo'||city.slug==='palawan'||city.slug==='sumba'||city.slug==='chiang-mai'||city.slug==='bangkok'||city.slug==='koh-yao-noi'||city.slug==='krabi'||city.slug==='san-miguel-de-allende'||city.slug==='mayakoba'||city.slug==='los-angeles'||city.slug==='miami'||city.slug==='new-york'||city.slug==='istanbul'||isAlpineCity(city.slug)||city.slug==='monaco'||city.slug==='saint-jean-cap-ferrat'||city.slug==='cap-dantibes'||city.slug==='lake-como'||city.slug==='capri'||city.slug==='positano'||city.slug==='ravello'||city.slug==='mykonos'||city.slug==='antiparos'||city.slug==='ibiza'||city.slug==='formentera'||city.slug==='deia'||city.slug==='port-andratx'||city.slug==='comporta'||city.slug==='melides'||city.slug==='tivat'||city.slug==='the-hamptons'||city.slug==='palm-beach'||city.slug==='nantucket'||city.slug==='harbour-island'||city.slug==='turks-and-caicos'||city.slug==='canouan'||city.slug==='necker-island'||city.slug==='north-island-seychelles'||city.slug==='pamalican-island'||city.slug==='laucala-island'||city.slug==='jumby-bay'||city.slug==='okavango-delta'||city.slug==='punta-mita'||city.slug==='costa-careyes')?(fr?'Préparer votre séjour à '+city.name:'Planning your stay in '+city.name):city.slug==='courchevel-1850'?(fr?'Préparer votre séjour à Courchevel 1850':'Plan your stay in Courchevel 1850'):city.slug==='mustique'?(fr?'Préparer votre séjour à Mustique':'Planning your Mustique stay'):city.slug==='porto-cervo'?(fr?'Préparer votre séjour sur la Costa Smeralda':'Planning your Costa Smeralda stay'):city.slug==='saint-barthelemy'?(fr?'Préparer votre voyage à Saint-Barth':'Planning your St Barth stay'):city.slug==='los-cabos'?(fr?'Préparer un séjour de luxe à Los Cabos':'Planning a luxury stay in Los Cabos'):city.slug==='maldives'?(fr?'Préparer votre séjour de luxe aux Maldives':'Planning a luxury stay in the Maldives'):(fr?'Préparer un séjour de luxe à Koh Samui':'Plan a luxury stay in Koh Samui')}</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {(city.slug==='jaipur'?jaipurDraftFaq:city.slug==='galle'?galleDraftFaq:city.slug==='tangalle'?tangalleDraftFaq:city.slug==='paro'?paroDraftFaq:city.slug==='rajasthan'?rajasthanDraftFaq:city.slug==='udaipur'?udaipurDraftFaq:city.slug==='sentosa'?sentosaDraftFaq:city.slug==='singapore'?singaporeDraftFaq:city.slug==='phu-quoc'?phuQuocDraftFaq:city.slug==='hoi-an'?hoiAnDraftFaq:city.slug==='da-nang'?daNangDraftFaq:city.slug==='vinh-hy-bay'?vinhHyBayDraftFaq:city.slug==='hakone'?hakoneDraftFaq:city.slug==='kyoto'?kyotoDraftFaq:city.slug==='tokyo'?tokyoDraftFaq:city.slug==='palawan'?palawanDraftFaq:city.slug==='sumba'?sumbaDraftFaq:city.slug==='chiang-mai'?chiangMaiDraftFaq:city.slug==='bangkok'?bangkokDraftFaq:city.slug==='koh-yao-noi'?kohYaoNoiDraftFaq:city.slug==='krabi'?krabiDraftFaq:city.slug==='san-miguel-de-allende'?sanMiguelDeAllendeDraftFaq:city.slug==='mayakoba'?mayakobaDraftFaq:city.slug==='los-angeles'?losAngelesDraftFaq:city.slug==='miami'?miamiDraftFaq:city.slug==='new-york'?newYorkDraftFaq:city.slug==='istanbul'?istanbulDestinationFaq:city.slug==='monaco'?monacoDraftFaq:city.slug==='saint-jean-cap-ferrat'?saintJeanCapFerratDraftFaq:city.slug==='cap-dantibes'?capDAntibesDraftFaq:city.slug==='lake-como'?lakeComoDraftFaq:city.slug==='capri'?capriDraftFaq:city.slug==='positano'?positanoDraftFaq:city.slug==='ravello'?ravelloDraftFaq:city.slug==='mykonos'?mykonosDraftFaq:city.slug==='antiparos'?antiparosDraftFaq:city.slug==='ibiza'?ibizaDraftFaq:city.slug==='formentera'?formenteraDraftFaq:city.slug==='deia'?deiaDraftFaq:city.slug==='port-andratx'?portAndratxDraftFaq:city.slug==='comporta'?comportaDraftFaq:city.slug==='melides'?melidesDraftFaq:city.slug==='tivat'?tivatDraftFaq:city.slug==='the-hamptons'?theHamptonsDraftFaq:city.slug==='palm-beach'?palmBeachDraftFaq:city.slug==='nantucket'?nantucketDraftFaq:city.slug==='harbour-island'?harbourIslandDraftFaq:city.slug==='turks-and-caicos'?turksAndCaicosDraftFaq:city.slug==='canouan'?canouanDraftFaq:city.slug==='necker-island'?neckerIslandDraftFaq:city.slug==='north-island-seychelles'?northIslandSeychellesDraftFaq:city.slug==='pamalican-island'?pamalicanIslandDraftFaq:city.slug==='laucala-island'?laucalaIslandDraftFaq:city.slug==='costa-careyes'?costaCareyesDraftFaq:city.slug==='punta-mita'?puntaMitaDraftFaq:city.slug==='okavango-delta'?okavangoDeltaDraftFaq:city.slug==='jumby-bay'?jumbyBayDraftFaq:isAlpineCity(city.slug)?alpineFaqByCity[city.slug]:city.slug==='courchevel-1850'?courchevel1850Faq:city.slug==='mustique'?mustiqueFaq:city.slug==='porto-cervo'?portoCervoFaq:city.slug==='saint-barthelemy'?saintBarthelemyFaq:city.slug==='los-cabos'?losCabosFaq:city.slug==='maldives'?maldivesFaq:kohSamuiFaq)[locale].map(item=><article key={item.q} className="border border-[#e5dbcb] bg-white p-7">
          <h3 className="font-sans font-normal text-xl text-[#173340]">{item.q}</h3>
          <EditorialProse text={item.a} className="mt-4 text-sm text-[#54666d]" maxChars={250} />
        </article>)}
      </div>
    </section>}
    <Advice guide={city} locale={locale}/>
    <section className="mx-auto max-w-7xl px-5 py-16 sm:py-20">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <h2 className="font-sans font-normal text-3xl sm:text-4xl">{fr?'Continuer votre découverte':'Continue exploring'}</h2>
        <Link href={travelHref(locale,'destinations')} className="text-sm text-[#193344] underline underline-offset-4">
          {fr?'Explorer toutes les destinations':'Explore all destinations'}
        </Link>
      </div>
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {selectedDestinations.map(other =>
          <Link key={other.slug} href={travelHref(locale,'destinations/'+other.slug)}
            className="border border-[#e1e5e5] bg-[#f5f5f3] p-6 transition-colors hover:border-[#193344]">
            <span className="block text-xs text-[#53616b]">{other.country}</span>
            <span className="mt-2 block font-sans text-xl font-normal text-[#202629]">{other.name}</span>
          </Link>)}
      </div>
      {additionalDestinations.length > 0 && (
        <details className="mt-8 border-t border-[#e1e5e5]">
          <summary className="cursor-pointer py-5 text-sm font-medium text-[#193344]">
            {fr?'Voir les autres destinations':'View the other destinations'} ({additionalDestinations.length})
          </summary>
          <nav aria-label={fr?'Autres destinations Bosphoras':'Other Bosphoras destinations'}
            className="grid gap-x-6 gap-y-4 pb-5 sm:grid-cols-2 lg:grid-cols-4">
            {additionalDestinations.map(other =>
              <Link key={other.slug} href={travelHref(locale,'destinations/'+other.slug)}
                className="text-sm leading-6 text-[#53616b] underline-offset-4 hover:text-[#193344] hover:underline">
                {other.name}
              </Link>)}
          </nav>
        </details>
      )}
      {(city.slug==='paro'||city.slug==='tangalle') && <details className="mt-8 border-t border-[#e1e5e5] pt-5">
        <summary className="cursor-pointer text-xs text-[#53616b]">{fr?'Crédits des photographies':'Photographic credits'}</summary>
        <ul className="mt-4 space-y-2 text-xs leading-6 text-[#53616b]">
          {approvedPhotos.map(photo=><li key={photo.src}>
            {photo.author} · <a href={photo.sourcePage} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{fr?photo.fr:photo.en}</a> · <a href={photo.licenseUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{photo.license}</a>
          </li>)}
          {Object.values(hotelEditorialByCity[city.slug]).flatMap(hotel=>hotel.photos).filter(photo=>Boolean(areaPhotoLicensesByCity[city.slug]?.[photo.src])).map(photo=><li key={photo.src}>
            {photo.credit} · <a href={photo.sourcePage} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{fr?photo.fr:photo.en}</a> · <a href={areaPhotoLicensesByCity[city.slug][photo.src].url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{areaPhotoLicensesByCity[city.slug][photo.src].name}</a>
          </li>)}
        </ul>
      </details>}
      <Link href={travelHref(locale,'hotels/istanbul')}
        className="mt-7 inline-block text-sm text-[#193344] underline underline-offset-4">
        {fr?'Découvrir les hôtels du Bosphore':'Explore Bosphorus hotels'}
      </Link>
    </section>
  </main>;
}
