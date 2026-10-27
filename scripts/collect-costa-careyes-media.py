#!/usr/bin/env python3
"""Source-identify and locally collect 21 actual Careyes images for owner-only Preview.
A photo being served by Careyes/Showit is NOT a public commercial-use permission.
"""
from pathlib import Path
from urllib.parse import urljoin,urlsplit,unquote
from html import unescape
from PIL import Image,ImageOps,ImageDraw
from bs4 import BeautifulSoup
import hashlib,io,json,re,requests,time
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'public/images/travel/costa-careyes-premium'
MAN=ROOT/'data/travel/costaCareyesMediaCandidates.json'
CONTACT=ROOT/'docs/travel-costa-careyes-contact-sheet.jpg'
S=requests.Session()
S.headers.update({'User-Agent':'Mozilla/5.0 (compatible; BosphorasTravel/1.0; editorial private image QA)', 'Accept':'image/webp,image/jpeg,image/png,*/*'})
SITES={
 'sol':'https://careyes.net/iconic-villas',
 'carioca':'https://careyes.net/villa-casita-carioca',
 'club':'https://careyes.net/el-careyes-club-and-residences',
 'bungalow':'https://careyes.net/playa-rosa-bungalows',
 'beaches':'https://careyes.com/beaches',
 'wonders':'https://careyes.com/careyes-wonders',
 'architecture':'https://careyes.com/architecture',
 'activities':'https://careyes.com/activities',
 'accommodation':'https://careyes.net/accommodations'}
HOTELS=[
 ('sol','Sol de Oriente — Iconic Villa',r'sol[-_]de[-_]oriente',[
 ('Sol de Oriente : piscine circulaire suspendue au Pacifique','Sol de Oriente: circular panoramic Pacific pool'),
 ('Sol de Oriente : palapa sculpturale et terrasse','Sol de Oriente: sculptural palapa and terrace'),
 ('Sol de Oriente : architecture et panorama de Careyitos','Sol de Oriente: landmark villa over Careyitos')]),
 ('carioca','Casita Carioca — Signature Villa',r'(?:casita[-_]carioca|villa[-_]carioca)',[
 ('Casita Carioca : villa côtière colorée','Casita Carioca: colourful oceanfront villa'),
 ('Casita Carioca : piscine à débordement et terrasse','Casita Carioca: infinity pool and terrace'),
 ('Casita Carioca : vie intérieure et vue sur la mer','Casita Carioca: interior living and sea views')]),
 ('club','El Careyes Club & Residences',r'(?:el[-_]careyes[-_]club|club[-_]and[-_]residences)',[
 ('El Careyes Club : piscine à débordement face au Pacifique','El Careyes Club: oceanfront infinity pool'),
 ('El Careyes Club : architecture des résidences privées','El Careyes Club: private residence architecture'),
 ('El Careyes Club : espaces de détente et plage','El Careyes Club: relaxing spaces and beach')]),
 ('bungalow','Playa Rosa Bungalows',r'bungalows[-_]playa[-_]rosa',[
 ('Playa Rosa : authentiques bungalows roses à toit de palapa','Playa Rosa: authentic thatched beachfront bungalows'),
 ('Playa Rosa : bungalow tropical coloré et terrasse','Playa Rosa: colourful tropical bungalow and terrace'),
 ('Playa Rosa : chambres et ambiance de bord de mer','Playa Rosa: distinctive beach bungalow interiors')])
]
SCENES=[
 (['beaches','accommodation','architecture'],r'(?:coastline[-_]careyes|costa[-_]alegre)',"La côte découpée de Costa Careyes vue du ciel","The dramatic Costa Careyes shoreline"),
 (['beaches'],r'(?:playa[-_]rosa|beach[-_]rosa)',"Playa Rosa et son rivage abrité","Playa Rosa and its coastal bay"),
 (['accommodation','beaches','architecture'],r'(?:coastline[-_]careyes[-_]mexico[-_]properties[-_]casitas[-_]de[-_]las[-_]flores|casitas[-_]de[-_]las[-_]flores)',"Casitas de las Flores et leurs façades colorées","The colourful Casitas de las Flores"),
 (['beaches','wonders'],r'(?:careyitos|sol[-_]de[-_]oriente|sol[-_]de[-_]occidente)',"Careyitos : villas et petites criques du Pacifique","Careyitos: iconic villas and Pacific coves"),
 (['beaches','activities'],r'(?:teopa|turtle[-_]|tortugas)',"Playa Teopa : dunes, rivage naturel et sanctuaire","Playa Teopa: natural beach and conservation"),
 (['wonders'],r'(?:copa[-_]del[-_]sol|careyes[-_]wonders[-_]copa)',"Copa del Sol : sculpture monumentale dans le paysage","Copa del Sol: monumental landscape sculpture"),
 (['activities'],r'(?:horseback|caballos|horses|polo)',"Careyes : polo ou promenade à cheval au bord du Pacifique","Careyes: polo or horseback adventures"),
 (['activities','beaches'],r'(?:marine[-_]encounters|ocean[-_]activities|kayak|boat)',"Excursion maritime entre les criques de Careyes","Careyes: a coastal excursion and offshore waters"),
 (['architecture','beaches','accommodation'],r'(?:coastline|careyes[-_]mexico[-_]palm|sunset|aerial)',"Costa Careyes : l'architecture rencontre le littoral sauvage","Costa Careyes: architecture and wild Pacific coastline")
]
def fetch(url):
 err=None
 for attempt in range(4):
  try:
   r=S.get(url,timeout=45,allow_redirects=True)
   if r.status_code in (429,500,502,503,504):
    err=RuntimeError('status '+str(r.status_code));time.sleep(attempt*3+3);continue
   r.raise_for_status()
   return r
  except requests.RequestException as e:
   err=e;time.sleep(2+attempt*3)
 raise RuntimeError(str(err)+' from '+url)
