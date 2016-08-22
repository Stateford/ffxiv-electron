// app.js
const remote = require('electron').remote;

window.$ = window.jQuery = require('./lib/jquery/dist/jquery.min.js');

$(document).ready(() => {
    // define dictionary
    const dict = require('../dictionary/dictionary.json'),
          scripts = require('../scripts');

    // on submit click
    $('#submit').on('click', function() {
        var input = $('#textfield').val();
        $('#output').val(scripts.translate(input));
    });

    // close the window
    $('#exit').on('click', function() {
        var window = remote.getCurrentWindow();
        window.close();
    });
});
