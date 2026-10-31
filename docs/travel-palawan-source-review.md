# Palawan #66 — sources et préparation éditoriale (brouillon privé)

**31 octobre 2026** · Branche : `feature/luxury-travel-seo-destinations-20261012`.

Palawan suit Sumba (#65) dans le catalogue de 88 destinations. Ne pas confondre 88 zones référencées et 65 guides premium édités. La prochaine destination complète sera Palawan, **sans dupliquer Amanpulo/Pamalican**, déjà présent sous `pamalican-island`.

## Direction artistique et expérience à raconter

- **El Nido / Bacuit Bay** : falaises de calcaire, eau turquoise, lagons et approches en bateau ; photographies de paysages identifiables, pas de plage générique d'une autre île.
- **Lio, Caalan et El Nido côté terre** : accès à la ville et à l'aéroport, plutôt qu'une promesse de villa privée sur une île.
- **Coron / Busuanga / Dimakya** : plongée sur épaves, lacs et îles distincts d'El Nido. Ne pas suggérer un aller-retour improvisé entre les deux.
- **San Vicente / Port Barton** : Long Beach, villages, îlots et séjours plus lents. Les transports et hôtels n'ont pas l'infrastructure des resorts de Bacuit.
- **Puerto Princesa / Sabang** : entrée vers la rivière souterraine, permis et logistique propres à cette zone.

## Sélection de quatre propriétés vérifiables

1. **El Nido Resorts Lagen Island**, Bacuit Bay. Adresse rénovée en 2026 avec 42 unités et options de villas sur l'eau et forestières. Sources officielles : https://ayalalandhospitality.com/en/el-nido/hotels/lagen et WATG https://www.watg.com/project/lagen-el-nido/ ; compte rendu de fin de rénovation : https://watg.prezly.com/watg-completes-lagen-island-resort-el-nido-showcasing-a-new-benchmark-for-preservation-first-luxury-in-the-philippines
2. **El Nido Resorts Pangulasian Island**, El Nido / Bacuit. Séjour plage et forêt distinct de Lagen. Opérateur officiel https://ayalalandhospitality.com/en/el-nido ; vérifier le lien propre à l'hôtel avant publication. Également identifié par le Guide Michelin : https://guide.michelin.com/en/article/travel/all-the-key-hotels-philippines-michelin-guide
3. **Cauayan Boutique Private Island**, El Nido : 30 villas, 8 catégories, dont Water Villa, Lagoon Villa et types de Cauayan Pool Villa. Seules les catégories `Pool` précisément nommées permettent de présumer un bassin privatif ; ne pas le promettre aux autres. https://www.cauayanresort.com/about-us/cauayan-boutique-private-island et https://www.cauayanresort.com/our-villas
4. **Discovery Coron**, Dimakya / Busuanga : base insulaire pour Coron, non située à El Nido. Site officiel : https://discoveryhospitality.com/destinations/coron ; groupe https://www.discoveryworld.com/euro-pacific-resorts-inc

**À ne pas ajouter comme cinquième propriété :** Amanpulo à Pamalican, déjà traité comme destination autonome dans le catalogue. Site officiel https://www.aman.com/resorts/amanpulo.

## Informations de terrain à intégrer au texte SEO FR/EN

La géographie du guide doit précéder la comparaison hôtelière. Les portes d'entrée distinctes sont El Nido/Lio (ENI), Busuanga (USU) et Puerto Princesa (PPS), avec transferts terrestres et bateaux selon le resort. Ne pas figer les compagnies, fréquences ou temps de bateaux. Le bureau de tourisme d'El Nido demande le recours à des établissements et opérateurs agréés : https://www.elnidoofficial.com/. Informations générales et zones : https://www.tourismphilippines.com.au/where/palawan ; https://app.philippines.travel/destinations/palawan ; organisation de San Vicente : https://tieza.gov.ph/san-vicente-flagship-tez/.

Distinguer catégories de chambre, bassin privé, nombre de personnes, vue réelle, embarcadère, météo maritime, règlementation des lagons, qualification de plongée et acceptation des enfants. Préparer cinq secteurs distincts, cinq expériences, FAQ FR/EN et métadonnées dédiées aux pages `/travel/destinations/palawan`, `/en/travel/destinations/palawan`, `/travel/hotels/palawan`, `/en/travel/hotels/palawan`.

## Gates avant intégration

1. Réunir **9 vraies photographies de paysages de Palawan** et **3 vraies photographies de chacun des quatre hôtels** (21 photos uniques), droits/provenance, crédits et empreintes SHA-256 vérifiés ; aucune photo stock substituée.
2. Rédiger les guides longs FR/EN originaux, secteurs, comparatif précis des quatre hôtels, 8 FAQ par langue et conseils logistiques.
3. Connecter uniquement des médias validés aux composants partagés et au JSON-LD. Ne pas utiliser des photos éditeurs comme libres pour publication publique sans droits démontrés.
4. Typecheck, contrôles catalogue 88/66, non-régression des 65 guides, noindex, intégrité photo, SSR et rendu responsive.
5. **Une Preview privée validée en lot**, sans déploiement en production `main` ni indexation tant que droits et éventuelle API de réservation/SAV ne sont pas confirmés.

**Statut de ce document :** recherche et préparation de la destination #66, **pas une destination terminée, ni mise en page, ni déployée**. Aucune photo n'est déclarée acquise ici. Aucune réservation, disponibilité ni prestation de SAV fournisseur n'est prétendue.
