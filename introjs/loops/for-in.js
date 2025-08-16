let person1 = {
    name: 'Anas',
    age: 30,
    occupation: 'Software  Engineer'
}

for (const key in person1) {
    console.log(`${key}: ${person1[key]}`);

}