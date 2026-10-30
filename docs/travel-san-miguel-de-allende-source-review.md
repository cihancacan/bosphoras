# San Miguel de Allende — premium destination #60

30 October 2026. Continue the existing `feature/luxury-travel-seo-destinations-20261012` branch. The 88 geographic slugs and all preceding 59 premium guides are retained. No production branch change or supplier activation.

## Editorial and hotel identity

Four real, distinct properties: Rosewood San Miguel de Allende; Casa de Sierra Nevada, A Belmond Hotel; Hotel Matilda; Live Aqua San Miguel de Allende. Independent French and English editorial covers five settings (historic centre, Calle Aldama, Parque Juárez, El Charco del Ingenio, southwest heights), five experiences, eight practical checks and eight FAQ per language. La Aurora remains a cultural experience; it is not illustrated with an unrelated park photograph.

Primary sources checked on 30 October 2026:
- https://www.rosewoodhotels.com/en/san-miguel-de-allende — gardens, hacienda-inspired setting, room and residence distinctions, Luna Rooftop.
- https://www.belmond.com/hotels/north-america/mexico/san-miguel-de-allende/belmond-casa-de-sierra-nevada/ — historic houses, gardens, individual accommodation types.
- https://hotelmatilda.com/ — contemporary art identity, rooms and property imagery.
- https://www.fiestamericanatravelty.com/en/live-aqua/hotels/live-aqua-san-miguel-de-allende — location beside Presa del Obraje, urban resort and property-specific rooms.
- https://whc.unesco.org/en/list/1274/ — combined historic-town/Atotonilco inscription. The sanctuary is outside the town, not another central hotel district.
- https://www.visitsanmiguel.travel/en and https://www.visitsanmiguel.travel/en/hoteles — local destination and hotel publisher.
- https://elcharco.org.mx/area-natural-protegida/ — reserve trails and highland environment.
- https://fabricalaaurora.com/ — galleries and studios, separate from the Parque Juárez setting.

No fixed transfer times, invented inclusions, room views, prices or room availability. Historic houses, private terraces and private pools are category-specific. Public rooftops do not establish a room outlook. Official hotel links are informational, not fabricated affiliate bookings.

## Images and rights

21 distinct, manually reviewed local WebP photographs: nine destination photographs and three per hotel. Every source URL, publisher/author credit, bilingual caption, SHA256, resized-pixel fingerprint and file size is recorded in `sanMiguelDeAllendeMediaCandidates.json`. A contact-sheet review rejected tourism advertisements, generic activities, winery closeups, other Belmond properties and La Aurora collages.

The three Commons photographs have explicit attribution/licence links and archival captions: Parque Juárez (StellarD, 2014, CC BY-SA 3.0); southwest town panorama (AlejandroLinaresGarcia, 2017, CC BY-SA 4.0); Teatro Ángela Peralta facade (Alejandro, 2016, CC BY 2.0). The panorama is a southwest viewpoint, not a hotel terrace. Source pages are recorded in the manifest.

All other destination and hotel publisher photos remain `commercialRightsCleared=false`. An official source does not establish commercial republication permission. They are for this protected owner Preview only and excluded from JSON-LD. No public production or indexing authorisation. The explicit-source collector restores only the exact reviewed bytes and stops if the upstream photo changes.

## Implementation and verification

Reuse the existing shared destination/hotel layout, colours, typography, header and footer. Register #60 in the existing guide registry; no new geographic slug. Include destination and hotel guides in FR/EN, bilingual metadata, canonical URLs, ItemList and FAQ JSON-LD. Keep noindex and the approval sets unchanged. Add the new integrity check to the existing GitHub editorial workflow. Update the Mayakoba regression to allow later additions while preserving Mayakoba itself.

Runtime integrity checks verify 60 guides, 88 unique geographic destinations, four correct hotel identities, all 21 actual WebP hashes, no byte/pixel duplicates, three photos per correct hotel, five sector-photo mappings, bilingual FAQ, and rejection of substituted/unreviewed media. Browser checks cover FR/EN, destination-to-hotel navigation, metadata, image loading and horizontal overflow at desktop/mobile widths.

Release sequence: complete local checks and visual review; commit the full batch without a Vercel release marker; require GitHub checks success; request exactly one Preview build using `[travel-batch-ready]`; verify the deployment is READY and matches the released commit, then inspect hosted French/English routes. Never promote to production.
