chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.query({
        active: true, 
        currentWindow: true
    }, 
    function(tabs) {
        const activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {
            "message": "clicked_browser_action"
        });
    });
});

// The above is called when a user clicks on the 'browser action'
// onClicked it sends a message to the active tab
// content.js now needs to listen for that message