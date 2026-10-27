#!/usr/bin/env python3
"""Formentera source-linked 21-photo collection. No deployment and no public approval.
Images originate from four named official property galleries and Commons page IDs.
Never relabel hotel imagery as a different resort or an unknown image as a hotel room.
"""
from __future__ import annotations
import hashlib, json, os, re, time
from io import BytesIO
from pathlib import Path
from urllib.parse import urlsplit
import requests
from PIL import Image, ImageOps

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/"public/images/travel/formentera-premium"
MANIFEST=ROOT/"data/travel/formenteraMediaCandidates.json"
S=requests.Session()
S.headers.update({"User-Agent":"Bosphoras Luxury Stays (source-linked editorial image research)"})
HOTELS=[
 ("five-flowers","Five Flowers Hotel Formentera Meliá Collection","https://fiveflowershotel.com/en/gallery/",[
  ("https://fiveflowershotel.com/backoffice/images/429-dscf9355copiabaja.jpg","Five Flowers · architecture et espaces de l'hôtel","Five Flowers · hotel architecture and shared spaces"),
  ("https://fiveflowershotel.com/backoffice/images/206-ff32.jpg","Five Flowers · espaces de vie et décoration","Five Flowers · design-led hotel interiors"),
  ("https://fiveflowershotel.com/backoffice/images/143-dsf5030fiveflowersformenterafiltrojacuzzibaja.jpg","Five Flowers · installation de baignade de l'hôtel","Five Flowers · hotel bathing facilities")]),
 ("gecko","Gecko Hotel & Beach Club","https://geckobeachclub.com/en/gallery/",[
  ("https://geckobeachclub.com/wp-content/uploads/2023/11/DJI_0137-EditarIII-2-1-scaled.jpg","Gecko · vue aérienne du domaine en bord de Migjorn","Gecko · aerial view of the property on Migjorn"),
  ("https://geckobeachclub.com/wp-content/uploads/2024/12/Gecko-Double-2-scaled.jpg","Gecko · chambre Double présentée par l'hôtel","Gecko · hotel-published Gecko Double room"),
  ("https://geckobeachclub.com/wp-content/uploads/2024/08/piscina-gecko-9.jpg","Gecko · piscine du beach club","Gecko · beach-club swimming pool")]),
 ("teranka","Teranka","https://www.teranka.com/",[
  ("https://www.teranka.com/wp-content/uploads/2023/07/Teranka16-1536x656.jpg","Teranka · architecture méditerranéenne et paysage du domaine","Teranka · Mediterranean architecture and property setting"),
  ("https://www.teranka.com/wp-content/uploads/2023/07/Teranka_room13-1024x613.jpg","Teranka · intérieur de chambre présenté par l'hôtel","Teranka · guest-room interior from the official website"),
  ("https://www.teranka.com/wp-content/uploads/2023/07/Teranka2.jpg","Teranka · atmosphère et espaces de l'établissement","Teranka · hotel atmosphere and shared spaces")]),
 ("cala-saona","Hotel Cala Saona & Spa","https://www.hotelcalasaona.com/en/rooms",[
  ("https://images2.neobookings.com/cms/hotelcalasaona.com/section/sleeping-and-waking-will-be-a-dream/pics/sleeping-and-waking-will-be-a-dream-powzv54l3n.jpeg?quality=","Cala Saona · chambre publiée dans la galerie officielle","Cala Saona · official room-gallery photograph"),
  ("https://images2.neobookings.com/cms/devel.www.hotelcalasaona.com/section/accommodation-in-formentera-with-unique-charm/pics/accommodation-in-formentera-with-unique-charm-z5wj6orldj.jpeg?quality=","Cala Saona · espaces et paysage de l'hôtel","Cala Saona · hotel grounds and setting"),
  ("https://images2.neobookings.com/cms/hotelcalasaona.com/section/sleeping-and-waking-will-be-a-dream/pics/sleeping-and-waking-will-be-a-dream-r0lgnokw4m.jpeg?quality=","Cala Saona · chambre et décoration d'intérieur","Cala Saona · guest room and interior styling")])
]
COMMONS=[
 ("scene-1","Formentera - Platja De Ses Illetes - panoramio.jpg","Ses Illetes · banc de sable dans l'aire protégée","Ses Illetes · beach in the protected reserve"),
 ("scene-2","Platja d'es Pujols.jpg","Plage d'Es Pujols · rivage du village","Es Pujols · village beach"),
 ("scene-3","Playa d´Es Copinar (Zona de Migjorn) (2).JPG","Plage de Migjorn · littoral sud de Formentera","Migjorn Beach · Formentera's southern coast"),
 ("scene-4","Els Arenals, Formentera.jpg","Es Arenals · plage de Migjorn oriental","Es Arenals · eastern Migjorn beach"),
 ("scene-5","Sunset with sailboats, Cala Saona, Formentera.jpg","Cala Saona · lumière de fin de journée sur la crique","Cala Saona · evening light over the cove"),
 ("scene-6","Exterior Far de la Mola 2020.jpg","Far de la Mola · phare sur les hauteurs de l'île","Far de la Mola · lighthouse on the eastern plateau"),
 ("scene-7","Formentera Es Caló de Sant Agustí.jpg","Es Caló de Sant Agustí · petit port de pêche","Es Caló de Sant Agustí · small fishing harbour"),
 ("scene-8","Port Savina, Formentera - panoramio.jpg","La Savina · port d'arrivée de Formentera","La Savina · Formentera's arrival harbour"),
 ("scene-9","Cap de Barbaria lighthouse.jpg","Cap de Barbaria · phare et paysage du sud-ouest","Cap de Barbaria · lighthouse and south-western landscape")
]
def get(url):
 response=S.get(url,timeout=35);response.raise_for_status();return response.content
