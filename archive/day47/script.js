// Coding exercise
// const numbers = [1,2,3,4,5,6,7,8,9]; 

// for (let i of numbers) {
//     console.log(i*i);
// }

//Iterating over objects using 'for in' loops
const testScores = {
    george: 80,
    matt: 67,
    kim: 89,
    sean: 91,
    mary: 72,
    wayne: 77,
    miles: 83,
    elena: 97,
    dave: 81,
    ron: 60
}

for (let person in testScores) {
    console.log(`${person} got ${testScores[person]} on the test.`);
}

//Iterating over objects using Object

// console.log(Object.values(testScores));
// console.log(Object.entries(testScores));

let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
    console.log(score);
    total += score;
}

let average = (total/scores.length);
console.log(`the class average for the test is ${average}`);