const div = document.querySelector('#container');
const button = document.querySelector('#container button');

button.addEventListener('click', function(event){
    div.style.backgroundColor = makeRandColor();
    event.stopPropagation();
});

div.addEventListener('click', function(){
    div.classList.toggle('hide');
});

function makeRandColor() {
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`;
}