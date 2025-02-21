/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    const wallet = {
        5: 0,
        10: 0,
        20: 0,
    }

    for (let i = 0; i < bills.length; i++) {
        const el = bills[i]
        wallet[el]++;
        if (el === 10) {
            if (wallet[5] < 1) {
                return false;
            } else {
                wallet[5]--;
            }
        } else if (el === 20) {
            if (wallet[10] > 0 && wallet[5] > 0) {
                wallet[10]--;
                wallet[5]--;
                continue;
            }
            if (wallet[5] >= 3) {
                wallet[5] -= 3;
                continue;
            }
            return false;
        }
    }

    return true;
};