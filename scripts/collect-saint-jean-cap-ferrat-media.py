#!/usr/bin/env python3
"""Exact-property Saint-Jean-Cap-Ferrat image candidates.

Reuses Bosphoras' Monaco photo acquisition primitives: WebP, perceptual
deduplication, source URL, hash and manual QA. No image is approved here.
"""
from pathlib import Path
import importlib.util

spec=importlib.util.spec_from_file_location("bosphoras_image_collector",Path("scripts/collect-monaco-media.py"))
lib=importlib.util.module_from_spec(spec)
spec.loader.exec_module(lib)
# Clear the Monaco-specific direct URL tables; otherwise they take precedence
# over geography-specific Commons queries and silently contaminate this destination.
# Source photograph on the hotel's official website. This is a candidate only;
# visual identity, commercial rights and editorial quality remain manual gates.
lib.HOTEL_DIRECT={
 "grand-hotel-cap-ferrat/view-3":[(
  100,
  "https://www.fourseasons.com/alt/img-opt/~70.1530.0%2C0000-156%2C2500-3000%2C0000-1687%2C5000/publish/content/dam/fourseasons/images/web/GHF/GHF_109_original.jpg",
  "https://www.fourseasons.com/capferrat/dining/restaurants/club_dauphin/",
  "Four Seasons official image of Club Dauphin infinity pool above the coast",
  "Four Seasons · official Grand-Hôtel du Cap-Ferrat photograph"
 )]
}
lib.DIRECT_LANDSCAPES={}
lib.DIRECT_WIKIMEDIA={}
lib.COMMONS_EXACT={}
lib.MANIFEST=Path("data/travel/saintJeanCapFerratMediaCandidates.json")
lib.OUT=Path("public/images/travel/saint-jean-cap-ferrat-premium")
lib.HOTELS={
"grand-hotel-cap-ferrat":{
 "view-1":[("https://www.fourseasons.com/capferrat/photos-and-videos/",["grand","exterior","hotel","cap","ferrat"]),("https://www.fourseasons.com/capferrat/",["grand","exterior","hotel","facade"])],
 "view-2":[("https://www.fourseasons.com/capferrat/accommodations/heritage-rooms-and-suites/palace-sea-view-suite/",["suite","bedroom","room","sea"]),("https://www.fourseasons.com/capferrat/photos-and-videos/",["suite","bedroom","room","sea"])],
 "view-3":[("https://www.fourseasons.com/capferrat/dining/restaurants/club_dauphin/",["dauphin","pool","swimming","seawater"]),("https://www.fourseasons.com/capferrat/photos-and-videos/",["dauphin","pool","swimming","seawater"])],
},
"royal-riviera":{
 "view-1":[("https://www.royal-riviera.com/",["royal","riviera","exterior","facade","hotel"])],
 "view-2":[("https://www.royal-riviera.com/en/rooms-suites/",["room","suite","balcony","sea"])],
 "view-3":[("https://www.royal-riviera.com/en/",["beach","pool","garden","terrace"])],
},
"la-villa-cap-ferrat":{
 "view-1":[("https://villacapferrat.fr/en/home/",["villa","pool","exterior","hotel"])],
 "view-2":[("https://villacapferrat.fr/en/rooms/",["room","suite","sea","terrace"])],
 "view-3":[("https://villacapferrat.fr/en/home/",["spa","sauna","pool","jacuzzi"])],
},
"brise-marine":{
 "view-1":[("https://www.hotel-brisemarine.com/",["hotel","villa","brise","facade"])],
 "view-2":[("https://www.hotel-brisemarine.com/en/chambres-230.html",["room","chambre","premium","terrace"])],
 "view-3":[("https://www.hotel-brisemarine.com/",["garden","jardin","terrace","sea"])],
}}
lib.LANDSCAPES={
 "scene-1":("Saint-Jean-Cap-Ferrat peninsula aerial France",("saint-jean-cap-ferrat",)),
 "scene-2":("Cap Ferrat coastal Grand Hotel Club Dauphin",("cap ferrat",)),
 "scene-3":("Paloma beach Saint-Jean-Cap-Ferrat",("paloma",)),
 "scene-4":("Villa Ephrussi de Rothschild Saint Jean Cap Ferrat gardens",("ephrussi",)),
 "scene-5":("Port Saint Jean Cap Ferrat",("saint-jean-cap-ferrat",)),
 "scene-6":("Plage de Passable Cap Ferrat Villefranche",("passable",)),
 "scene-7":("Phare du Cap Ferrat coast",("phare","lighthouse")),
 "scene-8":("Promenade Maurice Rouvier Saint Jean Cap Ferrat",("rouvier",)),
 "scene-9":("Baie des Fourmis Saint Jean Cap Ferrat",("fourmis",)),
}

# Do not retry rejected image URLs or treat different crops as separate photos.
_original_collect=lib.collect
def collect_with_rejections(item,candidates,sha_used,url_used,visual_used):
    rejected=item.get("rejectedSource")
    if rejected:
        url_used.add(rejected.split("?")[0])
    return _original_collect(item,candidates,sha_used,url_used,visual_used)
lib.collect=collect_with_rejections
if __name__=="__main__":
 lib.main()
