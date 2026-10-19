#!/usr/bin/env python3
"""Bosphoras Cap d'Antibes exact 21-slot hotel and destination candidate acquisition.
Download authentic image candidates only; do not approve, index or deploy.
"""
from pathlib import Path
import importlib.util
spec=importlib.util.spec_from_file_location("bosphoras_travel_photo",Path("scripts/collect-monaco-media.py"))
lib=importlib.util.module_from_spec(spec);spec.loader.exec_module(lib)
# Monaco direct media must NEVER be inherited for a different destination.
lib.HOTEL_DIRECT={}
lib.DIRECT_LANDSCAPES={}
lib.COMMONS_EXACT={}
lib.DIRECT_WIKIMEDIA={}
lib.MANIFEST=Path("data/travel/capDAntibesMediaCandidates.json")
lib.OUT=Path("public/images/travel/cap-dantibes-premium")
lib.HOTELS={
 "hotel-du-cap-eden-roc":{
  "view-1":[("https://www.oetkerhotels.com/hotels/hotel-du-cap-eden-roc/gallery/",["hotel","cap","eden","aerial","exterior","building"])],
  "view-2":[("https://www.oetkerhotels.com/hotels/hotel-du-cap-eden-roc/accommodations/rooms-suites/",["suite","room","bed","terrace","eden"])],
  "view-3":[("https://www.oetkerhotels.com/hotels/hotel-du-cap-eden-roc/gallery/",["pool","sea","rock","swim","piscine"])],
 },
 "cap-dantibes-beach-hotel":{
  "view-1":[("https://capdantibes-beachhotel.com/en",["hotel","beach","building","facade","aerial","exterior"])],
  "view-2":[("https://capdantibes-beachhotel.com/en/suite-sea-view",["suite","room","chambre","bed","terrace"])],
  "view-3":[("https://capdantibes-beachhotel.com/en",["beach","pool","swimming","baba","sea"])],
 },
 "villa-mirae":{
  "view-1":[("https://www.villamirae-capantibes.com/en/",["mirae","villa","exterior","façade","facade","building"])],
  "view-2":[("https://www.villamirae-capantibes.com/en/",["suite","bedroom","chambre","room","terrace"])],
  "view-3":[("https://www.villamirae-capantibes.com/en/",["piscine","pool","garden","jardin","terrasse"])],
 },
 "hotel-belles-rives":{
  "view-1":[("https://www.bellesrives.com/en/",["facade","hotel","rives","exterior","sea","building"])],
  "view-2":[("https://www.bellesrives.com/en/",["room","suite","chambre","living","sea"])],
  "view-3":[("https://www.bellesrives.com/en/",["terrace","pontoon","water","beach","restaurant","passagere"])],
 }
}
# Source images are candidates with explicit identity labels; not considered cleared rights.
lib.HOTEL_DIRECT={
 "hotel-du-cap-eden-roc/view-2":[(
  105,"https://teresaperezcollection.com/images/0bijhalf/production/563c06905c229003d62433e18db0ae4de34a8709-3000x1917.webp?fit=clip&fm=jpg&q=80&w=2048",
  "https://teresaperezcollection.com/hotel/hotel-du-cap-eden-roc",
  "Real Hotel du Cap-Eden-Roc suite with sea-facing balcony and turquoise drapes",
  "Teresa Perez Collection · original identified property photo"
 )],
 "cap-dantibes-beach-hotel/view-1":[(
  105,"https://static.prod.r53.tablethotels.com/media/hotels/slideshow_images_staged/large/1577140.jpg",
  "https://guide.michelin.com/ae-az/en/hotels-stays/antibes/cap-dantibes-beach-hotel-123864-14000",
  "Real aerial of Cap d'Antibes Beach Hotel architecture, own pale-pink beach furniture and shoreline",
  "MICHELIN Guide · photo attributed to exact Cap d'Antibes Beach Hotel"
 )],
 "hotel-belles-rives/view-2":[(
  104,"https://lucidcm.imgix.net/95182/Hotel/60839/Image/9PBsIXmfrkOPC69ZyhnDQ_Panoramic%20Suite%20Sea%20View%201.jpg.jpg?h=4315&w=6131",
  "https://slh.com/hotels/hotel-belles-rives",
  "Actual Belles Rives suite lounge with arched sea-view windows and Art Deco carpet",
  "Small Luxury Hotels · original Belles Rives suite"
 )]
}

