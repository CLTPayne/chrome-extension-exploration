const changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', data => {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color)
});

// This takes the colour from the popup.html, gets the colour value from strage
// Applies the colour to the button

changeColor.onclick = element => {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'document.body.style.backgroundColor = "' + color + '";'}
        )
    });
};

// This adds an onClick event to the button that triggers a programatically injected content script 
// thus it's a user-invoke script rather than auto inserting code into a web page