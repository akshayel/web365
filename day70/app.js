//REST - you can combine a remaining list of elements into an array. It has the same syntax as spread though, so it can be a bit confusing.

//By using the rest parameter with 'nums', all values passed into the 'sum' function will be entered into an array called 'nums'.
function sum(...nums){
    console.log(nums);
    return nums.reduce((total, item) => total + item);
}

//Since rest collects everything else, you can have other parameters that come in first.

function raceResults(gold, silver, bronze, ...everyoneElse) {
    console.log(`The gold medal goes to ${gold}`);
    console.log(`The gold medal goes to ${silver}`);
    console.log(`The gold medal goes to ${bronze}`);
    console.log(`The gold medal goes to ${everyoneElse}`);
}

//DESTRUCTURING ARRAYS - you can single out elements in an array into individual variables by destructuring them.

const highScores = [69440,64748,63843,43412,36076,34202,30677,18601,14216,12389,10381];

//The destructuring below will separate out the elements within the 'highScores' array to separate variables. The '...everythingElse' will combine the remaining elements into an array.
const [firstScore, secondScore, ...everythingElse] = highScores;

console.log(`The highest score was ${firstScore}`);
console.log(`The highest score was ${secondScore}`);
console.log(`The rest of the scores were ${everythingElse}`);

//DESTRUCTURING OBJECTS - you can single out properties in an object into individual variables by destructuring them.

const user = {
    firstName: 'John',
    lastName: 'Smith',
    born: 1930,
    died: 2011,
    bio: 'John Smith is a generic dude with nothing notable about him',
    city: 'Kansas City',
    state: 'Missouri',
    email: 'john.smith@gmail.com',
    userName: 'john.smith1930',
    password: 'KaNsAsCiTy_1930'
}

//The destructuring below will separate out the properties within the 'user' object to separate variables.
const {email,firstName,lastName,city,bio} = user;

//I can also rename the property as I'm creating a new variable

const {born:birthYear, died:deathYear} = user;

//I can also create default values for properties that don't exist.

const {userName, iceCream = 'Chocolate'} = user;

console.log(`${firstName} ${lastName}'s bio is '${bio}'. He was born in ${city} in ${birthYear} and his last known email was ${email} and his most common username was ${userName}. ${firstName} died in ${deathYear}. It has been said that his favorite ice cream flavor was ${iceCream}.`);

//DESTRUCTURING PARAMS - we can destructure values that are being passed into a function. This is most commonly used with objects.

function fullName({firstName, lastName}){
    return `${firstName} ${lastName}`;
}

