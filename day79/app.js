//MANIPULATING THE DOM - CREATING AND ADDING NEW ELEMENTS

//.createElement() - use it to create a new element

const newImg = document.createElement('img');
newImg.src = 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80';

const newH3 = document.createElement('h3');
newH3.innerText = 'I am new!'

//.appendChild() - append a new element onto the page

document.body.appendChild(newImg); // it's going to append this as the last child to the body.
newImg.classList.add('square');

document.body.appendChild(newH3);

/*
.append() - more flexible than appendChild:
- You can append more than 1 element
- You can pass in a string directly into an element
- Doesn't work in internet explorer
*/

const p = document.querySelector('p');
p.append('I am new text yaaaaay!!!'); //pass in a string
p.append('I am new text yaaaaay!!!', 'LOLOLOLOLOLOLOL'); //pass in multiple new elements

//.prepend() - insert something at the beginning of an element

const newB = document.createElement('b');
newB.append('hi!!!'); //This adds text to the newB variable
p.prepend(newB); //This adds newB to the beginning of the paragraph

/*.insertAdjacentElement() - you can insert an element at a particular position that's relative to another element.

There are 4 parameters:
- 'beforebegin' - Before the target element itself
- 'afterbegin'  - Inside the target element, but before its first child

- 'beforeend'   - Inside the target element, but after its last child
- 'afterend'    - After the target element itself
*/

const h2 = document.createElement('h2');
h2.append('Are adorable chickens');

const h1 = document.querySelector('h1');
const firstImg = document.querySelector('img');

h1.insertAdjacentElement('afterend', h2);
// firstImg.insertAdjacentElement('beforebegin', h2);

//you can't use 'afterbegin' and 'beforeend' when adding text before or after an image. It'll result in an error - makes sense when you think about it. How do you add text within an image element?

/* 
.after() - insert an element after another element
.before() - insert an element before another element
*/

const h3 = document.createElement('h3');
h3.innerText = 'i am h3';
h1.after(h3);
firstImg.before(h3);

//REMOVING ELEMENTS

//.removeChild() - removing a child element, you have to call the parent element for this to work

const firstLi = document.querySelector('li');
const ul = firstLi.parentElement;
ul.removeChild(firstLi);

//.remove() - call this on the actual thing you want to remove, not the parent. Can't use on internet explorer

const img = document.querySelector('img');
img.remove();
