#!/usr/bin/env python3
"""Source-specific hotel media recovery, owner-authorized but awaiting photo identity QA.
DO NOT relabel another property. Never inflate 3 slots using the same source photograph.
Sources: Four Seasons official media page link targets, One&Only's media asset library,
and Big Sky Resort's exact Summit Hotel listing.
"""
from __future__ import annotations
import hashlib,html,json,re,time
from io import BytesIO
from pathlib import Path
from urllib.parse import urljoin,urlparse,unquote
import requests
from bs4 import BeautifulSoup
from PIL import Image,ImageOps

S=requests.Session()
S.headers.update({"User-Agent":"BosphorasLuxuryStays/1.5 (editorial official-image attribution); contact https://www.bosphoras.com/","Accept":"text/html,image/avif,image/webp,image/jpeg,image/*;q=.8"})
ROOT=Path("data/travel")
TARGET={
 "megeve":("megeve","four-seasons-megeve","Four Seasons Resort Megève",
  "https://www.fourseasons.com/megeve/photos-and-videos/",[
    ("Exterior of Four Seasons Resort Megève","https://www.fourseasons.com/content/dam/fourseasons/images/web/MVE/MVE_1101_original.jpg"),
    ("Suite du Mont d'Arbois, Four Seasons Resort Megève","https://www.fourseasons.com/content/dam/fourseasons/images/web/MVE/MVE_122_original.jpg"),
    ("Suite Rochebrune, Four Seasons Resort Megève","https://www.fourseasons.com/content/dam/fourseasons/images/web/MVE/MVE_178_original.jpg")]),
 "jackson-hole":("jacksonHole","four-seasons-jackson","Four Seasons Resort and Residences Jackson Hole",
  "https://www.fourseasons.com/jacksonhole/photos-and-videos/",[
    ("Exterior in snow at Four Seasons Jackson Hole","https://www.fourseasons.com/content/dam/fourseasons/images/web/JAC/JAC_461_original.jpg"),
    ("Mountain-Side Room, Four Seasons Jackson Hole","https://www.fourseasons.com/content/dam/fourseasons/images/web/JAC/JAC_1553_original.jpg"),
    ("Granite Residence, Four Seasons Jackson Hole","https://www.fourseasons.com/content/dam/fourseasons/images/web/JAC/JAC_1862_original.jpg")]),
}
def page(url):
 try:
  r=S.get(url,timeout=28);r.raise_for_status()
  return r.text if "html" in r.headers.get("content-type","") else ""
 except requests.RequestException as e:
  print("UNAVAILABLE_PAGE",url,str(e)[:130],flush=True);return ""
def hash_img(b):
 with Image.open(BytesIO(b)) as f:
  a=list(ImageOps.exif_transpose(f).convert("L").resize((9,8)).getdata())
  return sum(1<<(row*8+col) for row in range(8) for col in range(8) if a[row*9+col]>a[row*9+col+1])
def try_picture(url):
 try:
  r=S.get(url,timeout=32);r.raise_for_status()
  if len(r.content)>19_000_000:return None
  with Image.open(BytesIO(r.content)) as f:
   im=ImageOps.exif_transpose(f).convert("RGB");size=im.size
   if im.width<850 or im.height<470 or not 1.05<im.width/im.height<3.3:return None
   im.thumbnail((1800,1300),Image.Resampling.LANCZOS)
   out=BytesIO();im.save(out,"WEBP",quality=84,method=5)
   if len(out.getvalue())<12000:return None
   return out.getvalue(),size,im.size
 except (requests.RequestException,OSError,ValueError) as e:
  print("SOURCE_BAD",url[:105],str(e)[:90],flush=True);return None
