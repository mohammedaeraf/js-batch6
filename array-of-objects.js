// an array of objects
let products = [
  { name: "Laptop", price: 1000, stock: 10 },
  { name: "Mouse", price: 25, stock: 20 },
  { name: "Keyboard", price: 80, stock: 10 },
  { name: "Desktop", price: 800, stock: 5 },
  { name: "Mouse Pad", price: 5, stock: 40 },
];

for (let product of products) {
  console.log(
    `Product: ${product.name}, Price: $${product.price}, Stock: ${product.stock}`,
  );
}

// Filter products above $100
let expensiveProducts = products.filter((p) => p.price > 100);
console.log("*** Expensive Products ***");
console.log(expensiveProducts);

// Filter products less than $30
let cheapProducts = products.filter((p) => p.price < 30);
console.log("*** Cheap Products ***");
console.log(cheapProducts);

let inventoryValue = products.reduce(
  (total, p) => total + (p.price * p.stock), 0,
);
console.log(`Inventory Value: ${inventoryValue}`);
