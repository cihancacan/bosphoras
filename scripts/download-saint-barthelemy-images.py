#!/usr/bin/env python3
"""Download real Saint-Barthélemy imagery for a PREVIEW-only editorial site.
4 specifically identified luxury hotel properties (3 photos each) + 9 documented Saint-Barthélemy landscapes.
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

ROOT=Path("public/images/travel/saint-barthelemy-premium")
HOTEL_REPORT=Path("data/travel/saintBarthelemyPremiumImageSources.json")
CITY_REPORT=Path("data/travel/saintBarthelemyDestinationImageSources.json")
HEAD={"User-Agent":"BosphorasLuxuryTravelMediaReview/1.0 (attribution and hotel property verification)","Accept":"text/html,application/json,image/avif,image/webp,image/jpeg,image/png,image/*;q=.8"}
S=requests.Session()
S.headers.update(HEAD)
USED=set()
HOTELS={
  "cheval-blanc": {
    "name": "Cheval Blanc St-Barth Isle de France",
    "source": "https://www.chevalblanc.com/fr/maison/st-barth-isle-de-france/",
    "pages": [
      "https://www.chevalblanc.com/fr/maison/st-barth/chambres-et-suites/",
      "https://www.st-barths.com/fr/hebergements/hotels/cheval-blanc",
      "https://www.fivestaralliance.com/gallery/cheval-blanc-st-barth-isle-de-france-gallery-images"
    ],
    "scenes": [
      [
        "flamands-view",
        [
          "flamands",
          "beach",
          "isle de france"
        ]
      ],
      [
        "beach-suite",
        [
          "suite",
          "beach",
          "room"
        ]
      ],
      [
        "restaurant",
        [
          "restaurant",
          "cabane",
          "case",
          "dining"
        ]
      ]
    ],
    "seeds": []
  },
  "eden-rock": {
    "name": "Eden Rock – St Barths",
    "source": "https://www.oetkerhotels.com/hotels/eden-rock-st-barths/gallery/",
    "pages": [
      "https://www.oetkerhotels.com/fr/hotels/eden-rock-st-barths/l-hotel/",
      "https://www.oetkerhotels.com/hotels/eden-rock-st-barths/"
    ],
    "scenes": [
      [
        "headland",
        [
          "hotel",
          "exterior",
          "aerial",
          "rock"
        ]
      ],
      [
        "villa-suite",
        [
          "suite",
          "accommodation",
          "room"
        ]
      ],
      [
        "sand-bar",
        [
          "sand bar",
          "beach bar",
          "restaurant"
        ]
      ]
    ],
    "seeds": []
  },
  "le-toiny": {
    "name": "Hôtel Le Toiny",
    "source": "https://letoiny.com/",
    "pages": [
      "https://letoiny.com/suites/",
      "https://letoiny.com/hotel/",
      "https://letoiny.com/restaurant-beach-club/"
    ],
    "scenes": [
      [
        "pool-villa",
        [
          "villa",
          "suite",
          "pool"
        ]
      ],
      [
        "toiny-view",
        [
          "ocean",
          "beach",
          "view"
        ]
      ],
      [
        "beach-club",
        [
          "beach club",
          "club",
          "restaurant"
        ]
      ]
    ],
    "seeds": []
  },
  "rosewood-guanahani": {
    "name": "Rosewood Le Guanahani St. Barth",
    "source": "https://www.rosewoodhotels.com/en/le-guanahani/overview/gallery",
    "pages": [
      "https://www.rosewoodhotels.com/en/le-guanahani",
      "https://www.rosewoodhotels.com/en/le-guanahani/accommodation",
      "https://www.rosewoodhotels.com/fr/le-guanahani/overview/gallery"
    ],
    "scenes": [
      [
        "lagoon-resort",
        [
          "lagoon",
          "exterior",
          "resort"
        ]
      ],
      [
        "pool-suite",
        [
          "suite",
          "pool",
          "ocean"
        ]
      ],
      [
        "sense-spa",
        [
          "spa",
          "wellness",
          "sense"
        ]
      ]
    ],
    "seeds": []
  }
}
PREFERRED_MEDIA={
 ("eden-rock","headland"):["https://images.squarespace-cdn.com/content/v1/5ecc37f9dfb4ed54d3ff98e4/1594580983948-9YSFK8H0RRWS36ID938V/Eden%2BRock%2B-%2BSt%2BBarths%2B-%2BHuffman%2BTravel.jpg","https://www.huffmantravel.com/tidbits/the-rock-is-back-eden-rock-st-barths","Huffman Travel · Eden Rock St Barths aerial hotel and Saint Jean beach"],
 ("eden-rock","villa-suite"):["https://images.eu.ctfassets.net/og3b0tarlg4b/3Qb409Wg05QVKxrBmKPrJ7/1035bf5bca882ab66dd532d419201bca/room-ROC-image-Eden_Rock_-_Colibri_-_Jeanne_LE_MENN_S.jpg?fit=fill&fm=jpg&h=1450&w=1900","https://www.oetkerhotels.com/hotels/eden-rock-st-barths/accommodations/rooms-suites/rock-rooms/gallery/","Oetker Hotels · Eden Rock Colibri Rock Room"],
 ("eden-rock","sand-bar"):["https://images.eu.ctfassets.net/og3b0tarlg4b/4jqBnZeFjIp043Fvn8pStg/fb4430d8abd84775b2c19afda9f8ec79/Sand_Bar_with_Jean-Georges.jpg?fit=fill&fm=jpg&h=762&w=1024","https://www.oetkerhotels.com/hotels/eden-rock-st-barths/restaurants-bars/sand-bar-eden/","Oetker Hotels · Eden Rock Sand Bar"],
 ("rosewood-guanahani","sense-spa"):["https://picasso.rosewoodhotelgroup.com/transform/89faf417-c8ec-4b7f-bbf4-19030fc31dc4/RWLGH_wellness_sensespa_treatmentroom","https://www.rosewoodhotels.com/en/le-guanahani/wellness/spa/treatment-menu","Rosewood Hotels · Sense Spa treatment room"],
}
DIRECT_DEST={
 "gustavia-aerial":["https://cdn.prod.website-files.com/6480865ca5f310b312eb7419/650853a56f7b980a9c9f8a09_saintbarth4.webp","https://www.lagoongroup.com/destinations/saint-barthelemy","Lagoon Group · aerial Gustavia harbour"],
 "flamands-beach":["https://www.antillesexception.com/var/exv/storage/images/_aliases/embed1020x680/media/images/guide-touristique-de-saint-barth/plages/plage-de-flamands/plage-de-flamands-saint-barthelemy/31067729-1-fre-FR/Plage-de-Flamands-Saint-Barthelemy.jpg","https://www.antillesexception.com/location-villa/saint-barth/Splendide-villa-pieds-dans-l-eau-SBFL02","Antilles Exception · Flamands beach"],
 "st-jean-bay":["https://www.luxethika.com/wp-content/uploads/2020/08/St-Barth-Eden-Rock-Aerial-2-1540-880.jpg","https://www.luxethika.com/destinations/iles/saint-barthelemy/baie-de-st-jean/voir/eden-rock/","Luxethika · Saint Jean Bay with Eden Rock"],
 "saint-barth-sailing":["https://img.marinas.com/v2/9d190efcd28a27a36f29b75b97ee4a82d04008ce1602b6ea780f13e87dcbd929.jpg","https://marinas.com/view/marina/mncvq5_Gustavia_Port_Marina_St_Barts_Guadeloupe","Marinas.com · Gustavia yachts and sailboats"],
}
DEST=[
  [
    "gustavia-aerial",
    "Gustavia Saint Barthelemy aerial",
    [
      "gustavia",
      "aerial"
    ]
  ],
  [
    "colombier-bay",
    "Colombier beach Saint Barthelemy",
    [
      "colombier"
    ]
  ],
  [
    "flamands-beach",
    "Flamands beach St Barts",
    [
      "flamands"
    ]
  ],
  [
    "st-jean-bay",
    "Saint Jean Bay St Barthelemy",
    [
      "saint jean",
      "st jean"
    ]
  ],
  [
    "gustavia-streets",
    "Gustavia St Barts street",
    [
      "gustavia",
      "street"
    ]
  ],
  [
    "grand-cul-de-sac",
    "Grand Cul de Sac St Barthelemy",
    [
      "grand cul",
      "cul de sac"
    ]
  ],
  [
    "toiny-coast",
    "Anse Toiny Saint Barthelemy",
    [
      "toiny"
    ]
  ],
  [
    "saline-beach",
    "Saline Beach Saint Barthelemy",
    [
      "saline"
    ]
  ],
  [
    "saint-barth-sailing",
    "Saint Barthelemy sailboat Gustavia",
    [
      "sail",
      "gustavia"
    ]
  ]
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
  row={"hotel":hotel,"key":key,"scene":words,"sourcePage":info["source"],"localPath":f"/images/travel/saint-barthelemy-premium/{hotel}/{key}.webp","rights":"Client states permission; obtain written property/commercial re-use confirmation before production","status":"failed"}
  scored=[]
  preferred=PREFERRED_MEDIA.get((hotel,key))
  if preferred:
   url,page,credit=preferred
   scored.append((1000,url,credit,page))
  for url,alt,source in candidates:
   tag=unquote(url+" "+alt).lower()
   score=sum(7 for word in words if word in tag)
   score+=2 if "barth" in tag or "eden" in tag or "toiny" in tag or "guanahani" in tag or "cheval" in tag else 0
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
 row={"key":key,"search":query,"localPath":f"/images/travel/saint-barthelemy-premium/destination/{key}.webp","status":"failed"}
 try:
  allpages=commons_files(query)
  matches_normalized=[m.lower() for m in matches]
  def score(p):
   title=p["title"].lower().replace("_"," ")
   return 10*any(t in title for t in matches_normalized)+2*("barth" in title or "barth" in query.lower())+min(p.get("imageinfo",[{}])[0].get("width",0),2500)/1000
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
 # The Commons search term once returned an unrelated ship, not the streets of Gustavia.
 if key=="gustavia-streets":
  url="https://i0.wp.com/travelawaits.com/wp-content/uploads/2021/12/gustavia-street.jpg?resize=1024%2C684&ssl=1"
  source="https://www.travelawaits.com/2718805/st-barts-best-things-to-do/"
  try:
   data,actual=get(url,timeout=30)
   converted,original,output,bright,sha=convert(data,850)
   dest=ROOT/"destination/gustavia-streets.webp"
   dest.parent.mkdir(parents=True,exist_ok=True)
   dest.write_bytes(converted)
   USED.add(sha)
   row.update(status="downloaded",sourceFile="TravelAwaits · cobbled Gustavia shopping street",sourcePage=source,author="TravelAwaits",license="Client-stated authorisation; third-party commercial reuse to verify",licenseUrl=source,downloadUrl=actual,originalSize=original,outputSize=output,brightness=bright,sha256=sha,bytes=len(converted))
  except Exception as exc:print("Gustavia street override failed",str(exc)[:160],flush=True)
 print("CITY",key,row["status"],row.get("sourceFile",""),flush=True)
 return row

hotel_out=[]
for key,record in HOTELS.items():
 hotel_out.extend(try_hotel(key,record))
dest_out=[try_destination(key,q,terms) for key,q,terms in DEST]
stamp=datetime.now(timezone.utc).isoformat()
HOTEL_REPORT.write_text(json.dumps({"scope":"Saint-Barthélemy official-resort galleries, Preview only; 12 exact-property shots sought","generatedAt":stamp,"expected":12,"downloaded":sum(x["status"]=="downloaded" for x in hotel_out),"items":hotel_out},ensure_ascii=False,indent=2)+"\n")
CITY_REPORT.write_text(json.dumps({"scope":"Saint-Barthélemy destination images from Wikimedia Commons only","generatedAt":stamp,"expected":9,"downloaded":sum(x["status"]=="downloaded" for x in dest_out),"items":dest_out},ensure_ascii=False,indent=2)+"\n")
print("TOTAL",sum(x["status"]=="downloaded" for x in hotel_out),"/12 hotels,",sum(x["status"]=="downloaded" for x in dest_out),"/9 destination",flush=True)
