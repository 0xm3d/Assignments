const message = "<strong>Promo</strong> : -20 % sur les claviers";
// const message = '<img src=x onerror="alert(1)">';

const go = document.getElementById("go");
const zoneTexte = document.getElementById("zoneTexte");
const zoneHtml = document.getElementById("zoneHtml");

go.addEventListener("click", function () {
  zoneTexte.textContent = message;
  zoneHtml.innerHTML = message;
  zoneHtml.innerHTML += " Fin";
  console.log(zoneHtml.innerHTML);
});

// we use textContent to display plain text safely
// we use innerHTML when we need to insert trusted html elements
