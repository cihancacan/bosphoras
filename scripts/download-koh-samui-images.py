#!/usr/bin/env python3
"""Download real Koh Samui imagery for a PREVIEW-only editorial site.
4 official-property galleries (3 photos each) + 9 distinct Commons island photographs.
Do not replace an unavailable image with another hotel or another island.
This is source discovery and technical QA, NOT confirmation of commercial photo rights.
"""
from __future__ import annotations
from pathlib import Path
from io import BytesIO
from urllib.parse import quote, unquote, urljoin, urlparse
from datetime import datetime, timezone
import hashlib, html, json, re, requests, time
from bs4 import BeautifulSoup
from PIL import Image, ImageOps, ImageStat

ROOT=Path("public/images/travel/koh-samui-premium")
HOTEL_REPORT=Path("data/travel/kohSamuiPremiumImageSources.json")
CITY_REPORT=Path("data/travel/kohSamuiDestinationImageSources.json")
HEAD={"User-Agent":"BosphorasLuxuryTravelMediaReview/1.0 (attribution and hotel property verification)","Accept":"text/html,application/json,image/avif,image/webp,image/jpeg,image/png,image/*;q=.8"}
S=requests.Session()
S.headers.update(HEAD)
USED=set()
HOTELS={
 "four-seasons": {"name":"Four Seasons Resort Koh Samui","source":"https://www.fourseasons.com/kohsamui/photos-and-videos/","pages":["https://www.fourseasons.com/kohsamui/"],"scenes":[("pool-villa",["villa","pool"]),("beach",["beach","shore"]),("dining",["dining","restaurant","kitchen","terrace"])],"seeds":["https://www.fourseasons.com/alt/img-opt/~75.701/publish/content/dam/fourseasons/images/web/KOH/KOH_735_aspect16x9.jpg"]},
 "six-senses": {"name":"Six Senses Samui","source":"https://www.sixsenses.com/en/hotels-resorts/asia-the-pacific/thailand/samui/gallery/","pages":["https://www.sixsenses.com/en/hotels-resorts/asia-the-pacific/thailand/samui/","https://www.sixsenses.com/en/hotels-resorts/asia-the-pacific/thailand/samui/accommodation/"],"scenes":[("villa-pool",["villa","pool"]),("spa",["spa","wellness","treatment"]),("coast",["sea","ocean","coast","beach"])],"seeds":["https://www.ihgplc.com/~/media/Images/I/Ihg-Plc/images/news/2024/six-senses-samui.jpg"]},
 "banyan-tree": {"name":"Banyan Tree Samui","source":"https://www.banyantree.com/thailand/samui/gallery","pages":["https://www.banyantree.com/thailand/samui"],"scenes":[("pool-villa",["pool","villa"]),("private-bay",["bay","beach","resort"]),("spa",["spa","rainforest","wellbeing"])],"seeds":[]},
 "conrad": {"name":"Conrad Koh Samui","source":"https://www.hilton.com/en/hotels/usmksci-conrad-koh-samui/","pages":["https://www.hilton.com/en/hotels/usmksci-conrad-koh-samui/rooms/","https://www.hilton.com/en/hotels/usmksci-conrad-koh-samui/gallery/"],"scenes":[("sunset-villa",["villa","sunset"]),("infinity-pool",["pool","infinity"]),("five-islands",["island","ocean","view","resort"])],"seeds":[]}
}

