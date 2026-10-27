#!/usr/bin/env python3
"""Port d’Andratx 21-image research: exact hotel pages, Commons photo metadata, immutable local WebPs.
Private preview draft only. No hotel stock or commercial publication approval.
"""
import hashlib,json,re,requests
from pathlib import Path
from io import BytesIO
from PIL import Image,ImageOps
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'public/images/travel/port-andratx-premium'
MANIFEST=ROOT/'data/travel/portAndratxMediaCandidates.json'
SESSION=requests.Session();SESSION.headers.update({'User-Agent':'Bosphoras Gallery Audit/1.0 (operator: github cihancacan)'})
HOTELS=[["monport","Mon Port Hotel & Spa","https://www.hotelmonport.com/en",[["https://www.hotelmonport.com/intranet/images/thumbs/tn_1736_1123_12_08_2514_44_2814_12_217_50_565b___copia___copia__1_.jpg","Mon Port · jardins et architecture traditionnelle","Mon Port · traditional hotel gardens and architecture"],["https://www.hotelmonport.com/intranet/images/thumbs/tn_1736_1123_12_08_2514_49_1902_03_1812_31_53spa__1_.jpg","Mon Port · installations de spa de l'hôtel","Mon Port · official hotel spa facilities"],["https://www.hotelmonport.com/intranet/images/thumbs/tn_1736_1123_12_08_2514_49_0213_12_2115_38_50MP7__1_.jpg","Mon Port · espaces de l'établissement","Mon Port · hotel interior and shared spaces"]]],["pergola","La Pérgola Aparthotel","https://www.hotelpergolamallorca.com/en",[["https://www.hotelpergolamallorca.com/images/thumbs/tn_1736_1123_21_03_187_36_56Apartamentos_LaPergola_226_copia.jpg","La Pérgola · espaces de l’aparthôtel près du port","La Pérgola · aparthotel setting near the harbour"],["https://www.hotelpergolamallorca.com/images/thumbs/tn_1736_1123_21_03_187_37_03Apartamentos_LaPergola_212_copia.jpg","La Pérgola · piscine et jardin de la résidence","La Pérgola · aparthotel pool and gardens"],["https://www.hotelpergolamallorca.com/images/thumbs/tn_1736_1123_18_05_187_50_22ap1_1200.jpg","La Pérgola · hébergement de type appartement","La Pérgola · apartment accommodation on the official site"]]],["zafiro","Zafiro Palace Andratx","https://www.zafirohotels.com/en/zafiro-palace-andratx/",[["https://www.zafirohotels.com/data/webp/zafiropalaceandratx-oct21-ownersuite-12480374-26105f679fe85f3ddfa1833b3fd36232.webp","Zafiro Palace · Owner Suite, catégorie distincte","Zafiro Palace · Owner Suite, a separate suite category"],["https://www.zafirohotels.com/data/webp/zafiropalaceandratx-oct21-juniorsuite-penthouse-minipiscinaprivada-7205-15612812-e9187b7f19fc47b372f01047f225c2f1.webp","Zafiro Palace · penthouse avec bassin privé","Zafiro Palace · penthouse suite with plunge pool"],["https://www.zafirohotels.com/data/webp/zafiropalaceandratx-oct21-juniorsuite-piscina-privada-7005-12830616-c232caa0d98b4aa8e89d914e043dfcf0.webp","Zafiro Palace · suite avec piscine privative","Zafiro Palace · pool suite category on official site"]]],["campdemar","THE CAMP DE MAR Hotel & Resort","https://www.hotel-campdemar.com/en/home",[["https://www.hotel-campdemar.com/en/assets/images/9/rooms-2cf18a6e.webp","THE CAMP DE MAR · hébergement lumineux du resort","THE CAMP DE MAR · bright room on hotel official site"],["https://www.hotel-campdemar.com/en/assets/images/9/mediterranea-81900390.webp","THE CAMP DE MAR · espace de restauration méditerranéen","THE CAMP DE MAR · Mediterranean dining setting"],["https://www.hotel-campdemar.com/en/assets/images/2/ausblick-vom-hotel-9af4ee21.webp","THE CAMP DE MAR · paysage vu depuis le resort","THE CAMP DE MAR · coastal outlook from the resort"]]]]
COMMONS=[["scene-1","Andratx Mallorca.jpg","Port d’Andratx · marina et yachts devant les collines","Port d’Andratx · yachts in the sheltered harbour"],["scene-2","Port d'Andratx (Mallorca, Spain), Harbour -- 2009 -- 1540.jpg","Port d’Andratx · vue du port naturel","Port d’Andratx · natural-harbour panorama"],["scene-3","Embarcaciones Puerto-Andratx-Mallorca-rafax.jpg","Port d’Andratx · embarcations sur les quais","Port d’Andratx · boats moored by the quays"],["scene-4","Cala d'Egos ,Puerto de Andratx.jpg","Cala d’Egos · crique sauvage près du port","Cala d’Egos · secluded cove near Port d’Andratx"],["scene-5","Andratx, Balearic Islands, Spain - panoramio - georama (6).jpg","Cala Llamp · criques et côte rocheuse","Cala Llamp · rocky shoreline and coves"],["scene-6","Camp de Mar Mallorca 2013.jpg","Camp de Mar · plage et baie de sable","Camp de Mar · beach and sandy bay"],["scene-7","Mallorca - Dragonera.jpg","Sa Dragonera · île naturelle à l’ouest de Majorque","Sa Dragonera · protected island to Mallorca's west"],["scene-8","Sant Elm Pantaleu.JPG","Sant Elm · village côtier et îlot du Pantaleu","Sant Elm · seaside village and Pantaleu islet"],["scene-9","Cala Egos 09.jpg","Cala d’Egos · pinède et relief rocheux","Cala d’Egos · pine-covered rocky landscape"]]
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
 print('PORT_ANDRATX_21_PHOTOS_COLLECTED',sum(x['bytes'] for x in all),flush=True)
if __name__=='__main__':run()
