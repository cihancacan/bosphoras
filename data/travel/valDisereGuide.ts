import type { FeaturedCityGuideData } from './featuredCityGuides';
import { valDisereDraftGuide } from './valDisereDraftGuide';
/** Staged FR/EN guide; NOT commercially image-approved and NOT indexed. */
const draft=valDisereDraftGuide;
export const valDisereGuide:FeaturedCityGuideData={
 ...draft,hero:"scene-1",secondary:"scene-2",
 areas:draft.areas.map(x=>({...x})),experiences:draft.experiences.map(x=>({...x})),
 hotels:draft.hotels.map(x=>({...x})),checksFr:[...draft.checksFr],checksEn:[...draft.checksEn],
 photos:{
  "scene-1": {
    "src": "/images/travel/val-disere-premium/destination/scene-1.webp",
    "fr": "Val d'Isère old village — photographie de Val d'Isère, à contrôler avant publication",
    "en": "Val d'Isère old village — Val d'Isère source-backed photograph pending review",
    "author": "Rundvald",
    "license": "Public domain",
    "licenseUrl": "https://commons.wikimedia.org/wiki/File:Val-dIsere-église-chemin-du-Charvet.JPG",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Val-dIsere-église-chemin-du-Charvet.JPG"
  },
  "scene-2": {
    "src": "/images/travel/val-disere-premium/destination/scene-2.webp",
    "fr": "Solaise slopes — photographie de Val d'Isère, à contrôler avant publication",
    "en": "Solaise slopes — Val d'Isère source-backed photograph pending review",
    "author": "Florian Pépellin",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Solaise_à_Val-d'Isère_depuis_Barrage_de_Tignes_(février_2026).JPG"
  },
  "scene-4": {
    "src": "/images/travel/val-disere-premium/destination/scene-4.webp",
    "fr": "La Daille Funival — photographie de Val d'Isère, à contrôler avant publication",
    "en": "La Daille Funival — Val d'Isère source-backed photograph pending review",
    "author": "Rémih",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Funival_@_La_Daille_01.jpg"
  },
  "scene-6": {
    "src": "/images/travel/val-disere-premium/destination/scene-6.webp",
    "fr": "Le Fornet, hameau authentique photographié en été",
    "en": "Le Fornet hamlet in summer, not a winter view",
    "author": "Anthospace",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Maisons_Le_Fornet_Val_d'Isère.jpg"
  },
  "scene-9": {
    "src": "/images/travel/val-disere-premium/destination/scene-9.webp",
    "fr": "Val d'Isère summer — photographie de Val d'Isère, à contrôler avant publication",
    "en": "Val d'Isère summer — Val d'Isère source-backed photograph pending review",
    "author": "Florian Pépellin",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Isère_au_Fornet_à_Val-d'Isère_en_été_(juillet_2022).JPG"
  },
  "scene-3": {
    "src": "/images/travel/val-disere-premium/destination/scene-3.webp",
    "fr": "Bellevarde slopes · vue vérifiée de Val d'Isère",
    "en": "Bellevarde slopes · verified view of Val d'Isère",
    "author": "Jmex",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:Face_de_Bellevarde_2014.JPG"
  },
  "scene-7": {
    "src": "/images/travel/val-disere-premium/destination/scene-7.webp",
    "fr": "Manchet valley · vue vérifiée de Val d'Isère",
    "en": "Manchet valley · verified view of Val d'Isère",
    "author": "Place photograph from identified original travel destination source",
    "license": "Autorisation Bosphoras",
    "licenseUrl": "https://www.valdisere.com/en/val-disere-in-winter/skiing-winter-fun/cross-country-skiing/great-manchet-loop-val-disere-en-4710589/",
    "sourcePage": "https://www.valdisere.com/en/val-disere-in-winter/skiing-winter-fun/cross-country-skiing/great-manchet-loop-val-disere-en-4710589/"
  },
  "scene-8": {
    "src": "/images/travel/val-disere-premium/destination/scene-8.webp",
    "fr": "Prariond chalets · vue vérifiée de Val d'Isère",
    "en": "Prariond chalets · verified view of Val d'Isère",
    "author": "Place photograph from identified original travel destination source",
    "license": "Autorisation Bosphoras",
    "licenseUrl": "https://www.village-montana.com/val-disere/chalet-skadi",
    "sourcePage": "https://www.village-montana.com/val-disere/chalet-skadi"
  },
  "scene-5": {
    "src": "/images/travel/val-disere-premium/destination/scene-5.webp",
    "fr": "Le Laisinant à Val d'Isère en hiver : maisons de pierre enneigées et skieuse dans la ruelle",
    "en": "Le Laisinant in Val d'Isère in winter: snow-covered stone chalets and a skier walking through the hamlet",
    "author": "Yann Allègre · Val d’Isère Tourisme",
    "license": "Autorisation Bosphoras",
    "licenseUrl": "https://www.valdisere.com/en/val-disere-in-winter/walks-and-snowshoeing-tours/",
    "sourcePage": "https://www.valdisere.com/en/val-disere-in-winter/walks-and-snowshoeing-tours/"
  }
}

};
