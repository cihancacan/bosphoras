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
"le-sirenuse":["https://sirenuse.it/en/gallery/rooms-suites/","https://sirenuse.it/en/gallery/hotel/","https://sirenuse.it/en/rooms-suites/","https://sirenuse.it/en/"],
"hotel-poseidon":["https://www.hotelposeidonpositano.it/en/gallery/","https://www.hotelposeidonpositano.it/en/rooms-hotel-in-positano","https://www.hotelposeidonpositano.it/en/hotel-with-pool-positano","https://www.hotelposeidonpositano.it/en/hotel-in-positano"],
"villa-treville":["https://villatreville.com/accommodations/","https://refit.villatreville.com/gallery.php","https://villatreville.com/","https://www.ad-italia.it/gallery/villa-treville-positano-interni-renzo-mongiardino-foto/"],
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
EXACT={
 "hotel-poseidon/view-1":[("https://smallandeleganthotels.com/images/blog/Poseidon_-_sun_terrace_2_%287%29.jpg",
   "https://smallandeleganthotels.com/destinations/italy/amalfi-coast-sorrento-positano/hotel-poseidon-positano/",
   "Authentic sunlit Hotel Poseidon pool terrace, striped parasols and sun loungers")],
 "hotel-poseidon/view-2":[
  ("https://cdn.blastness.biz/media/1450/TOP-new/thumbs/full/top_wow_room.jpg",
   "https://www.hotelposeidonpositano.it/en/rooms-hotel-in-positano/wow-suite",
   "Authentic Hotel Poseidon spacious WOW! Suite with vibrant rugs, terrace and red curtains"),
  ("https://cdn.blastness.biz/media/1450/GALLERY-new/thumbs/medium/gallery_wow-suite5.jpg",
   "https://www.hotelposeidonpositano.it/en/rooms-hotel-in-positano/wow-suite",
   "Positano Hotel Poseidon WOW Suite interior with white seating and flowers")],
 "hotel-poseidon/view-3":[("https://images.squarespace-cdn.com/content/v1/663b6e06900de569cb5eff86/1722093018761-YQQW4QGKR9TFV8FJP6A6/poseidon%2Bcocktail%2Bhour.jpg",
   "https://plannedtowhere.com/blog/best-hotels-positano",
   "Real Hotel Poseidon dining terrace with illuminated pool at blue hour")],
 "il-san-pietro/view-1":[("https://static.prod.r53.tablethotels.com/media/hotels/slideshow_images_staged/large/1354946.jpg",
   "https://guide.michelin.com/br/pt_BR/hotels-stays/positano/il-san-pietro-di-positano-7453",
   "Authentic Il San Pietro cliffside exterior and terrace with blue sea in clear daylight")],
 "villa-treville/view-1":[("https://www.americanexpress.com/en-us/travel/discover/photos/482955/92265/1200/DSC06641.jpg",
   "https://www.americanexpress.com/es-es/travel/discover/property/Italy/Positano/Villa-Treville",
   "Real Villa TreVille pool overlooking Positano from a private guest terrace")],
 "villa-treville/view-2":[("https://cdn.mos.cms.futurecdn.net/P4QodJ2zzEbAUCRJBmapJV-1920-80.png",
   "https://theweek.com/culture-life/travel/villa-treville-positano-a-glamorous-sanctuary-on-the-amalfi-coast",
   "Actual turquoise and orange mosaic living room in the Callas suite of Villa TreVille")],
 "villa-treville/view-3":[("https://hips.hearstapps.com/hmg-prod/images/villa-treville-positano-4-675b10eb3f2f8.jpg",
   "https://www.redonline.co.uk/travel/a63081582/villa-treville-positano/",
   "Original Villa TreVille Positano pergola-shaded panoramic outdoor lounge")],
}
SCENE_PHOTOS={
 "scene-1":[("https://www.celebritycruises.com/blog/content/uploads/2022/11/things-to-do-in-positano-cta.jpg",
    "https://www.celebritycruises.com/blog/things-to-do-in-positano","Sunlit colorful Positano village and bay from the sea")],
 "scene-3":[("https://images.trvl-media.com/place/6075152/b76eb983-8c2c-4948-9461-723c46ffbfce.jpg",
    "https://www.expedia.co.uk/Spiaggia-Grande-Positano-City-Centre.d6075152.Attraction","Vibrant Spiaggia Grande beach with alternating blue/yellow parasols and pastel Positano backdrop")],
 "scene-5":[("https://www.praianonline.com/wp-content/uploads/2020/09/positano-panorama.jpg",
    "https://www.praianonline.com/en/destinations/explore-positano-amalfi-coast/","Bright panoramic view down Positano hillside to town church and sea, street not represented")],
 "scene-6":[
  ("https://images.ng.ondaplatform.com/card/3364/gallery/bagni-arienzo-positano2.jpg/w1280_h900_csmart_d1.6_u1668505558.webp",
   "https://www.positano.com/it/c/bagni-arienzo","Exact turquoise Arienzo bathing cove with beach, coast and white villas"),
  ("https://images.ng.ondaplatform.com/card/3364/gallery/bagni-arienzo-positano2.jpg",
   "https://www.positano.com/it/c/bagni-arienzo","Same Arienzo source photo in full resolution if available")],
 "scene-7":[("https://i0.wp.com/amalficoastlovers.com/wp-content/uploads/2023/10/spiaggia-laurito-positano-costiera-amalfitana-amalficoastlovers-jpg.webp?fit=1500%2C1000&ssl=1",
  "https://amalficoastlovers.com/en/laurito/","Actual Laurito beach, turquoise sea with umbrellas below cliffs")],
 "scene-8":[("https://uploads.grupodicas.com/2024/11/2c0OPVRU-image.png",
   "https://www.grupodicas.com/onde-ficar-em-positano-melhor-regiao-e-hoteis-baratos/","Actual colourful Positano ceramics storefront on bright pedestrian street")]
}
SCENES_EXACT={
 "scene-1":[("AmalfiküstePositano.jpg","True Positano village viewed from coastline, bright daylight"),("Amalfi Coast from Positano.jpg","Positano Amalfi coast landscape")],
 "scene-5":[("Positano, Amalfi Coast, Italy (22286060906).jpg","Historical true Via Pasitea building and road perspective in Positano"),("Vista di Positano Campania.jpg","Positano hillside roads from Via Pasitea")],
 "scene-6":[("84017 Arienzo SA, Italy - panoramio (1).jpg","Authentic Arienzo Positano coast scene geolocated on Wikimedia Commons"),("84017 Arienzo SA, Italy - panoramio.jpg","Alternative Arienzo photograph at precisely named site")],
 "scene-7":[("Il San Pietro di Positano-14460805246.jpg","True San Pietro di Positano and Laurito coast from nearby Praiano"),("84017 Arienzo SA, Italy - panoramio (2).jpg","Nearby east Positano coast context: inspect geographic identity")],
 "scene-8":[("Positano (32632824125).jpg","Real Positano village shopping streets and colourful houses, subject identity to inspect"),("Positano - 7271.jpg","Positano village lane, confirm ceramic context")],
 "scene-9":[("View of Praiano from the sea, 2010.jpg","Real nearby Praiano photographed from Tyrrhenian Sea"),("Praiano, Amalfitan Coast.jpeg","Actual Praiano and coastal panorama east of Positano, verified coordinates")]
}
def exact_commons(title,caption):
 r=fetch("https://commons.wikimedia.org/w/api.php",params={
 "action":"query","titles":"File:"+title,"prop":"imageinfo",
 "iiprop":"url|extmetadata","iiurlwidth":1750,"format":"json"})
 if not r:return []
 try:
  page=next(x for x in r.json()["query"]["pages"].values() if "missing" not in x)
  info=page["imageinfo"][0];url=info.get("thumburl") or info.get("url")
  meta=info.get("extmetadata") or {}
  artist=BeautifulSoup(meta.get("Artist",{}).get("value",""),"html.parser").get_text(" ",strip=True)[:180]
  license=meta.get("LicenseShortName",{}).get("value","License needs review")
  source="https://commons.wikimedia.org/wiki/"+page["title"].replace(" ","_")
  return [(120,url,source,caption,(artist or "Commons contributor")+" · "+license,license)] if url else []
 except (KeyError,IndexError,TypeError,StopIteration,ValueError):return []

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
  opts=[(150,url,source,desc,"Exact property image linked at "+source,"Publisher/source licence check required") for url,source,desc in EXACT.get(key+"/"+x["key"],[])]
  candidate(x,opts+cache[key],urls,hashes,p)
 for x in m["destinationScenes"]:
  if x.get("localPath"):continue
  query,tokens=SCENES[x["key"]]
  confirmed=[]
  for title,caption in SCENES_EXACT.get(x["key"],[]):confirmed.extend(exact_commons(title,caption))
  fallback=[(150,"https://www.laconchigliapraiano.it/Assets/vovoproductions_hotel-shots_2025-02-01_1250/Resized/Amalfi-1%20%28Personalizzato%29.jpg",
     "https://www.laconchigliapraiano.it/","Real sunlit panorama of Praiano along the Tyrrhenian coast","La Conchiglia Hotel · official 2025 Praiano area photo","Official hotel photographer rights check required")] if x["key"]=="scene-9" else []
  direct=[(180,url,page,caption,"Source image from "+page,"Publisher/photographer permission requires verification")
    for url,page,caption in SCENE_PHOTOS.get(x["key"],[])]
  candidate(x,direct+fallback+confirmed+commons_images(query,tokens),urls,hashes,p)
 m["downloadedHotelCandidates"]=sum(bool(x.get("localPath")) for x in m["hotels"])
 m["downloadedDestinationCandidates"]=sum(bool(x.get("localPath")) for x in m["destinationScenes"])
 m["visuallyVerified"]=False;m["approvedForCommercialPublication"]=False
 DOC.write_text(json.dumps(m,ensure_ascii=False,indent=2)+"\n",encoding="utf8")
 REPORT.write_text(json.dumps({"hotels":m["downloadedHotelCandidates"],"scenes":m["downloadedDestinationCandidates"],
   "missing":[(x.get("propertyKey") or "destination")+"/"+x["key"] for x in all_items if not x.get("localPath")],
   "errors":errors[:80]},ensure_ascii=False,indent=2)+"\n",encoding="utf8")
 print("POSITANO_ASSETS",m["downloadedHotelCandidates"],"/12 hotels",m["downloadedDestinationCandidates"],"/9 scenes. Unapproved; noindex.",flush=True)
if __name__=="__main__":main()
