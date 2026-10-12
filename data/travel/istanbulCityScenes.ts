/**
 * Place photography illustrates public neighbourhoods, never room views or hotel amenities.
 * Curated Wikimedia Commons photographs downloaded as WebP; visible credits preserve author,
 * source and licence, including ShareAlike. See cityImageSources.json for hashes and changes.
 */
export const istanbulCityScenes = {
  "karakoy": {
    "src": "/images/travel/istanbul/city/karakoy-galataport.webp",
    "fr": "La promenade de Galataport, à Karaköy",
    "en": "Galataport waterfront promenade in Karaköy",
    "author": "Dosseman",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Galataport_from_Istanbul_Museum_of_Modern_Art_in_2024_5623.jpg"
  },
  "ciragan": {
    "src": "/images/travel/istanbul/city/ciragan-bosphorus.webp",
    "fr": "Le palais Çırağan photographié depuis le Bosphore",
    "en": "Çırağan Palace photographed from the Bosphorus",
    "author": "flowcomm",
    "license": "CC BY 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Çırağan_Palace_from_the_Bosphorus_Strait.jpg"
  },
  "kurucesme": {
    "src": "/images/travel/istanbul/city/ortakoy-bosphorus.webp",
    "fr": "La mosquée d’Ortaköy et le pont sur le Bosphore",
    "en": "Ortaköy Mosque and the Bosphorus Bridge",
    "author": "Maurice Flesier",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Ortaköy_Mosque_and_15th_July_Bridge.jpg"
  },
  "sultanahmet": {
    "src": "/images/travel/istanbul/city/sultanahmet-skyline.webp",
    "fr": "Sultanahmet de jour : Sainte-Sophie et la Mosquée bleue",
    "en": "Daytime panorama of Sultanahmet: Hagia Sophia and the Blue Mosque",
    "author": "Husain007",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Hagia_Sophia_and_Blue_Mosque.jpg"
  },
  "nisantasi": {
    "src": "/images/travel/istanbul/city/nisantasi-abdi-ipekci.webp",
    "fr": "L’avenue Abdi İpekçi, à Nişantaşı",
    "en": "Abdi İpekçi Avenue in Nişantaşı",
    "author": "Metuboy",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Nişantaşı_Abdi_İpekçi_Avenue.jpg"
  },
  "dolmabahce": {
    "src": "/images/travel/istanbul/city/dolmabahce-palace.webp",
    "fr": "Le palais de Dolmabahçe vu depuis le Bosphore",
    "en": "Dolmabahçe Palace seen from the Bosphorus",
    "author": "flowcomm",
    "license": "CC BY 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Dolmabahce_Istanbul_Turkey.jpg"
  }
} as const;

