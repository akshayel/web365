//VARIABLES
const h2 = document.querySelector('h2');
const upBtn = document.querySelector('#increase');
const resetBtn = document.querySelector('#reset');
const downBtn = document.querySelector('#decrease');

//INCREASE
upBtn.addEventListener('click', function(){
    h2.innerText = `${parseInt(h2.innerText) + 1}`;
});

//DECREASE
downBtn.addEventListener('click', function(){
    h2.innerText = `${parseInt(h2.innerText) - 1}`;
});

//RESET
resetBtn.addEventListener('click', function(){
    h2.innerText = 0;
});