def as_record(slug,property_key,record,asset_url,source,context,known):
 pic=try_picture(asset_url)
 if not pic:return False
 data,original,size=pic;h=hash_img(data)
 if any((h^x).bit_count()<12 for x in known):
  print("DUPLICATE_REJECTED",slug,record["key"],asset_url[:100],flush=True)
  return False
 local="/images/travel/"+slug+"-premium/"+property_key+"/"+record["key"]+".webp"
 path=Path("public"+local);path.parent.mkdir(parents=True,exist_ok=True)
 path.write_bytes(data);known.add(h)
 record.update({"status":"candidate_needs_visual_review","localPath":local,
    "downloadUrl":asset_url,"sourcePage":source,"candidateContext":context,
    "credit":record["property"]+" · official hotel/brand photo source",
    "sha256":hashlib.sha256(data).hexdigest(),"bytes":len(data),
    "originalSize":original,"outputSize":size,"visuallyVerified":False,
    "commercialRightsCleared":False,
    "ownerRightsAssertion":"Bosphoras project operator affirmed usage rights on 2026-10-15; commercial image rights to be recorded and photo identity to be checked before live use.",
    "rights":"Owner's usage rights confirmed by user; original media source documented, visual/photo identity pending."})
 record.pop("visualQaWarning",None)
 print("SOURCE_CAPTURED",slug,property_key,record["key"],context,flush=True)
 return True

def existing_hashes(records):
 seen=set()
 for r in records:
  p=r.get("localPath","")
  f=Path("public"+p) if p else None
  if f and f.exists():
   try:seen.add(hash_img(f.read_bytes()))
   except (OSError,ValueError):pass
 return seen

for slug,(stem,key,name,source,imgs) in TARGET.items():
 dest=ROOT/(stem+"MediaCandidates.json");doc=json.loads(dest.read_text(encoding="utf8"))
 existing=existing_hashes(doc["hotels"]+doc["destinationScenes"])
 for record,(caption,img) in zip([x for x in doc["hotels"] if x.get("propertyKey")==key],imgs):
  if record["status"]!="missing":continue
  variants=[
   img,
   img.replace("https://www.fourseasons.com/content/dam/","https://www.fourseasons.com/alt/img-opt/~70.1530.0%2C0000-300%2C0000-3000%2C0000-1687%2C5000/publish/content/dam/"),
  ]
  ok=any(as_record(slug,key,record,v,source,caption,existing) for v in variants)
  if not ok:print("FOURSEASONS_STILL_MISSING",slug,record["key"],flush=True)
 doc["downloadedHotelCandidates"]=sum(x["status"]=="candidate_needs_visual_review" for x in doc["hotels"])
 doc["visuallyVerified"]=False;doc["approvedForCommercialPublication"]=False
 dest.write_text(json.dumps(doc,indent=2,ensure_ascii=False)+"\n",encoding="utf8")

# For One&Only Moonlight Basin only: gather images from exact official media library
# and avoid unrelated brands, generic resort graphics or promotional logos.
slug="big-sky";key="oneonly-moonlight";dest=ROOT/"bigSkyMediaCandidates.json"
doc=json.loads(dest.read_text(encoding="utf8"))
base_urls=[
 "https://oneandonlybrand.com/asset/oneonly-moonlight-basin-sky-lodge-5/",
 "https://oneandonlybrand.com/asset/oneonly-moonlight-basin-the-landing-25/",
 "https://oneandonlybrand.com/asset/oneonly-moonlight-basin-the-landing-16/",
 "https://www.kerznercommunications.com/section/our-brands/oneandonly/oneandonly-moonlight-basin-montana/?lang=eng",
 "https://www.oneandonlyresorts.com/moonlight-basin/stays"
]
def candidates_from_document(url):
 body=page(url)
 if not body:return []
 soup=BeautifulSoup(body,"html.parser")
 results=[];taken=set()
 def add(raw,label,weight):
  if not raw or not isinstance(raw,str):return
  raw=html.unescape(raw).replace("\\/","/").strip().strip("'\"")
  for section in re.split(r",\s*(?=https?://|/)",raw):
   u=urljoin(url,section.strip().split(" ")[0])
   if u in taken or not u.startswith("https://") or not re.search(r"\.(jpg|jpeg|png|webp|avif)(\?|$)",urlparse(u).path+"?",re.I):continue
   host=urlparse(u).hostname or ""
   if not any(host.endswith(x) for x in ["oneandonlybrand.com","oneandonlyresorts.com","kerznercommunications.com","wp.com","cloudinary.com","cloudfront.net"]):continue
   t=(u+" "+label).lower()
   if any(w in t for w in ["logo","avatar","portrait","icon","thumb-placeholder","award","newsletter","favicon","headshot"]):continue
   taken.add(u);results.append({"url":u,"sourcePage":url,"caption":label or "One&Only Moonlight Basin official gallery","weight":weight})
 for meta in soup.select("meta[property='og:image'],meta[name='twitter:image']"):add(meta.get("content"),"One&Only Moonlight Basin official preview",10)
 for tag in soup.select("img,source"):
  label=tag.get("alt") or tag.get("title") or ""
  for attr in ["src","data-src","srcset","data-srcset","data-lazy-src","data-large_image","data-full-url"]:
   add(tag.get(attr),label,8 if any(t in label.lower() for t in ["moonlight","resort","lodge","suite","cabin","montana"]) else 3)
 for match in re.finditer(r'https?:\\?/\\?/[^"\'\s<>]+?\.(?:jpe?g|png|webp|avif)(?:\?[^"\'\s<>]*)?',body,re.I):
  add(match.group(0),"Embedded image from One&Only official media asset page",1)
 return sorted(results,key=lambda x:-x["weight"])
