#!/usr/bin/env python3
"""Lake Como exact hotel and place photo candidates. Never publish automatically."""
from pathlib import Path
import importlib.util
spec=importlib.util.spec_from_file_location("bosphoras_travel_source",Path("scripts/collect-monaco-media.py"))
lib=importlib.util.module_from_spec(spec);spec.loader.exec_module(lib)
lib.MANIFEST=Path("data/travel/lakeComoMediaCandidates.json")
lib.OUT=Path("public/images/travel/lake-como-premium")
lib.HOTELS={
 "villa-d-este":{
  "view-1":[("https://www.villadeste.com/5-star-hotel-on-como-lake",["villa","este","building","exterior","facade","lake","historic"]),("https://www.villadeste.com/",["villa","este","palace","lake","landscape"])],
  "view-2":[("https://www.villadeste.com/rooms-and-suites",["junior","lake","view","suite","room","cardinal"]),("https://www.villadeste.com/",["suite","room","lake"])],
  "view-3":[("https://www.villadeste.com/sporting-club",["floating","pool","piscina","lake"]),("https://www.villadeste.com/it/sport-e-benessere/piscine",["piscina","galleggiante","lake"])],
 },
 "grand-hotel-tremezzo":{
  "view-1":[("https://www.grandhoteltremezzo.com/en/",["tremezzo","hotel","facade","exterior","palace"]),("https://www.grandhoteltremezzo.com/en/resort/",["hotel","tremezzo","building"])],
  "view-2":[("https://www.grandhoteltremezzo.com/en/accommodation/",["suite","bed","room","lake","tremezzo"]),("https://www.grandhoteltremezzo.com/en/",["suite","room"])],
  "view-3":[("https://www.grandhoteltremezzo.com/en/resort/pools/",["wow","pool","water","floating","lifestyle"])],
 },
 "passalacqua":{
  "view-1":[("https://www.passalacqua.it/en/",["passalacqua","villa","lake","estate","exterior"]),("https://www.passalacqua.it/en/our-story/",["villa","passalacqua","exterior"])],
  "view-2":[("https://www.passalacqua.it/en/rooms/suite-agnese-in-the-villa/",["agnese","suite","room","villa"]),("https://www.passalacqua.it/en/",["suite","room","interior"])],
  "view-3":[("https://www.passalacqua.it/en/",["pool","garden","lake","terrace","swimming"]),("https://www.passalacqua.it/en/our-gardens/",["garden","terrace","lake"])],
 },
 "il-sereno":{
  "view-1":[("https://www.serenohotels.com/property/il-sereno/",["il","sereno","architecture","hotel","lake","exterior"]),("https://www.serenohotels.com/property/il-sereno/contact/",["hotel","lake"])],
  "view-2":[("https://www.serenohotels.com/property/il-sereno/suites/",["suite","lake","terrace","grand"]),("https://www.serenohotels.com/property/il-sereno/",["suite","interior"])],
  "view-3":[("https://www.serenohotels.com/property/il-sereno/",["pool","sereno","swim","lake","jetty"])],
 }
}
lib.HOTEL_DIRECT={
 "grand-hotel-tremezzo/view-1":[(110,
  "https://media-assets.ad-italia.it/photos/665f14a84ff4f5eceb98d54a/4%3A3/w_4032%2Ch_3024%2Cc_limit/Grand%20Hotel%20Tremezzo.jpg",
  "https://www.ad-italia.it/article/grand-hotel-tremezzo-lago-di-como/",
  "Genuine sunlit Grand Hotel Tremezzo Belle Epoque front and orange parasols, floating pool in foreground",
  "Architectural Digest Italia · identified hotel building image")],
 "passalacqua/view-2":[(120,
  "https://www.passalacqua.it/media/phthqv04/ruben23_suiteagnese_02.jpg?format=webp&height=1150&v=1d9e6193342d890&width=1725",
  "https://www.passalacqua.it/en/rooms/suite-agnese-in-the-villa/",
  "Actual Passalacqua Suite Agnese living room with antiques, blush walls and restored eighteenth century features",
  "Passalacqua · official Suite Agnese photograph")],
 "il-sereno/view-3":[(110,
  "https://www.soldoutservice.com/wp-content/uploads/2023/03/il-sereno-lago-di-como-hotel-lusso-2.jpg",
  "https://www.soldoutservice.com/sereno-lago-di-como-hotel-lusso/",
  "Real Il Sereno Lake Como aqua infinity pool, deck, green loungers and orange boats moored beside lake",
  "SoldoutService · identified Il Sereno hotel waterfront photo")],
 "villa-d-este/view-1":[(75,
  "https://cdn.sanity.io/images/f489xjk7/production/fce30d517c05b2ca476ecf387a60dde4761f2512-1800x1348.jpg?auto=format&h=1348&w=1800",
  "https://www.kirkerholidays.com/hotel/villa-d-este/",
  "Actual Villa d'Este Cernobbio exterior from water at dusk and floating pool",
  "Kirker Holidays · identified Villa d'Este property photo")],
}
lib.LANDSCAPES={
 "scene-1":("Lake Como Italy aerial panorama mountains blue water Lario",("como","lake")),
 "scene-2":("Cernobbio Villa d Este Lake Como waterfront promenade",("cernobbio",)),
 "scene-3":("Tremezzo Bellagio lake Como view",("tremezzo","bellagio")),
 "scene-4":("Villa Carlotta Tremezzo gardens facade lake Como",("carlotta",)),
 "scene-5":("Bellagio Punta Spartivento Lake Como panorama",("bellagio",)),
 "scene-6":("Varenna Lake Como harbor colorful waterfront",("varenna",)),
 "scene-7":("Villa del Balbianello Lenno Lake Como peninsula",("balbianello",)),
 "scene-8":("Como Duomo Cathedral Lake Como promenade",("como","duomo")),
 "scene-9":("Moltrasio waterfront Lake Como village",("moltrasio",))
}
lib.DIRECT_LANDSCAPES={
 "scene-1":lib.commons_exact("Lake Como from Brunate.jpg"),
 "scene-2":lib.commons_exact("Cernobbio (Como) lago.jpg"),
 "scene-3":lib.commons_exact("Bellagio from Tremezzo.jpg"),
 "scene-4":lib.commons_exact("Villa Carlotta, Tremezzo, Lake Como.jpg"),
 "scene-5":lib.commons_exact("Bellagio - Punta Spartivento.jpg"),
 "scene-6":lib.commons_exact("Varenna Lake Como waterfront.jpg"),
 "scene-7":lib.commons_exact("Villa del Balbianello.jpg"),
 "scene-8":lib.commons_exact("Como Cathedral.jpg"),
 "scene-9":lib.commons_exact("Moltrasio Lake Como.jpg")
}
lib.COMMONS_EXACT={}
lib.DIRECT_WIKIMEDIA={}
# A candidate already visually approved is never replaced, nor is a different
# hotel's photograph borrowed to fill a missing slot. The library enforces this.
if __name__=="__main__":
 lib.main()
