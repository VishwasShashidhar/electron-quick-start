// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
let winCounter = 0;
const newWinButton = document.getElementById('new-win-btn');
newWinButton.addEventListener('click', () => {
    winCounter++;
    window.open('child.html', 'child-window' + winCounter, 'height=200, width=100');
});