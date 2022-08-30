"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const switchCodeColor_1 = require("./switchCodeColor");
/**
 * This function get code from server and return new state
 * @param {Number} code
 * @returns {String}
 */
const handlerColor = (code) => {
    console.log('code', code);
    if (!code) {
        return `${switchCodeColor_1.switchCodeColor[1]}`;
    }
    if (switchCodeColor_1.switchCodeColor[code] !== undefined) {
        return `${switchCodeColor_1.switchCodeColor[code]}`;
    }
    else {
        return `${switchCodeColor_1.switchCodeColor[1]}`;
    }
};
exports.default = handlerColor;
