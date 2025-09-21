// function listNames() {
//     let names = ["Anazi", "zaki", "Jaabir", "Ahmed"]
//     console.log(names[0]),
//         console.log(names[1])
//     console.log(names[2])
//     console.log(names[3])
// }     
// listNames()


function* listNames() {
    yield "Anazi";
    yield "zaki";
    yield "Jaabir";
    yield "Ahmed";
}

// Using the generator
let generator = listNames();

console.log(generator.next().value); // Anazi
console.log(generator.next().value); // zaki
console.log(generator.next().value); // Jaabir
console.log(generator.next().value); // Ahmed

