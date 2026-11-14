const notes = document.querySelectorAll(".note");
// const notes = document.getElementsByClassName("note");
const surligner = document.querySelector("#surligner");
const lire = document.querySelector("#lire");

// console.log(notes);

surligner.addEventListener("click", function () {
  //   for (let note of notes) {
  //     note.classList.toggle("bg-yellow-200");
  //   }
  notes.forEach((note) => {
    note.classList.toggle("bg-yellow-200");
  });
});

const theme = document.getElementsByName("theme");

lire.addEventListener("click", function () {
  for (let child of theme) {
    if (child.checked == true) {
      console.log(child.value);
    }
  }
});

// const notes1 = document.getElementsByClassName("note");
// const notes2 = document.querySelectorAll(".note");

// console.log(notes1);
// console.log(notes2);
// console.log(notes1.length);
// console.log(notes2.length);
