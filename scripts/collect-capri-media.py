#!/usr/bin/env python3
"""Source-backed Capri photo candidate collector; no auto approval and no deployment."""
import hashlib, io, json, re, time
from pathlib import Path
from urllib.parse import urljoin, urlparse, unquote
import requests
from bs4 import BeautifulSoup
from PIL import Image, ImageOps

MANIFEST=Path("data/travel/capriMediaCandidates.json")
BASE=Path("public/images/travel/capri-premium")
REPORT=Path("docs/travel-capri-download-report.json")
S=requests.Session()
S.headers.update({"User-Agent":"BosphorasLuxuryStays/2.0 (media provenance review; bosphoras.com)",
                  "Accept":"text/html,application/json,image/avif,image/webp,image/jpeg,image/png,*/*;q=.7"})
HOTELS={
 "hotel-la-palma":[
  "https://www.oetkerhotels.com/hotels/hotel-la-palma/",
  "https://www.oetkerhotels.com/hotels/hotel-la-palma/the-hotel/",
  "https://www.oetkerhotels.com/hotels/hotel-la-palma/rooms-suites/",
  "https://www.oetkerhotels.com/hotels/hotel-la-palma/restaurants-bars/"],
 "jk-place-capri":[
  "https://jkcapri.com/en/","https://jkcapri.com/en/rooms-suites/",
  "https://jkcapri.com/en/the-jk-experience/","https://jkcapri.com/en/gallery/"],
 "punta-tragara":[
  "https://manfredihotels.com/tragara/",
  "https://www.capri.com/en/c/punta-tragara"],
 "jumeirah-capri-palace":[
  "https://www.jumeirah.com/en/stay/italy/jumeirah-capri-palace",
  "https://www.jumeirah.com/en/stay/italy/jumeirah-capri-palace/accommodation",
  "https://www.jumeirah.com/en/stay/italy/jumeirah-capri-palace/gallery"]
}
SCENES={
 "scene-1":("Capri Faraglioni sea stacks panoramic",("faraglioni","capri")),
 "scene-2":("Marina Grande Capri Italy harbour",("marina grande","capri")),
 "scene-3":("Piazza Umberto I Capri Piazzetta",("capri","piazza")),
 "scene-4":("Belvedere Punta Tragara Capri",("tragara","capri")),
 "scene-5":("Marina Piccola Capri Italy",("marina piccola","capri")),
 "scene-6":("Anacapri old town Italy",("anacapri",)),
 "scene-7":("Monte Solaro Capri panorama",("solaro","capri")),
 "scene-8":("Giardini di Augusto Capri",("giardini","capri")),
 "scene-9":("Punta Carena lighthouse Capri",("carena","capri")),
}
diagnostics=[]
def get(url,params=None):
 try:
  r=S.get(url,params=params,timeout=18)
  r.raise_for_status()
  return r
 except requests.RequestException as e:
  diagnostics.append({"source":url[:200],"error":str(e)[:170]})
  return None
def page_images(page):
 r=get(page)
 if not r or "html" not in r.headers.get("Content-Type","").lower():return []
 soup=BeautifulSoup(r.text,"html.parser")
 options=[]
 for tag in soup.select("meta[property='og:image'],meta[name='twitter:image'],img,source,figure,picture"):
  label=" ".join(str(tag.get(k) or "") for k in ("alt","title","aria-label","data-caption","data-description"))
  for k in ("content","src","data-src","data-lazy-src","data-original","srcset","data-srcset"):
   raw=tag.get(k)
   if not raw:continue
   for item in str(raw).split(","):
    part=item.strip().split(" ")[0]
    url=urljoin(page,part)
    if url.startswith("https://") and not any(s in url.lower() for s in (".svg",".gif","avatar","logo","placeholder","favicon","pixel")):
     priority=8 if tag.name=="meta" else 3
     if any(s in (label+" "+url).lower() for s in ("suite","room","pool","terrace","hotel","capri","seaview","spa")):priority+=6
     options.append((priority,url,page,label or "Photo on exact hotel page","Source: "+page,"Unverified photographer licence"))
 # Image URLs embedded in CSS; do not assume that all background images are genuine hotel photos.
 for hit in re.findall(r"""url\(['"]?(https?://[^)'"]+\.(?:webp|jpg|jpeg|png)(?:\?[^)'"]*)?)""",r.text,re.I)[:35]:
  options.append((2,hit,page,"Hotel page background candidate","Source: "+page,"Unverified photographer licence"))
 seen=set(); result=[]
 for item in sorted(options,key=lambda x:-x[0]):
  plain=item[1].split("?")[0]
  if plain in seen:continue
  seen.add(plain);result.append(item)
 return result[:85]
def commons_images(query,tokens):
 r=get("https://commons.wikimedia.org/w/api.php",params={
  "action":"query","generator":"search","gsrsearch":query,"gsrnamespace":6,"gsrlimit":40,
  "prop":"imageinfo","iiprop":"url|extmetadata","iiurlwidth":1750,"format":"json"})
 if not r:return []
 try:entries=r.json()["query"]["pages"].values()
 except (KeyError,ValueError,TypeError):return []
 out=[]
 for entry in entries:
  title=entry.get("title","")
  if not title.lower().endswith((".jpg",".jpeg",".png",".tif",".tiff",".webp")):continue
  if any(x in title.lower() for x in ("map","diagram","logo","poster","sign","ticket","render")):continue
  text=(title+" "+(entry.get("snippet") or "")).lower()
  if not any(t in text for t in tokens):continue
  info=(entry.get("imageinfo") or [{}])[0]; url=info.get("thumburl") or info.get("url")
  if not url or not url.startswith("https://"):continue
  md=info.get("extmetadata") or {}
  author=BeautifulSoup(md.get("Artist",{}).get("value",""),"html.parser").get_text(" ",strip=True)[:180]
  licence=md.get("LicenseShortName",{}).get("value","License needs verification")
  page="https://commons.wikimedia.org/wiki/"+title.replace(" ","_")
  score=22+sum(t in text for t in tokens)*6
  out.append((score,url,page,title,(author or "Commons contributor")+" · "+licence,licence))
 return sorted(out,key=lambda x:-x[0])
