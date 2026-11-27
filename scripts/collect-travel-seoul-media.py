#!/usr/bin/env python3
"""Collect official-publisher photo CANDIDATES only; no final guide registration.
Owner states permission to use photos. Independently verify identity and credits before release.
"""
import hashlib, html, io, json, re, threading
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
from urllib.parse import urljoin, urlparse, unquote
import requests
from bs4 import BeautifulSoup
from PIL import Image, ImageOps, ImageStat, ImageDraw

Image.MAX_IMAGE_PIXELS=75_000_000
CONFIG=json.loads(Path('data/travel/seoulMediaSources.json').read_text())
ROOT=Path('public/images/travel')
REPORT=Path('data/travel/seoulMediaCandidates.json')
THREAD=threading.local()
BAD=re.compile(r'logo|favicon|sprite|placeholder|avatar|cookie|badge|award|tracking|qr.code|icon|map[._/-]|banner.ad|newsletter|social.share|\.svg|\.gif|\.pdf|\.mp4',re.I)
ROOM=re.compile(r'bedroom|guest.?room|suite|king.?room|deluxe|premier|accommodation|chambre|habita|camera|zimmer',re.I)
EXTERIOR=re.compile(r'exterior|facade|façade|aerial|arrival|entrance|building|front.?view|panorama|hotel.?view',re.I)
FACILITY=re.compile(r'pool|spa|lobby|terrace|garden|lounge|courtyard|conservatory|piscin',re.I)
OTHER=re.compile(r'chef|cocktail|menu|dish|food|wine|drink|burger|snack|ice.?cream|popsicle|paleta|toiletries|amenities bottles|bvlgari amenities|wedding|meeting|conference|portrait|staff|person|model|gift|brochure|floor.?plan|render|illustration|virtual.?tour|360.?tour|video',re.I)
CDN=('cloudinary.com','imgix.net','cloudfront.net','akamaihd.net','contentful.com','ctfassets.net','s3.amazonaws.com','scene7.com','adobeaemcloud.com','simpleviewinc.com','simpleviewcms.com','simpleviewcdn.com','sanity.io','squarespace-cdn.com','wixstatic.com','webflow.com','cdn-website.com','imgix.com','fastly.net','azureedge.net','sitecorecontenthub.cloud','digitaloceanspaces.com')
def get(url, limit=24_000_000):
 if urlparse(url).scheme!='https': raise ValueError('not HTTPS')
 if not hasattr(THREAD,'session'):
  THREAD.session=requests.Session()
  THREAD.session.headers.update({'User-Agent':'BosphorasTravelMediaReview/1.0 (official publisher photo sourcing)','Accept':'text/html,application/xhtml+xml,image/avif,image/webp,image/jpeg,image/png,*/*'})
 with THREAD.session.get(url,timeout=(8,16),stream=True) as r:
  r.raise_for_status()
  if urlparse(r.url).scheme!='https':raise ValueError('insecure redirect')
  chunks=[];n=0
  for part in r.iter_content(65536):
   n+=len(part)
   if n>limit: raise ValueError('response too large')
   chunks.append(part)
  return r.url,b''.join(chunks)
def hostmatch(host,root):
 return host==root or host.endswith('.'+root)
def domain(url):
 host=urlparse(url).hostname or ''
 return host.removeprefix('www.')
def publisher_cdn(host,pagehost):
 return ((hostmatch(pagehost,'loewshotels.com') and hostmatch(host,'loewshotels.com')) or (hostmatch(pagehost,'fourseasons.com') and hostmatch(host,'fourseasons.com')) or (hostmatch(pagehost,'ritzcarlton.com') and hostmatch(host,'marriott.com')) or (hostmatch(pagehost,'hilton.com') and hostmatch(host,'hilton.com')) or (hostmatch(pagehost,'visitbritain.com') and host=='dam-cdn.vb0.orangelogic.com') or
         (hostmatch(pagehost,'thesavoylondon.com') and hostmatch(host,'website-files.com')))
def srcset_urls(value):
 # A published CDN URL may contain commas inside transformation parameters.
 # Split only after a width/density descriptor, not inside the URL.
 return [part.strip().split()[0] for part in re.split(r'\s+\d+(?:\.\d+)?[wx]\s*,\s*',value) if part.strip()]