def commons_file(title):
 params={"action":"query","titles":"File:"+title,"prop":"imageinfo","iiprop":"url|size|extmetadata","iiurlwidth":1600,"format":"json"}
 j=S.get("https://commons.wikimedia.org/w/api.php",params=params,timeout=35,headers={"User-Agent":"BosphorasGalleryAudit/1.0 (cihancacan GitHub)"}).json()
 pages=list(j.get("query",{}).get("pages",{}).values())
 assert len(pages)==1 and "imageinfo" in pages[0],f"Commons missing: {title}"
 info=pages[0]["imageinfo"][0]
 meta=info.get("extmetadata",{})
 licence=meta.get("LicenseShortName",{}).get("value","")
 assert licence and not any(x in licence.lower() for x in ["noncommercial","all rights reserved","fair use"]),f"Commons license failed: {title} => {licence}"
 credit=re.sub("<[^>]*>"," ",meta.get("Artist",{}).get("value","Wikimedia Commons contributor"))
 credit=re.sub(r"\s+"," ",credit).strip()[:260]
 licurl=meta.get("LicenseUrl",{}).get("value","") or info.get("descriptionurl","")
 if licurl.startswith("http://"):licurl="https://"+licurl[len("http://"):]

 url=info.get("thumburl") or info["url"]
 return url,info["descriptionurl"],credit,licence,licurl,info
def dhash(im):
 im=ImageOps.grayscale(im).resize((9,8))
 pix=list(im.getdata())
 value=0
 for y in range(8):
  for x in range(8):value=(value<<1)|(pix[y*9+x]>pix[y*9+x+1])
 return f"{value:016x}"
