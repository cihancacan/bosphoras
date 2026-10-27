#!/usr/bin/env python3
"""21 original LAUCALA website images for private owner-preview editorial use.
Villa-specific identification is NOT claimed when source alt text says 'Banner image'.
Operator photo-use attestation is distinct from independent photographer copyright.
"""
import io,json,hashlib,re
from pathlib import Path
import requests
from bs4 import BeautifulSoup
from PIL import Image,ImageOps
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'public/images/travel/laucala-island-premium'
MAN=ROOT/'data/travel/laucalaIslandMediaCandidates.json'
SITE='https://www.laucala.com/'
S=requests.Session();S.headers.update({'User-Agent':'Mozilla/5.0 BosphorasLuxuryStaysEditorial'})
ACCOUNT='qO43xOenpVK1usAjenxJTA'
# IDs selected after visual contact-sheet inspection of every official site image.
# All descriptions are *representative LAUCALA*; source cannot identify exact room categories.
GROUPS=[
 ('plantation','LAUCALA — Plantation Residences',[
 ('de1455b5-384e-4270-ef56-92ecbaca7f00','Plantation et piscines · vue générale du resort','LAUCALA island · villa pool and tropical landscaping'),
 ('afbe79dc-94ec-4773-f30a-e28b2ad04b00','Pavillons de plage et jardins · image d’ambiance','LAUCALA beachside pavilion setting'),
 ('09b123bb-a41b-4841-5fdd-3ed672a4b100','Plage plantée de cocotiers · vue de l’île','LAUCALA island · palms near the beach')]),
 ('seagrass','LAUCALA — Seagrass Residences',[
 ('f4805041-db69-411e-61c3-6b04afcbe300','Villa et piscine tropicale · décor de l’île','LAUCALA island · villa pool in tropical gardens'),
 ('2f83888b-25b3-49f2-03f0-5c6fcaaab800','Pavillon et bois exotique · vue illustrative','LAUCALA island · timber pavilion setting'),
 ('1548a20c-a4b5-4e2c-1e95-1cce3313d500','Piscine privée et verdure · vue illustrative','LAUCALA island · private pool and greenery')]),
 ('plateau','LAUCALA — Plateau Residences',[
 ('5bd7d744-a21d-4b0f-9809-12abb635e100','Piscine et vue au soleil couchant · LAUCALA','LAUCALA pool and sunset, representative island setting'),
 ('389b837e-7223-466c-2ef5-832a38a61100','Jungle dense · paysage du domaine','LAUCALA tropical forest landscape'),
 ('e42e03e3-ce3d-46d5-0da1-086be3aa3600','Villa et bassin dans la forêt · image illustrative','LAUCALA island · jungle villa swimming pool')]),
 ('wai','LAUCALA — Wai Overwater Residence',[
 ('751c88de-d46e-4119-4edb-21ef3bf9b700','Pavillons sur pilotis de Laucala · résidence sur l’eau','LAUCALA genuine overwater pavilions'),
 ('5f57bc42-4c9d-42be-1354-1e7b58061e00','Villas au-dessus du lagon · vue différente','LAUCALA overwater architecture and lagoon'),
 ('c367852f-4313-454b-f886-f9b85d2d9100','Côte et récif autour du domaine · vue générale','LAUCALA island coast and reef, not a confirmed room-specific view')])
]
SCENES=[
 ('scene-1','0f12981c-2be7-480c-15d2-5a82697efc00','Côte turquoise et palmiers de Laucala','Laucala island · aerial turquoise coast and palm canopy'),
 ('scene-2','0497c365-d27f-49c4-e582-13546b154e00','Littoral et horizon fidjien','LAUCALA coastal horizon'),
 ('scene-3','e835072f-0b1d-49ac-27dd-d597cd037600','Baie et récif de Laucala','Laucala bay and reefs'),
 ('scene-4','8ab32a42-51ac-47bb-9892-61533262fd00','Palmiers et rivage tropical','Palm-fringed island shore'),
 ('scene-5','adae7428-605d-4d36-c107-27272380f200','Mer turquoise et végétation tropicale','Island turquoise sea and jungle'),
 ('scene-6','cd26b70a-ec1e-499f-9ccc-1345a3b1e900','Littoral boisé et mer calme','Wooded tropical shoreline'),
 ('scene-7','4ec7adbb-c512-432d-70e7-204b24dbde00','Forêt et crêtes verdoyantes','Laucala lush hills and forest'),
 ('scene-8','c7e4e0af-ab7b-448c-e48c-7e854047f900','Plage de sable et cocotiers','Laucala palms and white-sand beach'),
 ('scene-9','71b31a15-dbcd-41a3-2e30-66a4b8718b00','Plage naturelle du domaine','Laucala island natural sandy beach')
]
def fetch(url):
 r=S.get(url,timeout=40);r.raise_for_status();return r
