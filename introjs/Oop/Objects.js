// let person = {
//     name: "Anazi",
//     age: 25,
//     occupation: "Developer",
//     Address: {
//         Street: "123 main St",
//         City: "anytiown",
//         State: "CA",
//         Zip: "12345",
//     },
//     Hobbies: ["Listening", "Swimming", "Coding"]
// };


// person.name = "Omar",
// console.log(person.name)

// // let animal = {}
// let animal = new Object()
// animal.name = "fido"
// animal.age = 6
// animal.bread = "Goldem Retriever"
// animal.color = "Golden"
// animal.size = "meduim"
// animal.hobbies = ["chasing squirreles", "playing fetch", "snuggling"]
// animal.address = {
//      Street: "123 dogwood Dr",
//         City: "anytiown",
//         State: "CA",
//         Zip: "12345",
// }
// animal.isCute = true
// console.log(animal)

let footballer = {
    name: "christiano Renoldo",
    age: 37,
    position: "forward",
    Team: "Al Nassar",
    ShirtNumber: "7",
    KnownAS: "GOAT",
    kick: function(){
    console.log(this.name + " Kicks the ball")
    },
    score: function () {
        console.log(this.name + " Scores a goal")
    }
}
// for (const key in footballer)
//     // console.log(footballer[key])
//     console.log(key)

// console.log(footballer['ShirtNumber'])


footballer.score()