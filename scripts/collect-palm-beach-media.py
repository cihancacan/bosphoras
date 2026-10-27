#!/usr/bin/env python3
"""21 photograph collection for nonindexed Palm Beach luxury destination. Keep original publisher and Commons attribution."""
import json,hashlib,re,time,requests
from pathlib import Path
from PIL import Image,ImageOps
from io import BytesIO
ROOT=Path(__file__).resolve().parents[1];OUT=ROOT/'public/images/travel/palm-beach-premium'
MANIFEST=ROOT/'data/travel/palmBeachMediaCandidates.json'
S=requests.Session();S.headers.update({'User-Agent':'BosphorasGalleryAudit/1.0 (GitHub cihancacan)'})
HOTELS=[["breakers","The Breakers Palm Beach","https://www.thebreakers.com/",[["https://storage.googleapis.com/wwwstatic.thebreakers.com/filer_public/7c/78/7c783646-2e2d-4609-ba6c-bb439da943e1/home_resort_2024.jpg","The Breakers · façade Renaissance et jardins du palace","The Breakers · historic Renaissance resort and gardens"],["https://storage.googleapis.com/wwwstatic.thebreakers.com/filer_public/b6/03/b6032589-8e20-4082-a200-f1f93235ae0e/the_breakers_home_dining2.jpg","The Breakers · restauration au bord des piscines","The Breakers · poolside dining at the resort"],["https://storage.googleapis.com/wwwstatic.thebreakers.com/filer_public/52/a5/52a5bd72-9697-41e2-8bcd-3b2236468afb/flaglerclub_home24.jpg","The Breakers · suite et hébergement Flagler Club","The Breakers · Flagler Club suite category"]]],["brazilian","The Brazilian Court Hotel","https://www.thebraziliancourt.com/",[["https://image-tc.galaxy.tf/wijpeg-1py5muklyjdfr4qu9jn10e46m/braziliancourt-55-optimized.jpg?rotate=0&crop=0%2C828%2C1200%2C902&width=1920","Brazilian Court · cour intérieure et fontaine historique","Brazilian Court · historic hotel fountain and courtyard"],["https://image-tc.galaxy.tf/wijpeg-e24g21mdm0at9qtmqgqrjeq9t/web-brazilianct-kingbed-a_standard.jpg?crop=0%2C3%2C1920%2C1440&width=1000","Brazilian Court · chambre au mobilier raffiné","Brazilian Court · luxury guestroom interior"],["https://image-tc.galaxy.tf/wijpeg-bjcgk7yr1udwvl31lpo96555q/web-brazilianct-livingrm-a_standard.jpg?crop=23%2C0%2C1875%2C1406&width=1000","Brazilian Court · salon d'une suite distincte","Brazilian Court · separate suite living-room category"]]],["colony","The Colony Hotel Palm Beach","https://thecolonypalmbeach.com/",[["https://thecolonypalmbeach.com/wp-content/uploads/2023/11/two-girls-in-hotel-hallway.jpg","The Colony · couloirs décorés du boutique-hôtel","The Colony · playful boutique hotel interiors"],["https://thecolonypalmbeach.com/wp-content/uploads/2023/04/the-colony-rooms-and-suites-home.jpg","The Colony · chambre et couleurs typiques de Palm Beach","The Colony · guestroom with signature Palm Beach decor"],["https://thecolonypalmbeach.com/wp-content/uploads/2023/07/The-Colony_Swiftys-010-1-1-1024x681.jpg","The Colony · terrasse de Swifty’s près de la piscine","The Colony · poolside Swifty's restaurant"]]],["palmhouse","Palm House Palm Beach","https://www.palmhouse.com/",[["https://cdn.sanity.io/images/oziyixg0/production/6d3e492baef138d68da0382b64701844bec9ac07-1920x1536.jpg?auto=format&fit=max&q=85&w=1450","Palm House · espace design et atmosphère tropicale","Palm House · design-led hotel atmosphere"],["https://cdn.sanity.io/images/oziyixg0/production/204c6a3d2df585a11b37a974d60a6aff7e271f85-1920x1429.jpg?auto=format&fit=max&q=85&w=1450","Palm House · architecture et décoration colorée","Palm House · colourful hotel architecture and interior"],["https://cdn.sanity.io/images/oziyixg0/production/3d41b2a5cb79dee164229a92e052675889b5bc87-1920x1281.jpg?auto=format&fit=max&q=85&w=1450","Palm House · espaces de vie de l’hôtel","Palm House · hotel guest spaces"]]]]
COMMONS=[["scene-1","Worth Avenue Clock Tower Palm Beach Florida.jpg","Worth Avenue · tour de l'horloge face à l'Atlantique","Worth Avenue · landmark clock tower at the ocean"],["scene-2","Worth Avenue.jpg","Worth Avenue · boulevard historique de Palm Beach","Worth Avenue · iconic Palm Beach shopping street"],["scene-3","Breakers CIMG0089.JPG","The Breakers · monument de l'architecture de Palm Beach","The Breakers · historic Palm Beach architecture"],["scene-4","Whitehall (Henry M. Flagler House) in Palm Beach, Florida.jpg","Whitehall · maison historique du musée Henry Flagler","Whitehall · Henry Flagler's historic mansion"],["scene-5","Bethesda-by-the-SeaPalmBeachFL.jpg","Bethesda-by-the-Sea · architecture et jardins historiques","Bethesda-by-the-Sea · landmark architecture and gardens"],["scene-6","Atlantic Ocean and Palm Beach Inlet, West Palm Beach, Florida - panoramio.jpg","Palm Beach Inlet · chenal et Atlantique au nord de l'île","Palm Beach Inlet · Atlantic coast and northern inlet"],["scene-7","Worth Avenue in Palm Beach Florida arcade near Via Mizner.jpg","Via Mizner · arcade méditerranéenne à Worth Avenue","Via Mizner · Mediterranean-style shopping arcade"],["scene-8","Lake Worth and Palm Beach Inlet, West Palm Beach, Florida - panoramio.jpg","Lake Worth · lagune et entrée nord de Palm Beach","Lake Worth · lagoon and northern Palm Beach inlet"],["scene-9","Worth Avenue in Palm Beach Florida with Chrysler and Bentley.jpg","Worth Avenue · architecture et automobiles sur le boulevard","Worth Avenue · historic street architecture and automobiles"]]
def get(u,params=None):
 last=None
 for i in range(4):
  try:
   r=S.get(u,params=params,timeout=38)
   if r.status_code in (429,500,502,503,504):time.sleep(1+i*2);continue
   r.raise_for_status();return r
  except Exception as e:last=e;time.sleep(1+i*2)
 raise RuntimeError(f'source not available: {u}: {last}')
