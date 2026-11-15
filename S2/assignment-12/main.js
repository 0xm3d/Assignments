const produits = [
  { nom: "Clavier", prixHT: 250 },
  { nom: "Souris", prixHT: 90 },
  { nom: "Écran", prixHT: 1400 },
];

const ul = document.getElementById("etiquettes");

// const noms = produits.map((produit) => produit.nom);

const noms = [];
produits.forEach((produit) => noms.push(produit.nom));

console.log(noms);

const produitsTTC = produits.map((produit) => {
  return { ...produit, prixTTC: produit.prixHT * 1.2 };
});

console.log(produitsTTC);

console.log(produits);

const texte = produitsTTC.map(
  (produit) => `${produit.nom} : ${produit.prixTTC} DH TTC`,
);

console.log(texte);

texte.forEach((line) => {
  const li = document.createElement("li");
  li.textContent = line;
  ul.append(li);
});
