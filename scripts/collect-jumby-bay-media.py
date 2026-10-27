#!/usr/bin/env python3
"""21 real Jumby Bay Island images for private owner Preview, from named hotel-distributor media.
Original Oetker pages were researched separately. Independent photographer commercial
licenses and the distributor's reproduction rights remain to be verified.
"""
import hashlib,io,json,os
from pathlib import Path
import requests
from bs4 import BeautifulSoup
from PIL import Image,ImageOps
ROOT=Path(__file__).resolve().parents[1];OUT=ROOT/'public/images/travel/jumby-bay-premium'
MAN=ROOT/'data/travel/jumbyBayMediaCandidates.json'
BASE='https://jumbybayantigua.com'
S=requests.Session();S.headers.update({'User-Agent':'Mozilla/5.0'})
PAGES={'home':'/','garden':'/rooms-and-suites/jumby-bay-garden-cottage/','pool':'/rooms-and-suites/jumby-bay-pool-cottage/','villa':'/rooms-and-suites/jabberwocky-room/','estate':'/rooms-and-suites/calabash/'}
GROUPS=[
('garden','Jumby Bay Garden Cottage','garden',[
('garden-cottage-outdoor-bath-jumby-bay-island-w1440.webp','Garden Cottage · baignoire ouverte sur la végétation','Garden Cottage · tropical outdoor bathroom'),
('garden-cottage-king-bed-jumby-bay-island-w1440.webp','Garden Cottage · vraie chambre du cottage','Garden Cottage · original king bedroom'),
('garden-cottage-king-bed-bedroom-jumby-bay-island-w960.webp','Garden Cottage · chambre et terrasse','Garden Cottage · room and terrace')]),
('pool','Jumby Bay Pool Cottage','pool',[
('pool-cottage-terrace-plunge-pool-ocean-view-jumby-bay-island.webp','Pool Cottage · terrasse avec piscine privée','Pool Cottage · pool and ocean-view deck'),
('pool-cottage-bedroom-king-bed-jumby-bay-island.webp','Pool Cottage · chambre principale','Pool Cottage · real primary bedroom'),
('pool-cottage-living-dining-area-jumby-bay-island.webp','Pool Cottage · salon et espace repas','Pool Cottage · living and dining room')]),
('jabberwocky','Jabberwocky — Jumby Bay Villa','villa',[
('jabberwocky-room-living-area-jumby-bay-island-w1440.webp','Jabberwocky · grand salon de la villa','Jabberwocky · genuine villa living room'),
('jabberwocky-room-pool-terrace-jumby-bay-island-w1440.webp','Jabberwocky · terrasse extérieure','Jabberwocky · villa terrace'),
('jabberwocky-room-king-bed-terrace-ocean-view-jumby-bay-island-w960.webp','Jabberwocky · chambre et vue depuis la terrasse','Jabberwocky · named bedroom and terrace')]),
('calabash','Calabash — Jumby Bay Private Estate','estate',[
('calabash-pool-ocean-view-palm-trees-jumby-bay-island.webp','Calabash · piscine de la résidence privée','Calabash · estate infinity pool'),
('calabash-outdoor-dining-terrace-waterfront-jumby-bay-island.webp','Calabash · espace de repas face à la plage','Calabash · seafront private dining terrace'),
('calabash-guest-room-canopied-bed-ocean-view-jumby-bay-island.webp','Calabash · chambre identifiée dans la résidence','Calabash · actual private estate bedroom')])]
SCENES=[
('scene-1','home','aerial-beachfront-resort-view-jumby-bay-island.webp','Jumby Bay Island · plage et île vues du ciel','Jumby Bay Island · aerial beachfront resort'),
('scene-2','home','beachfront-lounge-area-jumby-bay-island.webp','Plage privée, palmiers et transats','Private island beach with loungers and palms'),
('scene-3','home','pool-terrace-with-sea-view-jumby-bay-island.webp','Piscine et mer des Caraïbes','Caribbean sea beyond island pool terrace'),
('scene-4','garden','twilight-resort-pool-and-pavilions-jumby-bay-island.webp','Jumby Bay · pavillons au crépuscule','Island pavilions and pool at twilight'),
('scene-5','home','private-villa-pools-and-terraces-jumby-bay-island-w1440.webp','Villas et paysages aériens du domaine','Aerial private villa and island landscape'),
('scene-6','home','beachfront-open-air-dining-terrace-jumby-bay-island.webp','Restaurant de plage à ciel ouvert','Beachfront island restaurant setting'),
('scene-7','home','oceanview-terrace-cocktail-jumby-bay-island.webp','Terrasse et panorama marin du resort','Island lounge above the Caribbean'),
('scene-8','home','tropical-courtyard-entrance-jumby-bay-island-w1440.webp','Allées tropicales et jardins','Tropical courtyard and garden pathway'),
('scene-9','home','private-pool-terrace-sea-view-jumby-bay-island.webp','Côte de Jumby Bay depuis une terrasse','Jumby Bay coast viewed from resort terrace')]
CACHE={}
def page(key):
 if key not in CACHE:
  r=S.get(BASE+PAGES[key],timeout=35);r.raise_for_status()
  CACHE[key]=BeautifulSoup(r.text,'html.parser')
 return CACHE[key]