def dhash(image):
 g=image.convert("L").resize((9,8),Image.Resampling.LANCZOS)
 p=list(g.getdata());return "".join("1" if p[y*9+x]>p[y*9+x+1] else "0" for y in range(8) for x in range(8))
def save_candidate(item,options,used_urls,used_hashes,used_vis):
 if item.get("visuallyVerified") or (item.get("status")=="candidate_needs_visual_review" and item.get("localPath")):return False
 for score,url,page,caption,credit,licence in sorted(options,key=lambda x:-x[0])[:110]:
  canonical=url.split("?")[0]
  if canonical in used_urls:continue
  r=get(url)
  if not r or len(r.content)>20_000_000:continue
  try:
   with Image.open(io.BytesIO(r.content)) as src:
    image=ImageOps.exif_transpose(src).convert("RGB")
    original=list(image.size)
    if image.width<1000 or image.height<600 or not 1.1<image.width/image.height<3.4:continue
    image.thumbnail((1800,1200),Image.Resampling.LANCZOS)
    h=dhash(image)
    if any(sum(a!=b for a,b in zip(h,old))<7 for old in used_vis):continue
    buff=io.BytesIO()
    image.save(buff,"WEBP",quality=85,method=5)
    data=buff.getvalue()
  except (OSError,ValueError):continue
  digest=hashlib.sha256(data).hexdigest()
  if len(data)<26000 or digest in used_hashes:continue
  folder=item.get("propertyKey") or "destination"
  target=BASE/folder/(item["key"]+".webp")
  target.parent.mkdir(parents=True,exist_ok=True)
  target.write_bytes(data)
  for old in ("visualReviewedAt","visualReviewBasis","frCaption","enCaption","ownerRightsAuthorization"):
   item.pop(old,None)
  item.update({"status":"candidate_needs_visual_review","visuallyVerified":False,
   "commercialRightsCleared":False,"visualQaWarning":"Candidate only: inspect exact WebP, real hotel/location, aesthetics, attribution and specific licence before approval.",
   "localPath":"/"+str(target).removeprefix("public/"),"downloadUrl":url,"sourcePage":page,
   "candidateContext":caption[:400],"credit":credit[:250],"license":licence[:120],
   "sha256":digest,"dhash":h,"bytes":len(data),"originalSize":original,"outputSize":list(image.size)})
  used_urls.add(canonical);used_hashes.add(digest);used_vis.append(h)
  print("CAPRI_CANDIDATE",folder,item["key"],page,flush=True)
  return True
 diagnostics.append({"slot":(item.get("propertyKey") or "destination")+"/"+item["key"],"result":"NO_MATCHING_AUTHENTIC_IMAGE"})
 print("CAPRI_UNFILLED",item.get("propertyKey") or "destination",item["key"],flush=True)
 return False
def main():
 m=json.loads(MANIFEST.read_text(encoding="utf8"))
 all_items=m["hotels"]+m["destinationScenes"]
 urls={x["downloadUrl"].split("?")[0] for x in all_items if x.get("downloadUrl")}
 hashes={x["sha256"] for x in all_items if x.get("sha256")}
 vis=[x["dhash"] for x in all_items if x.get("dhash")]
 cache={}
 changed=False
 for h in m["hotels"]:
  key=h["propertyKey"]
  if key not in cache:
   matches=[]
   for page in HOTELS[key]:
    matches.extend(page_images(page))
   cache[key]=matches
   print("CAPRI_SOURCES",key,len(matches),flush=True)
  changed=save_candidate(h,cache[key],urls,hashes,vis) or changed
 for scene in m["destinationScenes"]:
  query,terms=SCENES[scene["key"]]
  images=commons_images(query,terms)
  changed=save_candidate(scene,images,urls,hashes,vis) or changed
 m["downloadedHotelCandidates"]=sum(bool(x.get("localPath")) for x in m["hotels"])
 m["downloadedDestinationCandidates"]=sum(bool(x.get("localPath")) for x in m["destinationScenes"])
 m["visuallyVerified"]=False;m["approvedForCommercialPublication"]=False
 MANIFEST.write_text(json.dumps(m,ensure_ascii=False,indent=2)+"\n",encoding="utf8")
 REPORT.parent.mkdir(exist_ok=True,parents=True)
 REPORT.write_text(json.dumps({"hotelPhotos":m["downloadedHotelCandidates"],
  "destinationPhotos":m["downloadedDestinationCandidates"],
  "unapproved":sum(x.get("visuallyVerified") is not True for x in all_items),
  "missing":[(x.get("propertyKey") or "destination")+"/"+x["key"] for x in all_items if not x.get("localPath")],
  "diagnostics":diagnostics[:90]},ensure_ascii=False,indent=2)+"\n",encoding="utf8")
 print("CAPRI_COLLECTED",m["downloadedHotelCandidates"],"/12 hotel",m["downloadedDestinationCandidates"],"/9 destination; all new images unapproved",flush=True)
if __name__=="__main__":main()
