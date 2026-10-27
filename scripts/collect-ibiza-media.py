#!/usr/bin/env python3
"""Collect exact Ibiza property and geolocated landscape WebPs; photo candidates only.
Every image remains visuallyVerified=False and commercialRightsCleared=False until
human art direction + licence proof; never run Vercel.
"""
import hashlib,io,json,re
from pathlib import Path
from urllib.parse import urljoin,quote
from bs4 import BeautifulSoup
from PIL import Image,ImageOps
import requests

DOC=Path("data/travel/ibizaMediaCandidates.json")
OUT=Path("public/images/travel/ibiza-premium")
REPORT=Path("docs/travel-ibiza-download-report.json")
S=requests.Session()
S.headers.update({"User-Agent":"BosphorasLuxuryStays/2.0 (original photo source verification; bosphoras.com)",
 "Accept":"text/html,image/jpeg,image/png,image/webp,application/json,*/*;q=.7"})
HOTELS={
 "six-senses-ibiza":[
  "https://www.sixsenses.com/en/hotels-resorts/europe/spain/ibiza/gallery/",
  "https://www.sixsenses.com/en/hotels-resorts/europe/spain/ibiza/", 
  "https://www.sixsenses.com/en/hotels-resorts/europe/spain/ibiza/accommodation/",
  "https://www.sixsenses.com/en/hotels-resorts/europe/spain/ibiza/dining/"],
 "nobu-ibiza-bay":[
  "https://www.nobuhotelibizabay.com/",
  "https://www.nobuhotelibizabay.com/rooms-suites",
  "https://www.nobuhotelibizabay.com/gallery",
  "https://www.nobuhotelibizabay.com/restaurants-and-bars"],
 "7pines-resort-ibiza":[
  "https://7pines-ibiza.com/en/resort",
  "https://7pines-ibiza.com/en/suites",
  "https://7pines-ibiza.com/en/dining",
  "https://7pines-ibiza.com/en/gallery"],
 "the-standard-ibiza":[
  "https://www.standardhotels.com/ibiza/properties/ibiza",
  "https://www.hyatt.com/the-standard/en-US/ibzsi-the-standard-ibiza/gallery",
  "https://www.hyatt.com/the-standard/en-US/ibzsi-the-standard-ibiza", 
  "https://www.hyatt.com/the-standard/en-US/ibzsi-the-standard-ibiza/rooms",
  "https://www.hyatt.com/the-standard/en-US/ibzsi-the-standard-ibiza/dining"]
}
SCENES={
 "scene-1":("Ibiza Dalt Vila Eivissa UNESCO fortified old town",("ibiza","dalt","vila")),
 "scene-2":("Ibiza Marina Botafoch yachts Talamanca",("ibiza","marina","botafoch")),
 "scene-3":("Talamanca Beach Ibiza bay",("talamanca","ibiza")),
 "scene-4":("Cala Xarraca Ibiza Sant Joan",("xarraca",)),
 "scene-5":("Es Vedra Ibiza sunset sea cliffs",("vedra",)),
 "scene-6":("Cala Codolar Ibiza beach",("codolar",)),
 "scene-7":("Cala Comte Ibiza turquoise sea beach",("comte","ibiza")),
 "scene-8":("Ses Salines Ibiza nature beach dunes",("salines","ibiza")),
 "scene-9":("Sant Joan de Labritja Ibiza town church",("sant joan","ibiza"))
}
# Candidate source URLs can be added only when their named property/place identity is checked.
EXACT_HOTEL={
 "six-senses-ibiza/view-1":[
  ("https://media.sixsenses.com/B60H3R33/at/3mr4fqhv5t73vwbk3mtf53/Swimming_Pool_aerial.jpg?fit=crop&height=1100&width=1750",
   "https://www.sixsenses.com/en/hotels-resorts/europe/spain/ibiza/gallery/",
   "Official Six Senses Ibiza gallery, aerial view of the resort pool and cliffside Cala Xarraca setting")],
 "six-senses-ibiza/view-2":[
  ("https://media.sixsenses.com/B60H3R33/at/4n5vtj254bw57skgsxwt46m/6_Five_Bedroom_Mansion_master_bedroom_sunset_view.jpg?fit=crop&height=1100&width=1750",
   "https://www.sixsenses.com/en/hotels-resorts/europe/spain/ibiza/gallery/",
   "Actual bedroom in Five Bedroom Mansion at Six Senses Ibiza, dusk sea-view; do not call it a standard guestroom")],
 "six-senses-ibiza/view-3":[
  ("https://media.sixsenses.com/B60H3R33/at/bkq623mr7bmwbwtwb87vx3x/Swimming_Pool_aerial.jpg?fit=crop&height=1100&width=1750",
   "https://www.sixsenses.com/en/hotels-resorts/europe/spain/ibiza/gallery/",
   "Different official aerial photo of Six Senses Ibiza swimming pool and sea cliff terraces")],
 "the-standard-ibiza/view-1":[
  ("https://duvx7h32ggrur.cloudfront.net/attachments/47aba2f118b88a9763eca8afcc54d533a924092b/store/optimize_v1/1600/85/jpeg/7082549f233a26443d1930495de8998d4cea865361708c53ca5f04ff4ff2/the-standard-ibiza-hotel-my-ibiza-13-1-.jpg",
   "https://www.standardhotels.com/ibiza/properties/ibiza",
   "Official The Standard Ibiza rooftop/venue photograph, Eivissa Old Town property rather than the beach")],
 "the-standard-ibiza/view-2":[
  ("https://duvx7h32ggrur.cloudfront.net/attachments/d3e4291a7b006283f44866547a8982dd9596f33c/store/optimize_v1/1600/85/jpeg/953984affafd6475d1a655ea807c34621c0f9f4f068518397c6a4a97896b/220426_majao_rooms_webres-64.jpg",
   "https://www.standardhotels.com/ibiza/properties/ibiza",
   "Official The Standard Ibiza Standard King room with bed, accurately named accommodation type")],
 "the-standard-ibiza/view-3":[
  ("https://duvx7h32ggrur.cloudfront.net/attachments/874efd8f5723101de7026fc9748c6db9e3fb5cda/store/optimize_v1/1600/85/jpeg/50516d61bc24e186638733ec5a7e92dfa15110b93d59cec808bb7b533ec0/jara-restaurant-interior-the-standard-ibiza-old-town.jpg",
   "https://www.standardhotels.com/ibiza/properties/ibiza",
   "Authentic Jara restaurant interior at The Standard Ibiza, not a room or private beach")]
}
# Exact verified place identity; Commons originals built from canonical filename,
# attribution/licence remain to be read from individual Commons source before QA.
EXACT_SCENE={
 "scene-1":[("COMMONS:Eivissa - Dalt Vila from Airplane.jpg","https://commons.wikimedia.org/wiki/File:Eivissa_-_Dalt_Vila_from_Airplane.jpg","Dalt Vila and cathedral photographed from a plane, 2024 by UnFUG-Fabi")],
 "scene-2":[("COMMONS:Ibiza Port.jpg","https://commons.wikimedia.org/wiki/File:Ibiza_Port.jpg","Ibiza city marina port panorama from shore, 2022 by Josi; not a claim of an exact Botafoch quay")],
 "scene-3":[("COMMONS:Platja de Talamanca - Playa de Talamanca.jpg","https://commons.wikimedia.org/wiki/File:Platja_de_Talamanca_-_Playa_de_Talamanca.jpg","True Talamanca Beach bay, Ibiza, not a resort pool")],
 "scene-5":[("COMMONS:Es Vedrà from a cave, Ibiza.jpg","https://commons.wikimedia.org/wiki/File:Es_Vedrà_from_a_cave,_Ibiza.jpg","Es Vedra from coast cave, CC0, 2023 by Gerda Arendt")],
 "scene-6":[("COMMONS:Balearen, Ibiza-Westküste, Wanderung Cala Codola geologische Verwerfungen - panoramio.jpg","https://commons.wikimedia.org/wiki/File:Balearen,_Ibiza-Westküste,_Wanderung_Cala_Codola_geologische_Verwerfungen_-_panoramio.jpg","West Ibiza coastline near Cala Codolar, geology and coves, NOT necessarily the beach itself")],
 "scene-7":[("COMMONS:Cala Conta Ibiza 17 May 2011 (2).JPG","https://commons.wikimedia.org/wiki/File:Cala_Conta_Ibiza_17_May_2011_(2).JPG","Cala Conta actual beach turquoise water, photographer Stavros1, CC BY 3.0")],
 "scene-8":[("COMMONS:Ibiza Ses Salines asv2023-04 img1.jpg","https://commons.wikimedia.org/wiki/File:Ibiza_Ses_Salines_asv2023-04_img1.jpg","Ses Salines saltpans, A.Savin, Free Art License; require FAL compliance")],
 "scene-9":[("COMMONS:Parish Church Sant Joan de Labritja 31 May 2012.JPG","https://commons.wikimedia.org/wiki/File:Parish_Church_Sant_Joan_de_Labritja_31_May_2012.JPG","Sant Joan de Labritja town historic church (not Cala Xarraca)")]
}
diagnostics=[]
def fetch(url,params=None):
 try:
  r=S.get(url,params=params,timeout=17)
  r.raise_for_status()
  return r
 except requests.RequestException as ex:
  diagnostics.append({"url":url[:180],"error":str(ex)[:160]})
  return None
