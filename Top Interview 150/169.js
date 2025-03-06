/**
 * @param {number[]} nums
 * @return {number}
 */

// my solution
var majorityElement = function (nums) {
    nums.sort((a, b) => a - b);

    return nums[Math.floor(nums.length / 2)]
};


// This approach is genius.
// I couldn't think of this solution.
var majorityElement = function (nums) {
    let count = 0,
        condidate = null;

    for (let i = 0; i < nums.length; i++) {
        if (count == 0) {
            condidate = nums[i];
            count++;
        } else {
            if (condidate == nums[i]) count++;
            else count--;
        }
    }
    return condidate;
};