def collect_pages(pages):
 result=[];errors=[];seen=set()
 for page in pages:
  try:
   final,raw=get(page,12_000_000)
   soup=BeautifulSoup(raw,'html.parser'); pairs=[]
   for tag in soup.find_all(['img','source','meta','a']):
    if tag.name=='meta' and tag.get('property') not in ('og:image','og:image:secure_url') and tag.get('name')!='twitter:image':continue
    alt=tag.get('alt') or tag.get('title') or (tag.get_text(' ',strip=True)[:300] if tag.name=='a' else '')
    parent=tag.find_parent('figure')
    cap=parent.find('figcaption') if parent else None
    credit=cap.get_text(' ',strip=True)[:350] if cap else ''
    if not alt and tag.parent:
     alt=tag.parent.get('aria-label') or tag.parent.get('title') or ''
    if tag.name=='source' and tag.parent:
     img=tag.parent.find('img');alt=alt or (img.get('alt','') if img else '')
    for attr in ('src','data-src','data-lazy-src','data-original','data-image','data-url','data-full','data-large','data-lazy','data-background','data-original-src','data-fullsize','href','srcset','data-srcset','content'):
     value=tag.get(attr)
     if not isinstance(value,str):continue
     if 'srcset' in attr:
      variants=srcset_urls(value)
      value=variants[-1] if variants else ''
     pairs.append((value,alt,credit))
   rawtext=html.unescape(raw.decode('utf-8','replace')).replace('\\/','/').replace('\\u0026','&')
   for url in re.findall(r'https?://[^\s"<>\\]+?\.(?:jpe?g|webp|png|avif)(?:\?[^\s"<>\\]*)?',rawtext,re.I):
    pairs.append((url,'',''))
   for path,alt,credit in pairs:
    if not isinstance(path,str):continue
    if not path or path.startswith(('data:','javascript:','#')):continue
    path=html.unescape(path)
    # Simpleview publishes transformation-relative paths that belong to its image CDN.
    if re.match(r'^(?:[a-z]_[^/]+/)+v1/clients/',path) and (hostmatch(domain(final),'visitlasvegas.com') or hostmatch(domain(final),'visitorlando.com')):
     path='https://assets.simpleviewcms.com/simpleview/image/upload/'+path
    u=urljoin(final,('/'+path if hostmatch(domain(final),'theruma.com') and path.startswith('file/') else path));u=u.replace(' ','%20')
    h=domain(u); pagehost=domain(final)
    if not (hostmatch(h,pagehost) or hostmatch(pagehost,h) or any(hostmatch(h,c) for c in CDN) or publisher_cdn(h,pagehost) or h.split('.')[-2:]==pagehost.split('.')[-2:]):continue
    if BAD.search(u+' '+alt) or not (publisher_cdn(h,pagehost) or re.search(r'jpe?g|webp|png|avif|image|media|photo|asset|/img/',u,re.I)):continue
    identity=re.sub(r'[-_]\d{2,4}x\d{2,4}(?=\.)','',u.split('?')[0],flags=re.I)
    if identity in seen:continue
    seen.add(identity)
    result.append({'url':u,'sourcePage':final,'originalAlt':str(alt)[:350],'originalCaption':credit})
   print('SOURCE',page,'candidates',len(result),flush=True)
  except Exception as e:
   errors.append({'page':page,'error':str(e)[:300]});print('PAGE_GAP',page,str(e)[:200],flush=True)
 return result,errors
