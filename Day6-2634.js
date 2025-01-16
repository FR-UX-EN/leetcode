/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    const copy = []

    arr.forEach((item, i) => {
        if (fn(item, i)) {
            copy.push(item)
        }
    })

    return copy;
};