#!/usr/bin/env python3
"""Ravello photo acquisition: candidates only, no automatic photo approval or Vercel build."""
import io,json,hashlib,re
from pathlib import Path
from urllib.parse import urljoin
import requests
from bs4 import BeautifulSoup
from PIL import Image,ImageOps
DOC=Path("data/travel/ravelloMediaCandidates.json")
OUT=Path("public/images/travel/ravello-premium")
REPORT=Path("docs/travel-ravello-download-report.json")
S=requests.Session()
S.headers.update({"User-Agent":"BosphorasLuxuryStays/2.0 (photo sourcing and credits review)",
"Accept":"text/html,application/json,image/jpeg,image/png,image/webp,*/*;q=0.7"})
HOTELS={
"caruso-belmond":["https://www.belmond.com/en/hotels/europe/italy/caruso-amalfi-coast","https://www.belmond.com/en/hotels/europe/italy/caruso-amalfi-coast/accommodation","https://www.belmond.com/en/hotels/europe/italy/caruso-amalfi-coast/dining"],
"palazzo-avino":["https://www.palazzoavino.com/","https://www.palazzoavino.com/suites/","https://www.palazzoavino.com/rooms/","https://www.palazzoavino.com/clubhouse-by-the-sea/"],
"hotel-villa-cimbrone":["https://www.hotelvillacimbrone.com/","https://www.hotelvillacimbrone.com/rooms-and-suites/","https://www.hotelvillacimbrone.com/rooms-and-suite/studio-suite/"],
"palazzo-confalone":["https://palazzoconfalone.com/","https://palazzoconfalone.com/palazzo-confalone-hotel/","https://palazzoconfalone.com/rooms/","https://palazzoconfalone.com/villa-confalone/"]}
SCENES={
"scene-1":("Villa Rufolo Ravello gardens",("rufolo",)),
"scene-2":("Villa Cimbrone Terrazza Infinito Ravello",("cimbrone",)),
"scene-3":("Piazza Duomo Ravello cathedral",("ravello","duomo")),
"scene-4":("San Giovanni del Toro Ravello church",("giovanni","toro")),
"scene-5":("Ravello village rooftops sea Amalfi",("ravello",)),
"scene-6":("Scala Salerno Italy village panorama",("scala",)),
"scene-7":("Marmorata Amalfi coast sea",("marmorata",)),
"scene-8":("Oscar Niemeyer Auditorium Ravello",("niemeyer","ravello")),
"scene-9":("Atrani Amalfi panorama Ravello",("atrani","amalfi"))}

