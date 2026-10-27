#!/usr/bin/env python3
"""Download 21 distinct Necker Island originals from virginlimitededition.com.
Site-owner-authorised candidates only. An image download is not independent
photographer copyright clearance or automatic proof of visual identity.
"""
import hashlib,io,json
from pathlib import Path
from urllib.parse import urljoin
import requests
from bs4 import BeautifulSoup
from PIL import Image,ImageOps
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'public/images/travel/necker-island-premium'
MAN=ROOT/'data/travel/neckerIslandMediaCandidates.json'
SITE='https://www.virginlimitededition.com'
S=requests.Session();S.headers.update({'User-Agent':'BosphorasLuxuryStays-ImageResearch/1.0'})
GROUPS=[
('great','The Great House','/necker-island/rooms-and-suites/the-great-house/',
 [('master-suite','necker-island-the-great-house-master-suite-lr.jpg','Master Suite · chambre et terrasse panoramique','The Great House · Master Suite'),
  ('moon-room','necker-island-the-great-house-moon-room-10.jpg','Great House · chambre Moon et décor singulier','Great House · Moon Room accommodation'),
  ('bunkroom','necker-island-the-great-house-bunkroom-lr.jpg','Great House · bunkroom pour les enfants','Great House · family children's bunkroom')]),
('hi','Bali Hi Complex','/necker-island/rooms-and-suites/bali-hi/',
 [('bali-hi','necker-island-bali-hi-5.jpg','Bali Hi · maison balinaise face à l'océan','Bali Hi · ocean-facing Balinese house'),
  ('bali-cliff','necker-island-bali-cliff-lower-terrace-4.jpg','Bali Cliff · terrasse proche des falaises','Bali Cliff · lower clifftop terrace'),
  ('bali-beach','necker-island-bali-beach-8.jpg','Bali Beach · intérieur et vue sur Flamingo Beach','Bali Beach · individual accommodation')]),
('lo','Bali Lo Complex','/necker-island/rooms-and-suites/bali-lo/',
 [('bali-lo','necker-island-bali-lo-complex-bali-lo-lr.jpg','Bali Lo · maison principale du complexe','Bali Lo · main Balinese residence'),
  ('buah','necker-island-bali-lo-complex-bali-buah-1-lr.jpg','Bali Buah · chambre et balcon distincts','Bali Buah · private house and balcony'),
  ('kukila','necker-island-bali-lo-complex-bali-kukila-1-lr.jpg','Bali Kukila · chambre balinaise et terrasse','Bali Kukila · Balinese room and terrace')]),
('temple','Temple House','/necker-island/rooms-and-suites/temple-house/',
 [('master','necker-island-temple-master-3.jpg','Temple Master · chambre et terrasse panoramique','Temple Master · accommodation and terrace'),
  ('sunrise','necker-island-temple-sunrise-1.jpg','Temple Sunrise · chambre orientée vers l'aube','Temple Sunrise · east-facing accommodation'),
  ('temple-lo','necker-island-temple-house-temple-lo-lr.jpg','Temple Lo · chambre de Temple House','Temple Lo · one of the Temple House rooms')])
]
SCENES=[
('scene-1','necker-island-aerial.jpg','L'île Necker vue du ciel · North Sound','Necker Island aerial · North Sound'),
('scene-2','necker-island-main-beach-crocodile-pavilion-aerial-1-2.jpg','Main Beach et Crocodile Pavilion · vue aérienne','Main Beach and Crocodile Pavilion from above'),
('scene-3','necker-island-watersports-kitesurfing-1-1.jpg','Sports nautiques à Necker · voile sur mer turquoise','Necker Island · kitesurf over turquoise sea'),
('scene-4','necker-island-beach-bar-cocktails-2.jpg','Ambiance côtière et plage de Necker','Necker Island · beachfront bar setting'),
('scene-5','necker-island-palm-beach-dining-1.jpg','Palm Beach · repas à ciel ouvert','Palm Beach · open-air island dining'),
('scene-6','necker-island-the-great-house-bali-hi-aerial-1-1.jpg','Great House et Bali Hi vus du ciel','The Great House and Bali Hi complex aerial'),
('scene-7','necker-island-great-house-pool-2.jpg','Piscine de la Great House dans le paysage','Great House pool above the sea'),
('scene-8','necker-island-watersports-5.jpg','Activités sur l'eau près de Necker','Watersports off Necker Island'),
('scene-9','necker-island-turtle-beach-dining-1-lr.jpg','Turtle Beach · table au bord de l'eau','Turtle Beach · intimate shoreline dining')
]
def fetch(url):
 r=S.get(url,timeout=35);r.raise_for_status();return r
def save(url,path):
 r=fetch(url);im=ImageOps.exif_transpose(Image.open(io.BytesIO(r.content)))
 if im.width<850 or im.height<490:raise ValueError('Resolution too low '+str(im.size))
 if not .45<im.width/im.height<3.3:raise ValueError('Noneditorial aspect '+str(im.size))
 orig=list(im.size);im=im.convert('RGB');im.thumbnail((1700,1150),Image.Resampling.LANCZOS)
 path.parent.mkdir(parents=True,exist_ok=True);im.save(path,'WEBP',quality=82,method=5)
 b=path.read_bytes()
 if len(b)<22500:raise ValueError('Tiny compressed image '+str(len(b)))
 return dict(localPath='/'+str(path.relative_to(ROOT/'public')),sha256=hashlib.sha256(b).hexdigest(),bytes=len(b),originalSize=orig,outputSize=list(im.size),imageTransformation='Original Virgin Limited Edition image, EXIF correction, aspect-preserving WebP encoding')
def gallery(page):
 url=urljoin(SITE,page)
 images=[x.get('src','') for x in BeautifulSoup(fetch(url).text,'html.parser').find_all('img')]
 images=[urljoin(SITE,x) for x in images if x.startswith('/media/') and '.jpg' in x.split('?')[0].lower()]
 return images,url
def matched(all_,slug):
 exact=[u for u in all_ if u.split('?')[0].split('/')[-1].lower()==slug.lower()]
 if len(exact)!=1:raise RuntimeError('Missing/ambiguous original photo '+slug+': '+str(exact))
 return exact[0]
def make(key,url,page,fr,en,path,propKey=None,prop=None):
 photo=save(url,path)
 obj=dict(key=key,sourcePage=page,downloadUrl=url,credit='Virgin Limited Edition · original property publisher (photographer not individually identified)',license='Owner-attested use of Virgin Limited Edition property imagery; original photographer licence must be independently verified',licenseUrl=page,rightsEvidenceType='operator_self_attestation',status='candidate_needs_visual_review',visuallyVerified=False,commercialRightsCleared=False,visualQaWarning='Await genuine-image contact-sheet inspection and independent copyright audit',frCaption=fr,enCaption=en,**photo)
 if propKey:obj.update(propertyKey=propKey,property=prop)
 else:obj.update(place='Necker Island, British Virgin Islands')
 return obj
def main():
 hotels=[]
 for group,name,page,specs in GROUPS:
  images,source=gallery(page)
  for i,(_,original,fr,en) in enumerate(specs,1):
   url=matched(images,original)
   hotels.append(make('view-'+str(i),url,source,fr,en,OUT/group/('view-'+str(i)+'.webp'),group,name))
   print('HOTEL',group,i,original,flush=True)
 land,source=gallery('/necker-island/the-island/')
 scenes=[]
 for key,original,fr,en in SCENES:
  url=matched(land,original)
  scenes.append(make(key,url,source,fr,en,OUT/'destination'/(key+'.webp')))
  print('SCENE',key,original,flush=True)
 a=hotels+scenes
 if len(hotels)!=12 or len(scenes)!=9 or len({x['sha256'] for x in a})!=21:raise RuntimeError('21 distinct photos required')
 MAN.parent.mkdir(parents=True,exist_ok=True)
 MAN.write_text(json.dumps(dict(destination='necker-island',hotels=hotels,destinationScenes=scenes,downloadedHotelCandidates=12,downloadedDestinationCandidates=9,visuallyVerified=False,approvedForCommercialPublication=False,publicationBlockedReason='21 original publisher photos collected but copyright and visual QA must be performed separately',photoRightsBasis='Virgin Limited Edition publisher-controlled images, site-operator permission attested; independent original-photographer licence audit outstanding'),ensure_ascii=False,indent=2)+'\n')
 print('NECKER_ISLAND_21_UNAPPROVED_PHOTOS',len(a),flush=True)
if __name__=='__main__':main()
