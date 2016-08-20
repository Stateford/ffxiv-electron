// menu/menu.js

window.$ = window.jQuery = require('./lib/jquery/dist/jquery.min.js');

const electron = require('electron');
const ipc = electron.ipcRenderer;
const shell = require('electron').shell;

// const ipc = require('electron');
// var to check if the menu is currently open
var menuopen = false;

$(document).ready(function() {
    // click anywhere outside menu
    $('body').on('click', function(event) {
        if(!$(event.taget).closest('.menuitems').length && !$(event.taget).is('.menuitems') && !$(event.target).closest('#dropdownmenu').length && !$(event.target).is('#dropdownmenu') && menuopen) {
            $('.menuitems').addClass('hidden');
            menuopen = false;
        }
    });

    // SHOW MENU ON CLICK
    $('#dropdownmenu').on('click', function() {
        if(!menuopen) {
            $('.menuitems').removeClass('hidden');
            menuopen = true;
        } else if(menuopen) {
            $('.menuitems').addClass('hidden');
            menuopen = false;
        }
    });

    //  open about window
    $('#about').on('click', function() {
        ipc.send('show-about');
    });

    // close about windows
    $('#exitAbout').on('click', function() {
        ipc.send('hide-about');
    });

    // open update window
    $('#update').on('click', function() {
        ipc.send('show-update');
    });

    // close update window
    $('#exitUpdate').on('click', function() {
        ipc.send('hide-update');
    });

    $('#github').on('click', function() {
        shell.openExternal("https://github.com/idietmoran/ffxiv-electron");
    });

});
