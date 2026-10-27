#!/usr/bin/env python3
"""Collect 12 specifically named Okavango lodge images + 9 Commons landscapes.
All operator/distributor photography is strictly private-preview candidate content;
independent photographer rights and commercial publication are NOT established.
Writes verified image byte hashes and a QA contact sheet. Requires visual review.
"""
from pathlib import Path
from PIL import Image, ImageOps, ImageDraw
import hashlib, io, json, time
import requests
from urllib.parse import quote
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'public/images/travel/okavango-delta-premium'
MAN=ROOT/'data/travel/okavangoDeltaMediaCandidates.json'
CONTACT=ROOT/'docs/travel-okavango-delta-contact-sheet.jpg'
S=requests.Session()
S.headers.update({'User-Agent':'BosphorasLuxuryStays/1.0 (editorial photo rights audit; contact: https://bosphoras.com/contact)', 'Accept':'image/avif,image/webp,image/jpeg,image/png,*/*'})
# These URLs are source-identified, not evidence of public-commerical photo permission.
# Each of the 12 below was selected as a true image of its named lodge.
HOTELS=[
('mombo','Wilderness Mombo','Mombo · camp et arrivée au crépuscule','Wilderness Mombo · lodge at dusk',
'https://www.wildernessdestinations.com/africa/botswana/okavango-delta/mombo-camp',
'https://www.wildernessdestinations.com/media/fyylufgu/walk-into-the-ultimate-luxury-camp-wilderness-mombo.webp?rmode=crop'),
('mombo','Wilderness Mombo','Mombo · architecture des suites depuis les airs','Wilderness Mombo · aerial architecture',
'https://www.wildernessdestinations.com/journal/your-guide-to-africa/a-safari-for-the-senses-through-immersive-architecture',
'https://www.wildernessdestinations.com/media/altowvrl/mombo-accommodation-camp-aerial-view.jpg?rmode=crop'),
('mombo','Wilderness Mombo','Mombo · terrasse et bassin privé face à la savane','Wilderness Mombo · private plunge pool and deck',
'https://www.wildernessdestinations.com/journal/our-collective/spotlight-on-mombo-the-mother-of-all-camps',
'https://www.wildernessdestinations.com/media/il0dzvix/private-plunge-pool-at-mombo.jpg?rmode=crop'),
('jao','Jao Camp — Jao Reserve','Jao Camp · véritable suite aux volumes sculpturaux','Jao Camp · architecturally sculpted suite',
'https://www.luxurysafaricamps.com/camps/jao-camp',
'https://images.luxurysafaricamps.com/assets/81891455983dd35b1b46ef14ecc26ffc/Jao-Camp-LuxurySafariCamps-4.jpg'),
('jao','Jao Camp — Jao Reserve','Jao Camp · chambre et terrasse de suite','Jao Camp · suite bedroom and deck',
'https://www.refinedroutes.travel/lodges/wilderness-jao',
'https://cdn.prod.website-files.com/6878d4c2568cd8bdd108bf2c/68cbfc91873c3bfba5071614_Jao%2006-19%20-102e.jpg'),
('jao','Jao Camp — Jao Reserve','Jao Camp · salon et feu central','Jao Camp · lounge and sculptural fireplace',
'https://www.secretsviptravel.com/wilderness-jao-camp/',
'https://b-cdn.springnest.com/media/img/xc/jao_06-19_-6e56a5ed3.jpg?width=1600'),
('sandibe','&Beyond Sandibe Okavango Safari Lodge','Sandibe · véritable suite ouvrant sur la forêt','Sandibe · suite opening to the woodland',
'https://yourperfectafrica.com/game-lodges/andbeyond-sandibe-okavango-safari-lodge/',
'https://yourperfectafrica.com/content/uploads/2021/05/sandibe-okavango-safari-lodge-101.jpg'),
('sandibe','&Beyond Sandibe Okavango Safari Lodge','Sandibe · architecture extérieure inspirée du pangolin','Sandibe · pangolin-inspired timber architecture',
'https://divisare.com/projects/330081-michaelis-boyd-associates-sandibe-safari-lodge',
'https://images.divisare.com/images/c_limit%2Cf_auto%2Ch_2000%2Cq_auto%2Cw_3000/v1478686238/qp5x2m4ewgstwekxvqfk/michaelis-boyd-associates-sandibe-safari-lodge.png'),
('sandibe','&Beyond Sandibe Okavango Safari Lodge','Sandibe · chambre contemporaine','Sandibe · contemporary guest bedroom',
'https://www.safari.com/lodges/sandibe-okavango-safari-lodge',
'https://cdn.prod.website-files.com/636e23f049cf12406b2feccd/67577ab32cbff4dd852d7ffe_63b63c4c69175226f74b352a_sandibe121.webp'),
('eagle','Belmond Eagle Island Lodge','Eagle Island · chambre sur la plaine inondable','Eagle Island · bedroom opening over floodplains',
'https://okavangodelta.com/camps/eagle-island-lodge/',
'https://silverless-media-okavangode.s3.eu-west-2.amazonaws.com/wp-content/uploads/2019/10/20142624/Belmond-Eagle-Island-Lodge_Bedroom-view-scaled.jpg'),
('eagle','Belmond Eagle Island Lodge','Eagle Island · terrasse et dîner face au delta','Eagle Island · shaded waterside dining deck',
'https://www.yatzer.com/belmond-eagle-island-lodge-botswana',
'https://media.yatzer.com/p6_belmond_eagle_island_lodge_the_gallery_hba_yatzer.jpg'),
('eagle','Belmond Eagle Island Lodge','Eagle Island · bassin privé sur le marais','Eagle Island · secluded suite plunge pool',
'https://www.novareisen.de/luxusreisen/reiseziele/afrika/botswana/okavango-delta-belmond-eagle-island-lodge',
'https://www.novareisen.de/upload/mediapool/Destinationen/Belmond_Eagle_Island_Lodge_Botswana/afrika-botswana-okavango-delta-eagle-island-camp-private-suite-pool-2.jpg')]
# Commons images: every license, author and actual downloaded URL comes from Wikimedia API.
SCENES=[
('Vista aérea del delta del Okavango, Botsuana, 2018-08-01, DD 23.jpg','Chenaux et mokoros du delta vus du ciel','Aerial channels and mokoros'),
('Okavango Delta.jpg','L\'immensité des zones humides vues du ciel','Aerial view of the great wetlands'),
('Mokoro In the Kavango Delta Botswana.jpg','Navigation traditionnelle en mokoro','Traditional mokoro excursion'),
('Okavangodelta Xakanaxa.jpg','Les paysages naturels de Xakanaxa','Xakanaxa wetland landscape'),
('Dusk over Okavango.jpg','Lumières du soir sur le delta','Dusk in the Okavango Delta'),
('Leopard-tree-okavango-delta-april-2025.jpg','Léopard observé dans la région du delta','Leopard in Okavango Delta habitat'),
('Okavango-delta-sunrise-april-2025.jpg','Lever du soleil dans le delta','Sunrise over the Delta'),
('Vista aérea del delta del Okavango, Botsuana, 2018-08-01, DD 32.jpg','La mosaïque de lagunes vue du ciel','Delta lagoons seen from above'),
('Sun setting after landing from a boat cruise in the Okavango Delta.jpg','Après une sortie en bateau sur les eaux du delta','Sunset after a Delta boat excursion')]
def get(url):
 last=None
 for attempt in range(4):
  try:
   r=S.get(url,timeout=55)
   if r.status_code in [429,500,502,503,504]:
    time.sleep(3+3*attempt);last=RuntimeError(f'{r.status_code} {url}');continue
   r.raise_for_status()
   return r
  except requests.RequestException as e:
   last=e;time.sleep(2+2*attempt)
 raise RuntimeError(f'download failed: {last}')
