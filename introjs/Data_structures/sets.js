let firstName = new Set([ 'Anas', 'Abdulaziiz', 'Hassan', 'Hassan', 'Hassan' ]);
firstName.add("faarax");
 // Duplicate ignored

console.log(firstName); 
console.log(firstName.size)
firstName.delete("Anas");
console.log(firstName);
firstName.clear()
console.log(firstName);
