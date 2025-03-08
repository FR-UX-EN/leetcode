/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function partialReverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]
        start++;
        end--;
    }
}

var rotate = function (nums, k) {
    k = k % nums.length;
    nums.reverse();
    partialReverse(nums, 0, k - 1);
    partialReverse(nums, k, nums.length - 1);
};