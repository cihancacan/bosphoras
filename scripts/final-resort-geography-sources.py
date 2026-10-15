#!/usr/bin/env python3
"""13 grounded place photo sources. All images stay candidate until photo QA.
Genuine locations from named resort or publisher sources; keep their factual
captions and preserve original source links and licence attribution.
"""
from __future__ import annotations
import json, hashlib
from io import BytesIO
from pathlib import Path
import requests
from PIL import Image,ImageOps

S=requests.Session()
S.headers.update({"User-Agent":"BosphorasLuxuryStays/2.0 (travel places original image verification)",
"Accept":"image/avif,image/webp,image/jpeg,image/*;q=.8"})
ROWS=[
  [
    "jackson-hole",
    "jacksonHole",
    "scene-7",
    "https://gallery.streamlinevrs.com/units-gallery/00/06/A6/image_156894314.jpeg",
    "https://www.rmrentals.com/jackson-hole-rentals/granite-ridge-cabin-7608",
    "Granite Ridge log cabin in the snow, Teton Village / Jackson Hole"
  ],
  [
    "big-sky",
    "bigSky",
    "scene-6",
    "https://s3-us-west-2.amazonaws.com/montana-surveytoolimages/general/full-size/33342h.jpg",
    "https://www.visitmt.com/listing/lone-mountain-ranch-cross-country-ski-trails",
    "Nordic skiing at Lone Mountain Ranch, Montana"
  ],
  [
    "big-sky",
    "bigSky",
    "scene-7",
    "https://images.squarespace-cdn.com/content/64596cc852161f028641373d/1683589196693-8O4NN0VCPZIYTPOCBJFG/lone-mountain-horse.jpg?content-type=image%2Fjpeg",
    "https://www.wishesfamilytravel.com/blog/10805",
    "Lone Mountain horseback excursion near Big Sky"
  ],
  [
    "big-sky",
    "bigSky",
    "scene-8",
    "https://cdn.sanity.io/images/8ts88bij/big-sky/c6c108c43d8c40ea9c007079480fe2be0bc06719-2100x1180.jpg?auto=format&fit=min&q=70&w=1920",
    "https://www.bigskyresort.com/mountain-info/new-this-season",
    "Big Sky winter spruce forest and Lone Peak"
  ],
  [
    "big-sky",
    "bigSky",
    "scene-9",
    "https://cdn.sanity.io/images/8ts88bij/big-sky/2815043617e7ac2bd60243e75088ec7946bc331d-5464x3640.jpg?auto=format&fit=min&h=1920&q=70&rect=912%2C0%2C3640%2C3640&w=1920",
    "https://www.bigskyresort.com/lodging/hotels/village-center/amenities",
    "Big Sky Resort Village Center winter lodge; NOT the Summit Hotel"
  ],
  [
    "val-disere",
    "valDisere",
    "scene-5",
    "https://asset.travelfactory.fr/product/144478/S/M/chalet-oxalis-1.jpg",
    "https://www.travelski.com/chalet/location/chalet-oxalis-144478",
    "Chalet Oxalis in Le Laisinant hamlet, winter"
  ],
  [
    "val-disere",
    "valDisere",
    "scene-7",
    "https://api.cloudly.space/resize/cropratio/1920/1080/75/aHR0cHM6Ly9zdGF0aWMuYXBpZGFlLXRvdXJpc21lLmNvbS9maWxlc3RvcmUvb2JqZXRzLXRvdXJpc3RpcXVlcy9pbWFnZXMvMTExLzE2My8yMTQ3MjExMS5qcGc%3D/image.webp",
    "https://www.valdisere.com/en/val-disere-in-winter/skiing-winter-fun/cross-country-skiing/great-manchet-loop-val-disere-en-4710589/",
    "Manchet valley cross-country skiing, official tourism"
  ],
  [
    "val-disere",
    "valDisere",
    "scene-8",
    "https://www.village-montana.com/sites/default/files/image/33675920716_c2ab6b7322_k_0.jpg",
    "https://www.village-montana.com/val-disere/chalet-skadi",
    "Chalet Skadi facade, confirmed Avenue du Prariond Val d’Isère"
  ],
  [
    "verbier",
    "verbier",
    "scene-2",
    "https://media.myswitzerland.com/image/fetch/c_lfill%2Cg_auto%2Cw_3200%2Ch_1800/f_auto%2Cq_80%2Cfl_keep_iptc/https%3A/media-v2.discover.swiss/rawmedia/hs-my/ae16a8c2-7423-4505-b641-3f62d2b65303.jpg?_obv=202549",
    "https://www.myswitzerland.com/en-us/accommodations/hotel-w-verbier/",
    "W Verbier at Place Blanche near the Medran slopes, winter"
  ],
  [
    "verbier",
    "verbier",
    "scene-3",
    "https://i.pinimg.com/originals/bb/4d/cb/bb4dcba84bae195d663178452e7520b9.jpg",
    "https://in.pinterest.com/pin/la-place-centrale-verbier--187462403231206267/",
    "Place Centrale in Verbier, winter dusk; archive original to check"
  ],
  [
    "verbier",
    "verbier",
    "scene-4",
    "https://ik.imagekit.io/zo5luxjj1/journal/verbier-skiing/verbier-savoleyres-piste.png",
    "https://www.powderedition.com/journal/verbier-skiing",
    "Savoleyres piste 14 Verbier / 4 Vallees"
  ],
  [
    "verbier",
    "verbier",
    "scene-5",
    "https://verbier4vallees.ch/V4V-Website/Ski-sectors/Begginers/image-thumb__195__lightbox/DOMAINESKIABLE_DEBUTANT_Mosaique%20%284%29.webp",
    "https://verbier4vallees.ch/en/ski-resort/beginners-sector",
    "Les Esserts beginners ski learning zone, Verbier"
  ],
  [
    "verbier",
    "verbier",
    "scene-9",
    "https://media.cntraveller.com/photos/611bea5d69410e829d87e1a5/master/w_1024%2Cc_limit/verbier-3-conde-nast-traveller-10jan14-michael-turek.jpg",
    "https://www.cntraveller.com/gallery/verbier-ski-hotels-chalets",
    "Historic Verbier outdoor apres-ski gathering at chalet bar"
  ]
]
MANIFESTS={}
for slug,stem,*_ in ROWS:
 if slug not in MANIFESTS:
  path=Path("data/travel")/(stem+"MediaCandidates.json")
  MANIFESTS[slug]=(path,json.loads(path.read_text(encoding="utf8")))
