// scripts/updateCheck.js
/* jshint node: true, esversion: 6*/

"use strict";

// GET information from out link
function updateCheck(current, latest) {
    let Current = current.split('.');
    let Latest = latest.split('.');

    if(Current[0] < latest[0]) {
        return true;
    } else if(Current[1] < Latest[1]) {
        return true;
    } else if(Current[2] < Latest[2]) {
        return true;
    } else {
        return false;
    }
}

module.exports = updateCheck;
