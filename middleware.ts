import { NextResponse, type NextRequest } from 'next/server';
import { preferredSiteLanguage, siteLanguageCookie } from './lib/siteLanguage';
import { preferredTravelLanguage, travelLanguageCookie } from './lib/travel/languagePreference';

export function middleware(request: NextRequest) {
 if(!['GET','HEAD'].includes(request.method)) return NextResponse.next();
 const pathname=request.nextUrl.pathname;
 if(pathname==='/'){
  // Preserve the existing corporate-site language behaviour.
  const language=preferredSiteLanguage(request.headers.get('accept-language'),request.cookies.get(siteLanguageCookie)?.value);
  const destination=request.nextUrl.clone();
  destination.pathname=language==='fr'?'/':'/'+language;
  const response=language==='fr'?NextResponse.next():NextResponse.redirect(destination,307);
  response.headers.set('Cache-Control','private, no-store');
  response.headers.append('Vary','Accept-Language, Cookie');
  return response;
 }
 // Only neutral travel entrances are negotiated, never keyword SEO pages or
 // explicitly selected /de/travel, /en/travel, /ru/travel etc.
 if(pathname!=='/travel'&&pathname!=='/travel/private-collection') return NextResponse.next();
 const saved=request.cookies.get(travelLanguageCookie)?.value || request.cookies.get(siteLanguageCookie)?.value;
 const language=preferredTravelLanguage(request.headers.get('accept-language'),saved);
 const destination=request.nextUrl.clone();
 if(language!=='fr')destination.pathname='/'+language+pathname;
 const response=language==='fr'?NextResponse.next():NextResponse.redirect(destination,307);
 response.headers.set('Cache-Control','private, no-store');
 response.headers.append('Vary','Accept-Language, Cookie');
 return response;
}

export const config={matcher:['/','/travel','/travel/private-collection']};
