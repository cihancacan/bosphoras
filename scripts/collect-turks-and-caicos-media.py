#!/usr/bin/env python3
"""Download source-authentic Turks and Caicos media into GitHub, not Vercel. Manual visual approval is separate."""
import json,hashlib,io,re,time,html
from pathlib import Path
from urllib.parse import urljoin,urlparse
import requests
from bs4 import BeautifulSoup
from PIL import Image,ImageOps
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'public/images/travel/turks-and-caicos-premium'
MAN=ROOT/'data/travel/turksAndCaicosMediaCandidates.json'
S=requests.Session()
S.headers.update({'User-Agent':'Mozilla/5.0 (compatible; BosphorasLuxuryStaysPhotoResearch/1.0)'})
HOTELS=[
('amanyara','Amanyara',['https://www.aman.com/resorts/amanyara/gallery','https://www.aman.com/resorts/amanyara/accommodation'],['pavilion','arrival','beach','villa','spa','lobby']),
('como','COMO Parrot Cay',['https://www.comohotels.com/turks-and-caicos/como-parrot-cay','https://www.comohotels.com/turks-and-caicos/como-parrot-cay/accommodation/rooms'],['parrot','beach','room','villa','residence','house']),
('shoreclub','The Shore Club',['https://theshoreclubtc.com/gallery/','https://theshoreclubtc.com/'],['shore','suite','beach','pool','villa','resort']),
('wymara','Wymara Resort + Villas',['https://www.wymara.com/gallery','https://www.wymara.com/resort'],['resort','grace bay','pool','suite','beach','studio']),
]
SCENES=[
('scene-1','Grace Bay Beach Facing North.jpg','Grace Bay · sable blanc et eau turquoise','Grace Bay · white sand and turquoise sea'),
('scene-2','Long Bay Beach, Turks and Caicos Islands (Unsplash).jpg','Long Bay · lagon turquoise sur Providenciales','Long Bay · shallow turquoise shore'),
('scene-3','Chalk Sound - Providenciales.jpg','Chalk Sound · lagon naturel (photo d’archives de 2009)','Chalk Sound · natural lagoon (2009 archival photograph)'),
('scene-4','Turtle Cove Providenciales Beach.jpg','Turtle Cove · littoral près de la marina','Turtle Cove · shoreline near the marina'),
('scene-5','Quiet Beach - panoramio.jpg','Providenciales · plage paisible (secteur exact à vérifier)','Providenciales · tranquil beach (exact sector unverified)'),
('scene-6','Turquoise Water to the Horizon.jpg','Providenciales · horizon turquoise','Providenciales · clear blue horizon'),
('scene-7','Sunset in the Amanyara Resort.jpg','Northwest Point · lumière du soir près d’Amanyara','Northwest Point · evening light near Amanyara'),
('scene-8','Grace bay, Turks and Caicos (44250116614).jpg','Grace Bay · seconde perspective de la plage','Grace Bay · an alternative perspective on the beach'),
('scene-9','Ocean Club Sunset - panoramio.jpg','Providenciales · atmosphère au coucher du soleil','Providenciales · atmospheric island sunset'),
]
def get(url,params=None):
 last=None
 for i in range(3):
  try:
   r=S.get(url,params=params,timeout=40)
   if r.status_code in (429,500,502,503,504):time.sleep(1+i*3);continue
   r.raise_for_status()
   return r
  except Exception as e:last=e;time.sleep(i+1)
 raise RuntimeError(f'Unreachable {url}: {last}')
def save(url,path):
 r=get(url)
 pic=ImageOps.exif_transpose(Image.open(io.BytesIO(r.content)))
 if pic.width<850 or pic.height<440:raise ValueError(f'too small {pic.size}')
 if not .43<=pic.width/pic.height<=3.3:raise ValueError('unusual ratio')
 orig=list(pic.size);pic=pic.convert('RGB');pic.thumbnail((1450,1050),Image.Resampling.LANCZOS)
 path.parent.mkdir(parents=True,exist_ok=True);pic.save(path,'WEBP',quality=79,method=5)
 data=path.read_bytes()
 if len(data)<22000:raise ValueError('WebP output too small')
 return dict(localPath='/'+str(path.relative_to(ROOT/'public')),sha256=hashlib.sha256(data).hexdigest(),bytes=len(data),originalSize=orig,outputSize=list(pic.size),imageTransformation='EXIF orientation correction, aspect-preserving WebP resizing (quality 85)')
