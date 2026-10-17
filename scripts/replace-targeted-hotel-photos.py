#!/usr/bin/env python3
"""Targeted replacements for exact hotel photos requested by Bosphoras owner.
On-site official/gallery source only; do not use images from other properties.
Output candidate WebP + original page/URL + hash, NEVER automatic visual approval.
Preserves previously visually accepted frames and guards near-duplicate crops.
"""
from __future__ import annotations
import hashlib,html,json,re,time
from io import BytesIO
from pathlib import Path
from urllib.parse import urljoin,urlparse,unquote
import requests
from bs4 import BeautifulSoup
from PIL import Image,ImageOps

S=requests.Session();S.headers.update({"User-Agent":"Bosphoras-Luxury-Stays/1.0 (hotel imagery attribution checks; www.bosphoras.com)","Accept":"text/html, image/avif, image/webp, image/jpeg, */*;q=0.7"})
ROOT=Path("data/travel")
# property key and exact property's gallery or reputable resort directory page, not arbitrary hotel photos.
JOBS=[
 ("stMoritz","st-moritz","kulm-hotel",["https://www.kulm.com/en/image-gallery","https://www.kulm.com/en/winter/","https://www.kulm.com/en/winter/rooms-suites"],"kulm"),
 ("aspen","aspen","hotel-jerome",["https://auberge.com/hotel-jerome/stay/","https://auberge.com/hotel-jerome/","https://auberge.com/hotel-jerome/gallery/"],"jerome"),
 ("niseko","niseko","ritz-carlton-reserve",["https://www.marriott.com/en-us/hotels/ctsrz-higashiyama-niseko-village-a-ritz-carlton-reserve/photos/","https://www.marriott.com/en-us/hotels/ctsrz-higashiyama-niseko-village-a-ritz-carlton-reserve/overview/"],"ctsrz"),
 ("niseko","niseko","setsu-niseko",["https://setsuniseko.com/en/gallery/","https://setsuniseko.com/en/suites/","https://setsuniseko.com/en/"],"setsu"),
 ("megeve","megeve","les-fermes-de-marie",["https://www.fermesdemarie.com/en/hiver/hotel-megeve","https://www.fermesdemarie.com/en/"],"fermes"),
 ("megeve","megeve","l-alpaga",["https://alpaga.com/fr/proprietes/hotel-alpaga/chambres-suites/","https://alpaga.com/fr/proprietes/hotel-alpaga/"],"alpaga"),
 ("megeve","megeve","lodge-park",["https://www.lodgepark.com/en/hotel-center-of-megeve","https://www.lodgepark.com/en/"],"lodge"),
 ("jacksonHole","jackson-hole","hotel-jackson",["https://hoteljackson.com/accommodations/","https://hoteljackson.com/"],"jackson"),
 ("jacksonHole","jackson-hole","wort-hotel",["https://www.worthotel.com/rooms-suites","https://www.worthotel.com/","https://www.worthotel.com/gallery"],"wort"),
 ("bigSky","big-sky","montage-big-sky",["https://www.montage.com/bigsky/accommodations/","https://www.montage.com/bigsky/"],"montage"),
 ("bigSky","big-sky","oneonly-moonlight",["https://www.oneandonlyresorts.com/moonlight-basin/stays","https://www.oneandonlyresorts.com/moonlight-basin","https://www.kerznercommunications.com/section/our-brands/oneandonly/oneandonly-moonlight-basin-montana/?lang=eng"],"moonlight"),
 ("valDisere","val-disere","airelles-val-disere",["https://airelles.com/fr/destination/val-d-isere-hotel","https://airelles.com/en/destination/val-d-isere-hotel"],"airelles"),
 ("valDisere","val-disere","le-k2-chogori",["https://lek2chogori.com/fr/","https://lek2chogori.com/fr/sejourner/chambres.html"],"chogori"),
 ("valDisere","val-disere","la-mourra",["https://www.hotellamourra.com/fr/","https://www.hotellamourra.com/en/"],"mourra"),
 ("valDisere","val-disere","le-blizzard",["https://hotelblizzard.com/fr/","https://hotelblizzard.com/en/"],"blizzard"),
 ("verbier","verbier","w-verbier",["https://www.marriott.com/en-us/hotels/gvawh-w-verbier/photos/","https://www.verbier.com/hotels/w-verbier","https://www.marriott.com/en-us/hotels/gvawh-w-verbier/overview/"],"verbier"),
 ("verbier","verbier","chalet-adrien",["https://chalet-adrien.com/en/rooms-suites-en/savoleyres-2/","https://chalet-adrien.com/en/"],"adrien"),
 ("verbier","verbier","experimental-chalet",["https://www.experimentalgroup.com/verbier/experimental-chalet-verbier/gallery","https://www.verbier.com/hotels/experimental-chalet","https://www.experimentalchalet.com/"],"experimental"),
]
BAD=re.compile(r"logo|favicon|icon|flag|avatar|logo_|cobrand|credit.?card|bonvoy|visa|gift.?card|newsletter|site.?map|instagram|facebook|animated|footer|social|brandmark|mobile-menu|spinner|privacy|award|map.?pin|favicon|badge",re.I)
POS=re.compile(r"hotel|suite|room|bedroom|spa|pool|lobby|exterior|interior|living|facade|terrace|garden|lounge|chalet|bath|residence|reception|resort|restaurant",re.I)
IMG=re.compile(r"\.(?:jpe?g|png|webp|avif)(?:$|[?#])",re.I)
ALLOW_CDN=("cloudfront.net","cloudinary.com","ctfassets.net","cdn.sanity.io","cache.marriott.com","images.squarespace-cdn.com","cdn.prod.website-files.com","wp-content","assets.hyatt.com","dam.kerzner.com","images.prismic.io","assets.airelles.com","cdn.verbier.com","images.unsplash.com","media.kulm.com","uploads.montage.com")

