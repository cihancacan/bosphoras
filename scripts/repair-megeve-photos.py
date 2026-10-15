#!/usr/bin/env python3
"""Megève candidate reconciliation: preserve exact-property assets, remove
mislabeled Zannier Le Chalet material, find authentic L'Alpaga/Four Seasons.
Reject resized source duplicates and known branding/reward graphics.
This does NOT approve rights or overall visual suitability.
"""
from __future__ import annotations
import hashlib, json, re, runpy
from io import BytesIO
from pathlib import Path
from urllib.parse import unquote, urlparse
from PIL import Image, ImageOps
m=runpy.run_path("scripts/collect-western-mountain-photos.py")
direct_assets=m["direct_assets"];picture=m["picture"];mediawiki_candidates=m["mediawiki_candidates"]
p=Path("data/travel/megeveMediaCandidates.json")
data=json.loads(p.read_text(encoding="utf8"))
properties=[
 ("four-seasons-megeve","Four Seasons Resort Megève",[
  "https://www.fourseasons.com/megeve/","https://www.fourseasons.com/fr/megeve/",
  "https://www.fourseasons.com/megeve/photos-and-videos/"]),
 ("les-fermes-de-marie","Les Fermes de Marie",[
  "https://www.fermesdemarie.com/en/hiver/hotel-megeve","https://www.fermesdemarie.com/en/"]),
 ("l-alpaga","L'Alpaga",[
  "https://alpaga.com/fr/proprietes/hotel-alpaga/chambres-suites/",
  "https://alpaga.com/fr/proprietes/hotel-alpaga/","https://alpaga.com/"]),
 ("lodge-park","Lodge Park",[
  "https://www.lodgepark.com/en/hotel-center-of-megeve","https://www.lodgepark.com/en/"])
]
existing={ (r["propertyKey"],r["key"]):r for r in data["hotels"] if r["propertyKey"]!="zannier-le-chalet" }
def canonical(url):
 path=unquote(urlparse(url or "").path).lower()
 path=re.sub(r"-p-\d+(?=\.(?:jpe?g|png|webp)$)","",path)
 path=re.sub(r"\?.*","",path)
 return path
def dhash(raw):
 with Image.open(BytesIO(raw)) as image:
  image=ImageOps.exif_transpose(image).convert("L").resize((9,8))
  a=list(image.getdata())
  return sum(1<<(i*8+j) for i in range(8) for j in range(8) if a[i*9+j]>a[i*9+j+1])
def current_image(row):
 if row.get("status")!="candidate_needs_visual_review" or not row.get("localPath"):return None
 path=Path("public"+row["localPath"])
 return path.read_bytes() if path.exists() else None
items=[];hashes=[];originals=set()
for key,name,pages in properties:
 for index in (1,2,3):
  rec=existing.get((key,"view-"+str(index)))
  if not rec:
   rec={"property":name,"propertyKey":key,"key":"view-"+str(index),"status":"missing",
        "visuallyVerified":False,"commercialRightsCleared":False,
        "rights":"Original hotel site file is not a commercial photo licence."}
  else:rec=dict(rec)
  rec.update({"property":name,"propertyKey":key,"sourcePages":pages,
              "visuallyVerified":False,"commercialRightsCleared":False})
  raw=current_image(rec)
  warn=rec.get("visualQaWarning","")
  original=canonical(rec.get("downloadUrl",""))
  if raw and not warn and original and original not in originals:
   hashval=dhash(raw)
   if any((hashval ^ h).bit_count()<11 for h in hashes):raw=None
   else:hashes.append(hashval);originals.add(original)
  else:raw=None
  if raw is None:
   rec["status"]="missing"
   for k in ["downloadUrl","sourcePage","localPath","sha256","bytes","originalSize","outputSize"]:
    rec.pop(k,None)
   rec.pop("visualQaWarning",None)
  items.append(rec)
