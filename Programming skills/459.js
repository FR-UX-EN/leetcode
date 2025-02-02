/**
 * @param {string} s
 * @return {boolean}
 */

/*
    It was a brute force problem.
    However, think about the case where the string is extremely bigger with restrained computer sources.
    KMP algorithm.
*/

var repeatedSubstringPattern = function (s) {
    if (s.length === 1) {
        return false;
    }

    let result = false
    const length = s.length;
    for (let i = 0; i < length / 2; i++) {
        const remainder = s.length % (i + 1);
        if (remainder !== 0) {
            continue;
        }

        const repeatNum = s.length / (i + 1);
        const substr = s.slice(0, i + 1);
        if (s === substr.repeat(repeatNum)) {
            result = true;
            break;
        }

    }

    return result;
};