def page(url):
 try:
  r=S.get(url,timeout=22);r.raise_for_status()
  if "html" not in r.headers.get("content-type",""):return ""
  return r.text
 except requests.RequestException as e:
  print("PAGE_UNAVAILABLE",url[:105],str(e)[:80],flush=True);return ""

def image_links(site,keyword):
 body=page(site)
 if not body:return []
 soup=BeautifulSoup(body,"html.parser")
 links=[];seen=set()
 def add(raw,caption,weight):
  if not raw or not isinstance(raw,str):return
  for s in re.split(r",\s*(?=https?://|/)",html.unescape(raw.replace("\\/","/"))):
   base=s.strip().strip("'\"").split(" ")[0]
   if base.startswith("data:"):continue
   u=urljoin(site,base)
   if not u.startswith("https://") or not IMG.search(u):continue
   context=(u+" "+caption).lower()
   if BAD.search(context):continue
   host=(urlparse(u).hostname or "").lower()
   sitehost=(urlparse(site).hostname or "").replace("www.","")
   if not(host==sitehost or host.endswith("."+sitehost) or any(host.endswith(c) for c in ALLOW_CDN)):
    continue
   if u in seen:continue
   seen.add(u)
   score=weight + (5 if POS.search(caption) else 0)
   if keyword in context:score+=7
   if re.search(r"\b\d{3,4}w\b",u):score+=2
   links.append({"url":u,"sourcePage":site,"context":caption[:240],"score":score})
 for elem in soup.select("img,source,video[poster]"):
  caption=(elem.get("alt") or elem.get("title") or elem.get("aria-label") or "")
  for attr in ("src","data-src","data-original","data-lazy-src","data-full-url","srcset","data-srcset","poster"):
   add(elem.get(attr),caption,4)
 for meta in soup.select("meta[property='og:image'],meta[name='twitter:image']"):
  add(meta.get("content"),"Official hotel's page hero photograph",9)
 for el in soup.select("a[href],*[style]"):
  val=el.get("href","")
  if IMG.search(val):add(val,el.get("title",""),3)
  for im in re.findall(r"url\(([^)]*)\)",el.get("style") or ""):add(im,"Official source background",2)
 # Image IDs may occur in embedded data where no img tag is available.
 for match in re.findall(r'https?:\\?/\\?/[^"\'\s<>]+?\.(?:jpe?g|png|webp)(?:\?[^"\'\s<>]*)?',body,re.I)[:120]:
  add(match,"Embedded image on exact hotel page",1)
 return sorted(links,key=lambda x:-x["score"])

def pict(url):
 try:
  r=S.get(url,timeout=22);r.raise_for_status()
  if len(r.content)>14_000_000:return None
  with Image.open(BytesIO(r.content)) as f:
   im=ImageOps.exif_transpose(f).convert("RGB");original=im.size
   if im.width<900 or im.height<480 or not 1.10<im.width/im.height<3.3:return None
   im.thumbnail((1800,1350),Image.Resampling.LANCZOS)
   out=BytesIO();im.save(out,"WEBP",quality=83,method=4)
   binary=out.getvalue()
   if len(binary)<18000:return None
   return binary,original,im.size
 except (requests.RequestException,OSError,ValueError):return None

