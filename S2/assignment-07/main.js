const courses = ["Pain", "Lait", "Œufs", "Tomates"];

const total = document.getElementById("total");
const list = document.getElementById("liste");

console.log(courses[0]);
console.log(courses[courses.length - 1]);
console.log(courses.length);

total.textContent = `${courses.length} Articles`;

// for (let i = 0; i < courses.length; i++) {
//   const li = document.createElement("li");
//   li.textContent = `${i + 1} ${courses[i]}`;
//   list.appendChild(li);
// }

courses.forEach((course, index) => {
  const li = document.createElement("li");
  li.textContent = `${index + 1} ${course}`;
  list.append(li);
});

courses.push("cafe");

// total.textContent = `${courses.length} Articles`;
