let courses1 = ["web-design", "canva", "MERN", "Java", "Python"];
let courses2 = ["digital-marketing", "AI Tools"];

// console.log(courses1.indexOf("Python"));
// console.log(courses1.includes("ChatGPT"));

let allCourses = courses1.concat(courses2);
// console.log(allCourses);

let numbers = [1, 2, 3, 4, 5];
// insert element in between
numbers.splice(4, 0, 10);
console.log(numbers);

// for-in loop
for (let i in courses1) {
  // console.log(courses1[i]);
}

// for-of loop
for (let course of courses1) {
  console.log(course);
}

// forEach loop
let total = 0;
numbers.forEach( n => total += n );
console.log(`Total = ${total}`);
