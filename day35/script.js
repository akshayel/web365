//CONDITIONALS
let input = prompt("Say 'hello'");

if (input==="hello") {
    console.log("thank you.");
} else if (input==="goodbye") {
    console.log("why would you say goodbye?");
} else {
    console.log("wow.");
}


let random = Math.random();

if (random < 0.5) {
    console.log("Your number is less than 0.5");
} else {
    console.log("Your number is greater than 0.5");
}

//LOGICAL OPERATORS

let decimal = Math.random();

if (decimal > 0.3 && decimal < 0.5) {
    console.log("The number is less than 0.5 but greater than 0.3.");
} else {
    console.log("The number is not between 0.3 to 0.5.")
}