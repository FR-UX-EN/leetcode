/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    const ss = s.split('').sort().join();
    const tt = t.split('').sort().join();

    return ss === tt
};


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram2 = function (s, t) {

    if (s.length !== t.length) {
        return false;
    }

    const charArr = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        charArr[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    for (let i = 0; i < s.length; i++) {
        charArr[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }

    return charArr.every((val) => val === 0)
};