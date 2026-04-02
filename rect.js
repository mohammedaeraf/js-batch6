// Define a class (blueprint for objects)
// OOP - Object-Oriented Programming
// C vs C++
// Objects have properties (attributes) and behaviors (methods/functions)
// Class is a template for creating objects, and an object is an instance of a class
class Rectangle {
  width;
  height;

  constructor(w, h) {
    this.width = w;
    this.height = h;
  }

  // Method to calculate area
  getArea() {
    return this.width * this.height;
  }

  // Method to calculate perimeter
  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

// Create objects (instances of the class)
let rect1 = new Rectangle(10, 5);
let rect2 = new Rectangle(7, 3);
let rect3 = new Rectangle(4, 6);

// Use the methods
console.log("Rectangle 1 Area:", rect1.getArea()); // Output: 50
console.log("Rectangle 1 Perimeter:", rect1.getPerimeter()); // Output: 30

console.log("Rectangle 2 Area:", rect2.getArea()); // Output: 21
console.log("Rectangle 2 Perimeter:", rect2.getPerimeter()); // Output: 20

console.log("Rectangle 3 Area:", rect3.getArea()); // Output: 21
console.log("Rectangle 3 Perimeter:", rect3.getPerimeter()); // Output: 20
