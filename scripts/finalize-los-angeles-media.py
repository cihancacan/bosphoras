#!/usr/bin/env python3
"""Incremental Los Angeles #58 photo gate: add Malibu CC panorama, 3 Bel-Air,
3 Beverly Hills, replace the accidental resized Shutters image duplicate.
Only source-identified photos, all hotel publisher rights explicitly UNVERIFIED.
Preserve all previous city and property photos, only add missing images.
"""
import requests, io, re, hashlib, pathlib, json
from PIL import Image,ImageOps,ImageStat
ROOT=pathlib.Path('public/images/travel/los-angeles-premium')
PATH=pathlib.Path('data/travel/losAngelesMediaCandidates.json')
API='https://commons.wikimedia.org/w/api.php'
s=requests.Session()
s.headers.update({'User-Agent':'BosphorasLuxuryStays/1.0 (attributed owner-only photo research; info@bosphoras.com)'})
data=json.loads(PATH.read_text(encoding='utf-8'))
assert data['destination']=='los-angeles'
assert len(data['destinationScenes'])==8,('unexpected city length',len(data['destinationScenes']))
assert len(data['hotels'])==6,('unexpected hotel length',len(data['hotels']))

def fetch(url,timeout=14):
 r=s.get(url,timeout=timeout);r.raise_for_status();return r.content
def store(url,dest):
 b=fetch(url)
 img=Image.open(io.BytesIO(b))
 img=ImageOps.exif_transpose(img).convert('RGB')
 orig=list(img.size)
 if img.width<720 or img.height<440:raise ValueError('too-small '+str(orig))
 img.thumbnail((1800,1400),Image.Resampling.LANCZOS)
 if sum(ImageStat.Stat(img.resize((110,80))).stddev)/3<11:raise ValueError('placeholder')
 dest.parent.mkdir(parents=True,exist_ok=True)
 img.save(dest,'WEBP',quality=82,method=5)
 raw=dest.read_bytes()
 if len(raw)<18000:raise ValueError('tiny file')
 return {'originalSize':orig,'outputSize':list(img.size),'bytes':len(raw),'sha256':hashlib.sha256(raw).hexdigest()}
def hotel_record(prop,name,num,src,source,en,fr):
 dest=ROOT/prop/f'view-{num}.webp'
 props=store(src,dest)
 return {**props,'key':f'view-{num}','propertyKey':prop,'property':name,
 'localPath':'/'+str(dest).removeprefix('public/'),'sourcePage':source,'downloadUrl':src,
 'credit':name+' — named publisher photo, creator reuse permission unverified',
 'license':'Publisher image, private owner Preview ONLY. No independent commercial republication permission.',
 'licenseUrl':source,'rightsEvidenceType':'operator_publisher_not_commercially_cleared',
 'commercialRightsCleared':False,'status':'source_identified_private_preview',
 'visuallyVerified':False,'frCaption':fr,'enCaption':en,'originalAlt':en}
# Fixed 9th Malibu photograph: explicit, high-resolution CC BY-SA 4.0 Commons image.
name='File:Malibu beach and pier 2012 05.jpg'
param={'action':'query','prop':'imageinfo','titles':name,'iiprop':'url|size|extmetadata|mime','iiurlwidth':'1800','format':'json','formatversion':'2'}
j=s.get(API,params=param,timeout=14).json()['query']['pages'][0]
info=j['imageinfo'][0];meta=info['extmetadata']
licence=re.sub(r'<[^>]+>','',meta['LicenseShortName']['value'])
assert licence.startswith('CC BY'),'Malibu photo lacks Wikimedia commercial CC evidence'
artist=re.sub(r'<[^>]+>','',meta.get('Artist',{}).get('value',''))
assert artist
dst=ROOT/'destination'/'scene-8.webp'
p=store(info.get('thumburl') or info['url'],dst)
data['destinationScenes'].append({**p,'key':'scene-8','localPath':'/'+str(dst).removeprefix('public/'),
 'sourcePage':'https://commons.wikimedia.org/wiki/'+name.replace(' ','_'),
 'downloadUrl':info.get('thumburl') or info['url'],
 'credit':artist,'license':licence,
 'licenseUrl':re.sub(r'<[^>]+>','',meta.get('LicenseUrl',{}).get('value','')) or 'https://creativecommons.org/licenses/by-sa/4.0/',
 'status':'source_identified_private_preview','rightsEvidenceType':'wikimedia_cc_attribution',
 'commercialRightsCleared':True,'visuallyVerified':False,
 'frCaption':'Malibu, la plage et son embarcadère face au Pacifique',
 'enCaption':'Malibu beach and pier on the Pacific coast','commonsTitle':name})
print('MALIBU_CITY',p['bytes'],flush=True)

