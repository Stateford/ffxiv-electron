// scripts/translate.js
/*jslint node: true*/
/*jslint esnext: true*/
"use strict";

// MODULES
const dictionary = require('../dictionary/dictionary.json'),
      match = require('./match');

function translate(str) {
    let input = str.split(''),
        final = ``;
    for(var index in input) {
        if(match(input[index])) {
            final += `${dictionary[input[index]]}`;
        } else {
            final += `${input[index]}`;
        }
    }
    return final;
}

module.exports = translate;
