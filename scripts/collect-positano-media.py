#!/usr/bin/env python3
"""Collect factual Positano image candidates; never approve, index, publish or deploy them."""
import hashlib,io,json,re
from pathlib import Path
from urllib.parse import urljoin
import requests
from bs4 import BeautifulSoup
from PIL import Image,ImageOps
DOC=Path("data/travel/positanoMediaCandidates.json")
OUT=Path("public/images/travel/positano-premium")
REPORT=Path("docs/travel-positano-download-report.json")
S=requests.Session()
S.headers.update({"User-Agent":"BosphorasLuxuryStays/2.0 (photo provenance assessment, bosphoras.com)","Accept":"text/html,application/json,image/webp,image/jpeg,image/png,*/*;q=.7"})
HOTELS={
"le-sirenuse":["https://sirenuse.it/en/","https://sirenuse.it/en/rooms-and-suites/","https://sirenuse.it/en/restaurant-la-sponda/"],
"hotel-poseidon":["https://www.hotelposeidonpositano.it/en/","https://www.hotelposeidonpositano.it/en/hotel-with-pool-positano","https://www.hotelposeidonpositano.it/en/hotel-in-positano"],
"villa-treville":["https://villatreville.com/","https://villatreville.com/suites/","https://villatreville.com/gallery/"],
"il-san-pietro":["https://www.ilsanpietro.com/","https://www.ilsanpietro.com/rooms-suites/","https://www.ilsanpietro.com/restaurants/"]
}
SCENES={
"scene-1":("Positano Italy village panorama",("positano",)),
"scene-2":("Santa Maria Assunta Positano dome",("assunta","positano")),
"scene-3":("Spiaggia Grande Positano beach",("spiaggia","positano")),
"scene-4":("Fornillo beach Positano",("fornillo",)),
"scene-5":("Via Pasitea Positano panorama",("pasitea",)),
"scene-6":("Arienzo beach Positano",("arienzo",)),
"scene-7":("Laurito beach Positano",("laurito",)),
"scene-8":("Positano colorful ceramic street",("positano","ceramic")),
"scene-9":("Positano Praiano Amalfi coastline",("praiano","positano"))
}
errors=[]
def fetch(url,params=None):
 try:
  r=S.get(url,params=params,timeout=20)
  r.raise_for_status()
  return r
 except requests.RequestException as e:
  errors.append({"url":url[:180],"error":str(e)[:140]})
  return None
def hotel_images(page):
 r=fetch(page)
 if not r or "html" not in r.headers.get("content-type","").lower():return []
 soup=BeautifulSoup(r.text,"html.parser");candidates=[]
 for tag in soup.select("meta[property='og:image'],meta[name='twitter:image'],img,source,figure,picture"):
  alt=" ".join(str(tag.get(k) or "") for k in ("alt","title","aria-label","data-caption"))
  for key in ("content","src","data-src","data-original","data-lazy-src","srcset","data-srcset"):
   raw=tag.get(key)
   if not raw:continue
   for frag in str(raw).split(","):
    path=frag.strip().split(" ")[0]
    if not path or path.startswith("data:"):continue
    url=urljoin(page,path)
    if not url.startswith("https://") or any(x in url.lower() for x in (".svg",".gif","favicon","pixel","logo","placeholder","tiny")):continue
    score=15 if tag.name=="meta" else 5
    if any(x in (alt+" "+url).lower() for x in ("positano","hotel","suite","room","pool","terrace","villa","beach","sea")):score+=7
    candidates.append((score,url,page,alt or "Photo on actual hotel website","Official source webpage; photographer rights to verify","Copyright held by source/photographer"))
 unique=set();result=[]
 for c in sorted(candidates,key=lambda x:-x[0]):
  can=c[1].split("?")[0]
  if can in unique:continue
  unique.add(can);result.append(c)
 return result[:100]
def commons_images(query,tokens):
 r=fetch("https://commons.wikimedia.org/w/api.php",params={
  "action":"query","generator":"search","gsrsearch":query,"gsrnamespace":6,"gsrlimit":50,
  "prop":"imageinfo","iiprop":"url|extmetadata","iiurlwidth":1700,"format":"json"})
 if not r:return []
 try:pages=r.json()["query"]["pages"].values()
 except (TypeError,ValueError,KeyError):return []
 options=[]
 for p in pages:
  title=p.get("title",""); lower=title.lower()
  if not lower.endswith((".jpg",".jpeg",".png",".webp",".tif",".tiff")):continue
  if any(bad in lower for bad in ("map","diagram","poster","drawing","painting","oil","watercolor","lithograph","menu","ticket","sign","logo")):continue
  if not any(t in lower for t in tokens):continue
  info=(p.get("imageinfo") or [{}])[0]
  url=info.get("thumburl") or info.get("url")
  if not url or not url.startswith("https://"):continue
  meta=info.get("extmetadata") or {}
  artist=BeautifulSoup(meta.get("Artist",{}).get("value",""),"html.parser").get_text(" ",strip=True)[:130]
  license=meta.get("LicenseShortName",{}).get("value","Unknown licence; check original")
  options.append((25+sum(t in lower for t in tokens)*4,url,"https://commons.wikimedia.org/wiki/"+title.replace(" ","_"),title,(artist or "Commons contributor")+" · "+license,license))
 return sorted(options,key=lambda x:-x[0])
