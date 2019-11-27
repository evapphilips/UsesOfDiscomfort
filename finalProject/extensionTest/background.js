// show that the background is running
console.log("background is running");

// variables
var numChanges = 0

// when a url is loaded,
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    // add to the number of changes
    numChanges ++
    console.log(numChanges);

    // send the number of changes to the content
    chrome.tabs.sendMessage(tab.id, numChanges);


});