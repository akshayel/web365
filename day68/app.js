//DEFAULT PARAMETERS

//Default parameters lets you pass a default value for a function in the case that the function doesn't have any values being passed. 

//You do this by adding the default value right in the argument.

function rollDie(numSides = 6 /*default value is 6*/) {
    return Math.floor(Math.random() * numSides) + 1;
}

//If you have multiple arguments, you need to make sure that default values don't show up in the first argument. That's because the first value you pass through will be interpreted as that first argument, and if you try to use a comma after an empty field, like (,"bob") - you'll get a syntax error.

function greet(person, greeting = "Hello"){
    return `${greeting}, ${person}!`;
}