//FUNCTION SCOPE

/*When the console.log is in the function itself, it will print out the variable because the variable and console.log are within the same scope.*/

// function testFunc(){
//     let testVar = 6;
//     console.log(testVar);
// }

/*When console.log is outside the function, you get an error because the variable is within the function, and is limited only to the function.*/

// function testFunc(){
//     let testVar = 6;
// }
// console.log(testVar);

/*Even if you execute the function first before using console.log, it'll still result in an error as the variable is limited to inside the function.*/

function testFunc(){
    let testVar = 6;
}
testFunc();
console.log(testVar);

/*One way to fix this is to introduce the variable outside the function so it can be used universally throughout the script.*/

let testVar = 0;
function testFunc(){
    testVar = 6;
}
console.log(testVar);
testFunc();
console.log(testVar);

/*If there are 2 variables with the same name, one inside the function, and one outside the function - all references to the variable inside the function will use the variable also defined within the function. So in the case below, console.log will print out 6 instead of 0.*/

let testVar=0;
function testFunc(){
    let testVar=6;
    console.log(testVar);
}
testFunc();

//BLOCK SCOPE

/*Variable scope can also extend to any blocks you see with conditionals and loops. In the case below, msg is resetricted to only the if statement. This is because we're using 'let' and 'const'. If you use 'var', you can use the variables outside of the blocks too.*/

let radius = 8;
if (radius > 0) {
    const PI = 3.14;
    let msg = "hello";
}
console.log(radius);
console.log(msg);

/*msg is printed out in the console because it's declared with 'var' and not with 'let' or 'const'.*/

let radius = 8;
if (radius > 0) {
    var PI = 3.14;
    var msg = "hello";
}
console.log(radius);
console.log(msg);