'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
  });
});

// This adds a listener on installed and sets a value in the storage
// Now multiple extension components will be able to access this value and update it
