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
CONFIG=json.loads(Path('data/travel/media89to93Sources.json').read_text())
ROOT=Path('public/images/travel')
REPORT=Path('data/travel/media89to93Candidates.json')
THREAD=threading.local()
BAD=re.compile(r'logo|favicon|sprite|placeholder|avatar|cookie|badge|award|tracking|qr.code|icon|map[._/-]|banner.ad|newsletter|social.share|\.svg|\.gif|\.pdf|\.mp4',re.I)
ROOM=re.compile(r'bedroom|guest.?room|suite|king.?room|deluxe|premier|accommodation|chambre|habita|camera|zimmer',re.I)
EXTERIOR=re.compile(r'exterior|facade|façade|aerial|arrival|entrance|building|front.?view|panorama|hotel.?view',re.I)
FACILITY=re.compile(r'pool|spa|lobby|terrace|garden|lounge|courtyard|conservatory|piscin',re.I)
OTHER=re.compile(r'chef|cocktail|menu|dish|food|wine|drink|burger|snack|toiletries|amenities bottles|bvlgari amenities|wedding|meeting|conference|portrait|staff|person|model|gift|brochure|floor.?plan|render|illustration|virtual.?tour|360.?tour|video',re.I)
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
 return ((hostmatch(pagehost,'visitbritain.com') and host=='dam-cdn.vb0.orangelogic.com') or
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
    if re.match(r'^(?:[a-z]_[^/]+/)+v1/clients/',path) and hostmatch(domain(final),'visitlasvegas.com'):
     path='https://assets.simpleviewcms.com/simpleview/image/upload/'+path
    u=urljoin(final,path);u=u.replace(' ','%20')
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
  "london/city": [
    [
      "https://www.visitlondon.com/-/media/images/london/visit/things-to-do/sightseeing/westminster-best-view-jon-reid-visitlondon640x360jpg.jpg?hash=A6B2CD9D60FD11EA3CB9AFAD2194B354&mw=640&rev=a29c4693de6e4585bbe7f6692117a4f6",
      "Westminster Bridge and Houses of Parliament on a sunny day",
      "https://www.visitlondon.com/things-to-do/sightseeing/top-10-photo-opportunities-in-london",
      "Jon Reid / Visit London"
    ],
    [
      "https://www.visitlondon.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/piccadilly-circus/piccadillycircus_copyright_jonreid640x360.jpg?hash=47CB55D08D1E9CF010F861E3E1A6B7B1&mw=640&rev=67f70d48df1745ef9b6815f0065442a3",
      "Piccadilly Circus at dusk",
      "https://www.visitlondon.com/things-to-do/sightseeing/top-10-photo-opportunities-in-london",
      "Jon Reid / Visit London"
    ]
  ],
  "rome/bvlgari": [
    [
      "https://www.bulgarihotels.com/.imaging/bhr-thumbnail-jpg/dam/ROMA/Image-Gallery/The-Hotel/Bulgari-Hotel-Roma-2.jpg1/jcr%3Acontent",
      "Bvlgari Hotel Roma - The Hotel",
      "https://www.bulgarihotels.com/en_US/rome/image-gallery",
      "Bvlgari Hotels & Resorts"
    ],
    [
      "https://www.bulgarihotels.com/.imaging/bhr-thumbnail-jpg/dam/ROMA/Image-Gallery/Accommodation/Bulgari-Hotel-Roma-7.jpg/jcr%3Acontent",
      "Bvlgari Hotel Roma Premium Suite",
      "https://www.bulgarihotels.com/en_US/rome/image-gallery",
      "Bvlgari Hotels & Resorts"
    ],
    [
      "https://www.bulgarihotels.com/.imaging/bhr-thumbnail-jpg/dam/ROMA/Image-Gallery/Bulgari-Spa/Bulgari-Hotel-Roma-1.jpg/jcr%3Acontent",
      "Bvlgari Hotel Roma Spa",
      "https://www.bulgarihotels.com/en_US/rome/image-gallery",
      "Bvlgari Hotels & Resorts"
    ]
  ],
  "rome/eden": [
    [
      "https://www.dorchestercollection.com/media/x04deanq/hotel-eden-roma-bellavista-penthouse-suite-living-room-view.jpg?format=webp&height=540&rmode=crop&rxy=0.48621553884711777%2C0.5767808303807276&width=1600",
      "Bellavista Penthouse Suite living room with city view",
      "https://www.dorchestercollection.com/rome/hotel-eden",
      "Dorchester Collection"
    ],
    [
      "https://www.dorchestercollection.com/media/s10do3um/hotel-eden-la-libreria-lobby-lounge-hero-dorchester-collection.jpg?format=webp&height=765&rmode=crop&width=1200",
      "La Libreria lobby lounge",
      "https://www.dorchestercollection.com/rome/hotel-eden",
      "Dorchester Collection"
    ],
    [
      "https://www.dorchestercollection.com/media/ojkbcz3j/hotel-eden-exterior-facade-sign-dorchester-collection.jpg?format=webp&height=612&rmode=crop&width=612",
      "Hotel Eden exterior facade detail",
      "https://www.dorchestercollection.com/rome/hotel-eden",
      "Dorchester Collection"
    ]
  ],
  "cancun/hyatt-ziva": [
    [
      "https://newsroom.hyatt.com/download/Hyatt%2BZiva%2BCancun%2B-%2BAerial.jpg",
      "Hyatt Ziva Cancun aerial",
      "https://newsroom.hyatt.com/media-gallery?cat=2774",
      "Hyatt Newsroom"
    ]
  ]
}
DIRECT['london/city'].insert(0,['https://www.londonandpartners.com/-/media/images/london/visit/things-to-do/london-areas/river-thames/panorama-london-skyline-b-1920x582.jpg?hash=5A94C794E75E3F410D7360AC4BB956CF&mw=1920&rev=90d7c2e3ee1e4018859464d28c8a8e20','London skyline and Thames panorama','https://www.visitlondon.com/things-to-do','London & Partners'])
DIRECT['cancun/le-blanc']=[['https://www.palaceproagents.com/lbc_Room_Royale_Deluxe_Partial_Ocean_View_bg_3600x1800_7207f3f7a0.jpg','Le Blanc Cancun Royale Deluxe partial ocean view room','https://www.palaceproagents.com/destinations-resorts/le-blanc-spa-resort-cancun','Palace PRO Agents']]
DIRECT['london/savoy']=[['https://www.ahstatic.com/photos/a597_br_00_p_2048x1536.jpg','The Savoy London exterior entrance and canopy','https://all.accor.com/hotel/A597/index.en.shtml','Accor / The Savoy']]
DIRECT['london/shangri-la']=[['https://www.the-shard.com/media/gm2ljfv2/shangri-la-the-shard-london-sky-sauna.jpg?quality=95&rmode=crop&rxy=0%2C0&width=457','Shangri-La London Sky Sauna','https://www.the-shard.com/news-events/events/2026/summer-above-the-clouds-at-shangri-la','The Shard / Shangri-La']]

