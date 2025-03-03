/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// using JS array.sort() method
// Time complexity is O((m+n)log(m+n))
var merge = function (nums1, m, nums2, n) {
    for (let i = m; i < m + n; i++) {
        nums1[i] = nums2[i - m];
    }

    nums1.sort((a, b) => a - b);
};

// using two pointer
var merge = function (nums1, m, num2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (j >= 0) {
        if (i >= 0 && nums1[i] > num2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = num2[j--];
        }
    }
}

