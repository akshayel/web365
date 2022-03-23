const btn = document.querySelector("button");
const h1 = document.querySelector("h1");

btn.addEventListener('click', function(){
    const newColor = randomColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
});

const randomColor = () => {
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);

    return `rgb(${r},${g},${b})`;
}

/* LESSONS LEARNED:
- Intuition was right to use math.random for random color picker, but I realized I didn't really know how to use it. Why do we use math.floor?
- I used .setAttribute to try to change the color of the text (technically it should've been the body), but Colt showed us that we can use 'document.body.style'
- You can move the random color generator into a new function
- A fun exercise would be to create a color picker that meets accessibility standards. Or just do a project on accessibility checking in general.
- I'm ready to create that counter that I've been thinking about.
*/