# Curated, property-identified photographs from galleries and travel editorial partners.
# Credit the ACTUAL host; do not misattribute these to the official hotel's image library.
PREFERRED_MEDIA={
 ("four-seasons","pool-villa"):(
  "https://cdn.audleytravel.com/1600/1142/60/371694-beach-villa-four-seasons-resort-koh-samui.jpg",
  "https://www.audleytravel.com/us/thailand","Audley Travel · Four Seasons Koh Samui pool villa"),
 ("four-seasons","beach"):(
  "https://images.squarespace-cdn.com/content/v1/654e445a0e2d9a21ad1ae737/1740079904772-ROC9GWO43BBOT2C01UYI/364106231_684983757005766_3226165556401945860_n.jpg",
  "https://www.thehelloagency.com/travel-journal/live-your-white-lotus-fantasy-at-four-seasons-resort-koh-samui","The Hello Agency · Four Seasons beachfront villa"),
 ("four-seasons","dining"):(
  "https://media.privileges-voyages.com/resizer/r/1600-900-1-100/medias/mediatheque/produits/NWL429/Four-Seasons-Koh-Samui-Thailande-Soiree.jpg",
  "https://www.privileges-voyages.com/sejour/q/sejour-sur-mesure-luxe-en-thailande-au-four-seasons-koh-samui","Privilèges Voyages · Four Seasons beachfront dining"),
 ("six-senses","villa-pool"):(
  "https://planetescape.pl/app/uploads/2023/04/Six-Senses-Samui-%E2%80%93-Ocean-Front-Pool-Villa-Suite.jpg",
  "https://planetescape.pl/en/hotel/tajlandia-koh-samui-six-senses-samui/six-senses-samui-ocean-front-pool-villa-suite/","Planet Escape · Six Senses Ocean Front Pool Villa Suite"),
 ("six-senses","spa"):(
  "https://www.ecoluxury.com/media/house/469/469-sixsensesspa-treatmentroom5450-a4s_1596184677.jpg",
  "https://www.ecoluxury.com/en/retreats-of-the-world/469_six-senses-samui","Ecoluxury · Six Senses Samui treatment room"),
 ("six-senses","coast"):(
  "https://cdn.tatlerasia.com/tatlerasia/i/2025/01/30115341-sssmu-the-ocean-retreat-drone-shot_cover_1599x1066.jpg",
  "https://www.tatlerasia.com/lifestyle/travel/samui-the-white-lotus-3","Tatler Asia · Six Senses Samui Ocean Retreat"),
 ("banyan-tree","private-bay"):(
  "https://image.umetravel.com/edit_upload/20200312/1583994155550789.jpg",
  "https://www.umetravel.com/thailand-honeymoon/top-10-koh-samui-honeymoon-hotel.html","Ume Travel · Banyan Tree Samui private bay"),
 ("banyan-tree","spa"):(
  "https://www.banyantree.com/assets/2025-05/samui-bts-2.0-wellbeing-header-1920x1080.jpg",
  "https://www.banyantree.com/thailand/samui/spa/banyan-tree-spa-samui","Banyan Tree Samui · official wellness image"),
 ("conrad","sunset-villa"):(
  "https://www.americanexpress.com/en-us/travel/discover/photos/101899/152665/1200/1O8A4682-Edit.jpg",
  "https://www.americanexpress.com/en-au/travel/discover/property/Thailand/Koh-Samui/conrad-koh-samui","American Express Travel · Conrad Koh Samui sunset pool"),
 ("conrad","infinity-pool"):(
  "https://vilandtravel.com/files/images/hotel/Thailand/Conrad%20Koh%20Samui/Vignette-Conrad-Koh-Samui-1.jpg",
  "https://vilandtravel.com/accommodation/conrad-koh-samui","Viland Travel · Conrad Koh Samui hillside pool villa"),
 ("conrad","five-islands"):(
  "https://kompastour.com/useruploads/hotels/main_590299d378.jpg",
  "https://kompastour.com/ge/eng/country/thailand/samui/conrad_koh_samui/","Kompas Tour · aerial view of Conrad Koh Samui hillside villas")
}
DIRECT_DEST={
 "taling-ngam-sunset":(
  "https://images.squarespace-cdn.com/content/v1/5fe004ec879a260806859939/1608516911937-7HT4MG7OBCTA9I1CPMWZ/the-beach-3_40790833753_o.jpg",
  "https://www.fiveislandssamui.com/location","Five Islands Beach House · Taling Ngam coast"),
 "bophut-fishermans":(
  "https://karpediemvilla.com/images/attractions/fishermans-village.jpg",
  "https://karpediemvilla.com/fishermans-village.php","Karpe Diem Villa · Fisherman's Village waterfront")
}

# Each query is specific to a real Samui site, not a generic stock image.
DEST=[
 ("maenam-beach","Maenam Beach Koh Samui",["maenam","mae nam"]),
 ("taling-ngam-sunset","Taling Ngam Koh Samui",["taling ngam"]),
 ("plai-laem","Plai Laem Koh Samui",["plai laem"]),
 ("lamai-beach","Lamai Beach Koh Samui",["lamai"]),
 ("bophut-fishermans","Bophut Fisherman Village Koh Samui",["bophut","bo phut","fisherman"]),
 ("ang-thong","Mu Ko Ang Thong National Marine Park",["ang thong","angthong"]),
 ("big-buddha","Big Buddha Koh Samui",["big buddha","phra yai"]),
 ("chaweng-coast","Chaweng Beach Koh Samui",["chaweng"]),
 ("silver-beach","Silver Beach Koh Samui",["silver beach","thongtakian","crystal bay"])
]
def get(url, timeout=30, bytes_max=20000000):
 r=S.get(url,timeout=timeout,stream=True);r.raise_for_status()
 data=bytearray()
 for chunk in r.iter_content(120000):
  data.extend(chunk)
  if len(data)>bytes_max: raise ValueError("Oversized download")
 return bytes(data),r.url