# Exactly identified single-frame photos. Each is an unapproved CANDIDATE
# until inspected from real downloaded WebP (never approve via filenames).
lib.HOTEL_DIRECT["cap-dantibes-beach-hotel/view-2"]=[
 (120,"https://storage.googleapis.com/webimages-p1shrd/hotel/25890/images/room/suite00001.jpg",
 "https://www.relaischateaux.com/us/spa/summer-beach-wellness/",
 "Actual Cap d'Antibes Beach Hotel sea-view suite with bed, balcony and floor-to-ceiling windows",
 "Relais & Châteaux · Cap d'Antibes Beach Hotel suite"),
 (110,"https://www.limetravel.se/app/uploads/2018/12/cap_dantibes_beach_hotel_design_suite_with_terrace.jpg",
 "https://www.limetravel.se/destinationer/europa/frankrike/cap-dantibes-beach-hotel/",
 "Single bright actual Cap d'Antibes Beach Hotel sea-view suite with open terrace",
 "Lime Travel · documented Cap d'Antibes Beach Hotel image")
]
# 2023+ redesigned rooms only (architect Bernard Dubois), not pre-reopening shots.
lib.HOTEL_DIRECT["cap-dantibes-beach-hotel/view-2"]=[
 (160,"https://capdantibes-beachhotel.com/_next/static/media/random_1.03012bb9.jpg",
   "https://capdantibes-beachhotel.com/en/le-cap-suite",
   "Actual contemporary 2023-redesigned Le Cap Suite, bespoke pale furniture, full-width sea-view terrace",
   "Cap d'Antibes Beach Hotel · official renovated 2023+ Le Cap Suite photo"),
 (150,"https://www.bernarddubois.com/wp-content/uploads/2023/05/CABH_BD13-1920x1280.jpg",
   "https://www.bernarddubois.com/projects/beach-hotel/",
   "Renovated 2023 Cap d'Antibes Beach Hotel actual luxury room, architect Bernard Dubois",
   "Bernard Dubois Architects · post-2023 redesigned hotel photography"),
 (140,"https://storage.googleapis.com/webimages-p1shrd/hotel/25890/images/room/suite_le_cap_02.jpg",
   "https://www.relaischateaux.com/us/hotel/cap-d-antibes-beach-hotel/",
   "Current Cap d'Antibes Beach Hotel Le Cap Suite sea-facing bedroom and terrace",
   "Relais & Châteaux · contemporary Le Cap Suite photograph")
]+lib.HOTEL_DIRECT["cap-dantibes-beach-hotel/view-2"]
lib.HOTEL_DIRECT["cap-dantibes-beach-hotel/view-3"]=[
 (120,"https://en.epaillote.com/project/resources/img/fullsize/view-from-the-sky_cap-d-antibes-beach-hotel_rc_preview.jpg",
 "https://en.epaillote.com/plages-privees/france/06-alpes-maritimes/antibes-juan-les-pins/baba-cap-d-antibes-beach-hotel",
 "BABA Cap d'Antibes Beach Hotel single aerial of private beach, turquoise water and property",
 "ePaillote · documented BABA Cap d'Antibes Beach Hotel"),
 (110,"https://www.relaischateaux.com/_next/image/?q=75&url=https%3A%2F%2Fd1m7xnn75ypr6t.cloudfront.net%2Fimages%2Fmedia%2F95D5A112-E70F-4CED-810CD9DE57B24CF1%2F%3Fw%3D1200%26h%3D1920&w=2048",
 "https://www.relaischateaux.com/gb/hotel/cap-d-antibes-beach-hotel/",
 "Cap d'Antibes Beach Hotel genuine sandy waterfront beach and pool aerial",
 "Relais & Châteaux · hotel listing")
]
lib.HOTEL_DIRECT["villa-mirae/view-1"]=[
 (130,"https://d1nzrcdi1gg6zy.cloudfront.net/cache/img/villa-mirae-exterieur-249915-3840-2160-crop.jpg?q=1745501408",
 "https://www.villamirae-capantibes.com/en/",
 "Villa Miraé renovated coral-pink hotel courtyard with patio arches, white umbrellas, dining tables and fountain",
 "Villa Miraé · current official hotel photography"),
 (110,"https://www.tendancehotellerie.fr/local/cache-vignettes/L1200xH630/0b456eeb466b1da7d7e49435c38ed0-56742.jpg",
 "https://www.tendancehotellerie.fr/articles-breves/communique-de-presse/24031-article/au-printemps-l-imperial-garoupe-devient-villa-mirae-cap-d-antibes-et-annonce-une-collaboration-exclusive-avec-le-chef-mauro-colagreco",
 "Villa Miraé rebranded Mediterranean coral-pink exterior surrounded by palm trees",
 "TendanceHotellerie · named Villa Miraé press release photograph")
]
lib.LANDSCAPES={
 "scene-1":("Cap d'Antibes presqu'île aerial Hotel Eden Roc Côte d'Azur",("antibes",)),
 "scene-2":("Cap Antibes Pointe Bacon Hotel du Cap Eden Roc coastline",("antibes","eden")),
 "scene-3":("Plage de la Garoupe Antibes Côte d'Azur beach",("garoupe",)),
 "scene-4":("Sentier de Tirepoil Cap d'Antibes coastal path",("tirepoil","antibes")),
 "scene-5":("Port Gallice Cap d'Antibes marina",("gallice",)),
 "scene-6":("Port du Crouton Cap d'Antibes",("crouton",)),
 "scene-7":("Phare de la Garoupe Antibes lighthouse",("garoupe","phare")),
 "scene-8":("Villa Eilenroc Cap d'Antibes garden",("eilenroc",)),
 "scene-9":("Juan-les-Pins Cap Antibes Belles Rives seaside",("juan-les-pins","belles rives"))
}
# Real geographically identified public Commons files, no Monaco sources.
# Each image remains an unapproved source candidate until a separate visual QA.
lib.DIRECT_LANDSCAPES={
 "scene-1":lib.commons_exact("Cap d'Antibes vue aerienne.jpg"),
 "scene-2":[(100,
  "https://www.ontheluce.com/wp-content/uploads/2022/08/cap-dantibes-from-above-1440x900.jpg",
  "https://www.ontheluce.com/boats-and-beaches-what-to-see-and-do-in-antibes/",
  "True Cap d'Antibes rocky headland and natural coves, photographed from above",
  "On the Luce · exact Cap d'Antibes aerial")],
 "scene-3":lib.direct_wikimedia("Plage de la garoupe.jpg")+lib.direct_wikimedia("Plage de la garoupe 01.jpg"),
 "scene-5":[(100,
  "https://leportgallice.com/wp-content/uploads/sites/4/2020/05/port-gallice-yachting-plaisance-7.jpg",
  "https://leportgallice.com/",
  "Actual yachts in sunny Port Gallice official photo, Cap d Antibes",
  "Port Gallice · official port photograph"),
  (95,"https://interreg-marittimo.eu/documents/19950485/0/PORT%2BGALLICE.jpg/18ebafac-14b0-5729-300f-2df73aa6f220?t=1748000999077",
  "https://interreg-marittimo.eu/web/via-patrimonia-act/-/presentazione-dell-itinerario-gamificato-patrimoniale-di-antibes",
  "Port Gallice documented marina and yachts, view across the bay",
  "Interreg Maritime · confirmed Port Gallice location")],
 "scene-4":lib.commons_exact("Sentier de Tirepoil.jpg"),
 "scene-6":[(100,
  "https://static.seetheworld.com/image_uploader/photos/2c/original/port-du-crouton-antibes.jpg",
  "https://www.seeantibes.com/sea/marinas/port-du-crouton",
  "Port du Crouton real small boats and masts by Antibes west shoreline",
  "SeeAntibes · documented Port du Crouton")],
 "scene-3":[
 (120,"https://thetraveler.s3.amazonaws.com/images/hero/plage-de-la-garoupe-french-riviera-beach-day_1200x675.jpg",
 "https://www.thetraveler.org/is-plage-de-la-garoupe-worth-a-french-riviera-beach-day/",
 "Genuine Cap d'Antibes Garoupe cove with sand, umbrella pines, clear azure water and shoreline villas",
 "TheTraveler · exact Plage de la Garoupe photo"),
 (110,"https://bord-de-mer.com/wp-content/uploads/2024/07/httpslh5.googleusercontent.compAF1QipOXj0nw99PWXJwZgZR8t_MCUDvNI0NWYSY99xBNs1600.jpeg",
 "https://bord-de-mer.com/annuaire/fiche/plage-de-la-garoupe-cap-dantibes/",
 "Plage de la Garoupe actual beach, wooden jetty and turquoise cove in sunshine",
 "Bord de Mer · Google photo attributed via tourism destination page")
 ],
 "scene-7":[
 (130,"https://www.antibesjuanlespins.com/sites/antibes/files/styles/ratio_16_9_xl/public/content/images/yq4b2233.jpg?itok=3O6RgzBa",
 "https://www.antibesjuanlespins.com/en/discover/the-must-sees/the-garoupe-plateau",
 "Recognisable historic Garoupe lighthouse white tower and red lantern beside blossom and blue sky",
 "Antibes Juan-les-Pins official tourism office"),
 ]+lib.commons_exact("Le phare de la Garoupe et le Cap d'Antibes.jpg")
   +lib.commons_exact("Phare de la Garoupe, Antibes, France.jpg"),
 "scene-8":lib.commons_exact("Villa Eilenroc sud.JPG"),
 "scene-9":lib.commons_exact("JuanLesPinsDepuisLeCap.jpg")
}
lib.HOTEL_DIRECT["hotel-du-cap-eden-roc/view-1"]=lib.commons_exact("Gartenfassade Hotel Du Cap.jpg")
lib.HOTEL_DIRECT["hotel-du-cap-eden-roc/view-3"]=[
 (110,
  "https://images.eu.ctfassets.net/og3b0tarlg4b/5hOabtzktscWIpkSJnFs08/cee497d61429c1534933799fdaf64d08/HDC_-_Pool_cut.jpg?fm=jpg&w=1800",
  "https://www.oetkerhotels.com/hotels/hotel-du-cap-eden-roc/the-hotel/leisure/pool",
  "Actual Oetker Hotel du Cap-Eden-Roc iconic rock-hewn saltwater pool",
  "Oetker Hotels · official Eden-Roc pool photograph"),
 (92,
  "https://shopdarius.com/cdn/shop/files/PoolsideattheHotelduCapEdenRoc_Small_f880f774-f9e0-4421-bec2-7394a72b1d25.jpg?v=1758942289&width=1520",
  "https://shopdarius.com/products/poolside-at-the-hotel-du-cap-eden-roc-print",
  "Documented real Eden-Roc pool, source must pass separate commercial photo rights review",
  "Darius James photographer · source only, commercial permission NOT established")
]