DIRECT = {
  "seoul/city": [
    [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Front_view_of_the_Imperial_Throne_Hall_Geunjeongjeon_at_Gyeongbokgung_Palace_with_blue_sky_in_Seoul.jpg",
      "Gyeongbokgung Palace throne hall",
      "https://commons.wikimedia.org/wiki/File:Front_view_of_the_Imperial_Throne_Hall_Geunjeongjeon_at_Gyeongbokgung_Palace_with_blue_sky_in_Seoul.jpg",
      "Basile Morin / licence to verify against file page"
    ],
    [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Bukchon-ro_11-gil_street_with_hanok_houses_and_blue_sky_in_Bukchon_Hanok_Village_Seoul.jpg",
      "Bukchon Hanok Village street",
      "https://commons.wikimedia.org/wiki/File:Bukchon-ro_11-gil_street_with_hanok_houses_and_blue_sky_in_Bukchon_Hanok_Village_Seoul.jpg",
      "Basile Morin / licence to verify against file page"
    ],
    [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Streets_in_Myeong-dong_Seoul.jpg",
      "Myeongdong shopping street",
      "https://commons.wikimedia.org/wiki/File:Streets_in_Myeong-dong_Seoul.jpg",
      "Dquai / licence to verify against file page"
    ],
    [
      "https://commons.wikimedia.org/wiki/Special:FilePath/N_Seoul_Tower_view_1.jpg",
      "N Seoul Tower view of Seoul city panorama",
      "https://commons.wikimedia.org/wiki/File:N_Seoul_Tower_view_1.jpg",
      "Wikimedia Commons author pending confirmation / licence to verify against file page"
    ],
    [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Dongdaemun_Design_Plaza_grass.jpg",
      "Dongdaemun Design Plaza grass and neighbouring buildings",
      "https://commons.wikimedia.org/wiki/File:Dongdaemun_Design_Plaza_grass.jpg",
      "Wikimedia Commons author and architectural rights pending confirmation / licence to verify against file page"
    ],
    [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Seokchon_Lake_in_Seoul.jpg",
      "Seokchon Lake",
      "https://commons.wikimedia.org/wiki/File:Seokchon_Lake_in_Seoul.jpg",
      "Christian Bolz / licence to verify against file page"
    ],
    [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Bongeun_Temple%2C_Seoul.jpg",
      "Bongeunsa Temple Seoul",
      "https://commons.wikimedia.org/wiki/File:Bongeun_Temple%2C_Seoul.jpg",
      "Wikimedia Commons author pending confirmation / licence to verify against file page"
    ],
    [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Cheonggyecheon_tree-lined_stream_and_footbridge_at_sunrise_in_Seoul.jpg",
      "Cheonggyecheon stream at sunrise",
      "https://commons.wikimedia.org/wiki/File:Cheonggyecheon_tree-lined_stream_and_footbridge_at_sunrise_in_Seoul.jpg",
      "Basile Morin / licence to verify against file page"
    ],
    [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Hongdae_Main_Road%2C_Seoul.jpg",
      "Hongdae main road",
      "https://commons.wikimedia.org/wiki/File:Hongdae_Main_Road%2C_Seoul.jpg",
      "Keneckert / licence to verify against file page"
    ],
    [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Hongdae_Streets.jpg",
      "Hongdae streets",
      "https://commons.wikimedia.org/wiki/File:Hongdae_Streets.jpg",
      "U0894629 / licence to verify against file page"
    ]
  ],
  "seoul/four-seasons": [
    [
      "https://images.trvl-media.com/lodging/12000000/11920000/11918400/11918302/92dd12f7.jpg?impolicy=resizecrop&ra=fit&rw=1280",
      "Four Seasons Hotel Seoul exterior",
      "https://www.expedia.com/Seoul-Hotels-Four-Seasons-Hotel-Seoul.h11918302.Hotel-Information",
      "Expedia / Four Seasons Hotel Seoul"
    ],
    [
      "https://images.trvl-media.com/lodging/12000000/11920000/11918400/11918302/5e9cee27.jpg?impolicy=resizecrop&ra=fit&rw=1280",
      "Four Seasons Hotel Seoul Deluxe King guest room",
      "https://www.expedia.com/Seoul-Hotels-Four-Seasons-Hotel-Seoul.h11918302.Hotel-Information",
      "Expedia / Four Seasons Hotel Seoul"
    ],
    [
      "https://images.trvl-media.com/lodging/12000000/11920000/11918400/11918302/278f6e55.jpg?impolicy=resizecrop&ra=fit&rw=1280",
      "Four Seasons Hotel Seoul lobby",
      "https://www.expedia.com/Seoul-Hotels-Four-Seasons-Hotel-Seoul.h11918302.Hotel-Information",
      "Expedia / Four Seasons Hotel Seoul"
    ]
  ],
  "seoul/signiel": [
    [
      "https://www.thehotelguru.com/_images/23/18/2318e63b9719c453413500eac6a22ad1/s1654x900.jpg",
      "SIGNIEL Seoul exterior Lotte World Tower",
      "https://www.thehotelguru.com/en-us/hotel/signiel-seoul-seoul",
      "The Hotel Guru / SIGNIEL Seoul"
    ],
    [
      "https://images.trvl-media.com/lodging/19000000/18070000/18060400/18060379/82b776c9.jpg?impolicy=resizecrop&ra=fit&rw=1280",
      "SIGNIEL Seoul Premier King guest room",
      "https://www.expedia.com/Seoul-Hotels-Signiel-Seoul.h18060379.Hotel-Information",
      "Expedia / SIGNIEL Seoul"
    ],
    [
      "https://images.trvl-media.com/lodging/19000000/18070000/18060400/18060379/5ec61d45.jpg?impolicy=resizecrop&ra=fit&rw=1280",
      "SIGNIEL Seoul indoor pool",
      "https://www.expedia.com/Seoul-Hotels-Signiel-Seoul.h18060379.Hotel-Information",
      "Expedia / SIGNIEL Seoul"
    ]
  ],
  "seoul/josun-palace": [
    [
      "https://cache.marriott.com/content/dam/marriott-renditions/SELLC/sellc-palace-gate-4762-hor-clsc.jpg?downsize=1336px%3A%2A&interpolation=progressive-bilinear&output-quality=70",
      "Josun Palace exterior Palace Gate",
      "https://www.marriott.com/en-us/hotels/sellc-josun-palace-a-luxury-collection-hotel-seoul-gangnam/photos/",
      "Marriott / Josun Palace"
    ],
    [
      "https://cache.marriott.com/content/dam/marriott-renditions/SELLC/sellc-state-guestroom-4770-hor-clsc.jpg?downsize=1336px%3A%2A&interpolation=progressive-bilinear&output-quality=70",
      "Josun Palace State guest room",
      "https://www.marriott.com/en-us/hotels/sellc-josun-palace-a-luxury-collection-hotel-seoul-gangnam/photos/",
      "Marriott / Josun Palace"
    ],
    [
      "https://cache.marriott.com/content/dam/marriott-renditions/SELLC/sellc-indoor-pool-4795-hor-clsc.jpg?downsize=1336px%3A%2A&interpolation=progressive-bilinear&output-quality=70",
      "Josun Palace indoor pool",
      "https://www.marriott.com/en-us/hotels/sellc-josun-palace-a-luxury-collection-hotel-seoul-gangnam/photos/",
      "Marriott / Josun Palace"
    ]
  ],
  "seoul/shilla": [
    [
      "https://images.trvl-media.com/lodging/1000000/20000/15100/15031/90e9261b.jpg?impolicy=resizecrop&ra=fit&rw=1280",
      "The Shilla Seoul exterior at night",
      "https://www.expedia.com/Seoul-Hotels-The-Shilla-Seoul.h15031.Hotel-Information",
      "Expedia / The Shilla Seoul"
    ],
    [
      "https://images.trvl-media.com/lodging/1000000/20000/15100/15031/a9d55657.jpg?impolicy=resizecrop&ra=fit&rw=1280",
      "The Shilla Seoul Executive Grand Deluxe guest room",
      "https://www.expedia.com/Seoul-Hotels-The-Shilla-Seoul.h15031.Hotel-Information",
      "Expedia / The Shilla Seoul"
    ],
    [
      "https://images.trvl-media.com/lodging/1000000/20000/15100/15031/101fc459.jpg?impolicy=resizecrop&ra=fit&rw=1280",
      "The Shilla Seoul outdoor pool",
      "https://www.expedia.com/Seoul-Hotels-The-Shilla-Seoul.h15031.Hotel-Information",
      "Expedia / The Shilla Seoul"
    ]
  ]
}
def direct_candidates(slug,key):
 return [{'url':u,'sourcePage':page,'originalAlt':alt,'originalCaption':credit,'targeted':True} for u,alt,page,credit in DIRECT.get(slug+'/'+key,[])]

