## 📝 Assignment 11: Array of Objects

### 🎯 **Learning Objective:**

To practice working with arrays of objects using loops and built-in array functions like `forEach()`, `filter()`, `map()`, and `reduce()`.

---

## ✅ **Part A: Write the Output**

Given the following code:

```javascript
let users = [
  { name: "Aisha", age: 22 },
  { name: "Zaid", age: 19 },
  { name: "Kiran", age: 25 },
];
```

Answer the following:

1. What is the output of `console.log(users[1].name)`?
   👉 **Answer:**

2. What will this loop print?

```javascript
users.forEach((u) => {
  console.log(u.name + " is " + u.age + " years old");
});
```

👉 **Answer:**

---

## ✏️ **Part B: Code Writing Problems**

### 🧩 Problem 1: Books by Author

Create an array of 8-10 book objects. Each book should have `title`, `author`, and `price`. Create at least two books with author "William Shakespeare".

**Tasks:**

- Print the details of all books written by `"William Shakespeare"`.
- Calculate and print the average price of all books.

---

### 🧩 Problem 2: Student Scores

Create an array of 5 student objects with `name` and `marks`.

**Tasks:**

- Use `filter()` to find students with marks above 75.
- Use `map()` to create a new array of names of passed students.
- Use `reduce()` to calculate the total marks.

---

## ✅ **Part C: Debug This Code**

Find and fix the error:

```javascript
let items = [
  { name: "Pen", cost: 10 },
  { name: "Notebook", cost: 30 },
];

console.log(items[2].name);
```

👉 **What’s the issue and how would you fix it?**
**Answer:**

---

## ⭐ Bonus Challenge

### Problem: Product Inventory

Create an array of 3 product objects with `name`, `price`, and `quantity`.

**Tasks:**

- Print all products with quantity less than 5.
- Use `map()` to increase price of all products by 10%.
- Print total value of stock for each product (`price * quantity`).
