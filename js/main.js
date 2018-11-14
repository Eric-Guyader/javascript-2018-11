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
        },

        widgetTempsAttente(attractions) {
            if( !attractions ) {
                attractions = this.getTempsEtEtatsAttractions()
            }
            let $ulEtatAttractions = document.createElement('ul')
            attractions.forEach( attraction => {
                const $liEtatAttraction = document.createElement('li')
                $liEtatAttraction.className = 'is-size-4'
                $liEtatAttraction.innerText = ` ${attraction.nom} `
                
                const $iIconeEtat = document.createElement('i')
                $iIconeEtat.className = 'fas fa-traffic-light'
                if(attraction.etat){
                    $iIconeEtat.classList.add('has-text-success')
            
                    const $spanAttente = document.createElement('span')
                    $spanAttente.className = 'is-size-6'
                    const $iIconeAttente = document.createElement('i')
                    $iIconeAttente.className = 'fas fa-stopwatch'
                    if(attraction.temps <= 15){
                        $iIconeAttente.classList.add('has-text-success')
                    } else if (attraction.temps <= 45) {
                        $iIconeAttente.classList.add('has-text-warning')
                    } else {
                        $iIconeAttente.classList.add('has-text-danger')
                    }
            
                    $spanAttente.appendChild($iIconeAttente)
                    $spanAttente.appendChild(document.createTextNode(attraction.temps + ' minutes'))    
                    $liEtatAttraction.appendChild($spanAttente)
                } else {
                    $iIconeEtat.classList.add('has-text-danger')
                }
                $divRegion = document.createElement('div')
                $divRegion.className = "tag is-info tooltip is-hidden"
                $divRegion.appendChild(document.createTextNode(attraction.region))
                $liEtatAttraction.appendChild($divRegion)

                $liEtatAttraction.insertBefore($iIconeEtat, $liEtatAttraction.firstChild)
                
                
                $ulEtatAttractions.appendChild($liEtatAttraction)
            })
            return $ulEtatAttractions
        }
        
    }
})(parc)

let domReady = () => {
    document.querySelector('#etatAttractions').appendChild(
        parcUtils.widgetTempsAttente()
    )

    document.getElementById('etatAttractions').addEventListener('mouseover',(ev) => {
        let $liEtat = ev.target.closest('li')
        $liEtat.querySelector('.tooltip').classList.remove('is-hidden')
        $liEtat.addEventListener('mouseout',function(){
            this.querySelector('.tooltip').classList.add('is-hidden')
        },{once: true}) 
    }) 
}

window.addEventListener('DOMContentLoaded', domReady);