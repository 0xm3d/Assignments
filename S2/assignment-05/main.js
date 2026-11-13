let counter = 0;

const value = document.getElementById("value");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const resetButton = document.getElementById("reset");

function display() {
  value.textContent = counter;
}

plusButton.addEventListener("click", function () {
  counter++;
  display();
});

minusButton.addEventListener("click", function () {
  if (counter > 0) {
    counter--;
  }

  display();
});

resetButton.addEventListener("click", function () {
  counter = 0;
  display();
});
