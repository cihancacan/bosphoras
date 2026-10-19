#!/usr/bin/env python3
"""Copy ONLY three manually reviewed Mont Cervin Palace original-PDF hotel photos.

Validated visually on 19 Oct 2026. NEVER publish or index the guide as a whole.
No network access needed: images already stored in the branch by research workflow.
"""
from pathlib import Path
from shutil import copyfile
import hashlib
import json

MANIFEST=Path("data/travel/zermattMediaCandidates.json")
FOLDER=Path("public/images/travel/zermatt-premium")
SOURCE="https://www.montcervinpalace.ch/wp-content/uploads/mice-brochure-en-fr.pdf"
SELECTION={
 "view-1":("mcp-brochure-p02-im0128.webp",2,128,
           "Mont Cervin Palace — véritable façade du palace au cœur de Zermatt, en été",
           "Mont Cervin Palace — actual historic palace facade in Zermatt in summer"),
 "view-2":("mcp-brochure-p07-im0010.webp",7,10,
           "Mont Cervin Palace — chambre lumineuse avec grand lit et salon attenant",
           "Mont Cervin Palace — light-filled bedroom with king bed and adjoining lounge"),
 "view-3":("mcp-brochure-p06-im0222.webp",6,222,
           "Mont Cervin Palace — piscine intérieure, charpente vitrée et grandes baies",
           "Mont Cervin Palace — indoor swimming pool with glass-and-timber roof")
}
m=json.loads(MANIFEST.read_text(encoding="utf8"))
for slot,(name,page,xref,fr,en) in SELECTION.items():
 src=FOLDER/"mont-cervin-research"/name
 dest=FOLDER/"mont-cervin-palace"/(slot+".webp")
 assert src.exists() and src.stat().st_size>20_000, "Unverified hotel PDF source missing "+str(src)
 dest.parent.mkdir(parents=True,exist_ok=True)
 copyfile(src,dest)
 data=dest.read_bytes()
 item=next(x for x in m["hotels"] if x.get("propertyKey")=="mont-cervin-palace" and x["key"]==slot)
 if item.get("status")=="candidate_needs_visual_review" and item.get("downloadUrl"):
  item["replacedSource"]=item["downloadUrl"]
 item.update({
  "status":"candidate_needs_visual_review",
  "localPath":"/"+dest.as_posix().removeprefix("public/"),
  "sourcePage":SOURCE,
  "downloadUrl":SOURCE+"#page="+str(page)+"&xref="+str(xref),
  "sourceAssetPdfUrl":SOURCE,
  "sourcePdfPage":page,"sourcePdfXref":xref,
  "sourcePhotograph":"official Mont Cervin Palace hotel brochure; original photographer not identified in embedded image",
  "sourceResearchFile":"/"+src.as_posix().removeprefix("public/"),
  "bytes":len(data),"sha256":hashlib.sha256(data).hexdigest(),
  "credit":"Mont Cervin Palace · brochure photographique officielle, page "+str(page),
  "frCaption":fr,"enCaption":en,
  "ownerRightsAuthorization":"Bosphoras operator confirmed usage rights on 2026-10-19",
  "visualReviewedAt":"2026-10-19",
  "visualReviewBasis":"Original unretouched PDF WebP photo visually inspected one-by-one. Distinct real facade, hotel room and indoor spa.",
  "commercialRightsCleared":True,"visuallyVerified":True,
  "candidateContext":"Mont Cervin Palace genuine hotel photograph; reviewed"
 })
 item.pop("visualQaWarning",None)
 print("MONT_CERVIN_APPROVED",slot,src,dest,flush=True)
m["downloadedHotelCandidates"]=sum(x["status"]=="candidate_needs_visual_review" for x in m["hotels"])
m["downloadedDestinationCandidates"]=sum(x["status"]=="candidate_needs_visual_review" for x in m["destinationScenes"])
m["visuallyVerified"]=False
m["approvedForCommercialPublication"]=False
MANIFEST.write_text(json.dumps(m,ensure_ascii=False,indent=2)+"\n",encoding="utf8")
print("MONT_CERVIN_PHOTO_QA_APPROVED",len(SELECTION),"not production approved")
