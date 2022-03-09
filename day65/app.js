// Filter method creates a new array with all the values that have been filtered through the conditions set by the function.

//The callback returns true or false, and if it's true, then it gets added to the new array.
const numbers = [9,8,7,6,5,4,3,2,1];

//Filter for all the odd numbers
const odds = numbers.filter(n => {
    return n%2===1;
})

//Filter for all the even numbers
const evens = numbers.filter(n => {
    return n%2===0;
})

//Filter for all the small numbers
const smallNums = numbers.filter(n=>n<5);

// Filtering with an object

const movies = [
    {
        title: 'The Shawshank Redemption',
        score: 92,
        year: 1994
    },
    {
        title: 'The Godfather',
        score: 92,
        year: 1972
    },
    {
        title: 'The Dark Knight',
        score: 90,
        year: 2008
    },
    {
        title: 'The Godfather: Part II',
        score: 90,
        year: 1974
    }
]

const oldMovies = movies.filter(movie => {
    return movie.year < 2000;
})

//Combining the filter method with the map method - you first need to filter, then map

const oldMovieArray = movies.filter(movie=>movie.year<2000).map(movie=>movie.title);

//Filter exercise on Udemy

//Breaking it down
const array = ['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan'];

const names = array.filter(name => {
    return name.length<10;
});

//Putting it together
const validUserNames = names => {
    const list = names.filter(name => {
        return name.length<10;
    });
    return list;
}