for key,name,pages in properties:
 slots=[r for r in items if r["propertyKey"]==key and r["status"]=="missing"]
 if not slots:continue
 candidates=[]
 for page in pages:
  print("MEGEVE_OFFICIAL",key,page,flush=True)
  candidates.extend(direct_assets(page))
 candidates.sort(key=lambda x:-x["weight"])
 tried=set()
 for item in slots:
  found=False
  for src in candidates:
   url=src["url"];context=src.get("context","")
   if url in tried:continue
   tried.add(url)
   canonicalUrl=canonical(url)
   if canonicalUrl in originals:continue
   lower=(url+" "+context).lower()
   if any(bad in lower for bad in ["michelin-key","logo","award","partner","newsletter","instagram","food-logo","seo-image","tiktok","virtual-tour"]):continue
   if key=="lodge-park" and any(bad in lower for bad in ["fermes-de-marie","alpaga","brunch_lunch"]):continue
   if key=="les-fermes-de-marie" and any(bad in lower for bad in ["lodge-park","alpaga"]):continue
   if key=="l-alpaga" and any(bad in lower for bad in ["fermes-de-marie","lodge-park"]):continue
   photo=picture(url)
   if photo is None:continue
   payload,origSize,outSize=photo
   h=dhash(payload)
   if any((h ^ old).bit_count()<11 for old in hashes):continue
   location="/images/travel/megeve-premium/"+key+"/"+item["key"]+".webp"
   disk=Path("public"+location)
   disk.parent.mkdir(parents=True,exist_ok=True);disk.write_bytes(payload)
   hashes.append(h);originals.add(canonicalUrl)
   item.update({"status":"candidate_needs_visual_review","localPath":location,
     "downloadUrl":url,"sourcePage":src["sourcePage"],"candidateContext":context,
     "sha256":hashlib.sha256(payload).hexdigest(),"bytes":len(payload),
     "originalSize":origSize,"outputSize":outSize,"credit":name+" · official property source",
     "visuallyVerified":False,"commercialRightsCleared":False})
   found=True;break
  print("MEGEVE_IMAGE",name,item["key"],"CANDIDATE" if found else "MISSING",flush=True)
data["hotels"]=items
# For missing local scenery, make conservative Commons candidates; uncertain
# geographic identity gets visualQaWarning rather than pretending to be verified.
for scene in data["destinationScenes"]:
 if scene["status"]=="candidate_needs_visual_review":continue
 label=scene["placeLabel"]
 search=scene.get("searchQuery") or ("Megève "+label)
 candidates=mediawiki_candidates(search)
 if not candidates and search!=("Megève "+label):candidates=mediawiki_candidates("Megève "+label)
 for cand in candidates[:6]:
  rawtitle=cand.get("context","").lower()
  if not any(x in rawtitle for x in ["megève","megeve","mont d'arbois","rochebrune","jaillet","mont blanc"]):continue
  photo=picture(cand["url"])
  if photo is None:continue
  binary,size,output=photo
  hh=dhash(binary)
  if any((hh^old).bit_count()<10 for old in hashes):continue
  hashes.append(hh)
  location="/images/travel/megeve-premium/destination/"+scene["key"]+".webp"
  file=Path("public"+location);file.parent.mkdir(parents=True,exist_ok=True);file.write_bytes(binary)
  scene.update({"status":"candidate_needs_visual_review","localPath":location,
    "sourcePage":cand["sourcePage"],"downloadUrl":cand["url"],
    "credit":cand.get("author",""),"license":cand.get("license",""),
    "licenseUrl":cand.get("licenseUrl",""),"candidateContext":cand.get("context",""),
    "sha256":hashlib.sha256(binary).hexdigest(),"bytes":len(binary),
    "originalSize":size,"outputSize":output,
    "visualQaWarning":"Authentic Commons candidate; confirm the exact sector/geolocation manually.",
    "visuallyVerified":False,"commercialRightsCleared":False})
  break
data["downloadedHotelCandidates"]=sum(x["status"]=="candidate_needs_visual_review" for x in items)
data["downloadedDestinationCandidates"]=sum(x["status"]=="candidate_needs_visual_review" for x in data["destinationScenes"])
data["expectedHotelPhotos"]=12;data["expectedDestinationPhotos"]=9
data["visuallyVerified"]=False;data["approvedForCommercialPublication"]=False
data["publicationBlockedReason"]="Candidate matches/visual identities and rights still require independent review. Zannier excluded because featured hotel is L'Alpaga."
p.write_text(json.dumps(data,ensure_ascii=False,indent=2)+"\n",encoding="utf8")
print("MEGEVE_FINAL",data["downloadedHotelCandidates"],"/12 hotel",data["downloadedDestinationCandidates"],"/9 scenes, RIGHTS QA REQUIRED",flush=True)
