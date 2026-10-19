#!/usr/bin/env python3
"""Repair only rejected hotel/landscape photos, using exact official-page sources.
No automatic visual approval or Vercel deployment. Owner confirmed rights.
"""
import hashlib,html,json,re
from io import BytesIO
from pathlib import Path
from urllib.parse import urljoin,urlparse
import requests
from bs4 import BeautifulSoup
from PIL import Image,ImageOps
S=requests.Session()
S.headers.update({"User-Agent":"BosphorasLuxuryStays/2.0 (original property picture verification)","Accept":"text/html,image/webp,image/jpeg,image/*;q=.8"})
TASKS=[
 ("st-moritz","stMoritz","kulm-hotel","view-3",[
 "https://www.kulm.com/en/rooms/corvatsch-suite","https://www.kulm.com/en/rooms/deluxe-suite",
 "https://www.kulm.com/en/image-gallery"],["kulm.com"],["suite","room","corvatsch","deluxe","interior"],["badrutt","portrait","office","history","logo","icon"]),
 ("val-disere","valDisere","destination","scene-5",[
 "https://www.valdisere.com/en/val-disere-in-winter/walks-and-snowshoeing-tours/"],
 ["valdisere.com"],["laisinant","female skier walking","small hamlet","walking through the village"],["map","plan","carte","itinéraire","icon","logo","trace"]),
 ("big-sky","bigSky","oneonly-moonlight","view-1",[
 "https://oneandonlybrand.com/asset/oneonly-moonlight-basin-the-landing-25/",
 "https://oneandonlybrand.com/asset/oneonly-moonlight-basin-sky-lodge-5/",
 "https://www.oneandonlyresorts.com/moonlight-basin/stays/rooms/moonlight-room"],
 ["oneandonlybrand.com","oneandonlyresorts.com","kerznercommunications.com"],
 ["moonlight","suite","room","landing","lodge"],["mockup","mock_up","render","rendering","concept","floorplan","logo","icon"])]
def scan(page,hosts,positive,negative):
 try:
  r=S.get(page,timeout=24);r.raise_for_status()
  if "html" not in r.headers.get("content-type",""):return []
 except requests.RequestException as e:
  print("PAGE_BLOCKED",page,str(e)[:90],flush=True);return []
 soup=BeautifulSoup(r.text,"html.parser")
 found=[]
 def add(src,caption):
  if not src:return
  for section in re.split(r",\s*(?=https?://|/)",html.unescape(str(src))):
   url=urljoin(page,section.strip().strip("'\"").split(" ")[0].replace("\\/","/"))
   host=urlparse(url).hostname or ""
   # Official tourism page may serve a specifically captioned photo from its media CDN.
   official_host=any(host==h or host.endswith("."+h) for h in hosts)
   exact_laisinant=("laisinant" in positive and any(k in caption.lower() for k in ("laisinant","female skier walking","small hamlet")))
   exact_moonlight=("moonlight" in positive and "moonlight basin" in (url+" "+caption).lower())
   if not url.startswith("https://") or not (official_host or exact_laisinant or exact_moonlight):continue
   if not re.search(r"\.(jpe?g|webp|png|avif)$",urlparse(url).path,re.I):continue
   content=(url+" "+caption).lower()
   if any(x in content for x in negative):continue
   score=sum(1 for x in positive if x in content)
   if score==0:continue
   found.append((score,url,page,caption[:180]))
 for tag in soup.select("img,source"):
  alt=tag.get("alt") or tag.get("title") or tag.get("aria-label") or ""
  for attr in ["src","data-src","srcset","data-srcset","data-lazy-src","data-original"]:
   add(tag.get(attr),alt)
 for tag in soup.select("meta[property='og:image'],meta[name='twitter:image']"):add(tag.get("content"),"Official property gallery")
 return sorted(found,reverse=True)
def run(slug,stem,group,key,pages,hosts,positive,negative):
 path=Path("data/travel")/(stem+"MediaCandidates.json")
 data=json.loads(path.read_text(encoding="utf8"))
 items=data["destinationScenes"] if group=="destination" else data["hotels"]
 item=next(x for x in items if x["key"]==key and (group=="destination" or x.get("propertyKey")==group))
 if item.get("visuallyVerified") is True:
  print("KEEP_APPROVED_PHOTO",slug,group,key,flush=True);return
 candidates=[]
 for page in pages:
  result=scan(page,hosts,positive,negative);print("OFFICIAL_SCAN",slug,key,page,len(result),flush=True)
  candidates+=result
 used={x.get("sha256") for x in data["hotels"]+data["destinationScenes"] if x is not item}
 seen=set()
 for score,url,page,caption in candidates[:70]:
  if url in seen:continue
  seen.add(url)
  try:
   response=S.get(url,timeout=23);response.raise_for_status()
   if len(response.content)>16_000_000:continue
   with Image.open(BytesIO(response.content)) as img:
    im=ImageOps.exif_transpose(img).convert("RGB")
    original=im.size
    if im.width<900 or im.height<470 or not 1.1<im.width/im.height<3.4:continue
    im.thumbnail((1700,1200),Image.Resampling.LANCZOS)
    buf=BytesIO();im.save(buf,"WEBP",quality=82,method=5);payload=buf.getvalue()
   digest=hashlib.sha256(payload).hexdigest()
   if len(payload)<20000 or digest in used:continue
   location=f"/images/travel/{slug}-premium/{group}/{key}.webp"
   output=Path("public"+location);output.parent.mkdir(parents=True,exist_ok=True);output.write_bytes(payload)
   item.update(status="candidate_needs_visual_review",localPath=location,
    sourcePage=page,downloadUrl=url,candidateContext=caption or "Official property media image",
    sha256=digest,bytes=len(payload),originalSize=original,outputSize=im.size,
    ownerRightsAuthorization="Bosphoras operator affirmed photo rights on 2026-10-15",
    commercialRightsCleared=True,visuallyVerified=False,
    visualQaWarning="Replacement from exact property/location page; needs visual verification before display.")
   path.write_text(json.dumps(data,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
   print("REPLACEMENT_CANDIDATE",slug,group,key,url,flush=True)
   return
  except (requests.RequestException,OSError,ValueError) as e:
   print("ASSET_SKIP",url[:90],str(e)[:70],flush=True)
 print("BLOCKED_UNTIL_AUTHENTIC_IMAGE",slug,group,key,flush=True)
for task in TASKS:run(*task)
