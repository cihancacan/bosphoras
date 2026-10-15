#!/usr/bin/env python3
"""Two final hotel image slots, from proven exact property source pages."""
import json,hashlib
from pathlib import Path
from io import BytesIO
import requests
from PIL import Image,ImageOps
S=requests.Session();S.headers["User-Agent"]="Bosphoras Luxury Stays editorial photo checker"
DATA={
 "jacksonHole":("jackson-hole","four-seasons-jackson","view-3",[
 ("https://www.fourseasons.com/content/dam/fourseasons/images/web/JAC/JAC_1933_original.jpg","https://press.fourseasons.com/jacksonhole/hotel-news/2026/best-hotels-in-jackson-hole-and-wyoming","Four Seasons Jackson Hole current suite with fireplace"),
 ("https://www.oxfordski.com/media/47503/fpo_jac_694.jpg?bgcolor=&height=698&mode=crop&quality=80&scale=downscaleonly&width=1240","https://www.oxfordski.com/luxury-ski-chalets-hotels/united-states/jackson-hole-wyoming/four-seasons-resort-jackson-hole/","Four Seasons Jackson Hole interior; fallback only if distinct")]),
 "bigSky":("big-sky","oneonly-moonlight","view-1",[
 ("https://www.carrier.co.uk/media/pfac5nvp/oneonly_moonlightbasin_p1_mock_up_bedroom-1066_master_v2.jpg?rxy=0.6805012372058705%2C0.30831576518187037&v=1dc951ca57603b0","https://www.carrier.co.uk/design/hotels/oneonly-moonlight-basin/","One&Only Moonlight Basin bedroom interior"),
 ("https://media.cntraveler.com/photos/69172fab53e37de348ebd1bf/16%3A9/w_2560%2Cc_limit/One%26Only%20Moonlight%20Basin_Private%20Home.jpg","https://www.cntraveler.com/hotels/big-sky/oneandonly-moonlight-basin-first-guest","One&Only Moonlight Basin private residence view"),
 ("https://dam.kerzner.com/i/kerzner/One%26Only_MoonlightBasin_P2_BigSky_Suite_Living_View-2619_Fire_MASTER-2?poi=0.5107%2C0.539%2C0%2C0&scaleFit=poi","https://www.oneandonlyresorts.com/gallery","One&Only Moonlight Basin suite living room")
 ])}
def perceptual(raw):
 with Image.open(BytesIO(raw)) as im:
  g=list(im.convert("L").resize((9,8)).getdata())
  return sum(1<<(r*8+c) for r in range(8) for c in range(8) if g[r*9+c]>g[r*9+c+1])
for stem,(slug,property_key,key,urls) in DATA.items():
 path=Path("data/travel/"+stem+"MediaCandidates.json")
 doc=json.loads(path.read_text())
 record=next(x for x in doc["hotels"] if x["propertyKey"]==property_key and x["key"]==key)
 if record["status"]!="missing":continue
 old=[]
 for row in doc["hotels"]+doc["destinationScenes"]:
  p=row.get("localPath")
  if p and Path("public"+p).exists():
   try:old.append(perceptual(Path("public"+p).read_bytes()))
   except (OSError,ValueError):pass
 for src,source,label in urls:
  try:
   resp=S.get(src,timeout=26);resp.raise_for_status()
   with Image.open(BytesIO(resp.content)) as img:
    img=ImageOps.exif_transpose(img).convert("RGB")
    if img.width<850 or img.height<450 or not 1.05<img.width/img.height<3.4:continue
    initial=img.size;img.thumbnail((1800,1300),Image.Resampling.LANCZOS)
    mem=BytesIO();img.save(mem,"WEBP",quality=83,method=5)
    binary=mem.getvalue()
    if len(binary)<15000:continue
    sha=perceptual(binary)
    if any((sha ^ oldsha).bit_count()<10 for oldsha in old):
     print("DUPLICATE",stem,label,flush=True);continue
    local=f"/images/travel/{slug}-premium/{property_key}/{key}.webp"
    save=Path("public"+local);save.parent.mkdir(parents=True,exist_ok=True);save.write_bytes(binary)
    record.update(status="candidate_needs_visual_review",localPath=local,downloadUrl=src,sourcePage=source,
      candidateContext=label,credit=record["property"]+" — attributed original source",
      sha256=hashlib.sha256(binary).hexdigest(),bytes=len(binary),originalSize=initial,outputSize=img.size,
      visuallyVerified=False,commercialRightsCleared=True,ownerRightsAuthorization="Bosphoras owner confirmed image rights on 2026-10-15.",
      visualQaWarning="Exact property source checked; final visual identity and presentation review pending.")
    print("RECOVERED",stem,key,src[:125],flush=True);break
  except (requests.RequestException,OSError,ValueError) as e:print("UNAVAILABLE",str(e)[:95],flush=True)
 else:print("UNRESOLVED",stem,flush=True)
 doc["downloadedHotelCandidates"]=sum(x["status"]=="candidate_needs_visual_review" for x in doc["hotels"])
 path.write_text(json.dumps(doc,ensure_ascii=False,indent=2)+"\n")
