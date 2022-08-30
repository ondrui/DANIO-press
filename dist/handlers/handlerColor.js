"use strict";
const switchCode = require('./switchCodeColor');
/**
 * This function get code from server and return new state
 * @param {Number} code
 * @returns {String}
 */
const handlerColor = (code) => {
    console.log('code', code);
    if (!code) {
        return `${switchCode[1]}`;
    }
    if (switchCode[code] !== undefined) {
        return `${switchCode[code]}`;
    }
    else {
        return `${switchCode[1]}`;
    }
};
module.exports = handlerColor;
