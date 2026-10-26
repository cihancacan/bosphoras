#!/usr/bin/env python3
"""Mykonos genuine photo candidate acquisition, source-only. Never auto approve."""
from pathlib import Path
from urllib.parse import urljoin, quote
from bs4 import BeautifulSoup
from PIL import Image,ImageOps
import requests,hashlib,json,re,io
DOC=Path("data/travel/mykonosMediaCandidates.json")
OUT=Path("public/images/travel/mykonos-premium")
REPORT=Path("docs/travel-mykonos-download-report.json")
S=requests.Session()
S.headers.update({"User-Agent":"BosphorasLuxuryStays/2.0 (editorial photo source verification; bosphoras.com)",
"Accept":"text/html,image/jpeg,image/png,image/webp,*/*;q=.7"})
HOTELS={
"kalesma":["https://www.kalesmamykonos.com/","https://www.kalesmamykonos.com/accommodation/","https://www.kalesmamykonos.com/gallery/"],
"santa-marina":["https://www.marriott.com/en-us/hotels/jmklc-santa-marina-a-luxury-collection-resort-mykonos/overview/","https://www.santa-marina.gr/","https://www.santa-marina.gr/accommodation"],
"cavo-tagoo":["https://www.cavotagoo.com/mykonos/","https://booking-mykonos.cavotagoo.com/about","https://www.cavotagoo.com/mykonos/gallery/"],
"mykonos-blu":["https://www.grecotel.com/mykonosblu/","https://www.grecotel.com/mykonosblu/accommodation/","https://www.grecotel.com/mykonosblu/gallery/"]
}
SCENES={
"scene-1":("Mykonos town windmills Chora",("mykonos","windmill")),
"scene-2":("Mykonos Little Venice waterfront",("mykonos","little venice")),
"scene-3":("Ornos beach Mykonos Bay",("orn(os)","ornos","mykonos")),
"scene-4":("Aleomandra Mykonos sunset Delos",("aleomandra","mykonos")),
"scene-5":("Psarou Mykonos beach yachts",("psarou","mykonos")),
"scene-6":("Tagoo Old Port Mykonos",("tagoo","mykonos")),
"scene-7":("Delos ancient Greek ruins",("delos",)),
"scene-8":("Ano Mera monastery Mykonos",("ano mera","mykonos")),
"scene-9":("Agios Ioannis Mykonos bay",("agios ioannis","mykonos"))
}

# Exact sources are tied to the named real property or geolocated island place.
# None implies commercial reuse rights until reviewed.
EXACT_HOTELS={
 "cavo-tagoo/view-1":[
  ("https://cdn.tatlerasia.com/asiatatler/i/hk/2018/11/02193148-cavo-tagoo_cover_2000x1335.jpg",
   "https://www.tatlerasia.com/lifestyle/travel/hk-5-heavenly-retreats-in-mykonos",
   "Actual Cavo Tagoo hotel stepped pool and sunset sea view, not a generic Mykonos infinity pool")],
 "cavo-tagoo/view-2":[
  ("https://kinoussis.gr/assets/lib/2020/05/06/cavo_tagoo_1.jpg",
   "https://kinoussis.gr/cavo-tagoo.html",
   "Actual Cavo Tagoo cliffside cave interior from design company and documented project"),
  ("https://assets.holidaypirates.group/2021_12/MTY0MDcwNjg5Mjc5MA.jpeg",
   "https://www.urlaubspiraten.de/hotels/cavo-tagoo-mykonos",
   "Cavo Tagoo real guest lounge and cave pool suite interior")],
 "cavo-tagoo/view-3":[
  ("https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2024/01/IMG_5224.jpeg?ssl=1",
   "https://theluxurytravelexpert.com/cavo-tagoo-mykonos-review/",
   "Real Cavo Tagoo sunset infinity pool with floating daybeds and sea, original editorial review")]
}
EXACT_SCENES={
 "scene-3":[("Mykonos Ornos 01.jpg","Verified Mykonos Ornos beach town and cove, Olaf Tausch")],
 "scene-5":[("Psarou mykonos.JPG","True Psarou bay beach Mykonos stitched panorama, photographer sailko")],
 "scene-6":[("Old Port of Mykonos 01.jpg","Geolocated Mykonos Old Port and Tagoo area, Bernard Gagnon")],
 "scene-9":[("Agios Ioannis, Mykonos, Greece (53496488711).jpg","True Agios Ioannis on Mykonos island, modern geolocated photograph")],
}
EXACT_SCENE_URLS={
 "scene-4":[
  ("https://saltyble.com/images/andreas_bekas_2025_web-15.jpeg",
   "https://saltyble.com/",
   "Genuine west-facing Aleomandra coast sunset and Aegean sea as seen from a local villa")]
}
def commons_original(filename):
 from urllib.parse import quote
 canon=filename.replace(" ","_")
 h=hashlib.md5(canon.encode("utf-8")).hexdigest()
 return "https://upload.wikimedia.org/wikipedia/commons/"+h[0]+"/"+h[:2]+"/"+quote(canon,safe="()")