# Precise site-specific photo sources, not ambiguous "Marmorata" from Sardinia.
EXACT_HOTEL={
 "caruso-belmond/view-1":[
  ("https://www.simplyluxuryescapes.co.uk/wp-content/uploads/2021/03/car-gst-pool13_2580x1451-2048x1152.jpg",
   "https://www.simplyluxuryescapes.co.uk/product/caruso-a-belmond-hotel-amalfi-coast/",
   "True Hotel Caruso infinity pool and 11th-century stone property under clear skies")],
 "palazzo-avino/view-1":[
  ("https://www.travoh.com/wp-content/uploads/2023/10/010-Palazzo-Avino-Amalfi-Coast-Hotel-Ravello-Italy-Aerial-View.jpg",
   "https://www.travoh.com/stays/palazzo-avino-amalfi-coast-hotel-ravello-italy/attachment/010-palazzo-avino-amalfi-coast-hotel-ravello-italy-aerial-view/",
   "Real Palazzo Avino pink palace hotel exterior seen from elevated angle")],
 "palazzo-avino/view-2":[
  ("https://www.redsavannah.com/-/media/countries/italy/accommodation/palazzo-avino/palazzo-avino-italy-bedroom.jpg?cropregion=0%2C230%2C2000%2C1101&h=610&hash=06B1FA55CE7D7DBB6EFE76C058BE0370&udi=1&w=1400",
   "https://www.redsavannah.com/europe/italy/hotels/palazzo-avino",
   "Genuine Palazzo Avino guest bedroom with white bedding and turquoise headboard")],
}
EXACT_COMMONS={
 "scene-5":[
  ("Vue emblématique de Ravello.jpg","Authentic elevated Ravello town and sea panorama; inspect daylight and orientation"),
  ("View of Ravello in September 2017.jpg","Ravello rooftops seen across hillside in daylight"),
  ("Ravello Italy.JPG","Authentic Ravello village overview from countryside")],
 "scene-6":[
  ("Scala Campania panorama.jpg","Authentic Scala inland village and Lattari mountains"),
  ("Piazza Scala.JPG","Historic Scala village square and hills"),
  ("Campania Ravello1 tango7174.jpg","The hill town Scala as viewed from Ravello")],
 "scene-7":[
  ("Minori from Ravello.jpg","Coast around Minori, adjoining Marmorata, seen from Ravello, not Marmorata itself"),
  ("Amalfi coast at Minori.jpg","Clear Tyrrhenian coastline near Ravello's Marmorata locality")],
 "scene-9":[
  ("Atrani (Italy).jpg","Bernard Gagnon authentic daylight photograph of Atrani on the Amalfi coast; do not claim camera was in Ravello"),
  ("Amalfi Coast, Italy Panoramic.jpg","Wide panoramic view of historic Atrani beside Amalfi, coastal perspective"),
  ("Amalfitan Coast from Ravello.JPG","True Amalfi coastline viewed from Ravello"),
  ("Campania Ravello2 tango7174.jpg","Authentic view from Ravello towards Pontone and Atrani on the sea")],
}
EXACT_DIRECT={
 "scene-2":[
  ("COMMONS_ORIGINAL:Cimbrone terraza infinito 01.jpg",
   "https://commons.wikimedia.org/wiki/File:Cimbrone_terraza_infinito_01.jpg",
   "Actual marble-bust Terrace of Infinity, Villa Cimbrone, Ravello, horizontal sunlit 2017 original",
   "Miguel Hermoso Cuesta · CC BY-SA 4.0")],
 "scene-4":[
  ("COMMONS_ORIGINAL:San Giovanni del Toro Ravello.jpg",
   "https://commons.wikimedia.org/wiki/File:San_Giovanni_del_Toro_Ravello.jpg",
   "Church exterior of San Giovanni del Toro in Ravello, real modern colour photograph",
   "Jensens · public domain")],
 "scene-9":[
  ("COMMONS_ORIGINAL:Atrani (Italy).jpg",
   "https://commons.wikimedia.org/wiki/File:Atrani_(Italy).jpg",
   "Bernard Gagnon original daylight photograph of Atrani; coastal scene, not hotel location or a Ravello camera position",
   "Bernard Gagnon · CC BY 4.0")],
 "scene-7":[
  ("https://media.houseandgarden.co.uk/photos/6888e077e0021db31082b70c/master/w_1600,c_limit/Palazzo-Avino-12.jpg",
  "https://www.houseandgarden.co.uk/article/palazzo-avino-ravello-review",
  "Actual Marmorata coastline Palazzo Avino Clubhouse by the Sea seen overhead, with pink striped parasols",
  "House & Garden photographer (copyright verification required)"),
  ("https://d19lgisewk9l6l.cloudfront.net/assetbank/palazzo-avino-clubhouse-by-the-sea-kayaking-1_51282.jpg",
  "https://www.wexas.com/accommodation-offers/palazzo-avino-ravello-153313",
  "Marmorata coast kayak and authentic Palazzo Avino waterside platform",
  "Wexas Travel / original photographer (copyright verification required)")]
}
EXACT_SCENE_PAGES={
 "scene-7":["https://hotelmarmorata.com/en/gallery","https://www.palazzoavino.com/clubhouse-by-the-sea/"],
}

def commons_original_url(filename):
 """Generate canonical Wikimedia Commons original path by MD5 of UTF-8 normalized filename."""
 from urllib.parse import quote
 canonical=filename.replace(" ","_")
 digest=hashlib.md5(canonical.encode("utf-8")).hexdigest()
 return "https://upload.wikimedia.org/wikipedia/commons/"+digest[0]+"/"+digest[:2]+"/"+quote(canonical,safe="()")

def commons_exact(filename,context):
 response=request("https://commons.wikimedia.org/w/api.php",params={"action":"query","titles":"File:"+filename,
   "prop":"imageinfo","iiprop":"url|extmetadata","iiurlwidth":1750,"format":"json"})
 if not response:return []
 try:
  page=next(p for p in response.json()["query"]["pages"].values() if "missing" not in p)
  info=page["imageinfo"][0];url=info.get("thumburl") or info.get("url")
  md=info.get("extmetadata") or {}
  artist=BeautifulSoup(md.get("Artist",{}).get("value",""),"html.parser").get_text(" ",strip=True)[:150]
  lic=md.get("LicenseShortName",{}).get("value","Rights check required")
  source="https://commons.wikimedia.org/wiki/"+page["title"].replace(" ","_")
  return [(130,url,source,context,(artist or "Commons contributor")+" · "+lic,lic)] if url else []
 except (ValueError,TypeError,KeyError,IndexError,StopIteration):return []

errors=[]
def request(url,params=None):
 try:
  r=S.get(url,params=params,timeout=16)
  r.raise_for_status()
  return r
 except requests.RequestException as e:
  errors.append({"url":url[:190],"error":str(e)[:160]})
  return None
