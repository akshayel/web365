//DOM - Document Object Model is a window for JavaScript into the contents (HTML) of a webpage.

//When you call HTML or CSS into the DOM, they come out as JavaScript objects. You can see this by using 'console.dir()' on an object.

//DOM lets you select HTML content and then manipulate them.

//SELECTING HTML CONTENTS

//getElementById - you can select an HTML id by using document.getElementById('');

const toc = document.getElementById('toc');
console.dir(toc);
const banner = document.getElementById('banner');
console.dir(banner);

//getElementsByTagName - you can select all elements by their tag (ex. 'p', 'body', etc.). In the case of tags and classes, you will get an 'HTML collection'. An HTML collection looks like an array and kind of acts like one, but it isn't one. You can use indicies to call individual objects within the collection. 
const allImages = document.getElementsByTagName('img');

//You can manipulate this collection too, the same way you can manipulate an array. But you can't use methods like map or filter with an HTML collection.
for(let img of allImages){
    console.log(img.src);
}

//You can replace all the images on the page using the for loop too.
for(let img of allImages){
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}

//getElementsByClassName - you can select all elements by their class.
const squareImages = document.getElementsByClassName('square');

for(let img of squareImages){
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg';
}

//querySelector - It's all-in-one method to select a single element of any type, using css syntax. The querySelector It'll give you the first match on the HTML page.

//Selecting by ID
document.querySelector('#banner');

//Selecting by class
document.querySelector('.square');

//Selecting by tag
document.querySelector('p');

//Using CSS syntax to make specific selections
document.querySelector('p:nth-of-type(2)');
document.querySelector('a[title="Java"]');

//querySelectorAll - Gives you a collection of all elements that match the selection.
document.querySelectorAll('p');
document.querySelectorAll('img');

//Making specific selections using querySelectorAll (use CSS syntax)
document.querySelectorAll('a');
const links = document.querySelectorAll('p a');

//You can manipulate them the same way you can manipulate an HTML collection.

for(let link of links){
    console.log(link.href);
}
