#!/usr/bin/env python3
"""North Island original publisher photo collector: 10 Beachfront Villas, Villa North and entire island.
Only owner's image-preview permission is asserted. Independent creator rights remain pending.
"""
import hashlib,io,json
from pathlib import Path
import requests
from PIL import Image,ImageOps
ROOT=Path(__file__).resolve().parents[1];OUT=ROOT/'public/images/travel/north-island-seychelles-premium'
MAN=ROOT/'data/travel/northIslandSeychellesMediaCandidates.json'
API='https://north-island.com/wp-json/wp/v2/media'
S=requests.Session();S.headers.update({'User-Agent':'BosphorasLuxuryStaysSourceResearch/1.0'})
GROUPS=[
 ('beachfront','North Island — Beachfront Villa',[
 ('north-island-beachfront-villa-bedroom-1-2','Beachfront Villa · chambre principale officielle','Beachfront Villa · actual master bedroom'),
 ('north-island-beachfront-villa-sala-and-pool','Beachfront Villa · sala et bassin privatif','Beachfront Villa · outdoor sala and private plunge pool'),
 ('north-island-beachfront-villa-aerial-1','East Beach · Beachfront Villa intégrée à la végétation','East Beach · a beachfront villa surrounded by greenery')]),
 ('family','North Island — Beachfront Villa, séjour familial',[
 ('north-island-beachfront-villa-childrens-room-layout','Même catégorie Beachfront Villa · étude adaptée aux enfants','Same Beachfront Villa category · child-friendly study layout'),
 ('north-island-beachfront-villa-living-room-1','Beachfront Villa · salon adapté aux familles','Beachfront Villa · family living area'),
 ('north-island-beachfront-villa-garden-1','Beachfront Villa · terrasse et jardin privatif','Beachfront Villa · secluded garden terrace')]),
 ('north','North Island — Villa North',[
 ('north-island-villa-north-aerial','Villa North unique · résidence près du granite','The unique Villa North residence near granite slopes'),
 ('16-villa-north-villa-11-bedroom','Villa North · véritable chambre de la villa 11','Villa North · original bedroom in Villa 11'),
 ('villa-north-terrace-fire-pit','Villa North · terrasse privée et foyer extérieur','Villa North · private deck and firepit')]),
 ('exclusive','North Island — Exclusively Yours',[
 ('north-island-island-aerial','Privatisation · North Island au complet vue du ciel','Whole-island buyout · North Island aerial'),
 ('north-island-aerial-of-the-island','Privatisation · l’île et ses plages depuis le ciel','Full-island setting · reef and island aerial'),
 ('north-island-aerial-of-honeymoonbeach','L’île privée · perspective de Honeymoon Beach','Entire North Island · Honeymoon Beach perspective')])
]
SCENES=[
 ('scene-1','north-island-conservation-view-of-east-beach','East Beach et ses villas discrètes','East Beach and its discreet private villas'),
 ('scene-2','north-island-experience-the-island-walking-on-west-beach','West Beach · balade à pied sur le sable','West Beach · an island shoreline walk'),
 ('scene-3','north-island-conservation-family-with-aldabra-giant-tortoise','Rencontre encadrée avec une tortue géante d’Aldabra','North Island · family observing an Aldabra giant tortoise'),
 ('scene-4','north-island-conservation-turtle-on-beach','Conservation · tortue marine et plage protégée','Sea-turtle conservation on North Island beach'),
 ('scene-5','north-island-dining-and-cuisine-west-beach-bar-aerial','West Beach Bar · paysage et table en bord de mer','West Beach Bar · coastal dining landscape'),
 ('scene-6','north-island-experience-the-island-west-beach-swing','West Beach · balancelle près de l’océan','West Beach · seaside swing'),
 ('scene-7','north-island-forest-image','Sentiers de la forêt tropicale et conservation','North Island · tropical forest and habitat restoration'),
 ('scene-8','north-island-dining-and-cuisine-west-beach-bar-beach','West Beach · plage, végétation et bar','West Beach · palms, beach and lounge'),
 ('scene-9','north-island-conservation-seychelles-white-eye','Conservation · oiseau Seychelles white-eye','North Island · Seychelles white-eye bird')
]
def fetch(url):
 r=S.get(url,timeout=40);r.raise_for_status();return r
