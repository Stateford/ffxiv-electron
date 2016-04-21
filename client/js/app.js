// translate.js
/* jshint esversion: 6, node: true, jquery: true, browser: true*/
"use strict";
const remote = require('remote');

window.$ = window.jQuery = require('./lib/jquery/dist/jquery.min.js');

$(document).ready(() => {
    // define dictionary
    const dict = require('../dictionary/dictionary.json'),
          translate = require('../scripts/translate');

    // on submit click
    $('#submit').click(() => {
        var input = $('#textfield').val();
        $('#output').val(translate(input));
    });

    // close the window
    $('#exit').click(function() {
        var window = remote.getCurrentWindow();
        window.close();
    });
});
