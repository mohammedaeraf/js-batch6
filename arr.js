let age = 25;
let fruits = ["apple", "watermelon", "kiwi"];
console.log(fruits);
// console.log(fruits[2]);

fruits.push("banana", "mango", "orange");  // adds an element at the end
console.log(fruits);

let lastFruit = fruits.pop();  // removes the last element
console.log(lastFruit);
console.log(fruits);

fruits.unshift("grapes");  // adds an element at the beginning
console.log(fruits);

let firstFruit = fruits.shift();  // removes the first element (FIFO)
console.log(firstFruit);
console.log(fruits);

console.log(fruits.length);

// FIFO - First In First Out (Queues)
// LIFA - Last In First Out (Stacks)
