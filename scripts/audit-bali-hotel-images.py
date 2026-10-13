#!/usr/bin/env python3
"""Audit real Bali hotel property-gallery image URLs before any re-use.
Does not download or publish hotel photos; captures identifiers/alt/source only.
"""
import json,re,requests
from pathlib import Path
from bs4 import BeautifulSoup
from urllib.parse import urljoin
PAGES={
 "sayan-photos":"https://www.fourseasons.com/sayan/photos-and-videos/",
 "sayan-home":"https://www.fourseasons.com/sayan/",
 "sayan-accommodation":"https://www.fourseasons.com/sayan/accommodations/",
 "bulgari-photos":"https://www.bulgarihotels.com/en_US/bali/image-gallery",
 "bulgari-home":"https://www.bulgarihotels.com/bali/the-resort/overview",
 "bulgari-villas":"https://www.bulgarihotels.com/en_US/bali/villas-and-mansions/One-bedrooms/ocean-view-villa",
 "raffles-home":"https://www.raffles.com/bali/",
 "raffles-villas":"https://www.raffles.com/bali/private-villas/",
 "raffles-one-bedroom":"https://www.raffles.com/bali/private-villas/vca/",
 "legian-home":"https://lhm-hotels.com/legian-seminyak/",
 "legian-hotel":"https://thelegianseminyak.com/",
 "legian-gallery":"https://lhm-hotels.com/legian-seminyak/gallery/",
}
S=requests.Session();H={"User-Agent":"Mozilla/5.0 (compatible; BosphorasBaliEditorialPhotoAudit/1.0)","Accept-Language":"en-US,en;q=0.9"}
out={}
for name,page in PAGES.items():
 try:
  r=S.get(page,headers=H,timeout=24)
  soup=BeautifulSoup(r.text,"html.parser")
  photos=[];seen=set()
  def add(uri,alt,how):
   if not uri or not isinstance(uri,str):return
   uri=uri.replace("\\/","/").replace("\\u0026","&").strip()
   if uri.startswith(("data:","blob:","javascript:")):return
   u=urljoin(r.url,uri)
   if len(u)>2000 or not u.startswith("https://") or u in seen:return
   low=u.lower()
   if any(v in low for v in (".svg",".woff","favicon","logo","facebook","instagram","tiktok")):return
   if not ("/media/" in low or "/images/" in low or "/assets/" in low or ".jpg" in low or ".webp" in low or ".jpeg" in low or ".avif" in low or "image" in low):return
   seen.add(u);photos.append({"url":u,"alt":str(alt)[:200],"where":how})
  for e in soup.select('meta[property="og:image"],meta[property="og:image:secure_url"],meta[name="twitter:image"]'):
   add(e.get("content"),e.get("property") or e.get("name"),"meta")
  for e in soup.select("img,source"):
   alt=" ".join(str(e.get(k,"")) for k in ("alt","title","aria-label","data-alt"))
   for att in ("src","data-src","data-original","data-lazy-src","srcset","data-srcset"):
    v=e.get(att)
    if not v:continue
    if att.endswith("srcset"):
     for sub in v.split(","):add(sub.strip().split(" ")[0],alt,att)
    else:add(v,alt,att)
  for src in re.findall(r"""https?:\\?/\\?/[^"'<> \n\\]+(?:\.jpg|\.jpeg|\.png|\.webp)(?:\?[^"'<> \n\\]*)?""",r.text,re.I)[:300]:
   add(src,"inline page data","script")
  out[name]={"page":page,"status":r.status_code,"final":r.url,"bytes":len(r.content),"totalCandidates":len(photos),"photos":photos[:220]}
  print("PAGE",name,"HTTP",r.status_code,"candidates",len(photos),"bytes",len(r.content),flush=True)
  for i,p in enumerate(photos[:12]):print("IMG",name,i,p["alt"][:80],p["url"][:190],flush=True)
 except Exception as e:out[name]={"page":page,"error":str(e)[:250]}
p=Path("data/travel/baliHotelPhotoCandidates.json")
p.parent.mkdir(parents=True,exist_ok=True)
p.write_text(json.dumps(out,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
