const firstInput = document.querySelector('#first');
const secondInput = document.querySelector('#second');
const h1 = document.querySelector('h1');

firstInput.addEventListener('change', function(event){
    console.log(event);
});

secondInput.addEventListener('input', function(event){
    h1.innerText = secondInput.value;
    console.log(event);
});