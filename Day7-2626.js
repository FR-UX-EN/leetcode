/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    let num = init;

    nums.forEach((item, i) => {
        num = fn(num, item)
    })

    return num
};