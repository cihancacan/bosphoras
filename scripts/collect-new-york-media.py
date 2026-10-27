#!/usr/bin/env python3
"""Bosphoras New York: official hotel publisher images + CC licensed city scenes.
Owner preview only. No third-party publisher licence or visual verification inferred.
Fail closed for missing attribution, duplicate files or fewer than 21 authentic images.
"""
from __future__ import annotations
import io, json, hashlib, re, time, html, urllib.parse
from pathlib import Path
import requests
from bs4 import BeautifulSoup
from PIL import Image, ImageOps, ImageStat

ROOT=Path('public/images/travel/new-york-premium')
MANIFEST=Path('data/travel/newYorkMediaCandidates.json')
SESSION=requests.Session()
SESSION.headers.update({'User-Agent':'BosphorasTravelMediaReview/1.0 (source-credit archival editorial research; admin@bosphoras.com)','Accept':'text/html,image/webp,image/avif,image/jpeg,image/png,*/*'})
COMMONS=[
 ('scene-1','The New York City Skyline at Dusk.jpg','Bruce Emmerling','CC BY-SA 4.0','Skyline de Midtown à l’heure bleue','Midtown Manhattan skyline at blue hour'),
 ('scene-2','The Lake and Central Park West skyline, Central Park, Manhattan, New York.jpg','Christian David','CC BY-SA 4.0','Le lac et les façades de Central Park West','Central Park lake and Upper West Side skyline'),
 ('scene-3','Flatiron Building, Fifth Avenue, Manhattan, New York.jpg','Christian David','CC BY-SA 4.0','Flatiron Building et horloge de Fifth Avenue','Flatiron Building and Fifth Avenue clock'),
 ('scene-4','Lower Manhattan Skyline June 2025.jpg','Kidfly182','CC BY 4.0','Les tours de Lower Manhattan vues de Brooklyn','Lower Manhattan skyline from Brooklyn Bridge Park'),
 ('scene-5','Tribeca Manhattan July 2026 24.jpg','Kidfly182','CC BY 4.0','Les rues de Tribeca, Manhattan','Tribeca streets, Manhattan'),
 ('scene-6','The Lake and skyline 20261002.jpg','VynedJ','CC BY-SA 4.0','Le lac de Central Park en automne','Central Park lake in autumn'),
 ('scene-7','New York skyline from Top of the Rock.jpg','Hugo Maestá','CC BY-SA 4.0','Les gratte-ciel de Manhattan vus du Top of the Rock','Manhattan skyline from Top of the Rock'),
 ('scene-8','Lower Manhattan Skyline 2024.jpg','Kidfly182','CC BY 4.0','Lower Manhattan et l’Hudson depuis Pier 57','Lower Manhattan from Pier 57'),
 ('scene-9','Upper East Side August 2026.jpg','Kidfly182','CC BY 4.0','L’Upper East Side, une rue résidentielle new-yorkaise','Residential street on the Upper East Side')
]
HOTELS=[
 ('aman','Aman New York',[
  'https://www.aman.com/hotels/aman-new-york/gallery',
  'https://www.aman.com/hotels/aman-new-york/accommodation/rooms-suites',
  'https://www.aman.com/hotels/aman-new-york'],{'aman.com','www.aman.com'}),
 ('fifth','The Fifth Avenue Hotel',[
  'https://www.thefifthavenuehotel.com/accommodations/rooms/',
  'https://www.thefifthavenuehotel.com/about/',
  'https://www.thefifthavenuehotel.com/'],{'thefifthavenuehotel.com','www.thefifthavenuehotel.com'}),
 ('greenwich','The Greenwich Hotel',[
  'https://www.thegreenwichhotel.com/',
  'https://www.thegreenwichhotel.com/shibui-spa/',
  'https://www.thegreenwichhotel.com/accommodations/'],{'thegreenwichhotel.com','www.thegreenwichhotel.com'}),
 ('lowell','The Lowell',[
  'https://www.lowellhotel.com/rooms-and-suites',
  'https://www.lowellhotel.com/specialty-suites/124-6/',
  'https://www.lowellhotel.com/',
  'https://www.lowellhotel.com/specialty-suites'],{'lowellhotel.com','www.lowellhotel.com'})
]
def get(url,timeout=25):
 err=None
 for attempt in range(3):
  try:
   r=SESSION.get(url,timeout=timeout,allow_redirects=True)
   r.raise_for_status()
   return r
  except requests.RequestException as e:
   err=e;time.sleep(1.5*(attempt+1))
 raise RuntimeError(f'fetch failed for {url}: {err}')
