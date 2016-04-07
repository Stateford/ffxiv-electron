// translate.js

"use strict";

$(document).ready(() => {
    // define dictionary
    let dict;
    
    // get dictionary data
    $.getJSON('../../dictionary/dictionary.json', (data) => {
        dict = data; // bind data to dict
    });
    
    // on submit click
    $('#submit').click(() => {
        let input = $('#textfield').val();
        console.log(dict);
        console.log(input);
        $('#output').val(input);
    })
});