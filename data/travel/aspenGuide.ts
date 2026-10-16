import type { FeaturedCityGuideData } from './featuredCityGuides';
import { aspenDraftGuide } from './aspenDraftGuide';
/** Prepared, non-indexable premium guide. Photos remain Preview-only; rights review before production. */
const draft=aspenDraftGuide;
export const aspenGuide:FeaturedCityGuideData={
 ...draft,
 hero:"scene-1",
 secondary:"scene-2",
 areas:draft.areas.map(a=>({...a})),
 experiences:draft.experiences.map(x=>({...x})),
 hotels:draft.hotels.map(h=>({...h})),
 checksFr:[...draft.checksFr],checksEn:[...draft.checksEn],
 photos:{
  "scene-1": {
    "src": "/images/travel/aspen-premium/destination/scene-1.webp",
    "fr": "Aspen Mountain et la télécabine Silver Queen",
    "en": "Aspen Mountain and Silver Queen Gondola",
    "author": "This Photo  was taken by    Wolfgang Moroder   .        \n Feel free to use my photos, but please mention me as the author and send me a   message",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Aspen_Mountain_Silver_Queen_Gondola_over_Silver_dip_run.jpg"
  },
  "scene-2": {
    "src": "/images/travel/aspen-premium/destination/scene-2.webp",
    "fr": "Aspen downtown — photographie de la destination",
    "en": "An actual photograph of Aspen downtown",
    "author": "Daniel Case",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Main_Street,_Aspen,_CO.jpg"
  },
  "scene-3": {
    "src": "/images/travel/aspen-premium/destination/scene-3.webp",
    "fr": "Silver Queen Gondola — photographie de la destination",
    "en": "An actual photograph of Silver Queen Gondola",
    "author": "DimiTalen",
    "license": "CC0",
    "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Silver_Queen_Gondola_base_station,_Gondola_Plaza,_Aspen,_2009.jpg"
  },
  "scene-4": {
    "src": "/images/travel/aspen-premium/destination/scene-4.webp",
    "fr": "Aspen Main Street — photographie de la destination",
    "en": "An actual photograph of Aspen Main Street",
    "author": "Daniel Case",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:La_Fave_Block,_Aspen,_CO.jpg"
  },
  "scene-5": {
    "src": "/images/travel/aspen-premium/destination/scene-5.webp",
    "fr": "Aspen West End — photographie de la destination",
    "en": "An actual photograph of Aspen West End",
    "author": "Jeffrey Beall",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Shilling-Lamb_House.JPG"
  },
  "scene-6": {
    "src": "/images/travel/aspen-premium/destination/scene-6.webp",
    "fr": "Aspen Highlands — photographie de la destination",
    "en": "An actual photograph of Aspen Highlands",
    "author": "This Photo  was taken by    Wolfgang Moroder   .        \n Feel free to use my photos, but please mention me as the author and send me a   message",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Aspen_Highlands_bowl_from_Loge_Peak_.jpg"
  },
  "scene-7": {
    "src": "/images/travel/aspen-premium/destination/scene-7.webp",
    "fr": "Buttermilk ski mountain — photographie de la destination",
    "en": "An actual photograph of Buttermilk ski mountain",
    "author": "Werdna",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Buttermilk_in_Winter.jpg"
  },
  "scene-8": {
    "src": "/images/travel/aspen-premium/destination/scene-8.webp",
    "fr": "Snowmass Village — photographie de la destination",
    "en": "An actual photograph of Snowmass Village",
    "author": "\n\n\n  This Photo was taken by Wolfgang Moroder.  \n\nFeel free to use my photos, but please mention me as the author and send me a  message. \n\n\n\nThi",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Snowmass_gondola_and_Ski_area.jpg"
  },
  "scene-9": {
    "src": "/images/travel/aspen-premium/destination/scene-9.webp",
    "fr": "Maroon Bells · vue vérifiée de Aspen",
    "en": "Maroon Bells · verified view of Aspen",
    "author": "Scott Mecum, U.S. Forest Service / U.S. Department of Agriculture",
    "license": "Public domain",
    "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Maroon_Bells,_two_peaks_in_the_Elk_Mountains_that_are_less_than_half-mile_apart,_are_reflected_on_Maroon_Lake.jpg"
  }
}

};
