let startPage = document.getElementById("startPage");
let record = document.getElementById("record");
let hopCount = document.getElementById("hopCount");
let startButton = document.getElementById("startButton");
let reset = document.getElementById("reset");

startButton.addEventListener("click",() => {
    console.log("Clicked!");
    setTabTitle();
    chrome.storage.local.get("data", (tabTitle) => {
        startPage.innerHTML = tabTitle.data.replace('- Wikipedia', '');
    });
    console.log("End.")
    hopCount.innerHTML = 0;
    chrome.storage.sync.set({ "hopCount" : 0 }, function() {
        if (chrome.runtime.error) {
            console.log("Runtime error.");
        }
    });
});

reset.addEventListener("click",() => {
    hopCount.innerHTML = 0;
});

function setTabTitle(){
    chrome.tabs.query({
        active: true,
        lastFocusedWindow: true
    }, function(tabs) {
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
        startPage.innerHTML =  tabTitle.data.replace('- Wikipedia', '');
    });
    chrome.storage.sync.get("hopCount", (tabLoaded) => {
        hopCount.innerHTML =  tabLoaded.hopCount;
    });
});
