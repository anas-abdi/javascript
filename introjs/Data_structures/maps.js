let firstName = new Map();

firstName.set("name", "faarax");
let ageKey = { age: "" };
firstName.set(ageKey, 30);

console.log(firstName.get(ageKey))
firstName.clear()
console.log(firstName)
