/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// Using two pointer
// i: starts from the left, j: starts from the right
var removeElement = function (nums, val) {
    let j = nums.length - 1;
    for (let i = 0; i < nums.length; i++) {
        while (nums[j] === val) {
            nums[j--] = -1;
        }
        if (nums[i] === val) {
            let copy = nums[j];
            nums[j--] = -1;
            nums[i] = copy;
        }
    }

    return j + 1;
};


/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// using two pointer
// Both starts at the left, but reader passes if it encounters the val
// The writer writes when the reader doesn't have the val
// quite creative approach. I always thought two pointers should start at the different end.
let removeElement = (nums, val) => {
    let reader = 0;
    let writer = 0;

    while (reader < nums.length) {
        if (nums[reader] === val) {
            reader++;
        } else {
            nums[writer] = nums[reader];
            reader++;
            writer++;
        }
    }

    return writer;
};