/**
 * @param {string} s
 * @return {boolean}
 */

function isAlphaNumeric(ch) {
    let code;

    code = ch.charCodeAt(0);
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
    }

    return true;
};

var isPalindrome = function (s) {
    let alphanumeric = [...s].filter((ch) => isAlphaNumeric(ch)).join('');

    alphanumeric = alphanumeric.toLowerCase();
    let reversed = alphanumeric.split('').reverse().join('');

    return alphanumeric === reversed;
};