hotels=[
 ('bel-air','Hotel Bel-Air',[
 ('https://www.dorchestercollection.com/media/gwwhwhxl/hba_presidential_suite_pool_l_0904_master_v1-16x7_hr.jpg?height=1464&rmode=crop&width=2560',
 'https://www.dorchestercollection.com/los-angeles/hotel-bel-air/rooms-suites/presidential-suite',
 'Presidential Suite private pool at Hotel Bel-Air','Piscine privée de la Presidential Suite à Hotel Bel-Air'),
 ('https://www.dorchestercollection.com/media/szufzpva/hba_grace_kelly_suite_174_042_v2_rgb_hr.jpg',
 'https://www.dorchestercollection.com/los-angeles/hotel-bel-air/rooms-suites/grace-kelly-suite',
 'Grace Kelly Suite private terrace at Hotel Bel-Air','Terrasse privée de la Grace Kelly Suite à Hotel Bel-Air'),
 ('https://www.dorchestercollection.com/media/exvd4c02/stone-canyon-suite-3.jpg?height=1464&rmode=crop&width=2560',
 'https://www.dorchestercollection.com/los-angeles/hotel-bel-air/rooms-suites/stone-canyon-suite',
 'Stone Canyon Suite plunge pool at Hotel Bel-Air','Petit bassin de la Stone Canyon Suite à Hotel Bel-Air'),
 ('https://cdn.kiwicollection.com/media/room_images/PR001231/xl/pr001231-sekh-premier-canyon-suite-with-plunge-pool-fireplace.jpg',
 'https://www.visasignaturehotels.com/hotel-detail/hotel-bel-air-los-angeles',
 'Premier Canyon Suite at Hotel Bel-Air','Premier Canyon Suite à Hotel Bel-Air'),
 ('https://cdn.tatlerasia.com/tatlerasia/i/2022/02/25092508-screenshot-2022-02-25-at-92329-am_cover_1450x963.png',
 'https://www.tatlerasia.com/lifestyle/travel/the-suite-spot-presidential-suite-hotel-bel-air',
 'Presidential Suite private courtyard at Hotel Bel-Air','Cour de la Presidential Suite à Hotel Bel-Air'),
 ]),
 ('beverly-hills','The Beverly Hills Hotel',[
 ('https://static.prod.r53.tablethotels.com/media/hotels/slideshow_images_staged/large/1346717.jpg',
 'https://guide.michelin.com/en/hotels-stays/los-angeles-area/the-beverly-hills-hotel-5896',
 'The Beverly Hills Hotel iconic pool and cabanas','Piscine et cabanes emblématiques du Beverly Hills Hotel'),
 ('https://hips.hearstapps.com/hmg-prod/images/bungalow-5-patio-1581014249.jpg?crop=1xw%3A0.7499566974595843xh%3Bcenter%2Ctop&resize=1200%3A%2A',
 'https://www.townandcountrymag.com/leisure/travel-guide/a30795376/beverly-hills-hotel-bungalows/',
 'The Beverly Hills Hotel Bungalow 5 patio and plunge pool','Patio avec bassin du Bungalow 5 au Beverly Hills Hotel'),
 ('https://arcadia-media.nyc3.digitaloceanspaces.com/2016/09/Red_Carpet-Entrance.jpg',
 'https://www.thearcadiaonline.com/magazine-exclusive-the-beverly-hills-hotel/',
 'The Beverly Hills Hotel red carpet entrance','Entrée et tapis rouge du Beverly Hills Hotel'),
 ]),
]
for prop,title,opts in hotels:
 ids={x['sha256'] for x in data['hotels']+data['destinationScenes']}
 rows=[]
 for url,source,en,fr in opts:
  if len(rows)>=3:break
  try:
   item=hotel_record(prop,title,len(rows)+1,url,source,en,fr)
   if item['sha256'] in ids:continue
   rows.append(item);ids.add(item['sha256'])
   print('PROPERTY PHOTO',prop,len(rows),item['bytes'],source,flush=True)
  except Exception as e:print('PROPERTY REJECT',prop,source,str(e)[:145],flush=True)
 data['hotels']+=rows
 print('PROPERTY COUNT',prop,len(rows),flush=True)
# Shutters: remove accidental two resolutions of the same Santa Monica Suite photo.
shutters=[x for x in data['hotels'] if x['propertyKey']=='shutters']
assert len(shutters)==3
assert 'Santa-Monica-Suite-Bedroom-' in shutters[0]['downloadUrl']
assert 'Santa-Monica-Suite-Bedroom-' in shutters[1]['downloadUrl']
new=hotel_record('shutters','Shutters on the Beach',2,
 'https://s3.amazonaws.com/uploads.edwardthomasco.com/uploads/sites/3/2025/02/11105040/Shutters_PacificSuites_745_Bedroom-0041-Edit_v5-1024x637.jpg',
 'https://www.shuttersonthebeach.com/accommodations/',
 'Pacific View Suite bedroom at Shutters on the Beach','Chambre de la Pacific View Suite à Shutters on the Beach')
assert new['sha256'] not in {x['sha256'] for x in data['hotels']+data['destinationScenes']}
data['hotels']=[new if x['propertyKey']=='shutters' and x['key']=='view-2' else x for x in data['hotels']]
data['hotelCount']=len(data['hotels'])
data['cityCount']=len(data['destinationScenes'])
PATH.write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print('LA FINAL_PHOTOS',data['cityCount'],data['hotelCount'],flush=True)
assert data['cityCount']==9 and data['hotelCount']==12,'Missing photo(s); private Preview release remains blocked'