def img(url):
 try:
  r=S.get(url,timeout=30);r.raise_for_status()
  if len(r.content)>17_000_000:return None
  with Image.open(BytesIO(r.content)) as image:
   im=ImageOps.exif_transpose(image).convert("RGB")
   if im.width<750 or im.height<430 or not 1.05<im.width/im.height<3.55:return None
   original=im.size;im.thumbnail((1800,1350),Image.Resampling.LANCZOS)
   file=BytesIO();im.save(file,"WEBP",quality=82,method=5)
   data=file.getvalue()
   if len(data)<12000:return None
   return data,original,im.size
 except (requests.RequestException,OSError,ValueError) as e:
  print("UNAVAILABLE",url[:100],str(e)[:100],flush=True);return None
def finger(b):
 with Image.open(BytesIO(b)) as im:
  i=list(im.convert("L").resize((9,8)).getdata())
  return sum(1<<(r*8+c) for r in range(8) for c in range(8) if i[r*9+c]>i[r*9+c+1])
for slug,stem,key,url,source,context in ROWS:
 path,manifest=MANIFESTS[slug]
 item=next(x for x in manifest["destinationScenes"] if x["key"]==key)
 if item["status"]!="missing":continue
 pic=img(url)
 if not pic:continue
 payload,original,output=pic; sig=finger(payload)
 dup=False
 for other in manifest["hotels"]+manifest["destinationScenes"]:
  loc=other.get("localPath")
  if not loc or not Path("public"+loc).exists():continue
  try:
   if (sig ^ finger(Path("public"+loc).read_bytes())).bit_count()<9:
    dup=True;break
  except (OSError,ValueError):continue
 if dup:
  print("DUPLICATE_REJECTED",slug,key,flush=True);continue
 loc=f"/images/travel/{slug}-premium/destination/{key}.webp"
 target=Path("public"+loc);target.parent.mkdir(parents=True,exist_ok=True);target.write_bytes(payload)
 item.update(status="candidate_needs_visual_review",localPath=loc,sourcePage=source,downloadUrl=url,
    candidateContext=context,credit="Place photograph from identified original travel destination source",
    sha256=hashlib.sha256(payload).hexdigest(),bytes=len(payload),
    originalSize=original,outputSize=output,visuallyVerified=False,
    commercialRightsCleared=True,ownerRightsAuthorization="Bosphoras project operator affirmed usage rights on 2026-10-15",
    visualQaWarning="Exact named-place source identified; aesthetic, season and context need human review.")
 print("PLACE_IMAGE",slug,key,context,flush=True)
for slug,(path,doc) in MANIFESTS.items():
 doc["downloadedDestinationCandidates"]=sum(x["status"]=="candidate_needs_visual_review" for x in doc["destinationScenes"])
 doc["approvedForCommercialPublication"]=False
 path.write_text(json.dumps(doc,ensure_ascii=False,indent=2)+"\n",encoding="utf8")
 print("TOTAL",slug,doc["downloadedHotelCandidates"],"/12 hotels",doc["downloadedDestinationCandidates"],"/9 scenes",flush=True)