diagnostics=[]
def fetch(url,params=None):
 try:
  r=S.get(url,params=params,timeout=16);r.raise_for_status();return r
 except requests.RequestException as e:
  diagnostics.append({"url":url[:160],"error":str(e)[:145]});return None
def site_images(page):
 r=fetch(page)
 if not r or "html" not in r.headers.get("content-type","").lower():return []
 soup=BeautifulSoup(r.text,"html.parser")
 photos=[]
 for tag in soup.select("meta[property='og:image'],meta[name='twitter:image'],img,source,picture"):
  desc=" ".join(str(tag.get(k) or "") for k in ("alt","title","data-caption","aria-label"))
  for attr in ("content","src","data-src","data-original","data-lazy-src","srcset","data-srcset"):
   v=tag.get(attr)
   if not v:continue
   for part in str(v).split(","):
    frag=part.strip().split(" ")[0]
    if not frag or frag.startswith("data:"):continue
    url=urljoin(page,frag)
    if not url.startswith("https://") or any(bad in url.lower() for bad in (".svg",".gif","icon","logo","placeholder","tracking","pixel")):continue
    priority=11 if tag.name=="meta" else 4
    if any(x in (desc+" "+url).lower() for x in ("suite","room","pool","villa","mykonos","kalesma","santa","cavo","blu","sea","beach","view")):priority+=8
    photos.append((priority,url,page,desc or "Image on real property website","Original property site; photographer unidentified","Commercial licence requires confirmation"))
 seen=set();out=[]
 for x in sorted(photos,key=lambda x:-x[0]):
  id=x[1].split("?")[0]
  if id in seen:continue
  seen.add(id);out.append(x)
 return out[:95]
def commons(query,tokens):
 r=fetch("https://commons.wikimedia.org/w/api.php",params={"action":"query","generator":"search","gsrsearch":query,"gsrnamespace":6,"gsrlimit":40,"prop":"imageinfo","iiprop":"url|extmetadata","iiurlwidth":1750,"format":"json"})
 if not r:return []
 try:pages=r.json()["query"]["pages"].values()
 except (KeyError,ValueError,TypeError):return []
 out=[]
 for p in pages:
  title=p.get("title","");t=title.lower()
  if not t.endswith((".jpg",".jpeg",".png",".webp",".tif",".tiff")):continue
  if any(bad in t for bad in ("map","painting","drawing","collage","watercolour","watercolor","diagram","poster","old postcard","sign","logo")):continue
  if not any(tok in t for tok in tokens):continue
  info=(p.get("imageinfo") or [{}])[0];url=info.get("thumburl") or info.get("url")
  if not url or not url.startswith("https://"):continue
  md=info.get("extmetadata") or {}
  author=BeautifulSoup(md.get("Artist",{}).get("value",""),"html.parser").get_text(" ",strip=True)[:180]
  lic=md.get("LicenseShortName",{}).get("value","Licence review required")
  source="https://commons.wikimedia.org/wiki/"+title.replace(" ","_")
  out.append((25+sum(tok in t for tok in tokens)*5,url,source,title,(author or "Commons photographer")+" · "+lic,lic))
 return sorted(out,key=lambda x:-x[0])
def dhash(im):
 a=list(im.convert("L").resize((9,8),Image.Resampling.LANCZOS).getdata())
 return "".join("1" if a[y*9+x]>a[y*9+x+1] else "0" for y in range(8) for x in range(8))