DIRECT['las-vegas/wynn']=DIRECT.get('las-vegas/wynn',[])+[['https://preview.thenewsmarket.com/Previews/WYNN/StillAssets/1920x1080/495812_v2.jpg','Wynn Las Vegas exterior and gardens with Encore tower in background','https://www.newsroom.wynnresorts.com/en/wynnresorts/wynn-las-vegas-resort-fact-sheet/s/d68e3fea-7a3a-44d1-8a15-c445ecfedc30','Wynn Resorts newsroom / Exterior – Daytime']]
DIRECT['london/city'].insert(0,['https://upload.wikimedia.org/wikipedia/commons/e/e0/Mount_Street_and_Carlos_Place%2C_Mayfair.jpg','Mayfair Mount Street and Carlos Place streetscape','https://commons.wikimedia.org/wiki/File:Mount_Street_and_Carlos_Place,_Mayfair.jpg','Davvike / Wikimedia Commons / CC BY-SA 4.0; https://creativecommons.org/licenses/by-sa/4.0/; resized and converted to WebP'])
DIRECT['london/shangri-la'].insert(0,['https://commons.wikimedia.org/wiki/Special:FilePath/The_Shard_-_London.jpg','The Shard exterior building housing Shangri-La London','https://commons.wikimedia.org/wiki/File:The_Shard_-_London.jpg','Simone Ramella / Wikimedia Commons / CC BY 2.0; https://creativecommons.org/licenses/by/2.0/; resized and converted to WebP'])
DIRECT['london/city'] = [["https://www.bygrosvenor.com/sites/default/files/styles/l08_064000_1024x576/public/2025-06/Mayfair%20Hero%20Image.jpg.webp?h=34099278&itok=fEOz_zy7","Mount Street Mayfair","https://www.bygrosvenor.com/our-locations/mayfair/retail/mount-street-neighbourhood","By Grosvenor"],["https://www.bygrosvenor.com/sites/default/files/styles/l08_064000_1024x576/public/2025-06/GETTING%20HERE13.jpg.webp?h=d1cb525d&itok=dq9UgLn0","Mayfair neighbourhood","https://www.bygrosvenor.com/our-locations/mayfair/retail/mount-street-neighbourhood","By Grosvenor"]] + DIRECT['london/city']
DIRECT['las-vegas/venetian'] = [["https://www.venetianlasvegas.com/adobe/dynamicmedia/deliver/dm-aid--c56ed76b-4602-4e7d-9e3b-2275065db1f4/pool-1-2000x1000.jpg?preferwebp=true&quality=64","The Venetian Pool Garden outdoor swimming pool","https://www.venetianlasvegas.com/resort/pools/pool-garden.html","The Venetian Resort Las Vegas"],["https://www.venetianlasvegas.com/adobe/dynamicmedia/deliver/dm-aid--4d07956a-a6b5-4861-a491-eb400c616c41/pool-2-1200x800.jpg?preferwebp=true&quality=64","The Venetian Pool Garden courtyard and swimming pool","https://www.venetianlasvegas.com/resort/pools/pool-garden.html","The Venetian Resort Las Vegas"]] + DIRECT.get('las-vegas/venetian',[])
DIRECT["rome/bvlgari"] = [["https://images.prismic.io/lvmh-com/92c0765b-6eac-415d-9ce3-f999afbca49c_cove-news-vestibule_augustus-statue-1-2000x1100.jpeg?auto=compress%2Cformat","Bvlgari Hotel Roma exterior entrance and Augustus statue","https://www.lvmh.com/it/novita-lvmh/bulgari-apre-un-hotel-a-roma-unode-al-patrimonio-della-maison","LVMH"],["https://cache.marriott.com/is/image/marriotts7prod/bg-rombg-superior-room-37082%3AWide-Hor?downsize=715px%3A%2A&interpolation=progressive-bilinear%3B%2A%2C%2A&output-quality=90","Bvlgari Hotel Roma Superior Room","https://www.marriott.com/en-gb/destinations/italy/rome.mi","Marriott Bonvoy / Bvlgari"],["https://media.bulgari.com/image/upload/c_fill%2Ch_614%2Cw_1090/q_auto/f_auto/v1/stories/Bvlgari_Hotel_Roma/SPA_POOL_khhzvb.jpg","Bvlgari Hotel Roma indoor spa pool","https://www.bulgari.com/es-mx/stories/bvlgari-hotel-roma","Bvlgari"]] + DIRECT.get("rome/bvlgari",[])
DIRECT["rome/de-russie"] = [["https://teresaperezcollection.com/images/0bijhalf/production/0ee4a0e4dac68d8edbff00549e07f35aa5d58ba1-3000x2040.webp?fit=clip&fm=jpg&q=80&w=2048","Hotel de Russie exterior entrance at Via del Babuino","https://teresaperezcollection.com/hotel/hotel-de-russie","Teresa Perez Collection — hotel gallery"]] + DIRECT.get("rome/de-russie",[])
DIRECT["rome/hassler"] = [["https://static-new.lhw.com/HotelImages/Final/LW2103/lw2103_43808968_720x450.jpg","Hassler Roma hotel exterior above the Spanish Steps","https://www.lhw.com/hotel/Hassler-Roma-Rome-Italy","The Leading Hotels of the World"]] + DIRECT.get("rome/hassler",[])
DIRECT["rome/eden"] = [["https://www.dorchestercollection.com/media/zdmdyjxt/hotel-eden-rome-exterior-facade-dorchester-collection.jpg?format=webp&height=660&rmode=crop&width=880","Hotel Eden Rome exterior facade","https://www.dorchestercollection.com/worldwide-sales","Dorchester Collection"]] + DIRECT.get("rome/eden",[])
DIRECT["rome/bvlgari"] = [["https://www.bulgarihotels.com/.imaging/bhr-960-jpg/dam/ROMA/Accomodation/Suite/Superior-Suite/SUPERIOR-SUITE.jpg/jcr%3Acontent","Bvlgari Hotel Roma Superior Suite bedroom","https://www.bulgarihotels.com/en_US/rome/accommodation/Suites/superior-suites","Bvlgari Hotels & Resorts"],["https://teresaperezcollection.com/images/0bijhalf/production/48aa2d408841a94e5917fc63b973ccac97e8e3e7-2500x1675.webp?fit=clip&fm=jpg&q=80&w=2048","Bvlgari Hotel Roma bedroom","https://teresaperezcollection.com/hotel/bulgari-roma","Teresa Perez Collection / Bvlgari Hotel Roma"]] + DIRECT.get("rome/bvlgari",[])
DIRECT["rome/hassler"] = [["https://cdn1.matadornetwork.com/blogs/1/2023/12/Hassler-hotel-exterior.jpeg","Hassler Roma hotel exterior entrance facade","https://matadornetwork.com/read/hassler-hotel-rome/","Matador Network / Hassler Roma"],["https://www.quotidianolavoce.it/cms/app/uploads/2023/11/www.usnews.jpg","Hassler Roma facade entrance","https://www.quotidianolavoce.it/2023/11/03/il-nuovo-hassler-accessibile-e-sorridente-con-i-piatti-di-marcello-romano-del-salone-eva/","Quotidiano La Voce / source credit to confirm"]] + DIRECT.get("rome/hassler",[])
def direct_candidates(slug,key):
 return [{'url':u,'sourcePage':page,'originalAlt':alt,'originalCaption':credit,'targeted':True} for u,alt,page,credit in DIRECT.get(slug+'/'+key,[])]

