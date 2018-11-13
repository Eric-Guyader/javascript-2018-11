/**
 * Définit un objet repésentant notre parc, ses régions et leurs attractions;
 *   Description
 *   Pré-requis
 *   Temps d'attente
 *   Ticket rapide?
 *   En marche?  
 *   Coordonnées GPS
 *          - latitude
*           - longitude

 * Nos régions:
 *  - Montagne
 *      * La cordée Pyrénéenne
 *      * Padi-ride
*       * Le saut de Millau
 *  - Campagne
*        * Les champignons périgourdins
*        * Les cochons dans le maïs
*        * Les rafales d'Autan
 *  - Eaux vives
 *        * Les rouleaux de Baïne
 *  - Traditions
 *         * La mêlée infernale 
 */


 let parc = {
    tarifs:{
        'enfants': {
            conditions: '< 12 ans',
            prix: 24.90
        },
        'adultes': {
            prix: 39.90
        },
        'seniors': {
            conditions: '> 65 ans',
            prix: 29.90
        }
    },
    regions: [
        {
            nom: 'Montagne',
            description: 'Attractions de haut vol, restaurants et slow-foods d\'altitude',
            attractions:{
                'la-cordee-pyreneeneene':{
                    nom: 'La cordée Pyrénéenne',
                    marche: true,
                    attente: 45,
                    ticketRapide: true,
                    coordonnees:{latitude:43.5349295, longitude: 1.5229784},
                    prerequis:{
                        taille:132,
                        'poids-maximum': 110
                    } 
                },
                'padi-ride':{
                    nom: 'Padi-ride',
                    marche: true,
                    attente: 105,
                    ticketRapide: false,
                    coordonnees:{latitude:43.5347885, longitude: 1.5229887},
                    prerequis:{
                        enceinte:false,
                    } 
                },
                'le-saut-de-millau':{
                    nom: 'Le saut de Millau',
                    marche: true,
                    attente: 15,
                    ticketRapide: false,
                    coordonnees:{latitude:43.5342154, longitude: 1.5236878},
                    prerequis:{
                        enceinte:false,
                        lunettes: false,
                        'poids-maximum': 150
                    } 
                },
            }
        },
        {
            nom: 'Campagne',
            description: 'Attractions pour toute la famille, restaurants copieux et en direct de nos fermes',
            attractions:{
                'champignons-perigourdins':{
                    nom: 'Les champignons périgourdins',
                    marche: false,
                    attente: 30,
                    ticketRapide: false,
                    coordonnees:{latitude:43.5687985, longitude: 1.53524484}

                },
                'cochons-dans-le-mais':{
                    nom: 'Les cochons dans le maïs',
                    marche: true,
                    attente: 120,
                    ticketRapide: true,
                    coordonnees:{latitude:43.536584, longitude: 1.5245891},
                    prerequis:{
                        'taille-maximum': 170
                    } 
                }
            }
        }
    ]
 }