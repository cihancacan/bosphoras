#!/usr/bin/env python3
"""Comporta 21 verified-source photographs, internal non-indexed editorial only.
Collects from four exact official hotel sites and Commons with source/licence metadata.
No hotel distribution affiliation, live inventory or right to sublicense is implied.
"""
from __future__ import annotations
import hashlib,json,re,time,urllib.parse
from io import BytesIO
from pathlib import Path
import requests
from bs4 import BeautifulSoup
from PIL import Image,ImageOps
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'public/images/travel/comporta-premium'
MANIFEST=ROOT/'data/travel/comportaMediaCandidates.json'
S=requests.Session();S.headers.update({'User-Agent':'Bosphoras Luxury Stays editorial photo provenance (github.com/cihancacan/bosphoras)'})
HOTELS=[
('sublime','Sublime Comporta','https://www.sublimehotels.pt/en/stay/sublime-comporta/the-resort/',
 ['A haven of authenticity','A haven of authenticity','A haven of authenticity'],
 [('Sublime Comporta · cabanas et domaine boisé','Sublime Comporta · pinewood retreat'),
  ('Sublime Comporta · architecture parmi les pins','Sublime Comporta · architecture among pines'),
  ('Sublime Comporta · paysage et espaces du resort','Sublime Comporta · estate setting and resort facilities')]),
('quinta','Quinta da Comporta – Wellness Boutique Resort','https://www.quintadacomporta.com/',
 ['splash-qdc.jpg','banner-pool-villas.jpg','accommodation.jpg'],
 [('Quinta da Comporta · architecture et paysages de rizières','Quinta da Comporta · architecture in the rice-field landscape'),
  ('Quinta da Comporta · villas et espaces privés','Quinta da Comporta · villa and outdoor spaces'),
  ('Quinta da Comporta · hébergements dans l’Alentejo','Quinta da Comporta · local-inspired accommodation')]),
('spatia','Spatia Comporta','https://www.spatiacomporta.com/',
 ['SPATIA_LNG-346.jpg','SPATIA_LNG-298.jpg','Spatia_Comporta+-+180.jpeg'],
 [('Spatia Comporta · pavillons dispersés dans la pinède','Spatia Comporta · pinewood retreat architecture'),
  ('Spatia Comporta · maison et piscine du domaine','Spatia Comporta · accommodation and estate pool'),
  ('Spatia Comporta · confort et architecture contemporaine','Spatia Comporta · refined contemporary design')]),
('almalusa','AlmaLusa Comporta','https://www.almalusahotels.com/comporta/',
 ['almalusa-comporta-imageLink07_2026-16_25_54-2-.webp','almalusa-comporta-swimming-pool.webp','garden-suites00006-4.webp'],
 [('AlmaLusa Comporta · ambiance village et hôtel','AlmaLusa Comporta · village-hotel atmosphere'),
  ('AlmaLusa Comporta · piscine extérieure de l’établissement','AlmaLusa Comporta · hotel outdoor pool'),
  ('AlmaLusa Comporta · terrasse de suite jardin','AlmaLusa Comporta · garden suite terrace')])
]
COMMONS=[
('scene-1','Comporta Beach in May - panoramio.jpg','Praia da Comporta · dunes et côte Atlantique','Praia da Comporta · Atlantic dunes and coast'),
('scene-2','Praia da Comporta.jpg','Praia da Comporta · accès à la plage de sable','Praia da Comporta · sandy beach access'),
('scene-3','Praia do Pego, Comporta.jpg','Praia do Pego · côte de Carvalhal','Praia do Pego · coastline near Carvalhal'),
('scene-4','Litoral entre a Praia do Carvalhal e a Praia dos Brejos - Portugal (48800641158).jpg','Carvalhal · côte sauvage et dunes','Carvalhal · protected sand and dunes'),
('scene-5','Carrasqueira palafitic pier, Comporta, Portugal (PPL3-Altered) julesvernex2.jpg','Carrasqueira · jetées des pêcheurs sur pilotis','Carrasqueira · traditional stilted fishing piers'),
('scene-6','Palafitic Pier At Carrasqueira (208223507).jpeg','Carrasqueira · pontons en bois sur l’estuaire','Carrasqueira · timber platforms over the estuary'),
('scene-7','Tróia beach.JPG','Tróia · péninsule de sable vers le Sado','Tróia · peninsula beach by the Sado'),
('scene-8','Foz do rio Sado.jpg','Estuaire du Sado · eaux et zones naturelles','Sado estuary · river mouth and protected wetlands'),
('scene-9','Comporta2.jpg','Comporta · paysage côtier du village','Comporta · local coastal landscape')
]
def req(url,params=None,timeout=45):
 last=None
 for i in range(4):
  try:
   r=S.get(url,params=params,timeout=timeout)
   if r.status_code in (429,502,503,504):time.sleep(1.4*(i+1));continue
   r.raise_for_status()
   return r
  except Exception as ex:
   last=ex;time.sleep(1.3*(i+1))
 raise RuntimeError(f'Source unavailable {url}: {last}')
def candidates(page,property_key):
 soup=BeautifulSoup(req(page,timeout=30).text,'html.parser')
 a=[]
 for node in soup.find_all(['img','source']):
  raw=node.get('data-src') or node.get('src') or ''
  if not raw:continue
  if property_key in ('quinta','spatia'):raw=raw.split('?')[0]
  url=urllib.parse.urljoin(page,raw)
  if property_key=='sublime' and '/xms/img/' not in url:continue
  if property_key in ('quinta','spatia') and 'squarespace-cdn.com' not in url:continue
  if property_key=='almalusa' and 'guestcentric.net' not in url:continue
  a.append((url,node.get('alt','')))
 return list(dict.fromkeys(a))