def site_images(page):
 r=fetch(page)
 if not r or "html" not in r.headers.get("content-type","").lower():return []
 soup=BeautifulSoup(r.text,"html.parser")
 sources=[]
 for tag in soup.select("meta[property='og:image'],meta[name='twitter:image'],meta[itemprop='image'],img,source,picture"):
  detail=" ".join(str(tag.get(k) or "") for k in ("alt","title","data-caption","aria-label","data-alt"))
  for attr in ("content","src","data-src","data-original","data-lazy-src","srcset","data-srcset","data-image"):
   raw=tag.get(attr)
   if not raw:continue
   for val in str(raw).split(","):
    path=val.strip().split(" ")[0]
    if not path or path.startswith("data:"):continue
    url=urljoin(page,path)
    if not url.startswith("https://") or any(w in url.lower() for w in (".svg",".gif","pixel","favicon","tiny","logo","icon","placeholder","tracking")):continue
    score=15 if tag.name=="meta" else 5
    if any(w in (detail+" "+url).lower() for w in ("hotel","ibiza","suite","guest","pool","restaurant","resort","talamanca","xarraca","nobu","pines","standard","room","terrace")):score+=8
    sources.append((score,url,page,detail or "Photo present on official property page","Hotel website; photographer to be checked","Commercial reuse rights not independently reviewed"))
 # Extract image URLs from inline HTML JSON. These are not guaranteed hotel photos; QA remains mandatory.
 for match in re.findall(r"""(?:https?:)?//[^\s"'\\<>]{25,320}\.(?:jpg|jpeg|png|webp)(?:\?[^\s"'\\<>]{0,90})?""",r.text,re.I)[:80]:
  url="https:"+match if match.startswith("//") else match
  if "logo" not in url.lower() and "icon" not in url.lower():
   sources.append((2,url,page,"Embedded image candidate from official property webpage","Hotel website; photographer to be checked","Commercial reuse rights not independently reviewed"))
 seen=set();out=[]
 for x in sorted(sources,key=lambda x:-x[0]):
  can=x[1].split("?")[0]
  if can in seen:continue
  seen.add(can);out.append(x)
 return out[:110]