export const hotelCityStories = {
  "peninsula": {
    "scene": "karakoy",
    "frTitle": "Karaköy, entre l’eau et la ville créative",
    "enTitle": "Karaköy, between the waterfront and the creative city",
    "fr": "La promenade de Galataport, Istanbul Modern et les rues de Karaköy permettent d’alterner art, cafés et traversées en ferry. Pour découvrir la ville à pied, cette partie du littoral est particulièrement pratique. Le choix de la catégorie de chambre reste décisif pour la vue.",
    "en": "Galataport’s promenade, Istanbul Modern and Karaköy’s streets invite days shaped by art, cafés and ferry crossings. This is a useful city base; a Bosphorus-facing room should still be checked by category."
  },
  "ciragan": {
    "scene": "ciragan",
    "frTitle": "Le Bosphore des palais",
    "enTitle": "A Bosphorus shoreline of palaces",
    "fr": "Sur la rive de Çırağan, la promenade relie l’héritage des palais aux quais animés de Beşiktaş. Le quartier convient aux voyageurs qui veulent consacrer du temps au bord de l’eau plutôt que remplir chaque journée de visites.",
    "en": "Along Çırağan, palace heritage meets the active shores of Beşiktaş. This part of Istanbul rewards travellers who allow time to enjoy the waterfront rather than filling every hour with sightseeing."
  },
  "four-seasons-bosphorus": {
    "scene": "ciragan",
    "frTitle": "Çırağan et les jardins du Bosphore",
    "enTitle": "Çırağan and the Bosphorus gardens",
    "fr": "Entre Beşiktaş et les palais de la rive, le vrai privilège est de pouvoir ralentir : marcher près du détroit, profiter des terrasses, puis rejoindre les quartiers vivants. Les chambres ne présentent pas toutes la même orientation.",
    "en": "Between Beşiktaş and the shoreline palaces, the appeal lies in slowing down: waterfront strolls, garden terraces and easy access to lively neighbourhoods. Not every room has the same outlook."
  },
  "mandarin-oriental": {
    "scene": "kurucesme",
    "frTitle": "Kuruçeşme, Ortaköy et le Bosphore résidentiel",
    "enTitle": "Kuruçeşme, Ortaköy and residential Bosphorus life",
    "fr": "La rive de Kuruçeşme mène vers Ortaköy et Bebek, avec des panoramas sur les ponts et une atmosphère différente du centre historique. Il faut anticiper la circulation de la route côtière aux heures chargées.",
    "en": "Kuruçeşme’s shoreline leads towards Ortaköy and Bebek, with bridge panoramas and a residential mood. Allow for traffic delays on the coast road at busy times."
  },
  "four-seasons-sultanahmet": {
    "scene": "sultanahmet",
    "frTitle": "Sultanahmet : les monuments avant la foule",
    "enTitle": "Sultanahmet: historic landmarks before the crowds",
    "fr": "Ici, le luxe est de rejoindre très tôt Sainte-Sophie, la Mosquée bleue et les ruelles de la vieille ville. Ce séjour privilégie le patrimoine accessible à pied plutôt que la vie au bord du Bosphore.",
    "en": "Here, the privilege is reaching Hagia Sophia, the Blue Mosque and old-city lanes early in the day. The draw is walkable heritage rather than living on the Bosphorus waterfront."
  },
  "shangri-la": {
    "scene": "dolmabahce",
    "frTitle": "Beşiktaş et Dolmabahçe à proximité",
    "enTitle": "Beşiktaş and nearby Dolmabahçe",
    "fr": "Entre les quais de Beşiktaş et Dolmabahçe, on peut associer un palace paisible aux traversées en ferry et à l’animation du quartier. Les vues disponibles dépendent de la chambre sélectionnée.",
    "en": "Between Beşiktaş’s ferry piers and Dolmabahçe, this base balances a refined stay with active city life. The view depends on the exact room category."
  },
  "raffles": {
    "scene": "nisantasi",
    "frTitle": "Zorlu Center : l’Istanbul contemporaine",
    "enTitle": "Zorlu Center: contemporary Istanbul",
    "fr": "Raffles se situe au Zorlu Center, à Zincirlikuyu : restaurants, shopping et activités urbaines dominent l’expérience. L’image de Nişantaşı illustre l’autre visage chic de la ville, mais ce n’est pas le même quartier ni un trajet à pied garanti.",
    "en": "Raffles sits at Zorlu Center in Zincirlikuyu, with dining, shopping and an urban pace at its doorstep. The Nişantaşı photograph evokes another fashionable side of the city, not the hotel’s immediate street or a guaranteed walk."
  },
  "st-regis": {
    "scene": "nisantasi",
    "frTitle": "Nişantaşı : boutiques, cafés et art de vivre",
    "enTitle": "Nişantaşı: fashion, cafés and city life",
    "fr": "Abdi İpekçi et les rues de Nişantaşı favorisent les sorties à pied, les vitrines et les restaurants. Le choix s’adresse à ceux qui recherchent d’abord un quartier chic et vivant, pas une adresse directement sur le détroit.",
    "en": "Abdi İpekçi Avenue and Nişantaşı’s streets invite boutique shopping, cafés and dining on foot. Choose this for refined city life, not a directly waterfront address."
  },
  "ritz-carlton": {
    "scene": "dolmabahce",
    "frTitle": "Dolmabahçe : entre ville et Bosphore",
    "enTitle": "Dolmabahçe: between city and Bosphorus",
    "fr": "Le secteur de Dolmabahçe met la rive et les grands sites de Beşiktaş à portée d’excursion, tandis que les hauteurs rejoignent la ville active. La vue sur le détroit doit être confirmée sur la catégorie de chambre, pas déduite du panorama du quartier.",
    "en": "Around Dolmabahçe, waterfront landmarks sit below the active city districts. The room’s actual strait view must be verified rather than inferred from the area panorama."
  }
} as const;
