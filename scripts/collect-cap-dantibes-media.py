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
 "scene-3":lib.commons_exact("Plage de la garoupe.jpg"),
 "scene-4":lib.commons_exact("Sentier de Tirepoil.jpg"),
 "scene-6":[(100,
  "https://static.seetheworld.com/image_uploader/photos/2c/original/port-du-crouton-antibes.jpg",
  "https://www.seeantibes.com/sea/marinas/port-du-crouton",
  "Port du Crouton real small boats and masts by Antibes west shoreline",
  "SeeAntibes · documented Port du Crouton")],
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
def checked_collect(slot,candidates,sha_used,url_used,visual_used):
    rejected=slot.get("rejectedSource")
    if rejected:url_used.add(rejected.split("?")[0])
    return _original_collect(slot,candidates,sha_used,url_used,visual_used)
lib.collect=checked_collect
if __name__=="__main__":
 lib.main()
