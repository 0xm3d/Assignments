const produits = [
  { id: 1, nom: "Clavier", prix: 250, stock: 4 },
  { id: 2, nom: "Souris", prix: 90, stock: 0 },
  { id: 3, nom: "Écran", prix: 1400, stock: 2 },
  { id: 4, nom: "Casque", prix: 600, stock: 0 },
];

const buttons = document.querySelectorAll(".q");
const reponse = document.querySelector("#reponse");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let result;
    switch (btn.dataset.question) {
      case "1":
        //find() method returns an object which isgive  the first element that matches the requirments & it ruturns undefine of it finds nothing
        result = produits.find((produit) => produit.id === 3);
        console.log(result.nom);
        reponse.textContent = result.nom;
        break;
      case "2":
        //filter() method returns a new array of elements that matches the condition + it doesn't change the original arr
        result = produits.filter((produit) => produit.stock === 0);
        //map() method returns a new array of elements after applying the changes to them
        const names = result.map((produit) => {
          return produit.nom;
        });
        console.log(result);
        reponse.textContent = names;
        break;
      case "3":
        //some() method returns boolean: true if at lease one of the elements matches the condition and false if none
        result = produits.some((produit) => produit.stock === 0);
        console.log(result);
        reponse.textContent = result;
        break;
      case "4":
        //every() method also returns a boolean: true if all the elements matches the condition and false in the oposite
        result = produits.every((produit) => produit.prix < 2000);
        console.log(result);
        reponse.textContent = result;
        break;
      case "5":
        result = produits.find((produit) => produit.id === 10);

        // Check whether a product was found before accessing its properties.
        reponse.textContent = result
          ? result.nom
          : "there is no product with this id";
        break;
      default:
        break;
    }
  });
});