def save_webp(raw,output):
 im=Image.open(io.BytesIO(raw))
 im=ImageOps.exif_transpose(im).convert('RGB')
 width,height=im.size
 if width < 500 or height < 330:raise ValueError(f'too small {width}x{height}')
 im.thumbnail((1800,1400),Image.Resampling.LANCZOS)
 output.parent.mkdir(parents=True,exist_ok=True)
 im.save(output,'WEBP',quality=83,method=6)
 b=output.read_bytes()
 if len(b)<14000: raise ValueError('unexpectedly tiny webp')
 return {'originalSize':[width,height],'outputSize':list(im.size),'bytes':len(b),'sha256':hashlib.sha256(b).hexdigest()}
def commons_photo(item):
 key,name,author,license,fr,en=item
 page='https://commons.wikimedia.org/wiki/File:'+urllib.parse.quote(name.replace(' ','_'),safe='()_,.-')
 # MediaWiki imageinfo validates title, author, rights and full source URL.
 params={'action':'query','titles':'File:'+name,'prop':'imageinfo','iiprop':'url|extmetadata','iiurlwidth':'1600','format':'json'}
 api=get('https://commons.wikimedia.org/w/api.php?'+urllib.parse.urlencode(params)).json()
 values=list(api['query']['pages'].values())
 inf=(values[0].get('imageinfo') or [{}])[0]
 meta=inf.get('extmetadata') or {}
 lic=html.unescape(re.sub('<[^>]+>','',meta.get('LicenseShortName',{}).get('value','')))
 credited=html.unescape(re.sub('<[^>]+>','',meta.get('Artist',{}).get('value','')))
 if 'cc' not in lic.lower():raise ValueError('Commons licence not validated: '+name+' '+lic)
 url=inf.get('thumburl') or inf.get('url')
 if not url:raise ValueError('Commons source URL unavailable '+name)
 raw=get(url,40).content
 path=ROOT/'destination'/f'{key}.webp'
 details=save_webp(raw,path)
 return {**details,'key':key,'localPath':'/'+str(path).removeprefix('public/'),'sourcePage':page,'downloadUrl':url,
   'author':author,'credit':author,'commonsArtistMetadata':credited[:350],
   'license':lic,'licenseUrl':'https://creativecommons.org/licenses/by-sa/4.0/' if 'BY-SA' in lic.upper() else 'https://creativecommons.org/licenses/by/4.0/',
   'status':'source_identified_private_preview','visuallyVerified':False,'commercialRightsCleared':True,
   'rightsEvidenceType':'wikimedia_cc_attribution','frCaption':fr,'enCaption':en,
   'transformations':'EXIF orientation, 1800x1400 maximum, WebP 83'}
def image_candidates(page,soup):
 pairs=[]
 for tag in soup.find_all(['img','source','meta']):
  alt=(tag.get('alt') or tag.get('title') or tag.get('content') or '').strip()
  for key in ['src','data-src','data-srcset','srcset','data-original','data-lazy-src','data-image','content']:
   s=tag.get(key)
   if not s or not isinstance(s,str):continue
   if key in ('srcset','data-srcset'):
    s=s.split(',')[-1].strip().split(' ')[0]
   if not (s.startswith('http') or s.startswith('/') or s.startswith('//')):continue
   pairs.append((s,alt))
 # Media often lives in embedded Next.js JSON and CSS rather than in img tags.
 raw=html.unescape(str(soup))
 for s in re.findall(r'https?[^\s"<>\\]+?\.(?:jpg|jpeg|png|webp)(?:\?[^\s"<>\\]*)?',raw,re.I):
  pairs.append((s,'official property gallery'))
 distinct=set()
 for path,caption in pairs:
  if path.startswith('data:'):continue
  url=urllib.parse.urljoin(page,path)
  url=url.replace('\\u0026','&').replace('&amp;','&').replace('\\/','/')
  # Avoid external trackers, logos, thumbnails and data placeholders.
  low=url.lower()
  if any(word in low for word in ['logo','icon','favicon','sprite','pixel','tracking','flag.','avatar','badge','cookie','loader','placeholder','button','audioeye','conde_nast','award','forbes','travel-leisure','press-','trust','google','rating','preferred','unforgettable','_logo','seal','qr-code','2026-']):continue
  if not (any(x in low for x in ['jpg','jpeg','png','webp','image','photo','upload','cdn','media','assets'])):continue
  ident=re.sub(r'-\\d+x\\d+(?=\\.)','',re.sub(r'/styles/[^/]+/public/','/public/',url.split('?')[0],flags=re.I),flags=re.I)
  if ident in distinct:continue
  distinct.add(ident)
  yield (url,caption)
