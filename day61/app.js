//VARIABLES
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const names = ['Bob', 'Sally', 'George', 'Anna', 'Greg', 'Lisa', 'Trevor', 'Mary', 'Kevin', 'Rachel'];
let sum = 0;

//FOR OF LOOP
for(num of numbers) {
  sum+=num;
}
console.log(sum);

for(name of names) {
  console.log(name);
}

//FOR EACH LOOP
numbers.forEach(function(num){
  sum+=num;
})
console.log(sum);

names.forEach(function(name){
  console.log(name);
})
