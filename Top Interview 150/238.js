/**
 * @param {number[]} nums
 * @return {number[]}
 */

// My first solution
// O(n) in space complexity
var productExceptSelf = function (nums) {
    const prefix = [1];
    const suffix = [1];
    const output = [];

    for (let i = 0; i < nums.length - 1; i++) {
        prefix.push(prefix[i] * nums[i]);
    }

    for (let i = 0; i < nums.length - 1; i++) {
        suffix.push(suffix[i] * nums[nums.length - 1 - i]);
    }

    for (let i = 0; i < nums.length; i++) {
        output.push(prefix[i] * suffix[nums.length - 1 - i]);
    }

    return output;
};



/**
 * @param {number[]} nums
 * @return {number[]}
 */

// My second solution
// O(1) in space complexity
// Compute prefix products directly in output
// Compute suffix products on the fly using a variable
var productExceptSelf = function (nums) {
    const output = new Array(nums.length).fill(1);

    for (let i = 1; i < nums.length; i++) {
        output[i] = output[i - 1] * nums[i - 1];
    }

    let suffix = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        output[i] *= suffix;
        suffix *= nums[i];
    }

    return output;
};
