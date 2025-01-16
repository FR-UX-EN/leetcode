/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map1 = function (arr, fn) {
    let copy = [];

    arr.forEach((item, i) => {
        copy.push(fn(item, i));
    });

    return copy
};

// using Array.map
var map2 = (arr, fn) => (
    arr.map((item, i) => fn(item, i))
)

// using for loop
var map3 = function (arr, fn) {
    const copy = [];
    for (let i = 0; i < arr.length; i++) {
        copy.push(fn(arr[i], i))
    }
    return copy
}