import type {FeaturedCityGuideData} from './featuredCityGuides';
import {tangalleDraftGuide} from './tangalleDraftGuide';
/** No unverified photos are used. Licensed imagery is integrated only after source, rights and visual review. */
export const tangalleGuide:FeaturedCityGuideData={...tangalleDraftGuide,photos:{}};
