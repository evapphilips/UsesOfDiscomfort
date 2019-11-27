// reference: https://cleanfox.io/blog/cleanfox-news-en/10-scary-facts-internet/

// show that the content is running
console.log("We are ready!");

// variables
polution = 0;

// recieve a message from the background
chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(request, sender, sendResponse){
    polution = request * 10;
    myDiv.style.width = polution + "px";
    //console.log(polution);
} 

// create a div and display div
var myDiv = document.createElement('div');
myDiv.innerHTML = " ";
myDiv.style.position = "fixed";
myDiv.style.top = "100px";
myDiv.style.left = "100px";
myDiv.style.width = polution + "px";
myDiv.style.height = "200px";
myDiv.style.backgroundColor = "red";
document.body.appendChild(myDiv)