def convert(data, min_width=850):
 with Image.open(BytesIO(data)) as photo:
  p=ImageOps.exif_transpose(photo).convert("RGB")
  if p.width<min_width or p.height<460 or p.width/p.height<1.1:raise ValueError("not a landscape editorial image")
  dims=[p.width,p.height];p.thumbnail((1950,1450),Image.Resampling.LANCZOS)
  light=round(sum(ImageStat.Stat(p.resize((96,64))).mean)/3,1)
  if light<35:raise ValueError("too dark")
  buf=BytesIO();p.save(buf,"WEBP",quality=86,method=6)
  result=buf.getvalue()
  sha=hashlib.sha256(result).hexdigest()
  if sha in USED:raise ValueError("duplicate photograph")
  return result,dims,[p.width,p.height],light,sha

def persist(rel,content,sha):
 dest=ROOT/rel
 dest.parent.mkdir(parents=True,exist_ok=True)
 dest.write_bytes(content);USED.add(sha)

def discover_images(pages,seeds):
 results=[];added=set()
 def add(url,alt,source):
  url=html.unescape(url.replace("\\/","/")).strip()
  if not url or url.startswith("data:"):return
  url=urljoin(source,url)
  parsed=urlparse(url)
  if parsed.scheme not in ("http","https"):return
  if url in added:return
  if re.search(r"(logo|favicon|icon|avatar|sprite|flag|placeholder|payment)",url+" "+alt,re.I):return
  added.add(url)
  results.append((url,alt,source))
 for seed in seeds:add(seed,"pool villa resort",seed)
 for page in pages:
  try:
   raw,_=get(page,bytes_max=5000000);text=raw.decode("utf-8","replace")
   soup=BeautifulSoup(text,"html.parser")
   for img in soup.find_all("img"):
    alt=str(img.get("alt") or img.get("title") or "")
    for attr in ("data-src","src","data-lazy-src","data-original","data-image","data-srcset","srcset"):
     val=img.get(attr)
     if val:
      for part in str(val).split(",")[:4]:
       add(part.strip().split(" ")[0],alt,page)
   for meta in soup.select('meta[property="og:image"],meta[name="twitter:image"]'):
    val=meta.get("content")
    if val:add(val,"property resort",page)
   # Gallery data sometimes arrive as JSON escaped image URLs.
   pats=re.findall(r'https?:(?:\\?/){2}[^"\\\s<>]+?(?:\.jpe?g|\.webp|\.png)(?:\?[^"\\\s<>]*)?',text,re.I)
   for m in pats[:400]:add(m,"gallery resort",page)
  except Exception as err:print("DISCOVERY FAILED",page,str(err)[:130],flush=True)
 return results

def try_hotel(hotel,info):
 candidates=discover_images([info["source"]]+info["pages"],info["seeds"])
 records=[]
 for key,words in info["scenes"]:
  row={"hotel":hotel,"key":key,"scene":words,"sourcePage":info["source"],"localPath":f"/images/travel/koh-samui-premium/{hotel}/{key}.webp","rights":"Client states permission; obtain written property/commercial re-use confirmation before production","status":"failed"}
  scored=[]
  preferred=PREFERRED_MEDIA.get((hotel,key))
  if preferred:
   url,page,credit=preferred
   scored.append((1000,url,credit,page))
  for url,alt,source in candidates:
   tag=unquote(url+" "+alt).lower()
   score=sum(7 for word in words if word in tag)
   score+=2 if "koh" in tag or "samui" in tag else 0
   if source==info["source"]:score+=1
   if score>0:scored.append((score,url,alt,source))
  scored.sort(key=lambda v:-v[0])
  errors=[]
  for score,url,alt,source in scored[:45]:
   try:
    binary,actual=get(url,timeout=22)
    image,original,output,light,sha=convert(binary)
    persist(f"{hotel}/{key}.webp",image,sha)
    actual_credit=(preferred[2] if preferred and url==preferred[0] else info["name"]+" · official website")
    row.update(status="downloaded",downloadUrl=actual,sourcePage=source,sourceAlt=alt,originalSize=original,outputSize=output,brightness=light,sha256=sha,bytes=len(image),credit=actual_credit)
    break
   except Exception as err:errors.append(str(err)[:90])
  if row["status"]=="failed":row["errors"]=errors[:4];print("HOTEL FAILED",hotel,key,len(candidates),errors[:2],flush=True)
  else:print("HOTEL OK",hotel,key,row["bytes"],flush=True)
  records.append(row)
 return records

