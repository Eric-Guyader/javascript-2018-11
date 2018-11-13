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