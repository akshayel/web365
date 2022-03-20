// forEach method

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

//The manual way of printing all these numbers using a function
function print(element) {
    console.log(element);
}

print(numbers[0]);
print(numbers[1]);

//Using forEach with the function defined outside

numbers.forEach(print);

// using forEach with the function defined inside the callback

numbers.forEach(function(item) {
    if (item%2===0){
        console.log(item);
    }
})

// for of is another way of doing this, and more intuitive than forEach.

for(let item of numbers){
    console.log(item);
}

// forEach on objects

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

movies.forEach(function(movie) {
    console.log(`${movie.title} - ${movie.score}/100`);
})