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
# Geographically exact original photographs, each linked to its genuine source.
# A fetched image remains UNAPPROVED pending visual, source and rights QA.
lib.DIRECT_LANDSCAPES={
 "scene-1":[(100,
   "https://static.apidae-tourisme.com/filestore/objets-touristiques/images/73/53/16921929.jpg",
   "https://www.explorenicecotedazur.com/fiche/cap-ferrat/",
   "Actual Cap-Ferrat headland and peninsula coastline with real lighthouse visible",
   "Nice Côte d’Azur tourist office"),(98,
   "https://www.explorenicecotedazur.com/content/uploads/2023/07/vue-aerienne-saint-jean-cap-ferrat-scaled.jpg",
   "https://www.explorenicecotedazur.com/en/saint-jean-cap-ferrat/",
   "Actual Saint-Jean-Cap-Ferrat peninsula from above, bay and harbour visible",
   "Nice Côte d'Azur Tourism Board")],
 "scene-2":[(100,
   "https://yeslondonmagazine.com/images/2024/07/03/IMG_0898_large.png",
   "https://yeslondonmagazine.com/travel/grand-hotel-du-cap-ferrat-timeless-luxury-on-the-french-riviera",
   "Identifiable Grand-Hôtel du Cap-Ferrat exterior among pines and Club Dauphin below",
   "Yes London Magazine · Grand-Hôtel Cap-Ferrat resort aerial"),(98,
   "https://bynder.onthebeach.co.uk/cdn-cgi/image/width%3D1400%2Cquality%3D80%2Cfit%3Dcover%2Cformat%3Dauto/m/5cf6b632057f899/original/Grand-Hotel-du-Cap-Ferrat-A-Four-Seasons-Hotel-General-view-12.jpg",
   "https://www.onthebeach.ie/hotels/france/cote-dazur/nice/grand-hotel-du-cap-ferrat-a-four-seasons-hotel",
   "Grand-Hôtel du Cap-Ferrat documented coastal pool viewed from above",
   "On the Beach hotel media"),(95,
   "https://www.gordonweddingfilms.com/wp-content/uploads/2024/10/10_Wedding-Cap-Ferrat-Four-Seasons.jpg",
   "https://www.gordonweddingfilms.com/wedding-videographer-grand-hotel-four-seasons-cap-ferrat/",
   "Overhead photograph of Club Dauphin pool at the rocky Grand-Hôtel Cap-Ferrat coast",
   "Gordon Wedding Films · credited wedding photography")],
}
# The Commons file page supplies exact place, photographer, licence and geolocation;
# prefer its own thumbnail over an unverifiable generic resort photograph.
lib.DIRECT_LANDSCAPES["scene-5"]=lib.commons_exact("Port de Saint-Jean Cap-Ferrat.jpg")
# Explicit high-confidence Paloma Beach sources, geographically in Saint-Jean-Cap-Ferrat.
lib.DIRECT_LANDSCAPES["scene-3"]=lib.commons_exact("20211209 123405 Plage de la Paloma.jpg")+lib.commons_exact("Paloma Beach, Saint-Jean-Cap-Ferrat.png")
lib.DIRECT_LANDSCAPES["scene-6"]=lib.commons_exact("Plage de Passable.jpg")
lib.DIRECT_LANDSCAPES["scene-7"]=lib.commons_exact("Cap-Ferrat lighthouse from east.jpg")
# Four Seasons does not allow the collector to scrape its website (HTTP 403).
# These ORIGINAL external publisher/industry images explicitly identify this hotel.
# None are silently re-labelled as an official direct hotel download.
lib.HOTEL_DIRECT.update({
 "grand-hotel-cap-ferrat/view-1":[
  (99,"https://media.cntraveler.com/photos/67f54caceeae371d698ede51/master/w_1600%2Cc_limit/Grand-Ho%25CC%2582tel%2520du%2520Cap-Ferrat_White%2520Lotus_070425_pr_global..jpg",
      "https://www.cntraveler.com/story/where-will-the-white-lotus-season-4-be-filmed",
      "Grand-Hôtel du Cap-Ferrat actual white Belle Époque façade and sunny formal gardens",
      "Condé Nast Traveler · Grand-Hôtel du Cap-Ferrat exterior"),
  (97,"https://images.cvent.com/CSN/e403de07-a1ee-4cd9-8a63-7ddb96037606/images/4d3d59f2a5aa4e299d28f619bf227cba_LARGE!_!4c6f3919fcc8ce657b24b71a09c4c65f.jpg",
      "https://www.cvent.com/venues/nice/hotel/grand-hotel-du-cap-ferrat-a-four-seasons-hotel/venue-e403de07-a1ee-4cd9-8a63-7ddb96037606",
      "Confirmed Grand-Hôtel main entrance façade from venue image", "Cvent hotel listing")],
 "grand-hotel-cap-ferrat/view-2":[
  (100,"https://secure.s.forbestravelguide.com/img/properties/grand-hotel-du-cap-ferrat-a-four-seasons-hotel/extra-large/grand-hotel-du-cap-ferrat-a-four-seasons-hotel-guestroom.jpg",
       "https://www.forbestravelguide.com/hotels/french-riviera-france/grand-hotel-du-cap-ferrat-a-four-seasons-hotel",
       "Real Grand-Hôtel du Cap-Ferrat guestroom with pale mint bench and white linen", "Forbes Travel Guide")],
 "grand-hotel-cap-ferrat/view-3":[
  (100,"https://1.bp.blogspot.com/-I6VgPcSptBg/YVnKWyhK5tI/AAAAAAAAQr0/pJI-Wts3b5IkDzI3mw1BgZT5qVHXDm0XACLcBGAsYHQ/s1926/Grand-Hotel-Cap-Ferrat-Beach-Club.jpg",
       "https://www.homeandartmag.com/2021/07/royal-riviera-st-jean-cap-ferrat.html",
       "Real Club Dauphin pool and lighthouse above the rocky Mediterranean headland", "Home & Art Magazine · Cap-Ferrat Beach Club"),
  (99,"https://www.gordonweddingfilms.com/wp-content/uploads/2024/10/10_Wedding-Cap-Ferrat-Four-Seasons.jpg",
      "https://www.gordonweddingfilms.com/wedding-videographer-grand-hotel-four-seasons-cap-ferrat/",
      "Club Dauphin infinity pool and rocks from overhead", "Gordon Wedding Films")],
 "royal-riviera/view-2":[
  (100,"https://decouvertes.fr/wp-content/uploads/2024/10/hotel_royal_riviera_suite-scaled.webp",
       "https://decouvertes.fr/hotels-list/pro-hotel-royal-riviera/",
       "Daylight Royal-Riviera suite, turquoise curtains, terrace and natural light", "Découvertes · Royal-Riviera suite")],
 "royal-riviera/view-3":[
  (100,"https://www.royal-riviera.com/wp-content/uploads/2022/01/BD_Vue-aerienne-retouchee_3.jpg",
       "https://www.royal-riviera.com/en/the-royal-riviera/",
       "Actual Royal-Riviera hotel, outdoor pool and Baie des Fourmis in sunshine", "Royal-Riviera · official hotel photo")],
 "la-villa-cap-ferrat/view-3":[
  (98,"https://cdn.iris-etourism.io/uploads/nice/9d5/247-2-12714743.webp",
       "https://www.explorenicecotedazur.com/en/hotel/hotel-spa-la-villa-cap-ferrat/",
       "La Villa Cap Ferrat boutique hotel, terrace pool and sunny sea view", "Nice Côte d'Azur Tourism Board")],
 "brise-marine/view-3":[
  (100,"https://www.hotel-brisemarine.com/images/gallery/gallerie/0563_ok_cliente.jpg",
       "https://www.hotel-brisemarine.com/en/",
       "Original Brise Marine yellow villa façade and flowering garden in daylight",
       "Hôtel Brise Marine · official hotel photograph"),
  (94,"https://www.hotel-brisemarine.com/images/gallery/gallerie/0505_ok_cliente.jpg",
       "https://www.hotel-brisemarine.com/en/",
       "Brise Marine original garden terrace and dining tables in sunshine",
       "Hôtel Brise Marine · official hotel photograph")],
})
# Last-resort verified hotel building shot from Commons; never confuse with other properties.
# Commons file metadata identifies the actual Grand-Hôtel and photographer.
lib.HOTEL_DIRECT["grand-hotel-cap-ferrat/view-1"].extend(
    lib.commons_exact("Cap-Ferrat - Avenue de la Corniche - View NNW on Grand Hotel du Cap Ferrat.jpg")
)
# Alternative real sources for visually rejected photographs; all remain unapproved
# until each downloaded image has been individually inspected.
lib.HOTEL_DIRECT["royal-riviera/view-1"]=[
 (100,"https://www.royal-riviera.com/wp-content/uploads/2022/01/DSC07159-HDR.jpg",
  "https://www.royal-riviera.com/en/the-royal-riviera/the-royal-riviera-atmosphere/",
  "Royal-Riviera classic beige Belle Epoque hotel front framed by palm gardens", "Royal-Riviera official architecture photo"),
 (96,"https://www.royal-riviera.com/wp-content/uploads/2022/01/DSC07159-HDR-1440x864.jpg",
  "https://www.royal-riviera.com/en/the-royal-riviera/the-royal-riviera-atmosphere/",
  "Sunlit Royal-Riviera facade and manicured gardens", "Royal-Riviera official hotel CMS")
]
lib.DIRECT_LANDSCAPES["scene-7"]=lib.commons_exact("France-002563 - Cap Ferrat Light (15720311590).jpg")
lib.DIRECT_LANDSCAPES["scene-9"]=lib.commons_exact("Panorama baie des Fourmis Beaulieu-sur-Mer.jpg")
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

