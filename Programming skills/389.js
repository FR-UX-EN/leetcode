/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    sArr = s.split('').sort(); tArr = t.split('').sort()

    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i] !== tArr[i]) {
            return tArr[i];
        }
    }

    return tArr[tArr.length - 1];
};

// This was super unique answer I found.
// adding all numbers of each character
// and get the difference between the two totals
// Review: String.charCodeAt(), String.fromCodePoint();
var findTheDifference2 = function (s, t) {
    if (s.length == 0) return t;

    let calc = (item) => {
        let total = 0;
        for (let i = 0; i < item.length; i++) {
            total += item[i].charCodeAt(0);
        }
        return total;
    }

    let sum = calc(t) - calc(s);
    return String.fromCodePoint(sum);
}; 