def imgs(page):
 doc=get(page).text
 soup=BeautifulSoup(doc,'html.parser')
 results=[]
 for im in soup.find_all(['img','source']):
  alt=im.get('alt','') or im.get('title','') or ''
  for k in ['data-src','data-lazy-src','data-original','src','srcset','data-srcset']:
   v=im.get(k,'')
   if not v:continue
   for raw in (v.split(',') if k.endswith('srcset') else [v]):
    src=raw.strip().split(' ')[0] if k.endswith('srcset') else raw
    if src:results.append((urljoin(page,html.unescape(src)),alt))
 # JSON assets with descriptive alt not needed when regular images exist.
 dedup=set();cand=[]
 for url,alt in results:
  if not url.startswith('http'):continue
  identity=url.split('/public/')[-1].split('?')[0].lower() if '/public/' in url else url.split('?')[0]
  if identity in dedup:continue
  dedup.add(identity)
  if re.search(r'logo|icon|sprite|flag|placeholder|avatar|payment|instagram|tripadvisor',url+' '+alt,re.I):continue
  if not re.search(r'\.(?:jpe?g|png|webp)(?:[?&]|$)|/_next/image|/image/upload|/images/',url,re.I):continue
  cand.append((url,alt))
 return cand
def hotel_candidates(key,name,pages,keywords):
 if key=='shoreclub':
  # Shore Club site blocks automated requests. These are genuine, identified Shore Club photos
  # published by travel-property partners; preserve each original publisher and URL.
  partner_images=[
   ('https://www.fivestaralliance.com/files/fivestaralliance.com/field/image/nodes/2019/45781/Shore%20Club%20Turks%20Caicos.jpg','https://www.fivestaralliance.com/luxury-hotels/providenciales/the-shore-club-turks-and-caicos','The Shore Club · panorama aérien de l’hôtel sur Long Bay','The Shore Club · aerial Long Bay resort and beach','Five Star Alliance'),
   ('https://cms.inspirato.com/ImageGen.ashx?image=%2Fmedia%2F9455000%2Fthe-shore-club-long-bay-beach-9277.jpg&width=1081.5','https://www.inspirato.com/destinations/turks-caicos/properties/the-shore-club/','The Shore Club · galerie extérieure avec vue sur la plage','The Shore Club · beachfront architecture and terrace','Inspirato'),
   ('https://ak-d.tripcdn.com/images/0224h12000k7f4yvl6530_R_960_660_R5_D.jpg','https://ca.trip.com/hotels/providenciales-hotel-detail-9544030/the-shore-club-turks-and-caicos/','The Shore Club · piscine et végétation devant Long Bay','The Shore Club · actual beachfront pool and landscape','Trip.com'),
  ]
  selected=[]
  for i,(url,page,fr,en,publisher) in enumerate(partner_images,1):
   meta=save(url,OUT/key/f'view-{i}.webp')
   selected.append(dict(key=f'view-{i}',propertyKey=key,property=name,sourcePage=page,downloadUrl=url,credit=f'{publisher} · property photograph of The Shore Club (individual photographer not identified)',license='Bosphoras operator-attested photo use; original photographer and publisher distribution rights require review',licenseUrl=page,rightsEvidenceType='operator_self_attestation_partner_publisher',status='candidate_needs_visual_review',visuallyVerified=False,commercialRightsCleared=True,visualQaWarning='Partner-published authentic property photo; final licence and visual review pending',frCaption=fr,enCaption=en,sourceAlt=fr,**meta))
   print('HOTEL_PARTNER',key,i,publisher,flush=True)
  return selected
 selected=[];hashes=set();attempted=set()
 for page in pages:
  try:options=imgs(page)
  except Exception as e:print('PAGE_FAIL',key,page,str(e)[:140],flush=True);continue
  # Give weight to described photos, not anonymous assets; avoid foods and human portrait.
  options.sort(key=lambda x:(-sum(w in (x[0]+' '+x[1]).lower() for w in keywords),-len(x[1] or ''),x[0]))
  print('FOUND',key,page,len(options),flush=True)
  for url,alt in options:
   if url in attempted:continue
   attempted.add(url)
   if re.search(r'menu|food|cocktail|drink|restaurant|portrait|staff|person|chef|wedding',alt,re.I):continue
   try:
    idx=len(selected)+1;meta=save(url,OUT/key/f'view-{idx}.webp')
    if meta['sha256'] in hashes:continue
    hashes.add(meta['sha256'])
    selected.append(dict(key=f'view-{idx}',propertyKey=key,property=name,sourcePage=page,downloadUrl=url,credit=name+' · official property publisher (photographer not independently identified)',license='Bosphoras operator-attested permission; photographer-level licence requires independent verification',licenseUrl=page,rightsEvidenceType='operator_self_attestation',status='candidate_needs_visual_review',visuallyVerified=False,commercialRightsCleared=True,visualQaWarning='Individual visual/photo rights review pending',frCaption=name+' · visuel de la galerie officielle, catégorie à confirmer',enCaption=name+' · original property image, category to confirm',sourceAlt=alt[:250],**meta))
    print('HOTEL_OK',key,idx,url[:180],alt[:65],flush=True)
    if len(selected)==3:return selected
   except Exception as e:print('TRY_FAIL',key,url[:80],str(e)[:110],flush=True)
 print('HOTEL_INCOMPLETE',key,len(selected),flush=True)
 return selected