def dhash(im):
 p=list(im.convert("L").resize((9,8),Image.Resampling.LANCZOS).getdata())
 return "".join("1" if p[y*9+x]>p[y*9+x+1] else "0" for y in range(8) for x in range(8))
def candidate(row,options,urls,hashes,dhashes):
 if row.get("localPath"):return False
 for score,url,source,context,credit,license in sorted(options,key=lambda x:-x[0])[:95]:
  identity=url.split("?")[0]
  if identity in urls:continue
  response=fetch(url)
  if not response or len(response.content)>18_000_000:continue
  try:
   with Image.open(io.BytesIO(response.content)) as original:
    image=ImageOps.exif_transpose(original).convert("RGB");original_size=list(image.size)
    if image.width<1000 or image.height<560 or not 1.13<image.width/image.height<3.2:continue
    image.thumbnail((1750,1200),Image.Resampling.LANCZOS)
    perceptual=dhash(image)
    if any(sum(a!=b for a,b in zip(perceptual,h))<7 for h in dhashes):continue
    buffer=io.BytesIO();image.save(buffer,"WEBP",quality=84,method=5);data=buffer.getvalue()
  except (OSError,ValueError):continue
  digest=hashlib.sha256(data).hexdigest()
  if len(data)<26000 or digest in hashes:continue
  folder=row.get("propertyKey") or "destination"
  file=OUT/folder/(row["key"]+".webp")
  file.parent.mkdir(exist_ok=True,parents=True);file.write_bytes(data)
  row.update({"status":"candidate_needs_visual_review","visuallyVerified":False,"commercialRightsCleared":False,
    "visualQaWarning":"Source-backed candidate. Actual visual identity, premium quality, copyright and user permissions must be independently reviewed.",
    "localPath":"/"+str(file).removeprefix("public/"),"sourcePage":source,"downloadUrl":url,"candidateContext":context[:260],
    "credit":credit[:250],"license":license[:90],"sha256":digest,"dhash":perceptual,"bytes":len(data),
    "originalSize":original_size,"outputSize":list(image.size)})
  hashes.add(digest);urls.add(identity);dhashes.append(perceptual)
  print("POSITANO_SAVED",folder,row["key"],source,flush=True)
  return True
 print("POSITANO_MISSING",row.get("propertyKey") or "destination",row["key"],flush=True)
 return False
def main():
 m=json.loads(DOC.read_text(encoding="utf8"))
 all_items=m["hotels"]+m["destinationScenes"]
 urls={x["downloadUrl"].split("?")[0] for x in all_items if x.get("downloadUrl")}
 hashes={x["sha256"] for x in all_items if x.get("sha256")}
 p=[x["dhash"] for x in all_items if x.get("dhash")]
 cache={}
 for x in m["hotels"]:
  if x.get("localPath"):continue
  key=x["propertyKey"]
  if key not in cache:
   opts=[]
   for page in HOTELS[key]:opts.extend(hotel_images(page))
   cache[key]=opts
   print("POSITANO_HOTEL_SOURCES",key,len(opts),flush=True)
  candidate(x,cache[key],urls,hashes,p)
 for x in m["destinationScenes"]:
  if x.get("localPath"):continue
  query,tokens=SCENES[x["key"]]
  candidate(x,commons_images(query,tokens),urls,hashes,p)
 m["downloadedHotelCandidates"]=sum(bool(x.get("localPath")) for x in m["hotels"])
 m["downloadedDestinationCandidates"]=sum(bool(x.get("localPath")) for x in m["destinationScenes"])
 m["visuallyVerified"]=False;m["approvedForCommercialPublication"]=False
 DOC.write_text(json.dumps(m,ensure_ascii=False,indent=2)+"\n",encoding="utf8")
 REPORT.write_text(json.dumps({"hotels":m["downloadedHotelCandidates"],"scenes":m["downloadedDestinationCandidates"],
   "missing":[(x.get("propertyKey") or "destination")+"/"+x["key"] for x in all_items if not x.get("localPath")],
   "errors":errors[:80]},ensure_ascii=False,indent=2)+"\n",encoding="utf8")
 print("POSITANO_ASSETS",m["downloadedHotelCandidates"],"/12 hotels",m["downloadedDestinationCandidates"],"/9 scenes. Unapproved; noindex.",flush=True)
if __name__=="__main__":main()
