#!/usr/bin/env python3
"""KRABI #61: reproducible source acquisition for PRIVATE review only.
Sources are explicit Wikimedia file identities or actual property publisher galleries.
Never use filename scores as visual verification; NEVER claim commercial hotel rights.
No action can approve an image for the public page automatically.
"""
import hashlib, html, io, json, pathlib, re, urllib.parse
import requests
from bs4 import BeautifulSoup
from PIL import Image, ImageOps
from concurrent.futures import ThreadPoolExecutor

ROOT = pathlib.Path("public/images/travel/krabi-premium")
MANIFEST = pathlib.Path("data/travel/krabiMediaCandidates.json")
REPORT = pathlib.Path("docs/travel-krabi-acquisition-report.json")
S = requests.Session()
S.headers.update({"User-Agent":"Bosphoras/1.0 (contact: via bosphoras.com; sourced private destination media review)"})
COMMONS = [
 ("scene-1", "Krabi, Railay West Beach (6218118271).jpg", "Railay West et ses falaises calcaires", "Railay West limestone cliffs"),
 ("scene-2", "Krabi, Phra Nang Beach (6218172753).jpg", "La plage de Phra Nang, Railay", "Phra Nang beach on Railay"),
 ("scene-3", "Tubkaek Beach SF0001.jpg", "Tubkaek Beach sur la côte de Nong Thale", "Tubkaek Beach on the Nong Thale coast"),
 ("scene-4", "Klong Muang Beach SF0005.jpg", "Klong Muang Beach, Krabi", "Klong Muang Beach, Krabi"),
 ("scene-5", "Ao Nang Krabi 2023.jpg", "Les bateaux traditionnels d'Ao Nang", "Traditional boats on Ao Nang beach"),
 ("scene-6", "Limestone karst cliff and longtail boats at Railay West Beach Krabi.jpg", "Long-tail boats et falaises de Railay West", "Long-tail boats and cliffs at Railay West"),
 ("scene-7", "1.Ko Hong Island - Andaman Sea - Krabi Province, Thailand.jpg", "Ko Hong et la mer d’Andaman", "Ko Hong in the Andaman Sea"),
 ("scene-8", "Phra Nang beach 40.jpg", "Le relief de Phra Nang Beach", "Phra Nang beach landscape"),
 ("scene-9", "Klong Muang Beach SF0004.jpg", "La côte de Klong Muang", "Klong Muang coastline"),
]
HOTELS = [
 ("rayavadee","Rayavadee", ["https://www.rayavadee.com/en/","https://www.rayavadee.com/en/gallery.php"]),
 ("phulay-bay","Phulay Bay, a Ritz-Carlton Reserve", ["https://www.ritzcarlton.com/en/hotels/kbvrz-phulay-bay-a-ritz-carlton-reserve/photos/"]),
 ("banyan-tree","Banyan Tree Krabi", ["https://www.banyantree.com/thailand/krabi/gallery"]),
 ("tubkaak","The Tubkaak Krabi Boutique Resort", ["https://www.tubkaakresort.com/gallery/"]),
]
def fetch(url, timeout=26):
 r=S.get(url,timeout=timeout);r.raise_for_status()
 if len(r.content)>14000000:raise ValueError("oversized media")
 return r
def save_photo(url, path):
 r=fetch(url)
 if 'text/html' in r.headers.get('Content-Type','').lower():raise ValueError("html returned")
 im=ImageOps.exif_transpose(Image.open(io.BytesIO(r.content))).convert("RGB")
 original=list(im.size)
 if im.width<850 or im.height<460: raise ValueError("photo too small")
 im.thumbnail((1600,1200),Image.Resampling.LANCZOS)
 pixel_hash=hashlib.sha256(im.resize((48,48),Image.Resampling.LANCZOS).tobytes()).hexdigest()
 b=io.BytesIO(); im.save(b,"WEBP",quality=83,method=5)
 data=b.getvalue()
 if len(data)<18000:raise ValueError("file too small")
 path.parent.mkdir(parents=True,exist_ok=True);path.write_bytes(data)
 return {"originalSize":original,"outputSize":list(im.size),"bytes":len(data),"sha256":hashlib.sha256(data).hexdigest(),"pixelFingerprint":pixel_hash}
def clean_html(s):
 return BeautifulSoup(html.unescape(s or ""),"html.parser").get_text(" ",strip=True)
