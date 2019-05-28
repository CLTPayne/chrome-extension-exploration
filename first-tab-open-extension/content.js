// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//         if (request.message === 'clicked_browser_action') {
//             const firstHref = document.getElementsByTagName('a')[0].getAttribute("href"); 
//             console.log({firstHref})
//         }
//     }
// );

// The extraction of the href is now only run when the payload is received
// in the form of a message from the background script.
// Therefore everytime the user clicks the browser action button
// the url should be logged to the console. 

// alert('Hello, I am your explorative extension...')

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === 'clicked_browser_action') {
            const firstHref = document.getElementsByTagName('a')[0].href;
            console.log({firstHref});
            chrome.runtime.sendMessage({
                "message": "open_new_tab", 
                "url": firstHref
            });
        }
    }
);

// The above listener on the page, now also sends a return message to the backround
// With the url to open in a new tab. 