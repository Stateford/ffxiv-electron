// match.js
/**
* @description
* Checks if input matches
*/
// MODULES
// =======
const dictionary = require('../dictionary/dictionary.json');

/**
 * @param {char} char : checks if character exists in the dictionary
 * @returns {bool} 
*/

function match(char) {
    if(dictionary[char]) {
        return true;
    } else {
        return false;
    }
}

module.exports = match;
