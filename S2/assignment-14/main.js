const buttons = document.querySelectorAll(".choix");
const apercu = document.querySelector("#apercu");
const info = document.querySelector("#info");

let newCouleur = "";

buttons.forEach((btn) => {
  console.log(btn.dataset.couleur);
  console.log(btn.dataset.nom);
  console.log(btn.dataset.prixUnitaire);

  btn.addEventListener("click", (event) => {
    const couleur = event.currentTarget.dataset.couleur;
    const nom = event.currentTarget.dataset.nom;

    if (newCouleur) {
      apercu.classList.remove(newCouleur);
    }
    apercu.classList.add(couleur);

    newCouleur = couleur;

    info.textContent = `Couleur choisie : ${nom}`;
  });
});