def get_images(page):
 resp=fetch(page);html=resp.text
 soup=BeautifulSoup(html,'html.parser')
 candidates=[]
 def add(link,alt):
  if not link:return
  link=unescape(link.replace('&amp;','&')).strip()
  if link.startswith('//'):link='https:'+link
  if link.startswith('/'):link=urljoin(resp.url,link)
  if link.startswith('http://'):link='https://'+link[7:]
  if not link.startswith('https://'):return
  if 'static.showit.co' not in link and not re.search(r'\.(?:jpe?g|webp|png)(?:\?|$)',link,re.I):return
  if re.search(r'\.svg|bluebackground|stripe|placeholder',link,re.I):return
  if link.startswith('https://static.showit.co/'):
   link=re.sub(r'(?<=static\.showit\.co)/\d{2,4}/','/1200/',link,count=1)
  key=unquote(urlsplit(link).path).split('/')[-1].lower()
  if not re.search(r'\.(jpe?g|webp|png)$',key):return
  if key not in seen:
   candidates.append({'url':link,'label':alt or key,'file':key,'sourcePage':resp.url})
   seen.add(key)
 seen=set()
 for el in soup.find_all(['img','source']):
  alt=el.get('alt','') or el.get('title','')
  for attr in ['src','data-src','data-original','data-lazy','data-lazy-src','srcset','data-srcset']:
   value=el.get(attr,'')
   if not value:continue
   if 'srcset' in attr:
    for part in value.split(','):add(part.strip().split()[0],alt)
   else:add(value,alt)
 # The official Showit site also places some images in CSS and embedded content.
 for match in re.finditer(r'(?:https?:)?//static\.showit\.co/(?:\d{2,4})/[^"\'\s<>)]+?\.(?:jpe?g|webp|png)',html,re.I):
  add(match.group(0),'')
 print('PAGE',page,'PHOTO_CANDIDATES',len(candidates),flush=True)
 print('SAMPLES',[(x['file']) for x in candidates[:18]],flush=True)
 return candidates