# Fallback is limited to the exact property gallery, never reviews, maps or nearby hotels.
# No access-control bypass: HTTP errors are recorded as gaps.
import os, unicodedata
OTA_SOURCES=json.loads(Path('data/travel/media89to93OtaFallback.json').read_text())
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
 fingerprints=[int(r['pixelFingerprint'],16) for r in existing]
 errors=[];seen_bytes={r['sourceSHA256'] for r in existing}
 next_index=max([int(p.stem.rsplit('-',1)[-1]) for p in folder.glob(prefix+'-*.webp') if p.stem.rsplit('-',1)[-1].isdigit()]+[0])+1
 patterns=[p for p in patterns if p not in {r.get('candidateSubject') for r in existing}]
 for pattern in patterns:
  if property_name and len(results)>=3:break
  ranked=[]
  for r in candidates:
   label=unquote(r['url']+' '+r['originalAlt']+' '+r['originalCaption']).replace('_',' ')
   if OTHER.search(label) or not re.search(pattern,label,re.I):continue
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
   if property_name and pattern==EXTERIOR.pattern and (ROOM.search(label) or re.search(r'\b(?:lobby|salon|spa|interior|restaurant|bar|terrace|reception|registration|desk)\b',label,re.I)):continue
   if property_name and pattern==FACILITY.pattern and ROOM.search(label):continue
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
 existing=[r for r in old.get('destinationScenes',[]) if not (c['slug']=='las-vegas' and r['key'] in ('scene-1','scene-5','scene-9','scene-12')) and not (c['slug']=='cancun' and r['key']=='scene-4') and not (c['slug']=='rome' and r['key'] in ('scene-3','scene-7')) and not (c['slug']=='london' and r['key'] in ('scene-1','scene-2','scene-3')) and not (c['slug']=='las-vegas' and r['key']=='scene-6') and not (c['slug']=='barcelona' and r['key'] in ('scene-3','scene-5'))]
 if os.environ.get('TRAVEL_OTA_ONLY')=='1':return c['slug'],'city',old.get('destinationScenes',[]),[]
 if len(existing)>=9:return c['slug'],'city',existing,[]
 cand,errors=collect_pages(c['cityPages'])
 cand=direct_candidates(c['slug'],'city')+cand
 result,failed=pick(cand,c['subjects'],base/'destination','scene',c['publisher'],existing=existing,avoid=[r for r in old.get('destinationScenes',[]) if r not in existing]+[r for r in old.get('excludedCandidates',[]) if r.get('hotel') is None])
 return c['slug'],'city',result,errors+failed
