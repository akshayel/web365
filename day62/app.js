// ARROW FUNCTIONS

//what a regular function looks like
const add = function(x,y) {
    return x + y;
}

function add2(x,y){
    return x + y;
}

//what an arrow function looks like
const add3 = (x,y) => {
    return x + y;
}

const square = (x) => {
    return x * x;
}

//If you have only one argument, you don't need parentheses
const square2 = x => {
    return x * x;
}

//For functions with empty arguments, you need to still have empty parentheses
const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
}