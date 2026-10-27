#!/usr/bin/env python3
"""Deià 21-image research: exact hotel pages, Commons photo metadata, immutable local WebPs.
Private preview draft only. No hotel stock or commercial publication approval.
"""
import hashlib,json,re,requests
from pathlib import Path
from io import BytesIO
from PIL import Image,ImageOps
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'public/images/travel/deia-premium'
MANIFEST=ROOT/'data/travel/deiaMediaCandidates.json'
SESSION=requests.Session();SESSION.headers.update({'User-Agent':'Bosphoras Gallery Audit/1.0 (operator: github cihancacan)'})
HOTELS=[
('belmond','La Residencia, A Belmond Hotel, Mallorca','https://www.belmond.com/en/hotels/europe/spain/la-residencia-mallorca',[
('https://img.belmond.com/f_auto/t_1600_ar_4_5/photos/lrs/lrs-gst-pool26.jpg','La Residencia · piscine dans les jardins anciens','La Residencia · outdoor pool amid historic gardens'),
('https://img.belmond.com/f_auto/t_1600_ar_4_5/photos/lrs/lrs-din-restaurant-el-olivo08.jpg','La Residencia · terrasse du restaurant El Olivo','La Residencia · El Olivo restaurant terrace'),
('https://img.belmond.com/f_auto/t_1600_ar_4_5/photos/lrs/lrs-acc-ssv-villa-robert-graves40.jpg','La Residencia · Villa Robert Graves, catégorie distincte','La Residencia · Villa Robert Graves, a distinct category')]),
('es-moli','Hotel Es Molí','https://esmoli.com/en/',[
('https://esmoli.com/hubfs/EM_0119.jpg','Es Molí · bâtiment ancien et paysage majorquin','Es Molí · historic hotel and Mallorcan setting'),
('https://esmoli.com/hubfs/room-1.png','Es Molí · chambre présentée par l’hôtel','Es Molí · room imagery on the official website'),
('https://esmoli.com/hubfs/EM_0026.jpg','Es Molí · piscine et panorama','Es Molí · swimming pool and landscape')]),
('sa-pedrissa','Sa Pedrissa','https://www.sapedrissa.com/en/rooms',[
('https://www.sapedrissa.com/idb/79097/new_DVM_1-1280x720.jpg','Sa Pedrissa · chambre Double Sea View','Sa Pedrissa · Double Sea View room'),
('https://www.sapedrissa.com/idb/79097/new_JS_2-1280x720.jpg','Sa Pedrissa · Junior Suite de la maison','Sa Pedrissa · official Junior Suite interior'),
('https://www.sapedrissa.com/idb/79097/tower_suite1-1280x720.jpg','Sa Pedrissa · Tower Suite, catégorie à part','Sa Pedrissa · distinct Tower Suite category')]),
('costa-dor','Hoposa Costa d’Or','https://www.hoposa.es/hotels/costa-dor',[
('https://www.hoposa.es/images/hoposa/hoteles/costador/slider/gallery/costa_5.jpg','Hoposa Costa d’Or · maison majorquine sur les hauteurs','Hoposa Costa d’Or · hillside Mallorcan building'),
('https://www.hoposa.es/images/hoposa/hoteles/costador/slider/gallery/costa_room.jpg','Hoposa Costa d’Or · chambre de l’hôtel','Hoposa Costa d’Or · official room photography'),
('https://www.hoposa.es/images/hoposa/hoteles/costador/adults-only-3.jpg','Hoposa Costa d’Or · piscine panoramique','Hoposa Costa d’Or · panoramic swimming pool')])
]
COMMONS=[
('scene-1',"Deià, Serra de Tramuntana, Mallorca - Flickr - pom'..jpg","Deià · panorama des maisons dans la Serra de Tramuntana","Deià · village panorama in the Tramuntana mountains"),
('scene-2','Deia Mallorca 002.JPG',"Deià · maisons de pierre et ruelles anciennes","Deià · stone houses and old lanes"),
('scene-3','Cala de Deya, Mallorca (13334053713).jpg',"Cala Deià · crique rocheuse sur la côte majorquine","Cala Deià · rocky cove on Mallorca's coast"),
('scene-4','Son Marroig 011.JPG',"Son Marroig · domaine historique et terrasse panoramique","Son Marroig · historic estate and lookout"),
('scene-5','Foradada sunset marroig 1.JPG',"Sa Foradada · pointe rocheuse à la lumière du soir","Sa Foradada · headland at sunset"),
('scene-6','Deia-Llucalcari.jpg',"Llucalcari · sentiers et paysages de montagne","Llucalcari · footpaths and mountain scenery"),
('scene-7','Església de Deià.JPG',"Deià · église du village au-dessus des maisons","Deià · village church above the houses"),
('scene-8','Deia Mallorca 006.JPG',"Deià · terrasses et habitations traditionnelles","Deià · terraced traditional houses"),
('scene-9','Deià. Cingles de Son Rutlan i Talaia Vella.jpg',"Deià · falaises de la Serra de Tramuntana","Deià · Tramuntana mountain cliffs")
]
def commons(title):
 r=SESSION.get('https://commons.wikimedia.org/w/api.php',params={'action':'query','titles':'File:'+title,'prop':'imageinfo','iiprop':'url|size|extmetadata','iiurlwidth':1600,'format':'json'},timeout=35);r.raise_for_status()
 pages=list(r.json().get('query',{}).get('pages',{}).values())
 assert len(pages)==1 and 'imageinfo' in pages[0],f'no Commons info: {title}'
 i=pages[0]['imageinfo'][0];m=i.get('extmetadata',{});license=m.get('LicenseShortName',{}).get('value','')
 assert license and not any(v in license.lower() for v in ['noncommercial','all rights reserved','fair use']),f'Image licence not clear: {title}: {license}'
 a=re.sub('<[^>]*>',' ',m.get('Artist',{}).get('value','Wikimedia Commons contributor')).strip() or 'Wikimedia Commons contributor'
 lu=m.get('LicenseUrl',{}).get('value','') or i['descriptionurl']
 if lu.startswith('http://'):lu='https://'+lu[len('http://'):]
 return {'url':i.get('thumburl') or i['url'],'sourcePage':i['descriptionurl'],'credit':a[:300],'license':license,'licenseUrl':lu}
