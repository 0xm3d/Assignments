const produits = [
  { nom: "Clavier", prix: 250, stock: 4 },
  { nom: "Souris", prix: 90, stock: 0 },
  { nom: "Écran", prix: 1400, stock: 2 },
  { nom: "Tapis", prix: 60, stock: 12 },
];

const tous = document.getElementById("tous");
const stock = document.getElementById("stock");
const petitPrix = document.getElementById("petitPrix");
const combo = document.getElementById("combo");
const liste = document.getElementById("liste");

function afficher(arr) {
  liste.innerHTML = "";

  arr.forEach((produit) => {
    liste.innerHTML += `
      <li>${produit.nom} - ${produit.prix} DH</li>
    `;
  });
}

afficher(produits);

stock.addEventListener("click", function () {
  const newProduits = produits.filter((produit) => {
    return produit.stock > 0;
  });

  afficher(newProduits);
});

petitPrix.addEventListener("click", function () {
  const newArr = produits.filter((produit) => {
    return produit.prix < 200;
  });
  afficher(newArr);
});

combo.addEventListener("click", function () {
  const both = produits.filter((produit) => {
    return produit.stock > 0 && produit.prix < 200;
  });
  afficher(both);
});

tous.addEventListener("click", function () {
  afficher(produits);
});

console.log(produits);
console.log(produits.length);
