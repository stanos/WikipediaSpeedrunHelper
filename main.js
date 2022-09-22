let startPage = document.getElementById("startPage");
let record = document.getElementById("record");
let hopCount = document.getElementById("hopCount");
let startButton = document.getElementById("startButton");

startButton.addEventListener("click",() => {
    let title = getCurrentTabUrl();
    chrome.storage.sync.set({ title });
    startPage.innerHTML = title;
    console.log("End.")
});

function getCurrentTabUrl(){
    window.location.toString();
}

document.addEventListener("DOMContentLoaded", function () {
    chrome.storage.sync.get("title", ({ title }) => {
        startPage.innerHTML =  title
    });
});