let person = {
    name: "john",
    age: 30,
    isMarried: true,
    occupation: "Develper",
    address: {
        street: "123 main St",
        city: "Anytown",
        state: "CA",
        zip: "12345",
    },
};
person.name = "Anaz"
console.log(person.occupation);
console.log(person["occupation"])