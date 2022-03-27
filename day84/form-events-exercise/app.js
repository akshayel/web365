// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const list = document.querySelector('#list');
const qty = document.querySelector('#qty');
const product = document.querySelector('#product');

form.addEventListener('submit', function(event){
    event.preventDefault();
    
    //add a new list item to the page
    const newLI = document.createElement('li');
    newLI.innerText = `${qty.value} ${product.value}`;
    list.appendChild(newLI);
    console.log(qty.value,product.value);

    //empty the inputs
    qty.value="";
    product.value="";
});