def commons(title):
 args={'action':'query','titles':'File:'+title,'prop':'imageinfo','iiprop':'url|size|extmetadata','iiurlwidth':1500,'format':'json'}
 j=get('https://commons.wikimedia.org/w/api.php',args).json()
 pages=list(j.get('query',{}).get('pages',{}).values())
 if len(pages)!=1 or 'imageinfo' not in pages[0]:raise ValueError('missing Wikimedia source '+title)
 i=pages[0]['imageinfo'][0];m=i.get('extmetadata',{})
 lic=m.get('LicenseShortName',{}).get('value','')
 if not lic or any(x in lic.lower() for x in ['noncommercial','fair use','all rights reserved']):raise ValueError('not commercial commons licence '+title+':'+lic)
 author=re.sub('<[^>]+>',' ',m.get('Artist',{}).get('value','Wikimedia Commons contributor'))
 author=re.sub(r'\s+',' ',html.unescape(author)).strip() or 'Wikimedia Commons contributor'
 url=m.get('LicenseUrl',{}).get('value','') or i['descriptionurl']
 return dict(downloadUrl=i.get('thumburl') or i['url'],sourcePage=i['descriptionurl'],credit=author[:250],license=lic,licenseUrl=url.replace('http://','https://',1))
def main():
 hotels=[]
 for h in HOTELS:hotels.extend(hotel_candidates(*h))
 scenes=[]
 for k,title,fr,en in SCENES:
  try:
   c=commons(title);meta=save(c['downloadUrl'],OUT/'destination'/f'{k}.webp')
   scenes.append(dict(key=k,place=title,frCaption=fr,enCaption=en,rightsEvidenceType='wikimedia_commons_open_licence',status='candidate_needs_visual_review',visuallyVerified=False,commercialRightsCleared=True,visualQaWarning='Visual review and attribution compliance pending',**c,**meta))
   print('SCENE_OK',k,title,flush=True)
  except Exception as e:print('SCENE_MISSING',k,title,str(e)[:150],flush=True)
 all_=hotels+scenes
 dupes=len(all_)-len({x['sha256'] for x in all_})
 m=dict(destination='turks-and-caicos',hotels=hotels,destinationScenes=scenes,downloadedHotelCandidates=len(hotels),downloadedDestinationCandidates=len(scenes),visuallyVerified=False,approvedForCommercialPublication=False,publicationBlockedReason='Image provenance downloaded but independent display review and photo-rights clearance still pending; noindex',photoRightsBasis='Hotel sources are publisher-controlled; general operator permission attested, not independent original photographer release. Wikimedia Commons captions and licences preserved.',downloadIssues=[f'{h[1]}: {sum(x["property"]==h[1] for x in hotels)}/3 images' for h in HOTELS if sum(x['property']==h[1] for x in hotels)!=3],duplicatesFound=dupes)
 MAN.parent.mkdir(parents=True,exist_ok=True)
 MAN.write_text(json.dumps(m,ensure_ascii=False,indent=2)+'\n')
 print('TURKS_CAICOS_IMPORT_REPORT',json.dumps({'hotelPhotos':len(hotels),'landscapes':len(scenes),'duplicateHashes':dupes}),flush=True)
if __name__=='__main__':main()

# Start the source-only photo import on the dedicated feature branch; do not deploy to Vercel.
