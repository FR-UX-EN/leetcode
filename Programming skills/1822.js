/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
    let productOfArr = nums.reduce((acc, cur) => acc * cur, 1);

    if (productOfArr > 0) {
        return 1
    } else if (productOfArr < 0) {
        return -1;
    } else {
        return 0;
    }
};