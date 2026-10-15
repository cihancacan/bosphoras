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
  }
}
};
