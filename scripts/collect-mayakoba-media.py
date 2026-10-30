#!/usr/bin/env python3
"""Mayakoba 2026 #59 official destination / hotel images, owner-only noindex preview.
Every image has a Mayakoba official source page, verified file and hotel identity.
NO claim of commercial licence and NO image publication authorisation; source-run enabled.
"""
import requests,bs4,pathlib,json,io,re,hashlib,time,urllib.parse
from PIL import Image,ImageOps,ImageStat
BASE=pathlib.Path('public/images/travel/mayakoba-premium')
MANIFEST=pathlib.Path('data/travel/mayakobaMediaCandidates.json')
SESSION=requests.Session()
SESSION.headers.update({'User-Agent':'Mozilla/5.0 (compatible; Bosphoras Luxury Stays owner image source review)'})
DEST_PAGES=[
 'https://mayakoba.com/',
 'https://mayakoba.com/location/',
 'https://mayakoba.com/hotels-overview/',
 'https://mayakoba.com/experiences/',
 'https://mayakoba.com/golf/',
 'https://mayakoba.com/dia-de-muertos/'
]
HOTELS={
 'rosewood':('Rosewood Mayakoba','https://mayakoba.com/hotels-overview/rosewood-mayakoba/'),
 'banyan-tree':('Banyan Tree Mayakoba','https://www.banyantree.com/mexico/mayakoba'),
 'fairmont':('Fairmont Mayakoba','https://www.fairmont-mayakoba.com/'),
 'alila':('Alila Mayakoba','https://mayakoba.com/hotels-overview/alila-mayakoba/')
}
SCENES=[
('scene-1','Mayakoba · le murmure de la lagune','Mayakoba · the emerald lagoon'),
('scene-2','Canaux et lumière au cœur de Mayakoba','Mayakoba waterways and nature'),
('scene-3','Les plages des Caraïbes','Mayakoba Caribbean shoreline'),
('scene-4','La mangrove au rythme des saisons','Mayakoba living mangroves'),
('scene-5','La végétation tropicale et ses sentiers','Mayakoba tropical nature'),
('scene-6','Vie locale et paysages du domaine','Mayakoba landscape and resort life'),
('scene-7','Mayakoba, une autre lumière','Mayakoba landscape in a different light'),
('scene-8','Le monde de la lagune et des villas','Resort villas and tranquil waters'),
('scene-9','Entre jardins et mer des Caraïbes','Gardens and Caribbean water')
]
def get(url,timeout=19):
 r=SESSION.get(url,timeout=timeout);r.raise_for_status();return r
def photos(page):
 try: response=get(page);soup=bs4.BeautifulSoup(response.text,'html.parser')
 except Exception as e: print('PAGE ERROR',page,str(e)[:100],flush=True);return []
 result=[];seen=set()
 for el in soup.find_all(['img','source']):
  desc=(el.get('alt') or el.get('title') or '').strip()
  for a in ['data-srcset','srcset','data-lazy-src','data-src','data-original','src','data-bg']:
   value=el.get(a)
   if not value:continue
   if 'srcset' in a:
    split=[z.strip().split(' ')[0] for z in str(value).split(',')]
    u=split[-1] if split else ''
   else:u=str(value)
   url=urllib.parse.urljoin(page,u)
   if not url.startswith('https://') or url in seen:continue
   seen.add(url)
   result.append((url,desc,page,'img'))
 for e in soup.find_all('meta'):
  if e.get('property') in ('og:image','twitter:image'):
   u=e.get('content')
   if u:
    u=urllib.parse.urljoin(page,u)
    if u not in seen:seen.add(u);result.append((u,'Official Mayakoba page visual',page,'meta'))
 # WordPress pages embed additional scenic image URLs as style attributes.
 for tag in soup.find_all(style=True):
  css=tag.get('style','')
  for match in re.findall(r'url\(["\']?(https?://[^)"\']+)["\']?\)',css):
   url=match.strip()
   if url.startswith('https://') and url not in seen:
    seen.add(url);result.append((url,'Mayakoba editorial background',page,'embedded'))
 print('PAGE',page,'candidates',len(result),flush=True)
 return result
def score(item,hotel=None):
 url,alt,page,kind=item
 low=(url+' '+alt).lower()
 if any(x in low for x in ['logo','icon','favicon','social','banner-ad','svg','avatar','instagram-icon',
 'placeholder','pixel','sprite','tripadvisor','award','seal','button','tracking','video-icon']):return -100
 s=3
 if any(w in low for w in ['mayakoba','lagoon','beach','villas','aerial','river','spa','pool','hero','nature','jungle','forest','resort','gallery']):s+=6
 if kind=='img':s+=3
 if hotel:
  s+=10 if any(w in low for w in hotel.replace('-',' ').split()) else 0
  if 'hotel gallery' in low:s+=30
  if hotel in ('banyan-tree','fairmont') and 'mayakoba' in low:s+=8
  if 'resort features' in low:s+=8
  if 'hotel banner' in low:s+=12
 else:
  if page.endswith('location/'):s+=9
  if page.endswith('experiences/'):s+=6
 return s
