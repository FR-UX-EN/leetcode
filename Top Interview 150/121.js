/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let low = prices[0];
    let result = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < low) {
            low = prices[i];
        }
        result = Math.max(result, prices[i] - low);
    }
    return result;
};