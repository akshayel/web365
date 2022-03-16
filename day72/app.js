//MANIPULATING THE DOM

//innerText and textContent
//'innerText' only shows the text that is displayed under the tag. If there's any element in the referenced tag that is hidden, it will not show up. 'textContent' on the other hand will show everything, even if it's hidden.

const h1 = document.querySelector('h1');
const firstP = document.querySelector('p');

// h1.innerText = 'lolololol';
// firstP.textContent = 'lololololol';

//Example with anchor tags

const allLinks = document.querySelectorAll('a');

for(let link of allLinks) {
    link.innerText = 'I AM A LINK LOL'; //The links will stop working.
}

//innerHTML - you can't change the properties of text using innerText or textContent (i.e. making it italicized). To change the property, you need to use innerHTML.

//innerHTML will return all the tags as well, unlike innerText.

h1.innerHTML = '<i>the new heading</i>';

//You can also add additional elements.

h1.innerHTML += '<sup>lmao</sup>';
