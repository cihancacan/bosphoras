#!/usr/bin/env python3
"""Fetch ONLY source-identifiable original Miami images for private owner Preview.
City: Wikimedia Commons CC-BY/CC-BY-SA/CC0 with author and source.
Hotels: publishers' own websites, commercial republication licence NOT proven.
No hotlinks or random stock photos. Never mark hotel images commercially cleared.
"""
import io, re, json, hashlib, html, os, pathlib, time, urllib.parse
import requests
from PIL import Image,ImageOps,ImageStat
from bs4 import BeautifulSoup

ROOT=pathlib.Path('public/images/travel/miami-premium')
OUT=pathlib.Path('data/travel/miamiMediaCandidates.json')
SESSION=requests.Session()
SESSION.headers.update({'User-Agent':'BosphorasLuxuryStaysEditorial/1.0 (private attributed editorial preview; contact: info@bosphoras.com)','Accept':'image/avif,image/webp,image/*;q=0.8,*/*;q=0.5'})
API='https://commons.wikimedia.org/w/api.php'
QUESTIONS=[
 ('scene-1','Miami Beach aerial coastline South Beach skyline','Aerial view of Miami Beach and its Atlantic coastline','Vue aérienne de Miami Beach et de la côte atlantique'),
 ('scene-2','South Beach Miami Florida Art Deco Ocean Drive','Art Deco streets in South Beach','Architecture Art déco de South Beach'),
 ('scene-3','Mid Beach Miami Beach ocean beach Collins Avenue','Miami Beach Atlantic shore','Le front de mer Atlantique à Miami Beach'),
 ('scene-4','Surfside Miami Florida beach coastline','Quiet Surfside coastline near Miami Beach','Littoral paisible de Surfside'),
 ('scene-5','Brickell skyline Miami Florida Biscayne Bay','Brickell towers rising beside Biscayne Bay','La skyline de Brickell sur la baie'),
 ('scene-6','Wynwood Miami murals colorful street','Wynwood street art, Miami','Street art dans le quartier de Wynwood'),
 ('scene-7','Miami Biscayne Bay skyline sunset evening','Miami skyline across Biscayne Bay','Skyline de Miami depuis la baie'),
 ('scene-8','Miami Design District Florida buildings design','Architecture of the Miami Design District','L’architecture du Miami Design District'),
 ('scene-9','South Pointe Park Miami Beach ocean','South Pointe Park and Miami Beach shoreline','South Pointe Park et le rivage de Miami Beach')
]
HOTELS=[
 ('setai','The Setai, Miami Beach',['https://www.miamiandbeaches.com/l/hotels/the-setai/3548','https://www.thesetaihotel.com/'],['thesetaihotel.com','miamiandbeaches.com']),
 ('faena','Faena Hotel Miami Beach',['https://www.faena.com/miami-beach/accommodations','https://www.faena.com/miami-beach'],['faena.com']),
 ('edition','The Miami Beach EDITION',['https://www.miamiandbeaches.com/l/hotels/the-miami-beach-edition/5433','https://www.editionhotels.com/miami-beach/gallery/'],['editionhotels.com','miamiandbeaches.com']),
 ('surf-club','Four Seasons Hotel at The Surf Club',['https://www.miamiandbeaches.com/l/hotels/four-seasons-hotel-at-the-surf-club/6396','https://www.fourseasons.com/surfside/'],['fourseasons.com','miamiandbeaches.com'])
]
def get(url,timeout=28):
 for attempt in range(3):
  try:
   r=SESSION.get(url,timeout=timeout)
   r.raise_for_status()
   return r
  except requests.RequestException:
   if attempt==2: raise
   time.sleep(1.5*(attempt+1))
def safe(s):return BeautifulSoup(str(s or ''),'html.parser').get_text(' ',strip=True)[:220]
def store(raw,path):
 im=Image.open(io.BytesIO(raw))
 im=ImageOps.exif_transpose(im).convert('RGB')
 if im.width<650 or im.height<420:raise ValueError('too small '+str(im.size))
 dims=list(im.size)
 im.thumbnail((1800,1450),Image.Resampling.LANCZOS)
 v=ImageStat.Stat(im.resize((120,90),Image.Resampling.LANCZOS)).stddev
 if sum(v)/3<11:raise ValueError('flat placeholder')
 path.parent.mkdir(parents=True,exist_ok=True)
 im.save(path,'WEBP',quality=83,method=5)
 raw2=path.read_bytes()
 if len(raw2)<16000:raise ValueError('too small webp')
 return dict(originalSize=dims,outputSize=list(im.size),bytes=len(raw2),sha256=hashlib.sha256(raw2).hexdigest())
