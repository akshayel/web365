//SPREAD IN FUNCTION CALLS - lets you spread an iterable (ex. array, string, etc.) into a list of arguments

//Example - the Math.max or Math.min functions take in an infinite amount of arguments and compares them to each other to give you the min or max.

const example = Math.max(13,4,5,21,3,8,1,2,7,6,4,9,52456);
const anotherExample = Math.min(2,5,1);

//However, if you pass an array into Math.max or Math.min, you're going to get 'NaN', because the function was expecting a list of numbers. BUT, if you use '...' before calling the array, it will expand the array into the numbers contained within the array.
const nums = [13,4,5,21,3,8,1,2,7,6,4,9,52456];

console.log(Math.max(...nums));
console.log(Math.max(...nums));
console.log(...nums);

//You can do ths spread with strings too
console.log('Hello');
console.log(...'Hello');

//SPREAD WITH ARRAY LITERALS - we can expand iterables into arrays
const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Snoopy'];

//all the items in the 'cats' and 'dogs' arrays were copied over. They're not connected, it's copy paste.
const allPets = [...cats, ...dogs, 'Speedy']; 

console.log(cats, dogs, allPets);

//SPREAD WITH OBJECTS - we can use spread to move properties from one object to another, and create new objects out of it

const feline = {legs: 4, family:'Felidae'};
const canine = {isFurry: true, family:'Caninae'};

//This is similar to array literals where all the properties are copied over to a new object. If the objects being copied over have an overlapping property, then the order matters. The last object copied over will override any established properties. In the case below, family will show up as 'Caninae' since canine is called after feline.
const catDog = {...feline, ...canine, color:'black'};

console.log(feline, canine, catDog);

//You can also spread an array into an object. When you do, the indices become the key.

const arrayObject = {...[2,4,6,8]};
console.log(arrayObject);