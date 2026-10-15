import type { FeaturedCityGuideData } from './featuredCityGuides';
import { jacksonHoleDraftGuide } from './jacksonHoleDraftGuide';
/** Staged FR/EN guide; NOT commercially image-approved and NOT indexed. */
const draft=jacksonHoleDraftGuide;
export const jacksonHoleGuide:FeaturedCityGuideData={
 ...draft,hero:"scene-1",secondary:"scene-4",
 areas:draft.areas.map(x=>({...x})),experiences:draft.experiences.map(x=>({...x})),
 hotels:draft.hotels.map(x=>({...x})),checksFr:[...draft.checksFr],checksEn:[...draft.checksEn],
 photos:{
  "scene-1": {
    "src": "/images/travel/jackson-hole-premium/destination/scene-1.webp",
    "fr": "Teton mountains — photographie de Jackson Hole, à contrôler avant publication",
    "en": "Teton mountains — Jackson Hole source-backed photograph pending review",
    "author": "Acroterion",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Garnet_Canyon_GTNP1.jpg"
  },
  "scene-2": {
    "src": "/images/travel/jackson-hole-premium/destination/scene-2.webp",
    "fr": "Teton Village — photographie de Jackson Hole, à contrôler avant publication",
    "en": "Teton Village — Jackson Hole source-backed photograph pending review",
    "author": "Crystalmountainskier",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:START_Bus_in_Teton_Village.jpg"
  },
  "scene-3": {
    "src": "/images/travel/jackson-hole-premium/destination/scene-3.webp",
    "fr": "Jackson Town Square — photographie de Jackson Hole, à contrôler avant publication",
    "en": "Jackson Town Square — Jackson Hole source-backed photograph pending review",
    "author": "Schwerdf",
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Elk_antler_arch_at_Jackson_Square,_Jackson,_WY_2022-07-11.jpg"
  },
  "scene-4": {
    "src": "/images/travel/jackson-hole-premium/destination/scene-4.webp",
    "fr": "Snake River — photographie de Jackson Hole, à contrôler avant publication",
    "en": "Snake River — Jackson Hole source-backed photograph pending review",
    "author": "Frank Kovalchek",
    "license": "CC BY 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Grand_Teton_from_the_Snake_River_Overlook.jpg"
  },
  "scene-5": {
    "src": "/images/travel/jackson-hole-premium/destination/scene-5.webp",
    "fr": "Grand Teton — photographie de Jackson Hole, à contrôler avant publication",
    "en": "Grand Teton — Jackson Hole source-backed photograph pending review",
    "author": "NPS staff",
    "license": "Public domain",
    "licenseUrl": "https://commons.wikimedia.org/wiki/File:Views_at_Grand_Teton_National_Park,_Wyoming_(24029770-4738-47df-8265-9e1d86a09f27).jpg",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Views_at_Grand_Teton_National_Park,_Wyoming_(24029770-4738-47df-8265-9e1d86a09f27).jpg"
  },
  "scene-8": {
    "src": "/images/travel/jackson-hole-premium/destination/scene-8.webp",
    "fr": "National park — photographie de Jackson Hole, à contrôler avant publication",
    "en": "National park — Jackson Hole source-backed photograph pending review",
    "author": "Jon Sullivan, PD Photo.",
    "license": "Public domain",
    "licenseUrl": "https://commons.wikimedia.org/wiki/File:Barns_grand_tetons.jpg",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Barns_grand_tetons.jpg"
  }
}
};
