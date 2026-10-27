#!/usr/bin/env python3
"""21 sourced Amanpulo photo candidates: 4 genuine Aman accommodation categories + 9 Pamalican scenes.
Commercial photographer rights and visual verification are separate owner approvals.
"""
import hashlib,io,json,re
from pathlib import Path
from urllib.parse import urljoin
import requests
from bs4 import BeautifulSoup
from PIL import Image,ImageOps
ROOT=Path(__file__).resolve().parents[1];OUT=ROOT/'public/images/travel/pamalican-island-premium';MAN=ROOT/'data/travel/pamalicanIslandMediaCandidates.json'
SITE='https://www.aman.com';S=requests.Session();S.headers.update({'User-Agent':'Mozilla/5.0 (Bosphoras Luxury Stays property research)'})
PAGES={'main':'/resorts/amanpulo','beach':'/resorts/amanpulo/accommodation/casitas/beach-pool-casita','tree':'/resorts/amanpulo/accommodation/casitas/treetop-pool-casita','villas':'/resorts/amanpulo/accommodation/villas','palawan':'/resorts/amanpulo/accommodation/villas/four-bedroom-palawan-villa'}
GROUPS=[
 ('beachpool','Amanpulo — Beach Pool Casita',[
 ('beach','Amanpulo beach pool casita at dusk','Beach Pool Casita · bassin à la tombée du jour','Beach Pool Casita · pool at dusk'),
 ('beach','Beach Pool Casita bedroom at Amanpulo','Beach Pool Casita · chambre donnant sur les tropiques','Beach Pool Casita · real bedroom'),
 ('beach','Beach Pool Casita at Amanpulo with thatched-roof pavilion','Beach Pool Casita · pavillon et terrasse','Beach Pool Casita · villa-style pavilion')]),
 ('treetoppool','Amanpulo — Treetop Pool Casita',[
 ('tree','Treetop pool casita with blue plunge pool','Treetop Pool · bassin dans les arbres','Treetop Pool · pool above the canopy'),
 ('tree','Spacious casita bedroom at Amanpulo','Treetop Pool · chambre et plafond en bois','Treetop Pool · real bedroom'),
 ('tree','Symmetrical spa bathroom at Amanpulo','Treetop Pool · salle de bains intérieure','Treetop Pool · original bathroom')]),
 ('grand','Amanpulo — Grand Beach Pool Casita',[
 ('main','Grand Beach Pool Casita with infinity pool','Grand Beach Pool · piscine privative et jungle','Grand Beach Pool · private pool beside palms'),
 ('main','Grand Beach Pool Casita bedroom','Grand Beach Pool · chambre officielle','Grand Beach Pool · genuine bedroom'),
 ('main','Grand Beach Pool Casita with wooden architecture','Grand Beach Pool · pavillon et vue océan','Grand Beach Pool · pavilion by the sea')]),
 ('villas','Amanpulo — Villas quatre chambres',[
 ('main','Villa pool terrace at Amanpulo','Villas Amanpulo · terrasse avec bassin, vue générique','Amanpulo Villas · representative pool terrace'),
 ('villas','Amanpulo villa terrace with daybed','Villas Amanpulo · salon extérieur représentatif','Amanpulo Villas · representative daybed terrace'),
 ('palawan','Four-bedroom villa interior','Villas quatre chambres · intérieur de catégorie villa','Four-bedroom villas · representative villa interior')])
]
SCENES=[
 ('scene-1','main','Turquoise waters glimpsed through dense tropical forest','Pamalican · mer turquoise et forêt dense','Pamalican · turquoise water through island trees'),
 ('scene-2','main','Aerial view of a solitary figure on a pristine white sand beach','Pamalican · plage de sable blanc vue du ciel','Pamalican · aerial white-sand beach'),
 ('scene-3','main','Tall palm tree rising above coastal vegetation','Palmiers et littoral de l’île au soir','Pamalican palms near sunset'),
 ('scene-4','main','Aerial view of Aman Spa nestled amongst tropical vegetation','Aman Spa · pavillons entourés de jungle','Aman Spa within tropical greenery'),
 ('scene-5','main',"Amanpulo's beachfront resort nestled between dense tropical forest",'Rivage de Pamalican entre forêt et lagon','Amanpulo forest meets the island lagoon'),
 ('scene-6','main','Aerial view of the floating Kawayan Bar','Kawayan Bar · restaurant flottant et lagon','Kawayan floating bar in the lagoon'),
 ('scene-7','main','Rocky islet with turquoise waters at Amanpulo','Petit îlot rocheux et eau cristalline','Rocky islet in Amanpulo waters'),
 ('scene-8','main','A wooden pavilion structure surrounded by dense tropical forest','Pavillon et paysage tropical de Pamalican','Island pavilion surrounded by nature'),
 ('scene-9','main','Surfer in wetsuit carrying white board on Amanpulo beach','Amanpulo · promenade de plage et activité nautique','Amanpulo beach with a surfer')
]
def get(url):
 r=S.get(url,timeout=40);r.raise_for_status();return r
