let startPage = document.getElementById("startPage");
let record = document.getElementById("record");
let hopCount = document.getElementById("hopCount");
let startButton = document.getElementById("startButton");

startButton.addEventListener("click",() => {
    console.log("Clicked!");
    chrome.storage.local.get("data", (tabTitle) => {
        startPage.innerHTML = tabTitle.data;
    });
    console.log("End.")
});

document.body.onload = function(){
    chrome.tabs.query({
        active: true,
        lastFocusedWindow: true
    }, function(tabs) {
        // and use that tab to fill in out title and url
        var tabTitle = tabs[0];
        chrome.storage.local.set({ "data" : tabTitle.title }, function() {
            if (chrome.runtime.error) {
              console.log("Runtime error.");
            }
          });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    chrome.storage.local.get("data", (tabTitle) => {
        startPage.innerHTML =  tabTitle.data;
    });
});