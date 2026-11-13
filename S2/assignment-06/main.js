const addNote = document.querySelector("#ajouter");
const list = document.getElementById("notes");

addNote.addEventListener("click", function () {
  let counter = list.children.length;
  const li = document.createElement("li");
  counter += 1;
  console.log(li);
  li.textContent = `Note Number ${counter}`;
  li.classList.add("p-2", "bg-yellow-100", "rounded");
  list.appendChild(li);
  console.log(li);
  //   list.prepend(li);
});
