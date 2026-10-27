#!/usr/bin/env python3
"""Download 12 true named Punta Mita hotel images and 9 licenced Nayarit scenes.
Commercial reuse of hotel publisher photos is NOT granted by this importer.
"""
from pathlib import Path
from PIL import Image,ImageOps,ImageDraw
import requests,json,hashlib,io,time
from bs4 import BeautifulSoup
from urllib.parse import quote
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'public/images/travel/punta-mita-premium'
MAN=ROOT/'data/travel/puntaMitaMediaCandidates.json'
CONTACT=ROOT/'docs/travel-punta-mita-contact-sheet.jpg'
S=requests.Session()
S.headers.update({'User-Agent':'BosphorasLuxuryStays/1.0 (private-owner photo QA; https://bosphoras.com/contact)', 'Accept':'image/avif,image/webp,image/jpeg,image/png,*/*'})
# Media from hotel or property-specific publisher URL, NOT independently licensed
HOTELS=[
('four-seasons','Four Seasons Resort Punta Mita','Four Seasons · suite avec terrasse et bassin sur le Pacifique','Four Seasons · Pacific-view suite and plunge pool',
'https://www.fourseasons.com/puntamita/accommodations/','https://www.fourseasons.com/alt/img-opt/~70.1530.0%2C0000-0%2C3750-3060%2C0000-1721%2C2500/publish/content/dam/fourseasons/images/web/PUN/PUN_673_original.jpg'),
('four-seasons','Four Seasons Resort Punta Mita','Four Seasons · piscines et plage vues depuis le ciel','Four Seasons · resort pools and beach aerial',
'https://www.the-family-project.com/reiseziele/mittelamerika/mexiko/four-seasons-punta-mita','https://www.the-family-project.com/hs-fs/hubfs/Website/lateinamerika/lateinamerika-fertig/four-seasons-resort-punta-mita/1-four-seasons-resort-punta-mita-mexiko-mittelamerika-the-family-project-luxus-familie-kinder-reisen.webp?height=800&name=1-four-seasons-resort-punta-mita-mexiko-mittelamerika-the-family-project-luxus-familie-kinder-reisen.webp&width=1200'),
('four-seasons','Four Seasons Resort Punta Mita','Four Seasons · géographie de la péninsule privée','Four Seasons · ocean-side resort peninsula',
'https://gearminded.com/four-seasons-punta-mita-aerea/','https://gearminded.com/wp-content/uploads/2016/07/Four-Seasons-Punta-Mita-Aerea-1170x790.jpg'),
('st-regis','The St. Regis Punta Mita Resort','St. Regis · salon de villa et accès piscine','St. Regis · named villa living room and pool',
'https://www.marriott.com/en-us/hotels/pvrxr-the-st-regis-punta-mita-resort/rooms/villas/','https://cache.marriott.com/is/image/marriotts7prod/xr-pvrxr-villa-living-rm-41570-02318%3AClassic-Hor?fit=constrain&wid=1300'),
('st-regis','The St. Regis Punta Mita Resort','St. Regis · suite rénovée tournée vers l'océan','St. Regis · renovated Pacific suite',
'https://www.hotel-online.com/news/the-iconic-st-regis-punta-mita-raises-completes-first-phase-of-property-wide-renovation/','https://hotelonline-assets1.nyc3.digitaloceanspaces.com/wordpress/2023/02/St-Regis-Punta-Mita-renovated-suite-02282023.jpg'),
('st-regis','The St. Regis Punta Mita Resort','St. Regis · piscine et jardin tropical de villa','St. Regis · villa garden and private pool',
'https://www.luxurylink.com/5star/hotels/punta-de-mita-mexico/st-regis-punta-mita-resort','https://www.luxurylink.com/images/sho_58517053/3042_529-1280/image-3042_529.jpg?filtered=1'),
('conrad','Conrad Punta de Mita','Conrad · architecture, piscines et plage aériennes','Conrad · beachfront hotel and pool aerial',
'https://www.hilton.com/en/hotels/pvrpmci-conrad-punta-de-mita/','https://assets.hiltonstatic.com/hilton-asset-cache/image/upload/c_fill%2Cw_1920%2Ch_1080%2Cq_70%2Cf_auto%2Cg_auto/Imagery/Property%20Photography/Conrad/P/PVRPMCI/PVRPMCI_Aereal_Areas2.jpg'),
('conrad','Conrad Punta de Mita','Conrad · véritable chambre vue mer','Conrad · hotel king ocean-view room',
'https://www.hilton.com/en/hotels/pvrpmci-conrad-punta-de-mita/rooms/','https://www.hilton.com/im/en/PVRPMCI/14902933/pvrpmci-king-room-view.jpg?ch=2872&cw=4800&gravity=NorthWest&impolicy=crop&rh=484&rw=807&xposition=0&yposition=163'),
('conrad','Conrad Punta de Mita','Conrad · suite avec petit bassin privé','Conrad · plunge-pool suite',
'https://www.kiwicollection.com/hotel-detail/conrad-punta-de-mita','https://cdn.kiwicollection.com/media/room_images/PR241023/xl/241023-06-ocean-front-suite-one-king-bed.jpg'),
('susurros','Susurros del Corazón, Auberge Collection','Susurros · vraie chambre Oceanfront Cliffside Studio','Susurros · oceanfront cliffside studio',
'https://auberge.com/susurros/stay/oceanfront-studio/','https://dreffui1gbt6t.cloudfront.net/images/sdc/oceanfrontcliffsidestudio-listing-SDC_Accommodations_Cliffside_Studio_2026_1.jpg'),
('susurros','Susurros del Corazón, Auberge Collection','Susurros · terrasse du resort et bassin à débordement','Susurros · beach-facing terrace and pool',
'https://auberge.com/susurros/galleries/resort/','https://dreffui1gbt6t.cloudfront.net/images/sdc/SDC_Galleries_Resort_021524_Asset-3.jpg'),
('susurros','Susurros del Corazón, Auberge Collection','Susurros · vraie Garden Suite à bassin privé','Susurros · named garden suite with plunge pool',
'https://auberge.com/susurros/stay/garden-suite-plunge-pool/','https://dreffui1gbt6t.cloudfront.net/images/sdc/sdc-stay-gardensuiteplungepool-listing-22-768x511.jpg')
]
# These specific Commons files have been identified as Punta Mita / neighbouring Marietas scenes.
SCENES=[
('Punta Mita, Nayarit - panoramio.jpg','Punta Mita · côte de Nayarit','Punta Mita · Nayarit coastline'),
('Anclote, Punta de Mita - panoramio.jpg','El Anclote · plage du village','El Anclote · Punta de Mita village beach'),
('Atardecer en Punta de Mita, Nayarit.jpg','Coucher de soleil à Punta de Mita','Sunset at Punta de Mita'),
('Club de golf, Punta Mita, Nayarit - panoramio.jpg','Punta Mita · parcours sur la péninsule','Punta Mita peninsula golf course'),
('Islas Marietas.jpg','Islas Marietas · archipel protégé','Protected Marietas Islands'),
('Malecón de Punta de Mita - panoramio.jpg','Front de mer et promenade de Punta de Mita','Punta de Mita waterfront'),
('Las islas Marietas desde un barco (1).jpg','Marietas · îlots volcaniques vus en bateau','Marietas Islands seen from a boat'),
('Punta Mita, Nayarit - panoramio (1).jpg','Vue de côte à Punta Mita','A different Punta Mita coastal scene'),
('Playa del St. Regis - panoramio.jpg','Plage du secteur St. Regis à Punta Mita','Coast by St. Regis on Punta Mita peninsula')
]
def request(url):
 error=None
 for i in range(4):
  try:
   r=S.get(url,timeout=45,allow_redirects=True)
   if r.status_code in (429,500,502,503,504):error=ValueError(str(r.status_code));time.sleep(2+i*3);continue
   r.raise_for_status()
   return r
  except requests.RequestException as e:error=e;time.sleep(2+i*2)
 raise RuntimeError('Unable to fetch '+url+' '+str(error))
