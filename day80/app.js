const btn = document.querySelector('#v2');

//.onclick - event that executes when you click on an element

btn.onclick = function() {
    console.log("you clicked me");
    console.log("hope it worked");
}

//.onmouseenter - event that executes when you hover over an element

function scream() {
    console.log("AAAAAAHHHHHH");
    console.log("STOP TOUCHING ME");
}

btn.onmouseenter = scream; //we're not calling the function 'scream'. We're passing it along to the onmouseenter and if we meet the conditions, it will execute the function. We're setting the 'onmouseenter' property to be a function.

//The code below will execute the the alert right away. What you want to do is pass it into a function so that it executes only when the conditions are met. Onclick needs to be tied to a function so that it executes every time the H1 tag is clicked.

document.querySelector('h1').onclick = alert('you clicked the h1!'); 

//The right approach

document.querySelector('h1').onclick = function() {
    alert('you clicked the h1!'); 
};

//.addEventListener - swiss army knife of events, you can call addEventListener then specify within the parameters what type of event you want to trigger.

const thirdBtn = document.querySelector('#v3');
thirdBtn.addEventListener('dblclick', function() {
    alert("DOUBLE CLICKED");
})

/*
Why we should use .addEventListener:
- Using the onclick property means only passing in one function at a time
- There are additional options that give you more flexibility
*/

function twist() {
    console.log("TWIST");
}

function shout() {
    console.log("SHOUT");
}

const twistButton = document.querySelector('#twist');

// twistButton.onclick = shout;
// twistButton.onclick = twist; //twist will override shout here

twistButton.addEventListener('click', twist, {once: true});
twistButton.addEventListener('click', shout);