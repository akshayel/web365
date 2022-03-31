
//MY CODE HERE

//If you create any new 'li's, you won't be able to remove them because they were created after the fact. You can use event delegation to fix this.
const lis = document.querySelectorAll('li');
for(let li of lis){
    li.addEventListener('click', function(){
        li.remove();
    })
}

//EXISTING CODE BELOW
const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username)
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`)
    tweetsContainer.append(newTweet);
}

tweetsContainer.addEventListener('click', function (e) {
    e.target.nodeName === 'LI' && e.target.remove();
})

//MY CODE BELOW
tweetsContainer.addEventListener('click', function(e){
    e.target.remove();
});