# One file may be known with precise Commons metadata; queries are otherwise
# restricted to the actual place name and manually reviewed after download.
# Never use Monaco or Cap-Ferrat direct images for this peninsula.
_original_collect=lib.collect
TO_REPLACE={
 ("cap-dantibes-beach-hotel","view-2"),
 ("cap-dantibes-beach-hotel","view-3"),
 ("villa-mirae","view-1"),
 ("destination","scene-3"),
 ("destination","scene-7"),
}
def checked_collect(slot,candidates,sha_used,url_used,visual_used):
    rejected=slot.get("rejectedSource")
    if rejected:url_used.add(rejected.split("?")[0])
    group=slot.get("propertyKey") or "destination"
    key=(group,slot["key"])
    if key not in TO_REPLACE or slot.get("visuallyVerified") or not slot.get("visualQaWarning"):
        return _original_collect(slot,candidates,sha_used,url_used,visual_used)
    old=dict(slot)
    previous=slot.get("downloadUrl")
    if previous:url_used.add(previous.split("?")[0])
    # Temporarily clear only rejected metadata; keep all 16 approved images unchanged.
    for field in ("localPath","downloadUrl","sourcePage","candidateContext","credit",
                  "sha256","dhash","bytes","originalSize","outputSize","frCaption","enCaption"):
        slot.pop(field,None)
    slot["status"]="missing"
    slot["visuallyVerified"]=False
    slot["commercialRightsCleared"]=False
    try:
        recovered=_original_collect(slot,candidates,sha_used,url_used,visual_used)
    except Exception:
        slot.clear();slot.update(old)
        raise
    if recovered:
        slot["rejectedSource"]=previous
        slot["rejectedCandidateContext"]=old.get("visualQaWarning","Original rejected in real-image QA")
        # The shared collector stamps the new photo as pending manual QA.
        return True
    slot.clear();slot.update(old)
    return False
lib.collect=checked_collect
if __name__=="__main__":
 lib.main()
