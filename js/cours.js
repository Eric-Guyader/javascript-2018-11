var obj1 = {nom: "Dupont", prenom: 'Rémi', age:15}

// Déclarations et valorisation de variables à partir d'un objet 
let {prenom,age} = obj1
console.log(prenom)
console.log(age)

// Création d'un objet à partir de variables 
var obj2 = {prenom, age}  // var obj2 = {prenom: prenom, age: age}

delete obj1.nom

var getCar = (marque, modele, couleur) => ({marque, modele, couleur}) 

Object.keys(obj1)
Object.values(obj1)
let obj3 = Object.assign({}, obj1, obj2)


let livres = ['Harry Potter à l\'école des sorciers','Les dents la mer', 'Dracula', 'Shining'];
let armoire = {nbEtageres: 5, livres: [...livres]}
livres.push('Au bonheur des dames')
console.log(armoire)

function avecArgumentsNommes({nom = '', age, profession}){

}

/**
 * Fonction ayant valeur de constructeur
 */
function SupportAmovible(taille, nature){
    this.taille = taille
    this.nature = nature
    this.branchee = false
}

/**
 * Enrichissement du prototype
 */
/* Pas de fonction flèche ici, car sinon this ne représenterait pas l'instance à partir de laquelle la méthode est appelée (mais l'objet global) */
SupportAmovible.prototype.toString = function(){return  (`${nature} ${this.taille} : `) + (this.branchee ? 'branchée' : 'débranchée')}
SupportAmovible.prototype.brancher = function(){
    this.branchee = true
    console.log('La clé est branchée')
}
SupportAmovible.prototype.desactiver = function() {
    this.branchee = false
    console.log('La clé est désactivée')
}


function CleUsb(taille, couleur, type){
    // Appel au constructeur parent: SupportAmovible
    SupportAmovible.call(this,taille,"Clé USB")
    this.couleur = couleur
    this.type = type
}
CleUsb.prototype = Object.create(SupportAmovible.prototype)
CleUsb.prototype.toString = function(){return  (`Clé ${this.taille} ${this.couleur}: `) + (this.branchee ? 'branchée' : 'débranchée')}

/**
 * Instanciation (this est alors lié à l'objet créé par new)
 */
let maCle = new CleUsb('8Go','bleue','USB-2')
maCle.brancher()
console.log(maCle.toString())

