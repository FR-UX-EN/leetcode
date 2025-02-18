/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
    let sub = high - low + 1;

    if (sub % 2 === 0) {
        return sub / 2;
    } else {
        if (low % 2 === 0) {
            return Math.floor(sub / 2);
        } else {
            return Math.ceil(sub / 2);
        }
    }
};