def save(uid,key,fr,en,propertyKey=None,property=None):
 url=f'https://imagedelivery.net/{ACCOUNT}/{uid}/public?w=1600&q=83'
 im=ImageOps.exif_transpose(Image.open(io.BytesIO(fetch(url).content)))
 if im.width<490 or im.height<500 or not .4<im.width/im.height<3.5:raise ValueError('Unsuitable photo resolution/aspect '+uid+' '+str(im.size))
 old=list(im.size);im=im.convert('RGB');im.thumbnail((1550,1100),Image.Resampling.LANCZOS)
 p=OUT/(propertyKey or 'destination')/(key+'.webp');p.parent.mkdir(parents=True,exist_ok=True)
 im.save(p,'WEBP',quality=82,method=5)
 b=p.read_bytes()
 if len(b)<18500:raise ValueError('Tiny compressed photo '+uid)
 obj=dict(key=key,sourcePage=SITE,downloadUrl=url,originalMediaId=uid,sourceAlt='Banner image / LAUCALA original publisher (most source files have no specific room identification)',credit='LAUCALA · official private-island publisher; original photographer unidentified',license='Operator-attested source use for private owner preview only; original photographer rights need separate clearance',licenseUrl=SITE,rightsEvidenceType='operator_self_attestation',status='candidate_needs_visual_review',visuallyVerified=False,commercialRightsCleared=False,visualQaWarning='Official resort scene verified in selection contact sheet; no exact residence identification; public-commercial rights outstanding',frCaption=fr+' — photo officielle indicative, résidence exacte non identifiée',enCaption=en+' — official illustrative image, exact residence unverified',localPath='/'+str(p.relative_to(ROOT/'public')),sha256=hashlib.sha256(b).hexdigest(),bytes=len(b),originalSize=old,outputSize=list(im.size),imageTransformation='Original LAUCALA Cloudflare publisher image, converted to unique local WebP')
 if propertyKey:obj.update(propertyKey=propertyKey,property=property)
 else:obj.update(place='LAUCALA Island, Fiji')
 return obj
def main():
 html=BeautifulSoup(fetch(SITE).text,'html.parser')
 source_ids={m.group(1) for img in html.select('img') if (m:=re.search(r'imagedelivery\.net/'+ACCOUNT+r'/([a-f0-9-]{36})/',img.get('src','')))}
 expected={uid for _,_,items in GROUPS for uid,_,_ in items}|{uid for _,uid,_,_ in SCENES}
 if not expected.issubset(source_ids):raise RuntimeError('Publisher removed original image(s) '+str(expected-source_ids))
 hotels=[];scenes=[]
 for key,name,items in GROUPS:
  for i,(uid,fr,en) in enumerate(items,1):
   hotels.append(save(uid,'view-'+str(i),fr,en,key,name));print('PROPERTY',key,i,uid,flush=True)
 for key,uid,fr,en in SCENES:
  scenes.append(save(uid,key,fr,en));print('SCENE',key,uid,flush=True)
 all_=hotels+scenes
 if len(hotels)!=12 or len(scenes)!=9 or len({x['sha256'] for x in all_})!=21:raise ValueError('Require exactly 21 genuinely different physical photos')
 MAN.parent.mkdir(parents=True,exist_ok=True)
 MAN.write_text(json.dumps(dict(destination='laucala-island',hotels=hotels,destinationScenes=scenes,downloadedHotelCandidates=12,downloadedDestinationCandidates=9,visuallyVerified=False,approvedForCommercialPublication=False,publicationBlockedReason='Source photos are authentic LAUCALA island images, but specific historical villa identity is not generally attested, and original photographer-level publication rights remain open',photoRightsBasis='Original current resort website Cloudflare CDN imagery, publisher-attributed but not individually credited'),ensure_ascii=False,indent=2)+'\n')
 print('LAUCALA_21_ORIGINAL_SOURCE_PHOTOS',len(all_),flush=True)
if __name__=='__main__':main()
