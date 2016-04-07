/*jslint node: true*/
/*jslint esnext: true*/
"use strict";

const electron = require('electron');

electron.app.on('ready', () => {
    const mainWindow = new electron.BrowserWindow({width: 400, height: 400});
    mainWindow.loadURL('file://' + __dirname + '/client/index.html');
});