def candidates_from_hotel(page):
 r=request(page)
 if not r or "html" not in r.headers.get("content-type","").lower():return []
 soup=BeautifulSoup(r.text,"html.parser")
 records=[]
 for tag in soup.select("meta[property='og:image'],meta[name='twitter:image'],img,source,picture"):
  alt=" ".join(str(tag.get(k) or "") for k in ("alt","title","aria-label","data-caption"))
  for attr in ("content","src","data-src","data-lazy-src","data-original","srcset","data-srcset"):
   raw=tag.get(attr)
   if not raw:continue
   for item in str(raw).split(","):
    img=item.strip().split(" ")[0]
    if not img or img.startswith("data:"):continue
    url=urljoin(page,img)
    if not url.startswith("https://") or any(x in url.lower() for x in (".svg",".gif","logo","icon","favicon","pixel","placeholder")):continue
    score=14 if tag.name=="meta" else 4
    if any(x in (url+" "+alt).lower() for x in ("suite","hotel","room","terrace","caruso","palazzo","ravello","cimbrone","belmond","pool","garden")):score+=8
    records.append((score,url,page,alt or "Hotel website image, exact hotel not yet visually verified","Official hotel website; photographer rights require review","Publisher/photographer permission not verified"))
 unique=set();found=[]
 for x in sorted(records,key=lambda q:-q[0]):
  normalized=x[1].split("?")[0]
  if normalized in unique:continue
  unique.add(normalized);found.append(x)
 return found[:95]
def commons_candidates(query,tokens):
 r=request("https://commons.wikimedia.org/w/api.php",params={
 "action":"query","generator":"search","gsrsearch":query,"gsrnamespace":6,"gsrlimit":50,
 "prop":"imageinfo","iiprop":"url|extmetadata","iiurlwidth":1700,"format":"json"})
 if not r:return []
 try:pages=r.json()["query"]["pages"].values()
 except (KeyError,ValueError,TypeError):return []
 opts=[]
 for page in pages:
  name=page.get("title",""); lower=name.lower()
  if not lower.endswith((".jpg",".jpeg",".png",".webp",".tiff",".tif")):continue
  if not any(x in lower for x in tokens):continue
  if any(x in lower for x in ("map","drawing","watercolour","painting","poster","logo","diagram","sign","watermark","stamp","etching")):continue
  img=(page.get("imageinfo") or [{}])[0]
  url=img.get("thumburl") or img.get("url")
  if not url or not url.startswith("https://"):continue
  meta=img.get("extmetadata") or {}
  artist=BeautifulSoup(meta.get("Artist",{}).get("value",""),"html.parser").get_text(" ",strip=True)[:140]
  licence=meta.get("LicenseShortName",{}).get("value","Photographer license requires review")
  source="https://commons.wikimedia.org/wiki/"+name.replace(" ","_")
  opts.append((40+sum(t in lower for t in tokens)*3,url,source,name,(artist or "Commons contributor")+" · "+licence,licence))
 return sorted(opts,key=lambda x:-x[0])
def dhash(im):
 p=list(im.convert("L").resize((9,8),Image.Resampling.LANCZOS).getdata())
 return "".join("1" if p[y*9+x]>p[y*9+x+1] else "0" for y in range(8) for x in range(8))
def capture(item,options,seen_urls,seen_hashes,seen_dhash):
 if item.get("localPath"):return False
 # Do not treat a downloaded file as proof of a real-property match or commercial permission.
 for priority,url,source,description,author,licence in sorted(options,key=lambda x:-x[0]):
  if url.split("?")[0] in seen_urls:continue
  r=request(url)
  if not r or len(r.content)>18000000:continue
  try:
   with Image.open(io.BytesIO(r.content)) as orig:
    im=ImageOps.exif_transpose(orig).convert("RGB")
    original=list(im.size)
    if im.width<1000 or im.height<560 or not 1.11<im.width/im.height<3.4:continue
    im.thumbnail((1750,1200),Image.Resampling.LANCZOS)
    d=dhash(im)
    if any(sum(a!=b for a,b in zip(d,prior))<7 for prior in seen_dhash):continue
    out=io.BytesIO();im.save(out,"WEBP",quality=85,method=5)
    content=out.getvalue()
  except (OSError,ValueError):continue
  digest=hashlib.sha256(content).hexdigest()
  if len(content)<26000 or digest in seen_hashes:continue
  folder=item.get("propertyKey") or "destination"
  target=OUT/folder/(item["key"]+".webp")
  target.parent.mkdir(parents=True,exist_ok=True);target.write_bytes(content)
  item.update({"status":"candidate_needs_visual_review","visuallyVerified":False,
   "commercialRightsCleared":False,"visualQaWarning":"Source-backed photo candidate only: verify actual identity, seasonal photo accuracy, artistic quality and precise commercial reuse licence.",
   "localPath":"/"+str(target).removeprefix("public/"),"sourcePage":source,
   "downloadUrl":url,"candidateContext":description[:280],"credit":author[:240],
   "license":licence[:100],"sha256":digest,"dhash":d,"bytes":len(content),
   "originalSize":original,"outputSize":list(im.size)})
  seen_urls.add(url.split("?")[0]);seen_hashes.add(digest);seen_dhash.append(d)
  print("RAVELLO_CANDIDATE",folder,item["key"],source,flush=True)
  return True
 print("RAVELLO_UNFILLED",item.get("propertyKey") or "destination",item["key"],flush=True)
 return False
