function sing(callback) {
    console.log('la la la la');
    if(callback instanceof Function){
        callback();
    }
}

function meow() {
    console.log("meow meow");
}

function multiplier(factor) {
    return function(x) {
       return x * factor;
    } 
}

function setup() {


}

// Higher order functions let you create and change different functions. In the case of the multiplier function, you can create a new function by calling the multiplier function through a new variable and then use that new function to get the final value of x * factor. With higher order functions, you can accelerate the process of creating functions from one block of code. 