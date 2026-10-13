#!/usr/bin/env python3
"""Identify exact hotel visual URLs on owners' own Paris hotel galleries."""
from urllib.parse import urljoin
import re,json,requests
from bs4 import BeautifulSoup
from pathlib import Path

PAGES={
"cheval-blanc":"https://www.chevalblanc.com/en/maison/paris/rooms-and-suites/",
"cheval-ravel":"https://www.chevalblanc.com/en/maison/paris/rooms-and-suites/ravel-suite/",
"cheval-home":"https://www.chevalblanc.com/en/maison/paris/",
"george-v":"https://www.fourseasons.com/paris/photos-and-videos/",
"george-v-home":"https://www.fourseasons.com/paris/",
"bristol":"https://www.oetkerhotels.com/hotels/le-bristol-paris/gallery/",
"bristol-suite":"https://www.oetkerhotels.com/hotels/le-bristol-paris/accommodations/rooms-suites/deluxe-suite-garden/gallery/",
"lutetia":"https://www.mandarinoriental.com/en/paris/lutetia/gallery",
"lutetia-home":"https://www.mandarinoriental.com/en/paris/lutetia"
}
S=requests.Session()
H={"User-Agent":"Mozilla/5.0 (compatible; BosphorasTravelImageReview/1.0)","Accept-Language":"en-US,en;q=0.9"}
def collect(page):
  r=S.get(page,headers=H,timeout=28)
  out=[]
  seen=set()
  def add(src,alt,typ):
    if not src or not isinstance(src,str):return
    u=src.strip()
    if not u or u.startswith(("data:","blob:","javascript:")):return
    u=urljoin(r.url,u)
    if not u.startswith("https://") or len(u)>1300 or u in seen:return
    seen.add(u)
    if any(x in u.lower() for x in (".svg","favicon","logo")):return
    out.append({"src":u,"alt":str(alt)[:220],"type":typ})
  bs=BeautifulSoup(r.text,"html.parser")
  for m in bs.find_all("meta"):
    if m.get("property","") in ("og:image","og:image:secure_url") or m.get("name","")=="twitter:image":
      add(m.get("content"),m.get("property") or m.get("name"),"meta")
  for el in bs.find_all(["img","source"]):
    alt=" ".join(str(el.get(k,"")) for k in ("alt","title","aria-label","data-alt"))
    for k in ("src","data-src","data-image","data-original","srcset","data-srcset"):
      v=el.get(k)
      if not v:continue
      if k.endswith("srcset"):
        vals=[a.strip().split(" ")[0] for a in v.split(",") if a.strip()]
        for u in vals:add(u,alt,k)
      else:add(v,alt,k)
  # JSON scripts with image URL strings as fallback only
  pattern=r"""https?:\\?/\\?/[^"'<>\s\\]+(?:jpg|jpeg|png|webp)(?:\?[^"'<>\s]*)?"""
  for t in re.findall(pattern,r.text,re.I)[:220]:
    add(t.replace("\\/","/"),"page data URL","script")
  return {"status":r.status_code,"url":r.url,"length":len(r.content),"candidates":out[:240],"count":len(out)}

result={}
for k,url in PAGES.items():
  try:
    v=collect(url);result[k]={"page":url,**v}
    print(k,v["status"],v["length"],"images",v["count"],flush=True)
    for j,item in enumerate(v["candidates"][:24]):
      print("IMAGE",k,j,item["alt"][:85],item["src"][:215],flush=True)
  except Exception as e:result[k]={"page":url,"error":str(e)[:200]}
path=Path("data/travel/parisHotelImageCandidates.json");path.parent.mkdir(parents=True,exist_ok=True)
path.write_text(json.dumps(result,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
