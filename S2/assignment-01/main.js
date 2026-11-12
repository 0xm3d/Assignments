console.log("JS connecté");

const nom = "Clavier";
let prix = 250;

const nomElement = document.getElementById("nom");
const prixElement = document.getElementById("prix");

nomElement.textContent = nom;
prixElement.textContent = prix + " DH";

prix = 199;

prixElement.textContent = prix + " DH";

nom = "Souris";
