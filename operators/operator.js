// Arithmetic Operators
let a = 10;
let b = 3;

console.log(a + b); // Addition → 13
console.log(a - b); // Subtraction → 7
console.log(a * b); // Multiplication → 30
console.log(a / b); // Division → 3.333...
console.log(a % b); // Modulus (remainder) → 1
console.log(a ** b); // Exponentiation → 1000 (10^3)


// Comparison Operators
console.log(a > b);  // true
console.log(a < b);  // false
console.log(a == 10); // true
console.log(a === "10"); // false (strict equality checks type too)
console.log(a != b); // true


// Logical Operators
console.log(a > 5 && b < 5); // true (AND)
console.log(a > 5 || b > 5); // true (OR)
console.log(!(a > b));       // false (NOT)


// Assignment Operators
let x = 5;
x += 3; // same as x = x + 3
console.log(x); // 8
