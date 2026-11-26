let produits = [
  { id: 1, nom: "Clavier", prix: 250, stock: 4 },
  { id: 2, nom: "Souris", prix: 90, stock: 0 },
  { id: 3, nom: "Écran", prix: 1400, stock: 2 },
  { id: 4, nom: "Casque", prix: 600, stock: 0 },
];

const cartes = document.querySelector("#cartes");
const detail = document.querySelector("#detail");

function afficherProduits() {
  cartes.innerHTML = "";

  const cards = produits.map((produit) => {
    const card = document.createElement("div");
    card.className = "border rounded p-4 bg-[#eee] flex flex-col gap-1";
    card.dataset.id = produit.id;

    const h3 = document.createElement("h3");
    h3.textContent = produit.nom;
    h3.className = "font-bold text-lg text-center";

    const des = document.createElement("div");

    const price = document.createElement("p");
    price.textContent = `Prix: ${produit.prix}`;
    const stock = document.createElement("p");
    stock.textContent = `Stock: ${produit.stock}`;

    if (produit.stock === 0) {
      stock.className = "text-red-600";
    } else {
      stock.className = "text-green-600";
    }

    des.append(price, stock);

    const btns = document.createElement("div");
    btns.className = "flex justify-between";

    const detailBtn = document.createElement("button");
    detailBtn.textContent = "Détail";
    detailBtn.dataset.action = "detail";
    detailBtn.className =
      "border px-10 py-1 rounded-full bg-blue-600 text-white";

    const icon = document.createElement("span");
    icon.textContent = "🔍";
    icon.className = "mr-2";

    detailBtn.prepend(icon);

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Supprimer";
    removeBtn.dataset.action = "delete";
    removeBtn.className =
      "border px-10 py-1 rounded-full bg-red-600 text-white";

    btns.append(detailBtn, removeBtn);

    card.append(h3, des, btns);

    return card;
  });

  cartes.append(...cards);
}

afficherProduits();

cartes.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;

  const card = btn.closest("[data-id]");

  const id = Number(card.dataset.id);

  if (btn.dataset.action === "detail") {
    const produit = produits.find((p) => p.id === id);
    detail.innerHTML = `
      <h3 class="font-bold text-lg">${produit.nom}</h3>
      <p>Prix: ${produit.prix}</p>
      <p>Stock: ${produit.stock}</p>
    `;
  }

  if (btn.dataset.action === "delete") {
    produits = produits.filter((p) => p.id !== id);
    afficherProduits();

    detail.innerHTML = "";
  }
});
