import { bosphorasProgrammaticSeoPages } from './bosphorasProgrammaticSeoPages';
import { bosphorasAdditionalSeoPages } from './bosphorasAdditionalSeoPages';
import { bosphorasVisaResidenceSeoPages } from './bosphorasVisaResidenceSeoPages';
import { bosphorasCountryVisaSeoPages } from './bosphorasCountryVisaSeoPages';
import { bosphorasVisaTypeSeoPages } from './bosphorasVisaTypeSeoPages';

export const allBosphorasSeoPages = [
  ...bosphorasProgrammaticSeoPages,
  ...bosphorasAdditionalSeoPages,
  ...bosphorasVisaResidenceSeoPages,
  ...bosphorasCountryVisaSeoPages,
  ...bosphorasVisaTypeSeoPages,
];
