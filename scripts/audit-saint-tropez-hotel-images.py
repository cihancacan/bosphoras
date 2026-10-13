#!/usr/bin/env python3
"""Audit real Saint-Tropez hotel-owned photo media URL candidates and captions."""
import json,re,requests
from pathlib import Path
from bs4 import BeautifulSoup
from urllib.parse import urljoin
PAGES={
 "cheval-home":"https://www.chevalblanc.com/en/maison/st-tropez/",
 "cheval-suites":"https://www.chevalblanc.com/en/maison/st-tropez/rooms-and-suites/",
 "cheval-suite":"https://www.chevalblanc.com/en/maison/st-tropez/rooms-and-suites/heure-bleue-suite/",
 "byblos-home":"https://www.byblos.com/en/",
 "byblos-rooms":"https://www.byblos.com/en/rooms-suites/",
 "byblos-gallery":"https://www.byblos.com/en/galerie-photos/",
 "reserve-home":"https://www.lareserve-ramatuelle.com/en/",
 "reserve-gallery":"https://www.lareserve-ramatuelle.com/hotel-galerie/",
 "messardiere-home":"https://airelles.com/en/destination/chateau-de-la-messardiere-hotel",
 "messardiere-rooms":"https://airelles.com/en/destination/chateau-de-la-messardiere-hotel/suites",
 "messardiere-pool":"https://airelles.com/fr/destination/chateau-de-la-messardiere-hotel/la-plage-acces-prive-saint-tropez",
}
S=requests.Session();h={"User-Agent":"Mozilla/5.0 (compatible; BosphorasTravelEditorial/1.0)","Accept-Language":"en-US,en;q=0.9"}
out={}
for key,page in PAGES.items():
 try:
  r=S.get(page,timeout=22,headers=h)
  soup=BeautifulSoup(r.text,"html.parser")
  photos=[];unique=set()
  def add(src,alt,where):
   if not src or not isinstance(src,str):return
   src=src.replace("\\/","/").replace("\\u0026","&").strip()
   if src.startswith(("data:","blob:")):return
   u=urljoin(r.url,src)
   if len(u)>1500 or not u.startswith("https://") or u in unique:return
   if any(q in u.lower() for q in (".svg","favicon",".woff","logo","data:image")):return
   if not ("/media/" in u.lower() or "/images/" in u.lower() or "image" in u.lower() or ".jpg" in u.lower() or ".webp" in u.lower() or ".jpeg" in u.lower()):return
   unique.add(u); photos.append({"url":u,"alt":str(alt)[:160],"where":where})
  for e in soup.select('meta[property="og:image"],meta[name="twitter:image"]'):add(e.get("content"),e.get("property","") or e.get("name",""),"meta")
  for e in soup.select("img,source"):
   alt=e.get("alt") or e.get("title") or e.get("aria-label") or ""
   for a in ("src","data-src","data-original","data-lazy-src","srcset","data-srcset"):
    x=e.get(a)
    if x:
     if a.endswith("srcset"):
      for part in x.split(","):add(part.strip().split(" ")[0],alt,a)
     else:add(x,alt,a)
  for u in re.findall(r"""https?:\\?/\\?/[^"'<> \n\\]+(?:\.jpg|\.jpeg|\.png|\.webp)(?:\?[^"'<> \n\\]*)?""",r.text,re.I)[:180]:
   add(u,"inline JS image","script")
  out[key]={"page":page,"status":r.status_code,"url":r.url,"bytes":len(r.content),"count":len(photos),"images":photos[:120]}
  print("PAGE",key,"HTTP",r.status_code,"count",len(photos),"bytes",len(r.content),flush=True)
  for z in photos[:10]:print("IMG",key,z["alt"][:65],z["url"][:200],flush=True)
 except Exception as exc:out[key]={"page":page,"error":str(exc)[:200]}
p=Path("data/travel/saintTropezHotelPhotoCandidates.json")
p.parent.mkdir(parents=True,exist_ok=True)
p.write_text(json.dumps(out,indent=2,ensure_ascii=False)+"\n")
