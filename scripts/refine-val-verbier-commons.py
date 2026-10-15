#!/usr/bin/env python3
"""Improve Val d'Isere/Verbier photo source completeness with exact Commons files.
DO NOT claim that a successful Wikimedia fetch verifies scene identity, season,
picture aesthetics or commercial reuse of third-party trademarks.
"""
from __future__ import annotations
import hashlib,html,json,re,runpy,time
from pathlib import Path
from urllib.parse import quote
import requests
m=runpy.run_path("scripts/collect-final-two-travel-photos.py")
S=m["S"];picture=m["picture"]
TYPES={"val-disere":"valDisere","verbier":"verbier"}
D={slug:json.loads(Path("data/travel/"+key+"MediaCandidates.json").read_text(encoding="utf8")) for slug,key in TYPES.items()}
MAP={
"val-disere":{
 "scene-1":["Val-dIsere-église-chemin-du-Charvet.JPG"],
 "scene-2":["Solaise à Val-d'Isère depuis Barrage de Tignes (février 2026).JPG"],
 "scene-4":["Funival @ La Daille 01.jpg"],
 "scene-6":["Maisons Le Fornet Val d'Isère.jpg"],
 "scene-9":["Isère au Fornet à Val-d'Isère en été (juillet 2022).JPG"]
},
"verbier":{
 "scene-7":["Verbier Mont Fort - panoramio.jpg"],
 "scene-8":["Le Châble depuis Verbier.jpg"],
 "scene-3":["Verbier.jpg"],
 "scene-1":["Télécabines Verbier Dec 2021.jpg"]
}}
def exact(title):
 for attempt in range(4):
  try:
   response=S.get("https://commons.wikimedia.org/w/api.php",params={
    "action":"query","titles":"File:"+title,"prop":"imageinfo",
    "iiprop":"url|extmetadata","iiurlwidth":"1700","format":"json"},timeout=27)
   if response.status_code==429:
    print("RATE_LIMIT",title,flush=True);time.sleep(5*(attempt+1));continue
   response.raise_for_status()
   for page in response.json().get("query",{}).get("pages",{}).values():
    if "missing" in page:continue
    info=(page.get("imageinfo") or [{}])[0];extras=info.get("extmetadata") or {}
    lic=(extras.get("LicenseShortName") or {}).get("value","")
    if not re.search(r"CC BY|CC0|Public domain|PD-",lic,re.I):return None
    raw=(extras.get("Artist") or {}).get("value","")
    credit=html.unescape(re.sub("<[^>]+>"," ",raw)).strip()
    return dict(url=info.get("thumburl") or info.get("url"),
     sourcePage="https://commons.wikimedia.org/wiki/File:"+title.replace(" ","_"),
     context="File:"+title,credit=credit,license=lic,
     licenseUrl=(extras.get("LicenseUrl") or {}).get("value",""))
  except (requests.RequestException,ValueError) as e:print("SOURCE_UNAVAILABLE",title,str(e)[:90],flush=True)
 return None
def push(slug,slot,asset):
 target=next((x for x in D[slug]["destinationScenes"] if x["key"]==slot),None)
 if not target or target["status"]!="missing" or not asset.get("url"):return False
 p=picture(asset["url"])
 if p is None:return False
 binary,orig,outsize=p
 path="/images/travel/"+slug+"-premium/destination/"+slot+".webp"
 f=Path("public"+path)
 f.parent.mkdir(parents=True,exist_ok=True);f.write_bytes(binary)
 target.update({"status":"candidate_needs_visual_review","localPath":path,
   "sourcePage":asset["sourcePage"],"downloadUrl":asset["url"],
   "candidateContext":asset["context"],"credit":asset["credit"],
   "license":asset["license"],"licenseUrl":asset["licenseUrl"],
   "sha256":hashlib.sha256(binary).hexdigest(),"bytes":len(binary),
   "originalSize":orig,"outputSize":outsize,
   "rights":"Commons file: source and licence retained, derivative WebP and CC attribution/share-alike obligations still require review.",
   "visualQaWarning":"Scene identity and season supported by filename, but still needs independent visual/legal/commercial review.",
   "visuallyVerified":False,"commercialRightsCleared":False})
 if slug=="val-disere" and slot=="scene-6":
  target["visualQaWarning"]="Actual Le Fornet hamlet photographed in September 2016; NOT a winter photograph, cannot be captioned 'Le Fornet winter'. Change season or replace."
 if slug=="verbier" and slot in ("scene-1","scene-3"):
  target["visualQaWarning"]="Commons title does not establish which exact Verbier sector is pictured; detailed visual+map check required before caption."
 print("ADDED",slug,slot,asset["context"],flush=True)
 return True
for slug,slots in MAP.items():
 for slot,titles in slots.items():
  for title in titles:
   asset=exact(title)
   if asset and push(slug,slot,asset):break
  time.sleep(2)
for slug,key in TYPES.items():
 j=D[slug]
 j["downloadedHotelCandidates"]=sum(x["status"]=="candidate_needs_visual_review" for x in j["hotels"])
 j["downloadedDestinationCandidates"]=sum(x["status"]=="candidate_needs_visual_review" for x in j["destinationScenes"])
 j["visuallyVerified"]=False;j["approvedForCommercialPublication"]=False
 Path("data/travel/"+key+"MediaCandidates.json").write_text(json.dumps(j,ensure_ascii=False,indent=2)+"\n",encoding="utf8")
 print("RESULT",slug,j["downloadedHotelCandidates"],"/12 hotels",j["downloadedDestinationCandidates"],"/9 geography candidates; QA BLOCKED",flush=True)
