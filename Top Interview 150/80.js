/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let reader = 0, writer = 0;
    let counter = 0;
    let cur = -Infinity;
    let result = 0;

    while (reader < nums.length) {
        if (cur !== nums[reader]) {
            nums[writer++] = nums[reader];
            cur = nums[reader++];
            counter = 1;
            result++;
        } else if (cur === nums[reader] && counter < 2) {
            nums[writer++] = nums[reader++];
            counter++;
            result++;
        } else if (cur === nums[reader] && counter >= 2) {
            counter++;
            reader++;
        }
    }

    return result;
};