def commons(query,tokens):
 r=fetch("https://commons.wikimedia.org/w/api.php",params={
  "action":"query","generator":"search","gsrsearch":query,"gsrnamespace":6,"gsrlimit":45,
  "prop":"imageinfo","iiprop":"url|extmetadata","iiurlwidth":1750,"format":"json"})
 if not r:return []
 try:pages=r.json()["query"]["pages"].values()
 except (KeyError,ValueError,TypeError):return []
 out=[]
 for page in pages:
  title=page.get("title","")
  if not title.lower().endswith((".jpg",".jpeg",".png",".webp",".tif",".tiff")):continue
  if any(x in title.lower() for x in ("drawing","old postcard","painting","watercolor","map","diagram","logo","ticket","poster","banner")):continue
  lower=title.lower()
  if not any(t in lower for t in tokens):continue
  info=(page.get("imageinfo") or [{}])[0];url=info.get("thumburl") or info.get("url")
  if not url or not url.startswith("https://"):continue
  meta=info.get("extmetadata") or {}
  artist=BeautifulSoup(meta.get("Artist",{}).get("value",""),"html.parser").get_text(" ",strip=True)[:150]
  lic=meta.get("LicenseShortName",{}).get("value","Licence must be checked")
  source="https://commons.wikimedia.org/wiki/"+title.replace(" ","_")
  out.append((27+sum(x in lower for x in tokens)*5,url,source,title,(artist or "Commons contributor")+" · "+lic,lic))
 return sorted(out,key=lambda x:-x[0])
def commons_original(filename):
 from urllib.parse import quote
 normalized=filename.replace(" ","_")
 digest=hashlib.md5(normalized.encode("utf-8")).hexdigest()
 return "https://upload.wikimedia.org/wikipedia/commons/"+digest[0]+"/"+digest[:2]+"/"+quote(normalized,safe="()")
def dhash(im):
 pix=list(im.convert("L").resize((9,8),Image.Resampling.LANCZOS).getdata())
 return "".join("1" if pix[y*9+x]>pix[y*9+x+1] else "0" for y in range(8) for x in range(8))
