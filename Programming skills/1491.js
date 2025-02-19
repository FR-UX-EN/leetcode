/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
    let min = Infinity;
    let max = -Infinity;
    let total = 0;

    salary.forEach((val) => {
        if (val < min) {
            min = val;
        }
        if (val > max) {
            max = val;
        }
        total += val
    })

    return (total - min - max) / (salary.length - 2)
};