def media():
 arr=[]
 for p in range(1,5):
  arr+=fetch(API+f'?per_page=100&page={p}').json()
 return {x['slug']:x for x in arr if x.get('slug')}
def save(url,path):
 r=fetch(url);im=ImageOps.exif_transpose(Image.open(io.BytesIO(r.content)))
 if im.width<820 or im.height<550:raise ValueError('Small original '+str(im.size)+' '+url)
 if not .44<im.width/im.height<3.4:raise ValueError('Unusable crop '+str(im.size))
 size=list(im.size);im=im.convert('RGB');im.thumbnail((1750,1200),Image.Resampling.LANCZOS)
 path.parent.mkdir(parents=True,exist_ok=True);im.save(path,'WEBP',quality=82,method=5)
 b=path.read_bytes()
 if len(b)<21000:raise ValueError('Compressed file too small '+str(len(b)))
 return dict(localPath='/'+str(path.relative_to(ROOT/'public')),sha256=hashlib.sha256(b).hexdigest(),bytes=len(b),originalSize=size,outputSize=list(im.size),imageTransformation='Publisher original; EXIF orientation and aspect-preserving WebP export')
def rec(db,slug,key,fr,en,path,propertyKey=None,property=None):
 x=db.get(slug)
 if not x:raise ValueError('Missing official image '+slug)
 url=x.get('source_url','')
 if not url.startswith('https://north-island.com/wp-content/uploads/'):raise ValueError('Untrusted source '+url)
 obj=dict(key=key,originalMediaSlug=slug,sourcePage='https://north-island.com/accommodation/' if propertyKey else 'https://north-island.com/',downloadUrl=url,credit='North Island Seychelles official resort publisher · photographer uncredited',license='Operator-attested permission; independent photographer commercial-licence audit outstanding',licenseUrl='https://north-island.com/',rightsEvidenceType='operator_self_attestation',status='candidate_needs_visual_review',visuallyVerified=False,commercialRightsCleared=False,visualQaWarning='Await actual visual contact sheet and individual photographer-rights audit',frCaption=fr,enCaption=en,**save(url,path))
 if propertyKey:obj.update(propertyKey=propertyKey,property=property)
 else:obj.update(place='North Island, Seychelles')
 return obj
def main():
 db=media();hotels=[];scenes=[]
 for key,name,entries in GROUPS:
  for i,(slug,fr,en) in enumerate(entries,1):
   hotels.append(rec(db,slug,f'view-{i}',fr,en,OUT/key/f'view-{i}.webp',key,name))
   print('VILLA',key,i,slug,flush=True)
 for key,slug,fr,en in SCENES:
  scenes.append(rec(db,slug,key,fr,en,OUT/'destination'/f'{key}.webp'))
  print('SCENE',key,slug,flush=True)
 all_=hotels+scenes
 if len(hotels)!=12 or len(scenes)!=9 or len({x['sha256'] for x in all_})!=21:raise RuntimeError('Required: exactly 21 distinct WebP photos')
 m=dict(destination='north-island-seychelles',hotels=hotels,destinationScenes=scenes,downloadedHotelCandidates=len(hotels),downloadedDestinationCandidates=len(scenes),visuallyVerified=False,approvedForCommercialPublication=False,publicationBlockedReason='Image download alone is not visual review or original photographer licence clearance',photoRightsBasis='North Island resort’s actual original publisher URLs; separate original-photographer clearance pending')
 MAN.parent.mkdir(parents=True,exist_ok=True);MAN.write_text(json.dumps(m,ensure_ascii=False,indent=2)+'\n')
 print('NORTH_ISLAND_21_ORIGINAL_PHOTO_CANDIDATES',len(all_),flush=True)
if __name__=='__main__':main()
