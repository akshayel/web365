const button = document.querySelector('button');

//Every element that passes through an event listener is attached to an event object. You can see it by introducing an event parameter and logging it in the console.

button.addEventListener('click', function(event){
    console.log(event);
});

//Keyboard events

const input = document.querySelector('input');
input.addEventListener('keydown', function(event){
    console.log(event.key, event.code);
});
input.addEventListener('keyup', function(){
    console.log("KEYUP");
});

//If you want to make a game and have ppl use arrow keys to move you can refer to the window object and do the following:

window.addEventListener('keydown', function(event){
    switch(event.code){
        case 'ArrowUp':
            console.log("up");
            break;
        case 'ArrowDown':
            console.log("down");
            break;
        default:
            console.log("ignored");
    }
});