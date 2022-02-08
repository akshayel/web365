// ARRAYS PT 2
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log(days[3]);
daysCopy = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// PUSH AND POP
daysCopy.push('Mystery day');
console.log(daysCopy);
daysCopy.pop();
console.log(daysCopy);

// UNSHIFT AND SHIFT
daysCopy.unshift('Mystery day');
console.log(daysCopy);
daysCopy.shift();
console.log(daysCopy);

// CONCAT
let daysThird = days.concat(daysCopy);
console.log(daysThird);

// INDEX OF AND INCLUDES
console.log(daysThird.indexOf('Tuesday'));
console.log(daysThird.includes('Mystery day'));

// REVERSE
console.log(daysThird.reverse());

// SLICE & SPLICE
console.log(daysThird.slice(7));
daysThird.splice(4,2,'MUAHAHAHAHA');
console.log(daysThird);