import type { FeaturedCityGuideData } from './featuredCityGuides';
import { bigSkyDraftGuide } from './bigSkyDraftGuide';
/** Staged FR/EN guide; NOT commercially image-approved and NOT indexed. */
const draft=bigSkyDraftGuide;
export const bigSkyGuide:FeaturedCityGuideData={
 ...draft,hero:"scene-1",secondary:"scene-2",
 areas:draft.areas.map(x=>({...x})),experiences:draft.experiences.map(x=>({...x})),
 hotels:draft.hotels.map(x=>({...x})),checksFr:[...draft.checksFr],checksEn:[...draft.checksEn],
 photos:{
  "scene-1": {
    "src": "/images/travel/big-sky-premium/destination/scene-1.webp",
    "fr": "Lone Peak — photographie de Big Sky, à contrôler avant publication",
    "en": "Lone Peak — Big Sky source-backed photograph pending review",
    "author": "Goldman60",
    "license": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Lone_Peak,_Big_Sky,_Montana.jpg"
  },
  "scene-2": {
    "src": "/images/travel/big-sky-premium/destination/scene-2.webp",
    "fr": "Mountain Village — photographie de Big Sky, à contrôler avant publication",
    "en": "Mountain Village — Big Sky source-backed photograph pending review",
    "author": "Jim  from Lexington, KY, USA",
    "license": "CC BY-SA 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Big_Sky_resort.jpg"
  },
  "scene-3": {
    "src": "/images/travel/big-sky-premium/destination/scene-3.webp",
    "fr": "Spanish Peaks — photographie de Big Sky, à contrôler avant publication",
    "en": "Spanish Peaks — Big Sky source-backed photograph pending review",
    "author": "NOAA Photo Library, NOAA Central Library; Family of Captain William M. Scaife, C&amp;GS.",
    "license": "Public domain",
    "licenseUrl": "https://commons.wikimedia.org/wiki/File:Theb0802_-_Flickr_-_NOAA_Photo_Library.jpg",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Theb0802_-_Flickr_-_NOAA_Photo_Library.jpg"
  },
  "scene-4": {
    "src": "/images/travel/big-sky-premium/destination/scene-4.webp",
    "fr": "Moonlight Basin — photographie de Big Sky, à contrôler avant publication",
    "en": "Moonlight Basin — Big Sky source-backed photograph pending review",
    "author": "Brett",
    "license": "CC BY 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Moonlight_Basin_replica.jpg"
  },
  "scene-5": {
    "src": "/images/travel/big-sky-premium/destination/scene-5.webp",
    "fr": "Lone Mountain Ranch — photographie de Big Sky, à contrôler avant publication",
    "en": "Lone Mountain Ranch — Big Sky source-backed photograph pending review",
    "author": "Richardmouser",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Lone_Mountain,_January_2018.jpg"
  }
}
};
