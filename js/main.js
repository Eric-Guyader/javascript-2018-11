/**
 * Définir une fonction renvoyant l'état et le temps d'attente de toutes les attractions du parc.
 * 
 * Utiliser cette fonction pour afficher ces infos dans la console.
 */

let parcUtils = (function(parc){
    return {
        getTempsEtEtatsAttractions: () => {
            return parc.regions.flatMap( region => {
                let attractions = Object.values(region.attractions)
                return attractions.map( attraction => ({region: region.nom, 
                                                        nom: attraction.nom, 
                                                        temps: attraction.attente, 
                                                        etat: attraction.marche }))
            })
        }
    }
})(parc)

console.log(parcUtils.getTempsEtEtatsAttractions())