def resolve(group,filename):
 # Prefer exact filename from category page; if homepage page is missing a
 # valid image use the dedicated gallery page as alternative.
 doc=page(group)
 possible=[]
 for el in doc.select('img'):
  for field in ['data-src','src']:
   u=el.get(field,'')
   if 'cdn.bookresortsmedia.com/sites/jumby-bay-island/' in u and u.split('?')[0].rsplit('/',1)[-1]==filename:possible.append(u)
 if group=='home' and not possible:
  for k in ['garden','pool','villa','estate']:
   for el in page(k).select('img'):
    u=el.get('data-src') or el.get('src') or ''
    if u.split('?')[0].rsplit('/',1)[-1]==filename:possible.append(u)
 if not possible and group!='home':
  for el in page('home').select('img'):
   u=el.get('data-src') or el.get('src') or ''
   if u.split('?')[0].rsplit('/',1)[-1]==filename:possible.append(u)
 if not possible:raise RuntimeError('Image missing on partner gallery: '+group+' '+filename)
 return possible[0]
def photo(key,group,file,fr,en,propKey=None,prop=None):
 url=resolve(group,file)
 r=S.get(url,timeout=40);r.raise_for_status()
 im=ImageOps.exif_transpose(Image.open(io.BytesIO(r.content)))
 if im.width<780 or im.height<490:raise ValueError('Too small: '+file+' '+str(im.size))
 if not .5<im.width/im.height<3.2:raise ValueError('Bad aspect '+file)
 orig=list(im.size);im=im.convert('RGB');im.thumbnail((1700,1150),Image.Resampling.LANCZOS)
 dest=OUT/(propKey or 'destination')/(key+'.webp')
 dest.parent.mkdir(parents=True,exist_ok=True);im.save(dest,'WEBP',quality=82,method=5)
 b=dest.read_bytes()
 if len(b)<21000:raise ValueError('Too small output '+file+' '+str(len(b)))
 obj=dict(key=key,sourcePage=BASE+PAGES[group],downloadUrl=url,sourceFilename=file,credit='Jumby Bay Island · partner-distributed resort photo, individual photographer not identified',license='Owner-attested use for private Preview only; origin and commercial rights need independent audit',licenseUrl=BASE+PAGES[group],rightsEvidenceType='operator_self_attestation_partner_publisher',status='candidate_needs_visual_review',visuallyVerified=False,commercialRightsCleared=False,visualQaWarning='Await owner contact-sheet review and independent creator-rights clearance',frCaption=fr,enCaption=en,localPath='/'+str(dest.relative_to(ROOT/'public')),sha256=hashlib.sha256(b).hexdigest(),bytes=len(b),originalSize=orig,outputSize=list(im.size))
 if propKey:obj.update(propertyKey=propKey,property=prop)
 else:obj.update(place='Jumby Bay Island, Antigua and Barbuda')
 return obj
def main():
 hotels=[];scenes=[]
 for key,name,pg,items in GROUPS:
  for i,(file,fr,en) in enumerate(items,1):
   hotels.append(photo('view-'+str(i),pg,file,fr,en,key,name))
   print('PROPERTY',key,i,file,flush=True)
 for key,pg,file,fr,en in SCENES:
  scenes.append(photo(key,pg,file,fr,en))
  print('SCENE',key,file,flush=True)
 all_=hotels+scenes
 if len(hotels)!=12 or len(scenes)!=9 or len({x['sha256'] for x in all_})!=21:raise RuntimeError('Expected 21 unique photos')
 MAN.parent.mkdir(parents=True,exist_ok=True);MAN.write_text(json.dumps(dict(destination='jumby-bay',hotels=hotels,destinationScenes=scenes,downloadedHotelCandidates=12,downloadedDestinationCandidates=9,visuallyVerified=False,approvedForCommercialPublication=False,publicationBlockedReason='21 named partner-distributed images collected; visual/photographer-rights audit required',photoRightsBasis='Images supplied on named Jumby Bay distributor property pages, not official Oetker first-party image host'),ensure_ascii=False,indent=2)+'\n')
 print('JUMBY_BAY_21_PHOTO_CANDIDATES',len(all_),flush=True)
if __name__=='__main__':main()
