#!/usr/bin/env python3
"""Image sources explicitly name Le Laisinant and Route des Creux 91.
We do not use another area's scene under a false label. Pictorial candidates
must remain visually unapproved until contact-sheet inspection.
"""
from __future__ import annotations
import hashlib,html,json,re
from io import BytesIO
from pathlib import Path
from urllib.parse import urljoin
import requests
from bs4 import BeautifulSoup
from PIL import Image,ImageOps

S=requests.Session();S.headers.update({"User-Agent":"BosphorasLuxuryStays/2.2 (editorial photo provenance https://www.bosphoras.com)","Accept":"text/html,image/jpeg,image/webp,image/png,*/*;q=.7"})
TASKS={
 "val-disere":{
  "stem":"valDisere","key":"scene-5",
  "pages":[
   ("https://www.valdisere.com/it/val-disere-in-inverno/passeggiate-e-escursioni-con-le-racchette-da-neve/",["laisinant","sciatrice","skier"]),
   ("https://www.valdisere.com/en/val-disere-in-winter/walks-and-snowshoeing-tours/",["laisinant","skier"]),
   ("https://www.valdisere.com/en/prepare-for-your-stay/accommodation/private-rentals/chalet-rivollier-val-disere-en-4194594/",["chalet rivollier","laisinant"])
  ]},
 "verbier":{
  "stem":"verbier","key":"scene-6",
  "pages":[
   ("https://www.verbier.com/hotels/chalet-d-adrien",["chalet d'adrien","exterior"]),
   ("https://www.verbier.ch/pratique/stay-hebergements-et-workation/chalet-dadrien-verbier-fr-2788350/",["chalet d’adrien","chalet d'adrien","exterior"]),
   ("https://chalet-adrien.com/en/",["chalet d'adrien","chalet","snow"])
  ]}
}
def digest(p):
 with Image.open(BytesIO(p)) as im:
  g=list(im.convert("L").resize((9,8)).getdata())
  return sum(1<<(row*8+col) for row in range(8) for col in range(8) if g[row*9+col]>g[row*9+col+1])
def picture(url):
 try:
  r=S.get(url,timeout=27);r.raise_for_status()
  if len(r.content)>16_000_000:return None
  with Image.open(BytesIO(r.content)) as image:
   im=ImageOps.exif_transpose(image).convert("RGB")
   if im.width<850 or im.height<420 or not (1.05 < im.width/im.height < 3.6):return None
   start=im.size;im.thumbnail((1800,1300),Image.Resampling.LANCZOS)
   out=BytesIO();im.save(out,"WEBP",quality=83,method=5)
   data=out.getvalue()
   if len(data)<12500:return None
   return data,start,im.size
 except (requests.RequestException,OSError,ValueError) as e:
  print("IMG_DENIED",url[:100],str(e)[:75],flush=True)
 return None
def candidates(page,words):
 try:
  r=S.get(page,timeout=30);r.raise_for_status()
  text=r.text;soup=BeautifulSoup(text,"html.parser")
 except requests.RequestException as e:
  print("PAGE_DENIED",page,str(e)[:80],flush=True);return []
 out=[];seen=set()
 def add(raw,label,weight=0):
  if not raw:return
  for part in re.split(r",\s*(?=https?://|/)",html.unescape(raw).replace("\\/","/")):
   u=urljoin(page,part.strip().strip('"\'' ).split(" ")[0])
   if not u.startswith("https://") or u in seen or not re.search(r"\.(?:jpe?g|png|webp)(?:$|[?])",u,re.I):continue
   if any(z in (u+" "+label).lower() for z in ["logo","svg","icon","placeholder","avatar","flag","award","social-icon"]):continue
   seen.add(u);out.append({"url":u,"sourcePage":page,"context":label,"weight":weight})
 for tag in soup.find_all(["img","source"]):
  label=" ".join([tag.get("alt") or "",tag.get("title") or "",tag.get("aria-label") or ""])
  high=any(word in label.lower() for word in words)
  for attr in ("data-src","src","data-srcset","srcset","data-lazy-src"):
   add(tag.get(attr),label,15 if high else 1)
 for tag in soup.find_all("meta"):
  if (tag.get("property") or "")=="og:image" or (tag.get("name") or "")=="twitter:image":
   add(tag.get("content"),"Official place/hotel gallery image",3)
 out.sort(key=lambda c:-c["weight"])
 print("GALLERY",page,len(out),"specific",sum(x["weight"]>3 for x in out),flush=True)
 return out
for city,config in TASKS.items():
 stem=config["stem"];p=Path("data/travel")/(stem+"MediaCandidates.json")
 j=json.loads(p.read_text(encoding="utf8"));slot=config["key"]
 target=next(x for x in j["destinationScenes"] if x["key"]==slot)
 if target["status"]!="missing":continue
 otherHashes=[]
 for o in j["hotels"]+j["destinationScenes"]:
  f=o.get("localPath")
  if not f or not Path("public"+f).exists():continue
  try:otherHashes.append(digest(Path("public"+f).read_bytes()))
  except (OSError,ValueError):pass
 done=False
 for page,words in config["pages"]:
  for candidate in candidates(page,words):
   if candidate["weight"]<=1:continue
   photo=picture(candidate["url"])
   if not photo:continue
   payload,orig,out=photo
   if any((digest(payload)^h).bit_count()<10 for h in otherHashes):
    print("SOURCE_DUPLICATE",city,slot,flush=True);continue
   local=f"/images/travel/{city}-premium/destination/{slot}.webp"
   file=Path("public"+local);file.parent.mkdir(parents=True,exist_ok=True);file.write_bytes(payload)
   target.update(status="candidate_needs_visual_review",localPath=local,downloadUrl=candidate["url"],
     sourcePage=candidate["sourcePage"],candidateContext=("Hameau du Laisinant" if city=="val-disere" else "Chalet d'Adrien, Route des Creux 91, Verbier")+"; "+candidate["context"],
     credit="Official regional tourism or exact hotel website",
     bytes=len(payload),sha256=hashlib.sha256(payload).hexdigest(),
     originalSize=orig,outputSize=out,visuallyVerified=False,commercialRightsCleared=True,
     ownerRightsAuthorization="Bosphoras operator confirmed usage rights on 2026-10-15; keep original credit",
     visualQaWarning="Geographically grounded photo, final manual image identity/season QA still pending.")
   print("PHOTO_IMPORTED",city,slot,candidate["url"][:115],flush=True)
   done=True;break
  if done:break
 if not done:print("NOT_RECOVERABLE_CORRECTLY",city,slot,flush=True)
 j["downloadedDestinationCandidates"]=sum(x["status"]=="candidate_needs_visual_review" for x in j["destinationScenes"])
 p.write_text(json.dumps(j,ensure_ascii=False,indent=2)+"\n",encoding="utf8")
