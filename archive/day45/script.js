const rand = ['dog', 'cat', 'pig', 'chicken', 'penguin', 'bear', 'lion', 'tiger', 'panda', 'lizard', 'crocodile', 'alligator', 'shark', 'dolphin', 'tuna', 'octopus', 'squid'];

// ITERATING ARRAY WITH FOR LOOPS

// for (let i=0; i<rand.length; i++) {
//     console.log(`animals.com/${rand[i]}`);
// }

// ITERATING ARRAY WITH 'FOR OF' LOOPS

// for (let i of rand) {
//     console.log(i);
// }

// ITERATING NESTED ARRAY WITH 'FOR OF' LOOPS

const animals = [
    ['Golden Retriever', 'German Shepherd', 'Beagle', 'Dalmatian'],
    ['Tabby', 'Bengal', 'Bombay', 'Maine Coon', 'Persian'],
    ['Eagle', 'Hawk', 'Hummingbird', 'Pigeon', 'Bluejay']
];

for (let i=0; i<animals.length; i++) {
    console.log(animals[i]);
    for (let j of animals[i]) {
        console.log(j);
    }
}