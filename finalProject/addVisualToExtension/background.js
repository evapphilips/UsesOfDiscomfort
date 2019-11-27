// show that the background is running
console.log("background is running");

// variables
var numChanges = 0

// when a page is loaded,
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    //console.log("a new page loaded")

    // add to the number of changes
    numChanges ++
    console.log(numChanges);
    if (changeInfo.status == 'complete') {

        // do your things
        // send the number of changes to the content
        chrome.tabs.sendMessage(tab.id, numChanges);
    
      }

    


});


