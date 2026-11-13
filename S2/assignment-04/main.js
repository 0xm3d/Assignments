function calculateTTC(price) {
  return price * 1.2;
}

console.log(calculateTTC(100));

function displayPrice(selector, price) {
  const element = document.querySelector(selector);
  const priceWithTax = calculateTTC(price);

  element.textContent = `Excl. tax: ${price} DH · Incl. tax: ${priceWithTax} DH`;
}

displayPrice("#p1", 100);
displayPrice("#p2", 45);
displayPrice("#p3", 320);

const calculateTTCArrow = (price) => price * 1.2;

console.log(calculateTTCArrow(100));
