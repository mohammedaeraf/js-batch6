/*
    Two types of exports:
    1. Named exports: You can have multiple named exports in a module. They are exported using the `export` keyword followed by a declaration or an expression. When importing named exports, you need to use the same name as the exported variable or function.
    2. Default exports: A module can have only one default export. It is exported using the `export default` syntax. When importing a default export, you can choose any name for the imported variable or function.
*/

// let square = (n) => n * n; // arrow function
// 3 => 3 X 3 = 9
function square(n) {
  let sq = n * n;
  return sq;
}

let fact = (n) => {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
};

export { square, fact };
