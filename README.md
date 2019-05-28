## Chrome Extensions 

#### First Tab Open 
Following this introductory tutorial in order to get started with Chrome extensions and learn more about their potential. https://thoughtbot.com/blog/how-to-make-a-chrome-extension
This extension reads the first href from a page and on click of the extension icon it opens the link in a new tab. 

### General Info: 

#### Load your extension: 
1. Visit `chrome://extensions/` in your browser
2. Toggle on “Developer mode” in the top right.
3. Click “Load unpacked” from the menu on the left, then use the file loader to select your extension's directory.
4. Your extension should now be visible in the list, including others you already have installed in your browser. 
5. When you amend the code of tyour extension, return to this page and reload. Chrome will then reload your extension.

#### Principles of Google extensions:
1. Content scripts can pull / use info on the page but they have limitations and cannot use all the chrome APIs. 
2. Background scripts have full access to the chrome APIs but cannot access the current page. 
3. Message passing is how a content script interacts with a background script. 
4. Background scripts should generally not be persistent (and are thus set to `false` in the `manifest.json`). You would only keep a background script persistently active if the extension uses the [chrome.webRequest](https://developer.chrome.com/extensions/webRequest) api to block or modify network requests. 