def main():
 m=json.loads(DOC.read_text(encoding="utf8"))
 items=m["hotels"]+m["destinationScenes"]
 seen_urls={u.split("?")[0] for x in items for u in (x.get("downloadUrl"),x.get("rejectedSource")) if isinstance(u,str) and u.startswith("https://")}
 seen_hashes={x["sha256"] for x in items if x.get("sha256")}
 seen_dhash=[x["dhash"] for x in items if x.get("dhash")]
 cache={}
 for item in m["hotels"]:
  if item.get("localPath"):continue
  k=item["propertyKey"]
  if k not in cache:
   cache[k]=[candidate for page in HOTELS[k] for candidate in candidates_from_hotel(page)]
   print("RAVELLO_HOTEL_SOURCES",k,len(cache[k]),flush=True)
  exact=[(240,url,page,caption,"Photographer/source publication: "+page,
    "Copyright and commercial reuse permission require confirmation")
    for url,page,caption in EXACT_HOTEL.get(k+"/"+item["key"],[])]
  candidates=cache[k]
  if k=="caruso-belmond":
   candidates=[c for c in candidates if "/photos/car/" in c[1].lower() or "/photos/car-" in c[1].lower()]
   if item["key"]=="view-2":
    rooms=[c for c in candidates if "room" in c[1].lower() or "suite" in c[1].lower() or "acc-" in c[1].lower()]
    candidates=rooms or candidates
  if k=="palazzo-avino" and item["key"]=="view-2":
   candidates=[c for c in candidates if any(w in (c[1]+" "+c[3]).lower() for w in ("suite","room","camera","bedroom"))]
  capture(item,exact+candidates,seen_urls,seen_hashes,seen_dhash)
 for item in m["destinationScenes"]:
  if item.get("localPath"):continue
  q,terms=SCENES[item["key"]]
  known=[]
  for name,context in EXACT_COMMONS.get(item["key"],[]):known.extend(commons_exact(name,context))
  exactPages=[c for page in EXACT_SCENE_PAGES.get(item["key"],[]) for c in candidates_from_hotel(page)]
  # An actual Marmorata coastline image should outrank a nearby Minori photo;
  # art direction and locality are still manually reviewed after download.
  exactPages=[(125,url,page,desc,author,lic) for _,url,page,desc,author,lic in exactPages]
  exact=[(220,commons_original_url(url.split(":",1)[1]) if url.startswith("COMMONS_ORIGINAL:") else url,
    page,desc,author,("CC BY-SA 4.0" if item["key"]=="scene-2" else "Public domain" if item["key"]=="scene-4" else "CC BY 4.0") if url.startswith("COMMONS_ORIGINAL:") else "Original photographer permission requires verification")
    for url,page,desc,author in EXACT_DIRECT.get(item["key"],[])]
  capture(item,exact+exactPages+known+commons_candidates(q,terms),seen_urls,seen_hashes,seen_dhash)
 m["downloadedHotelCandidates"]=sum(bool(x.get("localPath")) for x in m["hotels"])
 m["downloadedDestinationCandidates"]=sum(bool(x.get("localPath")) for x in m["destinationScenes"])
 m["visuallyVerified"]=False;m["approvedForCommercialPublication"]=False
 DOC.write_text(json.dumps(m,ensure_ascii=False,indent=2)+"\n",encoding="utf8")
 REPORT.parent.mkdir(parents=True,exist_ok=True)
 REPORT.write_text(json.dumps({"hotels":m["downloadedHotelCandidates"],"scenes":m["downloadedDestinationCandidates"],"missing":[(x.get("propertyKey") or "destination")+"/"+x["key"] for x in items if not x.get("localPath")],"errors":errors[:80]},ensure_ascii=False,indent=2)+"\n",encoding="utf8")
 print("RAVELLO_RESULTS",m["downloadedHotelCandidates"],"/12",m["downloadedDestinationCandidates"],"/9; all unapproved.",flush=True)
if __name__=="__main__":main()
