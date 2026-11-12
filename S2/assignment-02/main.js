const titre = document.querySelector("#titre");
const intro = document.querySelector(".intro");
const footer = document.querySelector("footer");

titre.textContent = "Welcome to JavaScript!";
intro.textContent = "Learning querySelector and getElementById.";
footer.textContent = "Created with JavaScript";

const titreById = document.getElementById("titre");

console.log(titre);
console.log(titreById);

const wrongSelector = document.querySelector("intro");

console.log(wrongSelector);
