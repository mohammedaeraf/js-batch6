let marks = [90, 85, 67];
let total = 0;
for (let i = 0; i < marks.length; i++) {
  // total = total + marks[i];
  total += marks[i];
}
console.log(`Total Marks = ${total}`);

let avg = total / 3;
console.log(`Average Marks = ${avg}`);
