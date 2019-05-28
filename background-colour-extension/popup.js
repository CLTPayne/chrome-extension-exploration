let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color)
});

// This takes the colour from the popup.html, gets the colour value from strage
// Applies the colour to the button