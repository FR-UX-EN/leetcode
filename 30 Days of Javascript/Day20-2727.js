/**
 * @param {Object | Array} obj
 * @return {boolean}
 */

// This problem is a good problem to understand the very fundamental of Javascript
// if an array or an object don't have enumerable properties than interpreter will not fall into for loop.
var isEmpty = function (obj) {
    for (let _ in obj) return false;
    return true;
};

var isEmpty = function (obj) {
    return Object.keys(obj).length === 0;
};

var isEmpty = function (obj) {
    if (Array.isArray(obj)) {
        return obj.length === 0;
    } else if (typeof obj === 'object' && obj !== null) {
        return Object.keys(obj).length === 0;
    }
    return false;
};

// if obj was empty, it will only have two brackets {}
var isEmpty = function (obj) {
    return JSON.stringify(obj).length <= 2
};
