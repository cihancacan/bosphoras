import type { FeaturedCityGuideData } from './featuredCityGuides';
import { nisekoDraftGuide } from './nisekoDraftGuide';
/** Prepared, non-indexable premium guide. Photos remain Preview-only; rights review before production. */
const draft=nisekoDraftGuide;
export const nisekoGuide:FeaturedCityGuideData={
 ...draft,
 hero:"scene-1",
 secondary:"scene-7",
 areas:draft.areas.map(a=>({...a})),
 experiences:draft.experiences.map(x=>({...x})),
 hotels:draft.hotels.map(h=>({...h})),
 checksFr:[...draft.checksFr],checksEn:[...draft.checksEn],
 photos:{
  "scene-1": {
    "src": "/images/travel/niseko-premium/destination/scene-1.webp",
    "fr": "Le mont Yōtei et Niseko Annupuri en hiver",
    "en": "Mount Yotei and Niseko Annupuri in winter",
    "author": "ShakyIsles",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Mount_Yōtei_and_Mount_Niseko-Annupuri.jpg"
  },
  "scene-2": {
    "src": "/images/travel/niseko-premium/destination/scene-2.webp",
    "fr": "Niseko Grand Hirafu — photographie de la destination",
    "en": "An actual photograph of Niseko Grand Hirafu",
    "author": "Excellent moniteur de ski",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Grand_HIRAFU_Mountain_Center_and_Annex.jpg"
  },
  "scene-3": {
    "src": "/images/travel/niseko-premium/destination/scene-3.webp",
    "fr": "Niseko Hanazono — photographie de la destination",
    "en": "An actual photograph of Niseko Hanazono",
    "author": "Excellent moniteur de ski",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:HANAZONO_1st_Lift_(6-seater).jpg"
  },
  "scene-4": {
    "src": "/images/travel/niseko-premium/destination/scene-4.webp",
    "fr": "Niseko Village — photographie de la destination",
    "en": "An actual photograph of Niseko Village",
    "author": "Wakimasa",
    "license": "Public domain",
    "licenseUrl": "https://commons.wikimedia.org/wiki/File:Niseko-Higashiyama.JPG",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Niseko-Higashiyama.JPG"
  },
  "scene-5": {
    "src": "/images/travel/niseko-premium/destination/scene-5.webp",
    "fr": "Niseko Annupuri — photographie de la destination",
    "en": "An actual photograph of Niseko Annupuri",
    "author": "Wakimasa",
    "license": "Public domain",
    "licenseUrl": "https://commons.wikimedia.org/wiki/File:Niseko-Annupuri.JPG",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Niseko-Annupuri.JPG"
  },
  "scene-6": {
    "src": "/images/travel/niseko-premium/destination/scene-6.webp",
    "fr": "Kutchan — photographie de la destination",
    "en": "An actual photograph of Kutchan",
    "author": "MaedaAkihiko",
    "license": "CC0",
    "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Kutchan-STA_2024.jpg"
  },
  "scene-7": {
    "src": "/images/travel/niseko-premium/destination/scene-7.webp",
    "fr": "Niseko winter — photographie de la destination",
    "en": "An actual photograph of Niseko winter",
    "author": "Lasthib",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:2018_skiing_in_niseko.jpg"
  },
  "scene-8": {
    "src": "/images/travel/niseko-premium/destination/scene-8.webp",
    "fr": "Niseko forest — photographie de la destination",
    "en": "An actual photograph of Niseko forest",
    "author": "Douglas P Perkins (Douglaspperkins (talk))",
    "license": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:2010-02.niseko_annupuri.jpg"
  }
}
};
