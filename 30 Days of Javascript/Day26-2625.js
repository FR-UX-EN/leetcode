/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */

/*
    Very good problem to practice recursion.
    The idea is to flatten the array by reducing the depth by 1 each time.
    Flattening the returned array from the recursion was the key point to solve this problem.
    I used global variable to store the result but ended up with a side effect.
    Thus, I wasn't able to solve this problem in the first attempt.
*/

var flat = function (arr, n) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) && n > 0) {
            result.push(...flat(arr[i], n - 1));
        } else {
            result.push(arr[i]);
        }
    }

    return result;
};

/*
    You can also solve this problem by passing the result array as an argument to the recursive function.
*/
var flat2 = function (arr, n, result = []) {

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) && n > 0) {
            flat(arr[i], n - 1, result);
        } else {
            result.push(arr[i]);
        }
    }

    return result;
};