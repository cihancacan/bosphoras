import type { FeaturedCityGuideData } from './featuredCityGuides';
import { stMoritzDraftGuide } from './stMoritzDraftGuide';
/** Prepared, non-indexable premium guide. Photos remain Preview-only; rights review before production. */
const draft=stMoritzDraftGuide;
export const stMoritzGuide:FeaturedCityGuideData={
 ...draft,
 hero:"scene-8",
 secondary:"scene-2",
 areas:draft.areas.map(a=>({...a})),
 experiences:draft.experiences.map(x=>({...x})),
 hotels:draft.hotels.map(h=>({...h})),
 checksFr:[...draft.checksFr],checksEn:[...draft.checksEn],
 photos:{
  "scene-2": {
    "src": "/images/travel/st-moritz-premium/destination/scene-2.webp",
    "fr": "St. Moritz Dorf — photographie de la destination",
    "en": "An actual photograph of St. Moritz Dorf",
    "author": "Snapshots Of  The Past",
    "license": "CC BY-SA 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:St._Moritz_village_and_baths_Grisons_Switzerland.jpg"
  },
  "scene-3": {
    "src": "/images/travel/st-moritz-premium/destination/scene-3.webp",
    "fr": "St. Moritz Bad — photographie de la destination",
    "en": "An actual photograph of St. Moritz Bad",
    "author": "Paebi",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:St._Moritz_Forum_Paracelsus.JPG"
  },
  "scene-4": {
    "src": "/images/travel/st-moritz-premium/destination/scene-4.webp",
    "fr": "Suvretta — photographie de la destination",
    "en": "An actual photograph of Suvretta",
    "author": "Tiia Monto",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Via_Suvretta.jpg"
  },
  "scene-5": {
    "src": "/images/travel/st-moritz-premium/destination/scene-5.webp",
    "fr": "Corviglia — photographie de la destination",
    "en": "An actual photograph of Corviglia",
    "author": "Zaschid",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:St._Moritz_Corviglia_2.jpg"
  },
  "scene-6": {
    "src": "/images/travel/st-moritz-premium/destination/scene-6.webp",
    "fr": "Celerina — photographie de la destination",
    "en": "An actual photograph of Celerina",
    "author": "Jensens",
    "license": "Public domain",
    "licenseUrl": "https://commons.wikimedia.org/wiki/File:Celerina_Engadin.jpg",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Celerina_Engadin.jpg"
  },
  "scene-7": {
    "src": "/images/travel/st-moritz-premium/destination/scene-7.webp",
    "fr": "Pontresina — photographie de la destination",
    "en": "An actual photograph of Pontresina",
    "author": "Asurnipal",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Pontresina-01.jpg"
  },
  "scene-8": {
    "src": "/images/travel/st-moritz-premium/destination/scene-8.webp",
    "fr": "St. Moritz en hiver",
    "en": "St. Moritz in winter",
    "author": "Alps",
    "license": "Public domain",
    "licenseUrl": "https://commons.wikimedia.org/wiki/File:StMoritz.jpg",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:StMoritz.jpg"
  },
  "scene-9": {
    "src": "/images/travel/st-moritz-premium/destination/scene-9.webp",
    "fr": "Engadin landscape — photographie de la destination",
    "en": "An actual photograph of Engadin landscape",
    "author": "Tiia Monto",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:St._Moritz_-_Pontresina.jpg"
  }
}
};
