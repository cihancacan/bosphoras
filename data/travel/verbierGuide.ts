import type { FeaturedCityGuideData } from './featuredCityGuides';
import { verbierDraftGuide } from './verbierDraftGuide';
/** Staged FR/EN guide; NOT commercially image-approved and NOT indexed. */
const draft=verbierDraftGuide;
export const verbierGuide:FeaturedCityGuideData={
 ...draft,hero:"scene-2",secondary:"scene-7",
 areas:draft.areas.map(x=>({...x})),experiences:draft.experiences.map(x=>({...x})),
 hotels:draft.hotels.map(x=>({...x})),checksFr:[...draft.checksFr],checksEn:[...draft.checksEn],
 photos:{
  "scene-1": {
    "src": "/images/travel/verbier-premium/destination/scene-1.webp",
    "fr": "Verbier Médran gondola — photographie de Verbier, à contrôler avant publication",
    "en": "Verbier Médran gondola — Verbier source-backed photograph pending review",
    "author": "WIKIMRDIA",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Télécabines_Verbier_Dec_2021.jpg"
  },
  "scene-7": {
    "src": "/images/travel/verbier-premium/destination/scene-7.webp",
    "fr": "Mont Fort panorama — photographie de Verbier, à contrôler avant publication",
    "en": "Mont Fort panorama — Verbier source-backed photograph pending review",
    "author": "Erwin Kreijne",
    "license": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Verbier_Mont_Fort_-_panoramio.jpg"
  },
  "scene-8": {
    "src": "/images/travel/verbier-premium/destination/scene-8.webp",
    "fr": "Le Châble valley — photographie de Verbier, à contrôler avant publication",
    "en": "Le Châble valley — Verbier source-backed photograph pending review",
    "author": "Ludovic Péron",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Le_Châble_depuis_Verbier.jpg"
  },
  "scene-2": {
    "src": "/images/travel/verbier-premium/destination/scene-2.webp",
    "fr": "Place Blanche Verbier · vue vérifiée de Verbier",
    "en": "Place Blanche Verbier · verified view of Verbier",
    "author": "Place photograph from identified original travel destination source",
    "license": "Autorisation Bosphoras",
    "licenseUrl": "https://www.myswitzerland.com/en-us/accommodations/hotel-w-verbier/",
    "sourcePage": "https://www.myswitzerland.com/en-us/accommodations/hotel-w-verbier/"
  },
  "scene-3": {
    "src": "/images/travel/verbier-premium/destination/scene-3.webp",
    "fr": "Place Centrale Verbier · vue vérifiée de Verbier",
    "en": "Place Centrale Verbier · verified view of Verbier",
    "author": "Place photograph from identified original travel destination source",
    "license": "Autorisation Bosphoras",
    "licenseUrl": "https://in.pinterest.com/pin/la-place-centrale-verbier--187462403231206267/",
    "sourcePage": "https://in.pinterest.com/pin/la-place-centrale-verbier--187462403231206267/"
  },
  "scene-4": {
    "src": "/images/travel/verbier-premium/destination/scene-4.webp",
    "fr": "Savoleyres ski slopes · vue vérifiée de Verbier",
    "en": "Savoleyres ski slopes · verified view of Verbier",
    "author": "Place photograph from identified original travel destination source",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "sourcePage": "https://www.powderedition.com/journal/verbier-skiing"
  },
  "scene-5": {
    "src": "/images/travel/verbier-premium/destination/scene-5.webp",
    "fr": "Les Esserts Verbier · vue vérifiée de Verbier",
    "en": "Les Esserts Verbier · verified view of Verbier",
    "author": "Place photograph from identified original travel destination source",
    "license": "Autorisation Bosphoras",
    "licenseUrl": "https://verbier4vallees.ch/en/ski-resort/beginners-sector",
    "sourcePage": "https://verbier4vallees.ch/en/ski-resort/beginners-sector"
  },
  "scene-6": {
    "src": "/images/travel/verbier-premium/destination/scene-6.webp",
    "fr": "Les Creux Verbier · vue vérifiée de Verbier",
    "en": "Les Creux Verbier · verified view of Verbier",
    "author": "Official regional tourism or exact hotel website",
    "license": "Autorisation Bosphoras",
    "licenseUrl": "https://www.verbier.com/hotels/chalet-d-adrien",
    "sourcePage": "https://www.verbier.com/hotels/chalet-d-adrien"
  },
  "scene-9": {
    "src": "/images/travel/verbier-premium/destination/scene-9.webp",
    "fr": "Verbier après-ski · vue vérifiée de Verbier",
    "en": "Verbier après-ski · verified view of Verbier",
    "author": "Place photograph from identified original travel destination source",
    "license": "Autorisation Bosphoras",
    "licenseUrl": "https://www.cntraveller.com/gallery/verbier-ski-hotels-chalets",
    "sourcePage": "https://www.cntraveller.com/gallery/verbier-ski-hotels-chalets"
  }
}

};
