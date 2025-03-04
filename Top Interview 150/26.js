/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let reader = 0;
    let writer = 0;
    let cur = -101;

    while (reader < nums.length) {
        if (nums[reader] === cur) {
            reader++;
        } else {
            nums[writer++] = nums[reader];
            cur = nums[reader];
        }
    }

    return writer;
};