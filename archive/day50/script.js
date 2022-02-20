// Exercise 1 
function printHeart() {
    console.log("<3");
}

printHeart();

// Exercise 2 
function rant(message) {
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
}

// Exercise 3 
function isSnakeEyes(firstNum, secondNum) {
    if (firstNum === 1 && secondNum ===1) {
        console.log("Snake Eyes!");
    }
    else {
        console.log("Not Snake Eyes!");
    }
}

// Exercise 4 
function multiply(firstNum, secondNum) {
    let total = firstNum * secondNum;
    return total;
}

// Exercise 5 
function isShortsWeather(temperature) {
    if (temperature >= 75) {
        return true;
    }
    return false;
}

// Exercise 6 
function lastElement(array) {
    if (array.length > 0) {
        return array[array.length-1];
    }
    return null;
}

// Exercise 7 
function capitalize(word) {
    let firstLetter = word[0];
    let capital = firstLetter.toUpperCase();
    word = word.substring(1);
    return capital + word;
}

// Exercise 8 
function sumArray(numArray) {
    let total = 0;
    for (let num of numArray) {
        total += num;
    }
    return total;
}

// Exercise 9 
function returnDay(numDay) {
    const days = {
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
        7: "Sunday"
    };
    if (numDay >= 1 && numDay <= 7) {
        return days[numDay];
    }
    else {
        return null;
    }
}