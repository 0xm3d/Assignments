const produits = [
  { id: 1, nom: "Clavier", prix: 250, stock: 4 },
  { id: 2, nom: "Souris", prix: 90, stock: 0 },
  { id: 3, nom: "Écran", prix: 1400, stock: 2 },
];

console.log("JS is connected");

console.log(produits[0].nom);
console.log(produits[produits.length - 1].prix);

const catalogue = document.getElementById("catalogue");

// function creerFiche(produit) {
//   const article = document.createElement("article");
//   const header = document.createElement("h2");
//   header.textContent = produit.nom;
//   const price = document.createElement("p");
//   price.textContent = `${produit.prix} DH`;
//   article.classList.add("border", "m-10", "rounded");
//   article.append(header);
//   article.append(price);
//   if (produit.stock === 0) {
//     const rupture = document.createElement("p");
//     rupture.textContent = "Rupture";
//     rupture.className = "text-red-600";
//     article.append(rupture);
//   }
//   return article;
// }

// produits.forEach((produit) => {
//   catalogue.append(creerFiche(produit));
// });

function creerFiche({ nom, prix, stock }) {
  const article = document.createElement("article");
  const header = document.createElement("h2");
  header.textContent = nom;
  const price = document.createElement("p");
  price.textContent = `${prix} DH`;
  article.classList.add("border", "m-10", "rounded");
  article.append(header);
  article.append(price);
  if (stock === 0) {
    const rupture = document.createElement("p");
    rupture.textContent = "Rupture";
    rupture.className = "text-red-600";
    article.append(rupture);
  }
  return article;
}

// for (let produit of produits) {
//   catalogue.append(creerFiche(produit));
// }

for (let i = 0; i < produits.length; i++) {
  catalogue.append(creerFiche(produits[i]));
}
