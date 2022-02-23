function randFunc() {
    const rand = Math.random();

    if(rand>0.5){
        return function() {
            console.log("congrats, I am a good function.");
            console.log("you will a million dollars");
        }
    }
    else {
        return function() {
            alert("You have been infected by a computer virus.");
            alert("stop trying to close this window");
            alert("stop trying to close this window");
            alert("stop trying to close this window");
            alert("stop trying to close this window");
            alert("stop trying to close this window");
        }
    }
}

const mystery = randFunc();

function makeBetween(min, max) {
    return function(num) {
        return num >= min && num <= max;
    }
}