def commons(filename):
 api='https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url%7Cextmetadata&iiurlwidth=1440&titles='+quote('File:'+filename)
 o=next(iter(request(api).json()['query']['pages'].values()))
 if 'missing' in o:raise RuntimeError('Missing Commons source '+filename)
 inf=o['imageinfo'][0];e=inf.get('extmetadata',{})
 lic=e.get('LicenseShortName',{}).get('value','')
 if not (lic.startswith('CC BY') or lic.startswith('CC0') or lic.lower().startswith('public domain')):
  raise RuntimeError('Source licence not approved '+filename+' : '+lic)
 author=BeautifulSoup(e.get('Artist',{}).get('value','Unknown'),'html.parser').get_text(' ',strip=True)[:160]
 return dict(url=inf.get('thumburl') or inf['url'],sourcePage=inf['descriptionurl'],license=lic,
  licenseUrl=e.get('LicenseUrl',{}).get('value','https://commons.wikimedia.org/').replace('http://','https://',1),credit=author)
def build(key,folder,url,src,fr,en,author,lic,licurl,rights,extra):
 r=request(url);raw=r.content
 if len(raw)>23000000:raise RuntimeError('Oversized response '+url)
 im=ImageOps.exif_transpose(Image.open(io.BytesIO(raw)))
 if im.width<680 or im.height<380:raise RuntimeError('Source too small '+str(im.size)+' '+url)
 if not .48 < im.width/im.height < 3.3:raise RuntimeError('Unusable ratio '+str(im.size))
 dimensions=list(im.size);im=im.convert('RGB');im.thumbnail((1650,1150),Image.Resampling.LANCZOS)
 out=OUT/folder/(key+'.webp');out.parent.mkdir(parents=True,exist_ok=True)
 im.save(out,'WEBP',quality=83,method=5);b=out.read_bytes()
 if len(b)<13000:raise RuntimeError('Invalid output '+str(out))
 return dict(key=key,sourcePage=src,downloadUrl=url,credit=author,license=lic,licenseUrl=licurl,
  rightsEvidenceType=rights,status='candidate_needs_visual_review',visuallyVerified=False,
  commercialRightsCleared=rights=='wikimedia_commons_verified',
  visualQaWarning='Await actual human contact-sheet review',frCaption=fr,enCaption=en,
  localPath='/'+str(out.relative_to(ROOT/'public')),sha256=hashlib.sha256(b).hexdigest(),
  bytes=len(b),originalSize=dimensions,outputSize=list(im.size),**extra)
