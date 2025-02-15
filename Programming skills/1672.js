/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    return accounts.reduce((maxHealth, account) =>
        Math.max(maxHealth, account.reduce((i, j) => i + j, 0))
        , -Infinity)
};