known=existing_hashes(doc["hotels"]+doc["destinationScenes"])
missing=[x for x in doc["hotels"] if x.get("propertyKey")==key and x["status"]=="missing"]
imgs=[];unique_urls=set()
for url in base_urls:
 found=candidates_from_document(url)
 print("ONEONLY_PAGE",url,"image_links",len(found),flush=True)
 for x in found:
  if x["url"] not in unique_urls:imgs.append(x);unique_urls.add(x["url"])
for row in missing:
 for candidate in imgs:
  if candidate.get("attempted"):continue
  candidate["attempted"]=True
  if as_record(slug,key,row,candidate["url"],candidate["sourcePage"],candidate["caption"],known):break
 else:print("ONEONLY_STILL_MISSING",row["key"],flush=True)
# Revisit Summit's original hotel property page and request larger existing CDN source renditions.
summit=[x for x in doc["hotels"] if x.get("propertyKey")=="summit-hotel"]
sneeded=[x for x in summit if x["status"]=="missing"]
if sneeded:
 previous=sum(([(x.get("downloadUrl") or "")] for x in summit if x.get("downloadUrl")),[])
 urls=[]
 for x in previous:
  if "cdn.sanity.io" in x and x not in urls:urls.append(x)
 # Only same actual property page or same original Sanity asset, not another ski lodge
 urls.extend(c["url"] for c in candidates_from_document("https://www.bigskyresort.com/lodging/hotels/summit-hotel") if c["url"] not in urls)
 for row in sneeded:
  for url in urls:
   variants=[url]
   if "cdn.sanity.io" in url:
    variants.extend([url.split("?")[0]+"?w=1900&q=82",url.split("?")[0]+"?w=1600&q=90"])
   for candidate in variants:
    if as_record(slug,"summit-hotel",row,candidate,"https://www.bigskyresort.com/lodging/hotels/summit-hotel","Summit Hotel official photo, large original/CDN rendition",known):
     break
   if row["status"]!="missing":break
doc["downloadedHotelCandidates"]=sum(x["status"]=="candidate_needs_visual_review" for x in doc["hotels"])
doc["visuallyVerified"]=False;doc["approvedForCommercialPublication"]=False
dest.write_text(json.dumps(doc,indent=2,ensure_ascii=False)+"\n",encoding="utf8")
for name in ["megeve","jacksonHole","bigSky"]:
 j=json.loads((ROOT/(name+"MediaCandidates.json")).read_text(encoding="utf8"))
 print("PHOTO_SUMMARY",name,j["downloadedHotelCandidates"],"/12 hotels",j["downloadedDestinationCandidates"],"/9 scenes, visual QA pending",flush=True)
