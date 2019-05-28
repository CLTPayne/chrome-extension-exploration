'use strict';

// This adds a listener on installed and sets a value in the storage
// Now multiple extension components will be able to access this value and update it

chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
        console.log("The color is green.");
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostEquals : 'developer.chrome.com'}
            })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});

// The plugin will be usable when the user navigates to a url that includes
// "developer.chrome.com"
