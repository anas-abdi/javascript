// let score = 60; // You can change this number to test
// let grade;

// // Step 1: Decide the grade using if–else
// if (score >= 90) {
//     grade = "A";
// } else if (score >= 80) {
//     grade = "B";
// } else if (score >= 70) {
//     grade = "C";
// } else {
//     grade = "F";
// }

// // Step 2: Use switch to show the message
// switch (grade) {
//     case "A":
//         console.log("Grade: A (Excellent)");
//         break;
//     case "B":
//         console.log("Grade: B (Good job)");
//         break;
//     case "C":
//         console.log("Grade: C (You passed)");
//         break;
//     case "F":
//         console.log("Grade: F (Better luck next time)");
//         break;
//     default:
//         console.log("Invalid grade");
// }



let age = 18; // You can change this to test
let eligibility;

// Step 1: Decide eligibility using if–else
if (age >= 18) {
    eligibility = "canVote";
} else {
    eligibility = "cannotVote";
}

// Step 2: Use switch to print the message
switch (eligibility) {
    case "canVote":
        console.log("You are eligible to vote.");
        break;
    case "cannotVote":
        console.log("You are not eligible to vote.");
        break;
    default:
        console.log("Invalid eligibility status.");
}
