// Strings - Sequence of characters
let productTitle = "   Lenovo Thinkpad   ";
console.log(productTitle);
console.log(productTitle.length);

let title = productTitle.trim();
console.log(title);
console.log(title.length);

console.log(`${title} in capital is ${title.toUpperCase()}`);
console.log(`${title} in small case is ${title.toLowerCase()}`);
console.log(`Position of 't' in ${title} is ${title.indexOf("T")}`);

let course = "Frontend Development using Angular"; // camel casing
console.log(course);

let newCourse = course.replace("Angular", "React");
console.log(newCourse);
console.log(`Position of 'React' in ${newCourse} is ${newCourse.indexOf("React")}`);

let courseModule = course.substring(0, 9);
console.log(courseModule);

let char = newCourse.charAt(27);
console.log(char);

let firstName = "John";
let lastName = "Doe";
let fullName = firstName.concat(" ", lastName);
console.log(fullName);

let topics = "HTML,CSS,JavaScript,TypeScript,React,MongoDB,ExpressJS,Security";
let topicsArray = topics.split(",");
console.log(topicsArray);

for (let topic of topicsArray) {
  console.log(topic);
}

// 1
for (let i in topicsArray) {
  let j = parseInt(i) + 1;
  console.log(`Topic ${j} - ${topicsArray[i]}`);
}
