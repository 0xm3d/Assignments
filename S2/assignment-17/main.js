const panier = [
  { id: 1, nom: "Clavier", prix: 250, quantite: 1 },
  { id: 2, nom: "Souris", prix: 90, quantite: 2 },
  { id: 3, nom: "Câble", prix: 35, quantite: 3 },
];

const cart = document.querySelector("#panier");
const articlesNum = document.querySelector("#nbArticles");
const total = document.querySelector("#total");

function show() {
  cart.innerHTML = "";

  // msg for 0 products
  if (panier.length === 0) {
    cart.textContent = "Ton panier est vide";
  }

  const products = panier.map((product) => {
    const li = document.createElement("li");
    li.className = "rounded-xl p-2 my-2 bg-gray-400";

    const title = document.createElement("h3");
    title.textContent = `Article: ${product.nom}`;

    const price = document.createElement("p");
    price.textContent = `Price: ${product.prix} DH`;

    const q = document.createElement("p");
    q.textContent = `Quantity: ${product.quantite}`;

    const subTotal = document.createElement("p");
    subTotal.textContent = `Sub Total: ${product.prix * product.quantite} DH`;

    const minus = document.createElement("button");
    minus.textContent = "-";
    minus.className = "border border-black rounded px-4 bg-red-600 text-white";
    minus.dataset.id = product.id;
    minus.dataset.action = "minus";

    const plus = document.createElement("button");
    plus.textContent = "+";
    plus.className = "border border-black rounded px-4 bg-blue-600 text-white";
    plus.dataset.id = product.id;
    plus.dataset.action = "plus";

    const btns = document.createElement("div");
    btns.className = "flex gap-2";

    btns.append(minus, plus);
    li.append(title, price, q, btns, subTotal);

    return li;
  });

  cart.append(...products);

  const result = panier.reduce((acc, product) => {
    return acc + product.quantite;
  }, 0);
  articlesNum.textContent = result;

  const resultTwo = panier.reduce((acc, product) => {
    return acc + product.prix * product.quantite;
  }, 0);
  total.textContent = resultTwo;
}

//one event listener
cart.addEventListener("click", (event) => {
  // find clicked btn
  const button = event.target.closest("button");

  if (!button) return;

  // get id & action
  const id = Number(button.dataset.id);
  const action = button.dataset.action;

  // find the product in panier
  const product = panier.find((p) => p.id === id);

  if (!product) return;

  if (action === "plus") {
    product.quantite++;
  }

  if (action === "minus") {
    product.quantite--;

    // delete if q = 0
    if (product.quantite === 0) {
      const index = panier.findIndex((p) => p.id === id);
      panier.splice(index, 1);
    }
  }

  show();
});

show();
