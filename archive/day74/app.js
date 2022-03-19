//MANIPULATING THE DOM - ATTRIBUTES

document.querySelector('#banner').id = 'whoops';
document.querySelector('#whoops').id = 'banner';

document.querySelector('#banner').src;
document.querySelector('#banner').href;
document.querySelector('#banner').title;

//getAttribute - gets the text in between the quotes right from the HTML

const firstLink = document.querySelector('a');

firstLink.href; // this gets us the value, it's coming from JS
firstLink.getAttribute('href'); // this gets us the text 

firstLink.getAttribute('title');

//setAttribute - rewrite the attribute

firstLink.setAttribute('href', 'http://www.google.com');

document.querySelector('input');
document.querySelectorAll('input')[1];

const input = document.querySelector('input[type=text]');

input.type = 'password';
input.type = 'color';
input.setAttribute('type', 'text');