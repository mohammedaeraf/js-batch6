# 🎓 **Assignment 13: Modules & Modular Programming**

## 🔍 **Objective:**

To practice **creating**, **exporting**, and **importing** modules in JavaScript.

---

## 📦 **Instructions:**

You are required to build a small module-based system consisting of **two or more JavaScript files**.

---

### ✅ **Problem Statement: Basic Calculator Using Modules**

---

### 📁 File 1: `mathUtils.mjs`

- Create and **export** the following functions:

  1. `add(a, b)` – returns the sum.
  2. `subtract(a, b)` – returns the difference.
  3. `multiply(a, b)` – returns the product.
  4. `divide(a, b)` – returns the quotient (handle division by zero).

---

### 📁 File 2: `main.mjs`

- **Import** the above functions from `mathUtils.mjs`.
- Call each function with sample values and print the results using `console.log()`.

---

### ⚙️ **Requirements:**

- Use **named exports** for each function in `mathUtils.mjs`.
- Use **import** syntax in `main.mjs`.
- Both files should use **`.mjs` extension**.

---

## 🧪 Sample Output:

```bash
Addition: 10
Subtraction: 4
Multiplication: 24
Division: 2
```

---

## 🎯 Bonus Task:

- Add a new file called `geometryUtils.js`.
- Export a default class `Rectangle` with properties `length` and `width`, and a method `getArea()`.
- Import and use this class in `main.js` to calculate the area of a rectangle.