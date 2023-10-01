chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

    if(changeInfo.status === "complete" && /^http/.test(tab.url)) {
        chrome.scripting.executeScript({
            target: {tabId},
            files: ["./content.js"]
        }).then(() => {
            console.log("I have been Injected, whoopie")
        }).catch((err) => console.log(err)) 
    }
})