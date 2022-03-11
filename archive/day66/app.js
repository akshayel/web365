const scores = [56,78,67,98,75,87,96,54,64,41,76,86,55,74];

//EVERY
//The every method tests whether all elements in an array pass the conditions in a function. It returns a true/false (boolean).

const allPass = scores.every(score => score >= 50);

//SOME
//The some method tests if at least one element in an array passes the conditions in a function. It returns a true/false (boolean).

const somePass = scores.some(score => score >= 50);

//EVERY and SOME on an object

const movies = [
    {
        title: 'The Shawshank Redemption',
        score: 92,
        year: 1994
    },
    {
        title: 'The Godfather Part II',
        score: 90,
        year: 1972
    },
    {
        title: 'Disaster Movie',
        score: 21,
        year: 2008
    },
    {
        title: 'House of the Dead',
        score: 25,
        year: 2003
    }
];

const someGoodMovies = movies.some(movie => movie.score >= 50);
const allGoodMovies = movies.every(movie => movie.score >= 50);

//REDUCE
//Reduces all elements in an array into 1 single value.

const prices = [9.99, 1.49, 19.99, 49.99,30.49, 12.99, 99.99];

const totalByReduce = prices.reduce((total, price) => {
    return total + price;
})

//You can also use a 'for of' loop to achieve the same thing.

let totalbyLoop = 0;
for(let price of prices){
    totalbyLoop += price;
}

//Getting min and max using reduce
const minPrice = prices.reduce((min, price) => {
    if(price < min){
        return price;
    }
    return min;
})

const maxPrice = prices.reduce((max, price)=> {
    if(price > max){
        return price;
    }
    return max;
})

//Reducing objects to find a max value

const bestMovie = movies.reduce((bestMovie, currentMovie)=>{
    if(currentMovie.score>bestMovie.score){
        return currentMovie;
    }
    return bestMovie;
})

//You can also add an initial value for the reduce method to run off of. For example, we can take the prices array, and start with a value of 100, and calculate the total amount.

const newTotal = prices.reduce((total, price) => {
    return total + price;
}, 100)