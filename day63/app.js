//IMPLICIT RETURNS

//What a regular no-argument arrow function looks like
const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
}

//We can create arrow functions with implicit returns. If you remove the 'return' keyword and replace the curly braces with regular parentheses, JavaScript will know to return the one statement in the parentheses.
const rollDie2 = () => (
    Math.floor(Math.random() * 6) + 1
);

//You can also remove the regular parentheses if you move the return value to the same line as the parameters.
const add = (a,b) => a + b;

//IMPORTANT! Implicit returns only work if you have one statement in the body of the function. Once you introduce a second line, it doesn't work.

//---------------------------------------------------------------

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

// What the map method looks like using regular function syntax.
movies.map(function(movie) {
    return `${movie.title} - ${movie.score/10}`;
})

// What the map method looks like using the arrow function
const newMovies = movies.map(movie=>`${movie.title} - ${movie.score/10}`);