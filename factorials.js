// 4! = 4 * 3 * 2 * 1 = 1 * 2 * 3 * 4
numbers = [3, 4, 5, 6, 10];

for (let i = 0; i <= numbers.length - 1; i++) {
  factorial(numbers[i]);
}

let factorial = n => {
  let fact = 1;
  let i = 1;
  while (i <= n) {
    fact = fact * i;
    i++;
  }
  console.log(`Factorial of ${n} = ${fact}`);
}
