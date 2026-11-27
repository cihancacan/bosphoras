import Image from 'next/image';

type Props={src:string;alt:string;className?:string;sizes:string};
const mobile:Record<string,string>={
 '/images/travel/paris-premium/destination/paris-seine-hero.webp':'/images/travel/paris-premium/destination/paris-seine-hero-mobile.webp',
 '/images/travel/dubai-premium/destination/west-beach-hero.webp':'/images/travel/dubai-premium/destination/west-beach-hero-mobile.webp',
};
export function TravelHeroImage({src,alt,className,sizes}:Props){
 const compact=mobile[src];
 if(!compact)return <Image src={src} alt={alt} fill priority sizes={sizes} className={className}/>;
 // Use the same approved photograph; only the mobile resolution is different.
 return <picture><source media="(max-width: 639px)" srcSet={compact}/><img src={src} alt={alt} loading="eager" fetchPriority="high" decoding="async" className={className} style={{position:'absolute',inset:0,width:'100%',height:'100%'}}/></picture>;
}