def capture(item,opts,seenURLs,seenHashes,seenDHash):
 if item.get("localPath"):return
 for priority,url,page,context,author,license in sorted(opts,key=lambda x:-x[0])[:85]:
  canonical=url.split("?")[0]
  if canonical in seenURLs:continue
  r=fetch(url)
  if not r or len(r.content)>18000000:continue
  try:
   with Image.open(io.BytesIO(r.content)) as orig:
    im=ImageOps.exif_transpose(orig).convert("RGB");dims=list(im.size)
    if im.width<1000 or im.height<560 or not 1.1<im.width/im.height<3.4:continue
    im.thumbnail((1750,1200),Image.Resampling.LANCZOS)
    h=dhash(im)
    if any(sum(a!=b for a,b in zip(h,old))<7 for old in seenDHash):continue
    blob=io.BytesIO();im.save(blob,"WEBP",quality=84,method=5);data=blob.getvalue()
  except (OSError,ValueError):continue
  digest=hashlib.sha256(data).hexdigest()
  if len(data)<25000 or digest in seenHashes:continue
  folder=item.get("propertyKey") or "destination"
  path=OUT/folder/(item["key"]+".webp");path.parent.mkdir(parents=True,exist_ok=True);path.write_bytes(data)
  item.update({"status":"candidate_needs_visual_review","visuallyVerified":False,"commercialRightsCleared":False,
    "visualQaWarning":"New source candidate only: inspect actual photograph, property/geolocation, aesthetic quality and rights before approval.",
    "localPath":"/"+str(path).removeprefix("public/"),"sourcePage":page,"downloadUrl":url,"candidateContext":context[:250],
    "credit":author[:200],"license":license[:100],"sha256":digest,"dhash":h,"bytes":len(data),
    "originalSize":dims,"outputSize":list(im.size)})
  seenURLs.add(canonical);seenHashes.add(digest);seenDHash.append(h)
  print("MYKONOS_SAVED",folder,item["key"],page,flush=True);return
 print("MYKONOS_UNFILLED",item.get("propertyKey") or "destination",item["key"],flush=True)
def main():
 m=json.loads(DOC.read_text(encoding="utf8"));items=m["hotels"]+m["destinationScenes"]
 seenURLs={u.split("?")[0] for x in items for u in (x.get("downloadUrl"),x.get("rejectedSource")) if isinstance(u,str) and u.startswith("https://")}
 seenHashes={x["sha256"] for x in items if x.get("sha256")}
 seenDHash=[x["dhash"] for x in items if x.get("dhash")]
 siteCache={}
 for item in m["hotels"]:
  if item.get("localPath"):continue
  key=item["propertyKey"]
  if key not in siteCache:
   found=[]
   for page in HOTELS[key]:found.extend(site_images(page))
   siteCache[key]=found;print("MYKONOS_SITE",key,len(found),flush=True)
  exact=[(150,url,page,ctx,"Photographer or source: "+page,"Commercial reuse licence needs confirmation")
    for url,page,ctx in EXACT_HOTELS.get(key+"/"+item["key"],[])]
  capture(item,exact+siteCache[key],seenURLs,seenHashes,seenDHash)
 for item in m["destinationScenes"]:
  if item.get("localPath"):continue
  query,tokens=SCENES[item["key"]]
  exact=[(170,commons_original(name),"https://commons.wikimedia.org/wiki/File:"+name.replace(" ","_"),
     ctx,"Wikimedia Commons source author, check file history for attribution","Creative Commons licence to verify in file")
     for name,ctx in EXACT_SCENES.get(item["key"],[])]
  direct=[(180,url,page,ctx,"Source photographer at "+page,"Publisher/photographer permission required")
     for url,page,ctx in EXACT_SCENE_URLS.get(item["key"],[])]
  capture(item,direct+exact+commons(query,tokens),seenURLs,seenHashes,seenDHash)
 m["downloadedHotelCandidates"]=sum(bool(x.get("localPath")) for x in m["hotels"])
 m["downloadedDestinationCandidates"]=sum(bool(x.get("localPath")) for x in m["destinationScenes"])
 m["visuallyVerified"]=False;m["approvedForCommercialPublication"]=False
 DOC.write_text(json.dumps(m,ensure_ascii=False,indent=2)+"\n",encoding="utf8")
 REPORT.parent.mkdir(exist_ok=True,parents=True)
 REPORT.write_text(json.dumps({"hotels":m["downloadedHotelCandidates"],"scenes":m["downloadedDestinationCandidates"],
 "missing":[(x.get("propertyKey") or "destination")+"/"+x["key"] for x in items if not x.get("localPath")],
 "diagnostics":diagnostics[:100]},ensure_ascii=False,indent=2)+"\n",encoding="utf8")
 print("MYKONOS_RESULT",m["downloadedHotelCandidates"],"/12",m["downloadedDestinationCandidates"],"/9; ALL UNAPPROVED",flush=True)
if __name__=="__main__":main()