def commons_candidates(q):
 params=dict(action='query',prop='imageinfo',iiprop='url|extmetadata|size|mime',iiurlwidth='1600',format='json',formatversion='2')
 if q.startswith('File:'):params.update(titles=q)
 else:params.update(generator='search',gsrsearch=q,gsrnamespace='6',gsrlimit='20')
 j=get(API+'?'+urllib.parse.urlencode(params)).json()
 pages=j.get('query',{}).get('pages',[])
 return [p for p in pages if p.get('imageinfo')]
PREFERRED={
 'scene-1':'File:Miami Beach - along the beach.jpg',
 'scene-3':'File:MIami Beach.jpg',
 'scene-4':'File:Surfside beach in 2026.jpg',
 'scene-5':'File:Brickell neighborhood skyline (60062p).jpg',
 'scene-7':'File:Miami Skyline from Brickell Key - panoramio.jpg',
 'scene-8':'File:Design District Miami.jpg',
 'scene-9':'File:Miami Beach from South Pointe Park Pier.jpeg'
}
def city():
 rows=[];used=set()
 for key,q,en,fr in QUESTIONS:
  search=([PREFERRED[key]] if key in PREFERRED else [])+[q]
  if key=='scene-4':search+=['Surfside beach Florida Miami','Surfside Florida coast']
  if key=='scene-8':search+=['Miami Design District buildings','Miami Florida design district']
  if key=='scene-6':search+=['Wynwood Walls Miami','Wynwood Miami mural']
  if key=='scene-7':search+=['Miami skyline Biscayne Bay','Downtown Miami skyline']
  if key=='scene-1':search+=['Miami beach coastline aerial','South Beach Miami aerial']
  item=None
  for term in search:
   try:pages=commons_candidates(term)
   except Exception as e: print('Commons search failed',term,str(e)[:180],flush=True);continue
   for p in pages:
    ii=p['imageinfo'][0]; meta=ii.get('extmetadata',{})
    mime=ii.get('mime','');title=p.get('title','')
    if not mime.startswith('image/') or 'svg' in mime or 'gif' in mime:continue
    if ii.get('width',0)<700 or ii.get('height',0)<480:continue
    text=(title+' '+safe(meta.get('ImageDescription',{}).get('value',''))).lower()
    if not any(t in text for t in ['miami','south beach','surfside','wynwood','brickell','biscayne']):continue
    license=safe(meta.get('LicenseShortName',{}).get('value',''))
    if not (license.startswith('CC BY') or license in ('CC0','Public domain')):continue
    if key=='scene-6' and not any(x in text for x in ('wynwood','mural','street art')):continue
    if key=='scene-8' and not any(x in text for x in ('design district','miami design','design district')):continue
    if key=='scene-4' and 'surfside' not in text:continue
    if title in used:continue
    artist=safe(meta.get('Artist',{}).get('value','')) or 'Wikimedia Commons contributor (inspect author metadata)'
    if artist.startswith('Wikimedia Commons contributor'):continue
    uri=ii.get('thumburl') or ii.get('url')
    try:
     path=ROOT/'destination'/(key+'.webp')
     metadata=store(get(uri).content,path)
     item={**metadata,'key':key,'localPath':'/'+str(path).removeprefix('public/'),
      'sourcePage':'https://commons.wikimedia.org/wiki/'+title.replace(' ','_'),
      'downloadUrl':uri,'credit':artist,'license':license,
      'licenseUrl':safe(meta.get('LicenseUrl',{}).get('value','')) or 'https://creativecommons.org/licenses/',
      'commercialRightsCleared':True,'rightsEvidenceType':'wikimedia_cc_attribution',
      'status':'source_identified_private_preview','visuallyVerified':False,
      'frCaption':fr,'enCaption':en,'commonsTitle':title}
     used.add(title);break
    except Exception as e:print('Reject Commons',title,str(e)[:150],flush=True)
   if item:break
  if item:rows.append(item);print('City',key,item['commonsTitle'],item['bytes'],flush=True)
  else:print('CITY IMAGE MISSING',key,flush=True)
 return rows
