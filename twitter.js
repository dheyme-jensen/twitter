const counter = 140;
let tweet = document.querySelector('#tweet');
let tweetButton = document.querySelector('#tweetButton');
let printTweet = document.querySelector('#printTweet');
let contador = document.querySelector('#contador');


tweetButton.addEventListener('click', listOfTweets);

function listOfTweets() {
    let text = tweet.value;
    let paragraph = document.createElement('p');
    let message = document.createTextNode(text);
    paragraph.appendChild(message);
    printTweet.appendChild(paragraph);
    tweet.value= '';
}
 
tweet.addEventListener('keyup', disableButton);

function disableButton() {
    let maxLength = counter - tweet.value.length;
    if (maxlength === counter || maxLength < 0) {
        tweetButton.setAttribute("disabled", "");
    } 
    else {
        tweetButton.removeAttribute("disabled");
    } 

    
}

