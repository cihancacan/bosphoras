#!/usr/bin/env python3
"""Audit *official* photography for named Phuket luxury hotels without publishing images."""
from urllib.parse import urljoin
from pathlib import Path
from bs4 import BeautifulSoup
import requests,re,json
PAGES={
 "amanpuri":"https://www.aman.com/resorts/amanpuri/gallery",
 "amanpuri-villas":"https://www.aman.com/resorts/amanpuri/accommodation/pavilions",
 "trisara":"https://trisara.com/gallery/",
 "trisara-villa":"https://trisara.com/suite/ocean-view-pool-villa/",
 "rosewood":"https://www.rosewoodhotels.com/en/phuket/overview/gallery",
 "rosewood-rooms":"https://www.rosewoodhotels.com/en/phuket/accommodation",
 "keemala":"https://www.keemala.com/gallery/",
 "keemala-villas":"https://www.keemala.com/villa/birds-nest-pool-villas/",
}
S=requests.Session()
H={"User-Agent":"Mozilla/5.0 (compatible; BosphorasTravelEditorial/1.0; photo audit)","Accept-Language":"en-US,en;q=0.8"}
out={}
for key,page in PAGES.items():
 try:
  r=S.get(page,headers=H,timeout=27)
  soup=BeautifulSoup(r.text,"html.parser")
  photos=[];seen=set()
  def add(u,alt,method):
   if not u or not isinstance(u,str):return
   u=u.replace("\\/","/").replace("\\u0026","&").strip()
   if u.startswith(("data:","blob:")):return
   u=urljoin(r.url,u)
   if u in seen or not u.startswith("https://") or len(u)>1600:return
   if any(z in u.lower() for z in (".svg",".woff","favicon","logo","avatar","instagram","facebook","tiktok","cookie")):return
   if not any(z in u.lower() for z in (".jpg",".jpeg",".png",".webp",".avif","/media/","/images/","/image/","image","cdn")):return
   seen.add(u);photos.append({"url":u,"alt":str(alt)[:200],"method":method})
  for e in soup.select('meta[property="og:image"],meta[name="twitter:image"]'):add(e.get("content"),e.get("property") or e.get("name"),"meta")
  for e in soup.select("img,source"):
   alt=" ".join(str(e.get(k,"")) for k in ("alt","title","aria-label","data-alt"))
   for att in ("src","data-src","data-original","data-lazy-src","srcset","data-srcset"):
    v=e.get(att)
    if not v:continue
    if att.endswith("srcset"):
     for sub in v.split(","):add(sub.strip().split(" ")[0],alt,att)
    else:add(v,alt,att)
  for src in re.findall(r"""https?:\\?/\\?/[^"'<> \n\\]+?(?:\.jpg|\.jpeg|\.png|\.webp)(?:\?[^"'<> \n\\]*)?""",r.text,re.I)[:150]:
   add(src,"script media","script")
  out[key]={"page":page,"status":r.status_code,"url":r.url,"size":len(r.content),"total":len(photos),"images":photos[:170]}
  print("PAGE",key,r.status_code,len(photos),flush=True)
  for p in photos[:16]:print("CAND",key,p["alt"][:90],p["url"][:215],flush=True)
 except Exception as ex:out[key]={"page":page,"error":str(ex)[:220]}
t=Path("data/travel/phuketOfficialHotelPhotoCandidates.json");t.parent.mkdir(parents=True,exist_ok=True)
t.write_text(json.dumps(out,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
