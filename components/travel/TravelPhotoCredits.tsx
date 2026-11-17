import Link from 'next/link';
import { featuredCityGuides } from '@/data/travel/featuredCityGuides';
import { istanbulCityScenes } from '@/data/travel/istanbulCityScenes';
import { istanbulHotelPhotos } from '@/data/travel/hotelPhotography';
import { areaPhotoLicensesByCity, getDestinationAreaPhoto, hotelEditorialByCity } from '@/components/travel/FeaturedCityGuide';

import {nativeTravelName} from '@/data/travel/localizedNames';
import {travelHref} from '@/lib/travel/i18n';
type Language = 'fr' | 'en' | 'ru' | 'ar';
type PhotoCredit = {
  src: string;
  author: string;
  sourcePage: string;
  license?: string;
  licenseUrl?: string;
};

function sourceCredits() {
  return Object.values(featuredCityGuides).map((city) => {
    const photos = new Map<string, PhotoCredit>();
    const record = (credit: PhotoCredit) => {
      if (credit.src && credit.sourcePage && !photos.has(credit.src)) photos.set(credit.src, credit);
    };
    for (const photo of Object.values(city.photos)) {
      record({src: photo.src, author: photo.author, sourcePage: photo.sourcePage, license: photo.license, licenseUrl: photo.licenseUrl});
    }
    for (const editorial of Object.values(hotelEditorialByCity[city.slug] || {})) {
      for (const photo of editorial.photos || []) {
        const license = areaPhotoLicensesByCity[city.slug]?.[photo.src];
        record({src:photo.src, author:photo.credit, sourcePage:photo.sourcePage, license:license?.name, licenseUrl:license?.url});
      }
    }
    for (let index = 0; index < city.areas.length; index++) {
      const photo = getDestinationAreaPhoto(city.slug,index);
      if (!photo) continue;
      const license = areaPhotoLicensesByCity[city.slug]?.[photo.src];
      record({src:photo.src, author:photo.credit, sourcePage:photo.sourcePage, license:license?.name, licenseUrl:license?.url});
    }
    if (city.slug === 'istanbul') {
      for (const photo of Object.values(istanbulCityScenes)) {
        record({src:photo.src, author:photo.author, sourcePage:photo.sourcePage, license:photo.license, licenseUrl:photo.licenseUrl});
      }
      for (const hotelGallery of Object.values(istanbulHotelPhotos)) {
        for (const photo of hotelGallery) {
          record({src:photo.src, author:'Photographie de l’établissement', sourcePage:photo.sourcePage});
        }
      }
    }
    return {city, photos:[...photos.values()]};
  }).filter(group => group.photos.length > 0);
}

export function TravelPhotoCredits({locale}: {locale:Language}) {
  const c={
 fr:{back:'Retour aux destinations',title:'Crédits photographiques',intro:'Les informations sur les auteurs, les sources et les licences sont regroupées ici afin de laisser les guides et les galeries photographiques épurés. Les droits des auteurs et des établissements restent réservés.',source:'Source de l’image',license:'Licence',property:'Photographie de l’établissement'},
 en:{back:'Back to destinations',title:'Photographic credits',intro:'Photographer, source and licence details are gathered here so that destination guides and hotel galleries remain uncluttered. All rights remain with their respective owners.',source:'Image source',license:'License',property:'Property photograph'},
 ru:{back:'К направлениям',title:'Авторы и источники фотографий',intro:'Здесь собраны сведения об авторах, источниках и лицензиях фотографий, чтобы путеводители и галереи оставались удобными для чтения. Права принадлежат соответствующим авторам и отелям.',source:'Источник изображения',license:'Лицензия',property:'Фотография отеля'},
 ar:{back:'العودة إلى الوجهات',title:'حقوق الصور ومصادرها',intro:'نجمع هنا معلومات المصورين والمصادر والتراخيص لتبقى الأدلة ومعارض الصور سهلة التصفح. تظل الحقوق محفوظة لأصحابها من المصورين والفنادق.',source:'مصدر الصورة',license:'الترخيص',property:'صورة الفندق'}
 }[locale];
  const sections = sourceCredits();
  return (
    <main lang={locale} dir={locale==='ar'?'rtl':'ltr'} className="min-h-screen bg-white px-5 pb-20 pt-16 text-[#202629]">
      <div className="mx-auto max-w-5xl">
        <Link href={travelHref(locale,'destinations')} className="text-sm text-[#193344] underline underline-offset-4">
          ← {c.back}
        </Link>
        <h1 className="mt-8 font-sans text-4xl font-normal tracking-[-0.035em] sm:text-5xl">
          {c.title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-[#53616b]">
          {c.intro}
        </p>
        <div className="mt-12 space-y-3">
          {sections.map(({city,photos})=>(
            <details key={city.slug} className="group border border-[#e1e5e5] bg-[#f5f5f3]">
              <summary className="cursor-pointer px-5 py-4 text-base font-medium text-[#193344]">
                {nativeTravelName(city.slug,locale,city.name)} <span className="ml-2 text-sm font-normal text-[#53616b]">({photos.length})</span>
              </summary>
              <ul className="space-y-4 border-t border-[#e1e5e5] bg-white px-5 py-6 text-sm leading-6">
                {photos.map((photo)=>(
                  <li key={photo.src} className="border-b border-[#e1e5e5] pb-4 last:border-0 last:pb-0">
                    <span className="block break-all text-xs text-[#647078]">{photo.src}</span>
                    <span className="mt-1 block">{photo.author==='Photographie de l’établissement'?c.property:photo.author}</span>
                    <a href={photo.sourcePage} target="_blank" rel="noopener noreferrer" className="text-[#193344] underline underline-offset-2">
                      {c.source} ↗
                    </a>
                    {photo.licenseUrl && (
                      <span className="ml-3">
                        <a href={photo.licenseUrl} target="_blank" rel="noopener noreferrer" className="text-[#193344] underline underline-offset-2">{photo.license || c.license} ↗</a>
                      </span>
                    )}
                    {!photo.licenseUrl && photo.license && <span className="ml-3 text-[#647078]">{photo.license}</span>}
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </div>
    </main>
  );
}
