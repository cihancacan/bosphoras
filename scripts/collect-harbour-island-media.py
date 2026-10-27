#!/usr/bin/env python3
"""21 photograph collection for nonindexed Harbour Island luxury destination. Keep original publisher and Commons attribution."""
import json,hashlib,re,time,requests
from pathlib import Path
from PIL import Image,ImageOps
from io import BytesIO
ROOT=Path(__file__).resolve().parents[1];OUT=ROOT/'public/images/travel/harbour-island-premium'
MANIFEST=ROOT/'data/travel/harbourIslandMediaCandidates.json'
S=requests.Session();S.headers.update({'User-Agent':'Googlebot'})
HOTELS=[["dunmore","The Dunmore","https://www.dunmorebeach.com/",[["https://www.dunmorebeach.com/wp-content/uploads/2025/11/Dunmore-Beach-Club-080-1536x1024.jpg","The Dunmore · architecture du Clubhouse sur la plage","The Dunmore · beachfront Clubhouse architecture"],["https://www.dunmorebeach.com/wp-content/uploads/2026/04/IMG_8366-1152x1536.jpg","The Dunmore · maison et espaces communs de la propriété","The Dunmore · property architecture and living spaces"],["https://www.dunmorebeach.com/wp-content/uploads/2026/04/A266297A-8743-4F00-9220-25149B5B8DCD-1152x1536.jpg","The Dunmore · intérieur au caractère rétro-chic","The Dunmore · vintage-inspired hotel interior"]]],["coral","Coral Sands Inn & Cottages","https://www.coralsands.com/",[["https://coralsandsapi.kinsta.cloud/wp-content/uploads/2026/03/entry_dec_25.jpg","Coral Sands · entrée et jardin de l'établissement","Coral Sands · hotel entrance and garden"],["https://coralsandsapi.kinsta.cloud/wp-content/uploads/2026/03/pool_dec_25.jpg","Coral Sands · piscine bordée de palmiers","Coral Sands · palm-framed swimming pool"],["https://coralsandsapi.kinsta.cloud/wp-content/uploads/2026/03/sea_suite_deluxe_home.jpg","Coral Sands · suite de catégorie Sea Suite, vue spécifique","Coral Sands · Sea Suite guestroom category"]]],["pinksands","Pink Sands Resort","https://pinksandsresort.com/",[["https://pinksandsresort.com/wp-content/themes/pinksands/assets/images/hero_home.jpg","Pink Sands Resort · littoral et jardin du resort","Pink Sands Resort · beach resort and lush garden"],["https://pinksandsresort.com/wp-content/themes/pinksands/assets/images/stay-img1-new.jpg","Pink Sands Resort · cottage de la collection du resort","Pink Sands Resort · individual cottage accommodation"],["https://pinksandsresort.com/wp-content/themes/pinksands/assets/images/stay-img2-new.jpg","Pink Sands Resort · seconde catégorie d'hébergement","Pink Sands Resort · different accommodation category"]]],["landing","The Landing","https://harbourislandlanding.com/",[["https://harbourislandlanding.com/wp-content/uploads/2016/03/MG_8440.jpg","The Landing · demeure historique et jardin de Dunmore Town","The Landing · historic guesthouse and garden"],["https://harbourislandlanding.com/wp-content/uploads/2016/04/IMG_0894-1.jpg","The Landing · chambre coloniale à baldaquin, catégorie précise","The Landing · colonial four-poster room category"],["https://harbourislandlanding.com/wp-content/uploads/2016/04/IMG_0887-1.jpg","The Landing · chambre aux décors inspirés par India Hicks","The Landing · India Hicks-inspired guestroom"]]]]
COMMONS=[["scene-1","Pink Sands Beach, Harbour Island, Bahamas (5279465868).jpg","Pink Sands Beach · sable naturellement rosé et Atlantique","Pink Sands Beach · blush-tinted Atlantic sand"],["scene-2","Bahamas 1989 (336) Eleuthera Dunmore Town, Harbour Island (24237453931).jpg","Dunmore Town · architecture et rue historique (archive de 1989)","Dunmore Town · period streetscape (1989 archival photo)"],["scene-3","Pink Sands Beach, Harbour Island (4236832563).jpg","Harbour Island · promenade le long de la plage rose","Harbour Island · walking by Pink Sands Beach"],["scene-4","Bahamas 1989 (342) Eleuthera Harbour Island (24320422055).jpg","Harbour Island · front de port (photographie d'archives 1989)","Harbour Island · historic harbour view (1989 photo)"],["scene-5","Sunrise at Pink Sands, Harbour Island (4236832127).jpg","Pink Sands Beach · plage à la lumière du matin","Pink Sands Beach · shoreline in morning light"],["scene-6","Bahamas 1989 (339) Eleuthera Dunmore Town, Harbour Island (24293986816).jpg","Dunmore Town · maison de style bahamien (archive historique)","Dunmore Town · heritage cottage (historical photo)"],["scene-7","Pink Sands Beach - panoramio.jpg","Harbour Island · eaux turquoise et plage de sable fin","Harbour Island · turquoise sea and pink sands"],["scene-8","Bahamas 1989 (343) Eleuthera Harbour Island (24211710172).jpg","Harbour Island · littoral et embarcadère (archive historique 1989)","Harbour Island · waterside scene (1989 archival view)"],["scene-9","Stunning Scene At Harbour Island Eleuthera Bahamas Imran (55954984).jpeg","Harbour Island · paysage naturel à l'horizon","Harbour Island · natural coastal landscape"]]
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
 print('HARBOUR_ISLAND_21_PHOTOS_COLLECTED',len(all_),sum(x['bytes'] for x in all_),flush=True)
if __name__=='__main__':main()
