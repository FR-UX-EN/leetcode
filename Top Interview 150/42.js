/**
 * @param {number[]} height
 * @return {number}
 */

// I barely solved this problem
// Need a more efficient, faster solution
var trap = function (height) {
    let n = height.length;
    let globalTotalHeight = 0;

    let rightMax = new Array(n).fill(0);
    rightMax[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(height[i], rightMax[i + 1]);
    }

    for (let i = 0; i < height.length - 1; i++) {
        if (height[i] === 0) continue;

        let localTotalHeight = 0;
        let found = false;

        for (let j = i + 1; j < height.length; j++) {
            if (height[j] >= height[i]) {
                globalTotalHeight += localTotalHeight;
                i = j - 1;
                found = true;
                break;
            } else {
                localTotalHeight += (height[i] - height[j]);
                // optimization: early break if rightMax[j] < height[i]
                if (rightMax[j] < height[i]) break;
            }
        }
        if (!found) {
            let maxH = rightMax[i + 1];
            for (let j = i + 1; j < n; j++) {
                if (height[j] === maxH) {
                    for (let k = i + 1; k < j; k++) {
                        globalTotalHeight += (maxH - height[k]);
                    }
                    i = j - 1;
                    break;
                }
            }
        }
    }

    return globalTotalHeight;
};