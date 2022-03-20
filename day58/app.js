//We can use try and catch to catch potential errors

try {
    hello.toUpperCase();
}
catch {
    console.log('error');
}

console.log("after try and catch");


function yell(msg){
    try {
        console.log(msg.toUpperCase().repeat(3));
    }
    catch(e) {
        console.log(e);
        console.log("please pass in a string.");
    }
}