def image_sources(page,soup):
 urls=[]
 for tag in soup.find_all(['img','source']):
  alt=str(tag.get('alt',''))+' '+str(tag.get('title',''))
  for attr in ['data-src','src','data-lazy-src','data-original','data-srcset','srcset']:
   s=tag.get(attr) or ''
   if not s:continue
   candidate=str(s).split(',')[-1].strip().split(' ')[0]
   if candidate.startswith('data:'):continue
   urls.append((urllib.parse.urljoin(page,html.unescape(candidate)),alt))
 for tag in soup.find_all('meta'):
  if tag.get('property') in ['og:image','twitter:image']:
   urls.append((urllib.parse.urljoin(page,tag.get('content','')),'Official hotel hero'))
 for j in soup.find_all('script',type='application/ld+json'):
  try:
   data=json.loads(j.string or j.text)
   if isinstance(data,dict) and isinstance(data.get('image'),str):urls.append((urllib.parse.urljoin(page,data['image']),'Official hotel image'))
  except:pass
 return urls

CURATED={
 'setai':[
  ('https://static.prod.r53.tablethotels.com/media/ecs/global/michelin-articles/FloridaKeys/Setai.jpg',
   'https://guide.michelin.com/us/en/article/travel/all-the-michelin-key-hotels-in-miami-best-hotels',
   'The Setai Miami Beach – poolside hotel setting','The Setai Miami Beach – piscines au cœur de l’hôtel'),
  ('https://media.cntraveler.com/photos/53daa669dcd5888e145c2b9a/master/w_1600%2Cc_limit/miami-setai-ocean-suites.jpg',
   'https://www.cntraveler.com/stories/2014-05-25/miami-beach-florida-weekend-getaway',
   'The Setai Miami Beach – ocean-view suite interior','The Setai Miami Beach – intérieur d’une suite vue océan'),
  ('https://assets.simpleviewinc.com/simpleview/image/upload/c_fit%2Cw_1440%2Ch_900/crm/miamifl/The-Setai5-1440x9000-49b198955056a36_49b199ec-5056-a36a-0b15aef8669a5e09.jpg',
   'https://www.miamiandbeaches.com/l/hotels/the-setai/3548',
   'The Setai Miami Beach – Art Deco lobby','The Setai Miami Beach – lobby de l’immeuble Art déco'),
  ('https://www.turontravel.com/cp/uploads/09.32.18-aea1cce39fb6923402d594cadd7ae7f4.jpeg',
   'https://www.turontravel.com/hotel/art-basel-miami-beach-2024-abmb24/the-setai-south-beach/',
   'The Setai Miami Beach – courtyard and hotel atmosphere','The Setai Miami Beach – cour et atmosphère de l’hôtel')
 ],
 'edition':[
  ('https://www.editionhotels.com/wp-content/uploads/2016/06/Premier-Bungalow-Oceanfront-Suite-Day-1870x1400-e1472069401986.jpg',
   'https://www.editionhotels.com/miami-beach/rooms-and-suites/premiere-bungalow-ocean-view-suite/',
   'The Miami Beach EDITION – premier ocean-view bungalow balcony and private plunge pool','The Miami Beach EDITION – terrasse d’un bungalow avec bassin privé'),
  ('https://www.editionhotels.com/wp-content/uploads/2016/06/Bungalow-Oceanfront-King-1870x1400-e1472067561731.jpg',
   'https://www.editionhotels.com/miami-beach/rooms-and-suites/bungalow-oceanview/',
   'The Miami Beach EDITION – oceanfront bungalow interior','The Miami Beach EDITION – bungalow face à l’océan'),
  ('https://media.cntraveller.com/photos/669f89a2be8009057012761a/4%3A3/w_1280%2Cc_limit/Pool2-MiamiBeachEdition-Florida-CRHotel.jpg',
   'https://www.cntraveller.com/gallery/best-hotels-miami',
   'The Miami Beach EDITION – hotel swimming pool','The Miami Beach EDITION – piscine de l’hôtel')
 ],
 'surf-club':[
  ('https://www.fourseasons.com/content/dam/fourseasons/images/web/MFL/MFL_1371_aspect16x9.jpg',
   'https://press.fourseasons.com/surfside/hotel-news/2024/worlds-50-best-hotels/',
   'Four Seasons Hotel at The Surf Club – Surfside oceanfront pool and beach','Four Seasons Hotel at The Surf Club – piscine et rivage de Surfside'),
  ('https://www.fourseasons.com/alt/img-opt/~70.1530.0%2C0000-0%2C0000-1600%2C0000-900%2C0000/publish/content/dam/fourseasons/images/web/MFL/MFL_426_aspect16x9.jpg',
   'https://www.fourseasons.com/surfside/accommodations/residential-suites/ocean-front-one-bedroom-suite/',
   'Four Seasons Hotel at The Surf Club – oceanfront residential suite','Four Seasons Hotel at The Surf Club – suite résidentielle vue océan'),
  ('https://media.cntraveller.com/photos/657045612ab89eb336b95ac3/4%3A3/w_1280%2Cc_limit/17024_press_surfclub_3-12-17_02-copy.jpg',
   'https://www.cntraveller.com/gallery/best-hotels-miami',
   'Four Seasons Hotel at The Surf Club – shaded pool and historic architecture','Four Seasons Hotel at The Surf Club – piscine à l’ombre et architecture historique'),
  ('https://photos.hotelbeds.com/giata/original/68/681685/681685a_hb_a_006.jpg',
   'https://www.postcard.inc/places/four-seasons-hotel-at-the-surf-club-surfside-florida-surfside',
   'Four Seasons Hotel at The Surf Club – poolside retreat','Four Seasons Hotel at The Surf Club – piscine et cabanes')
 ]
}

