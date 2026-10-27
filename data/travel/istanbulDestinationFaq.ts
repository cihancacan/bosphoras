
/** Extend the already-published flagship FAQ without rewriting or duplicating its prose. */
import {istanbulFaqs} from './istanbulFlagship';
export const istanbulDestinationFaq={
 fr:[
 ...istanbulFaqs.map(x=>({q:x.qFr,a:x.aFr})),
 {q:'Quel aéroport d’Istanbul choisir, IST ou SAW ?',a:'IST se trouve sur la rive européenne, SAW sur la rive asiatique. Le trajet dépend du quartier et de la circulation ; confirmer la durée et le devis exacts avant de réserver le transfert.'},
 {q:'La location d’un yacht est-elle comprise dans les hôtels ?',a:'Non. Les traversées publiques et les excursions privées sont des prestations distinctes. Une privatisation, si disponible, doit être proposée et chiffrée séparément.'}
 ],
 en:[
 ...istanbulFaqs.map(x=>({q:x.qEn,a:x.aEn})),
 {q:'Should I arrive at Istanbul Airport (IST) or Sabiha Gökçen (SAW)?',a:'IST and SAW are separate airports on opposite sides of the city. Transfers depend on the hotel address and traffic; confirm exact quotes and routes.'},
 {q:'Is a private yacht included with the hotels?',a:'No. Public ferry journeys and private yacht charters are different services. Any private outing requires a separate verified quote and arrangement.'}
 ]
} as const;