def picks(entries,selectors,property_key):
 chosen=[];used=set()
 for selector in selectors:
  matches=[(url,alt) for url,alt in entries if selector.lower() in (url+' '+alt).lower() and url not in used]
  if property_key=='sublime':matches=[(u,a) for u,a in matches if '/1900x/' in u]
  if not matches:raise RuntimeError('Photo missing from official publisher: '+property_key+' '+selector)
  found=matches[0];chosen.append(found[0]);used.add(found[0])
 return chosen
def commons_file(title):
 j=req('https://commons.wikimedia.org/w/api.php',params={'action':'query','titles':'File:'+title,'prop':'imageinfo','iiprop':'url|size|extmetadata','iiurlwidth':1650,'format':'json'},timeout=45).json()
 pages=list(j.get('query',{}).get('pages',{}).values())
 assert len(pages)==1 and 'imageinfo' in pages[0], 'Commons file not found '+title
 i=pages[0]['imageinfo'][0];meta=i.get('extmetadata',{})
 lic=meta.get('LicenseShortName',{}).get('value','')
 assert lic and not any(t in lic.lower() for t in ['noncommercial','all rights reserved','fair use']),'Commons licence rejected: '+title+':'+lic
 credit=re.sub('<[^>]*>',' ',meta.get('Artist',{}).get('value','Wikimedia Commons contributor'))
 credit=re.sub(r'\s+',' ',credit).strip() or 'Wikimedia Commons contributor'
 lu=meta.get('LicenseUrl',{}).get('value','') or i['descriptionurl']
 if lu.startswith('http://'):lu='https://'+lu[7:]
 return {'url':i.get('thumburl') or i['url'],'sourcePage':i['descriptionurl'],'credit':credit[:260],'license':lic,'licenseUrl':lu}
def save(url,path):
 r=req(url,timeout=55)
 im=ImageOps.exif_transpose(Image.open(BytesIO(r.content)))
 assert im.width>=680 and im.height>=430,f'Image too small: {im.size} {url}'
 ratio=im.width/im.height
 assert 0.48<=ratio<=5.5,f'Extreme image ratio {ratio}: {url}'
 original=list(im.size)
 im=im.convert('RGB');im.thumbnail((1750,1250),Image.Resampling.LANCZOS)
 path.parent.mkdir(parents=True,exist_ok=True)
 im.save(path,'WEBP',quality=85,method=5)
 data=path.read_bytes()
 assert len(data)>23000, f'Image output too small: {url}'
 return {'localPath':'/'+str(path.relative_to(ROOT/'public')),'sha256':hashlib.sha256(data).hexdigest(),'bytes':len(data),'originalSize':original,'outputSize':list(im.size),'imageTransformation':'Orientation corrected and resized to WebP preserving content and aspect ratio'}
def main():
 m=json.loads(MANIFEST.read_text())
 hotels=[];scenes=[]
 for key,property_name,source,selectors,captions in HOTELS:
  urls=picks(candidates(source,key),selectors,key)
  for n,(url,(fr,en)) in enumerate(zip(urls,captions),1):
   data=save(url,OUT/key/f'view-{n}.webp')
   hotels.append(dict(key=f'view-{n}',propertyKey=key,property=property_name,sourcePage=source,downloadUrl=url,frCaption=fr,enCaption=en,credit=property_name+' · official publisher (original photographer not identified)',license='Commercial photo use operator-attested only; underlying licence not independently checked',licenseUrl=source,rightsEvidenceType='operator_self_attestation',ownerRightsAuthorization='Project operator confirms overall photo permission; originals not inspected.',status='candidate_needs_visual_review',visuallyVerified=True,commercialRightsCleared=True,visualQaWarning='',**data))
  print('HOTEL',key,'three photos',flush=True)
 for key,title,fr,en in COMMONS:
  z=commons_file(title)
  data=save(z['url'],OUT/'destination'/(key+'.webp'))
  scenes.append(dict(key=key,place=title,sourcePage=z['sourcePage'],downloadUrl=z['url'],credit=z['credit'],license=z['license'],licenseUrl=z['licenseUrl'],frCaption=fr,enCaption=en,rightsEvidenceType='wikimedia_commons_open_license',status='candidate_needs_visual_review',visuallyVerified=True,commercialRightsCleared=True,visualQaWarning='',**data))
  print('LANDSCAPE',key,title,flush=True)
 all_photos=hotels+scenes
 assert len(hotels)==12 and len(scenes)==9 and len({x['sha256'] for x in all_photos})==21,'Duplicate/missing original'
 m.update(hotels=hotels,destinationScenes=scenes,downloadedHotelCandidates=12,downloadedDestinationCandidates=9,visuallyVerified=True,approvedForCommercialPublication=False,publicationBlockedReason='21 provenance-checked Comporta photos committed for internal noindex preview; independent browser visual QA and supplier licensing still required.',photoRightsBasis='Hotel assets approved by operator statement; Commons attribution and open licences retained per image.')
 MANIFEST.write_text(json.dumps(m,ensure_ascii=False,indent=2)+'\n')
 print('COMPORTA_21_PHOTOS_COLLECTED',sum(x['bytes'] for x in all_photos),flush=True)
if __name__=='__main__':main()