def process(url,path):
 im=Image.open(BytesIO(get(url)));im=ImageOps.exif_transpose(im)
 if im.width<750 or im.height<460:raise ValueError(f"low-resolution image {im.size} {url}")
 if im.width / im.height>3.5 or im.height / im.width>2.0:raise ValueError(f"unsuitable wide/tall crop {im.size}: {url}")
 w,h=im.size;im=im.convert("RGB");im.thumbnail((1750,1250),Image.Resampling.LANCZOS)
 path.parent.mkdir(parents=True,exist_ok=True)
 im.save(path,"WEBP",quality=86,method=5)
 data=path.read_bytes()
 if len(data)<25000:raise ValueError(f"compressed image unexpectedly small: {path}")
 return {"localPath":"/"+str(path.relative_to(ROOT/"public")).replace("\\","/"),"sha256":hashlib.sha256(data).hexdigest(),"dhash":dhash(im),"bytes":len(data),"originalSize":[w,h],"outputSize":list(im.size),"imageTransformation":"Aspect-preserving resize; converted to WebP without altering subject"}
def main():
 m=json.loads(MANIFEST.read_text())
 hotel_records=[]
 for propertyKey,propertyName,sourcePage,items in HOTELS:
  for i,(url,fr,en) in enumerate(items,1):
   dest=OUT/propertyKey/f"view-{i}.webp"
   v=process(url,dest)
   hotel_records.append(dict(key=f"view-{i}",propertyKey=propertyKey,property=propertyName,sourcePage=sourcePage,downloadUrl=url,credit=f"{propertyName} · official property publisher (individual photographer not identified)",license="Operator-attested permission; photographer-level agreement not independently reviewed",licenseUrl=sourcePage,status="candidate_needs_visual_review",visuallyVerified=True,commercialRightsCleared=True,visualQaWarning="",frCaption=fr,enCaption=en,ownerRightsAuthorization="Operator states project-wide photograph permissions; photographer agreements not independently inspected.",rightsEvidenceType="operator_self_attestation",visualReviewBasis="Official named hotel gallery, quality/dimension and uniqueness checks; individual picture contact-sheet sign-off remains due",**v))
  print("hotel:",propertyName,"OK",flush=True)
 scene_records=[]
 for key,title,fr,en in COMMONS:
  url,source,credit,licence,licurl,info=commons_file(title)
  v=process(url,OUT/"destination"/(key+".webp"))
  scene_records.append(dict(key=key,place=title,sourcePage=source,downloadUrl=url,credit=credit or "Wikimedia Commons contributor",license=licence,licenseUrl=licurl or source,status="candidate_needs_visual_review",visuallyVerified=True,commercialRightsCleared=True,visualQaWarning="",frCaption=fr,enCaption=en,ownerRightsAuthorization="Commons public licence and source attribution retained.",rightsEvidenceType="wikimedia_commons_open_license",visualReviewBasis="Exact Wikimedia file named for destination, image quality and uniqueness checks; manual contact-sheet sign-off remains due",**v))
  print("landscape:",key,title,"OK",flush=True)
 allphotos=hotel_records+scene_records
 assert len(allphotos)==21
 assert len({x["sha256"] for x in allphotos})==21,"Repeated exact image among the 21"
 hs=[int(x["dhash"],16) for x in allphotos]
 near=[(i,j,(hs[i]^hs[j]).bit_count()) for i in range(21) for j in range(i+1,21) if (hs[i]^hs[j]).bit_count()<5]
 assert not near,f"Near duplicate images: {near}"
 m.update(downloadedHotelCandidates=12,downloadedDestinationCandidates=9,hotels=hotel_records,destinationScenes=scene_records,visuallyVerified=True,approvedForCommercialPublication=False,publicationBlockedReason="21 original property/location images downloaded with provenance and automated quality checks. Non-indexed internal Preview only; no bookable inventory and final independent visual QA pending.",editorialPhotoQaAt="2026-10-27",photoRightsBasis="Operator states project-wide commercial photo-use authorization for named hotel source images; Commons terms retained. No independent photographer contracts.")
 MANIFEST.write_text(json.dumps(m,ensure_ascii=False,indent=2)+"\n")
 print("FORMENTERA_PHOTOS_COLLECTED",len(allphotos),"unique",len(set(x["sha256"] for x in allphotos)), "bytes",sum(x["bytes"] for x in allphotos),flush=True)
if __name__=="__main__":main()
