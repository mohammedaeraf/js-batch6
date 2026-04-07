let product = {
  id: 110001,
  title: "HP Pavillion i5 Core Laptop",
  category: "Laptops",
  price: 60000,
};

let updatedProduct = {
  ...product,
  price: 65000,
};

console.log(updatedProduct);
