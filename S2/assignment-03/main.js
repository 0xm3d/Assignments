const stock = 2;

const badge = document.getElementById("badge");

if (stock > 0 && stock <= 3) {
  badge.textContent = "Almost sold out";
  badge.classList.add("bg-yellow-200");
} else if (stock > 3) {
  badge.textContent = "Available";
  badge.classList.add("bg-green-200");
} else {
  badge.textContent = "Out of stock";
  badge.classList.add("bg-red-200");
}

badge.textContent =
  stock === 0 ? "Out of stock" : stock <= 3 ? "Almost sold out" : "Available";
