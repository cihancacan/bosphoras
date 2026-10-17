import type { FeaturedCityGuideData } from './featuredCityGuides';
import { megeveDraftGuide } from './megeveDraftGuide';
/** Staged FR/EN guide; NOT commercially image-approved and NOT indexed. */
const draft=megeveDraftGuide;
export const megeveGuide:FeaturedCityGuideData={
 ...draft,hero:"scene-2",secondary:"scene-8",
 areas:draft.areas.map(x=>({...x})),experiences:draft.experiences.map(x=>({...x})),
 hotels:draft.hotels.map(x=>({...x})),checksFr:[...draft.checksFr],checksEn:[...draft.checksEn],
 photos:{
  "scene-1": {
    "src": "/images/travel/megeve-premium/destination/scene-1.webp",
    "fr": "Megève village — photographie de Megève, à contrôler avant publication",
    "en": "Megève village — Megève source-backed photograph pending review",
    "author": "Guilhem Vellut  from Annecy, France",
    "license": "CC BY 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Village_@_Megève_(51295072586).jpg"
  },
  "scene-2": {
    "src": "/images/travel/megeve-premium/destination/scene-2.webp",
    "fr": "Mont d'Arbois — photographie de Megève, à contrôler avant publication",
    "en": "Mont d'Arbois — Megève source-backed photograph pending review",
    "author": "B. Brassoud",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Mont-d'Arbois-Megève_(2017).jpg"
  },
  "scene-3": {
    "src": "/images/travel/megeve-premium/destination/scene-3.webp",
    "fr": "Rochebrune — photographie de Megève, à contrôler avant publication",
    "en": "Rochebrune — Megève source-backed photograph pending review",
    "author": "Guilhem Vellut from Annecy, France",
    "license": "CC BY 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Rochebrune_@_Megève_(51036605028).jpg"
  },
  "scene-4": {
    "src": "/images/travel/megeve-premium/destination/scene-4.webp",
    "fr": "Jaillet — photographie de Megève, à contrôler avant publication",
    "en": "Jaillet — Megève source-backed photograph pending review",
    "author": "Corsica62",
    "license": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Tête_du_Torraz.JPG"
  },
  "scene-6": {
    "src": "/images/travel/megeve-premium/destination/scene-6.webp",
    "fr": "Church square — photographie de Megève, à contrôler avant publication",
    "en": "Church square — Megève source-backed photograph pending review",
    "author": "Renhour48",
    "license": "CC0",
    "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Megève_-_Eglise_Saint-Jean-Baptiste_48.jpg"
  },
  "scene-7": {
    "src": "/images/travel/megeve-premium/destination/scene-7.webp",
    "fr": "Front de neige du Mont d’Arbois à Megève, fin de saison hivernale",
    "en": "Mont d’Arbois ski base in Megève at the end of winter",
    "author": "DimiTalen",
    "license": "CC0",
    "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:View_of_the_Mont_d'Arbois_front_de_neige,_Megève,_2025.jpg"
  },
  "scene-9": {
    "src": "/images/travel/megeve-premium/destination/scene-9.webp",
    "fr": "Mont Blanc view — photographie de Megève, à contrôler avant publication",
    "en": "Mont Blanc view — Megève source-backed photograph pending review",
    "author": "Guilhem Vellut from Annecy, France",
    "license": "CC BY 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Mont_Blanc_@_Megève_(51037173286).jpg"
  },
  "scene-8": {
    "src": "/images/travel/megeve-premium/destination/scene-8.webp",
    "fr": "Megève summer · vue vérifiée de Megève",
    "en": "Megève summer · verified view of Megève",
    "author": "CBougault",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Megève,_depuis_la_chaîne_du_Mont-Joly.jpg"
  }
}

};
