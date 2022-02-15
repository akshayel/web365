let input = prompt("say something");

while (true) {
    input = prompt(input);
    if (input == "quit"){
        break;
    }
}

console.log ("the loop has ended.")

// breaks in for loops

for (let i=0; i<=1000; i++) {
    console.log(i);
    if (i === 121) {
        break;
    }
}