CACHE={}
def page(key):
 if key not in CACHE:CACHE[key]=BeautifulSoup(get(urljoin(SITE,PAGES[key])).text,'html.parser')
 return CACHE[key]
def source_by_alt(pagekey,needle):
 candidates=[x for x in page(pagekey).find_all('img') if needle.lower() in (x.get('alt') or '').lower()]
 if len(candidates)!=1:raise RuntimeError('Ambiguous/missing Aman photo '+pagekey+' '+needle+': '+str(len(candidates)))
 im=candidates[0];pic=im.find_parent('picture')
 urls=[]
 if pic:
  for s in pic.find_all('source'):
   for item in (s.get('srcset') or '').split(','):
    link=item.strip().split(' ')[0]
    if link.startswith('/sites/default/files/'):urls.append(link)
 src=im.get('src','')
 if src.startswith('/sites/default/files/'):urls.append(src)
 urls=list(dict.fromkeys(urls))
 if not urls:raise RuntimeError('No Aman original publisher source '+needle)
 # Resort images use Drupal responsive styles. Prefer genuine desktop high-resolution
 # derivatives, preserving the original itok, not URL rewrites returning site HTML.
 def priority(u):
  styles=['full_size_extra_large_2x','full_size_extra_large','full_size_large_2x','full_size_large','central_carousel_large_2x','central_carousel_large','listing_teaser_large_2x','listing_teaser_large','property_nearby_extra_large','listing_teaser_small','central_carousel_small','full_size_small']
  match=re.search(r'/styles/([^/]+)/',u);val=match.group(1) if match else ''
  return styles.index(val) if val in styles else 90
 return sorted(urls,key=priority),im.get('alt',''),urljoin(SITE,PAGES[pagekey])
def save(links,path):
 errors=[]
 for link in links:
  try:
   u=urljoin(SITE,link)
   r=get(u);im=ImageOps.exif_transpose(Image.open(io.BytesIO(r.content)))
   if im.width<800 or im.height<450:raise ValueError('small '+str(im.size))
   if not .44<im.width/im.height<3.7:raise ValueError('wrong aspect '+str(im.size))
   original=list(im.size);im=im.convert('RGB');im.thumbnail((1650,1150),Image.Resampling.LANCZOS)
   path.parent.mkdir(parents=True,exist_ok=True);im.save(path,'WEBP',quality=81,method=5);b=path.read_bytes()
   if len(b)<18000:raise ValueError('compressed tiny '+str(len(b)))
   return u,dict(localPath='/'+str(path.relative_to(ROOT/'public')),sha256=hashlib.sha256(b).hexdigest(),bytes=len(b),originalSize=original,outputSize=list(im.size),imageTransformation='Aman official publisher responsive high-res source converted to local WebP preserving aspect')
  except Exception as e:errors.append(str(e)[:65])
 raise RuntimeError('No suitable source available: '+str(errors[:12]))
def rec(key,origin,phrase,fr,en,file,propKey=None,property=None):
 links,alt,pageurl=source_by_alt(origin,phrase)
 u,meta=save(links,file)
 res=dict(key=key,sourcePage=pageurl,downloadUrl=u,sourceAlt=alt,credit='Amanpulo · original Aman luxury-resort publisher; photographer not individually identified',license='Operator-attested photo-use permission, separate individual photographer-rights audit pending',licenseUrl=pageurl,rightsEvidenceType='operator_self_attestation',status='candidate_needs_visual_review',visuallyVerified=False,commercialRightsCleared=False,visualQaWarning='Pending manual photo QA and original photographer permission',frCaption=fr,enCaption=en,**meta)
 if propKey:res.update(propertyKey=propKey,property=property)
 else:res.update(place='Pamalican Island / Amanpulo, Philippines')
 return res
def main():
 hotel=[];scenes=[]
 for key,name,spec in GROUPS:
  for i,(from_,needle,fr,en) in enumerate(spec,1):
   hotel.append(rec('view-'+str(i),from_,needle,fr,en,OUT/key/f'view-{i}.webp',key,name))
   print('HOTEL_OK',key,i,flush=True)
 for key,from_,needle,fr,en in SCENES:
  scenes.append(rec(key,from_,needle,fr,en,OUT/'destination'/f'{key}.webp'))
  print('SCENE_OK',key,flush=True)
 all_=hotel+scenes
 if len(hotel)!=12 or len(scenes)!=9 or len(set(x['sha256'] for x in all_))!=21:raise RuntimeError('21 unique property and island photographs required')
 MAN.parent.mkdir(parents=True,exist_ok=True)
 MAN.write_text(json.dumps(dict(destination='pamalican-island',hotels=hotel,destinationScenes=scenes,downloadedHotelCandidates=12,downloadedDestinationCandidates=9,visuallyVerified=False,approvedForCommercialPublication=False,publicationBlockedReason='Official publisher images downloaded but final visual review and original-photographer licensing still needed',photoRightsBasis='Original Aman website; site-operator image use attested for private Preview only'),ensure_ascii=False,indent=2)+'\n')
 print('PAMALICAN_21_ORIGINAL_PHOTO_CANDIDATES',len(all_),flush=True)
if __name__=='__main__':main()