def commons(file):
 api='https://commons.wikimedia.org/w/api.php'
 r=get(api+'?action=query&format=json&prop=imageinfo&iiprop=url%7Cextmetadata&iiurlwidth=1650&titles='+quote('File:'+file))
 obj=next(iter(r.json()['query']['pages'].values()))
 if 'missing' in obj:raise RuntimeError('Missing Commons image '+file)
 info=obj['imageinfo'][0];meta=info['extmetadata']
 lic=meta.get('LicenseShortName',{}).get('value','')
 if not (lic.startswith('CC BY') or lic.startswith('CC0') or lic.lower() in ['public domain','pd-old','pd-user']):
  raise RuntimeError('Commons license not explicitly approved: '+file+' '+lic)
 from bs4 import BeautifulSoup
 author=BeautifulSoup(meta.get('Artist',{}).get('value','Unknown photographer'),'html.parser').get_text(' ',strip=True)
 if len(author)>180:author=author[:180]
 return {'url':info.get('thumburl') or info['url'],'sourcePage':info['descriptionurl'],
         'credit':author,'license':lic,'licenseUrl':meta.get('LicenseUrl',{}).get('value','https://commons.wikimedia.org/').replace('http://','https://',1),
         'rightsEvidenceType':'wikimedia_commons_licence_verified','commercialRightsCleared':True}
