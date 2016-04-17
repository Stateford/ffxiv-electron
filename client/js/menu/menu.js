// menu/menu.js
/* jslint node: true, esversion: 6, browser: true, jquery: true*/

"use strict";

var menuopen = false;

$(document).ready(function() {
    // click anywhere outside menu
    $('body').click(function(event) {
        if(!$(event.taget).closest('.menuitems').length && !$(event.taget).is('.menuitems') && !$(event.target).closest('#dropdownmenu').length && !$(event.target).is('#dropdownmenu') && menuopen) {
            $('.menuitems').addClass('hidden');
            menuopen = false;
        }
    });

    // SHOW MENU ON CLICK
    $('#dropdownmenu').click(function() {
        if(!menuopen) {
            $('.menuitems').removeClass('hidden');
            menuopen = true;
        } else if(menuopen) {
            $('.menuitems').addClass('hidden');
            menuopen = false;
        }
    });

    // clicking on about
    $('#about').click(function() {
        console.log('about');
    });

    // clicking on update
    $('#update').click(function() {
        console.log('update');
    });

});
