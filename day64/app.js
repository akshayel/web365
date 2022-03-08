// setTimeout let's delay or pause the execution of statements inside the argument. The delay is in milliseconds, so 3000 ms = 1 sec. 

//setTimeout expects you to pass a callback function, but they are not array methods. They do not involve arrays at all.

// If you put a statement after the setTimeout, it will still run instantly. It won't wait for the setTimeout to run.

console.log("Hello!");

setTimeout (() => {
    console.log("...are you still there?");
},3000);

// setInterval calls a function at the specified interval. So in the example below, setInterval will run every 2 seconds indefinitely.

// To stop setInterval, you need to use clearInterval on the function name. In this case you'd have to call "clearInterval(id);"

console.log(Math.random());

const id = setInterval(() => {
    console.log(Math.random());
},2000);



//NOTE: the setTimeout feature is easier to do in other programming languages, like python.