# Fallback is limited to the exact property gallery, never reviews, maps or nearby hotels.
# No access-control bypass: HTTP errors are recorded as gaps.
import os, unicodedata
OTA_SOURCES=json.loads(Path('data/travel/seoulMediaOtaFallback.json').read_text())
def norm(s):
 s=unicodedata.normalize('NFKD',str(s)).encode('ascii','ignore').decode().lower()
 s=s.replace('bulgari','bvlgari').replace('&',' and ')
 return ' '.join(re.findall(r'[a-z0-9]+',s))
def same_property(s,name):
 return norm(name) in norm(s)
def ota_candidates(key):
 if key not in OTA_SOURCES:return [],[]
 name,pages=OTA_SOURCES[key]
 result=[];errors=[];seen=set()
 for page in pages:
  try:
   final,raw=get(page,18_000_000)
   soup=BeautifulSoup(raw,'html.parser')
   headings=' '.join(t.get_text(' ',strip=True) for t in soup.find_all(['h1','title']))
   if not same_property(headings,name):raise ValueError('exact property identity not confirmed on page')
   publisher=domain(final)
   for tag in soup.find_all('img'):
    alt=str(tag.get('alt') or tag.get('title') or '')
    if not alt or BAD.search(alt):continue
    if re.search(r'guest photo|travell?er photo|review|nearby|neighbourhood|neighborhood|local area|attractions?|map|cityscape|landmark|airport|restaurant nearby',alt,re.I) and not re.search(r'room|suite|terrace|balcony|pool|lobby',alt,re.I):continue
    parents=list(tag.parents)[:7]
    gallery=any(re.search(r'property.?gallery|hotel.?gallery|photo.?gallery|property.?image|gallery.?image|photo.?grid',str(t.get('data-stid',''))+' '+str(t.get('data-testid',''))+' '+str(t.get('class',''))+' '+str(t.get('aria-label','')),re.I) for t in parents)
    if not (same_property(alt,name) or gallery):continue
    if any(re.search(r'review|recommend|similar.hotel|nearby|neighbou?rhood',str(t.get('data-stid',''))+' '+str(t.get('data-testid','')),re.I) for t in parents):continue
    pairs=[]
    for attr in ('src','data-src','data-lazy-src','srcset','data-srcset'):
     value=tag.get(attr)
     if not isinstance(value,str):continue
     if 'srcset' in attr:
      options=srcset_urls(value)
      value=options[-1] if options else ''
     u=urljoin(final,html.unescape(value))
     h=domain(u)
     if not any(hostmatch(h,d) for d in ('trvl-media.com','bstatic.com','expediapartnercentral.com')):continue
     if BAD.search(u):continue
     if u in seen:continue
     seen.add(u)
     # Prefer larger published srcsets, but never invent an image URL.
     pairs.append(u)
    for u in reversed(pairs):
     result.append({'url':u,'sourcePage':final,'originalAlt':alt[:350],'originalCaption':'Hotel gallery via '+publisher,'otaPublisher':publisher,'otaPropertyVerified':True})
   print('OTA_GALLERY',key,publisher,len(result),flush=True)
  except Exception as e:
   errors.append({'page':page,'error':str(e)[:300]})
   print('OTA_GAP',key,str(e)[:200],flush=True)
 return result,errors