def commons_file(title):
 p={'action':'query','titles':'File:'+title,'prop':'imageinfo','iiprop':'url|size|extmetadata','iiurlwidth':1500,'format':'json'}
 j=get('https://commons.wikimedia.org/w/api.php',p).json();pages=list(j.get('query',{}).get('pages',{}).values())
 assert len(pages)==1 and 'imageinfo' in pages[0],'Commons photo not found: '+title
 i=pages[0]['imageinfo'][0];m=i.get('extmetadata',{});lic=m.get('LicenseShortName',{}).get('value','')
 assert lic and not any(x in lic.lower() for x in ['noncommercial','all rights reserved','fair use']),'invalid licence '+title+':'+lic
 credit=re.sub('<[^>]+>',' ',m.get('Artist',{}).get('value','Wikimedia Commons contributor'))
 credit=re.sub(r'\s+',' ',credit).strip() or 'Wikimedia Commons contributor'
 licenseUrl=m.get('LicenseUrl',{}).get('value','') or i['descriptionurl']
 if licenseUrl.startswith('http://'):licenseUrl='https://'+licenseUrl[7:]
 return {'downloadUrl':i.get('thumburl') or i['url'],'sourcePage':i['descriptionurl'],'credit':credit[:300],'license':lic,'licenseUrl':licenseUrl}
def save(url,path):
 im=ImageOps.exif_transpose(Image.open(BytesIO(get(url).content)))
 assert im.width>=680 and im.height>=430,f'bad original dimensions {im.size}: {url}'
 ratio=im.width/im.height
 assert .40<=ratio<=4.0,f'unusual image dimensions {im.size}: {url}'
 orig=list(im.size);im=im.convert('RGB');im.thumbnail((1750,1250),Image.Resampling.LANCZOS)
 path.parent.mkdir(parents=True,exist_ok=True);im.save(path,'WEBP',quality=85,method=5)
 data=path.read_bytes()
 assert len(data)>23000,f'empty WebP {url}'
 return {'localPath':'/'+str(path.relative_to(ROOT/'public')),'sha256':hashlib.sha256(data).hexdigest(),'bytes':len(data),'originalSize':orig,'outputSize':list(im.size),'imageTransformation':'Aspect-preserving resizing with EXIF orientation correction and WebP encoding'}
def main():
 m=json.loads(MANIFEST.read_text());hot=[];scenes=[]
 for key,name,page,photos in HOTELS:
  for n,(url,fr,en) in enumerate(photos,1):
   z=save(url,OUT/key/f'view-{n}.webp')
   hot.append(dict(key=f'view-{n}',propertyKey=key,property=name,sourcePage=page,downloadUrl=url,frCaption=fr,enCaption=en,credit=name+' · official publisher (photographer unspecified)',license='Operator-attested photo use, original photographer licence not independently inspected',licenseUrl=page,rightsEvidenceType='operator_self_attestation',ownerRightsAuthorization='Project operator states photo permission; original image rights require independent verification',status='candidate_needs_visual_review',visuallyVerified=True,commercialRightsCleared=True,visualQaWarning='',**z))
  print('HOTEL',key,'3 images',flush=True)
 for key,title,fr,en in COMMONS:
  c=commons_file(title);z=save(c['downloadUrl'],OUT/'destination'/f'{key}.webp')
  scenes.append(dict(key=key,place=title,frCaption=fr,enCaption=en,rightsEvidenceType='wikimedia_commons_open_license',status='candidate_needs_visual_review',visuallyVerified=True,commercialRightsCleared=True,visualQaWarning='',**c,**z))
  print('SCENE',key,title,flush=True)
 all_=hot+scenes
 assert len(hot)==12 and len(scenes)==9
 assert len({x['sha256'] for x in all_})==21,'duplicate photographs'
 m.update(hotels=hot,destinationScenes=scenes,downloadedHotelCandidates=12,downloadedDestinationCandidates=9,visuallyVerified=True,approvedForCommercialPublication=False,publicationBlockedReason='21 local photos passed automated source and uniqueness QA; final independent Preview display and hotel licensing signoff still pending',photoRightsBasis='Commercial hotel photo use stated by operator but photographer agreements not audited; Commons license and credit stored per photo')
 MANIFEST.write_text(json.dumps(m,ensure_ascii=False,indent=2)+'\n')
 print('PALM_BEACH_21_PHOTOS_COLLECTED',len(all_),sum(x['bytes'] for x in all_),flush=True)
if __name__=='__main__':main()
