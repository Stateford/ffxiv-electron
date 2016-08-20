// scripts/translate.js
/**
 * @description: translate english to ffxiv block characters
*/
// MODULES
const dictionary = require('../dictionary/dictionary.json'),
      match = require('./match');
/**
 * @param {string} str : takes a string and converts it to ffxiv characers
 * @returns {string} final : ffxiv characters
*/
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
