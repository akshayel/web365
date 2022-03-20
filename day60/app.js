// MAP METHOD

// It accepts a callback of a function and runs that function once per item in an array. Then it generates a new array based on the callback.

const texts = ['rofl', 'lol', 'omg', 'ttyl', 'idk', 'afaik'];
const caps = texts.map(function(text){
    return text.toUpperCase();
})


//Another example

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const doubles = numbers.map(function(num){
    return num*2;
})

//An example with an object

const movies = [
    {
        title: 'Madagascar',
        score: '99'
    },
    {
        title: 'Up',
        score: '90'
    },
    {
        title: 'Frozen',
        score: '56'
    }
]

const titles = movies.map(function(movie) {
    return movie.title.toUpperCase();
})