def download(entry,key,folder,fr,en,extra):
 r=fetch(entry['url'])
 if len(r.content)>23000000:raise RuntimeError('image >23MB')
 try:im=ImageOps.exif_transpose(Image.open(io.BytesIO(r.content)))
 except Exception as e:raise RuntimeError('not a decoded image '+entry['url']+' '+str(e))
 if im.width<650 or im.height<380:raise RuntimeError('small image '+entry['file']+' '+str(im.size))
 if not 0.45<im.width/im.height<3.5:raise RuntimeError('unusual crop '+entry['file'])
 dimensions=list(im.size)
 im=im.convert('RGB');im.thumbnail((1650,1200),Image.Resampling.LANCZOS)
 dest=OUT/folder/(key+'.webp');dest.parent.mkdir(parents=True,exist_ok=True)
 im.save(dest,'WEBP',quality=82,method=5);data=dest.read_bytes()
 if len(data)<14000:raise RuntimeError('invalid output '+str(dest))
 return dict(key=key,localPath='/'+str(dest.relative_to(ROOT/'public')),
  propertyKey=folder if folder!='destination' else None,
  sourcePage=entry['sourcePage'],downloadUrl=entry['url'],
  photographerCredit='Careyes official website / named photographer on original source; permission not independently established',
  credit='Careyes official photography · creator publication rights pending',
  license='Private editorial review only. No independent commercial reproduction licence.',
  licenseUrl=entry['sourcePage'],rightsEvidenceType='operator_publisher_not_commercially_cleared',
  commercialRightsCleared=False,
  status='visually_awaiting_review',visuallyVerified=False,visualQaWarning='Photo contact sheet must be inspected',
  frCaption=fr,enCaption=en,originalFile=entry['file'],originalSize=dimensions,outputSize=list(im.size),
  sha256=hashlib.sha256(data).hexdigest(),bytes=len(data),**extra)
PREFERRED_HOTEL={
 'sol':['00-4-sol-de-oriente-luxury-villa-careyes-mexico-0786.jpg','00-2-sol-de-oriente-careyes-mexico-pacific-coast-careyitos.jpg','d-sol-de-oriente-luxury-villa-careyes-mexico-7982-terrace-sunbeds.jpg'],
 'carioca':['00-1-careyes-mexico-properties-villas-casita-carioca-_c_karlacifuentes-5348.jpg','00-3-careyes-mexico-properties-villas-casita-carioca-drone-_c_karlacifuentes-0484.jpg','02-4-careyes-mexico-properties-villas-casita-carioca-terrace-lounge-ocean-view-4273.jpg'],
 'club':['00-1-careyes-mexico-properties-el-careyes-club-and-residences-general-0444.jpg','03-2-careyes-mexico-properties-el-careyes-club-and-residences-general-pools-0326.jpg','03-2-careyes-club-and-residences-general-lounge-pool-0365.jpg'],
 'bungalow':['g-4-careyes-mexico-bungalows-playa-rosa-0612.jpg','g-6-careyes-mexico-bungalows-playa-rosa-drone-view-0008.jpg','g-1-careyes-mexico-bungalows-playa-rosa-0576.jpg']
}
PREFERRED_SCENE={
 3:['00-coastline-careyes-mexico-properties-casitas-de-las-flores-0233.jpg'],
 5:['playa-teopa-careyes-mexico-0968.jpg','playa-teopa-careyes-mexico-0980.jpg'],
 6:['careyes-wonders-copa-del-sol-0924-edited-opt2.jpg','careyes-wonders-copa-del-sol-0037-opt2.jpg'],
 8:['careyes-coastal-tour-boat-trip-0109.jpg','careyes-coastal-tour-boat-trip-1710.jpg']
}
def rank(items,names):
 lookup={n:i for i,n in enumerate(names)}
 return sorted(items,key=lambda x:(lookup.get(x['file'],999),x['file'].endswith('-mobile.jpg'),x['file']))
def choose(pool,pat,used,needed,label,frens,key,folder,strict=True):
 matches=rank([x for x in pool if re.search(pat,x['file'],re.I) and x['file'] not in used],PREFERRED_HOTEL.get(folder,[]))
 print('MATCHES',label,len(matches),[x['file'] for x in matches[:9]],flush=True)
 out=[]
 for item in matches:
  if len(out)>=needed:break
  fr,en=frens[len(out)]
  try:
   p=download(item,key+'-'+str(len(out)+1) if folder!='destination' else 'scene-'+str(key),folder,fr,en,{'property':label} if folder!='destination' else {'place':'Costa Careyes, Jalisco, México'})
   if p['sha256'] in {z['sha256'] for z in out}:continue
   out.append(p);used.add(item['file'])
  except Exception as e:
   print('CANDIDATE_REJECTED',label,item['file'],str(e),flush=True)
 if len(out)!=needed:raise RuntimeError('NEED '+str(needed)+' images for '+label+' got '+str(len(out)))
 return out
