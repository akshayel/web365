//MANIPULATING THE DOM - STYLES

const h1 = document.querySelector('h1');
h1.style; //this will show up empty because the JS object is looking for the style tag in the HTML. It won't recognize the CSS file.

//It's not recommended to do it like this because inline styles are very specific 
h1.style.color = 'green';
h1.style.fontSize = '3em';
h1.style.border = '2px solid pink';


//Example

const allLinks = document.querySelectorAll('a');

for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy';
}

// If you want to know what style is showing for a specific HTML element on the website, you can use 'window.getComputedStyle([element]).[property]

console.log(
    window.getComputedStyle(h1),
    window.getComputedStyle(h1).color,
    window.getComputedStyle(h1).fontSize,
    window.getComputedStyle(h1).fontFamily,
    window.getComputedStyle(h1).margin
);