// translate.js
/* jshint esversion: 6, node: true, jquery: true, browser: true*/
"use strict";
$(document).ready(() => {
    // define dictionary
    const dict = require('../dictionary/dictionary.json'),
          translate = require('../scripts/translate');

    // on submit click
    $('#submit').click(() => {
        var input = $('#textfield').val();
        $('#output').val(translate(input));
    });
});
