/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

// implementing Math.pow function on my own.
// The key point is to optimize the speed by myPow(x * x, n / 2) -> this slashed the time and memory to half.

var myPow = function (x, n) {
    if (n === 0) return 1;
    if (n < 0) return 1 / myPow(x, -n);
    if (n % 2 === 0) return myPow(x * x, n / 2)
    return x * myPow(x, n - 1);
};