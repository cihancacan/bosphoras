#!/usr/bin/env python3
"""Replace ONLY scene-4 after human visual comparison of nine exact Commons images.
Never change other approved photos, hotel rights, routes, or Vercel deployments.
"""
import hashlib, html, io, json, pathlib, urllib.parse
import requests
from bs4 import BeautifulSoup
from PIL import Image, ImageOps

ROOT=pathlib.Path(".")
manifest_path=ROOT/"data/travel/krabiMediaCandidates.json"
manifest=json.loads(manifest_path.read_text())
scene=next(p for p in manifest["destinationScenes"] if p["key"]=="scene-4")
assert scene["visuallyVerified"] is False and scene["commercialRightsCleared"] is True
candidates=json.loads((ROOT/"docs/travel-krabi-klong-muang-research.json").read_text())
target="Beach at Koh Kwang (4464119684).jpg"
row=next(p for p in candidates if p["name"]==target)
assert row["license"]=="CC BY-SA 2.0" and "commons.wikimedia.org" in row["sourcePage"]
assert scene["localPath"]=="/images/travel/krabi-premium/destination/scene-4.webp"
s=requests.Session()
s.headers.update({"User-Agent":"Bosphoras private licensed landscape visual review"})
metadata=s.get("https://commons.wikimedia.org/w/api.php",params={
 "action":"query","format":"json","prop":"imageinfo","iiprop":"url|extmetadata",
 "titles":"File:"+target
},timeout=25).json()
info=list(metadata["query"]["pages"].values())[0]["imageinfo"][0]
meta=info["extmetadata"]
lic=BeautifulSoup(meta["LicenseShortName"]["value"],"html.parser").get_text(" ",strip=True)
credit=BeautifulSoup(meta["Artist"]["value"],"html.parser").get_text(" ",strip=True)
assert lic=="CC BY-SA 2.0" and "Caitriana Nicholson" in credit, (lic,credit)
license_url=meta["LicenseUrl"]["value"]
assert license_url.startswith("https://creativecommons.org/licenses/by-sa/2.0")
r=s.get(row["downloadUrl"],timeout=30);r.raise_for_status()
image=ImageOps.exif_transpose(Image.open(io.BytesIO(r.content))).convert("RGB")
original=list(image.size)
assert image.width>=850 and image.height>=460
image.thumbnail((1600,1200),Image.Resampling.LANCZOS)
pixel=hashlib.sha256(image.resize((48,48),Image.Resampling.LANCZOS).tobytes()).hexdigest()
data=io.BytesIO();image.save(data,"WEBP",quality=83,method=5)
out=data.getvalue();assert len(out)>18000
assert pixel not in {p["pixelFingerprint"] for p in manifest["destinationScenes"]+manifest["hotels"] if p["key"]!="scene-4"}
file=ROOT/("public"+scene["localPath"])
file.parent.mkdir(parents=True,exist_ok=True);file.write_bytes(out)
scene.update({
 "originalSize":original,"outputSize":list(image.size),"bytes":len(out),
 "sha256":hashlib.sha256(out).hexdigest(),"pixelFingerprint":pixel,
 "sourcePage":row["sourcePage"],"downloadUrl":row["downloadUrl"],"credit":credit,
 "license":lic,"licenseUrl":license_url,"rightsEvidenceType":"wikimedia_license_metadata",
 "commercialRightsCleared":True,"visuallyVerified":True,
 "status":"source_identified_private_preview","originalAlt":target,
 "frCaption":"Koh Kwang · palmiers et côte de Klong Muang face à la mer d’Andaman",
 "enCaption":"Koh Kwang · palms on Klong Muang's Andaman coastline",
 "croppedOrResized":"Resized to maximum 1600 x 1200 and converted to WebP",
 "visualReviewNote":"Retenue après comparaison visuelle manuelle de neuf photos Klong Muang : palmiers et mer identifiables ; CC BY-SA 2.0, auteur crédité, WebP redimensionnée"
})
manifest["visualQA"]="INTERNAL_21_OF_21_PHOTO_REVIEW_PASSED_NOT_PUBLIC_LICENSED"
manifest["internalReviewedPhotoCount"]=21
manifest["publicUseApproved"]=False
assert sum(p["visuallyVerified"] for p in manifest["destinationScenes"]+manifest["hotels"])==21
manifest_path.write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
report_path=ROOT/"docs/travel-krabi-acquisition-report.json"
report=json.loads(report_path.read_text())
report.update({"allImagesVisuallyApproved":True,"independentCommercialHotelPhotoRights":False,
               "publicUseApproved":False,"finalPhotoReview":"21/21 source and visual QA; official hotel source photos remain limited to protected preview"})
report_path.write_text(json.dumps(report,ensure_ascii=False,indent=2)+"\n")
print("KRABI_KLONG_MUANG_APPROVED: licensed CC BY-SA 2.0 photo, complete 21/21 internal media; commercial hotel rights still pending.")
