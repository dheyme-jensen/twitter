const characters = 140;
let tweetText = document.querySelector('#tweetText');
let tweetButton = document.querySelector('#tweetButton');
let printTweet = document.querySelector('#printTweet');
let counter = document.querySelector('#counter');

tweetButton.addEventListener('click', listOfTweets);
function listOfTweets() {
    let time = moment().format('LT');
    let block = `
        <div class='user'> 
         <h1>@chandlerbing</h1>
         <span>${time}</span>
         <p>${tweetText.value}</p>
        </div>
    `;
    printTweet.innerHTML += block
    let paragraph = document.createElement('p');
    let message = document.createTextNode(text);
    paragraph.appendChild(message);
    printTweet.appendChild(paragraph); 
    tweetText.value= '';
}
tweetText.addEventListener('keyup', disabledButton);
function disabledButton() {
    let maxLength = characters - tweetText.value.length;
    counter.textContent = maxLength;
    if (maxLength === characters || maxLength < 0) {
      tweetButton.setAttribute("disabled", "");
    } 
    else {
     tweetButton.removeAttribute("disabled");
    }     
} 
tweetText.addEventListener('keyup', changeColor);
function changeColor(){
    if(tweetText.value.length < 120 ){
        counter.setAttribute('class', 'blue');
    }
    else if(tweetText.value.length >= 120 && tweetText.value.length <= 130 ){
        counter.setAttribute('class', 'orange');
    }
    else{
     counter.setAttribute('class', 'red');
    }
} 
tweetText.addEventListener('keyup', expandText);
function expandText(){
    if(tweetText.scrollHeight > tweetText.offsetHeight) {
        tweetText.rows += 1;
    }
}
