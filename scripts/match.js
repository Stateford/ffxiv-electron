// match.js
/**
* @description
* Checks if input matches
*/
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
