/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    if (num1 === '0' || num2 === '0') return '0';

    const m = num1.length, n = num2.length;
    const resultArr = new Array(m + n).fill(0);

    // Loop from rightmost digit to leftmost for each number.
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const product = parseInt(num1[i]) * parseInt(num2[j]);
            const sum = product + resultArr[i + j + 1];
            resultArr[i + j + 1] = sum % 10;
            resultArr[i + j] += Math.floor(sum / 10);
        }
    }

    // Remove any leading zeros.
    while (resultArr[0] === 0) {
        resultArr.shift();
    }

    return resultArr.join('');
};
