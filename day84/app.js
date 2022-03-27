const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("#cats");


form.addEventListener('submit', function(event){
    event.preventDefault(); //prevents the form from changing pages. You can use preventDefault for other events, but it's most commonly used for forms.

    const newCat = document.createElement('li');
    newCat.innerText = input.value;
    list.appendChild(newCat);

    input.value = ""; //to reset the form submission
});