def save(url,path):
 raw=get(url,14).content
 img=Image.open(io.BytesIO(raw))
 img=ImageOps.exif_transpose(img).convert('RGB')
 orig=list(img.size)
 if img.width<850 or img.height<470:raise ValueError('too small '+str(orig))
 img.thumbnail((1800,1400),Image.Resampling.LANCZOS)
 if sum(ImageStat.Stat(img.resize((110,80))).stddev)/3<11:raise ValueError('blank image')
 path.parent.mkdir(parents=True,exist_ok=True)
 img.save(path,'WEBP',quality=83,method=5)
 buf=path.read_bytes()
 if len(buf)<18000:raise ValueError('tiny image')
 # Resized variants should not count as distinct images.
 im2=img.resize((48,48),Image.Resampling.LANCZOS)
 phash=hashlib.sha256(im2.tobytes()).hexdigest()
 return dict(originalSize=orig,outputSize=list(img.size),bytes=len(buf),sha256=hashlib.sha256(buf).hexdigest(),pixelFingerprint=phash)
def selection(items,number,prefix,propertyKey=None):
 used=set();hashes=set();out=[]
 ranked=sorted(items,key=lambda v:score(v,propertyKey),reverse=True)
 for url,alt,page,kind in ranked[:130]:
  if len(out)>=number:break
  if score((url,alt,page,kind),propertyKey)<3:continue
  urlclean=urllib.parse.urlparse(url).path.lower()
  urlclean=re.sub(r'-\d{2,4}x\d{2,4}(?=\.)','',urlclean)
  # A .jpg and .webp derivative of the same original are ONE photograph.
  urlclean=re.sub(r'\.(?:webp|jpe?g|png)$','',urlclean)
  if urlclean in used:continue
  used.add(urlclean)
  try:
   key=('view-'+str(len(out)+1)) if propertyKey else ('scene-'+str(len(out)+1))
   path=BASE/prefix/(key+'.webp')
   props=save(url,path)
   if props['sha256'] in hashes or props['pixelFingerprint'] in hashes:continue
   hashes.add(props['sha256']);hashes.add(props['pixelFingerprint'])
   d={**props,'key':key,'localPath':'/'+str(path).removeprefix('public/'),
       'sourcePage':page,'downloadUrl':url,
       'credit':'Mayakoba official destination / hotel media (photographer rights not independently verified)',
       'license':'Publisher photograph; PRIVATE owner Preview only. Commercial republication rights NOT cleared.',
       'licenseUrl':page,'commercialRightsCleared':False,
       'status':'source_identified_private_preview','visuallyVerified':False,
       'originalAlt':alt}
   if propertyKey:
    title,_=HOTELS[propertyKey];d.update(propertyKey=propertyKey,property=title,
       rightsEvidenceType='official_hotel_destination_publisher_not_commercially_cleared',
       frCaption=title+' · photographie officielle du resort (détail à confirmer)',
       enCaption=title+' · property-publisher photo (detail pending review)')
   else:
    k,fr,en=SCENES[len(out)]
    d.update(rightsEvidenceType='official_destination_publisher_not_commercially_cleared',
      frCaption=fr,enCaption=en)
   out.append(d)
   print('ACQUIRED',prefix,key,props['bytes'],'alt',alt[:72],flush=True)
  except Exception as e:print('REJECT',prefix,str(e)[:100],url[:110],flush=True)
 return out
def main():
 allv=[]
 for page in DEST_PAGES:allv.extend(photos(page))
 dest=selection(allv,9,'destination')
 hotels=[]
 for key,(name,page) in HOTELS.items():
  choices=photos(page)
  got=selection(choices,3,key,key)
  print('HOTEL',key,len(got),'of 3',flush=True)
  hotels.extend(got)
 out=dict(destination='mayakoba',scope='private_owner_noindex_preview',
  rightsNotice='No destination or hotel publisher photo has independently cleared commercial use rights.',
  cityCount=len(dest),hotelCount=len(hotels),destinationScenes=dest,hotels=hotels)
 MANIFEST.write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
 print('MAYAKOBA IMAGES',len(dest),len(hotels),flush=True)
 if len(dest)<9 or len(hotels)<12:raise SystemExit('Private media incomplete; do not deploy as finalized')
if __name__=='__main__':main()
