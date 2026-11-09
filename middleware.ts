import { NextResponse, type NextRequest } from 'next/server';
import { preferredSiteLanguage, siteLanguageCookie } from './lib/siteLanguage';

export function middleware(request: NextRequest) {
  if(request.nextUrl.pathname!=='/' || !['GET','HEAD'].includes(request.method)) return NextResponse.next();
  const language=preferredSiteLanguage(request.headers.get('accept-language'),request.cookies.get(siteLanguageCookie)?.value);
  const destination=request.nextUrl.clone();
  destination.pathname=language==='fr'?'/':'/'+language;
  const response=language==='fr'?NextResponse.next():NextResponse.redirect(destination,307);
  response.headers.set('Cache-Control','private, no-store');
  response.headers.append('Vary','Accept-Language, Cookie');
  return response;
}

export const config={matcher:['/']};