def pick(candidates,patterns,folder,prefix,publisher,property_name=None,existing=(),avoid=()):
 results=list(existing)
 used={r['sourceRequestedUrl'] for r in list(existing)+list(avoid)}
 fingerprints=[int(r['pixelFingerprint'],16) for r in list(existing)+list(avoid) if r.get('pixelFingerprint')]
 errors=[];seen_bytes={r['sourceSHA256'] for r in list(existing)+list(avoid) if r.get('sourceSHA256')}
 next_index=max([int(p.stem.rsplit('-',1)[-1]) for p in folder.glob(prefix+'-*.webp') if p.stem.rsplit('-',1)[-1].isdigit()]+[0])+1
 patterns=[p for p in patterns if p not in {r.get('candidateSubject') for r in existing}]
 for pattern in patterns:
  if property_name and len(results)>=3:break
  ranked=[]
  for r in candidates:
   label=unquote(r['url']+' '+r['originalAlt']+' '+r['originalCaption']).replace('_',' ')
   if OTHER.search(label) or not re.search(pattern,label,re.I):continue
   if not property_name and 'abeno harukas' in pattern and re.search(r'zoo|giraffe',label,re.I):continue
   if property_name=='EQ Kuala Lumpur' and pattern==EXTERIOR.pattern and re.search(r'sky51|entrance2|lobby|reception',label,re.I):continue
   if not property_name and re.search(r'mother and son|father and|family in front|child in front',label,re.I):continue
   if property_name and pattern==ROOM.pattern and re.search(r'\b(?:bathroom|tub|shower|vanity)\b',label,re.I):continue
   if property_name and pattern==FACILITY.pattern and re.search(r'kids enjoy|children enjoy|family enjoying',label,re.I):continue
   # Las Vegas: avoid alternate crops of rejected lifestyle and Fremont street assets.
   if not property_name and re.search(r'Venetian_Gondola_Ride_IMG_2777',r['url'],re.I):continue
   if not property_name and pattern.startswith('downtown') and re.search(r'Fremont|RR_Downtown_0271',label,re.I):continue
   if not property_name and re.search(r'left:|right:|centre:|girls sitting|three women|two women|spider.?man|hiking the|selfie|group of friends|tourist[s]? (?:in|at|admiring|taking)|people (?:walking|buying|standing)|friends buying|person (?:in|standing|riding)|portrait',r['originalAlt'],re.I):continue
   if property_name and re.search(r'il.palazzetto|salon.?entrance|registration desk|/salon/|(?:beauty|hair).?salon',label,re.I):continue
   if property_name=='Shangri-La The Shard, London' and re.search(r'office[s]?|model|champagne|love.skypool',label,re.I):continue
   if property_name=='The Savoy' and pattern==FACILITY.pattern and re.search(r'garden.view.room|king.room|deluxe.king|/rooms/',label,re.I):continue
   if property_name=='Wynn Las Vegas' and re.search(r'\bencore\b',label,re.I) and not (r.get('targeted') and '495812_v2.jpg' in r['url'] and pattern==EXTERIOR.pattern):continue
   if property_name=='Hyatt Ziva Cancun' and 'newsroom.hyatt.com' in r['sourcePage'] and not re.search(r'cancun|cancún',label,re.I):continue
   if property_name=='Hotel de Russie' and 'press.roccofortehotels.com' in r['sourcePage'] and not re.search(r'de.russie|nijinsky|stravinskij',label,re.I):continue
   if property_name and re.search(r'sant.?pau|/dining/|/restaurants?/|city.?attraction|city.?guide|/explore/|destination.?guide',label,re.I):continue
   # Explicit file labels describe the subject; property names such as Hotel & Spa do not imply a spa photograph.
   category_label = r['originalAlt'] if r.get('targeted') else label
   if property_name:
    category_label=re.sub(re.escape(property_name), '', category_label, flags=re.I)
    category_label=re.sub(r'\b(?:NIZUC Resort(?: & Spa)?|Le Blanc Spa Resort(?: Cancun)?|Majestic Hotel(?: & Spa)?(?: Barcelona)?)\b','',category_label,flags=re.I)
   if property_name and pattern==EXTERIOR.pattern and (ROOM.search(category_label) or re.search(r'\b(?:lobby|salon|spa|interior|restaurant|bar|terrace|reception|registration|desk)\b',category_label,re.I)):continue
   if property_name and pattern==FACILITY.pattern and ROOM.search(category_label):continue
   # Group-wide galleries require property identity in the actual asset label.
   if property_name and (('press.mandarinoriental.com' in r['sourcePage'] and 'barcelona' not in label.lower()) or ('leblancsparesorts.com/gallery' in r['sourcePage'] and 'cancun' not in label.lower() and 'cancún' not in label.lower())):continue
   score=30*bool(r.get('targeted'))+8*bool(re.search(pattern,r['originalAlt'],re.I))+4*bool(re.search(pattern,unquote(r['url']),re.I))+2*bool(r['originalCaption'])
   if re.search(r'night|dusk|sunset|evening|nuit|notte',label,re.I):score-=3
   ranked.append((score,r))
  ranked.sort(key=lambda x:-x[0])
  for _,r in ranked[:18]:
   if r['url'] in used:continue
   used.add(r['url'])
   try:
    resolved,raw=get(r['url'])
    with Image.open(io.BytesIO(raw)) as original:
     im=ImageOps.exif_transpose(original).convert('RGB')
    w,h=im.size
    if w<800 or h<450 or not 1.05<=w/h<=3.4:continue
    sample=im.resize((9,8),Image.Resampling.LANCZOS).convert('L')
    pix=list(sample.getdata()); dh=sum((1<<i)*int(pix[(i//8)*9+i%8]>pix[(i//8)*9+i%8+1]) for i in range(64))
    if any((dh^old).bit_count()<11 for old in fingerprints):continue
    if sum(ImageStat.Stat(im.resize((100,100))).stddev)/3<14:continue
    sourcehash=hashlib.sha256(raw).hexdigest()
    if sourcehash in seen_bytes:continue
    # Local images: 1600px hero; 1280px all other photographs; never upscale.
    maxsize=(1600,1100) if not property_name and not results else (1280,850)
    im.thumbnail(maxsize,Image.Resampling.LANCZOS)
    buf=io.BytesIO()
    for quality in (82,78,74,70):
     buf=io.BytesIO();im.save(buf,'WEBP',quality=quality,method=6)
     if len(buf.getvalue())<=260000:break
    b=buf.getvalue()
    if len(b)<12000:continue
    key=f'{prefix}-{next_index}'; dest=folder/f'{key}.webp'
    dest.parent.mkdir(parents=True,exist_ok=True);dest.write_bytes(b)
    seen_bytes.add(sourcehash);fingerprints.append(dh)
    row={'key':key,'sourcePage':r['sourcePage'],'sourceResolvedUrl':resolved,'sourceRequestedUrl':r['url'],'originalAlt':r['originalAlt'],'originalCaption':r['originalCaption'],'credit':r['originalCaption'] if r.get('targeted') or r.get('otaPublisher') else publisher,'publisher':r.get('otaPublisher',publisher),'hotel':property_name,'localPath':'/'+str(dest).removeprefix('public/'),'sourceSHA256':sourcehash,'webpSHA256':hashlib.sha256(b).hexdigest(),'sourcePixels':[w,h],'webpPixels':list(im.size),'webpBytes':len(b),'pixelFingerprint':f'{dh:016x}','candidateSubject':pattern,'rightsEvidenceType':('Third-party gallery; original hotel photographer and republication permission must be confirmed' if r.get('otaPublisher') else 'owner declaration of permission; original source and caption retained; individual licence and named photo credit must be confirmed'),'ownerPermissionDeclared':True,'commercialRightsCleared':False,'visuallyVerified':False,'previewVisualApproved':False,'status':'candidate_pending_visual_review_and_credit'}
    results.append(row)
    next_index+=1
    print('WEBP',property_name or publisher,key,w,h,len(b),flush=True)
    break
   except Exception as e:
    errors.append({'url':r['url'],'error':str(e)[:180]})
  else: print('MISSING_SUBJECT',property_name or publisher,pattern,flush=True)
 return results,errors
def city_job(c):
 base=ROOT/(c['slug']+'-premium')
 old=PREVIOUS.get(c['slug'],{})
 existing=[r for r in old.get('destinationScenes',[]) if not (c['slug']=='osaka' and r['key']=='scene-4') and not (c['slug']=='kuala-lumpur' and r['key'] in ('scene-6','scene-7')) and not (c['slug']=='orlando' and r['key'] in ('scene-5','scene-6')) and not (c['slug']=='las-vegas' and r['key'] in ('scene-1','scene-5','scene-9','scene-12')) and not (c['slug']=='cancun' and r['key'] in ('scene-4','scene-8','scene-9','scene-11','scene-12')) and not (c['slug']=='rome' and r['key'] in ('scene-3','scene-7')) and not (c['slug']=='london' and r['key'] in ('scene-1','scene-2','scene-3')) and not (c['slug']=='las-vegas' and r['key']=='scene-6') and not (c['slug']=='barcelona' and r['key'] in ('scene-3','scene-5'))]
 if os.environ.get('TRAVEL_OTA_ONLY')=='1':return c['slug'],'city',old.get('destinationScenes',[]),[]
 if len(existing)>=9:return c['slug'],'city',existing,[]
 cand,errors=collect_pages(c['cityPages'])
 cand=direct_candidates(c['slug'],'city')+cand
 result,failed=pick(cand,c['subjects'],base/'destination','scene',c['publisher'],existing=existing,avoid=[r for r in old.get('destinationScenes',[]) if r not in existing]+[r for r in old.get('excludedCandidates',[]) if r.get('hotel') is None])
 return c['slug'],'city',result,errors+failed
def le_blanc_sales_kit(folder,name,existing,avoid):
 # Property-specific Palace Resorts sales kit; extract the embedded image, never a screenshot of a page.
 import fitz
 url='https://s3.eu-west-2.amazonaws.com/hosmarkhotels.com/website/documents/28/Le%20Blanc%20Cancun%20Sales%20Kits%20Refresh_Eng.pdf'
 resolved,raw=get(url,45_000_000)
 doc=fitz.open(stream=raw,filetype='pdf')
 try:
  if 'Le Blanc Spa Resort Cancun' not in ' '.join(doc[0].get_text().split()) and 'Le Blanc Spa Resort Cancun' not in ' '.join(doc[1].get_text().split()):raise ValueError('Wrong brochure identity')
  seen=[int(p['pixelFingerprint'],16) for p in list(existing)+list(avoid) if p.get('pixelFingerprint')]
  for pi in (1,2):
   candidates=[]
   for info in doc[pi].get_images(full=True):
    obj=doc.extract_image(info[0]); imgraw=obj['image']
    im=ImageOps.exif_transpose(Image.open(io.BytesIO(imgraw))).convert('RGB')
    w,h=im.size
    if w<800 or h<450 or not 1.05<=w/h<=3.4:continue
    if sum(ImageStat.Stat(im.resize((100,100))).stddev)/3<14:continue
    pix=list(im.resize((9,8)).convert('L').getdata())
    dh=sum((1<<i)*int(pix[(i//8)*9+i%8]>pix[(i//8)*9+i%8+1]) for i in range(64))
    if any((dh^old).bit_count()<11 for old in seen):continue
    candidates.append((w*h,info[0],imgraw,im,dh,w,h))
   for _,xref,imgraw,im,dh,w,h in sorted(candidates,key=lambda x:-x[0]):
    im.thumbnail((1280,850),Image.Resampling.LANCZOS)
    for quality in (82,78,74,70):
     buf=io.BytesIO();im.save(buf,'WEBP',quality=quality,method=6);b=buf.getvalue()
     if len(b)<=260000:break
    if not 12000<=len(b)<=260000:continue
    folder.mkdir(parents=True,exist_ok=True)
    n=max([int(p.stem.rsplit('-',1)[-1]) for p in folder.glob('le-blanc-*.webp') if p.stem.rsplit('-',1)[-1].isdigit()]+[0])+1
    key=f'le-blanc-{n}';dest=folder/(key+'.webp');dest.write_bytes(b)
    caption='Le Blanc Spa Resort Cancun beachfront exterior from Palace Resorts sales kit'
    return {'key':key,'sourcePage':url,'sourceResolvedUrl':resolved,'sourceRequestedUrl':url+f'#page={pi+1}&xref={xref}','originalAlt':caption,'originalCaption':caption,'credit':'Palace Resorts / Le Blanc Spa Resort Cancun — Sales Kit 2022','publisher':'Palace Resorts','hotel':name,'localPath':'/'+str(dest).removeprefix('public/'),'sourceSHA256':hashlib.sha256(imgraw).hexdigest(),'webpSHA256':hashlib.sha256(b).hexdigest(),'sourcePixels':[w,h],'webpPixels':list(im.size),'webpBytes':len(b),'pixelFingerprint':f'{dh:016x}','candidateSubject':EXTERIOR.pattern,'pdfPage':pi+1,'pdfImageXref':xref,'rightsEvidenceType':'Owner permission declared; property-specific original sales kit and embedded image retained','ownerPermissionDeclared':True,'commercialRightsCleared':False,'visuallyVerified':False,'previewVisualApproved':False,'status':'candidate_pending_visual_review_and_credit'}
  raise ValueError('No eligible embedded exterior photograph on specified sales kit pages')
 finally:doc.close()

def hotel_job(c,h):
 key,name,pages=h
 old=PREVIOUS.get(c['slug'],{})
 allprevious=[r for r in old.get('hotels',[]) if r['hotel']==name]
 # These were specifically identified by source filenames/alt as unsuitable or ambiguous.
 bad={'ritz-carlton-2','portofino-2','claridges-1','wynn-1','fontainebleau-1','arts-1','nizuc-2','majestic-2','bellagio-1','hassler-2','majestic-3','wynn-3','wynn-4','savoy-2','shangri-la-2','shangri-la-3','venetian-3','le-blanc-1','le-blanc-3','coral-beach-3','nizuc-4','hyatt-ziva-2','coral-beach-4','coral-beach-5','le-blanc-5','le-blanc-6','le-blanc-7','le-blanc-8'}
 rejected=[r for r in allprevious if r['key'] in bad]
 existing=[r for r in allprevious if not (c['slug']=='seoul' and key=='josun-palace' and r['key']=='josun-palace-1') and r['key'] not in bad and not (c['slug']=='kuala-lumpur' and key=='eq' and r['key'] in ('eq-1','eq-4'))]
 if len(existing)>=3:return c['slug'],key,existing,[]
 avoid=rejected+[r for r in old.get('excludedCandidates',[]) if r.get('hotel')==name]
 patterns=[EXTERIOR.pattern,ROOM.pattern,FACILITY.pattern]
 folder=ROOT/(c['slug']+'-premium')/key
 result=list(existing);errors=[]
 if c['slug']=='cancun' and key=='le-blanc' and len(result)<3:
  try:result.append(le_blanc_sales_kit(folder,name,result,avoid))
  except Exception as e:errors.append({'page':'Le Blanc Cancun Palace Resorts sales kit','error':str(e)[:180]})
  if len(result)>=3:return c['slug'],key,result,errors
 # Official galleries have been processed on previous runs. Do not repeat them for this fallback pass.
 if os.environ.get('TRAVEL_OTA_ONLY')!='1':
  cand,errors=collect_pages(pages)
  cand=direct_candidates(c['slug'],key)+cand
  result,failed=pick(cand,patterns,folder,key,name,name,existing=result,avoid=avoid)
  errors.extend(failed)
 if len(result)<3:
  cand,failed=ota_candidates(key);errors.extend(failed)
  result,failed=pick(cand,patterns,folder,key,name,name,existing=result,avoid=avoid);errors.extend(failed)
 return c['slug'],key,result,errors
def contact_sheet(slug,rows):
 if not rows:return
 cell=(300,218);cols=4;lines=(len(rows)+cols-1)//cols
 sheet=Image.new('RGB',(cols*cell[0],lines*cell[1]),'white');draw=ImageDraw.Draw(sheet)
 for i,r in enumerate(rows):
  im=Image.open('public'+r['localPath']).convert('RGB');im.thumbnail((292,180))
  x=(i%cols)*cell[0];y=(i//cols)*cell[1]
  sheet.paste(im,(x+(300-im.width)//2,y))
  draw.text((x+4,y+183),r['key']+' '+str(r['webpPixels']),fill='black')
  draw.text((x+4,y+198),(r['hotel'] or slug)[:38],fill='black')
 path=ROOT/(slug+'-premium')/'source-review-contact-sheet.webp'
 sheet.save(path,'WEBP',quality=82)
PREVIOUS=json.loads(REPORT.read_text()) if REPORT.exists() else {}
def main():
 selected=os.environ.get('TRAVEL_DESTINATION','').strip()
 configs=[c for c in CONFIG if not selected or c['slug']==selected]
 if not configs:raise ValueError('Unknown travel destination: '+selected)
 audit={c['slug']:{'destinationScenes':[],'hotels':[],'gaps':[],'errors':[],'publicUseApproved':False,'ownerPermissionDeclared':True} for c in configs}
 with ThreadPoolExecutor(max_workers=6) as ex:
  jobs=[ex.submit(city_job,c) for c in configs]+[ex.submit(hotel_job,c,h) for c in configs for h in c['hotels']]
  for task in jobs:
   slug,key,rows,errors=task.result()
   a=audit[slug];a['destinationScenes' if key=='city' else 'hotels'].extend(rows);a['errors'].extend(errors)
   wanted=9 if key=='city' else 3
   if len(rows)<wanted:a['gaps'].append({'group':key,'expected':wanted,'found':len(rows)})
 for c in configs:
  a=audit[c['slug']]
  old=PREVIOUS.get(c['slug'],{})
  keys={r['localPath'] for r in a['destinationScenes']+a['hotels']}
  a['excludedCandidates']=old.get('excludedCandidates',[])+[r for r in old.get('destinationScenes',[])+old.get('hotels',[]) if r['localPath'] not in keys]
  a['cityCount']=len(a['destinationScenes']);a['hotelCount']=len(a['hotels'])
  allrows=a['destinationScenes']+a['hotels'];a['totalBytes']=sum(x['webpBytes'] for x in allrows)
  # Reject byte-identical or visually near-identical images across property groups.
  seen=[];rejected=[]
  for r in allrows:
   fp=int(r['pixelFingerprint'],16)
   if any((fp^f).bit_count()<9 for f in seen):rejected.append(r)
   else:seen.append(fp)
  for r in rejected:
   a['gaps'].append({'duplicateRejected':r['key']})
   (a['destinationScenes'] if r['hotel'] is None else a['hotels']).remove(r)
   a['excludedCandidates'].append(r) # retain source file on the draft branch
  a['cityCount']=len(a['destinationScenes']);a['hotelCount']=len(a['hotels']);a['totalBytes']=sum(x['webpBytes'] for x in a['destinationScenes']+a['hotels'])
  # Normalize oversized existing assets, preserving the source hash and attribution.
  for r in a['destinationScenes']+a['hotels']:
   if r['webpBytes']<=260000:continue
   p=Path('public'+r['localPath'])
   im=Image.open(p).convert('RGB')
   im.thumbnail((1280,850),Image.Resampling.LANCZOS)
   for quality in (82,78,74,70,66,62):
    buf=io.BytesIO();im.save(buf,'WEBP',quality=quality,method=6);b=buf.getvalue()
    if len(b)<=260000:break
   if len(b)>260000:raise ValueError('Oversized asset: '+r['key'])
   p.write_bytes(b);r['webpBytes']=len(b);r['webpSHA256']=hashlib.sha256(b).hexdigest();r['webpPixels']=list(im.size)
  a['totalBytes']=sum(x['webpBytes'] for x in a['destinationScenes']+a['hotels'])
  contact_sheet(c['slug'],a['destinationScenes']+a['hotels'])
  print('MEDIA_SUMMARY',c['slug'],a['cityCount'],a['hotelCount'],a['totalBytes'],json.dumps(a['gaps']),flush=True)
 REPORT.write_text(json.dumps({**PREVIOUS,**audit},ensure_ascii=False,indent=2)+'\n')
if __name__=='__main__':main()