# Override existing hotel pages only after lib.HOTELS has been defined.
lib.HOTELS["la-villa-cap-ferrat"]["view-2"]=[("https://villacapferrat.fr/en/rooms/",["terrace","balcony","sea","superior","view","chambre"])]
lib.HOTELS["la-villa-cap-ferrat"]["view-3"]=[("https://villacapferrat.fr/en/gallery/",["spa","sauna","jacuzzi","garden","terrace","breakfast","wellness"])]
lib.HOTELS["brise-marine"]["view-2"]=[("https://www.hotel-brisemarine.com/en/gallery-237.html",["vue","sea","balcon","chambre","room","terrace"])]

# Do not retry rejected image URLs or treat different crops as separate photos.
_original_collect=lib.collect
REPLACE_WHEN_REJECTED={
 ("grand-hotel-cap-ferrat","view-1"):False,
 ("royal-riviera","view-1"):True,
 ("la-villa-cap-ferrat","view-2"):True,
 ("la-villa-cap-ferrat","view-3"):True,
 ("brise-marine","view-2"):True,
 ("destination","scene-3"):True,
 ("destination","scene-5"):False,
 ("destination","scene-7"):True,
 ("destination","scene-9"):True,
}
def collect_with_rejections(item,candidates,sha_used,url_used,visual_used):
    rejected=item.get("rejectedSource")
    if rejected:url_used.add(rejected.split("?")[0])
    group=item.get("propertyKey") or "destination"
    key=(group,item["key"])
    if not REPLACE_WHEN_REJECTED.get(key) or item.get("visuallyVerified") or not item.get("localPath"):
        return _original_collect(item,candidates,sha_used,url_used,visual_used)
    old=dict(item)
    old_src=old.get("downloadUrl")
    if old_src:url_used.add(old_src.split("?")[0])
    for field in ("localPath","downloadUrl","sourcePage","candidateContext","credit",
                  "sha256","dhash","bytes","originalSize","outputSize",
                  "frCaption","enCaption"):
        item.pop(field,None)
    item["status"]="missing"
    item["visuallyVerified"]=False
    item["commercialRightsCleared"]=False
    try:
        found=_original_collect(item,candidates,sha_used,url_used,visual_used)
    except Exception:
        item.clear();item.update(old)
        raise
    if found:
        item["rejectedSource"]=old_src
        item["rejectedCandidateContext"]=old.get("visualQaWarning","Replaced for exact-geography/luxury quality")
        # Collector always keeps new candidate unapproved for separate manual visual QA.
        return True
    item.clear();item.update(old)
    return False
lib.collect=collect_with_rejections
if __name__=="__main__":
 lib.main()
