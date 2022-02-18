//Basic function
function hellos() {
    console.log("Hi");
    console.log("Hello");
    console.log("Bonjour");
    console.log("Hola");
}

//Function with an argument
function rollDie(sides) {
    let die = Math.floor(Math.random() * sides) + 1;
    console.log(die);
}

//Function with multiple arguments
function avg(x,y,z) {
    let average = (x+y+z)/3;
    console.log(average);
}