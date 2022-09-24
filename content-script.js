chrome.storage.sync.get("hopCount", (tabLoaded) => {
    chrome.storage.sync.set({ "hopCount" :  tabLoaded.hopCount +1  }, function() {
        if (chrome.runtime.error) {
            console.log("Runtime error.");
        }
    });
});