def commons_entry(t):
 key,title,fr,en=t
 page="https://commons.wikimedia.org/wiki/File:"+urllib.parse.quote(title.replace(" ","_"),safe="(),-._")
 data=fetch("https://commons.wikimedia.org/w/api.php?"+urllib.parse.urlencode({
    "action":"query","format":"json","prop":"imageinfo","iiprop":"url|extmetadata","iiurlwidth":1600,"titles":"File:"+title
 })).json()
 pages=list(data["query"]["pages"].values())
 if not pages or not pages[0].get("imageinfo"):raise ValueError("missing Commons file: "+title)
 info=pages[0]["imageinfo"][0];meta=info.get("extmetadata",{})
 lic=clean_html(meta.get("LicenseShortName",{}).get("value",""))
 author=clean_html(meta.get("Artist",{}).get("value",""))
 if not re.match(r"^(CC BY(?:-SA)? [234]\.0|CC0|Public domain)",lic,re.I):
  raise ValueError("Unsupported licence "+title+" "+lic)
 licence_url=meta.get("LicenseUrl",{}).get("value","") or "https://creativecommons.org/licenses/"
 u=info.get("thumburl") or info["url"]
 properties=save_photo(u,ROOT/"destination"/(key+".webp"))
 return {**properties,"key":key,"localPath":"/images/travel/krabi-premium/destination/"+key+".webp",
 "sourcePage":page,"downloadUrl":u,"credit":author or "Wikimedia Commons (author absent in API)",
 "license":lic,"licenseUrl":licence_url,"rightsEvidenceType":"wikimedia_license_metadata",
 "commercialRightsCleared":True,"visuallyVerified":False,
 "status":"source_identified_pending_individual_visual_review","originalAlt":title,
 "frCaption":fr,"enCaption":en,"croppedOrResized":"Resized to maximum 1600 x 1200; converted to WebP"}
def extract_candidates(url):
 try:
  body=fetch(url).text
 except Exception as e:
  print("PAGE_FAILURE",url,str(e)[:160],flush=True);return []
 soup=BeautifulSoup(body,"html.parser")
 seen=set();found=[]
 def add(raw,alt):
  if not raw or raw.startswith("data:"):return
  if raw.startswith("//"):raw="https:"+raw
  uri=urllib.parse.urljoin(url,html.unescape(raw).replace("\\u002F","/"))
  uri=uri.replace("&amp;","&")
  p=urllib.parse.urlsplit(uri)
  if p.scheme!="https" or not re.search(r"\.(jpe?g|webp|png)(?:$|[?&#])",uri,re.I):return
  domain=p.netloc.lower()
  ok=("rayavadee" in domain or "ritzcarlton" in domain or "marriott" in domain or "banyantree" in domain
      or "tubkaak" in domain or domain in ("images.unsplash.com","cf.bstatic.com"))
  # Never accept hotel photos from a generic booking/stock CDN.
  if not ok or domain in ("images.unsplash.com","cf.bstatic.com"):return
  if uri in seen:return
  seen.add(uri);found.append((uri,alt))
 for node in soup.find_all(["img","source"]):
  alt=node.get("alt") or node.get("title") or ""
  for a in ("data-src","data-original","data-lazy-src","src","data-bg","srcset","data-srcset"):
   v=node.get(a)
   if not v:continue
   if "srcset" in a:
    variants=[x.strip().split()[0] for x in str(v).split(",") if x.strip()]
    if variants:add(variants[-1],alt)
   else:add(v,alt)
 for meta in soup.select('meta[property="og:image"],meta[name="twitter:image"]'): add(meta.get("content"),"hotel official gallery hero")
 for hit in re.findall(r'https?://[^"\s<>]+?\.(?:jpg|jpeg|webp|png)(?:\?[^"\s<>]*)?',body,re.I)[:180]:
  add(hit.replace("\\/","/"),"publisher embedded image")
 print("PAGE",url,"CANDIDATES",len(found),flush=True)
 return [(u,a,url) for u,a in found]
def score(entry):
 url,alt,source=entry
 txt=(url+" "+alt).lower()
 if any(b in txt for b in ("logo","favicon","icon","social","badge","avatar","svg","advert","map","wedding","people","banner-mobile","placeholder")):return -500
 v=5
 for word,points in (("pool",6),("villa",7),("suite",7),("pavilion",7),("resort",6),("beach",6),("hotel",4),
 ("spa",5),("restaurant",4),("lobby",4),("exterior",5),("view",3),("rayavadee",3),("krabi",3)):
  if word in txt:v+=points
 if re.search(r"w=([1-9]\d{2,})",txt):v+=1
 return v