def hotel_job(c,h):
 key,name,pages=h
 old=PREVIOUS.get(c['slug'],{})
 allprevious=[r for r in old.get('hotels',[]) if r['hotel']==name]
 # These were specifically identified by source filenames/alt as unsuitable or ambiguous.
 bad={'claridges-1','wynn-1','fontainebleau-1','arts-1','nizuc-2','majestic-2','bellagio-1','hassler-2','majestic-3','wynn-3','wynn-4','savoy-2','shangri-la-2','shangri-la-3','venetian-3','le-blanc-1','le-blanc-3','coral-beach-3','nizuc-4'}
 rejected=[r for r in allprevious if r['key'] in bad]
 existing=[r for r in allprevious if r['key'] not in bad]
 if len(existing)>=3:return c['slug'],key,existing,[]
 avoid=rejected+[r for r in old.get('excludedCandidates',[]) if r.get('hotel')==name]
 patterns=[EXTERIOR.pattern,ROOM.pattern,FACILITY.pattern]
 folder=ROOT/(c['slug']+'-premium')/key
 result=list(existing);errors=[]
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
  contact_sheet(c['slug'],a['destinationScenes']+a['hotels'])
  print('MEDIA_SUMMARY',c['slug'],a['cityCount'],a['hotelCount'],a['totalBytes'],json.dumps(a['gaps']),flush=True)
 REPORT.write_text(json.dumps({**PREVIOUS,**audit},ensure_ascii=False,indent=2)+'\n')
if __name__=='__main__':main()
