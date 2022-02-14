// code academy challenges - https://www.codecademy.com/resources/blog/10-javascript-code-challenges-for-beginners/

// 1. Print all even numbers from 0 to 10 efficiently

// for (let i=0; i<=10; i+=2) {
//     console.log(i);
// }

// 3. Create a length converter function
function miles(km) {
    return `${km * 0.621371} miles`;
}

// 4. Calculate the sum of numbers within an array
const rand = [1,2,3,4,5,6,7,8,9,10];

sum = 0;
for (let i=0; i<rand.length; i++) {
    sum += rand[i];
}

//////////////////////////////////////////


// WHILE LOOPS

// let num = 0;
// while (num<20) {
//     console.log(num);
//     num++;
// }

const code = "secretcode123";

let guess = prompt("enter the code");
while (guess !== code) {
    guess = prompt("wrong, enter the right code");
}

console.log('you cracked the code.')