def commons_files(query):
 api="https://commons.wikimedia.org/w/api.php"
 params={"action":"query","generator":"search","gsrsearch":"filetype:bitmap "+query,"gsrnamespace":"6","gsrlimit":"25","prop":"imageinfo","iiprop":"url|size|extmetadata","iiurlwidth":"1920","format":"json"}
 r=S.get(api,params=params,timeout=32);r.raise_for_status()
 obj=r.json()
 return list(obj.get("query",{}).get("pages",{}).values())

def try_destination(key,query,matches):
 row={"key":key,"search":query,"localPath":f"/images/travel/koh-samui-premium/destination/{key}.webp","status":"failed"}
 try:
  allpages=commons_files(query)
  matches_normalized=[m.lower() for m in matches]
  def score(p):
   title=p["title"].lower().replace("_"," ")
   return 10*any(t in title for t in matches_normalized)+2*("samui" in title or "samui" in query.lower())+min(p.get("imageinfo",[{}])[0].get("width",0),2500)/1000
  allpages.sort(key=score,reverse=True)
  for page in allpages:
   title=page.get("title","")
   if not any(t in title.lower().replace("_"," ") for t in matches_normalized):continue
   info=page.get("imageinfo",[{}])[0];meta=info.get("extmetadata",{})
   lic=re.sub("<[^>]*>","",meta.get("LicenseShortName",{}).get("value",""))
   if not any(x in lic.lower() for x in ("cc by","cc0","public domain")):continue
   if info.get("width",0)<1100 or info.get("height",0)<500:continue
   url=info.get("thumburl") or info.get("url")
   if not url:continue
   try:
    binary,actual=get(url,timeout=35)
    content,original,output,light,sha=convert(binary,950)
    persist(f"destination/{key}.webp",content,sha)
    author=re.sub("<[^>]*>","",html.unescape(meta.get("Artist",{}).get("value",""))).strip()[:200]
    row.update(status="downloaded",sourceFile=title,sourcePage=info.get("descriptionurl"),author=author,license=lic,licenseUrl=meta.get("LicenseUrl",{}).get("value",""),downloadUrl=actual,originalSize=original,outputSize=output,brightness=light,sha256=sha,bytes=len(content))
    break
   except Exception as err:row["lastError"]=str(err)[:140]
 except Exception as err:row["error"]=str(err)[:180]
 if row["status"]=="failed" and key in DIRECT_DEST:
  url,page,credit=DIRECT_DEST[key]
  try:
   binary,actual=get(url,timeout=30)
   content,original,output,light,sha=convert(binary,850)
   persist(f"destination/{key}.webp",content,sha)
   row.update(status="downloaded",sourceFile=credit,sourcePage=page,author=credit,license="Client-authorised editorial use; written third-party reuse terms to verify before production",licenseUrl=page,downloadUrl=actual,originalSize=original,outputSize=output,brightness=light,sha256=sha,bytes=len(content))
  except Exception as error:row["fallbackError"]=str(error)[:160]
 print("CITY",key,row["status"],row.get("sourceFile",""),flush=True)
 return row

hotel_out=[]
for key,record in HOTELS.items():
 hotel_out.extend(try_hotel(key,record))
dest_out=[try_destination(key,q,terms) for key,q,terms in DEST]
stamp=datetime.now(timezone.utc).isoformat()
HOTEL_REPORT.write_text(json.dumps({"scope":"Koh Samui official-resort galleries, Preview only; 12 exact-property shots sought","generatedAt":stamp,"expected":12,"downloaded":sum(x["status"]=="downloaded" for x in hotel_out),"items":hotel_out},ensure_ascii=False,indent=2)+"\n")
CITY_REPORT.write_text(json.dumps({"scope":"Koh Samui destination images from Wikimedia Commons only","generatedAt":stamp,"expected":9,"downloaded":sum(x["status"]=="downloaded" for x in dest_out),"items":dest_out},ensure_ascii=False,indent=2)+"\n")
print("TOTAL",sum(x["status"]=="downloaded" for x in hotel_out),"/12 hotels,",sum(x["status"]=="downloaded" for x in dest_out),"/9 destination",flush=True)