def contact_sheet(items):
 thumb=(315,204);w=1360;h=95+((len(items)+3)//4)*249
 sheet=Image.new('RGB',(w,h),'#e4e8e7');draw=ImageDraw.Draw(sheet)
 draw.text((15,16),'PUNTA MITA - IMAGE PROVENANCE AND VISUAL QA - PRIVATE PREVIEW ONLY',fill='#16362a')
 draw.text((15,42),'12 named hotel images + 9 geographic scenes. Hotel photo reuse rights require separate clearance.',fill='#384947')
 for i,p in enumerate(items):
  x=15+(i%4)*335;y=80+(i//4)*249
  im=Image.open(ROOT/'public'/p['localPath'].lstrip('/')).convert('RGB')
  im.thumbnail(thumb,Image.Resampling.LANCZOS)
  frame=Image.new('RGB',thumb,'white');frame.paste(im,((thumb[0]-im.width)//2,(thumb[1]-im.height)//2));sheet.paste(frame,(x,y))
  draw.text((x,y+211),p.get('propertyKey','destination')+'/'+p['key'],fill='#102522')
 sheet.save(CONTACT,quality=82)
def main():
 hotels=[];scenes=[];counts={}
 for k,name,fr,en,src,url in HOTELS:
  counts[k]=counts.get(k,0)+1
  hotels.append(build('view-'+str(counts[k]),k,url,src,fr,en,
   name+' · original photographer and commercial reproduction terms not independently verified',
   'Owner-only private Preview candidate; no public-commercial licence inferred',src,
   'publisher_labelled_property_image',{'propertyKey':k,'property':name}))
  print('HOTEL',k,counts[k],hotels[-1]['bytes'],flush=True)
 for i,(filename,fr,en) in enumerate(SCENES,1):
  m=commons(filename)
  scenes.append(build('scene-'+str(i),'destination',m['url'],m['sourcePage'],fr,en,
   m['credit'],m['license'],m['licenseUrl'],'wikimedia_commons_verified',{'place':'Punta Mita / Riviera Nayarit, Mexico','commonsFile':filename}))
  print('SCENE',i,scenes[-1]['bytes'],m['license'],flush=True)
 all_=hotels+scenes
 if len(hotels)!=12 or len(scenes)!=9 or len(set(p['sha256'] for p in all_))!=21:raise RuntimeError('Need 21 unique assets')
 # Very similar/duplicate crops must be reviewed rather than silently reused.
 import itertools
 hashes=[]
 for p in all_:
  im=Image.open(ROOT/'public'/p['localPath'].lstrip('/')).convert('L').resize((12,12))
  avg=sum(im.getdata())/144;hashes.append([x>avg for x in im.getdata()])
 for (i,a),(j,b) in itertools.combinations(enumerate(hashes),2):
  if sum(x!=y for x,y in zip(a,b))<5:raise RuntimeError('Possible visual duplicate: '+all_[i]['localPath']+' '+all_[j]['localPath'])
 MAN.parent.mkdir(parents=True,exist_ok=True)
 MAN.write_text(json.dumps(dict(destination='punta-mita',hotels=hotels,destinationScenes=scenes,
  downloadedHotelCandidates=12,downloadedDestinationCandidates=9,visuallyVerified=False,
  approvedForCommercialPublication=False,
  publicationBlockedReason='Public-commercial photo permission not demonstrated for hotel images; human review and licensing required.',
  rightsBasis='Hotel images from named hospitality publishers; Commons landscape metadata checked per file.'),ensure_ascii=False,indent=2)+'\n')
 contact_sheet(all_)
 print('PUNTA_MITA_21_CANDIDATES_READY',flush=True)
if __name__=='__main__':main()