def save(key,section,url,fr,en,sourcePage,credit,license_,licenseUrl,rightsEvidenceType,commercialRightsCleared,extra={}):
 raw=get(url).content
 if len(raw)>23000000:raise RuntimeError('Oversize: '+url)
 im=ImageOps.exif_transpose(Image.open(io.BytesIO(raw)))
 if im.width<700 or im.height<430:raise RuntimeError('Too small '+url+' '+repr(im.size))
 if not .45<im.width/im.height<3.4:raise RuntimeError('Odd crop '+url)
 initial=list(im.size);im=im.convert('RGB');im.thumbnail((1650,1150),Image.Resampling.LANCZOS)
 dest=OUT/section/(key+'.webp');dest.parent.mkdir(parents=True,exist_ok=True)
 im.save(dest,'WEBP',quality=82,method=5)
 b=dest.read_bytes()
 if len(b)<16000:raise RuntimeError('Output unexpectedly tiny '+str(dest))
 return {'key':key,'sourcePage':sourcePage,'downloadUrl':url,'credit':credit,'license':license_,'licenseUrl':licenseUrl,'rightsEvidenceType':rightsEvidenceType,
 'status':'candidate_needs_visual_review','visuallyVerified':False,'commercialRightsCleared':commercialRightsCleared,
 'visualQaWarning':'Await human contact-sheet visual verification',
 'frCaption':fr,'enCaption':en,'localPath':'/'+str(dest.relative_to(ROOT/'public')),'sha256':hashlib.sha256(b).hexdigest(),
 'bytes':len(b),'originalSize':initial,'outputSize':list(im.size),**extra}
def sheet(photos):
 w=1360;thumbw=322;thumbh=210;h=100+((len(photos)+3)//4)*252
 out=Image.new('RGB',(w,h),'#e6e8e7');draw=ImageDraw.Draw(out)
 draw.text((15,15),'OKAVANGO DELTA - IMAGE REVIEW - PRIVATE PREVIEW ONLY',fill='#172d27')
 draw.text((15,39),'4 real lodges x 3 views + 9 Delta scenes. Photographer permission not confirmed for lodge assets.',fill='#374c45')
 for i,p in enumerate(photos):
  x=15+(i%4)*336;y=75+(i//4)*252
  a=Image.open(ROOT/'public'/p['localPath'].lstrip('/'));a.thumbnail((thumbw,thumbh))
  tile=Image.new('RGB',(thumbw,thumbh),'white');tile.paste(a,((thumbw-a.width)//2,(thumbh-a.height)//2))
  out.paste(tile,(x,y))
  text=(p.get('propertyKey','delta')+'/'+p['key'])[:43]
  draw.text((x,y+213),text,fill='#172d27')
 out.save(CONTACT,quality=83)
def main():
 hotels=[];counts={}
 for k,hotel,fr,en,src,url in HOTELS:
  counts[k]=counts.get(k,0)+1
  hotels.append(save('view-'+str(counts[k]),k,url,fr,en,src,
    hotel+' · hospitality publisher photo; individual creator permission unverified',
    'Source-distributed for private owner review; reproduction licence NOT demonstrated',src,
    'third_party_hospitality_publisher',False,{'propertyKey':k,'property':hotel}))
  print('HOTEL',k,counts[k],hotels[-1]['bytes'],flush=True)
 scenes=[]
 for i,(filename,fr,en) in enumerate(SCENES,1):
  md=commons(filename)
  scenes.append(save('scene-'+str(i),'destination',md['url'],fr,en,md['sourcePage'],md['credit'],md['license'],md['licenseUrl'],md['rightsEvidenceType'],True,{'place':'Okavango Delta, Botswana'}))
  print('SCENE',i,scenes[-1]['bytes'],scenes[-1]['license'],flush=True)
 all_=hotels+scenes
 if len(hotels)!=12 or len(scenes)!=9 or len(set(x['sha256'] for x in all_))!=21:
  raise RuntimeError('21 unique images required')
 # pHash-like cross-check prevents near-duplicates; raises instead of introducing repetitions.
 fingerprints=[]
 for p in all_:
  g=Image.open(ROOT/'public'/p['localPath'].lstrip('/')).convert('L').resize((12,12))
  avg=sum(g.getdata())/144
  bits=[int(q>avg) for q in g.getdata()]
  fingerprints.append(bits)
 for i,a in enumerate(fingerprints):
  for j in range(i):
   distance=sum(x!=y for x,y in zip(a,fingerprints[j]))
   if distance<6:raise RuntimeError('Likely near duplicate: '+all_[j]['localPath']+' '+all_[i]['localPath'])
 MAN.parent.mkdir(parents=True,exist_ok=True)
 MAN.write_text(json.dumps({'destination':'okavango-delta','hotels':hotels,'destinationScenes':scenes,
  'downloadedHotelCandidates':12,'downloadedDestinationCandidates':9,
  'visuallyVerified':False,'approvedForCommercialPublication':False,
  'publicationBlockedReason':'Operator/distributor photography may not be commercially reproduced without creator permission; contact-sheet review still required.',
  'sourceReview':'Nine Wikimedia Commons photos require attribution and carry their licence; 12 actual lodge images are third-party hosted and NOT rights-cleared.'},ensure_ascii=False,indent=2)+'\n')
 sheet(all_)
 print('OKAVANGO_21_IMAGE_CANDIDATES_GENERATED',flush=True)
if __name__=='__main__':main()

# Trigger source-asset import in the dedicated GitHub Actions workflow (no production deploy).
