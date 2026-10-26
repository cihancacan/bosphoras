#!/usr/bin/env python3
"""Antiparos genuine photo candidate acquisition, source-only. Never auto approve."""
from pathlib import Path
from urllib.parse import urljoin, quote
from bs4 import BeautifulSoup
from PIL import Image,ImageOps
import requests,hashlib,json,re,io
DOC=Path("data/travel/antiparosMediaCandidates.json")
OUT=Path("public/images/travel/antiparos-premium")
REPORT=Path("docs/travel-antiparos-download-report.json")
S=requests.Session()
S.headers.update({"User-Agent":"BosphorasLuxuryStays/2.0 (editorial photo source verification; bosphoras.com)",
"Accept":"text/html,image/jpeg,image/png,image/webp,*/*;q=.7"})
HOTELS={
"the-rooster":["https://therooster.me/","https://theroosterantiparos.com/accommodation/","https://therooster.me/accommodation/"],
"the-beach-house":["https://beachhouseantiparos.com/stay/","https://beachhouseantiparos.com/stay/medium-sea-view/","https://beachhouseantiparos.com/stay/large-sea-view/","https://beachhouseantiparos.com/"],
"soros-beach":["https://www.sorosbeach.gr/","https://www.sorosbeach.gr/accommodation/"],
"kastro-boutique":["https://www.antiparosgreece.com/antiparos-rooms/","https://www.antiparosgreece.com/antiparos-accommodation/","https://www.antiparosgreece.com/hotel-photos-antiparos/","https://www.antiparosgreece.com/"]
}
SCENES={
"scene-1":("Antiparos Chora harbour village Greece",("antiparos","chora")),
"scene-2":("Antiparos Kastro old village Cyclades",("antiparos","kastro")),
"scene-3":("Sifneikos Gialos Antiparos sunset",("sifneikos","antiparos")),
"scene-4":("Antiparos Livadi beach dunes",("livadi","antiparos")),
"scene-5":("Apantima beach Antiparos",("apantima","antiparos")),
"scene-6":("Soros Beach Antiparos Greece",("soros","antiparos")),
"scene-7":("Antiparos Cave stalactites",("antiparos","cave")),
"scene-8":("Agios Georgios Despotiko Antiparos",("despotiko","antiparos")),
"scene-9":("Antiparos port ferry Pounta Greece",("antiparos","harbour"))
}
# Exact sources are tied to the named real property or geolocated island place.
# None implies commercial reuse rights until reviewed.
EXACT_HOTELS={}

