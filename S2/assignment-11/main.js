const message = document.querySelector("#message");
const compteur = document.querySelector("#compteur");
const envoyer = document.querySelector("#envoyer");

message.addEventListener("input", function () {
  const counter = message.value.trim().length;
  compteur.textContent = `${counter} / 50`;
  if (counter > 50) {
    compteur.classList.add("text-red-600");
  } else {
    compteur.classList.remove("text-red-600");
  }
  if (counter > 50 || message.value.trim() === "") {
    envoyer.disabled = true;
  } else {
    envoyer.disabled = false;
  }
});

// message.addEventListener("change", function () {
//   const counter = message.value.length;
//   compteur.textContent = `${counter} / 50`;
//   if (counter > 50) {
//     compteur.classList.add("text-red-600");
//   } else {
//     compteur.classList.remove("text-red-600");
//   }
//   if (counter > 50 || message.value.trim() === "") {
//     envoyer.disabled = true;
//   } else {
//     envoyer.disabled = false;
//   }
// });