def contact(items):
 w=1370;h=100+((len(items)+3)//4)*250
 im=Image.new('RGB',(w,h),'#e6e8e7');d=ImageDraw.Draw(im)
 d.text((15,14),'COSTA CAREYES - 21 SOURCE IDENTIFIED IMAGES - PRIVATE PREVIEW ONLY',fill='#1a372c')
 d.text((15,39),'4 genuine accommodation products + 9 distinctive coast/activity views; operator images NOT commercially licensed',fill='#374c46')
 for i,p in enumerate(items):
  x=14+(i%4)*338;y=78+(i//4)*250
  photo=Image.open(ROOT/'public'/p['localPath'].lstrip('/')).convert('RGB')
  photo.thumbnail((322,208),Image.Resampling.LANCZOS)
  tile=Image.new('RGB',(322,208),'white');tile.paste(photo,((322-photo.width)//2,(208-photo.height)//2));im.paste(tile,(x,y))
  d.text((x,y+213),(p.get('propertyKey') or 'destination')+'/'+p['key'],fill='#193d31')
 im.save(CONTACT,quality=84)
def main():
 pages={k:get_images(u) for k,u in SITES.items()}
 used=set();hotel=[]
 for key,name,pattern,captions in HOTELS:
  related= {'sol':['sol','accommodation','architecture','wonders'], 'carioca':['carioca','accommodation'], 'club':['club','accommodation'], 'bungalow':['bungalow','accommodation','architecture']}[key]
  pool=[];seen_files=set()
  for pagename in related:
   for img in pages[pagename]:
    if img['file'] not in seen_files:
     pool.append(img);seen_files.add(img['file'])
  hotel+=choose(pool,pattern,used,3,name,captions,'view',key)
 scenes=[]
 for i,(pageset,pattern,fr,en) in enumerate(SCENES,1):
  pool=[];seen=set()
  for p in pageset:
   for x in pages[p]:
    if x['file'] not in seen:pool.append(x);seen.add(x['file'])
  matched=rank([x for x in pool if re.search(pattern,x['file'],re.I) and x['file'] not in used],PREFERRED_SCENE.get(i,[]))
  print('SCENE',i,'MATCHES',len(matched),[x['file'] for x in matched[:12]],flush=True)
  accepted=None
  for x in matched:
   try:
    p=download(x,'scene-'+str(i),'destination',fr,en,{'place':'Costa Careyes, Jalisco, México'})
    if any(t['sha256']==p['sha256'] for t in hotel+scenes):continue
    accepted=p;used.add(x['file']);break
   except Exception as e:print('SCENE_REJECTED',i,x['file'],str(e),flush=True)
  if not accepted:raise RuntimeError('No accurate image for required scene '+str(i))
  scenes.append(accepted)
 all_=hotel+scenes
 if len(hotel)!=12 or len(scenes)!=9 or len({p['sha256'] for p in all_})!=21:raise RuntimeError('photo count/byte duplicates')
 # Perceptual hash checks: record warnings for manual check instead of silently asserting licence or identity.
 hashes=[]
 for p in all_:
  pic=Image.open(ROOT/'public'/p['localPath'].lstrip('/')).convert('L').resize((12,12))
  avg=sum(pic.getdata())/144;hashes.append([z>avg for z in pic.getdata()])
 for i in range(len(hashes)):
  for j in range(i):
   difference=sum(x!=y for x,y in zip(hashes[i],hashes[j]))
   if difference<5:raise RuntimeError('VISUAL_NEAR_DUPLICATE '+all_[i]['localPath']+' vs '+all_[j]['localPath'])
 MAN.parent.mkdir(parents=True,exist_ok=True)
 MAN.write_text(json.dumps({'destination':'costa-careyes','hotels':hotel,'destinationScenes':scenes,
 'downloadedHotelCandidates':12,'downloadedDestinationCandidates':9,
 'visuallyVerified':False,'approvedForCommercialPublication':False,
 'publicationBlockedReason':'Operator photos are not independently licensed for public commercial reproduction. Restricted nonindexable owner Preview only.',
 'provenanceNote':'Source pages, filenames, image hashes and source attribution tracked. Careyes is a private villa/club community, not four distinct hotels.'},ensure_ascii=False,indent=2)+'\n')
 contact(all_)
 print('CAREYES_21_CANDIDATES_IMPORTED',flush=True)
if __name__=='__main__':main()