EXACT_HOTEL_URLS={
 "soros-beach/view-1":[("https://www.living-postcards.com/sites/default/files/10582814_366068893578487_2840551803589687895_o.jpg",
   "https://www.living-postcards.com/blog/soros-beach-seafood-suites",
   "Real Soros Beach Antiparos beach daybeds with olive-and-purple cushions beneath straw shading, NOT a fashion advertisement")],
 "the-beach-house/view-2":[
  ("https://cdn.shopify.com/s/files/1/0015/0028/2982/files/Antiparos_Beach_House_casa_vacanze_sul_mare_3.jpg?v=1767357925",
   "https://greciamia.it/products/antiparos-beach-house",
   "Real renovated Beach House guestroom at Apantima, Cycladic blue and white interior")],
 "the-beach-house/view-3":[
  ("https://www.turquoiseholidays.co.uk/media/31118/dsc07846.jpg?center=0.5%2C0.5&height=940&mode=crop&quality=70&rnd=134159900030000000&width=1920",
   "https://www.turquoiseholidays.co.uk/destinations/mediterranean/greece/paros-antiparos/the-beach-house/",
   "Actual Beach House Antiparos shaded outdoor lounge beside Apantima cove")],
 "soros-beach/view-3":[
  ("https://www.living-postcards.com/sites/default/files/10974601_348904911961552_6729751623096848134_o.jpg",
   "https://www.living-postcards.com/blog/soros-beach-seafood-suites",
   "Verified Soros Beach seaside dining terrace with tables and parasols")],
 "kastro-boutique/view-1":[
  ("https://www.myboutiquehotel.com/photos/112827/kastro-antiparos-antiparos-town-003-43692-2220x1400.jpg",
   "https://www.myboutiquehotel.com/en/boutique-hotels-antiparos-town/kastro-antiparos.html",
   "Kastro Boutique Resort genuine pool and cabana daybeds in sunlight")],
 "kastro-boutique/view-2":[
  ("https://www.myboutiquehotel.com/photos/112827/kastro-antiparos-antiparos-town-008-43694-1110x700.jpg",
   "https://www.myboutiquehotel.com/en/boutique-hotels-antiparos-town/kastro-antiparos.html",
   "True Kastro Boutique Resort poolside bar and stone pergola at blue hour (NOT a guestroom)")],
 "kastro-boutique/view-3":[
  ("https://www.myboutiquehotel.com/photos/112827/kastro-antiparos-antiparos-town-007-43693-2220x1400.jpg",
   "https://www.myboutiquehotel.com/en/boutique-hotels-antiparos-town/kastro-antiparos.html",
   "Kastro Antiparos real shaded pergola outdoor dining area beside pool")]
}
EXACT_LANDSCAPES={
 "scene-3":[("https://www.fantasytravelofgreece.com/sites/default/files/sifneiko_beach.png",
   "https://www.fantasytravelofgreece.com/tours-in-greece/cruise-around-antiparos-and-despotiko",
   "Authentic Sifneiko coast at golden sunset with a yacht silhouette, no watermarked cafe footer")],
 "scene-8":[("https://www.topgreekislands.gr/sites/default/files/images/spot/despotiko_2.jpg",
   "https://www.topgreekislands.gr/en/sights/beaches-despotiko",
   "Genuine cove and beach on Despotiko Island offshore Agios Georgios, Antiparos; do not call it the main Agios Georgios village beach")],
 "scene-1":[
  ("https://s3-eu-west-1.amazonaws.com/welcome.mobile.production/uploads/welcome_experience/image/1598/traveler_page_header_antiparos__2_.jpg",
   "https://traveler.welcomepickups.com/en/paros/sightseeing_rides/antiparos-ride-cave-town-castle-experience",
   "Real aerial photograph of Antiparos Chora and port with boats and clear turquoise water")],
 "scene-3":[
  ("https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/89/7c/0d/amazing-sunset-sifneiko.jpg?h=-1&s=1&w=1200",
   "https://www.tripadvisor.ch/Restaurant_Review-g3569526-d12334953-Reviews-Sifneiko_Cafe-Antiparos_Town_Antiparos_Cyclades_South_Aegean.html",
   "Sifneikos Gialos sunset viewed from Sifneiko Café's sea-facing terrace")],
 "scene-4":[
  ("https://images.squarespace-cdn.com/content/v1/6489d831dc9a515d83f5e390/7c60a337-8a66-411e-9736-7e6b946cb2c6/Livadia-Beach_Strand.jpg",
   "https://www.greekislandhopping.de/blog/antiparos-straende",
   "Livadia beach on Antiparos with west-coast dunes and natural wide sandy cove, not Livadia on Paros")],
 "scene-5":[
  ("https://www.thethinkingtraveller.com/media/Resized/Greece%20Local%20Areas/Antiparos/Beaches/Apantima/1920/shutterstock_763417117.jpg",
   "https://www.thethinkingtraveller.com/greece/antiparos/villas/lexie",
   "True Apantima Antiparos coastal hillside and shallow bay with traditional windmill")],
 "scene-6":[
  ("https://www.thethinkingtraveller.com/media/Resized/Greece%20Local%20Areas/Antiparos/Beaches/Soros/1920/shutterstock_764227255.jpg",
   "https://www.thethinkingtraveller.com/greece/antiparos/villas/yvoni",
   "Actual Soros sandy beach and clear sea with hilly background; source path specifically identifies Soros")],
 "scene-9":[
  ("https://cdn.prod.website-files.com/6626c3effbfcaaa0f48ca4b8/6626e2fb10d1a4be10ebb506_image%2035.webp",
   "https://www.bonatsahouse.com/lifestyle/antiparos-travel-tips",
   "Original Antiparos ferry quay photograph showing passenger and vehicle boats by island waterfront")]
}

