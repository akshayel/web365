// When you don't have a return in a function, you can't carry it forward

function add(x,y) {
    console.log(x+y);
}

// Using return in a function
function secondAdd(x,y) {
    let sum = x + y;
    return sum;
    //Return ends the function and anything after won't run.
}