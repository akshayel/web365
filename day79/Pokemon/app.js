// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');

for (let i = 1; i <= 151; i++){
    //Creating a new div and appending it to the container
    const newDiv = document.createElement('div');
    container.appendChild(newDiv);
    newDiv.classList.add('pokemon'); //adding the pokemon class

    //Creating a new img element and appending it to the div created above
    const newImg = document.createElement('img');
    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    newDiv.appendChild(newImg);

    //Creating a new span element and appending it after the img element
    const pokeNum = document.createElement('span');
    pokeNum.innerText = `#${i}`
    newImg.after(pokeNum);
}