# Fallback photographic file titles validated as locations on Wikimedia Commons.
# These originals are unapproved until a separate visual and licensing review.
EXACT_SCENES={
 "scene-7":[("Antiparos Cave 247279.jpg","Actual cave interior photographed by Zde June 2024, CC BY-SA 4.0")],

"scene-2":[("Antiparos, Kastro, 247356.jpg","Antiparos village near the historic Kastro, Zde 2024")],
"scene-7":[("Antiparos Cave.jpg","Real cave interior from 2015 by Kondephy, geolocated Antiparos"),("Antiparos-cave.jpg","Genuine Greek Antiparos cave, Dimorsitanos 2009")],
"scene-8":[("Despotiko.jpg","View from Agios Georgios towards island of Despotiko, Wicki2009")],
"scene-1":[("Antiparos.jpg","Authentic Antiparos village or harbour, requires visual geographical QA")],
"scene-6":[]
}
EXACT_SCENE_URLS={}
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
    if any(x in (desc+" "+url).lower() for x in ("suite","room","pool","villa","antiparos","rooster","soros","kastro","house","sea","beach","view")):priority+=8
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
  print("ANTIPAROS_SAVED",folder,item["key"],page,flush=True);return
 print("ANTIPAROS_UNFILLED",item.get("propertyKey") or "destination",item["key"],flush=True)
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
   siteCache[key]=found;print("ANTIPAROS_SITE",key,len(found),flush=True)
  exact=[(150,url,page,ctx,"Photographer or source: "+page,"Commercial reuse licence needs confirmation")
    for url,page,ctx in EXACT_HOTELS.get(key+"/"+item["key"],[])]
  linked=[(210,url,page,context,"Verified named-property source; photographer at "+page,
    "Commercial photographer permission to verify") for url,page,context in EXACT_HOTEL_URLS.get(key+"/"+item["key"],[])]
  capture(item,linked+exact+siteCache[key],seenURLs,seenHashes,seenDHash)
 for item in m["destinationScenes"]:
  if item.get("localPath"):continue
  query,tokens=SCENES[item["key"]]
  exact=[(170,commons_original(name),"https://commons.wikimedia.org/wiki/File:"+name.replace(" ","_"),
     ctx,"Wikimedia Commons source author, check file history for attribution","Creative Commons licence to verify in file")
     for name,ctx in EXACT_SCENES.get(item["key"],[])]
  direct=[(180,url,page,ctx,"Source photographer at "+page,"Publisher/photographer permission required")
     for url,page,ctx in EXACT_SCENE_URLS.get(item["key"],[])]
  located=[(210,url,page,context,"Documented exact place source: "+page,
   "Photographer commercial permission requires verification") for url,page,context in EXACT_LANDSCAPES.get(item["key"],[])]
  capture(item,exact+located+direct+commons(query,tokens),seenURLs,seenHashes,seenDHash)
 m["downloadedHotelCandidates"]=sum(bool(x.get("localPath")) for x in m["hotels"])
 m["downloadedDestinationCandidates"]=sum(bool(x.get("localPath")) for x in m["destinationScenes"])
 m["visuallyVerified"]=False;m["approvedForCommercialPublication"]=False
 DOC.write_text(json.dumps(m,ensure_ascii=False,indent=2)+"\n",encoding="utf8")
 REPORT.parent.mkdir(exist_ok=True,parents=True)
 REPORT.write_text(json.dumps({"hotels":m["downloadedHotelCandidates"],"scenes":m["downloadedDestinationCandidates"],
 "missing":[(x.get("propertyKey") or "destination")+"/"+x["key"] for x in items if not x.get("localPath")],
 "diagnostics":diagnostics[:100]},ensure_ascii=False,indent=2)+"\n",encoding="utf8")
 print("ANTIPAROS_RESULT",m["downloadedHotelCandidates"],"/12",m["downloadedDestinationCandidates"],"/9; ALL UNAPPROVED",flush=True)
if __name__=="__main__":main()
