/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/*
    my first solution: using swap -> slow solution
*/
function swap(it, nums) {
    let leftPointer = it;
    for (; leftPointer < nums.length - 1; leftPointer++) {
        const copy = nums[leftPointer + 1];
        if (copy !== 0) {
            nums[leftPointer + 1] = nums[leftPointer];
            nums[leftPointer] = copy;
        }
    }
}

var moveZeroes = function (nums) {
    if (nums.length <= 1) {
        return;
    }

    let rightPointer = nums.length - 1;
    nums.push(0);
    for (let i = rightPointer; i >= 0; i--) {
        if (nums[i] === 0) {
            swap(i, nums);
        }
    }
    nums.pop();
};

// my second solution
// counted the number of zero from index 0;

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let zeroes = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[zeroes] = nums[i];
            zeroes++;
        }
    }

    for (let i = zeroes; i < nums.length; i++) {
        nums[i] = 0;
    }
};


// another solution
// using destructuring

var moveZeroes = function (nums) {
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            [nums[i], nums[count]] = [nums[count], nums[i]];
            count++;
        }
    }
};