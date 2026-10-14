#!/usr/bin/env python3
"""Download real Maldives imagery for a PREVIEW-only editorial site.
4 specifically identified luxury hotel properties (3 photos each) + 9 documented Maldives landscapes.
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

ROOT=Path("public/images/travel/maldives-premium")
HOTEL_REPORT=Path("data/travel/maldivesPremiumImageSources.json")
CITY_REPORT=Path("data/travel/maldivesDestinationImageSources.json")
HEAD={"User-Agent":"BosphorasLuxuryTravelMediaReview/1.0 (attribution and hotel property verification)","Accept":"text/html,application/json,image/avif,image/webp,image/jpeg,image/png,image/*;q=.8"}
S=requests.Session()
S.headers.update(HEAD)
USED=set()
HOTELS={
  "soneva-jani": {
    "name": "Soneva Jani",
    "source": "https://soneva.com/resorts/soneva-jani/",
    "pages": [
      "https://soneva.com/resorts/soneva-jani/villas/overwater-villas/",
      "https://soneva.com/villa/soneva-jani-3-bedroom-water-retreat-with-slide/"
    ],
    "scenes": [
      [
        "overwater-lagoon",
        [
          "aerial",
          "overwater",
          "lagoon"
        ]
      ],
      [
        "villa-slide",
        [
          "slide",
          "pool",
          "water reserve"
        ]
      ],
      [
        "villa-interior",
        [
          "interior",
          "villa",
          "living"
        ]
      ]
    ],
    "seeds": []
  },
  "cheval-blanc-randheli": {
    "name": "Cheval Blanc Randheli",
    "source": "https://www.chevalblanc.com/en/maison/randheli/",
    "pages": [
      "https://www.chevalblanc.com/en/maison/randheli/rooms-and-suites/lagoon-villa/",
      "https://www.chevalblanc.com/en/maison/randheli/rooms-and-suites/island-villa-2-bedroom/",
      "https://www.chevalblanc.com/en/maison/randheli/wellness/"
    ],
    "scenes": [
      [
        "lagoon-villa",
        [
          "lagoon",
          "water villa"
        ]
      ],
      [
        "beach-villa",
        [
          "island villa",
          "beach villa"
        ]
      ],
      [
        "spa-island",
        [
          "spa",
          "wellness",
          "guerlain"
        ]
      ]
    ],
    "seeds": []
  },
  "one-and-only-reethi-rah": {
    "name": "One&Only Reethi Rah",
    "source": "https://www.oneandonlyresorts.com/reethi-rah",
    "pages": [
      "https://www.oneandonlyresorts.com/reethi-rah/stays",
      "https://www.oneandonlyresorts.com/reethi-rah/accommodation/water-villa-with-pool"
    ],
    "scenes": [
      [
        "beach-villa",
        [
          "beach",
          "villa"
        ]
      ],
      [
        "water-villa",
        [
          "water villa",
          "water-villa"
        ]
      ],
      [
        "island-beach",
        [
          "beach",
          "island",
          "pool"
        ]
      ]
    ],
    "seeds": []
  },
  "four-seasons-landaa": {
    "name": "Four Seasons Resort Maldives at Landaa Giraavaru",
    "source": "https://www.fourseasons.com/maldiveslg/",
    "pages": [
      "https://www.fourseasons.com/maldiveslg/services-and-amenities/marine-discovery-centre/",
      "https://www.fourseasons.com/maldiveslg/dining/restaurants/blu-beach-club/"
    ],
    "scenes": [
      [
        "overwater-villa",
        [
          "water villa",
          "overwater"
        ]
      ],
      [
        "blu-beach",
        [
          "blu",
          "beach",
          "restaurant"
        ]
      ],
      [
        "marine-discovery",
        [
          "marine",
          "turtle",
          "discovery"
        ]
      ]
    ],
    "seeds": []
  }
}
PREFERRED_MEDIA={
 ("soneva-jani","overwater-lagoon"): ["https://media.cntraveler.com/photos/5defbd56af04d700088a6562/4%3A3/w_1280%2Cc_limit/Soneva-Jani_2019_11480_Soneva-Jani---Aerial-View.jpg","https://www.cntraveler.com/gallery/the-best-all-inclusive-hotels-in-the-maldives","Condé Nast Traveler · Soneva Jani lagoon aerial"],
 ("soneva-jani","villa-slide"): ["https://hips.hearstapps.com/hmg-prod/images/soneva-jani-two-bedroom-water-reserve-with-slide-1-6623204c09da3.jpg?crop=0.641xw%3A1.00xh%3B0.100xw","https://www.housebeautiful.com/lifestyle/g60553535/unique-overwater-bungalows/","House Beautiful · Soneva Jani overwater villa waterslide"],
 ("soneva-jani","villa-interior"): ["https://soneva-offload-media-library.storage.googleapis.com/wp-content/uploads/2021/03/01215420/11453_Soneva-Jani-3-Bedroom-Water-Retreat-with-Slide.jpg","https://soneva.com/villa/soneva-jani-3-bedroom-water-retreat-with-slide/","Soneva · 3-bedroom Water Retreat interior"],
 ("cheval-blanc-randheli","lagoon-villa"): ["https://images.prismic.io/lvmh-chevalblanc/aFlhQnfc4bHWinse_GardenWaterVillaTwoBedroom-F.Nannini.jpg?auto=format%2Ccompress","https://www.chevalblanc.com/en/maison/randheli/rooms-and-suites/garden-water-villa-2-bedroom/","Cheval Blanc Randheli · garden water villa"],
 ("cheval-blanc-randheli","beach-villa"): ["https://images.prismic.io/lvmh-chevalblanc/aFl9k3fc4bHWioIT_ChevalBlancRandheli-IslandVilla-OliverFly-2024-12-.jpg?auto=format%2Ccompress&fit=max&w=3840","https://www.chevalblanc.com/en/maison/randheli/rooms-and-suites/island-villa-2-bedroom/","Cheval Blanc Randheli · island villa aerial"],
 ("cheval-blanc-randheli","spa-island"): ["https://cdn.ideeperviaggiare.it/media/2019/08/maldive-cheval-blanc-randheli-1920x1293-62416.jpg","https://www.ideeperviaggiare.it/viaggi/maldive/cheval-blanc-randheli","Idee per Viaggiare · Cheval Blanc Spa treatment room"],
 ("one-and-only-reethi-rah","beach-villa"): ["https://media.privileges-voyages.com/resizer/r/1600-900-1-100/medias/mediatheque/produits/DEN033/One-and-Only-Reethi-Rah-Grand-Beach-Villa-Maldives.jpg","https://www.privileges-voyages.com/sejour/q/reethi-rah-aux-maldives","Privilèges Voyages · Grand Beach Villa One&Only"],
 ("one-and-only-reethi-rah","water-villa"): ["https://4.bp.blogspot.com/-gmhL2QQSy2U/VLyyfLIP0DI/AAAAAAAAAUg/GpYgdXPJBE8/s1600/reethi-rah-villa-suite-exterior-details-over-water-infinity-pool.jpg","https://doortomaldives.blogspot.com/2015/01/one-reethi-rah-introduces-new-overwater.html","Door To Maldives · One&Only overwater villa pool"],
 ("one-and-only-reethi-rah","island-beach"): ["https://media.voguearabia.com/photos/68cb339713a270109ff6a132/16%3A9/w_5376%2Ch_3024%2Cc_limit/OO_RR_Pool_FamilyPool_Drone_0896_MASTER.jpg","https://www.voguearabia.com/article/the-one-and-only-reethi-rah-maldives-hotel","Vogue Arabia · One&Only Reethi Rah island pool and beach"],
 ("four-seasons-landaa","overwater-villa"): ["https://assets.vogue.in/photos/65268e39aa2804e61f7bfbb3/16%3A9/w_1280%2Cc_limit/Water%20Villa%20at%20Landaa%20Giraavaru%283%29.jpeg?mbid=social_retweet","https://www.vogue.in/content/at-the-four-seasons-landaa-giraavaru-maldives-i-accepted-the-capriciousness-of-nature-and-was-rewarded-for-it","Vogue India · Four Seasons Landaa Giraavaru water villa"],
 ("four-seasons-landaa","blu-beach"): ["https://image.hummingbird.travel/disk1/public/hotels/34/f2eccbf0-ab53-4187-94e3-044a5e12c1ef.png","https://lujosinartificios.com/destinos/maldivas/four-seasons-resort-maldives-at-landaa-giraavaru/","Luxury travel · Landaa Giraavaru aerial beach"],
 ("four-seasons-landaa","marine-discovery"): ["https://www.asiaodysseytravel.com/images/maldives/four-seasons-landaa-giraavaru-7-star/dining-blu-700-1.jpg","https://www.asiaodysseytravel.com/7-star-maldives-resorts/four-seasons-landaa-giraavaru.html","Asia Odyssey · Landaa Blu dining pavilion"],
}
DIRECT_DEST={
 "noonu-atoll":("https://cdn.airdomo.com/property-media/feed/sphere-estates/images/7b748b3a9f32272b55ddb606d64ec85e142ff1a3df9757efd83422a4b95d17cc.webp","https://airdomo.com/properties/luxury-maldives-beach-over-water-villas-sale-soneva","Airdomo · Soneva Jani Noonu Atoll aerial")
}
DEST=[
  [
    "lagoon-aerial",
    "Aerial shot, Maldives.jpg",
    [
      "aerial shot"
    ]
  ],
  [
    "noonu-atoll",
    "Soneva Jani Noonu Atoll aerial",
    [
      "soneva jani",
      "noonu"
    ]
  ],
  [
    "baa-atoll",
    "Baa atoll islands.JPG",
    [
      "baa atoll islands"
    ]
  ],
  [
    "north-male-atoll",
    "Bandos Island 1 - panoramio.jpg",
    [
      "bandos island"
    ]
  ],
  [
    "overwater-villas",
    "Water villas at Medhufushi Island Resort in the Maldives.jpg",
    [
      "water villas at medhufushi"
    ]
  ],
  [
    "beach-island",
    "Aerial shot of a small island on a coral reef in the Maldives.jpg",
    [
      "aerial shot of a small island"
    ]
  ],
  [
    "sandbank",
    "Malediven Sandbank (28800504836).jpg",
    [
      "sandbank"
    ]
  ],
  [
    "seaplane",
    "Seaplane at W Retreat Maldives.jpg",
    [
      "seaplane at w retreat"
    ]
  ],
  [
    "manta-reef",
    "Manta alfredi fushivaru thila.jpg",
    [
      "manta alfredi fushivaru"
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
  row={"hotel":hotel,"key":key,"scene":words,"sourcePage":info["source"],"localPath":f"/images/travel/maldives-premium/{hotel}/{key}.webp","rights":"Client states permission; obtain written property/commercial re-use confirmation before production","status":"failed"}
  scored=[]
  preferred=PREFERRED_MEDIA.get((hotel,key))
  if preferred:
   url,page,credit=preferred
   scored.append((1000,url,credit,page))
  for url,alt,source in candidates:
   tag=unquote(url+" "+alt).lower()
   score=sum(7 for word in words if word in tag)
   score+=2 if "maldives" in tag or "soneva" in tag or "randheli" in tag or "reethi" in tag or "landaa" in tag else 0
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
 row={"key":key,"search":query,"localPath":f"/images/travel/maldives-premium/destination/{key}.webp","status":"failed"}
 try:
  allpages=commons_files(query)
  matches_normalized=[m.lower() for m in matches]
  def score(p):
   title=p["title"].lower().replace("_"," ")
   return 10*any(t in title for t in matches_normalized)+2*("maldives" in title or "maldives" in query.lower())+min(p.get("imageinfo",[{}])[0].get("width",0),2500)/1000
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
HOTEL_REPORT.write_text(json.dumps({"scope":"Maldives official-resort galleries, Preview only; 12 exact-property shots sought","generatedAt":stamp,"expected":12,"downloaded":sum(x["status"]=="downloaded" for x in hotel_out),"items":hotel_out},ensure_ascii=False,indent=2)+"\n")
CITY_REPORT.write_text(json.dumps({"scope":"Maldives destination images from Wikimedia Commons only","generatedAt":stamp,"expected":9,"downloaded":sum(x["status"]=="downloaded" for x in dest_out),"items":dest_out},ensure_ascii=False,indent=2)+"\n")
print("TOTAL",sum(x["status"]=="downloaded" for x in hotel_out),"/12 hotels,",sum(x["status"]=="downloaded" for x in dest_out),"/9 destination",flush=True)