def hotel_entries(group):
 slug,name,pages=group
 candidates=[]
 if slug=="rayavadee":
  # Exact image URLs reviewed at the actual Rayavadee publisher pages, not logos or PDF diagrams.
  candidates=[
   ("https://rayavadee.com/en/images/accommodation/pool-pavillion/pic1.jpg","Pool Pavilion outdoor architecture with private pool","https://www.rayavadee.com/en/room-pool-pavillion.php"),
   ("https://www.rayavadee.com/en/images/accommodation/terrace-pavillion/pic4.jpg","Terrace Pavilion bedroom interior","https://www.rayavadee.com/en/room-terrace-pavillion.php"),
   ("https://www.rayavadee.com/zh/images/accommodation/spa-pavillion/pic2.jpg","Spa Pavilion room interior","https://www.rayavadee.com/zh/room-spa-pavillion.php")
  ]
 else:
  for page in pages:candidates.extend(extract_candidates(page))
 seen=set();unique=[];errors=[]
 for url,alt,source in sorted(candidates,key=score,reverse=True):
  if score((url,alt,source))<3 or url in seen:continue
  seen.add(url)
  if len(unique)>=3:break
  key="view-"+str(len(unique)+1)
  file=ROOT/slug/(key+".webp")
  try:
   props=save_photo(url,file)
   if props["pixelFingerprint"] in {x["pixelFingerprint"] for x in unique}:
    file.unlink(missing_ok=True);continue
   unique.append({**props,"key":key,"propertyKey":slug,"property":name,
     "localPath":"/images/travel/krabi-premium/"+slug+"/"+key+".webp",
     "sourcePage":source,"downloadUrl":url,
     "credit":name+" official photo publisher; photographer not identified",
     "license":"Official publisher photo. Commercial republication rights NOT independently cleared.",
     "licenseUrl":source,"rightsEvidenceType":"hotel_official_publisher_not_licensed",
     "commercialRightsCleared":False,"visuallyVerified":False,
     "status":"source_identified_pending_individual_visual_review",
     "originalAlt":alt,
     "frCaption":name+" · photographie officielle à examiner",
     "enCaption":name+" · official publisher photograph pending individual review"})
   print("SAVED",slug,key,props["bytes"],alt[:70],flush=True)
  except Exception as e:errors.append(str(e)[:130])
 return unique,{"property":name,"found":len(candidates),"downloaded":len(unique),"errors":errors[:6]}
def make_contact_sheet(items):
 """Private-research overview; it is NOT a human visual approval."""
 from PIL import ImageDraw
 cols=3;cell_w=400;cell_h=285;rows=(len(items)+cols-1)//cols
 if not rows:return
 out=Image.new("RGB",(cols*cell_w,rows*cell_h),(247,245,240))
 draw=ImageDraw.Draw(out)
 for idx,p in enumerate(items):
  f=pathlib.Path("public"+p["localPath"])
  if not f.exists():continue
  frame=Image.open(f).convert("RGB");frame.thumbnail((384,230),Image.Resampling.LANCZOS)
  x=(idx%cols)*cell_w+8;y=(idx//cols)*cell_h+4
  out.paste(frame,(x,y))
  draw.text((x,y+234),str(idx+1)+" "+p.get("property", "Krabi")+" | "+p.get("key",""),fill=(30,35,35))
  draw.text((x,y+251),p.get("sourcePage","")[:45],fill=(80,90,90))
 target=pathlib.Path("docs/travel-krabi-contact-sheet.jpg")
 out.save(target,"JPEG",quality=79)

def main():
 scene=[];errors=[]
 for row in COMMONS:
  try:
   photo=commons_entry(row)
   if photo["pixelFingerprint"] in {x["pixelFingerprint"] for x in scene}:raise ValueError("duplicate pixels")
   scene.append(photo);print("COMMONS",photo["key"],photo["credit"][:60],flush=True)
  except Exception as e:errors.append({"image":row[0],"error":str(e)[:240]});print("COMMONS_ERROR",row[0],str(e)[:200],flush=True)
 hotels=[];results=[]
 for h in HOTELS:
  pics,report=hotel_entries(h)
  hotels.extend(pics);results.append(report)
 candidates=scene+hotels
 make_contact_sheet(candidates)
 manifest={"destination":"krabi","scope":"protected_private_review_only","rightsNotice":"Official hotel images have no commercial publication licence. Wikimedia reuse must retain author/licence/attribution and any share-alike obligations.",
  "cityCount":len(scene),"hotelCount":len(hotels),"destinationScenes":scene,"hotels":hotels,
  "visualQA":"PENDING_MANUAL_REVIEW_NO_IMAGES_APPROVED"}
 MANIFEST.parent.mkdir(parents=True,exist_ok=True)
 MANIFEST.write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
 REPORT.parent.mkdir(parents=True,exist_ok=True)
 REPORT.write_text(json.dumps({"sceneFound":len(scene),"hotelsFound":len(hotels),"expected":[9,12],"hotelReports":results,"errors":errors,"allImagesVisuallyApproved":False,"publicUseApproved":False},ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
 print("KRABI_MEDIA_RESULT",len(scene),len(hotels),"of expected 9+12",flush=True)
 if len(scene)<9 or len(hotels)<12:print("INCOMPLETE_CANDIDATES: destination is not ready for registration",flush=True)
if __name__=="__main__":main()
