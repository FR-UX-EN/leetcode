/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let carry = 0;
    let [i, j] = [a.length - 1, b.length - 1];
    let result = '';
    while (i >= 0 || j >= 0 || carry) {
        let sum = carry;
        if (i >= 0) sum += parseInt(a[i])
        if (j >= 0) sum += parseInt(b[j])

        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);

        i--;
        j--;
    }

    return result;
};