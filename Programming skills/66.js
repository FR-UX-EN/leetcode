/**
 * @param {number[]} digits
 * @return {number[]}
 */

/*
    My initial solution
    used BigInt module but way slower than the programatic approach.
 */
var plusOne = function (digits) {
    let str = BigInt(digits.join(''));
    let number = str + BigInt(1);
    str = String(number);
    return str.split('').map(val => +val);
};


/*
    Checking the last digit is whether 9 or not is the key to solve this problem.
 */
var plusOne2 = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i] += 1;
        if (digits[i] > 9) {
            digits[i] = 0;
        } else {
            return digits;
        }
    }
    digits.unshift(1);
    return digits
};