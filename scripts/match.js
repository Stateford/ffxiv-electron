// match.js
/*
* Checks if input matches
*/
/* jshint node: true, esversion: 6 */
"use strict";
// MODULES
// =======
const dictionary = require('../dictionary/dictionary.json');

function match(char) {
    if(dictionary[char]) {
        return true;
    } else {
        return false;
    }
}

module.exports = match;
