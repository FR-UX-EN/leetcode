/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let gasTotal = 0, costTotal = 0, start = 0, tank = 0;
    for (let i = 0; i < gas.length; i++) {
        gasTotal += gas[i];
        costTotal += cost[i];
        let balance = gas[i] - cost[i];
        tank += balance;

        if (tank < 0) {
            start = i + 1;
            tank = 0;
        }
    }

    if (gasTotal < costTotal) {
        return -1;
    }

    return start;
};