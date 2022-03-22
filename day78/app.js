//MANIPULATING THE DOM - PARENT/SIBLINGS

const firstBold = document.querySelector('b');

//You can get the parent element using '.parentElement', and get the child elements using '.children'.
console.log(firstBold.parentElement)
console.log(firstBold.parentElement.parentElement)
console.log(firstBold.parentElement.children)
console.log(firstBold.parentElement.childElementCount)

//There are two types of sibling properties. There is 'previousSibling' and 'nextSibling' on one side, and there is 'previousElementSibling' and 'nextElementSibling' on the other side.

//'previousSibling' and 'nextSibling' will return nodes. Nodes can be represented by text. Whitespace is considered within the bounds of a node, meaning that 'nextSibling' and 'previousSibling' can return whitespace. It's better to use 'previousElementSibling' and 'nextElementSibling'. 

const squareImg = document.querySelector('.square');

console.log(squareImg.previousSibling);
console.log(squareImg.previousElementSibling);
console.log(squareImg.nextSibling);
console.log(squareImg.nextElementSibling);