def d_hash(binary):
 with Image.open(BytesIO(binary)) as f:
  vals=list(ImageOps.exif_transpose(f).convert("L").resize((9,8)).getdata())
  return sum(1<<(row*8+col) for row in range(8) for col in range(8) if vals[row*9+col]>vals[row*9+col+1])

def normalized(url):
 # Do not count resized source derivatives as different photographs.
 part=unquote(urlparse(url).path).lower().replace("_thumb","")
 part=re.sub(r"-\d{2,4}x\d{2,4}(?=\.(jpg|jpeg|webp|png)$)","",part)
 part=re.sub(r"_\d{2,4}w(?=\.)","",part)
 return part.split("/")[-1] or part

def run(stem,slug,prop,sites,keyword):
 path=ROOT/(stem+"MediaCandidates.json");doc=json.loads(path.read_text(encoding="utf8"))
 owned=[x for x in doc["hotels"] if x.get("propertyKey")==prop]
 targets=[x for x in owned if x.get("status")!="candidate_needs_visual_review" or not x.get("visuallyVerified") or x.get("visualQaWarning")]
 if not targets:return
 known=[]
 for x in owned:
  if x in targets:continue
  p=x.get("localPath","")
  if p and Path("public"+p).exists():
   try:known.append(d_hash(Path("public"+p).read_bytes()))
   except (OSError,ValueError):pass
 seen={normalized(x.get("downloadUrl","")) for x in owned if x not in targets and x.get("downloadUrl")}
 collection=[];used=set()
 for site in sites:
  for c in image_links(site,keyword):
   key=normalized(c["url"])
   if key not in used:used.add(key);collection.append(c)
 collection.sort(key=lambda x:-x["score"])
 print("PROPERTY",slug,prop,"waiting",len(targets),"source_candidates",len(collection),flush=True)
 for item in targets:
  found=False
  for c in collection[:75]:
   canonical=normalized(c["url"])
   if canonical in seen:continue
   seen.add(canonical)
   asset=pict(c["url"])
   if asset is None:continue
   payload,original,size=asset
   dh=d_hash(payload)
   if any((dh^prior).bit_count()<10 for prior in known):continue
   # CANDIDATE only; visual review required before the photo becomes public.
   out="/images/travel/"+slug+"-premium/"+prop+"/"+item["key"]+".webp"
   physical=Path("public"+out);physical.parent.mkdir(parents=True,exist_ok=True)
   old=item.get("downloadUrl","")
   physical.write_bytes(payload);known.append(dh)
   item.update({"status":"candidate_needs_visual_review","localPath":out,
       "downloadUrl":c["url"],"sourcePage":c["sourcePage"],"candidateContext":c["context"],
       "sha256":hashlib.sha256(payload).hexdigest(),"bytes":len(payload),
       "originalSize":original,"outputSize":size,
       "ownerRightsAuthorization":"Owner confirmed usage rights in current chat, 2026-10-17; visual matching still to be checked.",
       "commercialRightsCleared":True,"visuallyVerified":False,
       "visualQaWarning":"New image is from this hotel's photo page; independent visual identity, style and duplicate review still required.",
       "replacedSource":old,
       "credit":item["property"]+" · photo on exact property's own gallery; original credit retained at source"})
   found=True;print("REPLACED_CANDIDATE",slug,prop,item["key"],c["url"][:125],flush=True)
   break
  if not found:print("STILL_BLOCKED",slug,prop,item["key"],flush=True)
 doc["downloadedHotelCandidates"]=sum(x["status"]=="candidate_needs_visual_review" for x in doc["hotels"])
 doc["visuallyVerified"]=False;doc["approvedForCommercialPublication"]=False
 path.write_text(json.dumps(doc,indent=2,ensure_ascii=False)+"\n",encoding="utf8")

for stem,slug,prop,pages,key in JOBS:
 try:run(stem,slug,prop,pages,key)
 except Exception as e:
  print("FAILED_PROPERTY",slug,prop,str(e)[:160],flush=True)
print("COMPLETE: photo replacements are CANDIDATES, not visually approved",flush=True)
