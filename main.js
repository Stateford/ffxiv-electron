// main.js
/* jshint node: true, esversion: 6, browser: true*/

'use strict';

const electron = require('electron');
const ipcMain = electron.ipcMain;
const app = electron.app;   // Module to control application life.
const BrowserWindow = electron.BrowserWindow;   // Module to create native browser window.

// keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
    // On OSX it is common for applications and their menu bar
    // to stay active until the user quits explicity with Cmd + Q
    if(process.platform != 'darwin') {
        app.quit();
    }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
    // Create the browser windows

    mainWindow = new BrowserWindow({width: 400, height: 400, frame: false, resizable: false, maximizable: false});

    // FOR DEV ONLY

    // mainWindow = new BrowserWindow({width: 400, height: 400});

    // remove top menu
    // mainWindow.setMenu(null);
    // and load the indext html of the app.
    mainWindow.loadURL(`file://${__dirname}/client/index.html`);

    // Open the DevTools
    // for development
    // mainWindow.webContents.openDevTools();
    // Emitted when the window is closed
    mainWindow.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element
        mainWindow = null;
    });

    // ABOUT window
    // set up about window
    var aboutWindow = new BrowserWindow({width: 400, height: 400, show: false, resizable: false, maximizable:false, frame: false});
    // point to about file
    aboutWindow.loadURL(`file://${__dirname}/client/about.html`);
    // when browser sends show about
    // show the window
    ipcMain.on('show-about', function() {
        aboutWindow.show();
    });
    // when browser sends hide request
    // hide the window
    ipcMain.on('hide-about', function() {
        aboutWindow.hide();
    });

    // UPDATE WINDOW
    // set up update window
    var updateWindow = new BrowserWindow({width: 400, height: 400, show: false, resizable: false, maximizable:false, frame: false});
    // point to update file
    updateWindow.loadURL(`file://${__dirname}/client/update.html`);
    // when browser sends show update
    // show the window
    ipcMain.on('show-update', function() {
        updateWindow.show();
    });
    // when browser sends hide request
    // hide the window
    ipcMain.on('hide-update', function() {
        updateWindow.hide();
    });
});