def capture(row,options,used_urls,used_sha,used_dhash):
 if row.get("localPath"):return False
 for score,url,page,ctx,author,lic in sorted(options,key=lambda x:-x[0])[:85]:
  canonical=url.split("?")[0]
  if canonical in used_urls:continue
  response=fetch(url)
  if not response or len(response.content)>18_000_000:continue
  try:
   with Image.open(io.BytesIO(response.content)) as origin:
    im=ImageOps.exif_transpose(origin).convert("RGB")
    dims=list(im.size)
    if im.width<1050 or im.height<560 or not 1.08<im.width/im.height<3.5:continue
    im.thumbnail((1800,1200),Image.Resampling.LANCZOS)
    perceptual=dhash(im)
    if any(sum(a!=b for a,b in zip(perceptual,h))<7 for h in used_dhash):continue
    b=io.BytesIO();im.save(b,"WEBP",quality=85,method=5);data=b.getvalue()
  except (OSError,ValueError):continue
  sha=hashlib.sha256(data).hexdigest()
  if len(data)<26000 or sha in used_sha:continue
  folder=row.get("propertyKey") or "destination"
  path=OUT/folder/(row["key"]+".webp");path.parent.mkdir(parents=True,exist_ok=True);path.write_bytes(data)
  row.update({"status":"candidate_needs_visual_review","visuallyVerified":False,"commercialRightsCleared":False,
   "visualQaWarning":"Downloaded source candidate only: real hotel/scene, premium visual, commercial licence and attribution must be checked.",
   "localPath":"/"+str(path).removeprefix("public/"),"sourcePage":page,"downloadUrl":url,
   "candidateContext":ctx[:280],"credit":author[:220],"license":lic[:120],
   "sha256":sha,"dhash":perceptual,"bytes":len(data),"originalSize":dims,"outputSize":list(im.size)})
  used_urls.add(canonical);used_sha.add(sha);used_dhash.append(perceptual)
  print("IBIZA_SAVED",folder,row["key"],page,flush=True);return True
 print("IBIZA_MISSING",row.get("propertyKey") or "destination",row["key"],flush=True);return False
def main():
 m=json.loads(DOC.read_text(encoding="utf8"));all_rows=m["hotels"]+m["destinationScenes"]
 urls={x["downloadUrl"].split("?")[0] for x in all_rows if x.get("downloadUrl")}
 shas={x["sha256"] for x in all_rows if x.get("sha256")}
 hashes=[x["dhash"] for x in all_rows if x.get("dhash")]
 cache={}
 for row in m["hotels"]:
  if row.get("localPath"):continue
  key=row["propertyKey"]
  if key not in cache:
   found=[]
   for page in HOTELS[key]:found.extend(site_images(page))
   cache[key]=found
   print("IBIZA_SITE",key,len(found),flush=True)
  linked=[(240,url,page,ctx,"Named hotel gallery; original photographer/source: "+page,"Commercial licence requires verified operator/photographer rights") for url,page,ctx in EXACT_HOTEL.get(key+"/"+row["key"],[])]
  capture(row,linked+cache[key],urls,shas,hashes)
 for row in m["destinationScenes"]:
  if row.get("localPath"):continue
  query,tokens=SCENES[row["key"]]
  linked=[(180,commons_original(url.split(":",1)[1]) if url.startswith("COMMONS:") else url,
    page,ctx,"Geolocated Wikimedia source: "+page,"Creative Commons licence: check file and attribution")
    for url,page,ctx in EXACT_SCENE.get(row["key"],[])]
  capture(row,linked+commons(query,tokens),urls,shas,hashes)
 m["downloadedHotelCandidates"]=sum(bool(x.get("localPath")) for x in m["hotels"])
 m["downloadedDestinationCandidates"]=sum(bool(x.get("localPath")) for x in m["destinationScenes"])
 m["visuallyVerified"]=False;m["approvedForCommercialPublication"]=False
 DOC.write_text(json.dumps(m,ensure_ascii=False,indent=2)+"\n",encoding="utf8")
 REPORT.parent.mkdir(parents=True,exist_ok=True)
 REPORT.write_text(json.dumps({"hotels":m["downloadedHotelCandidates"],
  "scenes":m["downloadedDestinationCandidates"],
  "missing":[(x.get("propertyKey") or "destination")+"/"+x["key"] for x in all_rows if not x.get("localPath")],
  "diagnostics":diagnostics[:85]},ensure_ascii=False,indent=2)+"\n",encoding="utf8")
 print("IBIZA_PHOTOS",m["downloadedHotelCandidates"],"/12 and",m["downloadedDestinationCandidates"],"/9. NONE APPROVED",flush=True)
if __name__=="__main__":main()
