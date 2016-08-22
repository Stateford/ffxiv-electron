// updateWin.js


let currentVer = require('../package.json').version;

let text = document.createElement('p');
text.textContent = `Current Version : \n\t${currentVer}`;
text.id = btoa('currentVer');

document.getElementById('currentVer').appendChild(text);

let checkUpdate = document.getElementById('checkUpdate');

checkUpdate.addEventListener('click', function() {
    ipc.send('check-update');
}, false);
