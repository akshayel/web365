//MANIPULATING THE DOM - ClassList

const h2 = document.querySelector('h2');

console.log(
    h2.getAttribute('class')
);

//You can apply a class using set attribute, but the problem is that if you want to add another class, it won't work. 
h2.setAttribute('class', 'purple');

console.log(
    h2.getAttribute('class')
);

//When I set class to border, it will replace purple with border.
h2.setAttribute('class', 'border');

console.log(
    h2.getAttribute('class')
);

//One way to work around this is to use string literals, but it's a lot of work if you have multiple classes
let currentClasses = h2.getAttribute('class');
h2.setAttribute('class', `${currentClasses} purple`)

//There's a better way - classList
console.log(
    h2.classList
);

//We can add additional classes by using .add after classList

h2.setAttribute('class', ''); //reset classes
h2.classList.add('purple','border');

//We can also remove classes using .remove

h2.classList.remove('purple');
console.log(
    h2.classList
);

//We can test to see if classes are there are not
console.log(
    h2.classList.contains('border'),
    h2.classList.contains('purple')
);

//You can also toggle classes on and off, a good example of this is the accordion in Google search
h2.classList.toggle('border'); //toggles it off
