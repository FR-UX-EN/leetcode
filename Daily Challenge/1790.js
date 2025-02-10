/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
    if (s1 === s2) {
        return true;
    }
    let notIdentical = [];
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            notIdentical.push(i)
        }
    }
    if (notIdentical.length > 2) {
        return false;
    }
    let [a, b] = notIdentical;
    if (s1[a] !== s2[b] || s1[b] !== s2[a]) {
        return false;
    }

    return true;
};