def hotels():
 rows=[]
 for key,name,pages,allow in HOTELS:
  candidates=[];known=set()
  for page in pages:
   try:
    soup=BeautifulSoup(get(page).text,'html.parser')
    for url,alt in image_sources(page,soup):
     host=urllib.parse.urlparse(url).hostname or ''
     if not url.startswith('http') or url in known:continue
     known.add(url)
     if any(x in url.lower() for x in ['logo','icon','favicon','arrow','flag','badge','award','svg','avatar','map','pixel','gif','youtube']):continue
     if not any(t in host for t in [*allow,'cdn','cloudinary','imgix','contentful','s3.amazonaws','cloudfront','fastly','prismic','wpengine','akamai','sanity','marriott','imagekit','azureedge']):continue
     low=(url+' '+alt).lower()
     score=8*any(s in low for s in ('suite','guestroom','bedroom','hotel','resort','room','lobby'))
     score+=5*any(s in low for s in ('ocean','pool','terrace','beach','surf','faena','setai','edition','four-seasons'))
     score+=2 if page==pages[0] else 0
     score-=8*any(s in low for s in ('portrait','food','cocktail','dish','wine','team','face','headshot','chef'))
     # Non-hotel cross-brand images on tourism pages must not enter this hotel's gallery.
     if 'miamiandbeaches.com' in host and key=='setai' and not any(x in low for x in ('setai','jaya','art deco suites','ocean front suite')):continue
     if 'miamiandbeaches.com' in host and key=='surf-club' and not any(x in low for x in ('surf club','four seasons','lido','oceanfront room','conservatory','champagne bar','peacock alley')):continue
     if 'miamiandbeaches.com' in host and key=='edition' and not any(x in low for x in ('edition','bungalow')):continue
     score+=10 if any(x in alt.lower() for x in ('setai','surf club','faena','miami beach edition')) else 0
     candidates.append((score,url,alt,page))
    print(name,'candidate page',page,'=',len(candidates),flush=True)
   except Exception as e:print(name,'website inaccessible',str(e)[:160],flush=True)
  candidates.sort(key=lambda x:-x[0])
  used=set();digests=set();saved=[]
  for score,url,alt,page in candidates:
   if len(saved)>=3:break
   if score<0:continue
   canonical=urllib.parse.urlsplit(url).path.lower()
   # EDITION group homepage features other continents/hotels; never show those as Miami.
   if key=='edition' and any(k in canonical for k in ('europe','sanya','north-america','destinationo','asia-pacific','logo')):continue
   if key=='edition' and not any(k in canonical for k in ('miami','mb_','miabeach','miaeb','edition')):continue
   canonical=re.sub(r'/styles/[^/]+/public/','/public/',canonical)
   if canonical in used:continue
   used.add(canonical)
   try:
    raw=get(url,17).content
    path=ROOT/key/('view-'+str(len(saved)+1)+'.webp')
    meta=store(raw,path)
    if meta['sha256'] in digests:continue
    digests.add(meta['sha256'])
    saved.append({**meta,'key':'view-'+str(len(saved)+1),'propertyKey':key,'property':name,
       'localPath':'/'+str(path).removeprefix('public/'),'sourcePage':page,
       'downloadUrl':url,'credit':name+' — original hotel publisher (creator licence unverified)',
       'license':'Hotel or local tourism bureau publisher media; private owner preview only, commercial rights not independently cleared.',
       'licenseUrl':page,'status':'source_identified_private_preview',
       'commercialRightsCleared':False,'rightsEvidenceType':'operator_publisher_not_commercially_cleared',
       'visuallyVerified':False,'frCaption':name+' · photographie de l’établissement (vérification visuelle requise)',
       'enCaption':name+' · property publisher photograph (visual approval pending)','originalAlt':alt[:200]})
   except Exception as e:print('Hotel photo reject',name,str(e)[:110],flush=True)
  # Curated images have hotel-specific named sources; unlike generic gallery scraping,
  # photos from the EDITION group may not represent other cities or hotels.
  curated=CURATED.get(key,[])
  if curated:
   selected=[];source_urls=set();hashes=set()
   for url,source,en,fr in curated:
    if len(selected)>=3:break
    if url in source_urls:continue
    source_urls.add(url)
    try:
     dest=ROOT/key/('view-'+str(len(selected)+1)+'.webp')
     meta=store(get(url,24).content,dest)
     if meta['sha256'] in hashes:continue
     hashes.add(meta['sha256'])
     selected.append({**meta,'key':'view-'+str(len(selected)+1),
      'propertyKey':key,'property':name,'localPath':'/'+str(dest).removeprefix('public/'),
      'sourcePage':source,'downloadUrl':url,
      'credit':name+' – source-identified hotel photograph; creator rights not independently verified',
      'license':'Publisher photograph, private owner Preview only; no independent commercial republication licence',
      'licenseUrl':source,'rightsEvidenceType':'operator_publisher_not_commercially_cleared',
      'commercialRightsCleared':False,'status':'source_identified_private_preview',
      'visuallyVerified':False,'frCaption':fr,'enCaption':en,'originalAlt':en})
     print('CURATED',key,en,meta['bytes'],flush=True)
    except Exception as e:print('CURATED IMAGE REJECTED',key,source,str(e)[:180],flush=True)
   if len(selected)>=3:
    saved=selected
   elif key in ('setai','surf-club') or len(saved)<3:
    # These sources are too few: visible page may show only validated photos.
    saved=selected if len(selected)>len(saved) else saved
   print('CURATED HOTEL',name,len(selected),'of 3',flush=True)
  print('HOTEL',name,'acquired',len(saved),'of 3',flush=True)
  rows.extend(saved)
 return rows
def main():
 cityPhotos=city();hotelPhotos=hotels()
 out={'destination':'miami','scope':'owner_noindex_preview','note':'Hotel publisher reuse rights unverified; review each photo, no production indexing',
      'cityCount':len(cityPhotos),'hotelCount':len(hotelPhotos),'destinationScenes':cityPhotos,'hotels':hotelPhotos}
 OUT.parent.mkdir(parents=True,exist_ok=True)
 OUT.write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
 print('SUMMARY',len(cityPhotos),'city views and',len(hotelPhotos),'hotel images',flush=True)
 if len(cityPhotos)<7: raise SystemExit('Insufficient authentic Miami CC landscape photographs; no release')
if __name__=='__main__':main()