def hotel_photos(item):
 key,name,pages,hosts=item
 scores=[]
 for page in pages:
  try:
   r=get(page)
   soup=BeautifulSoup(r.text,'html.parser')
   n=0
   for url,alt in image_candidates(page,soup):
    host=urllib.parse.urlparse(url).hostname or ''
    if not (host.endswith(tuple(hosts)) or any(x in host for x in ['cloudinary','imgix','cloudfront','squarespace-cdn','cdn.sanity.io','webflow','wpengine','akamai','fastly','contentful','s3.amazonaws','digitaloceanspaces','cdn-website','drupal'])):
     continue
    low=(alt+' '+url).lower()
    # Favor genuine room / property / spa imagery from each hotel's official pages.
    score= 3*any(x in low for x in ['suite','room','hotel','lobby','bedroom','bed','pool','spa','interior','facade','terrace'])
    score+= 2*any(x in low for x in ['aman','fifth','greenwich','lowell'])
    score+= 2 if page==pages[0] else 0
    score-= 2 if any(x in low for x in ['food','drink','cocktail','restaurant','chef','map','amenities-icon']) else 0
    scores.append((score,url,alt,page))
    n+=1
   print(name,'candidate URLs',n,'from',page,flush=True)
  except Exception as e:print(name,'page skipped',page,str(e)[:160],flush=True)
 scores.sort(key=lambda x:-x[0])
 print(name,'top candidates:',[(a, u.split('/')[-1][:75]) for a,u,_,_ in scores[:14]],flush=True)
 rows=[];used=set();digest=set();fingerprints=[]
 for score,url,alt,page in scores:
  if len(rows)>=3:break
  clean=re.sub(r'-\\d+x\\d+(?=\\.)','',re.sub(r'/styles/[^/]+/public/','/public/',url.split('?')[0],flags=re.I),flags=re.I)
  if clean in used:continue
  used.add(clean)
  try:
   raw=get(url,35).content
   picture=Image.open(io.BytesIO(raw))
   if picture.width<700 or picture.height<460:continue
   if any(t in url.lower() for t in ['audioeye','conde_nast','award','trust','badge','hotel.jpg','hotel.png']):continue
   gray=picture.convert('L').resize((9,8),Image.Resampling.LANCZOS)
   bits=0
   pix=list(gray.getdata())
   for yy in range(8):
    for xx in range(8):bits=(bits<<1)|int(pix[yy*9+xx]>pix[yy*9+xx+1])
   if any((bits^old).bit_count()<12 for old in fingerprints):continue
   # Pillow pixel estimate avoids empty placeholder and monochrome assets.
   picture.thumbnail((130,130))
   if sum(ImageStat.Stat(picture.convert('RGB')).stddev)/3 < 12:continue
   candidate=ROOT/key/f'view-{len(rows)+1}.webp'
   info=save_webp(raw,candidate)
   if info['sha256'] in digest:continue
   digest.add(info['sha256']);fingerprints.append(bits)
   rows.append({**info,'key':f'view-{len(rows)+1}','propertyKey':key,'property':name,
    'localPath':'/'+str(candidate).removeprefix('public/'),'sourcePage':page,'downloadUrl':url,'credit':name+' — publisher-owned photography, creator licence unverified',
    'license':'Operator website photograph. Private preview only; commercial reuse rights not independently cleared.',
    'licenseUrl':page,'rightsEvidenceType':'operator_publisher_not_commercially_cleared','commercialRightsCleared':False,
    'status':'source_identified_private_preview','visuallyVerified':False,'visualQaWarning':'Individual human photo/room identity and publication rights review outstanding',
    'frCaption':name+' · photographie de la galerie officielle à confirmer visuellement',
    'enCaption':name+' · official property imagery pending individual visual review','originalAlt':alt[:250]})
  except Exception as e:print(name,'rejected candidate',str(e)[:130],flush=True)
 print(name,'downloaded',len(rows),'of 3',flush=True)
 return rows

def main():
 scenes=[];hotels=[]
 for row in COMMONS:
  try:
   out=commons_photo(row)
   scenes.append(out)
   print('Commons OK',row[0],out['bytes'],flush=True)
  except Exception as e:print('Commons FAILED',row[1],str(e)[:200],flush=True)
 for h in HOTELS:hotels.extend(hotel_photos(h))
 manifest={'destination':'new-york','scope':'owner-only private Preview; do not index',
  'note':'Real operator-published hotel pictures; not proof of photo reuse licence nor property/room visual QA. Commons images carry CC attribution/share-alike as listed.',
  'hotelCount':len(hotels),'cityCount':len(scenes),'hotels':hotels,'destinationScenes':scenes}
 MANIFEST.parent.mkdir(parents=True,exist_ok=True)
 MANIFEST.write_text(json.dumps(manifest,indent=2,ensure_ascii=False)+'\n',encoding='utf-8')
 if len(scenes)!=9 or len(hotels)!=12:raise SystemExit(f'NOT READY: {len(scenes)}/9 local scenes; {len(hotels)}/12 hotel views. Inspect manifest and retune selectors.')
 print('PASSED 21 PHOTO SOURCES; NOT VISUALLY OR COMMERCIAL RIGHTS APPROVED',flush=True)

if __name__=='__main__':main()