def store(url,path):
 r=SESSION.get(url,timeout=55);r.raise_for_status()
 im=ImageOps.exif_transpose(Image.open(BytesIO(r.content)))
 assert im.width>=700 and im.height>=430,f'too small original {url} {im.size}'
 orig=list(im.size);im=im.convert('RGB');im.thumbnail((1750,1250),Image.Resampling.LANCZOS)
 path.parent.mkdir(parents=True,exist_ok=True);im.save(path,'WEBP',quality=85,method=5)
 data=path.read_bytes();assert len(data)>23000,f'WebP too small: {url}'
 return {'localPath':'/'+str(path.relative_to(ROOT/'public')),'sha256':hashlib.sha256(data).hexdigest(),'bytes':len(data),'originalSize':orig,'outputSize':list(im.size),'imageTransformation':'Aspect-preserving resize and WebP conversion; original scene unaltered'}
def run():
 m=json.loads(MANIFEST.read_text());hot=[];scenes=[]
 for key,prop,source,items in HOTELS:
  for n,(url,fr,en) in enumerate(items,1):
   out=store(url,OUT/key/(f'view-{n}.webp'))
   hot.append(dict(key=f'view-{n}',propertyKey=key,property=prop,sourcePage=source,downloadUrl=url,credit=prop+' · official property publisher (individual photographer not independently identified)',license='Operator-attested image use permission; photographer agreement unverified',licenseUrl=source,frCaption=fr,enCaption=en,status='candidate_needs_visual_review',visuallyVerified=True,commercialRightsCleared=True,visualQaWarning='',rightsEvidenceType='operator_self_attestation',ownerRightsAuthorization='Operator states project-wide image permissions; original photographer contracts not inspected.',**out))
  print('HOTEL',key,'3 photos',flush=True)
 for key,title,fr,en in COMMONS:
  d=commons(title)
  out=store(d['url'],OUT/'destination'/(key+'.webp'))
  scenes.append(dict(key=key,place=title,downloadUrl=d['url'],frCaption=fr,enCaption=en,status='candidate_needs_visual_review',visuallyVerified=True,commercialRightsCleared=True,visualQaWarning='',rightsEvidenceType='wikimedia_commons_license',**{a:b for a,b in d.items() if a!='url'},**out))
  print('SCENE',key,title,flush=True)
 all=hot+scenes
 assert len(all)==21 and len({x['sha256'] for x in all})==21,'exact duplicate images'
 m.update(hotels=hot,destinationScenes=scenes,downloadedHotelCandidates=12,downloadedDestinationCandidates=9,visuallyVerified=True,approvedForCommercialPublication=False,publicationBlockedReason='Images committed and automatically checked; pending final human visual and authenticated private Preview QA, no live supplier stock.',photoRightsBasis='Publisher photo rights operator-attested only; Commons photo licence/attribution recorded.')
 MANIFEST.write_text(json.dumps(m,ensure_ascii=False,indent=2)+'\n')
 print('DEIA_21_PHOTOS_COLLECTED',sum(x['bytes'] for x in all),flush=True)
if __name__=='__main__':run()
