
//LOOPING AN ARRAY
dogs = ['Golden Retriever', 'German Shepherd', 'Beagle', 'Dalmatian'];

for (let i=0; i<dogs.length; i++){
    console.log(dogs[i]);
}

//LOOPING A NESTED ARRAY
animals = [
    ['Golden Retriever', 'German Shepherd', 'Beagle', 'Dalmatian'],
    ['Tabby', 'Bengal', 'Bombay', 'Maine Coon', 'Persian'],
    ['Eagle', 'Hawk', 'Hummingbird', 'Pigeon', 'Bluejay']
];

for (let i=0; i<animals.length; i++){
    for (let j=0; j<animals[i].length; j++){
        console.log(animals[i][j]);
    }
}

//DECREMENTS
for (let i=100; i>=0; i-=10){
    console.log(i);
}

//OTHER OPERATORS
for (let i=1; i<=10000; i*=10) {
    console.log(i);
}