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
lib.MANIFEST=Path("data/travel/saintJeanCapFerratMediaCandidates.json")
lib.OUT=Path("public/images/travel/saint-jean-cap-ferrat-premium")
lib.HOTELS={
"grand-hotel-cap-ferrat":{
 "view-1":[("https://www.fourseasons.com/capferrat/",["grand","exterior","capferrat","hotel","gardens"])],
 "view-2":[("https://www.fourseasons.com/capferrat/accommodations/",["suite","bedroom","room","sea"])],
 "view-3":[("https://www.fourseasons.com/capferrat/services-and-amenities/",["dauphin","pool","swimming","seawater"])],
},
"royal-riviera":{
 "view-1":[("https://www.royal-riviera.com/",["royal","riviera","exterior","facade"])],
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
if __name__=="__main__":
 lib.main()
