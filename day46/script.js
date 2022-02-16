let max = parseInt(prompt("Enter the max number"));

while(!max) {
    max = parseInt(prompt("Enter a valid number"));
}

//Create a target number that is less than the max input number.
target = Math.floor(Math.random()*max)+1;

let guess = prompt("Enter your first guess");
let attempts = 1;

while(guess!==target) {
    attempts++;
    if(guess>target) {
        guess = parseInt(prompt("Number is too high, guess again"))
    }
    else {
        guess = parseInt(prompt("Number is too low, guess again"))
    }
}

console.log(`Yay you guessed it right! It took you ${attempts} guesses`);
