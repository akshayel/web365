let greet = function() {
    console.log("hello");
};

function callTwice(fx) {
    fx();
    fx();
}

function callTenTimes(fx) {
    for (let i=0;i<10;i++){
        fx();
    }
}

function rollDie(){
    const roll = Math.floor(Math.random()*6)+1;
    console.log(roll);
}